/**
 * Returns an array of student IDs from a list of the student objects
 *
 * @param {Array} lst - the list of student objects
 * @returns {Array} an array of student IDs or an empty array if lst is not an array
 */
export default function getListStudentIds(lst) {
  if (Array.isArray(lst)) {
    return lst.map((obj) => obj.id);
  }

  return [];
}
