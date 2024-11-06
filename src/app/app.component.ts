import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from '../types/game';
import { GameListComponent } from './game-list/game-list.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, GameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cover: string | null = null
  selectedGame: Game | null = null

  setbackground(game: Game){
    this.selectedGame = game
    this.cover = `url(${game.cover})`
  }
}
