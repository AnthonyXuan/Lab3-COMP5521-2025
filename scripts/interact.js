const hre = require("hardhat");

// Copy the deployed contract address from the deploy script output
const CONTRACT_ADDRESS = "xxx";

async function main() {
  console.log("Interacting with MySimpleToken contract...");

  // Get the signer (the account to interact with the contract)
  const [signer] = await hre.ethers.getSigners();
  console.log(`Interacting with account: ${signer.address}`);

  // Get the deployed contract instance
  const tokenContract = await hre.ethers.getContractAt("MySimpleToken", CONTRACT_ADDRESS, signer);

  // 1. Check initial balance
  let balance = await tokenContract.balanceOf(signer.address);
  console.log(`Initial balance: ${hre.ethers.formatUnits(balance, 18)} MST`);

  // 2. Mint 1000 new tokens to self
  console.log("Minting 1000 tokens to self...");
  const mintTx = await tokenContract.mint(signer.address, hre.ethers.parseUnits("1000", 18));
  
  // 3. Wait for the transaction to be mined
  await mintTx.wait();
  console.log(`Mint transaction successful: ${mintTx.hash}`);

  // 4. Check new balance
  balance = await tokenContract.balanceOf(signer.address);
  console.log(`New balance: ${hre.ethers.formatUnits(balance, 18)} MST`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});