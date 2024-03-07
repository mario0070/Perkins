import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/side_bar'
import Topbar from '../components/topbar'
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import phone from "/img/phone1.jpeg"
import packages from "/img/Packages.jpg"
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'
// import moment from 'moment'

export default function allOrders() {
    const [role, setRole] = useState("Vendor")
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.user ??  "")
    const [product, setproduct] = useState([])
    const [loaded, setloaded] = useState(false)
    const [activeOrder , setactive] = useState(0)
    const [closeOrder , setclose] = useState(0)
    const [totalorder, settotaltotalorder] = useState(0)

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
    }

    useEffect(() => {
        axios.post("/order/orderby", {
            orderBy : user._id
        }).then(res => {
            setloaded(true)
            setproduct(res.data.data)
            var total = 0
            var active = []
            var close = []
  
            for (let i = 0; i < res.data.data.length; i++) {
              if(res.data.data[i].product != null){
                total += Number(res.data.data[i].product.price)
                if(res.data.data[i].status == "active"){
                  active.push(i)
                }
                if(res.data.data[i].status == "cancel"){
                  close.push(i)
                }
              }
            }
            setactive(active.length)
            setclose(close.length)
            settotaltotalorder(close.length + active.length)
        })
        .catch(error => {
            console.log(error)
        })
    },[product])

    const cancelOrder = (id) => {
        Swal.fire({
            title: "Are you sure? ",
            text: "You want to cancel this order!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2a3042",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("/order/cancel", {
                    id : id
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
              Swal.fire({
                title: "Order Cancelled!",
                text: "Your order has been cancelled.",
                icon: "success"
              });
            }
        });
    }
if(cookie.user){
    return (
        <div className='vendor_dashboard'>
            <Sidebar role={role}/>

            <div className="main_content">
                <Topbar toggle={toggle}/>

                <div className="special orders">
                    <div className="top nav-tabs d-flex" role="tablist">
                        <p data-bs-toggle="tab" className="mb-0 nav-link active">Active Orders ({activeOrder})</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Fulfilled Orders (0)</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link ">Closed Orders ({closeOrder})</p>
                        <p data-bs-toggle="tab" className="mb-0 nav-link">All Orders ({totalorder})</p>
                    </div>

                    <div className="products d-flex">
                        {!loaded && <div class="text-center text-dark spinner-border mt-5"></div> }
                        {product.map(val => {
                            return(
                                val.product &&
                                <div className="box">
                                    <img src={val.product.image ? `${val.product.image}` : packages} alt="" />
                                    <div className="text p-3">
                                        <p className="fw-bold mb-0 text-capitalize">{val.product.name}</p>
                                        <p className="text-muted desc info text-capitalize">{val.product.description}.</p>
                                        {val.status == "active" && <p className="text-danger btn" onClick={() => cancelOrder(val._id)}><i class="fa-solid fa-trash"></i></p>}
                                        {val.status == "cancel" && <p className="text-danger btn" onClick={() => alert("Order is already cancelled")}><i class="fa-solid fa-ban"></i></p>}
                                        <h4 className='fw-bold mny'>₦{val.product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                        <p className="listBy text-capitalize">Listed By {val.owner.business_name ?? "Business Name N/A"}</p>
                                        {val.status == "active" && <p className="status text-capitalize">Status : {val.status ?? "N/A"}</p>}
                                        {val.status == "cancel" && <p className="status bg-danger text-light text-capitalize">Status : {"Cancelled" ?? "N/A"}</p>}
                                        {/* <p className="status text-capitalize">Date : {moment().format(`${val.createdAt.split("-")[0]}-${val.createdAt.split("-")[1]}-${val.createdAt.split("-")[2].split("T")[0]}`,) ?? "N/A"} </p> */}
                                        {/* <p className="status">Time : {moment(val.createdAt).startOf('mins').fromNow() ?? "N/A"} </p> */}
                                    </div>
                                </div>
                            )
                        })}
                        
                        {loaded && product.length == 0 && 
                        <div class="text-center">
                            <h1>Empty Order</h1>
                            <p className="text-muted">You do not have any order yet!!</p>
                        </div> }
                          
                    </div>

                </div>

            </div>
        </div>
    )
}
else{
    window.location.href = "/login"
}
}
