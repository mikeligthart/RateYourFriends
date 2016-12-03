/**
 * Created by Mike Ligthart on 29-Nov-16.
 */
import {Component, OnInit, OnDestroy} from "@angular/core"
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../game/game.service";
import {Game} from "../game/game.model";

@Component({
    selector: 'app-host-view-game',
    providers: [GameService],
    template: `<app-game-view [game]="game"></app-game-view>`
})
export class HostViewGameComponent implements OnInit, OnDestroy{
    private game: Game;
    private sub: any;

    constructor(private gameService: GameService, private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.sub = this.route.params
            .subscribe(params => {
                this.game = this.gameService.getGame(params['id']);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }



}