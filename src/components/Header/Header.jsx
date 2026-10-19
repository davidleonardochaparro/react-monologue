import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
    return (

        <>
            <header className="py-3 border-bottom">
                <div
                    className="container-fluid d-grid gap-3 align-items-center"
                    style={{ gridTemplateColumns: "1fr 2fr" }}
                >
                    <Dropdown />
                    <SearchBar />
                </div>
            </header>
        </>
    
    )
}
