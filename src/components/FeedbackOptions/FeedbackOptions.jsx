import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <FeedbackButton value={'good'} onClick={onLeaveFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton value={'neutral'} onClick={onLeaveFeedback}>
        Neutral
      </FeedbackButton>
      <FeedbackButton value={'bad'} onClick={onLeaveFeedback}>
        Bad
      </FeedbackButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
