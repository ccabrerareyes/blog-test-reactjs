import React, { Component } from "react";
import { Container, Col, Grid, Title } from "@mantine/core";
import { PostInput } from "./../components/PostInput";
import { PostList } from "./../components/PostList";

export class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Blog</Title>
        <Grid grow gutter="xl">
          <Col span={1}></Col>
          <Col span={10}>
            <PostInput />
          </Col>
          <Col span={1}></Col>
          <PostList />
        </Grid>
      </Container>
    );
  }
}
