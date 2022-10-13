import React, { Component } from "react";
import { Button, Space, Textarea } from "@mantine/core";

export class PostInput extends Component {
  state = {
    newPost: "",
  };

  _handleChange = (e) => {
    this.setState({ newPost: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { newPost } = this.state;
    console.log("newPost: ", newPost);
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <Textarea
          placeholder="Nuevo post ..."
          label="Nuevo Post"
          radius="xs"
          size="xl"
          withAsterisk
          autosize
          minRows={2}
          maxRows={4}
          onChange={this._handleChange}
        />
        <Space h="lg" />
        <Button onClick={this._handleSubmit} color="teal">
          Guardar
        </Button>
      </form>
    );
  }
}
