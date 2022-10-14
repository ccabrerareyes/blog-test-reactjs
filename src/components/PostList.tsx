import * as React from "react";
import { PostCard } from "./PostCard";
import { Col } from "@mantine/core";
import { Post, PostListState } from "./../Interfaces/Post";

export class PostList extends React.Component {
  state: PostListState = {
    posts: [],
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
        const sortedPost = postList.sort((item: Post) => item.id);
        this.setState({ posts: sortedPost });
        console.log(posts);
      });
  };

  render() {
    return this.state.posts.map((post, index) => {
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
