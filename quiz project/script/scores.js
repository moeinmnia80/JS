const data = JSON.parse(localStorage.getItem("highScores"));
const scoresList = document.querySelector(".scores__list");

if (data) {
  scoresList.innerHTML = data.map((item, index) => {
    return `
    <div class="scores__list-item">
        <div class="left">
            <span class="item__number">${index + 1}</span>
            <p class="item__text">${item.username}</p>  
        </div>
        <div class="right">
            ${item.score}
        </div>
    </div>
  `;
  });
} else {
}

console.log(data);
