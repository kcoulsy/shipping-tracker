import type { Address } from "../data/addresses";

// Not going to take any credit for these functions, AI did the lifting here
// I have at least made sure they are littered with comments to make it easier to understand

/**
 * Calculates the similarity between two strings based on the Levenshtein distance.
 * The similarity score is a value between 0 and 1, where 1 indicates a perfect match
 * and 0 indicates no similarity.
 *
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns The similarity score between str1 and str2.
 */
function calculateSimilarity(str1: string, str2: string): number {
  // Convert both strings to lowercase to make the comparison case-insensitive.
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  // Determine the length of the longer string.
  const longerLength = Math.max(s1.length, s2.length);

  // If both strings are empty, return a similarity score of 1 (perfect match).
  if (longerLength === 0) {
    return 1.0;
  }

  // Calculate the Levenshtein distance between the two strings.
  const editDistance = getEditDistance(s1, s2);

  // Calculate and return the similarity score.
  // The score is the ratio of the number of matching characters to the length of the longer string.
  return (longerLength - editDistance) / longerLength;
}

/**
 * Calculates the Levenshtein distance between two strings.
 * The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions)
 * required to change one string into the other.
 *
 * @param s1 - The first string.
 * @param s2 - The second string.
 * @returns The Levenshtein distance between s1 and s2.
 */
function getEditDistance(s1: string, s2: string): number {
  // If both strings are identical, the distance is 0 because no edits are needed.
  if (s1 === s2) return 0;

  // If the first string is empty, the distance is the length of the second string.
  // This is because you would need to insert all characters of s2 into s1.
  if (s1.length === 0) return s2.length;

  // If the second string is empty, the distance is the length of the first string.
  // This is because you would need to delete all characters of s1 to get an empty string.
  if (s2.length === 0) return s1.length;

  // Create an array to hold the costs of converting substrings of s1 to substrings of s2.
  // The length of this array is s2.length + 1 to account for all characters of s2, including the empty string.
  const costs = Array(s2.length + 1).fill(0);

  // Initialize the first row of the cost matrix.
  // The cost of converting the empty string to substrings of s2 is just the length of the substring.
  for (let j = 0; j <= s2.length; j++) {
    costs[j] = j;
  }

  // Iterate over each character in s1.
  for (let i = 1; i <= s1.length; i++) {
    // Store the cost of the previous row's last element.
    let lastValue = i;

    // Iterate over each character in s2.
    for (let j = 1; j <= s2.length; j++) {
      // Compute the cost of a substitution operation.
      // This is the cost of converting s1[0..i-2] to s2[0..j-2] plus 1 if the characters don't match.
      let newValue = costs[j - 1];
      if (s1[i - 1] !== s2[j - 1]) {
        newValue = Math.min(newValue, lastValue, costs[j]) + 1;
      }

      // Update the cost matrix for the current operation.
      costs[j - 1] = lastValue;
      lastValue = newValue;
    }

    // Update the last element of the cost matrix for the current row.
    costs[s2.length] = lastValue;
  }

  // The final element in the costs array contains the Levenshtein distance between s1 and s2.
  return costs[s2.length];
}

export function findTopMatches(
  userInput: string,
  addresses: Address[],
  topN: number = 5
): Address[] {
  const similarityScores: { address: Address; similarity: number }[] =
    addresses.map((address) => {
      const similarity =
        calculateSimilarity(userInput, address.postcode) * 0.25 +
        calculateSimilarity(userInput, address.addressLine1) * 0.25 +
        calculateSimilarity(userInput, address.addressLine2) * 0.25 +
        calculateSimilarity(userInput, address.city) * 0.25;
      return { address, similarity };
    });

  similarityScores.sort((a, b) => b.similarity - a.similarity);

  return similarityScores.slice(0, topN).map((score) => score.address);
}
