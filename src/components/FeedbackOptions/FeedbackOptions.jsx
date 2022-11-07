export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(onLeaveFeedback);
  console.log(options);
  return (
    <>
      <h1>Please leave feedback</h1>
      <button value={'good'} onClick={onLeaveFeedback}>
        Good
      </button>
      <button value={'neutral'} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button value={'bad'} onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};
