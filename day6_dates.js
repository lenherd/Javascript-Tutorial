/* Creating date instance
TYPE-1 
 Using -new Date()

TYPE-2
Using -new Date(value)
This constructor has a parameter, value, which is an integer representing the number of milliseconds elapsed since 
1 JAN 1970 00:00:00

TYPE=3
Using -new Date(dateString)
The dateString must be in a format recognized by the Date.parse() function, such as MM/DD/YYYY or Month Day, Year
Example 01/01/1980 and Jan 1, 1980

TYPE-4
Using -new Date(year, month, day, hour, minutes, seconds, milliseconds)
*/

/* Date get Methods
date: Tue Feb 03 1987 12:34:56 GMT+0000 (UTC)
date.getDate(): 3               //Get the Date object's day as a number(0-31)
date.getDay(): 2                //Get the Date object's weekday as a number(0-6
date.getFullYear(): 1987        //Get the four-digit year
date.getHours(): 12             //Get the Date object's hour(0-23) 
date.getMilliseconds(): 789     //Get the Date object's milliseconds (0-999).
date.getMinutes(): 34           //Get the Date object's minutes (0-59)
date.getMonth(): 1              //Get the Date object's month as a zero-indexed number(0-11)
date.getSeconds(): 56           //Get the Date object's seconds (0-59).
date.getTime(): 539354096789    //Get the time in milliseconds elapsed since 1 JAN 1970 00:00:00
date.getYear(): 87
date.toDateString(): Tue Feb 03 1987

*/

function Day(number){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    for(var i in days)
        if(i==number)
            return days[i];
}

var date = new Date("10/11/2009");
console.log(Day(date.getDay()));
