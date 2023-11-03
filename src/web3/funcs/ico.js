import { ALL_PROJECT_ICO_ADDRESS } from ".";

export const GetAllProjectIcoData = async (Contract, ContractToken, addressAccount) => {
    const price_wei = await Contract.methods.price().call();
    const price = web3.utils.fromWei(price_wei, 'ether');

    const timestamp_end_ico = await Contract.methods.timestamp_end_ico().call();

    const tokens_sold_wei = await Contract.methods.tokens_sold().call();
    const tokens_sold = web3.utils.fromWei(tokens_sold_wei, 'ether');

    const stablecoin_funded_wei = await Contract.methods.stablecoin_funded().call();
    const stablecoin_funded = web3.utils.fromWei(stablecoin_funded_wei, 'ether');

    const tokens_to_sold_wei = await ContractToken.methods.balanceOf(ALL_PROJECT_ICO_ADDRESS).call();
    const tokens_to_sold = web3.utils.fromWei(tokens_to_sold_wei, 'ether');

    return {
        contract: Contract,
        address: ALL_PROJECT_ICO_ADDRESS,
        price,
        timestamp_end_ico,
        tokens_sold,
        stablecoin_funded,
        tokens_to_sold
    }
}