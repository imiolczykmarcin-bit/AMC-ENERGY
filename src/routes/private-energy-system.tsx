import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/private-energy-system")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
