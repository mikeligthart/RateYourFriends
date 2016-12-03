/**
 * Created by Mike Ligthart on 22-Nov-16.
 */
import { Component } from "@angular/core"

@Component({
    selector: 'app-host-overview',
    template:
        `<div class="row">
          <app-game-list></app-game-list>
        </div>
        <div class="row">
          <app-game-template-list></app-game-template-list>
      </div>`
})
export class HostOverviewComponent{

}