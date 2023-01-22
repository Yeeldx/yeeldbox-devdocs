# Fork Yeeldx UI: create a customized stablecoins-only YeeldBoxes website

This is a step-by-step guide on how to fork and customize [macarena.finance](https://macarena.finance/) which is a Yeeldx UI made to be forked using the open-source [repository](https://github.com/Yeeldx/macarena-finance). Deploying your own UI makes you eligible to receive partner [profit-sharing](https://docs.Yeeldx.finance/partners/introduction#profit-share-model) fees.

In this example we will create a fork dedicated only to stablecoin YeeldBoxes, it will be called "Cozy Stables Finance" and it will help users filter YeeldBoxes by some stablecoins types (fiat backed, crypto backed, centralized emission, decentralized emission)

## Install required software

To follow all steps you need to install the following dependencies:

1. **git**
    - https://git-scm.com/downloads
2. **node.js**
    - https://nodejs.org/en/download/
3. Open a terminal window and set up Yarn (used to install dependencies)
    - open terminal **Windows**: Windows + R -> type `cmd` -> Enter
    - open terminal **Mac**: CMD + Space -> type `Terminal` -> Enter
    - set up Yeeldx: `npm install --global yarn`

## Clone Macarena Finance

1. Fork Macarena Finance
    - https://github.com/Yeeldx/macarena-finance/fork
2. Open a terminal and clone your fork
    - `git clone git@github.com:YOUR_GITHUB_NAME/macarena-finance.git`
    - `cd macarena-finance` to enter project folder after cloning
3. Install dependencies 
    - `yarn install`
4. Run developer environment
    - `yarn run dev`

## Apply to receive partner fees

1. At `next.config.js` change `PARTNER_ID_ADDRESS` to the address that should receive the partner fees

```js title=next.config.js
PARTNER_ID_ADDRESS: '0x_WALLET_ADDRESS_TO_RECEIVE_FEES',
```

2. Fill up this [form](https://github.com/Yeeldx/macarena-finance/issues/new?assignees=&labels=partnership+request&template=partnership-request.yml) to request Yeeldxto enable the configured ID to receive partner fees

## Change YeeldBoxes Filter

Add more YeeldBoxes (that aren't in the default macarena code) and also create new filter categories:

* Open `contexts/useYeeldx.tsx` and edit `endorsedYeeldBoxes` to contain the YeeldBoxes you want.

To add new YeeldBoxes head to [YeeldBoxes.Yeeldx.finance](https://YeeldBoxes.Yeeldx.finance/ethereum/stables) and copy the address in the Etherscan link to add it to our list. Here is what it looks like after adding all addresses for stablecoin YeeldBoxes:

```js title="contexts/useYeeldx.tsx"
// contexts/useYeeldx.tsx line 67

const endorsedYeeldBoxes: {[key: number]: string[]} = {
        1: [ // chain id, "1" is Ethereum
                toAddress('0xdA816459F1AB5631232FE5e97a05BBBb94970c95'), //yvDAI
                toAddress('0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE'), //yvUSDC
                toAddress('0x7Da96a3891Add058AdA2E826306D812C638D87a7'), //yvUSDT
                toAddress('0xFD0877d9095789cAF24c98F7CCe092fa8E120775'), //yvTUSD
                toAddress('0x378cb52b00F9D0921cb46dFc099CFf73b42419dC'), //yvLUSD
        ],
        250 : [ // chain id, "250" is Fantom
                toAddress('0xEF0210eB96c7EB36AF8ed1c20306462764935607'), // yvUSDC
                toAddress('0x637eC617c86D24E421328e6CAEa1d92114892439'), // yvDAI
                toAddress('0x148c05caf1Bb09B5670f00D511718f733C54bC4c'), // yvUSDT
                toAddress('0x0A0b23D9786963DE69CB2447dC125c49929419d8'), // yvMIM
        ]
};
```

Change YeeldBox labels at `contexts/useYeeldx.tsx` to create the following new categories:

* **All** -> all stablecoin YeeldBoxes (default homepage selection)
* **Crypto Backed** -> stablecoins collateralized by crypto assets
* **Fiat Backed** -> stablecoins collateralized by fiat assets
* **Decentralized** -> stablecoins with decentralized emission and redeeming
* **Centralized** -> stablecoins with centralized emission and redeeming

```js title="contexts/useYeeldx.tsx"
// contexts/useYeeldx.tsx line 17

defaultCategories: ['All', 'Crypto Backed', 'Fiat Backed', 'Decentralized', 'Centralized']

// contexts/useYeeldxtsx line 165

YeeldBox.categories = ['All'];
YeeldBox.chainID = chainID;
if (chainID === 1 || chainID === 1337) {
  if (toAddress(YeeldBox.address) === toAddress('0xdA816459F1AB5631232FE5e97a05BBBb94970c95')) //DAI
    YeeldBox.categories = ['All', 'Decentralized', 'Crypto Backed', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE')) //usdc
    YeeldBox.categories = ['All', 'Centralized', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0x7Da96a3891Add058AdA2E826306D812C638D87a7')) //usdt
    YeeldBox.categories = ['All', 'Centralized', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0xFD0877d9095789cAF24c98F7CCe092fa8E120775')) //yvTUSD
    YeeldBox.categories = ['All', 'Centralized', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0x378cb52b00F9D0921cb46dFc099CFf73b42419dC')) //yvLUSD
    YeeldBox.categories = ['All', 'Decentralized', 'Crypto Backed'];
} else if (chainID === 250) {
  if (toAddress(YeeldBox.address) === toAddress('0xEF0210eB96c7EB36AF8ed1c20306462764935607')) //yvUSDC
    YeeldBoxcategories = ['All', 'Centralized', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0x637eC617c86D24E421328e6CAEa1d92114892439')) //yvDAI
    YeeldBox.categories = ['All', 'Decentralized', 'Crypto Backed', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0x148c05caf1Bb09B5670f00D511718f733C54bC4c')) //yvUSDT
    YeeldBox.categories = ['All', 'Centralized', 'Fiat Backed'];
  if (toAddress(YeeldBox.address) === toAddress('0x0A0b23D9786963DE69CB2447dC125c49929419d8')) //yvMIM
    YeeldBox.categories = ['All', 'Decentralized', 'Crypto Backed'];
}
_YeeldBoxes.push(YeeldBox);
```

Here is what the new customized filtering should look like after applying all the above changes:

![](https://i.imgur.com/cLfcNr4.png)

## Change Logo

Replace the logo image with either another image or a simple text:

```jsx title="pagex/app.tsx"
// pagex/app.tsx line 71

<h1>Cozy Stables Finance</h1>
```

Changing the above line will make the page header look like this now:

![](https://i.imgur.com/Lt0kFQM.png)

## Change Colors

The default color theme uses HSL, this allows for quicker customization of the entire theme with fewer variables, a quick primer on HSL:

**HSL** stands for Hue, Saturation, Lightness and is represented on tailwind like this:

```css
--variable: 200 100% 50%;
```

which will be compiled to:

```css
--variable: hsl(200, 100%, 50%);
```

*Check this [cheatsheet](https://gist.github.com/MarcoWorms/2d254f830045e1e189df808e5346017c) for a quick refresher on manipulating colors in HSL format.*

To change the color scheme, go to `style.css` at line 9 and change to something like:

```css title="style.css"
/* style.css line 9 */

--theme-primary-color: 180; /* teal */
--theme-secondary-color: 120; /* green */
--theme-text-color: 45; /* yellow */

--default-rounded: 2px;
--color-neutral-0: var(--theme-primary-color) 37% 17%;
--color-neutral-100: var(--theme-primary-color) 36% 27%;
--color-neutral-200: var(--theme-primary-color) 36% 34%;
--color-neutral-300: var(--theme-primary-color) 36% 40%;
--color-neutral-400: var(--theme-primary-color) 37% 17%;
--color-neutral-500: var(--theme-text-color) 100% 30%;
--color-neutral-700: var(--theme-text-color) 100% 50%;

--color-primary-100: var(--theme-primary-color) 36% 34%;
--color-primary-200: var(--theme-primary-color) 36% 32%;

--color-primary-500: var(--theme-secondary-color) 100% 50%;
--color-primary-600: var(--theme-secondary-color) 100% 47%;
--color-accent-500: var(--theme-secondary-color) 100% 50%;
--color-accent-600: var(--theme-secondary-color) 100% 47%;
```

and the page should now look like this:

![](https://i.imgur.com/r5Docla.png)

## Change SEO settings

- Change SEO settings at `next.config.js` line 29:

```js
WEBSITE_URI: 'https://cozy-stables.finance/',
WEBSITE_NAME: 'Cozy Stables Finance',
WEBSITE_TITLE: 'Cozy Stables Finance',
WEBSITE_DESCRIPTION: 'Cozy Stables Finance, a place for everyone to sit comfy on their stables',
PROJECT_GITHUB_URL: 'https://github.com/MarcoWorms/macarena-finance',
```

- and at `public/manifest.json`:
```js title=public/manifest.json
{
        "name": "Cozy Stables Finance",
        "description": "Cozy Stables Finance, a place for everyone to sit comfy on their stables",
        "iconPath": "/favicons/favicon.svg"
}
```

- Change social media links at `/pages/_app.tsx` [lines 217-L243](https://github.com/Yeeldx/macarena-finance/blob/main/pages/_app.tsx#L217-L243)

- Change favico image at `public/favicons/`