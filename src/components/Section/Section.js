import React from 'react'
import { PageSection, SectionTitle } from './StyledComponents'
import PropTypes from 'prop-types';


export default function Section({ title, children }) {
    return (
        <PageSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </PageSection>
    )
}

Section.propTypes = {
    title: PropTypes.string
};