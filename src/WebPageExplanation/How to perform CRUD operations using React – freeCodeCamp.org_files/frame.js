/*! Copyright 2009-2018 Evernote Corporation. All rights reserved. */

var serializeFrame;!function(){function a(){return document.querySelectorAll("iframe:not(#evernoteAuthTools):not(#evernoteFilingTools):not(#evernoteGlobalTools):not(#evernoteUserTools):not(#evernoteShareTools):not(#evernoteEmailSharing):not(#evernoteOptionsPage)")}function b(){var a=0;for(var b in g)a++;return a}function c(){for(var b=a(),c=0;c<b.length;c++){var d;if(b[c].dataset.en_id){if(d=b[c].dataset.en_id,g[d])continue}else d=Math.floor(1e8*Math.random()).toString(),b[c].dataset.en_id=d;b[c].contentWindow.postMessage({name:"EN_youAre",id:d},"*")}}function d(a,b){b?console.warn("iframe not serialized",document.location.href,b):window.parent.postMessage({name:"EN_serialized",data:a,id:document.body.dataset.en_id},"*")}function e(a){if(window!=window.parent){f[a.data.id]=a.data.data;var c=0;for(var e in f)c++;if(c==b()){if(void 0===document.body.dataset.en_id)return;(new HtmlSerializer).serialize(document.documentElement,null,!0,d,f,null)}}}var f={},g={};if("undefined"==typeof Browser){Browser={},Browser.sendToExtension=function(a){window.parent.postMessage(a,"*")};var h={},i=function(a){var b=a.data;b&&b.name&&h[b.name]&&h[b.name](a.data)};window.addEventListener("message",i,!1),Browser.addMessageHandlers=function(a){for(var b in a)h[b]=a[b]}}window.addEventListener("message",function(b){if(b.data&&b.data.name&&"EN_serialized"==b.data.name?e(b):b.data&&b.data.name&&"EN_youAre"==b.data.name?document.body.dataset.en_id&&document.body.dataset.en_id==b.data.id||(document.body.dataset.en_id=b.data.id,b.source.postMessage({name:"EN_iAm",id:b.data.id},"*")):b.data&&b.data.name&&"EN_iAm"==b.data.name?g[b.data.id]=b.source:b.data&&b.data.name&&"EN_frameReady"==b.data.name&&c(),b.data&&b.data.name&&"content_textResource"==b.data.name)for(var d=a(),f=0;f<d.length;f++)d[f].contentWindow.postMessage(b.data,"*")},!1),window!=window.parent&&window.parent.postMessage({name:"EN_frameReady"},"*"),serializeFrame=function(){if(void 0!==document.body.dataset.en_id&&0==a().length){(new HtmlSerializer).serialize(document.documentElement,null,!0,d,null,null,config)}}}();