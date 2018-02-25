// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var alphabet="abcdefghijklmnopqrstuvwxyz"
		var position =eval(alphabet.indexOf(character))+1;
		return "Position of alphabet: " + position;
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		if(s===0)
		{
			return ""
		}
		else
		{
			return n + repeatStr(n,s-1);
		}
	}