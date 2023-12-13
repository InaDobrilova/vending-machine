export default function PlusMinusButton({
  count,
  countKey,
  handleIncrementCount,
  handleDecrementCount,
}) {
  return (
    <div className="rangeButton">
      <button key={countKey} onClick={() => handleIncrementCount(countKey)}>
        +
      </button>
      <span>{`${count}`}</span>
      <button
        disabled={count < 1 ? true : false}
        onClick={() => handleDecrementCount(countKey)}
      >
        -
      </button>
    </div>
  );
}
