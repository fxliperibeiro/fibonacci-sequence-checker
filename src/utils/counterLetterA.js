function countLetterA(str) {
  const regex = /a/gi;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

module.exports = { countLetterA };
