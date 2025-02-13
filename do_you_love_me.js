const question1Container = document.querySelector(".question-container:nth-child(1)");
const question2Container = document.querySelector(".question-container:nth-child(2)");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

const answerButtons = document.querySelectorAll(".js-answer-btn"); // Câu hỏi 1
const yesBtn = document.querySelector(".js-yes-btn"); // "Ok" ở câu hỏi 2
const noBtn = document.querySelector(".js-no-btn"); // "Hong cho"

// Ẩn câu hỏi 2 và kết quả ban đầu
question2Container.style.display = "none";
resultContainer.style.display = "none";
heartLoader.style.display = "none";

// Xử lý câu hỏi 1: Sau khi chọn câu trả lời thì chuyển sang câu hỏi 2
answerButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    question1Container.style.display = "none";
    question2Container.style.display = "block";
  });
});

// Xử lý câu hỏi 2: Khi chọn "Ok", hiện hiệu ứng rồi hiển thị kết quả
yesBtn.addEventListener("click", () => {
  question2Container.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});

// Xử lý nút "Hong cho": Nút chạy lung tung khi hover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * question2Container.offsetWidth);
  const newY = Math.floor(Math.random() * question2Container.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

