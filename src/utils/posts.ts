import type { CollectionPosts, PostKey } from '@/types'
import { getCollection } from 'astro:content'

export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts) {
  return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
}

export async function getPosts(path?: string, collection: PostKey = 'blog') {
  return (await getCollection(collection, (post) => {
    return (import.meta.env.PROD ? post.data.draft !== true : true) && (path ? post.id.includes(path) : true)
  })).sort(sortPostsByDate)
}

export async function getAllPosts(path?: string) {
  const postsByCollection = await Promise.all(
    (['blog', 'notes', 'talks'] as PostKey[]).map(collection => getPosts(path, collection)),
  )
  return postsByCollection.flat().sort(sortPostsByDate)
}

const defaultCover = '/default-cover.svg'

export function getPostCover(post: CollectionPosts) {
  if (post.data.image?.src) {
    return { src: post.data.image.src, alt: post.data.image.alt || post.data.title }
  }

  const body = post.body ?? ''
  const markdownImage = body.match(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+["'][^"']*["'])?\s*\)/)
  const htmlImage = body.match(/<img[^>]*\ssrc=["']([^"']+)["']/i)
  const src = markdownImage?.[1] ?? htmlImage?.[1]

  return { src: src ?? defaultCover, alt: post.data.title }
}
