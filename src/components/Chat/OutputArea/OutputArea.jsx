import React from "react";
import { useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Output from "./Output/Output";

export default function OutputArea({ msgList }) {
    const outputRef = useRef(null);

    useEffect(() => {
        const output = outputRef.current;
        if (output) {
            output.scrollTop = output.scrollHeight;
        }
    }, [msgList]);

    return (
        <>
            <Row ref={outputRef} className="h-75 overflow-y-auto">
                <Col>
                    <Output msgList={msgList} />
                </Col>
            </Row>
        </>
    );
}
