"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7575],{60051:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(85893),a=s(11151);const r={title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",authors:"jieyuz2",tags:["LLM","RAG","cost-effectiveness"]},i=void 0,o={permalink:"/autogen/blog/2023/11/09/EcoAssistant",source:"@site/blog/2023-11-09-EcoAssistant/index.mdx",title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",description:"system",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"RAG",permalink:"/autogen/blog/tags/rag"},{label:"cost-effectiveness",permalink:"/autogen/blog/tags/cost-effectiveness"}],readingTime:4.565,hasTruncateMarker:!1,authors:[{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],frontMatter:{title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",authors:"jieyuz2",tags:["LLM","RAG","cost-effectiveness"]},unlisted:!1,prevItem:{title:"AutoGen Meets GPTs",permalink:"/autogen/blog/2023/11/13/OAI-assistants"},nextItem:{title:"Multimodal with GPT-4V and LLaVA",permalink:"/autogen/blog/2023/11/06/LMM-Agent"}},c={authorsImageUrls:[void 0]},l=[{value:"EcoAssistant",id:"ecoassistant",level:2},{value:"Problem setup",id:"problem-setup",level:3},{value:"Leveraging external APIs",id:"leveraging-external-apis",level:3},{value:"Solution Demonstration",id:"solution-demonstration",level:3},{value:"Assistant Hierarchy",id:"assistant-hierarchy",level:3},{value:"A Synergistic Effect",id:"a-synergistic-effect",level:3},{value:"Experimental Results",id:"experimental-results",level:3},{value:"Further reading",id:"further-reading",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"system",src:s(16599).Z+"",width:"3040",height:"2122"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"TL;DR:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Introducing the ",(0,n.jsx)(t.strong,{children:"EcoAssistant"}),", which is designed to solve user queries more accurately and affordably."]}),"\n",(0,n.jsx)(t.li,{children:"We show how to let the LLM assistant agent leverage external API to solve user query."}),"\n",(0,n.jsxs)(t.li,{children:["We show how to reduce the cost of using GPT models via ",(0,n.jsx)(t.strong,{children:"Assistant Hierarchy"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["We show how to leverage the idea of Retrieval-augmented Generation (RAG) to improve the success rate via ",(0,n.jsx)(t.strong,{children:"Solution Demonstration"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"ecoassistant",children:"EcoAssistant"}),"\n",(0,n.jsxs)(t.p,{children:["In this blog, we introduce the ",(0,n.jsx)(t.strong,{children:"EcoAssistant"}),", a system built upon AutoGen with the goal of solving user queries more accurately and affordably."]}),"\n",(0,n.jsx)(t.h3,{id:"problem-setup",children:"Problem setup"}),"\n",(0,n.jsx)(t.p,{children:"Recently, users have been using conversational LLMs such as ChatGPT for various queries.\nReports indicate that 23% of ChatGPT user queries are for knowledge extraction purposes.\nMany of these queries require knowledge that is external to the information stored within any pre-trained large language models (LLMs).\nThese tasks can only be completed by generating code to fetch necessary information via external APIs that contain the requested information.\nIn the table below, we show three types of user queries that we aim to address in this work."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Dataset"}),(0,n.jsx)(t.th,{children:"API"}),(0,n.jsx)(t.th,{children:"Example query"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Places"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://developers.google.com/maps/documentation/places/web-service/overview",children:"Google Places"})}),(0,n.jsx)(t.td,{children:"I\u2019m looking for a 24-hour pharmacy in Montreal, can you find one for me?"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Weather"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.weatherapi.com",children:"Weather API"})}),(0,n.jsx)(t.td,{children:"What is the current cloud coverage in Mumbai, India?"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stock"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.alphavantage.co/documentation/",children:"Alpha Vantage Stock API"})}),(0,n.jsx)(t.td,{children:"Can you give me the opening price of Microsoft for the month of January 2023?"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"leveraging-external-apis",children:"Leveraging external APIs"}),"\n",(0,n.jsxs)(t.p,{children:["To address these queries, we first build a ",(0,n.jsx)(t.strong,{children:"two-agent system"})," based on AutoGen,\nwhere the first agent is a ",(0,n.jsx)(t.strong,{children:"LLM assistant agent"})," (",(0,n.jsx)(t.code,{children:"AssistantAgent"})," in AutoGen) that is responsible for proposing and refining the code and\nthe second agent is a ",(0,n.jsx)(t.strong,{children:"code executor agent"})," (",(0,n.jsx)(t.code,{children:"UserProxyAgent"})," in AutoGen) that would extract the generated code and execute it, forwarding the output back to the LLM assistant agent.\nA visualization of the two-agent system is shown below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"chat",src:s(81675).Z+"",width:"2528",height:"2467"})}),"\n",(0,n.jsx)(t.p,{children:"To instruct the assistant agent to leverage external APIs, we only need to add the API name/key dictionary at the beginning of the initial message.\nThe template is shown below, where the red part is the information of APIs and black part is user query."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"template",src:s(68663).Z+"",width:"1678",height:"501"})}),"\n",(0,n.jsxs)(t.p,{children:["Importantly, we don't want to reveal our real API key to the assistant agent for safety concerns.\nTherefore, we use a ",(0,n.jsx)(t.strong,{children:"fake API key"})," to replace the real API key in the initial message.\nIn particular, we generate a random token (e.g., ",(0,n.jsx)(t.code,{children:"181dbb37"}),") for each API key and replace the real API key with the token in the initial message.\nThen, when the code executor execute the code, the fake API key would be automatically replaced by the real API key."]}),"\n",(0,n.jsx)(t.h3,{id:"solution-demonstration",children:"Solution Demonstration"}),"\n",(0,n.jsxs)(t.p,{children:["In most practical scenarios, queries from users would appear sequentially over time.\nOur ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," leverages past success to help the LLM assistants address future queries via ",(0,n.jsx)(t.strong,{children:"Solution Demonstration"}),".\nSpecifically, whenever a query is deemed successfully resolved by user feedback, we capture and store the query and the final generated code snippet.\nThese query-code pairs are saved in a specialized vector database. When new queries appear, ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," retrieves the most similar query from the database, which is then appended with the associated code to the initial prompt for the new query, serving as a demonstration.\nThe new template of initial message is shown below, where the blue part corresponds to the solution demonstration."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"template",src:s(5115).Z+"",width:"1089",height:"544"})}),"\n",(0,n.jsx)(t.p,{children:"We found that this utilization of past successful query-code pairs improves the query resolution process with fewer iterations and enhances the system's performance."}),"\n",(0,n.jsx)(t.h3,{id:"assistant-hierarchy",children:"Assistant Hierarchy"}),"\n",(0,n.jsxs)(t.p,{children:["LLMs usually have different prices and performance, for example, GPT-3.5-turbo is much cheaper than GPT-4 but also less accurate.\nThus, we propose the ",(0,n.jsx)(t.strong,{children:"Assistant Hierarchy"})," to reduce the cost of using LLMs.\nThe core idea is that we use the cheaper LLMs first and only use the more expensive LLMs when necessary.\nBy this way, we are able to reduce the reliance on expensive LLMs and thus reduce the cost.\nIn particular, given multiple LLMs, we initiate one assistant agent for each and start the conversation with the most cost-effective LLM assistant.\nIf the conversation between the current LLM assistant and the code executor concludes without successfully resolving the query, ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," would then restart the conversation with the next more expensive LLM assistant in the hierarchy.\nWe found that this strategy significantly reduces costs while still effectively addressing queries."]}),"\n",(0,n.jsx)(t.h3,{id:"a-synergistic-effect",children:"A Synergistic Effect"}),"\n",(0,n.jsxs)(t.p,{children:["We found that the ",(0,n.jsx)(t.strong,{children:"Assistant Hierarchy"})," and ",(0,n.jsx)(t.strong,{children:"Solution Demonstration"})," of ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," have a synergistic effect.\nBecause the query-code database is shared by all LLM assistants, even without specialized design,\nthe solution from more powerful LLM assistant (e.g., GPT-4) could be later retrieved to guide weaker LLM assistant (e.g., GPT-3.5-turbo).\nSuch a synergistic effect further improves the performance and reduces the cost of ",(0,n.jsx)(t.strong,{children:"EcoAssistant"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"experimental-results",children:"Experimental Results"}),"\n",(0,n.jsxs)(t.p,{children:["We evaluate ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," on three datasets: Places, Weather, and Stock. When comparing it with a single GPT-4 assistant, we found that ",(0,n.jsx)(t.strong,{children:"EcoAssistant"})," achieves a higher success rate with a lower cost as shown in the figure below.\nFor more details about the experimental results and other experiments, please refer to our ",(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/2310.03046",children:"paper"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"exp",src:s(39011).Z+"",width:"1000",height:"500"})}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.p,{children:["Please refer to our ",(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/2310.03046",children:"paper"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/JieyuZ2/EcoAssistant",children:"codebase"})," for more details about ",(0,n.jsx)(t.strong,{children:"EcoAssistant"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If you find this blog useful, please consider citing:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bibtex",children:"@article{zhang2023ecoassistant,\n  title={EcoAssistant: Using LLM Assistant More Affordably and Accurately},\n  author={Zhang, Jieyu and Krishna, Ranjay and Awadallah, Ahmed H and Wang, Chi},\n  journal={arXiv preprint arXiv:2310.03046},\n  year={2023}\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},81675:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/chat-a2adea6a92b3cd4059021840c869d7d5.png"},39011:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/results-4c8cfbb728760a85ce2d549fd7798179.png"},16599:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/system-1f6d283e77b49cac460bb999adb6bd5d.png"},5115:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/template-demo-5a8cae3df56acdcf73188e401ad739f5.png"},68663:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/template-c610ae53eaa7afa3adaf670fa74b5c10.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(67294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);