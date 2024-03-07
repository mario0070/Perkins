import React, { useState } from 'react'
import Topbar from "../../components/topbar";
import SideBar from "../../components/side_bar";
import "/public/css/product.css"
import banner3 from "/img/home-banner3.jpg"
import "/public/css/vendor_dashboard.css"
import { useCookies } from 'react-cookie'

export default function Profile() {
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.user ?? "")
    const [role, setRole] = useState("Vendor")

    const toggle = () => {
        const topbar = document.querySelector(".topbar")
        const sidebar = document.querySelector(".sidebar")
        const main_content = document.querySelector(".main_content")
        topbar.classList.toggle("active")
        main_content.classList.toggle("active")
        sidebar.classList.toggle("active")
    }

    const alert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "info",
            title: "Coming soon!!"
          });
    }
    if(cookie.user){
        return (
            <div className='vendor_dashboard'>
                <SideBar role={role}/>

                <div className="main_content">
                    <Topbar toggle={toggle}/>

                    <div className="special profile d-flex">
                        <div className="img">
                            <div className="image">
                                <img src={banner3} alt="" />
                                <label htmlFor='file' className="cam btn"><i class="fa-solid fa-camera-retro"></i></label>
                                <input type="file" className='d-none' name="file" id="file" />
                            </div>
                            <p className="fw-bold mt-2 mb-1 text-capitalize">{user.firstname} {user.lastname}</p>
                            <p className="mb-2 text-muted text-capitalize">{user.role}</p>
                            <button className='btn' onClick={alert}>Save changes</button>
                        </div>

                        <div className="input">
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-user"></i> Full Name</label>
                                <input type="text" placeholder='Enter your fullname' value={user.firstname + " " + user.lastname} />
                            </div>
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-envelope"></i> Email Address</label>
                                <input type="text" placeholder='Enter your email address' value={user.email} />
                            </div>
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-business-time"></i> Phone Number</label>
                                <input type="text" placeholder='Enter your phone number' value={user.phone} />
                            </div>
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-business-time"></i> Address</label>
                                <input type="text" placeholder='Enter address' value={user.address} />
                            </div>
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-lock"></i> Change password</label>
                                <input type="password"  placeholder='*********' value="********"/>
                            </div>
                            <div className="">
                                <label htmlFor=""><i class="fa-solid fa-lock"></i> Confirm Change password</label>
                                <input type="password"  placeholder='*********' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }else{
        window.location.href="/login"
    }
}
