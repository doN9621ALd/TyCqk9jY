// 代码生成时间: 2025-09-24 01:01:54
 * It includes functions for trimming strings, removing empty values,
 * and converting data types.
 *
 * @author Your Name
 * @version 1.0
 */

(function($) {

  // Trims whitespace from the beginning and end of a string
  function trimString(value) {
    if (typeof value !== 'string') {
      throw new Error('trimString expects a string argument.');
    }
    return value.trim();
  }

  // Removes empty values from an array or object
  function removeEmptyValues(data) {
    if (Array.isArray(data)) {
      return data.filter(item => item !== '' && item !== null && item !== undefined);
    } else if (typeof data === 'object' && data !== null) {
      return Object.fromEntries(Object.entries(data).filter(([, value]) => value !== '' && value !== null && value !== undefined));
    } else {
      throw new Error('removeEmptyValues expects an array or object argument.');
    }
  }

  // Converts string values to a specified type
  function convertType(value, type) {
    switch (type) {
      case 'number':
        return Number(value);
      case 'boolean':
        return ['true', '1', 'yes', 'y'].includes(value.toLowerCase());
      default:
        return value;
    }
  }

  // Public API for the data cleaning tool
  const dataCleaner = {
    trimString,
    removeEmptyValues,
    convertType
  };

  // Expose the data cleaner to the global scope
  window.dataCleaner = dataCleaner;

})(jQuery);
