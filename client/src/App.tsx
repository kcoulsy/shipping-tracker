import { useEffect } from "react";
import { type AppType } from "@server/api/index";
import { hc } from "hono/client";

const client = hc<AppType>("http://localhost:5173/api");

function App() {
  useEffect(() => {
    client.v1.shipments
      .$get()
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
