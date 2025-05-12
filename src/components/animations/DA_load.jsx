import { Player } from '@lottiefiles/react-lottie-player';
import sticker from '../../../public/animation/DUCK_LOAD.json';
function DA_load({className}) {
  return (
    <div className={className}>
      <Player
        autoplay
        loop
        src={sticker}
        style={{ height: '100%', width: '100%' }}/>
    </div>
  );
}

export default DA_load;
