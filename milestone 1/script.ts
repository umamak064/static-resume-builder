// Define a custom interface for form data (rename to avoid conflict with built-in FormData)
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

// Add event listener to the button
document.getElementById('submit')?.addEventListener('click', () => {
  // Fetch form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Organize the data into an object
  const resumeData: ResumeData = { name, email, phone, education, experience, skills };

  // Generate the resume HTML
  const resumeOutput = `
    <div>
      <div class="resume-section">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${resumeData.name}</p>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
      </div>
      <div class="resume-section">
        <h2>Education</h2>
        <p>${resumeData.education}</p>
      </div>
      <div class="resume-section">
        <h2>Experience</h2>
        <p>${resumeData.experience}</p>
      </div>
      <div class="resume-section">
        <h2>Skills</h2>
        <p>${resumeData.skills}</p>
      </div>
    </div>
  `;

  // Display the generated resume
  const outputDiv = document.getElementById('resume-output') as HTMLDivElement;
  outputDiv.innerHTML = resumeOutput;
});
