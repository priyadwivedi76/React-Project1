import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import ProductContext from "../utils/ProductContext";
const Edit=()=>{
    const Navigate=useNavigate();
    const [products, setProducts]=useContext(ProductContext)
    const [title,setTitle]=useState("");
    const [image,setImage]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    const AddProductHandler=(e)=>{
        e.preventDefault();
        if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5 ){
            alert("Enter atleast 4 characters");
            return;
        }
        const product={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        }
        setProducts([...products,product]);
        localStorage.setItem(
            "products",JSON.stringify([...products,product])
        )
        Navigate('/');
    }
    return(
        <div>
            Edit
        </div>
    )
}

export default Edit;