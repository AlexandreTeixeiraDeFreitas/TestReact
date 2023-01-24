import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Todos from "./Todos";
import FavoriteColor from "./FavoriteColor";
import Counter from "./Counter";
import TodosApi from "./TodosApi";
import Homepage from "./Homepage";

function App() {
  const [data, setData] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());
    console.log(response);

    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home prop={data} />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="todos" element={<Todos />} />
            <Route path="favoritecolor" element={<FavoriteColor />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todosapi" element={<TodosApi />} />
            <Route path="*" element={<NoPage />} />
            <Route path="testApi" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
