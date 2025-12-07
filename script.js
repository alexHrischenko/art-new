(function() {
  emailjs.init("5JkgK3vh2zO03g8FM"); // 🔸 вставь свой PUBLIC_KEY из emailjs.com
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.send("service_252aegw", "template_6612qm2", {
    from_name: this.from_name.value,
    reply_to: this.reply_to.value,
    message: this.message.value
  })
  .then(function() {
    alert("✅ Заявка відправлена! Дякуємо - за замовлення на пошті Вас чекає інструкція для отримання книги💛");
  }, function(error) {
    alert("❌ Помилка при відправці: " + JSON.stringify(error));
  });
});

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let colors = ["#ffa94d", "#ffb84d", "#ffd24d", "#fff44d"];
function drawBrushStrokes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineWidth = Math.random() * 40 + 10;
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.globalAlpha = 0.08;
    ctx.stroke();
  }
}
setInterval(drawBrushStrokes, 2000);
