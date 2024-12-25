async function getPrompt(query) {
  const title = "html5 basics";
  return { prompt: `${query} ${title}`, title };
}

module.exports = { getPrompt };
