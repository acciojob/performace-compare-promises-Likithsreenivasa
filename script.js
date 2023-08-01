// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
function fetchData(apiUrl)
	{
		const startTime=Date.now();
		return fetch(apiUrl)
		.then(()=>Date.now-startTime)
		.catch(()=>Date.now-startTime)
	}
function displayData(outputId,time){
	const outputCell=document.getElementById(outputId);
	outputCell.textContent=time;
}
function fetchDataUsingAll(){
	const allPromises=apiUrls.map(fetchData);
	Promise.all(allPromises)
	.then((results)=>{
		const totalTime=results.reduce((total,time)=>total+time,0);
		displayData('output-all',totalTime);
	})
	.catch((error)=>
		{
			console.error('Error':error);
		})
}
function fetchDataUsingAny(){
	const anyPromises=apiUrls.map(fetchData);
	Promise.any(anyPromises)
	.then((time)=>displayData('output-any',time));
	.catch((error)=>console.error('Error',error));
}
fetchDataUsingAll();
fetchDataUsingAny();
// You can write your code here
