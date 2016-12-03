/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import {Routes} from "@angular/router";
import {HostOverviewComponent} from "./host-overview.component";
import {HostNewGameComponent} from "./host-new-game.component";
import {HostNewTemplateComponent} from "./host-new-template.component";
import {HostViewGameComponent} from "./host-view-game.component";

export const HOST_ROUTES: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full'},
    { path: 'overview', component: HostOverviewComponent},
    { path: 'new/game/:gameTemplateId', component: HostNewGameComponent},
    { path: 'new/template', component: HostNewTemplateComponent},
    { path: 'view/game/:id', component: HostViewGameComponent}
];