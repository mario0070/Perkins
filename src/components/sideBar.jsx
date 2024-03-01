import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    useEffect(() => {
        var side_link = document.querySelectorAll(".side_link .link")
        var links = document.querySelectorAll(".side_link")
        side_link.forEach((val, index) => {
          var page = window.location.pathname.split("/")[1].split("-").join().replace(",", " ")
          if(val.innerText.toLowerCase() == ` ${page}`){
            links[index].classList.add("active")
          }
          else if(page == "product"){
            links[1].classList.add("active")
          }
          else if(page == "create product"){
            links[1].classList.add("active")
          }
          else if(page == "supplier profile"){
            links[0].classList.add("active")
          }
        })
    })

    return (
        <div className="sidebar box">
            <div className="info d-flex">
                <div className="image">
                    <p className="circle mb-0"><i className="fa-solid fa-user"></i> </p>
                </div>
                <div className="text" style={{"margin-left": ".8em"}}>
                    <p className="mb-1 fw-semibold name">Ganiu Jamiu</p>
                    <p className="mb-1 email custom_font">email@gmail.com</p>
                    <p className="mb-1 num custom_font">09138650286</p>
                </div>
            </div>

            <Link to='/supplier-profile' className="d-flex text-decoration-none text-dark side_tabs justify-content-between side_link">
                <p className="mb-0 link"><i className="fa-solid fa-user"></i>Supplier Profile</p>
            </Link>

            <Link  to="/products" className="d-flex text-decoration-none text-dark side_tabs justify-content-between side_link">
                <p className="mb-0 link"><i className="fa-brands fa-product-hunt"></i> Products</p>
                <p className="count text-truncate mb-0">0</p>
            </Link>

            <Link to='/sales' className="d-flex text-decoration-none text-dark side_tabs justify-content-between side_link" >
                <p className="mb-0 link"><i className="fa-solid fa-chart-area"></i> Sales</p>
                <p className="count text-truncate mb-0">0</p>
            </Link>

            <Link to='/commission' className="d-flex text-decoration-none text-dark side_tabs justify-content-between side_link">
                <p className="mb-0 link"><i className="fa-solid fa-hand-holding-dollar"></i> Commission</p>
                <p className="count text-truncate mb-0">0</p>
            </Link>
            
        </div>
    )
}
