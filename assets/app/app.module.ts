import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HostComponent} from "../host/host.component";
import {HostOverviewComponent} from "../host/host-overview.component";
import {HostNewComponent} from "../host/host-new.component";
import {PlayComponent} from "../play/play.component";
import {routing} from "./app.routes";
import {AppHomeComponent} from "./app-home.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        AppHomeComponent,
        HostComponent,
        HostOverviewComponent,
        HostNewComponent,
        PlayComponent
    ],
    imports: [BrowserModule, routing, NgbModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {

}