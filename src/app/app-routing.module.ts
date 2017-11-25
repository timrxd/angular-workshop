import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [
  { path: '', redirectTo: '/workshop', pathMatch: 'full' },
  { path: 'workshop', component: HomeComponent },
  { path: 'deck', component: DeckComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
