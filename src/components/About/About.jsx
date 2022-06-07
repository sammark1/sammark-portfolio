import Container from 'react-bootstrap/Container';
import Skills from './Skills'

function About(){
    return(
        <Container id='about' className=" page-height bg-light p-2">
            <h3 className="">Hi</h3>
            I’m a full stack developer excited to explore innovative technologies in software development, such as AI, VR/AR, visual effects, and interaction design. With a background in game design, 2D, and 3D art, I bring creative UX and concept design skills into team-centered development. I’m looking for a role to explore new ideas in many software engineering disciplines, and endeavor to bring out the best in everyone (including myself) when working collaboratively.
            I am a multi-talented developer with an interest in the creative and innovative uses of software. Recently, I graduated General Assembly's Software Engineering Immersive program and I'm using my interests to develop new ideas into existence.
            <Skills/>
        </Container>
    )
}

export default About;