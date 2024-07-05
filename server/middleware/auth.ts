import { bearerAuth } from "hono/bearer-auth";
import { createMiddleware } from "hono/factory";
import { createRemoteJWKSet, jwtVerify } from "jose";

export type AuthedRoutes = {
  Variables: { user?: string };
};

export const requireAuth = createMiddleware(
  bearerAuth({
    verifyToken: async (token, c) => {
      const jwks = new URL("https://auth.coulsy.dev/oidc/jwks");
      const { payload } = await jwtVerify(
        token,
        // @ts-ignore - Some URL incompatibilities with Bun?
        createRemoteJWKSet(jwks),
        {
          issuer: "https://auth.coulsy.dev/oidc",
          // TODO: This should be configurable
          audience: "http://localhost:3000",
        }
      );
      const { sub } = payload;

      c.set("user", sub);

      return !!sub;
    },
  })
);
