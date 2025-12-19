import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {

  private pageTitle = inject( Title );
  private meta = inject( Meta );
  private plaform = inject( PLATFORM_ID );

  ngOnInit(): void {
    // console.log( 'site => ', this.plaform );

    // if ( isPlatformServer( this.plaform ) ) {
    //   console.log( 'is server => ', isPlatformServer( this.plaform ) );
    // }

    this.pageTitle.setTitle('Acerca de nosotros');
    this.meta.updateTag({ name: 'description', content: 'Este es mi About page'});
    this.meta.updateTag({ name: 'og:title', content: 'About page'});
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Fredy,Curso,Angular,SSR'});
  }
}
