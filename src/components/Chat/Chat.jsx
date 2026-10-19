import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "./Input/Input";
import OutputArea from "./OutputArea/OutputArea";

export default function Chat() {
    let [msg, setMsg] = useState("");    
    let [msgList, setMsgList] = useState([]);
    let [selectOpt, setSelectOpt] = useState("1");

    return (
        <>
            <Container className="d-flex flex-column h-100" fluid>
                <OutputArea msgList={msgList} />
                <Row>
                    <Col>
                        <Input msg={msg} setMsg={setMsg}  
                        msgList={msgList} setMsgList={setMsgList} selectOpt={selectOpt} 
                        setSelectOpt={setSelectOpt}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
