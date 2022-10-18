import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";

export function ErrorPage({ children }) {
  return (
    <div>
      <Title order={1}>{children ? "Error" : ""}</Title>
      <Title order={2}>{children ?? "Post Eliminado"}</Title>
      <ButtonBackToHome />
    </div>
  );
}
