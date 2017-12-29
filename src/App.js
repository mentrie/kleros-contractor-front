import React, { Component } from 'react';
import Blockies from 'react-blockies';
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

          <style jsx>{`
            .container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              font-family: 'Open Sans Condensed', sans-serif;
            }

            .flex-container {
              width: 100%;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              box-sizing: border-box;
              border: 7px solid #f4f4f4;
            }

            .flex-item {
              display: flex;
              flex-direction: row;
              box-sizing: border-box;
              margin: 7px;
              position: relative;
              border-radius: 10px;
              background: #fff;
            }

            .wide {
              flex:1;
              min-width: 400px;
            }

            .grow {
              -webkit-transition: all 200ms ease-in;
              -webkit-transform: scale(1);
              -ms-transition: all 200ms ease-in;
              -ms-transform: scale(1);
              -moz-transition: all 200ms ease-in;
              -moz-transform: scale(1);
              transition: all 200ms ease-in;
              transform: scale(1);
              cursor: pointer;
            }

            .grow:hover {
              z-index: 2;
              -webkit-transition: all 200ms ease-in;
              -webkit-transform: scale(1.02);
              -ms-transition: all 200ms ease-in;
              -ms-transform: scale(1.02);
              -moz-transition: all 200ms ease-in;
              -moz-transform: scale(1.02);
              transition: all 200ms ease-in;
              transform: scale(1.02);
            }

            .type {
              padding: 2px 10px;
              position: absolute;
              top: 0;
              right: 0;
              border-bottom-left-radius: 10px;
              border-top-right-radius: 10px;
              color: #fff;
              box-sizing: border-box;
              background: #475053;
            }

            .newContract {
              display: flex;
              height: 140px;
              justify-content: center;
              font-size: 35px;
              padding-top: 42px;
            }

            .identicon {
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            }

            .content {
              position: relative;
              font-family: 'Open Sans Condensed', sans-serif;
              padding-left: 10px;
            }

            .address {
              font-size: 40px;
            }

            .footer {
              flex: 1;
              background: #f4f4f4;
              min-height: 70px;
            }

            .IA {
              position: fixed;
              right: 50px;
              bottom: 50px;
              width: 60px;
            }
          `}</style>
        </div>
          <img src={logo} alt="Logo" className="IA" />
        <div>
        </div>
      </div>
    );
  }
}

export default App;
