// var xlsxj = require("xlsx-to-json");

// xlsxj({
//     input: __dirname + "/zzxx.xlsx", 
//     output: __dirname + "/output.json",
//     sheet: "test"
// }, function(err, result) {
//     if(err) {
//         console.error(err);
//     }else {
//         console.log(result);
//     }
// });


var xlsx2json = require('xlsx2json');
console.log(xlsx2json);
xlsx2json(
    'zzxx.xlsx',
    {
        dataStartingRow: 1,
        mapping: {
            'col_1': 'A',
            'col_2': 'B',
            'col_3': 'C'
        }
    }
).then(jsonArray => { 
    console.log(jsonArray);
});