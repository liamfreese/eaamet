const delayedPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Delayed Success!');
  }, 2000);
});

delayedPromise.then(value => {
  console.log(value);  // Output after 2 seconds: 'Delayed Success!'
});
