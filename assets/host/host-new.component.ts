/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import {Component, OnInit, OnDestroy} from "@angular/core"
import {GameTemplate} from "../game/game-template.model";
import {GameTemplateService} from "../game/game-template.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-host-new',
    providers: [GameTemplateService],
    templateUrl: './host-new.component.html'
})
export class HostNewComponent implements OnInit, OnDestroy{
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