import "./css/index.css"
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import News from "./components/News"

class Index extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            searchBoxValue: "",
            newsArr: []
        }

        this.onSearchBoxChange = this.onSearchBoxChange.bind(this)
    }

    onSearchBoxChange(event) {
        const {value} = event.target
        this.setState({
            searchBoxValue: value
        })
    }

    render() {
        return (
            <div className="mainContent">
                <Header onSearchBoxChange={this.onSearchBoxChange} updateSearchResults={this.state.searchBoxValue} />
                <News />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"))

module.hot.accept()
