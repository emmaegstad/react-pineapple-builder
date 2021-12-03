import { render, screen } from '@testing-library/react';
import Editor from './editor';

test('renders the Editor component', () => {
  const container = render(
    <Editor
      bottom="bottom-1"
      bottomCount="0"
      middle="middle-1"
      middleCount="0"
      top="top-1"
      topCount="0"
      catchphrase=""
    />
  );
  expect(container).toMatchSnapshot();
});
