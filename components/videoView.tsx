
import { memo, useRef, FC } from 'react';

interface Props {
  src: string;
  nextView: () => void;
}

export const VideoView: FC<Props> = memo(({ src, nextView }) => {
  const vid =  useRef<HTMLVideoElement>(null);

  function ended(): void{
    if(vid.current?.currentTime){
      vid.current.currentTime = 0;
      nextView();
    }
  }

  return(
  <video ref={vid} width="320" height="240" muted autoPlay onEnded={ended}>
    <source src={src} type="video/mp4" /> 
  </video>
  )
});


