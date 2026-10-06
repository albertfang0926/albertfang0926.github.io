<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()
</script>

<template>
  <ul class="project-list">
    <li v-if="!list || list.length === 0" class="project-empty">
      本组暂无项目 · 虚位以待
    </li>
    <li v-for="project in list" :key="project.text">
      <a class="cursor-row" target="_blank" :href="project.href" :aria-label="project.text">
        <span class="row-main">
          <span class="row-title">
            {{ project.text }}
            <span class="mark">[外链]</span>
          </span>
          <span v-if="project.description" class="row-desc">{{ project.description }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-list > li + li {
  border-top: 1px solid var(--line);
}

.project-empty {
  padding: 0.6rem 0.3rem;
  color: var(--ink-dim);
}

/* BBS 光标条：与主页/列表页同一语法 */
.cursor-row {
  position: relative;
  display: block;
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

.cursor-row:hover .row-title,
.cursor-row:hover .row-desc,
.cursor-row:hover .mark,
.cursor-row:focus-visible .row-title,
.cursor-row:focus-visible .row-desc,
.cursor-row:focus-visible .mark {
  color: var(--cursor-ink);
}

.cursor-row:hover::before,
.cursor-row:focus-visible::before {
  color: var(--cursor-ink);
  opacity: 1;
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
</style>
