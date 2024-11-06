import { Component, EventEmitter, Output } from '@angular/core';
import { Game } from '../../types/game';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  selectedGame: Game | null = null
  @Output() setFavoriteGame = new EventEmitter<Game>()

  games: Game[] = [
    {
      id: 1,
      name: "God of war: Ragnarök",
      color: "#507cbf",
      icon: "https://cdn2.steamgriddb.com/icon/8ee614c45c942ee01df45850ab77ee31.png",
      cover: "https://assets-prd.ignimgs.com/2022/11/03/gow-ragna-review-blog-1667470875999.jpg",
    },
    {
      id: 2,
      name: "Uncharted 4: Thief end",
      color: "#ff975e",
      icon: "https://cdn2.steamgriddb.com/grid/2e2a4406b38f795cc3f98528f10f08f9.png",
      cover: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/uncharted4athiefsend-1657645028877-9228.jpg"
    },
    {
      id: 3,
      name: "Marvel's Spider-Man",
      color: "#d23f37",
      icon: "https://cdn2.steamgriddb.com/icon/92c4661685bf6681f6a33b78ef729658.png",
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/ss_000ef57509c773d07a94c1b8c27a8f8966274d62.1920x1080.jpg?t=1725652915"
    }
  ]

  ngOnInit(){
    this.setGame(this.games[1])
  }

  setGame(game: Game | null){
    this.selectedGame = game
    if(game) this.setFavoriteGame.emit(game)
  }

}
