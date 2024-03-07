import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

export default function ProductListing() {
  const [product, setproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [initialcategory, setinitialcategory] = useState("Select Category");

  const selectCat = (cat) => {
    setinitialcategory(cat)
  }

  useEffect(() => {
    setcategory(["Floral", "Fruity", "Oriental", "Woody", "Citrus", "Gourmand"])
  }, []);

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

          <div className="d-flex flex-wrap p-4">

            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/articles/blog4_1024x1024_6e921ee2-7c22-4585-b5d6-05544deb68ae.jpg?crop=center&height=1024&v=1672717028&width=1024" alt="" />
              </div>
              <div className="text-lay text-white">
                <h5 className="text-start fw-bold mt-2 mb-3 text-truncate">Black Opium Eau De</h5>
                <p className="text-start mb-1">Availability: In Stock</p>
                <p className="text-start mb-1">Brand: Sunglass</p>
                <p className="text-start">Capacity: 200ml, 250ml</p>
                <h2 className="text-start fw-bold">₦40,000</h2>
                <div className="d-flex">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
                <h5 className="text-start fw-bold mt-2 mb-3 text-truncate">Chanel N°5 Eau De</h5>
                <p className="text-start mb-1">Availability: In Stock</p>
                <p className="text-start mb-1">Brand: Bag</p>
                <p className="text-start">Capacity: 150ml, 200ml</p>
                <h2 className="text-start fw-bold">₦23,000</h2>
                <div className="d-flex">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1672908689" alt="" />
              </div>
              <div className="text-lay">
                <div className="mx-auto">
                    <h5 className="text-start fw-bold mt-2 text-truncate mb-3">Angel Natural Refillable</h5>
                    <p className="text-start mb-1">Availability: In Stock</p>
                    <p className="text-start mb-1">Brand: Sunglass</p>
                    <p className="text-start">Capacity: 200ml, 250ml</p>
                    <h2 className="text-start fw-bold">₦80,000</h2>
                    
                  <div className="d-flex">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                    <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
                </div>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
                <h5 className="text-start mt-2 fw-bold mb-3 text-truncate">Chanel N°5 Eau De</h5>
                <p className="text-start mb-1">Availability: In Stock</p>
                <p className="text-start mb-1">Brand: Bag</p>
                <p className="text-start">Capacity: 150ml, 200ml</p>
                <h2 className="text-start fw-bold">₦23,000</h2>
                
                <div className="d-flex">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
              </div>
            </div>

          </div>
        </div>

        
        

    </div>

      <Footer/>
    </div>
  );
}
