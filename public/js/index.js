function validateForm() {
    // Get the values of the required fields
    const department = document.getElementById("dept").value;
    const lectureTitle = document.getElementById("lecture_title").value;
    const facultyName = document.getElementById("faculty_name").value;
    const semester = document.getElementById("sem").value;
    const date = document.getElementById("sub_date").value;
  
    // Check that the required fields are not empty
    if (department === "" || lectureTitle === "" || facultyName === "" || semester === "" || date === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // The form is valid
    return true;
  }
  // Get a reference to the submit button
const submitButton = document.getElementById("submit_button");

// Disable the submit button initially
submitButton.disabled = true;

// Enable the submit button if the form is valid
if (department !== "" && lectureTitle !== "" && facultyName !== "" && semester !== "" && date !== "") {
  submitButton.disabled = false;
}