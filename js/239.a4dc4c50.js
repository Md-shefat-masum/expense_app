"use strict";(globalThis["webpackChunkexpense_app"]=globalThis["webpackChunkexpense_app"]||[]).push([[239],{2239:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(9835);const n={class:"q-pa-md"},i=(0,a._)("div",{class:"text-center"},[(0,a._)("canvas",{id:"acquisitions",style:{"max-width":"550px","max-height":"550px",margin:"auto"}})],-1),p=[i];function r(e,t,s,i,r,c){return(0,a.wg)(),(0,a.iD)("div",n,p)}var c=s(4305),o=s(7524);const d=(0,a.aZ)({data:()=>({expense:{budget:0,expenses:[],targets:[]}}),created:async function(){await this.get_expense();let e=this;setTimeout((()=>{e.bar_chart()}),300)},methods:{get_expense:async function(){let e=await o.Z.get("https://qbank.techparkit.org/api/expense");this.expense=e.data},set_expense:async function(){await o.Z.post("https://qbank.techparkit.org/api/expense",{data:this.expense})},bar_chart:async function(){let e=this.expense.targets.reduce(((e,t)=>e+ +t.amount),0),t=this.expense.expenses.reduce(((e,t)=>e+ +t.amount),0);const s={labels:["Expense: "+t,"Expense Target: "+e,"Rest: "+(+this.expense.budget-t-e)],datasets:[{label:"",data:[t,e,this.expense.budget-t-e],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]};new c.ZP(document.getElementById("acquisitions"),{type:"doughnut",data:s,borderDash:s})}}});var h=s(1639);const u=(0,h.Z)(d,[["render",r]]),x=u}}]);