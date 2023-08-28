const team = [];

const stefan = {
    name : "Stefan",
    surname : "Petrea",
    age : "21",
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
    age : "21",
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
    age : "36",
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
    age : "23  ",
    city : "Monterotondo",
    hobby : "TCG",
    favoriteFood : "Gelato",
    favoriteVideoGame : "Pokémon",
    favoriteFilm : "Into the Wild",
    favoriteBook : "Siddharta",
    petName : "Benji"
};

team.push(matteo);

//Print the team in alphabetical order (surname name)

const sortedBySurname = team.sort((a, b) => a.surname.localeCompare(b.surname));
console.log("Team in ordine alfabetico:");
sortedBySurname.forEach(member => console.log(member.surname + " " + member.name));



//Print who has a pet (name petName)

const membersWithPet = team.filter(member => member.petName);
console.log("I membri che hanno un animale sono:");
membersWithPet.forEach(member => console.log(member.name + " " + member.surname + " - " + member.petName));