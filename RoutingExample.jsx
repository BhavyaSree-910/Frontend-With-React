
import React from "react"; 
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
function Home() {
  return <h1>Welcome to Home page</h1>
}
function Products(){
  return(
    <div>
      <h1>Products Page</h1>
      <nav>
      <Link to="/Products/Electronics">Electronics</Link> | {" "}
      <Link to="/Products/Cars">Cars</Link>
      </nav>
      <Outlet />
    </div>
    
  )
}
function Electronics(){
  return(
    <div>
      <h1>Electronics Page</h1>
      <ul>
        <li>Mobile </li>
        <li>Laptop</li>
        <li>Tablet</li>
      </ul>
    </div>
  )
}
function Cars(){
  return(
    <div>
      <h1>Cars Page</h1>
      <ul>
        <li>BMW </li>
        <li>Audi</li>
        <li>Mercedes</li>
      </ul>
    </div>
  )
}
function About() {
  return <h1>Welcome to About page</h1>
}
function Contact() {
  return <h1>Welcome to Contact page</h1>
}
function RoutingExample() {
  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: "lightgray", padding: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Products">Products</Link> |{" "}
        <Link to="/Contact">Contact</Link> | {" "}
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />}>
          <Route path="Electronics" element={<Electronics />} />
          <Route path="Cars" element={<Cars />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutingExample;