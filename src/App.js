import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blockies from 'react-blockies';

import Contracts from './containers/Contracts';
import ContractSummary from './containers/Summary';
import logo from './assets/kleros.png'


class App extends Component {

  render() {
    const cardsContract = [
      {
        seed: '0x8f7AaEa81ee557AeF373795569D3d308474D2A28',
        bgColor: '#fff',
        notification: 'profile',
        parties: [
          '0x32284083978a18835f9745a81365a0876f90819a',
          '0x32284083978a18835f9745a81365a0876f90819a'
        ],
        rule: '',
        timeout: 100,
        className: ''
      },
      {
        content: 'New Contract',
        notification: 'newContract',
        className: ''
      },
      {
        seed: '0x8f7AaEa81ee557AeF373795569D3d308474D2A29',
        bgColor: '#fff',
        balancePNK: 14,
        notification: 'contract',
        className: ''
      }
    ]

    return (
      <div>
        <div className="container">
          <div className="flex-container">
            <div className="flex-item wide contract grow">
              <div className="type">
                Profile
              </div>
              <Blockies
                seed="Jeremy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
              <div className="content">
                <div className="address">0x4d010...87f</div>
                <div className="balance">0 PNK</div>
                <div className="activate_pnk">Activate</div>
              </div>
            </div>

            <div className="flex-item wide grow newContract">
              <div>
                New Contract
              </div>
            </div>

            <div className="flex-item wide apps grow">
              <Blockies
                seed="ewfwef"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide media grow">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide media">
              <Blockies
                seed="Jewderemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide utility">
              <Blockies
                seed="Jerwdwdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide media">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide calendar">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide games">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide utility">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>

            <div className="flex-item wide fun">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fffa7a" // timeout contract
              />
            </div>

            <div className="flex-item wide apps">
              <Blockies
                seed="Jere[pdemy"
                size={10}
                scale={14}
                bgColor="#fff"
              />
            </div>
          </div>

          <div className="footer">
            Footer
          </div>
        </div>
          <img src={logo} alt="Logo" className="IA" />
        <div>
        </div>

        <Router>
          <Switch>
            <Route exact path='/' component={Contracts} />
            {/* <Route path='/contract-new' component={NewContract} /> */}
            <Route path='/contract-summary' component={ContractSummary} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
