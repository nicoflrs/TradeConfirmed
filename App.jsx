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

        console.log(this.state.result[0])
        const arr = [];
        for (let i = 0; i < this.state.result.length; i++) {
            arr.push([<td>{this.state.result[i].position}</td>, <td>{this.state.result[i].numcontracts}</td>, <td>{this.state.result[i].strategy}</td>, <td>{this.state.result[i].datebtosto}</td>, <td>{this.state.result[i].datebtcstc}</td>])
        }
        console.log(arr);
        const resultArr = [];
        for (let i = 0; i < arr.length; i++) {

        }
        // console.log(this.state.result[0][position])
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
            <tbody>
                {arr}
            </tbody>
            </table>
        </div>
    }
}

export default App;

// class Grid extends Component {
//     constructor (props) {
//         super(props);
//       }
//       render () {
//         return <div>
//             <table border = '1'>
//             <thead>
//                 <tr>
//                     <th>Position</th>
//                     <th>Number of Contracts</th>
//                     <th>Strategy</th>
//                     <th>Date of BTO/STO</th>
//                     <th>Date of BTC/STC</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>SPY -400P/+395P</td>
//                     <td>10</td>
//                     <td>Put Credit Spread</td>
//                     <td>1/20/2022</td>
//                     <td>1/31/2022</td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     }
// }