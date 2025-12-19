import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {

  private pageTitle = inject( Title );
  private meta = inject( Meta );

  ngOnInit(): void {
    this.pageTitle.setTitle('Nuestros precios');
    this.meta.updateTag({ name: 'description', content: 'Este es mi Pricing page'});
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page'});
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Fredy,Curso,Angular,SSR'});
  }
}
