import React, { Fragment, useEffect, useState, memo } from "react";
import Category from "../Category/index";
import { Loading } from "../Loading";
import { Item, List } from "./styles";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://petgramserver-api.vercel.app/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
};

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      //clean up memory
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const list = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <Loading />
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
        )}
      </List>
    );
  };

  return (
    <Fragment>
      {list()}
      {showFixed && list(true)}
    </Fragment>
  );
};

export const ListOfCategories = memo(ListOfCategoriesComponent);
