import React from 'react';
import PropTypes from 'prop-types';

import {Container,  Button, ButtonsList } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onClickHendler }) => {
  return (
   <Container>
    <ButtonsList>
      {options.map(option => (
        <Button key={option} onClick={() => onClickHendler(option)}>
          {option}
        </Button>
      ))}
    </ButtonsList >
    </Container>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
 onClickHendler: PropTypes.func
};
