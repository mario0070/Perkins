import React, { useEffect, useState } from 'react'
import Topbar from "../../components/topbar";
import SideBar from "../../components/side_bar";
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import "/public/css/vendor_dashboard.css"
import { useCookies } from 'react-cookie'
import axios from '../../utils/axios'
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, LineElement, Tooltip, PointElement } from 'chart.js'

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
)

export default function VendorDashboard() {
  const [totalproduct, settotalproduct] = useState(0)
  const [totalorder, settotaltotalorder] = useState(0)
  const [role, setRole] = useState("jamiu@gmail.com")
  const [loaded, setloaded] = useState(false)
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ??  "")
  const [lineChart , setlineChart] = useState([])
  const [spending , setspending] = useState(0)
  const [activeOrder , setactive] = useState(0)
  const [closeOrder , setclose] = useState(0)


  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: 'Price',
      data : [10,40,67,9,30,29,10],
      borderWidth: 0,
      borderColor: ["green"],
      pointBorderColor: ["#00FF80"],
      backgroundColor: ["#2a3042"]
    }]
  }

   const baroptions = {
    scales : {
      y : {
        beginAtZero: true,
        ticks:{
          beginAtZero: true,
          color: ["grey"],
          callback: (value) => "₦" + value * 100
        }
      },
    }
  }

  const toggle = () => {
    const topbar = document.querySelector(".topbar")
    const sidebar = document.querySelector(".sidebar")
    const main_content = document.querySelector(".main_content")
    topbar.classList.toggle("active")
    main_content.classList.toggle("active")
    sidebar.classList.toggle("active")
  }
  if(cookie.user){

    useEffect(() => {
      if(user.email == role){
        axios.post("/product/vendor-product", {
            id : user._id
        }).then(res => {
          setloaded(true)
          settotalproduct(res.data.data.length)
        })
        .catch(error => {
            console.log(error)
        })

        axios.post("/order/vendor", {
          owner : user._id
        }).then(res => {
          console.log(res)
          setloaded(true)
          settotaltotalorder(res.data.data.length)

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
          setspending(total)
          setactive(active.length)
          setclose(close.length)
        })
        .catch(error => {
            console.log(error)
        })
      }

      if(user.role == "user"){
        axios.post("/order/orderby", {
          orderBy : user._id
        }).then(res => {
          console.log(res)
            setloaded(true)
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
            setspending(total)
            setactive(active.length)
            setclose(close.length)
            settotalproduct(close.length + active.length)
            
        })
        .catch(error => {
            console.log(error)
        })
      }

    },[totalproduct, totalorder, activeOrder, closeOrder, spending ])
    

    return (
      <div className='vendor_dashboard d-flex'>
        <SideBar role={role}/>

        <div className="main_content">
        <Topbar toggle={toggle} role={role}/>

          <div className="section1 special">
            <h4 className='mb-3'>Dashboard</h4>
              <div className="d-flex overall">
                  <div className="left">
                      <div className="content">
                        <div className="top">
                          <h6 className='p-4 text-capitalize'>Welcome back, {user.firstname}</h6>
                        </div>
                        <div className="p-3">
                          <img src={banner3} alt="" />
                          <p className="float-right"><i class="fa-solid fa-check"></i></p>
                          <p className="mb-2 text-capitalize"><i class="fa-regular fa-user"></i> {user.lastname} {user.firstname}</p>
                          <p className="d-block mb-0 text-capitalize"><i class="fa-brands fa-critical-role"></i> {user.email}</p>
                          <p className="mb-0 mt-2"><i class="fa-solid fa-venus-double"></i> ...</p>
                          <button><a href="/profile" className='text-white text-decoration-none'>View Profile</a></button>
                        </div>
                      </div>
                  </div>

                  <div className="right">
                      <div className="d-flex">
                        <div className="box">
                            <p className="">Active Orders</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                            <h4 className="">{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : new Intl.NumberFormat('en-IN', {}).format(activeOrder)}</h4>
                        </div>
                        <div className="box">
                            <p className="">Fufilled Orders</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                            <h4 className="">0</h4>
                        </div>
                        <div className="box">
                          <p className="">Total Products</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : new Intl.NumberFormat('en-IN', {}).format(totalproduct)}</h4>
                        </div>
                        <div className="box">
                          <p className="">Revenue</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="revenue">₦{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : spending.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
                        </div>
                      </div>
                    
                    { user.role == "user" &&
                      <div className="d-flex">
                        <div className="box">
                            <p className="">Active Orders</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                            <h4 className="">{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : activeOrder}</h4>
                        </div>
                        <div className="box">
                            <p className="">Fufilled Orders</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                            <h4 className="">0</h4>
                        </div>
                        <div className="box">
                          <p className="">Closed Orders</p>
                            <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : closeOrder}</h4>
                        </div>
                        <div className="box">
                          <p className="">Total Orders</p>
                          <p className="icon"><i class="fa-brands fa-first-order-alt"></i></p>
                          <h4 className="">{!loaded ? <div class="text-center text-dark spinner-border spinner-border-sm"></div> : totalproduct}</h4>
                        </div>
                      </div>
                    }
                      <div className="chart">
                        <div className="d-flex mb-4 justify-content-between">
                            <p className="mb-0"><i class="fa-brands fa-product-hunt"></i> Weekly Spending</p>
                            <p className="mb-0"><i class="fa-solid fa-hand-holding-dollar"></i></p>
                        </div>
                        <Bar data={barData} options={baroptions}></Bar>
                      </div>
                  </div>
              </div>
          </div>

  
         

          <div className="section3 mt-5">
            <p className="text-center text-white">© Copyright 2016, All rights reserved</p>
          </div>

        </div>
      </div>
    )
  }else{
    window.location.href="/login"
  }
}
