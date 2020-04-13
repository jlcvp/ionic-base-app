import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    
  }

  public getAuthInfo(): AuthInfo {
    
    //getSession Firebase Auth

    return {
      user_id: null,
      session_id: null,
      expires: null
    }
  }

  public login(username: string, password: string): Promise<AuthInfo> {
    //Mock login, conectar ao firebase depois
    return new Promise((resolve, reject) => {
      
      if(username == 'leu' && password == 'leu') {
        resolve({
          user_id: '1afd21fedcbb39823',
          session_id: 'ffffffff3234123453124',
          expires: Date.now() + 60*60*1000 // 1hora
        })  
      } else {
        reject(new Error('Invalid Credentials'))
      }
    });
  }

}

export interface AuthInfo {
  user_id: string;
  session_id: string;
  expires: number
}
