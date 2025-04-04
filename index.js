// index.js

class Formatter {
  // Capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Remove all non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalize all words except for certain small words, but always capitalize the first word
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    return sentence
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return this.capitalize(word);
        }
        return word;
      })
      .join(' ');
  }
}

// Testing the Formatter class
console.log(Formatter.capitalize("hello")); // "Hello"
console.log(Formatter.sanitize("Hello@World!")); // "HelloWorld"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); 
// "The Quick Brown Fox Jumps Over the Lazy Dog"

module.exports = Formatter;
