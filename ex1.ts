/**
 * Returns the index of the first available table in the given array, else returns -1
 */
function findAvailableTable(tables: boolean[]): number {
  return tables.indexOf(true);
}

/**
 * Async function that returns the index of the first available table in the given array, else returns -1
 */
async function findAvailableTableAsync(tables: boolean[]): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(findAvailableTable(tables));
  });
}