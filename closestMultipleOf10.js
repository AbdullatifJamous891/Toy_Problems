 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
 	var num1=num;
 	var num2=num;
 	for(var i=0;i<num+10;i++)
 	{
 		if(num1%10===0)
 		{
 			return num1;
 		}
 		else 
 		{
 			if(num2%10===0)
 				return num2;
 		}
 		
 		num1=num1+1;
 		num2=num2-1;
 		
 	}
 }