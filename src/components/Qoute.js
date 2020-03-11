import React from "react"

class Qoute extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="qoute-box" className="border">
        <h1 id="text">"Sample Qoute"</h1>
        <p id="author">-John Doe</p>
        <a id="tweet-qoute" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <button id="new-qoute">Generate</button>
      </div>
    )
  }
}

export default Qoute