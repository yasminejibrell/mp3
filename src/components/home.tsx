import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h1`
   text-align: center;
   font: timesnewroman;
   text-indent: 0px;
   font-size: calc(20px + 2vw);
   margin-top: 0px;
   align-items: center;
`;

const HomeDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: flex-start;
   background-color: #ced0f7;
   padding: 20px;
   margin: 15px;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
   }
`;

const StyledImg = styled.img`
   width: 40%; 
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
   font-size: calc(8px + 1vw);
   margin-left: 20px;
   @media (max-width: 768px) {
      margin-left: 5px;
   }
`;

export default function Home(){
    return (
        <HomeDiv>
            <StyledImg src='src/components/photo4.jpg' alt="Yasmine Jibrell"/>
            <TextDiv>
                <Title>Home</Title>
                <p> My name is Yasmine Jibrell and I am a 4th year student at Boston University working towards a BA in Computer Science.
                    Before attending Boston University, I began my studies at Mount Holyoke College in South Hadley, MA. 
                    I am originally from Fairfax County, Virginia where I graduated with high honors from James Madison High School. </p>
                <p> In the future, I hope to earn my Masters degree and PHD, followed by working in computer graphics, UI/UX design, or Artificial Intelligence. 
                    Please check my <Link to="/education">Education</Link>, <Link to="/experience">Experience</Link>, <Link to="/skills">Skills</Link>, <Link to="/achievements">Achievements</Link>, and <Link to="/projects">Projects</Link> pages for more information about me!</p> 
            </TextDiv>
        </HomeDiv>
    )
}