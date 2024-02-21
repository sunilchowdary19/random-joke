const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    })
    .catch(error => {
        console.error("Error fetching joke:", error);
    })};

// const getJoke = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const randomIndex = Math.floor(Math.random() * data.data.length);
//         const randomEmail = data.data[randomIndex].email;
//         jokeContainer.textContent = randomEmail;
//         jokeContainer.classList.add("fade");
//     } catch (error) {
//         console.error("Error fetching joke:", error);
//     }
// };
btn.addEventListener("click",getJoke);
getJoke();
