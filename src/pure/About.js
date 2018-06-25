import React from 'react';
import Markdown from 'react-markdown';

const input = '# About us\n\nWe focus on child development and healthcare';

export default () => (
  <Markdown source={input} />
)
