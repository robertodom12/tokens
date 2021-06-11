import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  private characters = 'abcdefghijklmnopqrstuvwxyzñ0123456789';

  constructor() {}

  public generateTokens(length: number, quantity) {    
    try {
      let tokens = []

      for(let i = 0 ; i < quantity ; i++){
        let token = this.generateToken(length,tokens)
        tokens.push(token)
      }
      
      return tokens;
    } catch (error) {
      throw error
    }
  }

  generateToken(length : number, currentTokens : Array<string>){
    try {
      let token = ""
      for (var i = 0; i < length; i++) {
        token += this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        );
      }

      if(currentTokens.indexOf(token) > 0){
        return this.generateToken(length,currentTokens)
      }

      return token
    } catch (error) {
      throw error
    }
  }

}
