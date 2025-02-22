type SortableObject = {
  id: string
  before?: string
  after?: string
}

export function sortByAfterAndBefore<Sortable extends SortableObject>(
  array: Sortable[],
): Sortable[] {
  if (array.length === 0) {
    return []
  }

  const afters = new Map<string, string>()
  const befores = new Map<string, string>()
  const map = new Map<string, Sortable>()

  for (const element of array) {
    map.set(element.id, element)

    if (element.after) {
      afters.set(element.id, element.after)
      befores.set(element.after, element.id)
    }

    if (element.before) {
      befores.set(element.id, element.before)
      afters.set(element.before, element.id)
    }
  }

  let pointer: string = array[0].id
  do {
    const newPointer: string | undefined = befores.get(pointer)

    if (newPointer === undefined) {
      break
    }

    pointer = newPointer
  } while (befores.has(pointer))

  const sorted: Sortable[] = []

  if (pointer === undefined) {
    return sorted
  }

  const pointed: string[] = []
  do {
    const retrieved: Sortable = map.get(pointer)!

    sorted.push(retrieved)
    pointed.push(pointer)

    const newPointer: string | undefined = afters.get(pointer)

    if (newPointer === undefined) {
      break
    }

    pointer = newPointer
  } while (pointer !== undefined)

  const missed: Sortable[] = array.filter((sortable) => pointed.includes(sortable.id) === false)

  return sorted.reverse().concat(missed)
}
