import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "/img/logo.png"
import { useCookies } from 'react-cookie';

export default function SideBar() {
    const [cookie, setCookie, removeCookie] = useCookies("");
    const [user, setUser] = useState(cookie.user ?? "");
    const [logOuts, setlogout, removeLogout] = useCookies(["user"])

    const logOut = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Log Out?",
            text: "Your account will be log out!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2a3042",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
              removeLogout(["user"])
              Swal.fire({
                title: "Logged out!",
                text: "Account is log out successfully.",
                icon: "success"
              });
              window.location.href="/"
            }
        });
    }

    return (
        <div className="offcanvas offcanvas-start show-sidebar">
        <div className="img text-center mt-3">
          <a href="/">
            <h1 className='text-danger fw-bold pb-3 pt-3 mt-3'>
            Scentasy
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
                    {!user && <li className="nav-item mb-4">
                        <a className="nav-link" href="/login"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</a>
                    </li>}
                    {!user &&<li className="nav-item mb-4">
                        <a className="nav-link" href="/signup"><i class="fa-solid fa-right-from-bracket"></i> Sign up</a>
                    </li>}
                    <li className="nav-item mb-4">
                        <a className="nav-link" href="#"><i class="fa-solid fa-gears"></i> Settings</a>
                    </li>
                </ul>
            </div>
        </nav>

        <nav className="navbar bottom-link mt-4 navbar-expand-sm navbar-light">
            <div className="w-100">
                <ul className="navbar-nav">
                {user &&<li className="nav-item">
                        <Link onClick={logOut} className="nav-link" ><i className="fa-solid fa-power-off"></i> Log Out</Link>
                    </li>}
                </ul>
            </div>
        </nav>
    </div>
    )
}
