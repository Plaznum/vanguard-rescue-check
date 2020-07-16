import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  card: Card = {
    id: 1,
    cardnum: 'V-EB03/001',
    name: 'Solidify Celestial, Zerachiel',
    unit: 'normal',
    clan: 'Angel Feather',
    race: 'Angel',
    nation: 'United Sanctuary',
    grade: 3,
    power: 12000,
    shield: 0,
    rarity: 'VR'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
