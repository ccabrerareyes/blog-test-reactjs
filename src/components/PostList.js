import React, { Component } from "react";
import { PostCard } from "./PostCard";
import { Col } from "@mantine/core";

export class PostList extends Component {
  render() {
    const { posts } = this.props;
    console.log("this.props: ", this.props);
    console.log("posts: ", posts);
    return posts.map((post, index) => {
      return (
        <Col span={3} key={index}>
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
