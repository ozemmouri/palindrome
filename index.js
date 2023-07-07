module.exports = Phrase;

//Add `reverse`to all string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  //Return content processed for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }
  
  //Return only the letters in the content
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }


  //Return true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }

  }

  //Make the phrase Lounder
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

//Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase ();

//Add a Blank method
String.prototype.blank = function() {
  return !!this.match(/^\s+$/g);
}

//Add `last`method that gives us the last element of an Array
Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.lastUsingSlicing = function() {
  return this.slice(-1)[0];
}