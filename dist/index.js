"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var y=f(function(z,q){
function T(a,e,s,r,t,o){var i,u,n,c,v;for(i=r.data,u=r.accessors[0],n=r.accessors[1],c=o,v=0;v<a;v++)u(i,c)<e&&n(i,c,s),c+=t;return r}q.exports=T
});var l=f(function(A,d){
var b=require('@stdlib/array-base-arraylike2object/dist'),h=y();function j(a,e,s,r,t,o){var i,u,n;if(a<=0)return r;if(u=b(r),u.accessorProtocol)return h(a,e,s,u,t,o),r;for(i=o,n=0;n<a;n++)r[i]<e&&(r[i]=s),i+=t;return r}d.exports=j
});var p=f(function(B,g){
var k=require('@stdlib/strided-base-stride2offset/dist'),O=l();function P(a,e,s,r,t){return O(a,e,s,r,t,k(a,t))}g.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=p(),m=l();R(L,"ndarray",m);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
