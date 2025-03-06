async function getBlog(query) {
  return `${query} blog`;
}

async function getCover(query) {
  return `${query} cover`;
}

module.exports = { getBlog, getCover };
