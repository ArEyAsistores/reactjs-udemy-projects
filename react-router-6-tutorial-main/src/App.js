import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";


function App() {

  const [ user, setUser ] = useState(null);

  return(
    <BrowserRouter>
     {/* <nav> Our Navbar </nav> */}
       <Routes>

        <Route path="/" element={<SharedLayout />}>
            <Route index                       element={<Home/>} />
            <Route path="/about"               element={<About/>} />
            <Route path="/products"            element={<Products/>} /> 
            <Route path="/products/:productId" element={<SingleProduct/>} />
            <Route path="/login"               element={<Login setUser = { setUser } />} />

            {/* Protected Route */}
            <Route path="/dashboard" element={
              <ProtectedRoute user = { user }>
                <Dashboard user = { user }/>
              </ProtectedRoute>
            } />
            
            {/* Error Page */}
            <Route path="*" element={<Error/>} />
        </Route>

      </Routes>
    {/* <footer>our footer</footer> */}
    </BrowserRouter>
  )
}

export default App;
