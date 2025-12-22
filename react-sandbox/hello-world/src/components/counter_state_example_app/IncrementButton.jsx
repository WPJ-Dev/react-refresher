function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button className="btn btn-success" onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
}

export default IncrementButton;
