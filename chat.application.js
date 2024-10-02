// script.js
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
  
    // Add the message to the chat
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
  
    // Clear the input field
    messageInput.value = '';
  
    // Scroll to the bottom
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
  });
  