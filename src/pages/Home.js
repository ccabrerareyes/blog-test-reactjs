import React, { Component } from "react";
import { Container, Col, Grid, Title, Space } from "@mantine/core";
import { PostInput } from "../components/PostInput";
import { PostList } from "../components/PostList";

export class Home extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const sessionPost = JSON.parse(sessionStorage.getItem("posts") || "[]");
        const postList = [...posts, ...sessionPost];
        const sortedPost = postList.sort((item) => item.id);

        this.state.post = sortedPost;
        this.setState({ posts: sortedPost });
        console.log(posts);
      });
  };

  handleCallback = (childData) => {
    this.setState({ post: [...[childData], ...this.state.post] });
  };

  render() {
    console.log("this.state.post: ", this.state.post);
    return (
      <Container>
        <Title>Blog</Title>
        <Space h="md" />
        <Grid grow gutter="xl">
          <Col span={1}></Col>
          <Col span={10}>
            <PostInput updateList={this.handleCallback} />
          </Col>
          <Col span={1}></Col>
          <PostList posts={this.state.post} />
        </Grid>
      </Container>
    );
  }
}
