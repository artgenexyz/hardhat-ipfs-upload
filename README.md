# hardhat-ipfs-upload

A Hardhat plugin to upload your build artifacts to IPFS

Used by [buildship.xyz](https://buildship.xyz), e.g. in [nft-contracts](https://github.com/buildship-dev/nft-contracts/).

## What

Lets you deploy your smart-contract from your browser, using browser wallet like Metamask.

Uses nft.storage, so you need to create an account there and get an API key.

## Installation

```bash
npm install @buildship/hardhat-ipfs-upload
```

Import the plugin in your `hardhat.config.js`:

```js
require("@buildship/hardhat-ipfs-upload");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@buildship/hardhat-ipfs-upload";
```


## Required plugins

No!

## Tasks

This plugin creates `upload` task. 

## Usage

You will need nft.storage API key. You can get it [here](https://nft.storage/).

You can set it in `.env` file:

```
NFT_STORAGE_API_KEY=...
```

Or set it as environment variable:

```bash
export NFT_STORAGE_API_KEY=...
```

Then you can use `upload` task:

```bash
npx hardhat upload contracts/MyContract.sol
```

Example output:

```
Uploading contracts/MyContract.sol to IPFS...

Uploaded! Deploy at https://gate-rinkeby.buildship.xyz/deploy/Qm...
```

## Other parameters

```
Usage: hardhat [GLOBAL OPTIONS] upload --args <STRING> --ascii <STRING> contract

OPTIONS:

  --args        Deploy arguments 
  --ascii       ASCII art file path (.txt) 

POSITIONAL ARGUMENTS:

  contract      Contract to deploy 

```

## Need your NFT Contract?

If you need your NFT contract to be deployed to Ethereum, try no-code NFT launcher at [https://app.buildship.xyz](https://app.buildship.xyz/).

## License

MIT

## Contributing

Feel free to open issues and PRs!

## Acknowledgements

[@buildship](https://twitter.com/buildship_dev)

## Changelog

<_A list of changes in each version_>

### 0.1.0

- Initial release

## TODO
- [x] Add basic tests
- [ ] Add ipfs upload tests
- [ ] Accept NFT_STORAGE_API_KEY from hardhat config
- [ ] Use public IPFS upload endpoint
- [ ] Host website itself on IPFS

