import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import numeral from 'numeral';

export default function ProductListing() {
  const [product, setproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [initialcategory, setinitialcategory] = useState("Select Category");

  const selectCat = (cat) => {
    setinitialcategory(cat)
  }

  useEffect(() => {
    setcategory(["Floral", "Fruity", "Oriental", "Woody", "Citrus", "Gourmand"])
    axios.get("/product")
    .then(res => {
        console.log(res)
        setproduct(res.data.data)
    })
    .catch(error => {
        console.log(error)
    })

  }, [product]);

  return (
    <div className="single listing homepage">
      <NavBar/>

      <div className="body">
        <div>
          <div className="text-center mt-5">
            <div class="dropdown">
              <button type="button" class="btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                {initialcategory}
              </button>
              <ul class="dropdown-menu">
                {
                  category.map(val => {
                    return (
                      <li onClick={() => selectCat(val)}><a class="dropdown-item" href="#">{val}</a></li>
                    )
                  })
                }
              </ul>
            </div>
            <input type="text"  placeholder="search product by categories, year, price, brand etc"/>
            <button className="search">Search</button>
          </div>

            {
                product.length == 0 &&
                <>
                    <div className="text-center mt-5" style={{marginBottom: "20em"}}>
                        <div className="spinner-border text-center text-danger"></div>
                    </div>
                </>
            }

          <div className="d-flex flex-wrap p-4">
            {
              product.map(val => {
                return(
                  <div className="section2 p-0">
                    <div className="img-bg">
                      <img src={val.image} alt="" />
                    </div>
                    <div className="text-lay text-white">
                      <h5 className="text-start fw-bold mt-2 mb-3 text-capitalize text-truncate">{val.name}</h5>
                      <p className="text-start mb-1">Availability: In Stock</p>
                      <p className="text-start mb-1">Category: {val.category}</p>
                      <p className="text-start">Capacity: {val.capacity}ml</p>
                      <h2 className="text-start fw-bold">₦{numeral(val.price).format("0,0")}</h2>
                      <div className="d-flex">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </div>
                      <a href={"/product/" + val._id} className="mt-3 fw-semibold btn-warning btn">View Product</a>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

        
        

    </div>

      <Footer/>
    </div>
  );
}
