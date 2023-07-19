import React, { useState } from 'react';
import './SnackbarError.css';

type Props = {
    message: string;
}

const SnackbarErro: React.FC<Props> = ({ message }) => {
    const [showSnackbar, setShowSnackbar] = useState(true);

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
        window.location.reload();
    };

    return (
        <div>
            {showSnackbar && (
                <div className="snackbar">
                    <span className="message">{message}</span>
                    <button className="close" onClick={handleSnackbarClose}>
                        &#x2715;
                    </button>
                </div>
            )}
        </div>
    );
};

export default SnackbarErro;