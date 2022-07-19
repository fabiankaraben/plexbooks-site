import siteMetadata from '@/data/siteMetadata'
import JavaScriptBookListLayout from '@/layouts/JavaScriptBookListLayout'
import { PageSEO } from '@/components/SEO'
import { ascSortedJavaScriptBookPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allJavaScriptBooks } from 'contentlayer/generated'

export const POSTS_PER_PAGE = 5000

export const getStaticProps = async () => {
  const posts = ascSortedJavaScriptBookPost(allJavaScriptBooks)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`JavaScript Book - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <JavaScriptBookListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="JavaScript Book"
      />
    </>
  )
}
