const errorMessageElement = document.getElementById('err');
function get_errorfromapi(){
 return new Promise(function errorapi(reject){fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Handle the fetched data here
    })
    .catch(error => {
      reject('Error fetching data:', error);
    })});}
    get_errorfromapi().then((value)=>{
      console.log(value);
      errorMessageElement.textContent = 'Error fetching data. Please try again later.';
    })