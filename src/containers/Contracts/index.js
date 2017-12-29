import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchUserContractsRequest } from '../../redux/actions';

class Contracts extends Component {
  
  componentDidMount() {
    if(!this.props.contracts.length) {
      this.props.fetchUserContractsRequest()
    }
  }
  
  render() {
    const { isFetching, contracts } = this.props;

    if(this.props.isFetching) return <div>Loading...</div>
    
    return (
      <div>
        Contracts here
      </div>
    )
  }

}

const mapStateToProps = ({ isFetching, contracts }) => ({
  isFetching,
  contracts
});

const mapDispatchToProps = {
  fetchUserContractsRequest
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contracts));