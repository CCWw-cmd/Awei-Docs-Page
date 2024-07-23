import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Dve1kbzM.js";const g=JSON.parse('{"title":"TypeScript笔记","description":"","frontmatter":{},"headers":[],"relativePath":"TypescriptNotes.md","filePath":"TypescriptNotes.md","lastUpdated":1721660361000}'),e={name:"TypescriptNotes.md"},t=n(`<h1 id="typescript笔记" tabindex="-1">TypeScript笔记 <a class="header-anchor" href="#typescript笔记" aria-label="Permalink to &quot;TypeScript笔记&quot;">​</a></h1><h2 id="导出全局类型" tabindex="-1">导出全局类型 <a class="header-anchor" href="#导出全局类型" aria-label="Permalink to &quot;导出全局类型&quot;">​</a></h2><p>有些类型很常用，经常需要导入，这时候就需要定义全局实例类型，不用每次都导入</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FormInstance } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FileDocument </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/AttachmentPage/FileDocument.vue&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> global {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileDocument</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FileDocument</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span></code></pre></div><p>使用的时候就不用引入文件了，直接可以使用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const fileRef = ref&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FileDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const formRef = ref&lt;Instance.Form&gt;()</span></span></code></pre></div>`,6),p=[t];function l(h,k,r,c,d,o){return a(),i("div",null,p)}const y=s(e,[["render",l]]);export{g as __pageData,y as default};
