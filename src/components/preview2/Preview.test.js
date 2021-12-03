import { render, screen } from '@testing-library/react';
import Preview from './Preview';

test('renders the Editor component', () => {
  const container = render(<Preview bottom="bottom-1" middle="middle-1" top="top-1" />);
  expect(container).toMatchSnapshot();
});
