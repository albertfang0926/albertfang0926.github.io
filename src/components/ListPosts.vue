<script lang="ts" setup>
interface Post {
  id: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

withDefaults(defineProps<{
  list?: Post[]
}>(), {
  list: () => [],
})

function getDate(date: string) {
  return new Date(date).toISOString()
}

function getHref(post: Post) {
  if (post.data.redirect)
    return post.data.redirect
  return `/posts/${post.id}`
}

function getTarget(post: Post) {
  if (post.data.redirect)
    return '_blank'
  return '_self'
}

function isSameYear(a: Date | string | number, b: Date | string | number) {
  return a && b && getYear(a) === getYear(b)
}

function getYear(date: Date | string | number) {
  return new Date(date).getFullYear()
}

function getMeta(post: Post) {
  return [
    post.data.tag && `[${post.data.tag}]`,
    post.data.duration && post.data.duration.replace(/min/i, '分钟'),
  ].filter(Boolean).join(' · ')
}
</script>

<template>
  <ul class="bbs-posts">
    <li v-if="!list || list.length === 0" class="bbs-empty">
      本版暂无张贴 · 虚位以待
    </li>
    <template v-for="(post, index) in list" :key="post.id">
      <li v-if="!isSameYear(post.data.date, list[index - 1]?.data.date)" class="year-row">
        <span class="year-label">{{ getYear(post.data.date) }}</span>
      </li>
      <li>
        <a
          class="cursor-row"
          :aria-label="post.data.title"
          :target="getTarget(post)"
          :href="getHref(post)"
        >
          <span class="row-idx">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="row-main">
            <span class="row-title">
              {{ post.data.title }}
              <span v-if="post.data.draft" class="mark">[草稿]</span>
              <span v-if="post.data.redirect" class="mark">[外链]</span>
              <span v-if="post.data.video" class="mark">[视频]</span>
            </span>
            <span v-if="post.data.description" class="row-desc">{{ post.data.description }}</span>
          </span>
          <time v-if="post.data.date" class="row-date" :datetime="getDate(post.data.date)">{{ post.data.date }}</time>
          <span class="row-meta">{{ getMeta(post) }}</span>
        </a>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.bbs-posts {
  margin: 0;
  padding: 0;
  list-style: none;
}

.bbs-posts > li + li:not(.year-row) {
  border-top: 1px solid var(--line);
}

.bbs-posts > .year-row + li {
  border-top: 0;
}

.bbs-empty {
  padding: 0.6rem 0.3rem;
  color: var(--ink-dim);
}

/* 年代分隔行：Label 号淡墨骑在 1px 框线上（legend 嵌线同语法） */
.year-row {
  display: flex;
  align-items: center;
  gap: 1.2ch;
  padding: 0.3rem 0.5rem 0.3rem 0;
  font-size: 0.8125rem;
  color: var(--ink-dim);
  font-variant-numeric: tabular-nums;
}

.year-row::after {
  content: '';
  flex: 1;
  border-top: 1px solid var(--line);
}

/* BBS 光标条：与主页同一语法 */
.cursor-row {
  position: relative;
  display: grid;
  grid-template-columns: 2.5ch minmax(0, 1fr) 10ch minmax(0, 12ch);
  align-items: baseline;
  gap: 0 1.2ch;
  padding: 0.55rem 0.5rem 0.55rem 1.35rem;
  color: inherit;
  text-decoration: none;
  transition: background-color 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.cursor-row::before {
  content: '▸';
  position: absolute;
  left: 0.2rem;
  top: 0.55rem;
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.cursor-row:hover,
.cursor-row:focus-visible {
  background: var(--cursor);
  color: var(--cursor-ink);
}

.cursor-row:hover .row-idx,
.cursor-row:hover .row-title,
.cursor-row:hover .row-desc,
.cursor-row:hover .row-date,
.cursor-row:hover .row-meta,
.cursor-row:hover .mark,
.cursor-row:focus-visible .row-idx,
.cursor-row:focus-visible .row-title,
.cursor-row:focus-visible .row-desc,
.cursor-row:focus-visible .row-date,
.cursor-row:focus-visible .row-meta,
.cursor-row:focus-visible .mark {
  color: var(--cursor-ink);
}

.cursor-row:hover::before,
.cursor-row:focus-visible::before {
  color: var(--cursor-ink);
  opacity: 1;
}

.row-idx {
  color: var(--ink-dim);
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
}

.row-main {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.row-title {
  font-weight: 700;
  overflow-wrap: anywhere;
}

.row-desc {
  color: var(--ink-soft);
  font-size: 0.8125rem;
}

.mark {
  margin-left: 0.4em;
  font-size: 0.78em;
  font-weight: 400;
  color: var(--accent-2);
  white-space: nowrap;
}

.row-date {
  color: var(--ink-dim);
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.row-meta {
  color: var(--ink-dim);
  font-size: 0.8125rem;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 640px) {
  .cursor-row {
    grid-template-columns: 2.5ch minmax(0, 1fr);
  }

  .row-date,
  .row-meta {
    grid-column: 2;
    text-align: left;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .bbs-posts > li {
    animation: light-up 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .bbs-posts > li:nth-child(1) {
    animation-delay: 0.05s;
  }
  .bbs-posts > li:nth-child(2) {
    animation-delay: 0.11s;
  }
  .bbs-posts > li:nth-child(3) {
    animation-delay: 0.17s;
  }
  .bbs-posts > li:nth-child(4) {
    animation-delay: 0.23s;
  }
  .bbs-posts > li:nth-child(5) {
    animation-delay: 0.29s;
  }
  .bbs-posts > li:nth-child(n + 6) {
    animation-delay: 0.35s;
  }

  @keyframes light-up {
    from {
      opacity: 0;
      transform: translateY(4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
