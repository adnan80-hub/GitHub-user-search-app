
// ========== CHANGE THEME ================

let body = document.querySelector("body");

let change = document.querySelector(".theme-github");
let word = document.querySelector(".dark-light");
let icon = document.querySelector(".moon-sun");

let searchPage = document.querySelector(".search-page");

change.onclick = function () {
    if (body.className === "theme-light") {
        body.classList.replace("theme-light", "theme-dark");
    } else {
        body.classList.replace("theme-dark", "theme-light");
    }

    if (word.textContent === "DARK" || icon.src === "assets/icon-moon.svg") {
        icon.src = "assets/icon-sun.svg";
        word.textContent = "LIGHT";
    } else {
        icon.src = "assets/icon-moon.svg";
        word.textContent = "DARK";
    }
}

// ============= API GITHUB ========================

const imgUser = document.querySelector(".img-user");
const nameUser = document.querySelector(".name-profile");
const bioUser = document.querySelector("span");
let dateUser = document.querySelector(".date-user");

let num_repo = document.querySelector(".num-repo");
let num_followers = document.querySelector(".num-followers");
let num_following = document.querySelector(".num-following");

const nameLocation = document.querySelector(".name-location");
const link = document.querySelector(".name-link");
const twitter = document.querySelector(".name-twitter");
const company = document.querySelector(".name-company");

let inputSearch = document.querySelector("input");
let button = document.querySelector("button");


let day = document.querySelector(".num-day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");



let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

button.onclick = function () {
    if (inputSearch.value === "") return false;

    fetch(`https://api.github.com/users/${inputSearch.value}`).then((first) => {
        let data = first.json();
        return data;
    }).then((second) => {

        imgUser.src = second.avatar_url;
        nameUser.textContent = second.name;
        // ==== ==========

        second.location !== null ? nameLocation.textContent = second.location : nameLocation.textContent = "Not Available";
        second.twitter_username !== null ? twitter.textContent = second.twitter_username : twitter.textContent = "Not Available";
        second.company !== null ? company.textContent = second.company : company.textContent = "Not Available";
        // ==== ==========

        link.textContent = second.html_url;
        num_repo.textContent = second.public_repos;
        num_followers.textContent = second.followers;
        num_following.textContent = second.following;

        second.bio !== null ? bioUser.textContent = second.bio : bioUser.textContent = "Not Available";

        let date = new Date(second.created_at);

        day.textContent = date.getDay();
        month.textContent = months[date.getMonth()].slice(0, 3);
        year.textContent = date.getFullYear()
    })


}


async function getting_user() {
    let fetching = await fetch("https://api.github.com/users/adnan80-hub");
    let getData = await fetching.json();
    console.log(getData)
    // let date = new Date(getData.created_at)
    // console.log(date.getMonth())
    // console.log(months[date.getMonth()].slice(0, 3))
}

getting_user()


let newDate = new Date();

newDate.setDate(0)

console.log(newDate)

