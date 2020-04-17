import {Injector} from '@angular/core';
import {MainService} from './services/main.service';

export class Base {
  constructor(injector: Injector){
    console.log(injector.get(MainService));
  }
}
