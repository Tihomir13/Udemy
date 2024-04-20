export default function Form({ onInputChange }) {
  function handleChange(event) {
    const { value, name } = event.target;
    onInputChange(value, name);
  }

  return (
    <section id="user-input" className="input-group">
      <div>
        <p>
          <label htmlFor="initial">INITIAL INVESTMENT</label>
          <input
            onChange={handleChange}
            type="number"
            name="initial"
            required
          />
        </p>
        <p>
          <label htmlFor="exReturn">EXPECTED RETURN</label>
          <input
            onChange={handleChange}
            type="number"
            name="exReturn"
            required
          />
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="annual">ANNUAL INVESTMENT</label>
          <input onChange={handleChange} type="number" name="annual" required />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            onChange={handleChange}
            type="number"
            name="duration"
            required
          />
        </p>
      </div>
    </section>
  );
}
