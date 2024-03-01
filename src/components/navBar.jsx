import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    const alertModal = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your account will be log out!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
            // if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            // }
        });
    }

    return (
        <div className="topbar d-flex justify-content-between">
            <div className="">
                <h4 className="carsng_color fw-bold">Seller Dashboard</h4>
            </div>

            <div className="d-flex links">
                <Link to='/create-product' className="btn sell mb-0">Sell</Link>
                <div className="dropdown text-center">
                    <p className="btn icon mb-0" data-bs-toggle="dropdown"><i className="fa-solid fa-message"></i></p>
                    <p className="custom_font mb-0">Messages</p>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">You don't have any Messages.</a></li>
                    </ul>
                </div>
                <div className="dropdown text-center">
                    <p className="btn icon mb-0" data-bs-toggle="dropdown"><i className="fa-solid fa-bell"></i></p>
                    <p className="custom_font mb-0">Notifications</p>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">You don't have any Notications.</a></li>
                    </ul>
                </div>
                <div className="dropdown text-center dropdown-menu-end">
                    <p className="btn icon mb-0" data-bs-toggle="dropdown"><i className="fa-solid fa-user"></i></p>
                    <p className="custom_font mb-0">User</p>
                    <ul className="dropdown-menu">
                        <li><h5 className="dropdown-header">Username</h5></li>
                    <li><Link to="/supplier-profile" className="dropdown-item" href="#">Profile</Link></li>
                    <li onClick={alertModal}><a className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
