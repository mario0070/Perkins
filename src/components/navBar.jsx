import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "/img/logo.png"
import SideBar from './sideBar';
import { useCookies } from "react-cookie";

export default function NavBar() {
    const [cookie, setCookie, removeCookie] = useCookies("");
    const [user, setUser] = useState(cookie.user ?? "");
    const alertModal = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your account will be log out!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
        });
    }

    return (
        <div className="">
            <div className="content">
                <div className="header d-flex mt-2">
                    <div className="logo">
                    <a href="/">
                        <img src={logo} alt="" className='logoImg' />
                        <h2 className='fw-bold logoname text-center text-white'>Scentasy</h2>
                    </a>
                    </div>

                    <div className="open_canvas"  data-bs-toggle="offcanvas" data-bs-target=".show-sidebar">
                    <i className="fa-solid fa-bars"></i>
                    Menu
                    </div>

                    <SideBar/>
                    
                    <div className="offcanvas offcanvas-start show-sidebar">
                        <div className="img text-center mt-3">
                            <a href="/">
                            <h5 className='text-white'>
                                <img src={logo} alt="" />
                                Scentasy
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
                                    {!user &&<li className="nav-item">
                                        <Link className="nav-link" to="/login"><i className="fa-solid fa-bars"></i> Login</Link>
                                    </li>}
                                    {!user &&<li className="nav-item">
                                        <Link className="nav-link" to="/signup"><i className="fa-solid fa-bars"></i> Sign up</Link>
                                    </li>}
                                </ul>
                            </div>
                        </nav>

                        <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
                            <div className="w-100">
                                <ul className="navbar-nav">
                                    {user &&<li className="nav-item">
                                        <Link className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                                    </li>}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <ul className='d-flex'>
                    <li className="list-unstyled"><a href="/">Home</a></li>
                    <li className="list-unstyled"><a href="/dashboard">Dashboard</a></li>
                    <li className="list-unstyled"><a href="/shop-perfumes">Shop</a></li>
                    {!user && <li className="list-unstyled"><a href="/signup" className='btn fw-bold'>Sign Up</a></li>}
                    {user && <li className="list-unstyled"><a href="#" className='btn fw-bold'>Log Out</a></li>}
                    
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
        </div>
    )
}
