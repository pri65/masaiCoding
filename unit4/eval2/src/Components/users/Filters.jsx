const Filters = ({handleChecked, checked,select}) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <label>
          <input data-testid="order-filter" type="checkbox" checked={checked} onChange={() => handleChecked()}  />
          Ascending
        </label>
      </div>
      <div>
        <label>
          <select data-testid="per-page-filter" onChange={(e)=>select(e)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
