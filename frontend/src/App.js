import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { connect } from 'react-redux';

import SliderHome from "./components/SliderHome";
import BlogHome from "./pages/Home";
import Subscribe from "./components/Subscribe";

import DetailBlog from "./pages/DetailBlog";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import PageLogin from "./pages/Login";
import PageRegister from "./pages/Register";

import PageInputBlog from "./pages/BlogInput";
import BlogUsers from "./pages/BlogUsers";
import PageEditBlog from "./pages/BlogEdit";

import UplodFile from "./pages/UplodFile";
// import BlogStack from "./pages/BlogStack";
import FinalProject from "./pages/finalProject";

import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <SliderHome />
          <BlogHome />
          <Subscribe />
        </Route>

        <Route exact path="/blog/:id">
          <DetailBlog />
        </Route>

        <Route exact path="/final-project">
          <FinalProject />
        </Route>

        {props.isLogin ? (
          <Fragment>
            <Route exact path="/blog-users">
              <BlogUsers />
            </Route>
            <Route exact path="/input-blog">
              <PageInputBlog />
            </Route>
            <Route exact path="/edit-blog/:id">
              <PageEditBlog />
            </Route>
            <Route exact path="/input-file">
              <UplodFile />
            </Route>
            {/* <Route exact path="/blog-stack">
              <BlogStack />
            </Route> */}
          </Fragment>
        ) : (
          <Fragment>
            {/* // jika belum login */}
            <Route exact path="/login">
              <PageLogin />
            </Route>

            <Route exact path="/register">
              <PageRegister />
            </Route>
          </Fragment>
        )}
      </Switch>

      <Footer />
    </Router>
  );
}

// export default App;

const mapStateToProps = state => {
  return {
    isLogin: state.users.isLogin
  };
};

export default connect(mapStateToProps)(App);
