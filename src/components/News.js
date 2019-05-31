import React from "react"
import "../css/news.css"

class News extends React.Component {
    constructor() {
        super()

        this.state = {
            news: [],
            loading: true,
            pages: [1, 2, 3, 4]
        }

        this.renderNews = this.renderNews.bind(this)
    }

    componentDidMount() {
        fetch(
            "https://content.guardianapis.com/search?&page-size=30&order-by=newest&show-fields=all&api-key=e1a590af-65f8-43ab-882e-02fe688e5b83"
        )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    news: data.response.results,
                    loading: false
                })
                console.log(this.state.pages.length)
            })
    }

    renderNews() {
        return this.state.news.map((item, i) => (
            <div key={i} className="newsEach">
                <h3>{item.webTitle}</h3>
                <ul className="newsInfoUl">
                    <li className="newsInfoEach">{item.type}</li>
                    <li className="newsInfoEach">{item.sectionName}</li>
                    <li className="newsInfoEach">{item.pillarName}</li>
                    <li className="newsInfoEach">{item.webPublicationDate}</li>
                    <li className="newsInfoEach">({item.webUrl})</li>
                </ul>
            </div>
        ))
    }

    renderPagination() {
        return this.state.pages.map(i => (
            <li key={i} className={i === 1 ? "pageEach onThisPage" : "pageEach"}>{i}</li>
        ))
    }

    render() {
        return (
            <div className="newsWrapper">
                {
                    (this.state.loading ?
                    <div className="loadingWrapper">
                        
                        <div className="loadingAni"></div>
                            <div className="loadingBar">Loading...</div>
                    </div> :
                    <div>{this.renderNews()}</div>
                    )
                }
                <ul className="pagination">
                    {
                        this.renderPagination()
                    }
                    <li className="pageEach">>></li>
                </ul>
                <ul className="footer">
                    <li className="footerEach"><span></span>About</li>
                    <li className="footerEach"><span></span>Settings</li>
                    <li className="footerEach"><span></span>Help</li>
                    <li className="footerEach"><span></span>API</li>
                    <li className="footerEach"><span></span>Hacker News</li>
                    <li className="footerEach"><span></span>Fork/Contribute</li>
                    <li className="footerEach"><span></span>Status</li>
                    <li className="footerEach"><span></span>Cool apps</li>
                </ul>
            </div>
        )
    }
}

export default News
