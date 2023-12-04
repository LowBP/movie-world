/**
 * Generate a random integer between two values, inclusive.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @return {number} A random integer between min and max.
 * @throws {Error} If min is not less than or equal to max.
 */
export const randomInteger = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('The min value must be less than or equal to the max value.');
  }

  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
