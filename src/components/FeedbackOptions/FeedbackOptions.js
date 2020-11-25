import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const OptionsBlock = styled.div`
padding-bottom:25px;
display:flex;
justify-content:space-between;
width:80%;
margin:0 auto;
`
const Button = styled.button`
height:30px;
padding:10px 20px;
background-color:${props => props.BgColor};
border:none;
border-radius:0.3rem;
font-size:0.8rem;
color: black;
text-transform:uppercase;
cursor:pointer;
`

export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <OptionsBlock>
            <Button type='button' onClick={() => onLeaveFeedback('good')} BgColor={'green'}>Good</Button>
            <Button type='button' onClick={() => onLeaveFeedback('neutral')} BgColor={'yellow'}>Neutral</Button>
            <Button type='button' onClick={() => onLeaveFeedback('bad')} BgColor={'red'}>Bad</Button>
        </OptionsBlock>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
};