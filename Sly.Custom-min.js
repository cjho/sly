/* Sly v1.0rc0 <http://sly.digitarald.com> - (C) 2009 Harald Kirschner <http://digitarald.de> - Open source under MIT License */
Sly.implement("combinators",{"<":function(c,b,a,e,d){while((b=b.parentNode)&&b.nodeType!==9){if(d(b)&&a.match(b,e)){c.push(b)}}},"^":function(c,b,a,e,d){if((b=b.firstChild)){if(node.nodeType===1&&d(b)&&a.match(b,e)){c.push(b)}else{Sly.combinators["+"](c,b,a,b,e)}}},"++":function(c,b,a,e,d){while((b=b.nextSibling)){if(b.nodeType===1&&d(b)&&this.match(b,e)){c.push(b)}}return c},"--":function(c,b,a,e,d){while((b=b.previousSibling)){if(b.nodeType===1&&d(b)&&this.match(b,e)){c.push(b)}}return c},"±":function(c,b,a,e,d){return Sly.combinators["--"].call(Sly.combinators["++"].call(c,b,e,uniques),b,e,uniques)}});Sly.implement("pseudos",{hidden:function(a){return(!a.offsetWidth||!a.offsetHeight)},visible:function(a){return(a.offsetWidth&&a.offsetHeight)},has:function(b,a){return Sly.find(a,b)},disabled:function(a){return(a.disabled==true)},enabled:function(a){return(a.disabled!=false)},selected:function(a){return(a.selected!=false)},checked:function(a){return(a.checked==true)}});Sly.implement("operators",{"/=":function(a,b){return a}});Sly.recompile();