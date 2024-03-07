import React, { useEffect, useRef, useState } from "react";
import Topbar from "../../components/topbar";
import SideBar from "../../components/side_bar";
import "/public/css/product.css"
import "/public/css/vendor_dashboard.css"
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../../utils/axios";

export default function Dashboard() {
    const [role, setRole] = useState("Vendor");
    const [show, setShow] = useState(false);
    const [loaded, setloaded] = useState(true);
    const [product, setproduct] = useState([]);
    const [cookie, setCookie, removeCookie] = useCookies("");
    const [user, setUser] = useState(cookie.user ?? "");
    const name = useRef("");
    const description = useRef("");
    const price = useRef("");
    const [file, setFile] = useState();
    const [img, setImg] = useState("");

    const toggle = () => {
        const topbar = document.querySelector(".topbar");
        const sidebar = document.querySelector(".sidebar");
        const main_content = document.querySelector(".main_content");
        topbar.classList.toggle("active");
        main_content.classList.toggle("active");
        sidebar.classList.toggle("active");
    };

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
        },
        });
        Toast.fire({
        icon: icon,
        title: msg,
        });
    };

    const deleteProduct = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#2a3042",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        }).then((result) => {
        if (result.isConfirmed) {
            aXios
            .post("/product/delete", {
                id: id,
            })
            .then((res) => {})
            .catch((err) => {
                console.log(err, id);
            });
            Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
            });
        }
        });
    };

    const showForm = () => {
        var form = document.querySelector(".form");
        var add = document.querySelector(".add");
        form.style.display = "inline";
        add.style.display = "none";
    };

    const closeForm = () => {
        var form = document.querySelector(".form");
        var add = document.querySelector(".add");
        form.style.display = "none";
        add.style.display = "inline";
    };

    const createProduct = (e) => {
        e.preventDefault();
        var submitbtn = document.querySelector(".submitbtn");
        submitbtn.innerHTML = `Processing <div class="spinner-border spinner-border-sm"></div>`;

        const formData = new FormData();
        formData.append("file", img[0]);
        formData.append("name", name.current.value);
        formData.append("description", description.current.value);
        formData.append("price", price.current.value);
        formData.append("owner", user._id);
        console.log(formData);

        axios
        .post("/product/create", formData)
        .then((res) => {
            alert("success", "product is added successfully");
            name.current.value = "";
            price.current.value = "";
            description.current.value = "";
            submitbtn.innerHTML = "Add Product";
            setImg("");
        })
        .catch((error) => {
            alert("error", "something went wrong");
            console.log(error, img[0]);
            submitbtn.innerHTML = "Add Product";
        });
    };


    // useEffect(() => {
    //     axios
    //     .post("/", {
    //         id: user._id,
    //     })
    //     .then((res) => {
    //         // setloaded(true);
    //         // setproduct(res.data.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, [product]);


    return (
      <div className="vendor_dashboard">
        <SideBar role={role} />

        <div className="main_content">
          <Topbar/>

          <div className="products special d-flex">
            <div className="pagination">
              <p className="mb-0 btn">
                <i className="fa-solid fa-angles-left"></i>
              </p>
              <p className="mb-0 btn total">1 out of 1 page</p>
              <p className="mb-0 btn">
                <i className="fa-solid fa-angles-right"></i>
              </p>
            </div>

            {loaded ? (
              <>
                <div className="box add text-center">
                  <p className="text-muted btn" onClick={showForm}>
                    <i class="fa-solid fa-plus"></i>
                  </p>
                  <p className="p">Add Product</p>
                </div>
                <div className="box form">
                  <form action="" onSubmit={createProduct}>
                    <input
                      ref={name}
                      required
                      type="text"
                      className="mt-3"
                      placeholder="Product Name"
                    />
                    <input
                      ref={price}
                      required
                      type="text"
                      placeholder="Price"
                    />
                    <input
                      ref={description}
                      required
                      type="text"
                      placeholder="Description"
                    />
                    <label htmlFor="file">
                      Choose product image <i class="fa-solid fa-camera"></i>
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setImg(e.target.files);
                      }}
                      ref={file}
                      className="d-none"
                      name="file"
                      id="file"
                    />
                    <button className="btn submitbtn">Add Product</button>
                    <p className="text-muted arrow btn" onClick={closeForm}>
                      <i class="fa-solid fa-arrow-left"></i>
                    </p>
                  </form>
                </div>

                {product.map((val) => {
                  return (
                    <div className="box">
                      <img src={val.image ? `${val.image}` : packages} alt="" />
                      <div className="text p-3">
                        <p className="fw-bold mb-0 text-capitalize">
                          {val.name}
                        </p>
                        <p className="text-muted desc info text-capitalize">
                          {val.description}.
                        </p>
                        <p
                          className="text-danger btn"
                          onClick={() => deleteProduct(val._id)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </p>
                        <h4 className="fw-bold mny">
                          ₦
                          {val.price
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div class="text-center text-success spinner-border mt-5"></div>
              </>
            )}
          </div>
        </div>
      </div>
    );
}
