import React, { Component } from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";

export class PostDetail extends Component {
  render() {
    return (
      <div>
        <Title order={1}>Detalle Post</Title>
        <ButtonBackToHome />
      </div>
    );
  }
}
