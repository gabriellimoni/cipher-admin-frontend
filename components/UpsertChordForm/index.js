import { useState } from "react";

export default function UpsertChordForm({ onSubmit, onCancel }) {
  const [symbol, setSymbol] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpsertChordFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(buildData());
  };

  const buildData = () => ({
    symbol,
    imagesUrls: [imageUrl],
  });

  return (
    <form onSubmit={handleUpsertChordFormSubmit}>
      <div className="input-container">
        <label>Symbol</label>
        <input
          required
          placeholder="ex: G#"
          type="text"
          className="input"
          onChange={(e) => setSymbol(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Image url</label>
        <input
          required
          placeholder="ex: https://my-image.com.br/G#.png"
          type="text"
          className="input"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="submit-container">
        <input type="submit" className="submit" />
        <button className="cancel" onClick={onCancel} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
