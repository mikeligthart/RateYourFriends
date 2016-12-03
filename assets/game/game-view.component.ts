/**
 * Created by Mike Ligthart on 29-Nov-16.
 */
import {Component, Input} from "@angular/core"
import {Game} from "./game.model";

@Component({
    selector: 'app-game-view',
    templateUrl: './game-view.component.html'
})
export class GameViewComponent{
    @Input() game: Game;

}