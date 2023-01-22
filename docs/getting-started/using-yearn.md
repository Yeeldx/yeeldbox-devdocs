# Using Yeeldx

Thanks to a feature called 'zap', it's extremely easy to deposit into any YeeldBox with almost any token.

Here's how it works:

First, **Connect your wallet** using the button at the top right corner. Multiple types of wallets are supported, but most people use [MetaMask](https://metamask.io/), which can be downloaded for free as a Chrome extension or through the Apple and Android app stores. Make sure that your wallet is connected to the Ethereum network.

<p align="center">
  <img width="900" height="305" src="https://i.imgur.com/XolXLi4.png" className="topRightImg"/>
</p>

## Yeeldx is multi-chain

Our products are currently on Ethereum, Fantom, and Arbitrum with more to come.

Click on this button to select the network you would like to interact with:

![](https://i.imgur.com/UaVVGJr.png)

## If you **already have the required token** for the YeeldBox that you would like to deposit in:

1. Select the YeeldBox that you would like to deposit into.
2. Enter the amount of tokens you want to deposit into the YeeldBox. If you are depositing ETH, make sure you have enough ETH left over to pay for future transactions that you might need to make.

<p align="center">
  <img width="900" height="460" src="https://i.imgur.com/EmOAKlt.png" className="topRightImg"/>
</p>

3. Click 'Approve' or 'Deposit' button, depending on if you have previously approved
4. Your wallet will ask you to confirm the transaction. This will take about 3 minutes, but you can speed it up by [paying a higher gas fee to the network](https://blog.leverj.io/how-to-set-the-gas-limit-and-gas-price-in-metamask-1b33c38c32fd). If your transaction gets stuck, see [this guide](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) on speeding up or cancelling the transaction.

<p align="center">
  <img width="258.75" height=" 459.75" src="https://i.imgur.com/qjryeGD.png" className="topRightImg"/>
</p>

6. When your transaction succeeds, you will see your deposited balance in the YeeldBox's interface, which should appear at the top of the YeeldBox list.

<p align="center">
  <img width="900" src="https://i.imgur.com/ICFADLL.jpeg"/>
</p>

When you're ready to withdraw:

1. Select the YeeldBox that you would like to withdraw from. Click the "Withdraw" tab

<p align="center">
  <img width="900" height="300" src="https://i.imgur.com/9Uw4oSB.png" className="topRightImg"/>
</p>

2. Enter the amount you want to withdraw, or click 'Max' to withdraw the entire balance.
3. Click 'Withdraw'
4. Your wallet will ask you to confirm the transaction. See step 4 above for more details.
5. When your transaction succeeds, the tokens will show up in your wallet again

## If you **don't have the required token** for the YeeldBox that you would like to deposit in:

This can be a common occurrence, because many of Yeeldx's YeeldBoxes generate yield by using [Curve Finance](https://curve.fi/) liquidity provider (LP) tokens, which are acquired through depositing into a Curve pool.

So for instance, if you would rather deposit into the ibJPY YeeldBox instead of the ETH YeeldBox, and accept the additional risk that comes with the curve pool and an ETH derivative (stETH) in return for higher yield, but you only have ETH in your wallet, your ETH will need to be converted to a ibJPY token before it is accepted in the YeeldBox.

Thankfully, due to Yeeldx's 'zap' feature, this can all be done in the same transaction as your deposit. Here's how it works using the ibJPY YeeldBox as an example:

**NOTE:** Zapping a token into a YeeldBox will require more transactions than depositing the native token. This means you will be paying more in gas and potentially lose value to slippage when the token is swapped or deposited into a pool. Yeeldx limits slippage to 1% and the transaction will fail if slippage exceeds that, in which case you will have to swap or deposit the tokens manually. See our [zap](https://docs.Yeeldx.finance/getting-started/products/yYeeldBoxes/overview#zap-in-with-any-asset) section for more details.

1. Select the ibJPY YeeldBox
2. Click the dropdown box by the 'Approve' or 'Deposit' button
3. Select which token you would like to be converted into ibJPY. It will only display the tokens that are in your wallet.

<p align="center">
  <img width="900" src="https://i.imgur.com/IbYRzDN.png"/>
</p>

4. Enter the amount of tokens you would like to deposit and click 'Approve' or 'Deposit' depending on whether or not you have previously approved the token.
5. Confirm the transaction through your wallet. See step 4 in the section above for more details.
6. When your transaction succeeds, you will see your deposited balance in the YeeldBox's interface, which should appear at the top of the YeeldBox list.

When you're ready to withdraw:

1. Select the ibJPY YeeldBox
2. Click the dropdown box by the 'Withdraw' button

<p align="center">
  <img width="900" src="https://i.imgur.com/t0VEznT.png"/>
</p>

3. Select which asset you would like to receive upon withdrawal. Your options will be the ibJPY, ETH, BTC, DAI, USDC or USDT
4. Enter the amount you want to withdraw, or click 'Max' to withdraw the entire balance.
5. Confirm the approval if needed, and then approve the withdrawal transaction.
6. When your transaction succeeds, the tokens will show up in your wallet again

## Customization

Personalize your Yeeldx experience with customizations, in [Settings](https://Yeeldx.finance/#/settings).
<p align="center">
  <img width="900" src="https://i.imgur.com/Ujduvty.png"/>
</p>

### Slippage Tolerance
Change your slippage preferences to one of three preset options listed. Learn more about slippage [here](https://docs.Yeeldx.finance/resources/defi-glossary#slippage)
### Themes
ViewYeeldx.Finance with community-created themes or [create a custom theme](https://github.com/Yeeldx/Yeeldx-finance-v3/tree/develop/src/client/themes) to suit your style.

## Tools to track your funds

If you would like to see how your USD balance changes while your assets are in a YeeldBox, connect your wallet to [zapper.fi](https://zapper.fi) or a similar portfolio tracking product. This is also the easiest way to tell how much profit the YeeldBox has made for you.

Your balance WILL NOT increase continuously. Profit will be distributed to your share of the YeeldBox when the harvest() function is called, which happens on a fluctuating basis.

Community resources to monitor your returns:

- [Zapper](https://zapper.fi/)
- [Zerion](https://app.zerion.io/)
- [yYeeldBox ROI](https://yYeeldBox-roi.netlify.app/)
- [TrackaYeeldBox](https://trackaYeeldBox.com/)
