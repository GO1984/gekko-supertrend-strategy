# Disclaimer

This strategy has been forked in order to adapt it for genetic algorithm usage, replacing TA-Lib  `ATR` indicator
with a native version, in order to take easier on CPU time.

So even though I won't edit the rest of the readme, to install it you don't need TA-Lib node.js module. <br>
What you need is `ATR.js` properly installed on your indicators folder of Gekko. You can find it here (https://github.com/Gab0/gekko-extra-indicators).

Other small adaptations were further require for usage with GA's.

Original readme below.

# Gekko Supertrend strategy  
  
  
Supertrend indicator for [Gekko trading bot](https://github.com/askmike/gekko).  
  
An helpful explanation of how calculate Supertrend can be found [here](https://www.youtube.com/watch?v=L_PvUlP1si8).  

**Important note: This software is not a guarantee, that you'll make profits in trading Bitcoins, Altcoins or whatever. This is meant as a helper in observing the markets. Choose it wisely. This software nor I am are responsible if you lose money in trading assets! Use at your own risk.**  
  
### How to use  
  
#### Setup gekko  
  
Configure Gekko like described [here](https://gekko.wizb.it/docs/installation/installing_gekko.html).  
  
#### Required node modules  
  
Install [talib](https://www.npmjs.com/package/talib) with the following command in the gekko directory.  
  
`npm install talib`  
  
#### Use this strategy  
  
 - Copy `Supertrend.js` to [gekko/strategies](https://github.com/askmike/gekko/tree/stable/strategies).  
 - Copy `Supertrend.toml` to [gekko/config/strategies](https://github.com/askmike/gekko/tree/stable/config/strategies).  
 - Add the following code to the `CONFIGURING TRADING ADVICE` section inside [`config.js`](https://github.com/askmike/gekko/blob/stable/sample-config.js).  
 - Setup `config.tradingAdvisor` as you want.  
  
`
config.Supertrend = {  
atrEma: 7,  
bandFactor: 3,  
}
`   
  
  
#### Use this method at your own risk! Especially if you're going to let Gekko do the trades for you! I'm not responsible for any loss you gain.  
  
  
This README.md was written following [this](https://github.com/johndoe75/gekko-gannswing) one.
  
  



