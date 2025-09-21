// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// 导入OpenZeppelin的ERC20标准合约和Ownable权限控制合约
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MySimpleToken
 * @dev 一个非常简单的ERC20代币，用于教学演示。
 * - 它继承了OpenZeppelin的ERC20实现。
 * - 它使用Ownable来确保只有合约的部署者（owner）才能铸造新币。
 */
contract MySimpleToken is ERC20, Ownable {
    
    // 构造函数，在部署时执行一次
    // 初始化ERC20代币的名称和符号
    // 将合约的部署者设置为初始的owner
    constructor() ERC20("My Simple Token", "MST") Ownable(msg.sender) {}

    /**
     * @dev 创建新的代币并分配给一个账户。
     * 只有owner可以调用这个函数。
     * @param to 接收新代币的地址。
     * @param amount 要铸造的代币数量。
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}