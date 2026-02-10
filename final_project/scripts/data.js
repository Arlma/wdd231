// Data processing and utility functions for the Student Resource Portal

/**
 * Filter opportunities by country
 * @param {Array} opportunities - Array of opportunity objects
 * @param {String} country - Country to filter by
 * @returns {Array} Filtered opportunities
 */
export function filterByCountry(opportunities, country) {
  return opportunities.filter(item => item.country === country);
}

/**
 * Filter opportunities by deadline
 * @param {Array} opportunities - Array of opportunity objects
 * @param {String} deadline - Deadline date string (YYYY-MM-DD)
 * @returns {Array} Opportunities with deadline before specified date
 */
export function filterByDeadline(opportunities, deadline) {
  return opportunities.filter(item => new Date(item.deadline) > new Date(deadline));
}

/**
 * Sort opportunities alphabetically by title
 * @param {Array} opportunities - Array of opportunity objects
 * @returns {Array} Sorted opportunities
 */
export function sortByTitle(opportunities) {
  return [...opportunities].sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Sort opportunities by deadline (earliest first)
 * @param {Array} opportunities - Array of opportunity objects
 * @returns {Array} Sorted opportunities
 */
export function sortByDeadline(opportunities) {
  return [...opportunities].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
}

/**
 * Get unique countries from opportunities
 * @param {Array} opportunities - Array of opportunity objects
 * @returns {Array} Array of unique country names
 */
export function getUniqueCountries(opportunities) {
  return [...new Set(opportunities.map(item => item.country))];
}

/**
 * Search opportunities by title or organization
 * @param {Array} opportunities - Array of opportunity objects
 * @param {String} searchTerm - Search term
 * @returns {Array} Matching opportunities
 */
export function searchOpportunities(opportunities, searchTerm) {
  const lowerTerm = searchTerm.toLowerCase();
  return opportunities.filter(item => 
    item.title.toLowerCase().includes(lowerTerm) || 
    item.organization.toLowerCase().includes(lowerTerm)
  );
}
