/**
 * Created by Mike on 26-11-2016.
 */
import {Component} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {GameTemplate} from "./game-template.model";
import {GameTemplateService} from "./game-template.service";

@Component({
    selector: 'app-game-template',
    providers: [GameTemplateService],
    templateUrl: './game-template.component.html',
    styles: [`
        .cardRYF {
            margin-right: 10px;
        }
        
        .card-img-top-RYF {
            padding: 5px;        
        }
    `]
})
export class GameTemplateComponent{
    @Input() gameTemplate: GameTemplate;

    constructor(private gameTemplateService: GameTemplateService){}

    onDelete(){
        this.gameTemplateService.deleteGameTemplate(this.gameTemplate);
    }
}