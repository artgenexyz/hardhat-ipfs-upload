# hardhat-ipfs-upload

A Hardhat plugin to upload your build artifacts to IPFS

Used by [buildship.xyz](https://buildship.xyz), e.g. in [nft-contracts](https://github.com/buildship-dev/nft-contracts/).

## What

<_A longer, one paragraph, description of the plugin_>

Lets you deploy your smart-contract from your browser, using browser wallet like Metamask.

## Installation

<_A step-by-step guide on how to install the plugin_>

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

<_The list of all the required Hardhat plugins if there are any_>

No!

## Tasks

<_A description of each task added by this plugin. If it just overrides internal 
tasks, this may not be needed_>

This plugin creates `upload` task. Use it simply:

```bash
npx hardhat upload contracts/MyContract.sol
```

Example output:

```
Uploading contracts/MyContract.sol to IPFS...

Uploaded! Deploy at https://gate-rinkeby.buildship.xyz/deploy/Qm...
```

Help:

```
Usage: hardhat [GLOBAL OPTIONS] upload --args <STRING> --ascii <STRING> contract

OPTIONS:

  --args        Deploy arguments 
  --ascii       ASCII art file path (.txt) 

POSITIONAL ARGUMENTS:

  contract      Contract to deploy 

```

## Usage

<_A description of how to use this plugin. How to use the tasks if there are any, etc._>

There are no additional steps you need to take for this plugin to work.

## Need your NFT Contract?

If you need your NFT contract to be deployed to Ethereum, try no-code NFT launcher at [https://app.buildship.xyz](https://app.buildship.xyz/).

## License

MIT

## Contributing

<_A guide on how to contribute to the project_>

Feel free to open issues and PRs!

## Acknowledgements

<_A list of people and projects that have helped this plugin_>

[@buildship](https://twitter.com/buildship_dev)

## Changelog

<_A list of changes in each version_>

### 0.1.0

- Initial release


