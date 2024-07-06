import { type AppType } from "@server/api/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { hc } from "hono/client";
import { useAccessToken } from "./auth";
import { InsertShipment, Shipment } from "@server/schemas/shipment";

export const client = hc<AppType>("/api");

export function useGetShipments() {
  const { data: accessToken } = useAccessToken();

  return useQuery({
    queryKey: ["shipments"],
    enabled: !!accessToken,
    queryFn: async () =>
      client.v1.shipments
        .$get(
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => response.json()),
  });
}

export function useGetShipment(id?: string) {
  const { data: accessToken } = useAccessToken();

  return useQuery({
    queryKey: ["shipment", id],
    enabled: id !== undefined,
    retry: false,
    queryFn: async () =>
      client.v1.shipments[":id{\\d+}"]
        .$get(
          {
            param: {
              id: `${id}`,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        // Typing seems to be an issue possibly due to the route params, response is unknown.
        .then((response) => response.json() as Promise<Shipment | undefined>),
  });
}

export function useCreateShipment({ onSuccess }: { onSuccess?: () => void }) {
  const { data: accessToken } = useAccessToken();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createShipment"],
    mutationFn: async (shipment: InsertShipment) => {
      await queryClient.ensureQueryData({ queryKey: ["shipments"] });
      return client.v1.shipments
        .$post(
          {
            json: shipment,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => response.json());
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["shipments"], (old: Shipment[]) => {
        return [...old, data];
      });
      onSuccess?.();
    },
  });
}
