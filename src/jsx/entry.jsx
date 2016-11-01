/* global document */

const AceEditor = require('react-ace'); 
const brace = require('brace');
const React = require('react');
const ReactDOM = require('react-dom');

function onChange(newValue) {
  console.log('change', newValue);
}

ReactDOM.render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
  />,
  document.getElementById('editor')
);
