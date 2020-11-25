import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const StatisticsBlock = styled.ul`
width:80%;
display:flex;
flex-wrap:wrap;
margin:0 auto;
`
const StatisticsItem = styled.li`
width:100%;
text-align:center;
font-size:0.8rem;
color:black;
font-weight:500;
&:not(:last-child){
    margin-bottom:15px;
}
`

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <StatisticsBlock>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {positivePercentage}&#37;</StatisticsItem>
        </StatisticsBlock>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};