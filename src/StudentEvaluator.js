var fs = require('fs');
var util = require('util');
var async = require('async');
var ExerciseConverter = require('./ExerciseConverter');
var ExerciseEnumerator = require('./ExerciseEnumerator');
var QuizzEvaluator = require('./QuizzEvaluator.js');
var CodeEvaluator = require('./CodeEvaluator.js');

var PATH_SOURCE = './exam-data/';

// outputs

var SCORES_FILE = PATH_SOURCE + 'scores.csv';
var SCORES_DETAIL_FILE = PATH_SOURCE + 'scores-detail.csv';

// helpers

function setConsolePrefix(prefix) {
  if (!prefix) {
    // restore original console
    console.log = console._log_backup;
  } else {
    console._log_backup = console._log_backup || console.log;
    console.log = function() {
      for (var i in arguments) {
        if (arguments[i] instanceof Object || arguments[i] instanceof Array)
          arguments[i] = util.inspect(arguments[i]);
      }
      console._log_backup(prefix + Array.prototype.join.call(arguments, " ").replace(/\n/g, '\n' + prefix));
    };
  }
}

// init: generate evaluators from exercise definition files

var converter = new ExerciseConverter();

var converters = {

  code: function(exerciseData, exNumber) {
    var rendered = converter.renderCodeExercise(exerciseData, exNumber);
    var evaluator = new CodeEvaluator(rendered.evalTests);
    return function (studentAnswers, callback) {
      console.log('\n  -  code evaluation:');
      setConsolePrefix('  | ');
      evaluator.evaluateAnswers(studentAnswers, function(err, res) {
        setConsolePrefix();
        console.log('\n  => code score:', res.score, '/', res.length, 'pts');
        callback(err, res);
      });
    };
  },

  quizz: function(exerciseData, exNumber) {
    var rendered = converter.renderQuizzExercise(exerciseData, exNumber);
    var evaluator = new QuizzEvaluator(rendered.solutions);
    return function (studentAnswers, callback) {
      console.log('\n  -  quizz answers:');
      setConsolePrefix('  | ');
      var res = evaluator.evaluateAnswers(studentAnswers);
      res.log.map(function(q){
        console.log(q.questionId, ':', q.answer, '(solution: ' + q.solution + ') =>', q.points, 'pts');
      });
      setConsolePrefix();
      console.log('\n  => quizz score:', res.score, '/', res.length, 'pts');
      callback(null, res);
    };
  },
};

var evaluators = ExerciseEnumerator.parseAllFrom(PATH_SOURCE).map(function(exData) {
  return converters[exData._type](exData, exData.i);
});

// evaluation logic

function evaluateStudent(student, next) {
  var scoreArray = [];
  var totalScore = 0;
  var totalPoints = 0;
  console.log('\n\n================================\n')
  console.log('STUDENT:', student.key/*, '(' + student._uid + ')', '...'*/);

  function whenDone() {
    totalScore = Math.floor(totalScore * 100) / 100;
    console.log();
    console.log('=> TOTAL STUDENT SCORE:', totalScore, '/', totalPoints);
    var csv = [ student.key, totalScore ];
    fs.appendFileSync(SCORES_FILE, csv.toString() + '\n');
    fs.appendFile(SCORES_DETAIL_FILE, csv.concat(scoreArray).toString() + '\n', next);
  }

  function evaluateExercise(evaluator, callback) {
    evaluator(student, function(err, res){
      scoreArray = scoreArray.concat(res.scoreArray);
      totalScore += res.score;
      totalPoints += res.length;
      callback(err, res);
    });
  }

  async.mapSeries(evaluators, evaluateExercise, whenDone);
}

// exports

module.exports = evaluateStudent;
module.exports.getVariantByStudentId = CodeEvaluator.getVariantByStudentId;
