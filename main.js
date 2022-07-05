const url = "http://localhost:5500/api";

const newUser = {
    name: "Wesley",
    surname: "Bernardes",
    age: 21,
    gender: Symbol("M")
}

const updatedUser = {
    name: "Laion",
    surname: "Jordi",
    age: 21,
    gender: Symbol("M")
}

function getUser() {
    axios.get(url).then(response => {
        const data = response.data.users;

        const renderResults = document.querySelector("#render-results");
        renderResults.textContent = JSON.stringify(data);
    }).catch(error => console.log(error));
}

getUser();

