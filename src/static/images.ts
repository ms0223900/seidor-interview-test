export interface SingleImage {
  name: string
  src: string
}

export type ImageKeys = 
  'icon_visa' |
  'icon_master_card' 

const images: Record<ImageKeys, SingleImage> = {
  'icon_visa': {
    name: 'icon_visa',
    src: './asset/icon_visa.png',
  },
  'icon_master_card': {
    name: 'icon_master_card',
    src: './asset/icon_master_card.png',
  },
};

export default images;