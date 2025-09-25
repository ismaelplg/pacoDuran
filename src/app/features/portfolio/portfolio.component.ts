import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'shared-portfolio',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent {
  isLoaded = signal<boolean>(false);

  portfolio = signal([
    {
      src: 'portfolio/1.png',
      job: 'Arranger / Mixer',
      artist: 'Gracia Soberana Música',
      songAlbum: 'Canta',
    },
    {
      src: 'portfolio/2.png',
      job: 'Producer / Mixer',
      artist: 'Gabriela Montemayor',
      songAlbum: 'Creo',
    },
    {
      src: 'portfolio/3.png',
      job: 'Mixer',
      artist: 'Gracia Soberana Música',
      songAlbum: 'Himnos',
    },
    {
      src: 'portfolio/4.png',
      job: 'Mixer',
      artist: 'Emi Cantú',
      songAlbum: 'Sublime Gracia',
    },
    {
      src: 'portfolio/5.png',
      job: 'Mixer',
      artist: 'Emi Cantú',
      songAlbum: 'Te encuentro Jesús',
    },
    {
      src: 'portfolio/6.png',
      job: 'Producer / Mixer / Master',
      artist: 'Miguel Dominguez',
      songAlbum: 'Altos',
    },
    {
      src: 'portfolio/7.png',
      job: 'Producer / Mixer / Master',
      artist: 'Carlos Isaac',
      songAlbum: 'Attributum',
    },
    {
      src: 'portfolio/8.png',
      job: 'Producer / Mixer',
      artist: 'Doulos(ft. Para Su Gloria)',
      songAlbum: 'Aún Me Mates',
    },
    {
      src: 'portfolio/9.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Como El Ciervo',
    },
    {
      src: 'portfolio/10.png',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Completo en Ti',
    },
    {
      src: 'portfolio/11.png',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Cristo, El Ancla Firme Y Fuerte',
    },
    {
      src: 'portfolio/12.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Cuán Bueno Es Mi Cristo',
    },
    {
      src: 'portfolio/13.png',
      job: 'Producer / Mixer',
      artist: 'Gratia Dei',
      songAlbum: 'De Regreso a Las Escrituras EP 5',
    },
    {
      src: 'portfolio/14.png',
      job: 'Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Diferente Sol',
    },
    {
      src: 'portfolio/15.png',
      job: 'Producer / Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Dos Mundos',
    },
    {
      src: 'portfolio/16.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Doxología',
    },
    {
      src: 'portfolio/17.png',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'EGO',
    },
    {
      src: 'portfolio/18.png',
      job: '',
      artist: 'Miguel Angel Guzman',
      songAlbum: 'El amor de mi vida',
    },
    {
      src: 'portfolio/19.png',
      job: 'Producer / Mixer',
      artist: 'Miguel Angel Guzman',
      songAlbum: 'El mejor día de tu vida',
    },
    {
      src: 'portfolio/20.png',
      job: '',
      artist: 'De Su Gracia',
      songAlbum: 'Creador de vida EP',
    },
    {
      src: 'portfolio/21.png',
      job: 'Producer / Mixer',
      artist: 'Gratia Dei',
      songAlbum: 'Evangelio',
    },
    {
      src: 'portfolio/22.png',
      job: 'Mixer / Master',
      artist: 'Dany Lune',
      songAlbum: 'Find Me',
    },
    {
      src: 'portfolio/23.png',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rodriguez',
      songAlbum: 'Glorioso Intercambio / Sublime Gracia',
    },
    {
      src: 'portfolio/24.png',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rodriguez',
      songAlbum: 'Hay Libertad',
    },
    {
      src: 'portfolio/25.png',
      job: '',
      artist: 'Emi Cantú',
      songAlbum: 'He decidido seguir a Cristo',
    },
    {
      src: 'portfolio/26.png',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Himnos, Vol. 1 EP',
    },
    {
      src: 'portfolio/27.png',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Himnos, Vol. 2 EP',
    },
    {
      src: 'portfolio/28.png',
      job: 'Mixer / Master',
      artist: 'Emi Cantú',
      songAlbum: 'La Creación',
    },
    {
      src: 'portfolio/29.png',
      job: 'Producer / Mixer / Master',
      artist: 'Gele Música',
      songAlbum: 'Luz En Las TinieblasProducer+Mixer+Master',
    },
    {
      src: 'portfolio/30.png',
      job: 'Mixer / Master',
      artist: 'Ana & Ricky',
      songAlbum: 'Más De Cristo',
    },
    {
      src: 'portfolio/31.png',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Más que azul',
    },
    {
      src: 'portfolio/32.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'No soy yo sino Cristo en mí',
    },
    {
      src: 'portfolio/33.png',
      job: 'Mixer / Master',
      artist: 'Miguel Dominguez',
      songAlbum: 'No tardará_Producer',
    },
    {
      src: 'portfolio/34.png',
      job: 'Producer / Mixer / Master',
      artist: 'Doulos',
      songAlbum: 'Noche de paz',
    },
    {
      src: 'portfolio/35.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Oh, gran Dios',
    },
    {
      src: 'portfolio/36.png',
      job: 'Producer / Mixer / Master',
      artist: 'Incentro',
      songAlbum: 'Pasión',
    },
    {
      src: 'portfolio/37.png',
      job: '',
      artist: 'Gratia Dei',
      songAlbum: 'Perfecto plan',
    },
    {
      src: 'portfolio/38.png',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Retratos',
    },
    {
      src: 'portfolio/39.png',
      job: 'Producer / Mixer',
      artist: 'Doulos',
      songAlbum: 'Señor, mi Redentor Y Roca',
    },
    {
      src: 'portfolio/40.png',
      job: 'Producer / Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Tal vez busque en el Espacio',
    },
    {
      src: 'portfolio/41.png',
      job: 'Mixer',
      artist: 'David Saldivar',
      songAlbum: 'Tiempo',
    },
    {
      src: 'portfolio/42.png',
      job: 'Producer / Mixer / Master',
      artist: 'Yael Rdz',
      songAlbum: 'Todo Lo pagó',
    },
    {
      src: 'portfolio/43.png',
      job: 'Producer / Mixerr',
      artist: 'Miguel Dominguez',
      songAlbum: 'Todo nuevo',
    },
    {
      src: 'portfolio/44.png',
      job: 'Mixer / Master',
      artist: 'David Saldivar',
      songAlbum: 'Vaivén Eterno',
    },
    {
      src: 'portfolio/45.png',
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
