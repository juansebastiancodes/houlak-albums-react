import axios from 'axios';

export const getArtistAlbums = async ({ artistName }) => {
    try {
        console.log({url: process.env.REACT_APP_SPOTIFY_SERVICE});
        const response = await axios.get(`${process.env.REACT_APP_SPOTIFY_SERVICE}/api/v1/artist/${artistName}/albums`);
        console.log({response});
        return response;

    } catch (err) {
        console.log(err);
    }
};
