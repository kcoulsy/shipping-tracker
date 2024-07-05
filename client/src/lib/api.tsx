import { type AppType } from "@server/api/index";
import { useQuery } from "@tanstack/react-query";
import { hc } from "hono/client";
import { useAccessToken } from "./auth";

export const client = hc<AppType>("http://localhost:5173/api");

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

  console.log(id);
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
        .then((response) => response.json()),
  });
}
