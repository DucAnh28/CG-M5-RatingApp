import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppRating';
  alo = '';
  done(number:any){
    if (number>7){
      this.alo = "tot";
    }
    else if (number>5){
      this.alo = "bthuong";
    }
    else if (number>3){
      this.alo = "Trung binh";
    }
    else {
      this.alo = "te";
    }
  }
}
