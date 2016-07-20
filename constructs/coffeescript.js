'use babel';

export default [
  {
    "label": "if",
    "body": "if (condition)\n  $1"
  },
  {
    "label": "if / else",
    "body": "if (condition)\n  $1\nelse\n  \n"
  },
  {
    "label": "for (array)",
    "body": "for name in array\n  $1"
  },
  {
    "label": "while",
    "body": "while (condition)\n  $1"
  },
  {
    "label": "do / while",
    "body": "while true\n  $1\n  break unless condition"
  },
  {
    "label": "switch / when",
    "body": "switch expression\n  when expression\n    $1\n  else"
  },
  {
    "label": "try",
    "body": "try\n  $1"
  },
  {
    "label": "try / catch",
    "body": "try\n  $1\ncatch error\n  "
  },
  {
    "label": "try / catch / finally",
    "body": "try\n  $1\ncatch error\n  \nfinally\n  \n"
  }
]
