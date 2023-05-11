import { Navbar, Nav } from 'rsuite';

const TopBar = () => {
    return (
    <Navbar>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Nav>
        <Nav.Item title="/homePage">Home</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
            <Nav.Item>Via email</Nav.Item>
            <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
        </Nav.Menu>
        </Nav>
        <Nav pullRight>
        <Nav.Item title="loginPage">Log In</Nav.Item>
        <Nav.Item>Sign Up</Nav.Item>
        </Nav>
    </Navbar>
    );
};

export default TopBar;