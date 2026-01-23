console.log("Start fetching data...");

fetchDataFromServer() // This returns a Promise
  .then(data => {
    // This runs ONLY if the Promise is fulfilled (success)
    console.log("Success! Data received:", data);
    // We can chain promises! Let's process the data
    return processData(data); // Assume this also returns a Promise
  })
  .then(processedResult => {
    console.log("Data processed successfully:", processedResult);
  })
  .catch(error => {
    // This runs ONLY if ANY Promise in the chain is rejected (failure)
    console.error("Error occurred:", error);
  });

console.log("Fetch request initiated, waiting for Promise to settle...");