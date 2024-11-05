export default function ValueDisplay({ value, oldValue }:{ value:string, oldValue:string }) {
  return (
    <>
      <h2>Current value: {value}</h2>
      <h2>Previous value: {oldValue}</h2>
    </>
  );
}
