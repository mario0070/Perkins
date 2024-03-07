import React, { useState } from 'react'
import Topbar from "../../components/topbar";
import SideBar from "../../components/side_bar";
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import "/public/css/vendor_dashboard.css"
import {Bar, Line, Pie, PolarArea} from "react-chartjs-2"
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, LineElement, Tooltip, PointElement } from 'chart.js'
import { useCookies } from 'react-cookie'

Chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
)

export default function Analytics() {
    const [role, setRole] = useState("Vendor")
    const [lineChart , setlineChart] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.user ??  "")

    const barData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: 'Price',
          data : [10,40,67,9,30,29,100],
          borderWidth: 0,
          borderColor: ["green"],
          pointBorderColor: ["#00FF80"],
          backgroundColor: ["#2a3042"]
        }]
    }

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: 'Price',
          data : [10,40,67,9,30,29,10],
          borderWidth: 1,
          borderColor: ["#2a3042"],
          pointBorderColor: ["#2a3042"],
        }]
    }

    const baroptions = {
        scales : {
            y : {
            beginAtZero: true,
            ticks:{
                beginAtZero: true,
                color: ["#2a3042"],
                // callback: (value) => "₦" + value * 100
            }
            },
        }
    }

    const options = {
        scales : {
          y : {
            beginAtZero: true,
            ticks:{
              beginAtZero: true,
              color: ["#2a3042"],
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
        return (
            <div className='vendor_dashboard'>
                <SideBar role={role}/>

                <div className="main_content">
                    <Topbar toggle={toggle}/>

                    <div className="special analytic">
                        <div className="box">
                            <div className="d-flex">
                                <p className="mb-0"><i class="fa-brands fa-product-hunt"></i> Product</p>
                                <p className="mb-0"><i class="fa-solid fa-hand-holding-dollar"></i> Price</p>
                                <p className="mb-0"><i class="fa-solid fa-calendar-days"></i> 2024</p>
                            </div>
                            <div className="mt-4">
                                <Line data={data} options={options}></Line>
                            </div>
                        </div>

                        <div className="box">
                            <div className="d-flex">
                                <p className="mb-0"><i class="fa-brands fa-product-hunt"></i> Product</p>
                                <p className="mb-0"><i class="fa-solid fa-clipboard"></i> Quantity</p>
                                <p className="mb-0"><i class="fa-solid fa-calendar-days"></i> 2024</p>
                            </div>
                            <div className="mt-4">
                                <Bar data={barData} options={baroptions}></Bar>
                            </div>
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
