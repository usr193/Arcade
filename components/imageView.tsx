import { memo, FC } from 'react';
import { Hotspot } from '../lib/types';
import { Overlay } from './overlay';

interface Props {
  src: string;
  nextView: () => void;
  hotspots: Hotspot[] | undefined;
}

export const ImageView: FC<Props> = memo(({ src, nextView, hotspots }) => {
  return (
    <div className='relative object-contain'>
      <img
      src={src}
      alt=""
      />  
     {hotspots && <Overlay nextView={nextView} hotspots={hotspots} />}
    </div>
  )}
)



