import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Test extends Component {
  @tracked displayLat = 45;
  @tracked displayLng = 15;

  @action changePosition() {
    this.displayLat = 55;
    this.displayLng = 16;
    console.log('qwe');
  }
}