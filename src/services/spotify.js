import axios from 'axios';

export const getArtistAlbums = async ({ artistName }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SPOTIFY_SERVICE}/api/v1/artist/${artistName}/albums`);
        return response;

    } catch (err) {
        console.log(err);
    }
};
