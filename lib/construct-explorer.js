'use babel';

import JavaScript   from './../constructs/javascript'
import CoffeeScript from './../constructs/coffeescript'
import Python       from './../constructs/python'

let instance = null

let grammarMap = {
  'source.js': JavaScript,
  'source.coffee': CoffeeScript,
  'source.python': Python
}

export default class ConstructExplorer {

  constructor() {
    if (!instance)
      instance = this

    return instance
  }

  getCurrentGrammar() {
    return atom.workspace.getActiveTextEditor().getGrammar().scopeName
  }

  getConstructs(grammar = atom.workspace.getActiveTextEditor().getGrammar().scopeName) {
    return grammarMap[grammar]
  }

  replaceSelection(construct) {
    var editor = atom.workspace.getActiveTextEditor()
    var selection = editor.getSelectedText()

    var selectionRange = editor.getSelectedScreenRange()
    var beforeLines    = construct.split('$1')[0].match(/\n/g).length
    var afterLines     = construct.split('$1')[1].match(/\n/g).length

    var insertion = construct.replace('$1', selection)

    var startingSelectionRow = selectionRange.start.row
    var endingSelectionRow   = selectionRange.end.row

    var startingIndentationRow = startingSelectionRow + beforeLines
    var endingIndentationRow =  afterLines + beforeLines + endingSelectionRow + 1

    editor.delete()
    editor.insertText(insertion)

    editor.setCursorBufferPosition([startingIndentationRow, 0])
    editor.selectToBufferPosition([endingIndentationRow, 1])
    editor.autoIndentSelectedRows()

    editor.setCursorBufferPosition([startingSelectionRow + beforeLines], 0)
    editor.moveToBeginningOfNextWord()
    editor.editorElement.focus()
  }

}
