import { useEffect } from "react";
import { type AppType } from "@server/api/index";
import { hc } from "hono/client";
import { useQuery } from "@tanstack/react-query";

const client = hc<AppType>("http://localhost:5173/api");

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["shipments"],
    queryFn: async () =>
      client.v1.shipments.$get().then((response) => response.json()),
  });

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

export default App;
