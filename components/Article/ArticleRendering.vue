<script>
import { onMounted, ref } from 'vue'
import deepmerge from 'deepmerge' // You can use `structuredClone` in modern JS.
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize from 'rehype-sanitize'
import { defaultSchema } from 'hast-util-sanitize'
import Prism from 'prismjs'
import '@/plugins/prismjs'

import data from './demo.json'
const { data: postData } = JSON.parse(data).data.markdowncontent
const schema = deepmerge(defaultSchema, {
  attributes: {
    '*': ['className']
  },
  required: {
    pre: { className: "line-numbers" }
  }
})
const processedContent = unified()
  .use(remarkParse)
  .use(remarkToc, {
    prefix: "user-content-"
  })
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeDocument)
  .use(rehypeFormat)
  .use(rehypeSanitize, schema)
  .use(rehypeStringify)
  .processSync("\n ## Table of Content \n" + postData.article)
let contentHtml = processedContent.toString()
const reTableOfContent = /<h2 id="user-content-table-of-content">Table of Content<\/h2>(.|\n)*?<\/ul>/g
let TableOfContent = ""
contentHtml = contentHtml.replace(reTableOfContent, (match) => {
  TableOfContent = match
  return ""
})


let reCode = /<pre class="line-numbers"><code class="language-(\w+)">((.|\n|\r)*?)<\/code><\/pre>/g
Prism.manual = true
postData.article = contentHtml.replace(reCode, (_, groupOne, groupTwe) => {
  const spans = groupTwe.match(/\n/g)
  let span = ""
  spans.forEach(() => {
    span += "<span></span>"
  });
  return `<pre class="line-numbers language-${groupOne}"><code class="language-${groupOne}">`
    + Prism.highlight(groupTwe, Prism.languages[groupOne], groupOne) +
    `<span aria-hidden="true" class="line-numbers-rows">${span}</span>`
    + "</code></pre>"
})

const rootRef = ref();
const oldActiveTab = ref(-1);
const distances = ref([50, 0])

onMounted(() => {
  function getTopDistanse() {
    const tabs = rootRef.value.querySelectorAll("h1,h2,h3,h4,h5,h6");
    const els = rootRef.value.querySelectorAll("ul li");
    tabs.forEach((el, key) => {
      // 浏览器 到用户的距离 - 标题 到用户的距离 (用户滚轮条)
      const temp = Math.min(Math.abs(document.documentElement.scrollTop - (el).offsetTop), distances.value[0])
      if (temp !== distances.value[0]) {
        distances.value[1] = key
      }
    })
    if (oldActiveTab.value !== -1) {
      els[oldActiveTab.value].classList.remove('active')
    }
    els[distances.value[1]].classList.add('active')
    oldActiveTab.value = distances.value[1]
  }
  getTopDistanse()
  window.addEventListener("scroll", function () {
    getTopDistanse()
  })
  const allPres = rootRef.value.querySelectorAll("pre");
  for (const pre of allPres) {
    const code = pre.firstElementChild;
    if (!code || !/code/i.test(code.tagName)) {
      continue;
    }
    pre.addEventListener("mouseenter", (e) => {
      pre.classList.add("showButton")
    });
    pre.addEventListener("mouseleave", (e) => {
      pre.classList.remove("showButton")
    });

    pre.appendChild(createCopyButton(code));
    pre.appendChild(createLangButton(code, pre));
    function createCopyButton(codeEl) {
      const button = document.createElement("button");
      button.classList.add("prism-copy-button");
      button.textContent = "Copy";

      button.addEventListener("click", () => {
        if (button.textContent === "Copied") {
          return;
        }
        navigator.clipboard.writeText(codeEl.textContent || "");
        button.textContent = "Copied";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = "Copy";
          button.disabled = false;
        }, 1000);
      });

      return button;
    }
    function createLangButton(codeEl, preEl) {
      const button = document.createElement("button");
      button.classList.add("prism-lang-button");
      let text = ""
      codeEl.classList.forEach(className => {
        let re = /language-(\w+)/;
        const result = className.match(re)
        if (result !== null) {
          text = result[1]
        }
      });
      if (text === "") {
        codeEl.classList.add("language-bash")
        preEl.classList.add("language-bash")
        text = "undifined"
      }
      button.textContent = text;
      return button;
    }
  }
})
export default {
  data() { 
    return {
      TableOfContent,
      postData
    }
  }
}
</script>
<template>
  <div class="flex flex-row relative" ref="rootRef">
    <div class="w-[30rem] mr-2 rounded-sm bg-violet-600 text-white tableOfContent" v-html="TableOfContent"></div>
    <div class="w-full" v-html="postData.article"></div>
  </div>
</template>
<style scoped lang="less">
.tableOfContent {
  border-radius: 2px;
  height: 400px;
  box-sizing: border-box;
  top: 100px;
  position: sticky;

  ul {
    @apply bg-black;
    li {
      white-space: break-spaces;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.5s;
      padding: 3px 5px 3px 1rem;

      &.active {
        @apply duration-300 bg-black scale-[1.01];
      }
    }

    li:hover {
      overflow: visible;
      padding: 5px 2px 5px 0.5rem;
      background-color: rgba(0, 0, 0, 0.1);

      a {
        text-decoration: none;
        color: #b25f51;
      }
    }
  }
}
</style>
