
  
  // don't change any code above this line
  
  describe("The countRegNumber function ", function() {
    
    // don't change code above this line
    
    it("should return 1 for 'CY 123-223'", function() {
      
      // change anything in here to make the test pass
      assert.equal(1, countRegNumber("CY 123-223, CA 123-123"));
    });
    
    it("should return 2 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 2;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(2,EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123"));
    });
    
    it("should return 5 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 5;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(5,EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
    });
    
  });
  