//  Submit function to process form data
  function submit() {
    // Get form values
      const id = document.getElementById("id").value;
      document.getElementById("idNumber").innerHTML = id;      
      const lastName = document.getElementById("lname").value.charAt(0).toUpperCase() + document.getElementById("lname").value.slice(1).toLowerCase();
      const firstName = document.getElementById("fname").value.charAt(0).toUpperCase() + document.getElementById("fname").value.slice(1).toLowerCase();
      var middleName = document.getElementById("mname").value;
    // if condition for empty fields
      if (lastName === "" || firstName === "" ) {
          alert("Please fill in all name fields.");
          return;
        }
      else if (id === "") {
        alert("Please fill in the ID field.");
        return;
      }
      // middle name condition
      let middleInitial = middleName === "" ? "N/A" : middleName.charAt(0).toUpperCase() + ".";
      const fullName = lastName + ", " + firstName + " " + middleInitial;
      document.getElementById("fullName").innerHTML = fullName;
      // position, rate, days
      const position = document.getElementById("position").value;
      document.getElementById("position1").innerHTML = position;
      
      const rate = document.getElementById("rate").value;
      document.getElementById("totalRate").innerHTML = rate;
      
      const days = document.getElementById("days").value;
      document.getElementById("totalDays").innerHTML = days;
      // validations for position, rate, days
      if (position === "") {
       alert("Please fill in the Position field.");
       return;
     }
     else if (rate === "" || days === "") {
       alert("Please fill in the Rate and Days fields.");
       return;
    }
    // calculations and display results
      const grossTotal = rate * days;
      document.getElementById("gross").innerHTML = grossTotal;
    // deductions calculation
      if (grossTotal == grossTotal) {
          let sss = grossTotal * 0.05;
          let pagibig = grossTotal * 0.03;
          let phil = grossTotal * 0.02;
          let tax = grossTotal * 0.05;
          let totalDeduction = sss + pagibig + phil + tax;
          let netPay = grossTotal - totalDeduction;
    // display deductions
          document.getElementById("sss").innerHTML = sss.toFixed(2); 
          document.getElementById("pagIbig").innerHTML = pagibig.toFixed(2);
          document.getElementById("philhealth").innerHTML = phil.toFixed(2);
          document.getElementById("tax").innerHTML = tax.toFixed(2);
          document.getElementById("deduct").innerHTML = totalDeduction.toFixed(2);
          document.getElementById("netPay").innerHTML = netPay.toFixed(2);
      }
    // hide form and show output
  let form = document.getElementById("form");
  let outputForm = document.getElementById("outputForm");
  form.style.display = "none";    
  outputForm.style.display = "block";
  }
  // exit function to reset form
  function exit() {
      document.getElementById("id").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("fname").value = "";
      document.getElementById("mname").value = "";
      document.getElementById("position").value = "";
      document.getElementById("rate").value = "";
      document.getElementById("days").value = "";
      let resetForm = document.getElementById("form");
      let OutputForm = document.getElementById("outputForm");
      resetForm.style.display = "block";
      OutputForm.style.display = "none";
  }