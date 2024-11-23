import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import reducer from '../features/playerSlice';
import { genres } from '../../assets/constants';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-RapidAPI-KEY', '0a4dd78f3fmsh4cf5229026003d3p17e1f1jsn1b3bf0f2f995');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world?country_code=DZ',
        }),
        getSongsbyGenre: builder.query({ query: (genre) => '/charts/genre-world?genre_code=${genre}'}),
        getSongDetails: builder.query({
            query: ({ songid }) => `/tracks/details?track_id=${songid}`, // Fixed template literals
        }),
        getSongsRelated: builder.query({ query: ({ songid }) => '/tracks/related?track_id=${songid}'}),
        getArtiDetails: builder.query({ query: ({ artistId }) => 'artists/details?artist_id=${artistId}'}),
        getSongsBycountry: builder.query({ query: ({ countryCode }) => 'charts/country?country_code=${countryCode}'}),
        getSongsBySearch: builder.query({query:(searchTerm) => '/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}'}),

        
    }),
});

// Fixed export destructuring
export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongsRelatedQuery, useLazyGetArtiDetailsQuery, useGetSongsBycountryQuery, useGetSongsbyGenreQuery, useGetSongsBySearchQuery } = shazamCoreApi;

