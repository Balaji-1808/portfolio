import React from "react";
import "./Connect.css";

function Connect() {
    const handleJoinClick = () => {
        window.location.href = "mailto:your-email@example.com?subject=Join Request&body=Hello, I would like to join your portfolio.";
    };

    return (
        <div className="connect">
            {/* ...existing code... */}
            <button className="join-button" onClick={handleJoinClick}>
                Join
            </button>
            {/* ...existing code... */}
        </div>
    );
}

export default Connect;