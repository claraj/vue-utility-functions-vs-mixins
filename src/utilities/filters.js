export function uppercase(text) {
    return text.toUpperCase()
}

export function truncate(text, length) {
    if (text.length <= length) {
        return text
    }

    let stringStart = text.slice(0, length)
    return stringStart + '...'

}