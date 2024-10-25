import {styled} from "styled-components";

const Title = styled.h1`
   text-align: center;
   text-indent: 0px;
   font-size: calc(20px + 2vw);
`;

const ExperienceDiv = styled.div`
    flex: 1;
    text-align: left;
    text-indent: 0px;
    justify-content: center;
    align-items: flex-start;
    background-color: #ced0f7;
    padding: 20px;
    font-size: calc(10px + 1vw);
`;

const StyledImg = styled.img`
   width: 50%; 
   height: auto; 
   border-radius: 15px; 
   margin-right: 20px;
   @media (max-width: 768px) {
      width: 90%;
      align-items: center;
    }
`;

const TextDiv = styled.div`
   flex: 1;
   text-align: left;
   text-indent: 50px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: flex-start;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
   }
`;

export default function Experience(){
    return (
        <ExperienceDiv>
            <Title>Previous Job Roles</Title>
                <ul>
                    <li>Project Management Intern - FINRA </li>
                        <ul>
                            <li>June 2024 - August 2024</li>
                        </ul>
                    <li>Operational Support Intern - SAMA Technologies, LLC.</li>
                        <ul>
                            <li>June 2021 - August 2021</li>
                        </ul>
                    <li>Student Support Intern - CyberNow Labs, LLC.</li>
                        <ul>
                            <li>June 2020 - August 2020</li>
                        </ul>
                    <li>Customer Service Intern - NormShield, Inc.</li>
                        <ul>
                            <li>June 2019 - August 2019</li>
                        </ul>
                    <br></br>
                </ul>
            <Title>Fun Fact</Title>
            <TextDiv>
                <StyledImg src="src/components/photo5.jpg" alt="My Trip to the New York Stock Exchange"/>
                <p> Here is a picture of me and one of my fellow interns on our FINRA Intern trip. 
                During this experience, I had the pleasure of touring the floor of the New York Stock Exchange (NYSE), as well as FINRA's Manhattan office.
                Overall it was an amazing trip and I am forever thankful for the experience!</p>
            </TextDiv>
    </ExperienceDiv>
    )
}