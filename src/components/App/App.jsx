import React from 'react';
import { Component } from 'react';


import { Title } from './App.styled';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countFeedbackTotals = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const formula = this.countFeedbackTotals() / this.state.good;
    return `${Math.round(100 / formula)}%`;
  };

  render() {
    return (
      <Section>
        <Title> Please leave feedback</Title>
        <FeedbackOptions
          onClickHendler={this.handleOnClick}
          options={Object.keys(this.state)}
        />

        {this.countFeedbackTotals() ? (
          <Statistics
            allStates={this.state}
            total={this.countFeedbackTotals()}
            positivePersentage={this.countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
