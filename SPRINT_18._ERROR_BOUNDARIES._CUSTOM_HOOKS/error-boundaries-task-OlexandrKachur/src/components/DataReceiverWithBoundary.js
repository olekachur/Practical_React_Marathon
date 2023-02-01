import DataReceiver from "./DataReceiver";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "./ErrorFallback";

function DataReceiverWithBoundary() {
    return <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <DataReceiver />
        </ErrorBoundary>
    </>
}

export default DataReceiverWithBoundary;
