require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index riot situate coast include process front skill'; 
let testAccounts = [
"0x0e30537debfaa0fbfa282d3ce9a77143e26538a8934a7ed43d6f2fe388ada7e1",
"0xd05ad8ca4af98cf1b8b71c99cbcb534d35009631d08b73e8e3d3ce619069aabe",
"0xa62a0c1993dcf9e0f25f668361197dfc4cf0d5ba3bca8eb5a6ba687700e3f105",
"0x6e2409c38a4754f8dad6194dbd609a5ddf033ac37879a78b1619d3858f2d6c57",
"0x46e2325308e3566c23bfe2fb1bf3522555beb251be4c90e0385733f50515f53b",
"0x55c090aeccedbd4e9422049b048d2581fd01e1d108c9ca4ff370c98cd9534afd",
"0xfea57caaa0d7cb029a533071d3a0047412eab2b7e43695f2456e99699be898a5",
"0xc3e1b7558ef5abb93193effb79606f4bb6bb744f1db369b91fbdb604c2de7cea",
"0xe82f52cf95bc92388d5eb4fa635d4b986dd451f933b598bc3523816b61599f12",
"0x75951361ae4a21694f0f77e1c4690fbf5515a32950305a07d2d40e97dfb7e473"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
