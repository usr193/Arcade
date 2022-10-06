
import fs from 'fs';
import path from 'path';
import { Asset } from '../lib/types';

const dataFile:string = path.join(process.cwd(), 'data/arcades/123.json');

export function getAssets(): Asset[] {
  const fileContents:string = fs.readFileSync(dataFile, 'utf-8');
  const fileContentsObj = JSON.parse(fileContents);
  const assetsArr:Asset[] = [];
  let index: number = 0;
  
  for(const step of fileContentsObj.steps) {
    if(step.url){
      const urlSplitArray: string[] = step.url.split('.');  
      const urlExtension:string = urlSplitArray[urlSplitArray.length - 1];
      if (urlExtension === 'png'){
        assetsArr.push({url: step.url, format: 'image', id: index, hotspots: step.hotspots});
      }
      else if(urlExtension === 'mp4'){
        assetsArr.push({ url: step.url, format: 'video', id: index});
      }
    }
    index += 1;
  }                    
  return assetsArr;
}
  