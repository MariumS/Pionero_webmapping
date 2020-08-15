const papa = require('papaparse');
var fs = require('fs');

function csvToJson(csvPath, jsonPath){
    fs.readFile(csvPath, 'utf8', (err, data) => {
        if (err){
                console.log(err);
        }
        console.log(papa.parse(data, {
            complete: function(results,file){
                fs.writeFile(jsonPath, JSON.stringify(results), () => {});
            },
            header : true
        }))
    })
}

module.exports = csvToJson;




