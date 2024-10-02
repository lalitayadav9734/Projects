
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
  
   
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
  
    
    messageInput.value = '';
  
  
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
  });
  
