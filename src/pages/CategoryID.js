import React from "react";
import {PRODUCTS} from "../db/data";
import Header from "../components/Header/Header";
import "./css/categoryid.css";

const prd = PRODUCTS;

class CategoryID extends React.Component {
    componentDidMount() {
        let url = window.location.href;
        const id = url.split("/")[4];
    }

    render() {
        return (
            <>
                <Header/>
                <div>
                    <div className={"container1"}>
                        <div className={"other-photos"}>
                            <div>
                                <img src={require('./img/img1.png')} alt=""/>
                                <img src={require('./img/img1.png')} alt=""/>
                                <img src={require('./img/img1.png')} alt=""/>
                            </div>
                        </div>
                        <div className={"content1"}>

                            <div className={"main-photo"}>
                                <img src={require('./img/img1.png')} alt=""/>
                            </div>
                            <div className={"information"}>
                                <p className={"title1"}>Apollo</p>
                                <p className={"title2"}>Running Short</p>
                                <p style={{marginTop: "43px"}} className={"helper"}>Size</p>
                                <div className={"size"}>
                                    <button>XS</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                </div>
                                <p style={{marginTop:"54px"}} className={"helper"}>PRICE:</p>
                                <p className={"price"}>$50.00</p>
                                <button className={"button"} type={"submit"}>ADD TO CART</button>
                                <p className={"description"}>Find stunning women's cocktail dresses and party dresses.
                                    Stand out in lace and
                                    metallic cocktail dresses and party dresses from all your favorite brands.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CategoryID;