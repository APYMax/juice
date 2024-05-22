const { ethers, JsonRpcProvider, formatUnits } = require('ethers');
const contractAddress = '0x44f33bc796f7d3df55040cd3c631628b560715c2';
const provider = new JsonRpcProvider('https://rpc.blast.io');

// ABI for the functions we need
const abi = [
    {
        "inputs": [],
        "name": "getLiquidityRate",
        "outputs": [
            {
                "internalType": "UD60x18",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

async function main() {
    try {
        // Get Liquidity Rate
        const liquidityRate = await contract.getLiquidityRate();
        console.log('Liquidity Rate:', formatUnits(liquidityRate, 18));  // Assuming liquidity rate is in 18 decimal format

        // Get Total Value Locked (TVL)
        const totalSupply = await contract.getTotalSupply();
        console.log('Total Value Locked (TVL):', formatUnits(totalSupply, 18));  // Assuming TVL is in 18 decimal format
    } catch (error) {
        console.error('Error:', error);
    }
}

main();