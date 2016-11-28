/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import {Routes} from "@angular/router";
import {HostOverviewComponent} from "./host-overview.component";
import {HostNewComponent} from "./host-new.component";

export const HOST_ROUTES: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full'},
    { path: 'overview', component: HostOverviewComponent},
    { path: 'new/:gameTemplateId', component: HostNewComponent}
];