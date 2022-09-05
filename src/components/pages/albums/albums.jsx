import React, { Fragment,  useState } from 'react';
import StickyHeadTable from '../../UI/table/table';
import { getArtistAlbums } from '../../../services/spotify';
import SearchBar from '../searchBar/searchBar';
import './albums.css';

function Albums(props) {
    const albumTableColumns = [
        { id: 'image', label: 'Image' },
        { id: 'name', label: 'Name' },
        {
            id: 'date',
            label: 'Date',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ]

    const processRows = (albums) => {
        console.log({ albums });
        if (Array.isArray(albums) && albums.length === 0) {
            return [];
        }
        const response = albums.data.items.map((album) => {
            return {
                image: (<img alt='album portrait' src={album.images[1].url} />),
                name: album.name,
                date: album.release_date,
            };
        });

        console.log({ response })
        return response;
    };
    const [albums, setAlbums] = useState([]);

    const onSearchClick = async (input) => {
        const albums = await getArtistAlbums({ artistName: input });
        setAlbums(albums);
    };

    return (
        <Fragment>
            <SearchBar onSearchClick={onSearchClick}/>
            {albums.length !== 0 ? <StickyHeadTable className='table' columns={albumTableColumns} rows={processRows(albums)}/> : <></>}
        </Fragment>
    )
};

export default Albums;
