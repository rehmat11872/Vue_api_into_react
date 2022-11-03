import React from "react";
import useDarkMode from "./components/use-dark-mode";
import cx from "classnames";
import "./App.css";

import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "rsuite/styles/index.less";

import IBIZAMAIN from "./pages/IBIZAMAIN";
import Detail_blog from "./components/Detail_blog";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className={cx("App", darkMode ? "darkMode" : "lightMode")}>
      <>
        <Router>
          <Routes>
            <Route path="/detail/:slug" element={<Detail_blog />} />
            <Route path="/" exact={true} element={<IBIZAMAIN />} />
          </Routes>
        </Router>
      </>
    </div>
    // <Grid container >
    //   <Grid item md={6} >
    //     <Slider />
    //   </Grid>
    // </Grid>
  );
}

export default App;
