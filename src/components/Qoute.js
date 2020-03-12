import React from "react"

class Qoute extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="qoute-box" className="bg-light border rounded mx-auto my-5 px-3 py-3 w-50">
        <h1 className="text-center" id="text">"Easily make an element as wide or as tall (relative to its parent) with our width and height utilities."</h1>
        <h4 className="text-right" id="author">-John Doe</h4>

        <div className="d-flex flex-row justify-content-between">
          <div className="mt-4">
            <a className="border border-primary mt-3 p-2 rounded" id="tweet-qoute" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div> 
            <button className="border rounded border-info mt-3 p-2" id="new-qoute">Generate</button>
          </div>
        </div>
      
      </div>
    )
  }
}

export default Qoute