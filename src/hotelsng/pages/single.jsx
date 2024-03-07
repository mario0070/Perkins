import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from '../../utils/axios'
import "/public/css/landingpage.css"
import { useCookies } from 'react-cookie'
import Footer from '../../components/footer'
import NavBar from '../../components/navBar'

export default function Single() {
  const [queryParameters] = useSearchParams()
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


  // useEffect(() => {
  //   axios.post("/product/show", {
  //     id : queryParameters.get("uuid")
  //   })
  //   .then(res => {
  //       setprice(res.data.data[0].price * 100)
  //       setLoaded(true)
  //       setproduct(res.data.data[0])
  //       setowner(res.data.data[0].owner)
  //   })
  //   .catch(error => {
  //       console.log(error)
  //   })
  // },[])

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
  

  const increase = () => {
    setquantity(quantity + 1)
  }

  const decrease = () => {
    if(quantity > 1){
      setquantity(quantity - 1)
    }else{
    }
  }

  function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
      key: 'pk_test_98e99f884464bd11201d04f1c2cebf94136083db',
      email,
      amount,
      name,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
      onClose: function(){
        alert("warning", "Transaction not completed");
      },
      callback: function(response){
        reqApi()
      }
    });

    handler.openIframe();
  }


  return (
    <div className='homepage single'>

      <NavBar/>

       <div className="main d-flex">
        {!loaded &&
          <>
            <div className="box left d-flex">
                <div className="images">
                  <img src="" alt="" />
                </div>
                
                <div className="text">
                    <h4 className='fw-bold text-muted text-capitalize'>{product.name}</h4>
                    <h2 className="mny fw-bold mb-1">₦3000</h2>
                    <p className="mb-1 disc">₦23002</p>
                    <p className="stock">in stock</p>
                    <p className="shipping">+ shipping from ₦550 to your location</p>
                    <button onClick={payWithPaystack} className='paymentForm btn orderbtn'><i class="fa-solid fa-cart-shopping"></i> Order Now</button>
                    
                    <div className='btn qty mt-4 d-flex'>
                      <i className="btn fa-solid fa-minus" onClick={decrease}></i> 
                        <span>{quantity}</span>
                      <i className="btn fa-solid fa-plus" onClick={increase}></i>
                      </div>

                    <div className="mt-5">
                      <p className='fw-bold text-muted mb-1'>Product Description</p>
                      <p className="desc text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti et eum optio ab, debitis, ipsa est facere consequuntur, dolorem animi laudantium dolorum asperiores! Voluptatem reiciendis alias enim itaque iste?</p>
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

        {/* {!loaded &&
         <div className="text-center mb-5 mt-1">
            <img src="" alt="" width={400} />
        </div>
        } */}

        <div className="recommended">
          <h4 className='fw-bold text-center mb-4'>Recommended <span className="text-danger">Perfumes</span></h4>

          <div className="d-flex">
            <a href='#' className="box text-decoration-none">
              <div className="img">
                <img src="https://images.timbu.com/hotels-ng/supplier_indigo_bar_restaurant_and_hotel_359895_1.jpg" alt="" />
              </div>
             <div className="text">
                <p className="name mb-0">name</p>
                <p className="cat">category</p>
                <h4 className="price text-warning fw-bold">5000</h4>
             </div>
            </a>
          </div>

          <div className="d-flex mt-5">
            <a href='#' className="box text-decoration-none">
              <div className="img">
                <img src="https://images.timbu.com/hotels-ng/supplier_indigo_bar_restaurant_and_hotel_359895_1.jpg" alt="" />
              </div>
            <div className="text">
                <p className="name mb-0">name</p>
                <p className="cat">category</p>
                <h4 className="price text-warning fw-bold">5000</h4>
            </div>
            </a>
          </div>

        </div>

        <div className="recommended">
          <h4 className='fw-bold text-center mb-4'>People also <span className="text-danger">View</span></h4>

          <div className="d-flex">
          </div>
        </div>

        <Footer/>
    </div>
  )
}
