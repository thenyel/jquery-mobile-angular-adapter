(function(){var a,b,c;(function(a){if(typeof c!="undefined")return;var d=[],e;c=e=function(a,b,c){var e=a.indexOf(".js");e!==-1&&(a=a.substring(0,e)),arguments.length==2&&(c=b,b=[]);if(typeof c=="function"){var f=[];for(var g=0;g<b.length;g++){var h=b[g];f.push(d[h])}c=c.apply(this,f)}d[a]=c},b=function(a,b){if(typeof b=="function"){var c=[];for(var e=0;e<a.length;e++){var f=a[e];c.push(d[f])}b.apply(this,c)}},b.ready=$})(window),c("angular",[],function(){if(typeof angular!="undefined")return angular}),c("jquery",[],function(){if(typeof $!="undefined")return $}),c("jqmng/globalScope",["jquery","angular"],function(a,b){function e(){return d||(d=a("body").scope(),d||b.compile(a(document))(),d=a("body").scope()),d}function f(a){c.push(a)}var c=[];b.widget("body",function(a){return this.descend(!1),this.directives(!0),function(a){var b=this;for(var d=0;d<c.length;d++)c[d](b)}});var d;return a.mobile.globalScope=e,{globalScope:e,onCreate:f}}),c("jqmng/navigate",["jquery","angular"],function(a,b){function c(a){var b=a.indexOf(":");return b===-1?[a]:[a.substring(0,b),a.substring(b+1)]}function d(b,c){b&&a(document).one("pagebeforechange",function(d,e){function h(){var a=g.scope();a[b].apply(a,c)}var f=a.mobile.path.parseUrl(e.toPage),g=a("#"+f.hash.substring(1));if(!g.data("page")){g.one("pagecreate",h);return}h()})}function e(a,b){var e=Array.prototype.slice.call(arguments,2),h,i;d(b,e);if(typeof a=="object")h=a,i=h.target;else{var j=c(a);if(j.length===2&&j[0]==="back"){var i=j[1],k=g(i);k===undefined?i=f(i,undefined):window.history.go(k);return}j.length===2?(h={transition:j[0]},i=j[1]):(i=j[0],h=undefined)}i==="back"?window.history.go(-1):f(i,h)}function f(b,c){b.charAt(0)!=="#"&&(b="#"+b);var d=[b];return c&&d.push(c),a.mobile.changePage.apply(a.mobile,d),b}function g(b){var c=a.mobile.urlHistory.stack,d=0,e;for(var f=c.length-2;f>=0;f--){e=c[f].pageUrl;if(e===b)return f-c.length+1}return undefined}return b.service("$navigate",function(){return e}),b.Object.navigate=function(a){var b=a.$service("$navigate");if(arguments.length===2){b(arguments[1]);return}var d=arguments[1],e={},f;for(var g=2;g<arguments.length;g++)f=c(arguments[g]),e[f[0]]=f[1];d&&d.then?d.then(function(a){e[a]?b(e[a]):e.success&&b(e.success)},function(a){e[a]?b(e[a]):e.failure&&b(e.failure)}):e[d]?b(e[d]):d!==!1&&e.success?b(e.success):d===!1&&e.failure&&b(e.failure)},e}),c("jqmng/waitDialog",["jquery"],function(a){function c(a){var c=b[b.length-1];c.callback&&c.callback.apply(this,arguments),a.preventDefault()}function e(){if(!d||d.length==0)d=a(".ui-loader"),d.bind("vclick",c)}function f(){e();if(b.length>0){var c=b[b.length-1],d=c.msg;a.mobile.loadingMessage=d,a.mobile.showPageLoadingMsg()}else a.mobile.hidePageLoadingMsg()}function g(){var c,d;typeof arguments[0]=="string"&&(c=arguments[0]),typeof arguments[0]=="function"&&(d=arguments[0]),typeof arguments[1]=="function"&&(d=arguments[1]),c||(c=a.mobile.loadingMessage),b.push({msg:c,callback:d}),f()}function h(){b.pop(),f()}function i(a,b){g(b),a.always(function(){h()})}function j(b,c,d){d||(d=a.mobile.loadingMessageWithCancel),g(d,function(){b.reject(c)}),b.always(function(){h()})}var b=[],d;a.mobile.loadingMessageWithCancel||(a.mobile.loadingMessageWithCancel="Loading. Click to cancel."),a("div").live("pageshow",function(a,b){f()});var k={show:g,hide:h,waitFor:i,waitForWithCancel:j};return angular.service("$waitDialog",function(){return k}),k}),c("jqmng/event",["angular"],function(a){function b(a,b,c,d,e){c.bind(d,function(f){var g=a.$tryEval(e,c);b(),d.charAt(0)=="v"&&f.preventDefault()})}function c(c,d){a.directive("ngm:"+c,function(a){var c=function(c,e){b(this,c,e,d,a)};return c.$inject=["$updateView"],c})}a.directive("ngm:click",function(b,c){return a.directive("ngm:event")('{vclick:"'+b+'"}',c)}),a.directive("ngm:event",function(c,d){var e=a.fromJson(c),f=function(a,c){for(var d in e)b(this,a,c,d,e[d])};return f.$inject=["$updateView"],f});var d={taphold:"taphold",swipe:"swipe",swiperight:"swiperight",swipeleft:"swipeleft",pagebeforeshow:"pagebeforeshow",pagebeforehide:"pagebeforehide",pageshow:"pageshow",pagehide:"pagehide",click:"vclick"};for(var e in d)c(e,d[e])}),c("jqmng/fadein",["angular"],function(a){a.directive("ngm:fadein",function(a,b){return this.directives(!0),this.descend(!0),b.css({opacity:.1}),function(b){b.animate({opacity:1},parseInt(a))}})}),c("jqmng/if",["angular"],function(a){a.Object.iff=function(a,b,c,d){return b?c:d},a.widget("@ngm:if",function(b,c){var d="ngmif in $iff("+b+",[1],[])";return c.removeAttr("ngm:if"),a.widget("@ng:repeat").call(this,d,c)})}),c("jqmng/paging",["jquery","angular","jqmng/globalScope"],function(a,b,c){function g(a){var b=[];for(var c in e)b[c]=e[c];b.init(a);var d=b.hasOwnProperty;return b.hasOwnProperty=function(a){return a in e||a in f?!1:d.apply(this,arguments)},b}function h(b){b.pageSize?this.pageSize=b.pageSize:this.pageSize=a.mobile.defaultListPageSize,this.originalList=b,this.refreshNeeded=!0,this.reset()}function i(){var a=this.originalList;this.filter&&(a=b.Array.filter(a,this.filter)),this.orderBy&&(a=b.Array.orderBy(a,this.orderBy));var c=this.loadedCount;c<this.pageSize&&(c=this.pageSize),c>a.length&&(c=a.length),this.loadedCount=c,this.availableCount=a.length;var d=a.slice(0,c),e=[0,this.length].concat(d);this.splice.apply(this,e)}function j(){return this.evalId!=d&&(this.refreshNeeded=!0,this.evalId=d),this.refreshNeeded&&(this.refresh(),this.refreshNeeded=!1),this}function k(a){b.Object.equals(this.filter,a)||(this.filter=a,this.refreshNeeded=!0)}function l(a){b.Object.equals(this.orderBy,a)||(this.orderBy=a,this.refreshNeeded=!0)}function m(){this.loadedCount=this.loadedCount+this.pageSize,this.refreshNeeded=!0}function n(){return this.refreshIfNeeded(),this.loadedCount<this.availableCount}function o(){this.loadedCount=0,this.refreshNeeded=!0}a.mobile.defaultListPageSize||(a.mobile.defaultListPageSize=10);var d=0;c.onCreate(function(a){a.$onEval(-99999,function(){d++})});var e={init:h,refresh:i,refreshIfNeeded:j,setFilter:k,setOrderBy:l,loadNextPage:m,hasMorePages:n,reset:o},f={pageSize:!0,originalList:!0,refreshNeeded:!0,filter:!0,orderBy:!0,loadedCount:!0,availableCount:!0,evalId:!0};b.Array.paged=function(a,b,c){var d=a.pagedList;return d||(d=g(a),a.pagedList=d),d.setFilter(b),d.setOrderBy(c),d.refreshIfNeeded(),d}}),c("jqmng/sharedController",["angular"],function(a){function b(a){var b=a.split("."),c=window,d;for(var e=0;e<b.length;e++)d=b[e],c=c[d];return c}function c(a,c){var d=b(c),e=a[c];return e||(e=a.$new(d),a[c]=e),e}function d(a){var b=/([^\s,:]+)\s*:\s*([^\s,:]+)/g,c,d=!1,e={};while(c=b.exec(a))d=!0,e[c[1]]=c[2];if(!d)throw"Expression "+a+" needs to have the syntax <name>:<controller>,...";return e}a.directive("ngm:shared-controller",function(a){this.scope(!0);var b=d(a);return function(a){var d=this;for(var e in b)d[e]=c(d.$root,b[e])}})}),c("jqmng/widgets/pageCompile",["jquery","angular","jqmng/globalScope"],function(a,b,c){function d(b){var c=b.data("page"),d;if(!c)return;d=c.options,b.find("input").not(c.keepNativeSelector()).each(function(){var b=a(this),c=this.getAttribute("type"),e=d.degradeInputs[c]||"text";if(d.degradeInputs[c]){var f=a("<div>").html(b.clone()).html(),g=f.indexOf(" type=")>-1,h=g?/\s+type=["']?\w+['"]?/:/\/?>/,i=' type="'+e+'" data-'+a.mobile.ns+'type="'+c+'"'+(g?"":">");b.replaceWith(f.replace(h,i))}})}a.mobile.page.prototype.widgetEventPrefix="jqmngpage",a("div").live("jqmngpagecreate",function(e){var f=a(e.target),g=c.globalScope(),h=b.scope(g);d(f),b.compile(f)(h),g.$eval();var i=!1;h.$onEval(99999,function(){i&&(i=!1,f.trigger("create"))}),h.createJqmWidgets=function(){i=!0},f.trigger("pagecreate")}),a("div").live("jqmngpagebeforeshow",function(b,c){var d=a(b.target).scope();d&&(e=d,e.$service("$updateView")());var f=a(b.target);f.trigger("pagebeforeshow",c)}),a("div").live("jqmngpagebeforehide",function(b,c){var d=a(b.target);d.trigger("pagebeforehide",c)}),a("div").live("jqmngpagehide",function(b,c){var d=a(b.target);d.trigger("pagehide",c)}),a("div").live("jqmngpageshow",function(b,c){var d=a(b.target);d.trigger("pageshow",c)}),b.directive("ngm:createwidgets",function(a){return function(a){var b=this;b.createJqmWidgets&&b.createJqmWidgets()}});var e=null;c.onCreate(function(a){a.$onEval(function(){e&&e.$eval()})}),function(b){var c=b.service("$browser");b.service("$browser",function(){var b=c.apply(this,arguments);return b.onHashChange=function(b){return a(window).bind("hashchange",b),b},b.setUrl=function(){},b},{$inject:["$log"]})}(b)}),c("jqmng/widgets/widgetProxyUtil",["jquery","angular","jqmng/globalScope"],function(a,b,c){function d(a,c){var d=b.widget(a);b.widget(a,function(){var a,b=c.apply(this,arguments),e=function(){var c=a&&a.$inject&&a.$inject.length||0,d=arguments[c],e=this,f=arguments,g=!1,h;return b&&(h=b.call(this,d,function(){return g=!0,a&&a.apply(e,f)})),g?h:a&&a.apply(e,f)};return a=d&&d.apply(this,arguments),d||(this.descend(!0),this.directives(!0)),e.$inject=a&&a.$inject,e})}function e(a,c){var d=b.directive(a);b.directive(a,function(a){var b=d.apply(this,arguments),e=c(a),f=function(){var a=b.$inject&&b.$inject.length||0,c=arguments[a],d=this,f=b.apply(this,arguments);return e.call(this,c),f};return f.$inject=b.$inject,f})}return{createAngularDirectiveProxy:e,createAngularWidgetProxy:d}}),c("jqmng/widgets/angularRepeat",["jqmng/widgets/widgetProxyUtil"],function(a){angular.widget("@ng:repeat",function(a,b){b.attr("ngm:createwidgets","true"),b.removeAttr("ng:repeat"),b.replaceWith(angular.element("<!-- ng:repeat: "+a+" -->"));var c=this.compile(b);return function(b){var d=a.match(/^\s*(.+)\s+in\s+(.*)\s*$/),e,f,g,h;if(!d)throw Error("Expected ng:repeat in form of '_item_ in _collection_' but got '"+a+"'.");e=d[1],f=d[2],d=e.match(/^([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\)$/);if(!d)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");g=d[3]||d[1],h=d[2];var i=[],j=this,k=b.parent();this.$onEval(function(){var a=0,d=i.length,e=b,l=this.$tryEval(f,b),m=angular.Array.size(l,!0),n,o;for(o in l)l.hasOwnProperty(o)&&(a<d?(n=i[a],n[g]=l[o],h&&(n[h]=o),e=n.$element,n.$position=a==0?"first":a==m-1?"last":"middle",n.$eval()):(n=angular.scope(j),n[g]=l[o],h&&(n[h]=o),n.$index=a,n.$position=a==0?"first":a==m-1?"last":"middle",i.push(n),c(n,function(b){b.attr("ng:repeat-index",a);var c=e;while(c.length>0&&c.parent()[0]!==k[0])c=c.parent();c.after(b),e=b})),a++);while(i.length>a){var p=i.pop(),q=p.$element;q.remove()}},b)}})}),c("jqmng/widgets/angularSwitch",["jqmng/widgets/widgetProxyUtil"],function(a){a.createAngularWidgetProxy("ng:switch",function(a){return a.children().attr("ngm:createwidgets","true"),function(a,b){return b()}})}),c("jqmng/widgets/angularInput",["jquery","jqmng/widgets/widgetProxyUtil"],function(a,b){function c(b){return b.filter(a.mobile.checkboxradio.prototype.options.initSelector).not(":jqmData(role='none'), :jqmData(role='nojs')").length>0}function d(b){return b.filter(a.mobile.textinput.prototype.options.initSelector).not(":jqmData(role='none'), :jqmData(role='nojs')").length>0}var e=angular.widget("input");angular.widget("input",function(a){var b=d(a),f=c(a),g=a.attr("name"),h=a[0].type;b&&(h="text");var i=[{type:h}],j=e.call(this,i),k=function(){var a=this,b=arguments[k.$inject.length];if(f){var c=b.bind;b.bind=function(a,b){return a.indexOf("click")!=-1&&(a="change"),c.call(this,a,b)}}var d=j.apply(this,arguments);return g&&a.$watch(g,function(a){var c=b.data();for(var d in c){var e=c[d];e.refresh&&b[d]("refresh")}}),d};return k.$inject=j.$inject||[],k})}),c("jqmng/widgets/angularSelect",["jqmng/widgets/widgetProxyUtil"],function(a){a.createAngularWidgetProxy("select",function(a){var b=a.attr("name");return function(a,c){var d=this,e=c(),f;return b&&d.$onEval(function(){var c=d.$eval(b);if(c!==f){f=c;var e=a.data();for(var g in e){var h=e[g];h.refresh&&a[g]("refresh")}}}),e}})}),c("jqmng/widgets/disabledHandling",["jqmng/widgets/widgetProxyUtil"],function(a){a.createAngularDirectiveProxy("ng:bind-attr",function(a){var b=/([^:{'"]+)/,c=b.exec(a)[1];return c!=="disabled"?function(){}:function(a){var b=this,d;b.$onEval(function(){var b=a.attr(c);if(b!=d){d=b;var e=b?"disable":"enable",f=a.data();for(var g in f){var h=f[g];h[e]&&a[g](e)}}})}})}),c("jqmng/widgets/jqmButton",["jquery"],function(a){var b=a.mobile.button.prototype,c=b.destroy;b.destroy=function(){c.apply(this,arguments),this.button.remove()}}),c("jqmng/widgets/jqmListView",["jquery"],function(a){var b=a.mobile.listview.prototype,c=b.destroy;b.destroy=function(){var b=this.element.attr("id"),d=new RegExp(a.mobile.subPageUrlKey+"="+b+"-"),e=this.childPages();c.apply(this,arguments);for(var f=0;f<e.length;f++){var g=a(e[f]),h=g.attr("data-url");h.match(d)&&g.remove()}};var d=b._create;b._create=function(){var a=this,b=d.apply(this,arguments);this.element.bind("create",function(b){a.refresh();var c=a.element.children("li"),d,e;for(e=0;e<c.length;e++)d=c.eq(e),d.data("listlistener")||(d.data("listlistener",!0),d.bind("remove",function(){a.refresh()}))})}}),c("jqmng/widgets/jqmSelectMenu",["jquery"],function(a){var b=a.mobile.selectmenu.prototype,c=b.destroy;b.destroy=function(){var a=this.element.closest(".ui-select"),b=this.menuPage,d=this.screen,e=this.listbox;c.apply(this,arguments),a&&a.remove(),b&&b.remove(),d&&d.remove(),e&&e.remove()};var d=b._create;b._create=function(){var a=d.apply(this,arguments),b=this,c=b.open;b.open=function(){return this.refresh(),c.apply(this,arguments)}}}),c("jqmng/widgets/jqmSlider",["jquery"],function(a){var b=a.mobile.slider.prototype,c=b.destroy;b.destroy=function(){c.apply(this,arguments),this.slider.remove()}}),c("jqmng/jqmngStyle",[],function(){var a="#ng-callout {display: none}";$("head").append('<style type="text/css">'+a+"</style>")}),c("jqm-angular",["angular","jquery","jqmng/globalScope","jqmng/navigate","jqmng/waitDialog","jqmng/event","jqmng/fadein","jqmng/if","jqmng/paging","jqmng/sharedController","jqmng/widgets/pageCompile","jqmng/widgets/angularRepeat","jqmng/widgets/angularSwitch","jqmng/widgets/angularInput","jqmng/widgets/angularSelect","jqmng/widgets/disabledHandling","jqmng/widgets/jqmButton","jqmng/widgets/jqmListView","jqmng/widgets/jqmSelectMenu","jqmng/widgets/jqmSlider","jqmng/jqmngStyle"])})()