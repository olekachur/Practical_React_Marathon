function calculate() {
    const inputNumber = document.getElementById("inputNumber").value;
    const result = document.getElementById("result");
    result.innerText = "Calculating...";
    
    const worker = new Worker("worker.js");
    worker.onmessage = event => {
        result.innerText = `Result: ${event.data}`;
    }
    worker.postMessage({data: inputNumber});
}
