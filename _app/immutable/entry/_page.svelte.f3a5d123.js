var $h=Object.defineProperty;var Jh=(i,e,t)=>e in i?$h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ui=(i,e,t)=>(Jh(i,typeof e!="symbol"?e+"":e,t),t);import{S as rn,i as sn,s as on,k as Ee,q as yt,a as Te,J as ni,l as Ae,m as Se,r as Mt,h as le,c as Pe,K as ii,n as pe,L as Df,b as Xe,G as ne,M as Sf,H as dn,N as Rn,I as qt,O as Oi,P as Ot,v as Hn,d as ye,f as Gn,g as de,u as wo,Q as bo,e as Wn,R as hs,y as Ge,z as Ve,A as We,B as je,T as eu,U as Ft,V as Qn,t as tu,W as _i,C as Zr,D as Kr,E as Qr,F as $r,X as ed,o as Ef,w as ri,Y as bs,Z as td,_ as yu,$ as Mu,a0 as nd,a1 as di,a2 as pi,a3 as id}from"../chunks/index.76e140b3.js";import{w as en,d as rd,r as sd}from"../chunks/index.dd364ef0.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="151",hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,wu=1,ad=2,Af=1,Cf=2,us=3,Gi=0,bn=1,$n=2,Hi=0,Ur=1,bu=2,Du=3,Su=4,ud=5,Fr=100,ld=101,cd=102,Eu=103,Au=104,fd=200,hd=201,dd=202,pd=203,Tf=204,Pf=205,md=206,gd=207,_d=208,vd=209,xd=210,yd=0,Md=1,wd=2,Sa=3,bd=4,Dd=5,Sd=6,Ed=7,Ff=0,Ad=1,Cd=2,mi=0,Td=1,Pd=2,Fd=3,Lf=4,Ld=5,Rf=300,Gr=301,Vr=302,Ea=303,Aa=304,Do=306,Ca=1e3,Jn=1001,Ta=1002,_n=1003,Cu=1004,Bo=1005,zn=1006,Rd=1007,ps=1008,ur=1009,Id=1010,Nd=1011,If=1012,Bd=1013,ir=1014,rr=1015,ms=1016,Ud=1017,Od=1018,Or=1020,zd=1021,ei=1023,kd=1024,Hd=1025,or=1026,Wr=1027,Gd=1028,Vd=1029,Wd=1030,jd=1031,qd=1033,Uo=33776,Oo=33777,zo=33778,ko=33779,Tu=35840,Pu=35841,Fu=35842,Lu=35843,Xd=36196,Ru=37492,Iu=37496,Nu=37808,Bu=37809,Uu=37810,Ou=37811,zu=37812,ku=37813,Hu=37814,Gu=37815,Vu=37816,Wu=37817,ju=37818,qu=37819,Xu=37820,Yu=37821,Ho=36492,Yd=36283,Zu=36284,Ku=36285,Qu=36286,Vi=3e3,Ct=3001,Zd=3200,Kd=3201,Nf=0,Qd=1,fi="srgb",gs="srgb-linear",Bf="display-p3",Go=7680,$d=519,$u=35044,Ju="300 es",Pa=1035;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vo=Math.PI/180,Fa=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function vn(i,e,t){return Math.max(e,Math.min(t,i))}function Jd(i,e){return(i%e+e)%e}function Wo(i,e,t){return(1-t)*i+t*e}function el(i){return(i&i-1)===0&&i!==0}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ps(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,h){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],y=r[1],v=r[4],b=r[7],M=r[2],S=r[5],P=r[8];return s[0]=o*_+a*y+c*M,s[3]=o*m+a*v+c*S,s[6]=o*d+a*b+c*P,s[1]=h*_+l*y+u*M,s[4]=h*m+l*v+u*S,s[7]=h*d+l*b+u*P,s[2]=f*_+p*y+g*M,s[5]=f*m+p*v+g*S,s[8]=f*d+p*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8];return t*o*l-t*a*h-n*s*l+n*a*c+r*s*h-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=l*o-a*h,f=a*c-l*s,p=h*s-o*c,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*h-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(l*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*c-h*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-r*h,r*c,-r*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new lt;function Uf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const tp=new lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),np=new lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ip(i){return i.convertSRGBToLinear().applyMatrix3(np)}function rp(i){return i.applyMatrix3(tp).convertLinearToSRGB()}const sp={[gs]:i=>i,[fi]:i=>i.convertSRGBToLinear(),[Bf]:ip},op={[gs]:i=>i,[fi]:i=>i.convertLinearToSRGB(),[Bf]:rp},Cn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return gs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=sp[e],r=op[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let pr;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=_s("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zf{constructor(e=null){this.isSource=!0,this.uuid=Ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xo(r[o].image)):s.push(Xo(r[o]))}else s=Xo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ap=0;class Dn extends lr{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Jn,r=Jn,s=zn,o=ps,a=ei,c=ur,h=Dn.DEFAULT_ANISOTROPY,l=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ds(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Rf;Dn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,h=c[0],l=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,b=(p+1)/2,M=(d+1)/2,S=(l+f)/4,P=(u+_)/4,E=(g+m)/4;return v>b&&v>M?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=S/n,s=P/n):b>M?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=S/r,s=E/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=P/s,r=E/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-l)/y,this.w=Math.acos((h+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wi extends lr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kf extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class up extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],h=n[r+1],l=n[r+2],u=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||h!==p||l!==g){let m=1-a;const d=c*f+h*p+l*g+u*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const M=Math.sqrt(v),S=Math.atan2(M,d*y);m=Math.sin(m*S)/M,a=Math.sin(a*S)/M}const b=a*y;if(c=c*m+f*b,h=h*m+p*b,l=l*m+g*b,u=u*m+_*b,m===1-a){const M=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=M,h*=M,l*=M,u*=M}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],h=n[r+2],l=n[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+l*u+c*p-h*f,e[t+1]=c*g+l*f+h*u-a*p,e[t+2]=h*g+l*p+a*f-c*u,e[t+3]=l*g-a*u-c*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(r/2),u=a(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"YXZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"ZXY":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"ZYX":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"YZX":this._x=f*l*u+h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u-f*p*g;break;case"XZY":this._x=f*l*u-h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],h=t[2],l=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-h)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(l-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+h)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-h)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+o*a+r*h-s*c,this._y=r*l+o*c+s*a-n*h,this._z=s*l+o*h+n*c-r*a,this._w=o*l-n*a-r*c-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-t)*l)/h,f=Math.sin(t*l)/h;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,h=c*t+o*r-a*n,l=c*n+a*t-s*r,u=c*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=h*c+f*-s+l*-a-u*-o,this.y=l*c+f*-o+u*-s-h*-a,this.z=u*c+f*-a+h*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new I,tl=new Jt;class Ss{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox),mr.applyMatrix4(e.matrixWorld),this.union(mr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else r.boundingBox===null&&r.computeBoundingBox(),mr.copy(r.boundingBox),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Fs.subVectors(this.max,ns),gr.subVectors(e.a,ns),_r.subVectors(e.b,ns),vr.subVectors(e.c,ns),Li.subVectors(_r,gr),Ri.subVectors(vr,_r),Xi.subVectors(gr,vr);let t=[0,-Li.z,Li.y,0,-Ri.z,Ri.y,0,-Xi.z,Xi.y,Li.z,0,-Li.x,Ri.z,0,-Ri.x,Xi.z,0,-Xi.x,-Li.y,Li.x,0,-Ri.y,Ri.x,0,-Xi.y,Xi.x,0];return!Zo(t,gr,_r,vr,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,gr,_r,vr,Fs))?!1:(Ls.crossVectors(Li,Ri),t=[Ls.x,Ls.y,Ls.z],Zo(t,gr,_r,vr,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new I,new I,new I,new I,new I,new I,new I,new I],wi=new I,mr=new Ss,gr=new I,_r=new I,vr=new I,Li=new I,Ri=new I,Xi=new I,ns=new I,Fs=new I,Ls=new I,Yi=new I;function Zo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Yi.fromArray(i,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),h=t.dot(Yi),l=n.dot(Yi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const lp=new Ss,is=new I,Ko=new I;class So{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(is,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(Ko)),this.expandByPoint(is.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new I,Qo=new I,Rs=new I,Ii=new I,$o=new I,Is=new I,Jo=new I;class iu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qo.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=Ii.dot(this.direction),c=-Ii.dot(Rs),h=Ii.lengthSq(),l=Math.abs(1-o*o);let u,f,p,g;if(l>0)if(u=o*c-a,f=o*a-c,g=s*l,u>=0)if(f>=-g)if(f<=g){const _=1/l;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+h}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+h):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+h);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qo).addScaledVector(Rs,f),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),r=bi.dot(bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),l>=0?(s=(e.min.y-f.y)*l,o=(e.max.y-f.y)*l):(s=(e.max.y-f.y)*l,o=(e.min.y-f.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,s){$o.subVectors(t,e),Is.subVectors(n,e),Jo.crossVectors($o,Is);let o=this.direction.dot(Jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const c=a*this.direction.dot(Is.crossVectors(Ii,Is));if(c<0)return null;const h=a*this.direction.dot($o.cross(Ii));if(h<0||c+h>o)return null;const l=-a*Ii.dot(Jo);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=l,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),h=Math.sin(r),l=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=p+g*h,t[5]=f-_*h,t[9]=-a*c,t[2]=_-f*h,t[6]=g+p*h,t[10]=o*c}else if(e.order==="YXZ"){const f=c*l,p=c*u,g=h*l,_=h*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*h,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*l,p=c*u,g=h*l,_=h*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*l,t[9]=_-f*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=g*h-p,t[8]=f*h+_,t[1]=c*u,t[5]=_*h+f,t[9]=p*h-g,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-h*l,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=f*u+_,t[5]=o*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*l,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,fp)}lookAt(e,t,n){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ni.crossVectors(n,Tn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ni.crossVectors(n,Tn)),Ni.normalize(),Ns.crossVectors(Tn,Ni),r[0]=Ni.x,r[4]=Ns.x,r[8]=Tn.x,r[1]=Ni.y,r[5]=Ns.y,r[9]=Tn.y,r[2]=Ni.z,r[6]=Ns.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],v=n[7],b=n[11],M=n[15],S=r[0],P=r[4],E=r[8],w=r[12],D=r[1],N=r[5],W=r[9],B=r[13],H=r[2],G=r[6],K=r[10],U=r[14],Q=r[3],J=r[7],fe=r[11],re=r[15];return s[0]=o*S+a*D+c*H+h*Q,s[4]=o*P+a*N+c*G+h*J,s[8]=o*E+a*W+c*K+h*fe,s[12]=o*w+a*B+c*U+h*re,s[1]=l*S+u*D+f*H+p*Q,s[5]=l*P+u*N+f*G+p*J,s[9]=l*E+u*W+f*K+p*fe,s[13]=l*w+u*B+f*U+p*re,s[2]=g*S+_*D+m*H+d*Q,s[6]=g*P+_*N+m*G+d*J,s[10]=g*E+_*W+m*K+d*fe,s[14]=g*w+_*B+m*U+d*re,s[3]=y*S+v*D+b*H+M*Q,s[7]=y*P+v*N+b*G+M*J,s[11]=y*E+v*W+b*K+M*fe,s[15]=y*w+v*B+b*U+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],h=e[13],l=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*u-r*h*u-s*a*f+n*h*f+r*a*p-n*c*p)+_*(+t*c*p-t*h*f+s*o*f-r*o*p+r*h*l-s*c*l)+m*(+t*h*u-t*a*p-s*o*u+n*o*p+s*a*l-n*h*l)+d*(-r*a*l-t*c*u+t*a*f+r*o*u-n*o*f+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=u*m*h-_*f*h+_*c*p-a*m*p-u*c*d+a*f*d,v=g*f*h-l*m*h-g*c*p+o*m*p+l*c*d-o*f*d,b=l*_*h-g*u*h+g*a*p-o*_*p-l*a*d+o*u*d,M=g*u*c-l*_*c-g*a*f+o*_*f+l*a*m-o*u*m,S=t*y+n*v+r*b+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/S;return e[0]=y*P,e[1]=(_*f*s-u*m*s-_*r*p+n*m*p+u*r*d-n*f*d)*P,e[2]=(a*m*s-_*c*s+_*r*h-n*m*h-a*r*d+n*c*d)*P,e[3]=(u*c*s-a*f*s-u*r*h+n*f*h+a*r*p-n*c*p)*P,e[4]=v*P,e[5]=(l*m*s-g*f*s+g*r*p-t*m*p-l*r*d+t*f*d)*P,e[6]=(g*c*s-o*m*s-g*r*h+t*m*h+o*r*d-t*c*d)*P,e[7]=(o*f*s-l*c*s+l*r*h-t*f*h-o*r*p+t*c*p)*P,e[8]=b*P,e[9]=(g*u*s-l*_*s-g*n*p+t*_*p+l*n*d-t*u*d)*P,e[10]=(o*_*s-g*a*s+g*n*h-t*_*h-o*n*d+t*a*d)*P,e[11]=(l*a*s-o*u*s-l*n*h+t*u*h+o*n*p-t*a*p)*P,e[12]=M*P,e[13]=(l*_*r-g*u*r+g*n*f-t*_*f-l*n*m+t*u*m)*P,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*u*r-l*a*r+l*n*c-t*u*c-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,h=s*o,l=s*a;return this.set(h*o+n,h*a-r*c,h*c+r*a,0,h*a+r*c,l*a+n,l*c-r*o,0,h*c-r*a,l*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,h=s+s,l=o+o,u=a+a,f=s*h,p=s*l,g=s*u,_=o*l,m=o*u,d=a*u,y=c*h,v=c*l,b=c*u,M=n.x,S=n.y,P=n.z;return r[0]=(1-(_+d))*M,r[1]=(p+b)*M,r[2]=(g-v)*M,r[3]=0,r[4]=(p-b)*S,r[5]=(1-(f+d))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(g+v)*P,r[9]=(m-y)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xr.set(r[0],r[1],r[2]).length();const o=xr.set(r[4],r[5],r[6]).length(),a=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const h=1/s,l=1/o,u=1/a;return qn.elements[0]*=h,qn.elements[1]*=h,qn.elements[2]*=h,qn.elements[4]*=l,qn.elements[5]*=l,qn.elements[6]*=l,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),h=2*s/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=h,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),h=1/(n-r),l=1/(o-s),u=(t+e)*c,f=(n+r)*h,p=(o+s)*l;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xr=new I,qn=new Bt,cp=new I(0,0,0),fp=new I(1,1,1),Ni=new I,Ns=new I,Tn=new I,nl=new Bt,il=new Jt;class Es{constructor(e=0,t=0,n=0,r=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],h=r[5],l=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return il.setFromEuler(this),this.setFromQuaternion(il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const rl=new I,yr=new Jt,Di=new Bt,Bs=new I,rs=new I,dp=new I,pp=new Jt,sl=new I(1,0,0),ol=new I(0,1,0),al=new I(0,0,1),mp={type:"added"},ul={type:"removed"};class It extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new I,t=new Es,n=new Jt,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new lt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(rs,Bs,this.up):Di.lookAt(Bs,rs,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Di),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ul)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ul)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),h=o(e.textures),l=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new I(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,Si=new I,ea=new I,Ei=new I,Mr=new I,wr=new I,ll=new I,ta=new I,na=new I,ia=new I;let Us=!1;class Kn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),Si.subVectors(n,t),ea.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(Si),c=Xn.dot(ea),h=Si.dot(Si),l=Si.dot(ea),u=o*h-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(h*c-a*l)*f,g=(o*l-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,r,s,o,a,c){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Ei),c.setScalar(0),c.addScaledVector(s,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Si.subVectors(e,t),Xn.cross(Si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),Kn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,n),wr.subVectors(s,n),ta.subVectors(e,n);const c=Mr.dot(ta),h=wr.dot(ta);if(c<=0&&h<=0)return t.copy(n);na.subVectors(e,r);const l=Mr.dot(na),u=wr.dot(na);if(l>=0&&u<=l)return t.copy(r);const f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(Mr,o);ia.subVectors(e,s);const p=Mr.dot(ia),g=wr.dot(ia);if(g>=0&&p<=g)return t.copy(s);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(wr,a);const m=l*g-p*u;if(m<=0&&u-l>=0&&p-g>=0)return ll.subVectors(s,r),a=(u-l)/(u-l+(p-g)),t.copy(r).addScaledVector(ll,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Mr,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gp=0;class Jr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Ur,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tf,this.blendDst=Pf,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Cn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Cn.workingColorSpace){if(e=Jd(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return Cn.toWorkingColorSpace(this,r),this}setStyle(e,t=fi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Cn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Cn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,h=parseFloat(s[2])/100,l=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,h,l,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Cn.fromWorkingColorSpace(cn.copy(this),e),vn(cn.r*255,0,255)<<16^vn(cn.g*255,0,255)<<8^vn(cn.b*255,0,255)<<0}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cn.workingColorSpace){Cn.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,r=cn.g,s=cn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,h;const l=(a+o)/2;if(a===o)c=0,h=0;else{const u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=Cn.workingColorSpace){return Cn.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=fi){Cn.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,r=cn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yn),Yn.h+=e,Yn.s+=t,Yn.l+=n,this.setHSL(Yn.h,Yn.s,Yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Os);const n=Wo(Yn.h,Os.h,t),r=Wo(Yn.s,Os.s,t),s=Wo(Yn.l,Os.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const cn=new dt;dt.NAMES=Hf;class Eo extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new I,zs=new Ke;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$u&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gf extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _p=0;const Bn=new Bt,sa=new It,br=new I,Pn=new Ss,ss=new Ss,Zt=new I;class nn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Vf:Gf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Pn.min,ss.min),Pn.expandByPoint(Zt),Zt.addVectors(Pn.max,ss.max),Pn.expandByPoint(Zt)):(Pn.expandByPoint(ss.min),Pn.expandByPoint(ss.max))}Pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Zt.fromBufferAttribute(a,h),c&&(br.fromBufferAttribute(e,h),Zt.add(br)),r=Math.max(r,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],l=[];for(let D=0;D<a;D++)h[D]=new I,l[D]=new I;const u=new I,f=new I,p=new I,g=new Ke,_=new Ke,m=new Ke,d=new I,y=new I;function v(D,N,W){u.fromArray(r,D*3),f.fromArray(r,N*3),p.fromArray(r,W*3),g.fromArray(o,D*2),_.fromArray(o,N*2),m.fromArray(o,W*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const B=1/(_.x*m.y-m.x*_.y);isFinite(B)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(B),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(B),h[D].add(d),h[N].add(d),h[W].add(d),l[D].add(y),l[N].add(y),l[W].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,N=b.length;D<N;++D){const W=b[D],B=W.start,H=W.count;for(let G=B,K=B+H;G<K;G+=3)v(n[G+0],n[G+1],n[G+2])}const M=new I,S=new I,P=new I,E=new I;function w(D){P.fromArray(s,D*3),E.copy(P);const N=h[D];M.copy(N),M.sub(P.multiplyScalar(P.dot(N))).normalize(),S.crossVectors(E,N);const B=S.dot(l[D])<0?-1:1;c[D*4]=M.x,c[D*4+1]=M.y,c[D*4+2]=M.z,c[D*4+3]=B}for(let D=0,N=b.length;D<N;++D){const W=b[D],B=W.start,H=W.count;for(let G=B,K=B+H;G<K;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,h=new I,l=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const h=a.array,l=a.itemSize,u=a.normalized,f=new h.constructor(c.length*l);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*l;for(let d=0;d<l;d++)f[g++]=h[p++]}return new Vn(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],h=e(c,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const c=[],h=s[a];for(let l=0,u=h.length;l<u;l++){const f=h[l],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){const p=h[u];l.push(p.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const l=r[h];this.setAttribute(h,l.clone(t))}const s=e.morphAttributes;for(const h in s){const l=[],u=s[h];for(let f=0,p=u.length;f<p;f++)l.push(u[f].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,l=o.length;h<l;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new Bt,li=new iu,ks=new So,fl=new I,Dr=new I,Sr=new I,Er=new I,oa=new I,Hs=new I,Gs=new Ke,Vs=new Ke,Ws=new Ke,hl=new I,dl=new I,pl=new I,js=new I,qs=new I;class De extends It{constructor(e=new nn,t=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const l=a[c],u=s[c];l!==0&&(oa.fromBufferAttribute(u,e),o?Hs.addScaledVector(oa,l):Hs.addScaledVector(oa.sub(t),l))}t.add(Hs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),li.copy(e.ray).recast(e.near),ks.containsPoint(li.origin)===!1&&(li.intersectSphere(ks,fl)===null||li.origin.distanceToSquared(fl)>(e.far-e.near)**2))||(cl.copy(s).invert(),li.copy(e.ray).applyMatrix4(cl),n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,h=n.attributes.uv,l=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=r[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,M=v;b<M;b+=3){const S=a.getX(b),P=a.getX(b+1),E=a.getX(b+2);o=Xs(this,d,e,li,h,l,u,S,P,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);o=Xs(this,r,e,li,h,l,u,y,v,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=r[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,M=v;b<M;b+=3){const S=b,P=b+1,E=b+2;o=Xs(this,d,e,li,h,l,u,S,P,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,v=m+1,b=m+2;o=Xs(this,r,e,li,h,l,u,y,v,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function vp(i,e,t,n,r,s,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Gi,a),c===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(qs);return h<t.near||h>t.far?null:{distance:h,point:qs.clone(),object:i}}function Xs(i,e,t,n,r,s,o,a,c,h){i.getVertexPosition(a,Dr),i.getVertexPosition(c,Sr),i.getVertexPosition(h,Er);const l=vp(i,e,t,n,Dr,Sr,Er,js);if(l){r&&(Gs.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,c),Ws.fromBufferAttribute(r,h),l.uv=Kn.getInterpolation(js,Dr,Sr,Er,Gs,Vs,Ws,new Ke)),s&&(Gs.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,c),Ws.fromBufferAttribute(s,h),l.uv2=Kn.getInterpolation(js,Dr,Sr,Er,Gs,Vs,Ws,new Ke)),o&&(hl.fromBufferAttribute(o,a),dl.fromBufferAttribute(o,c),pl.fromBufferAttribute(o,h),l.normal=Kn.getInterpolation(js,Dr,Sr,Er,hl,dl,pl,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:c,c:h,normal:new I,materialIndex:0};Kn.getNormal(Dr,Sr,Er,u.normal),l.face=u}return l}class Gt extends nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],h=[],l=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(u,2));function g(_,m,d,y,v,b,M,S,P,E,w){const D=b/P,N=M/E,W=b/2,B=M/2,H=S/2,G=P+1,K=E+1;let U=0,Q=0;const J=new I;for(let fe=0;fe<K;fe++){const re=fe*N-B;for(let ve=0;ve<G;ve++){const ee=ve*D-W;J[_]=ee*y,J[m]=re*v,J[d]=H,h.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[d]=S>0?1:-1,l.push(J.x,J.y,J.z),u.push(ve/P),u.push(1-fe/E),U+=1}}for(let fe=0;fe<E;fe++)for(let re=0;re<P;re++){const ve=f+re+G*fe,ee=f+re+G*(fe+1),ue=f+(re+1)+G*(fe+1),_e=f+(re+1)+G*fe;c.push(ve,ee,_e),c.push(ee,ue,_e),Q+=6}a.addGroup(p,Q,w),p+=Q,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=jr(i[t]);for(const r in n)e[r]=n[r]}return e}function xp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wf(i){return i.getRenderTarget()===null&&i.outputEncoding===Ct?fi:gs}const jf={clone:jr,merge:gn};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class su extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends su{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Cr=1;class wp extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ln(Ar,Cr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ln(Ar,Cr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ln(Ar,Cr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ln(Ar,Cr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ln(Ar,Cr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const h=new Ln(Ar,Cr,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,h]=this.children,l=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(l),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class qf extends Dn{constructor(e,t,n,r,s,o,a,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,r,s,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gt(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Hi});s.uniforms.tEquirect.value=t;const o=new De(r,s),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=zn),new wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const aa=new I,Dp=new I,Sp=new lt;class Qi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=aa.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new So,Ys=new I;class ou{constructor(e=new Qi,t=new Qi,n=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],h=n[5],l=n[6],u=n[7],f=n[8],p=n[9],g=n[10],_=n[11],m=n[12],d=n[13],y=n[14],v=n[15];return t[0].setComponents(a-r,u-c,_-f,v-m).normalize(),t[1].setComponents(a+r,u+c,_+f,v+m).normalize(),t[2].setComponents(a+s,u+h,_+p,v+d).normalize(),t[3].setComponents(a-s,u-h,_-p,v-d).normalize(),t[4].setComponents(a-o,u-l,_-g,v-y).normalize(),t[5].setComponents(a+o,u+l,_+g,v+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ep(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,l){const u=h.array,f=h.usage,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,u,f),h.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version}}function s(h,l,u){const f=l.array,p=l.updateRange;i.bindBuffer(u,h),p.count===-1?i.bufferSubData(u,0,f):(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);l&&(i.deleteBuffer(l.buffer),n.delete(h))}function c(h,l){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u===void 0?n.set(h,r(h,l)):u.version<h.version&&(s(u.buffer,h,l),u.version=h.version)}return{get:o,remove:a,update:c}}class Ao extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),h=a+1,l=c+1,u=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<l;d++){const y=d*f-o;for(let v=0;v<h;v++){const b=v*u-s;g.push(b,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const v=y+h*d,b=y+h*(d+1),M=y+1+h*(d+1),S=y+1+h*d;p.push(v,b,S),p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp="vec3 transformed = vec3( position );",Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Om=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,v0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,st={alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Tp,alphatest_pars_fragment:Pp,aomap_fragment:Fp,aomap_pars_fragment:Lp,begin_vertex:Rp,beginnormal_vertex:Ip,bsdfs:Np,iridescence_fragment:Bp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Op,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:jp,common:qp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:Qp,emissivemap_pars_fragment:$p,encodings_fragment:Jp,encodings_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:sm,fog_vertex:om,fog_pars_vertex:am,fog_fragment:um,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_fragment:fm,lightmap_pars_fragment:hm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:xm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:wm,lights_fragment_begin:bm,lights_fragment_maps:Dm,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Tm,map_fragment:Pm,map_pars_fragment:Fm,map_particle_fragment:Lm,map_particle_pars_fragment:Rm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Nm,morphcolor_vertex:Bm,morphnormal_vertex:Um,morphtarget_pars_vertex:Om,morphtarget_vertex:zm,normal_fragment_begin:km,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Vm,normal_vertex:Wm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:Zm,output_fragment:Km,packing:Qm,premultiplied_alpha_fragment:$m,project_vertex:Jm,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:s0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:u0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:f0,specularmap_fragment:h0,specularmap_pars_fragment:d0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:v0,uv_pars_vertex:x0,uv_vertex:y0,worldpos_vertex:M0,background_vert:w0,background_frag:b0,backgroundCube_vert:D0,backgroundCube_frag:S0,cube_vert:E0,cube_frag:A0,depth_vert:C0,depth_frag:T0,distanceRGBA_vert:P0,distanceRGBA_frag:F0,equirect_vert:L0,equirect_frag:R0,linedashed_vert:I0,linedashed_frag:N0,meshbasic_vert:B0,meshbasic_frag:U0,meshlambert_vert:O0,meshlambert_frag:z0,meshmatcap_vert:k0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:j0,meshphysical_vert:q0,meshphysical_frag:X0,meshtoon_vert:Y0,meshtoon_frag:Z0,points_vert:K0,points_frag:Q0,shadow_vert:$0,shadow_frag:J0,sprite_vert:eg,sprite_frag:tg},we={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}}},hi={basic:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:gn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:gn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:gn([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:gn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:gn([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:gn([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:gn([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:gn([we.lights,we.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};hi.physical={uniforms:gn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Zs={r:0,b:0,g:0};function ng(i,e,t,n,r,s,o){const a=new dt(0);let c=s===!0?0:1,h,l,u=null,f=0,p=null;function g(m,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?_(a,c):v&&v.isColor&&(_(v,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Do)?(l===void 0&&(l=new De(new Gt(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:jr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=v.encoding!==Ct,(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new De(new Ao(2,2),new Pi({name:"BackgroundMaterial",uniforms:jr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=v.encoding!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,d){m.getRGB(Zs,Wf(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function ig(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let h=c,l=!1;function u(H,G,K,U,Q){let J=!1;if(o){const fe=_(U,K,G);h!==fe&&(h=fe,p(h.object)),J=d(H,U,K,Q),J&&y(H,U,K,Q)}else{const fe=G.wireframe===!0;(h.geometry!==U.id||h.program!==K.id||h.wireframe!==fe)&&(h.geometry=U.id,h.program=K.id,h.wireframe=fe,J=!0)}Q!==null&&t.update(Q,34963),(J||l)&&(l=!1,E(H,G,K,U),Q!==null&&i.bindBuffer(34963,t.get(Q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(H){return n.isWebGL2?i.bindVertexArray(H):s.bindVertexArrayOES(H)}function g(H){return n.isWebGL2?i.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function _(H,G,K){const U=K.wireframe===!0;let Q=a[H.id];Q===void 0&&(Q={},a[H.id]=Q);let J=Q[G.id];J===void 0&&(J={},Q[G.id]=J);let fe=J[U];return fe===void 0&&(fe=m(f()),J[U]=fe),fe}function m(H){const G=[],K=[],U=[];for(let Q=0;Q<r;Q++)G[Q]=0,K[Q]=0,U[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:U,object:H,attributes:{},index:null}}function d(H,G,K,U){const Q=h.attributes,J=G.attributes;let fe=0;const re=K.getAttributes();for(const ve in re)if(re[ve].location>=0){const ue=Q[ve];let _e=J[ve];if(_e===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(_e=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(_e=H.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;fe++}return h.attributesNum!==fe||h.index!==U}function y(H,G,K,U){const Q={},J=G.attributes;let fe=0;const re=K.getAttributes();for(const ve in re)if(re[ve].location>=0){let ue=J[ve];ue===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),Q[ve]=_e,fe++}h.attributes=Q,h.attributesNum=fe,h.index=U}function v(){const H=h.newAttributes;for(let G=0,K=H.length;G<K;G++)H[G]=0}function b(H){M(H,0)}function M(H,G){const K=h.newAttributes,U=h.enabledAttributes,Q=h.attributeDivisors;K[H]=1,U[H]===0&&(i.enableVertexAttribArray(H),U[H]=1),Q[H]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),Q[H]=G)}function S(){const H=h.newAttributes,G=h.enabledAttributes;for(let K=0,U=G.length;K<U;K++)G[K]!==H[K]&&(i.disableVertexAttribArray(K),G[K]=0)}function P(H,G,K,U,Q,J){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(H,G,K,Q,J):i.vertexAttribPointer(H,G,K,U,Q,J)}function E(H,G,K,U){if(n.isWebGL2===!1&&(H.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Q=U.attributes,J=K.getAttributes(),fe=G.defaultAttributeValues;for(const re in J){const ve=J[re];if(ve.location>=0){let ee=Q[re];if(ee===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),ee!==void 0){const ue=ee.normalized,_e=ee.itemSize,te=t.get(ee);if(te===void 0)continue;const V=te.buffer,ke=te.type,Re=te.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ge=ee.data,Ne=ge.stride,at=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ve.locationSize;Fe++)M(ve.location+Fe,ge.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<ve.locationSize;Fe++)b(ve.location+Fe);i.bindBuffer(34962,V);for(let Fe=0;Fe<ve.locationSize;Fe++)P(ve.location+Fe,_e/ve.locationSize,ke,ue,Ne*Re,(at+_e/ve.locationSize*Fe)*Re)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<ve.locationSize;ge++)M(ve.location+ge,ee.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<ve.locationSize;ge++)b(ve.location+ge);i.bindBuffer(34962,V);for(let ge=0;ge<ve.locationSize;ge++)P(ve.location+ge,_e/ve.locationSize,ke,ue,_e*Re,_e/ve.locationSize*ge*Re)}}else if(fe!==void 0){const ue=fe[re];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(ve.location,ue);break;case 3:i.vertexAttrib3fv(ve.location,ue);break;case 4:i.vertexAttrib4fv(ve.location,ue);break;default:i.vertexAttrib1fv(ve.location,ue)}}}}S()}function w(){W();for(const H in a){const G=a[H];for(const K in G){const U=G[K];for(const Q in U)g(U[Q].object),delete U[Q];delete G[K]}delete a[H]}}function D(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const K in G){const U=G[K];for(const Q in U)g(U[Q].object),delete U[Q];delete G[K]}delete a[H.id]}function N(H){for(const G in a){const K=a[G];if(K[H.id]===void 0)continue;const U=K[H.id];for(const Q in U)g(U[Q].object),delete U[Q];delete K[H.id]}}function W(){B(),l=!0,h!==c&&(h=c,p(h.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:b,disableUnusedAttributes:S}}function rg(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,l){i.drawArrays(s,h,l),t.update(l,s,1)}function c(h,l,u){if(u===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,h,l,u),t.update(l,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function sg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),m=i.getParameter(36347),d=i.getParameter(36348),y=i.getParameter(36349),v=f>0,b=o||e.has("OES_texture_float"),M=v&&b,S=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:S}}function og(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Qi,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=l(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?l(null):h();else{const y=s?0:n,v=y*4;let b=d.clippingState||null;c.value=b,b=l(g,f,v,p);for(let M=0;M!==v;++M)b[M]=t[M];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,b=p;v!==_;++v,b+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ag(i){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=Gr:a===Aa&&(o.mapping=Vr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ea||a===Aa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new bp(c.height/2);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class au extends su{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,ml=[.125,.215,.35,.446,.526,.582],er=20,ua=new au,gl=new dt;let la=null;const $i=(1+Math.sqrt(5))/2,Tr=1/$i,_l=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,$i,Tr),new I(0,$i,-Tr),new I(Tr,0,$i),new I(-Tr,0,$i),new I($i,Tr,0),new I(-$i,Tr,0)];class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){la=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la),e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ms,format:ei,encoding:Vi,depthBuffer:!1},r=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(s)),this._blurMaterial=lg(s,e,t)}return r}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,r){const a=new Ln(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(gl),l.toneMapping=mi,l.autoClear=!1;const p=new Eo({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new De(new Gt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(gl),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(h[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,h[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,h[d]));const v=this._cubeSize;Ks(r,y*v,d>2?v:0,v,v),l.setRenderTarget(r),_&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gr||e.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ks(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_l[(r-1)%_l.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new De(this._lodPlanes[r],h),f=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*er-1),_=s/g,m=isFinite(s)?1+Math.floor(l*_):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const d=[];let y=0;for(let P=0;P<er;++P){const E=P/_,w=Math.exp(-E*E/2);d.push(w),P===0?y+=w:P<m&&(y+=2*w)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const b=this._sizeLods[r],M=3*b*(r>v-Lr?r-v+Lr:0),S=4*(this._cubeSize-b);Ks(t,M,S,3*b,2*b),c.setRenderTarget(t),c.render(u,ua)}}function ug(i){const e=[],t=[],n=[];let r=i;const s=i-Lr+1+ml.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Lr?c=ml[o-i+Lr-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let S=0;S<p;S++){const P=S%3*2/3-1,E=S>2?0:-1,w=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];y.set(w,_*g*S),v.set(f,m*g*S);const D=[S,S,S,S,S,S];b.set(D,d*g*S)}const M=new nn;M.setAttribute("position",new Vn(y,_)),M.setAttribute("uv",new Vn(v,m)),M.setAttribute("faceIndex",new Vn(b,d)),e.push(M),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lg(i,e,t){const n=new Float32Array(er),r=new I(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function yl(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ml(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Ea||c===Aa,l=c===Gr||c===Vr;if(h||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new vl(i)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(h&&u&&u.height>0||l&&u&&r(u)){t===null&&(t=new vl(i));const f=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function s(a){const c=a.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hg(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],34962)}}function h(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,b=y.length;v<b;v+=3){const M=y[v+0],S=y[v+1],P=y[v+2];f.push(M,S,S,P,P,M)}}else{const y=g.array;_=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const M=v+0,S=v+1,P=v+2;f.push(M,S,S,P,P,M)}}const m=new(Uf(f)?Vf:Gf)(f,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function l(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function dg(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,c;function h(f){a=f.type,c=f.bytesPerElement}function l(f,p){i.drawElements(s,p,a,f*c),t.update(p,s,1)}function u(f,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=h,this.render=l,this.renderInstances=u}function pg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mg(i,e){return i[0]-e[0]}function gg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _g(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Qt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,l,u){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(l);if(_===void 0||_.count!==g){let H=function(){W.dispose(),s.delete(l),l.removeEventListener("dispose",H)};_!==void 0&&_.texture.dispose();const y=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],P=l.morphAttributes.color||[];let E=0;y===!0&&(E=1),v===!0&&(E=2),b===!0&&(E=3);let w=l.attributes.position.count*E,D=1;w>e.maxTextureSize&&(D=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*D*4*g),W=new kf(N,w,D,g);W.type=rr,W.needsUpdate=!0;const B=E*4;for(let G=0;G<g;G++){const K=M[G],U=S[G],Q=P[G],J=w*D*4*G;for(let fe=0;fe<K.count;fe++){const re=fe*B;y===!0&&(o.fromBufferAttribute(K,fe),N[J+re+0]=o.x,N[J+re+1]=o.y,N[J+re+2]=o.z,N[J+re+3]=0),v===!0&&(o.fromBufferAttribute(U,fe),N[J+re+4]=o.x,N[J+re+5]=o.y,N[J+re+6]=o.z,N[J+re+7]=0),b===!0&&(o.fromBufferAttribute(Q,fe),N[J+re+8]=o.x,N[J+re+9]=o.y,N[J+re+10]=o.z,N[J+re+11]=Q.itemSize===4?o.w:1)}}_={count:g,texture:W,size:new Ke(w,D)},s.set(l,_),l.addEventListener("dispose",H)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const d=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let g=n[l.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[l.id]=g}for(let v=0;v<p;v++){const b=g[v];b[0]=v,b[1]=f[v]}g.sort(gg);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mg);const _=l.morphAttributes.position,m=l.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const b=a[v],M=b[0],S=b[1];M!==Number.MAX_SAFE_INTEGER&&S?(_&&l.getAttribute("morphTarget"+v)!==_[M]&&l.setAttribute("morphTarget"+v,_[M]),m&&l.getAttribute("morphNormal"+v)!==m[M]&&l.setAttribute("morphNormal"+v,m[M]),r[v]=S,d+=S):(_&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),m&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),r[v]=0)}const y=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function vg(i,e,t,n){let r=new WeakMap;function s(c){const h=n.render.frame,l=c.geometry,u=e.get(c,l);return r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const Yf=new Dn,Zf=new kf,Kf=new up,Qf=new qf,wl=[],bl=[],Dl=new Float32Array(16),Sl=new Float32Array(9),El=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wl[r];if(s===void 0&&(s=new Float32Array(r),wl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Co(i,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),Yt(t,n)}}function Dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Sl.set(n),i.uniformMatrix3fv(this.addr,!1,Sl),Yt(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),Yt(t,n)}}function Eg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Yf,r)}function Ng(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Kf,r)}function Bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qf,r)}function Ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zf,r)}function Og(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return wg;case 35674:return bg;case 35675:return Dg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Tg;case 5125:return Pg;case 36294:return Fg;case 36295:return Lg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Ug}}function zg(i,e){i.uniform1fv(this.addr,e)}function kg(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Hg(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function Gg(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function Vg(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wg(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jg(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function Qg(i,e){i.uniform2uiv(this.addr,e)}function $g(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function e_(i,e,t){const n=this.cache,r=e.length,s=Co(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Yf,s[o])}function t_(i,e,t){const n=this.cache,r=e.length,s=Co(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Kf,s[o])}function n_(i,e,t){const n=this.cache,r=e.length,s=Co(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qf,s[o])}function i_(i,e,t){const n=this.cache,r=e.length,s=Co(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zf,s[o])}function r_(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return jg;case 5124:case 35670:return qg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Qg;case 36295:return $g;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Og(t.type)}}class o_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=r_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Al(i,e){i.seq.push(e),i.map[e.id]=e}function u_(i,e,t){const n=i.name,r=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),o=ca.lastIndex;let a=s[1];const c=s[2]==="]",h=s[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===r){Al(t,h===void 0?new s_(a,i,e):new o_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new a_(a),Al(t,u)),t=u}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);u_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let l_=0;function c_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function f_(i){switch(i){case Vi:return["Linear","( value )"];case Ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Tl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(e),o)}else return r}function h_(i,e){const t=f_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function d_(i,e){let t;switch(e){case Td:t="Linear";break;case Pd:t="Reinhard";break;case Fd:t="OptimizedCineon";break;case Lf:t="ACESFilmic";break;case Ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function p_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function m_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ls(i){return i!==""}function Pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(__,v_)}function v_(i,e){const t=st[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return La(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(x_,y_)}function y_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function w_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gr:case Vr:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function D_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function S_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=M_(t),h=w_(t),l=b_(t),u=D_(t),f=S_(t),p=t.isWebGL2?"":p_(t),g=m_(s),_=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ls).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(ls).join(`
`),d.length>0&&(d+=`
`)):(m=[Rl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),d=[p,Rl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?st.tonemapping_pars_fragment:"",t.toneMapping!==mi?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,h_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),o=La(o),o=Pl(o,t),o=Fl(o,t),a=La(a),a=Pl(a,t),a=Fl(a,t),o=Ll(o),a=Ll(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=y+m+o,b=y+d+a,M=Cl(r,35633,v),S=Cl(r,35632,b);if(r.attachShader(_,M),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(M).trim(),N=r.getShaderInfoLog(S).trim();let W=!0,B=!0;if(r.getProgramParameter(_,35714)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,S);else{const H=Tl(r,M,"vertex"),G=Tl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+w+`
`+H+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||N==="")&&(B=!1);B&&(this.diagnostics={runnable:W,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:d}})}r.deleteShader(M),r.deleteShader(S);let P;this.getUniforms=function(){return P===void 0&&(P=new so(r,_)),P};let E;return this.getAttributes=function(){return E===void 0&&(E=g_(r,_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}let A_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T_(e),t.set(e,n)),n}}class T_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function P_(i,e,t,n,r,s,o){const a=new ru,c=new C_,h=[],l=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===1?"uv2":"uv"}function m(w,D,N,W,B){const H=W.fog,G=B.geometry,K=w.isMeshStandardMaterial?W.environment:null,U=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),Q=U&&U.mapping===Do?U.image.height:null,J=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=fe!==void 0?fe.length:0;let ve=0;G.morphAttributes.position!==void 0&&(ve=1),G.morphAttributes.normal!==void 0&&(ve=2),G.morphAttributes.color!==void 0&&(ve=3);let ee,ue,_e,te;if(J){const me=hi[J];ee=me.vertexShader,ue=me.fragmentShader}else ee=w.vertexShader,ue=w.fragmentShader,c.update(w),_e=c.getVertexShaderID(w),te=c.getFragmentShaderID(w);const V=i.getRenderTarget(),ke=B.isInstancedMesh===!0,Re=!!w.map,ge=!!w.matcap,Ne=!!U,at=!!w.aoMap,Fe=!!w.lightMap,ze=!!w.bumpMap,ct=!!w.normalMap,_t=!!w.displacementMap,bt=!!w.emissiveMap,ft=!!w.metalnessMap,ot=!!w.roughnessMap,ht=w.clearcoat>0,Tt=w.iridescence>0,F=w.sheen>0,x=w.transmission>0,A=ht&&!!w.clearcoatMap,R=ht&&!!w.clearcoatNormalMap,O=ht&&!!w.clearcoatRoughnessMap,j=Tt&&!!w.iridescenceMap,T=Tt&&!!w.iridescenceThicknessMap,k=F&&!!w.sheenColorMap,L=F&&!!w.sheenRoughnessMap,q=!!w.specularMap,ae=!!w.specularColorMap,he=!!w.specularIntensityMap,Z=x&&!!w.transmissionMap,Me=x&&!!w.thicknessMap,Ce=!!w.gradientMap,Le=!!w.alphaMap,Ze=w.alphaTest>0,z=!!w.extensions,$=!!G.attributes.uv2;return{isWebGL2:l,shaderID:J,shaderName:w.type,vertexShader:ee,fragmentShader:ue,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:ke,instancingColor:ke&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?i.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Vi,map:Re,matcap:ge,envMap:Ne,envMapMode:Ne&&U.mapping,envMapCubeUVHeight:Q,aoMap:at,lightMap:Fe,bumpMap:ze,normalMap:ct,displacementMap:f&&_t,emissiveMap:bt,normalMapObjectSpace:ct&&w.normalMapType===Qd,normalMapTangentSpace:ct&&w.normalMapType===Nf,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&w.map.encoding===Ct,metalnessMap:ft,roughnessMap:ot,clearcoat:ht,clearcoatMap:A,clearcoatNormalMap:R,clearcoatRoughnessMap:O,iridescence:Tt,iridescenceMap:j,iridescenceThicknessMap:T,sheen:F,sheenColorMap:k,sheenRoughnessMap:L,specularMap:q,specularColorMap:ae,specularIntensityMap:he,transmission:x,transmissionMap:Z,thicknessMap:Me,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Ur,alphaMap:Le,alphaTest:Ze,combine:w.combine,mapUv:Re&&_(w.map.channel),aoMapUv:at&&_(w.aoMap.channel),lightMapUv:Fe&&_(w.lightMap.channel),bumpMapUv:ze&&_(w.bumpMap.channel),normalMapUv:ct&&_(w.normalMap.channel),displacementMapUv:_t&&_(w.displacementMap.channel),emissiveMapUv:bt&&_(w.emissiveMap.channel),metalnessMapUv:ft&&_(w.metalnessMap.channel),roughnessMapUv:ot&&_(w.roughnessMap.channel),clearcoatMapUv:A&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:R&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:T&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:k&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(w.sheenRoughnessMap.channel),specularMapUv:q&&_(w.specularMap.channel),specularColorMapUv:ae&&_(w.specularColorMap.channel),specularIntensityMapUv:he&&_(w.specularIntensityMap.channel),transmissionMapUv:Z&&_(w.transmissionMap.channel),thicknessMapUv:Me&&_(w.thicknessMap.channel),alphaMapUv:Le&&_(w.alphaMap.channel),vertexTangents:ct&&!!G.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs2:$,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Re||Le),fog:!!H,useFog:w.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:w.toneMapped?i.toneMapping:mi,useLegacyLights:i.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$n,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:z&&w.extensions.derivatives===!0,extensionFragDepth:z&&w.extensions.fragDepth===!0,extensionDrawBuffers:z&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)D.push(N),D.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(D,w),v(D,w),D.push(i.outputEncoding)),D.push(w.customProgramCacheKey),D.join()}function y(w,D){w.push(D.precision),w.push(D.outputEncoding),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function v(w,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUvs2&&a.enable(13),D.vertexTangents&&a.enable(14),w.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.decodeVideoTexture&&a.enable(17),D.opaque&&a.enable(18),D.pointsUvs&&a.enable(19),w.push(a.mask)}function b(w){const D=g[w.type];let N;if(D){const W=hi[D];N=jf.clone(W.uniforms)}else N=w.uniforms;return N}function M(w,D){let N;for(let W=0,B=h.length;W<B;W++){const H=h[W];if(H.cacheKey===D){N=H,++N.usedTimes;break}}return N===void 0&&(N=new E_(i,D,w,s),h.push(N)),N}function S(w){if(--w.usedTimes===0){const D=h.indexOf(w);h[D]=h[h.length-1],h.pop(),w.destroy()}}function P(w){c.remove(w)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:S,releaseShaderCache:P,programs:h,dispose:E}}function F_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function h(u,f){t.length>1&&t.sort(u||L_),n.length>1&&n.sort(f||Il),r.length>1&&r.sort(f||Il)}function l(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:l,sort:h}}function R_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Nl,i.set(n,[o])):r>=s.length?(o=new Nl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function I_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new dt};break;case"SpotLight":t={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let B_=0;function U_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O_(i,e){const t=new I_,n=N_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new I);const s=new I,o=new Bt,a=new Bt;function c(l,u){let f=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,m=0,d=0,y=0,v=0,b=0,M=0,S=0,P=0,E=0;l.sort(U_);const w=u===!0?Math.PI:1;for(let N=0,W=l.length;N<W;N++){const B=l[N],H=B.color,G=B.intensity,K=B.distance,U=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=H.r*G*w,p+=H.g*G*w,g+=H.b*G*w;else if(B.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(B.sh.coefficients[Q],G);else if(B.isDirectionalLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*w),B.castShadow){const J=B.shadow,fe=n.get(B);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,r.directionalShadow[_]=fe,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=B.shadow.matrix,b++}r.directional[_]=Q,_++}else if(B.isSpotLight){const Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(H).multiplyScalar(G*w),Q.distance=K,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,r.spot[d]=Q;const J=B.shadow;if(B.map&&(r.spotLightMap[P]=B.map,P++,J.updateMatrices(B),B.castShadow&&E++),r.spotLightMatrix[d]=J.matrix,B.castShadow){const fe=n.get(B);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,r.spotShadow[d]=fe,r.spotShadowMap[d]=U,S++}d++}else if(B.isRectAreaLight){const Q=t.get(B);Q.color.copy(H).multiplyScalar(G),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=Q,y++}else if(B.isPointLight){const Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*w),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const J=B.shadow,fe=n.get(B);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,fe.shadowCameraNear=J.camera.near,fe.shadowCameraFar=J.camera.far,r.pointShadow[m]=fe,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=B.shadow.matrix,M++}r.point[m]=Q,m++}else if(B.isHemisphereLight){const Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(G*w),Q.groundColor.copy(B.groundColor).multiplyScalar(G*w),r.hemi[v]=Q,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==d||D.rectAreaLength!==y||D.hemiLength!==v||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=S+P-E,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=E,D.directionalLength=_,D.pointLength=m,D.spotLength=d,D.rectAreaLength=y,D.hemiLength=v,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=P,r.version=B_++)}function h(l,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let y=0,v=l.length;y<v;y++){const b=l[y];if(b.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(b.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:c,setupView:h,state:r}}function Bl(i,e){const t=new O_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function c(u){t.setup(n,u)}function h(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function z_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Bl(i,e),t.set(s,[c])):o>=a.length?(c=new Bl(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class k_ extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W_(i,e,t){let n=new ou;const r=new Ke,s=new Ke,o=new Qt,a=new k_({depthPacking:Kd}),c=new H_,h={},l=t.maxTextureSize,u={[Gi]:bn,[bn]:Gi,[$n]:$n},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:G_,fragmentShader:V_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Af,this.render=function(b,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Hi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let N=0,W=b.length;N<W;N++){const B=b[N],H=B.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const G=H.getFrameExtents();if(r.multiply(G),s.copy(H.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/G.x),r.x=s.x*G.x,H.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/G.y),r.y=s.y*G.y,H.mapSize.y=s.y)),H.map===null){const U=this.type!==us?{minFilter:_n,magFilter:_n}:{};H.map=new Wi(r.x,r.y,U),H.map.texture.name=B.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const K=H.getViewportCount();for(let U=0;U<K;U++){const Q=H.getViewport(U);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),D.viewport(o),H.updateMatrices(B,U),n=H.getFrustum(),v(M,S,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===us&&d(H,S),H.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(P,E,w)};function d(b,M){const S=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,S,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,S,p,_,null)}function y(b,M,S,P){let E=null;const w=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)E=w;else if(E=S.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=E.uuid,N=M.uuid;let W=h[D];W===void 0&&(W={},h[D]=W);let B=W[N];B===void 0&&(B=E.clone(),W[N]=B),E=B}if(E.visible=M.visible,E.wireframe=M.wireframe,P===us?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:u[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=i.properties.get(E);D.light=S}return E}function v(b,M,S,P,E){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===us)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const N=e.update(b),W=b.material;if(Array.isArray(W)){const B=N.groups;for(let H=0,G=B.length;H<G;H++){const K=B[H],U=W[K.materialIndex];if(U&&U.visible){const Q=y(b,U,P,E);i.renderBufferDirect(S,null,N,Q,b,K)}}}else if(W.visible){const B=y(b,W,P,E);i.renderBufferDirect(S,null,N,B,b,null)}}const D=b.children;for(let N=0,W=D.length;N<W;N++)v(D[N],M,S,P,E)}}function j_(i,e,t){const n=t.isWebGL2;function r(){let z=!1;const $=new Qt;let se=null;const me=new Qt(0,0,0,0);return{setMask:function(xe){se!==xe&&!z&&(i.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ut,Ue,pt,mt){mt===!0&&(xe*=pt,ut*=pt,Ue*=pt),$.set(xe,ut,Ue,pt),me.equals($)===!1&&(i.clearColor(xe,ut,Ue,pt),me.copy($))},reset:function(){z=!1,se=null,me.set(-1,0,0,0)}}}function s(){let z=!1,$=null,se=null,me=null;return{setTest:function(xe){xe?V(2929):ke(2929)},setMask:function(xe){$!==xe&&!z&&(i.depthMask(xe),$=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case yd:i.depthFunc(512);break;case Md:i.depthFunc(519);break;case wd:i.depthFunc(513);break;case Sa:i.depthFunc(515);break;case bd:i.depthFunc(514);break;case Dd:i.depthFunc(518);break;case Sd:i.depthFunc(516);break;case Ed:i.depthFunc(517);break;default:i.depthFunc(515)}se=xe}},setLocked:function(xe){z=xe},setClear:function(xe){me!==xe&&(i.clearDepth(xe),me=xe)},reset:function(){z=!1,$=null,se=null,me=null}}}function o(){let z=!1,$=null,se=null,me=null,xe=null,ut=null,Ue=null,pt=null,mt=null;return{setTest:function(Qe){z||(Qe?V(2960):ke(2960))},setMask:function(Qe){$!==Qe&&!z&&(i.stencilMask(Qe),$=Qe)},setFunc:function(Qe,zt,vt){(se!==Qe||me!==zt||xe!==vt)&&(i.stencilFunc(Qe,zt,vt),se=Qe,me=zt,xe=vt)},setOp:function(Qe,zt,vt){(ut!==Qe||Ue!==zt||pt!==vt)&&(i.stencilOp(Qe,zt,vt),ut=Qe,Ue=zt,pt=vt)},setLocked:function(Qe){z=Qe},setClear:function(Qe){mt!==Qe&&(i.clearStencil(Qe),mt=Qe)},reset:function(){z=!1,$=null,se=null,me=null,xe=null,ut=null,Ue=null,pt=null,mt=null}}}const a=new r,c=new s,h=new o,l=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,v=null,b=null,M=null,S=null,P=null,E=null,w=!1,D=null,N=null,W=null,B=null,H=null;const G=i.getParameter(35661);let K=!1,U=0;const Q=i.getParameter(7938);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=U>=2);let J=null,fe={};const re=i.getParameter(3088),ve=i.getParameter(2978),ee=new Qt().fromArray(re),ue=new Qt().fromArray(ve);function _e(z,$,se){const me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(z,xe),i.texParameteri(z,10241,9728),i.texParameteri(z,10240,9728);for(let ut=0;ut<se;ut++)i.texImage2D($+ut,0,6408,1,1,0,6408,5121,me);return xe}const te={};te[3553]=_e(3553,3553,1),te[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),V(2929),c.setFunc(Sa),_t(!1),bt(wu),V(2884),ze(Hi);function V(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function ke(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Re(z,$){return p[z]!==$?(i.bindFramebuffer(z,$),p[z]=$,n&&(z===36009&&(p[36160]=$),z===36160&&(p[36009]=$)),!0):!1}function ge(z,$){let se=_,me=!1;if(z)if(se=g.get($),se===void 0&&(se=[],g.set($,se)),z.isWebGLMultipleRenderTargets){const xe=z.texture;if(se.length!==xe.length||se[0]!==36064){for(let ut=0,Ue=xe.length;ut<Ue;ut++)se[ut]=36064+ut;se.length=xe.length,me=!0}}else se[0]!==36064&&(se[0]=36064,me=!0);else se[0]!==1029&&(se[0]=1029,me=!0);me&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ne(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const at={[Fr]:32774,[ld]:32778,[cd]:32779};if(n)at[Eu]=32775,at[Au]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(at[Eu]=z.MIN_EXT,at[Au]=z.MAX_EXT)}const Fe={[fd]:0,[hd]:1,[dd]:768,[Tf]:770,[xd]:776,[_d]:774,[md]:772,[pd]:769,[Pf]:771,[vd]:775,[gd]:773};function ze(z,$,se,me,xe,ut,Ue,pt){if(z===Hi){d===!0&&(ke(3042),d=!1);return}if(d===!1&&(V(3042),d=!0),z!==ud){if(z!==y||pt!==w){if((v!==Fr||S!==Fr)&&(i.blendEquation(32774),v=Fr,S=Fr),pt)switch(z){case Ur:i.blendFuncSeparate(1,771,1,771);break;case bu:i.blendFunc(1,1);break;case Du:i.blendFuncSeparate(0,769,0,1);break;case Su:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ur:i.blendFuncSeparate(770,771,1,771);break;case bu:i.blendFunc(770,1);break;case Du:i.blendFuncSeparate(0,769,0,1);break;case Su:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,M=null,P=null,E=null,y=z,w=pt}return}xe=xe||$,ut=ut||se,Ue=Ue||me,($!==v||xe!==S)&&(i.blendEquationSeparate(at[$],at[xe]),v=$,S=xe),(se!==b||me!==M||ut!==P||Ue!==E)&&(i.blendFuncSeparate(Fe[se],Fe[me],Fe[ut],Fe[Ue]),b=se,M=me,P=ut,E=Ue),y=z,w=!1}function ct(z,$){z.side===$n?ke(2884):V(2884);let se=z.side===bn;$&&(se=!se),_t(se),z.blending===Ur&&z.transparent===!1?ze(Hi):ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),a.setMask(z.colorWrite);const me=z.stencilWrite;h.setTest(me),me&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ot(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?V(32926):ke(32926)}function _t(z){D!==z&&(z?i.frontFace(2304):i.frontFace(2305),D=z)}function bt(z){z!==od?(V(2884),z!==N&&(z===wu?i.cullFace(1029):z===ad?i.cullFace(1028):i.cullFace(1032))):ke(2884),N=z}function ft(z){z!==W&&(K&&i.lineWidth(z),W=z)}function ot(z,$,se){z?(V(32823),(B!==$||H!==se)&&(i.polygonOffset($,se),B=$,H=se)):ke(32823)}function ht(z){z?V(3089):ke(3089)}function Tt(z){z===void 0&&(z=33984+G-1),J!==z&&(i.activeTexture(z),J=z)}function F(z,$,se){se===void 0&&(J===null?se=33984+G-1:se=J);let me=fe[se];me===void 0&&(me={type:void 0,texture:void 0},fe[se]=me),(me.type!==z||me.texture!==$)&&(J!==se&&(i.activeTexture(se),J=se),i.bindTexture(z,$||te[z]),me.type=z,me.texture=$)}function x(){const z=fe[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function T(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(z){ee.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function Me(z){ue.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ue.copy(z))}function Ce(z,$){let se=u.get($);se===void 0&&(se=new WeakMap,u.set($,se));let me=se.get(z);me===void 0&&(me=i.getUniformBlockIndex($,z.name),se.set(z,me))}function Le(z,$){const me=u.get($).get(z);l.get($)!==me&&(i.uniformBlockBinding($,me,z.__bindingPointIndex),l.set($,me))}function Ze(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,fe={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,v=null,b=null,M=null,S=null,P=null,E=null,w=!1,D=null,N=null,W=null,B=null,H=null,ee.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:V,disable:ke,bindFramebuffer:Re,drawBuffers:ge,useProgram:Ne,setBlending:ze,setMaterial:ct,setFlipSided:_t,setCullFace:bt,setLineWidth:ft,setPolygonOffset:ot,setScissorTest:ht,activeTexture:Tt,bindTexture:F,unbindTexture:x,compressedTexImage2D:A,compressedTexImage3D:R,texImage2D:ae,texImage3D:he,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:L,texStorage3D:q,texSubImage2D:O,texSubImage3D:j,compressedTexSubImage2D:T,compressedTexSubImage3D:k,scissor:Z,viewport:Me,reset:Ze}}function q_(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,h=r.maxCubemapSize,l=r.maxTextureSize,u=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,x){return d?new OffscreenCanvas(F,x):_s("canvas")}function v(F,x,A,R){let O=1;if((F.width>R||F.height>R)&&(O=R/Math.max(F.width,F.height)),O<1||x===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const j=x?ep:Math.floor,T=j(O*F.width),k=j(O*F.height);_===void 0&&(_=y(T,k));const L=A?y(T,k):_;return L.width=T,L.height=k,L.getContext("2d").drawImage(F,0,0,T,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+T+"x"+k+")."),L}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function b(F){return el(F.width)&&el(F.height)}function M(F){return a?!1:F.wrapS!==Jn||F.wrapT!==Jn||F.minFilter!==_n&&F.minFilter!==zn}function S(F,x){return F.generateMipmaps&&x&&F.minFilter!==_n&&F.minFilter!==zn}function P(F){i.generateMipmap(F)}function E(F,x,A,R,O=!1){if(a===!1)return x;if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let j=x;return x===6403&&(A===5126&&(j=33326),A===5131&&(j=33325),A===5121&&(j=33321)),x===33319&&(A===5126&&(j=33328),A===5131&&(j=33327),A===5121&&(j=33323)),x===6408&&(A===5126&&(j=34836),A===5131&&(j=34842),A===5121&&(j=R===Ct&&O===!1?35907:32856),A===32819&&(j=32854),A===32820&&(j=32855)),(j===33325||j===33326||j===33327||j===33328||j===34842||j===34836)&&e.get("EXT_color_buffer_float"),j}function w(F,x,A){return S(F,A)===!0||F.isFramebufferTexture&&F.minFilter!==_n&&F.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?x.mipmaps.length:1}function D(F){return F===_n||F===Cu||F===Bo?9728:9729}function N(F){const x=F.target;x.removeEventListener("dispose",N),B(x),x.isVideoTexture&&g.delete(x)}function W(F){const x=F.target;x.removeEventListener("dispose",W),G(x)}function B(F){const x=n.get(F);if(x.__webglInit===void 0)return;const A=F.source,R=m.get(A);if(R){const O=R[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&H(F),Object.keys(R).length===0&&m.delete(A)}n.remove(F)}function H(F){const x=n.get(F);i.deleteTexture(x.__webglTexture);const A=F.source,R=m.get(A);delete R[x.__cacheKey],o.memory.textures--}function G(F){const x=F.texture,A=n.get(F),R=n.get(x);if(R.__webglTexture!==void 0&&(i.deleteTexture(R.__webglTexture),o.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++)i.deleteFramebuffer(A.__webglFramebuffer[O]),A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[O]);else{if(i.deleteFramebuffer(A.__webglFramebuffer),A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let O=0;O<A.__webglColorRenderbuffer.length;O++)A.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[O]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let O=0,j=x.length;O<j;O++){const T=n.get(x[O]);T.__webglTexture&&(i.deleteTexture(T.__webglTexture),o.memory.textures--),n.remove(x[O])}n.remove(x),n.remove(F)}let K=0;function U(){K=0}function Q(){const F=K;return F>=c&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+c),K+=1,F}function J(F){const x=[];return x.push(F.wrapS),x.push(F.wrapT),x.push(F.wrapR||0),x.push(F.magFilter),x.push(F.minFilter),x.push(F.anisotropy),x.push(F.internalFormat),x.push(F.format),x.push(F.type),x.push(F.generateMipmaps),x.push(F.premultiplyAlpha),x.push(F.flipY),x.push(F.unpackAlignment),x.push(F.encoding),x.join()}function fe(F,x){const A=n.get(F);if(F.isVideoTexture&&ht(F),F.isRenderTargetTexture===!1&&F.version>0&&A.__version!==F.version){const R=F.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(A,F,x);return}}t.bindTexture(3553,A.__webglTexture,33984+x)}function re(F,x){const A=n.get(F);if(F.version>0&&A.__version!==F.version){ke(A,F,x);return}t.bindTexture(35866,A.__webglTexture,33984+x)}function ve(F,x){const A=n.get(F);if(F.version>0&&A.__version!==F.version){ke(A,F,x);return}t.bindTexture(32879,A.__webglTexture,33984+x)}function ee(F,x){const A=n.get(F);if(F.version>0&&A.__version!==F.version){Re(A,F,x);return}t.bindTexture(34067,A.__webglTexture,33984+x)}const ue={[Ca]:10497,[Jn]:33071,[Ta]:33648},_e={[_n]:9728,[Cu]:9984,[Bo]:9986,[zn]:9729,[Rd]:9985,[ps]:9987};function te(F,x,A){if(A?(i.texParameteri(F,10242,ue[x.wrapS]),i.texParameteri(F,10243,ue[x.wrapT]),(F===32879||F===35866)&&i.texParameteri(F,32882,ue[x.wrapR]),i.texParameteri(F,10240,_e[x.magFilter]),i.texParameteri(F,10241,_e[x.minFilter])):(i.texParameteri(F,10242,33071),i.texParameteri(F,10243,33071),(F===32879||F===35866)&&i.texParameteri(F,32882,33071),(x.wrapS!==Jn||x.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(F,10240,D(x.magFilter)),i.texParameteri(F,10241,D(x.minFilter)),x.minFilter!==_n&&x.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===_n||x.minFilter!==Bo&&x.minFilter!==ps||x.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(F,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function V(F,x){let A=!1;F.__webglInit===void 0&&(F.__webglInit=!0,x.addEventListener("dispose",N));const R=x.source;let O=m.get(R);O===void 0&&(O={},m.set(R,O));const j=J(x);if(j!==F.__cacheKey){O[j]===void 0&&(O[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),O[j].usedTimes++;const T=O[F.__cacheKey];T!==void 0&&(O[F.__cacheKey].usedTimes--,T.usedTimes===0&&H(x)),F.__cacheKey=j,F.__webglTexture=O[j].texture}return A}function ke(F,x,A){let R=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(R=35866),x.isData3DTexture&&(R=32879);const O=V(F,x),j=x.source;t.bindTexture(R,F.__webglTexture,33984+A);const T=n.get(j);if(j.version!==T.__version||O===!0){t.activeTexture(33984+A),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const k=M(x)&&b(x.image)===!1;let L=v(x.image,k,!1,l);L=Tt(x,L);const q=b(L)||a,ae=s.convert(x.format,x.encoding);let he=s.convert(x.type),Z=E(x.internalFormat,ae,he,x.encoding,x.isVideoTexture);te(R,x,q);let Me;const Ce=x.mipmaps,Le=a&&x.isVideoTexture!==!0,Ze=T.__version===void 0||O===!0,z=w(x,L,q);if(x.isDepthTexture)Z=6402,a?x.type===rr?Z=36012:x.type===ir?Z=33190:x.type===Or?Z=35056:Z=33189:x.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===or&&Z===6402&&x.type!==If&&x.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=ir,he=s.convert(x.type)),x.format===Wr&&Z===6402&&(Z=34041,x.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Or,he=s.convert(x.type))),Ze&&(Le?t.texStorage2D(3553,1,Z,L.width,L.height):t.texImage2D(3553,0,Z,L.width,L.height,0,ae,he,null));else if(x.isDataTexture)if(Ce.length>0&&q){Le&&Ze&&t.texStorage2D(3553,z,Z,Ce[0].width,Ce[0].height);for(let $=0,se=Ce.length;$<se;$++)Me=Ce[$],Le?t.texSubImage2D(3553,$,0,0,Me.width,Me.height,ae,he,Me.data):t.texImage2D(3553,$,Z,Me.width,Me.height,0,ae,he,Me.data);x.generateMipmaps=!1}else Le?(Ze&&t.texStorage2D(3553,z,Z,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,ae,he,L.data)):t.texImage2D(3553,0,Z,L.width,L.height,0,ae,he,L.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Ze&&t.texStorage3D(35866,z,Z,Ce[0].width,Ce[0].height,L.depth);for(let $=0,se=Ce.length;$<se;$++)Me=Ce[$],x.format!==ei?ae!==null?Le?t.compressedTexSubImage3D(35866,$,0,0,0,Me.width,Me.height,L.depth,ae,Me.data,0,0):t.compressedTexImage3D(35866,$,Z,Me.width,Me.height,L.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,$,0,0,0,Me.width,Me.height,L.depth,ae,he,Me.data):t.texImage3D(35866,$,Z,Me.width,Me.height,L.depth,0,ae,he,Me.data)}else{Le&&Ze&&t.texStorage2D(3553,z,Z,Ce[0].width,Ce[0].height);for(let $=0,se=Ce.length;$<se;$++)Me=Ce[$],x.format!==ei?ae!==null?Le?t.compressedTexSubImage2D(3553,$,0,0,Me.width,Me.height,ae,Me.data):t.compressedTexImage2D(3553,$,Z,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,$,0,0,Me.width,Me.height,ae,he,Me.data):t.texImage2D(3553,$,Z,Me.width,Me.height,0,ae,he,Me.data)}else if(x.isDataArrayTexture)Le?(Ze&&t.texStorage3D(35866,z,Z,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,ae,he,L.data)):t.texImage3D(35866,0,Z,L.width,L.height,L.depth,0,ae,he,L.data);else if(x.isData3DTexture)Le?(Ze&&t.texStorage3D(32879,z,Z,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,ae,he,L.data)):t.texImage3D(32879,0,Z,L.width,L.height,L.depth,0,ae,he,L.data);else if(x.isFramebufferTexture){if(Ze)if(Le)t.texStorage2D(3553,z,Z,L.width,L.height);else{let $=L.width,se=L.height;for(let me=0;me<z;me++)t.texImage2D(3553,me,Z,$,se,0,ae,he,null),$>>=1,se>>=1}}else if(Ce.length>0&&q){Le&&Ze&&t.texStorage2D(3553,z,Z,Ce[0].width,Ce[0].height);for(let $=0,se=Ce.length;$<se;$++)Me=Ce[$],Le?t.texSubImage2D(3553,$,0,0,ae,he,Me):t.texImage2D(3553,$,Z,ae,he,Me);x.generateMipmaps=!1}else Le?(Ze&&t.texStorage2D(3553,z,Z,L.width,L.height),t.texSubImage2D(3553,0,0,0,ae,he,L)):t.texImage2D(3553,0,Z,ae,he,L);S(x,q)&&P(R),T.__version=j.version,x.onUpdate&&x.onUpdate(x)}F.__version=x.version}function Re(F,x,A){if(x.image.length!==6)return;const R=V(F,x),O=x.source;t.bindTexture(34067,F.__webglTexture,33984+A);const j=n.get(O);if(O.version!==j.__version||R===!0){t.activeTexture(33984+A),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const T=x.isCompressedTexture||x.image[0].isCompressedTexture,k=x.image[0]&&x.image[0].isDataTexture,L=[];for(let $=0;$<6;$++)!T&&!k?L[$]=v(x.image[$],!1,!0,h):L[$]=k?x.image[$].image:x.image[$],L[$]=Tt(x,L[$]);const q=L[0],ae=b(q)||a,he=s.convert(x.format,x.encoding),Z=s.convert(x.type),Me=E(x.internalFormat,he,Z,x.encoding),Ce=a&&x.isVideoTexture!==!0,Le=j.__version===void 0||R===!0;let Ze=w(x,q,ae);te(34067,x,ae);let z;if(T){Ce&&Le&&t.texStorage2D(34067,Ze,Me,q.width,q.height);for(let $=0;$<6;$++){z=L[$].mipmaps;for(let se=0;se<z.length;se++){const me=z[se];x.format!==ei?he!==null?Ce?t.compressedTexSubImage2D(34069+$,se,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(34069+$,se,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+$,se,0,0,me.width,me.height,he,Z,me.data):t.texImage2D(34069+$,se,Me,me.width,me.height,0,he,Z,me.data)}}}else{z=x.mipmaps,Ce&&Le&&(z.length>0&&Ze++,t.texStorage2D(34067,Ze,Me,L[0].width,L[0].height));for(let $=0;$<6;$++)if(k){Ce?t.texSubImage2D(34069+$,0,0,0,L[$].width,L[$].height,he,Z,L[$].data):t.texImage2D(34069+$,0,Me,L[$].width,L[$].height,0,he,Z,L[$].data);for(let se=0;se<z.length;se++){const xe=z[se].image[$].image;Ce?t.texSubImage2D(34069+$,se+1,0,0,xe.width,xe.height,he,Z,xe.data):t.texImage2D(34069+$,se+1,Me,xe.width,xe.height,0,he,Z,xe.data)}}else{Ce?t.texSubImage2D(34069+$,0,0,0,he,Z,L[$]):t.texImage2D(34069+$,0,Me,he,Z,L[$]);for(let se=0;se<z.length;se++){const me=z[se];Ce?t.texSubImage2D(34069+$,se+1,0,0,he,Z,me.image[$]):t.texImage2D(34069+$,se+1,Me,he,Z,me.image[$])}}}S(x,ae)&&P(34067),j.__version=O.version,x.onUpdate&&x.onUpdate(x)}F.__version=x.version}function ge(F,x,A,R,O){const j=s.convert(A.format,A.encoding),T=s.convert(A.type),k=E(A.internalFormat,j,T,A.encoding);n.get(x).__hasExternalTextures||(O===32879||O===35866?t.texImage3D(O,0,k,x.width,x.height,x.depth,0,j,T,null):t.texImage2D(O,0,k,x.width,x.height,0,j,T,null)),t.bindFramebuffer(36160,F),ot(x)?f.framebufferTexture2DMultisampleEXT(36160,R,O,n.get(A).__webglTexture,0,ft(x)):(O===3553||O>=34069&&O<=34074)&&i.framebufferTexture2D(36160,R,O,n.get(A).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(F,x,A){if(i.bindRenderbuffer(36161,F),x.depthBuffer&&!x.stencilBuffer){let R=33189;if(A||ot(x)){const O=x.depthTexture;O&&O.isDepthTexture&&(O.type===rr?R=36012:O.type===ir&&(R=33190));const j=ft(x);ot(x)?f.renderbufferStorageMultisampleEXT(36161,j,R,x.width,x.height):i.renderbufferStorageMultisample(36161,j,R,x.width,x.height)}else i.renderbufferStorage(36161,R,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,F)}else if(x.depthBuffer&&x.stencilBuffer){const R=ft(x);A&&ot(x)===!1?i.renderbufferStorageMultisample(36161,R,35056,x.width,x.height):ot(x)?f.renderbufferStorageMultisampleEXT(36161,R,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,F)}else{const R=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let O=0;O<R.length;O++){const j=R[O],T=s.convert(j.format,j.encoding),k=s.convert(j.type),L=E(j.internalFormat,T,k,j.encoding),q=ft(x);A&&ot(x)===!1?i.renderbufferStorageMultisample(36161,q,L,x.width,x.height):ot(x)?f.renderbufferStorageMultisampleEXT(36161,q,L,x.width,x.height):i.renderbufferStorage(36161,L,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function at(F,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,F),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),fe(x.depthTexture,0);const R=n.get(x.depthTexture).__webglTexture,O=ft(x);if(x.depthTexture.format===or)ot(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,R,0,O):i.framebufferTexture2D(36160,36096,3553,R,0);else if(x.depthTexture.format===Wr)ot(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,R,0,O):i.framebufferTexture2D(36160,33306,3553,R,0);else throw new Error("Unknown depthTexture format")}function Fe(F){const x=n.get(F),A=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!x.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");at(x.__webglFramebuffer,F)}else if(A){x.__webglDepthbuffer=[];for(let R=0;R<6;R++)t.bindFramebuffer(36160,x.__webglFramebuffer[R]),x.__webglDepthbuffer[R]=i.createRenderbuffer(),Ne(x.__webglDepthbuffer[R],F,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ne(x.__webglDepthbuffer,F,!1);t.bindFramebuffer(36160,null)}function ze(F,x,A){const R=n.get(F);x!==void 0&&ge(R.__webglFramebuffer,F,F.texture,36064,3553),A!==void 0&&Fe(F)}function ct(F){const x=F.texture,A=n.get(F),R=n.get(x);F.addEventListener("dispose",W),F.isWebGLMultipleRenderTargets!==!0&&(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=x.version,o.memory.textures++);const O=F.isWebGLCubeRenderTarget===!0,j=F.isWebGLMultipleRenderTargets===!0,T=b(F)||a;if(O){A.__webglFramebuffer=[];for(let k=0;k<6;k++)A.__webglFramebuffer[k]=i.createFramebuffer()}else{if(A.__webglFramebuffer=i.createFramebuffer(),j)if(r.drawBuffers){const k=F.texture;for(let L=0,q=k.length;L<q;L++){const ae=n.get(k[L]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&ot(F)===!1){const k=j?x:[x];A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer);for(let L=0;L<k.length;L++){const q=k[L];A.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(36161,A.__webglColorRenderbuffer[L]);const ae=s.convert(q.format,q.encoding),he=s.convert(q.type),Z=E(q.internalFormat,ae,he,q.encoding,F.isXRRenderTarget===!0),Me=ft(F);i.renderbufferStorageMultisample(36161,Me,Z,F.width,F.height),i.framebufferRenderbuffer(36160,36064+L,36161,A.__webglColorRenderbuffer[L])}i.bindRenderbuffer(36161,null),F.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(A.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(36160,null)}}if(O){t.bindTexture(34067,R.__webglTexture),te(34067,x,T);for(let k=0;k<6;k++)ge(A.__webglFramebuffer[k],F,x,36064,34069+k);S(x,T)&&P(34067),t.unbindTexture()}else if(j){const k=F.texture;for(let L=0,q=k.length;L<q;L++){const ae=k[L],he=n.get(ae);t.bindTexture(3553,he.__webglTexture),te(3553,ae,T),ge(A.__webglFramebuffer,F,ae,36064+L,3553),S(ae,T)&&P(3553)}t.unbindTexture()}else{let k=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?k=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,R.__webglTexture),te(k,x,T),ge(A.__webglFramebuffer,F,x,36064,k),S(x,T)&&P(k),t.unbindTexture()}F.depthBuffer&&Fe(F)}function _t(F){const x=b(F)||a,A=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let R=0,O=A.length;R<O;R++){const j=A[R];if(S(j,x)){const T=F.isWebGLCubeRenderTarget?34067:3553,k=n.get(j).__webglTexture;t.bindTexture(T,k),P(T),t.unbindTexture()}}}function bt(F){if(a&&F.samples>0&&ot(F)===!1){const x=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],A=F.width,R=F.height;let O=16384;const j=[],T=F.stencilBuffer?33306:36096,k=n.get(F),L=F.isWebGLMultipleRenderTargets===!0;if(L)for(let q=0;q<x.length;q++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+q,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+q,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let q=0;q<x.length;q++){j.push(36064+q),F.depthBuffer&&j.push(T);const ae=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(ae===!1&&(F.depthBuffer&&(O|=256),F.stencilBuffer&&(O|=1024)),L&&i.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[q]),ae===!0&&(i.invalidateFramebuffer(36008,[T]),i.invalidateFramebuffer(36009,[T])),L){const he=n.get(x[q]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,he,0)}i.blitFramebuffer(0,0,A,R,0,0,A,R,O,9728),p&&i.invalidateFramebuffer(36008,j)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),L)for(let q=0;q<x.length;q++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+q,36161,k.__webglColorRenderbuffer[q]);const ae=n.get(x[q]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+q,3553,ae,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ft(F){return Math.min(u,F.samples)}function ot(F){const x=n.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(F){const x=o.render.frame;g.get(F)!==x&&(g.set(F,x),F.update())}function Tt(F,x){const A=F.encoding,R=F.format,O=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===Pa||A!==Vi&&(A===Ct?a===!1?e.has("EXT_sRGB")===!0&&R===ei?(F.format=Pa,F.minFilter=zn,F.generateMipmaps=!1):x=Of.sRGBToLinear(x):(R!==ei||O!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",A)),x}this.allocateTextureUnit=Q,this.resetTextureUnits=U,this.setTexture2D=fe,this.setTexture2DArray=re,this.setTexture3D=ve,this.setTextureCube=ee,this.rebindTextures=ze,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ot}function X_(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===ur)return 5121;if(s===Ud)return 32819;if(s===Od)return 32820;if(s===Id)return 5120;if(s===Nd)return 5122;if(s===If)return 5123;if(s===Bd)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===ms)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zd)return 6406;if(s===ei)return 6408;if(s===kd)return 6409;if(s===Hd)return 6410;if(s===or)return 6402;if(s===Wr)return 34041;if(s===Pa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Gd)return 6403;if(s===Vd)return 36244;if(s===Wd)return 33319;if(s===jd)return 33320;if(s===qd)return 36249;if(s===Uo||s===Oo||s===zo||s===ko)if(o===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tu||s===Pu||s===Fu||s===Lu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Tu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ru||s===Iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ru)return o===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Iu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nu||s===Bu||s===Uu||s===Ou||s===zu||s===ku||s===Hu||s===Gu||s===Vu||s===Wu||s===ju||s===qu||s===Xu||s===Yu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Nu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ou)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ku)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ju)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yu)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ho)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ho)return o===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Yd||s===Zu||s===Ku||s===Qu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ho)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ku)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Y_ extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class K_ extends Dn{constructor(e,t,n,r,s,o,a,c,h,l){if(l=l!==void 0?l:or,l!==or&&l!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===or&&(n=ir),n===void 0&&l===Wr&&(n=Or),super(null,r,s,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1}}class Q_ extends lr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],v=[],b=new Set,M=new Map,S=new Ln;S.layers.enable(1),S.viewport=new Qt;const P=new Ln;P.layers.enable(2),P.viewport=new Qt;const E=[S,P],w=new Y_;w.layers.enable(1),w.layers.enable(2);let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=y[ee];return ue===void 0&&(ue=new fa,y[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=y[ee];return ue===void 0&&(ue=new fa,y[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=y[ee];return ue===void 0&&(ue=new fa,y[ee]=ue),ue.getHandSpace()};function W(ee){const ue=v.indexOf(ee.inputSource);if(ue===-1)return;const _e=y[ue];_e!==void 0&&_e.dispatchEvent({type:ee.type,data:ee.inputSource})}function B(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let ee=0;ee<y.length;ee++){const ue=v[ee];ue!==null&&(v[ee]=null,y[ee].disconnect(ue))}D=null,N=null,e.setRenderTarget(m),p=null,f=null,u=null,r=null,d=null,ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),d=new Wi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:ur,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let ue=null,_e=null,te=null;_.depth&&(te=_.stencil?35056:33190,ue=_.stencil?Wr:or,_e=_.stencil?Or:ir);const V={colorFormat:32856,depthFormat:te,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(V),r.updateRenderState({layers:[f]}),d=new Wi(f.textureWidth,f.textureHeight,{format:ei,type:ur,depthTexture:new K_(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ke=e.properties.get(d);ke.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(ee){for(let ue=0;ue<ee.removed.length;ue++){const _e=ee.removed[ue],te=v.indexOf(_e);te>=0&&(v[te]=null,y[te].disconnect(_e))}for(let ue=0;ue<ee.added.length;ue++){const _e=ee.added[ue];let te=v.indexOf(_e);if(te===-1){for(let ke=0;ke<y.length;ke++)if(ke>=v.length){v.push(_e),te=ke;break}else if(v[ke]===null){v[ke]=_e,te=ke;break}if(te===-1)break}const V=y[te];V&&V.connect(_e)}}const G=new I,K=new I;function U(ee,ue,_e){G.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const te=G.distanceTo(K),V=ue.projectionMatrix.elements,ke=_e.projectionMatrix.elements,Re=V[14]/(V[10]-1),ge=V[14]/(V[10]+1),Ne=(V[9]+1)/V[5],at=(V[9]-1)/V[5],Fe=(V[8]-1)/V[0],ze=(ke[8]+1)/ke[0],ct=Re*Fe,_t=Re*ze,bt=te/(-Fe+ze),ft=bt*-Fe;ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ft),ee.translateZ(bt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const ot=Re+bt,ht=ge+bt,Tt=ct-ft,F=_t+(te-ft),x=Ne*ge/ht*ot,A=at*ge/ht*ot;ee.projectionMatrix.makePerspective(Tt,F,x,A,ot,ht),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function Q(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;w.near=P.near=S.near=ee.near,w.far=P.far=S.far=ee.far,(D!==w.near||N!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,N=w.far);const ue=ee.parent,_e=w.cameras;Q(w,ue);for(let te=0;te<_e.length;te++)Q(_e[te],ue);_e.length===2?U(w,S,P):w.projectionMatrix.copy(S.projectionMatrix),J(ee,w,ue)};function J(ee,ue,_e){_e===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0);const te=ee.children;for(let V=0,ke=te.length;V<ke;V++)te[V].updateMatrixWorld(!0);ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Fa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.getPlanes=function(){return b};let fe=null;function re(ee,ue){if(l=ue.getViewerPose(h||o),g=ue,l!==null){const _e=l.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let te=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,te=!0);for(let V=0;V<_e.length;V++){const ke=_e[V];let Re=null;if(p!==null)Re=p.getViewport(ke);else{const Ne=u.getViewSubImage(f,ke);Re=Ne.viewport,V===0&&(e.setRenderTargetTextures(d,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(d))}let ge=E[V];ge===void 0&&(ge=new Ln,ge.layers.enable(V),ge.viewport=new Qt,E[V]=ge),ge.matrix.fromArray(ke.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ke.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Re.x,Re.y,Re.width,Re.height),V===0&&(w.matrix.copy(ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),te===!0&&w.cameras.push(ge)}}for(let _e=0;_e<y.length;_e++){const te=v[_e],V=y[_e];te!==null&&V!==void 0&&V.update(te,ue,h||o)}if(fe&&fe(ee,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let _e=null;for(const te of b)ue.detectedPlanes.has(te)||(_e===null&&(_e=[]),_e.push(te));if(_e!==null)for(const te of _e)b.delete(te),M.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of ue.detectedPlanes)if(!b.has(te))b.add(te),M.set(te,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const V=M.get(te);te.lastChangedTime>V&&(M.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}g=null}const ve=new Xf;ve.setAnimationLoop(re),this.setAnimationLoop=function(ee){fe=ee},this.dispose=function(){}}}function $_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),l(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,v):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===bn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===bn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function J_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(y,v){const b=v.program;n.uniformBlockBinding(y,b)}function h(y,v){let b=r[y.id];b===void 0&&(g(y),b=l(y),r[y.id]=b,y.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(y,M);const S=e.render.frame;s[y.id]!==S&&(f(y),s[y.id]=S)}function l(y){const v=u();y.__bindingPointIndex=v;const b=i.createBuffer(),M=y.__size,S=y.usage;return i.bindBuffer(35345,b),i.bufferData(35345,M,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],b=y.uniforms,M=y.__cache;i.bindBuffer(35345,v);for(let S=0,P=b.length;S<P;S++){const E=b[S];if(p(E,S,M)===!0){const w=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let W=0;W<D.length;W++){const B=D[W],H=_(B);typeof B=="number"?(E.__data[0]=B,i.bufferSubData(35345,w+N,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=B.elements[0],E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=B.elements[0],E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=B.elements[0]):(B.toArray(E.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,E.__data)}}i.bindBuffer(35345,null)}function p(y,v,b){const M=y.value;if(b[v]===void 0){if(typeof M=="number")b[v]=M;else{const S=Array.isArray(M)?M:[M],P=[];for(let E=0;E<S.length;E++)P.push(S[E].clone());b[v]=P}return!0}else if(typeof M=="number"){if(b[v]!==M)return b[v]=M,!0}else{const S=Array.isArray(b[v])?b[v]:[b[v]],P=Array.isArray(M)?M:[M];for(let E=0;E<S.length;E++){const w=S[E];if(w.equals(P[E])===!1)return w.copy(P[E]),!0}}return!1}function g(y){const v=y.uniforms;let b=0;const M=16;let S=0;for(let P=0,E=v.length;P<E;P++){const w=v[P],D={boundary:0,storage:0},N=Array.isArray(w.value)?w.value:[w.value];for(let W=0,B=N.length;W<B;W++){const H=N[W],G=_(H);D.boundary+=G.boundary,D.storage+=G.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,P>0){S=b%M;const W=M-S;S!==0&&W-D.boundary<0&&(b+=M-S,w.__offset=b)}b+=D.storage}return S=b%M,S>0&&(b+=M-S),y.__size=b,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:h,dispose:d}}function ev(){const i=_s("canvas");return i.style.display="block",i}class $f{constructor(e={}){const{canvas:t=ev(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vi,this.useLegacyLights=!0,this.toneMapping=mi,this.toneMappingExposure=1;const d=this;let y=!1,v=0,b=0,M=null,S=-1,P=null;const E=new Qt,w=new Qt;let D=null,N=t.width,W=t.height,B=1,H=null,G=null;const K=new Qt(0,0,N,W),U=new Qt(0,0,N,W);let Q=!1;const J=new ou;let fe=!1,re=!1,ve=null;const ee=new Bt,ue=new I,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return M===null?B:1}let V=n;function ke(C,X){for(let ie=0;ie<C.length;ie++){const Y=C[ie],oe=t.getContext(Y,X);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Le,!1),V===null){const X=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&X.shift(),V=ke(X,C),V===null)throw ke(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Re,ge,Ne,at,Fe,ze,ct,_t,bt,ft,ot,ht,Tt,F,x,A,R,O,j,T,k,L,q,ae;function he(){Re=new fg(V),ge=new sg(V,Re,e),Re.init(ge),L=new X_(V,Re,ge),Ne=new j_(V,Re,ge),at=new pg,Fe=new F_,ze=new q_(V,Re,Ne,Fe,ge,L,at),ct=new ag(d),_t=new cg(d),bt=new Ep(V,ge),q=new ig(V,Re,bt,ge),ft=new hg(V,bt,at,q),ot=new vg(V,ft,bt,at),j=new _g(V,ge,ze),A=new og(Fe),ht=new P_(d,ct,_t,Re,ge,q,A),Tt=new $_(d,Fe),F=new R_,x=new z_(Re,ge),O=new ng(d,ct,_t,Ne,ot,f,c),R=new W_(d,ot,ge),ae=new J_(V,at,ge,Ne),T=new rg(V,Re,at,ge),k=new dg(V,Re,at,ge),at.programs=ht.programs,d.capabilities=ge,d.extensions=Re,d.properties=Fe,d.renderLists=F,d.shadowMap=R,d.state=Ne,d.info=at}he();const Z=new Q_(d,V);this.xr=Z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(N,W,!1))},this.getSize=function(C){return C.set(N,W)},this.setSize=function(C,X,ie=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,W=X,t.width=Math.floor(C*B),t.height=Math.floor(X*B),ie===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*B,W*B).floor()},this.setDrawingBufferSize=function(C,X,ie){N=C,W=X,B=ie,t.width=Math.floor(C*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,X,ie,Y){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,X,ie,Y),Ne.viewport(E.copy(K).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,X,ie,Y){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,X,ie,Y),Ne.scissor(w.copy(U).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){Ne.setScissorTest(Q=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(C=!0,X=!0,ie=!0){let Y=0;C&&(Y|=16384),X&&(Y|=256),ie&&(Y|=1024),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),F.dispose(),x.dispose(),Fe.dispose(),ct.dispose(),_t.dispose(),ot.dispose(),q.dispose(),ae.dispose(),ht.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",xe),Z.removeEventListener("sessionend",ut),ve&&(ve.dispose(),ve=null),Ue.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=at.autoReset,X=R.enabled,ie=R.autoUpdate,Y=R.needsUpdate,oe=R.type;he(),at.autoReset=C,R.enabled=X,R.autoUpdate=ie,R.needsUpdate=Y,R.type=oe}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const X=C.target;X.removeEventListener("dispose",Ze),z(X)}function z(C){$(C),Fe.remove(C)}function $(C){const X=Fe.get(C).programs;X!==void 0&&(X.forEach(function(ie){ht.releaseProgram(ie)}),C.isShaderMaterial&&ht.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ie,Y,oe,Ie){X===null&&(X=_e);const Oe=oe.isMesh&&oe.matrixWorld.determinant()<0,qe=be(C,X,ie,Y,oe);Ne.setMaterial(Y,Oe);let $e=ie.index,et=1;Y.wireframe===!0&&($e=ft.getWireframeAttribute(ie),et=2);const Je=ie.drawRange,tt=ie.attributes.position;let it=Je.start*et,kt=(Je.start+Je.count)*et;Ie!==null&&(it=Math.max(it,Ie.start*et),kt=Math.min(kt,(Ie.start+Ie.count)*et)),$e!==null?(it=Math.max(it,0),kt=Math.min(kt,$e.count)):tt!=null&&(it=Math.max(it,0),kt=Math.min(kt,tt.count));const an=kt-it;if(an<0||an===1/0)return;q.setup(oe,Y,qe,ie,$e);let In,Pt=T;if($e!==null&&(In=bt.get($e),Pt=k,Pt.setIndex(In)),oe.isMesh)Y.wireframe===!0?(Ne.setLineWidth(Y.wireframeLinewidth*te()),Pt.setMode(1)):Pt.setMode(4);else if(oe.isLine){let rt=Y.linewidth;rt===void 0&&(rt=1),Ne.setLineWidth(rt*te()),oe.isLineSegments?Pt.setMode(1):oe.isLineLoop?Pt.setMode(2):Pt.setMode(3)}else oe.isPoints?Pt.setMode(0):oe.isSprite&&Pt.setMode(4);if(oe.isInstancedMesh)Pt.renderInstances(it,an,oe.count);else if(ie.isInstancedBufferGeometry){const rt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Nn=Math.min(ie.instanceCount,rt);Pt.renderInstances(it,an,Nn)}else Pt.render(it,an)},this.compile=function(C,X){function ie(Y,oe,Ie){Y.transparent===!0&&Y.side===$n&&Y.forceSinglePass===!1?(Y.side=bn,Y.needsUpdate=!0,En(Y,oe,Ie),Y.side=Gi,Y.needsUpdate=!0,En(Y,oe,Ie),Y.side=$n):En(Y,oe,Ie)}g=x.get(C),g.init(),m.push(g),C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(d.useLegacyLights),C.traverse(function(Y){const oe=Y.material;if(oe)if(Array.isArray(oe))for(let Ie=0;Ie<oe.length;Ie++){const Oe=oe[Ie];ie(Oe,C,Y)}else ie(oe,C,Y)}),m.pop(),g=null};let se=null;function me(C){se&&se(C)}function xe(){Ue.stop()}function ut(){Ue.start()}const Ue=new Xf;Ue.setAnimationLoop(me),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(C){se=C,Z.setAnimationLoop(C),C===null?Ue.stop():Ue.start()},Z.addEventListener("sessionstart",xe),Z.addEventListener("sessionend",ut),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(X),X=Z.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,X,M),g=x.get(C,m.length),g.init(),m.push(g),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(ee),re=this.localClippingEnabled,fe=A.init(this.clippingPlanes,re),p=F.get(C,_.length),p.init(),_.push(p),pt(C,X,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(H,G),fe===!0&&A.beginShadows();const ie=g.state.shadowsArray;if(R.render(ie,C,X),fe===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(p,C),g.setupLights(d.useLegacyLights),X.isArrayCamera){const Y=X.cameras;for(let oe=0,Ie=Y.length;oe<Ie;oe++){const Oe=Y[oe];mt(p,C,Oe,Oe.viewport)}}else mt(p,C,X);M!==null&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(d,C,X),q.resetDefaultState(),S=-1,P=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function pt(C,X,ie,Y){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){Y&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Oe=ot.update(C),qe=C.material;qe.visible&&p.push(C,Oe,qe,ie,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==at.render.frame&&(C.skeleton.update(),C.skeleton.frame=at.render.frame),!C.frustumCulled||J.intersectsObject(C))){Y&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Oe=ot.update(C),qe=C.material;if(Array.isArray(qe)){const $e=Oe.groups;for(let et=0,Je=$e.length;et<Je;et++){const tt=$e[et],it=qe[tt.materialIndex];it&&it.visible&&p.push(C,Oe,it,ie,ue.z,tt)}}else qe.visible&&p.push(C,Oe,qe,ie,ue.z,null)}}const Ie=C.children;for(let Oe=0,qe=Ie.length;Oe<qe;Oe++)pt(Ie[Oe],X,ie,Y)}function mt(C,X,ie,Y){const oe=C.opaque,Ie=C.transmissive,Oe=C.transparent;g.setupLightsView(ie),fe===!0&&A.setGlobalState(d.clippingPlanes,ie),Ie.length>0&&Qe(oe,Ie,X,ie),Y&&Ne.viewport(E.copy(Y)),oe.length>0&&zt(oe,X,ie),Ie.length>0&&zt(Ie,X,ie),Oe.length>0&&zt(Oe,X,ie),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Qe(C,X,ie,Y){if(ve===null){const qe=ge.isWebGL2;ve=new Wi(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?ms:ur,minFilter:ps,samples:qe&&a===!0?4:0})}const oe=d.getRenderTarget();d.setRenderTarget(ve),d.clear();const Ie=d.toneMapping;d.toneMapping=mi,zt(C,ie,Y),ze.updateMultisampleRenderTarget(ve),ze.updateRenderTargetMipmap(ve);let Oe=!1;for(let qe=0,$e=X.length;qe<$e;qe++){const et=X[qe],Je=et.object,tt=et.geometry,it=et.material,kt=et.group;if(it.side===$n&&Je.layers.test(Y.layers)){const an=it.side;it.side=bn,it.needsUpdate=!0,vt(Je,ie,Y,tt,it,kt),it.side=an,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(ze.updateMultisampleRenderTarget(ve),ze.updateRenderTargetMipmap(ve)),d.setRenderTarget(oe),d.toneMapping=Ie}function zt(C,X,ie){const Y=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,Ie=C.length;oe<Ie;oe++){const Oe=C[oe],qe=Oe.object,$e=Oe.geometry,et=Y===null?Oe.material:Y,Je=Oe.group;qe.layers.test(ie.layers)&&vt(qe,X,ie,$e,et,Je)}}function vt(C,X,ie,Y,oe,Ie){C.onBeforeRender(d,X,ie,Y,oe,Ie),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(d,X,ie,Y,C,Ie),oe.transparent===!0&&oe.side===$n&&oe.forceSinglePass===!1?(oe.side=bn,oe.needsUpdate=!0,d.renderBufferDirect(ie,X,Y,oe,C,Ie),oe.side=Gi,oe.needsUpdate=!0,d.renderBufferDirect(ie,X,Y,oe,C,Ie),oe.side=$n):d.renderBufferDirect(ie,X,Y,oe,C,Ie),C.onAfterRender(d,X,ie,Y,oe,Ie)}function En(C,X,ie){X.isScene!==!0&&(X=_e);const Y=Fe.get(C),oe=g.state.lights,Ie=g.state.shadowsArray,Oe=oe.state.version,qe=ht.getParameters(C,oe.state,Ie,X,ie),$e=ht.getProgramCacheKey(qe);let et=Y.programs;Y.environment=C.isMeshStandardMaterial?X.environment:null,Y.fog=X.fog,Y.envMap=(C.isMeshStandardMaterial?_t:ct).get(C.envMap||Y.environment),et===void 0&&(C.addEventListener("dispose",Ze),et=new Map,Y.programs=et);let Je=et.get($e);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===Oe)return Ut(C,qe),Je}else qe.uniforms=ht.getUniforms(C),C.onBuild(ie,qe,d),C.onBeforeCompile(qe,d),Je=ht.acquireProgram(qe,$e),et.set($e,Je),Y.uniforms=qe.uniforms;const tt=Y.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=A.uniform),Ut(C,qe),Y.needsLights=xt(C),Y.lightsStateVersion=Oe,Y.needsLights&&(tt.ambientLightColor.value=oe.state.ambient,tt.lightProbe.value=oe.state.probe,tt.directionalLights.value=oe.state.directional,tt.directionalLightShadows.value=oe.state.directionalShadow,tt.spotLights.value=oe.state.spot,tt.spotLightShadows.value=oe.state.spotShadow,tt.rectAreaLights.value=oe.state.rectArea,tt.ltc_1.value=oe.state.rectAreaLTC1,tt.ltc_2.value=oe.state.rectAreaLTC2,tt.pointLights.value=oe.state.point,tt.pointLightShadows.value=oe.state.pointShadow,tt.hemisphereLights.value=oe.state.hemi,tt.directionalShadowMap.value=oe.state.directionalShadowMap,tt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,tt.spotShadowMap.value=oe.state.spotShadowMap,tt.spotLightMatrix.value=oe.state.spotLightMatrix,tt.spotLightMap.value=oe.state.spotLightMap,tt.pointShadowMap.value=oe.state.pointShadowMap,tt.pointShadowMatrix.value=oe.state.pointShadowMatrix);const it=Je.getUniforms(),kt=so.seqWithValue(it.seq,tt);return Y.currentProgram=Je,Y.uniformsList=kt,Je}function Ut(C,X){const ie=Fe.get(C);ie.outputEncoding=X.outputEncoding,ie.instancing=X.instancing,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function be(C,X,ie,Y,oe){X.isScene!==!0&&(X=_e),ze.resetTextureUnits();const Ie=X.fog,Oe=Y.isMeshStandardMaterial?X.environment:null,qe=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Vi,$e=(Y.isMeshStandardMaterial?_t:ct).get(Y.envMap||Oe),et=Y.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!Y.normalMap&&!!ie.attributes.tangent,tt=!!ie.morphAttributes.position,it=!!ie.morphAttributes.normal,kt=!!ie.morphAttributes.color,an=Y.toneMapped?d.toneMapping:mi,In=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Pt=In!==void 0?In.length:0,rt=Fe.get(Y),Nn=g.state.lights;if(fe===!0&&(re===!0||C!==P)){const Wt=C===P&&Y.id===S;A.setState(Y,C,Wt)}let Nt=!1;Y.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Nn.state.version||rt.outputEncoding!==qe||oe.isInstancedMesh&&rt.instancing===!1||!oe.isInstancedMesh&&rt.instancing===!0||oe.isSkinnedMesh&&rt.skinning===!1||!oe.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==$e||Y.fog===!0&&rt.fog!==Ie||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==A.numPlanes||rt.numIntersection!==A.numIntersection)||rt.vertexAlphas!==et||rt.vertexTangents!==Je||rt.morphTargets!==tt||rt.morphNormals!==it||rt.morphColors!==kt||rt.toneMapping!==an||ge.isWebGL2===!0&&rt.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,rt.__version=Y.version);let un=rt.currentProgram;Nt===!0&&(un=En(Y,X,oe));let Vt=!1,wt=!1,xi=!1;const At=un.getUniforms(),mn=rt.uniforms;if(Ne.useProgram(un.program)&&(Vt=!0,wt=!0,xi=!0),Y.id!==S&&(S=Y.id,wt=!0),Vt||P!==C){if(At.setValue(V,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&At.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),P!==C&&(P=C,wt=!0,xi=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Wt=At.map.cameraPosition;Wt!==void 0&&Wt.setValue(V,ue.setFromMatrixPosition(C.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||oe.isSkinnedMesh)&&At.setValue(V,"viewMatrix",C.matrixWorldInverse)}if(oe.isSkinnedMesh){At.setOptional(V,oe,"bindMatrix"),At.setOptional(V,oe,"bindMatrixInverse");const Wt=oe.skeleton;Wt&&(ge.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),At.setValue(V,"boneTexture",Wt.boneTexture,ze),At.setValue(V,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jn=ie.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0&&ge.isWebGL2===!0)&&j.update(oe,ie,un),(wt||rt.receiveShadow!==oe.receiveShadow)&&(rt.receiveShadow=oe.receiveShadow,At.setValue(V,"receiveShadow",oe.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mn.envMap.value=$e,mn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),wt&&(At.setValue(V,"toneMappingExposure",d.toneMappingExposure),rt.needsLights&&nt(mn,xi),Ie&&Y.fog===!0&&Tt.refreshFogUniforms(mn,Ie),Tt.refreshMaterialUniforms(mn,Y,B,W,ve),so.upload(V,rt.uniformsList,mn,ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(so.upload(V,rt.uniformsList,mn,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(V,"center",oe.center),At.setValue(V,"modelViewMatrix",oe.modelViewMatrix),At.setValue(V,"normalMatrix",oe.normalMatrix),At.setValue(V,"modelMatrix",oe.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Wt=Y.uniformsGroups;for(let yi=0,Lt=Wt.length;yi<Lt;yi++)if(ge.isWebGL2){const xu=Wt[yi];ae.update(xu,un),ae.bind(xu,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function nt(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function xt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,ie){Fe.get(C.texture).__webglTexture=X,Fe.get(C.depthTexture).__webglTexture=ie;const Y=Fe.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ie===void 0,Y.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const ie=Fe.get(C);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ie=0){M=C,v=X,b=ie;let Y=!0,oe=null,Ie=!1,Oe=!1;if(C){const $e=Fe.get(C);$e.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(36160,null),Y=!1):$e.__webglFramebuffer===void 0?ze.setupRenderTarget(C):$e.__hasExternalTextures&&ze.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Oe=!0);const Je=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(oe=Je[X],Ie=!0):ge.isWebGL2&&C.samples>0&&ze.useMultisampledRTT(C)===!1?oe=Fe.get(C).__webglMultisampledFramebuffer:oe=Je,E.copy(C.viewport),w.copy(C.scissor),D=C.scissorTest}else E.copy(K).multiplyScalar(B).floor(),w.copy(U).multiplyScalar(B).floor(),D=Q;if(Ne.bindFramebuffer(36160,oe)&&ge.drawBuffers&&Y&&Ne.drawBuffers(C,oe),Ne.viewport(E),Ne.scissor(w),Ne.setScissorTest(D),Ie){const $e=Fe.get(C.texture);V.framebufferTexture2D(36160,36064,34069+X,$e.__webglTexture,ie)}else if(Oe){const $e=Fe.get(C.texture),et=X||0;V.framebufferTextureLayer(36160,36064,$e.__webglTexture,ie||0,et)}S=-1},this.readRenderTargetPixels=function(C,X,ie,Y,oe,Ie,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe){Ne.bindFramebuffer(36160,qe);try{const $e=C.texture,et=$e.format,Je=$e.type;if(et!==ei&&L.convert(et)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=Je===ms&&(Re.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Je!==ur&&L.convert(Je)!==V.getParameter(35738)&&!(Je===rr&&(ge.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Y&&ie>=0&&ie<=C.height-oe&&V.readPixels(X,ie,Y,oe,L.convert(et),L.convert(Je),Ie)}finally{const $e=M!==null?Fe.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(C,X,ie=0){const Y=Math.pow(2,-ie),oe=Math.floor(X.image.width*Y),Ie=Math.floor(X.image.height*Y);ze.setTexture2D(X,0),V.copyTexSubImage2D(3553,ie,0,0,C.x,C.y,oe,Ie),Ne.unbindTexture()},this.copyTextureToTexture=function(C,X,ie,Y=0){const oe=X.image.width,Ie=X.image.height,Oe=L.convert(ie.format),qe=L.convert(ie.type);ze.setTexture2D(ie,0),V.pixelStorei(37440,ie.flipY),V.pixelStorei(37441,ie.premultiplyAlpha),V.pixelStorei(3317,ie.unpackAlignment),X.isDataTexture?V.texSubImage2D(3553,Y,C.x,C.y,oe,Ie,Oe,qe,X.image.data):X.isCompressedTexture?V.compressedTexSubImage2D(3553,Y,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Oe,X.mipmaps[0].data):V.texSubImage2D(3553,Y,C.x,C.y,Oe,qe,X.image),Y===0&&ie.generateMipmaps&&V.generateMipmap(3553),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ie,Y,oe=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,$e=L.convert(Y.format),et=L.convert(Y.type);let Je;if(Y.isData3DTexture)ze.setTexture3D(Y,0),Je=32879;else if(Y.isDataArrayTexture)ze.setTexture2DArray(Y,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,Y.flipY),V.pixelStorei(37441,Y.premultiplyAlpha),V.pixelStorei(3317,Y.unpackAlignment);const tt=V.getParameter(3314),it=V.getParameter(32878),kt=V.getParameter(3316),an=V.getParameter(3315),In=V.getParameter(32877),Pt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;V.pixelStorei(3314,Pt.width),V.pixelStorei(32878,Pt.height),V.pixelStorei(3316,C.min.x),V.pixelStorei(3315,C.min.y),V.pixelStorei(32877,C.min.z),ie.isDataTexture||ie.isData3DTexture?V.texSubImage3D(Je,oe,X.x,X.y,X.z,Ie,Oe,qe,$e,et,Pt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Je,oe,X.x,X.y,X.z,Ie,Oe,qe,$e,Pt.data)):V.texSubImage3D(Je,oe,X.x,X.y,X.z,Ie,Oe,qe,$e,et,Pt),V.pixelStorei(3314,tt),V.pixelStorei(32878,it),V.pixelStorei(3316,kt),V.pixelStorei(3315,an),V.pixelStorei(32877,In),oe===0&&Y.generateMipmaps&&V.generateMipmap(Je),Ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){v=0,b=0,M=null,Ne.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class tv extends $f{}tv.prototype.isWebGL1Renderer=!0;class nv extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class As extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new I,Ol=new I,zl=new Bt,ha=new iu,Qs=new So;class hn extends It{constructor(e=new nn,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ul.fromBufferAttribute(t,r-1),Ol.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ul.distanceTo(Ol);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;zl.copy(r).invert(),ha.copy(e.ray).applyMatrix4(zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new I,l=new I,u=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=d,b=y-1;v<b;v+=p){const M=g.getX(v),S=g.getX(v+1);if(h.fromBufferAttribute(m,M),l.fromBufferAttribute(m,S),ha.distanceSqToSegment(h,l,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=d,b=y-1;v<b;v+=p){if(h.fromBufferAttribute(m,v),l.fromBufferAttribute(m,v+1),ha.distanceSqToSegment(h,l,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const kl=new I,Hl=new I;class iv extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)kl.fromBufferAttribute(t,r),Hl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kl.distanceTo(Hl);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fn extends nn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const l=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function y(){const b=new I,M=new I;let S=0;const P=(t-e)/n;for(let E=0;E<=s;E++){const w=[],D=E/s,N=D*(t-e)+e;for(let W=0;W<=r;W++){const B=W/r,H=B*c+a,G=Math.sin(H),K=Math.cos(H);M.x=N*G,M.y=-D*n+m,M.z=N*K,u.push(M.x,M.y,M.z),b.set(G,P,K).normalize(),f.push(b.x,b.y,b.z),p.push(B,1-D),w.push(g++)}_.push(w)}for(let E=0;E<r;E++)for(let w=0;w<s;w++){const D=_[w][E],N=_[w+1][E],W=_[w+1][E+1],B=_[w][E+1];l.push(D,N,B),l.push(N,W,B),S+=6}h.addGroup(d,S,0),d+=S}function v(b){const M=g,S=new Ke,P=new I;let E=0;const w=b===!0?e:t,D=b===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,m*D,0),f.push(0,D,0),p.push(.5,.5),g++;const N=g;for(let W=0;W<=r;W++){const H=W/r*c+a,G=Math.cos(H),K=Math.sin(H);P.x=w*K,P.y=m*D,P.z=w*G,u.push(P.x,P.y,P.z),f.push(0,D,0),S.x=G*.5+.5,S.y=K*.5*D+.5,p.push(S.x,S.y),g++}for(let W=0;W<r;W++){const B=M+W,H=N+W;b===!0?l.push(H,H+1,B):l.push(H+1,H,B),E+=3}h.addGroup(d,E,b===!0?1:2),d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends nn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),h(n),l(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new I,b=new I,M=new I;for(let S=0;S<t.length;S+=3)p(t[S+0],v),p(t[S+1],b),p(t[S+2],M),c(v,b,M,y)}function c(y,v,b,M){const S=M+1,P=[];for(let E=0;E<=S;E++){P[E]=[];const w=y.clone().lerp(b,E/S),D=v.clone().lerp(b,E/S),N=S-E;for(let W=0;W<=N;W++)W===0&&E===S?P[E][W]=w:P[E][W]=w.clone().lerp(D,W/N)}for(let E=0;E<S;E++)for(let w=0;w<2*(S-E)-1;w++){const D=Math.floor(w/2);w%2===0?(f(P[E][D+1]),f(P[E+1][D]),f(P[E][D])):(f(P[E][D+1]),f(P[E+1][D+1]),f(P[E+1][D]))}}function h(y){const v=new I;for(let b=0;b<s.length;b+=3)v.x=s[b+0],v.y=s[b+1],v.z=s[b+2],v.normalize().multiplyScalar(y),s[b+0]=v.x,s[b+1]=v.y,s[b+2]=v.z}function l(){const y=new I;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const b=m(y)/2/Math.PI+.5,M=d(y)/Math.PI+.5;o.push(b,1-M)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],b=o[y+2],M=o[y+4],S=Math.max(v,b,M),P=Math.min(v,b,M);S>.9&&P<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,v){const b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){const y=new I,v=new I,b=new I,M=new I,S=new Ke,P=new Ke,E=new Ke;for(let w=0,D=0;w<s.length;w+=9,D+=6){y.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),S.set(o[D+0],o[D+1]),P.set(o[D+2],o[D+3]),E.set(o[D+4],o[D+5]),M.copy(y).add(v).add(b).divideScalar(3);const N=m(M);_(S,D+0,y,N),_(P,D+2,v,N),_(E,D+4,b,N)}}function _(y,v,b,M){M<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.vertices,e.indices,e.radius,e.details)}}class Rr extends lu{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rr(e.radius,e.detail)}}class cr extends nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const l=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],v=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&c===Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const S=M/t;u.x=-e*Math.cos(r+S*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(r+S*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+b,1-v),y.push(h++)}l.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const v=l[d][y+1],b=l[d][y],M=l[d+1][y],S=l[d+1][y+1];(d!==0||o>0)&&p.push(v,b,S),(d!==n-1||c<Math.PI)&&p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends nn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],h=[],l=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),l.x=e*Math.cos(_),l.y=e*Math.sin(_),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/r),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,y=(r+1)*p+g;o.push(_,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cs extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends As{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Gl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rv{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){const p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const eh=new rv;class th{constructor(e){this.manager=e!==void 0?e:eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sv extends th{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function c(){l(),Gl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(u){l(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vl extends th{constructor(e){super(e)}load(e,t,n,r){const s=new Dn,o=new sv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class nh extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const da=new Bt,Wl=new I,jl=new I;class ov{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class av extends ov{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new av}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uv extends nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ih{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xl(){return(typeof performance>"u"?Date:performance).now()}class rh{constructor(e,t,n=0,r=1/0){this.ray=new iu(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ra(e,this,n,t),n.sort(Yl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ra(e[r],this,n,t);return n.sort(Yl),n}}function Yl(i,e){return i.distance-e.distance}function Ra(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Ra(r[s],e,t,!0)}}class Zl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lv extends iv{constructor(e=10,t=10,n=4473924,r=8947848){n=new dt(n),r=new dt(r);const s=t/2,o=e/t,a=e/2,c=[],h=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===s?n:r;_.toArray(h,p),p+=3,_.toArray(h,p),p+=3,_.toArray(h,p),p+=3,_.toArray(h,p),p+=3}const l=new nn;l.setAttribute("position",new Et(c,3)),l.setAttribute("color",new Et(h,3));const u=new As({vertexColors:!0,toneMapped:!1});super(l,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);const cv=()=>{const i={curveActive:0,u:.5,w:.5,toggles:{controlPolygonActive:{value:!1,label:"Control Polygon"},pointsActive:{value:!0,label:"Control Points"},snapActive:{value:!1,label:"Snap to Move"},indicatorActive:{value:!1,label:"Indicator"}},curve:{},surface:{wireframe:{value:!1,label:"Wireframe"}}},{subscribe:e,set:t,update:n}=en(i);return{subscribe:e,update:n,set:t}},Ci=cv();function oo(i,e){return i==null||e==null?NaN:i<e?-1:i>e?1:i>=e?0:NaN}function fv(i,e){return i==null||e==null?NaN:e<i?-1:e>i?1:e>=i?0:NaN}function sh(i){let e,t,n;i.length!==2?(e=oo,t=(a,c)=>oo(i(a),c),n=(a,c)=>i(a)-c):(e=i===oo||i===fv?i:hv,t=i,n=i);function r(a,c,h=0,l=a.length){if(h<l){if(e(c,c)!==0)return l;do{const u=h+l>>>1;t(a[u],c)<0?h=u+1:l=u}while(h<l)}return h}function s(a,c,h=0,l=a.length){if(h<l){if(e(c,c)!==0)return l;do{const u=h+l>>>1;t(a[u],c)<=0?h=u+1:l=u}while(h<l)}return h}function o(a,c,h=0,l=a.length){const u=r(a,c,h,l-1);return u>h&&n(a[u-1],c)>-n(a[u],c)?u-1:u}return{left:r,center:o,right:s}}function hv(){return 0}function dv(i){return i===null?NaN:+i}const pv=sh(oo),mv=pv.right;sh(dv).center;const gv=mv,_v=Math.sqrt(50),vv=Math.sqrt(10),xv=Math.sqrt(2);function lo(i,e,t){const n=(e-i)/Math.max(0,t),r=Math.floor(Math.log10(n)),s=n/Math.pow(10,r),o=s>=_v?10:s>=vv?5:s>=xv?2:1;let a,c,h;return r<0?(h=Math.pow(10,-r)/o,a=Math.round(i*h),c=Math.round(e*h),a/h<i&&++a,c/h>e&&--c,h=-h):(h=Math.pow(10,r)*o,a=Math.round(i/h),c=Math.round(e/h),a*h<i&&++a,c*h>e&&--c),c<a&&.5<=t&&t<2?lo(i,e,t*2):[a,c,h]}function yv(i,e,t){if(e=+e,i=+i,t=+t,!(t>0))return[];if(i===e)return[i];const n=e<i,[r,s,o]=n?lo(e,i,t):lo(i,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(n)if(o<0)for(let h=0;h<a;++h)c[h]=(s-h)/-o;else for(let h=0;h<a;++h)c[h]=(s-h)*o;else if(o<0)for(let h=0;h<a;++h)c[h]=(r+h)/-o;else for(let h=0;h<a;++h)c[h]=(r+h)*o;return c}function Ia(i,e,t){return e=+e,i=+i,t=+t,lo(i,e,t)[2]}function Mv(i,e,t){e=+e,i=+i,t=+t;const n=e<i,r=n?Ia(e,i,t):Ia(i,e,t);return(n?-1:1)*(r<0?1/-r:r)}function wv(i,e){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(e).domain(i);break}return this}function cu(i,e,t){i.prototype=e.prototype=t,t.constructor=i}function oh(i,e){var t=Object.create(i.prototype);for(var n in e)t[n]=e[n];return t}function Ts(){}var vs=.7,co=1/vs,kr="\\s*([+-]?\\d+)\\s*",xs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",bv=/^#([0-9a-f]{3,8})$/,Dv=new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`),Sv=new RegExp(`^rgb\\(${gi},${gi},${gi}\\)$`),Ev=new RegExp(`^rgba\\(${kr},${kr},${kr},${xs}\\)$`),Av=new RegExp(`^rgba\\(${gi},${gi},${gi},${xs}\\)$`),Cv=new RegExp(`^hsl\\(${xs},${gi},${gi}\\)$`),Tv=new RegExp(`^hsla\\(${xs},${gi},${gi},${xs}\\)$`),Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cu(Ts,ys,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:Ql,formatHex:Ql,formatHex8:Pv,formatHsl:Fv,formatRgb:$l,toString:$l});function Ql(){return this.rgb().formatHex()}function Pv(){return this.rgb().formatHex8()}function Fv(){return ah(this).formatHsl()}function $l(){return this.rgb().formatRgb()}function ys(i){var e,t;return i=(i+"").trim().toLowerCase(),(e=bv.exec(i))?(t=e[1].length,e=parseInt(e[1],16),t===6?Jl(e):t===3?new Mn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?$s(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?$s(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Dv.exec(i))?new Mn(e[1],e[2],e[3],1):(e=Sv.exec(i))?new Mn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Ev.exec(i))?$s(e[1],e[2],e[3],e[4]):(e=Av.exec(i))?$s(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Cv.exec(i))?nc(e[1],e[2]/100,e[3]/100,1):(e=Tv.exec(i))?nc(e[1],e[2]/100,e[3]/100,e[4]):Kl.hasOwnProperty(i)?Jl(Kl[i]):i==="transparent"?new Mn(NaN,NaN,NaN,0):null}function Jl(i){return new Mn(i>>16&255,i>>8&255,i&255,1)}function $s(i,e,t,n){return n<=0&&(i=e=t=NaN),new Mn(i,e,t,n)}function Lv(i){return i instanceof Ts||(i=ys(i)),i?(i=i.rgb(),new Mn(i.r,i.g,i.b,i.opacity)):new Mn}function Na(i,e,t,n){return arguments.length===1?Lv(i):new Mn(i,e,t,n??1)}function Mn(i,e,t,n){this.r=+i,this.g=+e,this.b=+t,this.opacity=+n}cu(Mn,Na,oh(Ts,{brighter(i){return i=i==null?co:Math.pow(co,i),new Mn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?vs:Math.pow(vs,i),new Mn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Mn(ar(this.r),ar(this.g),ar(this.b),fo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ec,formatHex:ec,formatHex8:Rv,formatRgb:tc,toString:tc}));function ec(){return`#${sr(this.r)}${sr(this.g)}${sr(this.b)}`}function Rv(){return`#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity)?1:this.opacity)*255)}`}function tc(){const i=fo(this.opacity);return`${i===1?"rgb(":"rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${i===1?")":`, ${i})`}`}function fo(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function ar(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function sr(i){return i=ar(i),(i<16?"0":"")+i.toString(16)}function nc(i,e,t,n){return n<=0?i=e=t=NaN:t<=0||t>=1?i=e=NaN:e<=0&&(i=NaN),new ti(i,e,t,n)}function ah(i){if(i instanceof ti)return new ti(i.h,i.s,i.l,i.opacity);if(i instanceof Ts||(i=ys(i)),!i)return new ti;if(i instanceof ti)return i;i=i.rgb();var e=i.r/255,t=i.g/255,n=i.b/255,r=Math.min(e,t,n),s=Math.max(e,t,n),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-n)/a+(t<n)*6:t===s?o=(n-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new ti(o,a,c,i.opacity)}function Iv(i,e,t,n){return arguments.length===1?ah(i):new ti(i,e,t,n??1)}function ti(i,e,t,n){this.h=+i,this.s=+e,this.l=+t,this.opacity=+n}cu(ti,Iv,oh(Ts,{brighter(i){return i=i==null?co:Math.pow(co,i),new ti(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?vs:Math.pow(vs,i),new ti(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,e=isNaN(i)||isNaN(this.s)?0:this.s,t=this.l,n=t+(t<.5?t:1-t)*e,r=2*t-n;return new Mn(pa(i>=240?i-240:i+120,r,n),pa(i,r,n),pa(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new ti(ic(this.h),Js(this.s),Js(this.l),fo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=fo(this.opacity);return`${i===1?"hsl(":"hsla("}${ic(this.h)}, ${Js(this.s)*100}%, ${Js(this.l)*100}%${i===1?")":`, ${i})`}`}}));function ic(i){return i=(i||0)%360,i<0?i+360:i}function Js(i){return Math.max(0,Math.min(1,i||0))}function pa(i,e,t){return(i<60?e+(t-e)*i/60:i<180?t:i<240?e+(t-e)*(240-i)/60:e)*255}const fu=i=>()=>i;function Nv(i,e){return function(t){return i+t*e}}function Bv(i,e,t){return i=Math.pow(i,t),e=Math.pow(e,t)-i,t=1/t,function(n){return Math.pow(i+n*e,t)}}function Uv(i){return(i=+i)==1?uh:function(e,t){return t-e?Bv(e,t,i):fu(isNaN(e)?t:e)}}function uh(i,e){var t=e-i;return t?Nv(i,t):fu(isNaN(i)?e:i)}const rc=function i(e){var t=Uv(e);function n(r,s){var o=t((r=Na(r)).r,(s=Na(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),h=uh(r.opacity,s.opacity);return function(l){return r.r=o(l),r.g=a(l),r.b=c(l),r.opacity=h(l),r+""}}return n.gamma=i,n}(1);function Ov(i,e){e||(e=[]);var t=i?Math.min(e.length,i.length):0,n=e.slice(),r;return function(s){for(r=0;r<t;++r)n[r]=i[r]*(1-s)+e[r]*s;return n}}function zv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kv(i,e){var t=e?e.length:0,n=i?Math.min(t,i.length):0,r=new Array(n),s=new Array(t),o;for(o=0;o<n;++o)r[o]=hu(i[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<n;++o)s[o]=r[o](a);return s}}function Hv(i,e){var t=new Date;return i=+i,e=+e,function(n){return t.setTime(i*(1-n)+e*n),t}}function ho(i,e){return i=+i,e=+e,function(t){return i*(1-t)+e*t}}function Gv(i,e){var t={},n={},r;(i===null||typeof i!="object")&&(i={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in i?t[r]=hu(i[r],e[r]):n[r]=e[r];return function(s){for(r in t)n[r]=t[r](s);return n}}var Ba=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ma=new RegExp(Ba.source,"g");function Vv(i){return function(){return i}}function Wv(i){return function(e){return i(e)+""}}function jv(i,e){var t=Ba.lastIndex=ma.lastIndex=0,n,r,s,o=-1,a=[],c=[];for(i=i+"",e=e+"";(n=Ba.exec(i))&&(r=ma.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:ho(n,r)})),t=ma.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?Wv(c[0].x):Vv(e):(e=c.length,function(h){for(var l=0,u;l<e;++l)a[(u=c[l]).i]=u.x(h);return a.join("")})}function hu(i,e){var t=typeof e,n;return e==null||t==="boolean"?fu(e):(t==="number"?ho:t==="string"?(n=ys(e))?(e=n,rc):jv:e instanceof ys?rc:e instanceof Date?Hv:zv(e)?Ov:Array.isArray(e)?kv:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Gv:ho)(i,e)}function qv(i,e){return i=+i,e=+e,function(t){return Math.round(i*(1-t)+e*t)}}function Xv(i){return function(){return i}}function Yv(i){return+i}var sc=[0,1];function Ir(i){return i}function Ua(i,e){return(e-=i=+i)?function(t){return(t-i)/e}:Xv(isNaN(e)?NaN:.5)}function Zv(i,e){var t;return i>e&&(t=i,i=e,e=t),function(n){return Math.max(i,Math.min(e,n))}}function Kv(i,e,t){var n=i[0],r=i[1],s=e[0],o=e[1];return r<n?(n=Ua(r,n),s=t(o,s)):(n=Ua(n,r),s=t(s,o)),function(a){return s(n(a))}}function Qv(i,e,t){var n=Math.min(i.length,e.length)-1,r=new Array(n),s=new Array(n),o=-1;for(i[n]<i[0]&&(i=i.slice().reverse(),e=e.slice().reverse());++o<n;)r[o]=Ua(i[o],i[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=gv(i,a,1,n)-1;return s[c](r[c](a))}}function $v(i,e){return e.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function Jv(){var i=sc,e=sc,t=hu,n,r,s,o=Ir,a,c,h;function l(){var f=Math.min(i.length,e.length);return o!==Ir&&(o=Zv(i[0],i[f-1])),a=f>2?Qv:Kv,c=h=null,u}function u(f){return f==null||isNaN(f=+f)?s:(c||(c=a(i.map(n),e,t)))(n(o(f)))}return u.invert=function(f){return o(r((h||(h=a(e,i.map(n),ho)))(f)))},u.domain=function(f){return arguments.length?(i=Array.from(f,Yv),l()):i.slice()},u.range=function(f){return arguments.length?(e=Array.from(f),l()):e.slice()},u.rangeRound=function(f){return e=Array.from(f),t=qv,l()},u.clamp=function(f){return arguments.length?(o=f?!0:Ir,l()):o!==Ir},u.interpolate=function(f){return arguments.length?(t=f,l()):t},u.unknown=function(f){return arguments.length?(s=f,u):s},function(f,p){return n=f,r=p,l()}}function e1(){return Jv()(Ir,Ir)}function t1(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function po(i,e){if((t=(i=e?i.toExponential(e-1):i.toExponential()).indexOf("e"))<0)return null;var t,n=i.slice(0,t);return[n.length>1?n[0]+n.slice(2):n,+i.slice(t+1)]}function qr(i){return i=po(Math.abs(i)),i?i[1]:NaN}function n1(i,e){return function(t,n){for(var r=t.length,s=[],o=0,a=i[0],c=0;r>0&&a>0&&(c+a+1>n&&(a=Math.max(1,n-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>n));)a=i[o=(o+1)%i.length];return s.reverse().join(e)}}function i1(i){return function(e){return e.replace(/[0-9]/g,function(t){return i[+t]})}}var r1=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function mo(i){if(!(e=r1.exec(i)))throw new Error("invalid format: "+i);var e;return new du({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}mo.prototype=du.prototype;function du(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}du.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function s1(i){e:for(var e=i.length,t=1,n=-1,r;t<e;++t)switch(i[t]){case".":n=r=t;break;case"0":n===0&&(n=t),r=t;break;default:if(!+i[t])break e;n>0&&(n=0);break}return n>0?i.slice(0,n)+i.slice(r+1):i}var lh;function o1(i,e){var t=po(i,e);if(!t)return i+"";var n=t[0],r=t[1],s=r-(lh=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=n.length;return s===o?n:s>o?n+new Array(s-o+1).join("0"):s>0?n.slice(0,s)+"."+n.slice(s):"0."+new Array(1-s).join("0")+po(i,Math.max(0,e+s-1))[0]}function oc(i,e){var t=po(i,e);if(!t)return i+"";var n=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+n:n.length>r+1?n.slice(0,r+1)+"."+n.slice(r+1):n+new Array(r-n.length+2).join("0")}const ac={"%":(i,e)=>(i*100).toFixed(e),b:i=>Math.round(i).toString(2),c:i=>i+"",d:t1,e:(i,e)=>i.toExponential(e),f:(i,e)=>i.toFixed(e),g:(i,e)=>i.toPrecision(e),o:i=>Math.round(i).toString(8),p:(i,e)=>oc(i*100,e),r:oc,s:o1,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function uc(i){return i}var lc=Array.prototype.map,cc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function a1(i){var e=i.grouping===void 0||i.thousands===void 0?uc:n1(lc.call(i.grouping,Number),i.thousands+""),t=i.currency===void 0?"":i.currency[0]+"",n=i.currency===void 0?"":i.currency[1]+"",r=i.decimal===void 0?".":i.decimal+"",s=i.numerals===void 0?uc:i1(lc.call(i.numerals,String)),o=i.percent===void 0?"%":i.percent+"",a=i.minus===void 0?"−":i.minus+"",c=i.nan===void 0?"NaN":i.nan+"";function h(u){u=mo(u);var f=u.fill,p=u.align,g=u.sign,_=u.symbol,m=u.zero,d=u.width,y=u.comma,v=u.precision,b=u.trim,M=u.type;M==="n"?(y=!0,M="g"):ac[M]||(v===void 0&&(v=12),b=!0,M="g"),(m||f==="0"&&p==="=")&&(m=!0,f="0",p="=");var S=_==="$"?t:_==="#"&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",P=_==="$"?n:/[%p]/.test(M)?o:"",E=ac[M],w=/[defgprs%]/.test(M);v=v===void 0?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function D(N){var W=S,B=P,H,G,K;if(M==="c")B=E(N)+B,N="";else{N=+N;var U=N<0||1/N<0;if(N=isNaN(N)?c:E(Math.abs(N),v),b&&(N=s1(N)),U&&+N==0&&g!=="+"&&(U=!1),W=(U?g==="("?g:a:g==="-"||g==="("?"":g)+W,B=(M==="s"?cc[8+lh/3]:"")+B+(U&&g==="("?")":""),w){for(H=-1,G=N.length;++H<G;)if(K=N.charCodeAt(H),48>K||K>57){B=(K===46?r+N.slice(H+1):N.slice(H))+B,N=N.slice(0,H);break}}}y&&!m&&(N=e(N,1/0));var Q=W.length+N.length+B.length,J=Q<d?new Array(d-Q+1).join(f):"";switch(y&&m&&(N=e(J+N,J.length?d-B.length:1/0),J=""),p){case"<":N=W+N+B+J;break;case"=":N=W+J+N+B;break;case"^":N=J.slice(0,Q=J.length>>1)+W+N+B+J.slice(Q);break;default:N=J+W+N+B;break}return s(N)}return D.toString=function(){return u+""},D}function l(u,f){var p=h((u=mo(u),u.type="f",u)),g=Math.max(-8,Math.min(8,Math.floor(qr(f)/3)))*3,_=Math.pow(10,-g),m=cc[8+g/3];return function(d){return p(_*d)+m}}return{format:h,formatPrefix:l}}var eo,ch,fh;u1({thousands:",",grouping:[3],currency:["$",""]});function u1(i){return eo=a1(i),ch=eo.format,fh=eo.formatPrefix,eo}function l1(i){return Math.max(0,-qr(Math.abs(i)))}function c1(i,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(qr(e)/3)))*3-qr(Math.abs(i)))}function f1(i,e){return i=Math.abs(i),e=Math.abs(e)-i,Math.max(0,qr(e)-qr(i))+1}function h1(i,e,t,n){var r=Mv(i,e,t),s;switch(n=mo(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(i),Math.abs(e));return n.precision==null&&!isNaN(s=c1(r,o))&&(n.precision=s),fh(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(s=f1(r,Math.max(Math.abs(i),Math.abs(e))))&&(n.precision=s-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(s=l1(r))&&(n.precision=s-(n.type==="%")*2);break}}return ch(n)}function d1(i){var e=i.domain;return i.ticks=function(t){var n=e();return yv(n[0],n[n.length-1],t??10)},i.tickFormat=function(t,n){var r=e();return h1(r[0],r[r.length-1],t??10,n)},i.nice=function(t){t==null&&(t=10);var n=e(),r=0,s=n.length-1,o=n[r],a=n[s],c,h,l=10;for(a<o&&(h=o,o=a,a=h,h=r,r=s,s=h);l-- >0;){if(h=Ia(o,a,t),h===c)return n[r]=o,n[s]=a,e(n);if(h>0)o=Math.floor(o/h)*h,a=Math.ceil(a/h)*h;else if(h<0)o=Math.ceil(o*h)/h,a=Math.floor(a*h)/h;else break;c=h}return i},i}function Oa(){var i=e1();return i.copy=function(){return $v(i,Oa())},wv.apply(i,arguments),d1(i)}function fc(i,e,t){const n=i.slice();return n[11]=e[t],n[13]=t,n}function hc(i,e,t){const n=i.slice();return n[14]=e[t],n[13]=t,n}function dc(i,e,t){const n=i.slice();return n[16]=e[t],n}function pc(i){let e,t,n,r=i[16]+"",s,o;return{c(){e=ni("g"),t=ni("line"),n=ni("text"),s=yt(r),this.h()},l(a){e=ii(a,"g",{class:!0,transform:!0});var c=Se(e);t=ii(c,"line",{class:!0,x2:!0,"stroke-dasharray":!0,"stroke-width":!0}),Se(t).forEach(le),n=ii(c,"text",{class:!0,y:!0});var h=Se(n);s=Mt(h,r),h.forEach(le),c.forEach(le),this.h()},h(){pe(t,"class","stroke-base-300"),pe(t,"x2","100%"),pe(t,"stroke-dasharray",5),pe(t,"stroke-width",.75),pe(n,"class","text-xs"),pe(n,"y","-4"),pe(e,"class","text-xs"),pe(e,"transform",o="translate(0, "+i[4](i[16])+")")},m(a,c){Xe(a,e,c),ne(e,t),ne(e,n),ne(n,s)},p(a,c){c&16&&o!==(o="translate(0, "+a[4](a[16])+")")&&pe(e,"transform",o)},d(a){a&&le(e)}}}function mc(i){let e,t,n,r,s;return{c(){e=ni("g"),t=ni("text"),n=yt(i[13]),this.h()},l(o){e=ii(o,"g",{class:!0,transform:!0});var a=Se(e);t=ii(a,"text",{class:!0,x:!0,y:!0});var c=Se(t);n=Mt(c,i[13]),c.forEach(le),a.forEach(le),this.h()},h(){pe(t,"class","text-xs"),pe(t,"x",r=i[3]/2),pe(t,"y","-4"),pe(e,"class","tick"),pe(e,"transform",s="translate("+i[5](i[13])+","+i[2]+")")},m(o,a){Xe(o,e,a),ne(e,t),ne(t,n)},p(o,a){a&8&&r!==(r=o[3]/2)&&pe(t,"x",r),a&36&&s!==(s="translate("+o[5](o[13])+","+o[2]+")")&&pe(e,"transform",s)},d(o){o&&le(e)}}}function gc(i){let e,t,n,r,s;return{c(){e=ni("g"),t=ni("rect"),this.h()},l(o){e=ii(o,"g",{transform:!0});var a=Se(e);t=ii(a,"rect",{class:!0,width:!0,height:!0}),Se(t).forEach(le),a.forEach(le),this.h()},h(){pe(t,"class","fill-base-content"),pe(t,"width",n=i[3]+1),pe(t,"height",r=i[4](0)-i[4](i[11].coefficient(i[6].u))),pe(e,"transform",s="translate("+(i[5](i[13])+2)+", "+i[4](i[11].coefficient(i[6].u))+")")},m(o,a){Xe(o,e,a),ne(e,t)},p(o,a){a&8&&n!==(n=o[3]+1)&&pe(t,"width",n),a&81&&r!==(r=o[4](0)-o[4](o[11].coefficient(o[6].u)))&&pe(t,"height",r),a&113&&s!==(s="translate("+(o[5](o[13])+2)+", "+o[4](o[11].coefficient(o[6].u))+")")&&pe(e,"transform",s)},d(o){o&&le(e)}}}function p1(i){let e,t,n,r,s,o,a,c,h,l,u=i[7],f=[];for(let d=0;d<u.length;d+=1)f[d]=pc(dc(i,u,d));let p=i[0].points,g=[];for(let d=0;d<p.length;d+=1)g[d]=mc(hc(i,p,d));let _=i[0].points,m=[];for(let d=0;d<_.length;d+=1)m[d]=gc(fc(i,_,d));return{c(){e=Ee("div"),t=Ee("h2"),n=yt("Basis Function Values"),r=Te(),s=Ee("div"),o=ni("svg"),a=ni("g");for(let d=0;d<f.length;d+=1)f[d].c();c=ni("g");for(let d=0;d<g.length;d+=1)g[d].c();h=ni("g");for(let d=0;d<m.length;d+=1)m[d].c();this.h()},l(d){e=Ae(d,"DIV",{});var y=Se(e);t=Ae(y,"H2",{class:!0});var v=Se(t);n=Mt(v,"Basis Function Values"),v.forEach(le),r=Pe(y),s=Ae(y,"DIV",{class:!0});var b=Se(s);o=ii(b,"svg",{class:!0});var M=Se(o);a=ii(M,"g",{});var S=Se(a);for(let w=0;w<f.length;w+=1)f[w].l(S);S.forEach(le),c=ii(M,"g",{});var P=Se(c);for(let w=0;w<g.length;w+=1)g[w].l(P);P.forEach(le),h=ii(M,"g",{});var E=Se(h);for(let w=0;w<m.length;w+=1)m[w].l(E);E.forEach(le),M.forEach(le),b.forEach(le),y.forEach(le),this.h()},h(){pe(t,"class","text-center font-bold"),pe(o,"class","w-full h-52"),pe(s,"class","w-full my-2 mx-auto"),Df(()=>i[9].call(s))},m(d,y){Xe(d,e,y),ne(e,t),ne(t,n),ne(e,r),ne(e,s),ne(s,o),ne(o,a);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(a,null);ne(o,c);for(let v=0;v<g.length;v+=1)g[v]&&g[v].m(c,null);ne(o,h);for(let v=0;v<m.length;v+=1)m[v]&&m[v].m(h,null);l=Sf(s,i[9].bind(s))},p(d,[y]){if(y&144){u=d[7];let v;for(v=0;v<u.length;v+=1){const b=dc(d,u,v);f[v]?f[v].p(b,y):(f[v]=pc(b),f[v].c(),f[v].m(a,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=u.length}if(y&45){p=d[0].points;let v;for(v=0;v<p.length;v+=1){const b=hc(d,p,v);g[v]?g[v].p(b,y):(g[v]=mc(b),g[v].c(),g[v].m(c,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=p.length}if(y&121){_=d[0].points;let v;for(v=0;v<_.length;v+=1){const b=fc(d,_,v);m[v]?m[v].p(b,y):(m[v]=gc(b),m[v].c(),m[v].m(h,null))}for(;v<m.length;v+=1)m[v].d(1);m.length=_.length}},i:dn,o:dn,d(d){d&&le(e),Rn(f,d),Rn(g,d),Rn(m,d),l()}}}function m1(i,e,t){let n,r,s,o,a;qt(i,Ci,g=>t(6,a=g));let{curve:c}=e;const h=[0,.25,.5,.75,1],l={top:20,right:0,bottom:20,left:25};let u=500,f=200;function p(){u=this.clientWidth,f=this.clientHeight,t(1,u),t(2,f)}return i.$$set=g=>{"curve"in g&&t(0,c=g.curve)},i.$$.update=()=>{i.$$.dirty&3&&t(5,n=Oa().domain([0,c.points.length]).range([l.left,u-l.right])),i.$$.dirty&4&&t(4,r=Oa().domain([0,1]).range([f-l.bottom,l.top])),i.$$.dirty&2&&t(8,s=u-(l.left+l.right)),i.$$.dirty&257&&t(3,o=s/c.points.length)},[c,u,f,o,r,n,a,h,s,p]}class g1 extends rn{constructor(e){super(),sn(this,e,m1,p1,on,{curve:0})}}function _c(i,e,t){const n=i.slice();return n[19]=e[t],n[21]=t,n}function vc(i,e,t){const n=i.slice();return n[22]=e[t].vector,n[23]=e,n[24]=t,n}function xc(i,e,t){const n=i.slice();return n[22]=e[t].vector,n[25]=e,n[26]=t,n}function yc(i,e,t){const n=i.slice();return n[27]=e[t][0],n[28]=e[t][1],n[29]=e,n[30]=t,n}function Mc(i,e,t){const n=i.slice();return n[27]=e[t][0],n[28]=e[t][1],n[31]=e,n[32]=t,n}function wc(i,e,t){const n=i.slice();return n[33]=e[t],n[26]=t,n}function bc(i){let e,t=i[33]+"",n,r,s,o;function a(){return i[4](i[26])}return{c(){e=Ee("button"),n=yt(t),r=Te(),this.h()},l(c){e=Ae(c,"BUTTON",{class:!0});var h=Se(e);n=Mt(h,t),r=Pe(h),h.forEach(le),this.h()},h(){pe(e,"class","tab"),Oi(e,"tab-active",i[2].curveActive==i[26]),Oi(e,"italic",i[2].curveActive==i[26])},m(c,h){Xe(c,e,h),ne(e,n),ne(e,r),s||(o=Ot(e,"click",a),s=!0)},p(c,h){i=c,h[0]&4&&Oi(e,"tab-active",i[2].curveActive==i[26]),h[0]&4&&Oi(e,"italic",i[2].curveActive==i[26])},d(c){c&&le(e),s=!1,o()}}}function _1(i){return{c:dn,l:dn,m:dn,p:dn,i:dn,o:dn,d:dn}}function v1(i){let e,t;return e=new g1({props:{curve:i[0]}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r[0]&1&&(s.curve=n[0]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Dc(i){let e,t,n,r,s,o,a,c=i[2].w.toFixed(2)+"",h,l,u;return{c(){e=Ee("label"),t=Ee("input"),n=Te(),r=Ee("span"),s=Ee("b"),o=yt("W"),a=Te(),h=yt(c),this.h()},l(f){e=Ae(f,"LABEL",{class:!0});var p=Se(e);t=Ae(p,"INPUT",{type:!0,min:!0,max:!0,class:!0}),n=Pe(p),r=Ae(p,"SPAN",{class:!0});var g=Se(r);s=Ae(g,"B",{});var _=Se(s);o=Mt(_,"W"),_.forEach(le),a=Pe(g),h=Mt(g,c),g.forEach(le),p.forEach(le),this.h()},h(){pe(t,"type","range"),pe(t,"min","0"),pe(t,"max","100"),t.value="50",pe(t,"class","range"),pe(r,"class","text-left text-sm"),pe(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(f,p){Xe(f,e,p),ne(e,t),ne(e,n),ne(e,r),ne(r,s),ne(s,o),ne(r,a),ne(r,h),l||(u=Ot(t,"input",i[6]),l=!0)},p(f,p){p[0]&4&&c!==(c=f[2].w.toFixed(2)+"")&&wo(h,c)},d(f){f&&le(e),l=!1,u()}}}function Sc(i){let e,t,n,r,s=i[28].label+"",o,a,c;function h(){i[7].call(t,i[27])}return{c(){e=Ee("label"),t=Ee("input"),n=Te(),r=Ee("span"),o=yt(s),this.h()},l(l){e=Ae(l,"LABEL",{class:!0});var u=Se(e);t=Ae(u,"INPUT",{type:!0,class:!0}),n=Pe(u),r=Ae(u,"SPAN",{class:!0});var f=Se(r);o=Mt(f,s),f.forEach(le),u.forEach(le),this.h()},h(){pe(t,"type","checkbox"),pe(t,"class","toggle toggle-sm"),pe(r,"class","text-left text-sm"),pe(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(l,u){Xe(l,e,u),ne(e,t),t.checked=i[2].toggles[i[27]].value,ne(e,n),ne(e,r),ne(r,o),a||(c=Ot(t,"change",h),a=!0)},p(l,u){i=l,u[0]&4&&(t.checked=i[2].toggles[i[27]].value),u[0]&4&&s!==(s=i[28].label+"")&&wo(o,s)},d(l){l&&le(e),a=!1,c()}}}function Ec(i){let e,t=Object.entries(i[2].surface),n=[];for(let r=0;r<t.length;r+=1)n[r]=Ac(yc(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Wn()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=Wn()},m(r,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,s);Xe(r,e,s)},p(r,s){if(s[0]&4){t=Object.entries(r[2].surface);let o;for(o=0;o<t.length;o+=1){const a=yc(r,t,o);n[o]?n[o].p(a,s):(n[o]=Ac(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){Rn(n,r),r&&le(e)}}}function Ac(i){let e,t,n,r,s=i[28].label+"",o,a,c,h;function l(){i[8].call(t,i[27])}return{c(){e=Ee("label"),t=Ee("input"),n=Te(),r=Ee("span"),o=yt(s),a=Te(),this.h()},l(u){e=Ae(u,"LABEL",{class:!0});var f=Se(e);t=Ae(f,"INPUT",{type:!0,class:!0}),n=Pe(f),r=Ae(f,"SPAN",{class:!0});var p=Se(r);o=Mt(p,s),p.forEach(le),a=Pe(f),f.forEach(le),this.h()},h(){pe(t,"type","checkbox"),pe(t,"class","toggle toggle-sm"),pe(r,"class","text-left text-sm"),pe(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(u,f){Xe(u,e,f),ne(e,t),t.checked=i[2].surface[i[27]].value,ne(e,n),ne(e,r),ne(r,o),ne(e,a),c||(h=Ot(t,"change",l),c=!0)},p(u,f){i=u,f[0]&4&&(t.checked=i[2].surface[i[27]].value),f[0]&4&&s!==(s=i[28].label+"")&&wo(o,s)},d(u){u&&le(e),c=!1,h()}}}function Cc(i){let e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m,d,y;function v(...S){return i[11](i[22],i[25],i[26],...S)}function b(...S){return i[12](i[22],i[25],i[26],...S)}function M(...S){return i[13](i[22],i[25],i[26],...S)}return{c(){e=Ee("tr"),t=Ee("th"),n=yt(i[26]),r=Te(),s=Ee("td"),o=Ee("input"),c=Te(),h=Ee("td"),l=Ee("input"),f=Te(),p=Ee("td"),g=Ee("input"),m=Te(),this.h()},l(S){e=Ae(S,"TR",{});var P=Se(e);t=Ae(P,"TH",{class:!0});var E=Se(t);n=Mt(E,i[26]),E.forEach(le),r=Pe(P),s=Ae(P,"TD",{});var w=Se(s);o=Ae(w,"INPUT",{type:!0,class:!0}),w.forEach(le),c=Pe(P),h=Ae(P,"TD",{});var D=Se(h);l=Ae(D,"INPUT",{type:!0,class:!0}),D.forEach(le),f=Pe(P),p=Ae(P,"TD",{});var N=Se(p);g=Ae(N,"INPUT",{type:!0,class:!0}),N.forEach(le),m=Pe(P),P.forEach(le),this.h()},h(){pe(t,"class","text-center"),pe(o,"type","number"),pe(o,"class","input input-bordered input-xs w-full max-w-xs"),o.value=a=i[22].x.toFixed(2),pe(l,"type","number"),pe(l,"class","input input-bordered input-xs w-full max-w-xs"),l.value=u=i[22].y.toFixed(2),pe(g,"type","number"),pe(g,"class","input input-bordered input-xs w-full max-w-xs"),g.value=_=i[22].z.toFixed(2)},m(S,P){Xe(S,e,P),ne(e,t),ne(t,n),ne(e,r),ne(e,s),ne(s,o),ne(e,c),ne(e,h),ne(h,l),ne(e,f),ne(e,p),ne(p,g),ne(e,m),d||(y=[Ot(o,"input",v),Ot(l,"input",b),Ot(g,"input",M)],d=!0)},p(S,P){i=S,P[0]&1&&a!==(a=i[22].x.toFixed(2))&&o.value!==a&&(o.value=a),P[0]&1&&u!==(u=i[22].y.toFixed(2))&&l.value!==u&&(l.value=u),P[0]&1&&_!==(_=i[22].z.toFixed(2))&&g.value!==_&&(g.value=_)},d(S){S&&le(e),d=!1,bo(y)}}}function Tc(i){let e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m,d,y,v,b,M,S;function P(...D){return i[16](i[22],i[23],i[24],...D)}function E(...D){return i[17](i[22],i[23],i[24],...D)}function w(...D){return i[18](i[22],i[23],i[24],...D)}return{c(){e=Ee("tr"),t=Ee("th"),n=yt("("),r=yt(i[21]),s=yt(", "),o=yt(i[24]),a=yt(")"),c=Te(),h=Ee("td"),l=Ee("input"),f=Te(),p=Ee("td"),g=Ee("input"),m=Te(),d=Ee("td"),y=Ee("input"),b=Te(),this.h()},l(D){e=Ae(D,"TR",{});var N=Se(e);t=Ae(N,"TH",{class:!0});var W=Se(t);n=Mt(W,"("),r=Mt(W,i[21]),s=Mt(W,", "),o=Mt(W,i[24]),a=Mt(W,")"),W.forEach(le),c=Pe(N),h=Ae(N,"TD",{});var B=Se(h);l=Ae(B,"INPUT",{type:!0,class:!0}),B.forEach(le),f=Pe(N),p=Ae(N,"TD",{});var H=Se(p);g=Ae(H,"INPUT",{type:!0,class:!0}),H.forEach(le),m=Pe(N),d=Ae(N,"TD",{});var G=Se(d);y=Ae(G,"INPUT",{type:!0,class:!0}),G.forEach(le),b=Pe(N),N.forEach(le),this.h()},h(){pe(t,"class","text-center"),pe(l,"type","number"),pe(l,"class","input input-bordered input-xs w-full max-w-xs"),l.value=u=i[22].x.toFixed(2),pe(g,"type","number"),pe(g,"class","input input-bordered input-xs w-full max-w-xs"),g.value=_=i[22].y.toFixed(2),pe(y,"type","number"),pe(y,"class","input input-bordered input-xs w-full max-w-xs"),y.value=v=i[22].z.toFixed(2)},m(D,N){Xe(D,e,N),ne(e,t),ne(t,n),ne(t,r),ne(t,s),ne(t,o),ne(t,a),ne(e,c),ne(e,h),ne(h,l),ne(e,f),ne(e,p),ne(p,g),ne(e,m),ne(e,d),ne(d,y),ne(e,b),M||(S=[Ot(l,"input",P),Ot(g,"input",E),Ot(y,"input",w)],M=!0)},p(D,N){i=D,N[0]&2&&u!==(u=i[22].x.toFixed(2))&&l.value!==u&&(l.value=u),N[0]&2&&_!==(_=i[22].y.toFixed(2))&&g.value!==_&&(g.value=_),N[0]&2&&v!==(v=i[22].z.toFixed(2))&&y.value!==v&&(y.value=v)},d(D){D&&le(e),M=!1,bo(S)}}}function Pc(i){let e,t=i[19],n=[];for(let r=0;r<t.length;r+=1)n[r]=Tc(vc(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Wn()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=Wn()},m(r,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,s);Xe(r,e,s)},p(r,s){if(s[0]&2){t=r[19];let o;for(o=0;o<t.length;o+=1){const a=vc(r,t,o);n[o]?n[o].p(a,s):(n[o]=Tc(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){Rn(n,r),r&&le(e)}}}function x1(i){let e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m,d=i[2].u.toFixed(2)+"",y,v,b,M,S,P,E,w,D,N,W,B,H,G,K,U,Q,J,fe,re,ve,ee,ue,_e,te,V,ke,Re,ge,Ne,at,Fe,ze,ct,_t,bt,ft,ot,ht,Tt,F,x,A,R,O,j,T,k,L,q,ae,he,Z,Me,Ce,Le,Ze,z,$=i[3],se=[];for(let be=0;be<$.length;be+=1)se[be]=bc(wc(i,$,be));const me=[v1,_1],xe=[];function ut(be,nt){return be[2].curveActive===0?0:1}a=ut(i),c=xe[a]=me[a](i);let Ue=i[2].curveActive===1&&Dc(i),pt=Object.entries(i[2].toggles),mt=[];for(let be=0;be<pt.length;be+=1)mt[be]=Sc(Mc(i,pt,be));let Qe=i[2].curveActive===1&&Ec(i),zt=i[0].points,vt=[];for(let be=0;be<zt.length;be+=1)vt[be]=Cc(xc(i,zt,be));let En=i[1].points,Ut=[];for(let be=0;be<En.length;be+=1)Ut[be]=Pc(_c(i,En,be));return{c(){e=Ee("div"),t=Ee("h1"),n=yt("Control Panel"),r=Te(),s=Ee("div");for(let be=0;be<se.length;be+=1)se[be].c();o=Te(),c.c(),h=Te(),l=Ee("label"),u=Ee("input"),f=Te(),p=Ee("span"),g=Ee("b"),_=yt("U"),m=Te(),y=yt(d),v=Te(),Ue&&Ue.c(),b=Te(),M=Ee("div");for(let be=0;be<mt.length;be+=1)mt[be].c();S=Te(),Qe&&Qe.c(),P=Te(),E=Ee("div"),w=Ee("div"),D=Ee("button"),N=yt("Add Control Point"),W=Te(),B=Ee("button"),H=yt("Remove Control Point"),G=Te(),K=Ee("div"),U=Ee("table"),Q=Ee("thead"),J=Ee("tr"),fe=Ee("th"),re=yt("Index"),ve=Te(),ee=Ee("th"),ue=yt("X"),_e=Te(),te=Ee("th"),V=yt("Y"),ke=Te(),Re=Ee("th"),ge=yt("Z"),Ne=Te();for(let be=0;be<vt.length;be+=1)vt[be].c();at=Te(),Fe=Ee("div"),ze=Ee("div"),ct=Ee("button"),_t=yt("Add Control Point Row"),bt=Te(),ft=Ee("button"),ot=yt("Remove Control Point Row"),ht=Te(),Tt=Ee("div"),F=Ee("table"),x=Ee("thead"),A=Ee("tr"),R=Ee("th"),O=yt("Index"),j=Te(),T=Ee("th"),k=yt("X"),L=Te(),q=Ee("th"),ae=yt("Y"),he=Te(),Z=Ee("th"),Me=yt("Z"),Ce=Te();for(let be=0;be<Ut.length;be+=1)Ut[be].c();this.h()},l(be){e=Ae(be,"DIV",{class:!0});var nt=Se(e);t=Ae(nt,"H1",{class:!0});var xt=Se(t);n=Mt(xt,"Control Panel"),xt.forEach(le),r=Pe(nt),s=Ae(nt,"DIV",{class:!0});var C=Se(s);for(let Lt=0;Lt<se.length;Lt+=1)se[Lt].l(C);C.forEach(le),o=Pe(nt),c.l(nt),h=Pe(nt),l=Ae(nt,"LABEL",{class:!0});var X=Se(l);u=Ae(X,"INPUT",{type:!0,min:!0,max:!0,class:!0}),f=Pe(X),p=Ae(X,"SPAN",{class:!0});var ie=Se(p);g=Ae(ie,"B",{});var Y=Se(g);_=Mt(Y,"U"),Y.forEach(le),m=Pe(ie),y=Mt(ie,d),ie.forEach(le),X.forEach(le),v=Pe(nt),Ue&&Ue.l(nt),b=Pe(nt),M=Ae(nt,"DIV",{class:!0});var oe=Se(M);for(let Lt=0;Lt<mt.length;Lt+=1)mt[Lt].l(oe);S=Pe(oe),Qe&&Qe.l(oe),oe.forEach(le),P=Pe(nt),E=Ae(nt,"DIV",{});var Ie=Se(E);w=Ae(Ie,"DIV",{class:!0});var Oe=Se(w);D=Ae(Oe,"BUTTON",{class:!0});var qe=Se(D);N=Mt(qe,"Add Control Point"),qe.forEach(le),W=Pe(Oe),B=Ae(Oe,"BUTTON",{class:!0});var $e=Se(B);H=Mt($e,"Remove Control Point"),$e.forEach(le),G=Pe(Oe),K=Ae(Oe,"DIV",{class:!0});var et=Se(K);U=Ae(et,"TABLE",{class:!0});var Je=Se(U);Q=Ae(Je,"THEAD",{});var tt=Se(Q);J=Ae(tt,"TR",{});var it=Se(J);fe=Ae(it,"TH",{});var kt=Se(fe);re=Mt(kt,"Index"),kt.forEach(le),ve=Pe(it),ee=Ae(it,"TH",{class:!0});var an=Se(ee);ue=Mt(an,"X"),an.forEach(le),_e=Pe(it),te=Ae(it,"TH",{class:!0});var In=Se(te);V=Mt(In,"Y"),In.forEach(le),ke=Pe(it),Re=Ae(it,"TH",{class:!0});var Pt=Se(Re);ge=Mt(Pt,"Z"),Pt.forEach(le),it.forEach(le),tt.forEach(le),Ne=Pe(Je);for(let Lt=0;Lt<vt.length;Lt+=1)vt[Lt].l(Je);Je.forEach(le),et.forEach(le),Oe.forEach(le),Ie.forEach(le),at=Pe(nt),Fe=Ae(nt,"DIV",{});var rt=Se(Fe);ze=Ae(rt,"DIV",{class:!0});var Nn=Se(ze);ct=Ae(Nn,"BUTTON",{class:!0});var Nt=Se(ct);_t=Mt(Nt,"Add Control Point Row"),Nt.forEach(le),bt=Pe(Nn),ft=Ae(Nn,"BUTTON",{class:!0});var un=Se(ft);ot=Mt(un,"Remove Control Point Row"),un.forEach(le),ht=Pe(Nn),Tt=Ae(Nn,"DIV",{class:!0});var Vt=Se(Tt);F=Ae(Vt,"TABLE",{class:!0});var wt=Se(F);x=Ae(wt,"THEAD",{});var xi=Se(x);A=Ae(xi,"TR",{});var At=Se(A);R=Ae(At,"TH",{});var mn=Se(R);O=Mt(mn,"Index"),mn.forEach(le),j=Pe(At),T=Ae(At,"TH",{class:!0});var jn=Se(T);k=Mt(jn,"X"),jn.forEach(le),L=Pe(At),q=Ae(At,"TH",{class:!0});var Wt=Se(q);ae=Mt(Wt,"Y"),Wt.forEach(le),he=Pe(At),Z=Ae(At,"TH",{class:!0});var yi=Se(Z);Me=Mt(yi,"Z"),yi.forEach(le),At.forEach(le),xi.forEach(le),Ce=Pe(wt);for(let Lt=0;Lt<Ut.length;Lt+=1)Ut[Lt].l(wt);wt.forEach(le),Vt.forEach(le),Nn.forEach(le),rt.forEach(le),nt.forEach(le),this.h()},h(){pe(t,"class","text text-xl font-semibold text-center"),pe(s,"class","tabs justify-center"),pe(u,"type","range"),pe(u,"min","0"),pe(u,"max","100"),u.value="50",pe(u,"class","range"),pe(p,"class","text-left text-sm"),pe(l,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap"),pe(M,"class","form-control flex-row flex-wrap justify-evenly"),pe(D,"class","btn btn-outline btn-xs"),pe(B,"class","btn btn-outline btn-xs"),pe(ee,"class","text-center"),pe(te,"class","text-center"),pe(Re,"class","text-center"),pe(U,"class","table table-compact w-full"),pe(K,"class","h-52 overflow-auto"),pe(w,"class","flex flex-col justify-center space-y-2"),Oi(E,"hidden",i[2].curveActive!=0),pe(ct,"class","btn btn-outline btn-xs"),pe(ft,"class","btn btn-outline btn-xs"),pe(T,"class","text-center"),pe(q,"class","text-center"),pe(Z,"class","text-center"),pe(F,"class","table table-compact w-full"),pe(Tt,"class","h-80 overflow-auto"),pe(ze,"class","flex flex-col justify-center space-y-2"),Oi(Fe,"hidden",i[2].curveActive!=1),pe(e,"class","p-2")},m(be,nt){Xe(be,e,nt),ne(e,t),ne(t,n),ne(e,r),ne(e,s);for(let xt=0;xt<se.length;xt+=1)se[xt]&&se[xt].m(s,null);ne(e,o),xe[a].m(e,null),ne(e,h),ne(e,l),ne(l,u),ne(l,f),ne(l,p),ne(p,g),ne(g,_),ne(p,m),ne(p,y),ne(e,v),Ue&&Ue.m(e,null),ne(e,b),ne(e,M);for(let xt=0;xt<mt.length;xt+=1)mt[xt]&&mt[xt].m(M,null);ne(M,S),Qe&&Qe.m(M,null),ne(e,P),ne(e,E),ne(E,w),ne(w,D),ne(D,N),ne(w,W),ne(w,B),ne(B,H),ne(w,G),ne(w,K),ne(K,U),ne(U,Q),ne(Q,J),ne(J,fe),ne(fe,re),ne(J,ve),ne(J,ee),ne(ee,ue),ne(J,_e),ne(J,te),ne(te,V),ne(J,ke),ne(J,Re),ne(Re,ge),ne(U,Ne);for(let xt=0;xt<vt.length;xt+=1)vt[xt]&&vt[xt].m(U,null);ne(e,at),ne(e,Fe),ne(Fe,ze),ne(ze,ct),ne(ct,_t),ne(ze,bt),ne(ze,ft),ne(ft,ot),ne(ze,ht),ne(ze,Tt),ne(Tt,F),ne(F,x),ne(x,A),ne(A,R),ne(R,O),ne(A,j),ne(A,T),ne(T,k),ne(A,L),ne(A,q),ne(q,ae),ne(A,he),ne(A,Z),ne(Z,Me),ne(F,Ce);for(let xt=0;xt<Ut.length;xt+=1)Ut[xt]&&Ut[xt].m(F,null);Le=!0,Ze||(z=[Ot(u,"input",i[5]),Ot(D,"click",i[9]),Ot(B,"click",i[10]),Ot(ct,"click",i[14]),Ot(ft,"click",i[15])],Ze=!0)},p(be,nt){if(nt[0]&12){$=be[3];let C;for(C=0;C<$.length;C+=1){const X=wc(be,$,C);se[C]?se[C].p(X,nt):(se[C]=bc(X),se[C].c(),se[C].m(s,null))}for(;C<se.length;C+=1)se[C].d(1);se.length=$.length}let xt=a;if(a=ut(be),a===xt?xe[a].p(be,nt):(Hn(),ye(xe[xt],1,1,()=>{xe[xt]=null}),Gn(),c=xe[a],c?c.p(be,nt):(c=xe[a]=me[a](be),c.c()),de(c,1),c.m(e,h)),(!Le||nt[0]&4)&&d!==(d=be[2].u.toFixed(2)+"")&&wo(y,d),be[2].curveActive===1?Ue?Ue.p(be,nt):(Ue=Dc(be),Ue.c(),Ue.m(e,b)):Ue&&(Ue.d(1),Ue=null),nt[0]&4){pt=Object.entries(be[2].toggles);let C;for(C=0;C<pt.length;C+=1){const X=Mc(be,pt,C);mt[C]?mt[C].p(X,nt):(mt[C]=Sc(X),mt[C].c(),mt[C].m(M,S))}for(;C<mt.length;C+=1)mt[C].d(1);mt.length=pt.length}if(be[2].curveActive===1?Qe?Qe.p(be,nt):(Qe=Ec(be),Qe.c(),Qe.m(M,null)):Qe&&(Qe.d(1),Qe=null),nt[0]&1){zt=be[0].points;let C;for(C=0;C<zt.length;C+=1){const X=xc(be,zt,C);vt[C]?vt[C].p(X,nt):(vt[C]=Cc(X),vt[C].c(),vt[C].m(U,null))}for(;C<vt.length;C+=1)vt[C].d(1);vt.length=zt.length}if((!Le||nt[0]&4)&&Oi(E,"hidden",be[2].curveActive!=0),nt[0]&2){En=be[1].points;let C;for(C=0;C<En.length;C+=1){const X=_c(be,En,C);Ut[C]?Ut[C].p(X,nt):(Ut[C]=Pc(X),Ut[C].c(),Ut[C].m(F,null))}for(;C<Ut.length;C+=1)Ut[C].d(1);Ut.length=En.length}(!Le||nt[0]&4)&&Oi(Fe,"hidden",be[2].curveActive!=1)},i(be){Le||(de(c),Le=!0)},o(be){ye(c),Le=!1},d(be){be&&le(e),Rn(se,be),xe[a].d(),Ue&&Ue.d(),Rn(mt,be),Qe&&Qe.d(),Rn(vt,be),Rn(Ut,be),Ze=!1,bo(z)}}}function y1(i,e,t){let n;qt(i,Ci,S=>t(2,n=S));let{curve:r}=e,{surface:s}=e,o=["Curve","Surface"];const a=S=>{Ci.update(P=>({...P,curveActive:S}))},c=S=>{hs(Ci,n.u=+S.currentTarget.value/100,n)},h=S=>{hs(Ci,n.w=+S.currentTarget.value/100,n)};function l(S){n.toggles[S].value=this.checked,Ci.set(n)}function u(S){n.surface[S].value=this.checked,Ci.set(n)}const f=()=>{const S=new I(0,0,0);r.points.length>0&&(S.x=r.points[r.points.length-1].vector.x+1),r.addPoint(S),t(0,r)},p=()=>{r.removePoint(),t(0,r)},g=(S,P,E,w)=>{t(0,P[E].vector.x=+w.currentTarget.value,r)},_=(S,P,E,w)=>{t(0,P[E].vector.y=+w.currentTarget.value,r)},m=(S,P,E,w)=>{t(0,P[E].vector.z=+w.currentTarget.value,r)},d=()=>{let S=[];if(s.points.length>0){console.log(s.points);let P=s.points.length-1;for(let E=0;E<s.points[P].length;E++)console.log(E),S.push(new I(s.points[P][E].vector.x,s.points[P][E].vector.y,s.points[P][E].vector.z+1))}else S=[new I(0,0,0),new I(1,0,0),new I(2,0,0),new I(3,0,0)];s.addRow(S),t(1,s)},y=()=>{s.removeRow(),t(1,s)},v=(S,P,E,w)=>{t(1,P[E].vector.x=+w.currentTarget.value,s)},b=(S,P,E,w)=>{t(1,P[E].vector.y=+w.currentTarget.value,s)},M=(S,P,E,w)=>{t(1,P[E].vector.z=+w.currentTarget.value,s)};return i.$$set=S=>{"curve"in S&&t(0,r=S.curve),"surface"in S&&t(1,s=S.surface)},[r,s,n,o,a,c,h,l,u,f,p,g,_,m,d,y,v,b,M]}class M1 extends rn{constructor(e){super(),sn(this,e,y1,x1,on,{curve:0,surface:1},null,[-1,-1])}}function za(){return za=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},za.apply(this,arguments)}var hh={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function xn(i){return typeof i=="number"}function zi(i){return!i||typeof i!="object"||typeof i.constructor!="function"?!1:i.isBigNumber===!0&&typeof i.constructor.prototype=="object"&&i.constructor.prototype.isBigNumber===!0||typeof i.constructor.isDecimal=="function"&&i.constructor.isDecimal(i)===!0}function dh(i){return i&&typeof i=="object"&&Object.getPrototypeOf(i).isComplex===!0||!1}function ph(i){return i&&typeof i=="object"&&Object.getPrototypeOf(i).isFraction===!0||!1}function mh(i){return i&&i.constructor.prototype.isUnit===!0||!1}function go(i){return typeof i=="string"}var Fn=Array.isArray;function ds(i){return i&&i.constructor.prototype.isMatrix===!0||!1}function ka(i){return Array.isArray(i)||ds(i)}function w1(i){return i&&i.isDenseMatrix&&i.constructor.prototype.isMatrix===!0||!1}function b1(i){return i&&i.isSparseMatrix&&i.constructor.prototype.isMatrix===!0||!1}function D1(i){return i&&i.constructor.prototype.isRange===!0||!1}function gh(i){return i&&i.constructor.prototype.isIndex===!0||!1}function S1(i){return typeof i=="boolean"}function E1(i){return i&&i.constructor.prototype.isResultSet===!0||!1}function A1(i){return i&&i.constructor.prototype.isHelp===!0||!1}function C1(i){return typeof i=="function"}function T1(i){return i instanceof Date}function P1(i){return i instanceof RegExp}function F1(i){return!!(i&&typeof i=="object"&&i.constructor===Object&&!dh(i)&&!ph(i))}function L1(i){return i===null}function R1(i){return i===void 0}function I1(i){return i&&i.isAccessorNode===!0&&i.constructor.prototype.isNode===!0||!1}function N1(i){return i&&i.isArrayNode===!0&&i.constructor.prototype.isNode===!0||!1}function B1(i){return i&&i.isAssignmentNode===!0&&i.constructor.prototype.isNode===!0||!1}function U1(i){return i&&i.isBlockNode===!0&&i.constructor.prototype.isNode===!0||!1}function O1(i){return i&&i.isConditionalNode===!0&&i.constructor.prototype.isNode===!0||!1}function z1(i){return i&&i.isConstantNode===!0&&i.constructor.prototype.isNode===!0||!1}function k1(i){return i&&i.isFunctionAssignmentNode===!0&&i.constructor.prototype.isNode===!0||!1}function H1(i){return i&&i.isFunctionNode===!0&&i.constructor.prototype.isNode===!0||!1}function G1(i){return i&&i.isIndexNode===!0&&i.constructor.prototype.isNode===!0||!1}function V1(i){return i&&i.isNode===!0&&i.constructor.prototype.isNode===!0||!1}function W1(i){return i&&i.isObjectNode===!0&&i.constructor.prototype.isNode===!0||!1}function j1(i){return i&&i.isOperatorNode===!0&&i.constructor.prototype.isNode===!0||!1}function q1(i){return i&&i.isParenthesisNode===!0&&i.constructor.prototype.isNode===!0||!1}function X1(i){return i&&i.isRangeNode===!0&&i.constructor.prototype.isNode===!0||!1}function Y1(i){return i&&i.isRelationalNode===!0&&i.constructor.prototype.isNode===!0||!1}function Z1(i){return i&&i.isSymbolNode===!0&&i.constructor.prototype.isNode===!0||!1}function K1(i){return i&&i.constructor.prototype.isChain===!0||!1}function ga(i){var e=typeof i;return e==="object"?i===null?"null":zi(i)?"BigNumber":i.constructor&&i.constructor.name?i.constructor.name:"Object":e}function nr(i){var e=typeof i;if(e==="number"||e==="string"||e==="boolean"||i===null||i===void 0)return i;if(typeof i.clone=="function")return i.clone();if(Array.isArray(i))return i.map(function(t){return nr(t)});if(i instanceof Date)return new Date(i.valueOf());if(zi(i))return i;if(i instanceof RegExp)throw new TypeError("Cannot clone "+i);return Q1(i,nr)}function Q1(i,e){var t={};for(var n in i)_o(i,n)&&(t[n]=e(i[n]));return t}function Ha(i,e){var t,n,r;if(Array.isArray(i)){if(!Array.isArray(e)||i.length!==e.length)return!1;for(n=0,r=i.length;n<r;n++)if(!Ha(i[n],e[n]))return!1;return!0}else{if(typeof i=="function")return i===e;if(i instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in i)if(!(t in e)||!Ha(i[t],e[t]))return!1;for(t in e)if(!(t in i))return!1;return!0}else return i===e}}function _o(i,e){return i&&Object.hasOwnProperty.call(i,e)}function $1(i,e){for(var t={},n=0;n<e.length;n++){var r=e[n],s=i[r];s!==void 0&&(t[r]=s)}return t}var J1=["Matrix","Array"],ex=["number","BigNumber","Fraction"],_h=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(hh)};za(_h,hh,{MATRIX_OPTIONS:J1,NUMBER_OPTIONS:ex});function Zn(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=tx(i))||e&&i&&typeof i.length=="number"){t&&(i=t);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(h){throw h},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(i)},n:function(){var h=t.next();return s=h.done,h},e:function(h){o=!0,a=h},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function tx(i,e){if(i){if(typeof i=="string")return Fc(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fc(i,e)}}function Fc(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Nr(i){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nr(i)}function Lc(){return!0}function Un(){return!1}function Pr(){}var Rc="Argument is not a typed-function.";function vh(){function i(x){return Nr(x)==="object"&&x!==null&&x.constructor===Object}var e=[{name:"number",test:function(A){return typeof A=="number"}},{name:"string",test:function(A){return typeof A=="string"}},{name:"boolean",test:function(A){return typeof A=="boolean"}},{name:"Function",test:function(A){return typeof A=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(A){return A instanceof Date}},{name:"RegExp",test:function(A){return A instanceof RegExp}},{name:"Object",test:i},{name:"null",test:function(A){return A===null}},{name:"undefined",test:function(A){return A===void 0}}],t={name:"any",test:Lc,isAny:!0},n,r,s=0,o={createCount:0};function a(x){var A=n.get(x);if(A)return A;var R='Unknown type "'+x+'"',O=x.toLowerCase(),j,T=Zn(r),k;try{for(T.s();!(k=T.n()).done;)if(j=k.value,j.toLowerCase()===O){R+='. Did you mean "'+j+'" ?';break}}catch(L){T.e(L)}finally{T.f()}throw new TypeError(R)}function c(x){for(var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any",R=A?a(A).index:r.length,O=[],j=0;j<x.length;++j){if(!x[j]||typeof x[j].name!="string"||typeof x[j].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");var T=x[j].name;if(n.has(T))throw new TypeError('Duplicate type name "'+T+'"');O.push(T),n.set(T,{name:T,test:x[j].test,isAny:x[j].isAny,index:R+j,conversionsTo:[]})}var k=r.slice(R);r=r.slice(0,R).concat(O).concat(k);for(var L=R+O.length;L<r.length;++L)n.get(r[L]).index=L}function h(){n=new Map,r=[],s=0,c([t],!1)}h(),c(e);function l(){var x,A=Zn(r),R;try{for(A.s();!(R=A.n()).done;)x=R.value,n.get(x).conversionsTo=[]}catch(O){A.e(O)}finally{A.f()}s=0}function u(x){var A=r.filter(function(R){var O=n.get(R);return!O.isAny&&O.test(x)});return A.length?A:["any"]}function f(x){return x&&typeof x=="function"&&"_typedFunctionData"in x}function p(x,A,R){if(!f(x))throw new TypeError(Rc);var O=R&&R.exact,j=Array.isArray(A)?A.join(","):A,T=b(j),k=m(T);if(!O||k in x.signatures){var L=x._typedFunctionData.signatureMap.get(k);if(L)return L}var q=T.length,ae;if(O){ae=[];var he;for(he in x.signatures)ae.push(x._typedFunctionData.signatureMap.get(he))}else ae=x._typedFunctionData.signatures;for(var Z=0;Z<q;++Z){var Me=T[Z],Ce=[],Le=void 0,Ze=Zn(ae),z;try{for(Ze.s();!(z=Ze.n()).done;){Le=z.value;var $=E(Le.params,Z);if(!(!$||Me.restParam&&!$.restParam)){if(!$.hasAny){var se=function(){var Ue=v($);if(Me.types.some(function(pt){return!Ue.has(pt.name)}))return"continue"}();if(se==="continue")continue}Ce.push(Le)}}}catch(Ue){Ze.e(Ue)}finally{Ze.f()}if(ae=Ce,ae.length===0)break}var me,xe=Zn(ae),ut;try{for(xe.s();!(ut=xe.n()).done;)if(me=ut.value,me.params.length<=q)return me}catch(Ue){xe.e(Ue)}finally{xe.f()}throw new TypeError("Signature not found (signature: "+(x.name||"unnamed")+"("+m(T,", ")+"))")}function g(x,A,R){return p(x,A,R).implementation}function _(x,A){var R=a(A);if(R.test(x))return x;var O=R.conversionsTo;if(O.length===0)throw new Error("There are no conversions to "+A+" defined.");for(var j=0;j<O.length;j++){var T=a(O[j].from);if(T.test(x))return O[j].convert(x)}throw new Error("Cannot convert "+x+" to "+A)}function m(x){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return x.map(function(R){return R.name}).join(A)}function d(x){var A=x.indexOf("...")===0,R=A?x.length>3?x.slice(3):"any":x,O=R.split("|").map(function(L){return a(L.trim())}),j=!1,T=A?"...":"",k=O.map(function(L){return j=L.isAny||j,T+=L.name+"|",{name:L.name,typeIndex:L.index,test:L.test,isAny:L.isAny,conversion:null,conversionIndex:-1}});return{types:k,name:T.slice(0,-1),hasAny:j,hasConversion:!1,restParam:A}}function y(x){var A=x.types.map(function(k){return k.name}),R=U(A),O=x.hasAny,j=x.name,T=R.map(function(k){var L=a(k.from);return O=L.isAny||O,j+="|"+k.from,{name:k.from,typeIndex:L.index,test:L.test,isAny:L.isAny,conversion:k,conversionIndex:k.index}});return{types:x.types.concat(T),name:j,hasAny:O,hasConversion:T.length>0,restParam:x.restParam}}function v(x){return x.typeSet||(x.typeSet=new Set,x.types.forEach(function(A){return x.typeSet.add(A.name)})),x.typeSet}function b(x){var A=[];if(typeof x!="string")throw new TypeError("Signatures must be strings");var R=x.trim();if(R==="")return A;for(var O=R.split(","),j=0;j<O.length;++j){var T=d(O[j].trim());if(T.restParam&&j!==O.length-1)throw new SyntaxError('Unexpected rest parameter "'+O[j]+'": only allowed for the last parameter');if(T.types.length===0)return null;A.push(T)}return A}function M(x){var A=Re(x);return A?A.restParam:!1}function S(x){if(!x||x.types.length===0)return Lc;if(x.types.length===1)return a(x.types[0].name).test;if(x.types.length===2){var A=a(x.types[0].name).test,R=a(x.types[1].name).test;return function(T){return A(T)||R(T)}}else{var O=x.types.map(function(j){return a(j.name).test});return function(T){for(var k=0;k<O.length;k++)if(O[k](T))return!0;return!1}}}function P(x){var A,R,O;if(M(x)){A=ke(x).map(S);var j=A.length,T=S(Re(x)),k=function(q){for(var ae=j;ae<q.length;ae++)if(!T(q[ae]))return!1;return!0};return function(q){for(var ae=0;ae<A.length;ae++)if(!A[ae](q[ae]))return!1;return k(q)&&q.length>=j+1}}else return x.length===0?function(q){return q.length===0}:x.length===1?(R=S(x[0]),function(q){return R(q[0])&&q.length===1}):x.length===2?(R=S(x[0]),O=S(x[1]),function(q){return R(q[0])&&O(q[1])&&q.length===2}):(A=x.map(S),function(q){for(var ae=0;ae<A.length;ae++)if(!A[ae](q[ae]))return!1;return q.length===A.length})}function E(x,A){return A<x.length?x[A]:M(x)?Re(x):null}function w(x,A){var R=E(x,A);return R?v(R):new Set}function D(x){return x.conversion===null||x.conversion===void 0}function N(x,A){var R=new Set;return x.forEach(function(O){var j=w(O.params,A),T,k=Zn(j),L;try{for(k.s();!(L=k.n()).done;)T=L.value,R.add(T)}catch(q){k.e(q)}finally{k.f()}}),R.has("any")?["any"]:Array.from(R)}function W(x,A,R){var O,j,T=x||"unnamed",k=R,L,q=function(){var Ze=[];if(k.forEach(function($){var se=E($.params,L),me=S(se);(L<$.params.length||M($.params))&&me(A[L])&&Ze.push($)}),Ze.length===0){if(j=N(k,L),j.length>0){var z=u(A[L]);return O=new TypeError("Unexpected type of argument in function "+T+" (expected: "+j.join(" or ")+", actual: "+z.join(" | ")+", index: "+L+")"),O.data={category:"wrongType",fn:T,index:L,actual:z,expected:j},{v:O}}}else k=Ze};for(L=0;L<A.length;L++){var ae=q();if(Nr(ae)==="object")return ae.v}var he=k.map(function(Le){return M(Le.params)?1/0:Le.params.length});if(A.length<Math.min.apply(null,he))return j=N(k,L),O=new TypeError("Too few arguments in function "+T+" (expected: "+j.join(" or ")+", index: "+A.length+")"),O.data={category:"tooFewArgs",fn:T,index:A.length,expected:j},O;var Z=Math.max.apply(null,he);if(A.length>Z)return O=new TypeError("Too many arguments in function "+T+" (expected: "+Z+", actual: "+A.length+")"),O.data={category:"tooManyArgs",fn:T,index:A.length,expectedLength:Z},O;for(var Me=[],Ce=0;Ce<A.length;++Ce)Me.push(u(A[Ce]).join("|"));return O=new TypeError('Arguments of type "'+Me.join(", ")+'" do not match any of the defined signatures of function '+T+"."),O.data={category:"mismatch",actual:Me},O}function B(x){for(var A=r.length+1,R=0;R<x.types.length;R++)D(x.types[R])&&(A=Math.min(A,x.types[R].typeIndex));return A}function H(x){for(var A=s+1,R=0;R<x.types.length;R++)D(x.types[R])||(A=Math.min(A,x.types[R].conversionIndex));return A}function G(x,A){if(x.hasAny){if(!A.hasAny)return 1}else if(A.hasAny)return-1;if(x.restParam){if(!A.restParam)return 1}else if(A.restParam)return-1;if(x.hasConversion){if(!A.hasConversion)return 1}else if(A.hasConversion)return-1;var R=B(x)-B(A);if(R<0)return-1;if(R>0)return 1;var O=H(x)-H(A);return O<0?-1:O>0?1:0}function K(x,A){var R=x.params,O=A.params,j=Re(R),T=Re(O),k=M(R),L=M(O);if(k&&j.hasAny){if(!L||!T.hasAny)return 1}else if(L&&T.hasAny)return-1;var q=0,ae=0,he,Z=Zn(R),Me;try{for(Z.s();!(Me=Z.n()).done;)he=Me.value,he.hasAny&&++q,he.hasConversion&&++ae}catch(Qe){Z.e(Qe)}finally{Z.f()}var Ce=0,Le=0,Ze=Zn(O),z;try{for(Ze.s();!(z=Ze.n()).done;)he=z.value,he.hasAny&&++Ce,he.hasConversion&&++Le}catch(Qe){Ze.e(Qe)}finally{Ze.f()}if(q!==Ce)return q-Ce;if(k&&j.hasConversion){if(!L||!T.hasConversion)return 1}else if(L&&T.hasConversion)return-1;if(ae!==Le)return ae-Le;if(k){if(!L)return 1}else if(L)return-1;var $=(R.length-O.length)*(k?-1:1);if($!==0)return $;for(var se=[],me=0,xe=0;xe<R.length;++xe){var ut=G(R[xe],O[xe]);se.push(ut),me+=ut}if(me!==0)return me;for(var Ue,pt=0,mt=se;pt<mt.length;pt++)if(Ue=mt[pt],Ue!==0)return Ue;return 0}function U(x){if(x.length===0)return[];var A=x.map(a);x.length>1&&A.sort(function(q,ae){return q.index-ae.index});var R=A[0].conversionsTo;if(x.length===1)return R;R=R.concat([]);for(var O=new Set(x),j=1;j<A.length;++j){var T=void 0,k=Zn(A[j].conversionsTo),L;try{for(k.s();!(L=k.n()).done;)T=L.value,O.has(T.from)||(R.push(T),O.add(T.from))}catch(q){k.e(q)}finally{k.f()}}return R}function Q(x,A){var R=A;if(x.some(function(L){return L.hasConversion})){var O=M(x),j=x.map(J);R=function(){for(var q=[],ae=O?arguments.length-1:arguments.length,he=0;he<ae;he++)q[he]=j[he](arguments[he]);return O&&(q[ae]=arguments[ae].map(j[ae])),A.apply(this,q)}}var T=R;if(M(x)){var k=x.length-1;T=function(){return R.apply(this,ge(arguments,0,k).concat([ge(arguments,k)]))}}return T}function J(x){var A,R,O,j,T=[],k=[];switch(x.types.forEach(function(L){L.conversion&&(T.push(a(L.conversion.from).test),k.push(L.conversion.convert))}),k.length){case 0:return function(q){return q};case 1:return A=T[0],O=k[0],function(q){return A(q)?O(q):q};case 2:return A=T[0],R=T[1],O=k[0],j=k[1],function(q){return A(q)?O(q):R(q)?j(q):q};default:return function(q){for(var ae=0;ae<k.length;ae++)if(T[ae](q))return k[ae](q);return q}}}function fe(x){function A(R,O,j){if(O<R.length){var T=R[O],k=[];if(T.restParam){var L=T.types.filter(D);L.length<T.types.length&&k.push({types:L,name:"..."+L.map(function(q){return q.name}).join("|"),hasAny:L.some(function(q){return q.isAny}),hasConversion:!1,restParam:!0}),k.push(T)}else k=T.types.map(function(q){return{types:[q],name:q.name,hasAny:q.isAny,hasConversion:q.conversion,restParam:!1}});return at(k,function(q){return A(R,O+1,j.concat([q]))})}else return[j]}return A(x,0,[])}function re(x,A){for(var R=Math.max(x.length,A.length),O=0;O<R;O++){var j=w(x,O),T=w(A,O),k=!1,L=void 0,q=Zn(T),ae;try{for(q.s();!(ae=q.n()).done;)if(L=ae.value,j.has(L)){k=!0;break}}catch(Le){q.e(Le)}finally{q.f()}if(!k)return!1}var he=x.length,Z=A.length,Me=M(x),Ce=M(A);return Me?Ce?he===Z:Z>=he:Ce?he>=Z:he===Z}function ve(x){return x.map(function(A){return bt(A)?ct(A.referToSelf.callback):_t(A)?ze(A.referTo.references,A.referTo.callback):A})}function ee(x,A,R){var O=[],j,T=Zn(x),k;try{for(T.s();!(k=T.n()).done;){j=k.value;var L=R[j];if(typeof L!="number")throw new TypeError('No definition for referenced signature "'+j+'"');if(L=A[L],typeof L!="function")return!1;O.push(L)}}catch(q){T.e(q)}finally{T.f()}return O}function ue(x,A,R){for(var O=ve(x),j=new Array(O.length).fill(!1),T=!0;T;){T=!1;for(var k=!0,L=0;L<O.length;++L)if(!j[L]){var q=O[L];if(bt(q))O[L]=q.referToSelf.callback(R),O[L].referToSelf=q.referToSelf,j[L]=!0,k=!1;else if(_t(q)){var ae=ee(q.referTo.references,O,A);ae?(O[L]=q.referTo.callback.apply(this,ae),O[L].referTo=q.referTo,j[L]=!0,k=!1):T=!0}}if(k&&T)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return O}function _e(x){var A=/\bthis(\(|\.signatures\b)/;Object.keys(x).forEach(function(R){var O=x[R];if(A.test(O.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function te(x,A){if(o.createCount++,Object.keys(A).length===0)throw new SyntaxError("No signatures provided");o.warnAgainstDeprecatedThis&&_e(A);var R=[],O=[],j={},T=[],k,L=function(){if(!Object.prototype.hasOwnProperty.call(A,k))return"continue";var wt=b(k);if(!wt)return"continue";R.forEach(function(Lt){if(re(Lt,wt))throw new TypeError('Conflicting signatures "'+m(Lt)+'" and "'+m(wt)+'".')}),R.push(wt);var xi=O.length;O.push(A[k]);var At=wt.map(y),mn=void 0,jn=Zn(fe(At)),Wt;try{for(jn.s();!(Wt=jn.n()).done;){mn=Wt.value;var yi=m(mn);T.push({params:mn,name:yi,fn:xi}),mn.every(function(Lt){return!Lt.hasConversion})&&(j[yi]=xi)}}catch(Lt){jn.e(Lt)}finally{jn.f()}};for(k in A)var q=L();T.sort(K);var ae=ue(O,j,un),he;for(he in j)Object.prototype.hasOwnProperty.call(j,he)&&(j[he]=ae[j[he]]);for(var Z=[],Me=new Map,Ce=0,Le=T;Ce<Le.length;Ce++)he=Le[Ce],Me.has(he.name)||(he.fn=ae[he.fn],Z.push(he),Me.set(he.name,he));for(var Ze=Z[0]&&Z[0].params.length<=2&&!M(Z[0].params),z=Z[1]&&Z[1].params.length<=2&&!M(Z[1].params),$=Z[2]&&Z[2].params.length<=2&&!M(Z[2].params),se=Z[3]&&Z[3].params.length<=2&&!M(Z[3].params),me=Z[4]&&Z[4].params.length<=2&&!M(Z[4].params),xe=Z[5]&&Z[5].params.length<=2&&!M(Z[5].params),ut=Ze&&z&&$&&se&&me&&xe,Ue=0;Ue<Z.length;++Ue)Z[Ue].test=P(Z[Ue].params);for(var pt=Ze?S(Z[0].params[0]):Un,mt=z?S(Z[1].params[0]):Un,Qe=$?S(Z[2].params[0]):Un,zt=se?S(Z[3].params[0]):Un,vt=me?S(Z[4].params[0]):Un,En=xe?S(Z[5].params[0]):Un,Ut=Ze?S(Z[0].params[1]):Un,be=z?S(Z[1].params[1]):Un,nt=$?S(Z[2].params[1]):Un,xt=se?S(Z[3].params[1]):Un,C=me?S(Z[4].params[1]):Un,X=xe?S(Z[5].params[1]):Un,ie=0;ie<Z.length;++ie)Z[ie].implementation=Q(Z[ie].params,Z[ie].fn);var Y=Ze?Z[0].implementation:Pr,oe=z?Z[1].implementation:Pr,Ie=$?Z[2].implementation:Pr,Oe=se?Z[3].implementation:Pr,qe=me?Z[4].implementation:Pr,$e=xe?Z[5].implementation:Pr,et=Ze?Z[0].params.length:-1,Je=z?Z[1].params.length:-1,tt=$?Z[2].params.length:-1,it=se?Z[3].params.length:-1,kt=me?Z[4].params.length:-1,an=xe?Z[5].params.length:-1,In=ut?6:0,Pt=Z.length,rt=Z.map(function(Vt){return Vt.test}),Nn=Z.map(function(Vt){return Vt.implementation}),Nt=function(){for(var wt=In;wt<Pt;wt++)if(rt[wt](arguments))return Nn[wt].apply(this,arguments);return o.onMismatch(x,arguments,Z)};function un(Vt,wt){return arguments.length===et&&pt(Vt)&&Ut(wt)?Y.apply(this,arguments):arguments.length===Je&&mt(Vt)&&be(wt)?oe.apply(this,arguments):arguments.length===tt&&Qe(Vt)&&nt(wt)?Ie.apply(this,arguments):arguments.length===it&&zt(Vt)&&xt(wt)?Oe.apply(this,arguments):arguments.length===kt&&vt(Vt)&&C(wt)?qe.apply(this,arguments):arguments.length===an&&En(Vt)&&X(wt)?$e.apply(this,arguments):Nt.apply(this,arguments)}try{Object.defineProperty(un,"name",{value:x})}catch{}return un.signatures=j,un._typedFunctionData={signatures:Z,signatureMap:Me},un}function V(x,A,R){throw W(x,A,R)}function ke(x){return ge(x,0,x.length-1)}function Re(x){return x[x.length-1]}function ge(x,A,R){return Array.prototype.slice.call(x,A,R)}function Ne(x,A){for(var R=0;R<x.length;R++)if(A(x[R]))return x[R]}function at(x,A){return Array.prototype.concat.apply([],x.map(A))}function Fe(){var x=ke(arguments).map(function(R){return m(b(R))}),A=Re(arguments);if(typeof A!="function")throw new TypeError("Callback function expected as last argument");return ze(x,A)}function ze(x,A){return{referTo:{references:x,callback:A}}}function ct(x){if(typeof x!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:x}}}function _t(x){return x&&Nr(x.referTo)==="object"&&Array.isArray(x.referTo.references)&&typeof x.referTo.callback=="function"}function bt(x){return x&&Nr(x.referToSelf)==="object"&&typeof x.referToSelf.callback=="function"}function ft(x,A){if(!x)return A;if(A&&A!==x){var R=new Error("Function names do not match (expected: "+x+", actual: "+A+")");throw R.data={actual:A,expected:x},R}return x}function ot(x){var A;for(var R in x)Object.prototype.hasOwnProperty.call(x,R)&&(f(x[R])||typeof x[R].signature=="string")&&(A=ft(A,x[R].name));return A}function ht(x,A){var R;for(R in A)if(Object.prototype.hasOwnProperty.call(A,R)){if(R in x&&A[R]!==x[R]){var O=new Error('Signature "'+R+'" is defined twice');throw O.data={signature:R,sourceFunction:A[R],destFunction:x[R]},O}x[R]=A[R]}}var Tt=o;o=function(A){for(var R=typeof A=="string",O=R?1:0,j=R?A:"",T={},k=O;k<arguments.length;++k){var L=arguments[k],q={},ae=void 0;if(typeof L=="function"?(ae=L.name,typeof L.signature=="string"?q[L.signature]=L:f(L)&&(q=L.signatures)):i(L)&&(q=L,R||(ae=ot(L))),Object.keys(q).length===0){var he=new TypeError("Argument to 'typed' at index "+k+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw he.data={index:k,argument:L},he}R||(j=ft(j,ae)),ht(T,q)}return te(j||"",T)},o.create=vh,o.createCount=Tt.createCount,o.onMismatch=V,o.throwMismatchError=V,o.createError=W,o.clear=h,o.clearConversions=l,o.addTypes=c,o._findType=a,o.referTo=Fe,o.referToSelf=ct,o.convert=_,o.findSignature=p,o.find=g,o.isTypedFunction=f,o.warnAgainstDeprecatedThis=!0,o.addType=function(x,A){var R="any";A!==!1&&n.has("Object")&&(R="Object"),o.addTypes([x],R)};function F(x){if(!x||typeof x.from!="string"||typeof x.to!="string"||typeof x.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(x.to===x.from)throw new SyntaxError('Illegal to define conversion from "'+x.from+'" to itself.')}return o.addConversion=function(x){F(x);var A=a(x.to);if(A.conversionsTo.every(function(R){return R.from!==x.from}))A.conversionsTo.push({from:x.from,convert:x.convert,index:s++});else throw new Error('There is already a conversion from "'+x.from+'" to "'+A.name+'"')},o.addConversions=function(x){x.forEach(o.addConversion)},o.removeConversion=function(x){F(x);var A=a(x.to),R=Ne(A.conversionsTo,function(j){return j.from===x.from});if(!R)throw new Error("Attempt to remove nonexistent conversion from "+x.from+" to "+x.to);if(R.convert!==x.convert)throw new Error("Conversion to remove does not match existing conversion");var O=A.conversionsTo.indexOf(R);A.conversionsTo.splice(O,1)},o.resolve=function(x,A){if(!f(x))throw new TypeError(Rc);for(var R=x._typedFunctionData.signatures,O=0;O<R.length;++O)if(R[O].test(A))return R[O];return null},o}const Ic=vh();function kn(i){return typeof i=="boolean"?!0:isFinite(i)?i===Math.round(i):!1}function _a(i,e,t){var n={2:"0b",8:"0o",16:"0x"},r=n[e],s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!kn(t))throw new Error("size must be an integer");if(i>2**(t-1)-1||i<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!kn(i))throw new Error("Value must be an integer");i<0&&(i=i+2**t),s="i".concat(t)}var o="";return i<0&&(i=-i,o="-"),"".concat(o).concat(r).concat(i.toString(e)).concat(s)}function Ga(i,e){if(typeof e=="function")return e(i);if(i===1/0)return"Infinity";if(i===-1/0)return"-Infinity";if(isNaN(i))return"NaN";var t="auto",n,r;if(e&&(e.notation&&(t=e.notation),xn(e)?n=e:xn(e.precision)&&(n=e.precision),e.wordSize&&(r=e.wordSize,typeof r!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return ix(i,n);case"exponential":return xh(i,n);case"engineering":return nx(i,n);case"bin":return _a(i,2,r);case"oct":return _a(i,8,r);case"hex":return _a(i,16,r);case"auto":return rx(i,n,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],o=arguments[4];return s!=="."?s+o:o});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function To(i){var e=String(i).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+i);var t=e[1],n=e[2],r=parseFloat(e[4]||"0"),s=n.indexOf(".");r+=s!==-1?s-1:n.length-1;var o=n.replace(".","").replace(/^0*/,function(a){return r-=a.length,""}).replace(/0*$/,"").split("").map(function(a){return parseInt(a)});return o.length===0&&(o.push(0),r++),{sign:t,coefficients:o,exponent:r}}function nx(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=To(i),n=Po(t,e),r=n.exponent,s=n.coefficients,o=r%3===0?r:r<0?r-3-r%3:r-r%3;if(xn(e))for(;e>s.length||r-o+1>s.length;)s.push(0);else for(var a=Math.abs(r-o)-(s.length-1),c=0;c<a;c++)s.push(0);for(var h=Math.abs(r-o),l=1;h>0;)l++,h--;var u=s.slice(l).join(""),f=xn(e)&&u.length||u.match(/[1-9]/)?"."+u:"",p=s.slice(0,l).join("")+f+"e"+(r>=0?"+":"")+o.toString();return n.sign+p}function ix(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=To(i),n=typeof e=="number"?Po(t,t.exponent+1+e):t,r=n.coefficients,s=n.exponent+1,o=s+(e||0);return r.length<o&&(r=r.concat(Hr(o-r.length))),s<0&&(r=Hr(-s+1).concat(r),s=1),s<r.length&&r.splice(s,0,s===0?"0.":"."),n.sign+r.join("")}function xh(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=To(i),n=e?Po(t,e):t,r=n.coefficients,s=n.exponent;r.length<e&&(r=r.concat(Hr(e-r.length)));var o=r.shift();return n.sign+o+(r.length>0?"."+r.join(""):"")+"e"+(s>=0?"+":"")+s}function rx(i,e,t){if(isNaN(i)||!isFinite(i))return String(i);var n=t&&t.lowerExp!==void 0?t.lowerExp:-3,r=t&&t.upperExp!==void 0?t.upperExp:5,s=To(i),o=e?Po(s,e):s;if(o.exponent<n||o.exponent>=r)return xh(i,e);var a=o.coefficients,c=o.exponent;a.length<e&&(a=a.concat(Hr(e-a.length))),a=a.concat(Hr(c-a.length+1+(a.length<e?e-a.length:0))),a=Hr(-c).concat(a);var h=c>0?c:0;return h<a.length-1&&a.splice(h+1,0,"."),o.sign+a.join("")}function Po(i,e){for(var t={sign:i.sign,coefficients:i.coefficients,exponent:i.exponent},n=t.coefficients;e<=0;)n.unshift(0),t.exponent++,e++;if(n.length>e){var r=n.splice(e,n.length-e);if(r[0]>=5){var s=e-1;for(n[s]++;n[s]===10;)n.pop(),s===0&&(n.unshift(0),t.exponent++,s++),s--,n[s]++}}return t}function Hr(i){for(var e=[],t=0;t<i;t++)e.push(0);return e}function sx(i){return i.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function va(i,e,t){var n=i.constructor,r=new n(2),s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!kn(t))throw new Error("size must be an integer");if(i.greaterThan(r.pow(t-1).sub(1))||i.lessThan(r.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!i.isInteger())throw new Error("Value must be an integer");i.lessThan(0)&&(i=i.add(r.pow(t))),s="i".concat(t)}switch(e){case 2:return"".concat(i.toBinary()).concat(s);case 8:return"".concat(i.toOctal()).concat(s);case 16:return"".concat(i.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(e," not supported "))}}function ox(i,e){if(typeof e=="function")return e(i);if(!i.isFinite())return i.isNaN()?"NaN":i.gt(0)?"Infinity":"-Infinity";var t="auto",n,r;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?n=e:e.precision&&(n=e.precision),e.wordSize&&(r=e.wordSize,typeof r!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return ux(i,n);case"exponential":return Nc(i,n);case"engineering":return ax(i,n);case"bin":return va(i,2,r);case"oct":return va(i,8,r);case"hex":return va(i,16,r);case"auto":{var s=e&&e.lowerExp!==void 0?e.lowerExp:-3,o=e&&e.upperExp!==void 0?e.upperExp:5;if(i.isZero())return"0";var a,c=i.toSignificantDigits(n),h=c.e;return h>=s&&h<o?a=c.toFixed():a=Nc(i,n),a.replace(/((\.\d*?)(0+))($|e)/,function(){var l=arguments[2],u=arguments[4];return l!=="."?l+u:u})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function ax(i,e){var t=i.e,n=t%3===0?t:t<0?t-3-t%3:t-t%3,r=i.mul(Math.pow(10,-n)),s=r.toPrecision(e);return s.indexOf("e")!==-1&&(s=r.toString()),s+"e"+(t>=0?"+":"")+n.toString()}function Nc(i,e){return e!==void 0?i.toExponential(e-1):i.toExponential()}function ux(i,e){return i.toFixed(e)}function Ms(i,e){var t=lx(i,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function lx(i,e){if(typeof i=="number")return Ga(i,e);if(zi(i))return ox(i,e);if(cx(i))return!e||e.fraction!=="decimal"?i.s*i.n+"/"+i.d:i.toString();if(Array.isArray(i))return yh(i,e);if(go(i))return'"'+i+'"';if(typeof i=="function")return i.syntax?String(i.syntax):"function";if(i&&typeof i=="object"){if(typeof i.format=="function")return i.format(e);if(i&&i.toString(e)!=={}.toString())return i.toString(e);var t=Object.keys(i).map(n=>'"'+n+'": '+Ms(i[n],e));return"{"+t.join(", ")+"}"}return String(i)}function yh(i,e){if(Array.isArray(i)){for(var t="[",n=i.length,r=0;r<n;r++)r!==0&&(t+=", "),t+=yh(i[r],e);return t+="]",t}else return Ms(i,e)}function cx(i){return i&&typeof i=="object"&&typeof i.s=="number"&&typeof i.n=="number"&&typeof i.d=="number"||!1}function Kt(i,e,t){if(!(this instanceof Kt))throw new SyntaxError("Constructor must be called with the new operator");this.actual=i,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(i)?"["+i.join(", ")+"]":i)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}Kt.prototype=new RangeError;Kt.prototype.constructor=RangeError;Kt.prototype.name="DimensionError";Kt.prototype.isDimensionError=!0;function ts(i,e,t){if(!(this instanceof ts))throw new SyntaxError("Constructor must be called with the new operator");this.index=i,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}ts.prototype=new RangeError;ts.prototype.constructor=RangeError;ts.prototype.name="IndexError";ts.prototype.isIndexError=!0;function Va(i){for(var e=[];Array.isArray(i);)e.push(i.length),i=i[0];return e}function Mh(i,e,t){var n,r=i.length;if(r!==e[t])throw new Kt(r,e[t]);if(t<e.length-1){var s=t+1;for(n=0;n<r;n++){var o=i[n];if(!Array.isArray(o))throw new Kt(e.length-1,e.length,"<");Mh(i[n],e,s)}}else for(n=0;n<r;n++)if(Array.isArray(i[n]))throw new Kt(e.length+1,e.length,">")}function Bc(i,e){var t=e.length===0;if(t){if(Array.isArray(i))throw new Kt(i.length,0)}else Mh(i,e,0)}function On(i,e){if(!xn(i)||!kn(i))throw new TypeError("Index must be an integer (value: "+i+")");if(i<0||typeof e=="number"&&i>=e)throw new ts(i,e)}function Uc(i,e,t){if(!Array.isArray(i)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(r){if(!xn(r)||!kn(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ms(e)+")")});var n=t!==void 0?t:0;return Wa(i,e,0,n),i}function Wa(i,e,t,n){var r,s,o=i.length,a=e[t],c=Math.min(o,a);if(i.length=a,t<e.length-1){var h=t+1;for(r=0;r<c;r++)s=i[r],Array.isArray(s)||(s=[s],i[r]=s),Wa(s,e,h,n);for(r=c;r<a;r++)s=[],i[r]=s,Wa(s,e,h,n)}else{for(r=0;r<c;r++)for(;Array.isArray(i[r]);)i[r]=i[r][0];for(r=c;r<a;r++)i[r]=n}}function fx(i,e){var t=px(i),n=t.length;if(!Array.isArray(i)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Kt(0,n,"!=");e=wh(e,n);var r=bh(e);if(n!==r)throw new Kt(r,n,"!=");try{return hx(t,e)}catch(s){throw s instanceof Kt?new Kt(r,n,"!="):s}}function wh(i,e){var t=bh(i),n=i.slice(),r=-1,s=i.indexOf(r),o=i.indexOf(r,s+1)>=0;if(o)throw new Error("More than one wildcard in sizes");var a=s>=0,c=e%t===0;if(a)if(c)n[s]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return n}function bh(i){return i.reduce((e,t)=>e*t,1)}function hx(i,e){for(var t=i,n,r=e.length-1;r>0;r--){var s=e[r];n=[];for(var o=t.length/s,a=0;a<o;a++)n.push(t.slice(a*s,(a+1)*s));t=n}return t}function dx(i,e,t,n){var r=n||Va(i);if(t)for(var s=0;s<t;s++)i=[i],r.unshift(1);for(i=Dh(i,e,0);r.length<e;)r.push(1);return i}function Dh(i,e,t){var n,r;if(Array.isArray(i)){var s=t+1;for(n=0,r=i.length;n<r;n++)i[n]=Dh(i[n],e,s)}else for(var o=t;o<e;o++)i=[i];return i}function px(i){if(!Array.isArray(i))return i;var e=[];return i.forEach(function t(n){Array.isArray(n)?n.forEach(t):e.push(n)}),e}function ja(i,e){for(var t,n=0,r=0;r<i.length;r++){var s=i[r],o=Array.isArray(s);if(r===0&&o&&(n=s.length),o&&s.length!==n)return;var a=o?ja(s,e):e(s);if(t===void 0)t=a;else if(t!==a)return"mixed"}return t}function fr(i,e,t,n){function r(s){var o=$1(s,e.map(_x));return mx(i,e,s),t(o)}return r.isFactory=!0,r.fn=i,r.dependencies=e.slice().sort(),n&&(r.meta=n),r}function mx(i,e,t){var n=e.filter(s=>!gx(s)).every(s=>t[s]!==void 0);if(!n){var r=e.filter(s=>t[s]===void 0);throw new Error('Cannot create function "'.concat(i,'", ')+"some dependencies are missing: ".concat(r.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function gx(i){return i&&i[0]==="?"}function _x(i){return i&&i[0]==="?"?i.slice(1):i}function vx(i,e){if(Eh(i)&&Sh(i,e))return i[e];throw typeof i[e]=="function"&&Mx(i,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function xx(i,e,t){if(Eh(i)&&Sh(i,e))return i[e]=t,t;throw new Error('No access to property "'+e+'"')}function yx(i,e){return e in i}function Sh(i,e){return!i||typeof i!="object"?!1:_o(wx,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Mx(i,e){return i==null||typeof i[e]!="function"||_o(i,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(i)?!1:_o(bx,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Eh(i){return typeof i=="object"&&i&&i.constructor===Object}var wx={length:!0,name:!0},bx={toString:!0,valueOf:!0,toLocaleString:!0};class Dx{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return vx(this.wrappedObject,e)}set(e,t){return xx(this.wrappedObject,e,t),this}has(e){return yx(this.wrappedObject,e)}}function Sx(i){return i?i instanceof Map||i instanceof Dx||typeof i.set=="function"&&typeof i.get=="function"&&typeof i.keys=="function"&&typeof i.has=="function":!1}var Ah=function(){return Ah=Ic.create,Ic},Ex=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],Ax=fr("typed",Ex,function(e){var{BigNumber:t,Complex:n,DenseMatrix:r,Fraction:s}=e,o=Ah();return o.clear(),o.addTypes([{name:"number",test:xn},{name:"Complex",test:dh},{name:"BigNumber",test:zi},{name:"Fraction",test:ph},{name:"Unit",test:mh},{name:"identifier",test:a=>go&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(a)},{name:"string",test:go},{name:"Chain",test:K1},{name:"Array",test:Fn},{name:"Matrix",test:ds},{name:"DenseMatrix",test:w1},{name:"SparseMatrix",test:b1},{name:"Range",test:D1},{name:"Index",test:gh},{name:"boolean",test:S1},{name:"ResultSet",test:E1},{name:"Help",test:A1},{name:"function",test:C1},{name:"Date",test:T1},{name:"RegExp",test:P1},{name:"null",test:L1},{name:"undefined",test:R1},{name:"AccessorNode",test:I1},{name:"ArrayNode",test:N1},{name:"AssignmentNode",test:B1},{name:"BlockNode",test:U1},{name:"ConditionalNode",test:O1},{name:"ConstantNode",test:z1},{name:"FunctionNode",test:H1},{name:"FunctionAssignmentNode",test:k1},{name:"IndexNode",test:G1},{name:"Node",test:V1},{name:"ObjectNode",test:W1},{name:"OperatorNode",test:j1},{name:"ParenthesisNode",test:q1},{name:"RangeNode",test:X1},{name:"RelationalNode",test:Y1},{name:"SymbolNode",test:Z1},{name:"Map",test:Sx},{name:"Object",test:F1}]),o.addConversions([{from:"number",to:"BigNumber",convert:function(c){if(t||xa(c),sx(c)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+c+"). Use function bignumber(x) to convert to BigNumber.");return new t(c)}},{from:"number",to:"Complex",convert:function(c){return n||to(c),new n(c,0)}},{from:"BigNumber",to:"Complex",convert:function(c){return n||to(c),new n(c.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(c){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(c){return n||to(c),new n(c.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(c){s||ya(c);var h=new s(c);if(h.valueOf()!==c)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+c+"). Use function fraction(x) to convert to Fraction.");return h}},{from:"string",to:"number",convert:function(c){var h=Number(c);if(isNaN(h))throw new Error('Cannot convert "'+c+'" to a number');return h}},{from:"string",to:"BigNumber",convert:function(c){t||xa(c);try{return new t(c)}catch{throw new Error('Cannot convert "'+c+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(c){s||ya(c);try{return new s(c)}catch{throw new Error('Cannot convert "'+c+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(c){n||to(c);try{return new n(c)}catch{throw new Error('Cannot convert "'+c+'" to Complex')}}},{from:"boolean",to:"number",convert:function(c){return+c}},{from:"boolean",to:"BigNumber",convert:function(c){return t||xa(c),new t(+c)}},{from:"boolean",to:"Fraction",convert:function(c){return s||ya(c),new s(+c)}},{from:"boolean",to:"string",convert:function(c){return String(c)}},{from:"Array",to:"Matrix",convert:function(c){return r||Cx(),new r(c)}},{from:"Matrix",to:"Array",convert:function(c){return c.valueOf()}}]),o.onMismatch=(a,c,h)=>{var l=o.createError(a,c,h);if(["wrongType","mismatch"].includes(l.data.category)&&c.length===1&&ka(c[0])&&h.some(f=>!f.params.includes(","))){var u=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw u.data=l.data,u}throw l},o.onMismatch=(a,c,h)=>{var l=o.createError(a,c,h);if(["wrongType","mismatch"].includes(l.data.category)&&c.length===1&&ka(c[0])&&h.some(f=>!f.params.includes(","))){var u=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw u.data=l.data,u}throw l},o});function xa(i){throw new Error("Cannot convert value ".concat(i," into a BigNumber: no class 'BigNumber' provided"))}function to(i){throw new Error("Cannot convert value ".concat(i," into a Complex number: no class 'Complex' provided"))}function Cx(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function ya(i){throw new Error("Cannot convert value ".concat(i," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Br=9e15,qi=1e9,qa="0123456789abcdef",vo="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",xo="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Xa={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Br,maxE:Br,crypto:!1},Ch,Ti,Ye=!0,Fo="[DecimalError] ",ji=Fo+"Invalid argument: ",Th=Fo+"Precision limit exceeded",Ph=Fo+"crypto unavailable",Fh="[object Decimal]",pn=Math.floor,jt=Math.pow,Tx=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Px=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Fx=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Lh=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ai=1e7,He=7,Lx=9007199254740991,Rx=vo.length-1,Ya=xo.length-1,ce={toStringTag:Fh};ce.absoluteValue=ce.abs=function(){var i=new this.constructor(this);return i.s<0&&(i.s=1),Be(i)};ce.ceil=function(){return Be(new this.constructor(this),this.e+1,2)};ce.clampedTo=ce.clamp=function(i,e){var t,n=this,r=n.constructor;if(i=new r(i),e=new r(e),!i.s||!e.s)return new r(NaN);if(i.gt(e))throw Error(ji+e);return t=n.cmp(i),t<0?i:n.cmp(e)>0?e:new r(n)};ce.comparedTo=ce.cmp=function(i){var e,t,n,r,s=this,o=s.d,a=(i=new s.constructor(i)).d,c=s.s,h=i.s;if(!o||!a)return!c||!h?NaN:c!==h?c:o===a?0:!o^c<0?1:-1;if(!o[0]||!a[0])return o[0]?c:a[0]?-h:0;if(c!==h)return c;if(s.e!==i.e)return s.e>i.e^c<0?1:-1;for(n=o.length,r=a.length,e=0,t=n<r?n:r;e<t;++e)if(o[e]!==a[e])return o[e]>a[e]^c<0?1:-1;return n===r?0:n>r^c<0?1:-1};ce.cosine=ce.cos=function(){var i,e,t=this,n=t.constructor;return t.d?t.d[0]?(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+He,n.rounding=1,t=Ix(n,Uh(n,t)),n.precision=i,n.rounding=e,Be(Ti==2||Ti==3?t.neg():t,i,e,!0)):new n(1):new n(NaN)};ce.cubeRoot=ce.cbrt=function(){var i,e,t,n,r,s,o,a,c,h,l=this,u=l.constructor;if(!l.isFinite()||l.isZero())return new u(l);for(Ye=!1,s=l.s*jt(l.s*l,1/3),!s||Math.abs(s)==1/0?(t=tn(l.d),i=l.e,(s=(i-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=jt(t,1/3),i=pn((i+1)/3)-(i%3==(i<0?-1:2)),s==1/0?t="5e"+i:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+i),n=new u(t),n.s=l.s):n=new u(s.toString()),o=(i=u.precision)+3;;)if(a=n,c=a.times(a).times(a),h=c.plus(l),n=St(h.plus(l).times(a),h.plus(c),o+2,1),tn(a.d).slice(0,o)===(t=tn(n.d)).slice(0,o))if(t=t.slice(o-3,o+1),t=="9999"||!r&&t=="4999"){if(!r&&(Be(a,i+1,0),a.times(a).times(a).eq(l))){n=a;break}o+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Be(n,i+1,1),e=!n.times(n).times(n).eq(l));break}return Ye=!0,Be(n,i,u.rounding,e)};ce.decimalPlaces=ce.dp=function(){var i,e=this.d,t=NaN;if(e){if(i=e.length-1,t=(i-pn(this.e/He))*He,i=e[i],i)for(;i%10==0;i/=10)t--;t<0&&(t=0)}return t};ce.dividedBy=ce.div=function(i){return St(this,new this.constructor(i))};ce.dividedToIntegerBy=ce.divToInt=function(i){var e=this,t=e.constructor;return Be(St(e,new t(i),0,1,1),t.precision,t.rounding)};ce.equals=ce.eq=function(i){return this.cmp(i)===0};ce.floor=function(){return Be(new this.constructor(this),this.e+1,3)};ce.greaterThan=ce.gt=function(i){return this.cmp(i)>0};ce.greaterThanOrEqualTo=ce.gte=function(i){var e=this.cmp(i);return e==1||e===0};ce.hyperbolicCosine=ce.cosh=function(){var i,e,t,n,r,s=this,o=s.constructor,a=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return a;t=o.precision,n=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,r=s.d.length,r<32?(i=Math.ceil(r/3),e=(1/Ro(4,i)).toString()):(i=16,e="2.3283064365386962890625e-10"),s=Xr(o,1,s.times(e),new o(1),!0);for(var c,h=i,l=new o(8);h--;)c=s.times(s),s=a.minus(c.times(l.minus(c.times(l))));return Be(s,o.precision=t,o.rounding=n,!0)};ce.hyperbolicSine=ce.sinh=function(){var i,e,t,n,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,n=r.d.length,n<3)r=Xr(s,2,r,r,!0);else{i=1.4*Math.sqrt(n),i=i>16?16:i|0,r=r.times(1/Ro(5,i)),r=Xr(s,2,r,r,!0);for(var o,a=new s(5),c=new s(16),h=new s(20);i--;)o=r.times(r),r=r.times(a.plus(o.times(c.times(o).plus(h))))}return s.precision=e,s.rounding=t,Be(r,e,t,!0)};ce.hyperbolicTangent=ce.tanh=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+7,n.rounding=1,St(t.sinh(),t.cosh(),n.precision=i,n.rounding=e)):new n(t.s)};ce.inverseCosine=ce.acos=function(){var i,e=this,t=e.constructor,n=e.abs().cmp(1),r=t.precision,s=t.rounding;return n!==-1?n===0?e.isNeg()?oi(t,r,s):new t(0):new t(NaN):e.isZero()?oi(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,e=e.asin(),i=oi(t,r+4,s).times(.5),t.precision=r,t.rounding=s,i.minus(e))};ce.inverseHyperbolicCosine=ce.acosh=function(){var i,e,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(i=n.precision,e=n.rounding,n.precision=i+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,Ye=!1,t=t.times(t).minus(1).sqrt().plus(t),Ye=!0,n.precision=i,n.rounding=e,t.ln()):new n(t)};ce.inverseHyperbolicSine=ce.asinh=function(){var i,e,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,Ye=!1,t=t.times(t).plus(1).sqrt().plus(t),Ye=!0,n.precision=i,n.rounding=e,t.ln())};ce.inverseHyperbolicTangent=ce.atanh=function(){var i,e,t,n,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(i=s.precision,e=s.rounding,n=r.sd(),Math.max(n,i)<2*-r.e-1?Be(new s(r),i,e,!0):(s.precision=t=n-r.e,r=St(r.plus(1),new s(1).minus(r),t+i,1),s.precision=i+4,s.rounding=1,r=r.ln(),s.precision=i,s.rounding=e,r.times(.5))):new s(NaN)};ce.inverseSine=ce.asin=function(){var i,e,t,n,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,n=s.rounding,e!==-1?e===0?(i=oi(s,t+4,n).times(.5),i.s=r.s,i):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=n,r.times(2)))};ce.inverseTangent=ce.atan=function(){var i,e,t,n,r,s,o,a,c,h=this,l=h.constructor,u=l.precision,f=l.rounding;if(h.isFinite()){if(h.isZero())return new l(h);if(h.abs().eq(1)&&u+4<=Ya)return o=oi(l,u+4,f).times(.25),o.s=h.s,o}else{if(!h.s)return new l(NaN);if(u+4<=Ya)return o=oi(l,u+4,f).times(.5),o.s=h.s,o}for(l.precision=a=u+10,l.rounding=1,t=Math.min(28,a/He+2|0),i=t;i;--i)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(Ye=!1,e=Math.ceil(a/He),n=1,c=h.times(h),o=new l(h),r=h;i!==-1;)if(r=r.times(c),s=o.minus(r.div(n+=2)),r=r.times(c),o=s.plus(r.div(n+=2)),o.d[e]!==void 0)for(i=e;o.d[i]===s.d[i]&&i--;);return t&&(o=o.times(2<<t-1)),Ye=!0,Be(o,l.precision=u,l.rounding=f,!0)};ce.isFinite=function(){return!!this.d};ce.isInteger=ce.isInt=function(){return!!this.d&&pn(this.e/He)>this.d.length-2};ce.isNaN=function(){return!this.s};ce.isNegative=ce.isNeg=function(){return this.s<0};ce.isPositive=ce.isPos=function(){return this.s>0};ce.isZero=function(){return!!this.d&&this.d[0]===0};ce.lessThan=ce.lt=function(i){return this.cmp(i)<0};ce.lessThanOrEqualTo=ce.lte=function(i){return this.cmp(i)<1};ce.logarithm=ce.log=function(i){var e,t,n,r,s,o,a,c,h=this,l=h.constructor,u=l.precision,f=l.rounding,p=5;if(i==null)i=new l(10),e=!0;else{if(i=new l(i),t=i.d,i.s<0||!t||!t[0]||i.eq(1))return new l(NaN);e=i.eq(10)}if(t=h.d,h.s<0||!t||!t[0]||h.eq(1))return new l(t&&!t[0]?-1/0:h.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10===0;)r/=10;s=r!==1}if(Ye=!1,a=u+p,o=ki(h,a),n=e?yo(l,a+10):ki(i,a),c=St(o,n,a,1),ws(c.d,r=u,f))do if(a+=10,o=ki(h,a),n=e?yo(l,a+10):ki(i,a),c=St(o,n,a,1),!s){+tn(c.d).slice(r+1,r+15)+1==1e14&&(c=Be(c,u+1,0));break}while(ws(c.d,r+=10,f));return Ye=!0,Be(c,u,f)};ce.minus=ce.sub=function(i){var e,t,n,r,s,o,a,c,h,l,u,f,p=this,g=p.constructor;if(i=new g(i),!p.d||!i.d)return!p.s||!i.s?i=new g(NaN):p.d?i.s=-i.s:i=new g(i.d||p.s!==i.s?p:NaN),i;if(p.s!=i.s)return i.s=-i.s,p.plus(i);if(h=p.d,f=i.d,a=g.precision,c=g.rounding,!h[0]||!f[0]){if(f[0])i.s=-i.s;else if(h[0])i=new g(p);else return new g(c===3?-0:0);return Ye?Be(i,a,c):i}if(t=pn(i.e/He),l=pn(p.e/He),h=h.slice(),s=l-t,s){for(u=s<0,u?(e=h,s=-s,o=f.length):(e=f,t=l,o=h.length),n=Math.max(Math.ceil(a/He),o)+2,s>n&&(s=n,e.length=1),e.reverse(),n=s;n--;)e.push(0);e.reverse()}else{for(n=h.length,o=f.length,u=n<o,u&&(o=n),n=0;n<o;n++)if(h[n]!=f[n]){u=h[n]<f[n];break}s=0}for(u&&(e=h,h=f,f=e,i.s=-i.s),o=h.length,n=f.length-o;n>0;--n)h[o++]=0;for(n=f.length;n>s;){if(h[--n]<f[n]){for(r=n;r&&h[--r]===0;)h[r]=ai-1;--h[r],h[n]+=ai}h[n]-=f[n]}for(;h[--o]===0;)h.pop();for(;h[0]===0;h.shift())--t;return h[0]?(i.d=h,i.e=Lo(h,t),Ye?Be(i,a,c):i):new g(c===3?-0:0)};ce.modulo=ce.mod=function(i){var e,t=this,n=t.constructor;return i=new n(i),!t.d||!i.s||i.d&&!i.d[0]?new n(NaN):!i.d||t.d&&!t.d[0]?Be(new n(t),n.precision,n.rounding):(Ye=!1,n.modulo==9?(e=St(t,i.abs(),0,3,1),e.s*=i.s):e=St(t,i,0,n.modulo,1),e=e.times(i),Ye=!0,t.minus(e))};ce.naturalExponential=ce.exp=function(){return Za(this)};ce.naturalLogarithm=ce.ln=function(){return ki(this)};ce.negated=ce.neg=function(){var i=new this.constructor(this);return i.s=-i.s,Be(i)};ce.plus=ce.add=function(i){var e,t,n,r,s,o,a,c,h,l,u=this,f=u.constructor;if(i=new f(i),!u.d||!i.d)return!u.s||!i.s?i=new f(NaN):u.d||(i=new f(i.d||u.s===i.s?u:NaN)),i;if(u.s!=i.s)return i.s=-i.s,u.minus(i);if(h=u.d,l=i.d,a=f.precision,c=f.rounding,!h[0]||!l[0])return l[0]||(i=new f(u)),Ye?Be(i,a,c):i;if(s=pn(u.e/He),n=pn(i.e/He),h=h.slice(),r=s-n,r){for(r<0?(t=h,r=-r,o=l.length):(t=l,n=s,o=h.length),s=Math.ceil(a/He),o=s>o?s+1:o+1,r>o&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(o=h.length,r=l.length,o-r<0&&(r=o,t=l,l=h,h=t),e=0;r;)e=(h[--r]=h[r]+l[r]+e)/ai|0,h[r]%=ai;for(e&&(h.unshift(e),++n),o=h.length;h[--o]==0;)h.pop();return i.d=h,i.e=Lo(h,n),Ye?Be(i,a,c):i};ce.precision=ce.sd=function(i){var e,t=this;if(i!==void 0&&i!==!!i&&i!==1&&i!==0)throw Error(ji+i);return t.d?(e=Rh(t.d),i&&t.e+1>e&&(e=t.e+1)):e=NaN,e};ce.round=function(){var i=this,e=i.constructor;return Be(new e(i),i.e+1,e.rounding)};ce.sine=ce.sin=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+He,n.rounding=1,t=Bx(n,Uh(n,t)),n.precision=i,n.rounding=e,Be(Ti>2?t.neg():t,i,e,!0)):new n(NaN)};ce.squareRoot=ce.sqrt=function(){var i,e,t,n,r,s,o=this,a=o.d,c=o.e,h=o.s,l=o.constructor;if(h!==1||!a||!a[0])return new l(!h||h<0&&(!a||a[0])?NaN:a?o:1/0);for(Ye=!1,h=Math.sqrt(+o),h==0||h==1/0?(e=tn(a),(e.length+c)%2==0&&(e+="0"),h=Math.sqrt(e),c=pn((c+1)/2)-(c<0||c%2),h==1/0?e="5e"+c:(e=h.toExponential(),e=e.slice(0,e.indexOf("e")+1)+c),n=new l(e)):n=new l(h.toString()),t=(c=l.precision)+3;;)if(s=n,n=s.plus(St(o,s,t+2,1)).times(.5),tn(s.d).slice(0,t)===(e=tn(n.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!r&&e=="4999"){if(!r&&(Be(s,c+1,0),s.times(s).eq(o))){n=s;break}t+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Be(n,c+1,1),i=!n.times(n).eq(o));break}return Ye=!0,Be(n,c,l.rounding,i)};ce.tangent=ce.tan=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+10,n.rounding=1,t=t.sin(),t.s=1,t=St(t,new n(1).minus(t.times(t)).sqrt(),i+10,0),n.precision=i,n.rounding=e,Be(Ti==2||Ti==4?t.neg():t,i,e,!0)):new n(NaN)};ce.times=ce.mul=function(i){var e,t,n,r,s,o,a,c,h,l=this,u=l.constructor,f=l.d,p=(i=new u(i)).d;if(i.s*=l.s,!f||!f[0]||!p||!p[0])return new u(!i.s||f&&!f[0]&&!p||p&&!p[0]&&!f?NaN:!f||!p?i.s/0:i.s*0);for(t=pn(l.e/He)+pn(i.e/He),c=f.length,h=p.length,c<h&&(s=f,f=p,p=s,o=c,c=h,h=o),s=[],o=c+h,n=o;n--;)s.push(0);for(n=h;--n>=0;){for(e=0,r=c+n;r>n;)a=s[r]+p[n]*f[r-n-1]+e,s[r--]=a%ai|0,e=a/ai|0;s[r]=(s[r]+e)%ai|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),i.d=s,i.e=Lo(s,t),Ye?Be(i,u.precision,u.rounding):i};ce.toBinary=function(i,e){return pu(this,2,i,e)};ce.toDecimalPlaces=ce.toDP=function(i,e){var t=this,n=t.constructor;return t=new n(t),i===void 0?t:(Sn(i,0,qi),e===void 0?e=n.rounding:Sn(e,0,8),Be(t,i+t.e+1,e))};ce.toExponential=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=vi(n,!0):(Sn(i,0,qi),e===void 0?e=r.rounding:Sn(e,0,8),n=Be(new r(n),i+1,e),t=vi(n,!0,i+1)),n.isNeg()&&!n.isZero()?"-"+t:t};ce.toFixed=function(i,e){var t,n,r=this,s=r.constructor;return i===void 0?t=vi(r):(Sn(i,0,qi),e===void 0?e=s.rounding:Sn(e,0,8),n=Be(new s(r),i+r.e+1,e),t=vi(n,!1,i+n.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};ce.toFraction=function(i){var e,t,n,r,s,o,a,c,h,l,u,f,p=this,g=p.d,_=p.constructor;if(!g)return new _(p);if(h=t=new _(1),n=c=new _(0),e=new _(n),s=e.e=Rh(g)-p.e-1,o=s%He,e.d[0]=jt(10,o<0?He+o:o),i==null)i=s>0?e:h;else{if(a=new _(i),!a.isInt()||a.lt(h))throw Error(ji+a);i=a.gt(e)?s>0?e:h:a}for(Ye=!1,a=new _(tn(g)),l=_.precision,_.precision=s=g.length*He*2;u=St(a,e,0,1,1),r=t.plus(u.times(n)),r.cmp(i)!=1;)t=n,n=r,r=h,h=c.plus(u.times(r)),c=r,r=e,e=a.minus(u.times(r)),a=r;return r=St(i.minus(t),n,0,1,1),c=c.plus(r.times(h)),t=t.plus(r.times(n)),c.s=h.s=p.s,f=St(h,n,s,1).minus(p).abs().cmp(St(c,t,s,1).minus(p).abs())<1?[h,n]:[c,t],_.precision=l,Ye=!0,f};ce.toHexadecimal=ce.toHex=function(i,e){return pu(this,16,i,e)};ce.toNearest=function(i,e){var t=this,n=t.constructor;if(t=new n(t),i==null){if(!t.d)return t;i=new n(1),e=n.rounding}else{if(i=new n(i),e===void 0?e=n.rounding:Sn(e,0,8),!t.d)return i.s?t:i;if(!i.d)return i.s&&(i.s=t.s),i}return i.d[0]?(Ye=!1,t=St(t,i,0,e,1).times(i),Ye=!0,Be(t)):(i.s=t.s,t=i),t};ce.toNumber=function(){return+this};ce.toOctal=function(i,e){return pu(this,8,i,e)};ce.toPower=ce.pow=function(i){var e,t,n,r,s,o,a=this,c=a.constructor,h=+(i=new c(i));if(!a.d||!i.d||!a.d[0]||!i.d[0])return new c(jt(+a,h));if(a=new c(a),a.eq(1))return a;if(n=c.precision,s=c.rounding,i.eq(1))return Be(a,n,s);if(e=pn(i.e/He),e>=i.d.length-1&&(t=h<0?-h:h)<=Lx)return r=Ih(c,a,t,n),i.s<0?new c(1).div(r):Be(r,n,s);if(o=a.s,o<0){if(e<i.d.length-1)return new c(NaN);if(i.d[e]&1||(o=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=o,a}return t=jt(+a,h),e=t==0||!isFinite(t)?pn(h*(Math.log("0."+tn(a.d))/Math.LN10+a.e+1)):new c(t+"").e,e>c.maxE+1||e<c.minE-1?new c(e>0?o/0:0):(Ye=!1,c.rounding=a.s=1,t=Math.min(12,(e+"").length),r=Za(i.times(ki(a,n+t)),n),r.d&&(r=Be(r,n+5,1),ws(r.d,n,s)&&(e=n+10,r=Be(Za(i.times(ki(a,e+t)),e),e+5,1),+tn(r.d).slice(n+1,n+15)+1==1e14&&(r=Be(r,n+1,0)))),r.s=o,Ye=!0,c.rounding=s,Be(r,n,s))};ce.toPrecision=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=vi(n,n.e<=r.toExpNeg||n.e>=r.toExpPos):(Sn(i,1,qi),e===void 0?e=r.rounding:Sn(e,0,8),n=Be(new r(n),i,e),t=vi(n,i<=n.e||n.e<=r.toExpNeg,i)),n.isNeg()&&!n.isZero()?"-"+t:t};ce.toSignificantDigits=ce.toSD=function(i,e){var t=this,n=t.constructor;return i===void 0?(i=n.precision,e=n.rounding):(Sn(i,1,qi),e===void 0?e=n.rounding:Sn(e,0,8)),Be(new n(t),i,e)};ce.toString=function(){var i=this,e=i.constructor,t=vi(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()&&!i.isZero()?"-"+t:t};ce.truncated=ce.trunc=function(){return Be(new this.constructor(this),this.e+1,1)};ce.valueOf=ce.toJSON=function(){var i=this,e=i.constructor,t=vi(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()?"-"+t:t};function tn(i){var e,t,n,r=i.length-1,s="",o=i[0];if(r>0){for(s+=o,e=1;e<r;e++)n=i[e]+"",t=He-n.length,t&&(s+=Ui(t)),s+=n;o=i[e],n=o+"",t=He-n.length,t&&(s+=Ui(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function Sn(i,e,t){if(i!==~~i||i<e||i>t)throw Error(ji+i)}function ws(i,e,t,n){var r,s,o,a;for(s=i[0];s>=10;s/=10)--e;return--e<0?(e+=He,r=0):(r=Math.ceil((e+1)/He),e%=He),s=jt(10,He-e),a=i[r]%s|0,n==null?e<3?(e==0?a=a/100|0:e==1&&(a=a/10|0),o=t<4&&a==99999||t>3&&a==49999||a==5e4||a==0):o=(t<4&&a+1==s||t>3&&a+1==s/2)&&(i[r+1]/s/100|0)==jt(10,e-2)-1||(a==s/2||a==0)&&(i[r+1]/s/100|0)==0:e<4?(e==0?a=a/1e3|0:e==1?a=a/100|0:e==2&&(a=a/10|0),o=(n||t<4)&&a==9999||!n&&t>3&&a==4999):o=((n||t<4)&&a+1==s||!n&&t>3&&a+1==s/2)&&(i[r+1]/s/1e3|0)==jt(10,e-3)-1,o}function ao(i,e,t){for(var n,r=[0],s,o=0,a=i.length;o<a;){for(s=r.length;s--;)r[s]*=e;for(r[0]+=qa.indexOf(i.charAt(o++)),n=0;n<r.length;n++)r[n]>t-1&&(r[n+1]===void 0&&(r[n+1]=0),r[n+1]+=r[n]/t|0,r[n]%=t)}return r.reverse()}function Ix(i,e){var t,n,r;if(e.isZero())return e;n=e.d.length,n<32?(t=Math.ceil(n/3),r=(1/Ro(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),i.precision+=t,e=Xr(i,1,e.times(r),new i(1));for(var s=t;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return i.precision-=t,e}var St=function(){function i(n,r,s){var o,a=0,c=n.length;for(n=n.slice();c--;)o=n[c]*r+a,n[c]=o%s|0,a=o/s|0;return a&&n.unshift(a),n}function e(n,r,s,o){var a,c;if(s!=o)c=s>o?1:-1;else for(a=c=0;a<s;a++)if(n[a]!=r[a]){c=n[a]>r[a]?1:-1;break}return c}function t(n,r,s,o){for(var a=0;s--;)n[s]-=a,a=n[s]<r[s]?1:0,n[s]=a*o+n[s]-r[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,r,s,o,a,c){var h,l,u,f,p,g,_,m,d,y,v,b,M,S,P,E,w,D,N,W,B=n.constructor,H=n.s==r.s?1:-1,G=n.d,K=r.d;if(!G||!G[0]||!K||!K[0])return new B(!n.s||!r.s||(G?K&&G[0]==K[0]:!K)?NaN:G&&G[0]==0||!K?H*0:H/0);for(c?(p=1,l=n.e-r.e):(c=ai,p=He,l=pn(n.e/p)-pn(r.e/p)),N=K.length,w=G.length,d=new B(H),y=d.d=[],u=0;K[u]==(G[u]||0);u++);if(K[u]>(G[u]||0)&&l--,s==null?(S=s=B.precision,o=B.rounding):a?S=s+(n.e-r.e)+1:S=s,S<0)y.push(1),g=!0;else{if(S=S/p+2|0,u=0,N==1){for(f=0,K=K[0],S++;(u<w||f)&&S--;u++)P=f*c+(G[u]||0),y[u]=P/K|0,f=P%K|0;g=f||u<w}else{for(f=c/(K[0]+1)|0,f>1&&(K=i(K,f,c),G=i(G,f,c),N=K.length,w=G.length),E=N,v=G.slice(0,N),b=v.length;b<N;)v[b++]=0;W=K.slice(),W.unshift(0),D=K[0],K[1]>=c/2&&++D;do f=0,h=e(K,v,N,b),h<0?(M=v[0],N!=b&&(M=M*c+(v[1]||0)),f=M/D|0,f>1?(f>=c&&(f=c-1),_=i(K,f,c),m=_.length,b=v.length,h=e(_,v,m,b),h==1&&(f--,t(_,N<m?W:K,m,c))):(f==0&&(h=f=1),_=K.slice()),m=_.length,m<b&&_.unshift(0),t(v,_,b,c),h==-1&&(b=v.length,h=e(K,v,N,b),h<1&&(f++,t(v,N<b?W:K,b,c))),b=v.length):h===0&&(f++,v=[0]),y[u++]=f,h&&v[0]?v[b++]=G[E]||0:(v=[G[E]],b=1);while((E++<w||v[0]!==void 0)&&S--);g=v[0]!==void 0}y[0]||y.shift()}if(p==1)d.e=l,Ch=g;else{for(u=1,f=y[0];f>=10;f/=10)u++;d.e=u+l*p-1,Be(d,a?s+d.e+1:s,o,g)}return d}}();function Be(i,e,t,n){var r,s,o,a,c,h,l,u,f,p=i.constructor;e:if(e!=null){if(u=i.d,!u)return i;for(r=1,a=u[0];a>=10;a/=10)r++;if(s=e-r,s<0)s+=He,o=e,l=u[f=0],c=l/jt(10,r-o-1)%10|0;else if(f=Math.ceil((s+1)/He),a=u.length,f>=a)if(n){for(;a++<=f;)u.push(0);l=c=0,r=1,s%=He,o=s-He+1}else break e;else{for(l=a=u[f],r=1;a>=10;a/=10)r++;s%=He,o=s-He+r,c=o<0?0:l/jt(10,r-o-1)%10|0}if(n=n||e<0||u[f+1]!==void 0||(o<0?l:l%jt(10,r-o-1)),h=t<4?(c||n)&&(t==0||t==(i.s<0?3:2)):c>5||c==5&&(t==4||n||t==6&&(s>0?o>0?l/jt(10,r-o):0:u[f-1])%10&1||t==(i.s<0?8:7)),e<1||!u[0])return u.length=0,h?(e-=i.e+1,u[0]=jt(10,(He-e%He)%He),i.e=-e||0):u[0]=i.e=0,i;if(s==0?(u.length=f,a=1,f--):(u.length=f+1,a=jt(10,He-s),u[f]=o>0?(l/jt(10,r-o)%jt(10,o)|0)*a:0),h)for(;;)if(f==0){for(s=1,o=u[0];o>=10;o/=10)s++;for(o=u[0]+=a,a=1;o>=10;o/=10)a++;s!=a&&(i.e++,u[0]==ai&&(u[0]=1));break}else{if(u[f]+=a,u[f]!=ai)break;u[f--]=0,a=1}for(s=u.length;u[--s]===0;)u.pop()}return Ye&&(i.e>p.maxE?(i.d=null,i.e=NaN):i.e<p.minE&&(i.e=0,i.d=[0])),i}function vi(i,e,t){if(!i.isFinite())return Bh(i);var n,r=i.e,s=tn(i.d),o=s.length;return e?(t&&(n=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+Ui(n):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(i.e<0?"e":"e+")+i.e):r<0?(s="0."+Ui(-r-1)+s,t&&(n=t-o)>0&&(s+=Ui(n))):r>=o?(s+=Ui(r+1-o),t&&(n=t-r-1)>0&&(s=s+"."+Ui(n))):((n=r+1)<o&&(s=s.slice(0,n)+"."+s.slice(n)),t&&(n=t-o)>0&&(r+1===o&&(s+="."),s+=Ui(n))),s}function Lo(i,e){var t=i[0];for(e*=He;t>=10;t/=10)e++;return e}function yo(i,e,t){if(e>Rx)throw Ye=!0,t&&(i.precision=t),Error(Th);return Be(new i(vo),e,1,!0)}function oi(i,e,t){if(e>Ya)throw Error(Th);return Be(new i(xo),e,t,!0)}function Rh(i){var e=i.length-1,t=e*He+1;if(e=i[e],e){for(;e%10==0;e/=10)t--;for(e=i[0];e>=10;e/=10)t++}return t}function Ui(i){for(var e="";i--;)e+="0";return e}function Ih(i,e,t,n){var r,s=new i(1),o=Math.ceil(n/He+4);for(Ye=!1;;){if(t%2&&(s=s.times(e),zc(s.d,o)&&(r=!0)),t=pn(t/2),t===0){t=s.d.length-1,r&&s.d[t]===0&&++s.d[t];break}e=e.times(e),zc(e.d,o)}return Ye=!0,s}function Oc(i){return i.d[i.d.length-1]&1}function Nh(i,e,t){for(var n,r=new i(e[0]),s=0;++s<e.length;)if(n=new i(e[s]),n.s)r[t](n)&&(r=n);else{r=n;break}return r}function Za(i,e){var t,n,r,s,o,a,c,h=0,l=0,u=0,f=i.constructor,p=f.rounding,g=f.precision;if(!i.d||!i.d[0]||i.e>17)return new f(i.d?i.d[0]?i.s<0?0:1/0:1:i.s?i.s<0?0:i:0/0);for(e==null?(Ye=!1,c=g):c=e,a=new f(.03125);i.e>-2;)i=i.times(a),u+=5;for(n=Math.log(jt(2,u))/Math.LN10*2+5|0,c+=n,t=s=o=new f(1),f.precision=c;;){if(s=Be(s.times(i),c,1),t=t.times(++l),a=o.plus(St(s,t,c,1)),tn(a.d).slice(0,c)===tn(o.d).slice(0,c)){for(r=u;r--;)o=Be(o.times(o),c,1);if(e==null)if(h<3&&ws(o.d,c-n,p,h))f.precision=c+=10,t=s=a=new f(1),l=0,h++;else return Be(o,f.precision=g,p,Ye=!0);else return f.precision=g,o}o=a}}function ki(i,e){var t,n,r,s,o,a,c,h,l,u,f,p=1,g=10,_=i,m=_.d,d=_.constructor,y=d.rounding,v=d.precision;if(_.s<0||!m||!m[0]||!_.e&&m[0]==1&&m.length==1)return new d(m&&!m[0]?-1/0:_.s!=1?NaN:m?0:_);if(e==null?(Ye=!1,l=v):l=e,d.precision=l+=g,t=tn(m),n=t.charAt(0),Math.abs(s=_.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)_=_.times(i),t=tn(_.d),n=t.charAt(0),p++;s=_.e,n>1?(_=new d("0."+t),s++):_=new d(n+"."+t.slice(1))}else return h=yo(d,l+2,v).times(s+""),_=ki(new d(n+"."+t.slice(1)),l-g).plus(h),d.precision=v,e==null?Be(_,v,y,Ye=!0):_;for(u=_,c=o=_=St(_.minus(1),_.plus(1),l,1),f=Be(_.times(_),l,1),r=3;;){if(o=Be(o.times(f),l,1),h=c.plus(St(o,new d(r),l,1)),tn(h.d).slice(0,l)===tn(c.d).slice(0,l))if(c=c.times(2),s!==0&&(c=c.plus(yo(d,l+2,v).times(s+""))),c=St(c,new d(p),l,1),e==null)if(ws(c.d,l-g,y,a))d.precision=l+=g,h=o=_=St(u.minus(1),u.plus(1),l,1),f=Be(_.times(_),l,1),r=a=1;else return Be(c,d.precision=v,y,Ye=!0);else return d.precision=v,c;c=h,r+=2}}function Bh(i){return String(i.s*i.s/0)}function Ka(i,e){var t,n,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;e.charCodeAt(n)===48;n++);for(r=e.length;e.charCodeAt(r-1)===48;--r);if(e=e.slice(n,r),e){if(r-=n,i.e=t=t-n-1,i.d=[],n=(t+1)%He,t<0&&(n+=He),n<r){for(n&&i.d.push(+e.slice(0,n)),r-=He;n<r;)i.d.push(+e.slice(n,n+=He));e=e.slice(n),n=He-e.length}else n-=r;for(;n--;)e+="0";i.d.push(+e),Ye&&(i.e>i.constructor.maxE?(i.d=null,i.e=NaN):i.e<i.constructor.minE&&(i.e=0,i.d=[0]))}else i.e=0,i.d=[0];return i}function Nx(i,e){var t,n,r,s,o,a,c,h,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Lh.test(e))return Ka(i,e)}else if(e==="Infinity"||e==="NaN")return+e||(i.s=NaN),i.e=NaN,i.d=null,i;if(Px.test(e))t=16,e=e.toLowerCase();else if(Tx.test(e))t=2;else if(Fx.test(e))t=8;else throw Error(ji+e);for(s=e.search(/p/i),s>0?(c=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),o=s>=0,n=i.constructor,o&&(e=e.replace(".",""),a=e.length,s=a-s,r=Ih(n,new n(t),s,s*2)),h=ao(e,t,ai),l=h.length-1,s=l;h[s]===0;--s)h.pop();return s<0?new n(i.s*0):(i.e=Lo(h,l),i.d=h,Ye=!1,o&&(i=St(i,r,a*4)),c&&(i=i.times(Math.abs(c)<54?jt(2,c):Yr.pow(2,c))),Ye=!0,i)}function Bx(i,e){var t,n=e.d.length;if(n<3)return e.isZero()?e:Xr(i,2,e,e);t=1.4*Math.sqrt(n),t=t>16?16:t|0,e=e.times(1/Ro(5,t)),e=Xr(i,2,e,e);for(var r,s=new i(5),o=new i(16),a=new i(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(a))));return e}function Xr(i,e,t,n,r){var s,o,a,c,h=i.precision,l=Math.ceil(h/He);for(Ye=!1,c=t.times(t),a=new i(n);;){if(o=St(a.times(c),new i(e++*e++),h,1),a=r?n.plus(o):n.minus(o),n=St(o.times(c),new i(e++*e++),h,1),o=a.plus(n),o.d[l]!==void 0){for(s=l;o.d[s]===a.d[s]&&s--;);if(s==-1)break}s=a,a=n,n=o,o=s}return Ye=!0,o.d.length=l+1,o}function Ro(i,e){for(var t=i;--e;)t*=i;return t}function Uh(i,e){var t,n=e.s<0,r=oi(i,i.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return Ti=n?4:1,e;if(t=e.divToInt(r),t.isZero())Ti=n?3:2;else{if(e=e.minus(t.times(r)),e.lte(s))return Ti=Oc(t)?n?2:3:n?4:1,e;Ti=Oc(t)?n?1:4:n?3:2}return e.minus(r).abs()}function pu(i,e,t,n){var r,s,o,a,c,h,l,u,f,p=i.constructor,g=t!==void 0;if(g?(Sn(t,1,qi),n===void 0?n=p.rounding:Sn(n,0,8)):(t=p.precision,n=p.rounding),!i.isFinite())l=Bh(i);else{for(l=vi(i),o=l.indexOf("."),g?(r=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):r=e,o>=0&&(l=l.replace(".",""),f=new p(1),f.e=l.length-o,f.d=ao(vi(f),10,r),f.e=f.d.length),u=ao(l,10,r),s=c=u.length;u[--c]==0;)u.pop();if(!u[0])l=g?"0p+0":"0";else{if(o<0?s--:(i=new p(i),i.d=u,i.e=s,i=St(i,f,t,n,0,r),u=i.d,s=i.e,h=Ch),o=u[t],a=r/2,h=h||u[t+1]!==void 0,h=n<4?(o!==void 0||h)&&(n===0||n===(i.s<0?3:2)):o>a||o===a&&(n===4||h||n===6&&u[t-1]&1||n===(i.s<0?8:7)),u.length=t,h)for(;++u[--t]>r-1;)u[t]=0,t||(++s,u.unshift(1));for(c=u.length;!u[c-1];--c);for(o=0,l="";o<c;o++)l+=qa.charAt(u[o]);if(g){if(c>1)if(e==16||e==8){for(o=e==16?4:3,--c;c%o;c++)l+="0";for(u=ao(l,r,e),c=u.length;!u[c-1];--c);for(o=1,l="1.";o<c;o++)l+=qa.charAt(u[o])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>c)for(s-=c;s--;)l+="0";else s<c&&(l=l.slice(0,s)+"."+l.slice(s))}l=(e==16?"0x":e==2?"0b":e==8?"0o":"")+l}return i.s<0?"-"+l:l}function zc(i,e){if(i.length>e)return i.length=e,!0}function Ux(i){return new this(i).abs()}function Ox(i){return new this(i).acos()}function zx(i){return new this(i).acosh()}function kx(i,e){return new this(i).plus(e)}function Hx(i){return new this(i).asin()}function Gx(i){return new this(i).asinh()}function Vx(i){return new this(i).atan()}function Wx(i){return new this(i).atanh()}function jx(i,e){i=new this(i),e=new this(e);var t,n=this.precision,r=this.rounding,s=n+4;return!i.s||!e.s?t=new this(NaN):!i.d&&!e.d?(t=oi(this,s,1).times(e.s>0?.25:.75),t.s=i.s):!e.d||i.isZero()?(t=e.s<0?oi(this,n,r):new this(0),t.s=i.s):!i.d||e.isZero()?(t=oi(this,s,1).times(.5),t.s=i.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(St(i,e,s,1)),e=oi(this,s,1),this.precision=n,this.rounding=r,t=i.s<0?t.minus(e):t.plus(e)):t=this.atan(St(i,e,s,1)),t}function qx(i){return new this(i).cbrt()}function Xx(i){return Be(i=new this(i),i.e+1,2)}function Yx(i,e,t){return new this(i).clamp(e,t)}function Zx(i){if(!i||typeof i!="object")throw Error(Fo+"Object expected");var e,t,n,r=i.defaults===!0,s=["precision",1,qi,"rounding",0,8,"toExpNeg",-Br,0,"toExpPos",0,Br,"maxE",0,Br,"minE",-Br,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=Xa[t]),(n=i[t])!==void 0)if(pn(n)===n&&n>=s[e+1]&&n<=s[e+2])this[t]=n;else throw Error(ji+t+": "+n);if(t="crypto",r&&(this[t]=Xa[t]),(n=i[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Ph);else this[t]=!1;else throw Error(ji+t+": "+n);return this}function Kx(i){return new this(i).cos()}function Qx(i){return new this(i).cosh()}function Oh(i){var e,t,n;function r(s){var o,a,c,h=this;if(!(h instanceof r))return new r(s);if(h.constructor=r,kc(s)){h.s=s.s,Ye?!s.d||s.e>r.maxE?(h.e=NaN,h.d=null):s.e<r.minE?(h.e=0,h.d=[0]):(h.e=s.e,h.d=s.d.slice()):(h.e=s.e,h.d=s.d?s.d.slice():s.d);return}if(c=typeof s,c==="number"){if(s===0){h.s=1/s<0?-1:1,h.e=0,h.d=[0];return}if(s<0?(s=-s,h.s=-1):h.s=1,s===~~s&&s<1e7){for(o=0,a=s;a>=10;a/=10)o++;Ye?o>r.maxE?(h.e=NaN,h.d=null):o<r.minE?(h.e=0,h.d=[0]):(h.e=o,h.d=[s]):(h.e=o,h.d=[s]);return}else if(s*0!==0){s||(h.s=NaN),h.e=NaN,h.d=null;return}return Ka(h,s.toString())}else if(c!=="string")throw Error(ji+s);return(a=s.charCodeAt(0))===45?(s=s.slice(1),h.s=-1):(a===43&&(s=s.slice(1)),h.s=1),Lh.test(s)?Ka(h,s):Nx(h,s)}if(r.prototype=ce,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=Zx,r.clone=Oh,r.isDecimal=kc,r.abs=Ux,r.acos=Ox,r.acosh=zx,r.add=kx,r.asin=Hx,r.asinh=Gx,r.atan=Vx,r.atanh=Wx,r.atan2=jx,r.cbrt=qx,r.ceil=Xx,r.clamp=Yx,r.cos=Kx,r.cosh=Qx,r.div=$x,r.exp=Jx,r.floor=ey,r.hypot=ty,r.ln=ny,r.log=iy,r.log10=sy,r.log2=ry,r.max=oy,r.min=ay,r.mod=uy,r.mul=ly,r.pow=cy,r.random=fy,r.round=hy,r.sign=dy,r.sin=py,r.sinh=my,r.sqrt=gy,r.sub=_y,r.sum=vy,r.tan=xy,r.tanh=yy,r.trunc=My,i===void 0&&(i={}),i&&i.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<n.length;)i.hasOwnProperty(t=n[e++])||(i[t]=this[t]);return r.config(i),r}function $x(i,e){return new this(i).div(e)}function Jx(i){return new this(i).exp()}function ey(i){return Be(i=new this(i),i.e+1,3)}function ty(){var i,e,t=new this(0);for(Ye=!1,i=0;i<arguments.length;)if(e=new this(arguments[i++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return Ye=!0,new this(1/0);t=e}return Ye=!0,t.sqrt()}function kc(i){return i instanceof Yr||i&&i.toStringTag===Fh||!1}function ny(i){return new this(i).ln()}function iy(i,e){return new this(i).log(e)}function ry(i){return new this(i).log(2)}function sy(i){return new this(i).log(10)}function oy(){return Nh(this,arguments,"lt")}function ay(){return Nh(this,arguments,"gt")}function uy(i,e){return new this(i).mod(e)}function ly(i,e){return new this(i).mul(e)}function cy(i,e){return new this(i).pow(e)}function fy(i){var e,t,n,r,s=0,o=new this(1),a=[];if(i===void 0?i=this.precision:Sn(i,1,qi),n=Math.ceil(i/He),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(n));s<n;)r=e[s],r>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:a[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(n*=4);s<n;)r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(e,s):(a.push(r%1e7),s+=4);s=n/4}else throw Error(Ph);else for(;s<n;)a[s++]=Math.random()*1e7|0;for(n=a[--s],i%=He,n&&i&&(r=jt(10,He-i),a[s]=(n/r|0)*r);a[s]===0;s--)a.pop();if(s<0)t=0,a=[0];else{for(t=-1;a[0]===0;t-=He)a.shift();for(n=1,r=a[0];r>=10;r/=10)n++;n<He&&(t-=He-n)}return o.e=t,o.d=a,o}function hy(i){return Be(i=new this(i),i.e+1,this.rounding)}function dy(i){return i=new this(i),i.d?i.d[0]?i.s:0*i.s:i.s||NaN}function py(i){return new this(i).sin()}function my(i){return new this(i).sinh()}function gy(i){return new this(i).sqrt()}function _y(i,e){return new this(i).sub(e)}function vy(){var i=0,e=arguments,t=new this(e[i]);for(Ye=!1;t.s&&++i<e.length;)t=t.plus(e[i]);return Ye=!0,Be(t,this.precision,this.rounding)}function xy(i){return new this(i).tan()}function yy(i){return new this(i).tanh()}function My(i){return Be(i=new this(i),i.e+1,1)}ce[Symbol.for("nodejs.util.inspect.custom")]=ce.toString;ce[Symbol.toStringTag]="Decimal";var Yr=ce.constructor=Oh(Xa);vo=new Yr(vo);xo=new Yr(xo);var wy="BigNumber",by=["?on","config"],Dy=fr(wy,by,i=>{var{on:e,config:t}=i,n=Yr.clone({precision:t.precision,modulo:Yr.EUCLID});return n.prototype=Object.create(n.prototype),n.prototype.type="BigNumber",n.prototype.isBigNumber=!0,n.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},n.fromJSON=function(r){return new n(r.value)},e&&e("config",function(r,s){r.precision!==s.precision&&n.config({precision:r.precision})}),n},{isClass:!0});function zh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qa={},Sy={get exports(){return Qa},set exports(i){Qa=i}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(i,e){(function(t){var n=Math.cosh||function(u){return Math.abs(u)<1e-9?1-u:(Math.exp(u)+Math.exp(-u))*.5},r=Math.sinh||function(u){return Math.abs(u)<1e-9?u:(Math.exp(u)-Math.exp(-u))*.5},s=function(u){var f=Math.PI/4;if(-f>u||u>f)return Math.cos(u)-1;var p=u*u;return p*(p*(p*(p*(p*(p*(p*(p/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},o=function(u,f){var p=Math.abs(u),g=Math.abs(f);return p<3e3&&g<3e3?Math.sqrt(p*p+g*g):(p<g?(p=g,g=u/f):g=f/u,p*Math.sqrt(1+g*g))},a=function(){throw SyntaxError("Invalid Param")};function c(u,f){var p=Math.abs(u),g=Math.abs(f);return u===0?Math.log(g):f===0?Math.log(p):p<3e3&&g<3e3?Math.log(u*u+f*f)*.5:(u=u/2,f=f/2,.5*Math.log(u*u+f*f)+Math.LN2)}var h=function(u,f){var p={re:0,im:0};if(u==null)p.re=p.im=0;else if(f!==void 0)p.re=u,p.im=f;else switch(typeof u){case"object":if("im"in u&&"re"in u)p.re=u.re,p.im=u.im;else if("abs"in u&&"arg"in u){if(!Number.isFinite(u.abs)&&Number.isFinite(u.arg))return l.INFINITY;p.re=u.abs*Math.cos(u.arg),p.im=u.abs*Math.sin(u.arg)}else if("r"in u&&"phi"in u){if(!Number.isFinite(u.r)&&Number.isFinite(u.phi))return l.INFINITY;p.re=u.r*Math.cos(u.phi),p.im=u.r*Math.sin(u.phi)}else u.length===2?(p.re=u[0],p.im=u[1]):a();break;case"string":p.im=p.re=0;var g=u.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),_=1,m=0;g===null&&a();for(var d=0;d<g.length;d++){var y=g[d];y===" "||y==="	"||y===`
`||(y==="+"?_++:y==="-"?m++:y==="i"||y==="I"?(_+m===0&&a(),g[d+1]!==" "&&!isNaN(g[d+1])?(p.im+=parseFloat((m%2?"-":"")+g[d+1]),d++):p.im+=parseFloat((m%2?"-":"")+"1"),_=m=0):((_+m===0||isNaN(y))&&a(),g[d+1]==="i"||g[d+1]==="I"?(p.im+=parseFloat((m%2?"-":"")+y),d++):p.re+=parseFloat((m%2?"-":"")+y),_=m=0))}_+m>0&&a();break;case"number":p.im=0,p.re=u;break;default:a()}return isNaN(p.re)||isNaN(p.im),p};function l(u,f){if(!(this instanceof l))return new l(u,f);var p=h(u,f);this.re=p.re,this.im=p.im}l.prototype={re:0,im:0,sign:function(){var u=this.abs();return new l(this.re/u,this.im/u)},add:function(u,f){var p=new l(u,f);return this.isInfinite()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:new l(this.re+p.re,this.im+p.im)},sub:function(u,f){var p=new l(u,f);return this.isInfinite()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:new l(this.re-p.re,this.im-p.im)},mul:function(u,f){var p=new l(u,f);return this.isInfinite()&&p.isZero()||this.isZero()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:p.im===0&&this.im===0?new l(this.re*p.re,0):new l(this.re*p.re-this.im*p.im,this.re*p.im+this.im*p.re)},div:function(u,f){var p=new l(u,f);if(this.isZero()&&p.isZero()||this.isInfinite()&&p.isInfinite())return l.NAN;if(this.isInfinite()||p.isZero())return l.INFINITY;if(this.isZero()||p.isInfinite())return l.ZERO;u=this.re,f=this.im;var g=p.re,_=p.im,m,d;return _===0?new l(u/g,f/g):Math.abs(g)<Math.abs(_)?(d=g/_,m=g*d+_,new l((u*d+f)/m,(f*d-u)/m)):(d=_/g,m=_*d+g,new l((u+f*d)/m,(f-u*d)/m))},pow:function(u,f){var p=new l(u,f);if(u=this.re,f=this.im,p.isZero())return l.ONE;if(p.im===0){if(f===0&&u>0)return new l(Math.pow(u,p.re),0);if(u===0)switch((p.re%4+4)%4){case 0:return new l(Math.pow(f,p.re),0);case 1:return new l(0,Math.pow(f,p.re));case 2:return new l(-Math.pow(f,p.re),0);case 3:return new l(0,-Math.pow(f,p.re))}}if(u===0&&f===0&&p.re>0&&p.im>=0)return l.ZERO;var g=Math.atan2(f,u),_=c(u,f);return u=Math.exp(p.re*_-p.im*g),f=p.im*_+p.re*g,new l(u*Math.cos(f),u*Math.sin(f))},sqrt:function(){var u=this.re,f=this.im,p=this.abs(),g,_;if(u>=0){if(f===0)return new l(Math.sqrt(u),0);g=.5*Math.sqrt(2*(p+u))}else g=Math.abs(f)/Math.sqrt(2*(p-u));return u<=0?_=.5*Math.sqrt(2*(p-u)):_=Math.abs(f)/Math.sqrt(2*(p+u)),new l(g,f<0?-_:_)},exp:function(){var u=Math.exp(this.re);return this.im,new l(u*Math.cos(this.im),u*Math.sin(this.im))},expm1:function(){var u=this.re,f=this.im;return new l(Math.expm1(u)*Math.cos(f)+s(f),Math.exp(u)*Math.sin(f))},log:function(){var u=this.re,f=this.im;return new l(c(u,f),Math.atan2(f,u))},abs:function(){return o(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var u=this.re,f=this.im;return new l(Math.sin(u)*n(f),Math.cos(u)*r(f))},cos:function(){var u=this.re,f=this.im;return new l(Math.cos(u)*n(f),-Math.sin(u)*r(f))},tan:function(){var u=2*this.re,f=2*this.im,p=Math.cos(u)+n(f);return new l(Math.sin(u)/p,r(f)/p)},cot:function(){var u=2*this.re,f=2*this.im,p=Math.cos(u)-n(f);return new l(-Math.sin(u)/p,r(f)/p)},sec:function(){var u=this.re,f=this.im,p=.5*n(2*f)+.5*Math.cos(2*u);return new l(Math.cos(u)*n(f)/p,Math.sin(u)*r(f)/p)},csc:function(){var u=this.re,f=this.im,p=.5*n(2*f)-.5*Math.cos(2*u);return new l(Math.sin(u)*n(f)/p,-Math.cos(u)*r(f)/p)},asin:function(){var u=this.re,f=this.im,p=new l(f*f-u*u+1,-2*u*f).sqrt(),g=new l(p.re-f,p.im+u).log();return new l(g.im,-g.re)},acos:function(){var u=this.re,f=this.im,p=new l(f*f-u*u+1,-2*u*f).sqrt(),g=new l(p.re-f,p.im+u).log();return new l(Math.PI/2-g.im,g.re)},atan:function(){var u=this.re,f=this.im;if(u===0){if(f===1)return new l(0,1/0);if(f===-1)return new l(0,-1/0)}var p=u*u+(1-f)*(1-f),g=new l((1-f*f-u*u)/p,-2*u/p).log();return new l(-.5*g.im,.5*g.re)},acot:function(){var u=this.re,f=this.im;if(f===0)return new l(Math.atan2(1,u),0);var p=u*u+f*f;return p!==0?new l(u/p,-f/p).atan():new l(u!==0?u/0:0,f!==0?-f/0:0).atan()},asec:function(){var u=this.re,f=this.im;if(u===0&&f===0)return new l(0,1/0);var p=u*u+f*f;return p!==0?new l(u/p,-f/p).acos():new l(u!==0?u/0:0,f!==0?-f/0:0).acos()},acsc:function(){var u=this.re,f=this.im;if(u===0&&f===0)return new l(Math.PI/2,1/0);var p=u*u+f*f;return p!==0?new l(u/p,-f/p).asin():new l(u!==0?u/0:0,f!==0?-f/0:0).asin()},sinh:function(){var u=this.re,f=this.im;return new l(r(u)*Math.cos(f),n(u)*Math.sin(f))},cosh:function(){var u=this.re,f=this.im;return new l(n(u)*Math.cos(f),r(u)*Math.sin(f))},tanh:function(){var u=2*this.re,f=2*this.im,p=n(u)+Math.cos(f);return new l(r(u)/p,Math.sin(f)/p)},coth:function(){var u=2*this.re,f=2*this.im,p=n(u)-Math.cos(f);return new l(r(u)/p,-Math.sin(f)/p)},csch:function(){var u=this.re,f=this.im,p=Math.cos(2*f)-n(2*u);return new l(-2*r(u)*Math.cos(f)/p,2*n(u)*Math.sin(f)/p)},sech:function(){var u=this.re,f=this.im,p=Math.cos(2*f)+n(2*u);return new l(2*n(u)*Math.cos(f)/p,-2*r(u)*Math.sin(f)/p)},asinh:function(){var u=this.im;this.im=-this.re,this.re=u;var f=this.asin();return this.re=-this.im,this.im=u,u=f.re,f.re=-f.im,f.im=u,f},acosh:function(){var u=this.acos();if(u.im<=0){var f=u.re;u.re=-u.im,u.im=f}else{var f=u.im;u.im=-u.re,u.re=f}return u},atanh:function(){var u=this.re,f=this.im,p=u>1&&f===0,g=1-u,_=1+u,m=g*g+f*f,d=m!==0?new l((_*g-f*f)/m,(f*g+_*f)/m):new l(u!==-1?u/0:0,f!==0?f/0:0),y=d.re;return d.re=c(d.re,d.im)/2,d.im=Math.atan2(d.im,y)/2,p&&(d.im=-d.im),d},acoth:function(){var u=this.re,f=this.im;if(u===0&&f===0)return new l(0,Math.PI/2);var p=u*u+f*f;return p!==0?new l(u/p,-f/p).atanh():new l(u!==0?u/0:0,f!==0?-f/0:0).atanh()},acsch:function(){var u=this.re,f=this.im;if(f===0)return new l(u!==0?Math.log(u+Math.sqrt(u*u+1)):1/0,0);var p=u*u+f*f;return p!==0?new l(u/p,-f/p).asinh():new l(u!==0?u/0:0,f!==0?-f/0:0).asinh()},asech:function(){var u=this.re,f=this.im;if(this.isZero())return l.INFINITY;var p=u*u+f*f;return p!==0?new l(u/p,-f/p).acosh():new l(u!==0?u/0:0,f!==0?-f/0:0).acosh()},inverse:function(){if(this.isZero())return l.INFINITY;if(this.isInfinite())return l.ZERO;var u=this.re,f=this.im,p=u*u+f*f;return new l(u/p,-f/p)},conjugate:function(){return new l(this.re,-this.im)},neg:function(){return new l(-this.re,-this.im)},ceil:function(u){return u=Math.pow(10,u||0),new l(Math.ceil(this.re*u)/u,Math.ceil(this.im*u)/u)},floor:function(u){return u=Math.pow(10,u||0),new l(Math.floor(this.re*u)/u,Math.floor(this.im*u)/u)},round:function(u){return u=Math.pow(10,u||0),new l(Math.round(this.re*u)/u,Math.round(this.im*u)/u)},equals:function(u,f){var p=new l(u,f);return Math.abs(p.re-this.re)<=l.EPSILON&&Math.abs(p.im-this.im)<=l.EPSILON},clone:function(){return new l(this.re,this.im)},toString:function(){var u=this.re,f=this.im,p="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(u)<l.EPSILON&&(u=0),Math.abs(f)<l.EPSILON&&(f=0),f===0?p+u:(u!==0?(p+=u,p+=" ",f<0?(f=-f,p+="-"):p+="+",p+=" "):f<0&&(f=-f,p+="-"),f!==1&&(p+=f),p+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},l.ZERO=new l(0,0),l.ONE=new l(1,0),l.I=new l(0,1),l.PI=new l(Math.PI,0),l.E=new l(Math.E,0),l.INFINITY=new l(1/0,1/0),l.NAN=new l(NaN,NaN),l.EPSILON=1e-15,Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Complex=l,i.exports=l})()})(Sy);const $t=zh(Qa);var Ey="Complex",Ay=[],Cy=fr(Ey,Ay,()=>(Object.defineProperty($t,"name",{value:"Complex"}),$t.prototype.constructor=$t,$t.prototype.type="Complex",$t.prototype.isComplex=!0,$t.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},$t.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},$t.prototype.format=function(i){var e="",t=this.im,n=this.re,r=Ga(this.re,i),s=Ga(this.im,i),o=xn(i)?i:i?i.precision:null;if(o!==null){var a=Math.pow(10,-o);Math.abs(n/t)<a&&(n=0),Math.abs(t/n)<a&&(t=0)}return t===0?e=r:n===0?t===1?e="i":t===-1?e="-i":e=s+"i":t<0?t===-1?e=r+" - i":e=r+" - "+s.substring(1)+"i":t===1?e=r+" + i":e=r+" + "+s+"i",e},$t.fromPolar=function(i){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return $t(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],n=arguments[1];if(xn(t)){if(mh(n)&&n.hasBase("ANGLE")&&(n=n.toNumber("rad")),xn(n))return new $t({r:t,phi:n});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},$t.prototype.valueOf=$t.prototype.toString,$t.fromJSON=function(i){return new $t(i)},$t.compare=function(i,e){return i.re>e.re?1:i.re<e.re?-1:i.im>e.im?1:i.im<e.im?-1:0},$t),{isClass:!0}),$a={},Ty={get exports(){return $a},set exports(i){$a=i}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(i,e){(function(t){var n=2e3,r={s:1,n:0,d:1};function s(g,_){if(isNaN(g=parseInt(g,10)))throw p.InvalidParameter;return g*_}function o(g,_){if(_===0)throw p.DivisionByZero;var m=Object.create(p.prototype);m.s=g<0?-1:1,g=g<0?-g:g;var d=f(g,_);return m.n=g/d,m.d=_/d,m}function a(g){for(var _={},m=g,d=2,y=4;y<=m;){for(;m%d===0;)m/=d,_[d]=(_[d]||0)+1;y+=1+2*d++}return m!==g?m>1&&(_[m]=(_[m]||0)+1):_[g]=(_[g]||0)+1,_}var c=function(g,_){var m=0,d=1,y=1,v=0,b=0,M=0,S=1,P=1,E=0,w=1,D=1,N=1,W=1e7,B;if(g!=null)if(_!==void 0){if(m=g,d=_,y=m*d,m%1!==0||d%1!==0)throw p.NonIntegerParameter}else switch(typeof g){case"object":{if("d"in g&&"n"in g)m=g.n,d=g.d,"s"in g&&(m*=g.s);else if(0 in g)m=g[0],1 in g&&(d=g[1]);else throw p.InvalidParameter;y=m*d;break}case"number":{if(g<0&&(y=g,g=-g),g%1===0)m=g;else if(g>0){for(g>=1&&(P=Math.pow(10,Math.floor(1+Math.log(g)/Math.LN10)),g/=P);w<=W&&N<=W;)if(B=(E+D)/(w+N),g===B){w+N<=W?(m=E+D,d=w+N):N>w?(m=D,d=N):(m=E,d=w);break}else g>B?(E+=D,w+=N):(D+=E,N+=w),w>W?(m=D,d=N):(m=E,d=w);m*=P}else(isNaN(g)||isNaN(_))&&(d=m=NaN);break}case"string":{if(w=g.match(/\d+|./g),w===null)throw p.InvalidParameter;if(w[E]==="-"?(y=-1,E++):w[E]==="+"&&E++,w.length===E+1?b=s(w[E++],y):w[E+1]==="."||w[E]==="."?(w[E]!=="."&&(v=s(w[E++],y)),E++,(E+1===w.length||w[E+1]==="("&&w[E+3]===")"||w[E+1]==="'"&&w[E+3]==="'")&&(b=s(w[E],y),S=Math.pow(10,w[E].length),E++),(w[E]==="("&&w[E+2]===")"||w[E]==="'"&&w[E+2]==="'")&&(M=s(w[E+1],y),P=Math.pow(10,w[E+1].length)-1,E+=3)):w[E+1]==="/"||w[E+1]===":"?(b=s(w[E],y),S=s(w[E+2],1),E+=3):w[E+3]==="/"&&w[E+1]===" "&&(v=s(w[E],y),b=s(w[E+2],y),S=s(w[E+4],1),E+=5),w.length<=E){d=S*P,y=m=M+d*v+P*b;break}}default:throw p.InvalidParameter}if(d===0)throw p.DivisionByZero;r.s=y<0?-1:1,r.n=Math.abs(m),r.d=Math.abs(d)};function h(g,_,m){for(var d=1;_>0;g=g*g%m,_>>=1)_&1&&(d=d*g%m);return d}function l(g,_){for(;_%2===0;_/=2);for(;_%5===0;_/=5);if(_===1)return 0;for(var m=10%_,d=1;m!==1;d++)if(m=m*10%_,d>n)return 0;return d}function u(g,_,m){for(var d=1,y=h(10,m,_),v=0;v<300;v++){if(d===y)return v;d=d*10%_,y=y*10%_}return 0}function f(g,_){if(!g)return _;if(!_)return g;for(;;){if(g%=_,!g)return _;if(_%=g,!_)return g}}function p(g,_){if(c(g,_),this instanceof p)g=f(r.d,r.n),this.s=r.s,this.n=r.n/g,this.d=r.d/g;else return o(r.s*r.n,r.d)}p.DivisionByZero=new Error("Division by Zero"),p.InvalidParameter=new Error("Invalid argument"),p.NonIntegerParameter=new Error("Parameters must be integer"),p.prototype={s:1,n:0,d:1,abs:function(){return o(this.n,this.d)},neg:function(){return o(-this.s*this.n,this.d)},add:function(g,_){return c(g,_),o(this.s*this.n*r.d+r.s*this.d*r.n,this.d*r.d)},sub:function(g,_){return c(g,_),o(this.s*this.n*r.d-r.s*this.d*r.n,this.d*r.d)},mul:function(g,_){return c(g,_),o(this.s*r.s*this.n*r.n,this.d*r.d)},div:function(g,_){return c(g,_),o(this.s*r.s*this.n*r.d,this.d*r.n)},clone:function(){return o(this.s*this.n,this.d)},mod:function(g,_){if(isNaN(this.n)||isNaN(this.d))return new p(NaN);if(g===void 0)return o(this.s*this.n%this.d,1);if(c(g,_),r.n===0&&this.d===0)throw p.DivisionByZero;return o(this.s*(r.d*this.n)%(r.n*this.d),r.d*this.d)},gcd:function(g,_){return c(g,_),o(f(r.n,this.n)*f(r.d,this.d),r.d*this.d)},lcm:function(g,_){return c(g,_),r.n===0&&this.n===0?o(0,1):o(r.n*this.n,f(r.n,this.n)*f(r.d,this.d))},ceil:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.ceil(g*this.s*this.n/this.d),g)},floor:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.floor(g*this.s*this.n/this.d),g)},round:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.round(g*this.s*this.n/this.d),g)},inverse:function(){return o(this.s*this.d,this.n)},pow:function(g,_){if(c(g,_),r.d===1)return r.s<0?o(Math.pow(this.s*this.d,r.n),Math.pow(this.n,r.n)):o(Math.pow(this.s*this.n,r.n),Math.pow(this.d,r.n));if(this.s<0)return null;var m=a(this.n),d=a(this.d),y=1,v=1;for(var b in m)if(b!=="1"){if(b==="0"){y=0;break}if(m[b]*=r.n,m[b]%r.d===0)m[b]/=r.d;else return null;y*=Math.pow(b,m[b])}for(var b in d)if(b!=="1"){if(d[b]*=r.n,d[b]%r.d===0)d[b]/=r.d;else return null;v*=Math.pow(b,d[b])}return r.s<0?o(v,y):o(y,v)},equals:function(g,_){return c(g,_),this.s*this.n*r.d===r.s*r.n*this.d},compare:function(g,_){c(g,_);var m=this.s*this.n*r.d-r.s*r.n*this.d;return(0<m)-(m<0)},simplify:function(g){if(isNaN(this.n)||isNaN(this.d))return this;g=g||.001;for(var _=this.abs(),m=_.toContinued(),d=1;d<m.length;d++){for(var y=o(m[d-1],1),v=d-2;v>=0;v--)y=y.inverse().add(m[v]);if(y.sub(_).abs().valueOf()<g)return y.mul(this.s)}return this},divisible:function(g,_){return c(g,_),!(!(r.n*this.d)||this.n*r.d%(r.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(g){var _,m="",d=this.n,y=this.d;return this.s<0&&(m+="-"),y===1?m+=d:(g&&(_=Math.floor(d/y))>0&&(m+=_,m+=" ",d%=y),m+=d,m+="/",m+=y),m},toLatex:function(g){var _,m="",d=this.n,y=this.d;return this.s<0&&(m+="-"),y===1?m+=d:(g&&(_=Math.floor(d/y))>0&&(m+=_,d%=y),m+="\\frac{",m+=d,m+="}{",m+=y,m+="}"),m},toContinued:function(){var g,_=this.n,m=this.d,d=[];if(isNaN(_)||isNaN(m))return d;do d.push(Math.floor(_/m)),g=_%m,_=m,m=g;while(_!==1);return d},toString:function(g){var _=this.n,m=this.d;if(isNaN(_)||isNaN(m))return"NaN";g=g||15;var d=l(_,m),y=u(_,m,d),v=this.s<0?"-":"";if(v+=_/m|0,_%=m,_*=10,_&&(v+="."),d){for(var b=y;b--;)v+=_/m|0,_%=m,_*=10;v+="(";for(var b=d;b--;)v+=_/m|0,_%=m,_*=10;v+=")"}else for(var b=g;_&&b--;)v+=_/m|0,_%=m,_*=10;return v}},Object.defineProperty(p,"__esModule",{value:!0}),p.default=p,p.Fraction=p,i.exports=p})()})(Ty);const Ai=zh($a);var Py="Fraction",Fy=[],Ly=fr(Py,Fy,()=>(Object.defineProperty(Ai,"name",{value:"Fraction"}),Ai.prototype.constructor=Ai,Ai.prototype.type="Fraction",Ai.prototype.isFraction=!0,Ai.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},Ai.fromJSON=function(i){return new Ai(i)},Ai),{isClass:!0}),Ry="Matrix",Iy=[],Ny=fr(Ry,Iy,()=>{function i(){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator")}return i.prototype.type="Matrix",i.prototype.isMatrix=!0,i.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},i.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},i.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},i.prototype.subset=function(e,t,n){throw new Error("Cannot invoke subset on a Matrix interface")},i.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},i.prototype.set=function(e,t,n){throw new Error("Cannot invoke set on a Matrix interface")},i.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},i.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},i.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},i.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},i.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},i.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},i.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},i.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},i.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},i.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},i.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},i},{isClass:!0});function By(i){return Object.keys(i.signatures||{}).reduce(function(e,t){var n=(t.match(/,/g)||[]).length+1;return Math.max(e,n)},-1)}var Uy="DenseMatrix",Oy=["Matrix"],zy=fr(Uy,Oy,i=>{var{Matrix:e}=i;function t(l,u){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(u&&!go(u))throw new Error("Invalid datatype: "+u);if(ds(l))l.type==="DenseMatrix"?(this._data=nr(l._data),this._size=nr(l._size),this._datatype=u||l._datatype):(this._data=l.toArray(),this._size=l.size(),this._datatype=u||l._datatype);else if(l&&Fn(l.data)&&Fn(l.size))this._data=l.data,this._size=l.size,Bc(this._data,this._size),this._datatype=u||l.datatype;else if(Fn(l))this._data=h(l),this._size=Va(this._data),Bc(this._data,this._size),this._datatype=u;else{if(l)throw new TypeError("Unsupported type of data ("+ga(l)+")");this._data=[],this._size=[0],this._datatype=u}}t.prototype=new e,t.prototype.createDenseMatrix=function(l,u){return new t(l,u)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return ja(this._data,ga)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(l,u){return new t(l,u)},t.prototype.subset=function(l,u,f){switch(arguments.length){case 1:return n(this,l);case 2:case 3:return s(this,l,u,f);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(l){if(!Fn(l))throw new TypeError("Array expected");if(l.length!==this._size.length)throw new Kt(l.length,this._size.length);for(var u=0;u<l.length;u++)On(l[u],this._size[u]);for(var f=this._data,p=0,g=l.length;p<g;p++){var _=l[p];On(_,f.length),f=f[_]}return f},t.prototype.set=function(l,u,f){if(!Fn(l))throw new TypeError("Array expected");if(l.length<this._size.length)throw new Kt(l.length,this._size.length,"<");var p,g,_,m=l.map(function(y){return y+1});c(this,m,f);var d=this._data;for(p=0,g=l.length-1;p<g;p++)_=l[p],On(_,d.length),d=d[_];return _=l[l.length-1],On(_,d.length),d[_]=u,this};function n(l,u){if(!gh(u))throw new TypeError("Invalid index");var f=u.isScalar();if(f)return l.get(u.min());var p=u.size();if(p.length!==l._size.length)throw new Kt(p.length,l._size.length);for(var g=u.min(),_=u.max(),m=0,d=l._size.length;m<d;m++)On(g[m],l._size[m]),On(_[m],l._size[m]);return new t(r(l._data,u,p.length,0),l._datatype)}function r(l,u,f,p){var g=p===f-1,_=u.dimension(p);return g?_.map(function(m){return On(m,l.length),l[m]}).valueOf():_.map(function(m){On(m,l.length);var d=l[m];return r(d,u,f,p+1)}).valueOf()}function s(l,u,f,p){if(!u||u.isIndex!==!0)throw new TypeError("Invalid index");var g=u.size(),_=u.isScalar(),m;if(ds(f)?(m=f.size(),f=f.valueOf()):m=Va(f),_){if(m.length!==0)throw new TypeError("Scalar expected");l.set(u.min(),f,p)}else{if(g.length<l._size.length)throw new Kt(g.length,l._size.length,"<");if(m.length<g.length){for(var d=0,y=0;g[d]===1&&m[d]===1;)d++;for(;g[d]===1;)y++,d++;f=dx(f,g.length,y,m)}if(!Ha(g,m))throw new Kt(g,m,">");var v=u.max().map(function(S){return S+1});c(l,v,p);var b=g.length,M=0;o(l._data,u,f,b,M)}return l}function o(l,u,f,p,g){var _=g===p-1,m=u.dimension(g);_?m.forEach(function(d,y){On(d),l[d]=f[y[0]]}):m.forEach(function(d,y){On(d),o(l[d],u,f[y[0]],p,g+1)})}t.prototype.resize=function(l,u,f){if(!ka(l))throw new TypeError("Array or Matrix expected");var p=l.valueOf().map(_=>Array.isArray(_)&&_.length===1?_[0]:_),g=f?this.clone():this;return a(g,p,u)};function a(l,u,f){if(u.length===0){for(var p=l._data;Fn(p);)p=p[0];return p}return l._size=u.slice(0),l._data=Uc(l._data,l._size,f),l}t.prototype.reshape=function(l,u){var f=u?this.clone():this;f._data=fx(f._data,l);var p=f._size.reduce((g,_)=>g*_);return f._size=wh(l,p),f};function c(l,u,f){for(var p=l._size.slice(0),g=!1;p.length<u.length;)p.push(0),g=!0;for(var _=0,m=u.length;_<m;_++)u[_]>p[_]&&(p[_]=u[_],g=!0);g&&a(l,p,f)}t.prototype.clone=function(){var l=new t({data:nr(this._data),size:nr(this._size),datatype:this._datatype});return l},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(l){var u=this,f=By(l),p=function m(d,y){return Fn(d)?d.map(function(v,b){return m(v,y.concat(b))}):f===1?l(d):f===2?l(d,y):l(d,y,u)},g=p(this._data,[]),_=this._datatype!==void 0?ja(g,ga):void 0;return new t(g,_)},t.prototype.forEach=function(l){var u=this,f=function p(g,_){Fn(g)?g.forEach(function(m,d){p(m,_.concat(d))}):l(g,_,u)};f(this._data,[])},t.prototype[Symbol.iterator]=function*(){var l=function*u(f,p){if(Fn(f))for(var g=0;g<f.length;g++)yield*u(f[g],p.concat(g));else yield{value:f,index:p}};yield*l(this._data,[])},t.prototype.rows=function(){var l=[],u=this.size();if(u.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var f=this._data;for(var p of f)l.push(new t([p],this._datatype));return l},t.prototype.columns=function(){var l=this,u=[],f=this.size();if(f.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var p=this._data,g=function(d){var y=p.map(v=>[v[d]]);u.push(new t(y,l._datatype))},_=0;_<f[1];_++)g(_);return u},t.prototype.toArray=function(){return nr(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(l){return Ms(this._data,l)},t.prototype.toString=function(){return Ms(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(l){if(l){if(zi(l)&&(l=l.toNumber()),!xn(l)||!kn(l))throw new TypeError("The parameter k must be an integer number")}else l=0;for(var u=l>0?l:0,f=l<0?-l:0,p=this._size[0],g=this._size[1],_=Math.min(p-f,g-u),m=[],d=0;d<_;d++)m[d]=this._data[d+f][d+u];return new t({data:m,size:[_],datatype:this._datatype})},t.diagonal=function(l,u,f,p){if(!Fn(l))throw new TypeError("Array expected, size parameter");if(l.length!==2)throw new Error("Only two dimensions matrix are supported");if(l=l.map(function(P){if(zi(P)&&(P=P.toNumber()),!xn(P)||!kn(P)||P<1)throw new Error("Size values must be positive integers");return P}),f){if(zi(f)&&(f=f.toNumber()),!xn(f)||!kn(f))throw new TypeError("The parameter k must be an integer number")}else f=0;var g=f>0?f:0,_=f<0?-f:0,m=l[0],d=l[1],y=Math.min(m-_,d-g),v;if(Fn(u)){if(u.length!==y)throw new Error("Invalid value array length");v=function(E){return u[E]}}else if(ds(u)){var b=u.size();if(b.length!==1||b[0]!==y)throw new Error("Invalid matrix length");v=function(E){return u.get([E])}}else v=function(){return u};p||(p=zi(v(0))?v(0).mul(0):0);var M=[];if(l.length>0){M=Uc(M,l,p);for(var S=0;S<y;S++)M[S+_][S+g]=v(S)}return new t({data:M,size:[m,d]})},t.fromJSON=function(l){return new t(l)},t.prototype.swapRows=function(l,u){if(!xn(l)||!kn(l)||!xn(u)||!kn(u))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return On(l,this._size[0]),On(u,this._size[0]),t._swapRows(l,u,this._data),this},t._swapRows=function(l,u,f){var p=f[l];f[l]=f[u],f[u]=p};function h(l){for(var u=0,f=l.length;u<f;u++){var p=l[u];Fn(p)?l[u]=h(p):p&&p.isMatrix===!0&&(l[u]=h(p.valueOf()))}return l}return t},{isClass:!0});function Ja(i,e){if(e<i)return 1;if(e===i)return e;var t=e+i>>1;return Ja(i,t)*Ja(t+1,e)}function kh(i,e){if(!kn(i)||i<0)throw new TypeError("Positive integer value expected in function combinations");if(!kn(e)||e<0)throw new TypeError("Positive integer value expected in function combinations");if(e>i)throw new TypeError("k must be less than or equal to n");for(var t=i-e,n=1,r=e<t?t+1:e+1,s=2,o=e<t?e:t,a=r;a<=i;++a)for(n*=a;s<=o&&n%s===0;)n/=s,++s;return s<=o&&(n/=Ja(s,o)),n}kh.signature="number, number";var Hc="combinations",ky=["typed"],Hy=fr(Hc,ky,i=>{var{typed:e}=i;return e(Hc,{"number, number":kh,"BigNumber, BigNumber":function(n,r){var s=n.constructor,o,a,c=n.minus(r),h=new s(1);if(!Gc(n)||!Gc(r))throw new TypeError("Positive integer value expected in function combinations");if(r.gt(n))throw new TypeError("k must be less than n in function combinations");if(o=h,r.lt(c))for(a=h;a.lte(c);a=a.plus(h))o=o.times(r.plus(a)).dividedBy(a);else for(a=h;a.lte(r);a=a.plus(h))o=o.times(c.plus(a)).dividedBy(a);return o}})});function Gc(i){return i.isInteger()&&i.gte(0)}var Gy=Dy({config:_h}),Vy=Cy({}),Wy=Ly({}),jy=Ny({}),qy=zy({Matrix:jy}),Xy=Ax({BigNumber:Gy,Complex:Vy,DenseMatrix:qy,Fraction:Wy}),Yy=Hy({typed:Xy});const Mo=(i,e)=>t=>Yy(e,i)*Math.pow(t,i)*Math.pow(1-t,e-i);class Zy{constructor(e=[new I(0,0,0),new I(1,0,0),new I(2,0,0),new I(3,0,0)]){ui(this,"points",[]);ui(this,"order",this.points.length);ui(this,"resolution",100);ui(this,"controlPolygon",new hn);for(const t of e)this.addPoint(t)}evaluate(e){let t=new I(0,0,0),n=new I(0,0,0);for(const{vector:r,coefficient:s}of this.points)n.x=r.x,n.y=r.y,n.z=r.z,t.add(n.multiplyScalar(s(e)));return t}generate(){let e=[];for(let t=0;t<this.resolution;t++){let n=t/this.resolution;e.push(this.evaluate(n))}return e}addPoint(e){this.points.push({vector:e,coefficient:Mo(this.order+1,this.order+1),enabled:!1}),this.recomputeCoeffients()}removePoint(){this.points.pop(),this.recomputeCoeffients()}recomputeCoeffients(){this.order=this.points.length-1,this.points.forEach((e,t)=>{e.coefficient=Mo(t,this.order)})}vectors(){return this.points.map(e=>e.vector)}computeControlPolygon(){this.controlPolygon.geometry.setFromPoints(this.vectors()),this.controlPolygon.computeLineDistances()}}class Ky{constructor(e=[[new I(0,0,0),new I(1,0,0),new I(2,0,0),new I(3,0,0)],[new I(0,0,1),new I(1,0,1),new I(2,0,1),new I(3,0,1)],[new I(0,0,2),new I(1,0,2),new I(2,0,2),new I(3,0,2)],[new I(0,0,3),new I(1,0,3),new I(2,0,3),new I(3,0,3)]]){ui(this,"points",[]);ui(this,"rowOrder",0);ui(this,"colOrder",0);ui(this,"resolution",20);ui(this,"controlPolygon",[]);for(const t of e)this.addRow(t);for(let t=0;t<this.rowOrder+this.colOrder+2;t++)this.controlPolygon.push(new hn)}evaluate(e,t){let n=new I(0,0,0),r=new I(0,0,0);for(let s=0;s<this.points.length;s++)for(let o=0;o<this.points[s].length;o++)r.x=this.points[s][o].vector.x,r.y=this.points[s][o].vector.y,r.z=this.points[s][o].vector.z,n.add(r.multiplyScalar(this.points[s][o].coefficient(e,t)));return n}generate(){const e=this.resolution,t=this.resolution,n=[];for(let a=0;a<e+1;a++){let c=[];for(let h=0;h<t+1;h++)c.push(this.evaluate(a/e,h/t));n.push(c)}const r=new Float32Array(e*t*3*6),s=new Uint32Array(e*t*6);for(let a=0,c=0,h=0;a<t;a++)for(let l=0;l<e;l++){const u=n[l][a],f=n[l+1][a],p=n[l+1][a+1],g=n[l][a+1];r.set([u.x,u.y,u.z],c),r.set([f.x,f.y,f.z],c+3),r.set([g.x,g.y,g.z],c+6),r.set([f.x,f.y,f.z],c+9),r.set([p.x,p.y,p.z],c+12),r.set([g.x,g.y,g.z],c+15),s.set([c/3,c/3+1,c/3+2],h),s.set([c/3+3,c/3+4,c/3+5],h+3),c+=18,h+=6}const o=new nn;return o.setAttribute("position",new Vn(r,3)),o.setIndex(new Vn(s,1)),o.computeVertexNormals(),o}addRow(e){const t=[];for(const n of e)t.push({vector:n,coefficient:(r,s)=>r+s,enabled:!1});this.points.push(t),this.recomputeCoeffients()}removeRow(){this.points.pop(),this.recomputeCoeffients()}recomputeCoeffients(){this.rowOrder=this.points.length-1,this.colOrder=this.points[0].length-1;for(let e=0;e<this.points.length;e++)for(let t=0;t<this.points[e].length;t++)this.points[e][t].coefficient=(n,r)=>Mo(e,this.rowOrder)(n)*Mo(t,this.colOrder)(r)}vectors(){return this.points.map(e=>e.map(t=>t.vector))}computeControlPolygon(){const e=this.vectors(),t=this.rowOrder+this.colOrder+2;if(this.controlPolygon.length>t)for(;this.controlPolygon.length>t;)this.controlPolygon.pop();else this.controlPolygon.length<t&&this.controlPolygon.push(new hn);for(let n=0;n<this.rowOrder+1;n++)this.controlPolygon[n].geometry.setFromPoints(e[n]),this.controlPolygon[n].computeLineDistances();for(let n=0;n<this.colOrder+1;n++)this.controlPolygon[this.rowOrder+1+n].geometry.setFromPoints(e.map(r=>r[n])),this.controlPolygon[this.rowOrder+1+n].computeLineDistances()}}const Qy={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Io{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $y=new au(-1,1,1,-1,0,1),mu=new nn;mu.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3));mu.setAttribute("uv",new Et([0,2,0,0,2,0],2));class Jy{constructor(e){this._mesh=new De(mu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class eM extends Io{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jf.clone(e.uniforms),this.material=new Pi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jy(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vc extends Io{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class tM extends Io{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nM{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ke);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Wi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eM(Qy),this.clock=new ih}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(o instanceof Vc?n=!0:o instanceof tM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hh extends Io{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const iM=(i,e,t)=>{i.renderer=new $f({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new nM(i.renderer),i.composer.addPass(new Hh(i.scene,eu(i.camera)))},Wc=(i,e,t)=>{i.renderer&&(e?i.renderer.outputEncoding=Vi:i.renderer.outputEncoding=Ct,t?i.renderer.toneMapping=mi:i.renderer.toneMapping=Lf)},jc=(i,e,t)=>{var n,r,s,o,a,c,h,l;!i.renderer||!i.composer||((r=(n=i.renderer).setSize)==null||r.call(n,e.width,e.height),(o=(s=i.renderer).setPixelRatio)==null||o.call(s,t),(c=(a=i.composer).setSize)==null||c.call(a,e.width,e.height),(l=(h=i.composer).setPixelRatio)==null||l.call(h,t))},qc=(i,e,t)=>{i.renderer&&(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},wn=i=>i.userData,rM=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Gh=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),sM=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,oM=(i,e,t)=>{let n;const r=i.camera.subscribe(h=>n=h);Ft(r);let s;const o=i.pointer.subscribe(h=>s=h);Ft(o);let a;const c=h=>{var f,p;h.preventDefault();const l=h.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,rM(i,h);const u=aM(e,s,n);if(l==="pointerdown"&&(a=u?{object:u.object,instanceId:u.instanceId}:null),l==="click"){if(!uM(u,a)){a=null;return}a=null}u&&((p=(f=wn(u.object)).eventDispatcher)==null||p.call(f,l,{...u,event:h}))};return{onClick:c,onContextMenu:c,onPointerUp:c,onPointerDown:c,onPointerMove:c}};function aM(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Gh(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function uM(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const lM=(i,e)=>{let t;const n=i.pointerOverCanvas.subscribe(h=>t=h);Ft(n);let r;const s=i.camera.subscribe(h=>r=h);Ft(s);let o;const a=i.pointer.subscribe(h=>o=h);return Ft(a),{raycast:()=>{var u,f,p,g,_,m,d,y;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const h=t?Gh(e,o,r,Array.from(e.raycastableObjects)):[],l=h.length&&e.interactiveObjects.has(h[0].object)?h[0]:null;l?e.lastIntersection?e.lastIntersection&&sM(e.lastIntersection,l)&&((m=(_=wn(e.lastIntersection.object)).eventDispatcher)==null||m.call(_,"pointerleave",e.lastIntersection),(y=(d=wn(l.object)).eventDispatcher)==null||y.call(d,"pointerenter",l)):(g=(p=wn(l.object)).eventDispatcher)==null||g.call(p,"pointerenter",l):e.lastIntersection&&((f=(u=wn(e.lastIntersection.object)).eventDispatcher)==null||f.call(u,"pointerleave",e.lastIntersection)),e.lastIntersection=l}}},No=typeof window<"u",cM=i=>{if(!No)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),Ft(()=>{e&&cancelAnimationFrame(e)})},fM=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>(r.order??0)>(s.order??0)?1:-1).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},hM=i=>{i.debugFrameloop&&(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by ↴":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},dM=(i,e,t,n)=>{let r=eu(i.camera);const s=i.camera.subscribe(a=>r=a);Ft(s);const{raycast:o}=lM(i,e);cM(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!r||!i.composer||!i.renderer||(fM(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,r),hM(t),t.frameInvalidated=!1,t.advance=!1))})},pM=()=>{const i=new Ln(75,0,.1,1e3);return wn(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},mM=i=>{const e=i.size.subscribe(t=>{wn(eu(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});Ft(e)},gM=(i,e,t,n,r,s,o)=>{const a={audioListeners:new Map,addAudioListener:(d,y)=>{if(y=y??"default",a.audioListeners.has(y)){console.warn(`An AudioListener with the id "${y}" has already been added, aborting.`);return}a.audioListeners.set(y,d)},removeAudioListener:d=>{if(d=d??"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}a.audioListeners.delete(d)},getAudioListener:d=>{if(d=d??"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return a.audioListeners.get(d)}},c={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},h={size:rd([n,r],([d,y])=>d||y),pointer:en(new Ke),pointerOverCanvas:en(!1),clock:new ih,camera:en(pM()),scene:new nv,renderer:void 0,composer:void 0,invalidate:d=>{c.frameInvalidated=!0,c.debugFrameloop&&d&&(c.invalidations[d]=c.invalidations[d]?c.invalidations[d]+1:1)},advance:()=>{c.advance=!0}},l={flat:en(e),linear:en(i),dpr:en(t),setCamera:d=>{h.camera.set(d),h.composer&&(h.composer.passes.forEach(y=>{y instanceof Hh&&(y.camera=d)}),h.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new rh,lastIntersection:null,addRaycastableObject:d=>{l.raycastableObjects.add(d)},removeRaycastableObject:d=>{l.raycastableObjects.delete(d)},addInteractiveObject:d=>{l.interactiveObjects.add(d)},removeInteractiveObject:d=>{l.interactiveObjects.delete(d)},addPass:d=>{h.composer&&(h.composer.addPass(d),h.invalidate("Canvas: adding pass"))},removePass:d=>{h.composer&&(h.composer.removePass(d),h.invalidate("Canvas: removing pass"))}},u={dispose:async(d=!1)=>{await tu(),!(!u.shouldDispose&&!d)&&(u.disposableObjects.forEach((y,v)=>{var b;(y===0||d)&&((b=v==null?void 0:v.dispose)==null||b.call(v),u.disposableObjects.delete(v))}),u.shouldDispose=!1)},collectDisposableObjects:(d,y)=>{const v=y??[];return d&&(d!=null&&d.dispose&&typeof d.dispose=="function"&&d.type!=="Scene"&&v.push(d),Object.entries(d).forEach(([b,M])=>{if(b==="parent"||b==="children"||typeof M!="object")return;const S=M;S!=null&&S.dispose&&u.collectDisposableObjects(S,v)})),v},addDisposableObjects:d=>{d.forEach(y=>{const v=u.disposableObjects.get(y);v?u.disposableObjects.set(y,v+1):u.disposableObjects.set(y,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(y=>{const v=u.disposableObjects.get(y);v&&v>0&&u.disposableObjects.set(y,v-1)}),u.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Qn("threlte",h),Qn("threlte-root",l),Qn("threlte-render-context",c),Qn("threlte-audio-context",a),Qn("threlte-disposal-context",u),{ctx:h,rootCtx:l,renderCtx:c,audioCtx:a,disposalCtx:u,getCtx:()=>h,getRootCtx:()=>l,getRenderCtx:()=>c,getAudioCtx:()=>a,getDisposalCtx:()=>u}};function gu(i,e){const t=en(i);let n=i;const r=t.subscribe(a=>n=a);return Ft(r),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const h=n;t.set(c),e==null||e(c,h)}}}const Fi=()=>_i("threlte");function _M(i){let e;const t=i[8].default,n=Zr(t,i,i[7],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&Kr(n,t,r,r[7],e?$r(t,r[7],s,null):Qr(r[7]),null)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}const vM=()=>({onChildMount:_i("threlte-hierarchical-object-on-mount"),onChildDestroy:_i("threlte-hierarchical-object-on-destroy")}),_u=()=>_i("threlte-hierarchical-parent-context");function xM(i,e,t){var d;let n,{$$slots:r={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:c=void 0}=e;const h=y=>{a.push(y),t(1,a),c==null||c(y)};let{onChildDestroy:l=void 0}=e;const u=y=>{const v=a.findIndex(b=>b.uuid===y.uuid);v!==-1&&a.splice(v,1),t(1,a),l==null||l(y)},{invalidate:f}=Fi(),p=_u();qt(i,p,y=>t(6,n=y));let{parent:g=n}=e;const _=vM();o&&((d=_.onChildMount)==null||d.call(_,o),f("HierarchicalObject: object added"));const m=gu(o,(y,v)=>{var b,M;v&&((b=_.onChildDestroy)==null||b.call(_,v),f("HierarchicalObject: object added")),y&&((M=_.onChildMount)==null||M.call(_,y),f("HierarchicalObject: object removed"))});return Ft(()=>{var y;o&&((y=_.onChildDestroy)==null||y.call(_,o),f("HierarchicalObject: object removed"))}),Qn("threlte-hierarchical-object-on-mount",h),Qn("threlte-hierarchical-object-on-destroy",u),Qn("threlte-hierarchical-parent-context",m),i.$$set=y=>{"object"in y&&t(3,o=y.object),"children"in y&&t(1,a=y.children),"onChildMount"in y&&t(4,c=y.onChildMount),"onChildDestroy"in y&&t(5,l=y.onChildDestroy),"parent"in y&&t(2,g=y.parent),"$$scope"in y&&t(7,s=y.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,g=n),i.$$.dirty&8&&m.set(o)},[p,a,g,o,c,l,n,s,r]}class yM extends rn{constructor(e){super(),sn(this,e,xM,_M,on,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function MM(i){let e;const t=i[1].default,n=Zr(t,i,i[4],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&Kr(n,t,r,r[4],e?$r(t,r[4],s,null):Qr(r[4]),null)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}function wM(i){let e,t;return e=new yM({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[MM]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function bM(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return i.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,r=c.$$scope)},[s,n,o,a,r]}class Vh extends rn{constructor(e){super(),sn(this,e,bM,wM,on,{object:0})}}const DM=()=>{const i=en({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);Ft(t);let n;const r=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:c}=n.parentElement;(a!==o.width||c!==o.height)&&i.set({width:a,height:c})},s=o=>{n=o,r(),window.addEventListener("resize",r)};return No?(Ft(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function Xc(i){let e,t;return e=new Vh({props:{object:i[0].scene,$$slots:{default:[SM]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function SM(i){let e;const t=i[29].default,n=Zr(t,i,i[33],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&Kr(n,t,r,r[33],e?$r(t,r[33],s,null):Qr(r[33]),null)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}function EM(i){let e,t,n,r,s=i[2]&&Xc(i);return{c(){e=Ee("canvas"),s&&s.c(),this.h()},l(o){e=Ae(o,"CANVAS",{class:!0});var a=Se(e);s&&s.l(a),a.forEach(le),this.h()},h(){pe(e,"class","svelte-o3oskp")},m(o,a){Xe(o,e,a),s&&s.m(e,null),i[30](e),t=!0,n||(r=[ed(i[3].call(null,e)),Ot(e,"click",i[9]),Ot(e,"contextmenu",i[10]),Ot(e,"pointerup",i[13]),Ot(e,"pointerdown",i[11]),Ot(e,"pointermove",i[12]),Ot(e,"pointerenter",i[31]),Ot(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&de(s,1)):(s=Xc(o),s.c(),de(s,1),s.m(e,null)):s&&(Hn(),ye(s,1,1,()=>{s=null}),Gn())},i(o){t||(de(s),t=!0)},o(o){ye(s),t=!1},d(o){o&&le(e),s&&s.d(),i[30](null),n=!1,bo(r)}}}const Yc=new Set;function AM(i,e,t){let n,r,s,o,{$$slots:a={},$$scope:c}=e,{dpr:h=No?window.devicePixelRatio:1}=e,{flat:l=!1}=e,{linear:u=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:_=Cf}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,y,v=!1;const b=en(m),{parentSize:M,parentSizeAction:S}=DM(),P=gM(u,l,h,b,M,p,f),{getCtx:E,renderCtx:w,disposalCtx:D}=P,{ctx:N,rootCtx:W,audioCtx:B}=P;mM(N),Yc.add(N.invalidate),Ft(()=>{Yc.delete(N.invalidate)});const{size:H,scene:G}=N;qt(i,H,V=>t(26,r=V));const{flat:K,linear:U,dpr:Q}=W;qt(i,K,V=>t(27,s=V)),qt(i,U,V=>t(28,o=V)),qt(i,Q,V=>t(25,n=V)),Qn("threlte-parent",en(G)),Ef(()=>{y&&(iM(N,y,d),Wc(N,o,s),jc(N,r,n),qc(N,g,_),t(2,v=!0))}),dM(N,W,w,D);const{onClick:J,onContextMenu:fe,onPointerDown:re,onPointerMove:ve,onPointerUp:ee}=oM(N,W,w);Ft(()=>{D.dispose(!0)});function ue(V){ri[V?"unshift":"push"](()=>{y=V,t(1,y)})}const _e=()=>E().pointerOverCanvas.set(!0),te=()=>E().pointerOverCanvas.set(!1);return i.$$set=V=>{"dpr"in V&&t(14,h=V.dpr),"flat"in V&&t(15,l=V.flat),"linear"in V&&t(16,u=V.linear),"frameloop"in V&&t(17,f=V.frameloop),"debugFrameloop"in V&&t(18,p=V.debugFrameloop),"shadows"in V&&t(19,g=V.shadows),"shadowMapType"in V&&t(20,_=V.shadowMapType),"size"in V&&t(21,m=V.size),"rendererParameters"in V&&t(22,d=V.rendererParameters),"$$scope"in V&&t(33,c=V.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&b.set(m),i.$$.dirty[0]&65536&&hs(U,o=u,o),i.$$.dirty[0]&32768&&hs(K,s=l,s),i.$$.dirty[0]&16384&&hs(Q,n=h,n),i.$$.dirty[0]&402653184&&Wc(E(),o,s),i.$$.dirty[0]&100663296&&jc(E(),r,n),i.$$.dirty[0]&1572864&&qc(E(),g,_)},[N,y,v,S,E,H,K,U,Q,J,fe,re,ve,ee,h,l,u,f,p,g,_,m,d,W,B,n,r,s,o,a,ue,_e,te,c]}class CM extends rn{constructor(e){super(),sn(this,e,AM,EM,on,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Wh=()=>_i("threlte-root"),TM=()=>_i("threlte-disposal-context");function PM(i){let e;const t=i[9].default,n=Zr(t,i,i[8],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&Kr(n,t,r,r[8],e?$r(t,r[8],s,null):Qr(r[8]),null)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}const Zc="threlte-disposable-object-context";function FM(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:h}=TM();let{object:l=void 0}=e,u=l,{dispose:f=void 0}=e;const p=_i(Zc);qt(i,p,m=>t(7,r=m));const g=en(f??r??!0);qt(i,g,m=>t(6,n=m)),Qn(Zc,g);let _=n?a(l):[];return c(_),Ft(()=>{h(_)}),i.$$set=m=>{"object"in m&&t(2,l=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&g.set(f??r??!0),i.$$.dirty&116&&l!==u&&(h(_),t(5,_=n?a(l):[]),c(_),t(4,u=l))},[p,g,l,f,u,_,n,r,o,s]}class vu extends rn{constructor(e){super(),sn(this,e,FM,PM,on,{object:2,dispose:3})}}function LM(i,e,t){let n,r,{object:s}=e;const o=gu(s);qt(i,o,h=>t(4,r=h));const a=_i("threlte-layers");qt(i,a,h=>t(3,n=h));const{invalidate:c}=Fi();return i.$$set=h=>{"object"in h&&t(2,s=h.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let h=0;h<32;h+=1){const l=h;n.includes(l)?r.layers.enable(h):r.layers.disable(h)}else n!==void 0&&r.layers.set(n);c("LayerableObject")}},[o,a,s,n,r]}class RM extends rn{constructor(e){super(),sn(this,e,LM,null,on,{object:2})}}const jh=(i,e)=>{if(!No)return{start:()=>{},stop:()=>{},started:sd(!1)};const t=_i("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=en(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},o=()=>{t.frameHandlers.add(n),r.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Ft(()=>{s()}),{start:o,stop:s,started:{subscribe:r.subscribe}}},IM=()=>{const i=en(!1);return(async()=>{await tu(),i.set(!0)})(),i};function NM(i,e,t){let n,r,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:c=void 0}=e,{lookAt:h=void 0}=e;const l=new I,u=bs(),{invalidate:f}=Fi(),p=IM();qt(i,p,v=>t(8,r=v));const g=async()=>{r||await tu(),u("transform")},_=async()=>{f("TransformableObject: transformed"),await g()};wn(s).onTransform=_;const{start:m,stop:d}=jh(async()=>{h&&!c&&h instanceof It&&(h.getWorldPosition(l),s.lookAt(l),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),y=gu(s);return qt(i,y,v=>t(7,n=v)),i.$$set=v=>{"object"in v&&t(2,s=v.object),"position"in v&&t(3,o=v.position),"scale"in v&&t(4,a=v.scale),"rotation"in v&&t(5,c=v.rotation),"lookAt"in v&&t(6,h=v.lookAt)},i.$$.update=()=>{i.$$.dirty&4&&y.set(s),i.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),_()),h&&!c&&(h instanceof It?m():(d(),n.lookAt(h.x??0,h.y??0,h.z??0),_())),h||d()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),_()),i.$$.dirty&160&&c&&(n.rotation.set(c.x??0,c.y??0,c.z??0,c.order??"XYZ"),_())},[p,y,s,o,a,c,h,n]}class BM extends rn{constructor(e){super(),sn(this,e,NM,null,on,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Kc=[],UM=(i,e)=>{const t=Kc.find(r=>r instanceof i);if(t)return t;const n=e();return Kc.push(n),n},Qc={type:"change"},Ma={type:"start"},$c={type:"end"};let OM=class extends lr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hr.ROTATE,MIDDLE:hr.DOLLY,RIGHT:hr.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ht),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ht),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qc),n.update(),s=r.NONE},this.update=function(){const T=new I,k=new Jt().setFromUnitVectors(e.up,new I(0,1,0)),L=k.clone().invert(),q=new I,ae=new Jt,he=2*Math.PI;return function(){const Me=n.object.position;T.copy(Me).sub(n.target),T.applyQuaternion(k),a.setFromVector3(T),n.autoRotate&&s===r.NONE&&w(P()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ce=n.minAzimuthAngle,Le=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Le)&&(Ce<-Math.PI?Ce+=he:Ce>Math.PI&&(Ce-=he),Le<-Math.PI?Le+=he:Le>Math.PI&&(Le-=he),Ce<=Le?a.theta=Math.max(Ce,Math.min(Le,a.theta)):a.theta=a.theta>(Ce+Le)/2?Math.max(Ce,a.theta):Math.min(Le,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),T.setFromSpherical(a),T.applyQuaternion(L),Me.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),h=1,u||q.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(Qc),q.copy(n.object.position),ae.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",x),n.domElement.removeEventListener("pointerdown",ze),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",_t),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ht),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Zl,c=new Zl;let h=1;const l=new I;let u=!1;const f=new Ke,p=new Ke,g=new Ke,_=new Ke,m=new Ke,d=new Ke,y=new Ke,v=new Ke,b=new Ke,M=[],S={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function w(T){c.theta-=T}function D(T){c.phi-=T}const N=function(){const T=new I;return function(L,q){T.setFromMatrixColumn(q,0),T.multiplyScalar(-L),l.add(T)}}(),W=function(){const T=new I;return function(L,q){n.screenSpacePanning===!0?T.setFromMatrixColumn(q,1):(T.setFromMatrixColumn(q,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(L),l.add(T)}}(),B=function(){const T=new I;return function(L,q){const ae=n.domElement;if(n.object.isPerspectiveCamera){const he=n.object.position;T.copy(he).sub(n.target);let Z=T.length();Z*=Math.tan(n.object.fov/2*Math.PI/180),N(2*L*Z/ae.clientHeight,n.object.matrix),W(2*q*Z/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(L*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),W(q*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(T){n.object.isPerspectiveCamera?h/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(T){n.object.isPerspectiveCamera?h*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(T){f.set(T.clientX,T.clientY)}function U(T){y.set(T.clientX,T.clientY)}function Q(T){_.set(T.clientX,T.clientY)}function J(T){p.set(T.clientX,T.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p),n.update()}function fe(T){v.set(T.clientX,T.clientY),b.subVectors(v,y),b.y>0?H(E()):b.y<0&&G(E()),y.copy(v),n.update()}function re(T){m.set(T.clientX,T.clientY),d.subVectors(m,_).multiplyScalar(n.panSpeed),B(d.x,d.y),_.copy(m),n.update()}function ve(T){T.deltaY<0?G(E()):T.deltaY>0&&H(E()),n.update()}function ee(T){let k=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),k=!0;break}k&&(T.preventDefault(),n.update())}function ue(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);f.set(T,k)}}function _e(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);_.set(T,k)}}function te(){const T=M[0].pageX-M[1].pageX,k=M[0].pageY-M[1].pageY,L=Math.sqrt(T*T+k*k);y.set(0,L)}function V(){n.enableZoom&&te(),n.enablePan&&_e()}function ke(){n.enableZoom&&te(),n.enableRotate&&ue()}function Re(T){if(M.length==1)p.set(T.pageX,T.pageY);else{const L=j(T),q=.5*(T.pageX+L.x),ae=.5*(T.pageY+L.y);p.set(q,ae)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p)}function ge(T){if(M.length===1)m.set(T.pageX,T.pageY);else{const k=j(T),L=.5*(T.pageX+k.x),q=.5*(T.pageY+k.y);m.set(L,q)}d.subVectors(m,_).multiplyScalar(n.panSpeed),B(d.x,d.y),_.copy(m)}function Ne(T){const k=j(T),L=T.pageX-k.x,q=T.pageY-k.y,ae=Math.sqrt(L*L+q*q);v.set(0,ae),b.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),H(b.y),y.copy(v)}function at(T){n.enableZoom&&Ne(T),n.enablePan&&ge(T)}function Fe(T){n.enableZoom&&Ne(T),n.enableRotate&&Re(T)}function ze(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",ct),n.domElement.addEventListener("pointerup",_t)),A(T),T.pointerType==="touch"?Tt(T):bt(T))}function ct(T){n.enabled!==!1&&(T.pointerType==="touch"?F(T):ft(T))}function _t(T){R(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",_t)),n.dispatchEvent($c),s=r.NONE}function bt(T){let k;switch(T.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case hr.DOLLY:if(n.enableZoom===!1)return;U(T),s=r.DOLLY;break;case hr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;Q(T),s=r.PAN}else{if(n.enableRotate===!1)return;K(T),s=r.ROTATE}break;case hr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;K(T),s=r.ROTATE}else{if(n.enablePan===!1)return;Q(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ma)}function ft(T){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(T);break;case r.DOLLY:if(n.enableZoom===!1)return;fe(T);break;case r.PAN:if(n.enablePan===!1)return;re(T);break}}function ot(T){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(T.preventDefault(),n.dispatchEvent(Ma),ve(T),n.dispatchEvent($c))}function ht(T){n.enabled===!1||n.enablePan===!1||ee(T)}function Tt(T){switch(O(T),M.length){case 1:switch(n.touches.ONE){case dr.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case dr.PAN:if(n.enablePan===!1)return;_e(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case dr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),s=r.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ma)}function F(T){switch(O(T),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(T),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ge(T),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;at(T),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(T),n.update();break;default:s=r.NONE}}function x(T){n.enabled!==!1&&T.preventDefault()}function A(T){M.push(T)}function R(T){delete S[T.pointerId];for(let k=0;k<M.length;k++)if(M[k].pointerId==T.pointerId){M.splice(k,1);return}}function O(T){let k=S[T.pointerId];k===void 0&&(k=new Ke,S[T.pointerId]=k),k.set(T.pageX,T.pageY)}function j(T){const k=T.pointerId===M[0].pointerId?M[1]:M[0];return S[k.pointerId]}n.domElement.addEventListener("contextmenu",x),n.domElement.addEventListener("pointerdown",ze),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}};function zM(i){let e,t,n,r;return e=new vu({props:{dispose:i[2],object:i[0]}}),n=new BM({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment)},l(s){Ve(e.$$.fragment,s),t=Pe(s),Ve(n.$$.fragment,s)},m(s,o){We(e,s,o),Xe(s,t,o),We(n,s,o),r=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const c={};o[0]&2&&(c.position=s[1]),n.$set(c)},i(s){r||(de(e.$$.fragment,s),de(n.$$.fragment,s),r=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),r=!1},d(s){je(e,s),s&&le(t),je(n,s)}}}function kM(i,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:c=void 0}=e,{enablePan:h=void 0}=e,{enableRotate:l=void 0}=e,{enableZoom:u=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:_=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:d=void 0}=e,{minAzimuthAngle:y=void 0}=e,{minDistance:v=void 0}=e,{minPolarAngle:b=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:P=void 0}=e,{rotateSpeed:E=void 0}=e,{screenSpacePanning:w=void 0}=e,{touches:D=void 0}=e,{zoomSpeed:N=void 0}=e,{target:W=void 0}=e,{dispose:B=void 0}=e;const H=_u();qt(i,H,te=>t(30,n=te));const{renderer:G,invalidate:K}=Fi();if(!G)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof su))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const U=bs(),Q=()=>{K("Orbitcontrols: change event"),U("change")},J=()=>U("start"),fe=()=>U("end"),re=new OM(n,G.domElement);wn(n).orbitControls=re,re.addEventListener("change",Q),re.addEventListener("start",J),re.addEventListener("end",fe),Ft(()=>{n&&delete wn(n).orbitControls,re.removeEventListener("change",Q),re.removeEventListener("start",J),re.removeEventListener("end",fe)});const{start:ve,stop:ee}=jh(()=>re.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ue=new It,_e=()=>{t(0,re.target=ue.position,re),re.update(),K("OrbitControls: target changed")};return i.$$set=te=>{"autoRotate"in te&&t(6,r=te.autoRotate),"autoRotateSpeed"in te&&t(7,s=te.autoRotateSpeed),"dampingFactor"in te&&t(8,o=te.dampingFactor),"enableDamping"in te&&t(9,a=te.enableDamping),"enabled"in te&&t(10,c=te.enabled),"enablePan"in te&&t(11,h=te.enablePan),"enableRotate"in te&&t(12,l=te.enableRotate),"enableZoom"in te&&t(13,u=te.enableZoom),"keyPanSpeed"in te&&t(14,f=te.keyPanSpeed),"keys"in te&&t(15,p=te.keys),"maxAzimuthAngle"in te&&t(16,g=te.maxAzimuthAngle),"maxDistance"in te&&t(17,_=te.maxDistance),"maxPolarAngle"in te&&t(18,m=te.maxPolarAngle),"maxZoom"in te&&t(19,d=te.maxZoom),"minAzimuthAngle"in te&&t(20,y=te.minAzimuthAngle),"minDistance"in te&&t(21,v=te.minDistance),"minPolarAngle"in te&&t(22,b=te.minPolarAngle),"minZoom"in te&&t(23,M=te.minZoom),"mouseButtons"in te&&t(24,S=te.mouseButtons),"panSpeed"in te&&t(25,P=te.panSpeed),"rotateSpeed"in te&&t(26,E=te.rotateSpeed),"screenSpacePanning"in te&&t(27,w=te.screenSpacePanning),"touches"in te&&t(28,D=te.touches),"zoomSpeed"in te&&t(29,N=te.zoomSpeed),"target"in te&&t(1,W=te.target),"dispose"in te&&t(2,B=te.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(r!==void 0&&t(0,re.autoRotate=r,re),s!==void 0&&t(0,re.autoRotateSpeed=s,re),o!==void 0&&t(0,re.dampingFactor=o,re),a!==void 0&&t(0,re.enableDamping=a,re),c!==void 0&&t(0,re.enabled=c,re),h!==void 0&&t(0,re.enablePan=h,re),l!==void 0&&t(0,re.enableRotate=l,re),u!==void 0&&t(0,re.enableZoom=u,re),f!==void 0&&t(0,re.keyPanSpeed=f,re),p!==void 0&&t(0,re.keys=p,re),g!==void 0&&t(0,re.maxAzimuthAngle=g,re),_!==void 0&&t(0,re.maxDistance=_,re),m!==void 0&&t(0,re.maxPolarAngle=m,re),d!==void 0&&t(0,re.maxZoom=d,re),y!==void 0&&t(0,re.minAzimuthAngle=y,re),v!==void 0&&t(0,re.minDistance=v,re),b!==void 0&&t(0,re.minPolarAngle=b,re),M!==void 0&&t(0,re.minZoom=M,re),S!==void 0&&t(0,re.mouseButtons=S,re),P!==void 0&&t(0,re.panSpeed=P,re),E!==void 0&&t(0,re.rotateSpeed=E,re),w!==void 0&&t(0,re.screenSpacePanning=w,re),D!==void 0&&t(0,re.touches=D,re),N!==void 0&&t(0,re.zoomSpeed=N,re),re.update(),K("OrbitControls: props changed")),i.$$.dirty[0]&576&&(r||a?ve():ee())},[re,W,B,H,ue,_e,r,s,o,a,c,h,l,u,f,p,g,_,m,d,y,v,b,M,S,P,E,w,D,N]}class HM extends rn{constructor(e){super(),sn(this,e,kM,zM,on,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Ki=new rh,yn=new I,Bi=new I,Rt=new Jt,Jc={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},wa={type:"change"},ef={type:"mouseDown"},tf={type:"mouseUp",mode:null},nf={type:"objectChange"};class GM extends It{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new YM;this._gizmo=n,this.add(n);const r=new ZM;this._plane=r,this.add(r);const s=this;function o(y,v){let b=v;Object.defineProperty(s,y,{get:function(){return b!==void 0?b:v},set:function(M){b!==M&&(b=M,r[y]=M,n[y]=M,s.dispatchEvent({type:y+"-changed",value:M}),s.dispatchEvent(wa))}}),s[y]=v,r[y]=v,n[y]=v}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,c=new I,h=new Jt,l=new Jt,u=new I,f=new Jt,p=new I,g=new I,_=new I,m=0,d=new I;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",h),o("worldQuaternionStart",l),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",p),o("pointEnd",g),o("rotationAxis",_),o("rotationAngle",m),o("eye",d),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Jt,this._parentQuaternionInv=new Jt,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Jt,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Jt,this._scaleStart=new I,this._getPointer=VM.bind(this),this._onPointerDown=jM.bind(this),this._onPointerHover=WM.bind(this),this._onPointerMove=qM.bind(this),this._onPointerUp=XM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Ki.setFromCamera(e,this.camera);const t=ba(this._gizmo.picker[this.mode],Ki);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Ki.setFromCamera(e,this.camera);const t=ba(this._plane,Ki,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,ef.mode=this.mode,this.dispatchEvent(ef)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;Ki.setFromCamera(e,this.camera);const o=ba(this._plane,Ki,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(Rt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(yn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(yn.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Bi.set(a,a,a)}else yn.copy(this.pointStart),Bi.copy(this.pointEnd),yn.applyQuaternion(this._worldQuaternionInv),Bi.applyQuaternion(this._worldQuaternionInv),Bi.divide(yn),t.search("X")===-1&&(Bi.x=1),t.search("Y")===-1&&(Bi.y=1),t.search("Z")===-1&&(Bi.z=1);r.scale.copy(this._scaleStart).multiply(Bi),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(yn.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(yn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Jc[t]),yn.copy(Jc[t]),s==="local"&&yn.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(yn.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Rt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Rt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(wa),this.dispatchEvent(nf)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(tf.mode=this.mode,this.dispatchEvent(tf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(wa),this.dispatchEvent(nf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ki}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function VM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function WM(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function jM(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function qM(i){this.enabled&&this.pointerMove(this._getPointer(i))}function XM(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function ba(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const no=new Es,Dt=new I(0,1,0),rf=new I(0,0,0),sf=new Bt,io=new Jt,uo=new Jt,ci=new I,of=new Bt,cs=new I(1,0,0),Ji=new I(0,1,0),fs=new I(0,0,1),ro=new I,os=new I,as=new I;class YM extends It{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Eo({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new As({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const h=e.clone();h.color.setHex(65280),h.opacity=.5;const l=e.clone();l.color.setHex(255),l.opacity=.5;const u=e.clone();u.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new fn(0,.04,.1,12);_.translate(0,.05,0);const m=new Gt(.08,.08,.08);m.translate(0,.04,0);const d=new nn;d.setAttribute("position",new Et([0,0,0,1,0,0],3));const y=new fn(.0075,.0075,.5,3);y.translate(0,.25,0);function v(G,K){const U=new tr(G,.0075,3,64,K*Math.PI*2);return U.rotateY(Math.PI/2),U.rotateX(Math.PI/2),U}function b(){const G=new nn;return G.setAttribute("position",new Et([0,0,0,1,1,1],3)),G}const M={X:[[new De(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new De(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new De(y,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new De(_,o),[0,.5,0]],[new De(_,o),[0,-.5,0],[Math.PI,0,0]],[new De(y,o)]],Z:[[new De(_,a),[0,0,.5],[Math.PI/2,0,0]],[new De(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new De(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new De(new Rr(.1,0),u.clone()),[0,0,0]]],XY:[[new De(new Gt(.15,.15,.01),l.clone()),[.15,.15,0]]],YZ:[[new De(new Gt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Gt(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new De(new fn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new De(new fn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new De(new fn(.2,0,.6,4),n),[0,.3,0]],[new De(new fn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new De(new fn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new De(new fn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new De(new Rr(.2,0),n)]],XY:[[new De(new Gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new De(new Gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new De(new Rr(.01,2),r),null,null,null,"helper"]],END:[[new De(new Rr(.01,2),r),null,null,null,"helper"]],DELTA:[[new hn(b(),r),null,null,null,"helper"]],X:[[new hn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(d,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(d,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},E={XYZE:[[new De(v(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new De(v(.5,.5),s)]],Y:[[new De(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new De(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new De(v(.75,1),f),null,[0,Math.PI/2,0]]]},w={AXIS:[[new hn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new De(new cr(.25,10,8),n)]],X:[[new De(new tr(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new De(new tr(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new De(new tr(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new De(new tr(.75,.1,2,24),n)]]},N={X:[[new De(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new De(y,s),[0,0,0],[0,0,-Math.PI/2]],[new De(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new De(m,o),[0,.5,0]],[new De(y,o)],[new De(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new De(m,a),[0,0,.5],[Math.PI/2,0,0]],[new De(y,a),[0,0,0],[Math.PI/2,0,0]],[new De(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new De(new Gt(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new De(new Gt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Gt(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new De(new Gt(.1,.1,.1),u.clone())]]},W={X:[[new De(new fn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new De(new fn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new De(new fn(.2,0,.6,4),n),[0,.3,0]],[new De(new fn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new De(new fn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new De(new fn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new De(new Gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new De(new Gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new De(new Gt(.2,.2,.2),n),[0,0,0]]]},B={X:[[new hn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(d,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(d,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function H(G){const K=new It;for(const U in G)for(let Q=G[U].length;Q--;){const J=G[U][Q][0].clone(),fe=G[U][Q][1],re=G[U][Q][2],ve=G[U][Q][3],ee=G[U][Q][4];J.name=U,J.tag=ee,fe&&J.position.set(fe[0],fe[1],fe[2]),re&&J.rotation.set(re[0],re[1],re[2]),ve&&J.scale.set(ve[0],ve[1],ve[2]),J.updateMatrix();const ue=J.geometry.clone();ue.applyMatrix4(J.matrix),J.geometry=ue,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),K.add(J)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=H(M)),this.add(this.gizmo.rotate=H(E)),this.add(this.gizmo.scale=H(N)),this.add(this.picker.translate=H(S)),this.add(this.picker.rotate=H(D)),this.add(this.picker.scale=H(W)),this.add(this.helper.translate=H(P)),this.add(this.helper.rotate=H(w)),this.add(this.helper.scale=H(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:uo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Rt.setFromEuler(no.set(0,0,0)),o.quaternion.copy(n).multiply(Rt),Math.abs(Dt.copy(cs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Rt.setFromEuler(no.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Rt),Math.abs(Dt.copy(Ji).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Rt.setFromEuler(no.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Rt),Math.abs(Dt.copy(fs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Rt.setFromEuler(no.set(0,Math.PI/2,0)),Dt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(sf.lookAt(rf,Dt,Ji)),o.quaternion.multiply(Rt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),yn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),yn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(yn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Dt.copy(cs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Dt.copy(Ji).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Dt.copy(fs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Dt.copy(fs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Dt.copy(cs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Dt.copy(Ji).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(io.copy(n),Dt.copy(this.eye).applyQuaternion(Rt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(sf.lookAt(this.eye,rf,Ji)),o.name==="X"&&(Rt.setFromAxisAngle(cs,Math.atan2(-Dt.y,Dt.z)),Rt.multiplyQuaternions(io,Rt),o.quaternion.copy(Rt)),o.name==="Y"&&(Rt.setFromAxisAngle(Ji,Math.atan2(Dt.x,Dt.z)),Rt.multiplyQuaternions(io,Rt),o.quaternion.copy(Rt)),o.name==="Z"&&(Rt.setFromAxisAngle(fs,Math.atan2(Dt.y,Dt.x)),Rt.multiplyQuaternions(io,Rt),o.quaternion.copy(Rt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class ZM extends De{constructor(){super(new Ao(1e5,1e5,2,2),new Eo({visible:!1,wireframe:!0,side:$n,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ro.copy(cs).applyQuaternion(t==="local"?this.worldQuaternion:uo),os.copy(Ji).applyQuaternion(t==="local"?this.worldQuaternion:uo),as.copy(fs).applyQuaternion(t==="local"?this.worldQuaternion:uo),Dt.copy(os),this.mode){case"translate":case"scale":switch(this.axis){case"X":Dt.copy(this.eye).cross(ro),ci.copy(ro).cross(Dt);break;case"Y":Dt.copy(this.eye).cross(os),ci.copy(os).cross(Dt);break;case"Z":Dt.copy(this.eye).cross(as),ci.copy(as).cross(Dt);break;case"XY":ci.copy(as);break;case"YZ":ci.copy(ro);break;case"XZ":Dt.copy(as),ci.copy(os);break;case"XYZ":case"E":ci.set(0,0,0);break}break;case"rotate":default:ci.set(0,0,0)}ci.length()===0?this.quaternion.copy(this.cameraQuaternion):(of.lookAt(yn.set(0,0,0),ci,Dt),this.quaternion.setFromRotationMatrix(of)),super.updateMatrixWorld(e)}}function KM(i){let e,t,n,r;return e=new vu({props:{dispose:i[0],object:i[1]}}),n=new RM({props:{object:i[1]}}),{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment)},l(s){Ve(e.$$.fragment,s),t=Pe(s),Ve(n.$$.fragment,s)},m(s,o){We(e,s,o),Xe(s,t,o),We(n,s,o),r=!0},p(s,[o]){const a={};o&1&&(a.dispose=s[0]),o&2&&(a.object=s[1]),e.$set(a);const c={};o&2&&(c.object=s[1]),n.$set(c)},i(s){r||(de(e.$$.fragment,s),de(n.$$.fragment,s),r=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),r=!1},d(s){je(e,s),s&&le(t),je(n,s)}}}function QM(i,e,t){let n,r,{autoPauseOrbitControls:s=!0}=e,{mode:o=void 0}=e,{axis:a=null}=e,{dragging:c=!1}=e,{enabled:h=void 0}=e,{translationSnap:l=void 0}=e,{scaleSnap:u=void 0}=e,{rotationSnap:f=void 0}=e,{showX:p=void 0}=e,{showY:g=void 0}=e,{showZ:_=void 0}=e,{size:m=void 0}=e,{space:d=void 0}=e,{dispose:y=void 0}=e;const{camera:v,renderer:b,invalidate:M,scene:S}=Fi();qt(i,v,U=>t(20,r=U));const P=_u();if(qt(i,P,U=>t(19,n=U)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const E=bs(),w=()=>{if(r)return wn(r).orbitControls};let D;const N=()=>{if(D!==void 0){const U=w();U&&(U.enabled=D),D=void 0}};Ft(N);const W={change:U=>{var Q,J;n&&((J=(Q=wn(n)).onTransform)==null||J.call(Q)),M("TransformControls: change event"),E("change",U)},"camera-changed":U=>E("camera-changed",U),"object-changed":U=>E("object-changed",U),"enabled-changed":U=>E("enabled-changed",U),"axis-changed":U=>{t(4,a=U.value),E("axis-changed",U)},"mode-changed":U=>E("mode-changed",U),"translationSnap-changed":U=>E("translationSnap-changed",U),"rotationSnap-changed":U=>E("rotationSnap-changed",U),"scaleSnap-changed":U=>E("scaleSnap-changed",U),"space-changed":U=>E("space-changed",U),"size-changed":U=>E("size-changed",U),"dragging-changed":U=>{t(5,c=U.value);e:if(s){const Q=w();if(!Q)break e;const J=!U.value;if(Q.enabled===J)break e;U.value&&(D=Q.enabled),Q.enabled=J}E("dragging-changed",U)},"showX-changed":U=>E("showX-changed",U),"showY-changed":U=>E("showY-changed",U),"showZ-changed":U=>E("showZ-changed",U),"worldPosition-changed":U=>E("worldPosition-changed",U),"worldPositionStart-changed":U=>E("worldPositionStart-changed",U),"worldQuaternion-changed":U=>E("worldQuaternion-changed",U),"worldQuaternionStart-changed":U=>E("worldQuaternionStart-changed",U),"cameraPosition-changed":U=>E("cameraPosition-changed",U),"cameraQuaternion-changed":U=>E("cameraQuaternion-changed",U),"pointStart-changed":U=>E("pointStart-changed",U),"pointEnd-changed":U=>E("pointEnd-changed",U),"rotationAxis-changed":U=>E("rotationAxis-changed",U),"rotationAngle-changed":U=>E("rotationAngle-changed",U),"eye-changed":U=>E("eye-changed",U),mouseDown:()=>E("mouseDown"),mouseUp:()=>E("mouseUp"),objectChange:()=>E("objectChange")};if(!b)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const B=new GM(r,b.domElement),H=()=>B.reset();B.attach(n);const G=()=>{Object.entries(W).forEach(([U,Q])=>{B.addEventListener(U,Q)})},K=()=>{Object.entries(W).forEach(([U,Q])=>{B.removeEventListener(U,Q)})};return G(),S.add(B),Ft(()=>{B.detach(),S.remove(B),K()}),i.$$set=U=>{"autoPauseOrbitControls"in U&&t(6,s=U.autoPauseOrbitControls),"mode"in U&&t(7,o=U.mode),"axis"in U&&t(4,a=U.axis),"dragging"in U&&t(5,c=U.dragging),"enabled"in U&&t(8,h=U.enabled),"translationSnap"in U&&t(9,l=U.translationSnap),"scaleSnap"in U&&t(10,u=U.scaleSnap),"rotationSnap"in U&&t(11,f=U.rotationSnap),"showX"in U&&t(12,p=U.showX),"showY"in U&&t(13,g=U.showY),"showZ"in U&&t(14,_=U.showZ),"size"in U&&t(15,m=U.size),"space"in U&&t(16,d=U.space),"dispose"in U&&t(0,y=U.dispose)},i.$$.update=()=>{i.$$.dirty&64&&(s||N()),i.$$.dirty&256&&h!==void 0&&t(1,B.enabled=h,B),i.$$.dirty&4096&&p!==void 0&&t(1,B.showX=p,B),i.$$.dirty&8192&&g!==void 0&&t(1,B.showY=g,B),i.$$.dirty&16384&&_!==void 0&&t(1,B.showZ=_,B),i.$$.dirty&130&&o!==void 0&&B.setMode(o),i.$$.dirty&514&&l!==void 0&&B.setTranslationSnap(l),i.$$.dirty&1026&&u!==void 0&&B.setScaleSnap(u),i.$$.dirty&2050&&f!==void 0&&B.setRotationSnap(f),i.$$.dirty&32770&&m!==void 0&&B.setSize(m),i.$$.dirty&65538&&d!==void 0&&B.setSpace(d)},[y,B,v,P,a,c,s,o,h,l,u,f,p,g,_,m,d,H]}class qh extends rn{constructor(e){super(),sn(this,e,QM,KM,on,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}function $M(i,e,t){let{object:n}=e,r=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=bs(),{addInteractiveObject:c,removeInteractiveObject:h,addRaycastableObject:l,removeRaycastableObject:u}=Wh(),{invalidate:f}=Fi(),p=_=>{u(_),h(_),delete wn(_).eventDispatcher},g=(_,m,d)=>{wn(_).eventDispatcher=a,m?(u(_),h(_)):(l(_),d?c(_):h(_))};return Ft(()=>{p(n),f("InteractiveObject: object removed")}),i.$$set=_=>{"object"in _&&t(0,n=_.object),"interactive"in _&&t(1,s=_.interactive),"ignorePointer"in _&&t(2,o=_.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==r?(p(r),g(n,o,s),f("InteractiveObject: object changed"),t(3,r=n)):n===r&&(g(n,o,s),f("InteractiveObject: props changed")))},[n,s,o,r]}class Xh extends rn{constructor(e){super(),sn(this,e,$M,null,on,{object:0,interactive:1,ignorePointer:2})}}const Yh=new It;Yh.scale.set(0,0,0);Yh.matrix;new Bt().fromArray(new Array(16).fill(0));new dt(16777215);const Zh=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let r=0;r<t.length;r+=1)i=i[t[r]];return{target:i,key:n}}else return{target:i,key:e}},Da=Symbol("initialValueBeforeAttach"),JM=()=>{const{invalidate:i}=Fi();let e=!1,t=Da,n,r,s;const o=(c,h,l)=>{if(a(),!l){const u=c;((u==null?void 0:u.isMaterial)||!1)&&(l="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(l="geometry")}if(l){if(typeof l=="function")n=l(h,c);else{const{target:u,key:f}=Zh(h,l);t=u[f],u[f]=c,r=u,s=f}e=!0,i()}},a=()=>{e&&(n?(n(),n=void 0):r&&s&&t!==Da&&(r[s]=t,t=Da,r=void 0,s=void 0),e=!1,i())};return Ft(()=>{a()}),{update:o}},ew=i=>i&&i.isCamera,Kh=i=>i&&i.isOrthographicCamera,Qh=i=>i&&i.isPerspectiveCamera,tw=i=>Qh(i)||Kh(i),nw=()=>{const{invalidate:i,size:e}=Fi(),{setCamera:t}=Wh();let n,r;Ft(()=>{r==null||r()});const s=c=>{n&&(Kh(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):Qh(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(c,h)=>{if(r==null||r(),h||!tw(c)){n=void 0;return}n=c,r=e.subscribe(s)},makeDefaultCamera:(c,h)=>{!ew(c)||!h||(t(c),i())}}},af=i=>!!(i!=null&&i.addEventListener),iw=()=>{const i=bs(),e=td(),t=f=>{f!=null&&f.type&&i(f.type,f)},n=(f,p)=>{af(f)&&p.forEach(g=>{f.removeEventListener(g,t)})},r=(f,p)=>{af(f)&&p.forEach(g=>{f.addEventListener(g,t)})};let s=[],o;const a=en([]),c=a.subscribe(f=>{n(o,s),r(o,f),s=f});Ft(c);const h=en(),l=h.subscribe(f=>{n(o,s),r(f,s),o=f});return Ft(l),Ft(()=>{n(o,s)}),Ef(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{h.set(f)}}},rw=["$$scope","$$slots","type","args","attach","instance"],sw=["fov","aspect","near","far","left","right","top","bottom","zoom"],ow=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,aw=()=>{const{invalidate:i}=Fi(),e=new Map,t=(r,s,o,a)=>{var l,u;if(ow(o)){const f=e.get(s);if(f&&f.instance===r&&f.value===o)return;e.set(s,{instance:r,value:o})}const{key:c,target:h}=Zh(r,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((l=h[c])==null?void 0:l.setScalar)=="function")h[c].setScalar(o);else if(typeof((u=h[c])==null?void 0:u.set)=="function")Array.isArray(o)?h[c].set(...o):h[c].set(o);else{if(h[c]=o,a.manualCamera)return;sw.includes(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()}};return{updateProps:(r,s,o)=>{for(const a in s)rw.includes(a)||t(r,a,s[a],o),i()}}},uw=i=>({ref:i&1}),uf=i=>({ref:i[0]}),lw=i=>({ref:i&1}),lf=i=>({ref:i[0]});function cf(i){let e,t;return e=new vu({props:{object:i[0],dispose:i[1]}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function cw(i){let e;const t=i[12].default,n=Zr(t,i,i[13],uf);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&Kr(n,t,r,r[13],e?$r(t,r[13],s,uw):Qr(r[13]),uf)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}function fw(i){let e,t;return e=new Vh({props:{object:i[0],$$slots:{default:[hw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&8193&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function hw(i){let e;const t=i[12].default,n=Zr(t,i,i[13],lf);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&Kr(n,t,r,r[13],e?$r(t,r[13],s,lw):Qr(r[13]),lf)},i(r){e||(de(n,r),e=!0)},o(r){ye(n,r),e=!1},d(r){n&&n.d(r)}}}function dw(i){let e=i[4](i[0]),t,n,r,s,o,a,c=e&&cf(i);const h=[fw,cw],l=[];function u(f,p){return p&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return r=u(i,-1),s=l[r]=h[r](i),{c(){c&&c.c(),t=Te(),s.c(),o=Wn()},l(f){c&&c.l(f),t=Pe(f),s.l(f),o=Wn()},m(f,p){c&&c.m(f,p),Xe(f,t,p),l[r].m(f,p),Xe(f,o,p),a=!0},p(f,[p]){p&1&&(e=f[4](f[0])),e?c?(c.p(f,p),p&1&&de(c,1)):(c=cf(f),c.c(),de(c,1),c.m(t.parentNode,t)):c&&(Hn(),ye(c,1,1,()=>{c=null}),Gn());let g=r;r=u(f,p),r===g?l[r].p(f,p):(Hn(),ye(l[g],1,1,()=>{l[g]=null}),Gn(),s=l[r],s?s.p(f,p):(s=l[r]=h[r](f),s.c()),de(s,1),s.m(o.parentNode,o))},i(f){a||(de(c),de(s),a=!0)},o(f){ye(c),ye(s),a=!1},d(f){c&&c.d(f),f&&le(t),l[r].d(f),f&&le(o)}}}function pw(i,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let r=yu(e,n),s,{$$slots:o={},$$scope:a}=e,{type:c}=e,{args:h=void 0}=e,{attach:l=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:p=void 0}=e;const g=_i("threlte-hierarchical-parent-context");qt(i,g,D=>t(11,s=D));const _=D=>typeof D=="function"&&/^\s*class\s+/.test(D.toString()),m=D=>Array.isArray(D);let{ref:d=_(c)&&m(h)?new c(...h):_(c)?new c:c}=e,y=!1;const v=en(d);Qn("threlte-hierarchical-parent-context",v);const b=aw(),M=nw(),S=JM(),P=iw(),E=D=>!!D.isObject3D,w=D=>D.dispose!==void 0;return i.$$set=D=>{e=Mu(Mu({},e),nd(D)),t(21,r=yu(e,n)),"type"in D&&t(5,c=D.type),"args"in D&&t(6,h=D.args),"attach"in D&&t(7,l=D.attach),"manual"in D&&t(8,u=D.manual),"makeDefault"in D&&t(9,f=D.makeDefault),"dispose"in D&&t(1,p=D.dispose),"ref"in D&&t(0,d=D.ref),"$$scope"in D&&t(13,a=D.$$scope)},i.$$.update=()=>{i.$$.dirty&1120&&(y?t(0,d=_(c)&&m(h)?new c(...h):_(c)?new c:c):t(10,y=!0)),i.$$.dirty&1&&v.set(d),b.updateProps(d,r,{manualCamera:u}),i.$$.dirty&257&&M.update(d,u),i.$$.dirty&513&&M.makeDefaultCamera(d,f),i.$$.dirty&2177&&S.update(d,s,l),i.$$.dirty&1&&P.updateRef(d)},[d,p,g,E,w,c,h,l,u,f,y,s,o,a]}class gt extends rn{constructor(e){super(),sn(this,e,pw,dw,on,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function mw(i){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ff extends rn{constructor(e){super(),sn(this,e,mw,null,on,{})}}new Proxy(ff,{get(i,e){return i[e]||ff}});UM(Vl,()=>new Vl(eh));const gw=Math.PI/180;function _w(i){return i*gw}function hf(i,e,t){const n=i.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function df(i){let e,t;return e=new gt({props:{type:si,$$slots:{default:[xw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&8200&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function vw(i){let e,t,n,r;return e=new gt({props:{type:cr,args:[.1]}}),n=new gt({props:{type:Cs,color:"#0000FF"}}),{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment)},l(s){Ve(e.$$.fragment,s),t=Pe(s),Ve(n.$$.fragment,s)},m(s,o){We(e,s,o),Xe(s,t,o),We(n,s,o),r=!0},p:dn,i(s){r||(de(e.$$.fragment,s),de(n.$$.fragment,s),r=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),r=!1},d(s){je(e,s),s&&le(t),je(n,s)}}}function xw(i){let e,t;return e=new gt({props:{type:De,"position.x":i[3].x,"position.y":i[3].y,"position.z":i[3].z,$$slots:{default:[vw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&8&&(s["position.x"]=n[3].x),r&8&&(s["position.y"]=n[3].y),r&8&&(s["position.z"]=n[3].z),r&8192&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function pf(i){let e,t;function n(){return i[5](i[9],i[10],i[11])}function r(){return i[6](i[9],i[10],i[11])}return e=new Xh({props:{object:i[12],interactive:!0}}),e.$on("pointerenter",n),e.$on("pointerleave",r),{c(){Ge(e.$$.fragment)},l(s){Ve(e.$$.fragment,s)},m(s,o){We(e,s,o),t=!0},p(s,o){i=s;const a={};o&4096&&(a.object=i[12]),e.$set(a)},i(s){t||(de(e.$$.fragment,s),t=!0)},o(s){ye(e.$$.fragment,s),t=!1},d(s){je(e,s)}}}function yw(i){let e,t,n,r,s,o,a,c;e=new gt({props:{type:cr,args:[.1]}}),n=new gt({props:{type:Cs,color:"#FF0000"}});function h(){return i[4](i[9],i[12],i[10],i[11])}s=new qh({props:{showX:i[9].enabled,showY:i[9].enabled,showZ:i[9].enabled,translationSnap:i[2].toggles.snapActive.value?1:0}}),s.$on("objectChange",h);let l=i[2].curveActive===0&&pf(i);return{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment),r=Te(),Ge(s.$$.fragment),o=Te(),l&&l.c(),a=Wn()},l(u){Ve(e.$$.fragment,u),t=Pe(u),Ve(n.$$.fragment,u),r=Pe(u),Ve(s.$$.fragment,u),o=Pe(u),l&&l.l(u),a=Wn()},m(u,f){We(e,u,f),Xe(u,t,f),We(n,u,f),Xe(u,r,f),We(s,u,f),Xe(u,o,f),l&&l.m(u,f),Xe(u,a,f),c=!0},p(u,f){i=u;const p={};f&1&&(p.showX=i[9].enabled),f&1&&(p.showY=i[9].enabled),f&1&&(p.showZ=i[9].enabled),f&4&&(p.translationSnap=i[2].toggles.snapActive.value?1:0),s.$set(p),i[2].curveActive===0?l?(l.p(i,f),f&4&&de(l,1)):(l=pf(i),l.c(),de(l,1),l.m(a.parentNode,a)):l&&(Hn(),ye(l,1,1,()=>{l=null}),Gn())},i(u){c||(de(e.$$.fragment,u),de(n.$$.fragment,u),de(s.$$.fragment,u),de(l),c=!0)},o(u){ye(e.$$.fragment,u),ye(n.$$.fragment,u),ye(s.$$.fragment,u),ye(l),c=!1},d(u){je(e,u),u&&le(t),je(n,u),u&&le(r),je(s,u),u&&le(o),l&&l.d(u),u&&le(a)}}}function Mw(i){let e,t,n;return e=new gt({props:{type:De,"position.x":i[9].vector.x,"position.y":i[9].vector.y,"position.z":i[9].vector.z,$$slots:{default:[yw,({ref:r})=>({12:r}),({ref:r})=>r?4096:0]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment),t=Te()},l(r){Ve(e.$$.fragment,r),t=Pe(r)},m(r,s){We(e,r,s),Xe(r,t,s),n=!0},p(r,s){const o={};s&1&&(o["position.x"]=r[9].vector.x),s&1&&(o["position.y"]=r[9].vector.y),s&1&&(o["position.z"]=r[9].vector.z),s&12293&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){n||(de(e.$$.fragment,r),n=!0)},o(r){ye(e.$$.fragment,r),n=!1},d(r){je(e,r),r&&le(t)}}}function mf(i){let e,t;return e=new gt({props:{type:si,visible:i[2].toggles.pointsActive.value,$$slots:{default:[Mw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.visible=n[2].toggles.pointsActive.value),r&8197&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function ww(i){let e,t;return e=new gt({props:{type:As,color:"#FF0000"}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p:dn,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function bw(i){let e,t;return e=new gt({props:{type:Jf,color:"#000000",dashSize:.1,gapSize:.1,transparent:!0}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p:dn,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Dw(i){let e,t,n,r,s,o,a,c,h=i[2].toggles.indicatorActive.value&&df(i),l=i[0].points,u=[];for(let d=0;d<l.length;d+=1)u[d]=mf(hf(i,l,d));const f=d=>ye(u[d],1,1,()=>{u[d]=null});function p(d){i[7](d)}let g={type:hn,$$slots:{default:[ww]},$$scope:{ctx:i}};i[1]!==void 0&&(g.ref=i[1]),n=new gt({props:g}),ri.push(()=>di(n,"ref",p));function _(d){i[8](d)}let m={type:hn,visible:i[2].toggles.controlPolygonActive.value,$$slots:{default:[bw]},$$scope:{ctx:i}};return i[0].controlPolygon!==void 0&&(m.ref=i[0].controlPolygon),o=new gt({props:m}),ri.push(()=>di(o,"ref",_)),{c(){h&&h.c(),e=Te();for(let d=0;d<u.length;d+=1)u[d].c();t=Te(),Ge(n.$$.fragment),s=Te(),Ge(o.$$.fragment)},l(d){h&&h.l(d),e=Pe(d);for(let y=0;y<u.length;y+=1)u[y].l(d);t=Pe(d),Ve(n.$$.fragment,d),s=Pe(d),Ve(o.$$.fragment,d)},m(d,y){h&&h.m(d,y),Xe(d,e,y);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(d,y);Xe(d,t,y),We(n,d,y),Xe(d,s,y),We(o,d,y),c=!0},p(d,y){if(d[2].toggles.indicatorActive.value?h?(h.p(d,y),y&4&&de(h,1)):(h=df(d),h.c(),de(h,1),h.m(e.parentNode,e)):h&&(Hn(),ye(h,1,1,()=>{h=null}),Gn()),y&4101){l=d[0].points;let M;for(M=0;M<l.length;M+=1){const S=hf(d,l,M);u[M]?(u[M].p(S,y),de(u[M],1)):(u[M]=mf(S),u[M].c(),de(u[M],1),u[M].m(t.parentNode,t))}for(Hn(),M=l.length;M<u.length;M+=1)f(M);Gn()}const v={};y&8192&&(v.$$scope={dirty:y,ctx:d}),!r&&y&2&&(r=!0,v.ref=d[1],pi(()=>r=!1)),n.$set(v);const b={};y&4&&(b.visible=d[2].toggles.controlPolygonActive.value),y&8192&&(b.$$scope={dirty:y,ctx:d}),!a&&y&1&&(a=!0,b.ref=d[0].controlPolygon,pi(()=>a=!1)),o.$set(b)},i(d){if(!c){de(h);for(let y=0;y<l.length;y+=1)de(u[y]);de(n.$$.fragment,d),de(o.$$.fragment,d),c=!0}},o(d){ye(h),u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)ye(u[y]);ye(n.$$.fragment,d),ye(o.$$.fragment,d),c=!1},d(d){h&&h.d(d),d&&le(e),Rn(u,d),d&&le(t),je(n,d),d&&le(s),je(o,d)}}}function Sw(i){let e,t;return e=new gt({props:{type:si,visible:i[2].curveActive===0,$$slots:{default:[Dw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.visible=n[2].curveActive===0),r&8207&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Ew(i,e,t){let n;qt(i,Ci,f=>t(2,n=f));let{curve:r}=e,s=new hn,o=new I;const a=(f,p,g,_)=>{t(0,g[_].vector.x=p.position.x,r),t(0,g[_].vector.y=p.position.y,r),t(0,g[_].vector.z=p.position.z,r)},c=(f,p,g)=>t(0,p[g].enabled=!0,r),h=(f,p,g)=>t(0,p[g].enabled=!1,r);function l(f){s=f,t(1,s)}function u(f){i.$$.not_equal(r.controlPolygon,f)&&(r.controlPolygon=f,t(0,r))}return i.$$set=f=>{"curve"in f&&t(0,r=f.curve)},i.$$.update=()=>{i.$$.dirty&7&&(s.geometry.setFromPoints(r.generate()),r.computeControlPolygon(),t(3,o=r.evaluate(n.u)))},[r,s,n,o,a,c,h,l,u]}class Aw extends rn{constructor(e){super(),sn(this,e,Ew,Sw,on,{curve:0})}}function gf(i,e,t){const n=i.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function _f(i,e,t){const n=i.slice();return n[12]=e[t],n}function vf(i,e,t){const n=i.slice();return n[15]=e[t],n[16]=e,n[17]=t,n}function xf(i){let e,t;return e=new gt({props:{type:si,$$slots:{default:[Tw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&524296&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Cw(i){let e,t,n,r;return e=new gt({props:{type:cr,args:[.1]}}),n=new gt({props:{type:Cs,color:"#0000FF"}}),{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment)},l(s){Ve(e.$$.fragment,s),t=Pe(s),Ve(n.$$.fragment,s)},m(s,o){We(e,s,o),Xe(s,t,o),We(n,s,o),r=!0},p:dn,i(s){r||(de(e.$$.fragment,s),de(n.$$.fragment,s),r=!0)},o(s){ye(e.$$.fragment,s),ye(n.$$.fragment,s),r=!1},d(s){je(e,s),s&&le(t),je(n,s)}}}function Tw(i){let e,t;return e=new gt({props:{type:De,"position.x":i[3].x,"position.y":i[3].y,"position.z":i[3].z,$$slots:{default:[Cw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&8&&(s["position.x"]=n[3].x),r&8&&(s["position.y"]=n[3].y),r&8&&(s["position.z"]=n[3].z),r&524288&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function yf(i){let e,t;function n(){return i[5](i[15],i[16],i[17])}function r(){return i[6](i[15],i[16],i[17])}return e=new Xh({props:{object:i[18],interactive:!0}}),e.$on("pointerenter",n),e.$on("pointerleave",r),{c(){Ge(e.$$.fragment)},l(s){Ve(e.$$.fragment,s)},m(s,o){We(e,s,o),t=!0},p(s,o){i=s;const a={};o&262144&&(a.object=i[18]),e.$set(a)},i(s){t||(de(e.$$.fragment,s),t=!0)},o(s){ye(e.$$.fragment,s),t=!1},d(s){je(e,s)}}}function Pw(i){let e,t,n,r,s,o,a,c;e=new gt({props:{type:cr,args:[.1]}}),n=new gt({props:{type:Cs,color:"#FF0000"}});function h(){return i[4](i[15],i[18],i[16],i[17])}s=new qh({props:{showX:i[15].enabled,showY:i[15].enabled,showZ:i[15].enabled,translationSnap:i[1].toggles.snapActive.value?1:0}}),s.$on("objectChange",h);let l=i[1].curveActive===1&&yf(i);return{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment),r=Te(),Ge(s.$$.fragment),o=Te(),l&&l.c(),a=Wn()},l(u){Ve(e.$$.fragment,u),t=Pe(u),Ve(n.$$.fragment,u),r=Pe(u),Ve(s.$$.fragment,u),o=Pe(u),l&&l.l(u),a=Wn()},m(u,f){We(e,u,f),Xe(u,t,f),We(n,u,f),Xe(u,r,f),We(s,u,f),Xe(u,o,f),l&&l.m(u,f),Xe(u,a,f),c=!0},p(u,f){i=u;const p={};f&1&&(p.showX=i[15].enabled),f&1&&(p.showY=i[15].enabled),f&1&&(p.showZ=i[15].enabled),f&2&&(p.translationSnap=i[1].toggles.snapActive.value?1:0),s.$set(p),i[1].curveActive===1?l?(l.p(i,f),f&2&&de(l,1)):(l=yf(i),l.c(),de(l,1),l.m(a.parentNode,a)):l&&(Hn(),ye(l,1,1,()=>{l=null}),Gn())},i(u){c||(de(e.$$.fragment,u),de(n.$$.fragment,u),de(s.$$.fragment,u),de(l),c=!0)},o(u){ye(e.$$.fragment,u),ye(n.$$.fragment,u),ye(s.$$.fragment,u),ye(l),c=!1},d(u){je(e,u),u&&le(t),je(n,u),u&&le(r),je(s,u),u&&le(o),l&&l.d(u),u&&le(a)}}}function Fw(i){let e,t,n;return e=new gt({props:{type:De,"position.x":i[15].vector.x,"position.y":i[15].vector.y,"position.z":i[15].vector.z,$$slots:{default:[Pw,({ref:r})=>({18:r}),({ref:r})=>r?262144:0]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment),t=Te()},l(r){Ve(e.$$.fragment,r),t=Pe(r)},m(r,s){We(e,r,s),Xe(r,t,s),n=!0},p(r,s){const o={};s&1&&(o["position.x"]=r[15].vector.x),s&1&&(o["position.y"]=r[15].vector.y),s&1&&(o["position.z"]=r[15].vector.z),s&786435&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){n||(de(e.$$.fragment,r),n=!0)},o(r){ye(e.$$.fragment,r),n=!1},d(r){je(e,r),r&&le(t)}}}function Mf(i){let e,t;return e=new gt({props:{type:si,visible:i[1].toggles.pointsActive.value,$$slots:{default:[Fw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.visible=n[1].toggles.pointsActive.value),r&524291&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function wf(i){let e,t,n=i[12],r=[];for(let o=0;o<n.length;o+=1)r[o]=Mf(vf(i,n,o));const s=o=>ye(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Wn()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=Wn()},m(o,a){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(o,a);Xe(o,e,a),t=!0},p(o,a){if(a&262147){n=o[12];let c;for(c=0;c<n.length;c+=1){const h=vf(o,n,c);r[c]?(r[c].p(h,a),de(r[c],1)):(r[c]=Mf(h),r[c].c(),de(r[c],1),r[c].m(e.parentNode,e))}for(Hn(),c=n.length;c<r.length;c+=1)s(c);Gn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)de(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ye(r[a]);t=!1},d(o){Rn(r,o),o&&le(e)}}}function Lw(i){let e,t,n;return e=new gt({props:{type:Jf,color:"#000000",dashSize:.1,gapSize:.1,transparent:!0}}),{c(){Ge(e.$$.fragment),t=Te()},l(r){Ve(e.$$.fragment,r),t=Pe(r)},m(r,s){We(e,r,s),Xe(r,t,s),n=!0},p:dn,i(r){n||(de(e.$$.fragment,r),n=!0)},o(r){ye(e.$$.fragment,r),n=!1},d(r){je(e,r),r&&le(t)}}}function bf(i){let e,t,n;function r(o){i[7](o,i[9],i[10],i[11])}let s={type:hn,visible:i[1].toggles.controlPolygonActive.value,$$slots:{default:[Lw]},$$scope:{ctx:i}};return i[9]!==void 0&&(s.ref=i[9]),e=new gt({props:s}),ri.push(()=>di(e,"ref",r)),{c(){Ge(e.$$.fragment)},l(o){Ve(e.$$.fragment,o)},m(o,a){We(e,o,a),n=!0},p(o,a){i=o;const c={};a&2&&(c.visible=i[1].toggles.controlPolygonActive.value),a&524288&&(c.$$scope={dirty:a,ctx:i}),!t&&a&1&&(t=!0,c.ref=i[9],pi(()=>t=!1)),e.$set(c)},i(o){n||(de(e.$$.fragment,o),n=!0)},o(o){ye(e.$$.fragment,o),n=!1},d(o){je(e,o)}}}function Rw(i){let e,t,n,r,s,o,a=i[1].toggles.indicatorActive.value&&xf(i),c=i[0].points,h=[];for(let m=0;m<c.length;m+=1)h[m]=wf(_f(i,c,m));const l=m=>ye(h[m],1,1,()=>{h[m]=null});let u=i[0].controlPolygon,f=[];for(let m=0;m<u.length;m+=1)f[m]=bf(gf(i,u,m));const p=m=>ye(f[m],1,1,()=>{f[m]=null});function g(m){i[8](m)}let _={type:De,castShadow:!0};return i[2]!==void 0&&(_.ref=i[2]),r=new gt({props:_}),ri.push(()=>di(r,"ref",g)),{c(){a&&a.c(),e=Te();for(let m=0;m<h.length;m+=1)h[m].c();t=Te();for(let m=0;m<f.length;m+=1)f[m].c();n=Te(),Ge(r.$$.fragment)},l(m){a&&a.l(m),e=Pe(m);for(let d=0;d<h.length;d+=1)h[d].l(m);t=Pe(m);for(let d=0;d<f.length;d+=1)f[d].l(m);n=Pe(m),Ve(r.$$.fragment,m)},m(m,d){a&&a.m(m,d),Xe(m,e,d);for(let y=0;y<h.length;y+=1)h[y]&&h[y].m(m,d);Xe(m,t,d);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(m,d);Xe(m,n,d),We(r,m,d),o=!0},p(m,d){if(m[1].toggles.indicatorActive.value?a?(a.p(m,d),d&2&&de(a,1)):(a=xf(m),a.c(),de(a,1),a.m(e.parentNode,e)):a&&(Hn(),ye(a,1,1,()=>{a=null}),Gn()),d&262147){c=m[0].points;let v;for(v=0;v<c.length;v+=1){const b=_f(m,c,v);h[v]?(h[v].p(b,d),de(h[v],1)):(h[v]=wf(b),h[v].c(),de(h[v],1),h[v].m(t.parentNode,t))}for(Hn(),v=c.length;v<h.length;v+=1)l(v);Gn()}if(d&3){u=m[0].controlPolygon;let v;for(v=0;v<u.length;v+=1){const b=gf(m,u,v);f[v]?(f[v].p(b,d),de(f[v],1)):(f[v]=bf(b),f[v].c(),de(f[v],1),f[v].m(n.parentNode,n))}for(Hn(),v=u.length;v<f.length;v+=1)p(v);Gn()}const y={};!s&&d&4&&(s=!0,y.ref=m[2],pi(()=>s=!1)),r.$set(y)},i(m){if(!o){de(a);for(let d=0;d<c.length;d+=1)de(h[d]);for(let d=0;d<u.length;d+=1)de(f[d]);de(r.$$.fragment,m),o=!0}},o(m){ye(a),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)ye(h[d]);f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)ye(f[d]);ye(r.$$.fragment,m),o=!1},d(m){a&&a.d(m),m&&le(e),Rn(h,m),m&&le(t),Rn(f,m),m&&le(n),je(r,m)}}}function Iw(i){let e,t;return e=new gt({props:{type:si,visible:i[1].curveActive!==0,$$slots:{default:[Rw]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.visible=n[1].curveActive!==0),r&524303&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Nw(i,e,t){let n;qt(i,Ci,f=>t(1,n=f));let{surface:r}=e,s=new De(r.generate(),new Cs({color:"#FF0000",side:$n,flatShading:!1,wireframe:!1,transparent:!0,opacity:.5})),o=new I;const a=(f,p,g,_)=>{t(0,g[_].vector.x=p.position.x,r),t(0,g[_].vector.y=p.position.y,r),t(0,g[_].vector.z=p.position.z,r)},c=(f,p,g)=>t(0,p[g].enabled=!0,r),h=(f,p,g)=>t(0,p[g].enabled=!1,r);function l(f,p,g,_){g[_]=f,t(0,r)}function u(f){s=f,t(2,s),t(0,r),t(1,n)}return i.$$set=f=>{"surface"in f&&t(0,r=f.surface)},i.$$.update=()=>{i.$$.dirty&3&&(t(2,s.geometry=r.generate(),s),r.computeControlPolygon(),t(2,s.material.wireframe=n.surface.wireframe.value,s),t(3,o=r.evaluate(n.u,n.w)))},[r,n,s,o,a,c,h,l,u]}class Bw extends rn{constructor(e){super(),sn(this,e,Nw,Iw,on,{surface:0})}}function Uw(i){let e,t;return e=new HM({props:{maxPolarAngle:_w(80),enableZoom:!0,target:{y:.5}}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p:dn,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Ow(i){let e,t;return e=new gt({props:{type:lv}}),{c(){Ge(e.$$.fragment)},l(n){Ve(e.$$.fragment,n)},m(n,r){We(e,n,r),t=!0},p:dn,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ye(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function zw(i){let e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m;e=new gt({props:{type:Ln,makeDefault:!0,position:[10,10,10],fov:24,$$slots:{default:[Uw]},$$scope:{ctx:i}}}),n=new gt({props:{type:ql,castShadow:!0,position:[3,10,10]}}),s=new gt({props:{type:ql,position:[-10,10,-10],intensity:.2}}),a=new gt({props:{type:uv,intensity:.2}});function d(M){i[4](M)}let y={};i[0]!==void 0&&(y.curve=i[0]),h=new Aw({props:y}),ri.push(()=>di(h,"curve",d));function v(M){i[5](M)}let b={};return i[1]!==void 0&&(b.surface=i[1]),f=new Bw({props:b}),ri.push(()=>di(f,"surface",v)),_=new gt({props:{type:si,$$slots:{default:[Ow]},$$scope:{ctx:i}}}),{c(){Ge(e.$$.fragment),t=Te(),Ge(n.$$.fragment),r=Te(),Ge(s.$$.fragment),o=Te(),Ge(a.$$.fragment),c=Te(),Ge(h.$$.fragment),u=Te(),Ge(f.$$.fragment),g=Te(),Ge(_.$$.fragment)},l(M){Ve(e.$$.fragment,M),t=Pe(M),Ve(n.$$.fragment,M),r=Pe(M),Ve(s.$$.fragment,M),o=Pe(M),Ve(a.$$.fragment,M),c=Pe(M),Ve(h.$$.fragment,M),u=Pe(M),Ve(f.$$.fragment,M),g=Pe(M),Ve(_.$$.fragment,M)},m(M,S){We(e,M,S),Xe(M,t,S),We(n,M,S),Xe(M,r,S),We(s,M,S),Xe(M,o,S),We(a,M,S),Xe(M,c,S),We(h,M,S),Xe(M,u,S),We(f,M,S),Xe(M,g,S),We(_,M,S),m=!0},p(M,S){const P={};S&128&&(P.$$scope={dirty:S,ctx:M}),e.$set(P);const E={};!l&&S&1&&(l=!0,E.curve=M[0],pi(()=>l=!1)),h.$set(E);const w={};!p&&S&2&&(p=!0,w.surface=M[1],pi(()=>p=!1)),f.$set(w);const D={};S&128&&(D.$$scope={dirty:S,ctx:M}),_.$set(D)},i(M){m||(de(e.$$.fragment,M),de(n.$$.fragment,M),de(s.$$.fragment,M),de(a.$$.fragment,M),de(h.$$.fragment,M),de(f.$$.fragment,M),de(_.$$.fragment,M),m=!0)},o(M){ye(e.$$.fragment,M),ye(n.$$.fragment,M),ye(s.$$.fragment,M),ye(a.$$.fragment,M),ye(h.$$.fragment,M),ye(f.$$.fragment,M),ye(_.$$.fragment,M),m=!1},d(M){je(e,M),M&&le(t),je(n,M),M&&le(r),je(s,M),M&&le(o),je(a,M),M&&le(c),je(h,M),M&&le(u),je(f,M),M&&le(g),je(_,M)}}}function kw(i){let e,t,n,r;return t=new CM({props:{size:{width:i[2],height:i[3]},$$slots:{default:[zw]},$$scope:{ctx:i}}}),{c(){e=Ee("div"),Ge(t.$$.fragment),this.h()},l(s){e=Ae(s,"DIV",{class:!0});var o=Se(e);Ve(t.$$.fragment,o),o.forEach(le),this.h()},h(){pe(e,"class","w-full h-full"),Df(()=>i[6].call(e))},m(s,o){Xe(s,e,o),We(t,e,null),n=Sf(e,i[6].bind(e)),r=!0},p(s,[o]){const a={};o&12&&(a.size={width:s[2],height:s[3]}),o&131&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){r||(de(t.$$.fragment,s),r=!0)},o(s){ye(t.$$.fragment,s),r=!1},d(s){s&&le(e),je(t),n()}}}function Hw(i,e,t){let{curve:n}=e,{surface:r}=e,s=500,o=500;function a(l){n=l,t(0,n)}function c(l){r=l,t(1,r)}function h(){s=this.clientWidth,o=this.clientHeight,t(2,s),t(3,o)}return i.$$set=l=>{"curve"in l&&t(0,n=l.curve),"surface"in l&&t(1,r=l.surface)},[n,r,s,o,a,c,h]}class Gw extends rn{constructor(e){super(),sn(this,e,Hw,kw,on,{curve:0,surface:1})}}function Vw(i){let e,t,n,r,s,o,a,c,h,l,u,f,p,g,_,m;function d(P){i[2](P)}function y(P){i[3](P)}let v={};i[0]!==void 0&&(v.curve=i[0]),i[1]!==void 0&&(v.surface=i[1]),c=new Gw({props:v}),ri.push(()=>di(c,"curve",d)),ri.push(()=>di(c,"surface",y));function b(P){i[4](P)}function M(P){i[5](P)}let S={};return i[0]!==void 0&&(S.curve=i[0]),i[1]!==void 0&&(S.surface=i[1]),p=new M1({props:S}),ri.push(()=>di(p,"curve",b)),ri.push(()=>di(p,"surface",M)),{c(){e=Te(),t=Ee("div"),n=Ee("div"),r=yt("ME6104 Final Project: Bézier Curve and Surface Explorer"),s=Te(),o=Ee("div"),a=Ee("div"),Ge(c.$$.fragment),u=Te(),f=Ee("div"),Ge(p.$$.fragment),this.h()},l(P){id("svelte-1s1x5ua",document.head).forEach(le),e=Pe(P),t=Ae(P,"DIV",{class:!0});var w=Se(t);n=Ae(w,"DIV",{class:!0});var D=Se(n);r=Mt(D,"ME6104 Final Project: Bézier Curve and Surface Explorer"),D.forEach(le),s=Pe(w),o=Ae(w,"DIV",{class:!0});var N=Se(o);a=Ae(N,"DIV",{class:!0});var W=Se(a);Ve(c.$$.fragment,W),W.forEach(le),u=Pe(N),f=Ae(N,"DIV",{class:!0});var B=Se(f);Ve(p.$$.fragment,B),B.forEach(le),N.forEach(le),w.forEach(le),this.h()},h(){document.title="ME 6104 Final Project",pe(n,"class","text-center text-3xl font-semibold"),pe(a,"class","border border-black h-[50vh] lg:h-full lg:min-h-0 rounded-md drop-shadow-md bg-base-100 lg:w-3/4"),pe(f,"class","border border-black rounded-md drop-shadow-md bg-base-100 lg:w-1/4 overflow-y-auto"),pe(o,"class","flex flex-col gap-2 flex-1 lg:flex-row lg:overflow-hidden"),pe(t,"class","flex flex-col space-y-2 lg:h-screen p-8 bg-base-100")},m(P,E){Xe(P,e,E),Xe(P,t,E),ne(t,n),ne(n,r),ne(t,s),ne(t,o),ne(o,a),We(c,a,null),ne(o,u),ne(o,f),We(p,f,null),m=!0},p(P,[E]){const w={};!h&&E&1&&(h=!0,w.curve=P[0],pi(()=>h=!1)),!l&&E&2&&(l=!0,w.surface=P[1],pi(()=>l=!1)),c.$set(w);const D={};!g&&E&1&&(g=!0,D.curve=P[0],pi(()=>g=!1)),!_&&E&2&&(_=!0,D.surface=P[1],pi(()=>_=!1)),p.$set(D)},i(P){m||(de(c.$$.fragment,P),de(p.$$.fragment,P),m=!0)},o(P){ye(c.$$.fragment,P),ye(p.$$.fragment,P),m=!1},d(P){P&&le(e),P&&le(t),je(c),je(p)}}}function Ww(i,e,t){let n=new Zy,r=new Ky;function s(h){n=h,t(0,n)}function o(h){r=h,t(1,r)}function a(h){n=h,t(0,n)}function c(h){r=h,t(1,r)}return[n,r,s,o,a,c]}class Kw extends rn{constructor(e){super(),sn(this,e,Ww,Vw,on,{})}}export{Kw as default};
