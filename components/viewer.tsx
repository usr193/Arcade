import { useState, useRef, FC } from 'react';
import { Asset } from '../lib/types';
import { AssetView } from './assetView';
import { TopBar } from './topBar';



export const Viewer:FC<{assets: Asset[]}> = ({ assets }) => {

  const [view, setView] = useState<number>(0);

  const currentViewer =  useRef<HTMLDivElement>(null);
  

  function startFullScreen(): void {
    if(!document.fullscreenElement && currentViewer.current?.requestFullscreen) currentViewer.current.requestFullscreen();
    else stopFullScreen();
  }

  function stopFullScreen(): void {
    if(document.fullscreenElement) document.exitFullscreen();
  }


  function nextView(): void {
    setView(view + 1);
  }
  function handleClick(): void {
    setView(0);
  }

  const assetMap = [];

  for(const asset of assets){
    assetMap.push(<AssetView asset={asset} key={`asset-${asset.id}`} display={view === asset.id ? 'block' : 'hidden'} nextView={nextView} />)
  }

  return (
    <>
      <div className='w-[320px] h-[260px] mx-auto mt-[100px] rounded-[5px] overflow-hidden' ref={currentViewer}>
        <TopBar handleClick={handleClick} startFullScreen={startFullScreen} stopFullScreen={stopFullScreen}/>
        {assetMap}
      </div>
    </>
    
  )
}