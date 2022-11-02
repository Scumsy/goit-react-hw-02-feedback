// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <h1>Please leave feedback</h1>
//     </div>
//   );
// };

import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // countTotalFeedback()
  // countPositiveFeedbackPercentage()

  onBtnClick = evt => {
    console.log(`${evt.target} button was clicked!`, evt);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>
        <button onClick={this.onBtnClick}>Good</button>
        <button onClick={this.onBtnClick}>Neutral</button>
        <button onClick={this.onBtnClick}>Bad</button>
        <h2>Statistics</h2>
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
      </div>
    );
  }
}
