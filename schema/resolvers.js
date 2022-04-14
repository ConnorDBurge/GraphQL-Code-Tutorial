const { UsersList, MovieList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {

    Query: {

        // User Resolvers
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = Number(args.id);
            const user = _.find(UsersList, { id: id })
            return user;
        },

        // Movie Resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, { name: name })
            return movie;
        }
    },

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => {
                return movie.releaseYear >= 2000 && movie.releaseYear <= 2010
            })
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UsersList[UsersList.length - 1].id
            user.id = lastId + 1;
            UsersList.push(user);
            return user;
        },
        updateUserName: (parent, args) => {
            const { id, newUsername } = args.input;
            const user = _.find(UsersList, { id: Number(id) })
            user.username = newUsername;
            return user;
        },
        deleteUser: (parent, args) => {
            const id = Number(args.id);
            _.remove(UsersList, { id: id })
            return null
        }
    }
}

module.exports = {
    resolvers
}