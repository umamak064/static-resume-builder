var _a;
// Add event listener to the button
(_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Fetch form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Organize the data into an object
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    // Generate the resume HTML
    var resumeOutput = "\n    <div>\n      <div class=\"resume-section\">\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n        <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h2>Education</h2>\n        <p>").concat(resumeData.education, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h2>Experience</h2>\n        <p>").concat(resumeData.experience, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h2>Skills</h2>\n        <p>").concat(resumeData.skills, "</p>\n      </div>\n    </div>\n  ");
    // Display the generated resume
    var outputDiv = document.getElementById('resume-output');
    outputDiv.innerHTML = resumeOutput;
});
