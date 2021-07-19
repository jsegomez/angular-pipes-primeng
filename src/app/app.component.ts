import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'pipes';
  isLoading: boolean = false;

  changeState(){    
    this.isLoading = true;
    
    setTimeout(() => {
      this.isLoading = false;      
    }, 5500);
  }

  

}
