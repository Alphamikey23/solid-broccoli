/* =====================================================
   Asynchronous Programming with Callbacks – STARTER
   -----------------------------------------------------
   Instructions for Students:
   -----------------------------------------------------
   1. DO NOT change function names or parameters
   2. DO NOT modify the test cases
   3. Use setTimeout to simulate async behavior
   4. Follow the error-first callback pattern
   5. Use the exact log formats mentioned in README
   ===================================================== */

   function fetchUserData(userId, callback) {
    const mockUserData = {
      1: { name: "Alice", age: 25, city: "New York" },
      2: { name: "Bob", age: 30, city: "Los Angeles" },
      3: { name: "Charlie", age: 35, city: "Chicago" }
    };
  
    // TODO 1:
    // Use setTimeout to simulate an API call with 2 seconds delay
  
    setTimeout(() => {
      // TODO 2:
      // Check if userId exists in mockUserData
      if (mockUserData[userId]) {
        callback(null, mockUserData[userId]);
      } else {  
        callback("User not found",null);
      }
  
      // TODO 3:
      // If user exists:
      //   - call callback with (null, userData)
  
      // TODO 4:
      // If user does NOT exist:
      //   - call callback with ("User not found", null)
    }, 2000);
  }
  
  function displayUserData(error, data) {
    // TODO 5:
    // If error exists:
    //   - log:  [ 'Error:', 'User not found' ]
    if(error){
      console.log("Error:", error);
    }

  
    // TODO 6:
    // If data exists:
    //   - log user details in this format:
    //     Name: Alice, Age: 25, City: New York
    if(data){
      console.log(`Name: ${data.name}, Age: ${data.age}, City: ${data.city}`);
    }
  }
  
  /* -----------------------------------------------------
     Example usage (DO NOT MODIFY)
     -----------------------------------------------------
     fetchUserData(1, displayUserData);
     fetchUserData(5, displayUserData);
  ----------------------------------------------------- */
  