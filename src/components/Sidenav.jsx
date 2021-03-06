import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

function Sidenav(props) {

    const navigate=useNavigate();
    return(
        // <Navbar>
        //     <ul className="nav nav-pills flex-column">
        //         <li className="nav-item">
        //             <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link"><i className="bi bi-linkedin"></i></a>
        //         </li>
        //         <li className="nav-item">
        //             <a href="https://github.com/sammark1" target="_blank" className="nav-link"><i className="bi bi-github"></i></a>
        //         </li>
        //     </ul>
        // </Navbar>
        // <Navbar className="navbar d-flex flex-column navbar-expand-md fixed-left bg-light">
        //     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link py-3 border-bottom"><i className="bi bi-linkedin"></i></a>
        //         </li>
        //         <li>
        //             <a href="https://github.com/sammark1" target="_blank" className="nav-link py-3 border-bottom"><i className="bi bi-github"></i></a>
        //         </li>
        //     </ul>
        // </Navbar>
        // <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
        //     <Container>
        //         <a className="navbar-brand">Sam-Mark-Dev</a>
                
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbar1">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">About Me</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Projects</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </Container>
        // </nav>
        // <nav className="navbar navbar-expand-md navbar-light sticky-top bg-light">
        //     <Container>
        //     <a className="navbar-brand" href="#" onClick={()=>props.showTarget('none')}>SamMarkDev</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarCollapse">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item active">
        //             <a className="nav-link" href="#" onClick={()=>props.showTarget('about')}>About Me</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link anchor" href="#projects" onClick={()=>props.showTarget('projects')}>Projects</a>
        //         </li>
        //         {/* <li className="nav-item">
        //             <a className="nav-link" href="#">Skills</a>
        //         </li> */}
        //         <li className="nav-item">
        //             <a className="nav-link" href="#" onClick={()=>props.showTarget('contact')}>Contact</a>
        //         </li>
        //         <li>
        //             <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link"><i className="navi bi-linkedin"></i></a>
        //         </li>
        //         <li>
        //             <a href="https://github.com/sammark1" target="_blank" className="nav-link"><i className="navi bi-github"></i></a>
        //         </li>
        //         </ul>
        //     </div>
        //     </Container>
        // </nav>

        <Navbar bg="light" expand="sm" sticky="top">
            <Container>
            <Navbar.Brand href="#" onClick={()=>props.showTarget('none')}>SamMarkDev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" onClick={()=>props.showTarget('about')}>About Me</Nav.Link>
                    <Nav.Link href="#projects" onClick={()=>props.showTarget('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#" onClick={()=>props.showTarget('contact')}>Contact</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/sammarkdev/" target="_blank"><i className="navi bi-linkedin"></i></Nav.Link>
                    <Nav.Link href="https://github.com/sammark1" target="_blank"><i className="navi bi-github"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
  
export default Sidenav;
