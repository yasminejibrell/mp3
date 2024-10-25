import styled from "styled-components";

const Title = styled.h1`
   text-align: center;
   text-indent: 0px;
   font-size: calc(15px + 2vw);
`;

const EducationDiv = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ced0f7;
   padding: 0px 20px;
   height: 75vh;
   flex: 1;
   text-align: left;
   text-indent: 5px;
   font-size: calc(8px + 1vw);
`;

export default function Education(){
    return(
        <EducationDiv>
        <Title>Degrees and Education History</Title>
            <ul>
                <li>Bachelor in Computer Science - Boston University</li>
                    <ul>
                        <li>In Progress, Senior 2025</li>
                    </ul>
                <li>Bachelor of Science in Computer Science - Mount Holyoke College</li>
                    <ul>
                        <li>Transferred, August 2021 - May 2022</li>
                    </ul>
                <li>Advanced Studies Diploma - James Madison High School </li>
                    <ul>
                        <li>Recieved June 1, 2021</li>
                    </ul>
                <li> High School Diploma - James Madison High School </li>
                    <ul>
                        <li>Transferred, August 2017 - June 2019</li>
                    </ul>
            </ul>
    </EducationDiv>
    )
    
}