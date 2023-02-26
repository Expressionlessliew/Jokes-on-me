const btn = document.getElementById("get-joke");
const button = document.getElementById("get-meme");
console.log(button);

const jokercontainer = document.querySelector(".joke-content");
const memecontainer = document.querySelector(".meme-content");
console.log(memecontainer);

console.log(memecontainer);

btn.addEventListener("click", generatejoke);
button.addEventListener("click", generatememe);

let joke;
function generatejoke() {
  joke = jokes[Math.floor(Math.random() * jokes.length)];
  console.log(joke);

  jokercontainer.innerHTML = joke;
}

let meme;
function generatememe() {
  meme = memes[Math.floor(Math.random() * memes.length)];
  console.log(meme);

  const newmemes = document.createElement("img");
  newmemes.setAttribute("src", meme);
  clearAll()

  memecontainer.appendChild(newmemes);
}

function clearAll() {
  memecontainer.innerHTML = ""
}

const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

const memes = ["memes1.jpg", "meme2.jpg", "memes3.jpg"];

