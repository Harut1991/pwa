import {Component, Injector, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {Base} from '../../base';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends Base implements OnInit {

  constructor(injecot: Injector,
              public main: MainService) {
    super(injecot);
  }

  ngOnInit(): void {
  }

}
