import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props)
    }
        render () {
            return (
                <div>
                    {/* <Grid /> */}
                    <Submit />
                </div>
            
            )
        }
}

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

class Submit extends Component {
    constructor (props) {
        super(props);
      }
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
            name = 'Number of Contracts'
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
            name = 'Date of BTO/STO'
            required = 'required'
            placeholder = 'enter BTO/STO date...'
            />
        
            <input 
            type = 'date'
            name = 'Date of BTC/STC'
            required = 'required'
            placeholder = 'enter STO/STC date...'
            />
            <button type = "submit">Add</button>
        </form>
          </div>
      }
}

export default App;