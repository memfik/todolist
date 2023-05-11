import React from "react";
import s from "./Header.module.css"
import { Row , Col} from "react-bootstrap";
const Header = () => {
    return(
        <Row>
            <Col>
                <div className={s.header}>Todo List</div>
                <hr/>
            </Col>
        </Row>
    )
}
export default Header;