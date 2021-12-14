
	
	function hannota(n,A,B,C)
	{
		if(n==1)
			document.writeln("<p>"+A+"上的盘子移到"+C+"</p>");
		if(n>1)
			{
				hannota(n-1,A,C,B);
				document.writeln("<p>"+A+"上的盘子移到"+C+"</p>");
				hannota(n-1,B,A,C);
			}
	}