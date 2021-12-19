import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import { NiwaUvGraph } from "../components/NiwaUvGraph";
import { SearchBar } from "../components/SearchBar";
import { SwimmingPoolTimeTable } from "../components/SwimmingPoolTimeTable";
import { Time } from "../components/Time";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ColorModeSwitcher />
      <Grid
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem borderRadius="15" rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem bg="orange" colSpan={2} borderRadius="15" py="5">
          <NiwaUvGraph />
        </GridItem>
        <GridItem borderRadius="15" colSpan={2} bg="papayawhip">
          <SwimmingPoolTimeTable />
        </GridItem>
        <GridItem borderRadius="15" colSpan={4} rowSpan={1} bg="#006DFF">
          <SearchBar />
        </GridItem>
        <GridItem borderRadius="15" colSpan={1} bg="#9AB899">
          <Time />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
