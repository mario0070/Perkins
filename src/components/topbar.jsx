import React, { useState } from 'react'
// import banner3 from "/img/home-banner3.jpg"
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function Topbar({toggle, role}) {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [logOuts, setlogout, removeLogout] = useCookies(["user"])
  const [user, setUser] = useState(cookie.user ?? "")
  
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
        }
    });
  }


  return (
    <div className="topbar d-flex">

        <div className="d-flex">
            <p className="mb-0 mainside" onClick={toggle}><i class="fa-solid fa-bars"></i></p>
            <p className="mb-0 d-none customside" data-bs-toggle="offcanvas" data-bs-target="#sideline" ><i class="fa-solid fa-bars"></i></p>
            <input type="text" className='mx-2' placeholder='search' />
            </div>
            <div className="d-flex mx-3">
            <p className="mx-2 mb-0"><i class="fa-solid fa-bell"></i></p>
            <p className="mx-2 mb-0"><i class="fa-solid fa-gear"></i></p>

            <div class="dropdown mx-2">
                <div className="d-flex" data-bs-toggle="dropdown">
                {/* <img src={banner3} alt="img"/> */}
                <p className="mb-0 dropdown-toggle text-muted text-capitalize">{user.firstname}</p>
                </div>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><i class="fa-regular mx-1 fa-user"></i> Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-gear"></i> Settings</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-wallet"></i> Wallet</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid mx-1 fa-bell"></i> Notifications</a></li>
                <li onClick={logOut}><a class="dropdown-item fw-bold text-danger" href="#"><i class="fa-solid mx-1 fa-arrow-right-from-bracket"></i> Log Out</a></li>
                </ul>
            </div>
        </div>

        <div class="offcanvas offcanvas-start mobile_sidebar" id="sideline">
          <div class="offcanvas-header">
            <h2 class="offcanvas-title"><a href="/">Swift</a></h2>
            <button type="button" class="btn-close btn-white text-white text-reset" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
          <div className="top">
          <div className="links">
              <p className=""><a href="/dashboard" className='side_link'><i class="fa-solid fa-house"></i> Dashboard</a></p>
              {user.email == role &&  <p className=""><a className='side_link' href="/products"><i class="fa-brands fa-product-hunt"></i> Products</a></p>}
              <p className=""><a className='side_link' href="/analytic"><i class="fa-solid fa-chart-simple"></i> Analytic</a></p>
              {user.email != role && <p className=""><a className='side_link' href="/orders"><i class="fa-brands fa-first-order-alt"></i> Orders</a></p>}
              <p className=""><a className='side_link' href="/profile"><i class="fa-solid fa-user"></i> Profile</a></p>
              <p className="" onClick={logOut}><a className='side_link' href=""><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></p>
          </div>
        </div>
          </div>
        </div>
    </div>
  )
}
