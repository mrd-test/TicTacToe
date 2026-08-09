const Cell = ({ text, onCellClick }) => {
    return (
        <button onClick={onCellClick} className="grid__cell">{text}</button>
    );
}

export default Cell;