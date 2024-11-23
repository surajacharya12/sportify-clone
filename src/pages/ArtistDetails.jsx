import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useLazyGetArtiDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails= () => {
    const { id: artistId }= useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistDeta, isFetching: isFetchingArtistDetails, error } = useGetSongDetailsQuery(artistId);
    
    if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
    if (error) return <Error />;

return (
    <div className="flex flex-col">
        <DetailsHeader artistId={artistId} artistDeta={artistDeta} /> 
        <RelatedSongs 
        data={Object.values(artistDeta?.songs)}
        artistId={artistDeta}
        isPlaying={isPlaying}
        activeSong={activeSong}
        />
    </div>
)
};

export default ArtistDetails;
