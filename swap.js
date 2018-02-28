	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var newStr=""
		for(var i=0;i<input.length;i++)
		{
			if(input[i]==input[i].toLowerCase())
			{
				newStr=newStr+input[i].toUpperCase();
			}
			else
			{
				newStr=newStr+input[i].toLowerCase();
			}
		}
		return newStr;
	}