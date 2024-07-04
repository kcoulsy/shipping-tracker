import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { LogtoProvider, LogtoConfig } from "@logto/react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const config: LogtoConfig = {
  endpoint: "https://auth.coulsy.dev/",
  appId: "rlwfencn9fku75g2k5ozp",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LogtoProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LogtoProvider>
  </React.StrictMode>
);
