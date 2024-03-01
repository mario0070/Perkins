import React from 'react'
import NavBar from '../../components/navBar';
import SideBar from '../../components/sideBar';
import Config from '../../utils/config';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const {SITENAME} = Config
    document.title = `Products | ${SITENAME}`;

    const DeleteModal = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This product will be remove permanently",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        })
    }

    return (
        <div className="dashbooard">
            <NavBar/>

            <div className="content d-flex justify-content-between">
                <SideBar/>

                <div className="main box">
                <div id="Product" class="tab-pane active"><br/>
                    <h6 class="text-start d-flex justify-content-between fw-bold" style={{"padding": ".2em 2em"}}>Products
                        <div class="dropdown">
                            <button  data-bs-toggle="dropdown" class="dropdown-toggle" style={{"marging": "1em 2em"}}>All</button>
                            <ul class="dropdown-menu flag_list long">
                                <li><a href="#all" class="dropdown-item">All</a></li>
                                <li><a href="#active" class="dropdown-item">Active</a></li>
                                <li><a href="#draft" class="dropdown-item">Draft</a></li>
                            </ul>
                        </div>
                    </h6>

                    <div class="products">
                        <div class="d-flex flex-wrap" style={{"padding": "0em 2em"}}>
                            <div to='/product/id' class="product d-flex text-decoration-none text-dark">
                                <div class="img">
                                    <img src="https://media.hotels.ng/img/h1441346/562/422/b1/golden-tulip-lekki-1441346-6.jpg" alt="" />
                                </div>
                                <div class="text">
                                    <p class="fw-bold mb-1">The Corinthia Villa Hotel</p>
                                    <p class="">₦55,000</p>
                                    <p class="status">Active</p>
                                </div>
                                <div className="dropdown actionBTN">
                                    <p className="custom_font btn" data-bs-toggle="dropdown"><i class="fa-solid fa-circle-info"></i></p>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item mb-1 custom_font" to="/product/id"><i class="fa-solid fa-pen"></i> Edit</Link></li>
                                        <li onClick={DeleteModal}><Link className="dropdown-item custom_font text-danger fw-semibold mb-2" to="#"><i class="fa-solid fa-trash"></i> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to="/create-product" className="btnbg text-decoration-none px-4 py-2">Create new product</Link>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
