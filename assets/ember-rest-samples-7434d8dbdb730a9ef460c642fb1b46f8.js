"use strict"
define("ember-rest-samples/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/adapters/application",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){var e,t,r
super(...arguments),r="https://reqres.in/api",(t="host")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}}e.default=r})),define("ember-rest-samples/app",["exports","@ember/application","ember-resolver","ember-load-initializers","ember-rest-samples/config/environment"],(function(e,t,r,i,a){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),n(this,"modulePrefix",a.default.modulePrefix),n(this,"podModulePrefix",a.default.podModulePrefix),n(this,"Resolver",r.default)}}e.default=l,(0,i.default)(l,a.default.modulePrefix)})),define("ember-rest-samples/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/components/user-list",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object"],(function(e,t,r,i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=(0,r.createTemplateFactory)({id:"5fUQrks+",block:'[[[10,"h2"],[12],[1,[30,1]],[13],[1,"\\n\\n"],[10,"table"],[12],[1,"\\n  "],[10,"tr"],[12],[1,"\\n    "],[10,"th"],[12],[1,"ID"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Frist Name"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Last Name"],[13],[1,"\\n    "],[10,"th"],[12],[1,"Email"],[13],[1,"\\n  "],[13],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,2]],null]],null],null,[[[1,"    "],[10,"tr"],[12],[1,"\\n      "],[10,"td"],[12],[1,[30,3,["id"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["first_name"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["last_name"]]],[13],[1,"\\n       "],[10,"td"],[12],[1,[30,3,["email"]]],[13],[1,"\\n    "],[13],[1,"\\n"]],[3]],null],[13],[1,"\\n\\n"],[3," TODO : After response is mapped to model "],[1,"\\n"],[3,"\\n{{#each @users as |user|}}\\n  <tr>\\n    <td>{{user.id}}</td>\\n    <td>{{user.firstName}}</td>\\n    <td>{{user.lastName}}</td>\\n    <td>{{user.email}}</td>\\n  </tr>\\n{{/each}}"]],["@title","@users","user"],false,["each","-track-array"]]',moduleName:"ember-rest-samples/components/user-list.hbs",isStrictMode:!1})
class l extends i.default{}e.default=l,(0,t.setComponentTemplate)(n,l)})),define("ember-rest-samples/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/helpers/app-version",["exports","@ember/component/helper","ember-rest-samples/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,i){function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=r.default.APP.version
let n=t.versionOnly||t.hideSha,l=t.shaOnly||t.hideVersion,s=null
return n&&(t.showExtended&&(s=a.match(i.versionExtendedRegExp)),s||(s=a.match(i.versionRegExp))),l&&(s=a.match(i.shaRegExp)),s?s[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var n=(0,t.helper)(a)
e.default=n})),define("ember-rest-samples/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-rest-samples/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-rest-samples/config/environment"],(function(e,t,r){let i,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(i=r.default.APP.name,a=r.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(i,a)}
e.default=n})),define("ember-rest-samples/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("ember-rest-samples/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:r.default}
e.default=i})),define("ember-rest-samples/initializers/export-application-global",["exports","ember","ember-rest-samples/config/environment"],(function(e,t,r){function i(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var a,n=r.default.exportApplicationGlobal
a="string"==typeof n?n:t.default.String.classify(r.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=i
var a={name:"export-application-global",initialize:i}
e.default=a})),define("ember-rest-samples/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("ember-rest-samples/models/user",["exports","@ember-data/model"],(function(e,t){var r,i,a,n,l,s,o,u,d
function f(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function p(e,t,r,i,a){var n={}
return Object.keys(i).forEach((function(e){n[e]=i[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),n),a&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(a):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let m=(r=(0,t.attr)("string"),i=(0,t.attr)("string"),a=(0,t.attr)("string"),n=(0,t.attr)("string"),l=class extends t.default{constructor(){super(...arguments),f(this,"first_name",s,this),f(this,"last_name",o,this),f(this,"email",u,this),f(this,"avatar",d,this)}get fullName(){return`${this.firstname} ${this.lastname}`}},s=p(l.prototype,"first_name",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=p(l.prototype,"last_name",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=p(l.prototype,"email",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=p(l.prototype,"avatar",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=m})),define("ember-rest-samples/router",["exports","@ember/routing/router","ember-rest-samples/config/environment"],(function(e,t,r){function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(){super(...arguments),i(this,"location",r.default.locationType),i(this,"rootURL",r.default.rootURL)}}e.default=a,a.map((function(){this.route("users")}))})),define("ember-rest-samples/routes/users",["exports","@ember/routing/route","@ember/service"],(function(e,t,r){var i,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let n=(i=class extends t.default{constructor(){var e,t,r,i
super(...arguments),e=this,t="store",i=this,(r=a)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}model(){return this.store.findAll("user")}},l=i.prototype,s="store",o=[r.service],u={configurable:!0,enumerable:!0,writable:!0,initializer:null},f={},Object.keys(u).forEach((function(e){f[e]=u[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=o.slice().reverse().reduce((function(e,t){return t(l,s,e)||e}),f),d&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(d):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(l,s,f),f=null),a=f,i)
var l,s,o,u,d,f
e.default=n})),define("ember-rest-samples/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/serializers/application",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{keyForAttribute(e){return e}normalizeResponse(e,t,r,i,a){return r=r.data,super.normalizeResponse(e,t,r,i,a)}}e.default=r})),define("ember-rest-samples/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-rest-samples/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"mvhGouKP",block:'[[[1,[28,[35,0],["EmberRestApi"],null]],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"ember-rest-samples/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"GCSsDAIU",block:'[[[10,"h1"],[12],[1,"EmberJS Example using Rest API"],[13],[1,"\\n\\nList of API Calls:\\n"],[10,"ol"],[12],[1,"\\n    "],[10,"li"],[12],[8,[39,0],null,[["@route"],["users"]],[["default"],[[[[1,"List of Users"]],[]]]]],[13],[1,"\\n"],[13]],[],false,["link-to"]]',moduleName:"ember-rest-samples/templates/index.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/templates/users",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"xHwGcSHi",block:'[[[1,[54,[[30,1]]]],[1,"\\n\\n"],[8,[39,1],null,[["@title","@users"],["List of Users",[30,1]]],null],[1,"\\n\\n"],[10,2],[12],[1,"\\n---Back to "],[8,[39,2],null,[["@route"],["index"]],[["default"],[[[[1,"Home"]],[]]]]],[1,"\\n"],[13],[1,"\\n"]],["@model"],false,["log","user-list","link-to"]]',moduleName:"ember-rest-samples/templates/users.hbs",isStrictMode:!1})
e.default=r})),define("ember-rest-samples/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})}))
define("ember-rest-samples/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-rest-samples/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-rest-samples/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-rest-samples/config/environment",[],(function(){try{var e="ember-rest-samples/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-rest-samples/app").default.create({name:"ember-rest-samples",version:"0.0.0+126bef7d"})
