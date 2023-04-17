import React from "react";
import Filter from "../organisms/blog-filter";
import Grid from "../organisms/blog-grid";
import Pagination from "../organisms/blog-pagination";

export default function BlogArchive({ context, posts, categories }) {
  return (
    <div>
      <Filter urlBasis={context.archiveUrl} categories={categories}/>
      <Grid currentPage={context.page} posts={posts}/>
      <Pagination urlBasis={context.urlBasis} currentPage={context.page} itemCount={posts.length} />
    </div>
  )
}