import PropTypes from 'prop-types';
import { Container, SectionTitle, StatList, StatEl } from './Statistics.styled';

export const Statistics = ({ good, bad, neutral, total, positivePersentage }) => (
 <Container>
<SectionTitle>Statistics</SectionTitle>
    <StatList>
    
        <StatEl>Good: {good}</StatEl>
        <StatEl>Bad: {bad} </StatEl>
        <StatEl>Neutral: {neutral} </StatEl>
        <StatEl>Total: {total}</StatEl>
        <StatEl>Positive percentage: {positivePersentage}%</StatEl>
  
    </StatList>
    </Container>
)

Statistics.propTypes = {
    // allStates: PropTypes.arrayOf(PropTypes.string).isRequired,
    total: PropTypes.number.isRequired,
    positivePersentage:PropTypes.number.isRequired,
  };
  
