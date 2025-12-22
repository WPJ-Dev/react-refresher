function RandomQuote({ quote, color, onChangeQuote }) {
  return (
    <div>
      <div className="user-profile">
        <div className={`card text-white ${color}`}>
          <h5>Random Quote</h5>
          <p>"{quote.content}"</p>
          <i>Author: {quote.author}</i>
        </div>
        <button className="btn btn-primary" onClick={onChangeQuote}>
          Get Random Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
