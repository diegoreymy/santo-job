export interface ICarouselItemsInfo {
  section_name: string;
  fragment: string;
  mobile_position: number;
  desktop_position: number;
}

export const CAROUSEL_ITEMS_MENU: ICarouselItemsInfo[] = [
  {
    section_name: 'Quem somos',
    fragment: 'quem-somos',
    mobile_position: 3,
    desktop_position: 3
  },
  {
    section_name: 'O que fazemos',
    fragment: 'o-que-fazemos',
    mobile_position: 5,
    desktop_position: 4
  },
  {
    section_name: 'Influencers',
    fragment: 'influencers',
    mobile_position: 7,
    desktop_position: 5
  },
  {
    section_name: 'Fale conosco',
    fragment: 'fale-conosco',
    mobile_position: 9,
    desktop_position: 7
  },
]
