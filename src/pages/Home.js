import React, { Component, useEffect } from "react";
import { Container, Col, Grid, Title, Space } from "@mantine/core";
import { PostInput } from "../components/PostInput";
import { PostList } from "../components/PostList";
import { getAllPosts } from './../services/posts';
export class Home extends Component {
// export function Home() {
  state = {
    post: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }
  // useEffect( () => {
  //   fetchPosts();
  // })

  fetchPosts = () => {
      const sortedPost = getAllPosts();
      this.setState({ post: sortedPost });
  };

  handleCallback = (childData) => {
    this.setState({ post: [...[childData], ...this.state.post] });
  };

  render() {
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
