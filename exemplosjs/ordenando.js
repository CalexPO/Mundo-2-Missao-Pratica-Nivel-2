// Troca os valores de duas posições em um vetor
const swap = (arr, pos1, pos2) => {
    if (pos1 < 0 || pos2 < 0 || pos1 >= arr.length || pos2 >= arr.length) {
        console.error("Posições inválidas. Certifique-se de que as posições estejam dentro dos limites do vetor.");
        return;
    }
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

// Essa função embaralha os elementos de um vetor.
const shuffle = (arr, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        const pos1 = Math.floor(Math.random() * arr.length);
        const pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);
    }
};

// Essa função ordena um vetor de inteiros usando o algoritmo Bubble Sort.
const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// Essa função ordena um vetor de inteiros usando o algoritmo Selection Sort.
const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

// Essa função ordena um vetor de inteiros usando o algoritmo Quick Sort (recursivo).
const quickSort = (arr, low, high) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
};

// Essa função é de apoio ao Quick Sort e lida com o particionamento do vetor.
const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

