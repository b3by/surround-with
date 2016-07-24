'use babel';

export default [
  {
    label: 'if',
    body: 'if condition:\n$1'
  },
  {
    label: 'if / else',
    body: 'if condition:\n$1\nelse:\n# code here'
  },
  {
    label: 'for',
    body: 'for item in sequence:\n$1'
  },
  {
    label: 'while',
    body: 'while expression:\n$1'
  },
  {
    label: 'do / while',
    body: 'while True:\n$1\nif condition:\nbreak'
  },
  {
    label: 'try / except',
    body: 'try:\n$1\nexcept:\n# code here'
  },
  {
    label: 'try / except / else',
    body: 'try:\n$1\nexcept:\n# code here\nelse:\n# code here'
  }
]
