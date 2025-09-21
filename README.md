# Lab3-COMP5521-2025

This is the sample code repository for the COMP5521 2025 Lab 3, which demonstrates how to create, deploy, and interact with a simple ERC20 token smart contract using Hardhat.

## Prerequisites
- Node.js and npm installed
- Basic understanding of Solidity and smart contracts
- MetaMask wallet set up with Sepolia testnet

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone
   cd Lab3-COMP5521-2025
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure Hardhat by setting up `.env` file with your Sepolia network details:
    ```
    SEPOLIA_URL="https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
    ETHERSCAN_API="YOUR_ETHERSCAN_API_KEY"
    ```
4. Compile the smart contract:
    ```bash
    npx hardhat compile
    ```
5. Deploy the smart contract to Sepolia testnet:
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```
6. Update the interaction script:
   - Note the deployed contract address from the output.
   - Update the `CONTRACT_ADDRESS` in `scripts/interact.js` with the deployed address.
   - Example:
     ```javascript
     const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";
     ```
7. Interact with the deployed contract:
    ```bash
    npx hardhat run scripts/interact.js --network sepolia
    ```
## Project Structure
- `contracts/`: Contains the Solidity smart contract code.
- `scripts/`: Contains deployment and interaction scripts.
- `test/`: Contains test scripts for the smart contract.
- `hardhat.config.js`: Hardhat configuration file.