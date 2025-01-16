export type CardData = {
  header: string,
  body: string,
  tags?: string[];
}

export const UPDATE_CONFIG: any = {
  cardData: [{
    header: '1.0.0',
    body: 'Minor Bug Fixes',
    tags: ['tag!']
  },{
    header: '0.0.99',
    body: 'Minor Bug Fixes',
    tags: ['tag!']
}] 
}
