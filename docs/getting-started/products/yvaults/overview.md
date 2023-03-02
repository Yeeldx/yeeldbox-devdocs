# Overview

&nbsp;

## What are YeeldBoxes?

[YeeldBoxes](https://vaults.Yeeldx.com) are like savings accounts for your crypto assets. They accept your deposit, then route it through strategies which seek out the highest yield available in DeFi.

![](https://i.imgur.com/T9ftjDa.png)

## YeeldBox Fee Structure

**Performance Fee**: Deducted from yield earned every time a YeeldBox harvests a strategy. 

**Management Fee**: Flat rate taken from YeeldBox deposits over a year. The fee is extracted by minting new shares of the YeeldBox, thereby diluting YeeldBox participants. This is done at the time of harvest, and calculated based on time since the previous harvest.

YeeldBoxes have a dynamic fee structure. Single asset YeeldBoxes have no management fee. Fee values for all YeeldBoxes can be checked in real-time at [Yeeldx.watch](https://Yeeldx.watch/)

*Example YeeldBox fee structure at the time of writing:*  

| Fee Type        | Value   |
|-----------------|-----|
| Management Fee  | 0%  |
| Performance Fee | 10% |

On the [Yeeldx.com](https://Yeeldx.com/) user interface, yield is displayed as net APY. This means that both fees and compounding returns are taken into consideration in the rates presented. Since harvests don't occur on a set basis, yield is estimated based on historical data. For more information, see [How to Understand YeeldBox ROI](https://docs.Yeeldx.com/getting-started/guides/how-to-understand-YeeldBox-roi)

- Up to 20 strategies per YeeldBox: This will increase the flexibility to manage capital efficiently during different market scenarios. Each strategy has a capital cap. This is useful to avoid over-allocating funds to a strategy that cannot increase APY anymore.
- Strategist and Governance: The Governance and the Strategy creator \(strategist\). These 2 actors oversee strategy performance and are empowered to take action to improve capital management or act on critical situations.
- Automated YeeldBox housekeeping \(Keep3r network\): `harvest()` and `earn()` calls are now automated through the Keep3r bots network. These 2 function calls are used to purchase new underlying collateral by selling the earned tokens while moving the profits back to the YeeldBox and later into strategies. The keep3r network takes the heavy lifting of doing these calls and running with the gas costs in exchange for keep3r tokens. This approach unloads humans from these housekeeping tasks.
- No Withdrawal Fee: The one-time fee charged on balance upon withdrawal has been turned off for all YeeldBoxes and only existed in the v1 iteration.
