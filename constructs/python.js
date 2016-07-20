'use babel';

export default [
  {
    label: 'if',
    body: 'if condition:\n    $1'
  },
  {
    label: 'if / else',
    body: 'if condition:\n    $1\nelse:\n    '
  },
  {
    label: 'for',
    body: 'for item in sequence:\n    $1'
  },
  {
    label: 'while',
    body: 'while expression:\n    $1'
  },
  {
    label: 'do / while',
    body: 'while True:\n    $1\n    if condition:\n        break'
  },
  {
    label: 'switch / case (function hack)',
    body: 'def f(expression):\n    return {\n        value: $1\n    }.get(expression, default)'
  },
  {
    label: 'try / except',
    body: 'try:\n    $1\nexcept:\n    '
  },
  {
    label: 'try / except / else',
    body: 'try:\n    $1\nexcept:\n    \nelse:\n    '
  }
]
