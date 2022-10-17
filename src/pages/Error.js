import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";

export function Error({ children }) {
  return(<div>
    <Title order={1}>Error</Title>
    <Title order={2}>{children}</Title>
    <ButtonBackToHome />
  </div>);
}
