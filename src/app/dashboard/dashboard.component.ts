import { Component } from '@angular/core';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

console.log(TEst)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(2, 6)));
  }
}
