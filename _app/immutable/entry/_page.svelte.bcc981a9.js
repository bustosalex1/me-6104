var Hf=Object.defineProperty;var Gf=(i,e,t)=>e in i?Hf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Kn=(i,e,t)=>(Gf(i,typeof e!="symbol"?e+"":e,t),t);import{S as on,i as an,s as un,k as Ae,q as xt,a as Te,l as Ce,m as Ue,r as yt,h as he,c as Pe,n as Re,J as Ti,b as rt,G as re,K as Lt,u as Qs,H as mi,L as ti,M as Js,I as Gt,e as Ln,N as ns,O as ba,P as At,Q as zn,t as Da,R as si,C as zr,D as kr,E as Hr,F as Gr,g as ve,d as be,y as We,z as je,A as qe,B as Xe,T as Vf,v as qn,f as Xn,o as Mc,w as Vn,U as cs,V as Wf,W as za,X as ka,Y as jf,Z as ni,_ as ii}from"../chunks/index.2e4323a1.js";import{w as Yt,d as qf,r as Xf}from"../chunks/index.dc0bf139.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="151",sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yf=0,Ha=1,Zf=2,wc=1,bc=2,Jr=3,Ri=0,gn=1,kn=2,Li=0,Tr=1,Ga=2,Va=3,Wa=4,Kf=5,Dr=100,Qf=101,Jf=102,ja=103,qa=104,$f=200,eh=201,th=202,nh=203,Dc=204,Sc=205,ih=206,rh=207,sh=208,oh=209,ah=210,uh=0,lh=1,ch=2,$o=3,fh=4,hh=5,dh=6,ph=7,Ec=0,mh=1,gh=2,ri=0,_h=1,vh=2,xh=3,Ac=4,yh=5,Cc=300,Rr=301,Ir=302,ea=303,ta=304,$s=306,na=1e3,Hn=1001,ia=1002,cn=1003,Xa=1004,fo=1005,Tn=1006,Mh=1007,rs=1008,Ji=1009,wh=1010,bh=1011,Tc=1012,Dh=1013,Zi=1014,Ki=1015,ss=1016,Sh=1017,Eh=1018,Pr=1020,Ah=1021,Gn=1023,Ch=1024,Th=1025,Qi=1026,Nr=1027,Ph=1028,Fh=1029,Lh=1030,Rh=1031,Ih=1033,ho=33776,po=33777,mo=33778,go=33779,Ya=35840,Za=35841,Ka=35842,Qa=35843,Nh=36196,Ja=37492,$a=37496,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,ou=37814,au=37815,uu=37816,lu=37817,cu=37818,fu=37819,hu=37820,du=37821,_o=36492,Bh=36283,pu=36284,mu=36285,gu=36286,Ii=3e3,St=3001,Uh=3200,Oh=3201,Pc=0,zh=1,$n="srgb",os="srgb-linear",Fc="display-p3",vo=7680,kh=519,_u=35044,vu="300 es",ra=1035;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,sa=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function fn(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function xu(i){return(i&i-1)===0&&i!==0}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gs(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,f,h){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=f,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],f=n[6],h=n[1],l=n[4],u=n[7],c=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],x=r[1],y=r[4],b=r[7],M=r[2],S=r[5],F=r[8];return s[0]=o*_+a*x+f*M,s[3]=o*m+a*y+f*S,s[6]=o*d+a*b+f*F,s[1]=h*_+l*x+u*M,s[4]=h*m+l*y+u*S,s[7]=h*d+l*b+u*F,s[2]=c*_+p*x+g*M,s[5]=c*m+p*y+g*S,s[8]=c*d+p*b+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],f=e[6],h=e[7],l=e[8];return t*o*l-t*a*h-n*s*l+n*a*f+r*s*h-r*o*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],f=e[6],h=e[7],l=e[8],u=l*o-a*h,c=a*f-l*s,p=h*s-o*f,g=t*u+n*c+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*h-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=c*_,e[4]=(l*t-r*f)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*f-h*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const f=Math.cos(s),h=Math.sin(s);return this.set(n*f,n*h,-n*(f*o+h*a)+o+e,-r*h,r*f,-r*(-h*o+f*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new lt;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vh=new lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wh=new lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jh(i){return i.convertSRGBToLinear().applyMatrix3(Wh)}function qh(i){return i.applyMatrix3(Vh).convertLinearToSRGB()}const Xh={[os]:i=>i,[$n]:i=>i.convertSRGBToLinear(),[Fc]:jh},Yh={[os]:i=>i,[$n]:i=>i.convertLinearToSRGB(),[Fc]:qh},yn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return os},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Xh[e],r=Yh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ar;class Rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=as("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ic{constructor(e=null){this.isSource=!0,this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bo(r[o].image)):s.push(bo(r[o]))}else s=bo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class _n extends $i{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=Hn,r=Hn,s=Tn,o=rs,a=Gn,f=Ji,h=_n.DEFAULT_ANISOTROPY,l=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=fs(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=f,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Cc;_n.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const f=e.elements,h=f[0],l=f[4],u=f[8],c=f[1],p=f[5],g=f[9],_=f[2],m=f[6],d=f[10];if(Math.abs(l-c)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,b=(p+1)/2,M=(d+1)/2,S=(l+c)/4,F=(u+_)/4,A=(g+m)/4;return y>b&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=S/n,s=F/n):b>M?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=S/r,s=A/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=F/s,r=A/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(c-l)*(c-l));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(c-l)/x,this.w=Math.acos((h+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ni extends $i{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nc extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kh extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let f=n[r+0],h=n[r+1],l=n[r+2],u=n[r+3];const c=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=f,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=c,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||f!==c||h!==p||l!==g){let m=1-a;const d=f*c+h*p+l*g+u*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const M=Math.sqrt(y),S=Math.atan2(M,d*x);m=Math.sin(m*S)/M,a=Math.sin(a*S)/M}const b=a*x;if(f=f*m+c*b,h=h*m+p*b,l=l*m+g*b,u=u*m+_*b,m===1-a){const M=1/Math.sqrt(f*f+h*h+l*l+u*u);f*=M,h*=M,l*=M,u*=M}}e[t]=f,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],f=n[r+1],h=n[r+2],l=n[r+3],u=s[o],c=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+l*u+f*p-h*c,e[t+1]=f*g+l*c+h*u-a*p,e[t+2]=h*g+l*p+a*c-f*u,e[t+3]=l*g-a*u-f*c-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,f=Math.sin,h=a(n/2),l=a(r/2),u=a(s/2),c=f(n/2),p=f(r/2),g=f(s/2);switch(o){case"XYZ":this._x=c*l*u+h*p*g,this._y=h*p*u-c*l*g,this._z=h*l*g+c*p*u,this._w=h*l*u-c*p*g;break;case"YXZ":this._x=c*l*u+h*p*g,this._y=h*p*u-c*l*g,this._z=h*l*g-c*p*u,this._w=h*l*u+c*p*g;break;case"ZXY":this._x=c*l*u-h*p*g,this._y=h*p*u+c*l*g,this._z=h*l*g+c*p*u,this._w=h*l*u-c*p*g;break;case"ZYX":this._x=c*l*u-h*p*g,this._y=h*p*u+c*l*g,this._z=h*l*g-c*p*u,this._w=h*l*u+c*p*g;break;case"YZX":this._x=c*l*u+h*p*g,this._y=h*p*u+c*l*g,this._z=h*l*g-c*p*u,this._w=h*l*u-c*p*g;break;case"XZY":this._x=c*l*u-h*p*g,this._y=h*p*u-c*l*g,this._z=h*l*g+c*p*u,this._w=h*l*u+c*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],f=t[9],h=t[2],l=t[6],u=t[10],c=n+a+u;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(l-f)*p,this._y=(s-h)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(l-f)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+h)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-h)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(f+l)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+h)/p,this._y=(f+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,f=t._y,h=t._z,l=t._w;return this._x=n*l+o*a+r*h-s*f,this._y=r*l+o*f+s*a-n*h,this._z=s*l+o*h+n*f-r*a,this._w=o*l-n*a-r*f-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const f=1-a*a;if(f<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(f),l=Math.atan2(h,a),u=Math.sin((1-t)*l)/h,c=Math.sin(t*l)/h;return this._w=o*u+this._w*c,this._x=n*u+this._x*c,this._y=r*u+this._y*c,this._z=s*u+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,f=e.w,h=f*t+o*r-a*n,l=f*n+a*t-s*r,u=f*r+s*n-o*t,c=-s*t-o*n-a*r;return this.x=h*f+c*-s+l*-a-u*-o,this.y=l*f+c*-o+u*-s-h*-a,this.z=u*f+c*-a+h*-o-l*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,f=t.z;return this.x=r*f-s*a,this.y=s*o-n*f,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new I,yu=new Xt;class hs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else r.boundingBox===null&&r.computeBoundingBox(),ur.copy(r.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),_s.subVectors(this.max,qr),lr.subVectors(e.a,qr),cr.subVectors(e.b,qr),fr.subVectors(e.c,qr),wi.subVectors(cr,lr),bi.subVectors(fr,cr),zi.subVectors(lr,fr);let t=[0,-wi.z,wi.y,0,-bi.z,bi.y,0,-zi.z,zi.y,wi.z,0,-wi.x,bi.z,0,-bi.x,zi.z,0,-zi.x,-wi.y,wi.x,0,-bi.y,bi.x,0,-zi.y,zi.x,0];return!So(t,lr,cr,fr,_s)||(t=[1,0,0,0,1,0,0,0,1],!So(t,lr,cr,fr,_s))?!1:(vs.crossVectors(wi,bi),t=[vs.x,vs.y,vs.z],So(t,lr,cr,fr,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new I,new I,new I,new I,new I,new I,new I,new I],ui=new I,ur=new hs,lr=new I,cr=new I,fr=new I,wi=new I,bi=new I,zi=new I,qr=new I,_s=new I,vs=new I,ki=new I;function So(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ki.fromArray(i,s);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),f=e.dot(ki),h=t.dot(ki),l=n.dot(ki);if(Math.max(-Math.max(f,h,l),Math.min(f,h,l))>a)return!1}return!0}const Qh=new hs,Xr=new I,Eo=new I;class eo{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Eo)),this.expandByPoint(Xr.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new I,Ao=new I,xs=new I,Di=new I,Co=new I,ys=new I,To=new I;class Ea{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ao.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xs),a=Di.dot(this.direction),f=-Di.dot(xs),h=Di.lengthSq(),l=Math.abs(1-o*o);let u,c,p,g;if(l>0)if(u=o*f-a,c=o*a-f,g=s*l,u>=0)if(c>=-g)if(c<=g){const _=1/l;u*=_,c*=_,p=u*(u+o*c+2*a)+c*(o*u+c+2*f)+h}else c=s,u=Math.max(0,-(o*c+a)),p=-u*u+c*(c+2*f)+h;else c=-s,u=Math.max(0,-(o*c+a)),p=-u*u+c*(c+2*f)+h;else c<=-g?(u=Math.max(0,-(-o*s+a)),c=u>0?-s:Math.min(Math.max(-s,-f),s),p=-u*u+c*(c+2*f)+h):c<=g?(u=0,c=Math.min(Math.max(-s,-f),s),p=c*(c+2*f)+h):(u=Math.max(0,-(o*s+a)),c=u>0?s:Math.min(Math.max(-s,-f),s),p=-u*u+c*(c+2*f)+h);else c=o>0?-s:s,u=Math.max(0,-(o*c+a)),p=-u*u+c*(c+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ao).addScaledVector(xs,c),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),r=li.dot(li)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,f=n+o;return f<0?null:a<0?this.at(f,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,f;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,r=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,r=(e.min.x-c.x)*h),l>=0?(s=(e.min.y-c.y)*l,o=(e.max.y-c.y)*l):(s=(e.max.y-c.y)*l,o=(e.min.y-c.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-c.z)*u,f=(e.max.z-c.z)*u):(a=(e.max.z-c.z)*u,f=(e.min.z-c.z)*u),n>f||a>r)||((a>n||n!==n)&&(n=a),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,r,s){Co.subVectors(t,e),ys.subVectors(n,e),To.crossVectors(Co,ys);let o=this.direction.dot(To),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const f=a*this.direction.dot(ys.crossVectors(Di,ys));if(f<0)return null;const h=a*this.direction.dot(Co.cross(Di));if(h<0||f+h>o)return null;const l=-a*Di.dot(To);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,f,h,l,u,c,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=f,d[2]=h,d[6]=l,d[10]=u,d[14]=c,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),f=Math.cos(r),h=Math.sin(r),l=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const c=o*l,p=o*u,g=a*l,_=a*u;t[0]=f*l,t[4]=-f*u,t[8]=h,t[1]=p+g*h,t[5]=c-_*h,t[9]=-a*f,t[2]=_-c*h,t[6]=g+p*h,t[10]=o*f}else if(e.order==="YXZ"){const c=f*l,p=f*u,g=h*l,_=h*u;t[0]=c+_*a,t[4]=g*a-p,t[8]=o*h,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=p*a-g,t[6]=_+c*a,t[10]=o*f}else if(e.order==="ZXY"){const c=f*l,p=f*u,g=h*l,_=h*u;t[0]=c-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*l,t[9]=_-c*a,t[2]=-o*h,t[6]=a,t[10]=o*f}else if(e.order==="ZYX"){const c=o*l,p=o*u,g=a*l,_=a*u;t[0]=f*l,t[4]=g*h-p,t[8]=c*h+_,t[1]=f*u,t[5]=_*h+c,t[9]=p*h-g,t[2]=-h,t[6]=a*f,t[10]=o*f}else if(e.order==="YZX"){const c=o*f,p=o*h,g=a*f,_=a*h;t[0]=f*l,t[4]=_-c*u,t[8]=g*u+p,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-h*l,t[6]=p*u+g,t[10]=c-_*u}else if(e.order==="XZY"){const c=o*f,p=o*h,g=a*f,_=a*h;t[0]=f*l,t[4]=-u,t[8]=h*l,t[1]=c*u+_,t[5]=o*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*l,t[10]=_*u+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,$h)}lookAt(e,t,n){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Si.crossVectors(n,Mn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Si.crossVectors(n,Mn)),Si.normalize(),Ms.crossVectors(Mn,Si),r[0]=Si.x,r[4]=Ms.x,r[8]=Mn.x,r[1]=Si.y,r[5]=Ms.y,r[9]=Mn.y,r[2]=Si.z,r[6]=Ms.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],f=n[8],h=n[12],l=n[1],u=n[5],c=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],x=n[3],y=n[7],b=n[11],M=n[15],S=r[0],F=r[4],A=r[8],w=r[12],D=r[1],z=r[5],j=r[9],N=r[13],H=r[2],G=r[6],K=r[10],B=r[14],J=r[3],ie=r[7],ce=r[11],ne=r[15];return s[0]=o*S+a*D+f*H+h*J,s[4]=o*F+a*z+f*G+h*ie,s[8]=o*A+a*j+f*K+h*ce,s[12]=o*w+a*N+f*B+h*ne,s[1]=l*S+u*D+c*H+p*J,s[5]=l*F+u*z+c*G+p*ie,s[9]=l*A+u*j+c*K+p*ce,s[13]=l*w+u*N+c*B+p*ne,s[2]=g*S+_*D+m*H+d*J,s[6]=g*F+_*z+m*G+d*ie,s[10]=g*A+_*j+m*K+d*ce,s[14]=g*w+_*N+m*B+d*ne,s[3]=x*S+y*D+b*H+M*J,s[7]=x*F+y*z+b*G+M*ie,s[11]=x*A+y*j+b*K+M*ce,s[15]=x*w+y*N+b*B+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],f=e[9],h=e[13],l=e[2],u=e[6],c=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*f*u-r*h*u-s*a*c+n*h*c+r*a*p-n*f*p)+_*(+t*f*p-t*h*c+s*o*c-r*o*p+r*h*l-s*f*l)+m*(+t*h*u-t*a*p-s*o*u+n*o*p+s*a*l-n*h*l)+d*(-r*a*l-t*f*u+t*a*c+r*o*u-n*o*c+n*f*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],f=e[6],h=e[7],l=e[8],u=e[9],c=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=u*m*h-_*c*h+_*f*p-a*m*p-u*f*d+a*c*d,y=g*c*h-l*m*h-g*f*p+o*m*p+l*f*d-o*c*d,b=l*_*h-g*u*h+g*a*p-o*_*p-l*a*d+o*u*d,M=g*u*f-l*_*f-g*a*c+o*_*c+l*a*m-o*u*m,S=t*x+n*y+r*b+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/S;return e[0]=x*F,e[1]=(_*c*s-u*m*s-_*r*p+n*m*p+u*r*d-n*c*d)*F,e[2]=(a*m*s-_*f*s+_*r*h-n*m*h-a*r*d+n*f*d)*F,e[3]=(u*f*s-a*c*s-u*r*h+n*c*h+a*r*p-n*f*p)*F,e[4]=y*F,e[5]=(l*m*s-g*c*s+g*r*p-t*m*p-l*r*d+t*c*d)*F,e[6]=(g*f*s-o*m*s-g*r*h+t*m*h+o*r*d-t*f*d)*F,e[7]=(o*c*s-l*f*s+l*r*h-t*c*h-o*r*p+t*f*p)*F,e[8]=b*F,e[9]=(g*u*s-l*_*s-g*n*p+t*_*p+l*n*d-t*u*d)*F,e[10]=(o*_*s-g*a*s+g*n*h-t*_*h-o*n*d+t*a*d)*F,e[11]=(l*a*s-o*u*s-l*n*h+t*u*h+o*n*p-t*a*p)*F,e[12]=M*F,e[13]=(l*_*r-g*u*r+g*n*c-t*_*c-l*n*m+t*u*m)*F,e[14]=(g*a*r-o*_*r-g*n*f+t*_*f+o*n*m-t*a*m)*F,e[15]=(o*u*r-l*a*r+l*n*f-t*u*f-o*n*c+t*a*c)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,f=e.z,h=s*o,l=s*a;return this.set(h*o+n,h*a-r*f,h*f+r*a,0,h*a+r*f,l*a+n,l*f-r*o,0,h*f-r*a,l*f+r*o,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,f=t._w,h=s+s,l=o+o,u=a+a,c=s*h,p=s*l,g=s*u,_=o*l,m=o*u,d=a*u,x=f*h,y=f*l,b=f*u,M=n.x,S=n.y,F=n.z;return r[0]=(1-(_+d))*M,r[1]=(p+b)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(p-b)*S,r[5]=(1-(c+d))*S,r[6]=(m+x)*S,r[7]=0,r[8]=(g+y)*F,r[9]=(m-x)*F,r[10]=(1-(c+_))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const o=hr.set(r[4],r[5],r[6]).length(),a=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const h=1/s,l=1/o,u=1/a;return In.elements[0]*=h,In.elements[1]*=h,In.elements[2]*=h,In.elements[4]*=l,In.elements[5]*=l,In.elements[6]*=l,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,f=2*s/(t-e),h=2*s/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),c=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=f,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=h,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,f=1/(t-e),h=1/(n-r),l=1/(o-s),u=(t+e)*f,c=(n+r)*h,p=(o+s)*l;return a[0]=2*f,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new I,In=new Ft,Jh=new I(0,0,0),$h=new I(1,1,1),Si=new I,Ms=new I,Mn=new I,Mu=new Ft,wu=new Xt;class ds{constructor(e=0,t=0,n=0,r=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],f=r[1],h=r[5],l=r[9],u=r[2],c=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ed=0;const bu=new I,dr=new Xt,ci=new Ft,ws=new I,Yr=new I,td=new I,nd=new Xt,Du=new I(1,0,0),Su=new I(0,1,0),Eu=new I(0,0,1),id={type:"added"},Au={type:"removed"};class Tt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new ds,n=new Xt,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new lt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Yr,ws,this.up):ci.lookAt(ws,Yr,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(ci),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(id)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Au)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Au)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,f){return a[f.uuid]===void 0&&(a[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const f=a.shapes;if(Array.isArray(f))for(let h=0,l=f.length;h<l;h++){const u=f[h];s(e.shapes,u)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let f=0,h=this.material.length;f<h;f++)a.push(s(e.materials,this.material[f]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const f=this.animations[a];r.animations.push(s(e.animations,f))}}if(t){const a=o(e.geometries),f=o(e.materials),h=o(e.textures),l=o(e.images),u=o(e.shapes),c=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),c.length>0&&(n.skeletons=c),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const f=[];for(const h in a){const l=a[h];delete l.metadata,f.push(l)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new I,fi=new I,Po=new I,hi=new I,pr=new I,mr=new I,Cu=new I,Fo=new I,Lo=new I,Ro=new I;let bs=!1;class On{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),fi.subVectors(n,t),Po.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(fi),f=Nn.dot(Po),h=fi.dot(fi),l=fi.dot(Po),u=o*h-a*a;if(u===0)return s.set(-2,-1,-1);const c=1/u,p=(h*f-a*l)*c,g=(o*l-a*f)*c;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,n,r,s,o,a,f){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),this.getInterpolation(e,t,n,r,s,o,a,f)}static getInterpolation(e,t,n,r,s,o,a,f){return this.getBarycoord(e,t,n,r,hi),f.setScalar(0),f.addScaledVector(s,hi.x),f.addScaledVector(o,hi.y),f.addScaledVector(a,hi.z),f}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),fi.subVectors(e,t),Nn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;pr.subVectors(r,n),mr.subVectors(s,n),Fo.subVectors(e,n);const f=pr.dot(Fo),h=mr.dot(Fo);if(f<=0&&h<=0)return t.copy(n);Lo.subVectors(e,r);const l=pr.dot(Lo),u=mr.dot(Lo);if(l>=0&&u<=l)return t.copy(r);const c=f*u-l*h;if(c<=0&&f>=0&&l<=0)return o=f/(f-l),t.copy(n).addScaledVector(pr,o);Ro.subVectors(e,s);const p=pr.dot(Ro),g=mr.dot(Ro);if(g>=0&&p<=g)return t.copy(s);const _=p*h-f*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(mr,a);const m=l*g-p*u;if(m<=0&&u-l>=0&&p-g>=0)return Cu.subVectors(s,r),a=(u-l)/(u-l+(p-g)),t.copy(r).addScaledVector(Cu,a);const d=1/(m+_+c);return o=_*d,a=c*d,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rd=0;class Vr extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Tr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dc,this.blendDst=Sc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const f=s[a];delete f.metadata,o.push(f)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=yn.workingColorSpace){return this.r=e,this.g=t,this.b=n,yn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=yn.workingColorSpace){if(e=Hh(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Io(o,s,e+1/3),this.g=Io(o,s,e),this.b=Io(o,s,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const f=parseFloat(s[1])/360,h=parseFloat(s[2])/100,l=parseFloat(s[3])/100;return n(s[4]),this.setHSL(f,h,l,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const n=Bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return yn.fromWorkingColorSpace(tn.copy(this),e),fn(tn.r*255,0,255)<<16^fn(tn.g*255,0,255)<<8^fn(tn.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yn.workingColorSpace){yn.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,s=tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let f,h;const l=(a+o)/2;if(a===o)f=0,h=0;else{const u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:f=(r-s)/u+(r<s?6:0);break;case r:f=(s-n)/u+2;break;case s:f=(n-r)/u+4;break}f/=6}return e.h=f,e.s=h,e.l=l,e}getRGB(e,t=yn.workingColorSpace){return yn.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=$n){yn.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bn),Bn.h+=e,Bn.s+=t,Bn.l+=n,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ds);const n=yo(Bn.h,Ds.h,t),r=yo(Bn.s,Ds.s,t),s=yo(Bn.l,Ds.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new dt;dt.NAMES=Bc;class to extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,Ss=new Je;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uc extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oc extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const En=new Ft,No=new Tt,gr=new I,wn=new hs,Zr=new hs,kt=new I;class Kt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Oc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(wn.min,Zr.min),wn.expandByPoint(kt),kt.addVectors(wn.max,Zr.max),wn.expandByPoint(kt)):(wn.expandByPoint(Zr.min),wn.expandByPoint(Zr.max))}wn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],f=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)kt.fromBufferAttribute(a,h),f&&(gr.fromBufferAttribute(e,h),kt.add(gr)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a),4));const f=this.getAttribute("tangent").array,h=[],l=[];for(let D=0;D<a;D++)h[D]=new I,l[D]=new I;const u=new I,c=new I,p=new I,g=new Je,_=new Je,m=new Je,d=new I,x=new I;function y(D,z,j){u.fromArray(r,D*3),c.fromArray(r,z*3),p.fromArray(r,j*3),g.fromArray(o,D*2),_.fromArray(o,z*2),m.fromArray(o,j*2),c.sub(u),p.sub(u),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(d.copy(c).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),x.copy(p).multiplyScalar(_.x).addScaledVector(c,-m.x).multiplyScalar(N),h[D].add(d),h[z].add(d),h[j].add(d),l[D].add(x),l[z].add(x),l[j].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,z=b.length;D<z;++D){const j=b[D],N=j.start,H=j.count;for(let G=N,K=N+H;G<K;G+=3)y(n[G+0],n[G+1],n[G+2])}const M=new I,S=new I,F=new I,A=new I;function w(D){F.fromArray(s,D*3),A.copy(F);const z=h[D];M.copy(z),M.sub(F.multiplyScalar(F.dot(z))).normalize(),S.crossVectors(A,z);const N=S.dot(l[D])<0?-1:1;f[D*4]=M.x,f[D*4+1]=M.y,f[D*4+2]=M.z,f[D*4+3]=N}for(let D=0,z=b.length;D<z;++D){const j=b[D],N=j.start,H=j.count;for(let G=N,K=N+H;G<K;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,p=n.count;c<p;c++)n.setXYZ(c,0,0,0);const r=new I,s=new I,o=new I,a=new I,f=new I,h=new I,l=new I,u=new I;if(e)for(let c=0,p=e.count;c<p;c+=3){const g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),a.fromBufferAttribute(n,g),f.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),f.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,f.x,f.y,f.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=t.count;c<p;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),n.setXYZ(c+0,l.x,l.y,l.z),n.setXYZ(c+1,l.x,l.y,l.z),n.setXYZ(c+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,f){const h=a.array,l=a.itemSize,u=a.normalized,c=new h.constructor(f.length*l);let p=0,g=0;for(let _=0,m=f.length;_<m;_++){a.isInterleavedBufferAttribute?p=f[_]*a.data.stride+a.offset:p=f[_]*l;for(let d=0;d<l;d++)c[g++]=h[p++]}return new Fn(c,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const a in r){const f=r[a],h=e(f,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const f=[],h=s[a];for(let l=0,u=h.length;l<u;l++){const c=h[l],p=e(c,n);f.push(p)}t.morphAttributes[a]=f}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,f=o.length;a<f;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],l=[];for(let u=0,c=h.length;u<c;u++){const p=h[u];l.push(p.toJSON(e.data))}l.length>0&&(r[f]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const l=r[h];this.setAttribute(h,l.clone(t))}const s=e.morphAttributes;for(const h in s){const l=[],u=s[h];for(let c=0,p=u.length;c<p;c++)l.push(u[c].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,l=o.length;h<l;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new Ft,Qn=new Ea,Es=new eo,Pu=new I,_r=new I,vr=new I,xr=new I,Bo=new I,As=new I,Cs=new Je,Ts=new Je,Ps=new Je,Fu=new I,Lu=new I,Ru=new I,Fs=new I,Ls=new I;class De extends Tt{constructor(e=new Kt,t=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){As.set(0,0,0);for(let f=0,h=s.length;f<h;f++){const l=a[f],u=s[f];l!==0&&(Bo.fromBufferAttribute(u,e),o?As.addScaledVector(Bo,l):As.addScaledVector(Bo.sub(t),l))}t.add(As)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),Es.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Es,Pu)===null||Qn.origin.distanceToSquared(Pu)>(e.far-e.near)**2))||(Tu.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(Tu),n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,f=n.attributes.position,h=n.attributes.uv,l=n.attributes.uv2,u=n.attributes.normal,c=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=c.length;g<_;g++){const m=c[g],d=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,M=y;b<M;b+=3){const S=a.getX(b),F=a.getX(b+1),A=a.getX(b+2);o=Rs(this,d,e,Qn,h,l,u,S,F,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);o=Rs(this,r,e,Qn,h,l,u,x,y,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(r))for(let g=0,_=c.length;g<_;g++){const m=c[g],d=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(f.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,M=y;b<M;b+=3){const S=b,F=b+1,A=b+2;o=Rs(this,d,e,Qn,h,l,u,S,F,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(f.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,y=m+1,b=m+2;o=Rs(this,r,e,Qn,h,l,u,x,y,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function od(i,e,t,n,r,s,o,a){let f;if(e.side===gn?f=n.intersectTriangle(o,s,r,!0,a):f=n.intersectTriangle(r,s,o,e.side===Ri,a),f===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Ls);return h<t.near||h>t.far?null:{distance:h,point:Ls.clone(),object:i}}function Rs(i,e,t,n,r,s,o,a,f,h){i.getVertexPosition(a,_r),i.getVertexPosition(f,vr),i.getVertexPosition(h,xr);const l=od(i,e,t,n,_r,vr,xr,Fs);if(l){r&&(Cs.fromBufferAttribute(r,a),Ts.fromBufferAttribute(r,f),Ps.fromBufferAttribute(r,h),l.uv=On.getInterpolation(Fs,_r,vr,xr,Cs,Ts,Ps,new Je)),s&&(Cs.fromBufferAttribute(s,a),Ts.fromBufferAttribute(s,f),Ps.fromBufferAttribute(s,h),l.uv2=On.getInterpolation(Fs,_r,vr,xr,Cs,Ts,Ps,new Je)),o&&(Fu.fromBufferAttribute(o,a),Lu.fromBufferAttribute(o,f),Ru.fromBufferAttribute(o,h),l.normal=On.getInterpolation(Fs,_r,vr,xr,Fu,Lu,Ru,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:f,c:h,normal:new I,materialIndex:0};On.getNormal(_r,vr,xr,u.normal),l.face=u}return l}class Nt extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const f=[],h=[],l=[],u=[];let c=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(f),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2));function g(_,m,d,x,y,b,M,S,F,A,w){const D=b/F,z=M/A,j=b/2,N=M/2,H=S/2,G=F+1,K=A+1;let B=0,J=0;const ie=new I;for(let ce=0;ce<K;ce++){const ne=ce*z-N;for(let ye=0;ye<G;ye++){const $=ye*D-j;ie[_]=$*x,ie[m]=ne*y,ie[d]=H,h.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[d]=S>0?1:-1,l.push(ie.x,ie.y,ie.z),u.push(ye/F),u.push(1-ce/A),B+=1}}for(let ce=0;ce<A;ce++)for(let ne=0;ne<F;ne++){const ye=c+ne+G*ce,$=c+ne+G*(ce+1),ue=c+(ne+1)+G*(ce+1),xe=c+(ne+1)+G*ce;f.push(ye,$,xe),f.push($,ue,xe),J+=6}a.addGroup(p,J,w),p+=J,c+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=Br(i[t]);for(const r in n)e[r]=n[r]}return e}function ad(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zc(i){return i.getRenderTarget()===null&&i.outputEncoding===St?$n:os}const kc={clone:Br,merge:ln};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ca extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const f=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/f,t-=o.offsetY*n/h,r*=o.width/f,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,Mr=1;class cd extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Dn(yr,Mr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Dn(yr,Mr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dn(yr,Mr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dn(yr,Mr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const f=new Dn(yr,Mr,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const h=new Dn(yr,Mr,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,f,h]=this.children,l=e.getRenderTarget(),u=e.toneMapping,c=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,f),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(l),e.toneMapping=u,e.xr.enabled=c,n.texture.needsPMREMUpdate=!0}}class Hc extends _n{constructor(e,t,n,r,s,o,a,f,h,l){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,r,s,o,a,f,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fd extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nt(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Li});s.uniforms.tEquirect.value=t;const o=new De(r,s),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Tn),new cd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Uo=new I,hd=new I,dd=new lt;class Vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Uo.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dd.getNormalMatrix(e),r=this.coplanarPoint(Uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new eo,Is=new I;class Ta{constructor(e=new Vi,t=new Vi,n=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],f=n[4],h=n[5],l=n[6],u=n[7],c=n[8],p=n[9],g=n[10],_=n[11],m=n[12],d=n[13],x=n[14],y=n[15];return t[0].setComponents(a-r,u-f,_-c,y-m).normalize(),t[1].setComponents(a+r,u+f,_+c,y+m).normalize(),t[2].setComponents(a+s,u+h,_+p,y+d).normalize(),t[3].setComponents(a-s,u-h,_-p,y-d).normalize(),t[4].setComponents(a-o,u-l,_-g,y-x).normalize(),t[5].setComponents(a+o,u+l,_+g,y+x).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Is.x=r.normal.x>0?e.max.x:e.min.x,Is.y=r.normal.y>0?e.max.y:e.min.y,Is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,l){const u=h.array,c=h.usage,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,u,c),h.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version}}function s(h,l,u){const c=l.array,p=l.updateRange;i.bindBuffer(u,h),p.count===-1?i.bufferSubData(u,0,c):(t?i.bufferSubData(u,p.offset*c.BYTES_PER_ELEMENT,c,p.offset,p.count):i.bufferSubData(u,p.offset*c.BYTES_PER_ELEMENT,c.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);l&&(i.deleteBuffer(l.buffer),n.delete(h))}function f(h,l){if(h.isGLBufferAttribute){const c=n.get(h);(!c||c.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u===void 0?n.set(h,r(h,l)):u.version<h.version&&(s(u.buffer,h,l),u.version=h.version)}return{get:o,remove:a,update:f}}class no extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),f=Math.floor(r),h=a+1,l=f+1,u=e/a,c=t/f,p=[],g=[],_=[],m=[];for(let d=0;d<l;d++){const x=d*c-o;for(let y=0;y<h;y++){const b=y*u-s;g.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-d/f)}}for(let d=0;d<f;d++)for(let x=0;x<a;x++){const y=x+h*d,b=x+h*(d+1),M=x+1+h*(d+1),S=x+1+h*d;p.push(y,b,S),p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}var md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md="vec3 transformed = vec3( position );",wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,rp=`#if defined( USE_ENVMAP )
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_UV
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
#endif`,am=`#ifdef USE_UV
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
#endif`,um=`#ifdef USE_UV
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,xm=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Om=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,ut={alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:yd,begin_vertex:Md,beginnormal_vertex:wd,bsdfs:bd,iridescence_fragment:Dd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Td,color_fragment:Pd,color_pars_fragment:Fd,color_pars_vertex:Ld,color_vertex:Rd,common:Id,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Od,emissivemap_fragment:zd,emissivemap_pars_fragment:kd,encodings_fragment:Hd,encodings_pars_fragment:Gd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:jd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:rp,envmap_vertex:Xd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:Kd,fog_pars_fragment:Qd,gradientmap_pars_fragment:Jd,lightmap_fragment:$d,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:up,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:fp,lights_fragment_maps:hp,lights_fragment_end:dp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:Mp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:bp,morphcolor_vertex:Dp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Ap,normal_fragment_begin:Cp,normal_fragment_maps:Tp,normal_pars_fragment:Pp,normal_pars_vertex:Fp,normal_vertex:Lp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Up,output_fragment:Op,packing:zp,premultiplied_alpha_fragment:kp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Xp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Zp,skinbase_vertex:Kp,skinning_pars_vertex:Qp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:em,specularmap_pars_fragment:tm,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:um,worldpos_vertex:lm,background_vert:cm,background_frag:fm,backgroundCube_vert:hm,backgroundCube_frag:dm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:xm,equirect_vert:ym,equirect_frag:Mm,linedashed_vert:wm,linedashed_frag:bm,meshbasic_vert:Dm,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:Tm,meshnormal_vert:Pm,meshnormal_frag:Fm,meshphong_vert:Lm,meshphong_frag:Rm,meshphysical_vert:Im,meshphysical_frag:Nm,meshtoon_vert:Bm,meshtoon_frag:Um,points_vert:Om,points_frag:zm,shadow_vert:km,shadow_frag:Hm,sprite_vert:Gm,sprite_frag:Vm},we={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}}},ei={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new dt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ei.physical={uniforms:ln([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ns={r:0,b:0,g:0};function Wm(i,e,t,n,r,s,o){const a=new dt(0);let f=s===!0?0:1,h,l,u=null,c=0,p=null;function g(m,d){let x=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?_(a,f):y&&y.isColor&&(_(y,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===$s)?(l===void 0&&(l=new De(new Nt(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Br(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=y.encoding!==St,(u!==y||c!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,c=y.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new De(new no(2,2),new gi({name:"BackgroundMaterial",uniforms:Br(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=y.encoding!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||c!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,c=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,d){m.getRGB(Ns,zc(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),f=d,_(a,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,_(a,f)},render:g}}function jm(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},f=m(null);let h=f,l=!1;function u(H,G,K,B,J){let ie=!1;if(o){const ce=_(B,K,G);h!==ce&&(h=ce,p(h.object)),ie=d(H,B,K,J),ie&&x(H,B,K,J)}else{const ce=G.wireframe===!0;(h.geometry!==B.id||h.program!==K.id||h.wireframe!==ce)&&(h.geometry=B.id,h.program=K.id,h.wireframe=ce,ie=!0)}J!==null&&t.update(J,34963),(ie||l)&&(l=!1,A(H,G,K,B),J!==null&&i.bindBuffer(34963,t.get(J).buffer))}function c(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(H){return n.isWebGL2?i.bindVertexArray(H):s.bindVertexArrayOES(H)}function g(H){return n.isWebGL2?i.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function _(H,G,K){const B=K.wireframe===!0;let J=a[H.id];J===void 0&&(J={},a[H.id]=J);let ie=J[G.id];ie===void 0&&(ie={},J[G.id]=ie);let ce=ie[B];return ce===void 0&&(ce=m(c()),ie[B]=ce),ce}function m(H){const G=[],K=[],B=[];for(let J=0;J<r;J++)G[J]=0,K[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:B,object:H,attributes:{},index:null}}function d(H,G,K,B){const J=h.attributes,ie=G.attributes;let ce=0;const ne=K.getAttributes();for(const ye in ne)if(ne[ye].location>=0){const ue=J[ye];let xe=ie[ye];if(xe===void 0&&(ye==="instanceMatrix"&&H.instanceMatrix&&(xe=H.instanceMatrix),ye==="instanceColor"&&H.instanceColor&&(xe=H.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;ce++}return h.attributesNum!==ce||h.index!==B}function x(H,G,K,B){const J={},ie=G.attributes;let ce=0;const ne=K.getAttributes();for(const ye in ne)if(ne[ye].location>=0){let ue=ie[ye];ue===void 0&&(ye==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),ye==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),J[ye]=xe,ce++}h.attributes=J,h.attributesNum=ce,h.index=B}function y(){const H=h.newAttributes;for(let G=0,K=H.length;G<K;G++)H[G]=0}function b(H){M(H,0)}function M(H,G){const K=h.newAttributes,B=h.enabledAttributes,J=h.attributeDivisors;K[H]=1,B[H]===0&&(i.enableVertexAttribArray(H),B[H]=1),J[H]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,G),J[H]=G)}function S(){const H=h.newAttributes,G=h.enabledAttributes;for(let K=0,B=G.length;K<B;K++)G[K]!==H[K]&&(i.disableVertexAttribArray(K),G[K]=0)}function F(H,G,K,B,J,ie){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(H,G,K,J,ie):i.vertexAttribPointer(H,G,K,B,J,ie)}function A(H,G,K,B){if(n.isWebGL2===!1&&(H.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=B.attributes,ie=K.getAttributes(),ce=G.defaultAttributeValues;for(const ne in ie){const ye=ie[ne];if(ye.location>=0){let $=J[ne];if($===void 0&&(ne==="instanceMatrix"&&H.instanceMatrix&&($=H.instanceMatrix),ne==="instanceColor"&&H.instanceColor&&($=H.instanceColor)),$!==void 0){const ue=$.normalized,xe=$.itemSize,ee=t.get($);if(ee===void 0)continue;const V=ee.buffer,ke=ee.type,Ne=ee.bytesPerElement;if($.isInterleavedBufferAttribute){const me=$.data,Fe=me.stride,st=$.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ye.locationSize;Ie++)M(ye.location+Ie,me.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<ye.locationSize;Ie++)b(ye.location+Ie);i.bindBuffer(34962,V);for(let Ie=0;Ie<ye.locationSize;Ie++)F(ye.location+Ie,xe/ye.locationSize,ke,ue,Fe*Ne,(st+xe/ye.locationSize*Ie)*Ne)}else{if($.isInstancedBufferAttribute){for(let me=0;me<ye.locationSize;me++)M(ye.location+me,$.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<ye.locationSize;me++)b(ye.location+me);i.bindBuffer(34962,V);for(let me=0;me<ye.locationSize;me++)F(ye.location+me,xe/ye.locationSize,ke,ue,xe*Ne,xe/ye.locationSize*me*Ne)}}else if(ce!==void 0){const ue=ce[ne];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(ye.location,ue);break;case 3:i.vertexAttrib3fv(ye.location,ue);break;case 4:i.vertexAttrib4fv(ye.location,ue);break;default:i.vertexAttrib1fv(ye.location,ue)}}}}S()}function w(){j();for(const H in a){const G=a[H];for(const K in G){const B=G[K];for(const J in B)g(B[J].object),delete B[J];delete G[K]}delete a[H]}}function D(H){if(a[H.id]===void 0)return;const G=a[H.id];for(const K in G){const B=G[K];for(const J in B)g(B[J].object),delete B[J];delete G[K]}delete a[H.id]}function z(H){for(const G in a){const K=a[G];if(K[H.id]===void 0)continue;const B=K[H.id];for(const J in B)g(B[J].object),delete B[J];delete K[H.id]}}function j(){N(),l=!0,h!==f&&(h=f,p(h.object))}function N(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:u,reset:j,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function qm(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,l){i.drawArrays(s,h,l),t.update(l,s,1)}function f(h,l,u){if(u===0)return;let c,p;if(r)c=i,p="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[p](s,h,l,u),t.update(l,s,u)}this.setMode=o,this.render=a,this.renderInstances=f}function Xm(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const f=s(a);f!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);const h=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),c=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),m=i.getParameter(36347),d=i.getParameter(36348),x=i.getParameter(36349),y=c>0,b=o||e.has("OES_texture_float"),M=y&&b,S=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:c,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:S}}function Ym(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Vi,a=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){const p=u.length!==0||c||n!==0||r;return r=c,n=u.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,c){t=l(u,c,0)},this.setState=function(u,c,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?l(null):h();else{const x=s?0:n,y=x*4;let b=d.clippingState||null;f.value=b,b=l(g,c,y,p);for(let M=0;M!==y;++M)b[M]=t[M];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,c,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=f.value,g!==!0||m===null){const d=p+_*4,x=c.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=p;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zm(i){let e=new WeakMap;function t(o,a){return a===ea?o.mapping=Rr:a===ta&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ea||a===ta)if(e.has(o)){const f=e.get(o).texture;return t(f,o.mapping)}else{const f=o.image;if(f&&f.height>0){const h=new fd(f.height/2);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const f=e.get(a);f!==void 0&&(e.delete(a),f.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pa extends Ca{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=l*this.view.offsetY,f=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,Iu=[.125,.215,.35,.446,.526,.582],qi=20,Oo=new Pa,Nu=new dt;let zo=null;const Wi=(1+Math.sqrt(5))/2,wr=1/Wi,Bu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Wi,wr),new I(0,Wi,-wr),new I(wr,0,Wi),new I(-wr,0,Wi),new I(Wi,wr,0),new I(-Wi,wr,0)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo),e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ss,format:Gn,encoding:Ii,depthBuffer:!1},r=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(s)),this._blurMaterial=Qm(s,e,t)}return r}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,r){const a=new Dn(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,c=l.toneMapping;l.getClearColor(Nu),l.toneMapping=ri,l.autoClear=!1;const p=new to({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new De(new Nt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Nu),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,f[d],0),a.lookAt(h[d],0,0)):x===1?(a.up.set(0,0,f[d]),a.lookAt(0,h[d],0)):(a.up.set(0,f[d],0),a.lookAt(0,0,h[d]));const y=this._cubeSize;Bs(r,x*y,d>2?y:0,y,y),l.setRenderTarget(r),_&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=c,l.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Rr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const f=this._cubeSize;Bs(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bu[(r-1)%Bu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const f=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new De(this._lodPlanes[r],h),c=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qi-1),_=s/g,m=isFinite(s)?1+Math.floor(l*_):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let x=0;for(let F=0;F<qi;++F){const A=F/_,w=Math.exp(-A*A/2);d.push(w),F===0?x+=w:F<m&&(x+=2*w)}for(let F=0;F<d.length;F++)d[F]=d[F]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=d,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const b=this._sizeLods[r],M=3*b*(r>y-Sr?r-y+Sr:0),S=4*(this._cubeSize-b);Bs(t,M,S,3*b,2*b),f.setRenderTarget(t),f.render(u,Oo)}}function Km(i){const e=[],t=[],n=[];let r=i;const s=i-Sr+1+Iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let f=1/a;o>i-Sr?f=Iu[o-i+Sr-1]:o===0&&(f=0),n.push(f);const h=1/(a-2),l=-h,u=1+h,c=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let S=0;S<p;S++){const F=S%3*2/3-1,A=S>2?0:-1,w=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];x.set(w,_*g*S),y.set(c,m*g*S);const D=[S,S,S,S,S,S];b.set(D,d*g*S)}const M=new Kt;M.setAttribute("position",new Fn(x,_)),M.setAttribute("uv",new Fn(y,m)),M.setAttribute("faceIndex",new Fn(b,d)),e.push(M),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ou(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qm(i,e,t){const n=new Float32Array(qi),r=new I(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function zu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ku(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function Jm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const f=a.mapping,h=f===ea||f===ta,l=f===Rr||f===Ir;if(h||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Uu(i)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(h&&u&&u.height>0||l&&u&&r(u)){t===null&&(t=new Uu(i));const c=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",s),c.texture}else return null}}}return a}function r(a){let f=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&f++;return f===h}function s(a){const f=a.target;f.removeEventListener("dispose",s);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $m(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function e0(i,e,t,n){const r={},s=new WeakMap;function o(u){const c=u.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",o),delete r[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(u,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,t.memory.geometries++),c}function f(u){const c=u.attributes;for(const g in c)e.update(c[g],34962);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],34962)}}function h(u){const c=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,b=x.length;y<b;y+=3){const M=x[y+0],S=x[y+1],F=x[y+2];c.push(M,S,S,F,F,M)}}else{const x=g.array;_=g.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const M=y+0,S=y+1,F=y+2;c.push(M,S,S,F,F,M)}}const m=new(Lc(c)?Oc:Uc)(c,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function l(u){const c=s.get(u);if(c){const p=u.index;p!==null&&c.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:a,update:f,getWireframeAttribute:l}}function t0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}let a,f;function h(c){a=c.type,f=c.bytesPerElement}function l(c,p){i.drawElements(s,p,a,c*f),t.update(p,s,1)}function u(c,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,c*f,g),t.update(p,s,g)}this.setMode=o,this.setIndex=h,this.render=l,this.renderInstances=u}function n0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function i0(i,e){return i[0]-e[0]}function r0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function s0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Vt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function f(h,l,u){const c=h.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(l);if(_===void 0||_.count!==g){let H=function(){j.dispose(),s.delete(l),l.removeEventListener("dispose",H)};_!==void 0&&_.texture.dispose();const x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],F=l.morphAttributes.color||[];let A=0;x===!0&&(A=1),y===!0&&(A=2),b===!0&&(A=3);let w=l.attributes.position.count*A,D=1;w>e.maxTextureSize&&(D=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*D*4*g),j=new Nc(z,w,D,g);j.type=Ki,j.needsUpdate=!0;const N=A*4;for(let G=0;G<g;G++){const K=M[G],B=S[G],J=F[G],ie=w*D*4*G;for(let ce=0;ce<K.count;ce++){const ne=ce*N;x===!0&&(o.fromBufferAttribute(K,ce),z[ie+ne+0]=o.x,z[ie+ne+1]=o.y,z[ie+ne+2]=o.z,z[ie+ne+3]=0),y===!0&&(o.fromBufferAttribute(B,ce),z[ie+ne+4]=o.x,z[ie+ne+5]=o.y,z[ie+ne+6]=o.z,z[ie+ne+7]=0),b===!0&&(o.fromBufferAttribute(J,ce),z[ie+ne+8]=o.x,z[ie+ne+9]=o.y,z[ie+ne+10]=o.z,z[ie+ne+11]=J.itemSize===4?o.w:1)}}_={count:g,texture:j,size:new Je(w,D)},s.set(l,_),l.addEventListener("dispose",H)}let m=0;for(let x=0;x<c.length;x++)m+=c[x];const d=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",c),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=c===void 0?0:c.length;let g=n[l.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[l.id]=g}for(let y=0;y<p;y++){const b=g[y];b[0]=y,b[1]=c[y]}g.sort(r0);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(i0);const _=l.morphAttributes.position,m=l.morphAttributes.normal;let d=0;for(let y=0;y<8;y++){const b=a[y],M=b[0],S=b[1];M!==Number.MAX_SAFE_INTEGER&&S?(_&&l.getAttribute("morphTarget"+y)!==_[M]&&l.setAttribute("morphTarget"+y,_[M]),m&&l.getAttribute("morphNormal"+y)!==m[M]&&l.setAttribute("morphNormal"+y,m[M]),r[y]=S,d+=S):(_&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),m&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),r[y]=0)}const x=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:f}}function o0(i,e,t,n){let r=new WeakMap;function s(f){const h=n.render.frame,l=f.geometry,u=e.get(f,l);return r.get(u)!==h&&(e.update(u),r.set(u,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",a)===!1&&f.addEventListener("dispose",a),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),u}function o(){r=new WeakMap}function a(f){const h=f.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const Vc=new _n,Wc=new Nc,jc=new Kh,qc=new Hc,Hu=[],Gu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),ju=new Float32Array(4);function Wr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hu[r];if(s===void 0&&(s=new Float32Array(r),Hu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function io(i,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function f0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),zt(t,n)}}function h0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),zt(t,n)}}function d0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),zt(t,n)}}function p0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function v0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function w0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Vc,r)}function b0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jc,r)}function D0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||qc,r)}function S0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wc,r)}function E0(i){switch(i){case 5126:return a0;case 35664:return u0;case 35665:return l0;case 35666:return c0;case 35674:return f0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return S0}}function A0(i,e){i.uniform1fv(this.addr,e)}function C0(i,e){const t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function T0(i,e){const t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function P0(i,e){const t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function F0(i,e){const t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L0(i,e){const t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R0(i,e){const t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I0(i,e){i.uniform1iv(this.addr,e)}function N0(i,e){i.uniform2iv(this.addr,e)}function B0(i,e){i.uniform3iv(this.addr,e)}function U0(i,e){i.uniform4iv(this.addr,e)}function O0(i,e){i.uniform1uiv(this.addr,e)}function z0(i,e){i.uniform2uiv(this.addr,e)}function k0(i,e){i.uniform3uiv(this.addr,e)}function H0(i,e){i.uniform4uiv(this.addr,e)}function G0(i,e,t){const n=this.cache,r=e.length,s=io(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Vc,s[o])}function V0(i,e,t){const n=this.cache,r=e.length,s=io(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||jc,s[o])}function W0(i,e,t){const n=this.cache,r=e.length,s=io(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qc,s[o])}function j0(i,e,t){const n=this.cache,r=e.length,s=io(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wc,s[o])}function q0(i){switch(i){case 5126:return A0;case 35664:return C0;case 35665:return T0;case 35666:return P0;case 35674:return F0;case 35675:return L0;case 35676:return R0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return B0;case 35669:case 35673:return U0;case 5125:return O0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return j0}}class X0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=E0(t.type)}}class Y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=q0(t.type)}}class Z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function qu(i,e){i.seq.push(e),i.map[e.id]=e}function K0(i,e,t){const n=i.name,r=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),o=ko.lastIndex;let a=s[1];const f=s[2]==="]",h=s[3];if(f&&(a=a|0),h===void 0||h==="["&&o+2===r){qu(t,h===void 0?new X0(a,i,e):new Y0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Z0(a),qu(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);K0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],f=n[a.id];f.needsUpdate!==!1&&a.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Q0=0;function J0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $0(i){switch(i){case Ii:return["Linear","( value )"];case St:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Yu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+J0(i.getShaderSource(e),o)}else return r}function eg(i,e){const t=$0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tg(i,e){let t;switch(e){case _h:t="Linear";break;case vh:t="Reinhard";break;case xh:t="OptimizedCineon";break;case Ac:t="ACESFilmic";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ng(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function Zu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(i){return i.replace(sg,og)}function og(i,e){const t=ut[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oa(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(ag,ug)}function ug(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ju(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jr&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Ir:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function dg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const f=lg(t),h=cg(t),l=fg(t),u=hg(t),c=dg(t),p=t.isWebGL2?"":ng(t),g=ig(s),_=r.createProgram();let m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter($r).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter($r).join(`
`),d.length>0&&(d+=`
`)):(m=[Ju(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),d=[p,Ju(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ut.tonemapping_pars_fragment:"",t.toneMapping!==ri?tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.encodings_pars_fragment,eg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=oa(o),o=Zu(o,t),o=Ku(o,t),a=oa(a),a=Zu(a,t),a=Ku(a,t),o=Qu(o),a=Qu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+m+o,b=x+d+a,M=Xu(r,35633,y),S=Xu(r,35632,b);if(r.attachShader(_,M),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(M).trim(),z=r.getShaderInfoLog(S).trim();let j=!0,N=!0;if(r.getProgramParameter(_,35714)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,S);else{const H=Yu(r,M,"vertex"),G=Yu(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+w+`
`+H+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||z==="")&&(N=!1);N&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:d}})}r.deleteShader(M),r.deleteShader(S);let F;this.getUniforms=function(){return F===void 0&&(F=new Gs(r,_)),F};let A;return this.getAttributes=function(){return A===void 0&&(A=rg(r,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _g(e),t.set(e,n)),n}}class _g{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}}function vg(i,e,t,n,r,s,o){const a=new Aa,f=new gg,h=[],l=r.isWebGL2,u=r.logarithmicDepthBuffer,c=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===1?"uv2":"uv"}function m(w,D,z,j,N){const H=j.fog,G=N.geometry,K=w.isMeshStandardMaterial?j.environment:null,B=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),J=B&&B.mapping===$s?B.image.height:null,ie=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=ce!==void 0?ce.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let $,ue,xe,ee;if(ie){const pe=ei[ie];$=pe.vertexShader,ue=pe.fragmentShader}else $=w.vertexShader,ue=w.fragmentShader,f.update(w),xe=f.getVertexShaderID(w),ee=f.getFragmentShaderID(w);const V=i.getRenderTarget(),ke=N.isInstancedMesh===!0,Ne=!!w.map,me=!!w.matcap,Fe=!!B,st=!!w.aoMap,Ie=!!w.lightMap,Ye=!!w.bumpMap,ft=!!w.normalMap,gt=!!w.displacementMap,Mt=!!w.emissiveMap,pt=!!w.metalnessMap,$e=!!w.roughnessMap,ct=w.clearcoat>0,_t=w.iridescence>0,P=w.sheen>0,v=w.transmission>0,E=ct&&!!w.clearcoatMap,R=ct&&!!w.clearcoatNormalMap,O=ct&&!!w.clearcoatRoughnessMap,W=_t&&!!w.iridescenceMap,C=_t&&!!w.iridescenceThicknessMap,k=P&&!!w.sheenColorMap,L=P&&!!w.sheenRoughnessMap,q=!!w.specularMap,oe=!!w.specularColorMap,de=!!w.specularIntensityMap,Q=v&&!!w.transmissionMap,Me=v&&!!w.thicknessMap,Ee=!!w.gradientMap,Se=!!w.alphaMap,Be=w.alphaTest>0,U=!!w.extensions,Y=!!G.attributes.uv2;return{isWebGL2:l,shaderID:ie,shaderName:w.type,vertexShader:$,fragmentShader:ue,defines:w.defines,customVertexShaderID:xe,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:ke,instancingColor:ke&&N.instanceColor!==null,supportsVertexTextures:c,outputEncoding:V===null?i.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Ii,map:Ne,matcap:me,envMap:Fe,envMapMode:Fe&&B.mapping,envMapCubeUVHeight:J,aoMap:st,lightMap:Ie,bumpMap:Ye,normalMap:ft,displacementMap:c&&gt,emissiveMap:Mt,normalMapObjectSpace:ft&&w.normalMapType===zh,normalMapTangentSpace:ft&&w.normalMapType===Pc,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&w.map.encoding===St,metalnessMap:pt,roughnessMap:$e,clearcoat:ct,clearcoatMap:E,clearcoatNormalMap:R,clearcoatRoughnessMap:O,iridescence:_t,iridescenceMap:W,iridescenceThicknessMap:C,sheen:P,sheenColorMap:k,sheenRoughnessMap:L,specularMap:q,specularColorMap:oe,specularIntensityMap:de,transmission:v,transmissionMap:Q,thicknessMap:Me,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===Tr,alphaMap:Se,alphaTest:Be,combine:w.combine,mapUv:Ne&&_(w.map.channel),aoMapUv:st&&_(w.aoMap.channel),lightMapUv:Ie&&_(w.lightMap.channel),bumpMapUv:Ye&&_(w.bumpMap.channel),normalMapUv:ft&&_(w.normalMap.channel),displacementMapUv:gt&&_(w.displacementMap.channel),emissiveMapUv:Mt&&_(w.emissiveMap.channel),metalnessMapUv:pt&&_(w.metalnessMap.channel),roughnessMapUv:$e&&_(w.roughnessMap.channel),clearcoatMapUv:E&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:R&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:C&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:k&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(w.sheenRoughnessMap.channel),specularMapUv:q&&_(w.specularMap.channel),specularColorMapUv:oe&&_(w.specularColorMap.channel),specularIntensityMapUv:de&&_(w.specularIntensityMap.channel),transmissionMapUv:Q&&_(w.transmissionMap.channel),thicknessMapUv:Me&&_(w.thicknessMap.channel),alphaMapUv:Se&&_(w.alphaMap.channel),vertexTangents:ft&&!!G.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs2:Y,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ne||Se),fog:!!H,useFog:w.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:w.toneMapped?i.toneMapping:ri,useLegacyLights:i.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===kn,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:U&&w.extensions.derivatives===!0,extensionFragDepth:U&&w.extensions.fragDepth===!0,extensionDrawBuffers:U&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)D.push(z),D.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(x(D,w),y(D,w),D.push(i.outputEncoding)),D.push(w.customProgramCacheKey),D.join()}function x(w,D){w.push(D.precision),w.push(D.outputEncoding),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function y(w,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUvs2&&a.enable(13),D.vertexTangents&&a.enable(14),w.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.decodeVideoTexture&&a.enable(17),D.opaque&&a.enable(18),D.pointsUvs&&a.enable(19),w.push(a.mask)}function b(w){const D=g[w.type];let z;if(D){const j=ei[D];z=kc.clone(j.uniforms)}else z=w.uniforms;return z}function M(w,D){let z;for(let j=0,N=h.length;j<N;j++){const H=h[j];if(H.cacheKey===D){z=H,++z.usedTimes;break}}return z===void 0&&(z=new pg(i,D,w,s),h.push(z)),z}function S(w){if(--w.usedTimes===0){const D=h.indexOf(w);h[D]=h[h.length-1],h.pop(),w.destroy()}}function F(w){f.remove(w)}function A(){f.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:S,releaseShaderCache:F,programs:h,dispose:A}}function xg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function el(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,c,p,g,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:c,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=c,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,c,p,g,_,m){const d=o(u,c,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function f(u,c,p,g,_,m){const d=o(u,c,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function h(u,c){t.length>1&&t.sort(u||yg),n.length>1&&n.sort(c||$u),r.length>1&&r.sort(c||$u)}function l(){for(let u=e,c=i.length;u<c;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:f,finish:l,sort:h}}function Mg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new el,i.set(n,[o])):r>=s.length?(o=new el,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new dt};break;case"SpotLight":t={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function bg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dg=0;function Sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Eg(i,e){const t=new wg,n=bg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)r.probe.push(new I);const s=new I,o=new Ft,a=new Ft;function f(l,u){let c=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,m=0,d=0,x=0,y=0,b=0,M=0,S=0,F=0,A=0;l.sort(Sg);const w=u===!0?Math.PI:1;for(let z=0,j=l.length;z<j;z++){const N=l[z],H=N.color,G=N.intensity,K=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=H.r*G*w,p+=H.g*G*w,g+=H.b*G*w;else if(N.isLightProbe)for(let J=0;J<9;J++)r.probe[J].addScaledVector(N.sh.coefficients[J],G);else if(N.isDirectionalLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const ie=N.shadow,ce=n.get(N);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.directionalShadow[_]=ce,r.directionalShadowMap[_]=B,r.directionalShadowMatrix[_]=N.shadow.matrix,b++}r.directional[_]=J,_++}else if(N.isSpotLight){const J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(H).multiplyScalar(G*w),J.distance=K,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,r.spot[d]=J;const ie=N.shadow;if(N.map&&(r.spotLightMap[F]=N.map,F++,ie.updateMatrices(N),N.castShadow&&A++),r.spotLightMatrix[d]=ie.matrix,N.castShadow){const ce=n.get(N);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,r.spotShadow[d]=ce,r.spotShadowMap[d]=B,S++}d++}else if(N.isRectAreaLight){const J=t.get(N);J.color.copy(H).multiplyScalar(G),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=J,x++}else if(N.isPointLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*w),J.distance=N.distance,J.decay=N.decay,N.castShadow){const ie=N.shadow,ce=n.get(N);ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=N.shadow.matrix,M++}r.point[m]=J,m++}else if(N.isHemisphereLight){const J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(G*w),J.groundColor.copy(N.groundColor).multiplyScalar(G*w),r.hemi[y]=J,y++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==d||D.rectAreaLength!==x||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==F)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=S+F-A,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=A,D.directionalLength=_,D.pointLength=m,D.spotLength=d,D.rectAreaLength=x,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=F,r.version=Dg++)}function h(l,u){let c=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){const b=l[x];if(b.isDirectionalLight){const M=r.directional[c];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),c++}else if(b.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:f,setupView:h,state:r}}function tl(i,e){const t=new Eg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function f(u){t.setup(n,u)}function h(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:f,setupLightsView:h,pushLight:o,pushShadow:a}}function Ag(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let f;return a===void 0?(f=new tl(i,e),t.set(s,[f])):o>=a.length?(f=new tl(i,e),a.push(f)):f=a[o],f}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cg extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tg extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Lg(i,e,t){let n=new Ta;const r=new Je,s=new Je,o=new Vt,a=new Cg({depthPacking:Oh}),f=new Tg,h={},l=t.maxTextureSize,u={[Ri]:gn,[gn]:Ri,[kn]:kn},c=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Pg,fragmentShader:Fg}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc,this.render=function(b,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const F=i.getRenderTarget(),A=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,j=b.length;z<j;z++){const N=b[z],H=N.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const G=H.getFrameExtents();if(r.multiply(G),s.copy(H.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/G.x),r.x=s.x*G.x,H.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/G.y),r.y=s.y*G.y,H.mapSize.y=s.y)),H.map===null){const B=this.type!==Jr?{minFilter:cn,magFilter:cn}:{};H.map=new Ni(r.x,r.y,B),H.map.texture.name=N.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const K=H.getViewportCount();for(let B=0;B<K;B++){const J=H.getViewport(B);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(o),H.updateMatrices(N,B),n=H.getFrustum(),y(M,S,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===Jr&&d(H,S),H.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(F,A,w)};function d(b,M){const S=e.update(_);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ni(r.x,r.y)),c.uniforms.shadow_pass.value=b.map.texture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,S,c,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,S,p,_,null)}function x(b,M,S,F){let A=null;const w=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)A=w;else if(A=S.isPointLight===!0?f:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=A.uuid,z=M.uuid;let j=h[D];j===void 0&&(j={},h[D]=j);let N=j[z];N===void 0&&(N=A.clone(),j[z]=N),A=N}if(A.visible=M.visible,A.wireframe=M.wireframe,F===Jr?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:u[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=i.properties.get(A);D.light=S}return A}function y(b,M,S,F,A){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Jr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const z=e.update(b),j=b.material;if(Array.isArray(j)){const N=z.groups;for(let H=0,G=N.length;H<G;H++){const K=N[H],B=j[K.materialIndex];if(B&&B.visible){const J=x(b,B,F,A);i.renderBufferDirect(S,null,z,J,b,K)}}}else if(j.visible){const N=x(b,j,F,A);i.renderBufferDirect(S,null,z,N,b,null)}}const D=b.children;for(let z=0,j=D.length;z<j;z++)y(D[z],M,S,F,A)}}function Rg(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const Y=new Vt;let se=null;const pe=new Vt(0,0,0,0);return{setMask:function(ge){se!==ge&&!U&&(i.colorMask(ge,ge,ge,ge),se=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ot,Oe,_e,et){et===!0&&(ge*=_e,ot*=_e,Oe*=_e),Y.set(ge,ot,Oe,_e),pe.equals(Y)===!1&&(i.clearColor(ge,ot,Oe,_e),pe.copy(Y))},reset:function(){U=!1,se=null,pe.set(-1,0,0,0)}}}function s(){let U=!1,Y=null,se=null,pe=null;return{setTest:function(ge){ge?V(2929):ke(2929)},setMask:function(ge){Y!==ge&&!U&&(i.depthMask(ge),Y=ge)},setFunc:function(ge){if(se!==ge){switch(ge){case uh:i.depthFunc(512);break;case lh:i.depthFunc(519);break;case ch:i.depthFunc(513);break;case $o:i.depthFunc(515);break;case fh:i.depthFunc(514);break;case hh:i.depthFunc(518);break;case dh:i.depthFunc(516);break;case ph:i.depthFunc(517);break;default:i.depthFunc(515)}se=ge}},setLocked:function(ge){U=ge},setClear:function(ge){pe!==ge&&(i.clearDepth(ge),pe=ge)},reset:function(){U=!1,Y=null,se=null,pe=null}}}function o(){let U=!1,Y=null,se=null,pe=null,ge=null,ot=null,Oe=null,_e=null,et=null;return{setTest:function(fe){U||(fe?V(2960):ke(2960))},setMask:function(fe){Y!==fe&&!U&&(i.stencilMask(fe),Y=fe)},setFunc:function(fe,vt,Wt){(se!==fe||pe!==vt||ge!==Wt)&&(i.stencilFunc(fe,vt,Wt),se=fe,pe=vt,ge=Wt)},setOp:function(fe,vt,Wt){(ot!==fe||Oe!==vt||_e!==Wt)&&(i.stencilOp(fe,vt,Wt),ot=fe,Oe=vt,_e=Wt)},setLocked:function(fe){U=fe},setClear:function(fe){et!==fe&&(i.clearStencil(fe),et=fe)},reset:function(){U=!1,Y=null,se=null,pe=null,ge=null,ot=null,Oe=null,_e=null,et=null}}}const a=new r,f=new s,h=new o,l=new WeakMap,u=new WeakMap;let c={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,b=null,M=null,S=null,F=null,A=null,w=!1,D=null,z=null,j=null,N=null,H=null;const G=i.getParameter(35661);let K=!1,B=0;const J=i.getParameter(7938);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=B>=2);let ie=null,ce={};const ne=i.getParameter(3088),ye=i.getParameter(2978),$=new Vt().fromArray(ne),ue=new Vt().fromArray(ye);function xe(U,Y,se){const pe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(U,ge),i.texParameteri(U,10241,9728),i.texParameteri(U,10240,9728);for(let ot=0;ot<se;ot++)i.texImage2D(Y+ot,0,6408,1,1,0,6408,5121,pe);return ge}const ee={};ee[3553]=xe(3553,3553,1),ee[34067]=xe(34067,34069,6),a.setClear(0,0,0,1),f.setClear(1),h.setClear(0),V(2929),f.setFunc($o),gt(!1),Mt(Ha),V(2884),Ye(Li);function V(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function ke(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Ne(U,Y){return p[U]!==Y?(i.bindFramebuffer(U,Y),p[U]=Y,n&&(U===36009&&(p[36160]=Y),U===36160&&(p[36009]=Y)),!0):!1}function me(U,Y){let se=_,pe=!1;if(U)if(se=g.get(Y),se===void 0&&(se=[],g.set(Y,se)),U.isWebGLMultipleRenderTargets){const ge=U.texture;if(se.length!==ge.length||se[0]!==36064){for(let ot=0,Oe=ge.length;ot<Oe;ot++)se[ot]=36064+ot;se.length=ge.length,pe=!0}}else se[0]!==36064&&(se[0]=36064,pe=!0);else se[0]!==1029&&(se[0]=1029,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Fe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const st={[Dr]:32774,[Qf]:32778,[Jf]:32779};if(n)st[ja]=32775,st[qa]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(st[ja]=U.MIN_EXT,st[qa]=U.MAX_EXT)}const Ie={[$f]:0,[eh]:1,[th]:768,[Dc]:770,[ah]:776,[sh]:774,[ih]:772,[nh]:769,[Sc]:771,[oh]:775,[rh]:773};function Ye(U,Y,se,pe,ge,ot,Oe,_e){if(U===Li){d===!0&&(ke(3042),d=!1);return}if(d===!1&&(V(3042),d=!0),U!==Kf){if(U!==x||_e!==w){if((y!==Dr||S!==Dr)&&(i.blendEquation(32774),y=Dr,S=Dr),_e)switch(U){case Tr:i.blendFuncSeparate(1,771,1,771);break;case Ga:i.blendFunc(1,1);break;case Va:i.blendFuncSeparate(0,769,0,1);break;case Wa:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Tr:i.blendFuncSeparate(770,771,1,771);break;case Ga:i.blendFunc(770,1);break;case Va:i.blendFuncSeparate(0,769,0,1);break;case Wa:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,F=null,A=null,x=U,w=_e}return}ge=ge||Y,ot=ot||se,Oe=Oe||pe,(Y!==y||ge!==S)&&(i.blendEquationSeparate(st[Y],st[ge]),y=Y,S=ge),(se!==b||pe!==M||ot!==F||Oe!==A)&&(i.blendFuncSeparate(Ie[se],Ie[pe],Ie[ot],Ie[Oe]),b=se,M=pe,F=ot,A=Oe),x=U,w=!1}function ft(U,Y){U.side===kn?ke(2884):V(2884);let se=U.side===gn;Y&&(se=!se),gt(se),U.blending===Tr&&U.transparent===!1?Ye(Li):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),f.setFunc(U.depthFunc),f.setTest(U.depthTest),f.setMask(U.depthWrite),a.setMask(U.colorWrite);const pe=U.stencilWrite;h.setTest(pe),pe&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?V(32926):ke(32926)}function gt(U){D!==U&&(U?i.frontFace(2304):i.frontFace(2305),D=U)}function Mt(U){U!==Yf?(V(2884),U!==z&&(U===Ha?i.cullFace(1029):U===Zf?i.cullFace(1028):i.cullFace(1032))):ke(2884),z=U}function pt(U){U!==j&&(K&&i.lineWidth(U),j=U)}function $e(U,Y,se){U?(V(32823),(N!==Y||H!==se)&&(i.polygonOffset(Y,se),N=Y,H=se)):ke(32823)}function ct(U){U?V(3089):ke(3089)}function _t(U){U===void 0&&(U=33984+G-1),ie!==U&&(i.activeTexture(U),ie=U)}function P(U,Y,se){se===void 0&&(ie===null?se=33984+G-1:se=ie);let pe=ce[se];pe===void 0&&(pe={type:void 0,texture:void 0},ce[se]=pe),(pe.type!==U||pe.texture!==Y)&&(ie!==se&&(i.activeTexture(se),ie=se),i.bindTexture(U,Y||ee[U]),pe.type=U,pe.texture=Y)}function v(){const U=ce[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function C(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(U){$.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function Me(U){ue.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function Ee(U,Y){let se=u.get(Y);se===void 0&&(se=new WeakMap,u.set(Y,se));let pe=se.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(Y,U.name),se.set(U,pe))}function Se(U,Y){const pe=u.get(Y).get(U);l.get(Y)!==pe&&(i.uniformBlockBinding(Y,pe,U.__bindingPointIndex),l.set(Y,pe))}function Be(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ie=null,ce={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,b=null,M=null,S=null,F=null,A=null,w=!1,D=null,z=null,j=null,N=null,H=null,$.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),f.reset(),h.reset()}return{buffers:{color:a,depth:f,stencil:h},enable:V,disable:ke,bindFramebuffer:Ne,drawBuffers:me,useProgram:Fe,setBlending:Ye,setMaterial:ft,setFlipSided:gt,setCullFace:Mt,setLineWidth:pt,setPolygonOffset:$e,setScissorTest:ct,activeTexture:_t,bindTexture:P,unbindTexture:v,compressedTexImage2D:E,compressedTexImage3D:R,texImage2D:oe,texImage3D:de,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:L,texStorage3D:q,texSubImage2D:O,texSubImage3D:W,compressedTexSubImage2D:C,compressedTexSubImage3D:k,scissor:Q,viewport:Me,reset:Be}}function Ig(i,e,t,n,r,s,o){const a=r.isWebGL2,f=r.maxTextures,h=r.maxCubemapSize,l=r.maxTextureSize,u=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return d?new OffscreenCanvas(P,v):as("canvas")}function y(P,v,E,R){let O=1;if((P.width>R||P.height>R)&&(O=R/Math.max(P.width,P.height)),O<1||v===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const W=v?Gh:Math.floor,C=W(O*P.width),k=W(O*P.height);_===void 0&&(_=x(C,k));const L=E?x(C,k):_;return L.width=C,L.height=k,L.getContext("2d").drawImage(P,0,0,C,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+C+"x"+k+")."),L}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return xu(P.width)&&xu(P.height)}function M(P){return a?!1:P.wrapS!==Hn||P.wrapT!==Hn||P.minFilter!==cn&&P.minFilter!==Tn}function S(P,v){return P.generateMipmaps&&v&&P.minFilter!==cn&&P.minFilter!==Tn}function F(P){i.generateMipmap(P)}function A(P,v,E,R,O=!1){if(a===!1)return v;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let W=v;return v===6403&&(E===5126&&(W=33326),E===5131&&(W=33325),E===5121&&(W=33321)),v===33319&&(E===5126&&(W=33328),E===5131&&(W=33327),E===5121&&(W=33323)),v===6408&&(E===5126&&(W=34836),E===5131&&(W=34842),E===5121&&(W=R===St&&O===!1?35907:32856),E===32819&&(W=32854),E===32820&&(W=32855)),(W===33325||W===33326||W===33327||W===33328||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function w(P,v,E){return S(P,E)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function D(P){return P===cn||P===Xa||P===fo?9728:9729}function z(P){const v=P.target;v.removeEventListener("dispose",z),N(v),v.isVideoTexture&&g.delete(v)}function j(P){const v=P.target;v.removeEventListener("dispose",j),G(v)}function N(P){const v=n.get(P);if(v.__webglInit===void 0)return;const E=P.source,R=m.get(E);if(R){const O=R[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&H(P),Object.keys(R).length===0&&m.delete(E)}n.remove(P)}function H(P){const v=n.get(P);i.deleteTexture(v.__webglTexture);const E=P.source,R=m.get(E);delete R[v.__cacheKey],o.memory.textures--}function G(P){const v=P.texture,E=n.get(P),R=n.get(v);if(R.__webglTexture!==void 0&&(i.deleteTexture(R.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let O=0;O<6;O++)i.deleteFramebuffer(E.__webglFramebuffer[O]),E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[O]);else{if(i.deleteFramebuffer(E.__webglFramebuffer),E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let O=0;O<E.__webglColorRenderbuffer.length;O++)E.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[O]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let O=0,W=v.length;O<W;O++){const C=n.get(v[O]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),o.memory.textures--),n.remove(v[O])}n.remove(v),n.remove(P)}let K=0;function B(){K=0}function J(){const P=K;return P>=f&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+f),K+=1,P}function ie(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.encoding),v.join()}function ce(P,v){const E=n.get(P);if(P.isVideoTexture&&ct(P),P.isRenderTargetTexture===!1&&P.version>0&&E.__version!==P.version){const R=P.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(E,P,v);return}}t.bindTexture(3553,E.__webglTexture,33984+v)}function ne(P,v){const E=n.get(P);if(P.version>0&&E.__version!==P.version){ke(E,P,v);return}t.bindTexture(35866,E.__webglTexture,33984+v)}function ye(P,v){const E=n.get(P);if(P.version>0&&E.__version!==P.version){ke(E,P,v);return}t.bindTexture(32879,E.__webglTexture,33984+v)}function $(P,v){const E=n.get(P);if(P.version>0&&E.__version!==P.version){Ne(E,P,v);return}t.bindTexture(34067,E.__webglTexture,33984+v)}const ue={[na]:10497,[Hn]:33071,[ia]:33648},xe={[cn]:9728,[Xa]:9984,[fo]:9986,[Tn]:9729,[Mh]:9985,[rs]:9987};function ee(P,v,E){if(E?(i.texParameteri(P,10242,ue[v.wrapS]),i.texParameteri(P,10243,ue[v.wrapT]),(P===32879||P===35866)&&i.texParameteri(P,32882,ue[v.wrapR]),i.texParameteri(P,10240,xe[v.magFilter]),i.texParameteri(P,10241,xe[v.minFilter])):(i.texParameteri(P,10242,33071),i.texParameteri(P,10243,33071),(P===32879||P===35866)&&i.texParameteri(P,32882,33071),(v.wrapS!==Hn||v.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,10240,D(v.magFilter)),i.texParameteri(P,10241,D(v.minFilter)),v.minFilter!==cn&&v.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===cn||v.minFilter!==fo&&v.minFilter!==rs||v.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ss&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(P,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function V(P,v){let E=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",z));const R=v.source;let O=m.get(R);O===void 0&&(O={},m.set(R,O));const W=ie(v);if(W!==P.__cacheKey){O[W]===void 0&&(O[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,E=!0),O[W].usedTimes++;const C=O[P.__cacheKey];C!==void 0&&(O[P.__cacheKey].usedTimes--,C.usedTimes===0&&H(v)),P.__cacheKey=W,P.__webglTexture=O[W].texture}return E}function ke(P,v,E){let R=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(R=35866),v.isData3DTexture&&(R=32879);const O=V(P,v),W=v.source;t.bindTexture(R,P.__webglTexture,33984+E);const C=n.get(W);if(W.version!==C.__version||O===!0){t.activeTexture(33984+E),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const k=M(v)&&b(v.image)===!1;let L=y(v.image,k,!1,l);L=_t(v,L);const q=b(L)||a,oe=s.convert(v.format,v.encoding);let de=s.convert(v.type),Q=A(v.internalFormat,oe,de,v.encoding,v.isVideoTexture);ee(R,v,q);let Me;const Ee=v.mipmaps,Se=a&&v.isVideoTexture!==!0,Be=C.__version===void 0||O===!0,U=w(v,L,q);if(v.isDepthTexture)Q=6402,a?v.type===Ki?Q=36012:v.type===Zi?Q=33190:v.type===Pr?Q=35056:Q=33189:v.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Qi&&Q===6402&&v.type!==Tc&&v.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Zi,de=s.convert(v.type)),v.format===Nr&&Q===6402&&(Q=34041,v.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Pr,de=s.convert(v.type))),Be&&(Se?t.texStorage2D(3553,1,Q,L.width,L.height):t.texImage2D(3553,0,Q,L.width,L.height,0,oe,de,null));else if(v.isDataTexture)if(Ee.length>0&&q){Se&&Be&&t.texStorage2D(3553,U,Q,Ee[0].width,Ee[0].height);for(let Y=0,se=Ee.length;Y<se;Y++)Me=Ee[Y],Se?t.texSubImage2D(3553,Y,0,0,Me.width,Me.height,oe,de,Me.data):t.texImage2D(3553,Y,Q,Me.width,Me.height,0,oe,de,Me.data);v.generateMipmaps=!1}else Se?(Be&&t.texStorage2D(3553,U,Q,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,oe,de,L.data)):t.texImage2D(3553,0,Q,L.width,L.height,0,oe,de,L.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Se&&Be&&t.texStorage3D(35866,U,Q,Ee[0].width,Ee[0].height,L.depth);for(let Y=0,se=Ee.length;Y<se;Y++)Me=Ee[Y],v.format!==Gn?oe!==null?Se?t.compressedTexSubImage3D(35866,Y,0,0,0,Me.width,Me.height,L.depth,oe,Me.data,0,0):t.compressedTexImage3D(35866,Y,Q,Me.width,Me.height,L.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(35866,Y,0,0,0,Me.width,Me.height,L.depth,oe,de,Me.data):t.texImage3D(35866,Y,Q,Me.width,Me.height,L.depth,0,oe,de,Me.data)}else{Se&&Be&&t.texStorage2D(3553,U,Q,Ee[0].width,Ee[0].height);for(let Y=0,se=Ee.length;Y<se;Y++)Me=Ee[Y],v.format!==Gn?oe!==null?Se?t.compressedTexSubImage2D(3553,Y,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(3553,Y,Q,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(3553,Y,0,0,Me.width,Me.height,oe,de,Me.data):t.texImage2D(3553,Y,Q,Me.width,Me.height,0,oe,de,Me.data)}else if(v.isDataArrayTexture)Se?(Be&&t.texStorage3D(35866,U,Q,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,oe,de,L.data)):t.texImage3D(35866,0,Q,L.width,L.height,L.depth,0,oe,de,L.data);else if(v.isData3DTexture)Se?(Be&&t.texStorage3D(32879,U,Q,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,oe,de,L.data)):t.texImage3D(32879,0,Q,L.width,L.height,L.depth,0,oe,de,L.data);else if(v.isFramebufferTexture){if(Be)if(Se)t.texStorage2D(3553,U,Q,L.width,L.height);else{let Y=L.width,se=L.height;for(let pe=0;pe<U;pe++)t.texImage2D(3553,pe,Q,Y,se,0,oe,de,null),Y>>=1,se>>=1}}else if(Ee.length>0&&q){Se&&Be&&t.texStorage2D(3553,U,Q,Ee[0].width,Ee[0].height);for(let Y=0,se=Ee.length;Y<se;Y++)Me=Ee[Y],Se?t.texSubImage2D(3553,Y,0,0,oe,de,Me):t.texImage2D(3553,Y,Q,oe,de,Me);v.generateMipmaps=!1}else Se?(Be&&t.texStorage2D(3553,U,Q,L.width,L.height),t.texSubImage2D(3553,0,0,0,oe,de,L)):t.texImage2D(3553,0,Q,oe,de,L);S(v,q)&&F(R),C.__version=W.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ne(P,v,E){if(v.image.length!==6)return;const R=V(P,v),O=v.source;t.bindTexture(34067,P.__webglTexture,33984+E);const W=n.get(O);if(O.version!==W.__version||R===!0){t.activeTexture(33984+E),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const C=v.isCompressedTexture||v.image[0].isCompressedTexture,k=v.image[0]&&v.image[0].isDataTexture,L=[];for(let Y=0;Y<6;Y++)!C&&!k?L[Y]=y(v.image[Y],!1,!0,h):L[Y]=k?v.image[Y].image:v.image[Y],L[Y]=_t(v,L[Y]);const q=L[0],oe=b(q)||a,de=s.convert(v.format,v.encoding),Q=s.convert(v.type),Me=A(v.internalFormat,de,Q,v.encoding),Ee=a&&v.isVideoTexture!==!0,Se=W.__version===void 0||R===!0;let Be=w(v,q,oe);ee(34067,v,oe);let U;if(C){Ee&&Se&&t.texStorage2D(34067,Be,Me,q.width,q.height);for(let Y=0;Y<6;Y++){U=L[Y].mipmaps;for(let se=0;se<U.length;se++){const pe=U[se];v.format!==Gn?de!==null?Ee?t.compressedTexSubImage2D(34069+Y,se,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(34069+Y,se,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(34069+Y,se,0,0,pe.width,pe.height,de,Q,pe.data):t.texImage2D(34069+Y,se,Me,pe.width,pe.height,0,de,Q,pe.data)}}}else{U=v.mipmaps,Ee&&Se&&(U.length>0&&Be++,t.texStorage2D(34067,Be,Me,L[0].width,L[0].height));for(let Y=0;Y<6;Y++)if(k){Ee?t.texSubImage2D(34069+Y,0,0,0,L[Y].width,L[Y].height,de,Q,L[Y].data):t.texImage2D(34069+Y,0,Me,L[Y].width,L[Y].height,0,de,Q,L[Y].data);for(let se=0;se<U.length;se++){const ge=U[se].image[Y].image;Ee?t.texSubImage2D(34069+Y,se+1,0,0,ge.width,ge.height,de,Q,ge.data):t.texImage2D(34069+Y,se+1,Me,ge.width,ge.height,0,de,Q,ge.data)}}else{Ee?t.texSubImage2D(34069+Y,0,0,0,de,Q,L[Y]):t.texImage2D(34069+Y,0,Me,de,Q,L[Y]);for(let se=0;se<U.length;se++){const pe=U[se];Ee?t.texSubImage2D(34069+Y,se+1,0,0,de,Q,pe.image[Y]):t.texImage2D(34069+Y,se+1,Me,de,Q,pe.image[Y])}}}S(v,oe)&&F(34067),W.__version=O.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function me(P,v,E,R,O){const W=s.convert(E.format,E.encoding),C=s.convert(E.type),k=A(E.internalFormat,W,C,E.encoding);n.get(v).__hasExternalTextures||(O===32879||O===35866?t.texImage3D(O,0,k,v.width,v.height,v.depth,0,W,C,null):t.texImage2D(O,0,k,v.width,v.height,0,W,C,null)),t.bindFramebuffer(36160,P),$e(v)?c.framebufferTexture2DMultisampleEXT(36160,R,O,n.get(E).__webglTexture,0,pt(v)):(O===3553||O>=34069&&O<=34074)&&i.framebufferTexture2D(36160,R,O,n.get(E).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(P,v,E){if(i.bindRenderbuffer(36161,P),v.depthBuffer&&!v.stencilBuffer){let R=33189;if(E||$e(v)){const O=v.depthTexture;O&&O.isDepthTexture&&(O.type===Ki?R=36012:O.type===Zi&&(R=33190));const W=pt(v);$e(v)?c.renderbufferStorageMultisampleEXT(36161,W,R,v.width,v.height):i.renderbufferStorageMultisample(36161,W,R,v.width,v.height)}else i.renderbufferStorage(36161,R,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,P)}else if(v.depthBuffer&&v.stencilBuffer){const R=pt(v);E&&$e(v)===!1?i.renderbufferStorageMultisample(36161,R,35056,v.width,v.height):$e(v)?c.renderbufferStorageMultisampleEXT(36161,R,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,P)}else{const R=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let O=0;O<R.length;O++){const W=R[O],C=s.convert(W.format,W.encoding),k=s.convert(W.type),L=A(W.internalFormat,C,k,W.encoding),q=pt(v);E&&$e(v)===!1?i.renderbufferStorageMultisample(36161,q,L,v.width,v.height):$e(v)?c.renderbufferStorageMultisampleEXT(36161,q,L,v.width,v.height):i.renderbufferStorage(36161,L,v.width,v.height)}}i.bindRenderbuffer(36161,null)}function st(P,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const R=n.get(v.depthTexture).__webglTexture,O=pt(v);if(v.depthTexture.format===Qi)$e(v)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,R,0,O):i.framebufferTexture2D(36160,36096,3553,R,0);else if(v.depthTexture.format===Nr)$e(v)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,R,0,O):i.framebufferTexture2D(36160,33306,3553,R,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const v=n.get(P),E=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!v.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");st(v.__webglFramebuffer,P)}else if(E){v.__webglDepthbuffer=[];for(let R=0;R<6;R++)t.bindFramebuffer(36160,v.__webglFramebuffer[R]),v.__webglDepthbuffer[R]=i.createRenderbuffer(),Fe(v.__webglDepthbuffer[R],P,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Fe(v.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ye(P,v,E){const R=n.get(P);v!==void 0&&me(R.__webglFramebuffer,P,P.texture,36064,3553),E!==void 0&&Ie(P)}function ft(P){const v=P.texture,E=n.get(P),R=n.get(v);P.addEventListener("dispose",j),P.isWebGLMultipleRenderTargets!==!0&&(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=v.version,o.memory.textures++);const O=P.isWebGLCubeRenderTarget===!0,W=P.isWebGLMultipleRenderTargets===!0,C=b(P)||a;if(O){E.__webglFramebuffer=[];for(let k=0;k<6;k++)E.__webglFramebuffer[k]=i.createFramebuffer()}else{if(E.__webglFramebuffer=i.createFramebuffer(),W)if(r.drawBuffers){const k=P.texture;for(let L=0,q=k.length;L<q;L++){const oe=n.get(k[L]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&$e(P)===!1){const k=W?v:[v];E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer);for(let L=0;L<k.length;L++){const q=k[L];E.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(36161,E.__webglColorRenderbuffer[L]);const oe=s.convert(q.format,q.encoding),de=s.convert(q.type),Q=A(q.internalFormat,oe,de,q.encoding,P.isXRRenderTarget===!0),Me=pt(P);i.renderbufferStorageMultisample(36161,Me,Q,P.width,P.height),i.framebufferRenderbuffer(36160,36064+L,36161,E.__webglColorRenderbuffer[L])}i.bindRenderbuffer(36161,null),P.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(E.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(O){t.bindTexture(34067,R.__webglTexture),ee(34067,v,C);for(let k=0;k<6;k++)me(E.__webglFramebuffer[k],P,v,36064,34069+k);S(v,C)&&F(34067),t.unbindTexture()}else if(W){const k=P.texture;for(let L=0,q=k.length;L<q;L++){const oe=k[L],de=n.get(oe);t.bindTexture(3553,de.__webglTexture),ee(3553,oe,C),me(E.__webglFramebuffer,P,oe,36064+L,3553),S(oe,C)&&F(3553)}t.unbindTexture()}else{let k=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?k=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,R.__webglTexture),ee(k,v,C),me(E.__webglFramebuffer,P,v,36064,k),S(v,C)&&F(k),t.unbindTexture()}P.depthBuffer&&Ie(P)}function gt(P){const v=b(P)||a,E=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let R=0,O=E.length;R<O;R++){const W=E[R];if(S(W,v)){const C=P.isWebGLCubeRenderTarget?34067:3553,k=n.get(W).__webglTexture;t.bindTexture(C,k),F(C),t.unbindTexture()}}}function Mt(P){if(a&&P.samples>0&&$e(P)===!1){const v=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],E=P.width,R=P.height;let O=16384;const W=[],C=P.stencilBuffer?33306:36096,k=n.get(P),L=P.isWebGLMultipleRenderTargets===!0;if(L)for(let q=0;q<v.length;q++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+q,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+q,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let q=0;q<v.length;q++){W.push(36064+q),P.depthBuffer&&W.push(C);const oe=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(oe===!1&&(P.depthBuffer&&(O|=256),P.stencilBuffer&&(O|=1024)),L&&i.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[q]),oe===!0&&(i.invalidateFramebuffer(36008,[C]),i.invalidateFramebuffer(36009,[C])),L){const de=n.get(v[q]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,de,0)}i.blitFramebuffer(0,0,E,R,0,0,E,R,O,9728),p&&i.invalidateFramebuffer(36008,W)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),L)for(let q=0;q<v.length;q++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+q,36161,k.__webglColorRenderbuffer[q]);const oe=n.get(v[q]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+q,3553,oe,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function pt(P){return Math.min(u,P.samples)}function $e(P){const v=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(P){const v=o.render.frame;g.get(P)!==v&&(g.set(P,v),P.update())}function _t(P,v){const E=P.encoding,R=P.format,O=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ra||E!==Ii&&(E===St?a===!1?e.has("EXT_sRGB")===!0&&R===Gn?(P.format=ra,P.minFilter=Tn,P.generateMipmaps=!1):v=Rc.sRGBToLinear(v):(R!==Gn||O!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",E)),v}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.setTexture2D=ce,this.setTexture2DArray=ne,this.setTexture3D=ye,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=$e}function Ng(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Ji)return 5121;if(s===Sh)return 32819;if(s===Eh)return 32820;if(s===wh)return 5120;if(s===bh)return 5122;if(s===Tc)return 5123;if(s===Dh)return 5124;if(s===Zi)return 5125;if(s===Ki)return 5126;if(s===ss)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ah)return 6406;if(s===Gn)return 6408;if(s===Ch)return 6409;if(s===Th)return 6410;if(s===Qi)return 6402;if(s===Nr)return 34041;if(s===ra)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ph)return 6403;if(s===Fh)return 36244;if(s===Lh)return 33319;if(s===Rh)return 33320;if(s===Ih)return 36249;if(s===ho||s===po||s===mo||s===go)if(o===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===go)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ya||s===Za||s===Ka||s===Qa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ka)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ja||s===$a)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ja)return o===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$a)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===uu||s===lu||s===cu||s===fu||s===hu||s===du)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===eu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===iu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ru)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===su)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ou)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===au)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hu)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===du)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_o)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_o)return o===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Bh||s===pu||s===mu||s===gu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_o)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Bg extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],c=l.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&c>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=r!==null),f!==null&&(f.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Og extends _n{constructor(e,t,n,r,s,o,a,f,h,l){if(l=l!==void 0?l:Qi,l!==Qi&&l!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Qi&&(n=Zi),n===void 0&&l===Nr&&(n=Pr),super(null,r,s,o,a,f,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=f!==void 0?f:cn,this.flipY=!1,this.generateMipmaps=!1}}class zg extends $i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",f=1,h=null,l=null,u=null,c=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const x=[],y=[],b=new Set,M=new Map,S=new Dn;S.layers.enable(1),S.viewport=new Vt;const F=new Dn;F.layers.enable(2),F.viewport=new Vt;const A=[S,F],w=new Bg;w.layers.enable(1),w.layers.enable(2);let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=x[$];return ue===void 0&&(ue=new Ho,x[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=x[$];return ue===void 0&&(ue=new Ho,x[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=x[$];return ue===void 0&&(ue=new Ho,x[$]=ue),ue.getHandSpace()};function j($){const ue=y.indexOf($.inputSource);if(ue===-1)return;const xe=x[ue];xe!==void 0&&xe.dispatchEvent({type:$.type,data:$.inputSource})}function N(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",H);for(let $=0;$<x.length;$++){const ue=y[$];ue!==null&&(y[$]=null,x[$].disconnect(ue))}D=null,z=null,e.setRenderTarget(m),p=null,c=null,u=null,r=null,d=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",N),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),d=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Ji,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let ue=null,xe=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,ue=_.stencil?Nr:Qi,xe=_.stencil?Pr:Zi);const V={colorFormat:32856,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(r,t),c=u.createProjectionLayer(V),r.updateRenderState({layers:[c]}),d=new Ni(c.textureWidth,c.textureHeight,{format:Gn,type:Ji,depthTexture:new Og(c.textureWidth,c.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ke=e.properties.get(d);ke.__ignoreDepthValues=c.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(f),h=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H($){for(let ue=0;ue<$.removed.length;ue++){const xe=$.removed[ue],ee=y.indexOf(xe);ee>=0&&(y[ee]=null,x[ee].disconnect(xe))}for(let ue=0;ue<$.added.length;ue++){const xe=$.added[ue];let ee=y.indexOf(xe);if(ee===-1){for(let ke=0;ke<x.length;ke++)if(ke>=y.length){y.push(xe),ee=ke;break}else if(y[ke]===null){y[ke]=xe,ee=ke;break}if(ee===-1)break}const V=x[ee];V&&V.connect(xe)}}const G=new I,K=new I;function B($,ue,xe){G.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);const ee=G.distanceTo(K),V=ue.projectionMatrix.elements,ke=xe.projectionMatrix.elements,Ne=V[14]/(V[10]-1),me=V[14]/(V[10]+1),Fe=(V[9]+1)/V[5],st=(V[9]-1)/V[5],Ie=(V[8]-1)/V[0],Ye=(ke[8]+1)/ke[0],ft=Ne*Ie,gt=Ne*Ye,Mt=ee/(-Ie+Ye),pt=Mt*-Ie;ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pt),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const $e=Ne+Mt,ct=me+Mt,_t=ft-pt,P=gt+(ee-pt),v=Fe*me/ct*$e,E=st*me/ct*$e;$.projectionMatrix.makePerspective(_t,P,v,E,$e,ct),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function J($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;w.near=F.near=S.near=$.near,w.far=F.far=S.far=$.far,(D!==w.near||z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,z=w.far);const ue=$.parent,xe=w.cameras;J(w,ue);for(let ee=0;ee<xe.length;ee++)J(xe[ee],ue);xe.length===2?B(w,S,F):w.projectionMatrix.copy(S.projectionMatrix),ie($,w,ue)};function ie($,ue,xe){xe===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const ee=$.children;for(let V=0,ke=ee.length;V<ke;V++)ee[V].updateMatrixWorld(!0);$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(c===null&&p===null))return f},this.setFoveation=function($){f=$,c!==null&&(c.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.getPlanes=function(){return b};let ce=null;function ne($,ue){if(l=ue.getViewerPose(h||o),g=ue,l!==null){const xe=l.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ee=!1;xe.length!==w.cameras.length&&(w.cameras.length=0,ee=!0);for(let V=0;V<xe.length;V++){const ke=xe[V];let Ne=null;if(p!==null)Ne=p.getViewport(ke);else{const Fe=u.getViewSubImage(c,ke);Ne=Fe.viewport,V===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,c.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let me=A[V];me===void 0&&(me=new Dn,me.layers.enable(V),me.viewport=new Vt,A[V]=me),me.matrix.fromArray(ke.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ke.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),V===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ee===!0&&w.cameras.push(me)}}for(let xe=0;xe<x.length;xe++){const ee=y[xe],V=x[xe];ee!==null&&V!==void 0&&V.update(ee,ue,h||o)}if(ce&&ce($,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let xe=null;for(const ee of b)ue.detectedPlanes.has(ee)||(xe===null&&(xe=[]),xe.push(ee));if(xe!==null)for(const ee of xe)b.delete(ee),M.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of ue.detectedPlanes)if(!b.has(ee))b.add(ee),M.set(ee,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const V=M.get(ee);ee.lastChangedTime>V&&(M.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}g=null}const ye=new Gc;ye.setAnimationLoop(ne),this.setAnimationLoop=function($){ce=$},this.dispose=function(){}}}function kg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,zc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),l(m,d)):d.isMeshStandardMaterial?(s(m,d),c(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?f(m,d,x,y):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function f(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hg(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function f(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function h(x,y){let b=r[x.id];b===void 0&&(g(x),b=l(x),r[x.id]=b,x.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(x,M);const S=e.render.frame;s[x.id]!==S&&(c(x),s[x.id]=S)}function l(x){const y=u();x.__bindingPointIndex=y;const b=i.createBuffer(),M=x.__size,S=x.usage;return i.bindBuffer(35345,b),i.bufferData(35345,M,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,y,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const y=r[x.id],b=x.uniforms,M=x.__cache;i.bindBuffer(35345,y);for(let S=0,F=b.length;S<F;S++){const A=b[S];if(p(A,S,M)===!0){const w=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let j=0;j<D.length;j++){const N=D[j],H=_(N);typeof N=="number"?(A.__data[0]=N,i.bufferSubData(35345,w+z,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=N.elements[0],A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=N.elements[0],A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=N.elements[0]):(N.toArray(A.__data,z),z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,A.__data)}}i.bindBuffer(35345,null)}function p(x,y,b){const M=x.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{const S=Array.isArray(M)?M:[M],F=[];for(let A=0;A<S.length;A++)F.push(S[A].clone());b[y]=F}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const S=Array.isArray(b[y])?b[y]:[b[y]],F=Array.isArray(M)?M:[M];for(let A=0;A<S.length;A++){const w=S[A];if(w.equals(F[A])===!1)return w.copy(F[A]),!0}}return!1}function g(x){const y=x.uniforms;let b=0;const M=16;let S=0;for(let F=0,A=y.length;F<A;F++){const w=y[F],D={boundary:0,storage:0},z=Array.isArray(w.value)?w.value:[w.value];for(let j=0,N=z.length;j<N;j++){const H=z[j],G=_(H);D.boundary+=G.boundary,D.storage+=G.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,F>0){S=b%M;const j=M-S;S!==0&&j-D.boundary<0&&(b+=M-S,w.__offset=b)}b+=D.storage}return S=b%M,S>0&&(b+=M-S),x.__size=b,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:f,update:h,dispose:d}}function Gg(){const i=as("canvas");return i.style.display="block",i}class Xc{constructor(e={}){const{canvas:t=Gg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ii,this.useLegacyLights=!0,this.toneMapping=ri,this.toneMappingExposure=1;const d=this;let x=!1,y=0,b=0,M=null,S=-1,F=null;const A=new Vt,w=new Vt;let D=null,z=t.width,j=t.height,N=1,H=null,G=null;const K=new Vt(0,0,z,j),B=new Vt(0,0,z,j);let J=!1;const ie=new Ta;let ce=!1,ne=!1,ye=null;const $=new Ft,ue=new I,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return M===null?N:1}let V=n;function ke(T,Z){for(let te=0;te<T.length;te++){const X=T[te],ae=t.getContext(X,Z);if(ae!==null)return ae}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Se,!1),V===null){const Z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&Z.shift(),V=ke(Z,T),V===null)throw ke(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,me,Fe,st,Ie,Ye,ft,gt,Mt,pt,$e,ct,_t,P,v,E,R,O,W,C,k,L,q,oe;function de(){Ne=new $m(V),me=new Xm(V,Ne,e),Ne.init(me),L=new Ng(V,Ne,me),Fe=new Rg(V,Ne,me),st=new n0,Ie=new xg,Ye=new Ig(V,Ne,Fe,Ie,me,L,st),ft=new Zm(d),gt=new Jm(d),Mt=new pd(V,me),q=new jm(V,Ne,Mt,me),pt=new e0(V,Mt,st,q),$e=new o0(V,pt,Mt,st),W=new s0(V,me,Ye),E=new Ym(Ie),ct=new vg(d,ft,gt,Ne,me,q,E),_t=new kg(d,Ie),P=new Mg,v=new Ag(Ne,me),O=new Wm(d,ft,gt,Fe,$e,c,f),R=new Lg(d,$e,me),oe=new Hg(V,st,me,Fe),C=new qm(V,Ne,st,me),k=new t0(V,Ne,st,me),st.programs=ct.programs,d.capabilities=me,d.extensions=Ne,d.properties=Ie,d.renderLists=P,d.shadowMap=R,d.state=Fe,d.info=st}de();const Q=new zg(d,V);this.xr=Q,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(z,j,!1))},this.getSize=function(T){return T.set(z,j)},this.setSize=function(T,Z,te=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,j=Z,t.width=Math.floor(T*N),t.height=Math.floor(Z*N),te===!0&&(t.style.width=T+"px",t.style.height=Z+"px"),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set(z*N,j*N).floor()},this.setDrawingBufferSize=function(T,Z,te){z=T,j=Z,N=te,t.width=Math.floor(T*te),t.height=Math.floor(Z*te),this.setViewport(0,0,T,Z)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,Z,te,X){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,Z,te,X),Fe.viewport(A.copy(K).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,Z,te,X){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,Z,te,X),Fe.scissor(w.copy(B).multiplyScalar(N).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){Fe.setScissorTest(J=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(T=!0,Z=!0,te=!0){let X=0;T&&(X|=16384),Z&&(X|=256),te&&(X|=1024),V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),P.dispose(),v.dispose(),Ie.dispose(),ft.dispose(),gt.dispose(),$e.dispose(),q.dispose(),oe.dispose(),ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ge),Q.removeEventListener("sessionend",ot),ye&&(ye.dispose(),ye=null),Oe.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=st.autoReset,Z=R.enabled,te=R.autoUpdate,X=R.needsUpdate,ae=R.type;de(),st.autoReset=T,R.enabled=Z,R.autoUpdate=te,R.needsUpdate=X,R.type=ae}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const Z=T.target;Z.removeEventListener("dispose",Be),U(Z)}function U(T){Y(T),Ie.remove(T)}function Y(T){const Z=Ie.get(T).programs;Z!==void 0&&(Z.forEach(function(te){ct.releaseProgram(te)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,te,X,ae,Le){Z===null&&(Z=xe);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,Ve=vi(T,Z,te,X,ae);Fe.setMaterial(X,He);let tt=te.index,nt=1;X.wireframe===!0&&(tt=pt.getWireframeAttribute(te),nt=2);const it=te.drawRange,Ke=te.attributes.position;let ht=it.start*nt,Rt=(it.start+it.count)*nt;Le!==null&&(ht=Math.max(ht,Le.start*nt),Rt=Math.min(Rt,(Le.start+Le.count)*nt)),tt!==null?(ht=Math.max(ht,0),Rt=Math.min(Rt,tt.count)):Ke!=null&&(ht=Math.max(ht,0),Rt=Math.min(Rt,Ke.count));const Qt=Rt-ht;if(Qt<0||Qt===1/0)return;q.setup(ae,X,Ve,te,tt);let dn,Et=C;if(tt!==null&&(dn=Mt.get(tt),Et=k,Et.setIndex(dn)),ae.isMesh)X.wireframe===!0?(Fe.setLineWidth(X.wireframeLinewidth*ee()),Et.setMode(1)):Et.setMode(4);else if(ae.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),Fe.setLineWidth(Qe*ee()),ae.isLineSegments?Et.setMode(1):ae.isLineLoop?Et.setMode(2):Et.setMode(3)}else ae.isPoints?Et.setMode(0):ae.isSprite&&Et.setMode(4);if(ae.isInstancedMesh)Et.renderInstances(ht,Qt,ae.count);else if(te.isInstancedBufferGeometry){const Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,xi=Math.min(te.instanceCount,Qe);Et.renderInstances(ht,Qt,xi)}else Et.render(ht,Qt)},this.compile=function(T,Z){function te(X,ae,Le){X.transparent===!0&&X.side===kn&&X.forceSinglePass===!1?(X.side=gn,X.needsUpdate=!0,Rn(X,ae,Le),X.side=Ri,X.needsUpdate=!0,Rn(X,ae,Le),X.side=kn):Rn(X,ae,Le)}g=v.get(T),g.init(),m.push(g),T.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(d.useLegacyLights),T.traverse(function(X){const ae=X.material;if(ae)if(Array.isArray(ae))for(let Le=0;Le<ae.length;Le++){const He=ae[Le];te(He,T,X)}else te(ae,T,X)}),m.pop(),g=null};let se=null;function pe(T){se&&se(T)}function ge(){Oe.stop()}function ot(){Oe.start()}const Oe=new Gc;Oe.setAnimationLoop(pe),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){se=T,Q.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},Q.addEventListener("sessionstart",ge),Q.addEventListener("sessionend",ot),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(Z),Z=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,Z,M),g=v.get(T,m.length),g.init(),m.push(g),$.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ie.setFromProjectionMatrix($),ne=this.localClippingEnabled,ce=E.init(this.clippingPlanes,ne),p=P.get(T,_.length),p.init(),_.push(p),_e(T,Z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(H,G),ce===!0&&E.beginShadows();const te=g.state.shadowsArray;if(R.render(te,T,Z),ce===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(p,T),g.setupLights(d.useLegacyLights),Z.isArrayCamera){const X=Z.cameras;for(let ae=0,Le=X.length;ae<Le;ae++){const He=X[ae];et(p,T,He,He.viewport)}}else et(p,T,Z);M!==null&&(Ye.updateMultisampleRenderTarget(M),Ye.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(d,T,Z),q.resetDefaultState(),S=-1,F=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function _e(T,Z,te,X){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){X&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);const He=$e.update(T),Ve=T.material;Ve.visible&&p.push(T,He,Ve,te,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==st.render.frame&&(T.skeleton.update(),T.skeleton.frame=st.render.frame),!T.frustumCulled||ie.intersectsObject(T))){X&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);const He=$e.update(T),Ve=T.material;if(Array.isArray(Ve)){const tt=He.groups;for(let nt=0,it=tt.length;nt<it;nt++){const Ke=tt[nt],ht=Ve[Ke.materialIndex];ht&&ht.visible&&p.push(T,He,ht,te,ue.z,Ke)}}else Ve.visible&&p.push(T,He,Ve,te,ue.z,null)}}const Le=T.children;for(let He=0,Ve=Le.length;He<Ve;He++)_e(Le[He],Z,te,X)}function et(T,Z,te,X){const ae=T.opaque,Le=T.transmissive,He=T.transparent;g.setupLightsView(te),ce===!0&&E.setGlobalState(d.clippingPlanes,te),Le.length>0&&fe(ae,Le,Z,te),X&&Fe.viewport(A.copy(X)),ae.length>0&&vt(ae,Z,te),Le.length>0&&vt(Le,Z,te),He.length>0&&vt(He,Z,te),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function fe(T,Z,te,X){if(ye===null){const Ve=me.isWebGL2;ye=new Ni(1024,1024,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?ss:Ji,minFilter:rs,samples:Ve&&a===!0?4:0})}const ae=d.getRenderTarget();d.setRenderTarget(ye),d.clear();const Le=d.toneMapping;d.toneMapping=ri,vt(T,te,X),Ye.updateMultisampleRenderTarget(ye),Ye.updateRenderTargetMipmap(ye);let He=!1;for(let Ve=0,tt=Z.length;Ve<tt;Ve++){const nt=Z[Ve],it=nt.object,Ke=nt.geometry,ht=nt.material,Rt=nt.group;if(ht.side===kn&&it.layers.test(X.layers)){const Qt=ht.side;ht.side=gn,ht.needsUpdate=!0,Wt(it,te,X,Ke,ht,Rt),ht.side=Qt,ht.needsUpdate=!0,He=!0}}He===!0&&(Ye.updateMultisampleRenderTarget(ye),Ye.updateRenderTargetMipmap(ye)),d.setRenderTarget(ae),d.toneMapping=Le}function vt(T,Z,te){const X=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Le=T.length;ae<Le;ae++){const He=T[ae],Ve=He.object,tt=He.geometry,nt=X===null?He.material:X,it=He.group;Ve.layers.test(te.layers)&&Wt(Ve,Z,te,tt,nt,it)}}function Wt(T,Z,te,X,ae,Le){T.onBeforeRender(d,Z,te,X,ae,Le),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ae.onBeforeRender(d,Z,te,X,T,Le),ae.transparent===!0&&ae.side===kn&&ae.forceSinglePass===!1?(ae.side=gn,ae.needsUpdate=!0,d.renderBufferDirect(te,Z,X,ae,T,Le),ae.side=Ri,ae.needsUpdate=!0,d.renderBufferDirect(te,Z,X,ae,T,Le),ae.side=kn):d.renderBufferDirect(te,Z,X,ae,T,Le),T.onAfterRender(d,Z,te,X,ae,Le)}function Rn(T,Z,te){Z.isScene!==!0&&(Z=xe);const X=Ie.get(T),ae=g.state.lights,Le=g.state.shadowsArray,He=ae.state.version,Ve=ct.getParameters(T,ae.state,Le,Z,te),tt=ct.getProgramCacheKey(Ve);let nt=X.programs;X.environment=T.isMeshStandardMaterial?Z.environment:null,X.fog=Z.fog,X.envMap=(T.isMeshStandardMaterial?gt:ft).get(T.envMap||X.environment),nt===void 0&&(T.addEventListener("dispose",Be),nt=new Map,X.programs=nt);let it=nt.get(tt);if(it!==void 0){if(X.currentProgram===it&&X.lightsStateVersion===He)return Oi(T,Ve),it}else Ve.uniforms=ct.getUniforms(T),T.onBuild(te,Ve,d),T.onBeforeCompile(Ve,d),it=ct.acquireProgram(Ve,tt),nt.set(tt,it),X.uniforms=Ve.uniforms;const Ke=X.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=E.uniform),Oi(T,Ve),X.needsLights=Zn(T),X.lightsStateVersion=He,X.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.directionalShadowMap.value=ae.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotShadowMap.value=ae.state.spotShadowMap,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMap.value=ae.state.pointShadowMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix);const ht=it.getUniforms(),Rt=Gs.seqWithValue(ht.seq,Ke);return X.currentProgram=it,X.uniformsList=Rt,it}function Oi(T,Z){const te=Ie.get(T);te.outputEncoding=Z.outputEncoding,te.instancing=Z.instancing,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}function vi(T,Z,te,X,ae){Z.isScene!==!0&&(Z=xe),Ye.resetTextureUnits();const Le=Z.fog,He=X.isMeshStandardMaterial?Z.environment:null,Ve=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Ii,tt=(X.isMeshStandardMaterial?gt:ft).get(X.envMap||He),nt=X.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!X.normalMap&&!!te.attributes.tangent,Ke=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color,Qt=X.toneMapped?d.toneMapping:ri,dn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Et=dn!==void 0?dn.length:0,Qe=Ie.get(X),xi=g.state.lights;if(ce===!0&&(ne===!0||T!==F)){const $t=T===F&&X.id===S;E.setState(X,T,$t)}let Pt=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==xi.state.version||Qe.outputEncoding!==Ve||ae.isInstancedMesh&&Qe.instancing===!1||!ae.isInstancedMesh&&Qe.instancing===!0||ae.isSkinnedMesh&&Qe.skinning===!1||!ae.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==tt||X.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==E.numPlanes||Qe.numIntersection!==E.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==it||Qe.morphTargets!==Ke||Qe.morphNormals!==ht||Qe.morphColors!==Rt||Qe.toneMapping!==Qt||me.isWebGL2===!0&&Qe.morphTargetsCount!==Et)&&(Pt=!0):(Pt=!0,Qe.__version=X.version);let Jt=Qe.currentProgram;Pt===!0&&(Jt=Rn(X,Z,ae));let Bt=!1,at=!1,ir=!1;const jt=Jt.getUniforms(),Sn=Qe.uniforms;if(Fe.useProgram(Jt.program)&&(Bt=!0,at=!0,ir=!0),X.id!==S&&(S=X.id,at=!0),Bt||F!==T){if(jt.setValue(V,"projectionMatrix",T.projectionMatrix),me.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),F!==T&&(F=T,at=!0,ir=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const $t=jt.map.cameraPosition;$t!==void 0&&$t.setValue(V,ue.setFromMatrixPosition(T.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&jt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ae.isSkinnedMesh)&&jt.setValue(V,"viewMatrix",T.matrixWorldInverse)}if(ae.isSkinnedMesh){jt.setOptional(V,ae,"bindMatrix"),jt.setOptional(V,ae,"bindMatrixInverse");const $t=ae.skeleton;$t&&(me.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),jt.setValue(V,"boneTexture",$t.boneTexture,Ye),jt.setValue(V,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yi=te.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0&&me.isWebGL2===!0)&&W.update(ae,te,Jt),(at||Qe.receiveShadow!==ae.receiveShadow)&&(Qe.receiveShadow=ae.receiveShadow,jt.setValue(V,"receiveShadow",ae.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Sn.envMap.value=tt,Sn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),at&&(jt.setValue(V,"toneMappingExposure",d.toneMappingExposure),Qe.needsLights&&nr(Sn,ir),Le&&X.fog===!0&&_t.refreshFogUniforms(Sn,Le),_t.refreshMaterialUniforms(Sn,X,N,j,ye),Gs.upload(V,Qe.uniformsList,Sn,Ye)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gs.upload(V,Qe.uniformsList,Sn,Ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&jt.setValue(V,"center",ae.center),jt.setValue(V,"modelViewMatrix",ae.modelViewMatrix),jt.setValue(V,"normalMatrix",ae.normalMatrix),jt.setValue(V,"modelMatrix",ae.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let rr=0,Mi=$t.length;rr<Mi;rr++)if(me.isWebGL2){const Oa=$t[rr];oe.update(Oa,Jt),oe.bind(Oa,Jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jt}function nr(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function Zn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,Z,te){Ie.get(T.texture).__webglTexture=Z,Ie.get(T.depthTexture).__webglTexture=te;const X=Ie.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=te===void 0,X.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,Z){const te=Ie.get(T);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(T,Z=0,te=0){M=T,y=Z,b=te;let X=!0,ae=null,Le=!1,He=!1;if(T){const tt=Ie.get(T);tt.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(36160,null),X=!1):tt.__webglFramebuffer===void 0?Ye.setupRenderTarget(T):tt.__hasExternalTextures&&Ye.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const it=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ae=it[Z],Le=!0):me.isWebGL2&&T.samples>0&&Ye.useMultisampledRTT(T)===!1?ae=Ie.get(T).__webglMultisampledFramebuffer:ae=it,A.copy(T.viewport),w.copy(T.scissor),D=T.scissorTest}else A.copy(K).multiplyScalar(N).floor(),w.copy(B).multiplyScalar(N).floor(),D=J;if(Fe.bindFramebuffer(36160,ae)&&me.drawBuffers&&X&&Fe.drawBuffers(T,ae),Fe.viewport(A),Fe.scissor(w),Fe.setScissorTest(D),Le){const tt=Ie.get(T.texture);V.framebufferTexture2D(36160,36064,34069+Z,tt.__webglTexture,te)}else if(He){const tt=Ie.get(T.texture),nt=Z||0;V.framebufferTextureLayer(36160,36064,tt.__webglTexture,te||0,nt)}S=-1},this.readRenderTargetPixels=function(T,Z,te,X,ae,Le,He){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Ve=Ve[He]),Ve){Fe.bindFramebuffer(36160,Ve);try{const tt=T.texture,nt=tt.format,it=tt.type;if(nt!==Gn&&L.convert(nt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=it===ss&&(Ne.has("EXT_color_buffer_half_float")||me.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(it!==Ji&&L.convert(it)!==V.getParameter(35738)&&!(it===Ki&&(me.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-X&&te>=0&&te<=T.height-ae&&V.readPixels(Z,te,X,ae,L.convert(nt),L.convert(it),Le)}finally{const tt=M!==null?Ie.get(M).__webglFramebuffer:null;Fe.bindFramebuffer(36160,tt)}}},this.copyFramebufferToTexture=function(T,Z,te=0){const X=Math.pow(2,-te),ae=Math.floor(Z.image.width*X),Le=Math.floor(Z.image.height*X);Ye.setTexture2D(Z,0),V.copyTexSubImage2D(3553,te,0,0,T.x,T.y,ae,Le),Fe.unbindTexture()},this.copyTextureToTexture=function(T,Z,te,X=0){const ae=Z.image.width,Le=Z.image.height,He=L.convert(te.format),Ve=L.convert(te.type);Ye.setTexture2D(te,0),V.pixelStorei(37440,te.flipY),V.pixelStorei(37441,te.premultiplyAlpha),V.pixelStorei(3317,te.unpackAlignment),Z.isDataTexture?V.texSubImage2D(3553,X,T.x,T.y,ae,Le,He,Ve,Z.image.data):Z.isCompressedTexture?V.compressedTexSubImage2D(3553,X,T.x,T.y,Z.mipmaps[0].width,Z.mipmaps[0].height,He,Z.mipmaps[0].data):V.texSubImage2D(3553,X,T.x,T.y,He,Ve,Z.image),X===0&&te.generateMipmaps&&V.generateMipmap(3553),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,Z,te,X,ae=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,He=T.max.y-T.min.y+1,Ve=T.max.z-T.min.z+1,tt=L.convert(X.format),nt=L.convert(X.type);let it;if(X.isData3DTexture)Ye.setTexture3D(X,0),it=32879;else if(X.isDataArrayTexture)Ye.setTexture2DArray(X,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,X.flipY),V.pixelStorei(37441,X.premultiplyAlpha),V.pixelStorei(3317,X.unpackAlignment);const Ke=V.getParameter(3314),ht=V.getParameter(32878),Rt=V.getParameter(3316),Qt=V.getParameter(3315),dn=V.getParameter(32877),Et=te.isCompressedTexture?te.mipmaps[0]:te.image;V.pixelStorei(3314,Et.width),V.pixelStorei(32878,Et.height),V.pixelStorei(3316,T.min.x),V.pixelStorei(3315,T.min.y),V.pixelStorei(32877,T.min.z),te.isDataTexture||te.isData3DTexture?V.texSubImage3D(it,ae,Z.x,Z.y,Z.z,Le,He,Ve,tt,nt,Et.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(it,ae,Z.x,Z.y,Z.z,Le,He,Ve,tt,Et.data)):V.texSubImage3D(it,ae,Z.x,Z.y,Z.z,Le,He,Ve,tt,nt,Et),V.pixelStorei(3314,Ke),V.pixelStorei(32878,ht),V.pixelStorei(3316,Rt),V.pixelStorei(3315,Qt),V.pixelStorei(32877,dn),ae===0&&X.generateMipmaps&&V.generateMipmap(it),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ye.setTextureCube(T,0):T.isData3DTexture?Ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ye.setTexture2DArray(T,0):Ye.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){y=0,b=0,M=null,Fe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Vg extends Xc{}Vg.prototype.isWebGL1Renderer=!0;class Wg extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ps extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new I,il=new I,rl=new Ft,Go=new Ea,Us=new eo;class rn extends Tt{constructor(e=new Kt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)nl.fromBufferAttribute(t,r-1),il.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=nl.distanceTo(il);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,e.ray.intersectsSphere(Us)===!1)return;rl.copy(r).invert(),Go.copy(e.ray).applyMatrix4(rl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=a*a,h=new I,l=new I,u=new I,c=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=d,b=x-1;y<b;y+=p){const M=g.getX(y),S=g.getX(y+1);if(h.fromBufferAttribute(m,M),l.fromBufferAttribute(m,S),Go.distanceSqToSegment(h,l,c,u)>f)continue;c.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(c);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=d,b=x-1;y<b;y+=p){if(h.fromBufferAttribute(m,y),l.fromBufferAttribute(m,y+1),Go.distanceSqToSegment(h,l,c,u)>f)continue;c.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(c);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sl=new I,ol=new I;class jg extends rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)sl.fromBufferAttribute(t,r),ol.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sl.distanceTo(ol);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nn extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:f};const h=this;r=Math.floor(r),s=Math.floor(s);const l=[],u=[],c=[],p=[];let g=0;const _=[],m=n/2;let d=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(p,2));function x(){const b=new I,M=new I;let S=0;const F=(t-e)/n;for(let A=0;A<=s;A++){const w=[],D=A/s,z=D*(t-e)+e;for(let j=0;j<=r;j++){const N=j/r,H=N*f+a,G=Math.sin(H),K=Math.cos(H);M.x=z*G,M.y=-D*n+m,M.z=z*K,u.push(M.x,M.y,M.z),b.set(G,F,K).normalize(),c.push(b.x,b.y,b.z),p.push(N,1-D),w.push(g++)}_.push(w)}for(let A=0;A<r;A++)for(let w=0;w<s;w++){const D=_[w][A],z=_[w+1][A],j=_[w+1][A+1],N=_[w][A+1];l.push(D,z,N),l.push(z,j,N),S+=6}h.addGroup(d,S,0),d+=S}function y(b){const M=g,S=new Je,F=new I;let A=0;const w=b===!0?e:t,D=b===!0?1:-1;for(let j=1;j<=r;j++)u.push(0,m*D,0),c.push(0,D,0),p.push(.5,.5),g++;const z=g;for(let j=0;j<=r;j++){const H=j/r*f+a,G=Math.cos(H),K=Math.sin(H);F.x=w*K,F.y=m*D,F.z=w*G,u.push(F.x,F.y,F.z),c.push(0,D,0),S.x=G*.5+.5,S.y=K*.5*D+.5,p.push(S.x,S.y),g++}for(let j=0;j<r;j++){const N=M+j,H=z+j;b===!0?l.push(H,H+1,N):l.push(H+1,H,N),A+=3}h.addGroup(d,A,b===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class La extends Kt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),h(n),l(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new I,b=new I,M=new I;for(let S=0;S<t.length;S+=3)p(t[S+0],y),p(t[S+1],b),p(t[S+2],M),f(y,b,M,x)}function f(x,y,b,M){const S=M+1,F=[];for(let A=0;A<=S;A++){F[A]=[];const w=x.clone().lerp(b,A/S),D=y.clone().lerp(b,A/S),z=S-A;for(let j=0;j<=z;j++)j===0&&A===S?F[A][j]=w:F[A][j]=w.clone().lerp(D,j/z)}for(let A=0;A<S;A++)for(let w=0;w<2*(S-A)-1;w++){const D=Math.floor(w/2);w%2===0?(c(F[A][D+1]),c(F[A+1][D]),c(F[A][D])):(c(F[A][D+1]),c(F[A+1][D+1]),c(F[A+1][D]))}}function h(x){const y=new I;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(x),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function l(){const x=new I;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const b=m(x)/2/Math.PI+.5,M=d(x)/Math.PI+.5;o.push(b,1-M)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],b=o[x+2],M=o[x+4],S=Math.max(y,b,M),F=Math.min(y,b,M);S>.9&&F<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),M<.2&&(o[x+4]+=1))}}function c(x){s.push(x.x,x.y,x.z)}function p(x,y){const b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){const x=new I,y=new I,b=new I,M=new I,S=new Je,F=new Je,A=new Je;for(let w=0,D=0;w<s.length;w+=9,D+=6){x.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),S.set(o[D+0],o[D+1]),F.set(o[D+2],o[D+3]),A.set(o[D+4],o[D+5]),M.copy(x).add(y).add(b).divideScalar(3);const z=m(M);_(S,D+0,x,z),_(F,D+2,y,z),_(A,D+4,b,z)}}function _(x,y,b,M){M<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.vertices,e.indices,e.radius,e.details)}}class Er extends La{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Er(e.radius,e.detail)}}class er extends Kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(o+a,Math.PI);let h=0;const l=[],u=new I,c=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const x=[],y=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&f===Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const S=M/t;u.x=-e*Math.cos(r+S*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+S*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),c.copy(u).normalize(),_.push(c.x,c.y,c.z),m.push(S+b,1-y),x.push(h++)}l.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const y=l[d][x+1],b=l[d][x],M=l[d+1][x],S=l[d+1][x+1];(d!==0||o>0)&&p.push(y,b,S),(d!==n-1||f<Math.PI)&&p.push(b,M,S)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xi extends Kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],f=[],h=[],l=new I,u=new I,c=new I;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),l.x=e*Math.cos(_),l.y=e*Math.sin(_),c.subVectors(u,l).normalize(),f.push(c.x,c.y,c.z),h.push(g/r),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,x=(r+1)*p+g;o.push(_,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ms extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yc extends ps{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const al={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qg{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,s===!1&&r.onStart!==void 0&&r.onStart(l,o,a),s=!0},this.itemEnd=function(l){o++,r.onProgress!==void 0&&r.onProgress(l,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return f?f(l):l},this.setURLModifier=function(l){return f=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,c=h.length;u<c;u+=2){const p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const Zc=new qg;class Kc{constructor(e){this.manager=e!==void 0?e:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Xg extends Kc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=al.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=as("img");function f(){l(),al.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(u){l(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function l(){a.removeEventListener("load",f,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",f,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ul extends Kc{constructor(e){super(e)}load(e,t,n,r){const s=new _n,o=new Xg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Qc extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vo=new Ft,ll=new I,cl=new I;class Yg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zg extends Yg{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends Qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kg extends Qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hl(){return(typeof performance>"u"?Date:performance).now()}class $c{constructor(e,t,n=0,r=1/0){this.ray=new Ea(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return aa(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)aa(e[r],this,n,t);return n.sort(dl),n}}function dl(i,e){return i.distance-e.distance}function aa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)aa(r[s],e,t,!0)}}class pl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qg extends jg{constructor(e=10,t=10,n=4473924,r=8947848){n=new dt(n),r=new dt(r);const s=t/2,o=e/t,a=e/2,f=[],h=[];for(let c=0,p=0,g=-a;c<=t;c++,g+=o){f.push(-a,0,g,a,0,g),f.push(g,0,-a,g,0,a);const _=c===s?n:r;_.toArray(h,p),p+=3,_.toArray(h,p),p+=3,_.toArray(h,p),p+=3,_.toArray(h,p),p+=3}const l=new Kt;l.setAttribute("position",new Dt(f,3)),l.setAttribute("color",new Dt(h,3));const u=new ps({vertexColors:!0,toneMapped:!1});super(l,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const Jg=()=>{const i={curveActive:0,u:.5,w:.5,toggles:{controlPolygonActive:{value:!1,label:"Control Polygon"},pointsActive:{value:!0,label:"Control Points"},snapActive:{value:!1,label:"Snap to Move"},indicatorActive:{value:!1,label:"Indicator"}},curve:{},surface:{wireframe:{value:!1,label:"Wireframe"}}},{subscribe:e,set:t,update:n}=Yt(i);return{subscribe:e,update:n,set:t}},Ai=Jg();function ml(i,e,t){const n=i.slice();return n[19]=e[t],n[21]=t,n}function gl(i,e,t){const n=i.slice();return n[22]=e[t].vector,n[23]=e,n[24]=t,n}function _l(i,e,t){const n=i.slice();return n[22]=e[t].vector,n[25]=e,n[26]=t,n}function vl(i,e,t){const n=i.slice();return n[27]=e[t][0],n[28]=e[t][1],n[29]=e,n[30]=t,n}function xl(i,e,t){const n=i.slice();return n[27]=e[t][0],n[28]=e[t][1],n[31]=e,n[32]=t,n}function yl(i,e,t){const n=i.slice();return n[33]=e[t],n[26]=t,n}function Ml(i){let e,t=i[33]+"",n,r,s,o;function a(){return i[4](i[26])}return{c(){e=Ae("button"),n=xt(t),r=Te(),this.h()},l(f){e=Ce(f,"BUTTON",{class:!0});var h=Ue(e);n=yt(h,t),r=Pe(h),h.forEach(he),this.h()},h(){Re(e,"class","tab"),Ti(e,"tab-active",i[2].curveActive==i[26]),Ti(e,"italic",i[2].curveActive==i[26])},m(f,h){rt(f,e,h),re(e,n),re(e,r),s||(o=Lt(e,"click",a),s=!0)},p(f,h){i=f,h[0]&4&&Ti(e,"tab-active",i[2].curveActive==i[26]),h[0]&4&&Ti(e,"italic",i[2].curveActive==i[26])},d(f){f&&he(e),s=!1,o()}}}function wl(i){let e,t,n,r,s,o,a,f=i[2].w.toFixed(2)+"",h,l,u;return{c(){e=Ae("label"),t=Ae("input"),n=Te(),r=Ae("span"),s=Ae("b"),o=xt("W"),a=Te(),h=xt(f),this.h()},l(c){e=Ce(c,"LABEL",{class:!0});var p=Ue(e);t=Ce(p,"INPUT",{type:!0,min:!0,max:!0,class:!0}),n=Pe(p),r=Ce(p,"SPAN",{class:!0});var g=Ue(r);s=Ce(g,"B",{});var _=Ue(s);o=yt(_,"W"),_.forEach(he),a=Pe(g),h=yt(g,f),g.forEach(he),p.forEach(he),this.h()},h(){Re(t,"type","range"),Re(t,"min","0"),Re(t,"max","100"),t.value="50",Re(t,"class","range"),Re(r,"class","text-left text-sm"),Re(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(c,p){rt(c,e,p),re(e,t),re(e,n),re(e,r),re(r,s),re(s,o),re(r,a),re(r,h),l||(u=Lt(t,"input",i[6]),l=!0)},p(c,p){p[0]&4&&f!==(f=c[2].w.toFixed(2)+"")&&Qs(h,f)},d(c){c&&he(e),l=!1,u()}}}function bl(i){let e,t,n,r,s=i[28].label+"",o,a,f;function h(){i[7].call(t,i[27])}return{c(){e=Ae("label"),t=Ae("input"),n=Te(),r=Ae("span"),o=xt(s),this.h()},l(l){e=Ce(l,"LABEL",{class:!0});var u=Ue(e);t=Ce(u,"INPUT",{type:!0,class:!0}),n=Pe(u),r=Ce(u,"SPAN",{class:!0});var c=Ue(r);o=yt(c,s),c.forEach(he),u.forEach(he),this.h()},h(){Re(t,"type","checkbox"),Re(t,"class","toggle toggle-sm"),Re(r,"class","text-left text-sm"),Re(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(l,u){rt(l,e,u),re(e,t),t.checked=i[2].toggles[i[27]].value,re(e,n),re(e,r),re(r,o),a||(f=Lt(t,"change",h),a=!0)},p(l,u){i=l,u[0]&4&&(t.checked=i[2].toggles[i[27]].value),u[0]&4&&s!==(s=i[28].label+"")&&Qs(o,s)},d(l){l&&he(e),a=!1,f()}}}function Dl(i){let e,t=Object.entries(i[2].surface),n=[];for(let r=0;r<t.length;r+=1)n[r]=Sl(vl(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Ln()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=Ln()},m(r,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,s);rt(r,e,s)},p(r,s){if(s[0]&4){t=Object.entries(r[2].surface);let o;for(o=0;o<t.length;o+=1){const a=vl(r,t,o);n[o]?n[o].p(a,s):(n[o]=Sl(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){ti(n,r),r&&he(e)}}}function Sl(i){let e,t,n,r,s=i[28].label+"",o,a,f,h;function l(){i[8].call(t,i[27])}return{c(){e=Ae("label"),t=Ae("input"),n=Te(),r=Ae("span"),o=xt(s),a=Te(),this.h()},l(u){e=Ce(u,"LABEL",{class:!0});var c=Ue(e);t=Ce(c,"INPUT",{type:!0,class:!0}),n=Pe(c),r=Ce(c,"SPAN",{class:!0});var p=Ue(r);o=yt(p,s),p.forEach(he),a=Pe(c),c.forEach(he),this.h()},h(){Re(t,"type","checkbox"),Re(t,"class","toggle toggle-sm"),Re(r,"class","text-left text-sm"),Re(e,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap")},m(u,c){rt(u,e,c),re(e,t),t.checked=i[2].surface[i[27]].value,re(e,n),re(e,r),re(r,o),re(e,a),f||(h=Lt(t,"change",l),f=!0)},p(u,c){i=u,c[0]&4&&(t.checked=i[2].surface[i[27]].value),c[0]&4&&s!==(s=i[28].label+"")&&Qs(o,s)},d(u){u&&he(e),f=!1,h()}}}function El(i){let e,t,n,r,s,o,a,f,h,l,u,c,p,g,_,m,d,x;function y(...S){return i[11](i[22],i[25],i[26],...S)}function b(...S){return i[12](i[22],i[25],i[26],...S)}function M(...S){return i[13](i[22],i[25],i[26],...S)}return{c(){e=Ae("tr"),t=Ae("th"),n=xt(i[26]),r=Te(),s=Ae("td"),o=Ae("input"),f=Te(),h=Ae("td"),l=Ae("input"),c=Te(),p=Ae("td"),g=Ae("input"),m=Te(),this.h()},l(S){e=Ce(S,"TR",{});var F=Ue(e);t=Ce(F,"TH",{class:!0});var A=Ue(t);n=yt(A,i[26]),A.forEach(he),r=Pe(F),s=Ce(F,"TD",{});var w=Ue(s);o=Ce(w,"INPUT",{type:!0,class:!0}),w.forEach(he),f=Pe(F),h=Ce(F,"TD",{});var D=Ue(h);l=Ce(D,"INPUT",{type:!0,class:!0}),D.forEach(he),c=Pe(F),p=Ce(F,"TD",{});var z=Ue(p);g=Ce(z,"INPUT",{type:!0,class:!0}),z.forEach(he),m=Pe(F),F.forEach(he),this.h()},h(){Re(t,"class","text-center"),Re(o,"type","number"),Re(o,"class","input input-bordered input-xs w-full max-w-xs"),o.value=a=i[22].x.toFixed(2),Re(l,"type","number"),Re(l,"class","input input-bordered input-xs w-full max-w-xs"),l.value=u=i[22].y.toFixed(2),Re(g,"type","number"),Re(g,"class","input input-bordered input-xs w-full max-w-xs"),g.value=_=i[22].z.toFixed(2)},m(S,F){rt(S,e,F),re(e,t),re(t,n),re(e,r),re(e,s),re(s,o),re(e,f),re(e,h),re(h,l),re(e,c),re(e,p),re(p,g),re(e,m),d||(x=[Lt(o,"input",y),Lt(l,"input",b),Lt(g,"input",M)],d=!0)},p(S,F){i=S,F[0]&1&&a!==(a=i[22].x.toFixed(2))&&o.value!==a&&(o.value=a),F[0]&1&&u!==(u=i[22].y.toFixed(2))&&l.value!==u&&(l.value=u),F[0]&1&&_!==(_=i[22].z.toFixed(2))&&g.value!==_&&(g.value=_)},d(S){S&&he(e),d=!1,Js(x)}}}function Al(i){let e,t,n,r,s,o,a,f,h,l,u,c,p,g,_,m,d,x,y,b,M,S;function F(...D){return i[16](i[22],i[23],i[24],...D)}function A(...D){return i[17](i[22],i[23],i[24],...D)}function w(...D){return i[18](i[22],i[23],i[24],...D)}return{c(){e=Ae("tr"),t=Ae("th"),n=xt("("),r=xt(i[21]),s=xt(", "),o=xt(i[24]),a=xt(")"),f=Te(),h=Ae("td"),l=Ae("input"),c=Te(),p=Ae("td"),g=Ae("input"),m=Te(),d=Ae("td"),x=Ae("input"),b=Te(),this.h()},l(D){e=Ce(D,"TR",{});var z=Ue(e);t=Ce(z,"TH",{class:!0});var j=Ue(t);n=yt(j,"("),r=yt(j,i[21]),s=yt(j,", "),o=yt(j,i[24]),a=yt(j,")"),j.forEach(he),f=Pe(z),h=Ce(z,"TD",{});var N=Ue(h);l=Ce(N,"INPUT",{type:!0,class:!0}),N.forEach(he),c=Pe(z),p=Ce(z,"TD",{});var H=Ue(p);g=Ce(H,"INPUT",{type:!0,class:!0}),H.forEach(he),m=Pe(z),d=Ce(z,"TD",{});var G=Ue(d);x=Ce(G,"INPUT",{type:!0,class:!0}),G.forEach(he),b=Pe(z),z.forEach(he),this.h()},h(){Re(t,"class","text-center"),Re(l,"type","number"),Re(l,"class","input input-bordered input-xs w-full max-w-xs"),l.value=u=i[22].x.toFixed(2),Re(g,"type","number"),Re(g,"class","input input-bordered input-xs w-full max-w-xs"),g.value=_=i[22].y.toFixed(2),Re(x,"type","number"),Re(x,"class","input input-bordered input-xs w-full max-w-xs"),x.value=y=i[22].z.toFixed(2)},m(D,z){rt(D,e,z),re(e,t),re(t,n),re(t,r),re(t,s),re(t,o),re(t,a),re(e,f),re(e,h),re(h,l),re(e,c),re(e,p),re(p,g),re(e,m),re(e,d),re(d,x),re(e,b),M||(S=[Lt(l,"input",F),Lt(g,"input",A),Lt(x,"input",w)],M=!0)},p(D,z){i=D,z[0]&2&&u!==(u=i[22].x.toFixed(2))&&l.value!==u&&(l.value=u),z[0]&2&&_!==(_=i[22].y.toFixed(2))&&g.value!==_&&(g.value=_),z[0]&2&&y!==(y=i[22].z.toFixed(2))&&x.value!==y&&(x.value=y)},d(D){D&&he(e),M=!1,Js(S)}}}function Cl(i){let e,t=i[19],n=[];for(let r=0;r<t.length;r+=1)n[r]=Al(gl(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Ln()},l(r){for(let s=0;s<n.length;s+=1)n[s].l(r);e=Ln()},m(r,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,s);rt(r,e,s)},p(r,s){if(s[0]&2){t=r[19];let o;for(o=0;o<t.length;o+=1){const a=gl(r,t,o);n[o]?n[o].p(a,s):(n[o]=Al(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){ti(n,r),r&&he(e)}}}function $g(i){let e,t,n,r,s,o,a,f,h,l,u,c,p,g=i[2].u.toFixed(2)+"",_,m,d,x,y,b,M,S,F,A,w,D,z,j,N,H,G,K,B,J,ie,ce,ne,ye,$,ue,xe,ee,V,ke,Ne,me,Fe,st,Ie,Ye,ft,gt,Mt,pt,$e,ct,_t,P,v,E,R,O,W,C,k,L,q,oe,de,Q,Me,Ee=i[3],Se=[];for(let _e=0;_e<Ee.length;_e+=1)Se[_e]=Ml(yl(i,Ee,_e));let Be=i[2].curveActive===1&&wl(i),U=Object.entries(i[2].toggles),Y=[];for(let _e=0;_e<U.length;_e+=1)Y[_e]=bl(xl(i,U,_e));let se=i[2].curveActive===1&&Dl(i),pe=i[0].points,ge=[];for(let _e=0;_e<pe.length;_e+=1)ge[_e]=El(_l(i,pe,_e));let ot=i[1].points,Oe=[];for(let _e=0;_e<ot.length;_e+=1)Oe[_e]=Cl(ml(i,ot,_e));return{c(){e=Ae("div"),t=Ae("h1"),n=xt("Control Panel"),r=Te(),s=Ae("div");for(let _e=0;_e<Se.length;_e+=1)Se[_e].c();o=Te(),a=Ae("label"),f=Ae("input"),h=Te(),l=Ae("span"),u=Ae("b"),c=xt("U"),p=Te(),_=xt(g),m=Te(),Be&&Be.c(),d=Te(),x=Ae("div");for(let _e=0;_e<Y.length;_e+=1)Y[_e].c();y=Te(),se&&se.c(),b=Te(),M=Ae("div"),S=Ae("div"),F=Ae("button"),A=xt("Add Control Point"),w=Te(),D=Ae("button"),z=xt("Remove Control Point"),j=Te(),N=Ae("div"),H=Ae("table"),G=Ae("thead"),K=Ae("tr"),B=Ae("th"),J=xt("Index"),ie=Te(),ce=Ae("th"),ne=xt("X"),ye=Te(),$=Ae("th"),ue=xt("Y"),xe=Te(),ee=Ae("th"),V=xt("Z"),ke=Te();for(let _e=0;_e<ge.length;_e+=1)ge[_e].c();Ne=Te(),me=Ae("div"),Fe=Ae("div"),st=Ae("button"),Ie=xt("Add Control Point Row"),Ye=Te(),ft=Ae("button"),gt=xt("Remove Control Point Row"),Mt=Te(),pt=Ae("div"),$e=Ae("table"),ct=Ae("thead"),_t=Ae("tr"),P=Ae("th"),v=xt("Index"),E=Te(),R=Ae("th"),O=xt("X"),W=Te(),C=Ae("th"),k=xt("Y"),L=Te(),q=Ae("th"),oe=xt("Z"),de=Te();for(let _e=0;_e<Oe.length;_e+=1)Oe[_e].c();this.h()},l(_e){e=Ce(_e,"DIV",{class:!0});var et=Ue(e);t=Ce(et,"H1",{class:!0});var fe=Ue(t);n=yt(fe,"Control Panel"),fe.forEach(he),r=Pe(et),s=Ce(et,"DIV",{class:!0});var vt=Ue(s);for(let at=0;at<Se.length;at+=1)Se[at].l(vt);vt.forEach(he),o=Pe(et),a=Ce(et,"LABEL",{class:!0});var Wt=Ue(a);f=Ce(Wt,"INPUT",{type:!0,min:!0,max:!0,class:!0}),h=Pe(Wt),l=Ce(Wt,"SPAN",{class:!0});var Rn=Ue(l);u=Ce(Rn,"B",{});var Oi=Ue(u);c=yt(Oi,"U"),Oi.forEach(he),p=Pe(Rn),_=yt(Rn,g),Rn.forEach(he),Wt.forEach(he),m=Pe(et),Be&&Be.l(et),d=Pe(et),x=Ce(et,"DIV",{class:!0});var vi=Ue(x);for(let at=0;at<Y.length;at+=1)Y[at].l(vi);y=Pe(vi),se&&se.l(vi),vi.forEach(he),b=Pe(et),M=Ce(et,"DIV",{});var nr=Ue(M);S=Ce(nr,"DIV",{class:!0});var Zn=Ue(S);F=Ce(Zn,"BUTTON",{class:!0});var T=Ue(F);A=yt(T,"Add Control Point"),T.forEach(he),w=Pe(Zn),D=Ce(Zn,"BUTTON",{class:!0});var Z=Ue(D);z=yt(Z,"Remove Control Point"),Z.forEach(he),j=Pe(Zn),N=Ce(Zn,"DIV",{class:!0});var te=Ue(N);H=Ce(te,"TABLE",{class:!0});var X=Ue(H);G=Ce(X,"THEAD",{});var ae=Ue(G);K=Ce(ae,"TR",{});var Le=Ue(K);B=Ce(Le,"TH",{});var He=Ue(B);J=yt(He,"Index"),He.forEach(he),ie=Pe(Le),ce=Ce(Le,"TH",{class:!0});var Ve=Ue(ce);ne=yt(Ve,"X"),Ve.forEach(he),ye=Pe(Le),$=Ce(Le,"TH",{class:!0});var tt=Ue($);ue=yt(tt,"Y"),tt.forEach(he),xe=Pe(Le),ee=Ce(Le,"TH",{class:!0});var nt=Ue(ee);V=yt(nt,"Z"),nt.forEach(he),Le.forEach(he),ae.forEach(he),ke=Pe(X);for(let at=0;at<ge.length;at+=1)ge[at].l(X);X.forEach(he),te.forEach(he),Zn.forEach(he),nr.forEach(he),Ne=Pe(et),me=Ce(et,"DIV",{});var it=Ue(me);Fe=Ce(it,"DIV",{class:!0});var Ke=Ue(Fe);st=Ce(Ke,"BUTTON",{class:!0});var ht=Ue(st);Ie=yt(ht,"Add Control Point Row"),ht.forEach(he),Ye=Pe(Ke),ft=Ce(Ke,"BUTTON",{class:!0});var Rt=Ue(ft);gt=yt(Rt,"Remove Control Point Row"),Rt.forEach(he),Mt=Pe(Ke),pt=Ce(Ke,"DIV",{class:!0});var Qt=Ue(pt);$e=Ce(Qt,"TABLE",{class:!0});var dn=Ue($e);ct=Ce(dn,"THEAD",{});var Et=Ue(ct);_t=Ce(Et,"TR",{});var Qe=Ue(_t);P=Ce(Qe,"TH",{});var xi=Ue(P);v=yt(xi,"Index"),xi.forEach(he),E=Pe(Qe),R=Ce(Qe,"TH",{class:!0});var Pt=Ue(R);O=yt(Pt,"X"),Pt.forEach(he),W=Pe(Qe),C=Ce(Qe,"TH",{class:!0});var Jt=Ue(C);k=yt(Jt,"Y"),Jt.forEach(he),L=Pe(Qe),q=Ce(Qe,"TH",{class:!0});var Bt=Ue(q);oe=yt(Bt,"Z"),Bt.forEach(he),Qe.forEach(he),Et.forEach(he),de=Pe(dn);for(let at=0;at<Oe.length;at+=1)Oe[at].l(dn);dn.forEach(he),Qt.forEach(he),Ke.forEach(he),it.forEach(he),et.forEach(he),this.h()},h(){Re(t,"class","text text-xl font-semibold text-center"),Re(s,"class","tabs justify-center"),Re(f,"type","range"),Re(f,"min","0"),Re(f,"max","100"),f.value="50",Re(f,"class","range"),Re(l,"class","text-left text-sm"),Re(a,"class","label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap"),Re(x,"class","form-control flex-row lg:flex-wrap justify-evenly lg:justify-start"),Re(F,"class","btn btn-outline btn-xs"),Re(D,"class","btn btn-outline btn-xs"),Re(ce,"class","text-center"),Re($,"class","text-center"),Re(ee,"class","text-center"),Re(H,"class","table table-compact w-full"),Re(N,"class","h-52 overflow-auto"),Re(S,"class","flex flex-col justify-center space-y-2"),Ti(M,"hidden",i[2].curveActive!=0),Re(st,"class","btn btn-outline btn-xs"),Re(ft,"class","btn btn-outline btn-xs"),Re(R,"class","text-center"),Re(C,"class","text-center"),Re(q,"class","text-center"),Re($e,"class","table table-compact w-full"),Re(pt,"class","h-52 overflow-auto"),Re(Fe,"class","flex flex-col justify-center space-y-2"),Ti(me,"hidden",i[2].curveActive!=1),Re(e,"class","p-2")},m(_e,et){rt(_e,e,et),re(e,t),re(t,n),re(e,r),re(e,s);for(let fe=0;fe<Se.length;fe+=1)Se[fe]&&Se[fe].m(s,null);re(e,o),re(e,a),re(a,f),re(a,h),re(a,l),re(l,u),re(u,c),re(l,p),re(l,_),re(e,m),Be&&Be.m(e,null),re(e,d),re(e,x);for(let fe=0;fe<Y.length;fe+=1)Y[fe]&&Y[fe].m(x,null);re(x,y),se&&se.m(x,null),re(e,b),re(e,M),re(M,S),re(S,F),re(F,A),re(S,w),re(S,D),re(D,z),re(S,j),re(S,N),re(N,H),re(H,G),re(G,K),re(K,B),re(B,J),re(K,ie),re(K,ce),re(ce,ne),re(K,ye),re(K,$),re($,ue),re(K,xe),re(K,ee),re(ee,V),re(H,ke);for(let fe=0;fe<ge.length;fe+=1)ge[fe]&&ge[fe].m(H,null);re(e,Ne),re(e,me),re(me,Fe),re(Fe,st),re(st,Ie),re(Fe,Ye),re(Fe,ft),re(ft,gt),re(Fe,Mt),re(Fe,pt),re(pt,$e),re($e,ct),re(ct,_t),re(_t,P),re(P,v),re(_t,E),re(_t,R),re(R,O),re(_t,W),re(_t,C),re(C,k),re(_t,L),re(_t,q),re(q,oe),re($e,de);for(let fe=0;fe<Oe.length;fe+=1)Oe[fe]&&Oe[fe].m($e,null);Q||(Me=[Lt(f,"input",i[5]),Lt(F,"click",i[9]),Lt(D,"click",i[10]),Lt(st,"click",i[14]),Lt(ft,"click",i[15])],Q=!0)},p(_e,et){if(et[0]&12){Ee=_e[3];let fe;for(fe=0;fe<Ee.length;fe+=1){const vt=yl(_e,Ee,fe);Se[fe]?Se[fe].p(vt,et):(Se[fe]=Ml(vt),Se[fe].c(),Se[fe].m(s,null))}for(;fe<Se.length;fe+=1)Se[fe].d(1);Se.length=Ee.length}if(et[0]&4&&g!==(g=_e[2].u.toFixed(2)+"")&&Qs(_,g),_e[2].curveActive===1?Be?Be.p(_e,et):(Be=wl(_e),Be.c(),Be.m(e,d)):Be&&(Be.d(1),Be=null),et[0]&4){U=Object.entries(_e[2].toggles);let fe;for(fe=0;fe<U.length;fe+=1){const vt=xl(_e,U,fe);Y[fe]?Y[fe].p(vt,et):(Y[fe]=bl(vt),Y[fe].c(),Y[fe].m(x,y))}for(;fe<Y.length;fe+=1)Y[fe].d(1);Y.length=U.length}if(_e[2].curveActive===1?se?se.p(_e,et):(se=Dl(_e),se.c(),se.m(x,null)):se&&(se.d(1),se=null),et[0]&1){pe=_e[0].points;let fe;for(fe=0;fe<pe.length;fe+=1){const vt=_l(_e,pe,fe);ge[fe]?ge[fe].p(vt,et):(ge[fe]=El(vt),ge[fe].c(),ge[fe].m(H,null))}for(;fe<ge.length;fe+=1)ge[fe].d(1);ge.length=pe.length}if(et[0]&4&&Ti(M,"hidden",_e[2].curveActive!=0),et[0]&2){ot=_e[1].points;let fe;for(fe=0;fe<ot.length;fe+=1){const vt=ml(_e,ot,fe);Oe[fe]?Oe[fe].p(vt,et):(Oe[fe]=Cl(vt),Oe[fe].c(),Oe[fe].m($e,null))}for(;fe<Oe.length;fe+=1)Oe[fe].d(1);Oe.length=ot.length}et[0]&4&&Ti(me,"hidden",_e[2].curveActive!=1)},i:mi,o:mi,d(_e){_e&&he(e),ti(Se,_e),Be&&Be.d(),ti(Y,_e),se&&se.d(),ti(ge,_e),ti(Oe,_e),Q=!1,Js(Me)}}}function e_(i,e,t){let n;Gt(i,Ai,S=>t(2,n=S));let{curve:r}=e,{surface:s}=e,o=["Curve","Surface"];const a=S=>{Ai.update(F=>({...F,curveActive:S}))},f=S=>{ns(Ai,n.u=+S.currentTarget.value/100,n)},h=S=>{ns(Ai,n.w=+S.currentTarget.value/100,n)};function l(S){n.toggles[S].value=this.checked,Ai.set(n)}function u(S){n.surface[S].value=this.checked,Ai.set(n)}const c=()=>{r.addPoint(new I(0,0,0)),t(0,r)},p=()=>{r.removePoint(),t(0,r)},g=(S,F,A,w)=>{t(0,F[A].vector.x=+w.currentTarget.value,r)},_=(S,F,A,w)=>{t(0,F[A].vector.y=+w.currentTarget.value,r)},m=(S,F,A,w)=>{t(0,F[A].vector.z=+w.currentTarget.value,r)},d=()=>{s.addRow([new I(0,0,0),new I(0,0,0),new I(0,0,0),new I(0,0,0)]),t(1,s)},x=()=>{s.removeRow(),t(1,s)},y=(S,F,A,w)=>{t(1,F[A].vector.x=+w.currentTarget.value,s)},b=(S,F,A,w)=>{t(1,F[A].vector.y=+w.currentTarget.value,s)},M=(S,F,A,w)=>{t(1,F[A].vector.z=+w.currentTarget.value,s)};return i.$$set=S=>{"curve"in S&&t(0,r=S.curve),"surface"in S&&t(1,s=S.surface)},[r,s,n,o,a,f,h,l,u,c,p,g,_,m,d,x,y,b,M]}class t_ extends on{constructor(e){super(),an(this,e,e_,$g,un,{curve:0,surface:1},null,[-1,-1])}}function ua(){return ua=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ua.apply(this,arguments)}var ef={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function hn(i){return typeof i=="number"}function Pi(i){return!i||typeof i!="object"||typeof i.constructor!="function"?!1:i.isBigNumber===!0&&typeof i.constructor.prototype=="object"&&i.constructor.prototype.isBigNumber===!0||typeof i.constructor.isDecimal=="function"&&i.constructor.isDecimal(i)===!0}function tf(i){return i&&typeof i=="object"&&Object.getPrototypeOf(i).isComplex===!0||!1}function nf(i){return i&&typeof i=="object"&&Object.getPrototypeOf(i).isFraction===!0||!1}function rf(i){return i&&i.constructor.prototype.isUnit===!0||!1}function js(i){return typeof i=="string"}var bn=Array.isArray;function is(i){return i&&i.constructor.prototype.isMatrix===!0||!1}function la(i){return Array.isArray(i)||is(i)}function n_(i){return i&&i.isDenseMatrix&&i.constructor.prototype.isMatrix===!0||!1}function i_(i){return i&&i.isSparseMatrix&&i.constructor.prototype.isMatrix===!0||!1}function r_(i){return i&&i.constructor.prototype.isRange===!0||!1}function sf(i){return i&&i.constructor.prototype.isIndex===!0||!1}function s_(i){return typeof i=="boolean"}function o_(i){return i&&i.constructor.prototype.isResultSet===!0||!1}function a_(i){return i&&i.constructor.prototype.isHelp===!0||!1}function u_(i){return typeof i=="function"}function l_(i){return i instanceof Date}function c_(i){return i instanceof RegExp}function f_(i){return!!(i&&typeof i=="object"&&i.constructor===Object&&!tf(i)&&!nf(i))}function h_(i){return i===null}function d_(i){return i===void 0}function p_(i){return i&&i.isAccessorNode===!0&&i.constructor.prototype.isNode===!0||!1}function m_(i){return i&&i.isArrayNode===!0&&i.constructor.prototype.isNode===!0||!1}function g_(i){return i&&i.isAssignmentNode===!0&&i.constructor.prototype.isNode===!0||!1}function __(i){return i&&i.isBlockNode===!0&&i.constructor.prototype.isNode===!0||!1}function v_(i){return i&&i.isConditionalNode===!0&&i.constructor.prototype.isNode===!0||!1}function x_(i){return i&&i.isConstantNode===!0&&i.constructor.prototype.isNode===!0||!1}function y_(i){return i&&i.isFunctionAssignmentNode===!0&&i.constructor.prototype.isNode===!0||!1}function M_(i){return i&&i.isFunctionNode===!0&&i.constructor.prototype.isNode===!0||!1}function w_(i){return i&&i.isIndexNode===!0&&i.constructor.prototype.isNode===!0||!1}function b_(i){return i&&i.isNode===!0&&i.constructor.prototype.isNode===!0||!1}function D_(i){return i&&i.isObjectNode===!0&&i.constructor.prototype.isNode===!0||!1}function S_(i){return i&&i.isOperatorNode===!0&&i.constructor.prototype.isNode===!0||!1}function E_(i){return i&&i.isParenthesisNode===!0&&i.constructor.prototype.isNode===!0||!1}function A_(i){return i&&i.isRangeNode===!0&&i.constructor.prototype.isNode===!0||!1}function C_(i){return i&&i.isRelationalNode===!0&&i.constructor.prototype.isNode===!0||!1}function T_(i){return i&&i.isSymbolNode===!0&&i.constructor.prototype.isNode===!0||!1}function P_(i){return i&&i.constructor.prototype.isChain===!0||!1}function Wo(i){var e=typeof i;return e==="object"?i===null?"null":Pi(i)?"BigNumber":i.constructor&&i.constructor.name?i.constructor.name:"Object":e}function Yi(i){var e=typeof i;if(e==="number"||e==="string"||e==="boolean"||i===null||i===void 0)return i;if(typeof i.clone=="function")return i.clone();if(Array.isArray(i))return i.map(function(t){return Yi(t)});if(i instanceof Date)return new Date(i.valueOf());if(Pi(i))return i;if(i instanceof RegExp)throw new TypeError("Cannot clone "+i);return F_(i,Yi)}function F_(i,e){var t={};for(var n in i)qs(i,n)&&(t[n]=e(i[n]));return t}function ca(i,e){var t,n,r;if(Array.isArray(i)){if(!Array.isArray(e)||i.length!==e.length)return!1;for(n=0,r=i.length;n<r;n++)if(!ca(i[n],e[n]))return!1;return!0}else{if(typeof i=="function")return i===e;if(i instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in i)if(!(t in e)||!ca(i[t],e[t]))return!1;for(t in e)if(!(t in i))return!1;return!0}else return i===e}}function qs(i,e){return i&&Object.hasOwnProperty.call(i,e)}function L_(i,e){for(var t={},n=0;n<e.length;n++){var r=e[n],s=i[r];s!==void 0&&(t[r]=s)}return t}var R_=["Matrix","Array"],I_=["number","BigNumber","Fraction"],of=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(ef)};ua(of,ef,{MATRIX_OPTIONS:R_,NUMBER_OPTIONS:I_});function Un(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=N_(i))||e&&i&&typeof i.length=="number"){t&&(i=t);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(h){throw h},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){t=t.call(i)},n:function(){var h=t.next();return s=h.done,h},e:function(h){o=!0,a=h},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(o)throw a}}}}function N_(i,e){if(i){if(typeof i=="string")return Tl(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Tl(i,e)}}function Tl(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Ar(i){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ar(i)}function Pl(){return!0}function An(){return!1}function br(){}var Fl="Argument is not a typed-function.";function af(){function i(v){return Ar(v)==="object"&&v!==null&&v.constructor===Object}var e=[{name:"number",test:function(E){return typeof E=="number"}},{name:"string",test:function(E){return typeof E=="string"}},{name:"boolean",test:function(E){return typeof E=="boolean"}},{name:"Function",test:function(E){return typeof E=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(E){return E instanceof Date}},{name:"RegExp",test:function(E){return E instanceof RegExp}},{name:"Object",test:i},{name:"null",test:function(E){return E===null}},{name:"undefined",test:function(E){return E===void 0}}],t={name:"any",test:Pl,isAny:!0},n,r,s=0,o={createCount:0};function a(v){var E=n.get(v);if(E)return E;var R='Unknown type "'+v+'"',O=v.toLowerCase(),W,C=Un(r),k;try{for(C.s();!(k=C.n()).done;)if(W=k.value,W.toLowerCase()===O){R+='. Did you mean "'+W+'" ?';break}}catch(L){C.e(L)}finally{C.f()}throw new TypeError(R)}function f(v){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any",R=E?a(E).index:r.length,O=[],W=0;W<v.length;++W){if(!v[W]||typeof v[W].name!="string"||typeof v[W].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");var C=v[W].name;if(n.has(C))throw new TypeError('Duplicate type name "'+C+'"');O.push(C),n.set(C,{name:C,test:v[W].test,isAny:v[W].isAny,index:R+W,conversionsTo:[]})}var k=r.slice(R);r=r.slice(0,R).concat(O).concat(k);for(var L=R+O.length;L<r.length;++L)n.get(r[L]).index=L}function h(){n=new Map,r=[],s=0,f([t],!1)}h(),f(e);function l(){var v,E=Un(r),R;try{for(E.s();!(R=E.n()).done;)v=R.value,n.get(v).conversionsTo=[]}catch(O){E.e(O)}finally{E.f()}s=0}function u(v){var E=r.filter(function(R){var O=n.get(R);return!O.isAny&&O.test(v)});return E.length?E:["any"]}function c(v){return v&&typeof v=="function"&&"_typedFunctionData"in v}function p(v,E,R){if(!c(v))throw new TypeError(Fl);var O=R&&R.exact,W=Array.isArray(E)?E.join(","):E,C=b(W),k=m(C);if(!O||k in v.signatures){var L=v._typedFunctionData.signatureMap.get(k);if(L)return L}var q=C.length,oe;if(O){oe=[];var de;for(de in v.signatures)oe.push(v._typedFunctionData.signatureMap.get(de))}else oe=v._typedFunctionData.signatures;for(var Q=0;Q<q;++Q){var Me=C[Q],Ee=[],Se=void 0,Be=Un(oe),U;try{for(Be.s();!(U=Be.n()).done;){Se=U.value;var Y=A(Se.params,Q);if(!(!Y||Me.restParam&&!Y.restParam)){if(!Y.hasAny){var se=function(){var Oe=y(Y);if(Me.types.some(function(_e){return!Oe.has(_e.name)}))return"continue"}();if(se==="continue")continue}Ee.push(Se)}}}catch(Oe){Be.e(Oe)}finally{Be.f()}if(oe=Ee,oe.length===0)break}var pe,ge=Un(oe),ot;try{for(ge.s();!(ot=ge.n()).done;)if(pe=ot.value,pe.params.length<=q)return pe}catch(Oe){ge.e(Oe)}finally{ge.f()}throw new TypeError("Signature not found (signature: "+(v.name||"unnamed")+"("+m(C,", ")+"))")}function g(v,E,R){return p(v,E,R).implementation}function _(v,E){var R=a(E);if(R.test(v))return v;var O=R.conversionsTo;if(O.length===0)throw new Error("There are no conversions to "+E+" defined.");for(var W=0;W<O.length;W++){var C=a(O[W].from);if(C.test(v))return O[W].convert(v)}throw new Error("Cannot convert "+v+" to "+E)}function m(v){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return v.map(function(R){return R.name}).join(E)}function d(v){var E=v.indexOf("...")===0,R=E?v.length>3?v.slice(3):"any":v,O=R.split("|").map(function(L){return a(L.trim())}),W=!1,C=E?"...":"",k=O.map(function(L){return W=L.isAny||W,C+=L.name+"|",{name:L.name,typeIndex:L.index,test:L.test,isAny:L.isAny,conversion:null,conversionIndex:-1}});return{types:k,name:C.slice(0,-1),hasAny:W,hasConversion:!1,restParam:E}}function x(v){var E=v.types.map(function(k){return k.name}),R=B(E),O=v.hasAny,W=v.name,C=R.map(function(k){var L=a(k.from);return O=L.isAny||O,W+="|"+k.from,{name:k.from,typeIndex:L.index,test:L.test,isAny:L.isAny,conversion:k,conversionIndex:k.index}});return{types:v.types.concat(C),name:W,hasAny:O,hasConversion:C.length>0,restParam:v.restParam}}function y(v){return v.typeSet||(v.typeSet=new Set,v.types.forEach(function(E){return v.typeSet.add(E.name)})),v.typeSet}function b(v){var E=[];if(typeof v!="string")throw new TypeError("Signatures must be strings");var R=v.trim();if(R==="")return E;for(var O=R.split(","),W=0;W<O.length;++W){var C=d(O[W].trim());if(C.restParam&&W!==O.length-1)throw new SyntaxError('Unexpected rest parameter "'+O[W]+'": only allowed for the last parameter');if(C.types.length===0)return null;E.push(C)}return E}function M(v){var E=Ne(v);return E?E.restParam:!1}function S(v){if(!v||v.types.length===0)return Pl;if(v.types.length===1)return a(v.types[0].name).test;if(v.types.length===2){var E=a(v.types[0].name).test,R=a(v.types[1].name).test;return function(C){return E(C)||R(C)}}else{var O=v.types.map(function(W){return a(W.name).test});return function(C){for(var k=0;k<O.length;k++)if(O[k](C))return!0;return!1}}}function F(v){var E,R,O;if(M(v)){E=ke(v).map(S);var W=E.length,C=S(Ne(v)),k=function(q){for(var oe=W;oe<q.length;oe++)if(!C(q[oe]))return!1;return!0};return function(q){for(var oe=0;oe<E.length;oe++)if(!E[oe](q[oe]))return!1;return k(q)&&q.length>=W+1}}else return v.length===0?function(q){return q.length===0}:v.length===1?(R=S(v[0]),function(q){return R(q[0])&&q.length===1}):v.length===2?(R=S(v[0]),O=S(v[1]),function(q){return R(q[0])&&O(q[1])&&q.length===2}):(E=v.map(S),function(q){for(var oe=0;oe<E.length;oe++)if(!E[oe](q[oe]))return!1;return q.length===E.length})}function A(v,E){return E<v.length?v[E]:M(v)?Ne(v):null}function w(v,E){var R=A(v,E);return R?y(R):new Set}function D(v){return v.conversion===null||v.conversion===void 0}function z(v,E){var R=new Set;return v.forEach(function(O){var W=w(O.params,E),C,k=Un(W),L;try{for(k.s();!(L=k.n()).done;)C=L.value,R.add(C)}catch(q){k.e(q)}finally{k.f()}}),R.has("any")?["any"]:Array.from(R)}function j(v,E,R){var O,W,C=v||"unnamed",k=R,L,q=function(){var Be=[];if(k.forEach(function(Y){var se=A(Y.params,L),pe=S(se);(L<Y.params.length||M(Y.params))&&pe(E[L])&&Be.push(Y)}),Be.length===0){if(W=z(k,L),W.length>0){var U=u(E[L]);return O=new TypeError("Unexpected type of argument in function "+C+" (expected: "+W.join(" or ")+", actual: "+U.join(" | ")+", index: "+L+")"),O.data={category:"wrongType",fn:C,index:L,actual:U,expected:W},{v:O}}}else k=Be};for(L=0;L<E.length;L++){var oe=q();if(Ar(oe)==="object")return oe.v}var de=k.map(function(Se){return M(Se.params)?1/0:Se.params.length});if(E.length<Math.min.apply(null,de))return W=z(k,L),O=new TypeError("Too few arguments in function "+C+" (expected: "+W.join(" or ")+", index: "+E.length+")"),O.data={category:"tooFewArgs",fn:C,index:E.length,expected:W},O;var Q=Math.max.apply(null,de);if(E.length>Q)return O=new TypeError("Too many arguments in function "+C+" (expected: "+Q+", actual: "+E.length+")"),O.data={category:"tooManyArgs",fn:C,index:E.length,expectedLength:Q},O;for(var Me=[],Ee=0;Ee<E.length;++Ee)Me.push(u(E[Ee]).join("|"));return O=new TypeError('Arguments of type "'+Me.join(", ")+'" do not match any of the defined signatures of function '+C+"."),O.data={category:"mismatch",actual:Me},O}function N(v){for(var E=r.length+1,R=0;R<v.types.length;R++)D(v.types[R])&&(E=Math.min(E,v.types[R].typeIndex));return E}function H(v){for(var E=s+1,R=0;R<v.types.length;R++)D(v.types[R])||(E=Math.min(E,v.types[R].conversionIndex));return E}function G(v,E){if(v.hasAny){if(!E.hasAny)return 1}else if(E.hasAny)return-1;if(v.restParam){if(!E.restParam)return 1}else if(E.restParam)return-1;if(v.hasConversion){if(!E.hasConversion)return 1}else if(E.hasConversion)return-1;var R=N(v)-N(E);if(R<0)return-1;if(R>0)return 1;var O=H(v)-H(E);return O<0?-1:O>0?1:0}function K(v,E){var R=v.params,O=E.params,W=Ne(R),C=Ne(O),k=M(R),L=M(O);if(k&&W.hasAny){if(!L||!C.hasAny)return 1}else if(L&&C.hasAny)return-1;var q=0,oe=0,de,Q=Un(R),Me;try{for(Q.s();!(Me=Q.n()).done;)de=Me.value,de.hasAny&&++q,de.hasConversion&&++oe}catch(fe){Q.e(fe)}finally{Q.f()}var Ee=0,Se=0,Be=Un(O),U;try{for(Be.s();!(U=Be.n()).done;)de=U.value,de.hasAny&&++Ee,de.hasConversion&&++Se}catch(fe){Be.e(fe)}finally{Be.f()}if(q!==Ee)return q-Ee;if(k&&W.hasConversion){if(!L||!C.hasConversion)return 1}else if(L&&C.hasConversion)return-1;if(oe!==Se)return oe-Se;if(k){if(!L)return 1}else if(L)return-1;var Y=(R.length-O.length)*(k?-1:1);if(Y!==0)return Y;for(var se=[],pe=0,ge=0;ge<R.length;++ge){var ot=G(R[ge],O[ge]);se.push(ot),pe+=ot}if(pe!==0)return pe;for(var Oe,_e=0,et=se;_e<et.length;_e++)if(Oe=et[_e],Oe!==0)return Oe;return 0}function B(v){if(v.length===0)return[];var E=v.map(a);v.length>1&&E.sort(function(q,oe){return q.index-oe.index});var R=E[0].conversionsTo;if(v.length===1)return R;R=R.concat([]);for(var O=new Set(v),W=1;W<E.length;++W){var C=void 0,k=Un(E[W].conversionsTo),L;try{for(k.s();!(L=k.n()).done;)C=L.value,O.has(C.from)||(R.push(C),O.add(C.from))}catch(q){k.e(q)}finally{k.f()}}return R}function J(v,E){var R=E;if(v.some(function(L){return L.hasConversion})){var O=M(v),W=v.map(ie);R=function(){for(var q=[],oe=O?arguments.length-1:arguments.length,de=0;de<oe;de++)q[de]=W[de](arguments[de]);return O&&(q[oe]=arguments[oe].map(W[oe])),E.apply(this,q)}}var C=R;if(M(v)){var k=v.length-1;C=function(){return R.apply(this,me(arguments,0,k).concat([me(arguments,k)]))}}return C}function ie(v){var E,R,O,W,C=[],k=[];switch(v.types.forEach(function(L){L.conversion&&(C.push(a(L.conversion.from).test),k.push(L.conversion.convert))}),k.length){case 0:return function(q){return q};case 1:return E=C[0],O=k[0],function(q){return E(q)?O(q):q};case 2:return E=C[0],R=C[1],O=k[0],W=k[1],function(q){return E(q)?O(q):R(q)?W(q):q};default:return function(q){for(var oe=0;oe<k.length;oe++)if(C[oe](q))return k[oe](q);return q}}}function ce(v){function E(R,O,W){if(O<R.length){var C=R[O],k=[];if(C.restParam){var L=C.types.filter(D);L.length<C.types.length&&k.push({types:L,name:"..."+L.map(function(q){return q.name}).join("|"),hasAny:L.some(function(q){return q.isAny}),hasConversion:!1,restParam:!0}),k.push(C)}else k=C.types.map(function(q){return{types:[q],name:q.name,hasAny:q.isAny,hasConversion:q.conversion,restParam:!1}});return st(k,function(q){return E(R,O+1,W.concat([q]))})}else return[W]}return E(v,0,[])}function ne(v,E){for(var R=Math.max(v.length,E.length),O=0;O<R;O++){var W=w(v,O),C=w(E,O),k=!1,L=void 0,q=Un(C),oe;try{for(q.s();!(oe=q.n()).done;)if(L=oe.value,W.has(L)){k=!0;break}}catch(Se){q.e(Se)}finally{q.f()}if(!k)return!1}var de=v.length,Q=E.length,Me=M(v),Ee=M(E);return Me?Ee?de===Q:Q>=de:Ee?de>=Q:de===Q}function ye(v){return v.map(function(E){return Mt(E)?ft(E.referToSelf.callback):gt(E)?Ye(E.referTo.references,E.referTo.callback):E})}function $(v,E,R){var O=[],W,C=Un(v),k;try{for(C.s();!(k=C.n()).done;){W=k.value;var L=R[W];if(typeof L!="number")throw new TypeError('No definition for referenced signature "'+W+'"');if(L=E[L],typeof L!="function")return!1;O.push(L)}}catch(q){C.e(q)}finally{C.f()}return O}function ue(v,E,R){for(var O=ye(v),W=new Array(O.length).fill(!1),C=!0;C;){C=!1;for(var k=!0,L=0;L<O.length;++L)if(!W[L]){var q=O[L];if(Mt(q))O[L]=q.referToSelf.callback(R),O[L].referToSelf=q.referToSelf,W[L]=!0,k=!1;else if(gt(q)){var oe=$(q.referTo.references,O,E);oe?(O[L]=q.referTo.callback.apply(this,oe),O[L].referTo=q.referTo,W[L]=!0,k=!1):C=!0}}if(k&&C)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return O}function xe(v){var E=/\bthis(\(|\.signatures\b)/;Object.keys(v).forEach(function(R){var O=v[R];if(E.test(O.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function ee(v,E){if(o.createCount++,Object.keys(E).length===0)throw new SyntaxError("No signatures provided");o.warnAgainstDeprecatedThis&&xe(E);var R=[],O=[],W={},C=[],k,L=function(){if(!Object.prototype.hasOwnProperty.call(E,k))return"continue";var at=b(k);if(!at)return"continue";R.forEach(function(Mi){if(ne(Mi,at))throw new TypeError('Conflicting signatures "'+m(Mi)+'" and "'+m(at)+'".')}),R.push(at);var ir=O.length;O.push(E[k]);var jt=at.map(x),Sn=void 0,yi=Un(ce(jt)),$t;try{for(yi.s();!($t=yi.n()).done;){Sn=$t.value;var rr=m(Sn);C.push({params:Sn,name:rr,fn:ir}),Sn.every(function(Mi){return!Mi.hasConversion})&&(W[rr]=ir)}}catch(Mi){yi.e(Mi)}finally{yi.f()}};for(k in E)var q=L();C.sort(K);var oe=ue(O,W,Jt),de;for(de in W)Object.prototype.hasOwnProperty.call(W,de)&&(W[de]=oe[W[de]]);for(var Q=[],Me=new Map,Ee=0,Se=C;Ee<Se.length;Ee++)de=Se[Ee],Me.has(de.name)||(de.fn=oe[de.fn],Q.push(de),Me.set(de.name,de));for(var Be=Q[0]&&Q[0].params.length<=2&&!M(Q[0].params),U=Q[1]&&Q[1].params.length<=2&&!M(Q[1].params),Y=Q[2]&&Q[2].params.length<=2&&!M(Q[2].params),se=Q[3]&&Q[3].params.length<=2&&!M(Q[3].params),pe=Q[4]&&Q[4].params.length<=2&&!M(Q[4].params),ge=Q[5]&&Q[5].params.length<=2&&!M(Q[5].params),ot=Be&&U&&Y&&se&&pe&&ge,Oe=0;Oe<Q.length;++Oe)Q[Oe].test=F(Q[Oe].params);for(var _e=Be?S(Q[0].params[0]):An,et=U?S(Q[1].params[0]):An,fe=Y?S(Q[2].params[0]):An,vt=se?S(Q[3].params[0]):An,Wt=pe?S(Q[4].params[0]):An,Rn=ge?S(Q[5].params[0]):An,Oi=Be?S(Q[0].params[1]):An,vi=U?S(Q[1].params[1]):An,nr=Y?S(Q[2].params[1]):An,Zn=se?S(Q[3].params[1]):An,T=pe?S(Q[4].params[1]):An,Z=ge?S(Q[5].params[1]):An,te=0;te<Q.length;++te)Q[te].implementation=J(Q[te].params,Q[te].fn);var X=Be?Q[0].implementation:br,ae=U?Q[1].implementation:br,Le=Y?Q[2].implementation:br,He=se?Q[3].implementation:br,Ve=pe?Q[4].implementation:br,tt=ge?Q[5].implementation:br,nt=Be?Q[0].params.length:-1,it=U?Q[1].params.length:-1,Ke=Y?Q[2].params.length:-1,ht=se?Q[3].params.length:-1,Rt=pe?Q[4].params.length:-1,Qt=ge?Q[5].params.length:-1,dn=ot?6:0,Et=Q.length,Qe=Q.map(function(Bt){return Bt.test}),xi=Q.map(function(Bt){return Bt.implementation}),Pt=function(){for(var at=dn;at<Et;at++)if(Qe[at](arguments))return xi[at].apply(this,arguments);return o.onMismatch(v,arguments,Q)};function Jt(Bt,at){return arguments.length===nt&&_e(Bt)&&Oi(at)?X.apply(this,arguments):arguments.length===it&&et(Bt)&&vi(at)?ae.apply(this,arguments):arguments.length===Ke&&fe(Bt)&&nr(at)?Le.apply(this,arguments):arguments.length===ht&&vt(Bt)&&Zn(at)?He.apply(this,arguments):arguments.length===Rt&&Wt(Bt)&&T(at)?Ve.apply(this,arguments):arguments.length===Qt&&Rn(Bt)&&Z(at)?tt.apply(this,arguments):Pt.apply(this,arguments)}try{Object.defineProperty(Jt,"name",{value:v})}catch{}return Jt.signatures=W,Jt._typedFunctionData={signatures:Q,signatureMap:Me},Jt}function V(v,E,R){throw j(v,E,R)}function ke(v){return me(v,0,v.length-1)}function Ne(v){return v[v.length-1]}function me(v,E,R){return Array.prototype.slice.call(v,E,R)}function Fe(v,E){for(var R=0;R<v.length;R++)if(E(v[R]))return v[R]}function st(v,E){return Array.prototype.concat.apply([],v.map(E))}function Ie(){var v=ke(arguments).map(function(R){return m(b(R))}),E=Ne(arguments);if(typeof E!="function")throw new TypeError("Callback function expected as last argument");return Ye(v,E)}function Ye(v,E){return{referTo:{references:v,callback:E}}}function ft(v){if(typeof v!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:v}}}function gt(v){return v&&Ar(v.referTo)==="object"&&Array.isArray(v.referTo.references)&&typeof v.referTo.callback=="function"}function Mt(v){return v&&Ar(v.referToSelf)==="object"&&typeof v.referToSelf.callback=="function"}function pt(v,E){if(!v)return E;if(E&&E!==v){var R=new Error("Function names do not match (expected: "+v+", actual: "+E+")");throw R.data={actual:E,expected:v},R}return v}function $e(v){var E;for(var R in v)Object.prototype.hasOwnProperty.call(v,R)&&(c(v[R])||typeof v[R].signature=="string")&&(E=pt(E,v[R].name));return E}function ct(v,E){var R;for(R in E)if(Object.prototype.hasOwnProperty.call(E,R)){if(R in v&&E[R]!==v[R]){var O=new Error('Signature "'+R+'" is defined twice');throw O.data={signature:R,sourceFunction:E[R],destFunction:v[R]},O}v[R]=E[R]}}var _t=o;o=function(E){for(var R=typeof E=="string",O=R?1:0,W=R?E:"",C={},k=O;k<arguments.length;++k){var L=arguments[k],q={},oe=void 0;if(typeof L=="function"?(oe=L.name,typeof L.signature=="string"?q[L.signature]=L:c(L)&&(q=L.signatures)):i(L)&&(q=L,R||(oe=$e(L))),Object.keys(q).length===0){var de=new TypeError("Argument to 'typed' at index "+k+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw de.data={index:k,argument:L},de}R||(W=pt(W,oe)),ct(C,q)}return ee(W||"",C)},o.create=af,o.createCount=_t.createCount,o.onMismatch=V,o.throwMismatchError=V,o.createError=j,o.clear=h,o.clearConversions=l,o.addTypes=f,o._findType=a,o.referTo=Ie,o.referToSelf=ft,o.convert=_,o.findSignature=p,o.find=g,o.isTypedFunction=c,o.warnAgainstDeprecatedThis=!0,o.addType=function(v,E){var R="any";E!==!1&&n.has("Object")&&(R="Object"),o.addTypes([v],R)};function P(v){if(!v||typeof v.from!="string"||typeof v.to!="string"||typeof v.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(v.to===v.from)throw new SyntaxError('Illegal to define conversion from "'+v.from+'" to itself.')}return o.addConversion=function(v){P(v);var E=a(v.to);if(E.conversionsTo.every(function(R){return R.from!==v.from}))E.conversionsTo.push({from:v.from,convert:v.convert,index:s++});else throw new Error('There is already a conversion from "'+v.from+'" to "'+E.name+'"')},o.addConversions=function(v){v.forEach(o.addConversion)},o.removeConversion=function(v){P(v);var E=a(v.to),R=Fe(E.conversionsTo,function(W){return W.from===v.from});if(!R)throw new Error("Attempt to remove nonexistent conversion from "+v.from+" to "+v.to);if(R.convert!==v.convert)throw new Error("Conversion to remove does not match existing conversion");var O=E.conversionsTo.indexOf(R);E.conversionsTo.splice(O,1)},o.resolve=function(v,E){if(!c(v))throw new TypeError(Fl);for(var R=v._typedFunctionData.signatures,O=0;O<R.length;++O)if(R[O].test(E))return R[O];return null},o}const Ll=af();function Pn(i){return typeof i=="boolean"?!0:isFinite(i)?i===Math.round(i):!1}function jo(i,e,t){var n={2:"0b",8:"0o",16:"0x"},r=n[e],s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!Pn(t))throw new Error("size must be an integer");if(i>2**(t-1)-1||i<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!Pn(i))throw new Error("Value must be an integer");i<0&&(i=i+2**t),s="i".concat(t)}var o="";return i<0&&(i=-i,o="-"),"".concat(o).concat(r).concat(i.toString(e)).concat(s)}function fa(i,e){if(typeof e=="function")return e(i);if(i===1/0)return"Infinity";if(i===-1/0)return"-Infinity";if(isNaN(i))return"NaN";var t="auto",n,r;if(e&&(e.notation&&(t=e.notation),hn(e)?n=e:hn(e.precision)&&(n=e.precision),e.wordSize&&(r=e.wordSize,typeof r!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return U_(i,n);case"exponential":return uf(i,n);case"engineering":return B_(i,n);case"bin":return jo(i,2,r);case"oct":return jo(i,8,r);case"hex":return jo(i,16,r);case"auto":return O_(i,n,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],o=arguments[4];return s!=="."?s+o:o});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function ro(i){var e=String(i).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+i);var t=e[1],n=e[2],r=parseFloat(e[4]||"0"),s=n.indexOf(".");r+=s!==-1?s-1:n.length-1;var o=n.replace(".","").replace(/^0*/,function(a){return r-=a.length,""}).replace(/0*$/,"").split("").map(function(a){return parseInt(a)});return o.length===0&&(o.push(0),r++),{sign:t,coefficients:o,exponent:r}}function B_(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=ro(i),n=so(t,e),r=n.exponent,s=n.coefficients,o=r%3===0?r:r<0?r-3-r%3:r-r%3;if(hn(e))for(;e>s.length||r-o+1>s.length;)s.push(0);else for(var a=Math.abs(r-o)-(s.length-1),f=0;f<a;f++)s.push(0);for(var h=Math.abs(r-o),l=1;h>0;)l++,h--;var u=s.slice(l).join(""),c=hn(e)&&u.length||u.match(/[1-9]/)?"."+u:"",p=s.slice(0,l).join("")+c+"e"+(r>=0?"+":"")+o.toString();return n.sign+p}function U_(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=ro(i),n=typeof e=="number"?so(t,t.exponent+1+e):t,r=n.coefficients,s=n.exponent+1,o=s+(e||0);return r.length<o&&(r=r.concat(Lr(o-r.length))),s<0&&(r=Lr(-s+1).concat(r),s=1),s<r.length&&r.splice(s,0,s===0?"0.":"."),n.sign+r.join("")}function uf(i,e){if(isNaN(i)||!isFinite(i))return String(i);var t=ro(i),n=e?so(t,e):t,r=n.coefficients,s=n.exponent;r.length<e&&(r=r.concat(Lr(e-r.length)));var o=r.shift();return n.sign+o+(r.length>0?"."+r.join(""):"")+"e"+(s>=0?"+":"")+s}function O_(i,e,t){if(isNaN(i)||!isFinite(i))return String(i);var n=t&&t.lowerExp!==void 0?t.lowerExp:-3,r=t&&t.upperExp!==void 0?t.upperExp:5,s=ro(i),o=e?so(s,e):s;if(o.exponent<n||o.exponent>=r)return uf(i,e);var a=o.coefficients,f=o.exponent;a.length<e&&(a=a.concat(Lr(e-a.length))),a=a.concat(Lr(f-a.length+1+(a.length<e?e-a.length:0))),a=Lr(-f).concat(a);var h=f>0?f:0;return h<a.length-1&&a.splice(h+1,0,"."),o.sign+a.join("")}function so(i,e){for(var t={sign:i.sign,coefficients:i.coefficients,exponent:i.exponent},n=t.coefficients;e<=0;)n.unshift(0),t.exponent++,e++;if(n.length>e){var r=n.splice(e,n.length-e);if(r[0]>=5){var s=e-1;for(n[s]++;n[s]===10;)n.pop(),s===0&&(n.unshift(0),t.exponent++,s++),s--,n[s]++}}return t}function Lr(i){for(var e=[],t=0;t<i;t++)e.push(0);return e}function z_(i){return i.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function qo(i,e,t){var n=i.constructor,r=new n(2),s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!Pn(t))throw new Error("size must be an integer");if(i.greaterThan(r.pow(t-1).sub(1))||i.lessThan(r.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!i.isInteger())throw new Error("Value must be an integer");i.lessThan(0)&&(i=i.add(r.pow(t))),s="i".concat(t)}switch(e){case 2:return"".concat(i.toBinary()).concat(s);case 8:return"".concat(i.toOctal()).concat(s);case 16:return"".concat(i.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(e," not supported "))}}function k_(i,e){if(typeof e=="function")return e(i);if(!i.isFinite())return i.isNaN()?"NaN":i.gt(0)?"Infinity":"-Infinity";var t="auto",n,r;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?n=e:e.precision&&(n=e.precision),e.wordSize&&(r=e.wordSize,typeof r!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return G_(i,n);case"exponential":return Rl(i,n);case"engineering":return H_(i,n);case"bin":return qo(i,2,r);case"oct":return qo(i,8,r);case"hex":return qo(i,16,r);case"auto":{var s=e&&e.lowerExp!==void 0?e.lowerExp:-3,o=e&&e.upperExp!==void 0?e.upperExp:5;if(i.isZero())return"0";var a,f=i.toSignificantDigits(n),h=f.e;return h>=s&&h<o?a=f.toFixed():a=Rl(i,n),a.replace(/((\.\d*?)(0+))($|e)/,function(){var l=arguments[2],u=arguments[4];return l!=="."?l+u:u})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function H_(i,e){var t=i.e,n=t%3===0?t:t<0?t-3-t%3:t-t%3,r=i.mul(Math.pow(10,-n)),s=r.toPrecision(e);return s.indexOf("e")!==-1&&(s=r.toString()),s+"e"+(t>=0?"+":"")+n.toString()}function Rl(i,e){return e!==void 0?i.toExponential(e-1):i.toExponential()}function G_(i,e){return i.toFixed(e)}function us(i,e){var t=V_(i,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function V_(i,e){if(typeof i=="number")return fa(i,e);if(Pi(i))return k_(i,e);if(W_(i))return!e||e.fraction!=="decimal"?i.s*i.n+"/"+i.d:i.toString();if(Array.isArray(i))return lf(i,e);if(js(i))return'"'+i+'"';if(typeof i=="function")return i.syntax?String(i.syntax):"function";if(i&&typeof i=="object"){if(typeof i.format=="function")return i.format(e);if(i&&i.toString(e)!=={}.toString())return i.toString(e);var t=Object.keys(i).map(n=>'"'+n+'": '+us(i[n],e));return"{"+t.join(", ")+"}"}return String(i)}function lf(i,e){if(Array.isArray(i)){for(var t="[",n=i.length,r=0;r<n;r++)r!==0&&(t+=", "),t+=lf(i[r],e);return t+="]",t}else return us(i,e)}function W_(i){return i&&typeof i=="object"&&typeof i.s=="number"&&typeof i.n=="number"&&typeof i.d=="number"||!1}function Ht(i,e,t){if(!(this instanceof Ht))throw new SyntaxError("Constructor must be called with the new operator");this.actual=i,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(i)?"["+i.join(", ")+"]":i)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}Ht.prototype=new RangeError;Ht.prototype.constructor=RangeError;Ht.prototype.name="DimensionError";Ht.prototype.isDimensionError=!0;function jr(i,e,t){if(!(this instanceof jr))throw new SyntaxError("Constructor must be called with the new operator");this.index=i,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}jr.prototype=new RangeError;jr.prototype.constructor=RangeError;jr.prototype.name="IndexError";jr.prototype.isIndexError=!0;function ha(i){for(var e=[];Array.isArray(i);)e.push(i.length),i=i[0];return e}function cf(i,e,t){var n,r=i.length;if(r!==e[t])throw new Ht(r,e[t]);if(t<e.length-1){var s=t+1;for(n=0;n<r;n++){var o=i[n];if(!Array.isArray(o))throw new Ht(e.length-1,e.length,"<");cf(i[n],e,s)}}else for(n=0;n<r;n++)if(Array.isArray(i[n]))throw new Ht(e.length+1,e.length,">")}function Il(i,e){var t=e.length===0;if(t){if(Array.isArray(i))throw new Ht(i.length,0)}else cf(i,e,0)}function Cn(i,e){if(!hn(i)||!Pn(i))throw new TypeError("Index must be an integer (value: "+i+")");if(i<0||typeof e=="number"&&i>=e)throw new jr(i,e)}function Nl(i,e,t){if(!Array.isArray(i)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(r){if(!hn(r)||!Pn(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+us(e)+")")});var n=t!==void 0?t:0;return da(i,e,0,n),i}function da(i,e,t,n){var r,s,o=i.length,a=e[t],f=Math.min(o,a);if(i.length=a,t<e.length-1){var h=t+1;for(r=0;r<f;r++)s=i[r],Array.isArray(s)||(s=[s],i[r]=s),da(s,e,h,n);for(r=f;r<a;r++)s=[],i[r]=s,da(s,e,h,n)}else{for(r=0;r<f;r++)for(;Array.isArray(i[r]);)i[r]=i[r][0];for(r=f;r<a;r++)i[r]=n}}function j_(i,e){var t=Y_(i),n=t.length;if(!Array.isArray(i)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Ht(0,n,"!=");e=ff(e,n);var r=hf(e);if(n!==r)throw new Ht(r,n,"!=");try{return q_(t,e)}catch(s){throw s instanceof Ht?new Ht(r,n,"!="):s}}function ff(i,e){var t=hf(i),n=i.slice(),r=-1,s=i.indexOf(r),o=i.indexOf(r,s+1)>=0;if(o)throw new Error("More than one wildcard in sizes");var a=s>=0,f=e%t===0;if(a)if(f)n[s]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return n}function hf(i){return i.reduce((e,t)=>e*t,1)}function q_(i,e){for(var t=i,n,r=e.length-1;r>0;r--){var s=e[r];n=[];for(var o=t.length/s,a=0;a<o;a++)n.push(t.slice(a*s,(a+1)*s));t=n}return t}function X_(i,e,t,n){var r=n||ha(i);if(t)for(var s=0;s<t;s++)i=[i],r.unshift(1);for(i=df(i,e,0);r.length<e;)r.push(1);return i}function df(i,e,t){var n,r;if(Array.isArray(i)){var s=t+1;for(n=0,r=i.length;n<r;n++)i[n]=df(i[n],e,s)}else for(var o=t;o<e;o++)i=[i];return i}function Y_(i){if(!Array.isArray(i))return i;var e=[];return i.forEach(function t(n){Array.isArray(n)?n.forEach(t):e.push(n)}),e}function pa(i,e){for(var t,n=0,r=0;r<i.length;r++){var s=i[r],o=Array.isArray(s);if(r===0&&o&&(n=s.length),o&&s.length!==n)return;var a=o?pa(s,e):e(s);if(t===void 0)t=a;else if(t!==a)return"mixed"}return t}function tr(i,e,t,n){function r(s){var o=L_(s,e.map(Q_));return Z_(i,e,s),t(o)}return r.isFactory=!0,r.fn=i,r.dependencies=e.slice().sort(),n&&(r.meta=n),r}function Z_(i,e,t){var n=e.filter(s=>!K_(s)).every(s=>t[s]!==void 0);if(!n){var r=e.filter(s=>t[s]===void 0);throw new Error('Cannot create function "'.concat(i,'", ')+"some dependencies are missing: ".concat(r.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function K_(i){return i&&i[0]==="?"}function Q_(i){return i&&i[0]==="?"?i.slice(1):i}function J_(i,e){if(mf(i)&&pf(i,e))return i[e];throw typeof i[e]=="function"&&tv(i,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function $_(i,e,t){if(mf(i)&&pf(i,e))return i[e]=t,t;throw new Error('No access to property "'+e+'"')}function ev(i,e){return e in i}function pf(i,e){return!i||typeof i!="object"?!1:qs(nv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function tv(i,e){return i==null||typeof i[e]!="function"||qs(i,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(i)?!1:qs(iv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function mf(i){return typeof i=="object"&&i&&i.constructor===Object}var nv={length:!0,name:!0},iv={toString:!0,valueOf:!0,toLocaleString:!0};class rv{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return J_(this.wrappedObject,e)}set(e,t){return $_(this.wrappedObject,e,t),this}has(e){return ev(this.wrappedObject,e)}}function sv(i){return i?i instanceof Map||i instanceof rv||typeof i.set=="function"&&typeof i.get=="function"&&typeof i.keys=="function"&&typeof i.has=="function":!1}var gf=function(){return gf=Ll.create,Ll},ov=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],av=tr("typed",ov,function(e){var{BigNumber:t,Complex:n,DenseMatrix:r,Fraction:s}=e,o=gf();return o.clear(),o.addTypes([{name:"number",test:hn},{name:"Complex",test:tf},{name:"BigNumber",test:Pi},{name:"Fraction",test:nf},{name:"Unit",test:rf},{name:"identifier",test:a=>js&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(a)},{name:"string",test:js},{name:"Chain",test:P_},{name:"Array",test:bn},{name:"Matrix",test:is},{name:"DenseMatrix",test:n_},{name:"SparseMatrix",test:i_},{name:"Range",test:r_},{name:"Index",test:sf},{name:"boolean",test:s_},{name:"ResultSet",test:o_},{name:"Help",test:a_},{name:"function",test:u_},{name:"Date",test:l_},{name:"RegExp",test:c_},{name:"null",test:h_},{name:"undefined",test:d_},{name:"AccessorNode",test:p_},{name:"ArrayNode",test:m_},{name:"AssignmentNode",test:g_},{name:"BlockNode",test:__},{name:"ConditionalNode",test:v_},{name:"ConstantNode",test:x_},{name:"FunctionNode",test:M_},{name:"FunctionAssignmentNode",test:y_},{name:"IndexNode",test:w_},{name:"Node",test:b_},{name:"ObjectNode",test:D_},{name:"OperatorNode",test:S_},{name:"ParenthesisNode",test:E_},{name:"RangeNode",test:A_},{name:"RelationalNode",test:C_},{name:"SymbolNode",test:T_},{name:"Map",test:sv},{name:"Object",test:f_}]),o.addConversions([{from:"number",to:"BigNumber",convert:function(f){if(t||Xo(f),z_(f)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+f+"). Use function bignumber(x) to convert to BigNumber.");return new t(f)}},{from:"number",to:"Complex",convert:function(f){return n||Os(f),new n(f,0)}},{from:"BigNumber",to:"Complex",convert:function(f){return n||Os(f),new n(f.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(f){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(f){return n||Os(f),new n(f.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(f){s||Yo(f);var h=new s(f);if(h.valueOf()!==f)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+f+"). Use function fraction(x) to convert to Fraction.");return h}},{from:"string",to:"number",convert:function(f){var h=Number(f);if(isNaN(h))throw new Error('Cannot convert "'+f+'" to a number');return h}},{from:"string",to:"BigNumber",convert:function(f){t||Xo(f);try{return new t(f)}catch{throw new Error('Cannot convert "'+f+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(f){s||Yo(f);try{return new s(f)}catch{throw new Error('Cannot convert "'+f+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(f){n||Os(f);try{return new n(f)}catch{throw new Error('Cannot convert "'+f+'" to Complex')}}},{from:"boolean",to:"number",convert:function(f){return+f}},{from:"boolean",to:"BigNumber",convert:function(f){return t||Xo(f),new t(+f)}},{from:"boolean",to:"Fraction",convert:function(f){return s||Yo(f),new s(+f)}},{from:"boolean",to:"string",convert:function(f){return String(f)}},{from:"Array",to:"Matrix",convert:function(f){return r||uv(),new r(f)}},{from:"Matrix",to:"Array",convert:function(f){return f.valueOf()}}]),o.onMismatch=(a,f,h)=>{var l=o.createError(a,f,h);if(["wrongType","mismatch"].includes(l.data.category)&&f.length===1&&la(f[0])&&h.some(c=>!c.params.includes(","))){var u=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw u.data=l.data,u}throw l},o.onMismatch=(a,f,h)=>{var l=o.createError(a,f,h);if(["wrongType","mismatch"].includes(l.data.category)&&f.length===1&&la(f[0])&&h.some(c=>!c.params.includes(","))){var u=new TypeError("Function '".concat(a,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(a,")'."));throw u.data=l.data,u}throw l},o});function Xo(i){throw new Error("Cannot convert value ".concat(i," into a BigNumber: no class 'BigNumber' provided"))}function Os(i){throw new Error("Cannot convert value ".concat(i," into a Complex number: no class 'Complex' provided"))}function uv(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Yo(i){throw new Error("Cannot convert value ".concat(i," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Cr=9e15,Ui=1e9,ma="0123456789abcdef",Xs="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Ys="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ga={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Cr,maxE:Cr,crypto:!1},_f,pi,Ze=!0,oo="[DecimalError] ",Bi=oo+"Invalid argument: ",vf=oo+"Precision limit exceeded",xf=oo+"crypto unavailable",yf="[object Decimal]",sn=Math.floor,Ut=Math.pow,lv=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,cv=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,fv=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Mf=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Yn=1e7,Ge=7,hv=9007199254740991,dv=Xs.length-1,_a=Ys.length-1,le={toStringTag:yf};le.absoluteValue=le.abs=function(){var i=new this.constructor(this);return i.s<0&&(i.s=1),ze(i)};le.ceil=function(){return ze(new this.constructor(this),this.e+1,2)};le.clampedTo=le.clamp=function(i,e){var t,n=this,r=n.constructor;if(i=new r(i),e=new r(e),!i.s||!e.s)return new r(NaN);if(i.gt(e))throw Error(Bi+e);return t=n.cmp(i),t<0?i:n.cmp(e)>0?e:new r(n)};le.comparedTo=le.cmp=function(i){var e,t,n,r,s=this,o=s.d,a=(i=new s.constructor(i)).d,f=s.s,h=i.s;if(!o||!a)return!f||!h?NaN:f!==h?f:o===a?0:!o^f<0?1:-1;if(!o[0]||!a[0])return o[0]?f:a[0]?-h:0;if(f!==h)return f;if(s.e!==i.e)return s.e>i.e^f<0?1:-1;for(n=o.length,r=a.length,e=0,t=n<r?n:r;e<t;++e)if(o[e]!==a[e])return o[e]>a[e]^f<0?1:-1;return n===r?0:n>r^f<0?1:-1};le.cosine=le.cos=function(){var i,e,t=this,n=t.constructor;return t.d?t.d[0]?(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+Ge,n.rounding=1,t=pv(n,Ef(n,t)),n.precision=i,n.rounding=e,ze(pi==2||pi==3?t.neg():t,i,e,!0)):new n(1):new n(NaN)};le.cubeRoot=le.cbrt=function(){var i,e,t,n,r,s,o,a,f,h,l=this,u=l.constructor;if(!l.isFinite()||l.isZero())return new u(l);for(Ze=!1,s=l.s*Ut(l.s*l,1/3),!s||Math.abs(s)==1/0?(t=Zt(l.d),i=l.e,(s=(i-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=Ut(t,1/3),i=sn((i+1)/3)-(i%3==(i<0?-1:2)),s==1/0?t="5e"+i:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+i),n=new u(t),n.s=l.s):n=new u(s.toString()),o=(i=u.precision)+3;;)if(a=n,f=a.times(a).times(a),h=f.plus(l),n=bt(h.plus(l).times(a),h.plus(f),o+2,1),Zt(a.d).slice(0,o)===(t=Zt(n.d)).slice(0,o))if(t=t.slice(o-3,o+1),t=="9999"||!r&&t=="4999"){if(!r&&(ze(a,i+1,0),a.times(a).times(a).eq(l))){n=a;break}o+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(ze(n,i+1,1),e=!n.times(n).times(n).eq(l));break}return Ze=!0,ze(n,i,u.rounding,e)};le.decimalPlaces=le.dp=function(){var i,e=this.d,t=NaN;if(e){if(i=e.length-1,t=(i-sn(this.e/Ge))*Ge,i=e[i],i)for(;i%10==0;i/=10)t--;t<0&&(t=0)}return t};le.dividedBy=le.div=function(i){return bt(this,new this.constructor(i))};le.dividedToIntegerBy=le.divToInt=function(i){var e=this,t=e.constructor;return ze(bt(e,new t(i),0,1,1),t.precision,t.rounding)};le.equals=le.eq=function(i){return this.cmp(i)===0};le.floor=function(){return ze(new this.constructor(this),this.e+1,3)};le.greaterThan=le.gt=function(i){return this.cmp(i)>0};le.greaterThanOrEqualTo=le.gte=function(i){var e=this.cmp(i);return e==1||e===0};le.hyperbolicCosine=le.cosh=function(){var i,e,t,n,r,s=this,o=s.constructor,a=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return a;t=o.precision,n=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,r=s.d.length,r<32?(i=Math.ceil(r/3),e=(1/uo(4,i)).toString()):(i=16,e="2.3283064365386962890625e-10"),s=Ur(o,1,s.times(e),new o(1),!0);for(var f,h=i,l=new o(8);h--;)f=s.times(s),s=a.minus(f.times(l.minus(f.times(l))));return ze(s,o.precision=t,o.rounding=n,!0)};le.hyperbolicSine=le.sinh=function(){var i,e,t,n,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,n=r.d.length,n<3)r=Ur(s,2,r,r,!0);else{i=1.4*Math.sqrt(n),i=i>16?16:i|0,r=r.times(1/uo(5,i)),r=Ur(s,2,r,r,!0);for(var o,a=new s(5),f=new s(16),h=new s(20);i--;)o=r.times(r),r=r.times(a.plus(o.times(f.times(o).plus(h))))}return s.precision=e,s.rounding=t,ze(r,e,t,!0)};le.hyperbolicTangent=le.tanh=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+7,n.rounding=1,bt(t.sinh(),t.cosh(),n.precision=i,n.rounding=e)):new n(t.s)};le.inverseCosine=le.acos=function(){var i,e=this,t=e.constructor,n=e.abs().cmp(1),r=t.precision,s=t.rounding;return n!==-1?n===0?e.isNeg()?jn(t,r,s):new t(0):new t(NaN):e.isZero()?jn(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,e=e.asin(),i=jn(t,r+4,s).times(.5),t.precision=r,t.rounding=s,i.minus(e))};le.inverseHyperbolicCosine=le.acosh=function(){var i,e,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(i=n.precision,e=n.rounding,n.precision=i+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,Ze=!1,t=t.times(t).minus(1).sqrt().plus(t),Ze=!0,n.precision=i,n.rounding=e,t.ln()):new n(t)};le.inverseHyperbolicSine=le.asinh=function(){var i,e,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,Ze=!1,t=t.times(t).plus(1).sqrt().plus(t),Ze=!0,n.precision=i,n.rounding=e,t.ln())};le.inverseHyperbolicTangent=le.atanh=function(){var i,e,t,n,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(i=s.precision,e=s.rounding,n=r.sd(),Math.max(n,i)<2*-r.e-1?ze(new s(r),i,e,!0):(s.precision=t=n-r.e,r=bt(r.plus(1),new s(1).minus(r),t+i,1),s.precision=i+4,s.rounding=1,r=r.ln(),s.precision=i,s.rounding=e,r.times(.5))):new s(NaN)};le.inverseSine=le.asin=function(){var i,e,t,n,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,n=s.rounding,e!==-1?e===0?(i=jn(s,t+4,n).times(.5),i.s=r.s,i):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=n,r.times(2)))};le.inverseTangent=le.atan=function(){var i,e,t,n,r,s,o,a,f,h=this,l=h.constructor,u=l.precision,c=l.rounding;if(h.isFinite()){if(h.isZero())return new l(h);if(h.abs().eq(1)&&u+4<=_a)return o=jn(l,u+4,c).times(.25),o.s=h.s,o}else{if(!h.s)return new l(NaN);if(u+4<=_a)return o=jn(l,u+4,c).times(.5),o.s=h.s,o}for(l.precision=a=u+10,l.rounding=1,t=Math.min(28,a/Ge+2|0),i=t;i;--i)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(Ze=!1,e=Math.ceil(a/Ge),n=1,f=h.times(h),o=new l(h),r=h;i!==-1;)if(r=r.times(f),s=o.minus(r.div(n+=2)),r=r.times(f),o=s.plus(r.div(n+=2)),o.d[e]!==void 0)for(i=e;o.d[i]===s.d[i]&&i--;);return t&&(o=o.times(2<<t-1)),Ze=!0,ze(o,l.precision=u,l.rounding=c,!0)};le.isFinite=function(){return!!this.d};le.isInteger=le.isInt=function(){return!!this.d&&sn(this.e/Ge)>this.d.length-2};le.isNaN=function(){return!this.s};le.isNegative=le.isNeg=function(){return this.s<0};le.isPositive=le.isPos=function(){return this.s>0};le.isZero=function(){return!!this.d&&this.d[0]===0};le.lessThan=le.lt=function(i){return this.cmp(i)<0};le.lessThanOrEqualTo=le.lte=function(i){return this.cmp(i)<1};le.logarithm=le.log=function(i){var e,t,n,r,s,o,a,f,h=this,l=h.constructor,u=l.precision,c=l.rounding,p=5;if(i==null)i=new l(10),e=!0;else{if(i=new l(i),t=i.d,i.s<0||!t||!t[0]||i.eq(1))return new l(NaN);e=i.eq(10)}if(t=h.d,h.s<0||!t||!t[0]||h.eq(1))return new l(t&&!t[0]?-1/0:h.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10===0;)r/=10;s=r!==1}if(Ze=!1,a=u+p,o=Fi(h,a),n=e?Zs(l,a+10):Fi(i,a),f=bt(o,n,a,1),ls(f.d,r=u,c))do if(a+=10,o=Fi(h,a),n=e?Zs(l,a+10):Fi(i,a),f=bt(o,n,a,1),!s){+Zt(f.d).slice(r+1,r+15)+1==1e14&&(f=ze(f,u+1,0));break}while(ls(f.d,r+=10,c));return Ze=!0,ze(f,u,c)};le.minus=le.sub=function(i){var e,t,n,r,s,o,a,f,h,l,u,c,p=this,g=p.constructor;if(i=new g(i),!p.d||!i.d)return!p.s||!i.s?i=new g(NaN):p.d?i.s=-i.s:i=new g(i.d||p.s!==i.s?p:NaN),i;if(p.s!=i.s)return i.s=-i.s,p.plus(i);if(h=p.d,c=i.d,a=g.precision,f=g.rounding,!h[0]||!c[0]){if(c[0])i.s=-i.s;else if(h[0])i=new g(p);else return new g(f===3?-0:0);return Ze?ze(i,a,f):i}if(t=sn(i.e/Ge),l=sn(p.e/Ge),h=h.slice(),s=l-t,s){for(u=s<0,u?(e=h,s=-s,o=c.length):(e=c,t=l,o=h.length),n=Math.max(Math.ceil(a/Ge),o)+2,s>n&&(s=n,e.length=1),e.reverse(),n=s;n--;)e.push(0);e.reverse()}else{for(n=h.length,o=c.length,u=n<o,u&&(o=n),n=0;n<o;n++)if(h[n]!=c[n]){u=h[n]<c[n];break}s=0}for(u&&(e=h,h=c,c=e,i.s=-i.s),o=h.length,n=c.length-o;n>0;--n)h[o++]=0;for(n=c.length;n>s;){if(h[--n]<c[n]){for(r=n;r&&h[--r]===0;)h[r]=Yn-1;--h[r],h[n]+=Yn}h[n]-=c[n]}for(;h[--o]===0;)h.pop();for(;h[0]===0;h.shift())--t;return h[0]?(i.d=h,i.e=ao(h,t),Ze?ze(i,a,f):i):new g(f===3?-0:0)};le.modulo=le.mod=function(i){var e,t=this,n=t.constructor;return i=new n(i),!t.d||!i.s||i.d&&!i.d[0]?new n(NaN):!i.d||t.d&&!t.d[0]?ze(new n(t),n.precision,n.rounding):(Ze=!1,n.modulo==9?(e=bt(t,i.abs(),0,3,1),e.s*=i.s):e=bt(t,i,0,n.modulo,1),e=e.times(i),Ze=!0,t.minus(e))};le.naturalExponential=le.exp=function(){return va(this)};le.naturalLogarithm=le.ln=function(){return Fi(this)};le.negated=le.neg=function(){var i=new this.constructor(this);return i.s=-i.s,ze(i)};le.plus=le.add=function(i){var e,t,n,r,s,o,a,f,h,l,u=this,c=u.constructor;if(i=new c(i),!u.d||!i.d)return!u.s||!i.s?i=new c(NaN):u.d||(i=new c(i.d||u.s===i.s?u:NaN)),i;if(u.s!=i.s)return i.s=-i.s,u.minus(i);if(h=u.d,l=i.d,a=c.precision,f=c.rounding,!h[0]||!l[0])return l[0]||(i=new c(u)),Ze?ze(i,a,f):i;if(s=sn(u.e/Ge),n=sn(i.e/Ge),h=h.slice(),r=s-n,r){for(r<0?(t=h,r=-r,o=l.length):(t=l,n=s,o=h.length),s=Math.ceil(a/Ge),o=s>o?s+1:o+1,r>o&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(o=h.length,r=l.length,o-r<0&&(r=o,t=l,l=h,h=t),e=0;r;)e=(h[--r]=h[r]+l[r]+e)/Yn|0,h[r]%=Yn;for(e&&(h.unshift(e),++n),o=h.length;h[--o]==0;)h.pop();return i.d=h,i.e=ao(h,n),Ze?ze(i,a,f):i};le.precision=le.sd=function(i){var e,t=this;if(i!==void 0&&i!==!!i&&i!==1&&i!==0)throw Error(Bi+i);return t.d?(e=wf(t.d),i&&t.e+1>e&&(e=t.e+1)):e=NaN,e};le.round=function(){var i=this,e=i.constructor;return ze(new e(i),i.e+1,e.rounding)};le.sine=le.sin=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+Math.max(t.e,t.sd())+Ge,n.rounding=1,t=gv(n,Ef(n,t)),n.precision=i,n.rounding=e,ze(pi>2?t.neg():t,i,e,!0)):new n(NaN)};le.squareRoot=le.sqrt=function(){var i,e,t,n,r,s,o=this,a=o.d,f=o.e,h=o.s,l=o.constructor;if(h!==1||!a||!a[0])return new l(!h||h<0&&(!a||a[0])?NaN:a?o:1/0);for(Ze=!1,h=Math.sqrt(+o),h==0||h==1/0?(e=Zt(a),(e.length+f)%2==0&&(e+="0"),h=Math.sqrt(e),f=sn((f+1)/2)-(f<0||f%2),h==1/0?e="5e"+f:(e=h.toExponential(),e=e.slice(0,e.indexOf("e")+1)+f),n=new l(e)):n=new l(h.toString()),t=(f=l.precision)+3;;)if(s=n,n=s.plus(bt(o,s,t+2,1)).times(.5),Zt(s.d).slice(0,t)===(e=Zt(n.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!r&&e=="4999"){if(!r&&(ze(s,f+1,0),s.times(s).eq(o))){n=s;break}t+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(ze(n,f+1,1),i=!n.times(n).eq(o));break}return Ze=!0,ze(n,f,l.rounding,i)};le.tangent=le.tan=function(){var i,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(i=n.precision,e=n.rounding,n.precision=i+10,n.rounding=1,t=t.sin(),t.s=1,t=bt(t,new n(1).minus(t.times(t)).sqrt(),i+10,0),n.precision=i,n.rounding=e,ze(pi==2||pi==4?t.neg():t,i,e,!0)):new n(NaN)};le.times=le.mul=function(i){var e,t,n,r,s,o,a,f,h,l=this,u=l.constructor,c=l.d,p=(i=new u(i)).d;if(i.s*=l.s,!c||!c[0]||!p||!p[0])return new u(!i.s||c&&!c[0]&&!p||p&&!p[0]&&!c?NaN:!c||!p?i.s/0:i.s*0);for(t=sn(l.e/Ge)+sn(i.e/Ge),f=c.length,h=p.length,f<h&&(s=c,c=p,p=s,o=f,f=h,h=o),s=[],o=f+h,n=o;n--;)s.push(0);for(n=h;--n>=0;){for(e=0,r=f+n;r>n;)a=s[r]+p[n]*c[r-n-1]+e,s[r--]=a%Yn|0,e=a/Yn|0;s[r]=(s[r]+e)%Yn|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),i.d=s,i.e=ao(s,t),Ze?ze(i,u.precision,u.rounding):i};le.toBinary=function(i,e){return Ra(this,2,i,e)};le.toDecimalPlaces=le.toDP=function(i,e){var t=this,n=t.constructor;return t=new n(t),i===void 0?t:(vn(i,0,Ui),e===void 0?e=n.rounding:vn(e,0,8),ze(t,i+t.e+1,e))};le.toExponential=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=oi(n,!0):(vn(i,0,Ui),e===void 0?e=r.rounding:vn(e,0,8),n=ze(new r(n),i+1,e),t=oi(n,!0,i+1)),n.isNeg()&&!n.isZero()?"-"+t:t};le.toFixed=function(i,e){var t,n,r=this,s=r.constructor;return i===void 0?t=oi(r):(vn(i,0,Ui),e===void 0?e=s.rounding:vn(e,0,8),n=ze(new s(r),i+r.e+1,e),t=oi(n,!1,i+n.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};le.toFraction=function(i){var e,t,n,r,s,o,a,f,h,l,u,c,p=this,g=p.d,_=p.constructor;if(!g)return new _(p);if(h=t=new _(1),n=f=new _(0),e=new _(n),s=e.e=wf(g)-p.e-1,o=s%Ge,e.d[0]=Ut(10,o<0?Ge+o:o),i==null)i=s>0?e:h;else{if(a=new _(i),!a.isInt()||a.lt(h))throw Error(Bi+a);i=a.gt(e)?s>0?e:h:a}for(Ze=!1,a=new _(Zt(g)),l=_.precision,_.precision=s=g.length*Ge*2;u=bt(a,e,0,1,1),r=t.plus(u.times(n)),r.cmp(i)!=1;)t=n,n=r,r=h,h=f.plus(u.times(r)),f=r,r=e,e=a.minus(u.times(r)),a=r;return r=bt(i.minus(t),n,0,1,1),f=f.plus(r.times(h)),t=t.plus(r.times(n)),f.s=h.s=p.s,c=bt(h,n,s,1).minus(p).abs().cmp(bt(f,t,s,1).minus(p).abs())<1?[h,n]:[f,t],_.precision=l,Ze=!0,c};le.toHexadecimal=le.toHex=function(i,e){return Ra(this,16,i,e)};le.toNearest=function(i,e){var t=this,n=t.constructor;if(t=new n(t),i==null){if(!t.d)return t;i=new n(1),e=n.rounding}else{if(i=new n(i),e===void 0?e=n.rounding:vn(e,0,8),!t.d)return i.s?t:i;if(!i.d)return i.s&&(i.s=t.s),i}return i.d[0]?(Ze=!1,t=bt(t,i,0,e,1).times(i),Ze=!0,ze(t)):(i.s=t.s,t=i),t};le.toNumber=function(){return+this};le.toOctal=function(i,e){return Ra(this,8,i,e)};le.toPower=le.pow=function(i){var e,t,n,r,s,o,a=this,f=a.constructor,h=+(i=new f(i));if(!a.d||!i.d||!a.d[0]||!i.d[0])return new f(Ut(+a,h));if(a=new f(a),a.eq(1))return a;if(n=f.precision,s=f.rounding,i.eq(1))return ze(a,n,s);if(e=sn(i.e/Ge),e>=i.d.length-1&&(t=h<0?-h:h)<=hv)return r=bf(f,a,t,n),i.s<0?new f(1).div(r):ze(r,n,s);if(o=a.s,o<0){if(e<i.d.length-1)return new f(NaN);if(i.d[e]&1||(o=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=o,a}return t=Ut(+a,h),e=t==0||!isFinite(t)?sn(h*(Math.log("0."+Zt(a.d))/Math.LN10+a.e+1)):new f(t+"").e,e>f.maxE+1||e<f.minE-1?new f(e>0?o/0:0):(Ze=!1,f.rounding=a.s=1,t=Math.min(12,(e+"").length),r=va(i.times(Fi(a,n+t)),n),r.d&&(r=ze(r,n+5,1),ls(r.d,n,s)&&(e=n+10,r=ze(va(i.times(Fi(a,e+t)),e),e+5,1),+Zt(r.d).slice(n+1,n+15)+1==1e14&&(r=ze(r,n+1,0)))),r.s=o,Ze=!0,f.rounding=s,ze(r,n,s))};le.toPrecision=function(i,e){var t,n=this,r=n.constructor;return i===void 0?t=oi(n,n.e<=r.toExpNeg||n.e>=r.toExpPos):(vn(i,1,Ui),e===void 0?e=r.rounding:vn(e,0,8),n=ze(new r(n),i,e),t=oi(n,i<=n.e||n.e<=r.toExpNeg,i)),n.isNeg()&&!n.isZero()?"-"+t:t};le.toSignificantDigits=le.toSD=function(i,e){var t=this,n=t.constructor;return i===void 0?(i=n.precision,e=n.rounding):(vn(i,1,Ui),e===void 0?e=n.rounding:vn(e,0,8)),ze(new n(t),i,e)};le.toString=function(){var i=this,e=i.constructor,t=oi(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()&&!i.isZero()?"-"+t:t};le.truncated=le.trunc=function(){return ze(new this.constructor(this),this.e+1,1)};le.valueOf=le.toJSON=function(){var i=this,e=i.constructor,t=oi(i,i.e<=e.toExpNeg||i.e>=e.toExpPos);return i.isNeg()?"-"+t:t};function Zt(i){var e,t,n,r=i.length-1,s="",o=i[0];if(r>0){for(s+=o,e=1;e<r;e++)n=i[e]+"",t=Ge-n.length,t&&(s+=Ci(t)),s+=n;o=i[e],n=o+"",t=Ge-n.length,t&&(s+=Ci(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function vn(i,e,t){if(i!==~~i||i<e||i>t)throw Error(Bi+i)}function ls(i,e,t,n){var r,s,o,a;for(s=i[0];s>=10;s/=10)--e;return--e<0?(e+=Ge,r=0):(r=Math.ceil((e+1)/Ge),e%=Ge),s=Ut(10,Ge-e),a=i[r]%s|0,n==null?e<3?(e==0?a=a/100|0:e==1&&(a=a/10|0),o=t<4&&a==99999||t>3&&a==49999||a==5e4||a==0):o=(t<4&&a+1==s||t>3&&a+1==s/2)&&(i[r+1]/s/100|0)==Ut(10,e-2)-1||(a==s/2||a==0)&&(i[r+1]/s/100|0)==0:e<4?(e==0?a=a/1e3|0:e==1?a=a/100|0:e==2&&(a=a/10|0),o=(n||t<4)&&a==9999||!n&&t>3&&a==4999):o=((n||t<4)&&a+1==s||!n&&t>3&&a+1==s/2)&&(i[r+1]/s/1e3|0)==Ut(10,e-3)-1,o}function Vs(i,e,t){for(var n,r=[0],s,o=0,a=i.length;o<a;){for(s=r.length;s--;)r[s]*=e;for(r[0]+=ma.indexOf(i.charAt(o++)),n=0;n<r.length;n++)r[n]>t-1&&(r[n+1]===void 0&&(r[n+1]=0),r[n+1]+=r[n]/t|0,r[n]%=t)}return r.reverse()}function pv(i,e){var t,n,r;if(e.isZero())return e;n=e.d.length,n<32?(t=Math.ceil(n/3),r=(1/uo(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),i.precision+=t,e=Ur(i,1,e.times(r),new i(1));for(var s=t;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return i.precision-=t,e}var bt=function(){function i(n,r,s){var o,a=0,f=n.length;for(n=n.slice();f--;)o=n[f]*r+a,n[f]=o%s|0,a=o/s|0;return a&&n.unshift(a),n}function e(n,r,s,o){var a,f;if(s!=o)f=s>o?1:-1;else for(a=f=0;a<s;a++)if(n[a]!=r[a]){f=n[a]>r[a]?1:-1;break}return f}function t(n,r,s,o){for(var a=0;s--;)n[s]-=a,a=n[s]<r[s]?1:0,n[s]=a*o+n[s]-r[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,r,s,o,a,f){var h,l,u,c,p,g,_,m,d,x,y,b,M,S,F,A,w,D,z,j,N=n.constructor,H=n.s==r.s?1:-1,G=n.d,K=r.d;if(!G||!G[0]||!K||!K[0])return new N(!n.s||!r.s||(G?K&&G[0]==K[0]:!K)?NaN:G&&G[0]==0||!K?H*0:H/0);for(f?(p=1,l=n.e-r.e):(f=Yn,p=Ge,l=sn(n.e/p)-sn(r.e/p)),z=K.length,w=G.length,d=new N(H),x=d.d=[],u=0;K[u]==(G[u]||0);u++);if(K[u]>(G[u]||0)&&l--,s==null?(S=s=N.precision,o=N.rounding):a?S=s+(n.e-r.e)+1:S=s,S<0)x.push(1),g=!0;else{if(S=S/p+2|0,u=0,z==1){for(c=0,K=K[0],S++;(u<w||c)&&S--;u++)F=c*f+(G[u]||0),x[u]=F/K|0,c=F%K|0;g=c||u<w}else{for(c=f/(K[0]+1)|0,c>1&&(K=i(K,c,f),G=i(G,c,f),z=K.length,w=G.length),A=z,y=G.slice(0,z),b=y.length;b<z;)y[b++]=0;j=K.slice(),j.unshift(0),D=K[0],K[1]>=f/2&&++D;do c=0,h=e(K,y,z,b),h<0?(M=y[0],z!=b&&(M=M*f+(y[1]||0)),c=M/D|0,c>1?(c>=f&&(c=f-1),_=i(K,c,f),m=_.length,b=y.length,h=e(_,y,m,b),h==1&&(c--,t(_,z<m?j:K,m,f))):(c==0&&(h=c=1),_=K.slice()),m=_.length,m<b&&_.unshift(0),t(y,_,b,f),h==-1&&(b=y.length,h=e(K,y,z,b),h<1&&(c++,t(y,z<b?j:K,b,f))),b=y.length):h===0&&(c++,y=[0]),x[u++]=c,h&&y[0]?y[b++]=G[A]||0:(y=[G[A]],b=1);while((A++<w||y[0]!==void 0)&&S--);g=y[0]!==void 0}x[0]||x.shift()}if(p==1)d.e=l,_f=g;else{for(u=1,c=x[0];c>=10;c/=10)u++;d.e=u+l*p-1,ze(d,a?s+d.e+1:s,o,g)}return d}}();function ze(i,e,t,n){var r,s,o,a,f,h,l,u,c,p=i.constructor;e:if(e!=null){if(u=i.d,!u)return i;for(r=1,a=u[0];a>=10;a/=10)r++;if(s=e-r,s<0)s+=Ge,o=e,l=u[c=0],f=l/Ut(10,r-o-1)%10|0;else if(c=Math.ceil((s+1)/Ge),a=u.length,c>=a)if(n){for(;a++<=c;)u.push(0);l=f=0,r=1,s%=Ge,o=s-Ge+1}else break e;else{for(l=a=u[c],r=1;a>=10;a/=10)r++;s%=Ge,o=s-Ge+r,f=o<0?0:l/Ut(10,r-o-1)%10|0}if(n=n||e<0||u[c+1]!==void 0||(o<0?l:l%Ut(10,r-o-1)),h=t<4?(f||n)&&(t==0||t==(i.s<0?3:2)):f>5||f==5&&(t==4||n||t==6&&(s>0?o>0?l/Ut(10,r-o):0:u[c-1])%10&1||t==(i.s<0?8:7)),e<1||!u[0])return u.length=0,h?(e-=i.e+1,u[0]=Ut(10,(Ge-e%Ge)%Ge),i.e=-e||0):u[0]=i.e=0,i;if(s==0?(u.length=c,a=1,c--):(u.length=c+1,a=Ut(10,Ge-s),u[c]=o>0?(l/Ut(10,r-o)%Ut(10,o)|0)*a:0),h)for(;;)if(c==0){for(s=1,o=u[0];o>=10;o/=10)s++;for(o=u[0]+=a,a=1;o>=10;o/=10)a++;s!=a&&(i.e++,u[0]==Yn&&(u[0]=1));break}else{if(u[c]+=a,u[c]!=Yn)break;u[c--]=0,a=1}for(s=u.length;u[--s]===0;)u.pop()}return Ze&&(i.e>p.maxE?(i.d=null,i.e=NaN):i.e<p.minE&&(i.e=0,i.d=[0])),i}function oi(i,e,t){if(!i.isFinite())return Sf(i);var n,r=i.e,s=Zt(i.d),o=s.length;return e?(t&&(n=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+Ci(n):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(i.e<0?"e":"e+")+i.e):r<0?(s="0."+Ci(-r-1)+s,t&&(n=t-o)>0&&(s+=Ci(n))):r>=o?(s+=Ci(r+1-o),t&&(n=t-r-1)>0&&(s=s+"."+Ci(n))):((n=r+1)<o&&(s=s.slice(0,n)+"."+s.slice(n)),t&&(n=t-o)>0&&(r+1===o&&(s+="."),s+=Ci(n))),s}function ao(i,e){var t=i[0];for(e*=Ge;t>=10;t/=10)e++;return e}function Zs(i,e,t){if(e>dv)throw Ze=!0,t&&(i.precision=t),Error(vf);return ze(new i(Xs),e,1,!0)}function jn(i,e,t){if(e>_a)throw Error(vf);return ze(new i(Ys),e,t,!0)}function wf(i){var e=i.length-1,t=e*Ge+1;if(e=i[e],e){for(;e%10==0;e/=10)t--;for(e=i[0];e>=10;e/=10)t++}return t}function Ci(i){for(var e="";i--;)e+="0";return e}function bf(i,e,t,n){var r,s=new i(1),o=Math.ceil(n/Ge+4);for(Ze=!1;;){if(t%2&&(s=s.times(e),Ul(s.d,o)&&(r=!0)),t=sn(t/2),t===0){t=s.d.length-1,r&&s.d[t]===0&&++s.d[t];break}e=e.times(e),Ul(e.d,o)}return Ze=!0,s}function Bl(i){return i.d[i.d.length-1]&1}function Df(i,e,t){for(var n,r=new i(e[0]),s=0;++s<e.length;)if(n=new i(e[s]),n.s)r[t](n)&&(r=n);else{r=n;break}return r}function va(i,e){var t,n,r,s,o,a,f,h=0,l=0,u=0,c=i.constructor,p=c.rounding,g=c.precision;if(!i.d||!i.d[0]||i.e>17)return new c(i.d?i.d[0]?i.s<0?0:1/0:1:i.s?i.s<0?0:i:0/0);for(e==null?(Ze=!1,f=g):f=e,a=new c(.03125);i.e>-2;)i=i.times(a),u+=5;for(n=Math.log(Ut(2,u))/Math.LN10*2+5|0,f+=n,t=s=o=new c(1),c.precision=f;;){if(s=ze(s.times(i),f,1),t=t.times(++l),a=o.plus(bt(s,t,f,1)),Zt(a.d).slice(0,f)===Zt(o.d).slice(0,f)){for(r=u;r--;)o=ze(o.times(o),f,1);if(e==null)if(h<3&&ls(o.d,f-n,p,h))c.precision=f+=10,t=s=a=new c(1),l=0,h++;else return ze(o,c.precision=g,p,Ze=!0);else return c.precision=g,o}o=a}}function Fi(i,e){var t,n,r,s,o,a,f,h,l,u,c,p=1,g=10,_=i,m=_.d,d=_.constructor,x=d.rounding,y=d.precision;if(_.s<0||!m||!m[0]||!_.e&&m[0]==1&&m.length==1)return new d(m&&!m[0]?-1/0:_.s!=1?NaN:m?0:_);if(e==null?(Ze=!1,l=y):l=e,d.precision=l+=g,t=Zt(m),n=t.charAt(0),Math.abs(s=_.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)_=_.times(i),t=Zt(_.d),n=t.charAt(0),p++;s=_.e,n>1?(_=new d("0."+t),s++):_=new d(n+"."+t.slice(1))}else return h=Zs(d,l+2,y).times(s+""),_=Fi(new d(n+"."+t.slice(1)),l-g).plus(h),d.precision=y,e==null?ze(_,y,x,Ze=!0):_;for(u=_,f=o=_=bt(_.minus(1),_.plus(1),l,1),c=ze(_.times(_),l,1),r=3;;){if(o=ze(o.times(c),l,1),h=f.plus(bt(o,new d(r),l,1)),Zt(h.d).slice(0,l)===Zt(f.d).slice(0,l))if(f=f.times(2),s!==0&&(f=f.plus(Zs(d,l+2,y).times(s+""))),f=bt(f,new d(p),l,1),e==null)if(ls(f.d,l-g,x,a))d.precision=l+=g,h=o=_=bt(u.minus(1),u.plus(1),l,1),c=ze(_.times(_),l,1),r=a=1;else return ze(f,d.precision=y,x,Ze=!0);else return d.precision=y,f;f=h,r+=2}}function Sf(i){return String(i.s*i.s/0)}function xa(i,e){var t,n,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;e.charCodeAt(n)===48;n++);for(r=e.length;e.charCodeAt(r-1)===48;--r);if(e=e.slice(n,r),e){if(r-=n,i.e=t=t-n-1,i.d=[],n=(t+1)%Ge,t<0&&(n+=Ge),n<r){for(n&&i.d.push(+e.slice(0,n)),r-=Ge;n<r;)i.d.push(+e.slice(n,n+=Ge));e=e.slice(n),n=Ge-e.length}else n-=r;for(;n--;)e+="0";i.d.push(+e),Ze&&(i.e>i.constructor.maxE?(i.d=null,i.e=NaN):i.e<i.constructor.minE&&(i.e=0,i.d=[0]))}else i.e=0,i.d=[0];return i}function mv(i,e){var t,n,r,s,o,a,f,h,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Mf.test(e))return xa(i,e)}else if(e==="Infinity"||e==="NaN")return+e||(i.s=NaN),i.e=NaN,i.d=null,i;if(cv.test(e))t=16,e=e.toLowerCase();else if(lv.test(e))t=2;else if(fv.test(e))t=8;else throw Error(Bi+e);for(s=e.search(/p/i),s>0?(f=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),o=s>=0,n=i.constructor,o&&(e=e.replace(".",""),a=e.length,s=a-s,r=bf(n,new n(t),s,s*2)),h=Vs(e,t,Yn),l=h.length-1,s=l;h[s]===0;--s)h.pop();return s<0?new n(i.s*0):(i.e=ao(h,l),i.d=h,Ze=!1,o&&(i=bt(i,r,a*4)),f&&(i=i.times(Math.abs(f)<54?Ut(2,f):Or.pow(2,f))),Ze=!0,i)}function gv(i,e){var t,n=e.d.length;if(n<3)return e.isZero()?e:Ur(i,2,e,e);t=1.4*Math.sqrt(n),t=t>16?16:t|0,e=e.times(1/uo(5,t)),e=Ur(i,2,e,e);for(var r,s=new i(5),o=new i(16),a=new i(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(a))));return e}function Ur(i,e,t,n,r){var s,o,a,f,h=i.precision,l=Math.ceil(h/Ge);for(Ze=!1,f=t.times(t),a=new i(n);;){if(o=bt(a.times(f),new i(e++*e++),h,1),a=r?n.plus(o):n.minus(o),n=bt(o.times(f),new i(e++*e++),h,1),o=a.plus(n),o.d[l]!==void 0){for(s=l;o.d[s]===a.d[s]&&s--;);if(s==-1)break}s=a,a=n,n=o,o=s}return Ze=!0,o.d.length=l+1,o}function uo(i,e){for(var t=i;--e;)t*=i;return t}function Ef(i,e){var t,n=e.s<0,r=jn(i,i.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return pi=n?4:1,e;if(t=e.divToInt(r),t.isZero())pi=n?3:2;else{if(e=e.minus(t.times(r)),e.lte(s))return pi=Bl(t)?n?2:3:n?4:1,e;pi=Bl(t)?n?1:4:n?3:2}return e.minus(r).abs()}function Ra(i,e,t,n){var r,s,o,a,f,h,l,u,c,p=i.constructor,g=t!==void 0;if(g?(vn(t,1,Ui),n===void 0?n=p.rounding:vn(n,0,8)):(t=p.precision,n=p.rounding),!i.isFinite())l=Sf(i);else{for(l=oi(i),o=l.indexOf("."),g?(r=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):r=e,o>=0&&(l=l.replace(".",""),c=new p(1),c.e=l.length-o,c.d=Vs(oi(c),10,r),c.e=c.d.length),u=Vs(l,10,r),s=f=u.length;u[--f]==0;)u.pop();if(!u[0])l=g?"0p+0":"0";else{if(o<0?s--:(i=new p(i),i.d=u,i.e=s,i=bt(i,c,t,n,0,r),u=i.d,s=i.e,h=_f),o=u[t],a=r/2,h=h||u[t+1]!==void 0,h=n<4?(o!==void 0||h)&&(n===0||n===(i.s<0?3:2)):o>a||o===a&&(n===4||h||n===6&&u[t-1]&1||n===(i.s<0?8:7)),u.length=t,h)for(;++u[--t]>r-1;)u[t]=0,t||(++s,u.unshift(1));for(f=u.length;!u[f-1];--f);for(o=0,l="";o<f;o++)l+=ma.charAt(u[o]);if(g){if(f>1)if(e==16||e==8){for(o=e==16?4:3,--f;f%o;f++)l+="0";for(u=Vs(l,r,e),f=u.length;!u[f-1];--f);for(o=1,l="1.";o<f;o++)l+=ma.charAt(u[o])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>f)for(s-=f;s--;)l+="0";else s<f&&(l=l.slice(0,s)+"."+l.slice(s))}l=(e==16?"0x":e==2?"0b":e==8?"0o":"")+l}return i.s<0?"-"+l:l}function Ul(i,e){if(i.length>e)return i.length=e,!0}function _v(i){return new this(i).abs()}function vv(i){return new this(i).acos()}function xv(i){return new this(i).acosh()}function yv(i,e){return new this(i).plus(e)}function Mv(i){return new this(i).asin()}function wv(i){return new this(i).asinh()}function bv(i){return new this(i).atan()}function Dv(i){return new this(i).atanh()}function Sv(i,e){i=new this(i),e=new this(e);var t,n=this.precision,r=this.rounding,s=n+4;return!i.s||!e.s?t=new this(NaN):!i.d&&!e.d?(t=jn(this,s,1).times(e.s>0?.25:.75),t.s=i.s):!e.d||i.isZero()?(t=e.s<0?jn(this,n,r):new this(0),t.s=i.s):!i.d||e.isZero()?(t=jn(this,s,1).times(.5),t.s=i.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(bt(i,e,s,1)),e=jn(this,s,1),this.precision=n,this.rounding=r,t=i.s<0?t.minus(e):t.plus(e)):t=this.atan(bt(i,e,s,1)),t}function Ev(i){return new this(i).cbrt()}function Av(i){return ze(i=new this(i),i.e+1,2)}function Cv(i,e,t){return new this(i).clamp(e,t)}function Tv(i){if(!i||typeof i!="object")throw Error(oo+"Object expected");var e,t,n,r=i.defaults===!0,s=["precision",1,Ui,"rounding",0,8,"toExpNeg",-Cr,0,"toExpPos",0,Cr,"maxE",0,Cr,"minE",-Cr,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=ga[t]),(n=i[t])!==void 0)if(sn(n)===n&&n>=s[e+1]&&n<=s[e+2])this[t]=n;else throw Error(Bi+t+": "+n);if(t="crypto",r&&(this[t]=ga[t]),(n=i[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(xf);else this[t]=!1;else throw Error(Bi+t+": "+n);return this}function Pv(i){return new this(i).cos()}function Fv(i){return new this(i).cosh()}function Af(i){var e,t,n;function r(s){var o,a,f,h=this;if(!(h instanceof r))return new r(s);if(h.constructor=r,Ol(s)){h.s=s.s,Ze?!s.d||s.e>r.maxE?(h.e=NaN,h.d=null):s.e<r.minE?(h.e=0,h.d=[0]):(h.e=s.e,h.d=s.d.slice()):(h.e=s.e,h.d=s.d?s.d.slice():s.d);return}if(f=typeof s,f==="number"){if(s===0){h.s=1/s<0?-1:1,h.e=0,h.d=[0];return}if(s<0?(s=-s,h.s=-1):h.s=1,s===~~s&&s<1e7){for(o=0,a=s;a>=10;a/=10)o++;Ze?o>r.maxE?(h.e=NaN,h.d=null):o<r.minE?(h.e=0,h.d=[0]):(h.e=o,h.d=[s]):(h.e=o,h.d=[s]);return}else if(s*0!==0){s||(h.s=NaN),h.e=NaN,h.d=null;return}return xa(h,s.toString())}else if(f!=="string")throw Error(Bi+s);return(a=s.charCodeAt(0))===45?(s=s.slice(1),h.s=-1):(a===43&&(s=s.slice(1)),h.s=1),Mf.test(s)?xa(h,s):mv(h,s)}if(r.prototype=le,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=Tv,r.clone=Af,r.isDecimal=Ol,r.abs=_v,r.acos=vv,r.acosh=xv,r.add=yv,r.asin=Mv,r.asinh=wv,r.atan=bv,r.atanh=Dv,r.atan2=Sv,r.cbrt=Ev,r.ceil=Av,r.clamp=Cv,r.cos=Pv,r.cosh=Fv,r.div=Lv,r.exp=Rv,r.floor=Iv,r.hypot=Nv,r.ln=Bv,r.log=Uv,r.log10=zv,r.log2=Ov,r.max=kv,r.min=Hv,r.mod=Gv,r.mul=Vv,r.pow=Wv,r.random=jv,r.round=qv,r.sign=Xv,r.sin=Yv,r.sinh=Zv,r.sqrt=Kv,r.sub=Qv,r.sum=Jv,r.tan=$v,r.tanh=e1,r.trunc=t1,i===void 0&&(i={}),i&&i.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<n.length;)i.hasOwnProperty(t=n[e++])||(i[t]=this[t]);return r.config(i),r}function Lv(i,e){return new this(i).div(e)}function Rv(i){return new this(i).exp()}function Iv(i){return ze(i=new this(i),i.e+1,3)}function Nv(){var i,e,t=new this(0);for(Ze=!1,i=0;i<arguments.length;)if(e=new this(arguments[i++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return Ze=!0,new this(1/0);t=e}return Ze=!0,t.sqrt()}function Ol(i){return i instanceof Or||i&&i.toStringTag===yf||!1}function Bv(i){return new this(i).ln()}function Uv(i,e){return new this(i).log(e)}function Ov(i){return new this(i).log(2)}function zv(i){return new this(i).log(10)}function kv(){return Df(this,arguments,"lt")}function Hv(){return Df(this,arguments,"gt")}function Gv(i,e){return new this(i).mod(e)}function Vv(i,e){return new this(i).mul(e)}function Wv(i,e){return new this(i).pow(e)}function jv(i){var e,t,n,r,s=0,o=new this(1),a=[];if(i===void 0?i=this.precision:vn(i,1,Ui),n=Math.ceil(i/Ge),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(n));s<n;)r=e[s],r>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:a[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(n*=4);s<n;)r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(e,s):(a.push(r%1e7),s+=4);s=n/4}else throw Error(xf);else for(;s<n;)a[s++]=Math.random()*1e7|0;for(n=a[--s],i%=Ge,n&&i&&(r=Ut(10,Ge-i),a[s]=(n/r|0)*r);a[s]===0;s--)a.pop();if(s<0)t=0,a=[0];else{for(t=-1;a[0]===0;t-=Ge)a.shift();for(n=1,r=a[0];r>=10;r/=10)n++;n<Ge&&(t-=Ge-n)}return o.e=t,o.d=a,o}function qv(i){return ze(i=new this(i),i.e+1,this.rounding)}function Xv(i){return i=new this(i),i.d?i.d[0]?i.s:0*i.s:i.s||NaN}function Yv(i){return new this(i).sin()}function Zv(i){return new this(i).sinh()}function Kv(i){return new this(i).sqrt()}function Qv(i,e){return new this(i).sub(e)}function Jv(){var i=0,e=arguments,t=new this(e[i]);for(Ze=!1;t.s&&++i<e.length;)t=t.plus(e[i]);return Ze=!0,ze(t,this.precision,this.rounding)}function $v(i){return new this(i).tan()}function e1(i){return new this(i).tanh()}function t1(i){return ze(i=new this(i),i.e+1,1)}le[Symbol.for("nodejs.util.inspect.custom")]=le.toString;le[Symbol.toStringTag]="Decimal";var Or=le.constructor=Af(ga);Xs=new Or(Xs);Ys=new Or(Ys);var n1="BigNumber",i1=["?on","config"],r1=tr(n1,i1,i=>{var{on:e,config:t}=i,n=Or.clone({precision:t.precision,modulo:Or.EUCLID});return n.prototype=Object.create(n.prototype),n.prototype.type="BigNumber",n.prototype.isBigNumber=!0,n.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},n.fromJSON=function(r){return new n(r.value)},e&&e("config",function(r,s){r.precision!==s.precision&&n.config({precision:r.precision})}),n},{isClass:!0});function Cf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ya={},s1={get exports(){return ya},set exports(i){ya=i}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(i,e){(function(t){var n=Math.cosh||function(u){return Math.abs(u)<1e-9?1-u:(Math.exp(u)+Math.exp(-u))*.5},r=Math.sinh||function(u){return Math.abs(u)<1e-9?u:(Math.exp(u)-Math.exp(-u))*.5},s=function(u){var c=Math.PI/4;if(-c>u||u>c)return Math.cos(u)-1;var p=u*u;return p*(p*(p*(p*(p*(p*(p*(p/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},o=function(u,c){var p=Math.abs(u),g=Math.abs(c);return p<3e3&&g<3e3?Math.sqrt(p*p+g*g):(p<g?(p=g,g=u/c):g=c/u,p*Math.sqrt(1+g*g))},a=function(){throw SyntaxError("Invalid Param")};function f(u,c){var p=Math.abs(u),g=Math.abs(c);return u===0?Math.log(g):c===0?Math.log(p):p<3e3&&g<3e3?Math.log(u*u+c*c)*.5:(u=u/2,c=c/2,.5*Math.log(u*u+c*c)+Math.LN2)}var h=function(u,c){var p={re:0,im:0};if(u==null)p.re=p.im=0;else if(c!==void 0)p.re=u,p.im=c;else switch(typeof u){case"object":if("im"in u&&"re"in u)p.re=u.re,p.im=u.im;else if("abs"in u&&"arg"in u){if(!Number.isFinite(u.abs)&&Number.isFinite(u.arg))return l.INFINITY;p.re=u.abs*Math.cos(u.arg),p.im=u.abs*Math.sin(u.arg)}else if("r"in u&&"phi"in u){if(!Number.isFinite(u.r)&&Number.isFinite(u.phi))return l.INFINITY;p.re=u.r*Math.cos(u.phi),p.im=u.r*Math.sin(u.phi)}else u.length===2?(p.re=u[0],p.im=u[1]):a();break;case"string":p.im=p.re=0;var g=u.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),_=1,m=0;g===null&&a();for(var d=0;d<g.length;d++){var x=g[d];x===" "||x==="	"||x===`
`||(x==="+"?_++:x==="-"?m++:x==="i"||x==="I"?(_+m===0&&a(),g[d+1]!==" "&&!isNaN(g[d+1])?(p.im+=parseFloat((m%2?"-":"")+g[d+1]),d++):p.im+=parseFloat((m%2?"-":"")+"1"),_=m=0):((_+m===0||isNaN(x))&&a(),g[d+1]==="i"||g[d+1]==="I"?(p.im+=parseFloat((m%2?"-":"")+x),d++):p.re+=parseFloat((m%2?"-":"")+x),_=m=0))}_+m>0&&a();break;case"number":p.im=0,p.re=u;break;default:a()}return isNaN(p.re)||isNaN(p.im),p};function l(u,c){if(!(this instanceof l))return new l(u,c);var p=h(u,c);this.re=p.re,this.im=p.im}l.prototype={re:0,im:0,sign:function(){var u=this.abs();return new l(this.re/u,this.im/u)},add:function(u,c){var p=new l(u,c);return this.isInfinite()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:new l(this.re+p.re,this.im+p.im)},sub:function(u,c){var p=new l(u,c);return this.isInfinite()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:new l(this.re-p.re,this.im-p.im)},mul:function(u,c){var p=new l(u,c);return this.isInfinite()&&p.isZero()||this.isZero()&&p.isInfinite()?l.NAN:this.isInfinite()||p.isInfinite()?l.INFINITY:p.im===0&&this.im===0?new l(this.re*p.re,0):new l(this.re*p.re-this.im*p.im,this.re*p.im+this.im*p.re)},div:function(u,c){var p=new l(u,c);if(this.isZero()&&p.isZero()||this.isInfinite()&&p.isInfinite())return l.NAN;if(this.isInfinite()||p.isZero())return l.INFINITY;if(this.isZero()||p.isInfinite())return l.ZERO;u=this.re,c=this.im;var g=p.re,_=p.im,m,d;return _===0?new l(u/g,c/g):Math.abs(g)<Math.abs(_)?(d=g/_,m=g*d+_,new l((u*d+c)/m,(c*d-u)/m)):(d=_/g,m=_*d+g,new l((u+c*d)/m,(c-u*d)/m))},pow:function(u,c){var p=new l(u,c);if(u=this.re,c=this.im,p.isZero())return l.ONE;if(p.im===0){if(c===0&&u>0)return new l(Math.pow(u,p.re),0);if(u===0)switch((p.re%4+4)%4){case 0:return new l(Math.pow(c,p.re),0);case 1:return new l(0,Math.pow(c,p.re));case 2:return new l(-Math.pow(c,p.re),0);case 3:return new l(0,-Math.pow(c,p.re))}}if(u===0&&c===0&&p.re>0&&p.im>=0)return l.ZERO;var g=Math.atan2(c,u),_=f(u,c);return u=Math.exp(p.re*_-p.im*g),c=p.im*_+p.re*g,new l(u*Math.cos(c),u*Math.sin(c))},sqrt:function(){var u=this.re,c=this.im,p=this.abs(),g,_;if(u>=0){if(c===0)return new l(Math.sqrt(u),0);g=.5*Math.sqrt(2*(p+u))}else g=Math.abs(c)/Math.sqrt(2*(p-u));return u<=0?_=.5*Math.sqrt(2*(p-u)):_=Math.abs(c)/Math.sqrt(2*(p+u)),new l(g,c<0?-_:_)},exp:function(){var u=Math.exp(this.re);return this.im,new l(u*Math.cos(this.im),u*Math.sin(this.im))},expm1:function(){var u=this.re,c=this.im;return new l(Math.expm1(u)*Math.cos(c)+s(c),Math.exp(u)*Math.sin(c))},log:function(){var u=this.re,c=this.im;return new l(f(u,c),Math.atan2(c,u))},abs:function(){return o(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var u=this.re,c=this.im;return new l(Math.sin(u)*n(c),Math.cos(u)*r(c))},cos:function(){var u=this.re,c=this.im;return new l(Math.cos(u)*n(c),-Math.sin(u)*r(c))},tan:function(){var u=2*this.re,c=2*this.im,p=Math.cos(u)+n(c);return new l(Math.sin(u)/p,r(c)/p)},cot:function(){var u=2*this.re,c=2*this.im,p=Math.cos(u)-n(c);return new l(-Math.sin(u)/p,r(c)/p)},sec:function(){var u=this.re,c=this.im,p=.5*n(2*c)+.5*Math.cos(2*u);return new l(Math.cos(u)*n(c)/p,Math.sin(u)*r(c)/p)},csc:function(){var u=this.re,c=this.im,p=.5*n(2*c)-.5*Math.cos(2*u);return new l(Math.sin(u)*n(c)/p,-Math.cos(u)*r(c)/p)},asin:function(){var u=this.re,c=this.im,p=new l(c*c-u*u+1,-2*u*c).sqrt(),g=new l(p.re-c,p.im+u).log();return new l(g.im,-g.re)},acos:function(){var u=this.re,c=this.im,p=new l(c*c-u*u+1,-2*u*c).sqrt(),g=new l(p.re-c,p.im+u).log();return new l(Math.PI/2-g.im,g.re)},atan:function(){var u=this.re,c=this.im;if(u===0){if(c===1)return new l(0,1/0);if(c===-1)return new l(0,-1/0)}var p=u*u+(1-c)*(1-c),g=new l((1-c*c-u*u)/p,-2*u/p).log();return new l(-.5*g.im,.5*g.re)},acot:function(){var u=this.re,c=this.im;if(c===0)return new l(Math.atan2(1,u),0);var p=u*u+c*c;return p!==0?new l(u/p,-c/p).atan():new l(u!==0?u/0:0,c!==0?-c/0:0).atan()},asec:function(){var u=this.re,c=this.im;if(u===0&&c===0)return new l(0,1/0);var p=u*u+c*c;return p!==0?new l(u/p,-c/p).acos():new l(u!==0?u/0:0,c!==0?-c/0:0).acos()},acsc:function(){var u=this.re,c=this.im;if(u===0&&c===0)return new l(Math.PI/2,1/0);var p=u*u+c*c;return p!==0?new l(u/p,-c/p).asin():new l(u!==0?u/0:0,c!==0?-c/0:0).asin()},sinh:function(){var u=this.re,c=this.im;return new l(r(u)*Math.cos(c),n(u)*Math.sin(c))},cosh:function(){var u=this.re,c=this.im;return new l(n(u)*Math.cos(c),r(u)*Math.sin(c))},tanh:function(){var u=2*this.re,c=2*this.im,p=n(u)+Math.cos(c);return new l(r(u)/p,Math.sin(c)/p)},coth:function(){var u=2*this.re,c=2*this.im,p=n(u)-Math.cos(c);return new l(r(u)/p,-Math.sin(c)/p)},csch:function(){var u=this.re,c=this.im,p=Math.cos(2*c)-n(2*u);return new l(-2*r(u)*Math.cos(c)/p,2*n(u)*Math.sin(c)/p)},sech:function(){var u=this.re,c=this.im,p=Math.cos(2*c)+n(2*u);return new l(2*n(u)*Math.cos(c)/p,-2*r(u)*Math.sin(c)/p)},asinh:function(){var u=this.im;this.im=-this.re,this.re=u;var c=this.asin();return this.re=-this.im,this.im=u,u=c.re,c.re=-c.im,c.im=u,c},acosh:function(){var u=this.acos();if(u.im<=0){var c=u.re;u.re=-u.im,u.im=c}else{var c=u.im;u.im=-u.re,u.re=c}return u},atanh:function(){var u=this.re,c=this.im,p=u>1&&c===0,g=1-u,_=1+u,m=g*g+c*c,d=m!==0?new l((_*g-c*c)/m,(c*g+_*c)/m):new l(u!==-1?u/0:0,c!==0?c/0:0),x=d.re;return d.re=f(d.re,d.im)/2,d.im=Math.atan2(d.im,x)/2,p&&(d.im=-d.im),d},acoth:function(){var u=this.re,c=this.im;if(u===0&&c===0)return new l(0,Math.PI/2);var p=u*u+c*c;return p!==0?new l(u/p,-c/p).atanh():new l(u!==0?u/0:0,c!==0?-c/0:0).atanh()},acsch:function(){var u=this.re,c=this.im;if(c===0)return new l(u!==0?Math.log(u+Math.sqrt(u*u+1)):1/0,0);var p=u*u+c*c;return p!==0?new l(u/p,-c/p).asinh():new l(u!==0?u/0:0,c!==0?-c/0:0).asinh()},asech:function(){var u=this.re,c=this.im;if(this.isZero())return l.INFINITY;var p=u*u+c*c;return p!==0?new l(u/p,-c/p).acosh():new l(u!==0?u/0:0,c!==0?-c/0:0).acosh()},inverse:function(){if(this.isZero())return l.INFINITY;if(this.isInfinite())return l.ZERO;var u=this.re,c=this.im,p=u*u+c*c;return new l(u/p,-c/p)},conjugate:function(){return new l(this.re,-this.im)},neg:function(){return new l(-this.re,-this.im)},ceil:function(u){return u=Math.pow(10,u||0),new l(Math.ceil(this.re*u)/u,Math.ceil(this.im*u)/u)},floor:function(u){return u=Math.pow(10,u||0),new l(Math.floor(this.re*u)/u,Math.floor(this.im*u)/u)},round:function(u){return u=Math.pow(10,u||0),new l(Math.round(this.re*u)/u,Math.round(this.im*u)/u)},equals:function(u,c){var p=new l(u,c);return Math.abs(p.re-this.re)<=l.EPSILON&&Math.abs(p.im-this.im)<=l.EPSILON},clone:function(){return new l(this.re,this.im)},toString:function(){var u=this.re,c=this.im,p="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(u)<l.EPSILON&&(u=0),Math.abs(c)<l.EPSILON&&(c=0),c===0?p+u:(u!==0?(p+=u,p+=" ",c<0?(c=-c,p+="-"):p+="+",p+=" "):c<0&&(c=-c,p+="-"),c!==1&&(p+=c),p+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},l.ZERO=new l(0,0),l.ONE=new l(1,0),l.I=new l(0,1),l.PI=new l(Math.PI,0),l.E=new l(Math.E,0),l.INFINITY=new l(1/0,1/0),l.NAN=new l(NaN,NaN),l.EPSILON=1e-15,Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Complex=l,i.exports=l})()})(s1);const qt=Cf(ya);var o1="Complex",a1=[],u1=tr(o1,a1,()=>(Object.defineProperty(qt,"name",{value:"Complex"}),qt.prototype.constructor=qt,qt.prototype.type="Complex",qt.prototype.isComplex=!0,qt.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},qt.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},qt.prototype.format=function(i){var e="",t=this.im,n=this.re,r=fa(this.re,i),s=fa(this.im,i),o=hn(i)?i:i?i.precision:null;if(o!==null){var a=Math.pow(10,-o);Math.abs(n/t)<a&&(n=0),Math.abs(t/n)<a&&(t=0)}return t===0?e=r:n===0?t===1?e="i":t===-1?e="-i":e=s+"i":t<0?t===-1?e=r+" - i":e=r+" - "+s.substring(1)+"i":t===1?e=r+" + i":e=r+" + "+s+"i",e},qt.fromPolar=function(i){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return qt(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],n=arguments[1];if(hn(t)){if(rf(n)&&n.hasBase("ANGLE")&&(n=n.toNumber("rad")),hn(n))return new qt({r:t,phi:n});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},qt.prototype.valueOf=qt.prototype.toString,qt.fromJSON=function(i){return new qt(i)},qt.compare=function(i,e){return i.re>e.re?1:i.re<e.re?-1:i.im>e.im?1:i.im<e.im?-1:0},qt),{isClass:!0}),Ma={},l1={get exports(){return Ma},set exports(i){Ma=i}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(i,e){(function(t){var n=2e3,r={s:1,n:0,d:1};function s(g,_){if(isNaN(g=parseInt(g,10)))throw p.InvalidParameter;return g*_}function o(g,_){if(_===0)throw p.DivisionByZero;var m=Object.create(p.prototype);m.s=g<0?-1:1,g=g<0?-g:g;var d=c(g,_);return m.n=g/d,m.d=_/d,m}function a(g){for(var _={},m=g,d=2,x=4;x<=m;){for(;m%d===0;)m/=d,_[d]=(_[d]||0)+1;x+=1+2*d++}return m!==g?m>1&&(_[m]=(_[m]||0)+1):_[g]=(_[g]||0)+1,_}var f=function(g,_){var m=0,d=1,x=1,y=0,b=0,M=0,S=1,F=1,A=0,w=1,D=1,z=1,j=1e7,N;if(g!=null)if(_!==void 0){if(m=g,d=_,x=m*d,m%1!==0||d%1!==0)throw p.NonIntegerParameter}else switch(typeof g){case"object":{if("d"in g&&"n"in g)m=g.n,d=g.d,"s"in g&&(m*=g.s);else if(0 in g)m=g[0],1 in g&&(d=g[1]);else throw p.InvalidParameter;x=m*d;break}case"number":{if(g<0&&(x=g,g=-g),g%1===0)m=g;else if(g>0){for(g>=1&&(F=Math.pow(10,Math.floor(1+Math.log(g)/Math.LN10)),g/=F);w<=j&&z<=j;)if(N=(A+D)/(w+z),g===N){w+z<=j?(m=A+D,d=w+z):z>w?(m=D,d=z):(m=A,d=w);break}else g>N?(A+=D,w+=z):(D+=A,z+=w),w>j?(m=D,d=z):(m=A,d=w);m*=F}else(isNaN(g)||isNaN(_))&&(d=m=NaN);break}case"string":{if(w=g.match(/\d+|./g),w===null)throw p.InvalidParameter;if(w[A]==="-"?(x=-1,A++):w[A]==="+"&&A++,w.length===A+1?b=s(w[A++],x):w[A+1]==="."||w[A]==="."?(w[A]!=="."&&(y=s(w[A++],x)),A++,(A+1===w.length||w[A+1]==="("&&w[A+3]===")"||w[A+1]==="'"&&w[A+3]==="'")&&(b=s(w[A],x),S=Math.pow(10,w[A].length),A++),(w[A]==="("&&w[A+2]===")"||w[A]==="'"&&w[A+2]==="'")&&(M=s(w[A+1],x),F=Math.pow(10,w[A+1].length)-1,A+=3)):w[A+1]==="/"||w[A+1]===":"?(b=s(w[A],x),S=s(w[A+2],1),A+=3):w[A+3]==="/"&&w[A+1]===" "&&(y=s(w[A],x),b=s(w[A+2],x),S=s(w[A+4],1),A+=5),w.length<=A){d=S*F,x=m=M+d*y+F*b;break}}default:throw p.InvalidParameter}if(d===0)throw p.DivisionByZero;r.s=x<0?-1:1,r.n=Math.abs(m),r.d=Math.abs(d)};function h(g,_,m){for(var d=1;_>0;g=g*g%m,_>>=1)_&1&&(d=d*g%m);return d}function l(g,_){for(;_%2===0;_/=2);for(;_%5===0;_/=5);if(_===1)return 0;for(var m=10%_,d=1;m!==1;d++)if(m=m*10%_,d>n)return 0;return d}function u(g,_,m){for(var d=1,x=h(10,m,_),y=0;y<300;y++){if(d===x)return y;d=d*10%_,x=x*10%_}return 0}function c(g,_){if(!g)return _;if(!_)return g;for(;;){if(g%=_,!g)return _;if(_%=g,!_)return g}}function p(g,_){if(f(g,_),this instanceof p)g=c(r.d,r.n),this.s=r.s,this.n=r.n/g,this.d=r.d/g;else return o(r.s*r.n,r.d)}p.DivisionByZero=new Error("Division by Zero"),p.InvalidParameter=new Error("Invalid argument"),p.NonIntegerParameter=new Error("Parameters must be integer"),p.prototype={s:1,n:0,d:1,abs:function(){return o(this.n,this.d)},neg:function(){return o(-this.s*this.n,this.d)},add:function(g,_){return f(g,_),o(this.s*this.n*r.d+r.s*this.d*r.n,this.d*r.d)},sub:function(g,_){return f(g,_),o(this.s*this.n*r.d-r.s*this.d*r.n,this.d*r.d)},mul:function(g,_){return f(g,_),o(this.s*r.s*this.n*r.n,this.d*r.d)},div:function(g,_){return f(g,_),o(this.s*r.s*this.n*r.d,this.d*r.n)},clone:function(){return o(this.s*this.n,this.d)},mod:function(g,_){if(isNaN(this.n)||isNaN(this.d))return new p(NaN);if(g===void 0)return o(this.s*this.n%this.d,1);if(f(g,_),r.n===0&&this.d===0)throw p.DivisionByZero;return o(this.s*(r.d*this.n)%(r.n*this.d),r.d*this.d)},gcd:function(g,_){return f(g,_),o(c(r.n,this.n)*c(r.d,this.d),r.d*this.d)},lcm:function(g,_){return f(g,_),r.n===0&&this.n===0?o(0,1):o(r.n*this.n,c(r.n,this.n)*c(r.d,this.d))},ceil:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.ceil(g*this.s*this.n/this.d),g)},floor:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.floor(g*this.s*this.n/this.d),g)},round:function(g){return g=Math.pow(10,g||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):o(Math.round(g*this.s*this.n/this.d),g)},inverse:function(){return o(this.s*this.d,this.n)},pow:function(g,_){if(f(g,_),r.d===1)return r.s<0?o(Math.pow(this.s*this.d,r.n),Math.pow(this.n,r.n)):o(Math.pow(this.s*this.n,r.n),Math.pow(this.d,r.n));if(this.s<0)return null;var m=a(this.n),d=a(this.d),x=1,y=1;for(var b in m)if(b!=="1"){if(b==="0"){x=0;break}if(m[b]*=r.n,m[b]%r.d===0)m[b]/=r.d;else return null;x*=Math.pow(b,m[b])}for(var b in d)if(b!=="1"){if(d[b]*=r.n,d[b]%r.d===0)d[b]/=r.d;else return null;y*=Math.pow(b,d[b])}return r.s<0?o(y,x):o(x,y)},equals:function(g,_){return f(g,_),this.s*this.n*r.d===r.s*r.n*this.d},compare:function(g,_){f(g,_);var m=this.s*this.n*r.d-r.s*r.n*this.d;return(0<m)-(m<0)},simplify:function(g){if(isNaN(this.n)||isNaN(this.d))return this;g=g||.001;for(var _=this.abs(),m=_.toContinued(),d=1;d<m.length;d++){for(var x=o(m[d-1],1),y=d-2;y>=0;y--)x=x.inverse().add(m[y]);if(x.sub(_).abs().valueOf()<g)return x.mul(this.s)}return this},divisible:function(g,_){return f(g,_),!(!(r.n*this.d)||this.n*r.d%(r.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(g){var _,m="",d=this.n,x=this.d;return this.s<0&&(m+="-"),x===1?m+=d:(g&&(_=Math.floor(d/x))>0&&(m+=_,m+=" ",d%=x),m+=d,m+="/",m+=x),m},toLatex:function(g){var _,m="",d=this.n,x=this.d;return this.s<0&&(m+="-"),x===1?m+=d:(g&&(_=Math.floor(d/x))>0&&(m+=_,d%=x),m+="\\frac{",m+=d,m+="}{",m+=x,m+="}"),m},toContinued:function(){var g,_=this.n,m=this.d,d=[];if(isNaN(_)||isNaN(m))return d;do d.push(Math.floor(_/m)),g=_%m,_=m,m=g;while(_!==1);return d},toString:function(g){var _=this.n,m=this.d;if(isNaN(_)||isNaN(m))return"NaN";g=g||15;var d=l(_,m),x=u(_,m,d),y=this.s<0?"-":"";if(y+=_/m|0,_%=m,_*=10,_&&(y+="."),d){for(var b=x;b--;)y+=_/m|0,_%=m,_*=10;y+="(";for(var b=d;b--;)y+=_/m|0,_%=m,_*=10;y+=")"}else for(var b=g;_&&b--;)y+=_/m|0,_%=m,_*=10;return y}},Object.defineProperty(p,"__esModule",{value:!0}),p.default=p,p.Fraction=p,i.exports=p})()})(l1);const di=Cf(Ma);var c1="Fraction",f1=[],h1=tr(c1,f1,()=>(Object.defineProperty(di,"name",{value:"Fraction"}),di.prototype.constructor=di,di.prototype.type="Fraction",di.prototype.isFraction=!0,di.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},di.fromJSON=function(i){return new di(i)},di),{isClass:!0}),d1="Matrix",p1=[],m1=tr(d1,p1,()=>{function i(){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator")}return i.prototype.type="Matrix",i.prototype.isMatrix=!0,i.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},i.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},i.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},i.prototype.subset=function(e,t,n){throw new Error("Cannot invoke subset on a Matrix interface")},i.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},i.prototype.set=function(e,t,n){throw new Error("Cannot invoke set on a Matrix interface")},i.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},i.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},i.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},i.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},i.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},i.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},i.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},i.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},i.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},i.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},i.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},i},{isClass:!0});function g1(i){return Object.keys(i.signatures||{}).reduce(function(e,t){var n=(t.match(/,/g)||[]).length+1;return Math.max(e,n)},-1)}var _1="DenseMatrix",v1=["Matrix"],x1=tr(_1,v1,i=>{var{Matrix:e}=i;function t(l,u){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(u&&!js(u))throw new Error("Invalid datatype: "+u);if(is(l))l.type==="DenseMatrix"?(this._data=Yi(l._data),this._size=Yi(l._size),this._datatype=u||l._datatype):(this._data=l.toArray(),this._size=l.size(),this._datatype=u||l._datatype);else if(l&&bn(l.data)&&bn(l.size))this._data=l.data,this._size=l.size,Il(this._data,this._size),this._datatype=u||l.datatype;else if(bn(l))this._data=h(l),this._size=ha(this._data),Il(this._data,this._size),this._datatype=u;else{if(l)throw new TypeError("Unsupported type of data ("+Wo(l)+")");this._data=[],this._size=[0],this._datatype=u}}t.prototype=new e,t.prototype.createDenseMatrix=function(l,u){return new t(l,u)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return pa(this._data,Wo)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(l,u){return new t(l,u)},t.prototype.subset=function(l,u,c){switch(arguments.length){case 1:return n(this,l);case 2:case 3:return s(this,l,u,c);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(l){if(!bn(l))throw new TypeError("Array expected");if(l.length!==this._size.length)throw new Ht(l.length,this._size.length);for(var u=0;u<l.length;u++)Cn(l[u],this._size[u]);for(var c=this._data,p=0,g=l.length;p<g;p++){var _=l[p];Cn(_,c.length),c=c[_]}return c},t.prototype.set=function(l,u,c){if(!bn(l))throw new TypeError("Array expected");if(l.length<this._size.length)throw new Ht(l.length,this._size.length,"<");var p,g,_,m=l.map(function(x){return x+1});f(this,m,c);var d=this._data;for(p=0,g=l.length-1;p<g;p++)_=l[p],Cn(_,d.length),d=d[_];return _=l[l.length-1],Cn(_,d.length),d[_]=u,this};function n(l,u){if(!sf(u))throw new TypeError("Invalid index");var c=u.isScalar();if(c)return l.get(u.min());var p=u.size();if(p.length!==l._size.length)throw new Ht(p.length,l._size.length);for(var g=u.min(),_=u.max(),m=0,d=l._size.length;m<d;m++)Cn(g[m],l._size[m]),Cn(_[m],l._size[m]);return new t(r(l._data,u,p.length,0),l._datatype)}function r(l,u,c,p){var g=p===c-1,_=u.dimension(p);return g?_.map(function(m){return Cn(m,l.length),l[m]}).valueOf():_.map(function(m){Cn(m,l.length);var d=l[m];return r(d,u,c,p+1)}).valueOf()}function s(l,u,c,p){if(!u||u.isIndex!==!0)throw new TypeError("Invalid index");var g=u.size(),_=u.isScalar(),m;if(is(c)?(m=c.size(),c=c.valueOf()):m=ha(c),_){if(m.length!==0)throw new TypeError("Scalar expected");l.set(u.min(),c,p)}else{if(g.length<l._size.length)throw new Ht(g.length,l._size.length,"<");if(m.length<g.length){for(var d=0,x=0;g[d]===1&&m[d]===1;)d++;for(;g[d]===1;)x++,d++;c=X_(c,g.length,x,m)}if(!ca(g,m))throw new Ht(g,m,">");var y=u.max().map(function(S){return S+1});f(l,y,p);var b=g.length,M=0;o(l._data,u,c,b,M)}return l}function o(l,u,c,p,g){var _=g===p-1,m=u.dimension(g);_?m.forEach(function(d,x){Cn(d),l[d]=c[x[0]]}):m.forEach(function(d,x){Cn(d),o(l[d],u,c[x[0]],p,g+1)})}t.prototype.resize=function(l,u,c){if(!la(l))throw new TypeError("Array or Matrix expected");var p=l.valueOf().map(_=>Array.isArray(_)&&_.length===1?_[0]:_),g=c?this.clone():this;return a(g,p,u)};function a(l,u,c){if(u.length===0){for(var p=l._data;bn(p);)p=p[0];return p}return l._size=u.slice(0),l._data=Nl(l._data,l._size,c),l}t.prototype.reshape=function(l,u){var c=u?this.clone():this;c._data=j_(c._data,l);var p=c._size.reduce((g,_)=>g*_);return c._size=ff(l,p),c};function f(l,u,c){for(var p=l._size.slice(0),g=!1;p.length<u.length;)p.push(0),g=!0;for(var _=0,m=u.length;_<m;_++)u[_]>p[_]&&(p[_]=u[_],g=!0);g&&a(l,p,c)}t.prototype.clone=function(){var l=new t({data:Yi(this._data),size:Yi(this._size),datatype:this._datatype});return l},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(l){var u=this,c=g1(l),p=function m(d,x){return bn(d)?d.map(function(y,b){return m(y,x.concat(b))}):c===1?l(d):c===2?l(d,x):l(d,x,u)},g=p(this._data,[]),_=this._datatype!==void 0?pa(g,Wo):void 0;return new t(g,_)},t.prototype.forEach=function(l){var u=this,c=function p(g,_){bn(g)?g.forEach(function(m,d){p(m,_.concat(d))}):l(g,_,u)};c(this._data,[])},t.prototype[Symbol.iterator]=function*(){var l=function*u(c,p){if(bn(c))for(var g=0;g<c.length;g++)yield*u(c[g],p.concat(g));else yield{value:c,index:p}};yield*l(this._data,[])},t.prototype.rows=function(){var l=[],u=this.size();if(u.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var c=this._data;for(var p of c)l.push(new t([p],this._datatype));return l},t.prototype.columns=function(){var l=this,u=[],c=this.size();if(c.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var p=this._data,g=function(d){var x=p.map(y=>[y[d]]);u.push(new t(x,l._datatype))},_=0;_<c[1];_++)g(_);return u},t.prototype.toArray=function(){return Yi(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(l){return us(this._data,l)},t.prototype.toString=function(){return us(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(l){if(l){if(Pi(l)&&(l=l.toNumber()),!hn(l)||!Pn(l))throw new TypeError("The parameter k must be an integer number")}else l=0;for(var u=l>0?l:0,c=l<0?-l:0,p=this._size[0],g=this._size[1],_=Math.min(p-c,g-u),m=[],d=0;d<_;d++)m[d]=this._data[d+c][d+u];return new t({data:m,size:[_],datatype:this._datatype})},t.diagonal=function(l,u,c,p){if(!bn(l))throw new TypeError("Array expected, size parameter");if(l.length!==2)throw new Error("Only two dimensions matrix are supported");if(l=l.map(function(F){if(Pi(F)&&(F=F.toNumber()),!hn(F)||!Pn(F)||F<1)throw new Error("Size values must be positive integers");return F}),c){if(Pi(c)&&(c=c.toNumber()),!hn(c)||!Pn(c))throw new TypeError("The parameter k must be an integer number")}else c=0;var g=c>0?c:0,_=c<0?-c:0,m=l[0],d=l[1],x=Math.min(m-_,d-g),y;if(bn(u)){if(u.length!==x)throw new Error("Invalid value array length");y=function(A){return u[A]}}else if(is(u)){var b=u.size();if(b.length!==1||b[0]!==x)throw new Error("Invalid matrix length");y=function(A){return u.get([A])}}else y=function(){return u};p||(p=Pi(y(0))?y(0).mul(0):0);var M=[];if(l.length>0){M=Nl(M,l,p);for(var S=0;S<x;S++)M[S+_][S+g]=y(S)}return new t({data:M,size:[m,d]})},t.fromJSON=function(l){return new t(l)},t.prototype.swapRows=function(l,u){if(!hn(l)||!Pn(l)||!hn(u)||!Pn(u))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return Cn(l,this._size[0]),Cn(u,this._size[0]),t._swapRows(l,u,this._data),this},t._swapRows=function(l,u,c){var p=c[l];c[l]=c[u],c[u]=p};function h(l){for(var u=0,c=l.length;u<c;u++){var p=l[u];bn(p)?l[u]=h(p):p&&p.isMatrix===!0&&(l[u]=h(p.valueOf()))}return l}return t},{isClass:!0});function wa(i,e){if(e<i)return 1;if(e===i)return e;var t=e+i>>1;return wa(i,t)*wa(t+1,e)}function Tf(i,e){if(!Pn(i)||i<0)throw new TypeError("Positive integer value expected in function combinations");if(!Pn(e)||e<0)throw new TypeError("Positive integer value expected in function combinations");if(e>i)throw new TypeError("k must be less than or equal to n");for(var t=i-e,n=1,r=e<t?t+1:e+1,s=2,o=e<t?e:t,a=r;a<=i;++a)for(n*=a;s<=o&&n%s===0;)n/=s,++s;return s<=o&&(n/=wa(s,o)),n}Tf.signature="number, number";var zl="combinations",y1=["typed"],M1=tr(zl,y1,i=>{var{typed:e}=i;return e(zl,{"number, number":Tf,"BigNumber, BigNumber":function(n,r){var s=n.constructor,o,a,f=n.minus(r),h=new s(1);if(!kl(n)||!kl(r))throw new TypeError("Positive integer value expected in function combinations");if(r.gt(n))throw new TypeError("k must be less than n in function combinations");if(o=h,r.lt(f))for(a=h;a.lte(f);a=a.plus(h))o=o.times(r.plus(a)).dividedBy(a);else for(a=h;a.lte(r);a=a.plus(h))o=o.times(f.plus(a)).dividedBy(a);return o}})});function kl(i){return i.isInteger()&&i.gte(0)}var w1=r1({config:of}),b1=u1({}),D1=h1({}),S1=m1({}),E1=x1({Matrix:S1}),A1=av({BigNumber:w1,Complex:b1,DenseMatrix:E1,Fraction:D1}),C1=M1({typed:A1});const Ks=(i,e)=>t=>C1(e,i)*Math.pow(t,i)*Math.pow(1-t,e-i);class T1{constructor(e=[new I(0,0,0),new I(1,0,0),new I(2,0,0),new I(3,0,0)]){Kn(this,"points",[]);Kn(this,"order",this.points.length);Kn(this,"resolution",100);Kn(this,"controlPolygon",new rn);for(const t of e)this.addPoint(t)}evaluate(e){let t=new I(0,0,0),n=new I(0,0,0);for(const{vector:r,coefficient:s}of this.points)n.x=r.x,n.y=r.y,n.z=r.z,t.add(n.multiplyScalar(s(e)));return t}generate(){let e=[];for(let t=0;t<this.resolution;t++){let n=t/this.resolution;e.push(this.evaluate(n))}return e}addPoint(e){this.points.push({vector:e,coefficient:Ks(this.order+1,this.order+1),enabled:!1}),this.recomputeCoeffients()}removePoint(){this.points.pop(),this.recomputeCoeffients()}recomputeCoeffients(){this.order=this.points.length-1,this.points.forEach((e,t)=>{e.coefficient=Ks(t,this.order)})}vectors(){return this.points.map(e=>e.vector)}computeControlPolygon(){this.controlPolygon.geometry.setFromPoints(this.vectors()),this.controlPolygon.computeLineDistances()}}class P1{constructor(e=[[new I(0,0,0),new I(1,0,0),new I(2,0,0),new I(3,0,0)],[new I(0,0,1),new I(1,0,1),new I(2,0,1),new I(3,0,1)],[new I(0,0,2),new I(1,0,2),new I(2,0,2),new I(3,0,2)],[new I(0,0,3),new I(1,0,3),new I(2,0,3),new I(3,0,3)]]){Kn(this,"points",[]);Kn(this,"rowOrder",0);Kn(this,"colOrder",0);Kn(this,"resolution",20);Kn(this,"controlPolygon",[]);for(const t of e)this.addRow(t);for(let t=0;t<this.rowOrder+this.colOrder+2;t++)this.controlPolygon.push(new rn)}evaluate(e,t){let n=new I(0,0,0),r=new I(0,0,0);for(let s=0;s<this.points.length;s++)for(let o=0;o<this.points[s].length;o++)r.x=this.points[s][o].vector.x,r.y=this.points[s][o].vector.y,r.z=this.points[s][o].vector.z,n.add(r.multiplyScalar(this.points[s][o].coefficient(e,t)));return n}generate(){const e=this.resolution,t=this.resolution,n=[];for(let a=0;a<e+1;a++){let f=[];for(let h=0;h<t+1;h++)f.push(this.evaluate(a/e,h/t));n.push(f)}const r=new Float32Array(e*t*3*6),s=new Uint32Array(e*t*6);for(let a=0,f=0,h=0;a<t;a++)for(let l=0;l<e;l++){const u=n[l][a],c=n[l+1][a],p=n[l+1][a+1],g=n[l][a+1];r.set([u.x,u.y,u.z],f),r.set([c.x,c.y,c.z],f+3),r.set([g.x,g.y,g.z],f+6),r.set([c.x,c.y,c.z],f+9),r.set([p.x,p.y,p.z],f+12),r.set([g.x,g.y,g.z],f+15),s.set([f/3,f/3+1,f/3+2],h),s.set([f/3+3,f/3+4,f/3+5],h+3),f+=18,h+=6}const o=new Kt;return o.setAttribute("position",new Fn(r,3)),o.setIndex(new Fn(s,1)),o.computeVertexNormals(),o}addRow(e){const t=[];for(const n of e)t.push({vector:n,coefficient:(r,s)=>r+s,enabled:!1});this.points.push(t),this.recomputeCoeffients()}removeRow(){this.points.pop(),this.recomputeCoeffients()}recomputeCoeffients(){this.rowOrder=this.points.length-1,this.colOrder=this.points[0].length-1;for(let e=0;e<this.points.length;e++)for(let t=0;t<this.points[e].length;t++)this.points[e][t].coefficient=(n,r)=>Ks(e,this.rowOrder)(n)*Ks(t,this.colOrder)(r)}vectors(){return this.points.map(e=>e.map(t=>t.vector))}computeControlPolygon(){const e=this.vectors(),t=this.rowOrder+this.colOrder+2;if(this.controlPolygon.length>t)for(;this.controlPolygon.length>t;)this.controlPolygon.pop();else this.controlPolygon.length<t&&this.controlPolygon.push(new rn);for(let n=0;n<this.rowOrder+1;n++)this.controlPolygon[n].geometry.setFromPoints(e[n]),this.controlPolygon[n].computeLineDistances();for(let n=0;n<this.colOrder+1;n++)this.controlPolygon[this.rowOrder+1+n].geometry.setFromPoints(e.map(r=>r[n])),this.controlPolygon[this.rowOrder+1+n].computeLineDistances()}}const F1={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const L1=new Pa(-1,1,1,-1,0,1),Ia=new Kt;Ia.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3));Ia.setAttribute("uv",new Dt([0,2,0,0,2,0],2));class R1{constructor(e){this._mesh=new De(Ia,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,L1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class I1 extends lo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kc.clone(e.uniforms),this.material=new gi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new R1(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hl extends lo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class N1 extends lo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class B1{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Je);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new I1(F1),this.clock=new Jc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hl!==void 0&&(o instanceof Hl?n=!0:o instanceof N1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Pf extends lo{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const U1=(i,e,t)=>{i.renderer=new Xc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new B1(i.renderer),i.composer.addPass(new Pf(i.scene,ba(i.camera)))},Gl=(i,e,t)=>{i.renderer&&(e?i.renderer.outputEncoding=Ii:i.renderer.outputEncoding=St,t?i.renderer.toneMapping=ri:i.renderer.toneMapping=Ac)},Vl=(i,e,t)=>{var n,r,s,o,a,f,h,l;!i.renderer||!i.composer||((r=(n=i.renderer).setSize)==null||r.call(n,e.width,e.height),(o=(s=i.renderer).setPixelRatio)==null||o.call(s,t),(f=(a=i.composer).setSize)==null||f.call(a,e.width,e.height),(l=(h=i.composer).setPixelRatio)==null||l.call(h,t))},Wl=(i,e,t)=>{i.renderer&&(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},mn=i=>i.userData,O1=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Ff=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),z1=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,k1=(i,e,t)=>{let n;const r=i.camera.subscribe(h=>n=h);At(r);let s;const o=i.pointer.subscribe(h=>s=h);At(o);let a;const f=h=>{var c,p;h.preventDefault();const l=h.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,O1(i,h);const u=H1(e,s,n);if(l==="pointerdown"&&(a=u?{object:u.object,instanceId:u.instanceId}:null),l==="click"){if(!G1(u,a)){a=null;return}a=null}u&&((p=(c=mn(u.object)).eventDispatcher)==null||p.call(c,l,{...u,event:h}))};return{onClick:f,onContextMenu:f,onPointerUp:f,onPointerDown:f,onPointerMove:f}};function H1(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Ff(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function G1(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const V1=(i,e)=>{let t;const n=i.pointerOverCanvas.subscribe(h=>t=h);At(n);let r;const s=i.camera.subscribe(h=>r=h);At(s);let o;const a=i.pointer.subscribe(h=>o=h);return At(a),{raycast:()=>{var u,c,p,g,_,m,d,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const h=t?Ff(e,o,r,Array.from(e.raycastableObjects)):[],l=h.length&&e.interactiveObjects.has(h[0].object)?h[0]:null;l?e.lastIntersection?e.lastIntersection&&z1(e.lastIntersection,l)&&((m=(_=mn(e.lastIntersection.object)).eventDispatcher)==null||m.call(_,"pointerleave",e.lastIntersection),(x=(d=mn(l.object)).eventDispatcher)==null||x.call(d,"pointerenter",l)):(g=(p=mn(l.object)).eventDispatcher)==null||g.call(p,"pointerenter",l):e.lastIntersection&&((c=(u=mn(e.lastIntersection.object)).eventDispatcher)==null||c.call(u,"pointerleave",e.lastIntersection)),e.lastIntersection=l}}},co=typeof window<"u",W1=i=>{if(!co)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),At(()=>{e&&cancelAnimationFrame(e)})},j1=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>(r.order??0)>(s.order??0)?1:-1).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},q1=i=>{i.debugFrameloop&&(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by ↴":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},X1=(i,e,t,n)=>{let r=ba(i.camera);const s=i.camera.subscribe(a=>r=a);At(s);const{raycast:o}=V1(i,e);W1(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!r||!i.composer||!i.renderer||(j1(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,r),q1(t),t.frameInvalidated=!1,t.advance=!1))})},Y1=()=>{const i=new Dn(75,0,.1,1e3);return mn(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},Z1=i=>{const e=i.size.subscribe(t=>{mn(ba(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});At(e)},K1=(i,e,t,n,r,s,o)=>{const a={audioListeners:new Map,addAudioListener:(d,x)=>{if(x=x??"default",a.audioListeners.has(x)){console.warn(`An AudioListener with the id "${x}" has already been added, aborting.`);return}a.audioListeners.set(x,d)},removeAudioListener:d=>{if(d=d??"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}a.audioListeners.delete(d)},getAudioListener:d=>{if(d=d??"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return a.audioListeners.get(d)}},f={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},h={size:qf([n,r],([d,x])=>d||x),pointer:Yt(new Je),pointerOverCanvas:Yt(!1),clock:new Jc,camera:Yt(Y1()),scene:new Wg,renderer:void 0,composer:void 0,invalidate:d=>{f.frameInvalidated=!0,f.debugFrameloop&&d&&(f.invalidations[d]=f.invalidations[d]?f.invalidations[d]+1:1)},advance:()=>{f.advance=!0}},l={flat:Yt(e),linear:Yt(i),dpr:Yt(t),setCamera:d=>{h.camera.set(d),h.composer&&(h.composer.passes.forEach(x=>{x instanceof Pf&&(x.camera=d)}),h.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new $c,lastIntersection:null,addRaycastableObject:d=>{l.raycastableObjects.add(d)},removeRaycastableObject:d=>{l.raycastableObjects.delete(d)},addInteractiveObject:d=>{l.interactiveObjects.add(d)},removeInteractiveObject:d=>{l.interactiveObjects.delete(d)},addPass:d=>{h.composer&&(h.composer.addPass(d),h.invalidate("Canvas: adding pass"))},removePass:d=>{h.composer&&(h.composer.removePass(d),h.invalidate("Canvas: removing pass"))}},u={dispose:async(d=!1)=>{await Da(),!(!u.shouldDispose&&!d)&&(u.disposableObjects.forEach((x,y)=>{var b;(x===0||d)&&((b=y==null?void 0:y.dispose)==null||b.call(y),u.disposableObjects.delete(y))}),u.shouldDispose=!1)},collectDisposableObjects:(d,x)=>{const y=x??[];return d&&(d!=null&&d.dispose&&typeof d.dispose=="function"&&d.type!=="Scene"&&y.push(d),Object.entries(d).forEach(([b,M])=>{if(b==="parent"||b==="children"||typeof M!="object")return;const S=M;S!=null&&S.dispose&&u.collectDisposableObjects(S,y)})),y},addDisposableObjects:d=>{d.forEach(x=>{const y=u.disposableObjects.get(x);y?u.disposableObjects.set(x,y+1):u.disposableObjects.set(x,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(x=>{const y=u.disposableObjects.get(x);y&&y>0&&u.disposableObjects.set(x,y-1)}),u.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return zn("threlte",h),zn("threlte-root",l),zn("threlte-render-context",f),zn("threlte-audio-context",a),zn("threlte-disposal-context",u),{ctx:h,rootCtx:l,renderCtx:f,audioCtx:a,disposalCtx:u,getCtx:()=>h,getRootCtx:()=>l,getRenderCtx:()=>f,getAudioCtx:()=>a,getDisposalCtx:()=>u}};function Na(i,e){const t=Yt(i);let n=i;const r=t.subscribe(a=>n=a);return At(r),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const f=n;t.set(a),e==null||e(a,f)},update:a=>{const f=a(n);if((f==null?void 0:f.uuid)===(n==null?void 0:n.uuid))return;const h=n;t.set(f),e==null||e(f,h)}}}const _i=()=>si("threlte");function Q1(i){let e;const t=i[8].default,n=zr(t,i,i[7],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&kr(n,t,r,r[7],e?Gr(t,r[7],s,null):Hr(r[7]),null)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}const J1=()=>({onChildMount:si("threlte-hierarchical-object-on-mount"),onChildDestroy:si("threlte-hierarchical-object-on-destroy")}),Ba=()=>si("threlte-hierarchical-parent-context");function $1(i,e,t){var d;let n,{$$slots:r={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:f=void 0}=e;const h=x=>{a.push(x),t(1,a),f==null||f(x)};let{onChildDestroy:l=void 0}=e;const u=x=>{const y=a.findIndex(b=>b.uuid===x.uuid);y!==-1&&a.splice(y,1),t(1,a),l==null||l(x)},{invalidate:c}=_i(),p=Ba();Gt(i,p,x=>t(6,n=x));let{parent:g=n}=e;const _=J1();o&&((d=_.onChildMount)==null||d.call(_,o),c("HierarchicalObject: object added"));const m=Na(o,(x,y)=>{var b,M;y&&((b=_.onChildDestroy)==null||b.call(_,y),c("HierarchicalObject: object added")),x&&((M=_.onChildMount)==null||M.call(_,x),c("HierarchicalObject: object removed"))});return At(()=>{var x;o&&((x=_.onChildDestroy)==null||x.call(_,o),c("HierarchicalObject: object removed"))}),zn("threlte-hierarchical-object-on-mount",h),zn("threlte-hierarchical-object-on-destroy",u),zn("threlte-hierarchical-parent-context",m),i.$$set=x=>{"object"in x&&t(3,o=x.object),"children"in x&&t(1,a=x.children),"onChildMount"in x&&t(4,f=x.onChildMount),"onChildDestroy"in x&&t(5,l=x.onChildDestroy),"parent"in x&&t(2,g=x.parent),"$$scope"in x&&t(7,s=x.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,g=n),i.$$.dirty&8&&m.set(o)},[p,a,g,o,f,l,n,s,r]}class ex extends on{constructor(e){super(),an(this,e,$1,Q1,un,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function tx(i){let e;const t=i[1].default,n=zr(t,i,i[4],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&kr(n,t,r,r[4],e?Gr(t,r[4],s,null):Hr(r[4]),null)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}function nx(i){let e,t;return e=new ex({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[tx]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function ix(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const o=f=>s.add(f),a=f=>s.remove(f);return i.$$set=f=>{"object"in f&&t(0,s=f.object),"$$scope"in f&&t(4,r=f.$$scope)},[s,n,o,a,r]}class Lf extends on{constructor(e){super(),an(this,e,ix,nx,un,{object:0})}}const rx=()=>{const i=Yt({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);At(t);let n;const r=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:f}=n.parentElement;(a!==o.width||f!==o.height)&&i.set({width:a,height:f})},s=o=>{n=o,r(),window.addEventListener("resize",r)};return co?(At(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function jl(i){let e,t;return e=new Lf({props:{object:i[0].scene,$$slots:{default:[sx]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function sx(i){let e;const t=i[29].default,n=zr(t,i,i[33],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&kr(n,t,r,r[33],e?Gr(t,r[33],s,null):Hr(r[33]),null)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}function ox(i){let e,t,n,r,s=i[2]&&jl(i);return{c(){e=Ae("canvas"),s&&s.c(),this.h()},l(o){e=Ce(o,"CANVAS",{class:!0});var a=Ue(e);s&&s.l(a),a.forEach(he),this.h()},h(){Re(e,"class","svelte-o3oskp")},m(o,a){rt(o,e,a),s&&s.m(e,null),i[30](e),t=!0,n||(r=[Vf(i[3].call(null,e)),Lt(e,"click",i[9]),Lt(e,"contextmenu",i[10]),Lt(e,"pointerup",i[13]),Lt(e,"pointerdown",i[11]),Lt(e,"pointermove",i[12]),Lt(e,"pointerenter",i[31]),Lt(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ve(s,1)):(s=jl(o),s.c(),ve(s,1),s.m(e,null)):s&&(qn(),be(s,1,1,()=>{s=null}),Xn())},i(o){t||(ve(s),t=!0)},o(o){be(s),t=!1},d(o){o&&he(e),s&&s.d(),i[30](null),n=!1,Js(r)}}}const ql=new Set;function ax(i,e,t){let n,r,s,o,{$$slots:a={},$$scope:f}=e,{dpr:h=co?window.devicePixelRatio:1}=e,{flat:l=!1}=e,{linear:u=!1}=e,{frameloop:c="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:_=bc}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,x,y=!1;const b=Yt(m),{parentSize:M,parentSizeAction:S}=rx(),F=K1(u,l,h,b,M,p,c),{getCtx:A,renderCtx:w,disposalCtx:D}=F,{ctx:z,rootCtx:j,audioCtx:N}=F;Z1(z),ql.add(z.invalidate),At(()=>{ql.delete(z.invalidate)});const{size:H,scene:G}=z;Gt(i,H,V=>t(26,r=V));const{flat:K,linear:B,dpr:J}=j;Gt(i,K,V=>t(27,s=V)),Gt(i,B,V=>t(28,o=V)),Gt(i,J,V=>t(25,n=V)),zn("threlte-parent",Yt(G)),Mc(()=>{x&&(U1(z,x,d),Gl(z,o,s),Vl(z,r,n),Wl(z,g,_),t(2,y=!0))}),X1(z,j,w,D);const{onClick:ie,onContextMenu:ce,onPointerDown:ne,onPointerMove:ye,onPointerUp:$}=k1(z,j,w);At(()=>{D.dispose(!0)});function ue(V){Vn[V?"unshift":"push"](()=>{x=V,t(1,x)})}const xe=()=>A().pointerOverCanvas.set(!0),ee=()=>A().pointerOverCanvas.set(!1);return i.$$set=V=>{"dpr"in V&&t(14,h=V.dpr),"flat"in V&&t(15,l=V.flat),"linear"in V&&t(16,u=V.linear),"frameloop"in V&&t(17,c=V.frameloop),"debugFrameloop"in V&&t(18,p=V.debugFrameloop),"shadows"in V&&t(19,g=V.shadows),"shadowMapType"in V&&t(20,_=V.shadowMapType),"size"in V&&t(21,m=V.size),"rendererParameters"in V&&t(22,d=V.rendererParameters),"$$scope"in V&&t(33,f=V.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&b.set(m),i.$$.dirty[0]&65536&&ns(B,o=u,o),i.$$.dirty[0]&32768&&ns(K,s=l,s),i.$$.dirty[0]&16384&&ns(J,n=h,n),i.$$.dirty[0]&402653184&&Gl(A(),o,s),i.$$.dirty[0]&100663296&&Vl(A(),r,n),i.$$.dirty[0]&1572864&&Wl(A(),g,_)},[z,x,y,S,A,H,K,B,J,ie,ce,ne,ye,$,h,l,u,c,p,g,_,m,d,j,N,n,r,s,o,a,ue,xe,ee,f]}class ux extends on{constructor(e){super(),an(this,e,ax,ox,un,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Rf=()=>si("threlte-root"),lx=()=>si("threlte-disposal-context");function cx(i){let e;const t=i[9].default,n=zr(t,i,i[8],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&kr(n,t,r,r[8],e?Gr(t,r[8],s,null):Hr(r[8]),null)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}const Xl="threlte-disposable-object-context";function fx(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:f,removeDisposableObjects:h}=lx();let{object:l=void 0}=e,u=l,{dispose:c=void 0}=e;const p=si(Xl);Gt(i,p,m=>t(7,r=m));const g=Yt(c??r??!0);Gt(i,g,m=>t(6,n=m)),zn(Xl,g);let _=n?a(l):[];return f(_),At(()=>{h(_)}),i.$$set=m=>{"object"in m&&t(2,l=m.object),"dispose"in m&&t(3,c=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&g.set(c??r??!0),i.$$.dirty&116&&l!==u&&(h(_),t(5,_=n?a(l):[]),f(_),t(4,u=l))},[p,g,l,c,u,_,n,r,o,s]}class Ua extends on{constructor(e){super(),an(this,e,fx,cx,un,{object:2,dispose:3})}}function hx(i,e,t){let n,r,{object:s}=e;const o=Na(s);Gt(i,o,h=>t(4,r=h));const a=si("threlte-layers");Gt(i,a,h=>t(3,n=h));const{invalidate:f}=_i();return i.$$set=h=>{"object"in h&&t(2,s=h.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let h=0;h<32;h+=1){const l=h;n.includes(l)?r.layers.enable(h):r.layers.disable(h)}else n!==void 0&&r.layers.set(n);f("LayerableObject")}},[o,a,s,n,r]}class dx extends on{constructor(e){super(),an(this,e,hx,null,un,{object:2})}}const If=(i,e)=>{if(!co)return{start:()=>{},stop:()=>{},started:Xf(!1)};const t=si("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=Yt(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},o=()=>{t.frameHandlers.add(n),r.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),At(()=>{s()}),{start:o,stop:s,started:{subscribe:r.subscribe}}},px=()=>{const i=Yt(!1);return(async()=>{await Da(),i.set(!0)})(),i};function mx(i,e,t){let n,r,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:f=void 0}=e,{lookAt:h=void 0}=e;const l=new I,u=cs(),{invalidate:c}=_i(),p=px();Gt(i,p,y=>t(8,r=y));const g=async()=>{r||await Da(),u("transform")},_=async()=>{c("TransformableObject: transformed"),await g()};mn(s).onTransform=_;const{start:m,stop:d}=If(async()=>{h&&!f&&h instanceof Tt&&(h.getWorldPosition(l),s.lookAt(l),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=Na(s);return Gt(i,x,y=>t(7,n=y)),i.$$set=y=>{"object"in y&&t(2,s=y.object),"position"in y&&t(3,o=y.position),"scale"in y&&t(4,a=y.scale),"rotation"in y&&t(5,f=y.rotation),"lookAt"in y&&t(6,h=y.lookAt)},i.$$.update=()=>{i.$$.dirty&4&&x.set(s),i.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),_()),h&&!f&&(h instanceof Tt?m():(d(),n.lookAt(h.x??0,h.y??0,h.z??0),_())),h||d()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),_()),i.$$.dirty&160&&f&&(n.rotation.set(f.x??0,f.y??0,f.z??0,f.order??"XYZ"),_())},[p,x,s,o,a,f,h,n]}class gx extends on{constructor(e){super(),an(this,e,mx,null,un,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Yl=[],_x=(i,e)=>{const t=Yl.find(r=>r instanceof i);if(t)return t;const n=e();return Yl.push(n),n},Zl={type:"change"},Zo={type:"start"},Kl={type:"end"};let vx=class extends $i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ct),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ct),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zl),n.update(),s=r.NONE},this.update=function(){const C=new I,k=new Xt().setFromUnitVectors(e.up,new I(0,1,0)),L=k.clone().invert(),q=new I,oe=new Xt,de=2*Math.PI;return function(){const Me=n.object.position;C.copy(Me).sub(n.target),C.applyQuaternion(k),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&w(F()),n.enableDamping?(a.theta+=f.theta*n.dampingFactor,a.phi+=f.phi*n.dampingFactor):(a.theta+=f.theta,a.phi+=f.phi);let Ee=n.minAzimuthAngle,Se=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Se)&&(Ee<-Math.PI?Ee+=de:Ee>Math.PI&&(Ee-=de),Se<-Math.PI?Se+=de:Se>Math.PI&&(Se-=de),Ee<=Se?a.theta=Math.max(Ee,Math.min(Se,a.theta)):a.theta=a.theta>(Ee+Se)/2?Math.max(Ee,a.theta):Math.min(Se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),C.setFromSpherical(a),C.applyQuaternion(L),Me.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),l.set(0,0,0)),h=1,u||q.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(Zl),q.copy(n.object.position),oe.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",v),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",gt),n.domElement.removeEventListener("wheel",$e),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",gt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ct),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new pl,f=new pl;let h=1;const l=new I;let u=!1;const c=new Je,p=new Je,g=new Je,_=new Je,m=new Je,d=new Je,x=new Je,y=new Je,b=new Je,M=[],S={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function w(C){f.theta-=C}function D(C){f.phi-=C}const z=function(){const C=new I;return function(L,q){C.setFromMatrixColumn(q,0),C.multiplyScalar(-L),l.add(C)}}(),j=function(){const C=new I;return function(L,q){n.screenSpacePanning===!0?C.setFromMatrixColumn(q,1):(C.setFromMatrixColumn(q,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(L),l.add(C)}}(),N=function(){const C=new I;return function(L,q){const oe=n.domElement;if(n.object.isPerspectiveCamera){const de=n.object.position;C.copy(de).sub(n.target);let Q=C.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),z(2*L*Q/oe.clientHeight,n.object.matrix),j(2*q*Q/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(L*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),j(q*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(C){n.object.isPerspectiveCamera?h/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(C){n.object.isPerspectiveCamera?h*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C){c.set(C.clientX,C.clientY)}function B(C){x.set(C.clientX,C.clientY)}function J(C){_.set(C.clientX,C.clientY)}function ie(C){p.set(C.clientX,C.clientY),g.subVectors(p,c).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),c.copy(p),n.update()}function ce(C){y.set(C.clientX,C.clientY),b.subVectors(y,x),b.y>0?H(A()):b.y<0&&G(A()),x.copy(y),n.update()}function ne(C){m.set(C.clientX,C.clientY),d.subVectors(m,_).multiplyScalar(n.panSpeed),N(d.x,d.y),_.copy(m),n.update()}function ye(C){C.deltaY<0?G(A()):C.deltaY>0&&H(A()),n.update()}function $(C){let k=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),k=!0;break}k&&(C.preventDefault(),n.update())}function ue(){if(M.length===1)c.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);c.set(C,k)}}function xe(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);_.set(C,k)}}function ee(){const C=M[0].pageX-M[1].pageX,k=M[0].pageY-M[1].pageY,L=Math.sqrt(C*C+k*k);x.set(0,L)}function V(){n.enableZoom&&ee(),n.enablePan&&xe()}function ke(){n.enableZoom&&ee(),n.enableRotate&&ue()}function Ne(C){if(M.length==1)p.set(C.pageX,C.pageY);else{const L=W(C),q=.5*(C.pageX+L.x),oe=.5*(C.pageY+L.y);p.set(q,oe)}g.subVectors(p,c).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),c.copy(p)}function me(C){if(M.length===1)m.set(C.pageX,C.pageY);else{const k=W(C),L=.5*(C.pageX+k.x),q=.5*(C.pageY+k.y);m.set(L,q)}d.subVectors(m,_).multiplyScalar(n.panSpeed),N(d.x,d.y),_.copy(m)}function Fe(C){const k=W(C),L=C.pageX-k.x,q=C.pageY-k.y,oe=Math.sqrt(L*L+q*q);y.set(0,oe),b.set(0,Math.pow(y.y/x.y,n.zoomSpeed)),H(b.y),x.copy(y)}function st(C){n.enableZoom&&Fe(C),n.enablePan&&me(C)}function Ie(C){n.enableZoom&&Fe(C),n.enableRotate&&Ne(C)}function Ye(C){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ft),n.domElement.addEventListener("pointerup",gt)),E(C),C.pointerType==="touch"?_t(C):Mt(C))}function ft(C){n.enabled!==!1&&(C.pointerType==="touch"?P(C):pt(C))}function gt(C){R(C),M.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",gt)),n.dispatchEvent(Kl),s=r.NONE}function Mt(C){let k;switch(C.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case sr.DOLLY:if(n.enableZoom===!1)return;B(C),s=r.DOLLY;break;case sr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;J(C),s=r.PAN}else{if(n.enableRotate===!1)return;K(C),s=r.ROTATE}break;case sr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(n.enablePan===!1)return;J(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Zo)}function pt(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ie(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ce(C);break;case r.PAN:if(n.enablePan===!1)return;ne(C);break}}function $e(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Zo),ye(C),n.dispatchEvent(Kl))}function ct(C){n.enabled===!1||n.enablePan===!1||$(C)}function _t(C){switch(O(C),M.length){case 1:switch(n.touches.ONE){case or.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case or.PAN:if(n.enablePan===!1)return;xe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),s=r.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Zo)}function P(C){switch(O(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ne(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;me(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;st(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(C),n.update();break;default:s=r.NONE}}function v(C){n.enabled!==!1&&C.preventDefault()}function E(C){M.push(C)}function R(C){delete S[C.pointerId];for(let k=0;k<M.length;k++)if(M[k].pointerId==C.pointerId){M.splice(k,1);return}}function O(C){let k=S[C.pointerId];k===void 0&&(k=new Je,S[C.pointerId]=k),k.set(C.pageX,C.pageY)}function W(C){const k=C.pointerId===M[0].pointerId?M[1]:M[0];return S[k.pointerId]}n.domElement.addEventListener("contextmenu",v),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",gt),n.domElement.addEventListener("wheel",$e,{passive:!1}),this.update()}};function xx(i){let e,t,n,r;return e=new Ua({props:{dispose:i[2],object:i[0]}}),n=new gx({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment)},l(s){je(e.$$.fragment,s),t=Pe(s),je(n.$$.fragment,s)},m(s,o){qe(e,s,o),rt(s,t,o),qe(n,s,o),r=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const f={};o[0]&2&&(f.position=s[1]),n.$set(f)},i(s){r||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),r=!0)},o(s){be(e.$$.fragment,s),be(n.$$.fragment,s),r=!1},d(s){Xe(e,s),s&&he(t),Xe(n,s)}}}function yx(i,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:f=void 0}=e,{enablePan:h=void 0}=e,{enableRotate:l=void 0}=e,{enableZoom:u=void 0}=e,{keyPanSpeed:c=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:_=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:d=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:y=void 0}=e,{minPolarAngle:b=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:F=void 0}=e,{rotateSpeed:A=void 0}=e,{screenSpacePanning:w=void 0}=e,{touches:D=void 0}=e,{zoomSpeed:z=void 0}=e,{target:j=void 0}=e,{dispose:N=void 0}=e;const H=Ba();Gt(i,H,ee=>t(30,n=ee));const{renderer:G,invalidate:K}=_i();if(!G)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ca))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const B=cs(),J=()=>{K("Orbitcontrols: change event"),B("change")},ie=()=>B("start"),ce=()=>B("end"),ne=new vx(n,G.domElement);mn(n).orbitControls=ne,ne.addEventListener("change",J),ne.addEventListener("start",ie),ne.addEventListener("end",ce),At(()=>{n&&delete mn(n).orbitControls,ne.removeEventListener("change",J),ne.removeEventListener("start",ie),ne.removeEventListener("end",ce)});const{start:ye,stop:$}=If(()=>ne.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ue=new Tt,xe=()=>{t(0,ne.target=ue.position,ne),ne.update(),K("OrbitControls: target changed")};return i.$$set=ee=>{"autoRotate"in ee&&t(6,r=ee.autoRotate),"autoRotateSpeed"in ee&&t(7,s=ee.autoRotateSpeed),"dampingFactor"in ee&&t(8,o=ee.dampingFactor),"enableDamping"in ee&&t(9,a=ee.enableDamping),"enabled"in ee&&t(10,f=ee.enabled),"enablePan"in ee&&t(11,h=ee.enablePan),"enableRotate"in ee&&t(12,l=ee.enableRotate),"enableZoom"in ee&&t(13,u=ee.enableZoom),"keyPanSpeed"in ee&&t(14,c=ee.keyPanSpeed),"keys"in ee&&t(15,p=ee.keys),"maxAzimuthAngle"in ee&&t(16,g=ee.maxAzimuthAngle),"maxDistance"in ee&&t(17,_=ee.maxDistance),"maxPolarAngle"in ee&&t(18,m=ee.maxPolarAngle),"maxZoom"in ee&&t(19,d=ee.maxZoom),"minAzimuthAngle"in ee&&t(20,x=ee.minAzimuthAngle),"minDistance"in ee&&t(21,y=ee.minDistance),"minPolarAngle"in ee&&t(22,b=ee.minPolarAngle),"minZoom"in ee&&t(23,M=ee.minZoom),"mouseButtons"in ee&&t(24,S=ee.mouseButtons),"panSpeed"in ee&&t(25,F=ee.panSpeed),"rotateSpeed"in ee&&t(26,A=ee.rotateSpeed),"screenSpacePanning"in ee&&t(27,w=ee.screenSpacePanning),"touches"in ee&&t(28,D=ee.touches),"zoomSpeed"in ee&&t(29,z=ee.zoomSpeed),"target"in ee&&t(1,j=ee.target),"dispose"in ee&&t(2,N=ee.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(r!==void 0&&t(0,ne.autoRotate=r,ne),s!==void 0&&t(0,ne.autoRotateSpeed=s,ne),o!==void 0&&t(0,ne.dampingFactor=o,ne),a!==void 0&&t(0,ne.enableDamping=a,ne),f!==void 0&&t(0,ne.enabled=f,ne),h!==void 0&&t(0,ne.enablePan=h,ne),l!==void 0&&t(0,ne.enableRotate=l,ne),u!==void 0&&t(0,ne.enableZoom=u,ne),c!==void 0&&t(0,ne.keyPanSpeed=c,ne),p!==void 0&&t(0,ne.keys=p,ne),g!==void 0&&t(0,ne.maxAzimuthAngle=g,ne),_!==void 0&&t(0,ne.maxDistance=_,ne),m!==void 0&&t(0,ne.maxPolarAngle=m,ne),d!==void 0&&t(0,ne.maxZoom=d,ne),x!==void 0&&t(0,ne.minAzimuthAngle=x,ne),y!==void 0&&t(0,ne.minDistance=y,ne),b!==void 0&&t(0,ne.minPolarAngle=b,ne),M!==void 0&&t(0,ne.minZoom=M,ne),S!==void 0&&t(0,ne.mouseButtons=S,ne),F!==void 0&&t(0,ne.panSpeed=F,ne),A!==void 0&&t(0,ne.rotateSpeed=A,ne),w!==void 0&&t(0,ne.screenSpacePanning=w,ne),D!==void 0&&t(0,ne.touches=D,ne),z!==void 0&&t(0,ne.zoomSpeed=z,ne),ne.update(),K("OrbitControls: props changed")),i.$$.dirty[0]&576&&(r||a?ye():$())},[ne,j,N,H,ue,xe,r,s,o,a,f,h,l,u,c,p,g,_,m,d,x,y,b,M,S,F,A,w,D,z]}class Mx extends on{constructor(e){super(),an(this,e,yx,xx,un,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Gi=new $c,pn=new I,Ei=new I,Ct=new Xt,Ql={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Ko={type:"change"},Jl={type:"mouseDown"},$l={type:"mouseUp",mode:null},ec={type:"objectChange"};class wx extends Tt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Cx;this._gizmo=n,this.add(n);const r=new Tx;this._plane=r,this.add(r);const s=this;function o(x,y){let b=y;Object.defineProperty(s,x,{get:function(){return b!==void 0?b:y},set:function(M){b!==M&&(b=M,r[x]=M,n[x]=M,s.dispatchEvent({type:x+"-changed",value:M}),s.dispatchEvent(Ko))}}),s[x]=y,r[x]=y,n[x]=y}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,f=new I,h=new Xt,l=new Xt,u=new I,c=new Xt,p=new I,g=new I,_=new I,m=0,d=new I;o("worldPosition",a),o("worldPositionStart",f),o("worldQuaternion",h),o("worldQuaternionStart",l),o("cameraPosition",u),o("cameraQuaternion",c),o("pointStart",p),o("pointEnd",g),o("rotationAxis",_),o("rotationAngle",m),o("eye",d),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Xt,this._parentQuaternionInv=new Xt,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Xt,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Xt,this._scaleStart=new I,this._getPointer=bx.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerHover=Dx.bind(this),this._onPointerMove=Ex.bind(this),this._onPointerUp=Ax.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Gi.setFromCamera(e,this.camera);const t=Qo(this._gizmo.picker[this.mode],Gi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Gi.setFromCamera(e,this.camera);const t=Qo(this._plane,Gi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Jl.mode=this.mode,this.dispatchEvent(Jl)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;Gi.setFromCamera(e,this.camera);const o=Qo(this._plane,Gi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(Ct.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(pn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(pn.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ei.set(a,a,a)}else pn.copy(this.pointStart),Ei.copy(this.pointEnd),pn.applyQuaternion(this._worldQuaternionInv),Ei.applyQuaternion(this._worldQuaternionInv),Ei.divide(pn),t.search("X")===-1&&(Ei.x=1),t.search("Y")===-1&&(Ei.y=1),t.search("Z")===-1&&(Ei.z=1);r.scale.copy(this._scaleStart).multiply(Ei),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(pn.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(pn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Ql[t]),pn.copy(Ql[t]),s==="local"&&pn.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(pn.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Ct.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ko),this.dispatchEvent(ec)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&($l.mode=this.mode,this.dispatchEvent($l)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ko),this.dispatchEvent(ec),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Gi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function bx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Dx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Sx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Ex(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Ax(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Qo(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const zs=new ds,wt=new I(0,1,0),tc=new I(0,0,0),nc=new Ft,ks=new Xt,Ws=new Xt,Jn=new I,ic=new Ft,es=new I(1,0,0),ji=new I(0,1,0),ts=new I(0,0,1),Hs=new I,Kr=new I,Qr=new I;class Cx extends Tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new to({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ps({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const f=e.clone();f.color.setHex(16711680),f.opacity=.5;const h=e.clone();h.color.setHex(65280),h.opacity=.5;const l=e.clone();l.color.setHex(255),l.opacity=.5;const u=e.clone();u.opacity=.25;const c=e.clone();c.color.setHex(16776960),c.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const _=new nn(0,.04,.1,12);_.translate(0,.05,0);const m=new Nt(.08,.08,.08);m.translate(0,.04,0);const d=new Kt;d.setAttribute("position",new Dt([0,0,0,1,0,0],3));const x=new nn(.0075,.0075,.5,3);x.translate(0,.25,0);function y(G,K){const B=new Xi(G,.0075,3,64,K*Math.PI*2);return B.rotateY(Math.PI/2),B.rotateX(Math.PI/2),B}function b(){const G=new Kt;return G.setAttribute("position",new Dt([0,0,0,1,1,1],3)),G}const M={X:[[new De(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new De(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new De(x,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new De(_,o),[0,.5,0]],[new De(_,o),[0,-.5,0],[Math.PI,0,0]],[new De(x,o)]],Z:[[new De(_,a),[0,0,.5],[Math.PI/2,0,0]],[new De(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new De(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new De(new Er(.1,0),u.clone()),[0,0,0]]],XY:[[new De(new Nt(.15,.15,.01),l.clone()),[.15,.15,0]]],YZ:[[new De(new Nt(.15,.15,.01),f.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Nt(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new De(new nn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new De(new nn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new De(new nn(.2,0,.6,4),n),[0,.3,0]],[new De(new nn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new De(new nn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new De(new nn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new De(new Er(.2,0),n)]],XY:[[new De(new Nt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new De(new Nt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Nt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},F={START:[[new De(new Er(.01,2),r),null,null,null,"helper"]],END:[[new De(new Er(.01,2),r),null,null,null,"helper"]],DELTA:[[new rn(b(),r),null,null,null,"helper"]],X:[[new rn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(d,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(d,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},A={XYZE:[[new De(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new De(y(.5,.5),s)]],Y:[[new De(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new De(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new De(y(.75,1),c),null,[0,Math.PI/2,0]]]},w={AXIS:[[new rn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new De(new er(.25,10,8),n)]],X:[[new De(new Xi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new De(new Xi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new De(new Xi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new De(new Xi(.75,.1,2,24),n)]]},z={X:[[new De(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new De(x,s),[0,0,0],[0,0,-Math.PI/2]],[new De(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new De(m,o),[0,.5,0]],[new De(x,o)],[new De(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new De(m,a),[0,0,.5],[Math.PI/2,0,0]],[new De(x,a),[0,0,0],[Math.PI/2,0,0]],[new De(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new De(new Nt(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new De(new Nt(.15,.15,.01),f),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Nt(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new De(new Nt(.1,.1,.1),u.clone())]]},j={X:[[new De(new nn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new De(new nn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new De(new nn(.2,0,.6,4),n),[0,.3,0]],[new De(new nn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new De(new nn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new De(new nn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new De(new Nt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new De(new Nt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new De(new Nt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new De(new Nt(.2,.2,.2),n),[0,0,0]]]},N={X:[[new rn(d,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(d,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(d,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function H(G){const K=new Tt;for(const B in G)for(let J=G[B].length;J--;){const ie=G[B][J][0].clone(),ce=G[B][J][1],ne=G[B][J][2],ye=G[B][J][3],$=G[B][J][4];ie.name=B,ie.tag=$,ce&&ie.position.set(ce[0],ce[1],ce[2]),ne&&ie.rotation.set(ne[0],ne[1],ne[2]),ye&&ie.scale.set(ye[0],ye[1],ye[2]),ie.updateMatrix();const ue=ie.geometry.clone();ue.applyMatrix4(ie.matrix),ie.geometry=ue,ie.renderOrder=1/0,ie.position.set(0,0,0),ie.rotation.set(0,0,0),ie.scale.set(1,1,1),K.add(ie)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=H(M)),this.add(this.gizmo.rotate=H(A)),this.add(this.gizmo.scale=H(z)),this.add(this.picker.translate=H(S)),this.add(this.picker.rotate=H(D)),this.add(this.picker.scale=H(j)),this.add(this.helper.translate=H(F)),this.add(this.helper.rotate=H(w)),this.add(this.helper.scale=H(N)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ws;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ct.setFromEuler(zs.set(0,0,0)),o.quaternion.copy(n).multiply(Ct),Math.abs(wt.copy(es).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ct.setFromEuler(zs.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Ct),Math.abs(wt.copy(ji).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ct.setFromEuler(zs.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Ct),Math.abs(wt.copy(ts).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ct.setFromEuler(zs.set(0,Math.PI/2,0)),wt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(nc.lookAt(tc,wt,ji)),o.quaternion.multiply(Ct),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),pn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),pn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(pn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(wt.copy(es).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(wt.copy(ji).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(wt.copy(ts).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(wt.copy(ts).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(wt.copy(es).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(wt.copy(ji).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ks.copy(n),wt.copy(this.eye).applyQuaternion(Ct.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(nc.lookAt(this.eye,tc,ji)),o.name==="X"&&(Ct.setFromAxisAngle(es,Math.atan2(-wt.y,wt.z)),Ct.multiplyQuaternions(ks,Ct),o.quaternion.copy(Ct)),o.name==="Y"&&(Ct.setFromAxisAngle(ji,Math.atan2(wt.x,wt.z)),Ct.multiplyQuaternions(ks,Ct),o.quaternion.copy(Ct)),o.name==="Z"&&(Ct.setFromAxisAngle(ts,Math.atan2(wt.y,wt.x)),Ct.multiplyQuaternions(ks,Ct),o.quaternion.copy(Ct))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(f){return o.name===f}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class Tx extends De{constructor(){super(new no(1e5,1e5,2,2),new to({visible:!1,wireframe:!0,side:kn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Hs.copy(es).applyQuaternion(t==="local"?this.worldQuaternion:Ws),Kr.copy(ji).applyQuaternion(t==="local"?this.worldQuaternion:Ws),Qr.copy(ts).applyQuaternion(t==="local"?this.worldQuaternion:Ws),wt.copy(Kr),this.mode){case"translate":case"scale":switch(this.axis){case"X":wt.copy(this.eye).cross(Hs),Jn.copy(Hs).cross(wt);break;case"Y":wt.copy(this.eye).cross(Kr),Jn.copy(Kr).cross(wt);break;case"Z":wt.copy(this.eye).cross(Qr),Jn.copy(Qr).cross(wt);break;case"XY":Jn.copy(Qr);break;case"YZ":Jn.copy(Hs);break;case"XZ":wt.copy(Qr),Jn.copy(Kr);break;case"XYZ":case"E":Jn.set(0,0,0);break}break;case"rotate":default:Jn.set(0,0,0)}Jn.length()===0?this.quaternion.copy(this.cameraQuaternion):(ic.lookAt(pn.set(0,0,0),Jn,wt),this.quaternion.setFromRotationMatrix(ic)),super.updateMatrixWorld(e)}}function Px(i){let e,t,n,r;return e=new Ua({props:{dispose:i[0],object:i[1]}}),n=new dx({props:{object:i[1]}}),{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment)},l(s){je(e.$$.fragment,s),t=Pe(s),je(n.$$.fragment,s)},m(s,o){qe(e,s,o),rt(s,t,o),qe(n,s,o),r=!0},p(s,[o]){const a={};o&1&&(a.dispose=s[0]),o&2&&(a.object=s[1]),e.$set(a);const f={};o&2&&(f.object=s[1]),n.$set(f)},i(s){r||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),r=!0)},o(s){be(e.$$.fragment,s),be(n.$$.fragment,s),r=!1},d(s){Xe(e,s),s&&he(t),Xe(n,s)}}}function Fx(i,e,t){let n,r,{autoPauseOrbitControls:s=!0}=e,{mode:o=void 0}=e,{axis:a=null}=e,{dragging:f=!1}=e,{enabled:h=void 0}=e,{translationSnap:l=void 0}=e,{scaleSnap:u=void 0}=e,{rotationSnap:c=void 0}=e,{showX:p=void 0}=e,{showY:g=void 0}=e,{showZ:_=void 0}=e,{size:m=void 0}=e,{space:d=void 0}=e,{dispose:x=void 0}=e;const{camera:y,renderer:b,invalidate:M,scene:S}=_i();Gt(i,y,B=>t(20,r=B));const F=Ba();if(Gt(i,F,B=>t(19,n=B)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const A=cs(),w=()=>{if(r)return mn(r).orbitControls};let D;const z=()=>{if(D!==void 0){const B=w();B&&(B.enabled=D),D=void 0}};At(z);const j={change:B=>{var J,ie;n&&((ie=(J=mn(n)).onTransform)==null||ie.call(J)),M("TransformControls: change event"),A("change",B)},"camera-changed":B=>A("camera-changed",B),"object-changed":B=>A("object-changed",B),"enabled-changed":B=>A("enabled-changed",B),"axis-changed":B=>{t(4,a=B.value),A("axis-changed",B)},"mode-changed":B=>A("mode-changed",B),"translationSnap-changed":B=>A("translationSnap-changed",B),"rotationSnap-changed":B=>A("rotationSnap-changed",B),"scaleSnap-changed":B=>A("scaleSnap-changed",B),"space-changed":B=>A("space-changed",B),"size-changed":B=>A("size-changed",B),"dragging-changed":B=>{t(5,f=B.value);e:if(s){const J=w();if(!J)break e;const ie=!B.value;if(J.enabled===ie)break e;B.value&&(D=J.enabled),J.enabled=ie}A("dragging-changed",B)},"showX-changed":B=>A("showX-changed",B),"showY-changed":B=>A("showY-changed",B),"showZ-changed":B=>A("showZ-changed",B),"worldPosition-changed":B=>A("worldPosition-changed",B),"worldPositionStart-changed":B=>A("worldPositionStart-changed",B),"worldQuaternion-changed":B=>A("worldQuaternion-changed",B),"worldQuaternionStart-changed":B=>A("worldQuaternionStart-changed",B),"cameraPosition-changed":B=>A("cameraPosition-changed",B),"cameraQuaternion-changed":B=>A("cameraQuaternion-changed",B),"pointStart-changed":B=>A("pointStart-changed",B),"pointEnd-changed":B=>A("pointEnd-changed",B),"rotationAxis-changed":B=>A("rotationAxis-changed",B),"rotationAngle-changed":B=>A("rotationAngle-changed",B),"eye-changed":B=>A("eye-changed",B),mouseDown:()=>A("mouseDown"),mouseUp:()=>A("mouseUp"),objectChange:()=>A("objectChange")};if(!b)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const N=new wx(r,b.domElement),H=()=>N.reset();N.attach(n);const G=()=>{Object.entries(j).forEach(([B,J])=>{N.addEventListener(B,J)})},K=()=>{Object.entries(j).forEach(([B,J])=>{N.removeEventListener(B,J)})};return G(),S.add(N),At(()=>{N.detach(),S.remove(N),K()}),i.$$set=B=>{"autoPauseOrbitControls"in B&&t(6,s=B.autoPauseOrbitControls),"mode"in B&&t(7,o=B.mode),"axis"in B&&t(4,a=B.axis),"dragging"in B&&t(5,f=B.dragging),"enabled"in B&&t(8,h=B.enabled),"translationSnap"in B&&t(9,l=B.translationSnap),"scaleSnap"in B&&t(10,u=B.scaleSnap),"rotationSnap"in B&&t(11,c=B.rotationSnap),"showX"in B&&t(12,p=B.showX),"showY"in B&&t(13,g=B.showY),"showZ"in B&&t(14,_=B.showZ),"size"in B&&t(15,m=B.size),"space"in B&&t(16,d=B.space),"dispose"in B&&t(0,x=B.dispose)},i.$$.update=()=>{i.$$.dirty&64&&(s||z()),i.$$.dirty&256&&h!==void 0&&t(1,N.enabled=h,N),i.$$.dirty&4096&&p!==void 0&&t(1,N.showX=p,N),i.$$.dirty&8192&&g!==void 0&&t(1,N.showY=g,N),i.$$.dirty&16384&&_!==void 0&&t(1,N.showZ=_,N),i.$$.dirty&130&&o!==void 0&&N.setMode(o),i.$$.dirty&514&&l!==void 0&&N.setTranslationSnap(l),i.$$.dirty&1026&&u!==void 0&&N.setScaleSnap(u),i.$$.dirty&2050&&c!==void 0&&N.setRotationSnap(c),i.$$.dirty&32770&&m!==void 0&&N.setSize(m),i.$$.dirty&65538&&d!==void 0&&N.setSpace(d)},[x,N,y,F,a,f,s,o,h,l,u,c,p,g,_,m,d,H]}class Nf extends on{constructor(e){super(),an(this,e,Fx,Px,un,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}function Lx(i,e,t){let{object:n}=e,r=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=cs(),{addInteractiveObject:f,removeInteractiveObject:h,addRaycastableObject:l,removeRaycastableObject:u}=Rf(),{invalidate:c}=_i(),p=_=>{u(_),h(_),delete mn(_).eventDispatcher},g=(_,m,d)=>{mn(_).eventDispatcher=a,m?(u(_),h(_)):(l(_),d?f(_):h(_))};return At(()=>{p(n),c("InteractiveObject: object removed")}),i.$$set=_=>{"object"in _&&t(0,n=_.object),"interactive"in _&&t(1,s=_.interactive),"ignorePointer"in _&&t(2,o=_.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==r?(p(r),g(n,o,s),c("InteractiveObject: object changed"),t(3,r=n)):n===r&&(g(n,o,s),c("InteractiveObject: props changed")))},[n,s,o,r]}class Bf extends on{constructor(e){super(),an(this,e,Lx,null,un,{object:0,interactive:1,ignorePointer:2})}}const Uf=new Tt;Uf.scale.set(0,0,0);Uf.matrix;new Ft().fromArray(new Array(16).fill(0));new dt(16777215);const Of=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let r=0;r<t.length;r+=1)i=i[t[r]];return{target:i,key:n}}else return{target:i,key:e}},Jo=Symbol("initialValueBeforeAttach"),Rx=()=>{const{invalidate:i}=_i();let e=!1,t=Jo,n,r,s;const o=(f,h,l)=>{if(a(),!l){const u=f;((u==null?void 0:u.isMaterial)||!1)&&(l="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(l="geometry")}if(l){if(typeof l=="function")n=l(h,f);else{const{target:u,key:c}=Of(h,l);t=u[c],u[c]=f,r=u,s=c}e=!0,i()}},a=()=>{e&&(n?(n(),n=void 0):r&&s&&t!==Jo&&(r[s]=t,t=Jo,r=void 0,s=void 0),e=!1,i())};return At(()=>{a()}),{update:o}},Ix=i=>i&&i.isCamera,zf=i=>i&&i.isOrthographicCamera,kf=i=>i&&i.isPerspectiveCamera,Nx=i=>kf(i)||zf(i),Bx=()=>{const{invalidate:i,size:e}=_i(),{setCamera:t}=Rf();let n,r;At(()=>{r==null||r()});const s=f=>{n&&(zf(n)?(n.left=f.width/-2,n.right=f.width/2,n.top=f.height/2,n.bottom=f.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):kf(n)&&(n.aspect=f.width/f.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(f,h)=>{if(r==null||r(),h||!Nx(f)){n=void 0;return}n=f,r=e.subscribe(s)},makeDefaultCamera:(f,h)=>{!Ix(f)||!h||(t(f),i())}}},rc=i=>!!(i!=null&&i.addEventListener),Ux=()=>{const i=cs(),e=Wf(),t=c=>{c!=null&&c.type&&i(c.type,c)},n=(c,p)=>{rc(c)&&p.forEach(g=>{c.removeEventListener(g,t)})},r=(c,p)=>{rc(c)&&p.forEach(g=>{c.addEventListener(g,t)})};let s=[],o;const a=Yt([]),f=a.subscribe(c=>{n(o,s),r(o,c),s=c});At(f);const h=Yt(),l=h.subscribe(c=>{n(o,s),r(c,s),o=c});return At(l),At(()=>{n(o,s)}),Mc(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{h.set(c)}}},Ox=["$$scope","$$slots","type","args","attach","instance"],zx=["fov","aspect","near","far","left","right","top","bottom","zoom"],kx=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,Hx=()=>{const{invalidate:i}=_i(),e=new Map,t=(r,s,o,a)=>{var l,u;if(kx(o)){const c=e.get(s);if(c&&c.instance===r&&c.value===o)return;e.set(s,{instance:r,value:o})}const{key:f,target:h}=Of(r,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((l=h[f])==null?void 0:l.setScalar)=="function")h[f].setScalar(o);else if(typeof((u=h[f])==null?void 0:u.set)=="function")Array.isArray(o)?h[f].set(...o):h[f].set(o);else{if(h[f]=o,a.manualCamera)return;zx.includes(f)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()}};return{updateProps:(r,s,o)=>{for(const a in s)Ox.includes(a)||t(r,a,s[a],o),i()}}},Gx=i=>({ref:i&1}),sc=i=>({ref:i[0]}),Vx=i=>({ref:i&1}),oc=i=>({ref:i[0]});function ac(i){let e,t;return e=new Ua({props:{object:i[0],dispose:i[1]}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function Wx(i){let e;const t=i[12].default,n=zr(t,i,i[13],sc);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&kr(n,t,r,r[13],e?Gr(t,r[13],s,Gx):Hr(r[13]),sc)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}function jx(i){let e,t;return e=new Lf({props:{object:i[0],$$slots:{default:[qx]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.object=n[0]),r&8193&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function qx(i){let e;const t=i[12].default,n=zr(t,i,i[13],oc);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8193)&&kr(n,t,r,r[13],e?Gr(t,r[13],s,Vx):Hr(r[13]),oc)},i(r){e||(ve(n,r),e=!0)},o(r){be(n,r),e=!1},d(r){n&&n.d(r)}}}function Xx(i){let e=i[4](i[0]),t,n,r,s,o,a,f=e&&ac(i);const h=[jx,Wx],l=[];function u(c,p){return p&1&&(n=null),n==null&&(n=!!c[3](c[0])),n?0:1}return r=u(i,-1),s=l[r]=h[r](i),{c(){f&&f.c(),t=Te(),s.c(),o=Ln()},l(c){f&&f.l(c),t=Pe(c),s.l(c),o=Ln()},m(c,p){f&&f.m(c,p),rt(c,t,p),l[r].m(c,p),rt(c,o,p),a=!0},p(c,[p]){p&1&&(e=c[4](c[0])),e?f?(f.p(c,p),p&1&&ve(f,1)):(f=ac(c),f.c(),ve(f,1),f.m(t.parentNode,t)):f&&(qn(),be(f,1,1,()=>{f=null}),Xn());let g=r;r=u(c,p),r===g?l[r].p(c,p):(qn(),be(l[g],1,1,()=>{l[g]=null}),Xn(),s=l[r],s?s.p(c,p):(s=l[r]=h[r](c),s.c()),ve(s,1),s.m(o.parentNode,o))},i(c){a||(ve(f),ve(s),a=!0)},o(c){be(f),be(s),a=!1},d(c){f&&f.d(c),c&&he(t),l[r].d(c),c&&he(o)}}}function Yx(i,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let r=za(e,n),s,{$$slots:o={},$$scope:a}=e,{type:f}=e,{args:h=void 0}=e,{attach:l=void 0}=e,{manual:u=void 0}=e,{makeDefault:c=void 0}=e,{dispose:p=void 0}=e;const g=si("threlte-hierarchical-parent-context");Gt(i,g,D=>t(11,s=D));const _=D=>typeof D=="function"&&/^\s*class\s+/.test(D.toString()),m=D=>Array.isArray(D);let{ref:d=_(f)&&m(h)?new f(...h):_(f)?new f:f}=e,x=!1;const y=Yt(d);zn("threlte-hierarchical-parent-context",y);const b=Hx(),M=Bx(),S=Rx(),F=Ux(),A=D=>!!D.isObject3D,w=D=>D.dispose!==void 0;return i.$$set=D=>{e=ka(ka({},e),jf(D)),t(21,r=za(e,n)),"type"in D&&t(5,f=D.type),"args"in D&&t(6,h=D.args),"attach"in D&&t(7,l=D.attach),"manual"in D&&t(8,u=D.manual),"makeDefault"in D&&t(9,c=D.makeDefault),"dispose"in D&&t(1,p=D.dispose),"ref"in D&&t(0,d=D.ref),"$$scope"in D&&t(13,a=D.$$scope)},i.$$.update=()=>{i.$$.dirty&1120&&(x?t(0,d=_(f)&&m(h)?new f(...h):_(f)?new f:f):t(10,x=!0)),i.$$.dirty&1&&y.set(d),b.updateProps(d,r,{manualCamera:u}),i.$$.dirty&257&&M.update(d,u),i.$$.dirty&513&&M.makeDefaultCamera(d,c),i.$$.dirty&2177&&S.update(d,s,l),i.$$.dirty&1&&F.updateRef(d)},[d,p,g,A,w,f,h,l,u,c,x,s,o,a]}class mt extends on{constructor(e){super(),an(this,e,Yx,Xx,un,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function Zx(i){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class uc extends on{constructor(e){super(),an(this,e,Zx,null,un,{})}}new Proxy(uc,{get(i,e){return i[e]||uc}});_x(ul,()=>new ul(Zc));const Kx=Math.PI/180;function Qx(i){return i*Kx}function lc(i,e,t){const n=i.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function cc(i){let e,t;return e=new mt({props:{type:Wn,$$slots:{default:[$x]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&8200&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function Jx(i){let e,t,n,r;return e=new mt({props:{type:er,args:[.1]}}),n=new mt({props:{type:ms,color:"#0000FF"}}),{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment)},l(s){je(e.$$.fragment,s),t=Pe(s),je(n.$$.fragment,s)},m(s,o){qe(e,s,o),rt(s,t,o),qe(n,s,o),r=!0},p:mi,i(s){r||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),r=!0)},o(s){be(e.$$.fragment,s),be(n.$$.fragment,s),r=!1},d(s){Xe(e,s),s&&he(t),Xe(n,s)}}}function $x(i){let e,t;return e=new mt({props:{type:De,"position.x":i[3].x,"position.y":i[3].y,"position.z":i[3].z,$$slots:{default:[Jx]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&8&&(s["position.x"]=n[3].x),r&8&&(s["position.y"]=n[3].y),r&8&&(s["position.z"]=n[3].z),r&8192&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function fc(i){let e,t;function n(){return i[5](i[9],i[10],i[11])}function r(){return i[6](i[9],i[10],i[11])}return e=new Bf({props:{object:i[12],interactive:!0}}),e.$on("pointerenter",n),e.$on("pointerleave",r),{c(){We(e.$$.fragment)},l(s){je(e.$$.fragment,s)},m(s,o){qe(e,s,o),t=!0},p(s,o){i=s;const a={};o&4096&&(a.object=i[12]),e.$set(a)},i(s){t||(ve(e.$$.fragment,s),t=!0)},o(s){be(e.$$.fragment,s),t=!1},d(s){Xe(e,s)}}}function ey(i){let e,t,n,r,s,o,a,f;e=new mt({props:{type:er,args:[.1]}}),n=new mt({props:{type:ms,color:"#FF0000"}});function h(){return i[4](i[9],i[12],i[10],i[11])}s=new Nf({props:{showX:i[9].enabled,showY:i[9].enabled,showZ:i[9].enabled,translationSnap:i[2].toggles.snapActive.value?1:0}}),s.$on("objectChange",h);let l=i[2].curveActive===0&&fc(i);return{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment),r=Te(),We(s.$$.fragment),o=Te(),l&&l.c(),a=Ln()},l(u){je(e.$$.fragment,u),t=Pe(u),je(n.$$.fragment,u),r=Pe(u),je(s.$$.fragment,u),o=Pe(u),l&&l.l(u),a=Ln()},m(u,c){qe(e,u,c),rt(u,t,c),qe(n,u,c),rt(u,r,c),qe(s,u,c),rt(u,o,c),l&&l.m(u,c),rt(u,a,c),f=!0},p(u,c){i=u;const p={};c&1&&(p.showX=i[9].enabled),c&1&&(p.showY=i[9].enabled),c&1&&(p.showZ=i[9].enabled),c&4&&(p.translationSnap=i[2].toggles.snapActive.value?1:0),s.$set(p),i[2].curveActive===0?l?(l.p(i,c),c&4&&ve(l,1)):(l=fc(i),l.c(),ve(l,1),l.m(a.parentNode,a)):l&&(qn(),be(l,1,1,()=>{l=null}),Xn())},i(u){f||(ve(e.$$.fragment,u),ve(n.$$.fragment,u),ve(s.$$.fragment,u),ve(l),f=!0)},o(u){be(e.$$.fragment,u),be(n.$$.fragment,u),be(s.$$.fragment,u),be(l),f=!1},d(u){Xe(e,u),u&&he(t),Xe(n,u),u&&he(r),Xe(s,u),u&&he(o),l&&l.d(u),u&&he(a)}}}function ty(i){let e,t,n;return e=new mt({props:{type:De,"position.x":i[9].vector.x,"position.y":i[9].vector.y,"position.z":i[9].vector.z,$$slots:{default:[ey,({ref:r})=>({12:r}),({ref:r})=>r?4096:0]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment),t=Te()},l(r){je(e.$$.fragment,r),t=Pe(r)},m(r,s){qe(e,r,s),rt(r,t,s),n=!0},p(r,s){const o={};s&1&&(o["position.x"]=r[9].vector.x),s&1&&(o["position.y"]=r[9].vector.y),s&1&&(o["position.z"]=r[9].vector.z),s&12293&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){n||(ve(e.$$.fragment,r),n=!0)},o(r){be(e.$$.fragment,r),n=!1},d(r){Xe(e,r),r&&he(t)}}}function hc(i){let e,t;return e=new mt({props:{type:Wn,visible:i[2].toggles.pointsActive.value,$$slots:{default:[ty]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.visible=n[2].toggles.pointsActive.value),r&8197&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function ny(i){let e,t;return e=new mt({props:{type:ps,color:"#FF0000"}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p:mi,i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function iy(i){let e,t;return e=new mt({props:{type:Yc,color:"#000000",dashSize:.1,gapSize:.1,transparent:!0}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p:mi,i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function ry(i){let e,t,n,r,s,o,a,f,h=i[2].toggles.indicatorActive.value&&cc(i),l=i[0].points,u=[];for(let d=0;d<l.length;d+=1)u[d]=hc(lc(i,l,d));const c=d=>be(u[d],1,1,()=>{u[d]=null});function p(d){i[7](d)}let g={type:rn,$$slots:{default:[ny]},$$scope:{ctx:i}};i[1]!==void 0&&(g.ref=i[1]),n=new mt({props:g}),Vn.push(()=>ni(n,"ref",p));function _(d){i[8](d)}let m={type:rn,visible:i[2].toggles.controlPolygonActive.value,$$slots:{default:[iy]},$$scope:{ctx:i}};return i[0].controlPolygon!==void 0&&(m.ref=i[0].controlPolygon),o=new mt({props:m}),Vn.push(()=>ni(o,"ref",_)),{c(){h&&h.c(),e=Te();for(let d=0;d<u.length;d+=1)u[d].c();t=Te(),We(n.$$.fragment),s=Te(),We(o.$$.fragment)},l(d){h&&h.l(d),e=Pe(d);for(let x=0;x<u.length;x+=1)u[x].l(d);t=Pe(d),je(n.$$.fragment,d),s=Pe(d),je(o.$$.fragment,d)},m(d,x){h&&h.m(d,x),rt(d,e,x);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(d,x);rt(d,t,x),qe(n,d,x),rt(d,s,x),qe(o,d,x),f=!0},p(d,x){if(d[2].toggles.indicatorActive.value?h?(h.p(d,x),x&4&&ve(h,1)):(h=cc(d),h.c(),ve(h,1),h.m(e.parentNode,e)):h&&(qn(),be(h,1,1,()=>{h=null}),Xn()),x&4101){l=d[0].points;let M;for(M=0;M<l.length;M+=1){const S=lc(d,l,M);u[M]?(u[M].p(S,x),ve(u[M],1)):(u[M]=hc(S),u[M].c(),ve(u[M],1),u[M].m(t.parentNode,t))}for(qn(),M=l.length;M<u.length;M+=1)c(M);Xn()}const y={};x&8192&&(y.$$scope={dirty:x,ctx:d}),!r&&x&2&&(r=!0,y.ref=d[1],ii(()=>r=!1)),n.$set(y);const b={};x&4&&(b.visible=d[2].toggles.controlPolygonActive.value),x&8192&&(b.$$scope={dirty:x,ctx:d}),!a&&x&1&&(a=!0,b.ref=d[0].controlPolygon,ii(()=>a=!1)),o.$set(b)},i(d){if(!f){ve(h);for(let x=0;x<l.length;x+=1)ve(u[x]);ve(n.$$.fragment,d),ve(o.$$.fragment,d),f=!0}},o(d){be(h),u=u.filter(Boolean);for(let x=0;x<u.length;x+=1)be(u[x]);be(n.$$.fragment,d),be(o.$$.fragment,d),f=!1},d(d){h&&h.d(d),d&&he(e),ti(u,d),d&&he(t),Xe(n,d),d&&he(s),Xe(o,d)}}}function sy(i){let e,t;return e=new mt({props:{type:Wn,visible:i[2].curveActive===0,$$slots:{default:[ry]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.visible=n[2].curveActive===0),r&8207&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function oy(i,e,t){let n;Gt(i,Ai,c=>t(2,n=c));let{curve:r}=e,s=new rn,o=new I;const a=(c,p,g,_)=>{t(0,g[_].vector.x=p.position.x,r),t(0,g[_].vector.y=p.position.y,r),t(0,g[_].vector.z=p.position.z,r)},f=(c,p,g)=>t(0,p[g].enabled=!0,r),h=(c,p,g)=>t(0,p[g].enabled=!1,r);function l(c){s=c,t(1,s)}function u(c){i.$$.not_equal(r.controlPolygon,c)&&(r.controlPolygon=c,t(0,r))}return i.$$set=c=>{"curve"in c&&t(0,r=c.curve)},i.$$.update=()=>{i.$$.dirty&7&&(s.geometry.setFromPoints(r.generate()),r.computeControlPolygon(),t(3,o=r.evaluate(n.u)))},[r,s,n,o,a,f,h,l,u]}class ay extends on{constructor(e){super(),an(this,e,oy,sy,un,{curve:0})}}function dc(i,e,t){const n=i.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function pc(i,e,t){const n=i.slice();return n[12]=e[t],n}function mc(i,e,t){const n=i.slice();return n[15]=e[t],n[16]=e,n[17]=t,n}function gc(i){let e,t;return e=new mt({props:{type:Wn,$$slots:{default:[ly]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&524296&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function uy(i){let e,t,n,r;return e=new mt({props:{type:er,args:[.1]}}),n=new mt({props:{type:ms,color:"#0000FF"}}),{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment)},l(s){je(e.$$.fragment,s),t=Pe(s),je(n.$$.fragment,s)},m(s,o){qe(e,s,o),rt(s,t,o),qe(n,s,o),r=!0},p:mi,i(s){r||(ve(e.$$.fragment,s),ve(n.$$.fragment,s),r=!0)},o(s){be(e.$$.fragment,s),be(n.$$.fragment,s),r=!1},d(s){Xe(e,s),s&&he(t),Xe(n,s)}}}function ly(i){let e,t;return e=new mt({props:{type:De,"position.x":i[3].x,"position.y":i[3].y,"position.z":i[3].z,$$slots:{default:[uy]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&8&&(s["position.x"]=n[3].x),r&8&&(s["position.y"]=n[3].y),r&8&&(s["position.z"]=n[3].z),r&524288&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function _c(i){let e,t;function n(){return i[5](i[15],i[16],i[17])}function r(){return i[6](i[15],i[16],i[17])}return e=new Bf({props:{object:i[18],interactive:!0}}),e.$on("pointerenter",n),e.$on("pointerleave",r),{c(){We(e.$$.fragment)},l(s){je(e.$$.fragment,s)},m(s,o){qe(e,s,o),t=!0},p(s,o){i=s;const a={};o&262144&&(a.object=i[18]),e.$set(a)},i(s){t||(ve(e.$$.fragment,s),t=!0)},o(s){be(e.$$.fragment,s),t=!1},d(s){Xe(e,s)}}}function cy(i){let e,t,n,r,s,o,a,f;e=new mt({props:{type:er,args:[.1]}}),n=new mt({props:{type:ms,color:"#FF0000"}});function h(){return i[4](i[15],i[18],i[16],i[17])}s=new Nf({props:{showX:i[15].enabled,showY:i[15].enabled,showZ:i[15].enabled,translationSnap:i[1].toggles.snapActive.value?1:0}}),s.$on("objectChange",h);let l=i[1].curveActive===1&&_c(i);return{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment),r=Te(),We(s.$$.fragment),o=Te(),l&&l.c(),a=Ln()},l(u){je(e.$$.fragment,u),t=Pe(u),je(n.$$.fragment,u),r=Pe(u),je(s.$$.fragment,u),o=Pe(u),l&&l.l(u),a=Ln()},m(u,c){qe(e,u,c),rt(u,t,c),qe(n,u,c),rt(u,r,c),qe(s,u,c),rt(u,o,c),l&&l.m(u,c),rt(u,a,c),f=!0},p(u,c){i=u;const p={};c&1&&(p.showX=i[15].enabled),c&1&&(p.showY=i[15].enabled),c&1&&(p.showZ=i[15].enabled),c&2&&(p.translationSnap=i[1].toggles.snapActive.value?1:0),s.$set(p),i[1].curveActive===1?l?(l.p(i,c),c&2&&ve(l,1)):(l=_c(i),l.c(),ve(l,1),l.m(a.parentNode,a)):l&&(qn(),be(l,1,1,()=>{l=null}),Xn())},i(u){f||(ve(e.$$.fragment,u),ve(n.$$.fragment,u),ve(s.$$.fragment,u),ve(l),f=!0)},o(u){be(e.$$.fragment,u),be(n.$$.fragment,u),be(s.$$.fragment,u),be(l),f=!1},d(u){Xe(e,u),u&&he(t),Xe(n,u),u&&he(r),Xe(s,u),u&&he(o),l&&l.d(u),u&&he(a)}}}function fy(i){let e,t,n;return e=new mt({props:{type:De,"position.x":i[15].vector.x,"position.y":i[15].vector.y,"position.z":i[15].vector.z,$$slots:{default:[cy,({ref:r})=>({18:r}),({ref:r})=>r?262144:0]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment),t=Te()},l(r){je(e.$$.fragment,r),t=Pe(r)},m(r,s){qe(e,r,s),rt(r,t,s),n=!0},p(r,s){const o={};s&1&&(o["position.x"]=r[15].vector.x),s&1&&(o["position.y"]=r[15].vector.y),s&1&&(o["position.z"]=r[15].vector.z),s&786435&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){n||(ve(e.$$.fragment,r),n=!0)},o(r){be(e.$$.fragment,r),n=!1},d(r){Xe(e,r),r&&he(t)}}}function vc(i){let e,t;return e=new mt({props:{type:Wn,visible:i[1].toggles.pointsActive.value,$$slots:{default:[fy]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.visible=n[1].toggles.pointsActive.value),r&524291&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function xc(i){let e,t,n=i[12],r=[];for(let o=0;o<n.length;o+=1)r[o]=vc(mc(i,n,o));const s=o=>be(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Ln()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=Ln()},m(o,a){for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(o,a);rt(o,e,a),t=!0},p(o,a){if(a&262147){n=o[12];let f;for(f=0;f<n.length;f+=1){const h=mc(o,n,f);r[f]?(r[f].p(h,a),ve(r[f],1)):(r[f]=vc(h),r[f].c(),ve(r[f],1),r[f].m(e.parentNode,e))}for(qn(),f=n.length;f<r.length;f+=1)s(f);Xn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ve(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)be(r[a]);t=!1},d(o){ti(r,o),o&&he(e)}}}function hy(i){let e,t,n;return e=new mt({props:{type:Yc,color:"#000000",dashSize:.1,gapSize:.1,transparent:!0}}),{c(){We(e.$$.fragment),t=Te()},l(r){je(e.$$.fragment,r),t=Pe(r)},m(r,s){qe(e,r,s),rt(r,t,s),n=!0},p:mi,i(r){n||(ve(e.$$.fragment,r),n=!0)},o(r){be(e.$$.fragment,r),n=!1},d(r){Xe(e,r),r&&he(t)}}}function yc(i){let e,t,n;function r(o){i[7](o,i[9],i[10],i[11])}let s={type:rn,visible:i[1].toggles.controlPolygonActive.value,$$slots:{default:[hy]},$$scope:{ctx:i}};return i[9]!==void 0&&(s.ref=i[9]),e=new mt({props:s}),Vn.push(()=>ni(e,"ref",r)),{c(){We(e.$$.fragment)},l(o){je(e.$$.fragment,o)},m(o,a){qe(e,o,a),n=!0},p(o,a){i=o;const f={};a&2&&(f.visible=i[1].toggles.controlPolygonActive.value),a&524288&&(f.$$scope={dirty:a,ctx:i}),!t&&a&1&&(t=!0,f.ref=i[9],ii(()=>t=!1)),e.$set(f)},i(o){n||(ve(e.$$.fragment,o),n=!0)},o(o){be(e.$$.fragment,o),n=!1},d(o){Xe(e,o)}}}function dy(i){let e,t,n,r,s,o,a=i[1].toggles.indicatorActive.value&&gc(i),f=i[0].points,h=[];for(let m=0;m<f.length;m+=1)h[m]=xc(pc(i,f,m));const l=m=>be(h[m],1,1,()=>{h[m]=null});let u=i[0].controlPolygon,c=[];for(let m=0;m<u.length;m+=1)c[m]=yc(dc(i,u,m));const p=m=>be(c[m],1,1,()=>{c[m]=null});function g(m){i[8](m)}let _={type:De,castShadow:!0};return i[2]!==void 0&&(_.ref=i[2]),r=new mt({props:_}),Vn.push(()=>ni(r,"ref",g)),{c(){a&&a.c(),e=Te();for(let m=0;m<h.length;m+=1)h[m].c();t=Te();for(let m=0;m<c.length;m+=1)c[m].c();n=Te(),We(r.$$.fragment)},l(m){a&&a.l(m),e=Pe(m);for(let d=0;d<h.length;d+=1)h[d].l(m);t=Pe(m);for(let d=0;d<c.length;d+=1)c[d].l(m);n=Pe(m),je(r.$$.fragment,m)},m(m,d){a&&a.m(m,d),rt(m,e,d);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(m,d);rt(m,t,d);for(let x=0;x<c.length;x+=1)c[x]&&c[x].m(m,d);rt(m,n,d),qe(r,m,d),o=!0},p(m,d){if(m[1].toggles.indicatorActive.value?a?(a.p(m,d),d&2&&ve(a,1)):(a=gc(m),a.c(),ve(a,1),a.m(e.parentNode,e)):a&&(qn(),be(a,1,1,()=>{a=null}),Xn()),d&262147){f=m[0].points;let y;for(y=0;y<f.length;y+=1){const b=pc(m,f,y);h[y]?(h[y].p(b,d),ve(h[y],1)):(h[y]=xc(b),h[y].c(),ve(h[y],1),h[y].m(t.parentNode,t))}for(qn(),y=f.length;y<h.length;y+=1)l(y);Xn()}if(d&3){u=m[0].controlPolygon;let y;for(y=0;y<u.length;y+=1){const b=dc(m,u,y);c[y]?(c[y].p(b,d),ve(c[y],1)):(c[y]=yc(b),c[y].c(),ve(c[y],1),c[y].m(n.parentNode,n))}for(qn(),y=u.length;y<c.length;y+=1)p(y);Xn()}const x={};!s&&d&4&&(s=!0,x.ref=m[2],ii(()=>s=!1)),r.$set(x)},i(m){if(!o){ve(a);for(let d=0;d<f.length;d+=1)ve(h[d]);for(let d=0;d<u.length;d+=1)ve(c[d]);ve(r.$$.fragment,m),o=!0}},o(m){be(a),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)be(h[d]);c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)be(c[d]);be(r.$$.fragment,m),o=!1},d(m){a&&a.d(m),m&&he(e),ti(h,m),m&&he(t),ti(c,m),m&&he(n),Xe(r,m)}}}function py(i){let e,t;return e=new mt({props:{type:Wn,visible:i[1].curveActive!==0,$$slots:{default:[dy]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.visible=n[1].curveActive!==0),r&524303&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function my(i,e,t){let n;Gt(i,Ai,c=>t(1,n=c));let{surface:r}=e,s=new De(r.generate(),new ms({color:"#FF0000",side:kn,flatShading:!1,wireframe:!1,transparent:!0,opacity:.5})),o=new I;const a=(c,p,g,_)=>{t(0,g[_].vector.x=p.position.x,r),t(0,g[_].vector.y=p.position.y,r),t(0,g[_].vector.z=p.position.z,r)},f=(c,p,g)=>t(0,p[g].enabled=!0,r),h=(c,p,g)=>t(0,p[g].enabled=!1,r);function l(c,p,g,_){g[_]=c,t(0,r)}function u(c){s=c,t(2,s),t(0,r),t(1,n)}return i.$$set=c=>{"surface"in c&&t(0,r=c.surface)},i.$$.update=()=>{i.$$.dirty&3&&(t(2,s.geometry=r.generate(),s),r.computeControlPolygon(),t(2,s.material.wireframe=n.surface.wireframe.value,s),t(3,o=r.evaluate(n.u,n.w)))},[r,n,s,o,a,f,h,l,u]}class gy extends on{constructor(e){super(),an(this,e,my,py,un,{surface:0})}}function _y(i){let e,t;return e=new Mx({props:{maxPolarAngle:Qx(80),enableZoom:!0,target:{y:.5}}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p:mi,i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function vy(i){let e,t;return e=new mt({props:{type:Qg}}),{c(){We(e.$$.fragment)},l(n){je(e.$$.fragment,n)},m(n,r){qe(e,n,r),t=!0},p:mi,i(n){t||(ve(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function xy(i){let e,t,n,r,s,o,a,f,h,l,u,c,p,g,_,m;e=new mt({props:{type:Dn,makeDefault:!0,position:[10,10,10],fov:24,$$slots:{default:[_y]},$$scope:{ctx:i}}}),n=new mt({props:{type:fl,castShadow:!0,position:[3,10,10]}}),s=new mt({props:{type:fl,position:[-10,10,-10],intensity:.2}}),a=new mt({props:{type:Kg,intensity:.2}});function d(M){i[2](M)}let x={};i[0]!==void 0&&(x.curve=i[0]),h=new ay({props:x}),Vn.push(()=>ni(h,"curve",d));function y(M){i[3](M)}let b={};return i[1]!==void 0&&(b.surface=i[1]),c=new gy({props:b}),Vn.push(()=>ni(c,"surface",y)),_=new mt({props:{type:Wn,$$slots:{default:[vy]},$$scope:{ctx:i}}}),{c(){We(e.$$.fragment),t=Te(),We(n.$$.fragment),r=Te(),We(s.$$.fragment),o=Te(),We(a.$$.fragment),f=Te(),We(h.$$.fragment),u=Te(),We(c.$$.fragment),g=Te(),We(_.$$.fragment)},l(M){je(e.$$.fragment,M),t=Pe(M),je(n.$$.fragment,M),r=Pe(M),je(s.$$.fragment,M),o=Pe(M),je(a.$$.fragment,M),f=Pe(M),je(h.$$.fragment,M),u=Pe(M),je(c.$$.fragment,M),g=Pe(M),je(_.$$.fragment,M)},m(M,S){qe(e,M,S),rt(M,t,S),qe(n,M,S),rt(M,r,S),qe(s,M,S),rt(M,o,S),qe(a,M,S),rt(M,f,S),qe(h,M,S),rt(M,u,S),qe(c,M,S),rt(M,g,S),qe(_,M,S),m=!0},p(M,S){const F={};S&16&&(F.$$scope={dirty:S,ctx:M}),e.$set(F);const A={};!l&&S&1&&(l=!0,A.curve=M[0],ii(()=>l=!1)),h.$set(A);const w={};!p&&S&2&&(p=!0,w.surface=M[1],ii(()=>p=!1)),c.$set(w);const D={};S&16&&(D.$$scope={dirty:S,ctx:M}),_.$set(D)},i(M){m||(ve(e.$$.fragment,M),ve(n.$$.fragment,M),ve(s.$$.fragment,M),ve(a.$$.fragment,M),ve(h.$$.fragment,M),ve(c.$$.fragment,M),ve(_.$$.fragment,M),m=!0)},o(M){be(e.$$.fragment,M),be(n.$$.fragment,M),be(s.$$.fragment,M),be(a.$$.fragment,M),be(h.$$.fragment,M),be(c.$$.fragment,M),be(_.$$.fragment,M),m=!1},d(M){Xe(e,M),M&&he(t),Xe(n,M),M&&he(r),Xe(s,M),M&&he(o),Xe(a,M),M&&he(f),Xe(h,M),M&&he(u),Xe(c,M),M&&he(g),Xe(_,M)}}}function yy(i){let e,t,n;return t=new ux({props:{$$slots:{default:[xy]},$$scope:{ctx:i}}}),{c(){e=Ae("div"),We(t.$$.fragment),this.h()},l(r){e=Ce(r,"DIV",{class:!0});var s=Ue(e);je(t.$$.fragment,s),s.forEach(he),this.h()},h(){Re(e,"class","w-full h-full")},m(r,s){rt(r,e,s),qe(t,e,null),n=!0},p(r,[s]){const o={};s&19&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(ve(t.$$.fragment,r),n=!0)},o(r){be(t.$$.fragment,r),n=!1},d(r){r&&he(e),Xe(t)}}}function My(i,e,t){let{curve:n}=e,{surface:r}=e;function s(a){n=a,t(0,n)}function o(a){r=a,t(1,r)}return i.$$set=a=>{"curve"in a&&t(0,n=a.curve),"surface"in a&&t(1,r=a.surface)},[n,r,s,o]}class wy extends on{constructor(e){super(),an(this,e,My,yy,un,{curve:0,surface:1})}}function by(i){let e,t,n,r,s,o,a,f,h,l,u,c,p,g,_,m,d,x,y;function b(D){i[2](D)}function M(D){i[3](D)}let S={};i[0]!==void 0&&(S.curve=i[0]),i[1]!==void 0&&(S.surface=i[1]),u=new wy({props:S}),Vn.push(()=>ni(u,"curve",b)),Vn.push(()=>ni(u,"surface",M));function F(D){i[4](D)}function A(D){i[5](D)}let w={};return i[0]!==void 0&&(w.curve=i[0]),i[1]!==void 0&&(w.surface=i[1]),m=new t_({props:w}),Vn.push(()=>ni(m,"curve",F)),Vn.push(()=>ni(m,"surface",A)),{c(){e=Ae("div"),t=Ae("div"),n=Ae("h1"),r=xt("ME6104 Final Project: Bézier Curve and Surface Explorer"),s=Te(),o=Ae("p"),a=xt("By Alexander Bustos and Darren Kosen"),f=Te(),h=Ae("div"),l=Ae("div"),We(u.$$.fragment),g=Te(),_=Ae("div"),We(m.$$.fragment),this.h()},l(D){e=Ce(D,"DIV",{class:!0});var z=Ue(e);t=Ce(z,"DIV",{class:!0});var j=Ue(t);n=Ce(j,"H1",{class:!0});var N=Ue(n);r=yt(N,"ME6104 Final Project: Bézier Curve and Surface Explorer"),N.forEach(he),s=Pe(j),o=Ce(j,"P",{});var H=Ue(o);a=yt(H,"By Alexander Bustos and Darren Kosen"),H.forEach(he),j.forEach(he),f=Pe(z),h=Ce(z,"DIV",{class:!0});var G=Ue(h);l=Ce(G,"DIV",{class:!0});var K=Ue(l);je(u.$$.fragment,K),K.forEach(he),g=Pe(G),_=Ce(G,"DIV",{class:!0});var B=Ue(_);je(m.$$.fragment,B),B.forEach(he),G.forEach(he),z.forEach(he),this.h()},h(){Re(n,"class","text text-3xl font-semibold"),Re(t,"class","text-center flex flex-col justify-end bg-base-100"),Re(l,"class","border border-black rounded-md drop-shadow-md bg-base-100 w-full lg:w-3/4 aspect-video"),Re(_,"class","border border-black rounded-md drop-shadow-md bg-base-100 w-full lg:w-1/4"),Re(h,"class","flex flex-col space-y-2 justify-center lg:flex-row lg:space-x-2 lg:space-y-0 h-full"),Re(e,"class","flex flex-col min-h-screen w-5/6 mx-auto space-x-2 space-y-6 justify-center")},m(D,z){rt(D,e,z),re(e,t),re(t,n),re(n,r),re(t,s),re(t,o),re(o,a),re(e,f),re(e,h),re(h,l),qe(u,l,null),re(h,g),re(h,_),qe(m,_,null),y=!0},p(D,[z]){const j={};!c&&z&1&&(c=!0,j.curve=D[0],ii(()=>c=!1)),!p&&z&2&&(p=!0,j.surface=D[1],ii(()=>p=!1)),u.$set(j);const N={};!d&&z&1&&(d=!0,N.curve=D[0],ii(()=>d=!1)),!x&&z&2&&(x=!0,N.surface=D[1],ii(()=>x=!1)),m.$set(N)},i(D){y||(ve(u.$$.fragment,D),ve(m.$$.fragment,D),y=!0)},o(D){be(u.$$.fragment,D),be(m.$$.fragment,D),y=!1},d(D){D&&he(e),Xe(u),Xe(m)}}}function Dy(i,e,t){let n=new T1,r=new P1;function s(h){n=h,t(0,n)}function o(h){r=h,t(1,r)}function a(h){n=h,t(0,n)}function f(h){r=h,t(1,r)}return[n,r,s,o,a,f]}class Ty extends on{constructor(e){super(),an(this,e,Dy,by,un,{})}}export{Ty as default};
