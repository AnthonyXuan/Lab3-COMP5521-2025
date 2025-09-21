const hre = require("hardhat");

async function main() {
  console.log("Deploying MySimpleToken contract...");

  // Get the contract factory
  const MySimpleToken = await hre.ethers.getContractFactory("MySimpleToken");
  
  // Deploy the contract
  const token = await MySimpleToken.deploy();

  // Wait for the deployment to be mined
  await token.waitForDeployment();

  const contractAddress = await token.getAddress();
  console.log(`MySimpleToken deployed to: ${contractAddress}`);

  // add code to wait for some block confirmations if needed

  await token.deployTransaction.wait(6); // wait for 6 confirmations

  // Verify the contract on Etherscan
    console.log("Verifying contract on Etherscan...");
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
    });
    console.log("Contract verified successfully!");
  } catch (error) {
    // Handle the "already verified" error gracefully
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract is already verified.");
    } else {
      console.error(error);
    }
  }
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});