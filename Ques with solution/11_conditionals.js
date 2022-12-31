// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// part 1 
console.log("4 > 3  is  "     , 4 > 3 ); 
console.log("4 >= 3  is  "    , 4 >= 3 );  
console.log("4 < 3  is  "     , 4 < 3 ); 
console.log("4 <= 3  is  "    , 4 <= 3 ); 
console.log("4 == 4  is  "    , 4 == 4 ); 
console.log("4 === 4  is  "   , 4 === 4 ); 
console.log("4 != 4  is  "    , 4 != 4 ); 
console.log("4 !== 4  is  "   , 4 !== 4 ); 
console.log("4 != '4'  is  "  , 4 != '4' ); 
console.log("4 == '4'  is  "  , 4 == '4' ); 
console.log("4 === '4'  is  " , 4 === '4' ); 



// part 2 

if ("python".length !== "jargon".length ){
    console.log("length is not same");
}
else{
    console.log("length is same");
}