
// We must wrap the await calls in an async function
async function handleData() {
  console.log("Start fetching data (using async/await)...");
  try {
    // Pause here until fetchDataFromServer() Promise resolves
    let data = await fetchDataFromServer();
    console.log("Success! Data received:", data);

    // Pause here until processData() Promise resolves
    let processedResult = await processData(data);
    console.log("Data processed successfully:", processedResult);

  } catch (error) {
    // If any 'await'ed Promise rejects, it jumps to the catch block
    console.error("Error occurred:", error);
  }
  console.log("Async function finished.");
}

// Call the async function to start the process
handleData();
console.log("handleData function called, waiting for async operations...");