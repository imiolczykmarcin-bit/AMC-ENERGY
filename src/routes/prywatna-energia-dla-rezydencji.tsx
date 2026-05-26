import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/prywatna-energia-dla-rezydencji")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
