import { Box, Center, Heading, Link, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HackerNewsLinkHolder } from "../types/hackernews";

type PageProps = {
  hackerNewsLinks: HackerNewsLinkHolder[];
};

export const HackerNewsFeed: React.FC<PageProps> = ({ hackerNewsLinks }) => {
  return (
    <Box p="2" color="#222834">
      <Heading p="2" fontSize="xl">
        <Link href="https://news.ycombinator.com/ask">Hacker News Feed</Link>
      </Heading>
      <Box w="80%" bg="white" height="1px" ml="2" bgColor="gray.200" />
      {hackerNewsLinks ? (
        hackerNewsLinks.map((link) => (
          <Box key={link.title} p="2" pr="4">
            <Link href={link.url}>
              <Heading fontSize="md">{link.title}</Heading>
            </Link>
          </Box>
        ))
      ) : (
        <Center minH="300px">
          <Spinner color="white" />
        </Center>
      )}
    </Box>
  );
};
