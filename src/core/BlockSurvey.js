import React, { Component } from 'react';
import Web3 from 'web3';

class BlockSurvey extends Component {
  state = {
    user: {
      address: '0'
    }
  }
  componentWillMount(){
    const web3 = new Web3(Web3.givenProvider);

    console.log(Promise.resolve(getAddress()));

    Promise.all([getAddress()]).then(function (address) {
      console.log(address[0]);
    });

    async function getAddress() {
			let Adr = await web3.eth.getAccounts();
			return Adr[0];
    }
  }
  render() { 
    return (
      <div>

      </div>
    );
  }
}
 
export default BlockSurvey;