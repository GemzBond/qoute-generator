import React from "react"

const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class Qoute extends React.Component {
  constructor() {
    super()

    this.state = {
      quotes: null,
      randomQuotes: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data.quotes
        })
      })
  }

  handleClick() {
    const randNum = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuotes = this.state.quotes[randNum]

    this.setState({
      randomQuotes
    })
  }

  render() {
    return (
      <div id="qoute-box" className="bg-light border rounded mx-auto my-5 px-3 py-3 w-50">
        <h1 className="text-center" id="text">"{this.state.randomQuotes !== null && this.state.randomQuotes.quote}"</h1>
        <h4 className="text-right" id="author">-{this.state.randomQuotes !== null && this.state.randomQuotes.author}</h4>

        <div className="d-flex flex-row justify-content-between">
          <div className="mt-4">
            <a className="border border-primary mt-3 p-2 rounded" id="tweet-qoute" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div> 
            <button className="border rounded border-info mt-3 p-2" id="new-qoute" onClick={this.handleClick}>Generate</button>
          </div>
        </div>
      
      </div>
    )
  }
}

export default Qoute