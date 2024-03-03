import React from 'react'
import { Link, redirect } from 'react-router-dom'
import "/public/css/landingpage.css"
import logo from "/img/logo.png"
import logox1 from "/img/greenlogo.png"
import Footer from '../../components/footer'

export default function Index() {


  return (
    <div className='homepage'>
    <div className="content">
     <div className="header d-flex mt-2">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" className='' />
            <h2 className='fw-bold text-center text-white'>Sproutt</h2>
          </a>
        </div>

        <div className="open_canvas"  data-bs-toggle="offcanvas" data-bs-target=".show-sidebar">
          <i className="fa-solid fa-bars"></i>
          Menu
        </div>
        
          <div className="offcanvas offcanvas-start show-sidebar">
              <div className="img text-center mt-3">
                <a href="/">
                  <h5 className='text-white'>
                      <img src={logo} alt="" />
                      Sproutt
                  </h5>
                </a>
              </div>
              <nav className="navbar mt-3 navbar-expand-sm navbar-light">
                  <div className="w-100">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link" to="/"><i className="fa-solid fa-bars"></i> Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/dashboard"><i className="fa-solid fa-bars"></i> Dashboard</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/shop-perfumes"><i className="fa-solid fa-bars"></i> Shop Perfumes</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/login"><i className="fa-solid fa-bars"></i> Login</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/signup"><i className="fa-solid fa-bars"></i> Sign up</Link>
                          </li>
                      </ul>
                  </div>
              </nav>

              <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
                  <div className="w-100">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>

        <ul className='d-flex'>
          <li className="list-unstyled"><a href="/">Home</a></li>
          <li className="list-unstyled"><a href="/dashboard">Dashboard</a></li>
          <li className="list-unstyled"><a href="/shop-perfumes">Shop</a></li>
          <li className="list-unstyled"><a href="/signup" className='btn fw-bold'>Sign Up</a></li>
          
        </ul>
     </div>

     <div className="section1">
        <div className="img-container">
          <img alt="" src='https://garcy-store-demo.myshopify.com/cdn/shop/files/ba20.jpg?v=1672908675' className='' />
        </div>
      </div>

     <div className="head-up">
        <h2 className="text-white fw-bold">Fall in love with amazing scent</h2>
        <p className="text-white">Embrace the essence of elegance. Unveil the allure of luxury. <br /> With every spray, let our fragrances transport you to a world of sophistication and style, <br /> just hit the button below</p>
        <li className="list-unstyled mt-4"><a href="/shop-perfumes" className='btn fw-bold'>Shop Now</a></li>
     </div>
   </div>

   <div className="img-bg">
     <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/s8.jpg?v=1672910105" alt="" className=''/>
   </div>

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
