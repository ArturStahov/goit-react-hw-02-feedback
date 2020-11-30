import React from 'react'
import { NotificationTitle } from './StyledComponents'
import PropTypes from 'prop-types';


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