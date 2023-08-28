const team = [];

const stefan = {
    name : "Stefan",
    surname : "Petrea",
    age : 21,
    city : "Palermo",
    hobby : "Videogames",
    favoriteFood : "Sushi",
    favoriteVideogames : "Inazuma Eleven series",
    favoriteFilm : "Creed",
    favouriteBook : "Arsene Lupin ladro gentiluomo",
    petName : "Kelly"
};

team.push(stefan);

const emilio = {
    name : "Emilio",
    surname : "Sanguiné",
    age : 21,
    city : "Caltanissetta",
    hobby : "Music",
    favoriteFood : "Pizza",
    favoriteVideoGame : "Elden Ring",
    favoriteFilm : "Shining",
    favoriteBook : "Lo Hobbit",
    petName : ""
}

team.push(emilio)

const giovanni = {
    name : "Giovanni",
    surname : "Spatafora",
    age : 36,
    city : "Palermo",
    hobby : "Videomaking",
    favoriteFood : "Carbonara",
    favoriteVideogame : "Pro Evolution Soccer",
    favoriteFilm : "Quarto Potere",
    favoriteBook : "Sulla strada",
    petName : ""
};

team.push(giovanni)

const matteo = {
    name : "Matteo",
    surname : "Gatto",
    age : 23,
    city : "Monterotondo",
    hobby : "TCG",
    favoriteFood : "Gelato",
    favoriteVideoGame : "Pokémon",
    favoriteFilm : "Into the Wild",
    favoriteBook : "Siddharta",
    petName : "Benji"
};

team.push(matteo);




team.sort(function(value1, value2) {  
    return value1.age - value2.age;
    })

console.log(team);

let teamInOrder = "I membri del team in ordine crescente d'età sono: ";
for (let i = 0; i < team.length; i++) {
    teamInOrder += team[i].name;
    if (i < team.length - 1) {
        teamInOrder += ", ";
    }
}

console.log(teamInOrder);
