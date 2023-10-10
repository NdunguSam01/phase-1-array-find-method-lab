// code your solution here
const record = 
[
    { 
        year: "2015", 
        result: "W"
    },
    { 
        year: "2014", 
        result: "N/A"
    },
    { 
        year: "2013", 
        result: "L"
    },
]

const superbowlWin= record =>
{
    //Invoking the find method to check if the result is a W and assigning it to a variable
    const winningYearCheck=record.find
    (
        record => record.result==="W"   //This is an arrow function and since it has only one parameter and one return statement, we remove the brackets and the curl braces
    )

    //Evaluating if the result of checking the result is true and returing the year if it evaluated to true
    if(winningYearCheck)
    {
        return winningYearCheck.year
    }
    else
    {
        return undefined
    }
}
console.log(superbowlWin(record));