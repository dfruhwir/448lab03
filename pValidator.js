function Validate()
{
	var mp1 = document.getElementById("p1").value;
	var mp2 = document.getElementById("p2").value;
	if((mp1 != mp2) && (mp1.length<8||mp2.length<8))
	{
		alert("Passwords don't match.Password length is less than 8 characters.");
	}
	else if(mp1 != mp2)
	{
		alert(mp1);
	}
	else if(mp1.length<8)
	{
		alert("Password length is less than 8 characters.");
	}
}
