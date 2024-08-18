"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5803],{75916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(85893),o=n(11151);const s={title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",authors:["skzhang1","jieyuz2"],tags:["LLM","research"]},r=void 0,a={permalink:"/autogen/blog/2023/12/23/AgentOptimizer",source:"@site/blog/2023-12-23-AgentOptimizer/index.mdx",title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",description:"Overall structure of AgentOptimizer",date:"2023-12-23T00:00:00.000Z",formattedDate:"December 23, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:6.2,hasTruncateMarker:!1,authors:[{name:"Shaokun Zhang",title:"PhD student at the Pennsylvania State University",url:"https://github.com/skzhang1",imageURL:"https://github.com/skzhang1.png",key:"skzhang1"},{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],frontMatter:{title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",authors:["skzhang1","jieyuz2"],tags:["LLM","research"]},unlisted:!1,prevItem:{title:"All About Agent Descriptions",permalink:"/autogen/blog/2023/12/29/AgentDescriptions"},nextItem:{title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",permalink:"/autogen/blog/2023/12/01/AutoGenStudio"}},c={authorsImageUrls:[void 0,void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"AgentOptimizer",id:"agentoptimizer",level:2},{value:"Pseudocode for the optimization process",id:"pseudocode-for-the-optimization-process",level:2},{value:"The implementation technology behind the AgentOptimizer",id:"the-implementation-technology-behind-the-agentoptimizer",level:2},{value:"Limitation &amp; Future work",id:"limitation--future-work",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Overall structure of AgentOptimizer",src:n(59723).Z+"",width:"1496",height:"600"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TL;DR:"}),"\nIntroducing ",(0,i.jsx)(t.strong,{children:"AgentOptimizer"}),", a new class for training LLM agents in the era of LLMs as a service.\n",(0,i.jsx)(t.strong,{children:"AgentOptimizer"})," is able to prompt LLMs to iteratively optimize function/skills of AutoGen agents according to the historical conversation and performance."]}),"\n",(0,i.jsx)(t.p,{children:"More information could be found in:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Paper"}),": ",(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/2402.11359",children:"https://arxiv.org/abs/2402.11359"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notebook"}),": ",(0,i.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb",children:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["In the traditional ML pipeline, we train a model by updating its weights according to the loss on the training set, while in the era of LLM agents, how should we train an agent?\nHere, we take an initial step towards the agent training. Inspired by the ",(0,i.jsx)(t.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"function calling"})," capabilities provided by OpenAI,\nwe draw an analogy between model weights and agent functions/skills, and update an agent\u2019s functions/skills based on its historical performance on a training set.\nSpecifically, we propose to use the function calling capabilities to formulate the actions that optimize the agents\u2019 functions as a set of function calls, to support iteratively ",(0,i.jsx)(t.strong,{children:"adding, revising, and removing"})," existing functions.\nWe also include two strategies, roll-back, and early-stop, to streamline the training process to overcome the performance-decreasing problem when training.\nAs an agentic way of training an agent, our approach helps enhance the agents\u2019 abilities without requiring access to the LLM's weights."]}),"\n",(0,i.jsx)(t.h2,{id:"agentoptimizer",children:"AgentOptimizer"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AgentOptimizer"})," is a class designed to optimize the agents by improving their function calls.\nIt contains three main methods:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"record_one_conversation"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This method records the conversation history and performance of the agents in solving one problem.\nIt includes two inputs: conversation_history (List[Dict]) and is_satisfied (bool).\nconversation_history is a list of dictionaries which could be got from chat_messages_for_summary in the ",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/autogen/docs/reference/agentchat/agentchat/",children:"AgentChat"})," class.\nis_satisfied is a bool value that represents whether the user is satisfied with the solution. If it is none, the user will be asked to input the satisfaction."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"optimizer = AgentOptimizer(max_actions_per_step=3, llm_config = llm_config)\n# ------------ code to solve a problem ------------\n# ......\n# -------------------------------------------------\nhistory = assistant.chat_messages_for_summary(UserProxy)\noptimizer.record_one_conversation(history, is_satisfied=result)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"step()"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"step()"})," is the core method of AgentOptimizer.\nAt each optimization iteration, it will return two fields register_for_llm and register_for_executor, which are subsequently utilized to update the assistant and UserProxy agents, respectively."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"register_for_llm, register_for_exector = optimizer.step()\nfor item in register_for_llm:\n    assistant.update_function_signature(**item)\nif len(register_for_exector.keys()) > 0:\n    user_proxy.register_function(function_map=register_for_exector)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"reset_optimizer"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This method will reset the optimizer to the initial state, which is useful when you want to train the agent from scratch."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AgentOptimizer"})," includes mechanisms to check the (1) validity of the function and (2) code implementation before returning the register_for_llm, register_for_exector.\nMoreover, it also includes mechanisms to check whether each update is feasible, such as avoiding the removal of a function that is not in the current functions due to hallucination."]}),"\n",(0,i.jsx)(t.h2,{id:"pseudocode-for-the-optimization-process",children:"Pseudocode for the optimization process"}),"\n",(0,i.jsx)(t.p,{children:"The optimization process is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"optimizer = AgentOptimizer(max_actions_per_step=3, llm_config = llm_config)\nfor i in range(EPOCH):\n    is_correct = user_proxy.initiate_chat(assistant, message = problem)\n    history = assistant.chat_messages_for_summary(user_proxy)\n    optimizer.record_one_conversation(history, is_satisfied=is_correct)\n    register_for_llm, register_for_exector = optimizer.step()\n    for item in register_for_llm:\n        assistant.update_function_signature(**item)\n    if len(register_for_exector.keys()) > 0:\n        user_proxy.register_function(function_map=register_for_exector)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Given a prepared training dataset, the agents iteratively solve problems from the training set to obtain conversation history and statistical information.\nThe functions are then improved using AgentOptimizer. Each iteration can be regarded as one training step analogous to traditional machine learning, with the optimization elements being the functions that agents have.\nAfter EPOCH iterations, the agents are expected to obtain better functions that may be used in future tasks"}),"\n",(0,i.jsx)(t.h2,{id:"the-implementation-technology-behind-the-agentoptimizer",children:"The implementation technology behind the AgentOptimizer"}),"\n",(0,i.jsxs)(t.p,{children:["To obtain stable and structured function signatures and code implementations from AgentOptimizer,\nwe leverage the function calling capabilities provided by OpenAI to formulate the actions that manipulate the functions as a set of function calls.\nSpecifically, we introduce three function calls to manipulate the current functions at each step: ",(0,i.jsx)(t.code,{children:"add_function"}),", ",(0,i.jsx)(t.code,{children:"remove_function"}),", and ",(0,i.jsx)(t.code,{children:"revise_function"}),".\nThese calls add, remove, and revise functions in the existing function list, respectively.\nThis practice could fully leverage the function calling capabilities of GPT-4 and output structured functions with more stable signatures and code implementation.\nBelow is the JSON schema of these function calls:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"add_function"}),": Add one new function that may be used in the future tasks."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'ADD_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "add_function",\n        "description": "Add a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {"type": "string", "description": "The name of the function in the code implementation."},\n                "description": {"type": "string", "description": "A short description of the function."},\n                "arguments": {\n                    "type": "string",\n                    "description": \'JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { "url": { "type": "string", "description": "The URL", }}. Please avoid the error \\\'array schema missing items\\\' when using array type.\',\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list.",\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration.",\n                },\n            },\n            "required": ["name", "description", "arguments", "packages", "code"],\n        },\n    },\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"revise_function"}),": Revise one existing function (code implementation, function signature) in the current function list according to the conversation history and performance."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'REVISE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "revise_function",\n        "description": "Revise a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {"type": "string", "description": "The name of the function in the code implementation."},\n                "description": {"type": "string", "description": "A short description of the function."},\n                "arguments": {\n                    "type": "string",\n                    "description": \'JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { "url": { "type": "string", "description": "The URL", }}. Please avoid the error \\\'array schema missing items\\\' when using array type.\',\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list.",\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration.",\n                },\n            },\n            "required": ["name", "description", "arguments", "packages", "code"],\n        },\n    },\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"remove_function"}),": Remove one existing function in the current function list. It is used to remove the functions that are not useful (redundant) in the future tasks."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'REMOVE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "remove_function",\n        "description": "Remove one function in the context of the conversation. Once remove one function, the assistant will not use this function in future conversation.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {"type": "string", "description": "The name of the function in the code implementation."}\n            },\n            "required": ["name"],\n        },\n    },\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"limitation--future-work",children:"Limitation & Future work"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Currently, it only supports optimizing the one typical user_proxy and assistant agents pair. We will make this feature more general to support other agent types in future work."}),"\n",(0,i.jsx)(t.li,{children:"The current implementation of AgentOptimizer is effective solely on the OpenAI GPT-4 model. Extending this feature/concept to other LLMs is the next step."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},59723:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/agentoptimizer-33b265dcca6cff56bbf0c9d63ff389f9.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);