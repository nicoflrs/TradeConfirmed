import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class App extends Component {
        render () {
            return (
                <div>                   
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Submit />} />
        <Route exact path="/log" element={<Log />} />
        </Routes>
       </BrowserRouter>
                </div>
            
            )
        }
}

class Submit extends Component {
      render () {
          return <div>
              <h2>Add a trade</h2>
        <form method="POST" action="/submit-form">
            <input 
            type = 'text'
            name = 'Position'
            required = 'required'
            placeholder = 'enter a position...'
            />
        
            <input 
            type = 'number'
            name = 'NumContracts'
            required = 'required'
            placeholder = 'enter number of contracts...'
            />
        
            <input 
            type = 'text'
            name = 'Strategy'
            required = 'required'
            placeholder = 'enter a strategy...'
            />
        
            <input 
            type = 'date'
            name = 'DateBTOSTO'
            required = 'required'
            placeholder = 'enter BTO/STO date...'
            />
        
            <input 
            type = 'date'
            name = 'DateBTCSTC'
            required = 'required'
            placeholder = 'enter STO/STC date...'
            />
            <button type = "submit">Add</button>
        </form>
        <Link to = 'log'>
        <button>Fetch Log</button>
        </Link>
          </div>
      }
}

class Log extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          result: []
        };
      }
    componentDidMount() {
        fetch('http://localhost:3000/log')
          .then(response => response.json())
          .then((data) => { 
            return this.setState({ result: data })});
      }

    deleteRecord = (e) => {
        const item = e.target.getAttribute('id')
        fetch('http://localhost:3000/delete', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: item})})
           .then(response => response.json())
           .then((data) => { 
             return this.setState({ result: data })})
    }

    render () {
        if (!this.state.result) return (
            <div>
                <h1>Loading log, please wait...</h1>
            </div>
        )
        const { result } = this.state;

        if (!result) return null

        if (!result.length) return (
            <div>You have no trades logged.</div>
        )

        const arr = [];
        for (let i = 0; i < this.state.result.length; i++) {
            arr.push([<tbody id = {this.state.result[i]._id}><td>{this.state.result[i].position}</td><td>{this.state.result[i].numcontracts}</td><td>{this.state.result[i].strategy}</td><td>{this.state.result[i].datebtosto}</td><td>{this.state.result[i].datebtcstc}</td><button id = {this.state.result[i]._id} onClick = {this.deleteRecord}>delete</button></tbody>])
        }

        return <div>
            <table border = '1'>
            <thead>
            <tr>
                <th>Position</th>
                <th>Number of Contracts</th>
                <th>Strategy</th>
                <th>Date of BTO/STO</th>
                <th>Date of BTC/STC</th>
            </tr>
            </thead>
                {arr}
            </table>
        </div>
    }
}
// submit button, connects to delete functionality, where delete button is equal to id in my tbody
// add a new controller, put in a delete, and use postman to call the delete onto my server

// put request, access id & the field that was clicked on. need to be able to access the name of the field and the field property
export default App;