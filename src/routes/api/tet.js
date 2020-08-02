const { ethers } = require("ethers");
const network = "homestead";

const provider = ethers.getDefaultProvider(network, {
    infura: process.env.INFURA_KEY
});


export async function get(req, res) {
    const blocknum = await provider.getBlockNumber();
    res.end(`${blocknum}`);
}