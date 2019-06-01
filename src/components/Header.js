import React from "react"
import "../css/header.css"

import AlgoliaLogo from "../img/algolia-logo.svg"
import SettingsLogo from "../img/settings-logo.svg"

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchResults: ""
        }
    }

    componentDidMount() {
        this.setState({
            searchResults: this.props.updateSearchResults
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchResults: nextProps.updateSearchResults
        })
    }

    render() {
        return (
            <div>
                <div className="headerWrapper">
                    <div className="logoWrapper">
                        <div className="logo">H</div>
                        <div className="logoText">
                            Search <br /> Hacker News
                        </div>
                    </div>
                    <div className="search">
                        <input
                            type="search"
                            className="searchInput"
                            placeholder="Search stories by title, url or author"
                            onChange={this.props.onSearchBoxChange}
                        />
                        {this.state.searchResults ?
                            <div className="searchResultsWrapper">
                                <p>{this.state.searchResults}</p>
                            </div> :
                            null
                        }
                        <div className="searchIcon" />
                        <div className="searchText">
                            by <AlgoliaLogo width={60} height={15} />
                        </div>
                    </div>
                    <div className="searchSettings">
                        <SettingsLogo width={20} height={25} />
                    </div>
                </div>
                <div className="subheadWrapper" />
            </div>
        )
    }
}

export default Header
