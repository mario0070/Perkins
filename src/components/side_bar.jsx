import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

export default function Sidebar({role}) {
  const [logOuts, setlogout, removeLogout] = useCookies(["user"])
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ??  "")
 
  useEffect(() => {
    var side_link = document.querySelectorAll(".side_link")
    side_link.forEach((val) => {
      var page = window.location.pathname.split("/")[1].split("-").join().replace(",", " ")
      if(val.innerText.toLowerCase() == ` ${page}`){
        val.classList.add("active")
      }
      if(page == `dashboard`){
        side_link[0].classList.add("active")
      }
    })
  })

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
    <div className="sidebar">
        <div className="top">
        <h2 className='p-2 mt-2 mb-4 text-white'><a href="/">Scentasy</a></h2>
        <div className="links">
            <p className="text-capitalize"><Link to="/dashboard" className='side_link'><i class="fa-solid fa-house"></i> {user.role} Dashboard</Link></p>
            {user.email == role && <p className=""><Link className='side_link' to="/products"><i class="fa-brands fa-product-hunt"></i> Products</Link></p>}
            <p className=""><Link className='side_link' to="/analytic"><i class="fa-solid fa-chart-simple"></i> Analytic</Link></p>
            {user.email != role && <p className=""><Link className='side_link' to="/orders"><i class="fa-brands fa-first-order-alt"></i> Orders</Link></p>}
            <p className=""><Link className='side_link' to="/profile"><i class="fa-solid fa-user"></i> Profile</Link></p>
            <p className="" onClick={logOut}><a className='side_link' href=""><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></p>
        </div>
        </div>
    </div>
  )
}
