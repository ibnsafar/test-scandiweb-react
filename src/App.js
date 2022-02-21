import React from "react";
import {Route, Routes} from "react-router-dom";
import Category from "./pages/Category";
import CategoryID from "./pages/CategoryID";
import Orders from "./pages/Orders";

class App extends React.Component {

    render() {
        return (
            <Routes>
                <Route path={"/"} element={<Category/>}/>
                <Route path={"/category"} element={<Category/>}/>
                <Route path={"/category/:id"} element={<CategoryID/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
            </Routes>
        )
    }
}

export default App;