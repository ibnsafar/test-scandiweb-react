import React from "react";
import Header from "../components/Header/Header";
import "./css/orders.css";

class Orders extends React.Component {
    state = {
        count1: 1,
        count2: 2
    }

    decrementFirst() {
        if (this.state.count1 === 1) {
            return 0;
        }
        this.setState({count1: this.state.count1 - 1})
    }

    decrementSecond() {
        if (this.state.count2 === 1) {
            return 0;
        }
        this.setState({count2: this.state.count2 - 1})
    }

    render() {
        return (
            <>
                <Header/>
                <div className={"wrapper"}>
                    <p className={"title-cart"}>CART</p>
                    <div>
                        <hr/>
                        <div className={"cart-object"}>
                            <div className={"cart-left"}>
                                <p className={"cart-title1"}>Apollo</p>
                                <p className={"cart-title1 cart-title2"}>Running Short</p>
                                <p className={"cart-price"}>$50.00</p>
                                <div className={"sizes-cart-button"}>
                                    <button style={{marginRight: "12px"}} className={"button-cart1"}>S</button>
                                    <button className={"button-cart1 button-cart2"}>M</button>
                                </div>
                            </div>
                            <div className={"card-right"}>
                                <div style={{marginRight: "12px"}} className={"cart-counter"}>
                                    <button onClick={() => this.setState({count1: this.state.count1 + 1})}
                                            style={{marginBottom: "30px"}} className={"cart-inc"}>+
                                    </button>
                                    <p style={{marginBottom: "30px"}} className={"cart-counter"}>{this.state.count1}</p>
                                    <button onClick={() => this.decrementFirst()} className={"cart-inc"}>-</button>
                                </div>
                                <div className={"cart-img"}>
                                    <img src={require('./img/img1.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr/>
                        <div className={"cart-object"}>
                            <div className={"cart-left"}>
                                <p className={"cart-title1"}>Jupiter</p>
                                <p className={"cart-title1 cart-title2"}>Wayfarer</p>
                                <p className={"cart-price"}>$75.00</p>
                                <div className={"sizes-cart-button"}>
                                    <button style={{marginRight: "12px"}} className={"button-cart1"}>S</button>
                                    <button className={"button-cart1 button-cart2"}>M</button>
                                </div>
                            </div>
                            <div className={"card-right"}>
                                <div style={{marginRight: "12px"}} className={"cart-counter"}>
                                    <button onClick={() => this.setState({count2: this.state.count2 + 1})}
                                            style={{marginBottom: "30px"}} className={"cart-inc"}>+
                                    </button>
                                    <p style={{marginBottom: "30px"}} className={"cart-counter"}>{this.state.count2}</p>
                                    <button onClick={() => this.decrementSecond()} className={"cart-inc"}>-</button>
                                </div>
                                <div className={"cart-img"}>
                                    <img src={require('./img/glasses.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Orders;