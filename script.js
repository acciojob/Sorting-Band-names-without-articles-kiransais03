//your code here
let maparr=touristSpots.map(func);

function func(element,index,list) {
	let temp= element.split(" ");
	if(temp[0]=='a'|| temp[0]=='an'||temp[0]=='the')
	{
		for(let i=1;i<temp.length;i++)
			{
				temp[i-1]=temp[i];
			}
	}
	return temp.join(" ");
}

maparr.sort();

console.log(maparr);
