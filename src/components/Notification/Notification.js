import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const NotificationTitle = styled.h3`
width:100%;
text-align:center;
font-size:1rem;
font-weight:600;
color: gray;
text-transform:uppercase;
`

export default function Notification({ title }) {
    return (
        <>
            <NotificationTitle>{title}</NotificationTitle>
        </>
    )
}

Notification.propTypes = {
    title: PropTypes.string
};