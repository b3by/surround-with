'use babel';

import SurroundWith from '../lib/surround-with'

describe('SurroundWith', () => {
  let workspaceElement, activationPromise, editorElement, editor

  beforeEach(() => {
    // workspaceElement = atom.views.getView(atom.workspace)
    // activationPromise = null
    //
    // waitsForPromise(() => {
    //   atom.workspace.open()
    // })
    //
    // runs(() => {
    //   console.log('BEFORE: setting stuff')
    //   editor = atom.workspace.getActiveTextEditor()
    //   editorElement = atom.views.getView(editor)
    //   activationPromise = atom.packages.activatePackage('surround-with')
    //
    //   jasmine.attachToDOM(workspaceElement)
    // })
    //
    // waitsForPromise(() => {
    //   return activationPromise
    // })
  })

  describe('when the surround-with:toggle event is triggered', () => {

    it('hides and shows the modal panel', () => {
      // expect(editorElement.querySelector('.construct-list')).not.toExist()
      // editor.setGrammar(atom.workspace.grammarRegistry.grammarForScopeName('scope.js'))
      // atom.commands.dispatch(workspaceElement, 'surround-with:toggle')

      // runs(() => {
      //   atom.workspace.open('./test').then((editor) => {
      //     editor.setGrammar(atom.workspace.grammarRegistry.grammarForScopeName('scope.js'))
      //     atom.commands.dispatch(workspaceElement, 'surround-with:toggle')
      //     // expect(workspaceElement.querySelector('.construct-list')).toExist()
      //   })

        // let surroundWithElement = workspaceElement.querySelector('.construct-list')
        // expect(surroundWithElement).toExist()
        //
        // let surroundWithPanel = atom.workspace.panelForItem(surroundWithElement)
        // expect(surroundWithPanel.isVisible()).toBe(true)
        // atom.commands.dispatch(workspaceElement, 'surround-with:toggle')
        // expect(surroundWithPanel.isVisible()).toBe(false)
      // })
    })

    // it('hides and shows the view', () => {
    //   // This test shows you an integration test testing at the view level.
    //
    //   // Attaching the workspaceElement to the DOM is required to allow the
    //   // `toBeVisible()` matchers to work. Anything testing visibility or focus
    //   // requires that the workspaceElement is on the DOM. Tests that attach the
    //   // workspaceElement to the DOM are generally slower than those off DOM.
    //   jasmine.attachToDOM(workspaceElement)
    //
    //   expect(workspaceElement.querySelector('.surround-with')).not.toExist()
    //
    //   // This is an activation event, triggering it causes the package to be
    //   // activated.
    //   atom.commands.dispatch(workspaceElement, 'surround-with:toggle')
    //
    //   waitsForPromise(() => {
    //     return activationPromise
    //   });
    //
    //   runs(() => {
    //     // Now we can test for view visibility
    //     let surroundWithElement = workspaceElement.querySelector('.surround-with')
    //     expect(surroundWithElement).toBeVisible()
    //     atom.commands.dispatch(workspaceElement, 'surround-with:toggle')
    //     expect(surroundWithElement).not.toBeVisible()
    //   })
    // })

  })
})
