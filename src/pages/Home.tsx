import * as React from "react";
import { Container, Col, Grid, Title, Space } from "@mantine/core";
import { PostInput } from "../components/PostInput";
import { PostList } from "../components/PostList";

export class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>Blog</Title>
        <Space h="md" />
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
