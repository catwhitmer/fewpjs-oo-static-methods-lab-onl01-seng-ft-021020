class Formatter {
 static capitalize(string) {
    let phrase = string;
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  }

  static sanitize(string) {
    let phrase = string;
    return phrase.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }ds here
}