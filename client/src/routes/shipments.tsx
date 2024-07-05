import { useGetShipments } from "@/lib/api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipments")({
  component: Shipments,
});

function Shipments() {
  const { data, isLoading, error } = useGetShipments();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Shipments</h1>
      {data.map((shipment) => (
        <div key={shipment.id} className="border p-2 my-2">
          {JSON.stringify(shipment, null, 2)}
        </div>
      ))}
    </>
  );
}
