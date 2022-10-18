import React, { Component } from "react";
import { PostCard } from "./PostCard";
import { Col } from "@mantine/core";

export class PostList extends Component {
  render() {
    const { posts } = this.props;
    return posts.map((post, index) => {
      return (
        <Col span={4} key={index}>
          <PostCard
            id={post.id}
            body={post.body}
            title={post.title}
            userId={post.userId}
          />
        </Col>
      );
    });
  }
}
