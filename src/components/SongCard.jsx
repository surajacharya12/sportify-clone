import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch(); // Fixed colon to semicolon

  const handlePauseClick = () => {
    dispatch(playPause(false)); // Pause the song
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i })); // Set the active song
    dispatch(playPause(true)); // Play the song
  };
  return (
    <div className="flex flex-col w-[240px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'}`}>
                <playPause 
                isPlaying={isPlaying} 
                activeSong={activeSong} 
                song={song}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
                />
        </div>
        <img alt='song_img'src={song.images?.coverart} />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={'/songs/${song?.key}'}>
            {song.title}
          </Link>
        </p> 
        <p className=' text-sm truncate text-gray-300 mt-1'>
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>            {song.subtitle}
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SongCard;
