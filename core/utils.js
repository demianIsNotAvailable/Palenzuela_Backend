
export const removeEmptyKeys =(obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
  
    const cleaned = Array.isArray(obj) ? [] : {};
  
    for (const [key, value] of Object.entries(obj)) {
      if (value === undefined || value === null) continue;
  
      // Recursively clean nested objects/arrays
      const cleanedValue = typeof value === 'object' ? removeEmptyKeys(value) : value;
  
      // Skip if cleaned value is an empty object, empty array, or empty string
      const isEmptyObject = typeof cleanedValue === 'object' && Object.keys(cleanedValue).length === 0;
      const isEmptyArray = Array.isArray(cleanedValue) && cleanedValue.length === 0;
  
      if (
        cleanedValue === "" ||
        isEmptyObject ||
        isEmptyArray
      ) {
        continue;
      }
  
      cleaned[key] = cleanedValue;
    }
  
    return cleaned;
  }
  