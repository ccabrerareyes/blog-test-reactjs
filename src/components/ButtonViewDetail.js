import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function ButtonViewDetail({ children }) {
  const navigate = useNavigate();
  const navigateToDetail = () => navigate(`/detail?id=${children}`);

  return (
    <Button
      onClick={navigateToDetail}
      variant="light"
      color="blue"
      fullWidth
      mt="md"
      radius="md"
    >
      Ver mas
    </Button>
  );
}
