#!/usr/bin/env node

const { getPrompt } = require("./src/cli");
const { getBlog } = require("./src/api");
const { saveBlog } = require("./src/lib/utils");
const { paths, query } = require("./src/lib/consts");

async function init() {
  const { prompt, title } = await getPrompt(query);
  const blog = await getBlog(prompt);
  saveBlog(title, blog, paths.saveDirPath);
}

init();

module.exports = { getPrompt, getBlog, saveBlog };
