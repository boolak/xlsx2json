var fs = require('fs');
var xlsx = require('node-xlsx');
var filePath = '正泰指数 补充数据v2.xlsx';// 文件存放路径

var list = xlsx.parse(fs.readFileSync(filePath));
console.log(list[0].data[0]);
parseExcel(list);
function parseExcel(list){
    for (var i = 0; i < list.length; i++){
        var excleData = list[i].data;// 一个sheet表数据[[],[]]
        //console.log(excleData);
        //return;
        var sheetArray  = [];
        // var typeArray =  excleData[1];
        var keyArray =  excleData[1];// 键名
        for (var j = 2; j < excleData.length ; j++)// 真正数据开始循环
        {
            var curData = excleData[j];// 一行的数据[]
            if(curData.length == 0) continue;
            var item = changeObj(curData,keyArray);
            sheetArray.push(item);
        }
        if(sheetArray.length >0) 
        writeFile(list[i].name+".json",JSON.stringify(sheetArray));
    }
}
//转换数据类型
function changeObj(curData,keyArray)
{
    var obj = {};
    for (var i = 0; i < curData.length; i++) 
    {
        //字母 
        obj[keyArray[i]] = curData[i];// changeValue(curData[i],typeArray[i]);  
    }
    return obj;
}
function changeValue(value,type)
{
    if(value == null || value =="null") return ""
    if(type =="int") return Math.floor(value);
    if(type =="Number") return value;
    if(type =="String") return value;  
}
//写文件
function writeFile(fileName,data)
{  
  fs.writeFile(fileName,data,'utf-8',complete);
  function complete(err)
  {
      if(!err)
      {
          console.log("文件生成成功");
      }   
  } 
}
