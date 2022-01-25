import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import backgroundVideo from './video.mp4';

class App extends Component {
        render () {
            return (
                <div id = "divApp">                   
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/homepage" element={<Submit />} />
        <Route exact path="/homepage/log" element={<Log />} />
        <Route exact path="/homepage/auth" element={<Auth />} />
        </Routes>
       </BrowserRouter>
                </div>
            
            )
        }
}

class Intro extends Component {
    render () {
        return (
            <div class = "video-container">
            <video autoPlay muted loop id="myVideo">
                
            {/* <source src={backgroundVideo} type="video/mp4"/> */}
            </video>
            <div class = "caption1">
                welcome to options tracker.                    
                <div class = "caption2">   
                <Link to = 'homepage'>
                <button id = "homebuttonmain">click here to begin</button>
                </Link>
                </div>
            </div>
            </div>
        )
    }
}


class Submit extends Component {
    toggleText = () => {
        window.alert('Trade has been logged.');
      }
      render () {
          return <div id = "inputs">
              <h1>Options Tracker</h1>
              <h2>Please Enter Inputs Below...</h2>
        <form method="POST" action="/submit-form">
            <input 
            id = "position"
            type = 'text'
            name = 'Position'
            required = 'required'
            placeholder = 'enter position...'
            />
        
            <input 
            id = "numcontracts"
            type = 'number'
            name = 'NumContracts'
            required = 'required'
            placeholder = 'enter # of contracts...'
            />
        
            <input 
            id = "strategy"
            type = 'text'
            name = 'Strategy'
            required = 'required'
            placeholder = 'enter a strategy...'
            />
        
            <input 
            id = "datebtosto"
            type = 'test'
            name = 'DateBTOSTO'
            required = 'required'
            placeholder = 'enter BTO/STO date...'
            class="form-control" 
            onfocus="(this.type='date')" onblur="(this.type='text')" 
            // id="date"
            />
        
            <input 
            id = "datebtcstc"
            type = 'text'
            name = 'DateBTCSTC'
            required = 'required'
            placeholder = 'enter STO/STC date...'
            class="form-control" 
            onfocus="(this.type='date')" onblur="(this.type='text')" 
            // id="date"
            />
            <button id = "add" type = "submit" onClick = {this.toggleText}>Add</button>
        </form>
        <Link to = 'log'>
        <button id = "logbutton">View Trading Log</button>
        </Link>
        <Link to = 'auth'>
        <button id = "logbutton">View TDA API</button>
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
        console.log(item)
        fetch('http://localhost:3000/delete', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: item})})
           .then(response => response.json())
           .then((data) => { 
               console.log(data)
             return this.setState({ result: data })})
    }

    updateRecord = (e) => {
        const item = e.target.getAttribute('id');
        const parentID = e.target.parentNode.id;
        const clientInput = window.prompt('Please update the selected field with a new input.');
        console.log(item, parentID);
        console.log(clientInput);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ columnName: item, _id: parentID, text: clientInput })
        };
        fetch('http://localhost:3000/update', requestOptions)
            .then(response => response.json())
            .then((data) => { 
                return this.setState({ result: data })})

    }

    render () {
        if (!this.state.result) return (
            <div>
                <h1>Loading, please wait...</h1>
            </div>
        )
        const { result } = this.state;

        if (!result) return null

        if (!result.length) return (
            <div id = "notrades">
                You have no trades logged.&nbsp;      
            <Link to = '/homepage'>
        <button id = "homebutton">Return to Homepage</button>
            </Link>
            </div>
        )

        const arr = [];
        for (let i = 0; i < this.state.result.length; i++) {
            arr.push([<tbody id = {this.state.result[i]._id}><td id = 'position' onClick = {this.updateRecord}>{this.state.result[i].position}</td><td id = 'numcontracts' onClick = {this.updateRecord}>{this.state.result[i].numcontracts}</td><td id = 'strategy' onClick = {this.updateRecord}>{this.state.result[i].strategy}</td><td id = 'datebtosto' onClick = {this.updateRecord}>{this.state.result[i].datebtosto}</td><td id = 'datebtcstc' onClick = {this.updateRecord}>{this.state.result[i].datebtcstc}</td><button class = "btn" id = {this.state.result[i]._id} onClick = {this.deleteRecord}>delete</button></tbody>])
        }
        return <div id = "table">
            <table id = "innerTable" border = '1'>
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
            <br/>
            <Link to = '/homepage'>
            <button id = "homebutton">Return to Homepage</button>
            </Link>
        
        </div>
    }
}

class Auth extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          result: {}
        };
      }
    componentDidMount() {
        fetch('http://localhost:3000/homepage/auth')
          .then(response => response.json())
          .then((data) => { 
            return this.setState({ result: data })});
      }
    render () {
        if (!this.state.result) return (
            <div>
                <h1>Loading, please wait...</h1>
            </div>
        )
        const { result } = this.state;

        if (!result) return null

        if (!result.length) return (
            <div id = "notrades">
                Data is not yet available.&nbsp;      
            <Link to = '/homepage'>
        <button id = "homebutton">Return to Homepage</button>
            </Link>
            </div>
        )
        return <div>
            {this.state}
            <Link to = '/homepage'>
            <button id = "homebutton">Return to Homepage</button>
            </Link>
            </div>

}}

export default App;