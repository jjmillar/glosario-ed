export function editId (i) {
  if (typeof i === 'string') {
    let result = i
    result = result.split(' ').join('-')
    console.log(result)
    return result
  }
}
