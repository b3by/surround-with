'use babel';

import SurroundWithView from './surround-with-view'
import { CompositeDisposable } from 'atom'

import JavaScript from './../constructs/javascript'

export default {

  surroundWithView: null,
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'surround-with:surround': () => this.toggle()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
    this.surroundWithView.destroy()
  },

  serialize() {
    return {
      surroundWithViewState: this.surroundWithView ? this.surroundWithView.serialize() : null
    }
  },

  toggle() {
    if (!this.surroundWithView)
      this.surroundWithView = new SurroundWithView(null)

    this.surroundWithView.toggle()
  }

};
