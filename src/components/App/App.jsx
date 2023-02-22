import React from 'react';
import { useState } from 'react';

import { Title } from './App.styled';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export default function App(params) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleOnClick = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countFeedbackTotals = () => {
    return good + neutral + bad;
  };


  const countPositiveFeedback = () => {
    const formula = countFeedbackTotals() / good;
    return Math.round(100 / formula);
  };

  return (
    <Section>
      <Title> Please leave feedback</Title>
      <FeedbackOptions onClickHendler={handleOnClick} options={options} />

      {countFeedbackTotals() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countFeedbackTotals()}
          positivePersentage={countPositiveFeedback()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

