import { FC } from 'react';
import { Asset } from '../lib/types';
import { ImageView } from './imageView';
import { VideoView } from './videoView';

interface Props {
  asset: Asset;
  display: string;
  nextView: () => void;
}

export const AssetView: FC<Props> = ({ asset, display, nextView }) => {


  return (
    <div className={`${display}`}>
      {asset.format === 'image' 
      ? <ImageView src={asset.url} nextView={nextView} hotspots={asset.hotspots} /> 
      : <VideoView src={asset.url} nextView={nextView}/>}
    </div>
  )
  
}


