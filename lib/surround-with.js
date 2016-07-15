'use babel';

import SurroundWithView from './surround-with-view';
import { CompositeDisposable } from 'atom';

export default {

  surroundWithView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.surroundWithView = new SurroundWithView(state.surroundWithViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.surroundWithView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'surround-with:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.surroundWithView.destroy();
  },

  serialize() {
    return {
      surroundWithViewState: this.surroundWithView.serialize()
    };
  },

  toggle() {
    console.log('SurroundWith was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
