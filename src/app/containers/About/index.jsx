import React from 'react';

import style from './style.css';

export default () => (
  <div className={style.about}>
    <h1>Frontend Challenge</h1>

    <h5>Challenge description</h5>
    <p>The challenge is to create a simple flow engine.</p>
    <p>A flow engine is an application that executes a flow consisting of several linked rules, in this case against some incoming data (*a JSON string that can be parsed to a JavaScript object literal*).</p>

    <h5>Each rule should contain (at least)</h5>
    <ul>
      <li>An ID (unique within the flow, required)</li>
      <li>A rule that will be run against the incoming json data. This is a function that takes a parameter and returns a boolean result. Each function should be called with the same incoming data (the JS object literal)</li>
      <li>An ID of the rule to execute if the function returns true (`true_id`)</li>
      <li>An ID of the rule to execute if the function returns false (`false_id`)</li>
    </ul>

    <p>Pass an object (an example of an object and a rule is given below) to the created flow.</p>
    <p>
    The execution will end when a `null` is provided for the `true_id` (and the function returns `true`) or when `null` is provided for the `false_id` (and the function returns `false`).<br />
    Additionally, the flow engine (with the provided rule-set) should not be circular.
    </p>

    <h5>Mockup</h5>
    <p>Please implement UI according to the design provided here frontend-challenge-flow-mockup.png</p>

    <h5>Instructions</h5>
    <ul>
      <li>Please use ReactJs as view layer. For the Flow logic use a pure JavaScript (no underscore and other libraries)</li>
      <li>Unit tests and bundler/task runner are a plus.</li>
      <li>Use pure CSS preprocessor for the styling of the UI - no external libraries</li>
    </ul>

    <h5>What we're looking for:</h5>
    <ul>
      <li>Code quality</li>
      <li>Correctness</li>
      <li>Technical choices</li>
    </ul>

    <p>We appreciate your time and energy completing the coding exercise and will review your solution as quickly as possible.</p>

  </div>
);
