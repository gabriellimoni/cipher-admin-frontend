export default function UpsertChordForm() {
  const handleUpsertChordFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleUpsertChordFormSubmit}>
      <div className="input-container">
        <label>Symbol</label>
        <input placeholder="ex: G#" type="text" className="input" />
      </div>
      <div className="input-container">
        <label>Image url</label>
        <input
          placeholder="ex: https://my-image.com.br/G#.png"
          type="text"
          className="input"
        />
      </div>
      <div className="submit-container">
        <input type="submit" className="submit" />
        <button className="cancel">Cancel</button>
      </div>
    </form>
  );
}
