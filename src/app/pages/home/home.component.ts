import { TokensService } from './../../services/tokens/tokens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tokenForm ={
    length : 1,
    quantity : 1
  }

  public tokens = []

  constructor(
    private tokenService : TokensService
  ) { }

  ngOnInit(): void {
  }


  public generate(){
    try {
      //
      this.tokens = this.tokenService.generateTokens(this.tokenForm.length,this.tokenForm.quantity)
      
      
    } catch (error) {
      
    }
  }

}
