import React from "react";
import Card from "react-bootstrap/Card";

export default function Output({ msgList }) {

    // Scroll output area down when submitting the form

    const colourA = "bg-success-subtle";
    const colourB = "bg-warning-subtle";
    
    return (
        <>
            <div>
                {msgList.map( msg => (
                    <Card key={msg.id} className="mb-1">
                        <Card.Body className={msg.colour === 'green' ? colourA : colourB}>
                            {msg.msg}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
