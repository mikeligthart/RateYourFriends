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
      <div class="row">
        <div class="col-md-4"><h1>Host a new game</h1></div>
        <div class="col-md-2"><a href="/host/new/template" class="btn btn-primary">+ New template</a></div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <app-game-template [gameTemplate]="gameTemplate"
                    *ngFor="let gameTemplate of gameTemplates"></app-game-template>
        </div>
      </div>`
})
export class GameTemplateListComponent implements OnInit{
    //@Input() host:Host;
    gameTemplates: GameTemplate[];

    constructor(private gameService: GameTemplateService){}

    ngOnInit(): void {
        this.gameTemplates = this.gameService.getGameTemplates("0");
    }

}