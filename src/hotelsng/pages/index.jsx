import React, { useEffect, useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import "/public/css/landingpage.css"
import logo from "/img/logo.png"
import logox1 from "/img/greenlogo.png"
import Footer from '../../components/footer'
import NavBar from '../../components/navBar'
import axios from "../../utils/axios";
import numeral from 'numeral';

export default function Index() {
  const [product, setproduct] = useState([]);
  const [isloaded, setisloaded] = useState(false);

  useEffect(() => {
    axios.get("/product")
    .then(res => {
        setproduct(res.data.data)
        setisloaded(true)
    })
    .catch(error => {
        console.log(error)
    })

  }, []);


  return (
    <div className='homepage'>
    <NavBar/>

    <div className="body mt-4">
        <div>
          <h2 className="fw-bold text-center mt-5">Best Selling <span className="text-danger">Products</span></h2>
          <div className="d-flex flex-wrap p-4">

            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/articles/blog4_1024x1024_6e921ee2-7c22-4585-b5d6-05544deb68ae.jpg?crop=center&height=1024&v=1672717028&width=1024" alt="" />
              </div>
              <div className="text-lay text-white">
                <h3 className="text-start mt-4 mb-3">Black Opium Eau De</h3>
                <p className="text-start">Availability: In Stock</p>
                <p className="text-start">Brand: Sunglass</p>
                <p className="text-start">Capacity: 200ml, 250ml</p>
                <h2 className="text-start fw-bold">₦40,000</h2>
                
                <div className="d-flex mb-3">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <a href="/shop-perfumes" className="mt-3 fw-semibold btn-warning btn">View all Products</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
                <h3 className="text-start mt-4 mb-3">Chanel N°5 Eau De</h3>
                <p className="text-start">Availability: In Stock</p>
                <p className="text-start">Brand: Bag</p>
                <p className="text-start">Capacity: 150ml, 200ml</p>
                <h2 className="text-start fw-bold">₦23,000</h2>
                
                <div className="d-flex mb-3">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <a href="/shop-perfumes" className="mt-3 fw-semibold btn-warning btn">View all Products</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1672908689" alt="" />
              </div>
              <div className="text-lay">
                <div className="mx-auto">
                    <h3 className="text-start mt-4 mb-3">Angel Natural Refillable</h3>
                    <p className="text-start">Availability: In Stock</p>
                    <p className="text-start">Brand: Sunglass</p>
                    <p className="text-start">Capacity: 200ml, 250ml</p>
                    <h2 className="text-start fw-bold">₦80,000</h2>
                    
                    <div className="d-flex mb-3">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <a href="/shop-perfumes" className="mt-3 fw-semibold btn-warning btn">View all Products</a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-center mt-5">Hot <span className="text-danger">Deals</span></h2>
          <p className="text-center">Don't Miss Today's Featured Deals</p>
          {
            !isloaded &&
            <>
                <div className="text-center mt-5" style={{marginBottom: "20em"}}>
                    <div className="spinner-border text-center text-danger"></div>
                </div>
            </>
          }

          <div className="recommended">
            <div className="d-flex">
              {
                product.map(val => {
                  return(
                    <a href={"/product/" + val.name + "?uuid=" + val._id} className="box text-dark text-decoration-none">
                      <div className="img">
                        <img src={val.image} alt="" />
                      </div>
                      <div className="text">
                          <p className="name fw-bold text-capitalize mb-0">{val.name}</p>
                          <p style={{fontSize:"12px"}} className="cat mb-0">{val.category}</p>
                        <p style={{fontSize:"12px"}} className="text-start mb-1">{val.capacity}ml</p>
                          <h4 className="price text-danger fw-bold">₦{numeral(val.price).format("0,0")}</h4>
                          <a style={{fontSize:"10px"}} href={"/product/" + val.name + "?uuid=" + val._id} className="mt-2 mb-2 fw-semibold btn-danger btn">View Product</a>
                      </div>
                    </a>
                  )
                })
              }
            </div>

            <div className="d-flex mt-5">
              {
                product.reverse().map(val => {
                  return(
                    <a href={"/product/" + val.name + "?uuid=" + val._id} className="box text-dark text-decoration-none">
                      <div className="img">
                        <img src={val.image} alt="" />
                      </div>
                      <div className="text">
                          <p className="name fw-bold text-capitalize mb-0">{val.name}</p>
                          <p style={{fontSize:"12px"}} className="cat mb-0">{val.category}</p>
                        <p style={{fontSize:"12px"}} className="text-start mb-1">{val.capacity}ml</p>
                          <h4 className="price text-danger fw-bold">₦{numeral(val.price).format("0,0")}</h4>
                          <a style={{fontSize:"10px"}} href={"/product/" + val.name + "?uuid=" + val._id} className="mt-2 mb-2 fw-semibold btn-danger btn">View Product</a>
                      </div>
                    </a>
                  )
                })
              }
            </div>

          </div>
        </div>

        
        <Footer/>
        

    </div>
   
  
    </div>
  )
}
