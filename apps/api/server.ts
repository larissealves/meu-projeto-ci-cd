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

const port = 3000;

app.listen({ port }).then(() => {
  console.log(`API running on http://localhost:${port}`);
});