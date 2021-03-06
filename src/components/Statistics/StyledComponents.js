import styled from 'styled-components'

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
export { StatisticsBlock, StatisticsItem }