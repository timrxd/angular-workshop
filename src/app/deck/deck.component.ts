import { Component, OnInit } from '@angular/core';
import { card } from '../card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck = []
  drawn = []

  constructor() { }

  ngOnInit() {
    this.resetDeck();
    this.shuffleDeck();
  }

  resetDeck() {
    this.drawn = [];
    this.deck = [];
    var values = ["Joker","A","2","3","4","5","6","7",
                    "8","9","10","J","Q","K"];
    var suits = ["♠","♥","♦","♣"];

    for (var x = 1; x < 14; x++) {
      for (var y = 0; y < 4; y++) {
        this.deck.push("" + values[x] + suits[y]);
      }
    }
  }

  shuffleDeck() {
    for (var x = 0; x < 52; x++) {
      this.swapCards(x,Math.floor(Math.random() * 52));
    }

  }

  swapCards(x,y) {
    var temp = this.deck[x];
    this.deck[x] = this.deck[y];
    this.deck[y] = temp;
  }

}
