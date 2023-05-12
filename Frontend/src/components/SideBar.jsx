import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';

const SideBar = () => {
    return (
        <div style={{ width: 240 }}>
            <Sidenav>
                <Sidenav.Body>
                    <Nav activeKey="1">
                        <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                            Products
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                            User Group
                        </Nav.Item>
                        <Nav.Item eventKey="3" icon={<GroupIcon />}>
                            Cards
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<GroupIcon />}>
                            Photo Cards
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
};

export default SideBar;