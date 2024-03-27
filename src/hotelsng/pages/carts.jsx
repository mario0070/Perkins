import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import numeral from 'numeral';
import { useCookies } from "react-cookie";

export default function Carts() {
  const [product, setproduct] = useState([]);
  const [isloaded, setisloaded] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.user ??  "")
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState(user.phone)
  const [amount, setprice] = useState(0)


  useEffect(() => {
    setproduct(cookie.carts)
    console.log(product)
  }, []);

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

  const reqApi = () => {
    alert("success","Thanks for doing business with us! Come back soon!!")
    axios.post("/order/create", {
      orderBy : user._id,
      owner : product.owner._id,
      product : product._id,
    })
    .then(res => {
        alert("success", "Order created successfully😃")
    })
    .catch(error => {
        console.log(error)
        alert("error", "Something went error")
    })
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
    <div className="single listing homepage">
      <NavBar/>

        <div className="body carts">
            <div className="d-flex over">

                <div className="cartBox">
                    <h6 className="fw-bold">CART (5)</h6>
                    <div className="d-flex contentcart justify-content-between">
                        <div className="first">
                            <div className="d-flex">
                                <img src="http://res.cloudinary.com/dipxop2dr/image/upload/v1709912276/kmrtjt49jtyyumj5xmyl.webp" alt="" />
                                <div className="">
                                    <h5 className="text-truncate">Carolina Herrera</h5>
                                    <p className="text-muted mb-1">Category: Test</p>
                                    <p className="text-muted mb-1">Capacity: 200ml</p>
                                    <p className="p-1 px-2 smally" style={{width:"fit-content"}}>in stock</p>
                                    <p className="text-danger btn"><i className="fa-solid fa-trash"></i> Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className="second">
                            <h5 className="fw-bold text-danger">₦ 9,900</h5>
                            <h5 className="text-muted smally1 text-decoration-line-through">₦ 9,900</h5>
                            <p className="">Qty: 1</p>
                        </div>
                    </div>
                </div>

                <div className="total">
                    <h6 className="fw-bold">CART SUMMARY</h6>
                    <div className="d-flex mb-2 justify-content-between">
                        <p className="mb-0 fw-bold">Subtotal</p>
                        <h5 className="mb-0 fw-bold">₦ 123,811</h5>
                    </div>
                    <p className="text-muted p-2 smally">Delivery fees not included yet.</p>
                    <p className="fw-bold mb-0">Returns are easy</p>
                    <p className="text-muted p-2  smally">Free return within 7 days for ALL eligible items Details</p>
                    <button className="fw-semibold" onClick={payWithPaystack}>Checkout (₦ 123,811)</button>
                </div>

            </div>
        </div>

      <Footer/>
    </div>
  );
}
