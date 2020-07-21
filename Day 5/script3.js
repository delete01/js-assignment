console.log('Fetching API');

// https://jsonplaceholder.typicode.com/todos

//Making get request

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => console.log(data))


//using pormis 

console.log('Promises');

