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

      return getAccessToken(import.meta.env.VITE_API_BASE_URL);
    },
  });
}
