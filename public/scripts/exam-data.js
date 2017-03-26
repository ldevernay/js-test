// generated by build-exercises.js
(function(document) {
  'use strict';
  if(window.location.href.match(/^http\:\/\/(?!localhost|(.*.ngrok.io)).*$/))
    window.location.href = window.location.href.replace('http:', 'https:');
  var app = document.querySelector('#app');
  app.config = {
    "title": "JavaScript - QCM 1",
    "PUBLIC_TEST_MODE": false,
    "DISPLAY_SOLUTIONS_AFTER_SUBMIT": true,
    "redirectToHttps": true,
    "examPack": {
      "publishSolutions": true,
      "publishEvalTests": false
    },
    "backend": {
      "type": "firebase",
      "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCUIGKvdZ4EdFywDU4a90PupcpBEfvpNPc",
        "databaseURL": "https://js-qcm-ft.firebaseio.com",
        "messagingSenderId": "793078387774"
      }
    },
    "teacherEmail": "adrien.joly@eemi.com",
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
      "_info": "generated from ex.01.quizz.template.md",
      "i": 1,
      "isQuizz": true,
      "title": "QCM",
      "maxScore": 7,
      "questions": [
        {
          "i": 1,
          "id": "qcm1",
          "md": "Comment ouvrir la console JavaScript dans Google Chrome ?\n\n\n",
          "mdSolution": "\n\nRéponse: *en pressant Cmd-Alt-J ou Ctrl-Shift-J*",
          "choices": [
            {
              "name": 1,
              "text": "En tapant \"console\""
            },
            {
              "name": 2,
              "text": "En appelant le prof"
            },
            {
              "name": 3,
              "text": "En demandant gentiment à Siri"
            },
            {
              "name": 4,
              "text": "En pressant Cmd-Alt-J ou Ctrl-Shift-J"
            }
          ]
        },
        {
          "i": 2,
          "id": "qcm2",
          "md": "Que retourne `typeof` quand il est appliqué sur `\"bonjour\"` ?\n\n\n",
          "mdSolution": "\n\nRéponse: `\"string\"`.\nPour le vérifier, taper `typeof \"bonjour\";` dans la console JavaScript.",
          "choices": [
            {
              "name": 1,
              "text": "\"string\""
            },
            {
              "name": 2,
              "text": "string"
            },
            {
              "name": 3,
              "text": "\"object\""
            },
            {
              "name": 4,
              "text": "undefined"
            }
          ]
        },
        {
          "i": 3,
          "id": "qcm3",
          "md": "Types de valeurs en JavaScript. Quel est l'intrus ?\n\n\n",
          "mdSolution": "\n\nRéponse: `decimal` était l'intrus.\nEn JavaScript, les nombres décimaux sont compris dans le type `number`.\nVérifier en tapant `typeof 4.5;` dans la console.",
          "choices": [
            {
              "name": 1,
              "text": "string"
            },
            {
              "name": 2,
              "text": "boolean"
            },
            {
              "name": 3,
              "text": "decimal"
            },
            {
              "name": 4,
              "text": "number"
            }
          ]
        },
        {
          "i": 4,
          "id": "qcm4",
          "md": "Comment créer une variable en JavaScript ?\n\n\n",
          "mdSolution": "\n\nRéponse: `var maVariable;`\nPour créer une variable, il faut utiliser le mot-clé `var`.\nAprès, il est possible de changer la valeur de cette variable sans avoir à utiliser `var`.\nIl est aussi possible d'affecter une valeur à cette variable au moment de sa création: `var maVariable = 4;`",
          "choices": [
            {
              "name": 1,
              "text": "maVariable;"
            },
            {
              "name": 2,
              "text": "var maVariable;"
            },
            {
              "name": 3,
              "text": "x = 0;"
            },
            {
              "name": 4,
              "text": "maVariable = 'bonjour';"
            }
          ]
        },
        {
          "i": 5,
          "id": "qcm5",
          "md": "Comment afficher la valeur d'une variable appelée `maVariable` depuis la console ?\n\n\n",
          "mdSolution": "\n\nRéponse: `maVariable;`\nDans la console JavaScript, il suffit de taper le nom du variable pour afficher sa valeur, de la même façon que taper `1+1` provoquera l'affichage de `2`.\nLe point virgule n'est pas imposé par la console JavaScript, mais c'est une convention à suivre.",
          "choices": [
            {
              "name": 1,
              "text": "maVariable;"
            },
            {
              "name": 2,
              "text": "var maVariable;"
            },
            {
              "name": 3,
              "text": "maVariable?"
            },
            {
              "name": 4,
              "text": "show maVariable"
            }
          ]
        },
        {
          "i": 6,
          "id": "qcm6",
          "md": "Comment changer la valeur d'une variable existante ? (déjà créée)\n\n\n",
          "mdSolution": "\n\nRéponse: `maVariable = 4;`\nLe mot-clé `var` n'est à utiliser que lorsque la variable n'a pas encore été créée.\nL'usage des parenthèses dans `maVariable(4);` provoque l'appel d'une fonction appelée `maVariable` en passant la valeur `4` en paramètre.\nEnfin, l'opérateur d'affectation stocke la valeur à droite du `=` dans la variable à gauche du `=`, donc `4 = maVariable` n'a pas de sens car `4` n'est pas une variable.",
          "choices": [
            {
              "name": 1,
              "text": "var maVariable = 4;"
            },
            {
              "name": 2,
              "text": "maVariable = 4;"
            },
            {
              "name": 3,
              "text": "maVariable(4);"
            },
            {
              "name": 4,
              "text": "4 = maVariable;"
            }
          ]
        },
        {
          "i": 7,
          "id": "qcm7",
          "md": "Si j'ai créé une variable dont la valeur est un nombre, que se passera-t-il si je lui affecte ensuite une chaine de caractères ?\n\n\n",
          "mdSolution": "\n\nRéponse: *la valeur de la variable va être remplacée par la chaine de caractères.*\nL'affectation consiste à utiliser l'opérateur `=` pour remplacer la valeur d'une variable par une autre valeur.\nPour effectuer une concaténation, il faut utiliser l'opérateur `+`, et non l'opérateur d'affectation.\nJavaScript est un langage faiblement typé, il est donc possible d'affecter une valeur de n'importe quel type à n'importe quelle variable.",
          "choices": [
            {
              "name": 1,
              "text": "erreur, car le type est différent."
            },
            {
              "name": 2,
              "text": "erreur, car on ne peut pas changer la valeur d'une variable."
            },
            {
              "name": 3,
              "text": "la valeur de la variable va être remplacée par la chaine de caractères."
            },
            {
              "name": 4,
              "text": "les deux valeurs vont être concaténées."
            }
          ]
        }
      ],
      "solutions": {
        "qcm1": 4,
        "qcm2": 1,
        "qcm3": 3,
        "qcm4": 2,
        "qcm5": 1,
        "qcm6": 2,
        "qcm7": 3
      }
    }
  ];
})(document);
