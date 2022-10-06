import { useState, FC } from 'react';
import { Hotspot } from '../lib/types';
import { ClickPointer } from './clickPointer';
import { MessageBubble } from './messageBubble';


interface Props {
  nextView: () => void;
  hotspots: Hotspot[];
}

export const Overlay: FC<Props> = (({nextView, hotspots}) => {

  const [display, setDisplay] = useState<string>('none');


  function showBubble() {
    setDisplay('block');
  }

  function hideBubble() {
    setDisplay('none');
  }
  
  const overlayArr = hotspots.map((hotspot, index) => {
  const adjustedX = `${(hotspot.x * 100).toFixed(2)}%`;
  const adjustedY = `${(hotspot.y * 100).toFixed(2)}%`;
  

    return (
      <div className ={`absolute cursor-pointer`} style={{left: adjustedX, top: adjustedY}} onClick={nextView} key={`hotspot-${index}`} >

      <ClickPointer showBubble={showBubble}/>
          <MessageBubble message= {hotspot.label} display={display} hideBubble={hideBubble}/>
    
      </div>  
    );
  });

  return (
    <>
    {overlayArr}
    </>
  );
});

