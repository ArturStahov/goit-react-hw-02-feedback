import React from 'react'
import { OptionsBlock, Button } from './StyledComponents'
import PropTypes from 'prop-types';


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