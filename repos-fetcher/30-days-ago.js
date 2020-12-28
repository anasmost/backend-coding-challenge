// Create the ISO string representing the date 30days ago
module.exports = function () {
  const _30DaysAgoInMilliseconds = Date.now() - 1000 * 3600 * 24 * 30,
    $30DaysAgo = new Date(_30DaysAgoInMilliseconds);

  return $30DaysAgo.toISOString()
}