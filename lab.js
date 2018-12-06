const express = require('express');
const app = express();
const port = 8000;



app.get('/math/:userInput', (req, res) => {
    const query = req.query;
    let keyArr = Object.values(query);
    let keyLength = Object.keys(query).length;
    let keyNames = Object.keys(query);
    let parameter = req.params.userInput.toLowerCase();
    let operations = ["add", "div", "sub", "mult"]

    function checkParams(){
        if(operations.includes(parameter) === true){
            checkLength()
            checkKeys()
            math()
        } else {
            res.send("Please enter a valid operation. \nPlease use \n/add for addition \n/sub for subtraction \n/mult for multiplication \n/div for division")
        }       
    }
    checkParams(parameter)

    function checkLength(){
        if(keyLength <= 1){
            res.send(`Please enter some variables! \nSample: localhost:8000/math/${parameter}?foo=1&bar=19`)
        }
    }
    
    function checkKeys(){
        for (let i = 0; i < keyArr.length; i++) {
            if(isNaN(keyArr[i])){
                res.send("Please check your numbers")
            };
        }
    }

    function math(){
        if(keyLength > 1){
            if(parameter === "add"){
                let sum = 0;
                keyArr.map((el) => {
                        sum += parseInt(el)
                })
                res.json({input: query, result: sum})
                // query.result = sum;
            } else if(parameter === "sub"){
                let sub = 0;
                keyArr.forEach((el) => {
                    sub -= parseInt(el)
                })
                res.json({input: query, result: sub})
            } else if(parameter === "mult"){
                let mult = 1;
                keyArr.forEach((el) => {
                    mult *= parseInt(el)
                })
                res.json({input: query, result: mult})
            } else if(parameter === "div"){
                let div = keyArr[0];
                for (let i = 1; i < keyArr.length; i++) {
                    div /= keyArr[i]
                }
                res.json({input: query, result: div})
            }           
        }
    }
  });
  

app.listen(port, () => {
    console.log(`Port ${port}`)
})
        
