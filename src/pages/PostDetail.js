import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { Container, Title } from "@mantine/core";
import { getPostDetail } from "../services/posts";
import { ErrorPage } from "./Error";
import { ButtonDelete } from "../components/ButtonDelete";

function useDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [value, setvalue] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  async function getDetail() {
    try {
      setloading(true);
      const value = await getPostDetail(id);
      setvalue(value);
    } catch (e) {
      seterror(id);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return [value, error, loading];
}

export function PostDetail() {
  const [post, error, loading] = useDetail();
  console.log("post: ", post);

  if (error) {
    return <ErrorPage>{`Post ${error} no encontrado`}</ErrorPage>;
  } else {
    if (loading) {
      return (
        <Container>
          <Title>Cargando información...</Title>
        </Container>
      );
    } else {
      return (
        <Container>
          <Title order={1}>{post.title}</Title>
          <p>{post.body}</p>
          <ButtonDelete>{post.id}</ButtonDelete>
          <ButtonBackToHome />
        </Container>
      );
    }
  }
}
