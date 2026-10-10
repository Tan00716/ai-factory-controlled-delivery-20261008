exports.normalize = (tags) => {
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    throw new TypeError('INVALID_INPUT');
  }
  return [...new Set(tags.map((tag) => tag.trim().toLowerCase().normalize('NFC')).filter((tag) => tag !== ''))].sort();
};
