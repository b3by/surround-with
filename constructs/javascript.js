'use babel';

export default [
  {
    label: 'if',
    body: 'if (condition) {\n$1\n}'
  },
  {
    label: 'if / else',
    body: 'if (condition) {\n$1\n} else {\n/* code here */\n}'
  },
  {
    label: 'for',
    body: 'for (var index = 0; index < count; index++) {\n$1\n}'
  },
  {
    label: 'while',
    body: 'while (condition) {\n$1\n}'
  },
  {
    label: 'do / while',
    body: 'do {\n$1\n} while (condition)'
  },
  {
    label: 'switch / case',
    body: 'switch (expression) {\n  case expression:\n$1\nbreak;\ndefault:\n}'
  },
  {
    label: 'try',
    body: 'try {\n$1\n}'
  },
  {
    label: 'try / catch',
    body: 'try {\n$1\n} catch (error) {\n/* code here */\n}'
  },
  {
    label: 'try / catch / finally',
    body: 'try {\n$1\n} catch (error) {\n/* code here */\n} finally {\n/* code here */\n}'
  }
]
