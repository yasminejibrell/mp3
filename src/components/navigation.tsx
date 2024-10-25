import { Link } from "react-router-dom";
import styled from "styled-components"


const StyledNav = styled.nav`
    background-color: #1b355b;
    height: 100%;
    font-size: calc(12px + 1vw);
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
    color: white;
    font-size: calc(10px + 1vw);
`

export default function Navigation() {
    return (
        <StyledNav>
            <Title>Yasmine Jibrell's Resume Navigation</Title>
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/projects">Projects</Link>
        </StyledNav>
    )
}