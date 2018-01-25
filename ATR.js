// @link http://www.stockcharts.com/school/doku.php?id=chart_school:technical_indicators:average_true_range_atr
// formula http://www.fmlabs.com/reference/default.htm?url=ATR.htm
// Gab0 - 01/24/2018 
var Indicator = function(historysize) {
    this.input = 'candle';

    this.indicates = 'volatility'; //info purpose

    this.historysize = historysize;
    this.result = false;
    this.age = 0;

    this.lastcandle = false;
    this.ATRhist = [];
    this.TRhist = []
}

Indicator.prototype.update = function(candle) {
  // The first time we can't calculate based on previous
  // ema, because we haven't calculated any yet.

    this.age++;

    if (this.lastcandle)
    {

        var TR_A = candle.high - candle.low;
        var TR_B = candle.high - this.lastcandle.close;
        var TR_C = candle.low - this.lastcandle.close;

        var TR_B = Math.abs(TR_B);
        var TR_C = Math.abs(TR_C);

        var TR = Math.max(TR_A, TR_B, TR_C);


	var ATR = TR * (1/this.historysize) + this.ATRhist[this.TRhist.length-1] * ( (this.historysize-1) /this.historysize)
 

        var sumhist = this.ATRhist.reduce(function(a, b) { return a+b });


        this.result = ATR;

    }
    else
	{
	        ATR = candle.high - candle.low;
		TR = candle.high - candle.low;
	}

	this.result = ATR;

        this.ATRhist.push(ATR);
	this.TRhist.push(TR);

        if (this.ATRhist.length > this.ATRhist)
            this.ATRhist.shift();

    this.lastcandle = candle;

  return this.result;
}

module.exports = Indicator;
