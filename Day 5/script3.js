console.log('Fetching API');

// https://jsonplaceholder.typicode.com/todos
//using pormises 
//Making get request

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => console.log(data))


//using async/await

async function feth() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
  
    console.log('data using async await : ' + data);
}
