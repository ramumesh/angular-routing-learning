import { Component } from '@angular/core';
import { MessageService} from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   constructor(private messageService:MessageService) { }
}
