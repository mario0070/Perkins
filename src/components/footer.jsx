import React from 'react'
import logo from "/img/logo.png"

export default function Footer() {
  return (
    <div className="footer mt-4">
        <div className="footer_content">
        <div className="text-center input">
            <div className="logo">
                <a href="/" className=''>
                <img src={logo} alt="" className='' />
                <h2 className='fw-bold text-center text-white'>Sproutt</h2>
                </a>
            </div>
            <h4 className="fw-bold text-white mb-3 mt-5">Contact Us</h4>
            <input type="text" placeholder='Email'/><br />
            <button className="btn btn-light fw-bold">Subscribe</button>
        </div>
        <div className="policy d-flex">
            <div className="">
                <p className="fw-bold">Available on</p>
                <p className="">Whatsapp</p>
                <p className="">Youtube</p>
            </div>
            <div className="">
                <p className="fw-bold">Help</p>
                <p className="">Support</p>
                <p className="">Partners</p>
                <p className="">FAQs</p>
            </div>
            <div className="">
                <p className="fw-bold">Policy</p>
                <p className="">Terms of service</p>
                <p className="">About Us</p>
            </div>
        </div>
        </div>
        <img src="https://garcy-store-demo.myshopify.com/cdn/shop/files/ba1.jpg?v=1672796390" alt="" className='bag'/>
    </div>
  )
}
