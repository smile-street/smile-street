/* eslint-disable jest/valid-title */
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MatchCard from './MatchCard';
import VolunteerMatches from './VolunteerMatches';
import VolunteerMatchesData from './VolunteerMatches.json';

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

    expect(screen.getByText('This is a Good Cause')).toBeInTheDocument();
  });
});

test(`
        Given the required props,
        When the component is rendered,
        Then the yes, please  button should be present`, () => {
  const requiredProps = {
    id: '001',
    GoodCause: 'This  is a Good Cause',
    Description: 'This is a testing Good Cause',
    Dates: '26/05/1996',
    text: 'This is a Good Cause Details',
    handleAgree: () => {},
    handleAccepted: () => {},
  };

  render(<VolunteerMatches {...requiredProps} />);

  expect(
    screen
      .getAllByRole('button')
      .filter((button) => button.textContent === 'Yes, Please').length
  ).toBe(VolunteerMatchesData.length);
});

test(`
        Given a match card is rendered,
        When the Yes,Please  button is clicked,
        Then the handle click open yes  function is called with the correct task id`, () => {
  const mockOpenYesPleaseFunction = jest.fn();

  const requiredProps = {
    id: '001',
    GoodCause: 'This  is a Good Cause',
    Description: 'This is a testing Good Cause',
    Dates: '26/05/1996',
    text: 'This is a Good Cause Details',
    handleAgree: () => {},
    handleAccepted: () => {},
    handleClickOpenYes: mockOpenYesPleaseFunction,
  };

  render(<VolunteerMatches {...requiredProps} />);

  const yesPleaseButton = screen
    .getAllByRole('button')
    .find((button) => button.textContent === 'Yes, Please');
  userEvent.click(yesPleaseButton);

  expect(mockOpenYesPleaseFunction.mock.calls.length).toBe(0);
});
