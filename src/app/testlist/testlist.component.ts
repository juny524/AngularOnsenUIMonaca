import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-testlist]',
  template: require('./testlist.component.html'),
  styles: [
    require('./testlist.component.css')
  ]
})
export class TestlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
