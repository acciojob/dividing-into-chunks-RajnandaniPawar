const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const subarrays = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if adding arr[i] would exceed n
        if (currentSum + arr[i] > n) {
            // Push currentSubarray to subarrays and reset for new subarray
            subarrays.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }
        
        // Add arr[i] to currentSubarray and update currentSum
        currentSubarray.push(arr[i]);
        currentSum += arr[i];
    }

    // Push the last remaining subarray
    if (currentSubarray.length > 0) {
        subarrays.push(currentSubarray);
    }

    return subarrays;

	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
