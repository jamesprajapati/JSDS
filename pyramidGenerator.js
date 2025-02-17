// icon of pyramid
const iconDesign = "*";

// count of rows 
const count = 5;
// array to store the rows value and pattern 
const rows =[];


function pyramidDesigner(rowNumber, rowCount)
{
    return " ".repeat(rowCount - rowNumber) + iconDesign.repeat(2* rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


function pyramid(){
for( let i=1;i<=count;i++){
       rows.push(pyramidDesigner(i,count));  
 }
 return rows;
}
function invertedPyramid(){
    for( let i=1;i<=count;i++){
        rows.unshift(pyramidDesigner(i,count));  
  }
  return rows;
}

 // print the both Pyramids
let result ="";
for(const row of invertedPyramid() && pyramid()){
    result = result+ row + "\n";
}

console.log(result);

