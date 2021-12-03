import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders the Counter component', () => {
  const container = render(
    <Counter topCount="1" middleCount="2" bottomCount="3" phraseList={[]} />
  );
  expect(container).toMatchSnapshot();
});
