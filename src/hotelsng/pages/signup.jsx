import React, { useEffect, useRef, useState } from 'react'
import axios from '../../utils/axios';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

export default function Signup() {
    document.title = 'Sign up | Get Started';
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("+234")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const phone_nm = useRef()
    const [cookie, setCookie] = useCookies("")
    const [initialFlag, setinitialFlag] = useState("https://flagcdn.com/w320/ng.png")

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

    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }

    const  CreateAcct = (e) => {
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

        if(password.length <= 5){
            inputs[4].classList.add("error")
            inputs[4].focus()
            return
        }

        var submitBtn = document.querySelector(".submitBtn")
        submitBtn.innerHTML = `Processing <div class="spinner-border spinner-border-sm text-white"> </div>`

        axios.post("/user/signup", {
            firstname: firstName,
            lastname: lastName,
            phone,
            email,
            password
        })
        .then(response => {
            if(response.data.message == "user already exist"){
                msgAlert("error", response.data.message)
                submitBtn.innerHTML = "Get Started"
                return
            }

            msgAlert("success", "Account created successfully")
            submitBtn.innerHTML = "Get Started"
            setCookie("user", response.data.data)
            window.location.href = "/dashboard"
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
            <h4 className="mt-5 fw-bold">Let’s get started!</h4>
            <p className="custom_font">SIGN UP TO CONTINUE</p>
            <form action="" onSubmit={CreateAcct}>
                <div className="inputs">
                    <div className="d-flex mb-4 justify-content-between">
                        <div className="w-100">
                            <label for="">First name</label>
                            <input className='input' onChange={e => setFirstName(e.target.value)} type="text" placeholder="Enter first name" />
                        </div>
                        <div className="w-100">
                            <label for="">Last name</label>
                            <input className='input' onChange={e => setLastName(e.target.value)} type="text" placeholder="Enter last name" />
                        </div>
                    </div>

                    <div className="d-flex mb-4 justify-content-between">
                        <div className="w-100">
                            <label for="">Phone Number</label>
                            <div class="input-group">      
                                <span className="text-muted input-group-text p-2">
                                    <img height={15} width={20} src={initialFlag} alt="" />
                                </span>
                                <input ref={phone_nm} value={phone} style={{width: "70%"}} onChange={e => handlePhoneChange(e)} type="text" className="input" placeholder="00000000" />
                            </div>
                        </div>
                        <div className="w-100">
                            <label for="">Email</label>
                            <input className='input' onChange={e =>setEmail(e.target.value) } type="email" placeholder="youremail@gmail.com" />
                        </div>
                    </div>
                    
                <div className="w-100 position-relative">
                        <label for="">Create a password</label>
                        <input onChange={e => setPassword(e.target.value)} id="passwordInput" type="password" className="pass input" placeholder="Password(minimum of 8 characters)" />
                        <p id="show" className="showpassword mb-0" onClick={togglePassword}><i className="fa-solid fa-eye-slash"></i></p>
                </div>

                <button className="submitBtn">Get Started!</button>
                    <p className="custom_font text-muted mt-3">By continuing, you agree to Privacy policy and Terms and conditions.</p>
                    <p className="custom_font text-muted ">Already have an account? <Link to="/login" className="carsng_color fw-semibold">Sign in here</Link></p>

                </div>
            </form>
        </div>
    </div>
    )
}
