const { UsersList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {

    Query: {
        users: () => {
            return UsersList;
        },
        user: (parent, args) => {
            const id = Number(args.id);
            const user = _.find(UsersList, { id: id })
            return user;
        }
    }
}

module.exports = {
    resolvers
}