
const page = document.querySelector("#page");
const infoBox = document.querySelector("#infoBox");
const plaatje = document.querySelector("#infoWrapper");



const batman = {
    day: {
        name: "Bruce Wayne",
        job: "Retired",
        residence: "Wayne Manor, Gothem City",
        "best friend": "Alfred",
        image: "https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg",
    },
    night: {
        name: "Batman",
        job: "Vigilante",
        residence: "The bat cave",
        "best friend": "Jim Gordon",
        vehicle: "Bat mobile",
        image: "https://www.wallofcelebrities.com/celebrity/batman/pictures/xxlarge/batman_1825668.jpg",
    },
};

const naam = document.createElement("h1");
naam.innerText = batman.day.name;
const ban = document.createElement("p");
ban.innerText = "job";
const baan = document.createElement("p");
baan.innerText = batman.day.job;
infoBox.append(naam, ban, baan);

const resi = document.createElement("p");
resi.innerText = "Residence";
const res = document.createElement("P");
res.innerText = batman.day.residence;
infoBox.append(resi, res);

const best = document.createElement("p");
best.innerText = "bestfriend";
const friend = document.createElement("p");
friend.innerText = batman.day["best friend"];
infoBox.append(best, friend);

const image = document.createElement("img");
image.src = batman.day.image;
page.append(image);

let toggle = true;
const isEvening = () => {
    if (toggle) {
        naam.innerText = batman.night.name;
        ban.innerText = "job";
        baan.innerText = batman.night.job;
        button.innerText = "Daglicht";
        resi.innerText = "Residence";
        res.innerText = batman.night.residence;
        best.innerText = "bestfriend";
        friend.innerText = batman.night["best friend"];
        image.src = batman.night.image;
        toggle = false;
    } else {
        naam.innerText = batman.day.name;
        ban.innerText = "job";
        baan.innerText = batman.day.job;
        resi.innerText = "Residence";
        res.innerText = batman.day.residence;
        best.innerText = "bestfriend";
        friend.innerText = batman.day["best friend"];
        image.src = batman.day.image;
        button.innerText = "Nacht";
        toggle = true;
    }
};


const button = document.createElement("button");
button.innerText = "Change Heading";
button.addEventListener("click", isEvening);
infoBox.appendChild(button);