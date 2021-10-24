const express = require("express");
const app = express();

app.use(express.json());

app.get('/',function(req,res){
 
    let data = '' ;
    for(let i = 1 ; i< 100 ;i++){
        let t = 0;
      if(i%4==0)
      { data += 'marco' ; t++; }
      if(i%7==0)
      { data+= 'polo' ; t++; }
      
      if(t == 0)
      data+= i ;

      data += ',';

      if(i%10 == 0)
      data += '/n'+',';

    }
    console.log(JSON.stringify(data));

  res.json({"data" :data });
})


app.listen(process.env.PORT||8082, function () {
    console.log("server started");
})