import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post-Cards World!';
  Data: any;

  constructor(private api: AppServiceService) {
    this.api.getData().subscribe(
      (res) => {
        this.Data = res;
      }, (error) => {
        console.log(error)
      }
    )
  }
}
