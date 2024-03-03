import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "/img/logo.png"

export default function SideBar() {

    return (
        <div className="offcanvas offcanvas-start show-sidebar">
        <div className="img text-center mt-3">
          <a href="/">
            <h1 className='text-danger fw-bold pb-3 pt-3 mt-3'>
                Sproutt
            </h1>
          </a>
        </div>
        <nav className="navbar mt-3 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="/"><i className="fa-solid fa-bars"></i> Home</a>
                    </li>
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="/dashboard"><i class="fa-solid fa-table-columns"></i> Dashboard</a>
                    </li>
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="/shop-perfumes"><i class="fa-brands fa-product-hunt"></i> Shop Perfumes</a>
                    </li>
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="/login"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</a>
                    </li>
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="/signup"><i class="fa-solid fa-right-from-bracket"></i> Sign up</a>
                    </li>
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="#"><i class="fa-solid fa-gears"></i> Settings</a>
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
    )
}
