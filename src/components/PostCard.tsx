import * as React from "react";
import { Card, Image, Text } from "@mantine/core";
import { ButtonViewDetail } from "./ButtonViewDetail";
import { Post } from "./../Interfaces/Post";

export class PostCard extends React.Component<Post> {
  render(): React.ReactNode {
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

        {/* <Group position="apart" mt="md" mb="xs"> */}
        <Text weight={500}>{title}</Text>
        {/* </Group> */}

        <Text size="sm" color="dimmed">
          {body.substring(0, 20)} ...
        </Text>

        <ButtonViewDetail>{id}</ButtonViewDetail>
      </Card>
    );
  }
}
