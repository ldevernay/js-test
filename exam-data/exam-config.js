/*
function readfile(filePath) {
  return require('fs').readFileSync(filePath).toString();
}
*/

module.exports = {

  // Front-end config
  title: 'JavaScript Partiel 1 - Classe 4',

  // General settings
  PUBLIC_TEST_MODE: false, // set to false to restrict acccess and identify students using Google Login
  DISPLAY_SOLUTIONS_AFTER_SUBMIT: false, // set to false, for real exams

  redirectToHttps: true,

  // Settings for conversion and publication of exercise templates
  examPack: {
    publishSolutions: true, // `true` required for realtime-eval/auto-eval back-ends, DISPLAY_SOLUTIONS_AFTER_SUBMIT and/or dashboard
    publishEvalTests: true, // `true` required for realtime-eval/auto-eval back-ends, DISPLAY_SOLUTIONS_AFTER_SUBMIT and/or dashboard
  },

  // Back-end config
  backend: {
    type: 'realtime-eval', // 'realtime-eval', 'auto-eval', or 'firebase' (with FIREBASE_CONFIG)
    /*
    EMAIL_SUBMIT_CONFIG: {
      mdTemplate: readfile('public/data/submitted.md'),
    },
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyCCVnADtKjLmzivOw4fTLDUkCz90xkj4ws",
      databaseURL: "https://js-test-ft-partiel.firebaseio.com",
      messagingSenderId: "699482710183"
      // admin/dashboard: https://console.firebase.google.com/project/js-test-ft-partiel/database/data
    },
    */
  },

  teacherEmail: 'adrien.joly@eemi.com', // required for dashboard auth
  
  // Authentication
  GOOGLE_CLIENT_ID: '247219641427-ifeq88p7rgor9al5ksduds7ug0ba7djr.apps.googleusercontent.com', // generated from https://console.developers.google.com/apis/credentials?project=eemi-own-exam&authuser=1
  GOOGLE_CLIENT_DOMAIN: 'eemi.com', // to restrict access to users from a certain domain only
  LOGIN_INVITE: 'Se connecter à son compte EEMI:',
  
  // Evaluation / grading
  quizzGrading: {
    ptsRight: 1,
    ptsWrong: 0, // or -0.5 for example
    ptsNull: 0,
  },
  codeGrading: {
    ptsPerExercise: 3, // applies to scores of code exercises
  }

};
