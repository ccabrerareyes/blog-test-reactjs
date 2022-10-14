import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Title } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

export const PostDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(searchParams.get("id")); // 'name'
  let post = {};
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);
      post = data;
    });
  console.log("post: ", post);

  return (
    <div>
      <Title order={1}>Detalle Post</Title>
      <ButtonBackToHome />
    </div>
  );
};
