import React, { Component } from "react";
import { PostCard } from "./PostCard";
import { Col } from "@mantine/core";

export class PostList extends Component {
  posts = [1, 2, 3, 4, 5, 6, 7];
  render() {
    return this.posts.map((post, index) => {
      return (
        <Col span={2} key={index}>
          <PostCard />
        </Col>
      );
    });
  }
}
