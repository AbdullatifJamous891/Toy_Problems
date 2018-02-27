// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
        var acc=""
        var rep=0
        for(var i=0;i<input.length;i++)
        { 
        	acc=acc+input[i].toUpperCase();
        	rep=i+1
        	for(var j=1;j<rep;j++)
        	{
        	acc=acc+input[i];
            }
            acc=acc+"_"
        }
        return acc.slice(0,-1);
    }