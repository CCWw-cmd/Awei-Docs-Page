import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.b0klVVrp.js";const E=JSON.parse('{"title":"vite 插件","description":"","frontmatter":{},"headers":[],"relativePath":"vite插件.md","filePath":"vite插件.md","lastUpdated":1721660361000}'),e={name:"vite插件.md"},n=t(`<h1 id="vite-插件" tabindex="-1">vite 插件 <a class="header-anchor" href="#vite-插件" aria-label="Permalink to &quot;vite 插件&quot;">​</a></h1><h2 id="vite-plugin-inspect" tabindex="-1">vite-plugin-inspect <a class="header-anchor" href="#vite-plugin-inspect" aria-label="Permalink to &quot;vite-plugin-inspect&quot;">​</a></h2><blockquote><p><code>vite-plugin-inspect</code> 可以让开发者在浏览器端就可以看到<a href="https://so.csdn.net/so/search?q=vue&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">vue</a>文件编译后的代码、vue 文件的相互依赖关系</p></blockquote><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vite</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inspect</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Inspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite-plugin-inspect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Inspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加上这一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><a href="https://blog.csdn.net/qq_45634593/article/details/139617472" target="_blank" rel="noreferrer">具体使用教程</a></p>`,7),p=[n];function l(h,k,r,d,c,o){return a(),i("div",null,p)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};
