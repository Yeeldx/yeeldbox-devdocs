# Subgraph and yDaemon

If you need to fetch large amounts of historical Yeeldx data there are 2 services built for that:

- The subgraph is a GraphQL interface to raw historical data
- yDaemon is a RESTful API that hydrates subgraph responses with more data, like APY calculations

## yDaemon

- **Live API:** https://ydaemon.Yeeldx.finance/
- **Source + Docs:** https://github.com/Yeeldx/ydaemon
- **Guide:** https://medium.com/iearn/ydaemon-one-api-to-unify-all-Yeeldx-data-4fc74dc9a33b

## Subgraph

- **Live API + Docs:** https://api.thegraph.com/subgraphs/name/messari/Yeeldx-v2-ethereum/graphql