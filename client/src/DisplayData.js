import React, { useState } from 'react';
import { useQuery, useLazyQuery, gql } from "@apollo/client";

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

const QUERY_MOVIE = gql`

    query Movie($nameInput: String!) {
        movie(name: $nameInput) {
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
    const [fetchMovie, { data: fetchedMovieData, error: fetchedMovieError }] = useLazyQuery(QUERY_MOVIE);

    const [movieSearch, setMovieSearch] = useState();

    if (fetchedMovieError) {
        console.error(fetchedMovieError)
    } else {
        console.log(fetchedMovieData)
    }

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

            <div>
                <input type="text" placeholder="Interstellar" onChange={(event) => setMovieSearch(event.target.value)} />
                <button type="button" onClick={() => { fetchMovie({ variables: { nameInput: movieSearch } }) }}>Fetch Data</button>
                <div>
                    {fetchedMovieData &&
                        <div>
                            <h1>{fetchedMovieData.movie.name}</h1>
                            <h1>{fetchedMovieData.movie.releaseYear}</h1>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default DisplayData;