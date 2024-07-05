import { useLogto } from "@logto/react";
import { useQuery } from "@tanstack/react-query";

export function useAccessToken() {
  const { isAuthenticated, getAccessToken } = useLogto();

  return useQuery({
    queryKey: ["access-token", isAuthenticated],
    queryFn: async () => {
      if (!isAuthenticated) {
        return null;
      }

      return getAccessToken("http://localhost:3000");
    },
  });
}
