require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender smooth firm dash miss plastic coral light army giant'; 
let testAccounts = [
"0x48fc03bcd3425e2a0f4acf6a92c730c5ac31fae5f800cf2ed84d27d355359b8f",
"0x0291dc231561c1660e9d821292b91aa2573f63b243d1100b060c84fac66a171e",
"0x20b3ac78b2f69c1c0c3302ca7937dda796c3c14f7ae9398398454175aa8d3535",
"0x2e663fb2b315df84c0fc945d6db4c5a28124fdf1d8fa69bcc33887df7dad2586",
"0x020f553b8d2f839ef9901f85a2b44dad5cb92ca72709ab491eb439601b9f542a",
"0xd70dc23cbb66d0ea3e321159adbdce2c3a5162c57d86b4823e6e6b7ba3c64ca7",
"0x0bd912bfde674c3daad698f491192ad45cd18937e9379a49f0365e0b77c53d9a",
"0x8a7982c28c2c187a9db10c3c65100f6ce76d7151b73893335d346fc7e48902b3",
"0x24caa2291fcdbd7320a9c52059cfd9bead1666d1834fea6c5006aba34e33c5ed",
"0x6275d618b039babd4be73c9337912ad42ef5fc6afaaa03c97802f90333e53329"
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
            version: '^0.8.0'
        }
    }
};

