import React from "react";
import Header from "../components/Header/Header";
import "./css/category.css";
import {PRODUCTS} from "../db/data";
import {Link} from "react-router-dom";

const prd = PRODUCTS;

class Category extends React.Component {

    componentDidMount() {
        console.log(prd)
    }

    render() {
        return (
            <>
                <Header/>
                <div className={"content"}>
                    <p className={"header1"}>Category name</p>
                    <div className={"categories"}>
                        {prd.map((item, index) => {
                            return <div className={"card"} key={item.id}>
                                <Link to={"/category/"+item.id}>
                                    <img className={"image"} src={item.img} alt={item.id}/>
                                </Link>
                                <p className={"card-title card-title1"}>{item.title}</p>
                                <p className={"card-title card-price"}>${item.price + ".00"}</p>
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Category;