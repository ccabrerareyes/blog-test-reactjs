import * as React from "react";
import { Button, Input, Space, Textarea, Title } from "@mantine/core";
import { NewPost } from "./../Interfaces/Post";

export class PostInput extends React.Component {
  state: NewPost = {
    title: "",
    body: "",
    userId: 1,
  };

  handleChangeTitle = (e: any) => {
    this.setState({ title: e.target.value });
  };

  handleChangeBody = (e: any) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = () => {
    const { title, body, userId } = this.state;
    console.log("newPost: ", { title, body });

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
        const sessionPost = JSON.parse(sessionStorage.getItem("posts") || "[]");
        const savePost = [...sessionPost, json];
        sessionStorage.setItem("posts", JSON.stringify(savePost));
        console.log(json);
      });
  };

  render() {
    return (
      <div>
        <Title order={4}>Nuevo Post</Title>
        <Input placeholder="Titulo" onChange={this.handleChangeTitle} />
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
        />
        <Space h="lg" />
        <Button onClick={this.handleSubmit} color="teal">
          Guardar
        </Button>
      </div>
    );
  }
}
