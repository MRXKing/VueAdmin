(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593f8692"],{"1fa9":function(e,t,a){"use strict";var r=a("f412"),n=a.n(r);n.a},2329:function(e,t,a){},2524:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"tips"},[e._v("excel表 访问地址："),a("a",{staticClass:"link-a",attrs:{href:e.$store.state.excel.exportExcelHref,target:"_blank"}},[e._v("vue-element-admin/Excel")])]),a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1)],1)},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v(" Drop excel file here or "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v(" 游览 ")])],1)])},s=[],o=(a("b0c0"),a("d3b7"),a("1146")),i=a.n(o),c={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.upload(a)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new Promise((function(a,r){var n=new FileReader;n.onload=function(e){var r=e.target.result,n=i.a.read(r,{type:"array"}),l=n.SheetNames[0],s=n.Sheets[l],o=t.getHeaderRow(s),c=i.a.utils.sheet_to_json(s);t.generateData({header:o,results:c}),t.loading=!1,a()},n.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,a=[],r=i.a.utils.decode_range(e["!ref"]),n=r.s.r;for(t=r.s.c;t<=r.e.c;++t){var l=e[i.a.utils.encode_cell({c:t,r:n})],s="UNKNOWN "+t;l&&l.t&&(s=i.a.utils.format_cell(l)),a.push(s)}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},u=c,d=(a("6aaf"),a("2877")),p=Object(d["a"])(u,l,s,!1,null,"b9874920",null),f=p.exports,h={name:"UploadExcel",components:{UploadExcelComponent:f},data:function(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"请不要上传大小超过1m的文件",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=t,this.tableHeader=a}}},v=h,g=(a("1fa9"),Object(d["a"])(v,r,n,!1,null,"e806a9c4",null));t["default"]=g.exports},"6aaf":function(e,t,a){"use strict";var r=a("2329"),n=a.n(r);n.a},f412:function(e,t,a){}}]);