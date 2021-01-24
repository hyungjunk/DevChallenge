const txtArea = document.querySelector("#textarea");
const tagsEl = document.querySelector("#tags");

txtArea.focus();
// 입력시 그대로 span 추가
txtArea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  } else {
    createTags(e.target.value);
  }
});

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 20;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
  console.log(123);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unhighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

// 콤마를 누를 경우 span태그 닫힘
