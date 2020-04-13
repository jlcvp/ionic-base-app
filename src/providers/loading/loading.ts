import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  private loading: Loading
  constructor(private loadingCtrl: LoadingController) {
    console.log('Hello LoadingProvider Provider');
  }

  async showLoading(message: string): Promise<void> {
    await this.dismiss()
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: false, 
      dismissOnPageChange: true,
      content: message || 'Aguarde...'
    })
    await this.loading.present()
  }

  async dismiss(): Promise<void> {
    if(this.loading) {
      await this.loading.dismiss()
      this.loading = null
    }
  }

}
