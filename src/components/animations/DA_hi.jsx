import { Player } from '@lottiefiles/react-lottie-player';
import sticker from '../../assets/animation/DUCK_HEY.json';
function DA_hi() {
  return (
    <div className="w-18 h-18">
      <Player
        autoplay
        loop
        src={sticker}
        style={{ height: '100%', width: '100%' }}/>
    </div>
  );
}

export default DA_hi;
