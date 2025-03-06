#!/usr/bin/env node

const { getPrompt } = require("./src/cli");
const { getBlog, getCover } = require("./src/api");
const { saveBlog, saveCover } = require("./src/lib/utils");
const { paths, query } = require("./src/lib/consts");

async function init() {
  const blogPrompt = await getPrompt(query.BLOG);
  const coverPrompt = await getPrompt(query.COVER);
  const blog = await getBlog(blogPrompt.prompt);
  const cover = await getCover(coverPrompt.prompt);
  saveBlog(blogPrompt.title, blog, paths.saveDirPath);
  saveCover(coverPrompt.title, cover, paths.saveDirPath);
}

init();

module.exports = { getPrompt, getBlog, saveBlog };
