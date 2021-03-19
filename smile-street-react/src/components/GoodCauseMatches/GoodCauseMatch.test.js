import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GoodCauseMatches from './GoodCauseMatches';
import MatchedVolunteersCard from './MatchedVolunteersCard';

describe('Task component', () => {
  afterEach(() => jest.clearAllMocks());

  test(` Given the required props,
        When the component is rendered,
        Then the task text should be present`, () => {
    const requiredProps = {
      complete: false,
      text: 'This is a task',
      id: '001',
      deleteTask: () => {},
    };

    render(<Task {...requiredProps} />);

    expect(screen.getByText('This is a task')).toBeInTheDocument();
  });
});
