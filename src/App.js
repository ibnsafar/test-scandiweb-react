import React from "react";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {

    componentDidMount() {
        console.log("component did mount")
    }

    render() {
        return (
            <Routes>
                {/* <Route path={"/orders"} element={<Orders/>}/> */}
            </Routes>
        )
    }
}

export default App;