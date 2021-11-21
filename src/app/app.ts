import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {First} from './first';
import {Second} from './second';
import {TestlistComponent} from './testlist/testlist.component';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
    require('./app.css')
  ]
})
export class MyApp {
  first = First;
  second = Second;
  testlist = TestlistComponent;

  animation = ons.platform.isAndroid() ? 'slide' : 'none';
  modifier = ons.platform.isAndroid() ? 'material noshadow' : '';

  constructor() {}
}
