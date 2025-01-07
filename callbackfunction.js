// call back function exmple
setTimeout(function() {console.log("hello")}, 5000)

function one(two) {
    console.log('one');
    two();
}

one(function two() {
    console.log('two');
}
)

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
      console.log("Data fetched!");
      callback("Sample Data"); // Call the callback with the fetched data
    }, 2000); // Simulate a 2-second delay
  }
  
  function processData(data) {
    console.log("Processing data: " + data);
  }
  
  fetchData(processData);
  
  // Output:
  // Fetching data...
  // (after 2 seconds)
  // Data fetched!
  // Processing data: Sample Data
  