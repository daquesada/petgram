import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { Button } from "../components/Button";
export function User() {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>Hello there!</h1>
      <Button onClick={removeAuth}>Logout</Button>
    </Fragment>
  );
}
