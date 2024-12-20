   function fetchData(url) {
       // customization: Adjust headers or parameters as needed
       return fetch(url, {
           headers: {
               'Authorization': 'Bearer your_token_here'
           }
       })
       .then(response => response.json());
   }
   