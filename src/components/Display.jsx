const Display = ({ text, onRestart }) => {
    return (
        <div className="popup">
            <div className="popup__block">
                <h3 className="popup__title">{text}</h3>
            </div>
            <div className="restart_block" onClick={onRestart}>
                <h3 className="restart_title">Restart</h3>
            </div>
        </div>
        
    );
};

export default Display;