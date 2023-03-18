
function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  const cards = ["Guadalupe", "Ollie", "Aki"];
  const messages = writeCards(cards, "surprise");
  
  for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
  }
  


  function countDown() {
    var countdown = 9;
    while (countdown >= 0) {
      console.log(countdown);
      countdown = countdown - 1;
    }
    console.log("countdown");
  }
  
countDown();
  