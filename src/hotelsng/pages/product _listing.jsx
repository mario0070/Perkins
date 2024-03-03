import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

export default function ProductListing() {
  const [product, setproduct] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="single homepage">
      <NavBar/>


      <Footer/>
    </div>
  );
}
