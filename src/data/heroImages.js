import jigarwalaImg from '../assets/img/jigarwala.jpg';
import akshaykr from '../assets/artists/akshaykr.jpg';
import srk from '../assets/artists/srk.jpg';
import salmankhan from '../assets/artists/salmankhan.jpg';
import allu from '../assets/img/allu.jpg';
import yash from '../assets/img/yash.jpg';
import first from '../assets/insights/first.jpg';
import second from '../assets/insights/second.jpg';
import third from '../assets/insights/third.jpg';

export const heroImages = {
  studio: [
    {
      id: 1,
      src: jigarwalaImg,
      alt: 'Professional recording studio with mixing console'
    },
    {
      id: 2,
      src: allu,
      alt: 'Artist recording vocals in studio booth'
    },
    {
      id: 3,
      src: yash,
      alt: 'Music producer working at digital audio workstation'
    }
  ],
  performance: [
    {
      id: 1,
      src: akshaykr,
      alt: 'Live concert with stage lighting and crowd'
    },
    {
      id: 2,
      src: srk,
      alt: 'Music festival main stage performance'
    },
    {
      id: 3,
      src: salmankhan,
      alt: 'Intimate acoustic performance venue'
    }
  ],
  artists: [
    {
      id: 1,
      src: second,
      alt: 'Professional artist portrait session'
    },
    {
      id: 2,
      src: first,
      alt: 'Singer-songwriter with guitar in studio'
    },
    {
      id: 3,
      src: third,
      alt: 'Band promotional photoshoot'
    }
  ],
  production: [
    {
      id: 1,
      src: '/images/hero/production/equipment-1.jpg',
      alt: 'Professional audio equipment and synthesizers'
    },
    {
      id: 2,
      src: '/images/hero/production/equipment-2.jpg',
      alt: 'Vintage vinyl records and turntables'
    },
    {
      id: 3,
      src: '/images/hero/production/equipment-3.jpg',
      alt: 'Digital music production software interface'
    }
  ]
};

export const heroGridConfig = [
  { 
    category: 'studio', 
    title: 'Movies',
    subtitle: '',
    className: 'col-span-1 row-span-1'
  },
  { 
    category: 'performance', 
    title: 'Artists',
    subtitle: '',
    className: 'col-span-1 row-span-1'
  },
  { 
    category: 'artists', 
    title: 'Achievements',
    subtitle: '',
    className: 'col-span-1 row-span-1'
  },
];