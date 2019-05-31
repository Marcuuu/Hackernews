import "./css/index.css"
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import News from "./components/News"

const Index = () => {
    return (
        <div className="mainContent">
            <Header />
            <News />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))

module.hot.accept()
