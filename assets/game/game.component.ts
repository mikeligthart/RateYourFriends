/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
import {Component} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Game} from "./game.model";
import {GameService} from "./game.service";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
})
export class GameComponent{
    @Input() game: Game;

    constructor(private gameService: GameService){}

    onDelete(){
        this.gameService.deleteGame(this.game);
    }
}