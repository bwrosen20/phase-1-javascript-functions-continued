function saturdayFun(variable = "roller-skate") {
   let output=(`This Saturday, I want to ${variable}!`);
   return output;
 }

 function mondayWork(variable='go to the office'){
   let output=(`This Monday, I will ${variable}.`);
   return output;
 }
function wrapAdjective(result){
   return function (emphatic){
      return `You are ${result}${emphatic}${result}!`;
   };
}
