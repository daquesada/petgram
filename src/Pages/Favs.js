import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export const Favs = () => {
  return (
    <Layout title="Your Favorites" subtitle="your favs">
      <ListOfFavs />
    </Layout>
  );
};
