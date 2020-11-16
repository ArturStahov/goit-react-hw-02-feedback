import React from 'react'
import styled from 'styled-components'

const PageSection = styled.section`
padding-top:25px;
padding-bottom:25px;
display:flex;
flex-wrap:wrap;
justify-content:center;
max-width:600px;
margin: 0 auto;
border: solid 2px grey;
`
const SectionTitle = styled.h2`
width:100%;
text-align:center;
font-size:1rem;
font-weight:600;
color: red;
text-transform:uppercase;
margin-bottom:30px;
`

export default function Section({ title, children }) {
    return (
        <PageSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </PageSection>
    )
}