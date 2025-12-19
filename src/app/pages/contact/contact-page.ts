import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {

  private pageTitle = inject( Title );
  private meta = inject( Meta );

  ngOnInit(): void {
    this.pageTitle.setTitle('Contactanos');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Contact page'});
    this.meta.updateTag({ name: 'og:title', content: 'Contact page'});
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Fredy,Curso,Angular,SSR'});
  }
}
