import Web3 from "web3";

import IAllProjectICO from '@/src/web3/ABI/AllProjectICO.json';
import IERC20 from '@/src/web3/ABI/ERC20.json';
import { GetAllProjectIcoData } from "./ico";
import { GetERC20Data } from "./erc20";

const RPC = "https://data-seed-prebsc-1-s1.binance.org:8545"
const Contract = require('web3-eth-contract');
Contract.setProvider(BSC_MAINNET_RPC);

// Contracts Addresses
export const USDT_ADDRESS = "0x0D259ECCEb24e8E603486f8062DBDAabF78AB235"
export const USDC_ADDRESS = "0xBf7FD44622e8ED5374cb91d9fc56517c99B40756"
export const BUSD_ADDRESS = "0x2E50a44F2C744E2BcDe025028622d6349115D7Bf"
export const ALL_PROJECT_ERC20_ADDRESS = "0xd9B9c7A1B42f1ad78D9C3Dd5C7F0381277ddc9Bb";
export const ALL_PROJECT_ICO_ADDRESS = "0x01b0b0a198Dc182d391fdA142CEb25014b9Ce273"

export const buildTransaciont = async (addressAccount, to, data) => {
    const nonce = await web3.eth.getTransactionCount(addressAccount);
    const estimateGas = await web3.eth.estimateGas({
        from: addressAccount,
        to: to,
        nonce: nonce,
        data: data
    });
    const gas_price = await web3.eth.getGasPrice();
    return {
        from: addressAccount,
        to: to,
        gas: web3.utils.toHex(estimateGas),
        gasPrice: web3.utils.toHex(gas_price),
        data: data
    };

}

export const getAccount = async () => {
    let account = null;
    try {
        account = await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error("Error connecting to the Web3 Wallet.");
    }
    String(account[0]).replaceAll(' ', '');
    return account[0];
};

export const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            // await ethereum.enable();
            // Acccounts now exposed
            await ethereum.request({ method: 'eth_requestAccounts' })
        } catch (error) {
            // User denied account access...
            console.log('Error: requiring browser wallet: ', error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */ });
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};

export const loadData = async () => {
    await loadWeb3();

    // Contracts
    const ContractAllProject = new Contract(IERC20.output.abi, ALL_PROJECT_ERC20_ADDRESS);
    const ContractAllProjectICO = new Contract(IAllProjectICO.output.abi, ALL_PROJECT_ICO_ADDRESS);
    const ContractUsdt = new Contract(IERC20.output.abi, USDT_ADDRESS);
    const ContractUsdc = new Contract(IERC20.output.abi, USDC_ADDRESS);
    const ContractBusd = new Contract(IERC20.output.abi, BUSD_ADDRESS);

    // Address Account
    const addressAccount = await getAccount();
    const chain_id = await window.web3.eth.getChainId();

    const AllProject = await GetERC20Data(ContractAllProject, addressAccount);
    const USDT = await GetERC20Data(ContractUsdt, addressAccount);
    const USDC = await GetERC20Data(ContractUsdc, addressAccount);
    const BUSD = await GetERC20Data(ContractBusd, addressAccount);

    const ICO = await GetAllProjectIcoData(ContractAllProjectICO, ContractAllProject, addressAccount);

    return {
        addressAccount,
        chain_id,
        AllProject,
        USDT,
        USDC,
        BUSD,
        ICO
    }
};

