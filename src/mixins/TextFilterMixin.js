// create in similar way to Vue component
// Add filters, data, methods, created, mounted, computed...
// if this mixin is added or 'mixed into' another Vue component,
// that Vue component will have all of it's own abilities, data etc
// plus all the things defined in this mixin.

export default {
    name: 'TextFilterMixin',
    created() {
        console.log('hello from the text mixin!')
    },
    data() {
         return {
             example: 'This is data from the mixin'
         }
    },
    filters: {
        uppercase(text) {
            return text.toUpperCase()
        },
        truncate(text, length) {
            if (text.length <= length) {
                return text
            }

            let stringStart = text.slice(0, length)
            return stringStart + '...'
        }
    }
}

