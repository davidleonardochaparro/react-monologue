import slackLogo from "../../../assets/slack.svg";

export default function Dropdown() {
    return (
        <>
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 ms-2 link-body-emphasis dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false" aria-label="Open Slack menu"
                >
                    <img className="me-2" src={slackLogo} width="32" height="32" alt="Slack" />
                </a>
                <ul className="dropdown-menu text-small shadow">
                        <li>
                            <a className="dropdown-item active" href="#" aria-current="page">Overview</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Inventory</a></li>
                        <li><a className="dropdown-item" href="#">Customers</a></li>
                        <li><a className="dropdown-item" href="#">Products</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Reports</a></li>
                        <li><a className="dropdown-item" href="#">Analytics</a></li>
                </ul> 
            </div>
        </>
    );
}
