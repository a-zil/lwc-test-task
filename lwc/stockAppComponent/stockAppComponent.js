import { LightningElement, track } from 'lwc';

export default class StockAppComponent extends LightningElement {
    @track stockName;
    @track result = {};
    apiKey = 'VOPHWAP01KFD0SZB';
    showResult = false;

    stockHandler(event) {
        this.stockName = event.target.value;
    }
    submitButtonHandler(event) {
       
        // getting a result from external stock market api
        // result will be a json object with keys:
        // ['01. symbol',
        // '02. open',
        // '03. high',
        // '04. low',
        // '05. price', 
        // '06. volume',
        // '07. latest trading day',
        // '08. previous close',
        // '09. change',
        // '10. change percent']
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockName.toUpperCase()}&apikey=${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                const temp = data['Global Quote'];
                const dataKeys = Object.keys(data['Global Quote']);
                this.result.symbol = temp[dataKeys[0]];
                this.result.open = temp[dataKeys[1]];
                this.result.high = temp[dataKeys[2]];
                this.result.low = temp[dataKeys[3]];
                this.result.price = temp[dataKeys[4]];
                this.result.volume = temp[dataKeys[5]];
                this.result.latestTradingDay = temp[dataKeys[6]];
                this.result.previousClose = temp[dataKeys[7]];
                this.result.change = temp[dataKeys[8]];
                this.result.changePercent = temp[dataKeys[9]];

                this.showResult = true;
            }); 
    }
}

