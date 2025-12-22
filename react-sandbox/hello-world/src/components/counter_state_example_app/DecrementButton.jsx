function DecrementButton({ onDecrement }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default DecrementButton;
