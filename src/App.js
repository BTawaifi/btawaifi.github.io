import React, { lazy, Suspense } from "react";
import "./App.css";
import "intersection-observer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactLoading from "react-loading";
import "./index.css";

const HomeRoute = lazy(() => import("./routes/HomeRoute"));
const AnimeRoute = lazy(() => import("./routes/AnimeRoute"));

function App() {
  return (
    <HashRouter basename="/" className="App">
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={
          <div className="react-loading">
            <ReactLoading type={"bars"} color={"#fff"} height={"20%"} />
          </div>}>
          <Switch key={window.location.pathname}>
            <Route exact path="/">
              <HomeRoute />
            </Route>
            <Route exact path="/btanime">
              <AnimeRoute />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </HashRouter>
  );
}
export default App;
