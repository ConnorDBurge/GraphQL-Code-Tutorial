import React from 'react';
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`

    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`;

const QUERY_ALL_MOVIES = gql`

    query GetAllMovies {
        movies {
            id
            name
            releaseYear
            isInTheaters
        }
    }

`;

const DisplayData = () => {

    const { data: userData, loading: userLoading, error: userError } = useQuery(QUERY_ALL_USERS);
    const { data: movieData, loading: movieLoading, error: movieError } = useQuery(QUERY_ALL_MOVIES);

    // if (userLoading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    // if (userError) {
    //     console.error(userError);
    // }

    return (
        <div>
            <h1>User Data</h1>
            {userData && userData.users.map((user, i) => {
                return (
                    <div key={i}>
                        <h1>{user.name}, {user.username}. {user.nationality}</h1>
                    </div>
                )
            })}

            <h1>Movie Data</h1>
            {movieData && movieData.movies.map((movie, i) => {
                return (
                    <div key={i}>
                        <h1>{movie.name}, {movie.releaseYear}. {movie.isInTheaters}</h1>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayData;