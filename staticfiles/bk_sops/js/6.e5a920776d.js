(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1031:function(e,t,i){},1032:function(e,t,i){},1217:function(e,t,i){"use strict";i(26),i(38),i(37),i(49),i(22),i(50);var n=i(16),s=i.n(n),a=i(0),r=i.n(a),o=i(5),l=i.n(o),c=(i(23),i(4)),p=i.n(c),d=i(1),m=i(7),h=i(611),u=i(102);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){l()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={name:"ImportTemplateDialog",components:{NoData:h.a},mixins:[u.a],props:["isImportDialogShow","common","authActions","hasCreateCommonTplPerm"],data:function(){return{active:!0,file:null,filename:"",exportList:[],overrideList:[],isChecked:!1,overrideFormDisabled:!0,uploaded:!1,pending:{upload:!1,submit:!1},templateFileEmpty:!1,templateFileError:!1,templateFileErrorExt:!1,dataConflict:!1,commonErrorMsg:""}},computed:v(v(v({},Object(m.e)({site_url:function(e){return r()(this,void 0),e.site_url}.bind(void 0)})),Object(m.e)("project",{project_id:function(e){return r()(this,void 0),e.project_id}.bind(void 0),projectName:function(e){return r()(this,void 0),e.projectName}.bind(void 0)})),{},{exportConflict:function(){return this.overrideList.length?d.a.t("覆盖冲突项, 并提交"):d.a.t("覆盖ID相同的流程")},overrideConflict:function(){return this.overrideList.length?d.a.t("保留两者, 并提交"):d.a.t("创建新流程")},isEmpty:function(){return!this.exportList.length||this.isChecked&&!this.overrideList.length},uploadText:function(){return this.uploaded?d.a.t("重新上传"):d.a.t("点击上传")}}),methods:v(v({},Object(m.b)("templateList/",["templateUploadCheck","templateImport"])),{},{uploadCheck:function(){var e=this;return s()(p.a.mark((function t(){var i,n,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pending.upload=!0,e.dataConflict=!0,e.exportList=[],e.overrideList=[],e.overrideFormDisabled=!0,e.templateFileError=!1,t.prev=6,(i={formData:new FormData,common:e.common||void 0}).formData.append("data_file",e.file),t.next=11,e.templateUploadCheck(i);case 11:(n=t.sent).result?(s=n.data,e.exportList=s.new_template,e.overrideList=s.override_template,e.templateFileError=!1):(e.commonErrorMsg=n.message,e.templateFileError=!0,e.pending.upload=!1,e.dataConflict=!1),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),console.log(t.t0),e.templateFileError=!0;case 19:return t.prev=19,e.pending.upload=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,15,19,22]])})))()},importTemplate:function(e){var t=this;return s()(p.a.mark((function i(){var n,s;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.pending.submit=!0,(n=new FormData).append("data_file",t.file),n.append("override",e),s={formData:n,common:t.common||void 0},i.prev=5,i.next=8,t.templateImport(s);case 8:i.sent.result&&(t.$emit("onImportConfirm"),t.resetData()),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(5),console.log(i.t0);case 15:return i.prev=15,t.pending.submit=!1,i.finish(15);case 18:case"end":return i.stop()}}),i,null,[[5,12,15,18]])})))()},onFileChange:function(e){if(this.resetErrorTips(),!this.pending.upload){var t=e.target.files[0];if(t){var i=t.name;if("dat"!==i.substr(i.lastIndexOf(".")+1))return this.templateFileErrorExt=!0,void(this.file=null);this.file=t,this.uploaded=!0,this.uploadCheck()}}},onConfirm:function(e){if(!this.pending.submit&&!this.pending.upload){if(!this.file)return this.templateFileEmpty=!0,this.templateFileError=!1,void(this.templateFileErrorExt=!1);if(!e)if(!(this.common?this.hasCreateCommonTplPerm:this.hasPermission(["flow_create"],this.authActions))){if(this.common)this.applyForPermission(["common_flow_create"]);else{var t={project:[{id:this.project_id,name:this.projectName}]};this.applyForPermission(["flow_create"],this.authActions,t)}return}this.templateFileErrorExt||this.templateFileEmpty||this.importTemplate(e)}},onShowConflicts:function(){this.isChecked=!this.isChecked},onCancel:function(){this.resetErrorTips(),this.resetData(),this.$emit("onImportCancel")},resetErrorTips:function(){this.templateFileEmpty=!1,this.templateFileErrorExt=!1,this.templateFileError=!1},resetData:function(){this.file=null,this.filename="",this.exportList=[],this.overrideList=[],this.isChecked=!1,this.uploaded=!1,this.overrideFormDisabled=!0,this.templateFileEmpty=!1,this.templateFileError=!1,this.templateFileErrorExt=!1,this.dataConflict=!1,this.$refs.templateFile.value=""}})},g=(i(1242),i(9)),C=Object(g.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("bk-dialog",{staticClass:"import-dialog",attrs:{width:"739","header-position":"left","mask-close":!1,"ext-cls":"common-dialog",title:e.$t("导入流程"),value:e.isImportDialogShow},on:{cancel:e.onCancel}},[i("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.pending.submit,opacity:1,zIndex:100},expression:"{ isLoading: pending.submit, opacity: 1, zIndex: 100 }"}],staticClass:"import-container"},[i("div",{staticClass:"import-wrapper"},[i("div",{staticClass:"common-form-item"},[i("label",{staticClass:"required"},[e._v(e._s(e.$t("上传文件")))]),e._v(" "),i("div",{staticClass:"common-form-content"},[i("label",{class:["bk-button","bk-primary",{"is-disabled":e.pending.upload}],attrs:{for:e.pending.upload?"":"template-file"}},[e._v("\n                        "+e._s(e.uploadText)+"\n                    ")]),e._v(" "),e.file?i("h4",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e(),e._v(" "),i("input",{ref:"templateFile",attrs:{id:"template-file",type:"file",accept:".dat"},on:{change:e.onFileChange}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.templateFileEmpty,expression:"templateFileEmpty"}],staticClass:"common-error-tip error-msg"},[e._v("\n                        "+e._s(e.$t("模板文件上传为空"))+"\n                    ")]),e._v(" "),i("span",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.top",value:e.commonErrorMsg,expression:"commonErrorMsg",modifiers:{top:!0}},{name:"show",rawName:"v-show",value:e.templateFileError,expression:"templateFileError"}],staticClass:"common-error-tip error-msg multi-character-limit"},[e._v("\n                        "+e._s(e.commonErrorMsg)+"\n                    ")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.templateFileErrorExt,expression:"templateFileErrorExt"}],staticClass:"common-error-tip error-msg"},[e._v("\n                        "+e._s(e.$t("该文件后缀不为.dat"))+"\n                    ")])])]),e._v(" "),i("div",{staticClass:"common-form-item"},[i("label",[e._v(e._s(e.$t("导入列表")))]),e._v(" "),i("div",{staticClass:"common-form-content"},[i("div",{staticClass:"template-head"},[i("span",{staticClass:"template-span"},[e._v("ID")]),e._v(" "),i("span",{staticClass:"template-process-name"},[e._v(e._s(e.$t("流程名称")))])]),e._v(" "),i("div",{staticClass:"template-fileList"},[i("table",{staticClass:"template-table"},[i("tbody",[e._l(e.exportList,(function(t){return[!e.isChecked||e.overrideList.find((function(e){return e.id===t.id}))?i("tr",{key:t.id,class:{"template-table-conflict":e.overrideList.find((function(e){return e.id===t.id}))}},[i("td",{staticClass:"conflict-id",attrs:{title:t.id}},[e._v("\n                                            "+e._s(t.id)+"\n                                        ")]),e._v(" "),i("td",{staticClass:"conflict-name"},[i("span",{attrs:{title:t.name}},[e._v(e._s(t.name))])])]):e._e()]})),e._v(" "),e.isEmpty?[i("tr",[i("td",{attrs:{colspan:"2"}},[e.pending.upload?i("div",{staticClass:"uploading-tip"},[i("i",{staticClass:"common-icon-loading"})]):i("NoData",[i("div",[e._v(e._s(e.$t("无数据")))])])],1)])]:e._e()],2)])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.dataConflict,expression:"dataConflict"}],staticClass:"common-content"},[i("div",{staticClass:"common-list-label"},[i("label",{staticClass:"common-list"},[e._v(e._s(e.$t("上传了"))+e._s(e.exportList.length)+e._s(e.$t("条流程")))]),e._v(" "),e.overrideList.length?i("label",{staticClass:"common-item"},[e._v(e._s(e.$t("其中"))+e._s(e.overrideList.length)+e._s(e.$t("条流程与项目已有流程ID存在冲突")))]):e._e()]),e._v(" "),i("div",{staticClass:"common-checkbox",on:{click:e.onShowConflicts}},[i("span",{class:["checkbox",{checked:e.isChecked}]}),e._v(" "),i("span",[e._v(e._s(e.$t("只显示冲突项")))])])])])]),e._v(" "),i("div",{staticClass:"common-wrapper-btn",attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"button-group"},[i("bk-button",{attrs:{theme:"primary"},on:{click:function(t){return e.onConfirm(!0)}}},[e._v(e._s(e.exportConflict))]),e._v(" "),i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:e.common?!e.hasCreateCommonTplPerm:!e.hasPermission(["flow_create"],e.authActions)},expression:"{ active: common ? !hasCreateCommonTplPerm : !hasPermission(['flow_create'], authActions) }"}],class:{"btn-permission-disable":e.common?!e.hasCreateCommonTplPerm:!e.hasPermission(["flow_create"],e.authActions)},attrs:{theme:"default"},on:{click:function(t){return e.onConfirm(!1)}}},[e._v("\n                "+e._s(e.overrideConflict)+"\n            ")]),e._v(" "),i("bk-button",{attrs:{theme:"default"},on:{click:e.onCancel}},[e._v(" "+e._s(e.$t("取消"))+" ")])],1)])])}),[],!1,null,"4cfc7a22",null);t.a=C.exports},1218:function(e,t,i){"use strict";i(26),i(38),i(49),i(50);var n=i(16),s=i.n(n),a=i(0),r=i.n(a),o=i(5),l=i.n(o),c=i(4),p=i.n(c),d=(i(67),i(183),i(22),i(23),i(37),i(314),i(129),i(68),i(103),i(184),i(1)),m=i(28),h=i(7),u=i(611),f=i(102),v=i(995);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){l()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var C={name:"ExportTemplateDialog",components:{NoData:u.a,BaseCard:v.a},mixins:[f.a],props:{isExportDialogShow:Boolean,businessInfoLoading:Boolean,projectInfoLoading:Boolean,common:String,pending:Boolean,project_id:[Number,String]},data:function(){return{exportPending:!1,isTplInPanelAllSelected:!1,isCheckedDisabled:!1,templateList:[],templateInPanel:[],searchList:[],selectedTemplates:[],selectError:!1,templateEmpty:!1,selectedTaskCategory:"",category:"",filterCondition:{classifyId:"all",keywords:""},dialogFooterData:[{type:"primary",loading:!1,btnText:d.a.t("确认"),click:"onConfirm"},{btnText:d.a.t("取消"),click:"onCancel"}]}},computed:g(g({},Object(h.e)({projectBaseInfo:function(e){return r()(this,void 0),e.template.projectBaseInfo}.bind(void 0)})),{},{taskCategories:function(){var e=m.a.deepClone(this.projectBaseInfo.task_categories||[]);return e.unshift({value:"all",name:d.a.t("全部分类")}),e},reqPerm:function(){return this.common?["common_flow_view"]:["flow_view"]}}),watch:{pending:function(){this.dialogFooterData[0].loading=this.pending}},created:function(){this.getData(),this.onSearchInput=m.a.debounce(this.searchInputhandler,500)},methods:g(g(g({},Object(h.b)("templateList/",["loadTemplateList"])),Object(h.b)(["getCategorys"])),{},{getData:function(){var e=this;return s()(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.projectBaseInfo.task_categories||0!==e.projectBaseInfo.task_categories.length){t.next=6;break}return t.next=3,e.getCategorys();case 3:e.getTemplateData(),t.next=7;break;case 6:e.getTemplateData();case 7:case"end":return t.stop()}}),t)})))()},getTemplateData:function(){var e=this;return s()(p.a.mark((function t(){var i,n,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.exportPending=!0,e.isCheckedDisabled=!0,t.prev=2,i={},e.common?i.common=1:i.project__id=e.project_id,t.next=7,e.loadTemplateList(i);case 7:n=t.sent,s=n.objects,e.templateList=e.getGroupedList(s),e.templateInPanel=e.templateList.slice(0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:return t.prev=16,e.exportPending=!1,e.isCheckedDisabled=!1,t.finish(16);case 20:case"end":return t.stop()}}),t,null,[[2,13,16,20]])})))()},getGroupedList:function(e){var t=this,i=[],n=[];return this.taskCategories.forEach(function(e){r()(this,t),i.push(e.value),n.push({name:e.name,value:e.value,children:[]})}.bind(this)),e.forEach(function(e){r()(this,t);var s=e.category,a=i.indexOf(s);a>-1&&n[a].children.push(e)}.bind(this)),n.filter(function(e){return r()(this,t),e.children.length}.bind(this))},getTemplateIcon:function(e){return e.name.trim().substr(0,1).toUpperCase()},getTplIndexInSelected:function(e){var t=this;return this.selectedTemplates.findIndex(function(i){return r()(this,t),i.id===e.id}.bind(this))},getTplIsAllSelected:function(){var e=this;return!!this.templateInPanel.length&&this.templateInPanel.every(function(t){var i=this;return r()(this,e),t.children.every(function(e){var t=this;return r()(this,i),this.selectedTemplates.findIndex(function(i){return r()(this,t),i.id===e.id}.bind(this))>-1}.bind(this))}.bind(this))},onSelectClassify:function(e){var t=this,i=[];this.filterCondition.classifyId=e,i="all"===e?this.templateList.slice(0):this.templateList.filter(function(i){return r()(this,t),i.value===e}.bind(this)),""!==this.filterCondition.keywords?this.searchInputhandler():this.templateInPanel=i,this.isTplInPanelAllSelected=this.getTplIsAllSelected()},searchInputhandler:function(){var e=this,t=[];t="all"!==this.filterCondition.classifyId?this.templateList.filter(function(t){return r()(this,e),t.value===this.filterCondition.classifyId}.bind(this)):this.templateList.slice(0),this.templateInPanel=m.a.deepClone(t).filter(function(t){var i=this;return r()(this,e),t.children=t.children.filter(function(e){return r()(this,i),e.name.includes(this.filterCondition.keywords)}.bind(this)),t.children.length}.bind(this))},onSelectTemplate:function(e){if(this.hasPermission(this.reqPerm,e.auth_actions)){this.selectError=!1;var t=this.getTplIndexInSelected(e);t>-1?(this.selectedTemplates.splice(t,1),this.isTplInPanelAllSelected=!1):(this.selectedTemplates.push(e),this.isTplInPanelAllSelected=this.getTplIsAllSelected())}else{var i;i=this.common?{common_flow:[{id:e.id,name:e.name}]}:{flow:[{id:e.id,name:e.name}],project:[{id:e.project.id,name:e.project.name}]},this.applyForPermission(this.reqPerm,e.auth_actions,i)}},deleteTemplate:function(e){var t=this.getTplIndexInSelected(e);this.selectedTemplates.splice(t,1),this.isTplInPanelAllSelected=!1},onSelectAllClick:function(){var e=this;this.isCheckedDisabled||(this.templateInPanel.forEach(function(t){var i=this;r()(this,e),t.children.forEach(function(e){if(r()(this,i),this.hasPermission(this.reqPerm,e.auth_actions)){var t=this.getTplIndexInSelected(e);this.isTplInPanelAllSelected?t>-1&&this.selectedTemplates.splice(t,1):-1===t&&this.selectedTemplates.push(e)}}.bind(this))}.bind(this)),this.isTplInPanelAllSelected=!this.isTplInPanelAllSelected)},onConfirm:function(){var e=this,t=[];if(0===this.selectedTemplates.length)return this.selectError=!0,!1;this.selectedTemplates.forEach(function(i){r()(this,e),t.push(i.id)}.bind(this)),this.$emit("onExportConfirm",t),this.resetData()},onCancel:function(){this.templateEmpty=!1,this.selectError=!1,this.resetData(),this.$emit("onExportCancel")},resetData:function(){this.selectedTemplates=[],this.filterCondition={classifyId:"all",keywords:""},this.isTplInPanelAllSelected=!1,this.templateInPanel=this.templateList.slice(0)}})},_=(i(1243),i(9)),y=Object(_.a)(C,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("bk-dialog",{attrs:{width:"850","ext-cls":"common-dialog",title:e.$t("导出流程"),"mask-close":!1,value:e.isExportDialogShow,"header-position":"left","auto-close":!1},on:{confirm:e.onConfirm,cancel:e.onCancel}},[i("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.businessInfoLoading,opacity:1,zIndex:100},expression:"{ isLoading: businessInfoLoading, opacity: 1, zIndex: 100 }"}],staticClass:"export-container"},[i("div",{staticClass:"template-wrapper"},[i("div",{staticClass:"search-wrapper"},[i("div",{staticClass:"business-selector"},[i("bk-select",{staticClass:"bk-select-inline",attrs:{clearable:!1,disabled:e.exportPending},on:{change:e.onSelectClassify},model:{value:e.filterCondition.classifyId,callback:function(t){e.$set(e.filterCondition,"classifyId",t)},expression:"filterCondition.classifyId"}},e._l(e.taskCategories,(function(e,t){return i("bk-option",{key:t,attrs:{id:e.value,name:e.name}})})),1)],1),e._v(" "),i("div",{staticClass:"template-search"},[i("bk-input",{staticClass:"search-input",attrs:{clearable:!0,placeholder:e.$t("请输入流程名称"),"right-icon":"icon-search"},on:{input:e.onSearchInput},model:{value:e.filterCondition.keywords,callback:function(t){e.$set(e.filterCondition,"keywords","string"==typeof t?t.trim():t)},expression:"filterCondition.keywords"}})],1)]),e._v(" "),i("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.exportPending,opacity:1,zIndex:100},expression:"{ isLoading: exportPending, opacity: 1, zIndex: 100 }"}],staticClass:"template-list"},[i("ul",{staticClass:"grouped-list"},[e._l(e.templateInPanel,(function(t){return[t.children.length?i("li",{key:t.id,staticClass:"template-group"},[i("h5",{staticClass:"group-name"},[e._v("\n                                "+e._s(t.name)+"\n                                ("),i("span",{staticClass:"list-count"},[e._v(e._s(t.children.length))]),e._v(")\n                            ")]),e._v(" "),i("ul",{staticClass:"group-wrap"},e._l(t.children,(function(t,n){return i("base-card",{key:n,attrs:{data:t,selected:e.getTplIndexInSelected(t)>-1,"is-apply-permission":!e.hasPermission(e.reqPerm,t.auth_actions)},on:{onCardClick:function(i){return e.onSelectTemplate(t)}}})})),1)]):e._e()]})),e._v(" "),e.templateInPanel.length?e._e():i("NoData",{staticClass:"empty-template"})],2)])]),e._v(" "),i("div",{staticClass:"selected-wrapper"},[i("div",{staticClass:"selected-area-title"},[e._v("\n                "+e._s(e.$t("已选择"))+"\n                "),i("span",{staticClass:"select-count"},[e._v(e._s(e.selectedTemplates.length))]),e._v("\n                "+e._s(e.$t("项"))+"\n            ")]),e._v(" "),i("ul",{staticClass:"selected-list"},e._l(e.selectedTemplates,(function(t,n){return i("base-card",{key:n,attrs:{data:t,selected:!0,"show-delete":!0},on:{onDeleteCard:function(i){return e.deleteTemplate(t)}}})})),1)]),e._v(" "),i("bk-checkbox",{staticClass:"template-checkbox",attrs:{value:e.isTplInPanelAllSelected},on:{change:e.onSelectAllClick}},[e._v(e._s(e.$t("全选")))]),e._v(" "),e.selectError?i("div",{staticClass:"task-footer"},[i("span",{staticClass:"error-info"},[e._v(e._s(e.$t("请选择流程模版")))])]):e._e()],1)])}),[],!1,null,"7ec60a72",null);t.a=y.exports},1242:function(e,t,i){"use strict";i(1031)},1243:function(e,t,i){"use strict";i(1032)},790:function(e,t,i){},907:function(e,t,i){"use strict";i(790)},995:function(e,t,i){"use strict";i(26),i(38),i(37),i(49),i(22),i(50);var n=i(5),s=i.n(n),a=i(0),r=i.n(a),o=(i(23),i(7));function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={name:"BaseCard",props:{data:{type:Object,default:function(){return r()(this,void 0),{}}.bind(void 0)},isApplyPermission:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!1},setName:{type:String,default:""},iconText:{type:String,default:""}},computed:c(c({},Object(o.e)({lang:function(e){return r()(this,void 0),e.lang}.bind(void 0)})),{},{displayName:function(){return this.setName||this.data.name}}),methods:{onDeleteCard:function(){this.$emit("onDeleteCard",this.data)},onCardClick:function(){this.$emit("onCardClick",this.data)}}},d=(i(907),i(9)),m=Object(d.a)(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{class:["card-item",{"permission-disable":e.isApplyPermission},{selected:e.selected}],on:{click:e.onCardClick}},[e.iconText?i("div",{class:["card-icon","type-icon",{"zh-en":"en"===e.lang}]},[e._v("\n        "+e._s(e.iconText)+"\n    ")]):i("div",{staticClass:"card-icon"},[e._v("\n        "+e._s(e.displayName.trim().substr(0,1).toUpperCase())+"\n    ")]),e._v(" "),i("div",{staticClass:"card-content"},[i("p",{staticClass:"text"},[e._v(e._s(e.displayName))])]),e._v(" "),e.isApplyPermission?i("div",{staticClass:"apply-permission-mask"},[i("bk-button",{attrs:{theme:"primary",size:"small"}},[e._v(e._s(e.$t("申请权限")))])],1):e._e(),e._v(" "),e.showDelete?i("div",{staticClass:"card-delete common-icon-dark-circle-close",on:{click:function(t){return t.stopPropagation(),e.onDeleteCard.apply(null,arguments)}}}):e._e()])}),[],!1,null,"2e844ee3",null);t.a=m.exports}}]);