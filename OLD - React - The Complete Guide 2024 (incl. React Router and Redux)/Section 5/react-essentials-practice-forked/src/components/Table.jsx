import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ inputs }) {
  const userData = {
    initialInvestment: inputs.initial,
    annualInvestment: inputs.annual,
    expectedReturn: inputs.exReturn,
    duration: inputs.duration,
  };
  const annualData = calculateInvestmentResults(userData);
  console.log(annualData);
  let totalInterest = 0;
  let investedCapital = inputs.initial;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <th>{data.year}</th>
            <th>{formatter.format(data.valueEndOfYear)}</th>
            <th>{formatter.format(data.interest)}</th>
            <th>{formatter.format((totalInterest += data.interest))}</th>
            <th>{formatter.format((investedCapital += inputs.annual))}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
