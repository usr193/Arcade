export interface Asset {
  url: string;
  format: 'image'|'video';
  id: number;
  hotspots?: Hotspot[];
}

export interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
}