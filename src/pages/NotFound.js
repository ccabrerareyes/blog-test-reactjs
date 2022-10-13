import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";

export const NotFound = () => (
  <div>
    <Title order={1}>404!</Title>
    <Title order={2}>No existe la página</Title>
    <ButtonBackToHome />
  </div>
);
