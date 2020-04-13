import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username: string;
  private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private auth: AuthProvider, 
    private loading: LoadingProvider,
    private alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    await this.loading.showLoading('Autenticando')
    try {
      const authInfo = await this.auth.login(this.username, this.password);
      await this.alert.showAlert('Autenticado', 'Autenticação efetuada com sucesso!', ['OK'], [() => {
        this.navCtrl.setRoot(HomePage)
      }])
      console.log({authInfo})
    } catch (error) {
      console.error(error)
      await this.alert.showAlert('Falha ao Autenticar', 'Por favor, verifique as credenciais e tente novamente')
    } finally {
      this.loading.dismiss()
    }
    
  }

}
