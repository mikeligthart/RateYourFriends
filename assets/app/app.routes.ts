import {Routes, RouterModule} from "@angular/router";
import {HostComponent} from "../host/host.component";
import {HOST_ROUTES} from "../host/host.routes";
import {PlayComponent} from "../play/play.component";
import {AppHomeComponent} from "./app-home.component";
/**
 * Created by Mike Ligthart on 22-Nov-16.
 */

const APP_ROUTES: Routes = [
    { path: '', component:AppHomeComponent, pathMatch: 'full'},
    { path: 'play', component: PlayComponent},
    { path: 'host', component: HostComponent, children: HOST_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);