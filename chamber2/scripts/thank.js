


const userInput = window.location.search;
const userData = new URLSearchParams(userInput);

const results = document.getElementById('results');

const firstname = userData.get('firstname');
const lastname = userData.get('lastname');
const title = userData.get('title');
const email = userData.get('email');
const phone = userData.get('phone');
const business = userData.get('business');
const membershipLevel = userData.get('membership-level');
const description = userData.get('description');
const timestamp = userData.get('timestamp');

results.innerHTML = `
  <h1>Membership Registration Summary</h1>
  <p>Hello <strong>${title} ${firstname} ${lastname}</strong>,</p>
  <p>Thank you for registering with <strong>${business}</strong>. Below are the details we received:</p>
  <ul>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Phone:</strong> ${phone}</li>
    <li><strong>Membership Level:</strong> ${membershipLevel}</li>
    <li><strong>Description:</strong> ${description}</li>
    <li><strong>Submitted At:</strong> ${timestamp}</li>
  </ul>
  <p>We’re excited to have you as part of our community and look forward to supporting your journey!</p>
`;