Problem: "as far as I can tell, there are no solutions out there to make a pool contract fully trustless. The smart contract we use is a significant improvement on manual pooling (you can freely withdraw your ETH prior to closing, you don't have to rely on us to send you tokens, etc) but there will always be an element of trust re: where the contract funds are disbursed"

Idea:

the pool contract is a lot better than before, but I believe there's 2 improvements that could be made to get it closer to fully trustless

1) organizer setups up the contract
2) contributors send ETH
3) organizer finds out deposit address and shares proof
4) contributors vote on that address being the legitimate destination address
4a) voting is based on total value contributed
4b) if you didn't vote for the winning destination, your funds are returned
4c) if there isn't a majority, all funds are returned
5) tokens come back and get safely distributed
5a) check the token address matches the one voted for
5b) if no tokens come through before X date, return original funds

an alternative and more realistic version is the ICO company provides an ETH address they control on their website as proof, and pool contributors vote on that being legit. then, during distribution of the actual token, the ICO company needs to sign a transaction specifying the actual token address to the pool contract. then send the token. same rules as above apply.