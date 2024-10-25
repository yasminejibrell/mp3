import styled from "styled-components"


const HeaderWrapper = styled.header`
    position: relative;
    background-color: #535bf2;
    align-items: center;
    justify-content: space-between;
    font-size: calc(2px + 1vw);
    color: white;
    padding: 2px 10px;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Yasmine Jibrell's Online Resume</h1>
            <h2>See pages below to learn more about me!</h2>
        </HeaderWrapper>
    )
}