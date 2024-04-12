// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create"
import Edit from "./components/Edit"


function App() {
  const { search, pathname } = useLocation();
  return (
    <div className="h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link className="text-2xl text-red-400 absolute left-[23%] top-[5%]" to="/">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App