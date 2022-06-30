
var fs = require('fs');
fs.readFile("./text.txt","utf-8",function(err,data){
    if(err){
        console.log("error in reading file");
    }
    else{
        console.log(data);
    }

});
fs.writeFile("./text.txt","Hai",function(err){
    if(err){
        return console.log(err);
    }
    console.log("file was saved");
});