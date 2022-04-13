const UsersList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL"
            },
            {
                id: 5,
                name: "Kelly",
                username: "kelly2019",
                age: 5,
                nationality: "CHILE"
            }
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
        friends: [
            {
                id: 3,
                name: "Sarah",
                username: "cameron",
                age: 25,
                nationality: "INDIA"
            }
        ]
    },
    {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA"
    },
    {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY"
    },
    {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE"
    }
]

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        releaseYear: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Interstellar",
        releaseYear: 2007,
        isInTheaters: true
    },
    {
        id: 3,
        name: "Superbad",
        releaseYear: 2009,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Napoleon Dynamite",
        releaseYear: 2035,
        isInTheaters: false
    }
]

module.exports = {
    UsersList,
    MovieList
}