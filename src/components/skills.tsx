import {styled} from "styled-components";

const SkillsDiv = styled.div`
    flex: 1;
    text-align: left;
    text-indent: 5px;
    justify-content: center;
    align-items: flex-start;
    background-color: #ced0f7;
    padding: 20px;
    padding-top: 0px;
    font-size: calc(10px + 1vw);
    height: 80%;
`;

const Title = styled.h1`
   text-align: center;
   text-indent: 0px;
   font-size: calc(20px + 2vw);
`;


export default function Skills(){
    return (
        <SkillsDiv>
            <Title>Programming Skills</Title>
                <ul>
                    <li>Python (proficient/advanced)</li>
                    <li>C++ (proficient)</li>
                    <li>C (proficient)</li>
                    <li>HTML (intermediate/proficient)</li>
                    <li>Java (intermediate)</li>
                    <li>Numpy (intermediate)</li>
                    <li>Matplotlib Programs (beginner/intermediate)</li>
                    <li>React (beginner/intermediate)</li>
                    <li>Ocaml (beginner/intermediate)</li>
                    <li>Next.js (beginner/intermediate)</li>
                </ul>
            <br></br>
        <Title>Relevent Courses</Title>
            <h2><u>In Progress</u></h2>
                <ul>
                    <li>Introduction to Database Systems</li>
                    <li>Concepts of Programming Languages</li>
                    <li>Introduction to Computer Graphics</li>
                    <li>Web Design</li>
                </ul>
                
            <h2><u>Completed</u></h2>
                <ul>
                    <li>Software Engineering</li>
                    <li>Combinatoric Structures</li>
                    <li>Object-Oriented Programming</li>
                    <li>Probability in Computing</li>
                    <li>Introduction to Data Science</li>
                    <li>Geometric Algorithms</li>
                    <li>Computer Systems Concepts & Systems Programming</li>
                    <li>Calculus for Life and Social Science</li>
                    <li>iDesign Learning Lab</li>
                </ul>
        </SkillsDiv>
    )
}