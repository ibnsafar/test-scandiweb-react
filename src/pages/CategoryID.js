import React from "react";

class CategoryID extends React.Component {

    componentDidMount() {
        let url = window.location.href;
        console.log(url)
    }

    render() {
        return (
            <>
                <h1>category id</h1>
            </>
        )
    }
}

export default CategoryID;