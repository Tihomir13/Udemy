export default function UserInputs({ onHandleChange, userInfo }) {
  function handleChange(inputId, newValue) {
    onHandleChange(inputId, +newValue);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <div>
            <label htmlFor="">INITIAL INVESTMENT</label>
            <input
              type="number"
              value={userInfo.initialInvestment}
              onChange={(е) =>
                handleChange("initialInvestment", е.target.value)
              }
              required
            />
          </div>
          <div>
            <label htmlFor="">EXPECTED RETURN</label>
            <input
              type="number"
              value={userInfo.expectedReturn}
              onChange={(е) => handleChange("expectedReturn", е.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">ANNUAL INVESTMENT</label>
            <input
              type="number"
              value={userInfo.annualInvestment}
              onChange={(е) => handleChange("annualInvestment", е.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="">DURATION</label>
            <input
              type="number"
              value={userInfo.duration}
              onChange={(е) => handleChange("duration", е.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
