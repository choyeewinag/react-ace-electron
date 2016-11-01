/* global document */

import AceEditor from 'react-ace';
import React from 'react';
import ReactDOM from 'react-dom';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import 'brace/ext/language_tools';

function onChange(newValue) {
  console.log('onChange fired:\n', newValue); // eslint-disable-line no-console
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
