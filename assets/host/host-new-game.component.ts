/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import {Component, OnInit, OnDestroy} from "@angular/core"
import {ActivatedRoute} from "@angular/router";
import {GameTemplateService} from "../gameTemplate/game-template.service";
import {GameTemplate} from "../gameTemplate/game-template.model";

@Component({
    selector: 'app-host-new-game',
    providers: [GameTemplateService],
    template: `<app-game-create [gameTemplate]="gameTemplate"></app-game-create>`
})
export class HostNewGameComponent implements OnInit, OnDestroy{
    private gameTemplate: GameTemplate;
    private sub: any;

    constructor(private gameTemplateService: GameTemplateService, private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.sub = this.route.params
            .subscribe(params => {
                this.gameTemplate = this.gameTemplateService.getGameTemplate(params['gameTemplateId']);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }



}