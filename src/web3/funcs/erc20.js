const getStableCoinBalance = async (Contract, addressAccount) => {
    const wei = await Contract.methods.balanceOf(addressAccount).call();

    return Number(web3.utils.fromWei(wei, STABLE_COIN_FORMAT)).toFixed(2);
}

export const GetERC20Data = async (Contract, addressAccount) => {
    const balance = await getStableCoinBalance(Contract, addressAccount);

    return {
        contract: Contract,
        contractAddress: STABLE_COIN_CONTRACT_ADDRESS,
        balance: balance
    }
}