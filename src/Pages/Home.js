import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCard";
import { Layout } from "../components/Layout";

export const Home = ({ id }) => {
  return (
    <Layout title="Petgram- Home" subtitle="there are a lot of photos">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
