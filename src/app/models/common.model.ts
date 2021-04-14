
export interface WhiteBoxData {
  name: string;
  description: string;
  ico: string;
  type: BoxType;
}

export enum BoxType {
  'white',
  'outline'
}
