'use babel';

import { SelectListView, $$ } from 'atom-space-pen-views'
import { match } from 'fuzzaldrin'
import ConstructExplorer from './construct-explorer'

export default class SurroundWithView extends SelectListView {

  initialize() {
    super.initialize()
    this.addClass('construct-list')
    this.constructExplorer = new ConstructExplorer()
  }

  toggle() {
    if (this.panel && this.panel.isVisible())
      this.cancel()
    else
      this.show()
  }

  getFilterKey() {
    return 'label'
  }

  show() {
    if (!this.panel)
      this.panel = atom.workspace.addModalPanel({item: this})

    this.panel.show()
    this.storeFocusedElement()

    if (this.previouslyFocusedElement[0] && this.previouslyFocusedElement[0] !== document.body)
      this.eventElement = this.previouslyFocusedElement[0]
    else
      this.eventElement = atom.views.getView(atom.workspace)

    var constructList = this.constructExplorer.getConstructs()

    this.setItems(constructList)
    this.focusFilterEditor()
  }

  hide() {
    if (this.panel)
      this.panel.hide()
  }

  viewForItem(item) {
    var filterQuery = this.getFilterQuery()
    var matches = match(item.label, filterQuery)

    return $$(function() {

      var highlighter = (function(_this) {
        return function(command, matches, offsetIndex) {
          var i, len, matchIndex, unmatched
          var lastIndex = 0
          var matchedChars = []

          for (i = 0, len = matches.length; i < len; i++) {
            matchIndex = matches[i] - offsetIndex
            if (matchIndex < 0) {
              continue
            }
            unmatched = command.substring(lastIndex, matchIndex)
            if (unmatched) {
              if (matchedChars.length) {
                _this.span(matchedChars.join(''), {class: 'character-match'})
              }
              matchedChars = []
              _this.text(unmatched)
            }
            matchedChars.push(command[matchIndex])
            lastIndex = matchIndex + 1
          }
          if (matchedChars.length) {
            _this.span(matchedChars.join(''), {class: 'character-match'})
          }
          return _this.text(command.substring(lastIndex))
        };
      })(this)

      return this.li({class: 'event', 'data-event-name': name}, (function(_this) {
        return function() {
          _this.div({class: 'pull-right'}, function() {})
          return _this.span({title: name}, function() {
            return highlighter(item.label, matches, 0)
          })
        }
      })(this))

    })
  }

  stuff() {
    if (condition) {
      var cacca = true
    } else {

}
  }

  confirmed(item) {
    this.hide()
    this.constructExplorer.replaceSelection(item.body)
  }

  populateList() {
    super.populateList()
  }

  cancelled() {
    this.hide()
  }

}
