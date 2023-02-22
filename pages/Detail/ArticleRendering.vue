<script>
import data from './demo.json'
import Prism from 'prismjs'
import '@/plugins/prismjs'
const post = data.data.markdowncontent
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
let postcontent = md.render(post)
let reCode = /<pre><code class="language-(\w+)">((.|\n|\r)*?)<\/code><\/pre>/g
Prism.manual = true
postcontent = postcontent.replace(reCode, (_, groupOne, groupTwe) => {
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
export default {
  name: "ArticleRendering",
  data() {
    return {
      postcontent
    }
  },
  mounted() {
    generateCopyButton(this)
  }
}

function generateCopyButton (that) {
  const allPres = that.$refs.rootRef.querySelectorAll("pre");
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
}
</script>
<template>
  <div ref="rootRef">
    <div v-html="postcontent"></div>
  </div>
</template>
<style scoped lang="less">
*{
  width: 100%;
}
</style>
