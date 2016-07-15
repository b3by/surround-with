'use babel';

import { SelectListView } from 'atom-space-pen-views'

export default class SurroundWithView extends SelectListView {

  initialize() {
    super.initialize()
    this.addClass('overlay from-top')
    this.setItems(['Hello', 'World'])
    console.log('creating panel')
    this.panel = this.panel || atom.workspace.addModalPanel({item: this})
    console.log('panel created, showing...')
    // this.panel.show()
    console.log('panel shown, filtering...')
    // this.focusFilterEditor()
  }

  viewForItem(item) {
    // return '<li>' + item + '</li>'
    return item
  }

  confirmed(item) {
    console.log('confirmed')
  }

  cancelled() {
    console.log('cancelled')
  }

  // constructor(serializedState) {
  //   // Create root element
  //   this.element = document.createElement('div');
  //   this.element.classList.add('surround-with');
  //
  //   // Create message element
  //   const message = document.createElement('div');
  //   message.textContent = 'The SurroundWith package is Alive! It\'s ALIVE!';
  //   message.classList.add('message');
  //   this.element.appendChild(message);
  // }

  // Returns an object that can be retrieved when package is activated
  // serialize() {}

  // Tear down any state and detach
  // destroy() {
  //   this.element.remove();
  // }

  // getElement() {
  //   return this.element;
  // }

}
