import ResultsBoard from "./ResultsBoard.tsx";
import formatDate from "../../../helpers/formatDate.ts";
import useCurrencyRates from "../../../hooks/useCurrencyRates.ts";

const Display = () => {
  const { dataExists, isLoading, error, fetchData, updatedAt } =
    useCurrencyRates();

  return (
    <>
      {dataExists && <ResultsBoard />}

      {/* Error handling when data does not exist */}
      {!dataExists && isLoading && <p>Loading rates...</p>}

      {!dataExists && !isLoading && error && (
        <p style={{ color: "#991b1b" }}>⛔️ Error: {error}</p>
      )}

      {/* Error handling if data exists */}
      <p style={{ fontSize: "14px", color: "#797979" }}>
        <span
          role="button"
          onClick={fetchData}
          style={{ color: "#1d4ed8", userSelect: "none" }}
        >
          Refetch
        </span>

        {dataExists && (
          <>
            {" – "}

            {isLoading && <span>Loading rates...</span>}

            {!isLoading && error && (
              <span style={{ color: "#991b1b" }}> – ⛔️ Error: {error}</span>
            )}

            {!isLoading && <span>Last updated {formatDate(updatedAt)}</span>}
          </>
        )}
      </p>
    </>
  );
};

export default Display;
