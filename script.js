//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let maparr=touristSpots.map(func1);

function func1(elem) {
	let temp=elem.split(" ");
	let articles=['a','an','the'];
	let newArr=temp.filter(func2)
	function func2(word)
		{
			return !(articles.inlcudes(word.toLoweCase()));
		}
	return newArr.join(" ");
}

maparr.sort();

const ul = document.getElementById("band");
for(let i=0;i<maparr.length;i++)
	{
		let htmlelem=document.createElement("li");
		htmlelem.innerText=maparr[i];
		ul.append(htmlelem);
	}

