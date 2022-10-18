import React, { Component } from "react";
import { Button, Input, Space, Textarea, Title } from "@mantine/core";

export class PostInput extends Component {
  newId = 100;
  state = {
    title: "",
    body: "",
    userId: 1,
  };

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChangeBody = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = () => {
    const { title, body, userId } = this.state;
    this.inputBody.value = "";
    this.inputTitle.value = "";
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.newId = this.newId + 1;
        json = { ...json, id: this.newId };
        const sessionPost = JSON.parse(sessionStorage.getItem("posts") || "[]");
        const savePost = [...sessionPost, json];
        this.onTrigger(json);
        sessionStorage.setItem("posts", JSON.stringify(savePost));
      });
  };

  onTrigger = (eventData) => {
    this.props.updateList(eventData);
  };

  render() {
    return (
      <div>
        <Title order={4}>Nuevo Post</Title>
        <Input
          placeholder="Titulo"
          onChange={this.handleChangeTitle}
          ref={(el) => (this.inputTitle = el)}
        />
        <Space h="xs" />
        <Textarea
          placeholder="..."
          radius="xs"
          size="xl"
          withAsterisk
          autosize
          minRows={2}
          maxRows={4}
          onChange={this.handleChangeBody}
          ref={(el) => (this.inputBody = el)}
        />
        <Space h="lg" />
        <Button onClick={this.handleSubmit} color="teal">
          Guardar
        </Button>
      </div>
    );
  }
}
