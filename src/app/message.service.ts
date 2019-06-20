import { Injectable } from '@angular/core';
import { Router,NavigationStart  } from '@angular/router';

@Injectable()
export class MessageService {
  messages=[];
  constructor(private router:Router) { 
  router.events.subscribe(e => {
    if(e instanceof NavigationStart){
      this.messages.push(e.url);
    }
  });
  }
}