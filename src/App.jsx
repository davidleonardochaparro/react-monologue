import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary" style={{width: "4.5rem"}}>
                    <Sidebar/>
                </div>

                {/* Chat section */}
                <Container>
                    <Chat />
                </Container>
            </main>
        </>
    );
}

export default App;
