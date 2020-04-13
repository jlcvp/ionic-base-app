import { Injectable } from '@angular/core';
import { AlertController, Alert, AlertOptions } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
  constructor(private alertCtrl: AlertController) {
    console.log('Hello AlertProvider Provider');
  }

  public async showAlert(title: string, message: string, buttons?:string[], handlers?: (()=>any)[]){
    const alertOpts: AlertOptions = {
      title,
      message,
      enableBackdropDismiss: false
    }

    if(!buttons || buttons.length == 0) {
      alertOpts.buttons = ['OK']
    } else {
      alertOpts.buttons = []
      for (let i = 0; i < buttons.length; i++) {
        const text = buttons[i];
        const handler = handlers[i]
        alertOpts.buttons.push({text, handler})
      }
    }
    
    const alert = this.alertCtrl.create(alertOpts)
    await alert.present();
  }

}
