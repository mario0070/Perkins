import React from 'react'
import { Link, redirect } from 'react-router-dom'
import "/public/css/landingpage.css"
import logo from "/img/logo.png"
import logox1 from "/img/greenlogo.png"
import Footer from '../../components/footer'
import NavBar from '../../components/navBar'

export default function Index() {


  return (
    <div className='homepage'>
    <NavBar/>
    
    <div className="body mt-4">
        <div>
          <h2 className="fw-bold text-center mt-5">Fall in love with <span className="text-danger">amazing</span> aromas</h2>
          <div className="d-flex flex-wrap p-4">

            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/articles/blog4_1024x1024_6e921ee2-7c22-4585-b5d6-05544deb68ae.jpg?crop=center&height=1024&v=1672717028&width=1024" alt="" />
              </div>
              <div className="text-lay text-white">
                <h3 className="text-start mt-5 mb-3">Black Opium Eau De</h3>
                <p className="text-start">Availability: In Stock</p>
                <p className="text-start">Brand: Sunglass</p>
                <p className="text-start">Capacity: 200ml, 250ml</p>
                <h2 className="text-start text-warning fw-bold">₦40,000</h2>
                <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
                <h3 className="text-start mt-5 mb-3">Chanel N°5 Eau De</h3>
                <p className="text-start">Availability: In Stock</p>
                <p className="text-start">Brand: Bag</p>
                <p className="text-start">Capacity: 150ml, 200ml</p>
                <h2 className="text-start text-warning fw-bold">₦23,000</h2>
                <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1672908689" alt="" />
              </div>
              <div className="text-lay">
                <div className="mx-auto">
                    <h3 className="text-start mt-5 mb-3">Angel Natural Refillable</h3>
                    <p className="text-start">Availability: In Stock</p>
                    <p className="text-start">Brand: Sunglass</p>
                    <p className="text-start">Capacity: 200ml, 250ml</p>
                    <h2 className="text-start text-warning fw-bold">₦80,000</h2>
                    <a href="/product/id" className="mt-3 fw-semibold btn-warning btn">View Product</a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-center mt-5">Hot <span className="text-danger">Deals</span></h2>
          <p className="text-center">Don't Miss Today's Featured Deals</p>
          <div className="d-flex hot flex-wrap p-4">
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay text-white">
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
              </div>
            </div>
            
            <div className="section2 p-0">
              <div className="img-bg">
                <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675" alt="" />
              </div>
              <div className="text-lay">
                <div className="mx-auto">
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <Footer/>
        

    </div>
   
  
    </div>
  )
}
