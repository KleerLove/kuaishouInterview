import React, { useEffect } from 'react';

function InterviewList() {
    useEffect(() => {
        const links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].target = '_blank';
        }
    }, []);

    return (
        <div className="container">
            <h1>浏览器与前端性能</h1>
            <ul>
                <li>如何提高前端页面性能</li>
                <li>图片懒加载, 大数据懒加载</li>
                <li>304是协商缓存，HTTP还有什么缓存</li>
                <li>强缓存和协商缓存</li>
                <li>HTTP缓存前端怎么设置，缓存能缓存什么内容</li>
                <li>浏览器存储相关如storage, cookie等以及区别</li>
                <li>HTTP缓存，HTML和JS分别用什么缓存</li>
                <li>常见性能优化方式，问题很开放</li>
                <li>为什么会出现白屏，有什么办法排查</li>
                <li>Lighthouse可交互时间是怎么计算的</li>
                <li>SSR即服务器端渲染</li>
                <li><a href="https://chatgpt.com/share/66f1671e-8c94-8012-b3bb-c3c7e4030fe1">相关链接</a></li>
                <li>XSS攻击了解吗</li>
                <li>CSRF呢？LocalStorage存了token，怎么解决？</li>
                <li>介绍cookie，HTTP-only的作用</li>
                <li>cookie二级域名共享</li>
                <li>为什么是双线程？</li>
                <li>浏览器的渲染线程和JS解析线程</li>
                <li>浏览器和小程序渲染性能哪个更好？</li>
                <li>浏览器的并发请求？</li>
                <li><a href="https://www.doubao.com/thread/w85fbeb7b1c8eefb6">相关链接</a></li>
                <li><a href="https://chatgpt.com/share/66f16bf0-776c-8012-a86d-58b622d8a17a">相关链接</a></li>
                <li>图片为什么转为Base64上传，能转为其他的吗，Base64编码原理知道吗</li>
                <li>文件上传，文件切片上传，断点续传</li>
                <li>WebUploader分片，如果我是后端怎么处理分片</li>
                <li>写回到上次浏览的位置，窗口大小变动怎么办</li>
                <li><a href="https://www.doubao.com/thread/w396b373f5e0d4fc8">相关链接</a></li>
            </ul>

            <h1>计算机网络</h1>
            <ul>
                <li>项目聊天中的WebSocket的实现</li>
                <li>WebSocket的Ping Pong机制</li>
                <li>用写WebSocket进度条以及使用场景</li>
                <li><a href="https://chatgpt.com/share/66f16ed3-430c-8012-951c-a283b646c8eb">相关链接</a></li>
                <li>HTTP状态码 301 302 304</li>
                <li>HTTPS还有什么安全漏洞</li>
                <li>HTTP1并发请求资源数目</li>
                <li>正向代理，反向代理以及他们的应用场景</li>
                <li><a href="https://chatgpt.com/share/66f17126-a678-8012-ace8-acc6542d9007">相关链接</a></li>
            </ul>

            <h1>HTML与CSS</h1>
            <ul>
                <li>移动端适配</li>
                <li>vw、vh、rem、em有什么区别</li>
                <li>Tailwind引入带来的性能损耗如何解决</li>
                <li><a href="https://chatgpt.com/share/66f0dc94-0364-8012-8af6-1cd6eab28b4">相关链接</a></li>
                <li>图片的瀑布流滚动加载怎么做的，不是用IntersectionObserver</li>
                <li>瀑布流加载是怎么做的，回答IntersectionObserver + useRef + useEffect</li>
                <li>图片的高度不一样，是否会出现加载新的图片前某一列很高、某一列很矮，导致页面会留白的情况</li>
                <li><a href="https://chatgpt.com/share/66f0de2b-e664-8012-94bc-9a5ae370717c">相关链接</a></li>
                <li>盒子隐藏的方式</li>
                <li>display:none, visibility:hidden, opacity:0有什么区别</li>
                <li>display设置none会引起什么，渲染的时候，DOM树和渲染树是一一对应的么</li>
                <li>浏览器的重排和重绘</li>
                <li><a href="https://chatgpt.com/share/66f0e1b2-d198-8012-ad3f-21fa231010b9">相关链接</a></li>
                <li>CSS选择器兄弟选择器</li>
                <li>CSS选择器权重</li>
                <li>伪类和伪元素</li>
                <li>事件传播: 事件委托, 事件捕获, 事件冒泡</li>
                <li>怎么当数据很多的时候去点击ul获取li的data</li>
                <li><a href="https://chatgpt.com/share/66f0e4bf-b30c-8012-b09a-eb61e9886c24">相关链接</a></li>
                <li>CSS居中的方法</li>
                <li>前端场景题（垂直布局）</li>
                <li>手写几种元素水平垂直居中方法</li>
                <li>position定位</li>
                <li>transform相较于margin的好处</li>
                <li>flex实现盒子平分宽度，以及一栏固定一栏自适应</li>
                <li>两栏布局右边宽度固定左边自适应</li>
                <li>CSS module实现样式隔离的原理</li>
                <li><a href="https://chatgpt.com/share/66f10d83-5f40-8012-be67-1c520e148bc9">相关链接</a></li>
                <li>给了一个页面设计DOM和CSS</li>
                <li>qiankun怎么实现样式隔离的</li>
            </ul>

            <h1>JavaScript</h1>
            <ul>
                <li>手写准确判断数据类型方法以及返回的示例</li>
                <li>其他的类型判断方式与区别</li>
                <li>手写instanceof方法</li>
                <li><a href="https://leetcode.cn/leetbook/read/2023-ming-qi-qian-duan-mian-shi-kao-dian/w6whei">相关链接</a></li>
                <li><a href="https://chatgpt.com/share/66f11a39-37b8-8012-af86-40c37d7ba254">相关链接</a></li>
                <li>Node.js的CLI，为什么想做这个，聊了技术选型和流程</li>
                <li>代码是怎么在Node环境里面运行的</li>
                <li>手写Node的util中的promiseify</li>
                <li><a href="https://chatgpt.com/share/66f1569b-a4cc-8012-bd56-8ac455ac76ff">相关链接</a></li>
                <li>箭头函数、this、apply、call的问题，和bind有什么区别</li>
                <li>基础this指向问题</li>
                <li>作用域和作用域链</li>
                <li>手写一个JS实现继承方式</li>
                <li>原型链问题</li>
                <li>this和prototype题目输出</li>
                <li>浏览器的事件循环机制</li>
                <li>宏任务，微任务</li>
                <li>点击是什么任务</li>
                <li>异步输出（宏任务微任务）</li>
                <li>定时器一定是准确delay的吗，不一定</li>
                <li>有什么办法尽量准确，我讲了用时间戳来计算</li>
                <li><a href="https://chatgpt.com/share/66f12253-777c-8012-b677-dcb3ad1e3447">相关链接</a></li>
                <li>Promise三种状态</li>
                <li>async await返回值</li>
                <li>手撕：Promise.allSettled</li>
                <li>手写限制并发数的Promise</li>
                <li>手撕Promise.any</li>
                <li>手写Promise.all</li>
                <li>了解哪些异步</li>
                <li>如何拦截请求</li>
                <li><a href="https://chatgpt.com/share/66f13227-03ec-8012-b91a-c95bbae0f0b3">相关链接</a></li>
                <li>数组API</li>
                <li>forEach不止一个参数第二个参数是干什么用的，能不能实现</li>
                <li>编程题：实现一个数组的forEach方法</li>
                <li>上面slice中的参数表示什么</li>
                <li>简单的根据path获取obj值</li>
                <li><a href="https://www.doubao.com/thread/w21a28447f7173e7b">相关链接</a></li>
                <li>垃圾回收机制</li>
                <li>内存泄漏及检测方法</li>
                <li><a href="https://chatgpt.com/share/66f1535b-c548-8012-a719-96cf11b96911">相关链接</a></li>
                <li>节流防抖的区别，手写防抖</li>
                <li><a href="https://chatgpt.com/share/66f1553f-8acc-8012-9b41-b774edcec4fd">相关链接</a></li>
                <li>如何封装组件</li>
                <li>JS造成的卡顿有遇到过吗，怎么处理</li>
                <li>RxJS</li>
                <li>next的，next倒是没怎么问，聊为什么选这些技术栈</li>
            </ul>
        </div>
    );
}

export default InterviewList;
