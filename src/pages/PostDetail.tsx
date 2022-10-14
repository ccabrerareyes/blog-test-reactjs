import * as React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";
// import { Post } from "../Interfaces/Post";

export class PostDetail extends React.Component {
  // state: Post = {
  //   id: 0,
  //   title: "",
  //   body: "",
  //   userId: 0,
  // };
  async componentDidMount() {}

  fetchPostDetail = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => this.setState(post));
  };

  render() {
    return (
      <div>
        <Title order={1}>Detalle Post</Title>
        <ButtonBackToHome />
      </div>
    );
  }
}
