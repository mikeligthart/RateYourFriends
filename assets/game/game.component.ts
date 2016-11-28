/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
import {Component} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Game} from "./game.model";
import {GameService} from "./game.service";

@Component({
    selector: 'app-game',
    providers: [GameService],
    templateUrl: './game.component.html',
    styles: [`
        .cardRYF {
            margin-right: 10px;
        }
        
        .card-img-top-RYF {
            padding: 5px;        
        }
    `]
})
export class GameComponent{
    @Input() game: Game;

    constructor(private gameService: GameService){}

    onDelete(){
        this.gameService.deleteGame(this.game);
    }
}