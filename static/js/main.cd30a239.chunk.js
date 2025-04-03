(this.webpackJsonpmastermindgame=this.webpackJsonpmastermindgame||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),c=s(18),o=s.n(c),l=(s(25),s(26),s(19)),r=s.n(l),i=s(0);function u(e){let{handleColorClick:t}=e;return Object(i.jsxs)("div",{className:"coloredButton",children:[Object(i.jsx)("button",{className:"buttons",style:{background:"blue"},onClick:()=>"0"}),Object(i.jsx)("button",{className:"buttons",style:{background:"green"},onClick:()=>t("1")}),Object(i.jsx)("button",{className:"buttons",style:{background:"yellow"},onClick:()=>t("2")}),Object(i.jsx)("button",{className:"buttons",style:{background:"red"},onClick:()=>t("3")}),Object(i.jsx)("button",{className:"buttons",style:{background:"black"},onClick:()=>t("4")}),Object(i.jsx)("button",{className:"buttons",style:{background:"orange"},onClick:()=>t("5")}),Object(i.jsx)("button",{className:"buttons",style:{background:"purple"},onClick:()=>t("6")}),Object(i.jsx)("button",{className:"buttons",style:{background:"brown"},onClick:()=>t("7")})]})}var h=s(5),d=s(4);var b={0:Object(i.jsx)(h.a,{icon:d.a,style:{color:"blue",fontSize:"40px"}}),1:Object(i.jsx)(h.a,{icon:d.a,style:{color:"green",fontSize:"40px"}}),2:Object(i.jsx)(h.a,{icon:d.a,style:{color:"yellow",fontSize:"40px"}}),3:Object(i.jsx)(h.a,{icon:d.a,style:{color:"red",fontSize:"40px"}}),4:Object(i.jsx)(h.a,{icon:d.a,style:{color:"black",fontSize:"40px"}}),5:Object(i.jsx)(h.a,{icon:d.a,style:{color:"orange",fontSize:"40px"}}),6:Object(i.jsx)(h.a,{icon:d.a,style:{color:"purple",fontSize:"40px"}}),7:Object(i.jsx)(h.a,{icon:d.a,style:{color:"brown",fontSize:"40px"}})},p=s(20),j=s.n(p);const m=(e,t,s,n,a)=>{j()({title:e,text:t,icon:s,button:n,dangerMode:a})};class g extends a.a.Component{constructor(){super(),this.handleColorClick=e=>{const{guessInputs:t,secretCode:s}=this.state;let n=Object.assign({},t),a=n.userInput,c=[...s];if(t.userInput.length<4&&(a.push(e),this.setState({guessInputs:n}),4===a.length)){a.forEach(((e,t)=>{c.includes(e)&&(n.valueMatch++,c[c.indexOf(e)]=null)})),this.setState({guessInputs:n});for(let e=0;e<a.length;e++)a[e]===this.state.secretCode[e]&&n.indexMatch++,this.setState({guessInputs:n})}},this.handleDemineClick=()=>{const{guessInputs:e,history:t}=this.state;let s=this.state.attempts;s++,10===s&&4!==this.state.guessInputs.valueMatch?m("The bridge has exploded!","You let us down, Sapper...","error","I'm sorry, sir"):4===this.state.guessInputs.valueMatch&&4===this.state.guessInputs.indexMatch&&m("The bridge is de-mined.","Congratulations, Sapper!","success","Glad to serve!");let n=[...t,e];4===e.userInput.length&&(this.setState({history:n,attempts:s}),this.handleClearClick())},this.handleNewGameClick=()=>{m("Salute, Sapper! Here is the deal:","Our enemies have mined our bridge. As a military engineer, you have to de-mine the bridge. Try to guess the correct color and the correct order of the bombs. You have a total of 10 attemps. FEEDBACK: The RED number shows how many correct colors you have guessed and the BLUE number will show how many correct colors and their correct locations you have guessed. Are you ready?",null,"Yes, sir!",!0),this.fetchData();let e={guessInputs:{userInput:[],indexMatch:0,valueMatch:0},history:[],attempts:0};this.setState({guessInputs:e.guessInputs,history:e.history,attempts:e.attempts})},this.handleClearClick=()=>{this.setState({guessInputs:{userInput:[],indexMatch:0,valueMatch:0}})},this.state={guessInputs:{userInput:[],indexMatch:0,valueMatch:0},attempts:0,history:[],secretCode:[],colorMap:b}}async fetchData(){try{const e=(await r.a.get("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")).data.split("").filter((e=>"\n"!==e));this.setState({secretCode:e})}catch(e){console.log(e)}}async componentDidMount(){this.fetchData()}render(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"menu",children:Object(i.jsx)("h2",{children:"DE-MINE A BRIDGE"})}),Object(i.jsxs)("div",{className:"menu",children:[Object(i.jsx)("button",{className:"new-game",onClick:()=>this.handleNewGameClick(),children:"New Game"}),Object(i.jsx)("button",{className:"",onClick:()=>this.handleClearClick(),children:"Clear"}),Object(i.jsx)("button",{className:"",onClick:()=>this.handleDemineClick(),children:"De-mine"})]}),Object(i.jsx)("div",{className:"menu",children:Object(i.jsxs)("p",{style:{color:"DarkGreen"},children:[" ","SAPPER, YOU HAVE ",10-this.state.attempts," ATTEMPTS LEFT"]})}),Object(i.jsx)("div",{className:"guessed-circles",children:this.state.history.map(((e,t)=>Object(i.jsxs)("p",{children:[e.userInput.map(((e,t)=>Object(i.jsx)("span",{children:this.state.colorMap[e]},t))),Object(i.jsx)("span",{className:"scores",style:{color:"red"},children:e.valueMatch}),Object(i.jsx)("span",{className:"scores",style:{color:"blue"},children:e.indexMatch})]},t)))}),Object(i.jsx)("div",{className:"guessed-circles",children:this.state.guessInputs.userInput.map(((e,t)=>Object(i.jsx)("span",{children:this.state.colorMap[e]},t)))}),Object(i.jsx)(u,{handleColorClick:this.handleColorClick})]})}}var x=g;var y=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((t=>{let{getCLS:s,getFID:n,getFCP:a,getLCP:c,getTTFB:o}=t;s(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(x,{}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.cd30a239.chunk.js.map