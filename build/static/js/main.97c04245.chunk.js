(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{177:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),c=t(16),n=t.n(c),s=(t(73),t(9)),o=(t(74),t(75),t(13)),i=t.n(o),u=t(17),m=t(199),b=t(178),d=t(201),g=Object(m.a)((function(e){return{root:{maxWidth:1e3,margin:"0 auto",marginTop:50},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,backgroundColor:"#E0FBFE"},title:{color:"#3f51b5",textTransform:"capitalize"},data:{color:"black"}}}));function p(){var e=Object(r.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thevirustracker.com/free-api?global=stats");case 2:return a=e.sent,e.next=5,a.json();case 5:delete(t=e.sent).results[0].source,c(t.results[0]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var n=g();return l.a.createElement("div",{className:n.root},l.a.createElement("h1",null,"Corona Global Stats"),l.a.createElement(d.a,{container:!0,spacing:3},Object.keys(t).map((function(e,a){return l.a.createElement(d.a,{item:!0,xs:12,sm:4,key:a},l.a.createElement(b.a,{className:n.paper,elevation:3},l.a.createElement("h3",{className:n.title},e.replace(/_/g," ")),l.a.createElement("h3",{className:n.data},t[e])))}))))}var E=Object(m.a)((function(e){return{root:{maxWidth:1e3,margin:"0 auto",marginTop:50},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:10,width:200},title:{color:"#3f51b5",textTransform:"capitalize"},data:{color:"#429DCE",margin:10},subHead:{color:"lightblue"}}}));function h(){var e=Object(r.useState)([{}]),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(Object.values(Object.values(t.countryitems)[0])),console.log(Object.values(Object.values(t.countryitems)[0]));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var n=E();return l.a.createElement("div",{className:n.root},l.a.createElement("h1",null,"Corona Countries Stats"),l.a.createElement(d.a,{container:!0,spacing:3},t.map((function(e,a){return l.a.createElement(b.a,{className:n.paper,elevation:3},l.a.createElement("h2",{className:n.title},t[a].title),l.a.createElement("h4",{className:n.data},"Total Cases = ",t[a].total_cases),l.a.createElement("h4",{className:n.data},"Total Active Cases =",t[a].total_active_cases),l.a.createElement("h4",{className:n.data},"Total Deaths =",t[a].total_deaths))}))))}var v=t(10),f=Object(m.a)((function(e){return{root:{maxWidth:1e3,margin:"0 auto",marginTop:50},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:"10"},indicator1:{height:15,width:100,backgroundColor:"rgba(6, 115, 62,1)",display:"flex"},indicator2:{height:15,width:100,backgroundColor:"rgba(21, 120, 232)",display:"flex"},indicator3:{height:15,width:100,backgroundColor:"rgba(187, 0, 0)",display:"flex"}}}));function C(){var e=Object(r.useState)([{}]),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(Object.values(Object.values(t.countryitems)[0])),console.log(Object.values(Object.values(t.countryitems)[0]));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var n=[],o=[],m=[],g=[];t.forEach((function(e,a){null!=t[a].title&&(n.push(t[a].title),o.push(t[a].total_cases),m.push(t[a].total_active_cases),g.push(t[a].total_deaths))}));var p={labels:n.slice(0,21),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(0,21)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(0,21)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(0,21)}]},E={labels:n.slice(21,41),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(21,41)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(21,41)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(21,41)}]},h={labels:n.slice(41,61),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(41,61)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(41,61)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(41,61)}]},C={labels:n.slice(61,81),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(61,81)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(61,81)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(61,81)}]},k={labels:n.slice(81,101),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(81,101)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(81,101)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(81,101)}]},x={labels:n.slice(101,121),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(101,121)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(101,121)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(101,121)}]},T={labels:n.slice(121,141),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(121,141)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(121,141)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(121,141)}]},j={labels:n.slice(141,161),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(141,161)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(141,161)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(141,161)}]},N={labels:n.slice(161,184),datasets:[{label:"Total Cases",backgroundColor:"rgba(6, 115, 62)",data:o.slice(161,184)},{label:"Active Cases",backgroundColor:"rgba(21, 120, 232)",data:m.slice(161,184)},{label:"Total Deaths",backgroundColor:"rgba(187, 0, 0)",data:g.slice(161,184)}]},O=f();return l.a.createElement("div",{className:O.root},l.a.createElement("h2",null,"Corona Cases Country-viz"),l.a.createElement(d.a,{container:!0,spacing:2},l.a.createElement(d.a,{item:!0,xs:4},l.a.createElement("div",{className:O.indicator1}),l.a.createElement("h6",null,"Total Cases")),l.a.createElement(d.a,{item:!0,xs:4},l.a.createElement("div",{className:O.indicator2}),l.a.createElement("h6",null,"Total Active Cases")),l.a.createElement(d.a,{item:!0,xs:4},l.a.createElement("div",{className:O.indicator3}),l.a.createElement("h6",null,"Total Deaths"))),l.a.createElement(d.a,{container:!0,spacing:2},l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:p}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:E}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:h}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:C}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:k}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:x}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:T}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:j}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(b.a,{className:O.paper},l.a.createElement(v.Pie,{data:N})))))}var k=function(){return l.a.createElement(C,null)};function x(e){var a=e.currentScreen;return 0===a?l.a.createElement(p,null):1===a?l.a.createElement(h,null):2===a?l.a.createElement(k,null):l.a.createElement(p,null)}var T=t(203),j=t(204),N=t(206),O=t(207),y=t(205),w=t(202),A=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{}}}));function D(e){return l.a.createElement(w.a,e,l.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}function P(e){var a=e.screenType,t=A();return l.a.createElement("div",{className:t.root},l.a.createElement(T.a,{position:"static",color:"primary"},l.a.createElement(j.a,null,l.a.createElement(y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){a(0),console.log(a)}},l.a.createElement(D,null)),l.a.createElement(N.a,{variant:"h6",className:t.title},"PIAIC Covid-19 Tracker"),l.a.createElement(O.a,{color:"inherit",className:t.button,onClick:function(){a(1),console.log(a)}},"Countries List"),l.a.createElement(O.a,{color:"inherit",className:t.button,onClick:function(){a(2),console.log(a)}},"Visualization"))))}var S=function(){var e=Object(r.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(P,{screenType:c}),l.a.createElement(x,{currentScreen:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a,t){e.exports=t(177)},73:function(e,a,t){},74:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},75:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.97c04245.chunk.js.map