import React, { useState } from 'react'
import "/public/css/style.css"
import { Link } from 'react-router-dom'
import dotenv from "dotenv";
import path from 'path'
import axios from '../../utils/axios';

export default function Login() {
    document.title = 'Login into your account';
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const togglePassword = () => {
        var passwordInput = document.getElementById("passwordInput");
        var show = document.getElementById("show"); 
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            show.innerHTML = `<i class="fa-solid fa-eye"></i>`
        } else {
            passwordInput.type = "password";
            show.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
        }
    }

    const msgAlert = (icon, msg) => {
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
        icon: icon,
        title: msg
        });
    }

    const  Login = (e) => {
        e.preventDefault()
        var inputs = document.querySelectorAll(".input")

        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value == ""){ 
                inputs[i].classList.add("error")
                inputs[i].focus()
                return
            }
            inputs[i].classList.remove("error")            
        }

        var submitBtn = document.querySelector(".submitBtn")
        submitBtn.innerHTML = `Processing <div class="spinner-border spinner-border-sm text-white"> </div>`

        axios.post("/signup", {
            email,
            password
        })
        .then(response => {
            console.log(response)
            msgAlert("success", "Account created successfully")
            submitBtn.innerHTML = "Get Started"
        })

        .catch(error => {
            console.log(error)
            msgAlert("error", error.response.data.message)
            submitBtn.innerHTML = "Get Started"
        })
    }

    return (
        <div className="signup bg-white">

            <div className="form">
                
                <h4 className="mt-5 fw-bold">Welcome back!</h4>
                <p className="custom_font">SIGN IN TO CONTINUE</p>
                <form action="" onSubmit={Login}>
                    <div className="inputs">

                        <div className="w-100">
                            <label for="">Email</label>
                            <input onChange={e => setEmail(e.target.value) } className='input mb-3' type="email" placeholder="youremail@gmail.com" />
                        </div>
                            
                        <div className="w-100 position-relative" >
                                <label for="">Password</label>
                                <input onChange={e =>  setPassword(e.target.value) } id="passwordInput" type="password" className="pass input" placeholder="Enter your password" />
                                <p id="show" className="showpassword mb-0" onClick={togglePassword}><i className="fa-solid fa-eye-slash"></i></p>
                        </div>

                    <button className="submitBtn">Log in</button>

                    <p className="custom_font text-muted mt-3">By continuing, you agree to Privacy policy and Terms and conditions.</p>
                    <p className="custom_font text-muted ">Don’t have an account? <Link to="/signup" className="carsng_color fw-semibold">Sign Up here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
