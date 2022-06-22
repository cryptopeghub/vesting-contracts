import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/finance/VestingWalletUpgradeable.sol";

// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract PHUBVesting is Initializable, VestingWalletUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(
        address beneficiaryAddress,
        uint64 startTimestamp,
        uint64 durationSeconds
    ) initializer {}

    function initialize(
        address beneficiaryAddress,
        uint64 startTimestamp,
        uint64 durationSeconds
    ) public initializer {
        __VestingWallet_init(
            beneficiaryAddress,
            startTimestamp,
            durationSeconds
        );
    }
}
