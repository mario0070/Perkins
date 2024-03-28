import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from '../../utils/axios'
import "/public/css/landingpage.css"
import { useCookies } from 'react-cookie'
import Footer from '../../components/footer'
import numeral from 'numeral';
import NavBar from '../../components/navBar'

export default function Single() {
  const [queryParameters] = useSearchParams()
  const [role, setRole] = useState("jamiu@gmail.com");
  const [loaded, setLoaded] = useState(false)
  const [product, setproduct] = useState([])
  const [owner, setowner] = useState("")
  const [quantity, setquantity] = useState(1)
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ??  "")
  const address = useRef("")
  const userphone = useRef("")
  const state = useRef("")
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState(user.phone)
  const [amount, setprice] = useState(0)
  const [isFill, setisFill] = useState(false)
  const [category, setcategory] = useState([])
  const [allproduct, setallproduct] = useState([])
  const [storeCarts, setstoreCarts] = useState([]);

  const typeChange = () => {    
    var addy = document.querySelector(".addy")
    var phoneNumber = document.querySelector(".phone")
    var states = document.querySelector(".state")

    if(state.current.value == "" || address.current.value == "" || userphone.current.value == ""){
        setisFill(false)
    }else{
      setisFill(true)
      addy.classList.remove("error")
      states.classList.remove("error")
      phoneNumber.classList.remove("error")
    }
  }


  useEffect(() => {
    axios.post("/product/show", {
      id : queryParameters.get("uuid")
    })
    .then(res => {
        setprice(res.data.data[0].price * 100)
        setLoaded(true)
        setproduct(res.data.data[0])
        setowner(res.data.data[0].owner)
    })
    .catch(error => {
        console.log(error)
    })
  },[])

  const alert = (icon, msg) => {
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

  const mainOrder = () => {
    var orderbtn = document.querySelector(".orderbtn")
    var addy = document.querySelector(".addy")
    var phoneNumber = document.querySelector(".phone")
    var states = document.querySelector(".state")

    if(user.email == role){
      alert("info", "Admin cannot place an order")
      return
    } 

    
    if(state.current.value == ""){
      alert("warning", "Enter your state location")
      state.current.focus()
      addy.classList.remove("error")
      phoneNumber.classList.remove("error")
      states.classList.add("error")
      return;
    }

    if(address.current.value == ""){
      alert("warning", "Enter your full address")
      address.current.focus()
      addy.classList.add("error")
      phoneNumber.classList.remove("error")
      states.classList.remove("error")
      return;
    }

    if(userphone.current.value == ""){
      alert("warning", "Enter a valid phone number")
      userphone.current.focus()
      addy.classList.remove("error")
      phoneNumber.classList.add("error")
      states.classList.remove("error")
      return;
    }

    addy.classList.remove("error")
    states.classList.remove("error")
    phoneNumber.classList.remove("error")
    setisFill(true)
  }

  const increase = () => {
    setquantity(quantity + 1)
  }

  const decrease = () => {
    if(quantity > 1){
      setquantity(quantity - 1)
    }else{
    }
  }

  function addToCart() {
    var submitBtn = document.querySelector(".submitBtn")
    submitBtn.innerHTML = `Processing <div class="spinner-border spinner-border-sm text-white"> </div>`

    axios.post("/product/carts", {
      data : product,
      id: "65e5fc940e6fbba813d2842a"
    })
    .then(res => {
      console.log(res)
      submitBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to Car`
      alert("success", "Product has been added to cart")
    })
    .catch(error => {
        alert("error", "An error occur")
        submitBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to Car`
        console.log(error)
    })
  }


  return (
    <div className='homepage single'>

      <NavBar/>

       <div className="main d-flex">
        {loaded &&
          <>
            <div className="box left d-flex">
                <div className="images">
                  <img src={product.image} alt="" />
                </div>
                
                <div className="text">
                    <h4 className='fw-bold text-muted text-capitalize'>{product.name}</h4>
                    <h6 className='fw-bold text-muted text-capitalize'>{product.category}</h6>
                    <h2 className="mny fw-bold mb-1">₦{numeral(product.price).format("0,0")}</h2>
                    <p className="mb-1 disc">₦{numeral(Number(product.price) + 800).format("0,0")}</p>
                    <p className="stock">in stock</p>
                    <p className="shipping">+ shipping from ₦550 to your location</p>
                      <>
                        {!isFill && <button onClick={mainOrder} className='btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>}

                        {/* {isFill && <PaystackButton className='btn orderbtn' {...componentProps} />} */}
                        {isFill && <button onClick={addToCart} className='paymentForm submitBtn btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>}
                      </>
                    
                    <div className='btn qty mt-0 d-flex'>
                      <i className="btn fa-solid fa-minus" onClick={decrease}></i> 
                        <span>{quantity}</span>
                      <i className="btn fa-solid fa-plus" onClick={increase}></i>
                      </div>

                    <div className="mt-5">
                      <p className='fw-bold text-muted mb-1'>Product Description</p>
                      <p className="desc text-capitalize">{product.description}</p>
                    </div>

                   
                </div>
            </div>

            <div className="box right">
                <p className="fw-bold">DELIVERY & RETURNS</p>
                <p className="mb-1">Enter your location</p>
                <input onChange={typeChange} type="text" className='state' placeholder='Enter your state' ref={state} />
                <input onChange={typeChange} type="text" className='addy' ref={address} placeholder='Enter your full address' />
                <input onChange={typeChange} type="text" className='phone' ref={userphone}  placeholder='Enter your phone number' />
                <div className="pick mt-3 d-flex">
                  <i class="fa-solid fa-hockey-puck"></i>
                  <div className="text">
                    <p className="fw-bold mb-0">Pickup at Store</p>
                    <p className="mb-0">Delivery Fees ₦ 550</p>
                    <p className="mb-0 arrive">Arriving at pickup store between time & time when you order within next 7hrs</p>
                  </div>
                </div>
                <div className="pick mt-3 d-flex">
                  <i class="fa-solid fa-shield-halved"></i>
                  <div className="text">
                    <p className="fw-bold mb-0">Return Policy</p>
                    <p className="mb-0 arrive">Free return within 2 days for all eligible items</p>
                  </div>
                </div>
            </div>
          </>
        }
       </div>

        {!loaded &&
        <div className="text-center mt-5" style={{marginBottom: "20em"}}>
            <div className="spinner-border text-center text-danger"></div>
        </div>
        }

        <div className="recommended">
          <h4 className='fw-bold text-center mb-4'>Recommended <span className="text-danger">Perfumes</span></h4>
          <div className="d-flex mt-5">
          {
              category.map(val => {
                return(
                  <a href={"/product/" + val.name + "?uuid=" + val._id} className="box text-dark text-decoration-none">
                    <div className="img">
                      <img src={val.image} alt="" />
                    </div>
                    <div className="text">
                        <p className="name fw-bold text-capitalize mb-0">{val.name}</p>
                        <p style={{fontSize:"12px"}} className="cat mb-0">{val.category}</p>
                      <p style={{fontSize:"12px"}} className="text-start mb-1">{val.capacity}ml</p>
                        <h4 className="price text-danger fw-bold">₦{numeral(val.price).format("0,0")}</h4>
                        <a style={{fontSize:"10px"}} href={"/product/" + val.name + "?uuid=" + val._id} className="mt-2 mb-2 fw-semibold btn-danger btn">View Product</a>
                    </div>
                  </a>
                )
              })
            }
          </div>

        </div>

        <div className="recommended">
          <h4 className='fw-bold text-center mb-4'>People also <span className="text-danger">View</span></h4>

          <div className="d-flex">
          {
              allproduct.map(val => {
                return(
                  <a href={"/product/" + val.name + "?uuid=" + val._id} className="box text-dark text-decoration-none">
                    <div className="img">
                      <img src={val.image} alt="" />
                    </div>
                    <div className="text">
                        <p className="name fw-bold text-capitalize mb-0">{val.name}</p>
                        <p style={{fontSize:"12px"}} className="cat mb-0">{val.category}</p>
                      <p style={{fontSize:"12px"}} className="text-start mb-1">{val.capacity}ml</p>
                        <h4 className="price text-danger fw-bold">₦{numeral(val.price).format("0,0")}</h4>
                        <a style={{fontSize:"10px"}} href={"/product/" + val.name + "?uuid=" + val._id} className="mt-2 mb-2 fw-semibold btn-danger btn">View Product</a>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>

        <Footer/>
    </div>
  )
}
