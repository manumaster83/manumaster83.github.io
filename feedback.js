function submitFeedback() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (name && message) {
    document.getElementById('response').innerText = `Thank you for your feedback, ${name}!`;
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  } else {
    document.getElementById('response').innerText = 'Please fill in all fields.';
  }

  return false; // Prevent actual form submission
}
