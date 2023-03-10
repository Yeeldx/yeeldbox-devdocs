# Yeeldx Protocol Documentation Website

The yeeldx devdocs [website](https://docs.yeeldx.com/) is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push it to the `gh-pages` branch.

## Contribute

### Doc structure

Doc is split in two, the versioned doc and the non-versioned doc.
Doc is generated from markdown or HTML files.

For detailed information on the contributing workflow, please see the [Contributing doc](CONTRIBUTING.md).

#### Not versioned doc

In the `docs` folder:

- getting-started
- partners
- v1

#### Versioned doc

In `versioned_docs` you will find several versions of the vault doc that corresponds to a tagged release. In `vaults` folder you can find the latest version that corresponds to the changes on yeeldx-vault master is the documentation for the next/unreleased version.

##### Generating Versioned Docs

**Dependencies**

- Clone [yeeldx/yeeldbox](https://github.com/yeeldx/yeeldbox) in the same folder where you cloned yeeldx-devdocs (not inside devdocs, but besides it)
- Run the yeeldbox [installation](https://github.com/yeeldx/yeeldbox#installation), you will need to have brownie installed to run it once so it installs the required dependencies.
- Check the vyper compiler version on the vaults repo ([here](https://github.com/yeeldx/yeeldbox/blob/master/contracts/Vault.vy#L1)) and update the `~/.vvm/vyper-X.X.X` in the end of the first command below.
- Make sure [Vault.vy](https://github.com/yeeldx/yeeldbox/blob/master/contracts/Vault.vy#L1) and [Registry.vy](https://github.com/yeeldx/yeeldbox/blob/master/contracts/Registry.vy#L1) on `yeeldbox` folder has the same compiler version on their first line. If not, bump the file with the lowest version to the current version the other uses.
- If any contract file in yeeldbox uses a fixed compiler version (without leading `^`) you may have to add it so the `solc` compiler is able to run. Also make sure `solc` version is up-to-date.
- More information on docusaurus versioning [here](https://docusaurus.io/docs/versioning#tagging-a-new-version) if the last command has any issue, and remember to change the version to the one you are generating for!
