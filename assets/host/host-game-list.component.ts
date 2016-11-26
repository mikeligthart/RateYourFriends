/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
import {Component, OnInit} from "@angular/core";
import {Game} from "../game/game.model";
import {GameService} from "../game/game.service";
import {Input} from "@angular/core/src/metadata/directives";
import {Host} from "./host.model";

@Component({
    selector: 'app-host-game-list',
    template: `
      <div class="col-md-8 col-md-offset-2">
              <app-game [game]="game"
                    *ngFor="let game of games"></app-game>
      </div>
    `
})
export class HostGamesHostedList implements OnInit{
    @Input() host:Host;
    games: Game[];

    constructor(private gameService: GameService){}

    ngOnInit(): void {
        this.games = this.gameService.getGames(this.host.id);
    }

}