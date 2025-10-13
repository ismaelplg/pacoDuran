import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'shared-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent {
  isLoaded = signal<boolean>(false);

  portfolio = signal([
    {
      src: 'portfolio/1.webp',
      job: 'Arranger / Mixer',
      artist: 'Gracia Soberana Música',
      songAlbum: 'Canta',
    },
    {
      src: 'portfolio/2.webp',
      job: 'Producer / Mixer',
      artist: 'Gabriela Montemayor',
      songAlbum: 'Creo',
    },
    {
      src: 'portfolio/3.webp',
      job: 'Mixer',
      artist: 'Gracia Soberana Música',
      songAlbum: 'Himnos',
    },
    {
      src: 'portfolio/4.webp',
      job: 'Mixer',
      artist: 'Emi Cantú',
      songAlbum: 'Sublime Gracia',
    },
    {
      src: 'portfolio/5.webp',
      job: 'Mixer',
      artist: 'Emi Cantú',
      songAlbum: 'Te encuentro Jesús',
    },
    {
      src: 'portfolio/6.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Miguel Dominguez',
      songAlbum: 'Altos',
    },
    {
      src: 'portfolio/7.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Carlos Isaac',
      songAlbum: 'Attributum',
    },
    {
      src: 'portfolio/8.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos(ft. Para Su Gloria)',
      songAlbum: 'Aún Me Mates',
    },
    {
      src: 'portfolio/9.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Como El Ciervo',
    },
    {
      src: 'portfolio/10.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Completo en Ti',
    },
    {
      src: 'portfolio/11.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Cristo, El Ancla Firme Y Fuerte',
    },
    {
      src: 'portfolio/12.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Cuán Bueno Es Mi Cristo',
    },
    {
      src: 'portfolio/13.webp',
      job: 'Producer / Mixer',
      artist: 'Gratia Dei',
      songAlbum: 'De Regreso a Las Escrituras EP 5',
    },
    {
      src: 'portfolio/14.webp',
      job: 'Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Diferente Sol',
    },
    {
      src: 'portfolio/15.webp',
      job: 'Producer / Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Dos Mundos',
    },
    {
      src: 'portfolio/16.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Doxología',
    },
    {
      src: 'portfolio/17.webp',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'EGO',
    },
    {
      src: 'portfolio/18.webp',
      job: '',
      artist: 'Miguel Angel Guzman',
      songAlbum: 'El amor de mi vida',
    },
    {
      src: 'portfolio/19.webp',
      job: 'Producer / Mixer',
      artist: 'Miguel Angel Guzman',
      songAlbum: 'El mejor día de tu vida',
    },
    {
      src: 'portfolio/20.webp',
      job: '',
      artist: 'De Su Gracia',
      songAlbum: 'Creador de vida EP',
    },
    {
      src: 'portfolio/21.webp',
      job: 'Producer / Mixer',
      artist: 'Gratia Dei',
      songAlbum: 'Evangelio',
    },
    {
      src: 'portfolio/22.webp',
      job: 'Mixer / Master',
      artist: 'Dany Lune',
      songAlbum: 'Find Me',
    },
    {
      src: 'portfolio/23.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rodriguez',
      songAlbum: 'Glorioso Intercambio / Sublime Gracia',
    },
    {
      src: 'portfolio/24.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rodriguez',
      songAlbum: 'Hay Libertad',
    },
    {
      src: 'portfolio/25.webp',
      job: '',
      artist: 'Emi Cantú',
      songAlbum: 'He decidido seguir a Cristo',
    },
    {
      src: 'portfolio/26.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Himnos, Vol. 1 EP',
    },
    {
      src: 'portfolio/27.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Himnos, Vol. 2 EP',
    },
    {
      src: 'portfolio/28.webp',
      job: 'Mixer / Master',
      artist: 'Emi Cantú',
      songAlbum: 'La Creación',
    },
    {
      src: 'portfolio/29.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Gele Música',
      songAlbum: 'Luz En Las TinieblasProducer+Mixer+Master',
    },
    {
      src: 'portfolio/30.webp',
      job: 'Mixer / Master',
      artist: 'Ana & Ricky',
      songAlbum: 'Más De Cristo',
    },
    {
      src: 'portfolio/31.webp',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Más que azul',
    },
    {
      src: 'portfolio/32.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'No soy yo sino Cristo en mí',
    },
    {
      src: 'portfolio/33.webp',
      job: 'Mixer / Master',
      artist: 'Miguel Dominguez',
      songAlbum: 'No tardará_Producer',
    },
    {
      src: 'portfolio/34.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Noche de paz',
    },
    {
      src: 'portfolio/35.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Oh, gran Dios',
    },
    {
      src: 'portfolio/36.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Incentro',
      songAlbum: 'Pasión',
    },
    {
      src: 'portfolio/37.webp',
      job: '',
      artist: 'Gratia Dei',
      songAlbum: 'Perfecto plan',
    },
    {
      src: 'portfolio/38.webp',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Retratos',
    },
    {
      src: 'portfolio/39.webp',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Señor, mi Redentor Y Roca',
    },
    {
      src: 'portfolio/40.webp',
      job: 'Producer / Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Tal vez busque en el Espacio',
    },
    {
      src: 'portfolio/41.webp',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Tiempo',
    },
    {
      src: 'portfolio/42.webp',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rdz',
      songAlbum: 'Todo Lo pagó',
    },
    {
      src: 'portfolio/43.webp',
      job: 'Producer / Mixerr',
      artist: 'Miguel Dominguez',
      songAlbum: 'Todo nuevo',
    },
    {
      src: 'portfolio/44.webp',
      job: 'Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Vaivén Eterno',
    },
    {
      src: 'portfolio/45.webp',
      job: 'Mixer / Master',
      artist: 'Saviel Ramos',
      songAlbum: 'Vaivén',
    },
  ]);

  selectedIndex: number | null = null;

  onItemClick(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null; // Deseleccionar si se hace click nuevamente
    } else {
      this.selectedIndex = index;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
