async function saveBlog(query, blog, path) {
  const slug = query;
  console.log(`${blog} saved @ ./${path}/${slug}`);
}

module.exports = { saveBlog };
