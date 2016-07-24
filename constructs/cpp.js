'use babel';

export default [
  {
    label: 'if',
    body: 'if (/* condition */) {\n$1\n}'
  },
  {
    label: 'if / else',
    body: 'if (/* condition */) {\n$1\n}\nelse {\n/* code here */\n}'
  },
  {
    label: 'for',
    body: 'for (size_t i = 0; i < count; i++) {\n$1\n}'
  },
  {
    label: 'while',
    body: 'while (/* condition */) {\n$1\n}'
  },
  {
    label: 'do / while',
    body: 'do {\n$1\n} while(/* condition */);'
  },
  {
    label: 'switch / case',
    body: 'switch (/* expression */) {\ncase /* value */:\n$1\nbreak;\ndefault:\nbreak;\n}'
  },
  {
    label: 'try / catch',
    body: 'try {\n$1\n} catch (int code) {\n/* code here */\n}'
  }
]
