import React from "react";
import Header from "../components/Header/Header";
import {PRODUCTS} from "../db/data";
import {Link} from "react-router-dom";
import "./css/category.css";

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
                    <div className={"category-name"}>
                        <p className={"header1"}>Category name</p>
                    </div>
                    <div className={"categories"}>

                        {prd.map((item, index) => {
                            return <div className={"card"} key={item.id}>
                                <Link to={"/category/" + item.id}>
                                    {/*<a href={"/category/" + item.id}>*/}
                                    <img className={"image"} src={item.img} alt={item.id}/>
                                    {/*</a>*/}
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