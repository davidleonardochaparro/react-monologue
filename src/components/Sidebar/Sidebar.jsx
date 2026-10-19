import React from "react";
import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";
import houseLogo from "../../assets/house-door.svg";
import speedLogo from "../../assets/speedometer2.svg";
import tableLogo from "../../assets/table.svg";
import gridLogo from "../../assets/grid.svg";
import personLogo from "../../assets/person-circle.svg";

export default function Sidebar() {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const triggers = sidebarRef.current?.querySelectorAll(
            '[data-bs-toggle="tooltip"]',
        ) ?? [];
        const tooltips = Array.from(triggers, (element) => new Tooltip(element));

        return () => {
            tooltips.forEach((tooltip) => tooltip.dispose());
        };
    }, []);

    return (
        <>
            <ul ref={sidebarRef} className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" title="Home"
                        data-bs-toggle="tooltip" data-bs-placement="right">
                        <img className="bi pe-none" src={houseLogo} width="24" height="24" alt="House logo." />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <img className="bi pe-none" src={speedLogo} width="24" height="24" alt="House logo." />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <img className="bi pe-none" src={tableLogo} width="24" height="24" alt="House logo." />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Products" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <img className="bi pe-none" src={gridLogo} width="24" height="24" alt="House logo." />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Customers" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <img className="bi pe-none" src={personLogo} width="24" height="24" alt="House logo." />
                    </a>
                </li>
            </ul>
        </>
    )
}
