import Home from './components/home'
import Header from './components/header'
import Education from './components/education'
import Experience from './components/experience'
import Skills from './components/skills'
import Achievements from './components/achievements'
import Navigation from './components/navigation'
import CalculatorProject from './components/projects'
import Footer from './components/footer'
import './App.css'
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ced0f7;
  @media (max-width: 900px) {
    flex: 85%;
  }
`;

const NavigationWrapper = styled.div`
  max-width: 300px;
`;

const Body = styled.div`
  flex: 95%;
  padding-bottom: 100px;
  padding: 15px;
`;

const Root = () => {
  return (
    <Container>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<CalculatorProject />} />
        </Routes>
      </Body>
    </Container>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {
  return (
    <div style={{ width: '90vw'}}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}
