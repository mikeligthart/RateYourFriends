/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import { Component } from "@angular/core"
import {Host} from "./host.model";

@Component({
    selector: 'app-host-overview',
    templateUrl: './host-overview.component.html'
})
export class HostOverviewComponent{

    host: Host;


}