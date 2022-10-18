import React from "react";
import { Button } from "@mantine/core";
import { deletePostById } from "./../services/posts";
import { useNavigate } from "react-router-dom";

export function ButtonDelete({ children }) {
  const id = children;
  const navigate = useNavigate();

  const deletePost = async (id) => {
    deletePostById(id);
    navigate("/error");
  };

  return (
    <div>
      <Button
        onClick={() => {
          deletePost(id);
        }}
        variant="light"
        color="red"
        fullWidth
        mt="md"
        radius="md"
      >
        Borrar Post
      </Button>
    </div>
  );
}
