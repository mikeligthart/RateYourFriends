import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HostComponent} from "../host/host.component";
import {HostOverviewComponent} from "../host/host-overview.component";
import {PlayComponent} from "../play/play.component";
import {routing} from "./app.routes";
import {AppHomeComponent} from "./app-home.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {GameComponent} from "../game/game.component";
import {GameTemplateComponent} from "../gameTemplate/game-template.component";
import {GameListComponent} from "../game/game-list.component";
import {GameTemplateListComponent} from "../gameTemplate/game-template-list.component";
import {GameCreateComponent} from "../game/game-create.component";
import {GameTemplateCreateComponent} from "../gameTemplate/game-template-create.component";
import {HostNewGameComponent} from "../host/host-new-game.component";
import {HostNewTemplateComponent} from "../host/host-new-template.component";
import {GameViewComponent} from "../game/game-view.component";
import {HostViewGameComponent} from "../host/host-view-game.component";

@NgModule({
    declarations: [
        AppComponent,
        AppHomeComponent,
        HostComponent,
        HostOverviewComponent,
        HostNewGameComponent,
        HostNewTemplateComponent,
        HostViewGameComponent,
        PlayComponent,
        GameComponent,
        GameListComponent,
        GameTemplateComponent,
        GameTemplateListComponent,
        GameCreateComponent,
        GameTemplateCreateComponent,
        GameViewComponent,
    ],
    imports: [BrowserModule, routing, NgbModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {

}