// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to the experiment!
            <br />
            <br />
            Thanks a lot for participating. This experiment is conducted in the context of the "Experimental Psychology Lab" course given by Prof Franke in the summer term
            of 2021. By taking part in it, you make it possible for me to pass. Yeah!`,
  buttonText: 'Let\'s go!'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'practice instructions',
  title: 'Practice Instructions',
  text: `During the experiment, you will be shown two pictures of shapes. Your task is to decide whether these two shapes are the same or different. Indicating your
        choice is done by pressing a button (j for same, f for different). Which button stands for which decision will be indicated on the screen during the task. 
        Afterwards, we will ask you to provide some data about yourself. All data will be anonymous and you can stop the experiment at any time. 
        <br />
        <br />
        Before we start with the actual
        task, you will now be able to try it in order to get familiar with the procedure.
        <br />
        <br />
        Please try to be as fast and accurate ask you can.
        <br />
        <br />`,
  buttonText: 'Go to practice'
});

// For most tasks, you need instructions views
const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main instructions',
  title: 'Main Instructions',
  text: `You are ready to start the actual experiment. As you know, your task is to decide whether these two shapes are the same or different.
        <br />
        <br />
        Please try to be as fast and accurate ask you can.`,
  buttonText: 'Go to experiment'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Mental rotation: practice trial
const key_press_01 = magpieViews.view_generator("key_press", {
  trials: 12,
  name: "practice",
  data: _.shuffle(practice_trials.key_press),
  key1: 'j',
  key2: 'f',
  j: "same",
  f: "different", 
  pause: 250
});

// Mental rotation: main trial
const key_press_02 = magpieViews.view_generator("key_press", {
  trials: 48,
  name: "main",
  data: _.shuffle(main_trials.key_press),
  key1: 'j',
  key2: 'f',
  j: "same",
  f: "different", 
  pause: 250
});