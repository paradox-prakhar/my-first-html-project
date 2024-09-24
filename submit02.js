// JavaScript to handle form submission and show the thank you message
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get form data
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("Fathername").value;
    const rollNo = document.getElementById("rollno").value;
    const dob = document.getElementById("DOB").value;
    const institution = document.getElementById("Institution").value;
    const gender = document.querySelector('input[name="Gender"]:checked').value;
    const course = document.getElementById("course").value;

    // Create the thank you message
    const message = `
        <strong>Name:</strong> ${name} <br>
        <strong>Father's Name:</strong> ${fatherName} <br>
        <strong>Roll No:</strong> ${rollNo} <br>
        <strong>Date of Birth:</strong> ${dob} <br>
        <strong>Institution Name:</strong> ${institution} <br>
        <strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1)} <br>
        <strong>Course:</strong> ${course}
    `;

    // Show thank you message and hide form
    document.getElementById("myForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
    document.getElementById("submittedDetails").innerHTML = message;
});
