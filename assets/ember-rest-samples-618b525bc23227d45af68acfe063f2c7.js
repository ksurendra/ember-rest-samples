"use strict"
define("ember-rest-samples/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/adapters/applications",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){var e,t,r
super(...arguments),r="https://reqres.in/api",(t="host")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}}e.default=r})),define("ember-rest-samples/app",["exports","@ember/application","ember-resolver","ember-load-initializers","ember-rest-samples/config/environment"],(function(e,t,r,a,n){function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),i(this,"modulePrefix",n.default.modulePrefix),i(this,"podModulePrefix",n.default.podModulePrefix),i(this,"Resolver",r.default)}}e.default=l,(0,a.default)(l,n.default.modulePrefix)})),define("ember-rest-samples/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/components/user-list",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object"],(function(e,t,r,a,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const i=(0,r.createTemplateFactory)({id:"5fUQrks+",block:'[[[10,"h2"],[12],[1,[30,1]],[13],[1,"\\n\\n"],[10,"table"],[12],[1,"\\n  "],[10,"tr"],[12],[1,"\\n    "],[10,"th"],[12],[1,"ID"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Frist Name"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Last Name"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Email"],[13],[1,"\\n  "],[13],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,2]],null]],null],null,[[[1,"    "],[10,"tr"],[12],[1,"\\n      "],[10,"td"],[12],[1,[30,3,["id"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["first_name"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["last_name"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["email"]]],[13],[1,"\\n    "],[13],[1,"\\n"]],[3]],null],[13],[1,"\\n\\n"],[3," TODO : After response is mapped to model "],[1,"\\n"],[3,"\\n{{#each @users as |user|}}\\n  <tr>\\n    <td>{{user.id}}</td>\\n    <td>{{user.firstName}}</td>\\n    <td>{{user.lastName}}</td>\\n    <td>{{user.email}}</td>\\n  </tr>\\n{{/each}}"]],["@title","@users","user"],false,["each","-track-array"]]',moduleName:"ember-rest-samples/components/user-list.hbs",isStrictMode:!1})
class l extends a.default{}e.default=l,(0,t.setComponentTemplate)(i,l)})),define("ember-rest-samples/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/helpers/app-version",["exports","@ember/component/helper","ember-rest-samples/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,a){function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=r.default.APP.version
let i=t.versionOnly||t.hideSha,l=t.shaOnly||t.hideVersion,s=null
return i&&(t.showExtended&&(s=n.match(a.versionExtendedRegExp)),s||(s=n.match(a.versionRegExp))),l&&(s=n.match(a.shaRegExp)),s?s[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var i=(0,t.helper)(n)
e.default=i})),define("ember-rest-samples/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-rest-samples/config/environment"],(function(e,t,r){let a,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(a=r.default.APP.name,n=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(a,n)}
e.default=i})),define("ember-rest-samples/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("ember-rest-samples/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:r.default}
e.default=a})),define("ember-rest-samples/initializers/export-application-global",["exports","ember","ember-rest-samples/config/environment"],(function(e,t,r){function a(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,i=r.default.exportApplicationGlobal
n="string"==typeof i?i:t.default.String.classify(r.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=a
var n={name:"export-application-global",initialize:a}
e.default=n})),define("ember-rest-samples/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("ember-rest-samples/models/user",["exports","@ember-data/model"],(function(e,t){var r,a,n,i,l,s,o,u,d,f,p
function m(e,t,r,a){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function c(e,t,r,a,n){var i={}
return Object.keys(a).forEach((function(e){i[e]=a[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,a){return a(e,t,r)||r}),i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let b=(r=(0,t.attr)("string"),a=(0,t.attr)("string"),n=(0,t.attr)("string"),i=(0,t.attr)("string"),l=(0,t.attr)("string"),s=class extends t.default{constructor(){super(...arguments),m(this,"id",o,this),m(this,"firstname",u,this),m(this,"lastname",d,this),m(this,"email",f,this),m(this,"avatar",p,this)}get fullName(){return`${this.firstname} ${this.lastname}`}},o=c(s.prototype,"id",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=c(s.prototype,"firstname",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=c(s.prototype,"lastname",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=c(s.prototype,"email",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=c(s.prototype,"avatar",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
e.default=b})),define("ember-rest-samples/router",["exports","@ember/routing/router","ember-rest-samples/config/environment"],(function(e,t,r){function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{constructor(){super(...arguments),a(this,"location",r.default.locationType),a(this,"rootURL",r.default.rootURL)}}e.default=n,n.map((function(){this.route("users")}))})),define("ember-rest-samples/routes/users",["exports","@ember/routing/route","fetch"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{async model(){let e=await(0,r.default)("https://reqres.in/api/users")
return(await e.json()).data}}e.default=a})),define("ember-rest-samples/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/application",["exports","@ember-data/serializer/json-api","@ember/string"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{}e.default=a})),define("ember-rest-samples/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"mvhGouKP",block:'[[[1,[28,[35,0],["EmberRestApi"],null]],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"ember-rest-samples/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"GCSsDAIU",block:'[[[10,"h1"],[12],[1,"EmberJS Example using Rest API"],[13],[1,"\\n\\nList of API Calls:\\n"],[10,"ol"],[12],[1,"\\n    "],[10,"li"],[12],[8,[39,0],null,[["@route"],["users"]],[["default"],[[[[1,"List of Users"]],[]]]]],[13],[1,"\\n"],[13]],[],false,["link-to"]]',moduleName:"ember-rest-samples/templates/index.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/templates/users",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"xHwGcSHi",block:'[[[1,[54,[[30,1]]]],[1,"\\n\\n"],[8,[39,1],null,[["@title","@users"],["List of Users",[30,1]]],null],[1,"\\n\\n"],[10,2],[12],[1,"\\n---Back to "],[8,[39,2],null,[["@route"],["index"]],[["default"],[[[[1,"Home"]],[]]]]],[1,"\\n"],[13],[1,"\\n"]],["@model"],false,["log","user-list","link-to"]]',moduleName:"ember-rest-samples/templates/users.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})}))
define("ember-rest-samples/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-rest-samples/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-rest-samples/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-rest-samples/config/environment",[],(function(){try{var e="ember-rest-samples/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-rest-samples/app").default.create({name:"ember-rest-samples",version:"0.0.0+8c4a6274"})