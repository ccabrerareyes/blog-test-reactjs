// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
// import Demo from "./modal";
// import AvatarLocal from "./profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PostDetail } from "./pages/PostDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
              errorElement={<NotFound />}
            />
            <Route
              exact
              path="/detail/:postId"
              element={<PostDetail />}
              errorElement={<NotFound />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
