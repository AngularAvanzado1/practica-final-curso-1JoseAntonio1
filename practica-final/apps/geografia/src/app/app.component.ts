import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'ab-geo-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'geografia';

  constructor(private swUpdate: SwUpdate,
              private swPush: SwPush){}

  ngOnInit() {
    this.checkVersionUpdates();
    //this.subscribeToNotifications(); Falla, por no tener clave de un servidor real
  }

  //Comprobar Actualizaciones
  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(data => console.log(data))
      this.swUpdate.available.subscribe(event => {
    if (event.current.appData) {
      const appData: any = event.current.appData;
      let msg = `New version ${appData.version} available.`;
      msg += `${appData.changelog}.`;
      msg += 'Reaload now?';
      if (confirm(msg)) {
        window.location.reload();
    }}});}
   }

   //Suscripcion
   private subscribeToNotifications() {
    if (this.swPush.isEnabled) {
    this.swPush
    .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
    .then(sub => {
    console.log('subscription to server', sub.toJSON());
    this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
    })
    .catch(err => console.error('Could not subscribe', err));
    }
    }


}
