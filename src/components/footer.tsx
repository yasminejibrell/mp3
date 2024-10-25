import styled from "styled-components"


const StyledFooter = styled.footer`
    position: relative;
    background-color: #212462;
    align-items: center;
    justify-content: space-between;
    font-size: calc(1px + 1vw);
    color: white;
    padding: 2px 10px;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>&copy; 2024 All Rights Reserved by Yasmine Jibrell.</p>
        </StyledFooter>
    )
}