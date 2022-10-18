import React, { Component } from "react";
import {
  Button,
  Container,
  Col,
  Grid,
  Title,
  Space,
  Pagination,
} from "@mantine/core";
import { PostInput } from "../components/PostInput";
import { PostList } from "../components/PostList";
import { getSessionStoragePosts, getDeletedIds } from "./../services/posts";
const PAGE_SIZE = 6;
export class Home extends Component {
  state = {
    post: [],
    activePage: 1,
    totalPages: 1,
    pagePosts: [],
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
        const pagePosts = sortedPost.slice(0, PAGE_SIZE);
        const totalPages = Math.round(sortedPost.length / PAGE_SIZE);
        this.setState({
          ...this.state,
          post: sortedPost,
          pagePosts,
          totalPages,
        });
      });
  };

  handleCallback = (childData) => {
    const posts = [...[childData], ...this.state.post];
    const pagePosts = posts.slice(0, PAGE_SIZE);
    this.setState({ post: posts, pagePosts });
  };

  setPage = (page) => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    const pagePosts = this.state.post.slice(from, to);
    this.setState({
      ...this.state,
      activePage: page,
      pagePosts,
    });
  };

  viewAllPosts = () => {
    this.setState({ ...this.state, pagePosts: this.state.post });
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
          <PostList posts={this.state.pagePosts} />
          <Col span={9}>
            <Space h="md" />
            <Pagination
              page={this.state.activePage}
              onChange={this.setPage}
              total={this.state.totalPages}
              siblings={1}
              initialPage={1}
            />
            <Space h="md" />
          </Col>
          <Col span={2}>
            <Button
              onClick={this.viewAllPosts}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Ver todos los posts
            </Button>
          </Col>
        </Grid>
      </Container>
    );
  }
}
