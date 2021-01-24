import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export default () => {
  return (
    <Layout title="Your Favorites" subtitle="your favs">
      <ListOfFavs />
    </Layout>
  );
};
