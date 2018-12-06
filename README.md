# GitDonate

The goal of GitDonate is to provide a way for open-source developers to receive donations through cryptocurrency. Rather then just
place the public address of single ethereum or bitcoin wallet the project maintainers can reference a deployed GitDonate contract.
GitDonate will handle distributing the donations to all the developers of the project and not just the original creator. 
This is useful for open-source projects that want to have more then 1 developer working on the project. It will help attract
other developers to commit to this open-source project if they know they might recieve some of the donations for their work.


## v0.0.1
This POC will be built purely on ethereum. This is due to the fact that the ethereum development tools are the most feature rich
and maintained. Eventually the goal will be to support the top 10 cryptocurrencies using some sort of decentralized exchange protocol.

## v1.0.0
- Will need to support the top 10 cryptocurrencies
- will need to provide options to the donators on how their donation should be split up between donators
- will need a way to automatically store currency for donation recievers even if they do not have a public address (wallet) for the given crypto currency
