/* eslint-disable jest/valid-title */
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MatchCard from './MatchCard';
import VolunteerMatches from './VolunteerMatches';

describe('Volunteer Match  component', () => {
  afterEach(() => jest.clearAllMocks());

  test(`
        Given the required props,
        When the component is rendered,
        Then the 
         text should be present`, () => {
    const requiredProps = {
      id: '001',
      GoodCause: 'This  is a Good Cause',
      Description: 'This is a testing Good Cause',
      Dates: '26/05/1986',
      text: 'This is a task',
      handleAgree: () => {},
      handleAccepted: () => {},
    };

    render(<MatchCard {...requiredProps} />);

    expect(screen.getByText('This is a GoodCause')).toBeInTheDocument();
  });
});
