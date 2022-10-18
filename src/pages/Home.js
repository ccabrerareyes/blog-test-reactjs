import React, { Component } from "react";
import { Container, Col, Grid, Title, Space } from "@mantine/core";
import { PostInput } from "../components/PostInput";
import { PostList } from "../components/PostList";
import { getSessionStoragePosts, getDeletedIds } from "./../services/posts";
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
        const sessionPost = getSessionStoragePosts();
        const postList = [...posts, ...sessionPost];
        let sortedPost = postList.sort((a, b) => {
          return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
        });
        const deletedIds = getDeletedIds();
        sortedPost = sortedPost.filter(
          (item) => !deletedIds.includes(String(item.id))
        );
        this.setState({ post: sortedPost });
      });
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
