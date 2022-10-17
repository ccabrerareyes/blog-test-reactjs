import React from "react";
import { Button } from "@mantine/core";
import { deletePostById } from './../services/posts'
import { useNavigate } from "react-router-dom";

export function ButtonDelete({children}) {
 const id = children;
 console.log('children: ', children);

 const ExectFunction = () => {
  console.log("ExectFunction")
  useNavigate(`/`);
 }

  return (
    <div>
    <Button
      onClick={ExectFunction()}
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
