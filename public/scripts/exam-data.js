// generated by build-exercises.js
(function(document) {
  'use strict';
  if(window.location.href.match(/^http\:\/\/(?!localhost).*$/))
    window.location.href = window.location.href.replace('http:', 'https:');
  var app = document.querySelector('#app');
  app.config = {
    "title": "JavaScript QCM",
    "PUBLIC_TEST_MODE": false,
    "DISPLAY_SOLUTIONS_AFTER_SUBMIT": true,
    "redirectToHttps": true,
    "examPack": {
      "publishSolutions": true,
      "publishEvalTests": true
    },
    "backend": {
      "type": "firebase",
      "FIREBASE_CONFIG": {
        "databaseURL": "https://js-qcm.firebaseio.com",
        "apiKey": "AIzaSyBWrb4UMjyrSyzp_kqauvFGLi3QaWvDPus",
        "messagingSenderId": "988306760740"
      }
    },
    "GOOGLE_CLIENT_ID": "247219641427-ifeq88p7rgor9al5ksduds7ug0ba7djr.apps.googleusercontent.com",
    "GOOGLE_CLIENT_DOMAIN": "eemi.com",
    "LOGIN_INVITE": "Se connecter à son compte EEMI:",
    "quizzGrading": {
      "ptsRight": 1,
      "ptsWrong": 0,
      "ptsNull": 0
    },
    "codeGrading": {
      "ptsPerExercise": 3
    }
  };
  app.exercises = [
    {
      "_info": "generated from ex.1.quizz.template.md",
      "i": 1,
      "isQuizz": true,
      "title": "QCM",
      "questions": [
        {
          "i": 1,
          "id": "qcm1",
          "md": "Quel est le nom de l'attribut à utiliser pour donner le nom du fichier .js à charger dans une page HTML:\n\n\n",
          "mdSolution": "\n\n - `href` est utilisé dans les éléments `<link>` et `<a>`\n - `scr` est mal épelé\n - `type` (optionnel) permet d'expliciter le langage employé dans le fichier, si autre que JavaScript\n\nL'attribut `src` est à utiliser dans l'élément `<script>`, et il ne faut pas oublier d'ajouter une balise de fermeture `</script>`.",
          "choices": [
            {
              "name": 1,
              "text": "href"
            },
            {
              "name": 2,
              "text": "src"
            },
            {
              "name": 3,
              "text": "scr"
            },
            {
              "name": 4,
              "text": "type"
            }
          ]
        }
      ],
      "solutions": {
        "qcm1": 2
      }
    },
    {
      "_info": "generated from ex.2.code.template.md",
      "i": 2,
      "isCode": true,
      "title": "Exercices de codage",
      "questions": [
        {
          "i": 2,
          "id": "code2",
          "variants": [
            {}
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var res = [];\n  var _button = {\n    onclick: function() {}\n  };\n  var document = {\n    getElementById: function(id) {\n      return id === 'pouet' ? _button : null;\n    }\n  };\n  function alert(p){\n    res.push(p);\n  };\n  _runStudentCode();\n  var tests = [];\n  tests.push(res.length === 0);\n  setTimeout(function(){\n    _button.onclick()\n    tests.push(res.length === 1);\n    setTimeout(function(){\n      _button.onclick()\n      tests.push(res.length === 2);\n      application.remote._send(null, tests);\n      // 1 point per passing test => 3 pts per exercise\n    }, 50)\n  }, 50)\n})();\n"
          ],
          "mdVariants": [
            "Imaginez que vous disposez de la page HTML suivante:\n\n```html\n<bouton id=\"pouet\">cliquez ici !</bouton>\n```\n\nÉcrivez le code JavaScript nécéssaire pour que le message `pouet !` s'affiche dans un `alert` à chaque fois que l'utilisateur cliquera sur le bouton:\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\ndocument.getElementById('pouet').onclick = function() {\n  alert('pouet !');\n};\n```\n"
          ]
        }
      ]
    }
  ];
})(document);
