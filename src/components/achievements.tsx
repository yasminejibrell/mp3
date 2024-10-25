import {styled} from "styled-components";

const AchievementsDiv = styled.div`
    flex: 1;
    text-align: left;
    text-indent: 0px;
    justify-content: center;
    align-items: flex-start;
    background-color: #ced0f7;
    padding: 20px;
    padding-top: 0px;
    font-size: calc(10px + 1vw);
    height: 80%;
    margin-bottom: 75px;
`;

const Title = styled.h1`
   text-align: center;
   text-indent: 0px;
   font-size: calc(20px + 2vw);
`;

export default function Achievements(){
    return (
        <AchievementsDiv>
            <Title>Awards and Achievements</Title>
                <ul>
                    <li>Virginia State Governor's Seal</li>
                    <li>Virginia Board of Education Seal</li>
                    <li>The Virginia Board of Education's Seal of Advanced Mathematics and Technology</li>
                    <li>Virginia Board of Education Seal of Biliteracy</li>
                    <li>College Board AP Capstone Award</li>
                    <li>College Board AP Scholar Award</li>
                </ul>
        </AchievementsDiv>
    )
    
}