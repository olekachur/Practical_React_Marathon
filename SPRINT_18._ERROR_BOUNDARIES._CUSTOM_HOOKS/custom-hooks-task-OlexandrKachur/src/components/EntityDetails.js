import { useLoading } from "./hooks/useLoading";

function EntityDetails({ fetchMethod, params, propsToDisplay }) {
  const loadingHook = useLoading(fetchMethod, params);

  return loadingHook ? (
    <div className="center">
      <h3>{loadingHook.name} Details:</h3>
      {Object.entries(propsToDisplay).map((entry) => (
        <div key={entry[1]}>
          {" "}
          {entry[1]}: <strong>{loadingHook[entry[0]]}</strong>
        </div>
      ))}
    </div>
  ) : (
    <p className="center">Loading...</p>
  );
}

export default EntityDetails;
