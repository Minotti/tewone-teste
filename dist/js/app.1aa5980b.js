(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"42a7":function(t,e,a){"use strict";var s=a("e932"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"App",mounted:function(){this.$store.state.token=localStorage.getItem("token")||""}},n=i,l=a("2877"),c=Object(l["a"])(n,o,r,!1,null,null,null),d=c.exports,u=(a("caad6"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-10 offset-1"},[a("header",{staticClass:"mb-2 pt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-8"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.condicao,expression:"condicao"}],staticClass:"form-control",attrs:{type:"text",placeholder:"CRM ou Nome","aria-label":"Buscar Médico"},domProps:{value:t.condicao},on:{input:function(e){e.target.composing||(t.condicao=e.target.value)}}}),t._m(0)])])]),a("div",{staticClass:"col col-4"},[a("p",{staticClass:"mt-2 float-right"},[t._v("Bem vindo! "),a("router-link",{staticClass:"text-muted",attrs:{to:""},nativeOn:{click:function(e){return t.logout(e)}}},[a("i",{staticClass:"fa fa-fw fa-sign-out"}),t._v(" Sair")])],1)])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-10 offset-1"},[a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-md-8"},[a("router-link",{staticClass:"btn btn-primary float-right",attrs:{to:{name:"medicos_novo"}}},[a("i",{staticClass:"fa fa-fw fa-plus"}),t._v(" Novo")])],1)]),a("hr"),a("div",{staticClass:"row"},[a("BlockUI",{directives:[{name:"show",rawName:"v-show",value:t.blockUI,expression:"blockUI"}]},[a("i",{staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"}),a("p",{staticClass:"mt-3"},[t._v("Aguarde...")])]),t._l(t.dados,(function(t){return a("card-medico",{key:t.id,attrs:{dadosMedico:t}})})),a("div",{staticClass:"col col-6 offset-3"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.next_page_url,expression:"next_page_url"}],staticClass:"btn btn-lg btn-primary btn-block mt-5",attrs:{type:"button"},on:{click:t.nextPage}},[t._v("Veja "),a("i",{staticClass:"fa fa-fw fa-plus"})])])],2)])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-fw fa-search"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("h4",[t._v("Lista de Médicos")])])}],f=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-md-4"},[a("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"medicos_editar",params:{id:this.id}},title:"Clique para editar"}},[a("div",{staticClass:"card-medico"},[a("p",{staticClass:"m-0 text-truncate"},[t._v(t._s(this.name))]),a("small",{staticClass:"text-muted crm mt-n5"},[t._v(t._s(this.phone)+" - "),a("strong",[t._v(t._s(this.crm))])]),a("div",t._l(t.specialities,(function(e){return a("span",{key:e.id,class:t.randomClasses()},[t._v(t._s(e.name))])})),0)])])],1)}),h=[],v=(a("b0c0"),a("a9e3"),{name:"CardMedico",props:{dadosMedico:Object},data:function(){return{badges:["badge-primary","badge-secondary","badge-success","badge-danger","badge-warning","badge-info","badge-light","badge-dark"],id:Number,specialities:Object,name:String,crm:String,phone:String}},methods:{randomClasses:function(){var t=this.badges[Math.floor(Math.random()*this.badges.length)];return"badge mr-1 ".concat(t)}},mounted:function(){this.id=this.dadosMedico.id,this.name=this.dadosMedico.name,this.crm=this.dadosMedico.crm,this.phone=this.dadosMedico.phone,this.specialities=this.dadosMedico.specialities}}),b=v,g=(a("42a7"),Object(l["a"])(b,f,h,!1,null,"479be275",null)),C=g.exports,_={name:"home",data:function(){return{nome:String,dados:Array,condicao:"",next_page_url:null,blockUI:!1}},mounted:function(){var t=this;this.nome=this.$store.state.nome,this.$http.get("api/doctors",{headers:{"Content-Type":"application/json"}}).then((function(e){t.dados=e.data.data,t.next_page_url=e.data.next_page_url})).catch((function(e){"Unauthenticated."===e.response.data.message&&t.$store.dispatch("UNAUTHENTICATED_USER").then((function(){t.$router.push("/login")}))}))},methods:{logout:function(){var t=this;this.$store.dispatch("LOGOUT_USER",{}).then((function(){t.$router.push("/login")}))},search:function(){var t=this;this.blockUI=!0,this.$http.get("http://0.0.0.0:8000/api/doctors?search=name:".concat(this.condicao,";crm:").concat(this.condicao)).then((function(e){t.dados=e.data.data,t.next_page_url=e.data.next_page_url,t.blockUI=!1}))},nextPage:function(){var t=this;this.blockUI=!0,this.$http.get("".concat(this.next_page_url)).then((function(e){for(var a in e.data.data)t.dados.push(e.data.data[a]),t.next_page_url=e.data.next_page_url;t.blockUI=!1}))}},components:{CardMedico:C}},w=_,k=(a("cccb"),Object(l["a"])(w,p,m,!1,null,null,null)),x=k.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 offset-4"},[a("div",{staticClass:"box-login"},[t._m(0),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h5",{staticClass:"mb-4 text-center"},[t._v("Por favor, faça login")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertError,expression:"alertError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{domProps:{innerHTML:t._s(t.messageAlert)}}),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeAlert(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",required:"",placeholder:"Senha"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Login")])])])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mb-5"},[s("img",{attrs:{src:a("bb84"),width:"180",alt:"Logo TewOne"}})])}],S={name:"Login",data:function(){return{email:"",password:"",alertError:!1,messageAlert:""}},mounted:function(){""!==this.$store.state.token&&this.$router.push("/")},methods:{login:function(){var t=this,e={email:this.email,password:this.password};this.$store.dispatch("LOGIN_USER",e).then((function(){t.$router.push("/")})).catch((function(e){"Unauthorized"===e.response.data.message&&(t.alertError=!0,t.messageAlert="Usuário ou senha estão incorretos!")}))},closeAlert:function(){this.alertError=!1,this.alertSuccess=!1}}},$=S,E=(a("d6db"),Object(l["a"])($,y,O,!1,null,null,null)),U=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-2"},[a("BlockUI",{directives:[{name:"show",rawName:"v-show",value:t.blockUI,expression:"blockUI"}]},[a("i",{staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"}),a("p",{staticClass:"mt-3"},[t._v("Aguarde...")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 offset-2"},[a("router-link",{staticClass:"btn btn-info mb-4",attrs:{to:"/"}},[t._v("Home")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertSuccess,expression:"alertSuccess"}],staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{domProps:{innerHTML:t._s(t.messageAlert)}}),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeAlert(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertError,expression:"alertError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{domProps:{innerHTML:t._s(t.messageAlert)}}),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeAlert(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.cadastrar(e)}}},[a("h5",{staticClass:"mb-4"},[t._v("Cadastrar novo Médico")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t.erros.nome?a("span",{staticClass:"help-block text-danger"},[t._v("O Nome é obrigatório")]):t._e()])]),a("div",{staticClass:"col col-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("CRM")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.crm,expression:"data.crm"}],staticClass:"form-control",attrs:{type:"text",masked:"true",required:""},domProps:{value:t.data.crm},on:{input:function(e){e.target.composing||t.$set(t.data,"crm",e.target.value)}}}),t.erros.crm?a("span",{staticClass:"help-block text-danger"},[t._v("O CRM é obrigatório")]):t._e()])]),a("div",{staticClass:"col col-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Telefone")]),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"},{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}}),t.erros.telefone?a("span",{staticClass:"help-block text-danger"},[t._v("O Telefone é obrigatório")]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Especialidades")]),a("Select2",{attrs:{required:"",settings:{multiple:!0},options:t.form_especialidades},model:{value:t.data.specialities,callback:function(e){t.$set(t.data,"specialities",e)},expression:"data.specialities"}}),t.erros.especialidade?a("span",{staticClass:"help-block text-danger"},[t._v("Selecione no mínimo 2 (duas) especialidades!")]):t._e()],1)])]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Cadastrar")])])],1)])],1)},A=[],I=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),M=a("3f5b"),P=a("3a60");function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(a,!0).forEach((function(e){Object(I["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"CadMed",data:function(){return{erros:{has:!1,especialidade:!1,crm:!1,nome:!1,telefone:!1},form_especialidades:this.getEspecialidades(),blockUI:!1,alertSuccess:!1,messageAlert:null,alertError:!1,data:{name:null,crm:null,telefone:null,specialities:null},default:{name:null,crm:null,telefone:null,specialities:null}}},methods:{cadastrar:function(){var t=this;this.validarForm(),this.erros.has||(this.blockUI=!0,this.$http.post("api/doctors/create",this.data,{headers:{"Content-Type":"application/json"}}).then((function(e){t.alertSuccess=!0,t.messageAlert="Médico cadastrado com <strong>sucesso!</strong>",t.blockUI=!1,t.data=T({},t.default)})).catch((function(e){var a=e.response.data.errors,s="<ul> Observe os erros abaixo:";for(var o in a)for(var r in a[o])s+="<li>".concat(a[o][r],"</li>");s+="</ul>",t.alertError=!0,t.messageAlert=s,t.blockUI=!1})))},validarForm:function(){this.erros.crm=!this.data.crm,this.erros.telefone=!this.data.phone,this.erros.especialidade=!this.data.specialities||this.data.specialities.length<2,this.erros.nome=!this.data.name,this.erros.has=this.erros.crm||this.erros.especialidade||this.erros.nome||this.erros.telefone,this.closeAlert()},getEspecialidades:function(){var t=this;this.$http.get("api/specialities",{headers:{"Content-Type":"application/json"}}).then((function(e){t.form_especialidades=e.data}))},closeAlert:function(){this.alertError=!1,this.alertSuccess=!1}},components:{Select2:M["a"]},directives:{mask:P["mask"]}},L=D,R=Object(l["a"])(L,j,A,!1,null,null,null),q=R.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-2"},[a("BlockUI",{directives:[{name:"show",rawName:"v-show",value:t.blockUI,expression:"blockUI"}]},[a("i",{staticClass:"fa fa-spinner fa-pulse fa-3x fa-fw"}),a("p",{staticClass:"mt-3"},[t._v("Aguarde...")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 offset-2"},[a("router-link",{staticClass:"btn btn-info mb-4",attrs:{to:"/"}},[t._v("Home")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertSuccess,expression:"alertSuccess"}],staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{domProps:{innerHTML:t._s(t.messageAlert)}}),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeAlert(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertError,expression:"alertError"}],staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("span",{domProps:{innerHTML:t._s(t.messageAlert)}}),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.closeAlert(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.editar(e)}}},[a("div",{staticClass:"mb-3"},[a("h5",{staticClass:"mb-4 d-inline"},[t._v("Editar Médico")]),a("router-link",{staticClass:"text-muted d-inline float-right",attrs:{to:""},nativeOn:{click:function(e){return t.deletar(e)}}},[a("i",{staticClass:"fa fa-fw fa-trash"}),t._v(" Excluir")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),t.erros.nome?a("span",{staticClass:"help-block text-danger"},[t._v("O Nome é obrigatório")]):t._e()])]),a("div",{staticClass:"col col-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("CRM")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.crm,expression:"data.crm"}],staticClass:"form-control",attrs:{type:"text",masked:"true",required:""},domProps:{value:t.data.crm},on:{input:function(e){e.target.composing||t.$set(t.data,"crm",e.target.value)}}}),t.erros.crm?a("span",{staticClass:"help-block text-danger"},[t._v("O CRM é obrigatório")]):t._e()])]),a("div",{staticClass:"col col-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Telefone")]),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"},{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}}),t.erros.telefone?a("span",{staticClass:"help-block text-danger"},[t._v("O Telefone é obrigatório")]):t._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("Especialidades")]),a("Select2",{attrs:{required:"",settings:{multiple:!0},options:t.form_especialidades},model:{value:t.data.specialities,callback:function(e){t.$set(t.data,"specialities",e)},expression:"data.specialities"}}),t.erros.especialidade?a("span",{staticClass:"help-block text-danger"},[t._v("Selecione no mínimo 2 (duas) especialidades!")]):t._e()],1)])]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Salvar")])])],1)])],1)},B=[],z=(a("d81d"),{name:"CadMed",data:function(){return{id:this.$route.params.id,erros:{has:!1,especialidade:!1,crm:!1,nome:!1,telefone:!1},form_especialidades:null,blockUI:!1,alertSuccess:!1,messageAlert:null,alertError:!1,data:{name:null,crm:null,phone:null,specialities:null}}},methods:{editar:function(){var t=this;this.validarForm(),this.erros.has||(this.blockUI=!0,this.$http.put("api/doctors/update/".concat(this.id),this.data,{headers:{"Content-Type":"application/json"}}).then((function(e){t.alertSuccess=!0,t.messageAlert="Médico editado com <strong>sucesso!</strong>",t.blockUI=!1})).catch((function(e){var a=e.response.data.errors,s="<ul> Observe os erros abaixo:";for(var o in a)for(var r in a[o])s+="<li>".concat(a[o][r],"</li>");s+="</ul>",t.alertError=!0,t.messageAlert=s,t.blockUI=!1})))},deletar:function(){var t=this;this.$confirm("Deseja realmente excluir o Médico ".concat(this.data.name,"?"),"Confirme a operação","question").then((function(e){t.blockUI=!0,t.$http.delete("/api/doctors/delete/".concat(t.id),{headers:{"Content-Type":"application/json"}}).then((function(e){t.blockUI=!1,t.$router.push("/")}))}))},validarForm:function(){this.erros.crm=!this.data.crm,this.erros.telefone=!this.data.phone,this.erros.especialidade=!this.data.specialities||this.data.specialities.length<2,this.erros.nome=!this.data.name,this.erros.has=this.erros.crm||this.erros.especialidade||this.erros.nome||this.erros.telefone,this.closeAlert()},closeAlert:function(){this.alertError=!1,this.alertSuccess=!1}},components:{Select2:M["a"]},directives:{mask:P["mask"]},mounted:function(){var t=this;this.$http.get("api/specialities",{headers:{"Content-Type":"application/json"}}).then((function(e){t.form_especialidades=e.data})),this.$http.get("api/doctors/find/".concat(this.id),{headers:{"Content-Type":"application/json"}}).then((function(e){t.data.name=e.data[0].name,t.data.crm=e.data[0].crm,t.data.phone=e.data[0].phone,t.data.specialities=[],e.data[0].specialities.map((function(e,a){t.data.specialities.push(e.id)}))}))}}),F=z,G=Object(l["a"])(F,H,B,!1,null,null,null),J=G.exports;s["a"].use(u["a"]);var V=[{path:"/",name:"home",component:x},{path:"/login",name:"login",component:U},{path:"/logout",name:"logout"},{path:"/medicos/editar/:id",name:"medicos_editar",component:J,props:!0},{path:"/medicos/novo/",name:"medicos_novo",component:q}],K=new u["a"]({routes:V});K.beforeEach((function(t,e,a){var s=["/login","/register","/logout"],o=!s.includes(t.path),r=localStorage.getItem("token");if(o&&!r)return a("/login");a()}));var Q=K,W=(a("d3b7"),a("2f62")),X=a("bc3a"),Y=a.n(X);s["a"].use(W["a"]);var Z=new W["a"].Store({state:{token:""},mutations:{auth_success:function(t,e){t.token=e},auth_error:function(t){t.token=""},logout:function(t){t.token=""},unauthenticated:function(t){t.token=""}},actions:{LOGIN_USER:function(t,e){return new Promise((function(a,o){Y.a.post("api/login",e,{headers:{"Content-Type":"application/json"}}).then((function(e){var o=e.data.access_token;localStorage.setItem("token",o),s["a"].prototype.$http.defaults.headers.common["Authorization"]="Bearer ".concat(o),t.commit("auth_success",o),a(e)})).catch((function(e){localStorage.removeItem("token"),t.commit("auth_error"),o(e)}))}))},LOGOUT_USER:function(t){return new Promise((function(e,a){Y.a.get("api/logout",{headers:{"Content-Type":"application/json"}}).then((function(a){t.commit("logout"),localStorage.removeItem("token"),delete s["a"].prototype.$http.defaults.headers.common["Authorization"],e(a)}))}))},UNAUTHENTICATED_USER:function(t){localStorage.removeItem("token"),t.commit("unauthenticated"),delete s["a"].prototype.$http.defaults.headers.common["Authorization"]}}}),tt=a("0213"),et=a("683f"),at=localStorage.getItem("token");s["a"].use(tt["default"]),s["a"].use(et["a"]),Y.a.defaults.baseURL="http://0.0.0.0:8000",s["a"].prototype.$http=Y.a,at&&(s["a"].prototype.$http.defaults.headers.common["Authorization"]="Bearer ".concat(at)),new s["a"]({router:Q,store:Z,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,a){},bb84:function(t,e,a){t.exports=a.p+"img/tewone.d7282bfe.svg"},cccb:function(t,e,a){"use strict";var s=a("5ced"),o=a.n(s);o.a},d6db:function(t,e,a){"use strict";var s=a("e67a"),o=a.n(s);o.a},e67a:function(t,e,a){},e932:function(t,e,a){}});
//# sourceMappingURL=app.1aa5980b.js.map