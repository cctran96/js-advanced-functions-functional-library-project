const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else if (typeof collection === 'object') {
        for (var key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      } else {
        for (var key in collection) {
          newCollection.push(callback(collection[key], key, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc = -2) {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let array = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n = 0) {
      if (n) {
        return array.slice(0,n)
      }
      return array[0]
    },

    last: function(array, n = 0) {
      if (n) {
        return array.slice(array.length - n, array.length)
      }
      return array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let mapArray = fi.map(array, e => callback(e)).sort((a,b) => a - b)
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < mapArray.length; j++) {
          if (callback(array[i]) === mapArray[j]) {
            mapArray[j] = array[i]
          }
        }
      }
      return mapArray
    },

    flatten: function(array, [shallow]) {

    },

    uniq: function(array, [isSorted], [callback]) {

    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      
    },
  }
})()