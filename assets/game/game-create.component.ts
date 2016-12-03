/**
 * Created by Mike on 27-11-2016.
 */
import {Component, Input} from "@angular/core"
import {GameTemplate} from "../gameTemplate/game-template.model";

@Component({
    selector: 'app-game-create',
    templateUrl: './game-create.component.html'
})
export class GameCreateComponent{
@Input() gameTemplate: GameTemplate;



}