import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query Movies {
    movies {
      id
      title
      slug
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      MongoUserId
    }
  }
`;

export const GET_GENRES = gql`
  query Genres {
    genres {
      id
      name
    }
  }
`;

export const GET_MOVIE = gql`
  query Movie($movieId: ID) {
    movie(id: $movieId) {
      id
      title
      slug
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      MongoUserId
    }
  }
`;

export const GET_MOVIEUSER = gql`
  query MovieUser($movieUserId: ID) {
    movieUser(id: $movieUserId) {
      title
      synopsis
      trailerUrl
      imgUrl
      rating
      genreId
      user {
        username
      }
    }
  }
`;
