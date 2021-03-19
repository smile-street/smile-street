import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GoodCauseMatches from './GoodCauseMatches';
import MatchedVolunteersCard from './MatchedVolunteersCard';

describe('Task component', () => {
  afterEach(() => jest.clearAllMocks());

  test(`Given the required props,
        When the component is rendered,
        Then the task text should be present`, () => {
    render(<GoodCauseMatches />);

    expect(
      screen.getByText('These are your matched volunteers')
    ).toBeInTheDocument();
  });
});
