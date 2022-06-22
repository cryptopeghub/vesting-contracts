module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const trezor = '0x49707808908f0C2450B3F2672E012eDBf49eD808';

    // const emp = await deploy('CZempToken', {
    //     from: deployer,
    //     args: ['CZpegs EMP', 'CZemp', 18, dev],
    //     log: true,
    //     deterministicDeployment: false,
    // });
    // console.log('EMP', emp.address);
    const armory = await deploy('PHUBVesting', {
        from: deployer,

        //     args: [dev, 1655485200, 31536000],
        log: true,
        deterministicDeployment: false,
        proxy: {
            owner: trezor,
            methodName: "initialize"
        },
        args: [trezor, 1655485200, 31536000]
    });


};

module.exports.tags = ['Vesting'];
