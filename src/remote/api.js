import { kleros, web3 } from '../utils';

export const getContractsAPI = async (
  account = 0
)  => {
  try {
    const arbitrator = await kleros.arbitrator;
    console.log(process.env, 'env')
      // await arbitrator.getData(web3Instance.eth.accounts[account]),
      const accounts = await web3().eth.getAccounts();
      console.log(web3().eth.getAccounts(), 'accounts')

      return accounts[account]? await arbitrator.getContractsForUser(accounts[account].toLowerCase()): [];

  } catch (e) {
    console.log(e,'what is error')
  }
}