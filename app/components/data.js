let data = [
  {
    "category": "Interview JavaScript",
    "questions": [
      {
        "points": 100,
        "question": "Synchronous programming means that code is executed _________________ from top-to-bottom.",
        "answer": "Sequentially"
      },
      {
        "points": 200,
        "question": "_______________ is the proper name for the language commonly referred to as JavaScript",
        "answer": "ECMAScript"
      },
      {
        "points": 300,
        "question": "JavaScript is what kind of  language?",
        "answer": "Multi-Paradigm"
      },
      {
        "points": 400,
        "question": "Prototypal Inheritance and  _____________ are the 2 pillars of JavaScript programming.",
        "answer": "Functional Programming"
      },
      {
        "points": 500,
        "question": "ES6 is also referred to as ___________ and is the sixth major release of the ECMAScript language specification.",
        "answer": "Harmony"
      }
    ]
  },
  {
    "category": "React to this....",
    "questions": [
      {
        "points": 100,
        "question": "A Javascript library developed by engineers at FB for building UI's and allows creation of reusable UI components.",
        "answer": "React"
      },
      {
        "points": 200,
        "question": "__________ are what help React keep track of what items have changed, been added, or been removed from a list.",
        "answer": "Keys"
      },
      {
        "points": 300,
        "question": "In React, ______________ is whenever a component is rendered to the DOM for the first time.",
        "answer": "Mounting"
      },
      {
        "points": 400,
        "question": "Which lifecycle method is invoked once, immediately after the initial rendering occurs?",
        "answer": "componentDidMount"
      },
      {
        "points": 500,
        "question": "In React, rendering is done on the client-side and in Angular, rendering is done on the server-side. True or False?",
        "answer": "False, rendering is done on the server-side in React."
      }
    ]
  },
  {
    "category": "ES5/6",
    "questions": [
      {
        "points": 100,
        "question": "<p>Constants (const) are:<br><ul><li>A. Block scoped'/></li><li>B. Function scoped</li><li>B. Global</li></ul>",
        "answer": "A. Block scoped"
      },
      {
        "points": 200,
        "question": "Name 3 new collection classes in ES2015",
        "answer": "<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>"
      },
      {
        "points": 300,
        "question": "<p>What is this new ES6 feature called?<br> What is the console log output?</p><code>var news = ['north', 'east', 'west', 'south'];<br/>var [n, e, w, s] = news;<br/>console.log(w);</code>",
        "answer": "<ul><li>Array destructuring</li><li>west</li></ul>"
      },
      {
        "points": 400,
        "question": "<p>Name 4 new features of ES6 used and.<br>what is the console log output?</p><code> let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>_  console.log(greeting('Jerome');</code>",
        "answer": "<ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>"
      },
      {
        "points": 500,
        "question": "<p>What is this code doing?</p><code>let a= 12,<br/>\xa0\xa0\xa0\xa0b=3;<br/>\xa0\xa0\xa0\xa0[a,b] = [b, a];</code>",
        "answer": "It swaps the values inside a and b, without using extra variables."
      }
    ]
  },
  {
    "category": "Fun Facts",
    "questions": [
      {
        "points": 100,
        "question": "What is the React.js logo?",
        "answer": "<img src='assets/img/react.svg'/>"
      },
      {
        "points": 200,
        "question": "React was partly inspired by XHP which was built by _____________ at Facebook in 2009 to componentize Facebook's UI.",
        "answer": "Marcel Laverdet"
      },
      {
        "points": 300,
        "question": "What's the date of the first React commit on GitHub?",
        "answer": "May 26th, 2013"
      },
      {
        "points": 400,
        "question": "React is not another _______________, or any other kind of framework. It's just a library for rendering your views.",
        "answer": "MVC framework"
      },
      {
        "points": 500,
        "question": "What is the React-Router logo?",
        "answer": "<img src='assets/img/react-router.svg'/>"
      }
    ]
  }
];
export default data; 