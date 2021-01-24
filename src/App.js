import React, { useContext, lazy, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { Redirect, Router } from "@reach/router";
import { NavBar } from "./components/Navbar";
import { User } from "./Pages/User";
import { Favs } from "./Pages/Favs";
import { NotRegisterUser } from "./Pages/NotRegisterUser";
import { Context } from "./Context";
import { NotFound } from "./Pages/NotFound";

// const Favs = lazy(() => import("./Pages/Favs"));

export default function App() {
  const { isAuth } = useContext(Context);
  return (
    <Suspense>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Detail path="/detail/:detailId" />
        <Home path="/pet/:id" />
        {!isAuth && <NotRegisterUser path="/favs" />}
        {!isAuth && <NotRegisterUser path="/user" />}
        {/* {!isAuth && <Redirect from='/favs' to='/login'/>}
                {!isAuth && <Redirect from='/user' to='/login'/>} */}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
}
