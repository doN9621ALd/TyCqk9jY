// 代码生成时间: 2025-10-26 09:15:10
(function($) {

  /**
   * Removes duplicates from an array using a Set.
   * @param {Array} array - The array to process.
   * @returns {Array} The array with duplicates removed.
   */
  function removeDuplicates(array) {
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    return [...new Set(array)];
  }

  /**
   * Merges two arrays and removes any duplicates from the resulting array.
   * @param {Array} array1 - The first array to merge.
   * @param {Array} array2 - The second array to merge.
   * @returns {Array} The merged array with duplicates removed.
   */
  function mergeAndDedupe(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error('Both inputs must be arrays');
    }
    return removeDuplicates(array1.concat(array2));
  }

  /**
   * Expose the utility functions to the global scope.
   */
  $.dedupe = removeDuplicates;
  $.mergeDedupe = mergeAndDedupe;

})(jQuery);

// Example usage:
// var array1 = [1, 2, 3, 2];
// var array2 = [3, 4, 5, 6, 2];
// var deduplicated = $.dedupe(array1);
// var merged = $.mergeDedupe(array1, array2);
