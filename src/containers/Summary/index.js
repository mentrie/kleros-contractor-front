import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContractDataRequest } from '../../redux/actions';

class ContractSummary extends Component {

  componentDidMount() {
    const {
      address,
      contract,
      fetchContractDataRequest
    } = this.props;
    // Skip if data is in store
    if((contract && contract.address) !== address) {
      this.props.fetchContractDataRequest(address);
    }
  }
  
  render() {
    const { isFetching, contract } = this.props;
    if(isFetching) return <div>Loading...</div>;

    return(
      <div>
        <Link to='/'>Go back</Link>
        Summary of contract
      </div>
    )
  }
}

const mapStateToProps = ({ isFetching, contract }, ownProps) => ({
  isFetching,
  contract,
  address: ownProps.match.params.address
});

const mapDispatchToProps = {
  fetchContractDataRequest
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContractSummary))