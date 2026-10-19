import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./Input.css";

let msgId = 0;

export default function Input({ msg, setMsg, msgList, setMsgList, selectOpt, setSelectOpt}) {

    let colour = selectOpt === "1" ? "green" : "yellow";
    let listColour = colour === "green" ? "bg-success-subtle" : "bg-warning-subtle";

    function handleSelect(event) {
        setSelectOpt(event.target.value);
    }
    
    return (
        <>
            <Form onSubmit={ e => {e.preventDefault();}}>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control
                        onChange={ e => { setMsg(e.target.value)}}
                        className="me-auto"
                        placeholder="Write your message here..."
                    />
                    <Button
                        onClick={ () => { 
                            setMsgList([
                                ...msgList,
                                { id: msgId++,
                                    msg: msg,
                                    colour: colour }
                            ]);
                        }}
                        variant="secondary" type="submit">
                        Submit
                    </Button>
                    <div className="vr" />
                    <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Pick a user"
                        
                    >
                        <Form.Select aria-label="Floating label select example"
                            onChange={handleSelect} className={listColour}>
                            <option value="1" className="bg-success-subtle">User one    </option>
                            <option value="2" className="bg-warning-subtle">User two    </option>
                        </Form.Select>
                    </FloatingLabel>
                </Stack>
            </Form>
        </>
    );
}
