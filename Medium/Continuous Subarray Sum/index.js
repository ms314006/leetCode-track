/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
    let tempNums = nums;
    let grandTotalK = 0;

    // If array length greater than 1, then continue calculation.
    while (tempNums.length > 1) {
        grandTotalK = tempNums[0];
        for (let i = 1; i <= tempNums.length - 1; i += 1) {
            grandTotalK += tempNums[i];

            // If k is 0, then the contiguous subarray is added to 0, returning true.
            if (k === 0) {
                if (grandTotalK === 0) {
                    return true;
                };

            // If k not 0, then use % check if it can be divisible.
            } else if (grandTotalK % k === 0) {
                return true;
            };
        };
        grandTotalK = 0;
        // Delete index 0 in the array before the next loop.
        tempNums.splice(0, 1);
    };
    return false;
};