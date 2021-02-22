const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const axios = require('axios').create({
    baseURL: 'https://openexchangerates.org/api',
    params: {
        app_id: "9ffb657172604ee1ba320d493bdacc8c"
    }
  });



const app = express();
const port = 8080;

let CurrencyRates = {};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send('Currency converter listening on /convert');
});


app.get('/convert/:from/:to', async (req, res) => {
    axios.get('/latest.json')
        .then((response) =>{
            CurrencyRates=response.data.rates;
            let fromCurrency=parseFloat(CurrencyRates[req.params.from]);
            let toCurrency=parseFloat(CurrencyRates[req.params.to]);
            // This formula is needed because base curreny is USD in openexchangerates api
            const ans=(toCurrency)/fromCurrency;
            if(ans!=null && ans>=0){
                res.status(200);
                res.json((toCurrency)/fromCurrency);                
            }else{
                res.status(401).send('Conversion Error');
            }
        })
        .catch((error) =>{
            res.status(401).send('Conversion Error');
        });
});

app.listen(port, () => console.log(`Currency converter app listening on port ${port}!`));