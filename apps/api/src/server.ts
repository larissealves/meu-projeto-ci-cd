import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return {
    status: "ok",
    environment: process.env.NODE_ENV ?? "unknown",
  };
});

console.log({
  nodeENV: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
});

const port = 3000;

app.listen({ port }).then(() => {
  console.log(`API running on http://localhost:${port}`);
});