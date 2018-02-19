// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function averageAge(people) { 
 	var avg = 1
 	var count=0
 	var sum=0
       each(people,function(element,index)
       {
       		if(element.age>18 && element.age<50)
       		{
       			sum = sum+ element.age;
       			count += 1;
       		}
       });
       return "average Age: " + sum/count; 
 }

 //averageAge(people); // 43+36+44+24 = 36.74

 function each(coll,f)
 {
 	if(Array.isArray(coll))
 	{
 		for(var i=0;i<coll.length;i++)
 		{
 			f(coll[i],i)
 		}
 	}
 	else {
 		for(var key in coll)
 		{
 			f(coll[key],key)
 		}
 	}
 }

