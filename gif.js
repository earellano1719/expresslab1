const express = require('express')
const app = express()
const axios = require('axios')
const port = 8000
let result = "";
let newArr = [];
let values1;
// RRK0wRiKFqhZ31wtuC3vSXykne5OS2P8
app.get('/^\gif\/search:select', (req, res) => {
    let userInput = req.query.select
    const query = req.query
    axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=RRK0wRiKFqhZ31wtuC3vSXykne5OS2P8`)
    
    .then(res => {
        data = res.data.data;
        values1 = Object.values(data)
        gifLoop(data)
    })
    
    function gifLoop(){
        for (let i = 0; i < values1.length; i++) {
            //  console.log(values1[i].url);
             newArr.push(values1[i].url);
            // console.log(typeof values1[i].url);
            
        }
                res.json({output: newArr})

    }
    console.log(newArr);
    
    // gifLoop(data)
    
})



app.listen(port, () => {
    console.log(`Port ${port}`);
    
})
