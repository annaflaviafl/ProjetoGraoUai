import React from "react";
import './Loading.css';

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <img src="https://media.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" className="loading-img " />
        </div>
    );
}

export default Loading;