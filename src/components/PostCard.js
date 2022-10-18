import React, { Component } from "react";
import { Card, Image, Text } from "@mantine/core";
import { ButtonViewDetail } from "./ButtonViewDetail";

export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;

    return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Text weight={500}>{title.substring(0, 20)} ...</Text>

        <Text size="sm" color="dimmed">
          {body.substring(0, 20)} ...
        </Text>

        <ButtonViewDetail>{id}</ButtonViewDetail>
      </Card>
    );
  }
}
