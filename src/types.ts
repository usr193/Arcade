export interface Arcade {
  name: string
  description?: string
  schemaVersion: string
  aspectRatio: number
  steps: Step[]
}

type MediaType = 'image' | 'video'

export interface Step {
  id: string
  name: string
  imageUrl?: string
  url: string
  streamUrl?: string
  videoThumbnailUrl?: string
  type: MediaType
  hotspots: Hotspot[]
  targetId?: string | null
}

export interface Hotspot {
  id: string
  x: number // in percentage relative to the arcade size
  y: number // in percentage relative to the arcade size
  targetId?: string | null
  label: string
}
