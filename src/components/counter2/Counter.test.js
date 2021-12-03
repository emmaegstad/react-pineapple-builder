import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders the Counter component', () => {
  const container = render(
    <Counter topCount="0" middleCount="0" bottomCount="0" phraseList={[]} />
  );
  expect(container).toMatchSnapshot();
});
