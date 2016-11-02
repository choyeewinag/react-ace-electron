/* global document */

// this was all copied from:
// https://github.com/securingsincity/react-ace/blob/4.0.0/example/index.js

import AceEditor from 'react-ace';
import React from 'react';
import ReactDOM from 'react-dom';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';

import 'brace/ext/language_tools';

// handlers
function onLoad(editor) {
  console.log('i\'ve loaded'); // eslint-disable-line no-console
  console.log(editor); // eslint-disable-line no-console
}

function onChange(newValue) {
  console.log('onChange fired:\n', newValue); // eslint-disable-line no-console
}

// const stuff to fill into the editors
const defaultValue =
`function onLoad(editor) {
  console.log('i\\'ve loaded');
}`;

const defaultValue2 =
`function onLoad(editor) {
  if (true) {
    console.log('i\\'ve loaded');
  }
}`;

// reload props...things?
global.reloadProps = () => {
  ReactDOM.render(
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      name="blah2"
      fontSize={40}
      height="8em"
    />,
    document.getElementById('editor2')
  );
};

global.reloadProps2 = () => {
  ReactDOM.render(
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="blah3"
      onLoad={onLoad}
      height="6em"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        tabSize: 2,
        fontSize: 16,
        showGutter: false,
      }}
      value={defaultValue2}
    />,
    document.getElementById('editor3')
  );
};

// first editor
ReactDOM.render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="15em"
    onChange={onChange}
  />,
  document.getElementById('editor')
);

// second editor
ReactDOM.render(
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="blah2"
    onLoad={onLoad}
    fontSize={14}
    height="15em"
    value={defaultValue}
  />,
  document.getElementById('editor2')
);

// third editor
ReactDOM.render(
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="blah3"
    onLoad={onLoad}
    height="15em"
    setOptions={{
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      tabSize: 4,
      fontSize: 14,
      showGutter: true,
    }}
    value={defaultValue2}
  />,
  document.getElementById('editor3')
);
