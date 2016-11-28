import {Component, OnInit, Input} from "@angular/core";
import {Host} from "../host/host.model";
import {GameTemplate} from "./game-template.model";
import {GameTemplateService} from "./game-template.service";
/**
 * Created by Mike Ligthart on 25-Nov-16.
 */
@Component({
    selector: 'app-game-template-list',
    providers: [GameTemplateService],
    template: `
      <h1>Host a new game</h1>
      <div class="col-md-8 col-md-offset-2">
              <app-game-template [gameTemplate]="gameTemplate"
                    *ngFor="let gameTemplate of gameTemplates"></app-game-template>
      </div>
    `
})
export class GameTemplateListComponent implements OnInit{
    //@Input() host:Host;
    gameTemplates: GameTemplate[];

    constructor(private gameService: GameTemplateService){}

    ngOnInit(): void {
        this.gameTemplates = this.gameService.getGameTemplates("0");
    }

}