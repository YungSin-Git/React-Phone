import React,{Component} from "react";
import './App.css';
import Nav from 'react-bootstrap/Nav';
class navbar extends Component{
    render() {
        return(
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/Content">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" href="about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}
export default navbar;