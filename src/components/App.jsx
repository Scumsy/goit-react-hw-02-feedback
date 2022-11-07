import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }

  onBtnClick(evt) {
    this.setState(prevState => {
      return { [evt.target.value]: prevState[`${evt.target.value}`] + 1 };
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 32,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onBtnClick}
        ></FeedbackOptions>
        {/* <h1>Please leave feedback</h1>
        <button value={'good'} onClick={this.onBtnClick}>
          Good
        </button>
        <button value={'neutral'} onClick={this.onBtnClick}>
          Neutral
        </button>
        <button value={'bad'} onClick={this.onBtnClick}>
          Bad
        </button> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        {/* <h2>Statistics</h2>
        <p>
          Good:
          <span>{this.state.good}</span>
        </p>
        <p>
          Neutral:
          <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad:
          <span>{this.state.bad}</span>
        </p>
        <p>
          Total:
          <span>{this.countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback:
          <span>
            {this.countPositiveFeedbackPercentage() > 0
              ? this.countPositiveFeedbackPercentage().toFixed()
              : ''}
            %
          </span>
        </p> */}
      </div>
    );
  }
}
