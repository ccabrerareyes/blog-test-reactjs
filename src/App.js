import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PostDetail } from "./pages/PostDetail";
import { ErrorPage } from "./pages/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<NotFound />} />
            <Route
              path="/detail"
              element={<PostDetail />}
              errorElement={<NotFound />}
            />
            <Route
              path="/error"
              element={<ErrorPage />}
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
