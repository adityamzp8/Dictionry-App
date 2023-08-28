const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  //   console.log(inpWord)
  fetch(`${url}${inpWord}`) //
    .then((res) => res.json()) //
    .then((data) => {
      console.log(data);
      result.innerHTML = ` <div class="word">
      <h3>${inpWord}</h3>
    </div>
    <div class="details">
      <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
      ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
     ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
      sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`);  // sound function not working due to api reason.
      // console.log(sound)
    })
    .catch(() => {
      result.innerHTML = `<h4 class="error"> Couldn't find the word </h4>`
    });
});
function playSound() {    // sound function
  sound.play();
}
