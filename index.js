const express = require("express"); // require express for server development
const app = express();

const generateData =                 // function to generate the data for requires arguments and deafult are 100 numbers and line break at 10
(item = 100, breakPoints =10)=>{ 
  let data ='' ;
  for(let i = 1 ; i< item ;i++){
      let t = 0;
    if(i%4==0)
    { data += 'marco' ; t++; }
    if(i%7==0)
    { data+= 'polo' ; t++; }
    
    if(t == 0)
    data+= i+'' ;

    data += ',';

    if(i%breakPoints == 0)
    data += '/r/n  ';

  }
   return data ;
} 

app.get('/test',function(req,res){   // test route for api
 
  let data = generateData();
  res.json(data );
})

app.get('/result',function(req,res){ // result route for api
 
  let data = generateData(1000000 , 1000); // pass the actual values case for test case
  res.json(data );
})


app.listen(process.env.PORT||8081, function () {    // server listening on port 8081
    console.log("server started");
})
app.use(function (req, res) {    // default page
    res.status(404).json({
        message: "page Not found"
    })
})