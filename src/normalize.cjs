exports.normalize = (tags) =>
  [...new Set(tags.map((tag) => tag.trim().toLowerCase()).filter((tag) => tag !== ''))].sort();
