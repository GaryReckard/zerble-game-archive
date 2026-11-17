var e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1009,s=1014,c=1015,l=1016,u=1020,d=1023,f=1026,p=2300,m=2301,h=2302,g=2400,_=2401,v=2402,y=3e3,b=3001,x=`srgb`,S=`srgb-linear`,C=`display-p3`,w=`display-p3-linear`,T=`linear`,E=`srgb`,D=`rec709`,O=7680,k=2e3,A=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},j=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),M=1234567,N=Math.PI/180,ee=180/Math.PI;function te(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(j[e&255]+j[e>>8&255]+j[e>>16&255]+j[e>>24&255]+`-`+j[t&255]+j[t>>8&255]+`-`+j[t>>16&15|64]+j[t>>24&255]+`-`+j[n&63|128]+j[n>>8&255]+`-`+j[n>>16&255]+j[n>>24&255]+j[r&255]+j[r>>8&255]+j[r>>16&255]+j[r>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function re(e,t){return(e%t+t)%t}function ie(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ae(e,t,n){return e===t?0:(n-e)/(t-e)}function oe(e,t,n){return(1-n)*e+n*t}function se(e,t,n,r){return oe(e,t,1-Math.exp(-n*r))}function ce(e,t=1){return t-Math.abs(re(e,t*2)-t)}function le(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ue(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function de(e,t){return e+Math.floor(Math.random()*(t-e+1))}function fe(e,t){return e+Math.random()*(t-e)}function pe(e){return e*(.5-Math.random())}function me(e){e!==void 0&&(M=e);let t=M+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function he(e){return e*N}function ge(e){return e*ee}function _e(e){return!(e&e-1)&&e!==0}function P(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ve(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ye(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function be(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function F(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var I={DEG2RAD:N,RAD2DEG:ee,generateUUID:te,clamp:ne,euclideanModulo:re,mapLinear:ie,inverseLerp:ae,lerp:oe,damp:se,pingpong:ce,smoothstep:le,smootherstep:ue,randInt:de,randFloat:fe,randFloatSpread:pe,seededRandom:me,degToRad:he,radToDeg:ge,isPowerOfTwo:_e,ceilPowerOfTwo:P,floorPowerOfTwo:ve,setQuaternionFromProperEuler:ye,normalize:F,denormalize:be},L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},R=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xe.makeScale(e,t)),this}rotate(e){return this.premultiply(xe.makeRotation(-e)),this}translate(e,t){return this.premultiply(xe.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xe=new R;function Se(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ce(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function we(){let e=Ce(`canvas`);return e.style.display=`block`,e}var Te={};function Ee(e){e in Te||(Te[e]=!0,console.warn(e))}var De=new R().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oe=new R().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ke={[S]:{transfer:T,primaries:D,toReference:e=>e,fromReference:e=>e},[x]:{transfer:E,primaries:D,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[w]:{transfer:T,primaries:`p3`,toReference:e=>e.applyMatrix3(Oe),fromReference:e=>e.applyMatrix3(De)},[C]:{transfer:E,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Oe),fromReference:e=>e.applyMatrix3(De).convertLinearToSRGB()}},Ae=new Set([S,w]),je={enabled:!0,_workingColorSpace:S,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Ae.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=ke[t].toReference,i=ke[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return ke[e].primaries},getTransfer:function(e){return e===``?T:ke[e].transfer}};function Me(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ne(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pe,Fe=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pe===void 0&&(Pe=Ce(`canvas`)),Pe.width=e.width,Pe.height=e.height;let n=Pe.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pe}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ce(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Me(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Me(t[e]/255)*255):t[e]=Me(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ie=0,Le=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ie++}),this.uuid=te(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Re(r[t].image)):e.push(Re(r[t]))}else e=Re(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Fe.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var ze=0,Be=class r extends A{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,s=t,c=t,l=i,u=a,f=d,p=o,m=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ze++}),this.uuid=te(),this.name=``,this.source=new Le(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h==`string`?this.colorSpace=h:(Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=h===3001?x:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?b:y}set encoding(e){Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?x:``}};Be.DEFAULT_IMAGE=null,Be.DEFAULT_MAPPING=300,Be.DEFAULT_ANISOTROPY=1;var Ve=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},He=class extends A{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ee(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?x:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:i,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Le(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ue=class extends He{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},We=class extends Be{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ge=class extends Be{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ke=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ne(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Je.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Je.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qe.copy(this).projectOnVector(e),this.sub(qe)}reflect(e){return this.sub(qe.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qe=new z,Je=new Ke,Ye=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ze.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ze.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ze.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ze):Ze.fromBufferAttribute(r,t),Ze.applyMatrix4(e.matrixWorld),this.expandByPoint(Ze);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qe.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qe.copy(e.boundingBox)),Qe.applyMatrix4(e.matrixWorld),this.union(Qe)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ze),Ze.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(at),ot.subVectors(this.max,at),$e.subVectors(e.a,at),et.subVectors(e.b,at),tt.subVectors(e.c,at),nt.subVectors(et,$e),rt.subVectors(tt,et),it.subVectors($e,tt);let t=[0,-nt.z,nt.y,0,-rt.z,rt.y,0,-it.z,it.y,nt.z,0,-nt.x,rt.z,0,-rt.x,it.z,0,-it.x,-nt.y,nt.x,0,-rt.y,rt.x,0,-it.y,it.x,0];return!lt(t,$e,et,tt,ot)||(t=[1,0,0,0,1,0,0,0,1],!lt(t,$e,et,tt,ot))?!1:(st.crossVectors(nt,rt),t=[st.x,st.y,st.z],lt(t,$e,et,tt,ot))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ze).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ze).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xe)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xe=[new z,new z,new z,new z,new z,new z,new z,new z],Ze=new z,Qe=new Ye,$e=new z,et=new z,tt=new z,nt=new z,rt=new z,it=new z,at=new z,ot=new z,st=new z,ct=new z;function lt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ct.fromArray(e,a);let o=i.x*Math.abs(ct.x)+i.y*Math.abs(ct.y)+i.z*Math.abs(ct.z),s=t.dot(ct),c=n.dot(ct),l=r.dot(ct);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ut=new Ye,dt=new z,ft=new z,pt=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ut.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dt.subVectors(e,this.center);let t=dt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(dt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ft.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dt.copy(e.center).add(ft)),this.expandByPoint(dt.copy(e.center).sub(ft))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mt=new z,ht=new z,gt=new z,_t=new z,vt=new z,yt=new z,bt=new z,xt=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mt.copy(this.origin).addScaledVector(this.direction,t),mt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ht.copy(e).add(t).multiplyScalar(.5),gt.copy(t).sub(e).normalize(),_t.copy(this.origin).sub(ht);let i=e.distanceTo(t)*.5,a=-this.direction.dot(gt),o=_t.dot(this.direction),s=-_t.dot(gt),c=_t.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ht).addScaledVector(gt,d),f}intersectSphere(e,t){mt.subVectors(e.center,this.origin);let n=mt.dot(this.direction),r=mt.dot(mt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mt)!==null}intersectTriangle(e,t,n,r,i){vt.subVectors(t,e),yt.subVectors(n,e),bt.crossVectors(vt,yt);let a=this.direction.dot(bt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_t.subVectors(this.origin,e);let s=o*this.direction.dot(yt.crossVectors(_t,yt));if(s<0)return null;let c=o*this.direction.dot(vt.cross(_t));if(c<0||s+c>a)return null;let l=-o*_t.dot(bt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ct.setFromMatrixColumn(e,0).length(),i=1/Ct.setFromMatrixColumn(e,1).length(),a=1/Ct.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tt,e,Et)}lookAt(e,t,n){let r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Dt.crossVectors(n,kt),Dt.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Dt.crossVectors(n,kt)),Dt.normalize(),Ot.crossVectors(kt,Dt),r[0]=Dt.x,r[4]=Ot.x,r[8]=kt.x,r[1]=Dt.y,r[5]=Ot.y,r[9]=kt.y,r[2]=Dt.z,r[6]=Ot.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Ct.set(r[0],r[1],r[2]).length(),a=Ct.set(r[4],r[5],r[6]).length(),o=Ct.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],wt.copy(this);let s=1/i,c=1/a,l=1/o;return wt.elements[0]*=s,wt.elements[1]*=s,wt.elements[2]*=s,wt.elements[4]*=c,wt.elements[5]*=c,wt.elements[6]*=c,wt.elements[8]*=l,wt.elements[9]*=l,wt.elements[10]*=l,t.setFromRotationMatrix(wt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=k){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=k){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ct=new z,wt=new St,Tt=new z(0,0,0),Et=new z(1,1,1),Dt=new z,Ot=new z,kt=new z,At=new St,jt=new Ke,Mt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ne(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ne(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return At.makeRotationFromQuaternion(e),this.setFromRotationMatrix(At,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jt.setFromEuler(this),this.setFromQuaternion(jt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mt.DEFAULT_ORDER=`XYZ`;var Nt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Pt=0,Ft=new z,It=new Ke,Lt=new St,Rt=new z,zt=new z,Bt=new z,Vt=new Ke,Ht=new z(1,0,0),Ut=new z(0,1,0),Wt=new z(0,0,1),Gt={type:`added`},Kt={type:`removed`},qt=class e extends A{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=te(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Mt,r=new Ke,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new R}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return It.setFromAxisAngle(e,t),this.quaternion.multiply(It),this}rotateOnWorldAxis(e,t){return It.setFromAxisAngle(e,t),this.quaternion.premultiply(It),this}rotateX(e){return this.rotateOnAxis(Ht,e)}rotateY(e){return this.rotateOnAxis(Ut,e)}rotateZ(e){return this.rotateOnAxis(Wt,e)}translateOnAxis(e,t){return Ft.copy(e).applyQuaternion(this.quaternion),this.position.add(Ft.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ht,e)}translateY(e){return this.translateOnAxis(Ut,e)}translateZ(e){return this.translateOnAxis(Wt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rt.copy(e):Rt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lt.lookAt(zt,Rt,this.up):Lt.lookAt(Rt,zt,this.up),this.quaternion.setFromRotationMatrix(Lt),r&&(Lt.extractRotation(r.matrixWorld),It.setFromRotationMatrix(Lt),this.quaternion.premultiply(It.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gt)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kt)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zt,e,Bt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zt,Vt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};qt.DEFAULT_UP=new z(0,1,0),qt.DEFAULT_MATRIX_AUTO_UPDATE=!0,qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new z,Yt=new z,Xt=new z,Zt=new z,Qt=new z,$t=new z,en=new z,tn=new z,nn=new z,rn=new z,an=!1,on=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jt.subVectors(e,t),r.cross(Jt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jt.subVectors(r,t),Yt.subVectors(n,t),Xt.subVectors(e,t);let a=Jt.dot(Jt),o=Jt.dot(Yt),s=Jt.dot(Xt),c=Yt.dot(Yt),l=Yt.dot(Xt),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt)!==null&&Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,r,i,a,o,s){return an===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),an=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zt.x),s.addScaledVector(a,Zt.y),s.addScaledVector(o,Zt.z),s)}static isFrontFacing(e,t,n,r){return Jt.subVectors(n,t),Yt.subVectors(e,t),Jt.cross(Yt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Jt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return an===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),an=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qt.subVectors(r,n),$t.subVectors(i,n),tn.subVectors(e,n);let s=Qt.dot(tn),c=$t.dot(tn);if(s<=0&&c<=0)return t.copy(n);nn.subVectors(e,r);let l=Qt.dot(nn),u=$t.dot(nn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qt,a);rn.subVectors(e,i);let f=Qt.dot(rn),p=$t.dot(rn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($t,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return en.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(en,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qt,a).addScaledVector($t,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},ln={h:0,s:0,l:0};function un(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=x){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=re(e,1),t=ne(t,0,1),n=ne(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=un(i,r,e+1/3),this.g=un(i,r,e),this.b=un(i,r,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=x){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=x){let n=sn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Me(e.r),this.g=Me(e.g),this.b=Me(e.b),this}copyLinearToSRGB(e){return this.r=Ne(e.r),this.g=Ne(e.g),this.b=Ne(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=x){return je.fromWorkingColorSpace(dn.copy(this),e),Math.round(ne(dn.r*255,0,255))*65536+Math.round(ne(dn.g*255,0,255))*256+Math.round(ne(dn.b*255,0,255))}getHexString(e=x){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,r=dn.g,i=dn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=x){je.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,r=dn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(ln);let n=oe(cn.h,ln.h,t),r=oe(cn.s,ln.s,t),i=oe(cn.l,ln.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new B;B.NAMES=sn;var fn=0,pn=class extends A{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=te(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=O,this.stencilZFail=O,this.stencilZPass=O,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},mn=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hn=new z,gn=new L,_n=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=c,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXY(t,gn.x,gn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=be(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=F(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=be(t,this.array)),t}setX(e,t){return this.normalized&&(t=F(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=be(t,this.array)),t}setY(e,t){return this.normalized&&(t=F(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=be(t,this.array)),t}setZ(e,t){return this.normalized&&(t=F(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=be(t,this.array)),t}setW(e,t){return this.normalized&&(t=F(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=F(t,this.array),n=F(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=F(t,this.array),n=F(n,this.array),r=F(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=F(t,this.array),n=F(n,this.array),r=F(r,this.array),i=F(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},vn=class extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yn=class extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}},V=class extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}},bn=0,xn=new St,Sn=new qt,Cn=new z,wn=new Ye,Tn=new Ye,En=new z,Dn=class e extends A{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=te(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Se(e)?yn:vn)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Sn.lookAt(e),Sn.updateMatrix(),this.applyMatrix4(Sn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new V(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wn.setFromBufferAttribute(n),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tn.setFromBufferAttribute(n),this.morphTargetsRelative?(En.addVectors(wn.min,Tn.min),wn.expandByPoint(En),En.addVectors(wn.max,Tn.max),wn.expandByPoint(En)):(wn.expandByPoint(Tn.min),wn.expandByPoint(Tn.max))}wn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(En));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)En.fromBufferAttribute(a,t),o&&(Cn.fromBufferAttribute(e,t),En.add(Cn)),r=Math.max(r,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new _n(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new z,l[e]=new z;let u=new z,d=new z,f=new z,p=new L,m=new L,h=new L,g=new z,_=new z;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new z,x=new z,S=new z,C=new z;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _n(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},On=new St,kn=new xt,An=new pt,jn=new z,Mn=new z,Nn=new z,Pn=new z,Fn=new z,In=new z,Ln=new L,Rn=new L,zn=new L,Bn=new z,Vn=new z,Hn=new z,Un=new z,Wn=new z,H=class extends qt{constructor(e=new Dn,t=new mn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){In.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Fn.fromBufferAttribute(s,e),a?In.addScaledVector(Fn,r):In.addScaledVector(Fn.sub(t),r))}t.add(In)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),An.copy(n.boundingSphere),An.applyMatrix4(i),kn.copy(e.ray).recast(e.near),!(An.containsPoint(kn.origin)===!1&&(kn.intersectSphere(An,jn)===null||kn.origin.distanceToSquared(jn)>(e.far-e.near)**2))&&(On.copy(i).invert(),kn.copy(e.ray).applyMatrix4(On),(n.boundingBox===null||kn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Kn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Kn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Kn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Kn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Wn.copy(s),Wn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Wn);return l<n.near||l>n.far?null:{distance:l,point:Wn.clone(),object:e}}function Kn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Mn),e.getVertexPosition(c,Nn),e.getVertexPosition(l,Pn);let u=Gn(e,t,n,r,Mn,Nn,Pn,Un);if(u){i&&(Ln.fromBufferAttribute(i,s),Rn.fromBufferAttribute(i,c),zn.fromBufferAttribute(i,l),u.uv=on.getInterpolation(Un,Mn,Nn,Pn,Ln,Rn,zn,new L)),a&&(Ln.fromBufferAttribute(a,s),Rn.fromBufferAttribute(a,c),zn.fromBufferAttribute(a,l),u.uv1=on.getInterpolation(Un,Mn,Nn,Pn,Ln,Rn,zn,new L),u.uv2=u.uv1),o&&(Bn.fromBufferAttribute(o,s),Vn.fromBufferAttribute(o,c),Hn.fromBufferAttribute(o,l),u.normal=on.getInterpolation(Un,Mn,Nn,Pn,Bn,Vn,Hn,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new z,materialIndex:0};on.getNormal(Mn,Nn,Pn,e.normal),u.face=e}return u}var U=class e extends Dn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new V(c,3)),this.setAttribute(`normal`,new V(l,3)),this.setAttribute(`uv`,new V(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qn(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Jn(e){let t={};for(let n=0;n<e.length;n++){let r=qn(e[n]);for(let e in r)t[e]=r[e]}return t}function Yn(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Xn(e){return e.getRenderTarget()===null?e.outputColorSpace:je.workingColorSpace}var Zn={clone:qn,merge:Jn},Qn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$n=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,er=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qn,this.fragmentShader=$n,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qn(e.uniforms),this.uniformsGroups=Yn(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tr=class extends qt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=k}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nr=class extends tr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ee*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(N*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ee*2*Math.atan(Math.tan(N*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(N*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,ir=1,ar=class extends qt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nr(rr,ir,e,t);r.layers=this.layers,this.add(r);let i=new nr(rr,ir,e,t);i.layers=this.layers,this.add(i);let a=new nr(rr,ir,e,t);a.layers=this.layers,this.add(a);let o=new nr(rr,ir,e,t);o.layers=this.layers,this.add(o);let s=new nr(rr,ir,e,t);s.layers=this.layers,this.add(s);let c=new nr(rr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},or=class extends Be{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sr=class extends Ue{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ee(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?x:``),this.texture=new or(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?i:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new U(5,5,5),a=new er({name:`CubemapFromEquirect`,uniforms:qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new H(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=i),new ar(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},cr=new z,lr=new z,ur=new R,dr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=cr.subVectors(n,t).cross(lr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ur.getNormalMatrix(e),r=this.coplanarPoint(cr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new pt,pr=new z,mr=class{constructor(e=new dr,t=new dr,n=new dr,r=new dr,i=new dr,a=new dr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=k){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function gr(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var _r=class e extends Dn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},vr={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},yr={basic:{uniforms:Jn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:vr.meshbasic_vert,fragmentShader:vr.meshbasic_frag},lambert:{uniforms:Jn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new B(0)}}]),vertexShader:vr.meshlambert_vert,fragmentShader:vr.meshlambert_frag},phong:{uniforms:Jn([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30}}]),vertexShader:vr.meshphong_vert,fragmentShader:vr.meshphong_frag},standard:{uniforms:Jn([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vr.meshphysical_vert,fragmentShader:vr.meshphysical_frag},toon:{uniforms:Jn([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new B(0)}}]),vertexShader:vr.meshtoon_vert,fragmentShader:vr.meshtoon_frag},matcap:{uniforms:Jn([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:vr.meshmatcap_vert,fragmentShader:vr.meshmatcap_frag},points:{uniforms:Jn([W.points,W.fog]),vertexShader:vr.points_vert,fragmentShader:vr.points_frag},dashed:{uniforms:Jn([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vr.linedashed_vert,fragmentShader:vr.linedashed_frag},depth:{uniforms:Jn([W.common,W.displacementmap]),vertexShader:vr.depth_vert,fragmentShader:vr.depth_frag},normal:{uniforms:Jn([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:vr.meshnormal_vert,fragmentShader:vr.meshnormal_frag},sprite:{uniforms:Jn([W.sprite,W.fog]),vertexShader:vr.sprite_vert,fragmentShader:vr.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vr.background_vert,fragmentShader:vr.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vr.backgroundCube_vert,fragmentShader:vr.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vr.cube_vert,fragmentShader:vr.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vr.equirect_vert,fragmentShader:vr.equirect_frag},distanceRGBA:{uniforms:Jn([W.common,W.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vr.distanceRGBA_vert,fragmentShader:vr.distanceRGBA_frag},shadow:{uniforms:Jn([W.lights,W.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:vr.shadow_vert,fragmentShader:vr.shadow_frag}};yr.physical={uniforms:Jn([yr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:vr.meshphysical_vert,fragmentShader:vr.meshphysical_frag};var br={r:0,b:0,g:0};function xr(e,t,n,r,i,a,o){let s=new B(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new H(new U(1,1,1),new er({name:`BackgroundCubeMaterial`,uniforms:qn(yr.backgroundCube.uniforms),vertexShader:yr.backgroundCube.vertexShader,fragmentShader:yr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=je.getTransfer(_.colorSpace)!==E,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new H(new _r(2,2),new er({name:`BackgroundMaterial`,uniforms:qn(yr.background.uniforms),vertexShader:yr.background.vertexShader,fragmentShader:yr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==E,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(br,Xn(e)),r.buffers.color.setClear(br.r,br.g,br.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Sr(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Cr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function wr(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Tr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new dr,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Er(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new sr(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Dr=class extends tr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Or=4,kr=[.125,.215,.35,.446,.526,.582],Ar=20,jr=new Dr,Mr=new B,Nr=null,Pr=0,Fr=0,Ir=(1+Math.sqrt(5))/2,Lr=1/Ir,Rr=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ir,Lr),new z(0,Ir,-Lr),new z(Lr,0,Ir),new z(-Lr,0,Ir),new z(Ir,Lr,0),new z(-Ir,Lr,0)],zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Pr,Fr),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:i,minFilter:i,generateMipmaps:!1,type:l,format:d,colorSpace:S,depthBuffer:!1},r=Vr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Br(r)),this._blurMaterial=Ur(r,e,t)}return r}_compileMaterial(e){let t=new H(this._lodPlanes[0],e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,r){let i=new nr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Mr),s.toneMapping=0,s.autoClear=!1;let u=new mn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new H(new U,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Mr),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Hr(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new H(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Hr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,jr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=Rr[(t-1)%Rr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new H(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ar;m>Ar&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);let h=[],g=0;for(let e=0;e<Ar;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Hr(t,3*v*(r>_-Or?r-_+Or:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,jr)}};function Br(e){let t=[],n=[],r=[],i=e,a=e-Or+1+kr.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Or?s=kr[o-e+Or-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Dn;h.setAttribute(`position`,new _n(f,3)),h.setAttribute(`uv`,new _n(p,2)),h.setAttribute(`faceIndex`,new _n(m,1)),t.push(h),i>Or&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Vr(e,t,n){let r=new Ue(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Hr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ur(e,t,n){let r=new Float32Array(Ar),i=new z(0,1,0);return new er({name:`SphericalGaussianBlur`,defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wr(){return new er({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gr(){return new er({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kr(){return`

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
	`}function qr(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new zr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new zr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Jr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Yr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Se(n)?yn:vn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Xr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Zr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Qr(e,t){return e[0]-t[0]}function $r(e,t){return Math.abs(t[1])-Math.abs(e[1])}function ei(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new Ve,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function l(l,u,d){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let r=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(u);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=u.morphAttributes.position!==void 0,n=u.morphAttributes.normal!==void 0,r=u.morphAttributes.color!==void 0,l=u.morphAttributes.position||[],d=u.morphAttributes.normal||[],f=u.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),r===!0&&(p=3);let m=u.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*i),_=new We(g,m,h,i);_.type=c,_.needsUpdate=!0;let v=p*4;for(let t=0;t<i;t++){let i=l[t],a=d[t],s=f[t],c=m*h*4*t;for(let t=0;t<i.count;t++){let l=t*v;e===!0&&(o.fromBufferAttribute(i,t),g[c+l+0]=o.x,g[c+l+1]=o.y,g[c+l+2]=o.z,g[c+l+3]=0),n===!0&&(o.fromBufferAttribute(a,t),g[c+l+4]=o.x,g[c+l+5]=o.y,g[c+l+6]=o.z,g[c+l+7]=0),r===!0&&(o.fromBufferAttribute(s,t),g[c+l+8]=o.x,g[c+l+9]=o.y,g[c+l+10]=o.z,g[c+l+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:_,size:new L(m,h)},a.set(u,s);function y(){_.dispose(),a.delete(u),u.removeEventListener(`dispose`,y)}u.addEventListener(`dispose`,y)}let l=0;for(let e=0;e<f.length;e++)l+=f[e];let p=u.morphTargetsRelative?1:1-l;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,p),d.getUniforms().setValue(e,`morphTargetInfluences`,f),d.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),d.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=f===void 0?0:f.length,n=r[u.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[u.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=f[e]}n.sort($r);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(Qr);let a=u.morphAttributes.position,o=u.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&u.getAttribute(`morphTarget`+e)!==a[n]&&u.setAttribute(`morphTarget`+e,a[n]),o&&u.getAttribute(`morphNormal`+e)!==o[n]&&u.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&u.hasAttribute(`morphTarget`+e)===!0&&u.deleteAttribute(`morphTarget`+e),o&&u.hasAttribute(`morphNormal`+e)===!0&&u.deleteAttribute(`morphNormal`+e),i[e]=0)}let l=u.morphTargetsRelative?1:1-c;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,l),d.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:l}}function ti(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ni=class extends Be{constructor(e,t,n,i,a,o,c,l,d,p){if(p=p===void 0?f:p,p!==1026&&p!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&p===1026&&(n=s),n===void 0&&p===1027&&(n=u),super(null,i,a,o,c,l,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c===void 0?r:c,this.minFilter=l===void 0?r:l,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ri=new Be,ii=new ni(1,1);ii.compareFunction=515;var ai=new We,oi=new Ge,si=new or,ci=[],li=[],ui=new Float32Array(16),di=new Float32Array(9),fi=new Float32Array(4);function pi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ci[i];if(a===void 0&&(a=new Float32Array(i),ci[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function mi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function hi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function gi(e,t){let n=li[t];n===void 0&&(n=new Int32Array(t),li[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _i(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mi(n,t))return;e.uniform2fv(this.addr,t),hi(n,t)}}function yi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mi(n,t))return;e.uniform3fv(this.addr,t),hi(n,t)}}function bi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mi(n,t))return;e.uniform4fv(this.addr,t),hi(n,t)}}function xi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hi(n,t)}else{if(mi(n,r))return;fi.set(r),e.uniformMatrix2fv(this.addr,!1,fi),hi(n,r)}}function Si(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hi(n,t)}else{if(mi(n,r))return;di.set(r),e.uniformMatrix3fv(this.addr,!1,di),hi(n,r)}}function Ci(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hi(n,t)}else{if(mi(n,r))return;ui.set(r),e.uniformMatrix4fv(this.addr,!1,ui),hi(n,r)}}function wi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mi(n,t))return;e.uniform2iv(this.addr,t),hi(n,t)}}function Ei(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mi(n,t))return;e.uniform3iv(this.addr,t),hi(n,t)}}function Di(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mi(n,t))return;e.uniform4iv(this.addr,t),hi(n,t)}}function Oi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mi(n,t))return;e.uniform2uiv(this.addr,t),hi(n,t)}}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mi(n,t))return;e.uniform3uiv(this.addr,t),hi(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mi(n,t))return;e.uniform4uiv(this.addr,t),hi(n,t)}}function Mi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?ii:ri;n.setTexture2D(t||a,i)}function Ni(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||oi,i)}function Pi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||si,i)}function Fi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ai,i)}function Ii(e){switch(e){case 5126:return _i;case 35664:return vi;case 35665:return yi;case 35666:return bi;case 35674:return xi;case 35675:return Si;case 35676:return Ci;case 5124:case 35670:return wi;case 35667:case 35671:return Ti;case 35668:case 35672:return Ei;case 35669:case 35673:return Di;case 5125:return Oi;case 36294:return ki;case 36295:return Ai;case 36296:return ji;case 35678:case 36198:case 36298:case 36306:case 35682:return Mi;case 35679:case 36299:case 36307:return Ni;case 35680:case 36300:case 36308:case 36293:return Pi;case 36289:case 36303:case 36311:case 36292:return Fi}}function Li(e,t){e.uniform1fv(this.addr,t)}function Ri(e,t){let n=pi(t,this.size,2);e.uniform2fv(this.addr,n)}function zi(e,t){let n=pi(t,this.size,3);e.uniform3fv(this.addr,n)}function Bi(e,t){let n=pi(t,this.size,4);e.uniform4fv(this.addr,n)}function Vi(e,t){let n=pi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Hi(e,t){let n=pi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ui(e,t){let n=pi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Wi(e,t){e.uniform1iv(this.addr,t)}function Gi(e,t){e.uniform2iv(this.addr,t)}function Ki(e,t){e.uniform3iv(this.addr,t)}function qi(e,t){e.uniform4iv(this.addr,t)}function Ji(e,t){e.uniform1uiv(this.addr,t)}function Yi(e,t){e.uniform2uiv(this.addr,t)}function Xi(e,t){e.uniform3uiv(this.addr,t)}function Zi(e,t){e.uniform4uiv(this.addr,t)}function Qi(e,t,n){let r=this.cache,i=t.length,a=gi(n,i);mi(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ri,a[e])}function $i(e,t,n){let r=this.cache,i=t.length,a=gi(n,i);mi(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||oi,a[e])}function ea(e,t,n){let r=this.cache,i=t.length,a=gi(n,i);mi(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||si,a[e])}function ta(e,t,n){let r=this.cache,i=t.length,a=gi(n,i);mi(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ai,a[e])}function na(e){switch(e){case 5126:return Li;case 35664:return Ri;case 35665:return zi;case 35666:return Bi;case 35674:return Vi;case 35675:return Hi;case 35676:return Ui;case 5124:case 35670:return Wi;case 35667:case 35671:return Gi;case 35668:case 35672:return Ki;case 35669:case 35673:return qi;case 5125:return Ji;case 36294:return Yi;case 36295:return Xi;case 36296:return Zi;case 35678:case 36198:case 36298:case 36306:case 35682:return Qi;case 35679:case 36299:case 36307:return $i;case 35680:case 36300:case 36308:case 36293:return ea;case 36289:case 36303:case 36311:case 36292:return ta}}var ra=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ii(t.type)}},ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=na(t.type)}},aa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oa=/(\w+)(\])?(\[|\.)?/g;function sa(e,t){e.seq.push(t),e.map[t.id]=t}function ca(e,t,n){let r=e.name,i=r.length;for(oa.lastIndex=0;;){let a=oa.exec(r),o=oa.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){sa(n,l===void 0?new ra(s,e,t):new ia(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new aa(s),sa(n,e)),n=e}}}var la=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ca(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ua(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var da=37297,fa=0;function pa(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ma(e){let t=je.getPrimaries(je.workingColorSpace),n=je.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case S:case w:return[r,`LinearTransferOETF`];case x:case C:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function ha(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+pa(e.getShaderSource(t),r)}return i}function ga(e,t){let n=ma(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _a(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function va(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Sa).join(`
`)}function ya(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Sa).join(`
`)}function ba(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xa(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Sa(e){return e!==``}function Ca(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ta=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(e){return e.replace(Ta,Oa)}var Da=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function Oa(e,t){let n=vr[t];if(n===void 0){let e=Da.get(t);if(e!==void 0)n=vr[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ea(n)}var ka=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Aa(e){return e.replace(ka,ja)}function ja(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ma(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Na(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Pa(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Fa(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Ia(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function La(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ra(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Na(n),l=Pa(n),u=Fa(n),d=Ia(n),f=La(n),p=n.isWebGL2?``:va(n),m=ya(n),h=ba(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Sa).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Sa).join(`
`),v.length>0&&(v+=`
`)):(_=[Ma(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Sa).join(`
`),v=[p,Ma(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:vr.tonemapping_pars_fragment,n.toneMapping===0?``:_a(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,vr.colorspace_pars_fragment,ga(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Sa).join(`
`)),o=Ea(o),o=Ca(o,n),o=wa(o,n),s=Ea(s),s=Ca(s,n),s=wa(s,n),o=Aa(o),s=Aa(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=ua(i,i.VERTEX_SHADER,b),C=ua(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=ha(i,S,`vertex`),t=ha(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new la(i,g),E=xa(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,da)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fa++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var za=0,Ba=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Va(e),t.set(e,n)),n}},Va=class{constructor(e){this.id=za++,this.code=e,this.usedTimes=0}};function Ha(e,t,n,r,i,a,o){let s=new Nt,c=new Ba,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),C=x&&x.mapping===306?x.image.height:null,w=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=yr[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=_.isInstancedMesh===!0,ee=_.isBatchedMesh===!0,te=!!a.map,ne=!!a.matcap,re=!!x,ie=!!a.aoMap,ae=!!a.lightMap,oe=!!a.bumpMap,se=!!a.normalMap,ce=!!a.displacementMap,le=!!a.emissiveMap,ue=!!a.metalnessMap,de=!!a.roughnessMap,fe=a.anisotropy>0,pe=a.clearcoat>0,me=a.iridescence>0,he=a.sheen>0,ge=a.transmission>0,_e=fe&&!!a.anisotropyMap,P=pe&&!!a.clearcoatMap,ve=pe&&!!a.clearcoatNormalMap,ye=pe&&!!a.clearcoatRoughnessMap,be=me&&!!a.iridescenceMap,F=me&&!!a.iridescenceThicknessMap,I=he&&!!a.sheenColorMap,L=he&&!!a.sheenRoughnessMap,R=!!a.specularMap,xe=!!a.specularColorMap,Se=!!a.specularIntensityMap,Ce=ge&&!!a.transmissionMap,we=ge&&!!a.thicknessMap,Te=!!a.gradientMap,Ee=!!a.alphaMap,De=a.alphaTest>0,Oe=!!a.alphaHash,ke=!!a.extensions,Ae=!!y.attributes.uv1,Me=!!y.attributes.uv2,Ne=!!y.attributes.uv3,Pe=0;return a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Pe=e.toneMapping),{isWebGL2:u,shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ee,instancing:N,instancingColor:N&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:S,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:C,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:f&&ce,emissiveMap:le,normalMapObjectSpace:se&&a.normalMapType===1,normalMapTangentSpace:se&&a.normalMapType===0,metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:_e,clearcoat:pe,clearcoatMap:P,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,iridescence:me,iridescenceMap:be,iridescenceThicknessMap:F,sheen:he,sheenColorMap:I,sheenRoughnessMap:L,specularMap:R,specularColorMap:xe,specularIntensityMap:Se,transmission:ge,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:a.transparent===!1&&a.blending===1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:a.combine,mapUv:te&&h(a.map.channel),aoMapUv:ie&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:oe&&h(a.bumpMap.channel),normalMapUv:se&&h(a.normalMap.channel),displacementMapUv:ce&&h(a.displacementMap.channel),emissiveMapUv:le&&h(a.emissiveMap.channel),metalnessMapUv:ue&&h(a.metalnessMap.channel),roughnessMapUv:de&&h(a.roughnessMap.channel),anisotropyMapUv:_e&&h(a.anisotropyMap.channel),clearcoatMapUv:P&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:F&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:I&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:L&&h(a.sheenRoughnessMap.channel),specularMapUv:R&&h(a.specularMap.channel),specularColorMapUv:xe&&h(a.specularColorMap.channel),specularIntensityMapUv:Se&&h(a.specularIntensityMap.channel),transmissionMapUv:Ce&&h(a.transmissionMap.channel),thicknessMapUv:we&&h(a.thicknessMap.channel),alphaMapUv:Ee&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||fe),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Me,vertexUv3s:Ne,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(te||Ee),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,useLegacyLights:e._useLegacyLights,decodeVideoTexture:te&&a.map.isVideoTexture===!0&&je.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:ke&&a.extensions.derivatives===!0,extensionFragDepth:ke&&a.extensions.fragDepth===!0,extensionDrawBuffers:ke&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:ke&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ke&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=yr[t];n=Zn.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ra(e,n,t,a),l.push(r)),r}function C(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:T}}function Ua(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Wa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ga(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ka(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Wa),r.length>1&&r.sort(t||Ga),i.length>1&&i.sort(t||Ga)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function qa(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ka,e.set(t,[i])):n>=r.length?(i=new Ka,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ja(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new z,color:new B};break;case`SpotLight`:n={position:new z,direction:new z,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function Ya(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xa=0;function Za(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Qa(e,t){let n=new Ja,r=Ya(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new z);let a=new z,o=new St,s=new St;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(Za);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_FLOAT_1,i.rectAreaLTC2=W.LTC_FLOAT_2):(i.rectAreaLTC1=W.LTC_HALF_1,i.rectAreaLTC2=W.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_FLOAT_1,i.rectAreaLTC2=W.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=W.LTC_HALF_1,i.rectAreaLTC2=W.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=Xa++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function $a(e,t){let n=new Qa(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function eo(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new $a(e,t),n.set(r,[o])):i>=a.length?(o=new $a(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var to=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},no=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ro=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,io=`uniform sampler2D shadow_pass;
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
}`;function ao(e,t,n){let i=new mr,a=new L,o=new L,s=new Ve,c=new to({depthPacking:3201}),l=new no,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:ro,fragmentShader:io}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Dn;h.setAttribute(`position`,new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new H(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Ue(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ue(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function oo(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new Ve,r=null,i=new Ve(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Ve().fromArray(ae),ce=new Ve().fromArray(oe);function le(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),de(e.DEPTH_TEST),c.setFunc(3),ye(!1),be(1),de(e.CULL_FACE),P(0);function de(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function fe(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function pe(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function me(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function he(t){return g!==t&&(e.useProgram(t),g=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)ge[103]=e.MIN,ge[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(ge[103]=e.MIN_EXT,ge[104]=e.MAX_EXT)}let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function P(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(fe(e.BLEND),_=!1);else if(_===!1&&(de(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(ge[n],ge[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function ve(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?P(0):P(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),I(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function be(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function F(t){t!==A&&(ee&&e.lineWidth(t),A=t)}function I(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):fe(e.POLYGON_OFFSET_FILL)}function L(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+N-1),re!==t&&(e.activeTexture(t),re=t)}function xe(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+N-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Se(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Pe(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Fe(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},re=null,ie={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:P,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:F,setPolygonOffset:I,setScissorTest:L,activeTexture:R,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Ne,viewport:Pe,reset:Le}}function so(o,c,l,d,f,p,m){let h=f.isWebGL2,g=c.has(`WEBGL_multisampled_render_to_texture`)?c.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap,y,b=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function S(e,t){return x?new OffscreenCanvas(e,t):Ce(`canvas`)}function C(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?ve:Math.floor,a=r(i*e.width),o=r(i*e.height);y===void 0&&(y=S(a,o));let s=n?S(a,o):y;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function w(e){return _e(e.width)&&_e(e.height)}function E(e){return h?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function D(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function O(e){o.generateMipmap(e)}function k(e,t,n,r,i=!1){if(h===!1)return t;if(e!==null){if(o[e]!==void 0)return o[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===o.RED&&(n===o.FLOAT&&(a=o.R32F),n===o.HALF_FLOAT&&(a=o.R16F),n===o.UNSIGNED_BYTE&&(a=o.R8)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(a=o.R8UI),n===o.UNSIGNED_SHORT&&(a=o.R16UI),n===o.UNSIGNED_INT&&(a=o.R32UI),n===o.BYTE&&(a=o.R8I),n===o.SHORT&&(a=o.R16I),n===o.INT&&(a=o.R32I)),t===o.RG&&(n===o.FLOAT&&(a=o.RG32F),n===o.HALF_FLOAT&&(a=o.RG16F),n===o.UNSIGNED_BYTE&&(a=o.RG8)),t===o.RGBA){let e=i?T:je.getTransfer(r);n===o.FLOAT&&(a=o.RGBA32F),n===o.HALF_FLOAT&&(a=o.RGBA16F),n===o.UNSIGNED_BYTE&&(a=e===`srgb`?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT_4_4_4_4&&(a=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(a=o.RGB5_A1)}return(a===o.R16F||a===o.R32F||a===o.RG16F||a===o.RG32F||a===o.RGBA16F||a===o.RGBA32F)&&c.get(`EXT_color_buffer_float`),a}function A(e,t,n){return D(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){return e===1003||e===1004||e===1005?o.NEAREST:o.LINEAR}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ee(t),t.isVideoTexture&&v.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ne(t)}function ee(e){let t=d.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=b.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&te(e),Object.keys(r).length===0&&b.delete(n)}d.remove(e)}function te(e){let t=d.get(e);o.deleteTexture(t.__webglTexture);let n=e.source,r=b.get(n);delete r[t.__cacheKey],m.memory.textures--}function ne(e){let t=e.texture,n=d.get(e),r=d.get(t);if(r.__webglTexture!==void 0&&(o.deleteTexture(r.__webglTexture),m.memory.textures--),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let t=0;t<n.__webglFramebuffer[e].length;t++)o.deleteFramebuffer(n.__webglFramebuffer[e][t]);else o.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&o.deleteRenderbuffer(n.__webglDepthbuffer[e])}else{if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)o.deleteFramebuffer(n.__webglFramebuffer[e]);else o.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&o.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&o.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&o.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&o.deleteRenderbuffer(n.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,n=t.length;e<n;e++){let n=d.get(t[e]);n.__webglTexture&&(o.deleteTexture(n.__webglTexture),m.memory.textures--),d.remove(t[e])}d.remove(t),d.remove(e)}let re=0;function ie(){re=0}function ae(){let e=re;return e>=f.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+f.maxTextures),re+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(e,t){let n=d.get(e);if(e.isVideoTexture&&Ee(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(n,e,t);return}}l.bindTexture(o.TEXTURE_2D,n.__webglTexture,o.TEXTURE0+t)}function ce(e,t){let n=d.get(e);e.version>0&&n.__version!==e.version?ge(n,e,t):l.bindTexture(o.TEXTURE_2D_ARRAY,n.__webglTexture,o.TEXTURE0+t)}function le(e,t){let n=d.get(e);e.version>0&&n.__version!==e.version?ge(n,e,t):l.bindTexture(o.TEXTURE_3D,n.__webglTexture,o.TEXTURE0+t)}function ue(e,t){let n=d.get(e);e.version>0&&n.__version!==e.version?P(n,e,t):l.bindTexture(o.TEXTURE_CUBE_MAP,n.__webglTexture,o.TEXTURE0+t)}let de={[e]:o.REPEAT,[t]:o.CLAMP_TO_EDGE,[n]:o.MIRRORED_REPEAT},fe={[r]:o.NEAREST,1004:o.NEAREST_MIPMAP_NEAREST,1005:o.NEAREST_MIPMAP_LINEAR,[i]:o.LINEAR,1007:o.LINEAR_MIPMAP_NEAREST,[a]:o.LINEAR_MIPMAP_LINEAR},pe={512:o.NEVER,519:o.ALWAYS,513:o.LESS,515:o.LEQUAL,514:o.EQUAL,518:o.GEQUAL,516:o.GREATER,517:o.NOTEQUAL};function me(e,t,n){if(n?(o.texParameteri(e,o.TEXTURE_WRAP_S,de[t.wrapS]),o.texParameteri(e,o.TEXTURE_WRAP_T,de[t.wrapT]),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,de[t.wrapR]),o.texParameteri(e,o.TEXTURE_MAG_FILTER,fe[t.magFilter]),o.texParameteri(e,o.TEXTURE_MIN_FILTER,fe[t.minFilter])):(o.texParameteri(e,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(e,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(t.wrapS!==1001||t.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),o.texParameteri(e,o.TEXTURE_MAG_FILTER,j(t.magFilter)),o.texParameteri(e,o.TEXTURE_MIN_FILTER,j(t.minFilter)),t.minFilter!==1003&&t.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),t.compareFunction&&(o.texParameteri(e,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(e,o.TEXTURE_COMPARE_FUNC,pe[t.compareFunction])),c.has(`EXT_texture_filter_anisotropic`)===!0){let n=c.get(`EXT_texture_filter_anisotropic`);if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&c.has(`OES_texture_float_linear`)===!1||h===!1&&t.type===1016&&c.has(`OES_texture_half_float_linear`)===!1)return;(t.anisotropy>1||d.get(t).__currentAnisotropy)&&(o.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,f.getMaxAnisotropy())),d.get(t).__currentAnisotropy=t.anisotropy)}}function he(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,M));let r=t.source,i=b.get(r);i===void 0&&(i={},b.set(r,i));let a=oe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:o.createTexture(),usedTimes:0},m.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&te(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ge(e,t,n){let r=o.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=o.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=o.TEXTURE_3D);let i=he(e,t),a=t.source;l.bindTexture(r,e.__webglTexture,o.TEXTURE0+n);let c=d.get(a);if(a.version!==c.__version||i===!0){l.activeTexture(o.TEXTURE0+n);let e=je.getPrimaries(je.workingColorSpace),d=t.colorSpace===``?null:je.getPrimaries(t.colorSpace),m=t.colorSpace===``||e===d?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,m);let g=E(t)&&w(t.image)===!1,_=C(t.image,g,!1,f.maxTextureSize);_=De(t,_);let v=w(_)||h,y=p.convert(t.format,t.colorSpace),b=p.convert(t.type),x=k(t.internalFormat,y,b,t.colorSpace,t.isVideoTexture);me(r,t,v);let S,T=t.mipmaps,j=h&&t.isVideoTexture!==!0&&x!==36196,M=c.__version===void 0||i===!0,N=A(t,_,v);if(t.isDepthTexture)x=o.DEPTH_COMPONENT,h?x=t.type===1015?o.DEPTH_COMPONENT32F:t.type===1014?o.DEPTH_COMPONENT24:t.type===1020?o.DEPTH24_STENCIL8:o.DEPTH_COMPONENT16:t.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),t.format===1026&&x===o.DEPTH_COMPONENT&&t.type!==1012&&t.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),t.type=s,b=p.convert(t.type)),t.format===1027&&x===o.DEPTH_COMPONENT&&(x=o.DEPTH_STENCIL,t.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),t.type=u,b=p.convert(t.type))),M&&(j?l.texStorage2D(o.TEXTURE_2D,1,x,_.width,_.height):l.texImage2D(o.TEXTURE_2D,0,x,_.width,_.height,0,y,b,null));else if(t.isDataTexture){if(T.length>0&&v){j&&M&&l.texStorage2D(o.TEXTURE_2D,N,x,T[0].width,T[0].height);for(let e=0,t=T.length;e<t;e++)S=T[e],j?l.texSubImage2D(o.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):l.texImage2D(o.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data);t.generateMipmaps=!1}else j?(M&&l.texStorage2D(o.TEXTURE_2D,N,x,_.width,_.height),l.texSubImage2D(o.TEXTURE_2D,0,0,0,_.width,_.height,y,b,_.data)):l.texImage2D(o.TEXTURE_2D,0,x,_.width,_.height,0,y,b,_.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){j&&M&&l.texStorage3D(o.TEXTURE_2D_ARRAY,N,x,T[0].width,T[0].height,_.depth);for(let e=0,n=T.length;e<n;e++)S=T[e],t.format===1023?j?l.texSubImage3D(o.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,_.depth,y,b,S.data):l.texImage3D(o.TEXTURE_2D_ARRAY,e,x,S.width,S.height,_.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):j?l.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,_.depth,y,S.data,0,0):l.compressedTexImage3D(o.TEXTURE_2D_ARRAY,e,x,S.width,S.height,_.depth,0,S.data,0,0)}else{j&&M&&l.texStorage2D(o.TEXTURE_2D,N,x,T[0].width,T[0].height);for(let e=0,n=T.length;e<n;e++)S=T[e],t.format===1023?j?l.texSubImage2D(o.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):l.texImage2D(o.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):j?l.compressedTexSubImage2D(o.TEXTURE_2D,e,0,0,S.width,S.height,y,S.data):l.compressedTexImage2D(o.TEXTURE_2D,e,x,S.width,S.height,0,S.data)}}else if(t.isDataArrayTexture)j?(M&&l.texStorage3D(o.TEXTURE_2D_ARRAY,N,x,_.width,_.height,_.depth),l.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_.width,_.height,_.depth,y,b,_.data)):l.texImage3D(o.TEXTURE_2D_ARRAY,0,x,_.width,_.height,_.depth,0,y,b,_.data);else if(t.isData3DTexture)j?(M&&l.texStorage3D(o.TEXTURE_3D,N,x,_.width,_.height,_.depth),l.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_.width,_.height,_.depth,y,b,_.data)):l.texImage3D(o.TEXTURE_3D,0,x,_.width,_.height,_.depth,0,y,b,_.data);else if(t.isFramebufferTexture){if(M){if(j)l.texStorage2D(o.TEXTURE_2D,N,x,_.width,_.height);else{let e=_.width,t=_.height;for(let n=0;n<N;n++)l.texImage2D(o.TEXTURE_2D,n,x,e,t,0,y,b,null),e>>=1,t>>=1}}}else if(T.length>0&&v){j&&M&&l.texStorage2D(o.TEXTURE_2D,N,x,T[0].width,T[0].height);for(let e=0,t=T.length;e<t;e++)S=T[e],j?l.texSubImage2D(o.TEXTURE_2D,e,0,0,y,b,S):l.texImage2D(o.TEXTURE_2D,e,x,y,b,S);t.generateMipmaps=!1}else j?(M&&l.texStorage2D(o.TEXTURE_2D,N,x,_.width,_.height),l.texSubImage2D(o.TEXTURE_2D,0,0,0,y,b,_)):l.texImage2D(o.TEXTURE_2D,0,x,y,b,_);D(t,v)&&O(r),c.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function P(e,t,n){if(t.image.length!==6)return;let r=he(e,t),i=t.source;l.bindTexture(o.TEXTURE_CUBE_MAP,e.__webglTexture,o.TEXTURE0+n);let a=d.get(i);if(i.version!==a.__version||r===!0){l.activeTexture(o.TEXTURE0+n);let e=je.getPrimaries(je.workingColorSpace),s=t.colorSpace===``?null:je.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=t.isCompressedTexture||t.image[0].isCompressedTexture,d=t.image[0]&&t.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!u&&!d?m[e]=C(t.image[e],!1,!0,f.maxCubemapSize):m[e]=d?t.image[e].image:t.image[e],m[e]=De(t,m[e]);let g=m[0],_=w(g)||h,v=p.convert(t.format,t.colorSpace),y=p.convert(t.type),b=k(t.internalFormat,v,y,t.colorSpace),x=h&&t.isVideoTexture!==!0,S=a.__version===void 0||r===!0,T=A(t,g,_);me(o.TEXTURE_CUBE_MAP,t,_);let E;if(u){x&&S&&l.texStorage2D(o.TEXTURE_CUBE_MAP,T,b,g.width,g.height);for(let e=0;e<6;e++){E=m[e].mipmaps;for(let n=0;n<E.length;n++){let r=E[n];t.format===1023?x?l.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,v,y,r.data):l.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,v,y,r.data):v===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?l.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,v,r.data):l.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,r.data)}}}else{E=t.mipmaps,x&&S&&(E.length>0&&T++,l.texStorage2D(o.TEXTURE_CUBE_MAP,T,b,m[0].width,m[0].height));for(let e=0;e<6;e++)if(d){x?l.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,v,y,m[e].data):l.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,m[e].width,m[e].height,0,v,y,m[e].data);for(let t=0;t<E.length;t++){let n=E[t].image[e].image;x?l.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,v,y,n.data):l.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,n.width,n.height,0,v,y,n.data)}}else{x?l.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,v,y,m[e]):l.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,v,y,m[e]);for(let t=0;t<E.length;t++){let n=E[t];x?l.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,v,y,n.image[e]):l.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,v,y,n.image[e])}}}D(t,_)&&O(o.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n,r,i,a){let s=p.convert(n.format,n.colorSpace),c=p.convert(n.type),u=k(n.internalFormat,s,c,n.colorSpace);if(!d.get(t).__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===o.TEXTURE_3D||i===o.TEXTURE_2D_ARRAY?l.texImage3D(i,a,u,e,n,t.depth,0,s,c,null):l.texImage2D(i,a,u,e,n,0,s,c,null)}l.bindFramebuffer(o.FRAMEBUFFER,e),Te(t)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,r,i,d.get(n).__webglTexture,0,we(t)):(i===o.TEXTURE_2D||i>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,r,i,d.get(n).__webglTexture,a),l.bindFramebuffer(o.FRAMEBUFFER,null)}function be(e,t,n){if(o.bindRenderbuffer(o.RENDERBUFFER,e),t.depthBuffer&&!t.stencilBuffer){let r=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(n||Te(t)){let e=t.depthTexture;e&&e.isDepthTexture&&(e.type===1015?r=o.DEPTH_COMPONENT32F:e.type===1014&&(r=o.DEPTH_COMPONENT24));let n=we(t);Te(t)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,n,r,t.width,t.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,n,r,t.width,t.height)}else o.renderbufferStorage(o.RENDERBUFFER,r,t.width,t.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,e)}else if(t.depthBuffer&&t.stencilBuffer){let r=we(t);n&&Te(t)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,r,o.DEPTH24_STENCIL8,t.width,t.height):Te(t)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,r,o.DEPTH24_STENCIL8,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,t.width,t.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,e)}else{let e=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let r=0;r<e.length;r++){let i=e[r],a=p.convert(i.format,i.colorSpace),s=p.convert(i.type),c=k(i.internalFormat,a,s,i.colorSpace),l=we(t);n&&Te(t)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,t.width,t.height):Te(t)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,l,c,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,c,t.width,t.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function F(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(l.bindFramebuffer(o.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);d.get(t.depthTexture).__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),se(t.depthTexture,0);let n=d.get(t.depthTexture).__webglTexture,r=we(t);if(t.depthTexture.format===1026)Te(t)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,n,0,r):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,n,0);else if(t.depthTexture.format===1027)Te(t)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,n,0,r):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,n,0);else throw Error(`Unknown depthTexture format`)}function I(e){let t=d.get(e),n=e.isWebGLCubeRenderTarget===!0;if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);F(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)l.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]=o.createRenderbuffer(),be(t.__webglDepthbuffer[n],e,!1)}else l.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer=o.createRenderbuffer(),be(t.__webglDepthbuffer,e,!1);l.bindFramebuffer(o.FRAMEBUFFER,null)}function L(e,t,n){let r=d.get(e);t!==void 0&&ye(r.__webglFramebuffer,e,e.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),n!==void 0&&I(e)}function R(e){let t=e.texture,n=d.get(e),r=d.get(t);e.addEventListener(`dispose`,N),e.isWebGLMultipleRenderTargets!==!0&&(r.__webglTexture===void 0&&(r.__webglTexture=o.createTexture()),r.__version=t.version,m.memory.textures++);let i=e.isWebGLCubeRenderTarget===!0,a=e.isWebGLMultipleRenderTargets===!0,s=w(e)||h;if(i){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(h&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=o.createFramebuffer()}else n.__webglFramebuffer[e]=o.createFramebuffer()}else{if(h&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=o.createFramebuffer()}else n.__webglFramebuffer=o.createFramebuffer();if(a){if(f.drawBuffers){let t=e.texture;for(let e=0,n=t.length;e<n;e++){let n=d.get(t[e]);n.__webglTexture===void 0&&(n.__webglTexture=o.createTexture(),m.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(h&&e.samples>0&&Te(e)===!1){let r=a?t:[t];n.__webglMultisampledFramebuffer=o.createFramebuffer(),n.__webglColorRenderbuffer=[],l.bindFramebuffer(o.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<r.length;t++){let i=r[t];n.__webglColorRenderbuffer[t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=p.convert(i.format,i.colorSpace),s=p.convert(i.type),c=k(i.internalFormat,a,s,i.colorSpace,e.isXRRenderTarget===!0),l=we(e);o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,e.width,e.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+t,o.RENDERBUFFER,n.__webglColorRenderbuffer[t])}o.bindRenderbuffer(o.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=o.createRenderbuffer(),be(n.__webglDepthRenderbuffer,e,!0)),l.bindFramebuffer(o.FRAMEBUFFER,null)}}if(i){l.bindTexture(o.TEXTURE_CUBE_MAP,r.__webglTexture),me(o.TEXTURE_CUBE_MAP,t,s);for(let r=0;r<6;r++)if(h&&t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ye(n.__webglFramebuffer[r][i],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ye(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t,s)&&O(o.TEXTURE_CUBE_MAP),l.unbindTexture()}else if(a){let t=e.texture;for(let r=0,i=t.length;r<i;r++){let i=t[r],a=d.get(i);l.bindTexture(o.TEXTURE_2D,a.__webglTexture),me(o.TEXTURE_2D,i,s),ye(n.__webglFramebuffer,e,i,o.COLOR_ATTACHMENT0+r,o.TEXTURE_2D,0),D(i,s)&&O(o.TEXTURE_2D)}l.unbindTexture()}else{let i=o.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(h?i=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),l.bindTexture(i,r.__webglTexture),me(i,t,s),h&&t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ye(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,i,r);else ye(n.__webglFramebuffer,e,t,o.COLOR_ATTACHMENT0,i,0);D(t,s)&&O(i),l.unbindTexture()}e.depthBuffer&&I(e)}function xe(e){let t=w(e)||h,n=e.isWebGLMultipleRenderTargets===!0?e.texture:[e.texture];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(D(i,t)){let t=e.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,n=d.get(i).__webglTexture;l.bindTexture(t,n),O(t),l.unbindTexture()}}}function Se(e){if(h&&e.samples>0&&Te(e)===!1){let t=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],n=e.width,r=e.height,i=o.COLOR_BUFFER_BIT,a=[],s=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,c=d.get(e),u=e.isWebGLMultipleRenderTargets===!0;if(u)for(let e=0;e<t.length;e++)l.bindFramebuffer(o.FRAMEBUFFER,c.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,null),l.bindFramebuffer(o.FRAMEBUFFER,c.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,null,0);l.bindFramebuffer(o.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),l.bindFramebuffer(o.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let l=0;l<t.length;l++){a.push(o.COLOR_ATTACHMENT0+l),e.depthBuffer&&a.push(s);let f=c.__ignoreDepthValues!==void 0&&c.__ignoreDepthValues;if(f===!1&&(e.depthBuffer&&(i|=o.DEPTH_BUFFER_BIT),e.stencilBuffer&&(i|=o.STENCIL_BUFFER_BIT)),u&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,c.__webglColorRenderbuffer[l]),f===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[s]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[s])),u){let e=d.get(t[l]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0)}o.blitFramebuffer(0,0,n,r,0,0,n,r,i,o.NEAREST),_&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,a)}if(l.bindFramebuffer(o.READ_FRAMEBUFFER,null),l.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<t.length;e++){l.bindFramebuffer(o.FRAMEBUFFER,c.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,c.__webglColorRenderbuffer[e]);let n=d.get(t[e]).__webglTexture;l.bindFramebuffer(o.FRAMEBUFFER,c.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,n,0)}l.bindFramebuffer(o.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}}function we(e){return Math.min(f.maxSamples,e.samples)}function Te(e){let t=d.get(e);return h&&e.samples>0&&c.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ee(e){let t=m.render.frame;v.get(e)!==t&&(v.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||n!==`srgb-linear`&&n!==``&&(je.getTransfer(n)===`srgb`?h===!1?c.has(`EXT_sRGB`)===!0&&r===1023?(e.format=1035,e.minFilter=i,e.generateMipmaps=!1):t=Fe.sRGBToLinear(t):(r!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=L,this.setupRenderTarget=R,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Te}function co(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=je.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var lo=class extends nr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},G=class extends qt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},uo={type:`move`},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uo)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},po=class extends A{constructor(e,t){super();let n=this,r=null,i=1,a=null,c=`local-floor`,l=1,p=null,m=null,h=null,g=null,_=null,v=null,y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new L,T=null,E=new nr;E.layers.enable(1),E.viewport=new Ve;let D=new nr;D.layers.enable(2),D.viewport=new Ve;let O=[E,D],k=new lo;k.layers.enable(1),k.layers.enable(2);let A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new fo,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new fo,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new fo,S[e]=t),t.getHandSpace()};function M(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,p||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,N),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}A=null,j=null,e.setRenderTarget(b),_=null,g=null,h=null,r=null,x=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return p||a},this.setReferenceSpace=function(e){p=e},this.getBaseLayer=function(){return g===null?_:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(m){if(r=m,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,N),r.addEventListener(`inputsourceschange`,te),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};_=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),x=new Ue(_.framebufferWidth,_.framebufferHeight,{format:d,type:o,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let n=null,a=null,c=null;y.depth&&(c=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?1027:f,a=y.stencil?u:s);let l={colorFormat:t.RGBA8,depthFormat:c,scaleFactor:i};h=new XRWebGLBinding(r,t),g=h.createProjectionLayer(l),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),x=new Ue(g.textureWidth,g.textureHeight,{format:d,type:o,depthTexture:new ni(g.textureWidth,g.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let p=e.properties.get(x);p.__ignoreDepthValues=g.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),p=null,a=await r.requestReferenceSpace(c),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ne=new z,re=new z;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;k.near=D.near=E.near=e.near,k.far=D.far=E.far=e.far,(A!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,j=k.far);let t=e.parent,n=k.cameras;ae(k,t);for(let e=0;e<n.length;e++)ae(n[e],t);n.length===2?ie(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),oe(e,k,t)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ee*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(g!==null||_!==null)return l},this.setFoveation=function(e){l=e,g!==null&&(g.fixedFoveation=e),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=e)};let se=null;function ce(t,r){if(m=r.getViewerPose(p||a),v=r,m!==null){let t=m.views;_!==null&&(e.setRenderTargetFramebuffer(x,_.framebuffer),e.setRenderTarget(x));let n=!1;t.length!==k.cameras.length&&(k.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(_!==null)a=_.getViewport(i);else{let t=h.getViewSubImage(g,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(x,t.colorTexture,g.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(x))}let o=O[r];o===void 0&&(o=new nr,o.layers.enable(r),o.viewport=new Ve,O[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),n===!0&&k.cameras.push(o)}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,r,p||a)}se&&se(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),v=null}let le=new hr;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}};function mo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ho(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var go=class{constructor(e={}){let{canvas:t=we(),context:n=null,depth:r=!0,stencil:i=!0,alpha:s=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;m=n===null?s:n.getContextAttributes().alpha;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=x,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let C=this,w=!1,T=0,E=0,D=null,O=-1,k=null,A=new Ve,j=new Ve,M=null,N=new B(0),ee=0,te=t.width,ne=t.height,re=1,ie=null,ae=null,oe=new Ve(0,0,te,ne),se=new Ve(0,0,te,ne),ce=!1,le=new mr,ue=!1,de=!1,fe=null,pe=new St,me=new L,he=new z,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return D===null?re:1}let P=n;function ye(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),P===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(C.isWebGL1Renderer===!0&&t.shift(),P=ye(t,e),P===null)throw ye(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&P instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let be,F,I,R,xe,Se,Ce,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,He;function We(){be=new Jr(P),F=new wr(P,be,e),be.init(F),ze=new co(P,be,F),I=new oo(P,be,F),R=new Zr(P),xe=new Ua,Se=new so(P,be,I,xe,F,ze,R),Ce=new Er(C),Te=new qr(C),Ee=new gr(P,F),Be=new Sr(P,be,Ee,F),De=new Yr(P,Ee,R,Be),Oe=new ti(P,De,Ee,R),Ie=new ei(P,F,Se),Ne=new Tr(xe),ke=new Ha(C,Ce,Te,be,F,Be,Ne),Ae=new mo(C,xe),je=new qa,Me=new eo(be,F),Fe=new xr(C,Ce,Te,I,Oe,m,u),Pe=new ao(C,Oe,F),He=new ho(P,R,F,I),Le=new Cr(P,be,R,F),Re=new Xr(P,be,R,F),R.programs=ke.programs,C.capabilities=F,C.extensions=be,C.properties=xe,C.renderLists=je,C.shadowMap=Pe,C.state=I,C.info=R}We();let Ge=new po(C,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=be.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=be.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(e){e!==void 0&&(re=e,this.setSize(te,ne,!1))},this.getSize=function(e){return e.set(te,ne)},this.setSize=function(e,n,r=!0){Ge.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(te=e,ne=n,t.width=Math.floor(e*re),t.height=Math.floor(n*re),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(te*re,ne*re).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,ne=n,re=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),I.viewport(A.copy(oe).multiplyScalar(re).floor())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),I.scissor(j.copy(se).multiplyScalar(re).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){I.setScissorTest(ce=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(D!==null){let t=D.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=D.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,P.clearBufferuiv(P.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,P.clearBufferiv(P.COLOR,0,g))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),je.dispose(),Me.dispose(),xe.dispose(),Ce.dispose(),Te.dispose(),Oe.dispose(),Be.dispose(),He.dispose(),ke.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),fe&&=(fe.dispose(),null),rt.stop()};function Ke(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),w=!0}function qe(){console.log(`THREE.WebGLRenderer: Context Restored.`),w=!1;let e=R.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;We(),R.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Je(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),xe.remove(e)}function Ze(e){let t=xe.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ge);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ft(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*_e()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*_e()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,lt(e,t,n),e.side=0,e.needsUpdate=!0,lt(e,t,n),e.side=2):lt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Me.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(C._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Qe(a,n,e),r.add(a)}else Qe(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){xe.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}be.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new hr;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(w===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(C,e,t,D),v=Me.get(e,b.length),v.init(),b.push(v),pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromProjectionMatrix(pe),de=this.localClippingEnabled,ue=Ne.init(this.clippingPlanes,de),_=je.get(e,y.length),_.init(),y.push(_),it(e,t,0,C.sortObjects),_.finish(),C.sortObjects===!0&&_.sort(ie,ae),this.info.render.frame++,ue===!0&&Ne.beginShadows();let n=v.state.shadowsArray;if(Pe.render(n,e,t),ue===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(_,e),v.setupLights(C._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];at(_,e,r,r.viewport)}}else at(_,e,t);D!==null&&(Se.updateMultisampleRenderTarget(D),Se.updateRenderTargetMipmap(D)),e.isScene===!0&&e.onAfterRender(C,e,t),Be.resetDefaultState(),O=-1,k=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||le.intersectsSprite(e)){r&&he.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pe);let t=Oe.update(e),i=e.material;i.visible&&_.push(e,t,i,n,he.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||le.intersectsObject(e))){let t=Oe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),he.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),he.copy(e.boundingSphere.center)),he.applyMatrix4(e.matrixWorld).applyMatrix4(pe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,he.z,o)}}else i.visible&&_.push(e,t,i,n,he.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),ue===!0&&Ne.setGlobalState(C.clippingPlanes,n),a.length>0&&ot(i,a,t,n),r&&I.viewport(A.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=F.isWebGL2;fe===null&&(fe=new Ue(1,1,{generateMipmaps:!0,type:be.has(`EXT_color_buffer_half_float`)?l:o,minFilter:a,samples:i?4:0})),C.getDrawingBufferSize(me),i?fe.setSize(me.x,me.y):fe.setSize(ve(me.x),ve(me.y));let s=C.getRenderTarget();C.setRenderTarget(fe),C.getClearColor(N),ee=C.getClearAlpha(),ee<1&&C.setClearColor(16777215,.5),C.clear();let c=C.toneMapping;C.toneMapping=0,st(e,n,r),Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe);let u=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,s=i.material,c=i.group;if(s.side===2&&a.layers.test(r.layers)){let e=s.side;s.side=1,s.needsUpdate=!0,ct(a,n,r,o,s,c),s.side=e,s.needsUpdate=!0,u=!0}}u===!0&&(Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe)),C.setRenderTarget(s),C.setClearColor(N,ee),C.toneMapping=c}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&ct(o,t,n,s,c,l)}}function ct(e,t,n,r,i,a){e.onBeforeRender(C,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(C,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,C.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,C.renderBufferDirect(n,t,r,i,e,a),i.side=2):C.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(C,t,n,r,i,a)}function lt(e,t,n){t.isScene!==!0&&(t=ge);let r=xe.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Te:Ce).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return dt(e,s),u}else s.uniforms=ke.getUniforms(e),e.onBuild(n,s,C),e.onBeforeCompile(s,C),u=ke.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ne.uniform),dt(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ut(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=la.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function dt(e,t){let n=xe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ft(e,t,n,r,i){t.isScene!==!0&&(t=ge),Se.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=D===null?C.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:S,c=(r.isMeshStandardMaterial?Te:Ce).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(m=C.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=xe.get(r),y=v.state.lights;if(ue===!0&&(de===!0||e!==k)){let t=e===k&&r.id===O;Ne.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ne.numPlanes||_.numIntersection!==Ne.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?F.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=lt(r,t,i));let w=!1,T=!1,E=!1,A=x.getUniforms(),j=_.uniforms;if(I.useProgram(x.program)&&(w=!0,T=!0,E=!0),r.id!==O&&(O=r.id,T=!0),w||k!==e){A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,he.setFromMatrixPosition(e.matrixWorld)),F.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,T=!0,E=!0)}if(i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(F.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,Se)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,Se));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0&&F.isWebGL2===!0)&&Ie.update(i,n,x),(T||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(j.envMap.value=c,j.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),T&&(A.setValue(P,`toneMappingExposure`,C.toneMappingExposure),_.needsLights&&pt(j,E),a&&r.fog===!0&&Ae.refreshFogUniforms(j,a),Ae.refreshMaterialUniforms(j,r,re,ne,fe),la.upload(P,ut(_),j,Se)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(la.upload(P,ut(_),j,Se),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(F.isWebGL2){let n=e[t];He.update(n,x),He.bind(n,x)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return x}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(e,t,n){xe.get(e.texture).__webglTexture=t,xe.get(e.depthTexture).__webglTexture=n;let r=xe.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||be.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=xe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){D=e,T=t,E=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=xe.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?Se.setupRenderTarget(e):s.__hasExternalTextures&&Se.rebindTextures(e,xe.get(e.texture).__webglTexture,xe.get(e.depthTexture).__webglTexture):(I.bindFramebuffer(P.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=xe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=F.isWebGL2&&e.samples>0&&Se.useMultisampledRTT(e)===!1?xe.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest}else A.copy(oe).multiplyScalar(re).floor(),j.copy(se).multiplyScalar(re).floor(),M=ce;if(I.bindFramebuffer(P.FRAMEBUFFER,i)&&F.drawBuffers&&r&&I.drawBuffers(e,i),I.viewport(A),I.scissor(j),I.setScissorTest(M),a){let r=xe.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=xe.get(e.texture),i=t||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}O=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=xe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){I.bindFramebuffer(P.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&ze.convert(s)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(be.has(`EXT_color_buffer_half_float`)||F.isWebGL2&&be.has(`EXT_color_buffer_float`));if(c!==1009&&ze.convert(c)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(F.isWebGL2||be.has(`OES_texture_float`)||be.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ze.convert(s),ze.convert(c),a)}finally{let e=D===null?null:xe.get(D).__webglFramebuffer;I.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);Se.setTexture2D(t,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,e.x,e.y,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=ze.convert(n.format),s=ze.convert(n.type);Se.setTexture2D(n,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,n.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(C.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=ze.convert(r.format),l=ze.convert(r.type),u;if(r.isData3DTexture)Se.setTexture3D(r,0),u=P.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)Se.setTexture2DArray(r,0),u=P.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,r.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,r.unpackAlignment);let d=P.getParameter(P.UNPACK_ROW_LENGTH),f=P.getParameter(P.UNPACK_IMAGE_HEIGHT),p=P.getParameter(P.UNPACK_SKIP_PIXELS),m=P.getParameter(P.UNPACK_SKIP_ROWS),h=P.getParameter(P.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,g.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,g.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,e.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,e.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?P.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),P.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):P.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),P.pixelStorei(P.UNPACK_ROW_LENGTH,d),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,f),P.pixelStorei(P.UNPACK_SKIP_PIXELS,p),P.pixelStorei(P.UNPACK_SKIP_ROWS,m),P.pixelStorei(P.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&P.generateMipmap(u),I.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?Se.setTextureCube(e,0):e.isData3DTexture?Se.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Se.setTexture2DArray(e,0):Se.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){T=0,E=0,D=null,I.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return k}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=je.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?b:y}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?x:S}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},_o=class extends go{};_o.prototype.isWebGL1Renderer=!0;var vo=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yo=class extends qt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},bo=class extends _n{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xo=new St,So=new St,Co=[],wo=new Ye,To=new St,Eo=new H,Do=new pt,Oo=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,To)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),wo.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(wo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xo),Do.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,xo),So.multiplyMatrices(n,xo),Eo.matrixWorld=So,Eo.raycast(e,Co);for(let e=0,n=Co.length;e<n;e++){let n=Co[e];n.instanceId=i,n.object=this,t.push(n)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},ko=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ao=new St,jo=new xt,Mo=new pt,No=new z,Po=class extends qt{constructor(e=new Dn,t=new ko){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=i,e.ray.intersectsSphere(Mo)===!1)return;Ao.copy(r).invert(),jo.copy(e.ray).applyMatrix4(Ao);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);No.fromBufferAttribute(l,n),Fo(No,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)No.fromBufferAttribute(l,a),Fo(No,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fo(e,t,n,r,i,a,o){let s=jo.distanceSqToPoint(e);if(s<n){let n=new z;jo.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}var Io=class extends Be{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Lo=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new z,r=[],i=[],a=[],o=new z,s=new St;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ne(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ne(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends Lo{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new L,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zo=class extends Ro{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Bo(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Vo=new z,Ho=new Bo,Uo=new Bo,Wo=new Bo,Go=class extends Lo{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Vo.subVectors(r[0],r[1]).add(r[0]),c=Vo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Vo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Vo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Uo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Wo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ho.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Uo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Wo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ho.calc(s),Uo.calc(s),Wo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ko(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function qo(e,t){let n=1-e;return n*n*t}function Jo(e,t){return 2*(1-e)*e*t}function Yo(e,t){return e*e*t}function Xo(e,t,n,r){return qo(e,t)+Jo(e,n)+Yo(e,r)}function Zo(e,t){let n=1-e;return n*n*n*t}function Qo(e,t){let n=1-e;return 3*n*n*e*t}function $o(e,t){return 3*(1-e)*e*e*t}function es(e,t){return e*e*e*t}function ts(e,t,n,r,i){return Zo(e,t)+Qo(e,n)+$o(e,r)+es(e,i)}var ns=class extends Lo{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rs=class extends Lo{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y),ts(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},is=class extends Lo{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends Lo{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends Lo{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ss=class extends Lo{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y),Xo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends Lo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ko(o,s.x,c.x,l.x,u.x),Ko(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}},ls=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:Go,CubicBezierCurve:ns,CubicBezierCurve3:rs,EllipseCurve:Ro,LineCurve:is,LineCurve3:as,QuadraticBezierCurve:os,QuadraticBezierCurve3:ss,SplineCurve:cs}),us=class extends Lo{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ls[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ls[n.type]().fromJSON(n))}return this}},ds=class extends us{constructor(e){super(),this.type=`Path`,this.currentPoint=new L,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new is(this.currentPoint.clone(),new L(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new os(this.currentPoint.clone(),new L(e,t),new L(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ns(this.currentPoint.clone(),new L(e,t),new L(n,r),new L(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new cs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ro(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fs=class e extends Dn{constructor(e=[new L(0,-.5),new L(.5,0),new L(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ne(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new z,d=new L,f=new z,p=new z,m=new z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new V(a,3)),this.setAttribute(`uv`,new V(o,2)),this.setAttribute(`normal`,new V(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ps=class e extends fs{constructor(e=1,t=1,n=4,r=8){let i=new ds;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},ms=class e extends Dn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new V(a,3)),this.setAttribute(`normal`,new V(o,3)),this.setAttribute(`uv`,new V(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},K=class e extends Dn{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hs=class e extends K{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gs=class e extends Dn{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new V(i,3)),this.setAttribute(`normal`,new V(i.slice(),3)),this.setAttribute(`uv`,new V(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},_s=class extends ds{constructor(e){super(e),this.uuid=te(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ds().fromJSON(n))}return this}},vs={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ys(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Es(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return xs(a,o,n,s,c,p,0),o}};function ys(e,t,n,r,i){let a,o;if(i===Ys(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Ks(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Ks(a,e[a],e[a+1],o);return o&&Rs(o,o.next)&&(qs(o),o=o.next),o}function bs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Rs(n,n.next)||Ls(n.prev,n,n.next)===0)){if(qs(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function xs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&js(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?Cs(e,r,i,a):Ss(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),qs(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ws(bs(e),t,n),xs(e,t,n,r,i,a,2)):o===2&&Ts(e,t,n,r,i,a):xs(bs(e),t,n,r,i,a,1);break}}function Ss(e){let t=e.prev,n=e,r=e.next;if(Ls(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Fs(i,s,a,c,o,l,m.x,m.y)&&Ls(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cs(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ls(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Ns(p,m,t,n,r),v=Ns(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Fs(s,u,c,d,l,f,y.x,y.y)&&Ls(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Fs(s,u,c,d,l,f,b.x,b.y)&&Ls(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Fs(s,u,c,d,l,f,y.x,y.y)&&Ls(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Fs(s,u,c,d,l,f,b.x,b.y)&&Ls(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ws(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Rs(i,a)&&zs(i,r,r.next,a)&&Us(i,a)&&Us(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),qs(r),qs(r.next),r=e=a),r=r.next}while(r!==e);return bs(r)}function Ts(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Is(o,e)){let s=Gs(o,e);o=bs(o,o.next),s=bs(s,s.next),xs(o,t,n,r,i,a,0),xs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Es(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=ys(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Ps(l));for(i.sort(Ds),a=0;a<i.length;a++)n=Os(i[a],n);return n}function Ds(e,t){return e.x-t.x}function Os(e,t){let n=ks(e,t);if(!n)return t;let r=Gs(n,e);return bs(r,r.next),bs(n,n.next)}function ks(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Fs(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Us(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&As(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function As(e,t){return Ls(e.prev,e,t.prev)<0&&Ls(t.next,e,e.next)<0}function js(e,t,n,r){let i=e;do i.z===0&&(i.z=Ns(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ms(i)}function Ms(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Ns(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ps(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Fs(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Is(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Hs(e,t)&&(Us(e,t)&&Us(t,e)&&Ws(e,t)&&(Ls(e.prev,e,t.prev)||Ls(e,t.prev,t))||Rs(e,t)&&Ls(e.prev,e,e.next)>0&&Ls(t.prev,t,t.next)>0)}function Ls(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Rs(e,t){return e.x===t.x&&e.y===t.y}function zs(e,t,n,r){let i=Vs(Ls(e,t,n)),a=Vs(Ls(e,t,r)),o=Vs(Ls(n,r,e)),s=Vs(Ls(n,r,t));return!!(i!==a&&o!==s||i===0&&Bs(e,n,t)||a===0&&Bs(e,r,t)||o===0&&Bs(n,e,r)||s===0&&Bs(n,t,r))}function Bs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Vs(e){return e>0?1:e<0?-1:0}function Hs(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&zs(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Us(e,t){return Ls(e.prev,e,e.next)<0?Ls(e,t,e.next)>=0&&Ls(e,e.prev,t)>=0:Ls(e,t,e.prev)<0||Ls(e,e.next,t)<0}function Ws(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Gs(e,t){let n=new Js(e.i,e.x,e.y),r=new Js(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ks(e,t,n,r){let i=new Js(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function qs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Js(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ys(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Xs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Zs(e),Qs(n,e);let a=e.length;t.forEach(Zs);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Qs(n,t[e]);let o=vs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Zs(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Qs(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var $s=class e extends Dn{constructor(e=new _s([new L(.5,.5),new L(-.5,.5),new L(-.5,-.5),new L(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new V(r,3)),this.setAttribute(`uv`,new V(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?ec:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new z,b=new z,x=new z),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Xs.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Xs.isClockWise(t)&&(w[e]=t.reverse())}}let T=Xs.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new L(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new L(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,ee=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);ae(i.x,i.y,-n)}}}let te=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];oe(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];oe(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function se(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ls[i.type]().fromJSON(i)),new e(r,t.options)}},ec={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new L(a,o),new L(s,c),new L(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new L(o,1-c),new L(l,1-d),new L(f,1-m),new L(h,1-_)]:[new L(s,1-c),new L(u,1-d),new L(p,1-m),new L(g,1-_)]}};function tc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var q=class e extends gs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},nc=class e extends Dn{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new V(s,3)),this.setAttribute(`normal`,new V(c,3)),this.setAttribute(`uv`,new V(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},rc=class e extends Dn{constructor(e=new _s([new L(0,.5),new L(-.5,-.5),new L(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new V(r,3)),this.setAttribute(`normal`,new V(i,3)),this.setAttribute(`uv`,new V(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Xs.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Xs.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Xs.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ic(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ic(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ac=class e extends Dn{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oc=class e extends Dn{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new z,u=new z,d=new z;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new V(o,3)),this.setAttribute(`normal`,new V(s,3)),this.setAttribute(`uv`,new V(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},sc=class e extends Dn{constructor(e=new ss(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,s=new z,c=new L,l=new z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ls[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},cc=class extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},lc=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new B(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uc=class extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new B(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new B(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new B(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},dc=class extends pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function fc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function pc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var mc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},hc=class extends mc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:g,endingEnd:g}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _:i=e,o=2*t-n;break;case v:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case _:a=e,s=2*n-t;break;case v:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},gc=class extends mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},_c=class extends mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},vc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case p:t=this.InterpolantFactoryMethodDiscrete;break;case m:t=this.InterpolantFactoryMethodLinear;break;case h:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return p;case this.InterpolantFactoryMethodLinear:return m;case this.InterpolantFactoryMethodSmooth:return h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&pc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===h,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};vc.prototype.TimeBufferType=Float32Array,vc.prototype.ValueBufferType=Float32Array,vc.prototype.DefaultInterpolation=m;var yc=class extends vc{};yc.prototype.ValueTypeName=`bool`,yc.prototype.ValueBufferType=Array,yc.prototype.DefaultInterpolation=p,yc.prototype.InterpolantFactoryMethodLinear=void 0,yc.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends vc{};bc.prototype.ValueTypeName=`color`;var xc=class extends vc{};xc.prototype.ValueTypeName=`number`;var Sc=class extends mc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ke.slerpFlat(i,0,a,c-o,a,c,s);return i}},Cc=class extends vc{InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};Cc.prototype.ValueTypeName=`quaternion`,Cc.prototype.DefaultInterpolation=m,Cc.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends vc{};wc.prototype.ValueTypeName=`string`,wc.prototype.ValueBufferType=Array,wc.prototype.DefaultInterpolation=p,wc.prototype.InterpolantFactoryMethodLinear=void 0,wc.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends vc{};Tc.prototype.ValueTypeName=`vector`;var Ec=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Dc=class extends Ec{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oc=new St,kc=new z,Ac=new z,jc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mc=class extends jc{constructor(){super(new nr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ee*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Nc=class extends Ec{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pc=new St,Fc=new z,Ic=new z,Lc=class extends jc{constructor(){super(new nr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new L(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Fc.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fc),Ic.copy(n.position),Ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ic),n.updateMatrixWorld(),r.makeTranslation(-Fc.x,-Fc.y,-Fc.z),Pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc)}},Rc=class extends Ec{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zc=class extends jc{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bc=class extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vc=class extends Ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Hc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Uc(){return(typeof performance>`u`?Date:performance).now()}var Wc=`\\[\\]\\.:\\/`,Gc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Kc=`[^\\[\\]\\.:\\/]`,qc=`[^`+Wc.replace(`\\.`,``)+`]`,Jc=`((?:WC+[\\/:])*)`.replace(`WC`,Kc),Yc=`(WCOD+)?`.replace(`WCOD`,qc),Xc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Kc),Zc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Kc),Qc=RegExp(`^`+Jc+Yc+Xc+Zc+`$`),$c=[`material`,`materials`,`bones`,`map`],el=class{constructor(e,t,n){let r=n||tl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Gc,``)}static parseTrackName(e){let t=Qc.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);$c.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tl.Composite=el,tl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tl.prototype.GetterByBindingType=[tl.prototype._getValue_direct,tl.prototype._getValue_array,tl.prototype._getValue_arrayElement,tl.prototype._getValue_toArray],tl.prototype.SetterByBindingTypeAndVersioning=[[tl.prototype._setValue_direct,tl.prototype._setValue_direct_setNeedsUpdate,tl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tl.prototype._setValue_array,tl.prototype._setValue_array_setNeedsUpdate,tl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tl.prototype._setValue_arrayElement,tl.prototype._setValue_arrayElement_setNeedsUpdate,tl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tl.prototype._setValue_fromArray,tl.prototype._setValue_fromArray_setNeedsUpdate,tl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);function nl(){let e=typeof window<`u`&&window.__perfProfile||new URLSearchParams(location.search).get(`perf`);if(e===`low`||e===`mid`||e===`high`)return e;let t=typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0),n=navigator.hardwareConcurrency||4,r=navigator.deviceMemory||4,i=Math.min(window.innerWidth,window.innerHeight)<700;return t&&i?`low`:t||n<=2||r<=2?`mid`:`high`}var rl={low:{name:`low`,pixelRatioCap:1.25,bloom:!0,bloomStrength:.35,bloomRadius:.7,bloomThreshold:.85,shadows:!1,shadowType:`basic`,crowdMax:180,chunkLoadRadius:1,chunkUnloadRadius:2,bubblePoolMax:200},mid:{name:`mid`,pixelRatioCap:1.5,bloom:!0,bloomStrength:.5,bloomRadius:.8,bloomThreshold:.8,shadows:!0,shadowType:`basic`,crowdMax:320,chunkLoadRadius:2,chunkUnloadRadius:3,bubblePoolMax:350},high:{name:`high`,pixelRatioCap:2,bloom:!0,bloomStrength:.6,bloomRadius:.85,bloomThreshold:.78,shadows:!0,shadowType:`soft`,crowdMax:500,chunkLoadRadius:2,chunkUnloadRadius:3,bubblePoolMax:600}}[nl()];function il(e){try{return typeof localStorage<`u`&&localStorage.getItem(e)===`1`}catch{return!1}}rl.contextLights=il(`zerble.contextLights`),rl.fancyLights=il(`zerble.fancyLights`),typeof console<`u`&&console.info(`[perf] profile =`,rl.name,rl);var al=new Set(`color.map.lightMap.lightMapIntensity.aoMap.aoMapIntensity.emissive.emissiveMap.emissiveIntensity.bumpMap.bumpScale.normalMap.normalScale.displacementMap.displacementScale.displacementBias.specularMap.alphaMap.envMap.combine.reflectivity.refractionRatio.wireframe.wireframeLinewidth.flatShading.fog.transparent.opacity.side.alphaTest.depthWrite.depthTest.blending.visible.name.userData.vertexColors.polygonOffset.polygonOffsetFactor.polygonOffsetUnits.toneMapped.premultipliedAlpha.dithering`.split(`.`)),ol=rl.name===`low`;function J(e={}){if(!ol)return new lc(e);let t={};for(let n of Object.keys(e))al.has(n)&&(t[n]=e[n]);let n=new dc(t);return n.userData.loweredFromStandard=!0,n}ol&&typeof console<`u`&&console.info(`[perf] Lambert fallback active (threeShim) — MeshStandardMaterial → MeshLambertMaterial on low tier`);var sl={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},cl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ll=new Dr(-1,1,1,-1,0,1),ul=new class extends Dn{constructor(){super(),this.setAttribute(`position`,new V([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new V([0,2,0,0,2,0],2))}},dl=class{constructor(e){this._mesh=new H(ul,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ll)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},fl=class extends cl{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof er?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zn.clone(e.uniforms),this.material=new er({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},pl=class extends cl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ml=class extends cl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new L);this._width=n.width,this._height=n.height,t=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:l}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fl(sl),this.copyPass.material.blending=0,this.clock=new Hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}pl!==void 0&&(r instanceof pl?n=!0:r instanceof ml&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new L);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},gl=class extends cl{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new B}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_l={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},vl=class e extends cl{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new L(256,256):new L(e.x,e.y),this.clearColor=new B(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(i,a,{type:l}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ue(i,a,{type:l});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ue(i,a,{type:l});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=_l;this.highPassUniforms=Zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new er({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=sl;this.copyUniforms=Zn.clone(u.uniforms),this.blendMaterial=new er({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new B,this.oldClearAlpha=1,this.basic=new mn,this.fsQuad=new dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new L(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new er({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new L(.5,.5)},direction:{value:new L(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new er({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};vl.BlurDirectionX=new L(1,0),vl.BlurDirectionY=new L(0,1);var yl={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},bl=class extends cl{constructor(){super();let e=yl;this.uniforms=Zn.clone(e.uniforms),this.material=new cc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6&&(this.material.defines.AGX_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},xl={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new L(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Sl=60,Cl=.12,wl=.0055,Tl=.004,El={throttle:0,steer:0,boost:!1,honkLatched:!1,musicLatched:!1,camYawDelta:0,camPitchDelta:0},Dl=null,Ol={x:0,y:0},kl={x:0,y:0},Al=null,jl=0,Ml=0,Nl=null,Pl=null,Fl=null,Il=!1,Ll=null,Rl=null,zl=null,Bl=null,Vl=null,Hl={state:El,isTouchDevice(){return typeof window>`u`?!1:window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches?!0:`ontouchstart`in window&&(navigator.maxTouchPoints||0)>0},install(){if(Il||(Il=!0,Ll=document.getElementById(`stick-base`),Rl=document.getElementById(`stick-knob`),zl=document.getElementById(`btn-honk`),Bl=document.getElementById(`btn-boost`),Vl=document.getElementById(`btn-music`),!Ll||!Rl||!zl||!Bl))return;Hl.isTouchDevice()&&document.body.classList.add(`is-touch`),Ll.addEventListener(`touchstart`,Ul,{passive:!1}),Ll.addEventListener(`touchmove`,Wl,{passive:!1}),Ll.addEventListener(`touchend`,Gl,{passive:!1}),Ll.addEventListener(`touchcancel`,Gl,{passive:!1}),zl.addEventListener(`touchstart`,ql,{passive:!1}),zl.addEventListener(`touchend`,Jl,{passive:!1}),zl.addEventListener(`touchcancel`,Jl,{passive:!1}),Bl.addEventListener(`touchstart`,Yl,{passive:!1}),Bl.addEventListener(`touchend`,Xl,{passive:!1}),Bl.addEventListener(`touchcancel`,Xl,{passive:!1}),Vl&&(Vl.addEventListener(`touchstart`,Zl,{passive:!1}),Vl.addEventListener(`touchend`,Ql,{passive:!1}),Vl.addEventListener(`touchcancel`,Ql,{passive:!1}));let e=document.getElementById(`game`);e.addEventListener(`touchstart`,$l,{passive:!1}),e.addEventListener(`touchmove`,eu,{passive:!1}),e.addEventListener(`touchend`,tu,{passive:!1}),e.addEventListener(`touchcancel`,tu,{passive:!1}),e.addEventListener(`pointerdown`,au),e.addEventListener(`pointermove`,ou),e.addEventListener(`pointerup`,su),e.addEventListener(`pointercancel`,su),e.style.cursor=`grab`},_consumeHonk(){let e=El.honkLatched;return El.honkLatched=!1,e},_consumeMusic(){let e=El.musicLatched;return El.musicLatched=!1,e},_consumeCamDeltas(){let e=El.camYawDelta,t=El.camPitchDelta;return El.camYawDelta=0,El.camPitchDelta=0,{yaw:e,pitch:t}}};function Ul(e){if(e.preventDefault(),Dl!==null)return;let t=e.changedTouches[0];Dl=t.identifier;let n=Ll.getBoundingClientRect();kl.x=n.left+n.width/2,kl.y=n.top+n.height/2,Ol.x=t.clientX,Ol.y=t.clientY,Kl(t.clientX,t.clientY)}function Wl(e){e.preventDefault();for(let t of e.changedTouches)if(t.identifier===Dl){Kl(t.clientX,t.clientY);return}}function Gl(e){e.preventDefault();for(let t of e.changedTouches)if(t.identifier===Dl){Dl=null,El.throttle=0,El.steer=0,Rl.style.transform=`translate(-50%, -50%)`;return}}function Kl(e,t){let n=e-Ol.x,r=t-Ol.y,i=Math.hypot(n,r);i>Sl&&(n=n/i*Sl,r=r/i*Sl);let a=Ol.x-kl.x+n,o=Ol.y-kl.y+r;Rl.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${o}px))`;let s=n/Sl,c=r/Sl,l=Math.hypot(s,c);if(l<Cl)s=0,c=0;else{let e=(l-Cl)/.88;s=s/l*e,c=c/l*e}El.throttle=-c,El.steer=-s}function ql(e){e.preventDefault(),Nl===null&&(Nl=e.changedTouches[0].identifier,El.honkLatched=!0,zl.classList.add(`pressed`))}function Jl(e){e.preventDefault();for(let t of e.changedTouches)if(t.identifier===Nl){Nl=null,zl.classList.remove(`pressed`);return}}function Yl(e){e.preventDefault(),Pl===null&&(Pl=e.changedTouches[0].identifier,El.boost=!0,Bl.classList.add(`pressed`))}function Xl(e){e.preventDefault();for(let t of e.changedTouches)if(t.identifier===Pl){Pl=null,El.boost=!1,Bl.classList.remove(`pressed`);return}}function Zl(e){e.preventDefault(),Fl===null&&(Fl=e.changedTouches[0].identifier,El.musicLatched=!0,Vl.classList.add(`pressed`))}function Ql(e){e.preventDefault();for(let t of e.changedTouches)if(t.identifier===Fl){Fl=null,Vl.classList.remove(`pressed`);return}}function $l(e){if(Al!==null)return;let t=e.changedTouches[0],n=t.target;n&&(n.closest(`#stick-base`)||n.closest(`#btn-honk`)||n.closest(`#btn-boost`)||n.closest(`#btn-cam`)||n.closest(`#btn-music`))||(e.preventDefault(),Al=t.identifier,jl=t.clientX,Ml=t.clientY)}function eu(e){if(Al!==null)for(let t of e.changedTouches){if(t.identifier!==Al)continue;e.preventDefault();let n=t.clientX-jl,r=t.clientY-Ml;jl=t.clientX,Ml=t.clientY,El.camYawDelta+=-n*wl,El.camPitchDelta+=-r*Tl;return}}function tu(e){for(let t of e.changedTouches)if(t.identifier===Al){Al=null;return}}var nu=!1,ru=0,iu=0;function au(e){if(e.pointerType!==`mouse`||e.button!==0)return;let t=e.currentTarget;nu=!0,ru=e.clientX,iu=e.clientY,t.setPointerCapture(e.pointerId),t.style.cursor=`grabbing`}function ou(e){if(e.pointerType!==`mouse`||!nu)return;let t=e.clientX-ru,n=e.clientY-iu;ru=e.clientX,iu=e.clientY,El.camYawDelta+=-t*wl,El.camPitchDelta+=-n*Tl}function su(e){e.pointerType===`mouse`&&nu&&(nu=!1,e.currentTarget.style.cursor=`grab`)}var cu=new Set,lu=new Set;function uu(e){return e.key===` `?`SPACE`:e.key===`Shift`?`SHIFT`:e.key===`ArrowUp`?`UP`:e.key===`ArrowDown`?`DOWN`:e.key===`ArrowLeft`?`LEFT`:e.key===`ArrowRight`?`RIGHT`:(e.key.length,e.key.toUpperCase())}var du=new Set([`W`,`A`,`S`,`D`,`SPACE`,`SHIFT`,`UP`,`DOWN`,`LEFT`,`RIGHT`]);window.addEventListener(`keydown`,e=>{let t=uu(e);cu.has(t)||lu.add(t),cu.add(t),du.has(t)&&e.preventDefault()}),window.addEventListener(`keyup`,e=>{let t=uu(e);cu.delete(t)}),window.addEventListener(`blur`,()=>{cu.clear()});function fu(e,t){return t===0?e:Math.max(-1,Math.min(1,t))}var pu={isDown(e){return cu.has(e)},consumePressed(e){let t=lu.has(e);if(t&&lu.delete(e),e===`SPACE`){let e=Hl._consumeHonk();return t||e}if(e===`M`){let e=Hl._consumeMusic();return t||e}return t},get throttle(){return fu(+!!cu.has(`W`)-!!cu.has(`S`),Hl.state.throttle)},get steer(){return fu(+!!cu.has(`A`)-!!cu.has(`D`),Hl.state.steer)},get boost(){return cu.has(`SHIFT`)||Hl.state.boost},get camYaw(){return+!!cu.has(`LEFT`)-!!cu.has(`RIGHT`)},get camPitch(){return+!!cu.has(`UP`)-!!cu.has(`DOWN`)},consumeCamDeltas(){return Hl._consumeCamDeltas()}},mu=document.getElementById(`smiles`),hu=document.getElementById(`best`),gu=document.getElementById(`toast`),_u=document.getElementById(`hit-flash`),vu=document.getElementById(`title-card`),yu=document.getElementById(`start-btn`),bu=0,xu=null,Su=`zerble-best-smiles`;function Cu(){xu&&=(gu.removeEventListener(`click`,xu),gu.removeEventListener(`touchend`,xu),null),gu.classList.remove(`tappable`)}var wu={showTitle(){vu.classList.remove(`hidden`)},hideTitle(){vu.classList.add(`hidden`)},onStart(e){yu.addEventListener(`click`,e,{once:!0})},setSmiles(e){mu.textContent=String(Math.floor(e))},loadBest(){let e=parseInt(localStorage.getItem(Su)||`0`,10);return hu.textContent=String(e||0),e||0},saveBest(e){e>parseInt(localStorage.getItem(Su)||`0`,10)&&(localStorage.setItem(Su,String(Math.floor(e))),hu.textContent=String(Math.floor(e)))},toast(e,t=1600,n={}){if(Cu(),gu.textContent=e,gu.classList.remove(`hidden`),gu.classList.add(`show`),typeof n.onTap==`function`){gu.classList.add(`tappable`);let e=n.onTap;xu=t=>{t.preventDefault();let n=e;Cu(),n()},gu.addEventListener(`click`,xu),gu.addEventListener(`touchend`,xu,{passive:!1})}clearTimeout(bu),bu=setTimeout(()=>{gu.classList.remove(`show`),Cu()},t)},flashHit(){_u.classList.add(`on`),setTimeout(()=>_u.classList.remove(`on`),180)}},Tu=[13717547,14711354,15446316,13142574,10109987,7024410,4152635,5208644],Eu=[9394746,10517066,7230002,5926732,4414021,8015418],Du=[8224412,9277098,7303824,9472421,5923720];function Ou(e){let t=new G;return t.name=`Mountains`,ku(t,{radius:360,count:64,minSize:30,maxSize:70,minPeakY:24,maxPeakY:52,palette:Tu}),ku(t,{radius:520,count:80,minSize:40,maxSize:95,minPeakY:36,maxPeakY:80,palette:Eu}),ku(t,{radius:720,count:90,minSize:55,maxSize:140,minPeakY:55,maxPeakY:130,palette:Du}),e.add(t),t}function ku(e,t){let{radius:n,count:r,minSize:i,maxSize:a,minPeakY:o,maxPeakY:s,palette:c}=t;for(let t=0;t<r;t++){let l=t/r*Math.PI*2+(Math.random()-.5)*(Math.PI/r)*.85,u=n+(Math.random()-.5)*n*.18,d=i+Math.random()*(a-i),f=o+Math.random()*(s-o),p=(f+8)/d,m=.75+Math.random()*.8,h=.75+Math.random()*.8,g=new q(d,1);g.scale(m,p,h);let _=new Float32Array(g.attributes.position.count*3),v=new B(c[Math.floor(Math.random()*c.length)]),y=new B;for(let e=0;e<g.attributes.position.count;e++){let t=g.attributes.position.getY(e);y.copy(v);let n=I.clamp(t/(d*p),-.3,.5);y.offsetHSL(0,0,n*.08),y.offsetHSL((Math.random()-.5)*.02,0,(Math.random()-.5)*.03),_[e*3]=y.r,_[e*3+1]=y.g,_[e*3+2]=y.b}g.setAttribute(`color`,new _n(_,3)),g.computeVertexNormals();let b=new H(g,new J({vertexColors:!0,flatShading:!0,roughness:1,metalness:0,fog:!1}));b.position.set(Math.cos(l)*u,f-d*p,Math.sin(l)*u),b.rotation.y=Math.random()*Math.PI*2,b.castShadow=!1,b.receiveShadow=!1,e.add(b)}}var Au=1,Y=new class{constructor(){this.entries=new Map,this.byKind=new Map}add(e){let t=Au++;return e.id=t,e.position||=new z,this.entries.set(t,e),this.byKind.has(e.kind)||this.byKind.set(e.kind,new Set),this.byKind.get(e.kind).add(t),t}remove(e){let t=this.entries.get(e);t&&(this.entries.delete(e),this.byKind.get(t.kind)?.delete(e))}byChunk(e){let t=[];for(let n of this.entries.values())n.chunkKey===e&&t.push(n);return t}removeChunk(e){for(let t of[...this.entries.values()])t.chunkKey===e&&this.remove(t.id)}*colliders(){for(let e of this.entries.values())e.collider&&(yield{position:e.position,radius:e.collider.radius,damage:e.collider.damage,kind:e.kind})}*footprints(){for(let e of this.entries.values())e.footprint>0&&(yield{position:e.position,radius:e.footprint,kind:e.kind})}*attractors(){for(let e of this.entries.values())e.attractor&&(yield{position:e.position,radius:e.attractor.radius,weight:e.attractor.weight,kind:e.kind})}pickAttractor(e){let t=[...this.attractors()];if(t.length===0)return null;let n=t.reduce((e,t)=>e+t.weight,0),r=e()*n;for(let e of t)if(r-=e.weight,r<=0)return e;return t[t.length-1]}closestBuilding(e,t,n=new Set([`tree`])){let r=null,i=1/0;for(let a of this.entries.values()){if(!a.footprint||n.has(a.kind))continue;let o=a.position.x-e.x,s=a.position.z-e.z,c=Math.hypot(o,s)-a.footprint;c<t&&c<i&&(i=c,r=a)}return r}},ju=0;function Mu(e){let t;if(typeof e==`string`&&e.length>0){t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);t>>>=0}else t=typeof e==`number`&&Number.isFinite(e)?(e|0)>>>0:0;return ju=t,t}function Nu(){return ju}function Pu(e,t){let n=Math.imul(e|0,2654435761);return n=(n^Math.imul(t|0,2246822519))>>>0,n=Math.imul(n^n>>>16,569420461)>>>0,n=Math.imul(n^n>>>15,1935289751)>>>0,(n^n>>>15)>>>0}function Fu(e,t,n=0){let r=ju,i=r^Math.imul(n|0,2654435761)|0,a=(r<<13|r>>>19)^Math.imul(n|0,2246822519);return Pu((e|0)+i,(t|0)+a)}function Iu(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e=e+Math.imul(e^e>>>7,e|61)^e,((e^e>>>14)>>>0)/4294967296}}function Lu(e,t){return 0}var X=null,Ru=null,zu=null,Bu=null,Vu=null,Hu=null,Uu=null,Wu=null,Gu=null,Ku=null,qu=null,Ju=null,Yu=!1,Xu=null,Zu=null,Qu={initCalled:!1,ctxConstructed:!1,ctxStateAfterConstruct:null,resumeCalled:!1,resumeError:null,ctxStateAfterResume:null,htmlUnlockTried:!1,htmlUnlockPlayResolved:!1,htmlUnlockPlayRejected:null,webAudioBufferUnlocked:!1,restoredFromLocalStorage:{master:null,music:null,sfx:null}};function $u(){let e=8e3,t=new ArrayBuffer(1644),n=new DataView(t),r=0,i=e=>{n.setUint32(r,e,!0),r+=4},a=e=>{n.setUint16(r,e,!0),r+=2},o=e=>{for(let t=0;t<e.length;t++)n.setUint8(r++,e.charCodeAt(t))};o(`RIFF`),i(1636),o(`WAVE`),o(`fmt `),i(16),a(1),a(1),i(e),i(e*2),a(2),a(16),o(`data`),i(1600);let s=new Blob([t],{type:`audio/wav`});return URL.createObjectURL(s)}var ed=0,td=[],nd={init(){if(Qu.initCalled=!0,Yu){X&&X.state===`suspended`&&X.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;X=new e,Qu.ctxConstructed=!0,Qu.ctxStateAfterConstruct=X.state,Qu.resumeCalled=!0;try{let e=X.resume();e&&typeof e.then==`function`?e.then(()=>{Qu.ctxStateAfterResume=X.state}).catch(e=>{Qu.resumeError=String(e)}):Qu.ctxStateAfterResume=X.state}catch(e){Qu.resumeError=String(e)}try{let e=X.createBuffer(1,1,22050),t=X.createBufferSource();t.buffer=e,t.connect(X.destination),t.start(0),Qu.webAudioBufferUnlocked=!0}catch{}try{Qu.htmlUnlockTried=!0,Zu=$u();let e=document.createElement(`audio`);e.setAttribute(`playsinline`,``),e.setAttribute(`webkit-playsinline`,``),e.preload=`auto`,e.loop=!0,e.muted=!1,e.volume=.001,e.src=Zu,e.style.position=`fixed`,e.style.top=`-9999px`,e.style.width=`1px`,e.style.height=`1px`,e.style.opacity=`0`,document.body.appendChild(e);let t=e.play();t&&typeof t.then==`function`?t.then(()=>{Qu.htmlUnlockPlayResolved=!0}).catch(e=>{Qu.htmlUnlockPlayRejected=String(e)}):Qu.htmlUnlockPlayResolved=!0,Xu=e}catch(e){Qu.htmlUnlockPlayRejected=String(e)}Ru=X.createGain(),Ru.gain.value=.55,Ru.connect(X.destination),zu=X.createGain(),zu.gain.value=1.2,Bu=X.createGain(),Bu.gain.value=1,zu.connect(Bu),Hu=X.createGain(),Hu.gain.value=1,Uu=X.createGain(),Uu.gain.value=0,Wu=X.createBiquadFilter(),Wu.type=`lowpass`,Wu.frequency.value=18e3,Wu.Q.value=1,Gu=X.createDelay(1),Gu.delayTime.value=.28,Ku=X.createGain(),Ku.gain.value=0,Bu.connect(Hu),Hu.connect(Ru),Bu.connect(Wu),Wu.connect(Uu),Uu.connect(Ru),Wu.connect(Gu),Gu.connect(Ku),Ku.connect(Wu),qu=X.createGain(),qu.gain.value=1,qu.connect(Ru),Vu=X.createGain(),Vu.gain.value=1,Vu.connect(Ru);try{let e=(e,t,n)=>{let r=localStorage.getItem(e);if(r===null)return null;let i=parseFloat(r);if(!Number.isFinite(i))return null;let a=i<.05?.05:i;return t.gain.value=a,{raw:r,applied:a}};Qu.restoredFromLocalStorage.master=e(`zerble.vol.master`,Ru),Qu.restoredFromLocalStorage.music=e(`zerble.vol.music`,zu),Qu.restoredFromLocalStorage.sfx=e(`zerble.vol.sfx`,qu),Qu.restoredFromLocalStorage.midi=e(`zerble.vol.midi`,Vu)}catch{}Ju=rd(X,qu),Yu=!0;try{let e=Math.max(1,Math.floor(X.sampleRate*.06)),t=X.createBuffer(1,e,X.sampleRate),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=(Math.random()*2-1)*.003;let r=X.createBufferSource();r.buffer=t,r.connect(zu),r.start(X.currentTime),Qu.musicChainPrimed=!0}catch(e){Qu.musicChainPrimed=String(e)}let t=td.splice(0);setTimeout(()=>{for(let e of t){if(e.handle.cancelled)continue;let t=vd(X,zu,e.x,e.y,e.z,e.seed,e.style);e.handle._adopt(t)}},80)},diagnostics(){return{...JSON.parse(JSON.stringify(Qu)),live:{initialized:Yu,ctxState:X?X.state:`no-ctx`,ctxSampleRate:X?X.sampleRate:null,ctxBaseLatency:X?X.baseLatency:null,masterGain:Ru?Ru.gain.value:null,musicBus:zu?zu.gain.value:null,sfxBus:qu?qu.gain.value:null,silentUnlockPaused:Xu?Xu.paused:null,silentUnlockCurrentTime:Xu?Xu.currentTime:null,silentUnlockReadyState:Xu?Xu.readyState:null}}},resume(){if(Yu&&X&&(X.state===`suspended`&&X.resume().catch(()=>{}),Xu&&Xu.paused)){let e=Xu.play();e&&typeof e.catch==`function`&&e.catch(()=>{})}},isReady(){return Yu},setNightness(e){ed=Math.max(0,Math.min(1,e))},setMusicTrip(e,t){if(!Uu||!Wu||!Ku||!Gu)return;let n=Math.max(0,Math.min(1,e||0)),r=Math.max(0,Math.min(1,t||0)),i=X.currentTime,a=n,o=1-n*.55;Uu.gain.setTargetAtTime(a,i,.05),Hu.gain.setTargetAtTime(o,i,.05);let s=.5+.5*Math.sin(r*Math.PI*2*1.5),c=18e3+-17300*n*(.55+.45*s);Wu.frequency.setTargetAtTime(c,i,.1);let l=n*(.35+.43*Math.exp(-(((r-1/3)/.18)**2)));Ku.gain.setTargetAtTime(Math.min(.78,l),i,.1);let u=.28+.08*Math.sin(r*Math.PI*2*.7);Gu.delayTime.setTargetAtTime(u,i,.1)},attachStageMusic(e,t,n,r,i=`jam`){if(!X){let a={_real:null,cancelled:!1,_pendingX:e,_pendingY:t,_pendingZ:n,_adopt(e){this._real=e,e&&e.setPosition&&e.setPosition(this._pendingX,this._pendingY,this._pendingZ)},setPosition(e,t,n){this._real&&this._real.setPosition?this._real.setPosition(e,t,n):(this._pendingX=e,this._pendingY=t,this._pendingZ=n)},setLowpassCutoff(e){this._real&&this._real.setLowpassCutoff&&this._real.setLowpassCutoff(e)},stop(){this._real?this._real.stop():this.cancelled=!0}};return td.push({x:e,y:t,z:n,seed:r,style:i,handle:a}),a}return vd(X,zu,e,t,n,r,i)},detachStageMusic(e){e&&e.stop()},updateAudioListener(e,t,n,r,i,a){if(!X)return;let o=X.listener;o.positionX?(o.positionX.value=e,o.positionY.value=t,o.positionZ.value=n,o.forwardX.value=r,o.forwardY.value=i,o.forwardZ.value=a,o.upX.value=0,o.upY.value=1,o.upZ.value=0):o.setPosition&&(o.setPosition(e,t,n),o.setOrientation(r,i,a,0,1,0))},setEngineSpeed(e,t=0){Ju&&Ju.update(Math.abs(e),t)},playCollision(e){X&&(Dd[e]||Dd.default)(X,qu)},playHonk(){X&&fd(X,qu)},playBicycleBell(){X&&hd(X,qu)},playClownHorn(){X&&pd(X,qu)},playSoftBump(){X&&od(X,qu,110,.12,.18)},getContext(){return X},getMidiInputNode(){return Vu},setMasterVolume(e){Ru&&(Ru.gain.value=e),this._saveVolumes()},setMusicVolume(e){zu&&(zu.gain.value=e),this._saveVolumes()},setSfxVolume(e){qu&&(qu.gain.value=e),this._saveVolumes()},setMidiVolume(e){Vu&&(Vu.gain.value=e),this._saveVolumes()},setMusicDuck(e){if(!Bu||!X)return;let t=X.currentTime;Bu.gain.cancelScheduledValues(t),Bu.gain.setValueAtTime(Bu.gain.value,t),Bu.gain.linearRampToValueAtTime(e,t+.4)},getMasterVolume(){return Ru?Ru.gain.value:.55},getMusicVolume(){return zu?zu.gain.value:1.6},getSfxVolume(){return qu?qu.gain.value:1},getMidiVolume(){return Vu?Vu.gain.value:1},_saveVolumes(){try{localStorage.setItem(`zerble.vol.master`,String(Ru?Ru.gain.value:.55)),localStorage.setItem(`zerble.vol.music`,String(zu?zu.gain.value:1.6)),localStorage.setItem(`zerble.vol.sfx`,String(qu?qu.gain.value:1)),localStorage.setItem(`zerble.vol.midi`,String(Vu?Vu.gain.value:1))}catch{}}};function rd(e,t){let n=e.createOscillator();n.type=`sawtooth`,n.frequency.value=55;let r=e.createOscillator();r.type=`sawtooth`,r.frequency.value=82;let i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.value=420,i.Q.value=1.5,n.connect(i),r.connect(i);let a=e.createWaveShaper();a.curve=id(8,2048),a.oversample=`2x`,i.connect(a);let o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=280,o.Q.value=1.4,a.connect(o);let s=2*e.sampleRate,c=e.createBuffer(1,s,e.sampleRate),l=c.getChannelData(0);for(let e=0;e<s;e++)l[e]=(Math.random()*2-1)*.9;let u=e.createBufferSource();u.buffer=c,u.loop=!0;let d=e.createBiquadFilter();d.type=`bandpass`,d.frequency.value=200,d.Q.value=.8,u.connect(d);let f=e.createGain();f.gain.value=.65,d.connect(f);let p=e.createGain();p.gain.value=0,o.connect(p),f.connect(p),p.connect(t),n.start(),r.start(),u.start();let m=0,h=e.currentTime,g=0,_=e.currentTime+2+Math.random()*2,v=0,y=0;return{update(t,a=0){let s=e.currentTime,c=Math.min(.1,s-h);h=s,y+=(a-y)*Math.min(1,c*6);let l=Math.min(1,t/18),u=Math.min(1,l+y*.3),d=4+u*14+Math.sin(m*.31)*1.2;m+=d*c;let f=Math.sin(m),b=(f>0?f**2:f*.15)*.4+.55;s>_&&(_=s+1.5+Math.random()*3.5,u>.1&&Math.random()<.6&&(g=s+.07+Math.random()*.12));let x=s<g?.2:1,S=u*.24*b*x*(1+y*.2);p.gain.setTargetAtTime(S,s,.04),v+=c*(1.8+u*1.5);let C=Math.sin(v)*(.04+u*.05),w=48+y*10,T=(w+(145+y*40-w)*u)*(1+C);n.frequency.setTargetAtTime(T,s,.07),r.frequency.setTargetAtTime(T*1.5,s,.07);let E=320+u*700;i.frequency.setTargetAtTime(E,s,.1),o.frequency.setTargetAtTime(230+u*280,s,.1)}}}function id(e,t){let n=new Float32Array(t);for(let r=0;r<t;r++){let i=r/(t-1)*2-1;n[r]=Math.tanh(i*e)/Math.tanh(e)}return n}function ad(e,t,n,r,i){let a=e.createGain(),o=e.currentTime;return a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(Math.max(1e-4,i),o+n),a.gain.exponentialRampToValueAtTime(1e-4,o+n+r),a.connect(t),a}function od(e,t,n,r,i=.5){let a=ad(e,t,.005,r,i),o=e.createOscillator();o.type=`sine`;let s=e.currentTime;o.frequency.setValueAtTime(n*2.2,s),o.frequency.exponentialRampToValueAtTime(Math.max(20,n),s+r),o.connect(a),o.start(),o.stop(s+r+.05)}function sd(e,t,n,r,i,a=.4,o=`sine`){let s=ad(e,t,.005,i,a),c=e.createOscillator();c.type=o;let l=e.currentTime;c.frequency.setValueAtTime(n,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),l+i),c.connect(s),c.start(),c.stop(l+i+.05)}function cd(e,t){let n=e.currentTime,r=ad(e,t,.001,.25,.35),i=e.createOscillator();i.type=`square`,i.frequency.setValueAtTime(1900,n),i.frequency.exponentialRampToValueAtTime(900,n+.25),i.connect(r),i.start(),i.stop(n+.3);let a=ad(e,t,.001,.32,.18),o=e.createOscillator();o.type=`triangle`,o.frequency.setValueAtTime(1200,n),o.frequency.exponentialRampToValueAtTime(500,n+.3),o.connect(a),o.start(),o.stop(n+.35)}function ld(e,t){let n=e.currentTime,r=ad(e,t,.02,.45,.4),i=e.createOscillator();i.type=`sawtooth`,i.frequency.setValueAtTime(220,n),i.frequency.linearRampToValueAtTime(170,n+.45);let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(2e3,n),a.frequency.linearRampToValueAtTime(700,n+.3),i.connect(a).connect(r),i.start(),i.stop(n+.5)}function ud(e,t){let n=e.currentTime,r=ad(e,t,.001,.12,.45),i=e.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime(450,n),i.frequency.exponentialRampToValueAtTime(170,n+.12),i.connect(r),i.start(),i.stop(n+.15)}function dd(e,t){let n=e.currentTime,r=ad(e,t,.06,.75,.4),i=e.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(160,n),i.frequency.linearRampToValueAtTime(120,n+.4),i.frequency.linearRampToValueAtTime(135,n+.75),i.connect(r),i.start(),i.stop(n+.85);let a=ad(e,t,.06,.75,.18),o=e.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(320,n),o.frequency.linearRampToValueAtTime(240,n+.4);let s=e.createBiquadFilter();s.type=`lowpass`,s.frequency.value=520,o.connect(s).connect(a),o.start(),o.stop(n+.85)}function fd(e,t){Math.random()<.5?pd(e,t):hd(e,t)}function pd(e,t){let n=e.currentTime,r=.22,i=.05,a=.16,o=.48000000000000004;function s(n,r,i){let a=.005,o=Math.max(1,Math.floor(e.sampleRate*.025)),s=e.createBuffer(1,o,e.sampleRate),c=s.getChannelData(0);for(let e=0;e<o;e++)c[e]=Math.random()*2-1;let l=e.createBufferSource();l.buffer=s;let u=e.createBiquadFilter();u.type=`highpass`,u.frequency.value=i,u.Q.value=.8;let d=e.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(r,n+.001),d.gain.exponentialRampToValueAtTime(1e-4,n+a),l.connect(u).connect(d).connect(t),l.start(n),l.stop(n+a+.01)}s(n,.45,2200),s(n+r+i,.18,3e3);let c=e.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.32,n+.025),c.gain.setValueAtTime(.32,n+r-.015),c.gain.exponentialRampToValueAtTime(1e-4,n+r);let l=n+r+i;c.gain.exponentialRampToValueAtTime(.2,l+.02),c.gain.setValueAtTime(.2,l+a-.04),c.gain.exponentialRampToValueAtTime(1e-4,l+a),c.connect(t);let u=e.createOscillator();u.type=`sawtooth`,u.frequency.setValueAtTime(260,n),u.frequency.setValueAtTime(390,l);let d=e.createOscillator();d.type=`triangle`,d.frequency.setValueAtTime(130,n),d.frequency.setValueAtTime(195,l);let f=e.createBiquadFilter();f.type=`bandpass`,f.frequency.value=750,f.Q.value=1.2;let p=e.createWaveShaper();p.curve=md(2.4,1024),p.oversample=`2x`,u.connect(p),d.connect(p),p.connect(f),f.connect(c),u.start(),d.start(),u.stop(n+o),d.stop(n+o)}function md(e,t){let n=new Float32Array(t);for(let r=0;r<t;r++){let i=r/(t-1)*2-1;n[r]=Math.tanh(i*e+.18*i*i)/Math.tanh(e+.18)}return n}function hd(e,t){let n=e.currentTime;gd(e,t,n,.55),gd(e,t,n+.32,.42)}function gd(e,t,n,r){for(let i=0;i<6;i++){let a=i===0?r:r*(1-i*.13),o=.1-i*.012;_d(e,t,n+i*.032,2400,a,Math.max(.04,o))}}function _d(e,t,n,r,i,a){let o=e.createOscillator();o.type=`sine`,o.frequency.value=r;let s=e.createOscillator();s.type=`sine`,s.frequency.value=r*1.4142;let c=e.createGain();c.gain.setValueAtTime(r*.28,n),c.gain.exponentialRampToValueAtTime(r*.1,n+.4),s.connect(c).connect(o.frequency);let l=e.createBiquadFilter();l.type=`highpass`,l.frequency.value=1200,l.Q.value=.6;let u=e.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(i,n+.002),u.gain.exponentialRampToValueAtTime(a,n+.025),u.gain.exponentialRampToValueAtTime(1e-4,n+.65),o.connect(l).connect(u).connect(t),o.start(n),s.start(n),o.stop(n+.7),s.stop(n+.7)}function vd(e,t,n,r,i,a,o=`jam`){let s=yd(e,t,n,r,i),c;switch(o){case`brass`:c=Cd(e,s,a);break;case`drum`:c=Td(e,s,a);break;case`forest_drum`:c=Ed(e,s,a);break;case`second_line`:c=wd(e,s,a);break;default:c=Sd(e,s,a)}return c.setPosition=(t,n,r)=>{s.positionX?(s.positionX.setTargetAtTime(t,e.currentTime,.02),s.positionY.setTargetAtTime(n,e.currentTime,.02),s.positionZ.setTargetAtTime(r,e.currentTime,.02)):s.setPosition&&s.setPosition(t,n,r)},typeof c.setLowpassCutoff!=`function`&&(c.setLowpassCutoff=()=>{}),c}function yd(e,t,n,r,i){let a=e.createPanner();return a.panningModel=`HRTF`,a.distanceModel=`inverse`,a.refDistance=14,a.maxDistance=140,a.rolloffFactor=1.1,a.positionX?(a.positionX.value=n,a.positionY.value=r,a.positionZ.value=i):a.setPosition&&a.setPosition(n,r,i),a.connect(t),a}var bd=[1,9/8,5/4,3/2,5/3,2,9/4],xd=[1,9/8,5/4,4/3,3/2,5/3,16/9,2];function Sd(e,t,n){let r=Iu(n>>>0),i=174*2**(Math.floor(r()*12)/12),a=60/(86+Math.floor(r()*18)),o=Array.from({length:3},()=>Array(16).fill(0).map(()=>i*bd[Math.floor(r()*bd.length)])),s=Array.from({length:2},()=>Array(8).fill(0).map(()=>i*.5*bd[Math.floor(r()*4)])),c=e.createOscillator();c.type=`triangle`;let l=e.createGain();l.gain.value=0,c.connect(l).connect(t),c.start();let u=e.createOscillator();u.type=`sine`;let d=e.createGain();d.gain.value=0,u.connect(d).connect(t),u.start();let f=e.createOscillator();f.type=`sawtooth`;let p=e.createBiquadFilter();p.type=`lowpass`,p.frequency.value=380;let m=e.createGain();m.gain.value=0,f.connect(p).connect(m).connect(t),f.start();let h=e.createOscillator();h.type=`sine`;let g=e.createGain();g.gain.value=0,h.connect(g).connect(t),h.start();let _=e.currentTime+.15,v=0;function y(){let t=e.currentTime+.6;for(;_<t;){let e=_,t=Math.floor(v/32),n=o[t%3],r=s[t%2],i=n[v%n.length],p=1+.3*Math.sin(e/28*2*Math.PI);if(Math.random()>=.1&&(c.frequency.setValueAtTime(i,e),l.gain.cancelScheduledValues(e),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.24*p,e+.015),l.gain.exponentialRampToValueAtTime(1e-4,e+a*.85)),v%4==0&&(u.frequency.setValueAtTime(i*2,e),d.gain.cancelScheduledValues(e),d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(.08*p,e+.02),d.gain.exponentialRampToValueAtTime(1e-4,e+a*1.7)),v%2==0){let t=r[Math.floor(v/2)%r.length];f.frequency.setValueAtTime(t,e),m.gain.cancelScheduledValues(e),m.gain.setValueAtTime(1e-4,e),m.gain.exponentialRampToValueAtTime(.3*p,e+.02),m.gain.exponentialRampToValueAtTime(1e-4,e+a*1.8)}h.frequency.setValueAtTime(110,e),h.frequency.exponentialRampToValueAtTime(40,e+.08),g.gain.cancelScheduledValues(e),g.gain.setValueAtTime(1e-4,e),g.gain.exponentialRampToValueAtTime(.5*p,e+.005),g.gain.exponentialRampToValueAtTime(1e-4,e+.18),_+=a,v++}}y();let b=setInterval(y,200);return{panner:t,stop(){clearInterval(b);try{c.stop()}catch{}try{u.stop()}catch{}try{f.stop()}catch{}try{h.stop()}catch{}try{t.disconnect()}catch{}}}}function Cd(e,t,n){let r=Iu(n>>>0),i=233*2**(Math.floor(r()*12)/12),a=60/(116+Math.floor(r()*24)),o=Array.from({length:3},()=>Array(8).fill(0).map(()=>i*xd[Math.floor(r()*xd.length)])),s=Array.from({length:2},()=>[,,,,].fill(0).map(()=>i*.5*xd[Math.floor(r()*4)])),c=e.createOscillator();c.type=`sawtooth`;let l=e.createOscillator();l.type=`square`;let u=e.createGain();u.gain.value=0;let d=e.createBiquadFilter();d.type=`bandpass`,d.frequency.value=1400,d.Q.value=1.6,c.connect(u),l.connect(u),u.connect(d).connect(t),c.start(),l.start();let f=e.createOscillator();f.type=`square`;let p=e.createBiquadFilter();p.type=`lowpass`,p.frequency.value=320;let m=e.createGain();m.gain.value=0,f.connect(p).connect(m).connect(t),f.start();let h=e.currentTime+.15,g=0;function _(){let t=e.currentTime+.6;for(;h<t;){let e=h,t=Math.floor(g/16),n=o[t%3],r=s[t%2],i=n[g%n.length],d=1+.25*Math.sin(e/22*2*Math.PI);if(Math.random()>=.12&&(c.frequency.setValueAtTime(i*1.004,e),l.frequency.setValueAtTime(i*.996,e),u.gain.cancelScheduledValues(e),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(.2*d,e+.012),u.gain.exponentialRampToValueAtTime(1e-4,e+a*.55)),g%2==0){let t=r[Math.floor(g/2)%r.length];f.frequency.setValueAtTime(t,e),m.gain.cancelScheduledValues(e),m.gain.setValueAtTime(1e-4,e),m.gain.exponentialRampToValueAtTime(.32*d,e+.025),m.gain.exponentialRampToValueAtTime(1e-4,e+a*1.4)}h+=a,g++}}_();let v=setInterval(_,200);return{panner:t,stop(){clearInterval(v);try{c.stop()}catch{}try{l.stop()}catch{}try{f.stop()}catch{}try{t.disconnect()}catch{}}}}function wd(e,t,n){let r=Iu(n>>>0),i=220*2**(Math.floor(r()*7-3)/12),a=60/(102+Math.floor(r()*14)),o=a/4,s=e.createOscillator();s.type=`sawtooth`;let c=e.createOscillator();c.type=`square`;let l=e.createGain();l.gain.value=0;let u=e.createBiquadFilter();u.type=`bandpass`,u.frequency.value=1500,u.Q.value=1.5,s.connect(l),c.connect(l),l.connect(u).connect(t),s.start(),c.start();let d=e.createOscillator();d.type=`sawtooth`;let f=e.createGain();f.gain.value=0;let p=e.createBiquadFilter();p.type=`bandpass`,p.frequency.value=900,p.Q.value=1.2,d.connect(f).connect(p).connect(t),d.start();let m=e.createOscillator();m.type=`square`;let h=e.createBiquadFilter();h.type=`lowpass`,h.frequency.value=280;let g=e.createGain();g.gain.value=0,m.connect(h).connect(g).connect(t),m.start();let _=e.createOscillator();_.type=`sine`;let v=e.createGain();v.gain.value=0,_.connect(v).connect(t),_.start();let y=e.createBuffer(1,e.sampleRate*.5,e.sampleRate),b=y.getChannelData(0);for(let e=0;e<b.length;e++)b[e]=Math.random()*2-1;let x=e.createBufferSource();x.buffer=y,x.loop=!0;let S=e.createBiquadFilter();S.type=`bandpass`,S.frequency.value=1800,S.Q.value=1.6;let C=e.createGain();C.gain.value=0,x.connect(S).connect(C).connect(t),x.start();let w=[0,8],T=[{tick:4,vol:.3},{tick:6,vol:.1},{tick:7,vol:.2},{tick:12,vol:.3},{tick:13,vol:.12},{tick:14,vol:.18},{tick:15,vol:.22}],E=xd,D=[[1,1,1.5,1.5,16/9,16/9,4/3,4/3],[1,1,4/3,4/3,3/2,3/2,1,1],[1,5/4,3/2,5/4,1,4/3,3/2,4/3]],O=[[4,-1,5,4,-1,2,-1,1,4,5,6,5,4,2,1,-1],[6,-1,5,-1,4,-1,5,4,2,1,-1,2,4,-1,5,-1],[1,2,4,5,-1,6,5,4,-1,5,4,2,1,-1,-1,-1]],k=[[-1,-1,1,-1,-1,2,-1,-1,-1,-1,4,-1,2,1,-1,-1],[-1,-1,-1,4,-1,-1,2,-1,-1,-1,-1,5,-1,-1,4,-1],[-1,1,-1,-1,4,-1,-1,2,-1,1,-1,-1,5,-1,-1,4]],A=e.currentTime+.15,j=0;function M(){let t=e.currentTime+.6;for(;A<t;){let e=A,t=j%16,n=Math.floor(j/32),r=D[n%D.length],u=O[n%O.length],p=k[n%k.length],h=1+.2*Math.sin(e/20*2*Math.PI);w.includes(t)&&(_.frequency.setValueAtTime(105,e),_.frequency.exponentialRampToValueAtTime(45,e+.1),v.gain.cancelScheduledValues(e),v.gain.setValueAtTime(1e-4,e),v.gain.exponentialRampToValueAtTime(.42*h,e+.005),v.gain.exponentialRampToValueAtTime(1e-4,e+.2));for(let n of T)n.tick===t&&(C.gain.cancelScheduledValues(e),C.gain.setValueAtTime(1e-4,e),C.gain.exponentialRampToValueAtTime(n.vol*h,e+.002),C.gain.exponentialRampToValueAtTime(1e-4,e+.08));if(t%2==0){let n=r[t/2%r.length];m.frequency.setValueAtTime(i*.5*n,e),g.gain.cancelScheduledValues(e),g.gain.setValueAtTime(1e-4,e),g.gain.exponentialRampToValueAtTime(.3*h,e+.02),g.gain.exponentialRampToValueAtTime(1e-4,e+a*.55)}let y=u[t];if(y>=0&&Math.random()>=.08){let t=i*E[y%E.length];s.frequency.setValueAtTime(t*1.004,e),c.frequency.setValueAtTime(t*.996,e),l.gain.cancelScheduledValues(e),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.18*h,e+.015),l.gain.exponentialRampToValueAtTime(1e-4,e+o*2.6)}let b=p[t];if(b>=0){let t=i*.5*E[b%E.length];d.frequency.setValueAtTime(t,e),f.gain.cancelScheduledValues(e),f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(.14*h,e+.02),f.gain.exponentialRampToValueAtTime(1e-4,e+o*3)}A+=o,j++}}M();let N=setInterval(M,160);return{panner:t,stop(){clearInterval(N);try{s.stop()}catch{}try{c.stop()}catch{}try{d.stop()}catch{}try{m.stop()}catch{}try{_.stop()}catch{}try{x.stop()}catch{}try{t.disconnect()}catch{}}}}function Td(e,t,n){let r=Iu(n>>>0),i=60/(70+Math.floor(r()*22))/3,a=150+Math.floor(r()*40),o=88+Math.floor(r()*22),s=[[!0,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1],[!0,!1,!1,!0,!1,!1,!0,!1,!1,!1,!0,!1],[!1,!1,!0,!1,!0,!1,!1,!0,!1,!0,!1,!1]],c=[[!0,!1,!1,!0,!1,!1,!0,!1,!1,!0,!1,!1],[!0,!1,!0,!1,!1,!0,!1,!0,!1,!1,!0,!1],[!0,!0,!1,!1,!0,!1,!0,!1,!0,!1,!1,!0]],l=.06,u=e.createOscillator();u.type=`sine`;let d=e.createGain();d.gain.value=0,u.connect(d).connect(t),u.start();let f=e.createOscillator();f.type=`sine`;let p=e.createGain();p.gain.value=0,f.connect(p).connect(t),f.start();let m=e.createOscillator();m.type=`sine`;let h=e.createGain();h.gain.value=0,m.connect(h).connect(t),m.start();let g=e.currentTime+.15,_=0;function v(){let t=e.currentTime+.6;for(;g<t;){let e=g,t=_%12,n=Math.floor(_/48),r=s[n%s.length],v=c[n%c.length],y=1+.2*Math.sin(e/26*2*Math.PI);(t===0||t===6)&&(u.frequency.setValueAtTime(95,e),u.frequency.exponentialRampToValueAtTime(45,e+.1),d.gain.cancelScheduledValues(e),d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(.48*y,e+.005),d.gain.exponentialRampToValueAtTime(1e-4,e+.2)),r[t]&&Math.random()>=l&&(f.frequency.setValueAtTime(a*1.2,e),f.frequency.exponentialRampToValueAtTime(a,e+.06),p.gain.cancelScheduledValues(e),p.gain.setValueAtTime(1e-4,e),p.gain.exponentialRampToValueAtTime(.34*y,e+.005),p.gain.exponentialRampToValueAtTime(1e-4,e+.16)),v[t]&&Math.random()>=l&&(m.frequency.setValueAtTime(o*1.2,e),m.frequency.exponentialRampToValueAtTime(o,e+.07),h.gain.cancelScheduledValues(e),h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(.3*y,e+.005),h.gain.exponentialRampToValueAtTime(1e-4,e+.18)),g+=i,_++}}v();let y=setInterval(v,180);return{panner:t,stop(){clearInterval(y);try{u.stop()}catch{}try{f.stop()}catch{}try{m.stop()}catch{}try{t.disconnect()}catch{}}}}function Ed(e,t,n){let r=Iu(n>>>0),i=60/(72+Math.floor(r()*16))*4/12,a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=14e3,a.Q.value=.5,a.connect(t);let o=a;function s(e,t,n=0){let r=Array(t).fill(!1);for(let n=0;n<e;n++)r[Math.floor(n*t/e)]=!0;if(!n)return r;let i=Array(t);for(let e=0;e<t;e++)i[e]=r[((e-n)%t+t)%t];return i}let c=[{name:`kick`,pattern:s(2,12),kind:`kick`,baseGain:.5,miss:0,ghost:0,threshold:0},{name:`tom1`,pattern:s(3,12),kind:`tom1`,baseGain:.36,miss:0,ghost:0,threshold:0},{name:`tom2`,pattern:s(4,12),kind:`tom2`,baseGain:.3,miss:0,ghost:0,threshold:0},{name:`slap`,pattern:s(5,12,1),kind:`slap`,baseGain:.3,miss:.1,ghost:.15,threshold:.2},{name:`tone`,pattern:s(7,12,2),kind:`tone`,baseGain:.22,miss:.15,ghost:.2,threshold:.3},{name:`bell`,pattern:s(3,12,5),kind:`bell`,baseGain:.18,miss:.2,ghost:.1,threshold:.4},{name:`shak`,pattern:s(8,12),kind:`shak`,baseGain:.14,miss:.15,ghost:0,threshold:.5}],l={};function u(t,n,r=`sine`){if(l[t])return l[t];let i=e.createOscillator();i.type=r,i.frequency.value=n;let a=e.createGain();return a.gain.value=0,i.connect(a).connect(o),i.start(),l[t]={osc:i,gain:a},l[t]}u(`kick`,95),u(`tom1`,150+Math.floor(r()*40)),u(`tom2`,88+Math.floor(r()*22)),u(`tone`,200+Math.floor(r()*30));function d(e,t,n){n.osc.frequency.setValueAtTime(95,e),n.osc.frequency.exponentialRampToValueAtTime(45,e+.1),n.gain.gain.cancelScheduledValues(e),n.gain.gain.setValueAtTime(1e-4,e),n.gain.gain.exponentialRampToValueAtTime(t,e+.005),n.gain.gain.exponentialRampToValueAtTime(1e-4,e+.2)}function f(e,t,n,r,i,a,o){n.osc.frequency.setValueAtTime(r,e),n.osc.frequency.exponentialRampToValueAtTime(i,e+a),n.gain.gain.cancelScheduledValues(e),n.gain.gain.setValueAtTime(1e-4,e),n.gain.gain.exponentialRampToValueAtTime(t,e+.005),n.gain.gain.exponentialRampToValueAtTime(1e-4,e+o)}function p(t,n,r,i,a,s=`highpass`){let c=Math.max(64,Math.ceil(e.sampleRate*a)),l=e.createBuffer(1,c,e.sampleRate),u=l.getChannelData(0);for(let e=0;e<c;e++)u[e]=Math.random()*2-1;let d=e.createBufferSource();d.buffer=l;let f=e.createBiquadFilter();f.type=s,f.frequency.value=r,i!=null&&(f.Q.value=i);let p=e.createGain();p.gain.setValueAtTime(1e-4,t),p.gain.exponentialRampToValueAtTime(n,t+.003),p.gain.exponentialRampToValueAtTime(1e-4,t+a),d.connect(f).connect(p).connect(o),d.start(t),d.stop(t+a+.02)}function m(t,n,r,i){let a=e.createOscillator();a.type=`triangle`,a.frequency.value=r;let s=e.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(n*.45,t+.002),s.gain.exponentialRampToValueAtTime(1e-4,t+i),a.connect(s).connect(o),a.start(t),a.stop(t+i+.02)}let h=e.currentTime+.2,g=0;function _(){let t=e.currentTime+.6;for(;h<t;){let e=g%12,t=ed;for(let n=0;n<c.length;n++){let i=c[n];if(!i.pattern[e]||t<i.threshold||i.miss>0&&Math.random()<i.miss)continue;let a=Math.random()<i.ghost?.18:.55+Math.random()*.45,o=Math.max(0,Math.min(1,(t-i.threshold)/.15)),s=.45+.55*t,u=i.baseGain*o*a*s;if(u<.001)continue;let g=h+(Math.random()-.5)*.01;switch(i.kind){case`kick`:d(g,u,l.kick);break;case`tom1`:f(g,u,l.tom1,l.tom1.osc.frequency.value*1.2,150,.06,.16);break;case`tom2`:f(g,u,l.tom2,l.tom2.osc.frequency.value*1.2,90,.07,.18);break;case`tone`:f(g,u,l.tone,230,200,.05,.13);break;case`slap`:p(g,u,2400,null,.07,`highpass`);break;case`bell`:m(g,u,600+r()*80,.18);break;case`shak`:p(g,u*.6,5200,null,.04,`highpass`)}}h+=i,g++}}_();let v=setInterval(_,180),y=e.currentTime+.8;function b(){let t=ed;if(t<.3)y=e.currentTime+.4;else for(;y<e.currentTime+.6;){let e=.04+Math.random()*.08,n=(.08+(t-.3)*.1)*(.6+Math.random()*.4);p(y,n,600+Math.random()*1400,1.5,e,`bandpass`),y+=.4+Math.random()*.8}}let x=setInterval(b,220);return{panner:t,setLowpassCutoff(t){let n=Math.max(120,Math.min(2e4,t));a.frequency.setTargetAtTime(n,e.currentTime,.2)},stop(){clearInterval(v),clearInterval(x);for(let e in l)try{l[e].osc.stop()}catch{}try{a.disconnect()}catch{}try{t.disconnect()}catch{}}}}var Dd={puppet:(e,t)=>sd(e,t,240,540,.2,.4,`sine`),brass:(e,t)=>ld(e,t),truck:(e,t)=>{od(e,t,55,.4,.6),cd(e,t)},tent:(e,t)=>od(e,t,95,.22,.35),kid:(e,t)=>sd(e,t,720,1150,.13,.35,`sine`),wook:(e,t)=>dd(e,t),stage:(e,t)=>{od(e,t,52,.55,.62),ud(e,t)},stage_front:(e,t)=>od(e,t,75,.4,.45),arch:(e,t)=>ud(e,t),lamppost:(e,t)=>cd(e,t),drum_circle:(e,t)=>{od(e,t,70,.4,.55),od(e,t,110,.25,.3)},forest_tree:(e,t)=>{od(e,t,65,.45,.55),ud(e,t)},firepit:(e,t)=>{od(e,t,50,.5,.55),od(e,t,75,.3,.4)},bench_ring:(e,t)=>ud(e,t),default:(e,t)=>od(e,t,180,.2,.3)},Od=[],kd=new z,Ad=8,jd=2025,Md=[];function Nd(e){Od.push(e)}function Pd(e){for(let e=Od.length-1;e>=0;e--)Od[e].parent||Od.splice(e,1);Md.length=0;for(let t of Od){t.getWorldPosition(kd);let n=kd.x-e.x,r=kd.y-e.y,i=kd.z-e.z,a=n*n+r*r+i*i;a>jd?t.visible=!1:Md.push({light:t,d2:a})}Md.sort((e,t)=>e.d2-t.d2);for(let e=0;e<Md.length;e++)Md[e].light.visible=e<Ad}function Fd(e,t=Math.random){let n=new J({color:9132587,roughness:.95,flatShading:!0}),r=new J({color:13936756,roughness:.95,flatShading:!0}),i=new H(new U(.95,.4,4),n);i.position.y=.2,i.castShadow=!0,i.receiveShadow=!0,e.add(i);for(let t of[-2,2]){let r=new H(new hs(.48,1,6),n);r.rotation.x=t<0?-Math.PI/2:Math.PI/2,r.position.set(0,.2,t),e.add(r)}let a=new H(new U(.7,.05,3.6),r);a.position.y=.4,e.add(a);for(let t of[-.7,.7]){let n=new H(new U(.85,.06,.18),r);n.position.set(0,.5,t),e.add(n)}let o=[6740479,16740252,16765578,7327594,11699711,16747099],s=[-.7,.7],c=t()<.55;for(let n of s){if(n>0&&!c)continue;let r=o[Math.floor(t()*o.length)],i=new H(new ps(.18,.55,4,6),new J({color:r,roughness:.85,flatShading:!0}));i.position.set(0,.85,n),i.castShadow=!0,e.add(i);let a=new H(new q(.2,1),new J({color:15122584,roughness:.9,flatShading:!0}));a.position.set(0,1.3,n),e.add(a);let s=n<0?-1:1,l=new G,u=new H(new K(.03,.03,1.4,6),new J({color:6965802,roughness:.95,flatShading:!0}));l.add(u);let d=new H(new U(.28,.04,.45),new J({color:9137991,roughness:.95,flatShading:!0}));d.position.y=-.75,l.add(d),l.position.set(s*.55,.85,n),l.rotation.z=s*-.6,e.add(l)}}var Id=[2972218,12733226,2903413,14264372,6962026,9058858],Ld=[12864074,3899326,5217359,13943159,12086215,4475733],Rd=[14183226,3834560,5153114,13056092],zd=[[12728906,15911290],[4874183,15895098],[7092874,16113832],[3504698,14262346],[12601461,3829909]],Bd=new Map;function Vd(e,t={}){let n=`${e.toString(16)}|${t.emissive||0}|${t.roughness||.95}`,r=Bd.get(n);return r||(r=new J({color:e,roughness:t.roughness??.95,emissive:t.emissive||0,emissiveIntensity:t.emissiveIntensity??0,flatShading:!0,side:t.side??0}),r.userData.shared=!0,Bd.set(n,r)),r}Vd(6965802);var Hd=Vd(4861724),Ud=Vd(5914404);Vd(15130568);function Wd(e=Math.random){let t=new G,n=Id[Math.floor(e()*Id.length)],r=Vd(n),i=2.2,a=1.7,o=2.5,s=[],c=[];s.push(0,a,o/2),s.push(0,a,-2.5/2),s.push(-2.2/2,0,o/2),s.push(i/2,0,o/2),s.push(-2.2/2,0,-2.5/2),s.push(i/2,0,-2.5/2),c.push(0,1,4,0,4,2),c.push(0,3,1,1,3,5),c.push(0,2,3),c.push(1,5,4),c.push(2,4,3,3,4,5);let l=new Dn;l.setAttribute(`position`,new V(s,3)),l.setIndex(c),l.computeVertexNormals();let u=new H(l,r);if(u.castShadow=!0,u.receiveShadow=!0,t.add(u),e()<.55){let e=[0,a,o/2,-2.2/3,0,1.95,i/3,0,1.95],n=new Dn;n.setAttribute(`position`,new V(e,3)),n.setIndex([0,1,2,0,2,1]),n.computeVertexNormals();let s=new H(n,r);t.add(s)}return{group:t,color:n,footprint:1.8}}var Gd=new K(.025,.025,.7,6),Kd=new K(.022,.022,.4,6),qd=new U(.55,.04,.45),Jd=new U(.55,.45,.04);for(let e of[Gd,Kd,qd,Jd])e.userData.shared=!0;function Yd(e=Math.random){let t=new G,n=Ld[Math.floor(e()*Ld.length)],r=Vd(n),i=Vd(2237990,{roughness:.5});for(let e=0;e<4;e++){let n=new H(Gd,i),r=e%2==0?-1:1,a=e<2?-1:1;n.position.set(r*.2,.35,a*.18),n.rotation.z=r*.2,n.rotation.x=a*.18,t.add(n)}let a=new H(qd,r);a.position.set(0,.45,0),t.add(a);let o=new H(Jd,r);o.position.set(0,.7,-.22),o.rotation.x=-.12,t.add(o);for(let e of[-1,1]){let n=new H(Kd,i);n.position.set(e*.28,.55,-.05),n.rotation.x=Math.PI/2,t.add(n)}return{group:t,color:n,footprint:.5}}function Xd(e=Math.random){let t=new G,n=new J({color:16742195,emissive:16733457,emissiveIntensity:1.5,roughness:.7,flatShading:!0}),r=e()*Math.PI*2;if(e()<.5){let e=Vd(6961702),i=new H(new ac(.38,12,10),e);i.scale.set(1,.85,1),i.position.y=.38,t.add(i);let a=new H(new K(.1,.22,.55,8),e);a.position.y=.85,t.add(a);let o=new H(new ms(.13,12),n);o.position.set(0,.36,.36),t.add(o);for(let e=0;e<3;e++){let n=e/3*Math.PI*2,r=new H(new K(.04,.04,.15,6),Hd);r.position.set(Math.cos(n)*.18,.075,Math.sin(n)*.18),t.add(r)}return{group:t,kind:`chiminea`,emberMat:n,phase:r,footprint:.7}}let i=Vd(8025989,{roughness:1}),a=.55;for(let n=0;n<8;n++){let r=n/8*Math.PI*2,o=new H(new q(.18+e()*.08,0),i);o.position.set(Math.cos(r)*a,.13,Math.sin(r)*a),o.rotation.y=e()*Math.PI*2,t.add(o)}let o=Vd(2759184,{roughness:1});for(let e=0;e<3;e++){let n=e*2.1+.3,r=new H(new K(.06,.06,.45,6),o);r.position.set(Math.cos(n)*.15,.07,Math.sin(n)*.15),r.rotation.z=Math.PI/2,r.rotation.y=n,t.add(r)}let s=new H(new q(.2,1),n);return s.position.y=.1,t.add(s),{group:t,kind:`firepit`,emberMat:n,phase:r,footprint:.7}}var Zd=new K(.04,.04,1.7,6),Qd=new K(.055,.055,.04,6),$d=new K(.1,.08,.12,8),ef=new hs(.1,.32,8);for(let e of[Zd,Qd,$d,ef])e.userData.shared=!0;function tf(e=Math.random){let t=new G,n=new H(Zd,Vd(10713658));n.position.y=.85,t.add(n);for(let e of[.5,1.1]){let n=new H(Qd,Vd(6965786));n.position.y=e,t.add(n)}let r=new H($d,Vd(4861976));r.position.y=1.78,t.add(r);let i=new J({color:16756810,emissive:16734746,emissiveIntensity:2,roughness:.4,transparent:!0,opacity:.95}),a=new H(ef,i);a.position.y=2,t.add(a);let o=e()*Math.PI*2,s=null;return rl.fancyLights&&(s=new Rc(16746544,0,3.5,1.5),s.position.y=2,s.castShadow=!1,t.add(s),Nd(s)),{group:t,flame:a,flameMat:i,flameLight:s,phase:o,footprint:.25}}function nf(e=Math.random){let t=new G,n=Rd[Math.floor(e()*Rd.length)],r=Vd(n),i=Vd(2237990,{roughness:.4}),a=2.4,o=3/2;for(let e of[-1,1])for(let n of[-1,1]){let r=new H(new K(.035,.035,a,6),i);r.position.set(e*o,a/2,n*o),t.add(r)}let s=[-1.5,a,-1.5,o,a,-1.5,o,a,o,-1.5,a,o,0,2.75,0],c=[0,4,1,1,4,2,2,4,3,3,4,0],l=new Dn;l.setAttribute(`position`,new V(s,3)),l.setIndex(c),l.computeVertexNormals();let u=new H(l,r);if(u.castShadow=!0,t.add(u),e()<.6){let e=new H(new _r(3*.95,.3),r);e.material=new J({color:n,roughness:.95,flatShading:!0,side:2}),e.position.set(0,2.25,-1.5),t.add(e)}return{group:t,color:n,footprint:2}}function rf(e=Math.random){let t=new G,n=1.8+e()*.8,r=1.3+e()*.3,i=r+.4,a=new K(.06,.06,i,6);for(let e of[-1,1]){let r=new H(a,Ud);r.position.set(e*n/2,i/2,0),t.add(r)}let[o,s]=zd[Math.floor(e()*zd.length)],c=new J({map:of(o,s,e),roughness:.95,flatShading:!0,side:2}),l=[],u=[],d=[];for(let e=0;e<=8;e++){let t=e/8,a=(t-.5)*n,o=-Math.cos((t-.5)*Math.PI)*.12;l.push(a,i*.9+o,0),l.push(a,i*.9+o-r,0),u.push(t,0),u.push(t,1)}for(let e=0;e<8;e++){let t=e*2,n=e*2+1,r=(e+1)*2,i=(e+1)*2+1;d.push(t,r,n,n,r,i)}let f=new Dn;f.setAttribute(`position`,new V(l,3)),f.setAttribute(`uv`,new V(u,2)),f.setIndex(d),f.computeVertexNormals();let p=new H(f,c);return p.castShadow=!0,p.receiveShadow=!0,t.add(p),{group:t,footprint:.6}}var af=document.createElement(`canvas`);af.width=64,af.height=64;function of(t,n,r){let i=af.getContext(`2d`),a=`#`+t.toString(16).padStart(6,`0`),o=`#`+n.toString(16).padStart(6,`0`);i.fillStyle=a,i.fillRect(0,0,64,64);let s=Math.floor(r()*3);if(i.fillStyle=o,s===0)for(let e=4;e<64;e+=12)i.fillRect(0,e,64,4);else if(s===1)for(let e=0;e<64;e+=16)for(let t=0;t<64;t+=16)i.beginPath(),i.moveTo(t+8,e),i.lineTo(t+16,e+8),i.lineTo(t+8,e+16),i.lineTo(t,e+8),i.closePath(),i.fill();else for(let e=4;e<64;e+=10)i.fillRect(e,0,3,64);let c=new Io(af);return c.colorSpace=x,c.wrapS=c.wrapT=e,c.needsUpdate=!0,c}var sf={small:{radius:4,tents:1,ezUps:[0,1],torches:2,tapestries:1,chairs:[1,2]},medium:{radius:6,tents:2,ezUps:[1,1],torches:3,tapestries:[1,2],chairs:[2,3]},large:{radius:8,tents:3,ezUps:[1,2],torches:4,tapestries:2,chairs:[3,4]}};function cf(e,t){if(typeof e==`number`)return e;let[n,r]=e;return n+Math.floor(t()*(r-n+1))}function lf(e=Math.random,t=`medium`){let n=sf[t]||sf.medium,r=new G,i=[],a=Xd(e);if(r.add(a.group),i.push(a),rl.contextLights){let e=new Rc(16756832,0,14,1.2);e.position.set(0,1.2,0),e.castShadow=!1,r.add(e),i.push({kind:`contextLight`,light:e,base:1.6}),Nd(e)}function o(e,t,n,i=!0){e.position.set(Math.cos(n)*t,0,Math.sin(n)*t),i&&(e.rotation.y=-n+Math.PI/2+Math.PI),r.add(e)}let s=cf(n.tents,e),c=e()*Math.PI*2,l=Math.PI*.6;for(let t=0;t<s;t++){let r=Wd(e),i=c+((s===1?.5:t/(s-1))-.5)*l;o(r.group,n.radius*.75,i)}let u=cf(n.ezUps,e),d=c+Math.PI+(e()-.5)*.5;for(let t=0;t<u;t++){let i=nf(e),a=d+(t-(u-1)/2)*.55;o(i.group,n.radius*.7,a,!1);let s=2+Math.floor(e()*2);for(let t=0;t<s;t++){let t=Yd(e),i=.8+e()*.4,o=e()*Math.PI*2;t.group.position.set(Math.cos(a)*n.radius*.7+Math.cos(o)*i,0,Math.sin(a)*n.radius*.7+Math.sin(o)*i),t.group.rotation.y=e()*Math.PI*2,r.add(t.group)}}let f=cf(n.chairs,e);for(let t=0;t<f;t++){let t=Yd(e),n=e()*Math.PI*2,i=1.6+e()*.6;t.group.position.set(Math.cos(n)*i,0,Math.sin(n)*i),t.group.rotation.y=-n+Math.PI/2+Math.PI,r.add(t.group)}let p=cf(n.torches,e),m=e()*Math.PI*2;for(let t=0;t<p;t++){let r=tf(e),a=m+t/p*Math.PI*2;o(r.group,n.radius*1.05,a,!1),i.push(r)}let h=cf(n.tapestries,e);for(let t=0;t<h;t++){let t=rf(e),r=e()*Math.PI*2;o(t.group,n.radius*.95,r,!1)}return{group:r,animatables:i,footprint:n.radius+2}}function uf(e,t,n){let r=.4+4*t;for(let i=0;i<n.length;i++){let a=n[i];if(a.emberMat){let t=.85+.15*Math.sin(e*6+a.phase);a.emberMat.emissiveIntensity=r*t}if(a.flameMat){let n=.7+.3*Math.sin(e*9+a.phase);a.flameMat.emissiveIntensity=r*1.5*n,a.flameMat.opacity=I.clamp(.2+t*1.2,0,.95),a.flame&&(a.flame.scale.y=1+.15*Math.sin(e*12+a.phase)),a.flameLight&&(a.flameLight.intensity=t*t*.7*n)}if(a.kind===`contextLight`&&a.light){let n=.85+.15*Math.sin(e*4+(a.phase||0));a.light.intensity=(a.base||1.6)*(t*t)*n}}}var df=[5212749,6268253,7191146,4947018,8569463],ff=[3496498,4156730,2969130,4880965,5472077,3298360,2839858],pf=new K(.35,.5,3.6,8),mf=new J({color:6965802,roughness:.95,flatShading:!0}),hf=new J({color:5914404,roughness:1,flatShading:!0}),gf=new J({color:15262934,roughness:.95,flatShading:!0}),_f=ff.map(e=>new J({color:e,roughness:1,flatShading:!0}));function vf(e=Math.random){let t=new G,n=new H(pf,mf);if(n.position.y=1.8,n.castShadow=!0,t.add(n),e()<.65){let n=new H(new q(1.6+e()*1,1),new J({color:df[Math.floor(e()*df.length)],roughness:.95,flatShading:!0}));n.position.y=3.8+e()*.4,n.castShadow=!0,t.add(n)}else{let n=4+e()*2.5,r=new H(new hs(1.4,n,8),new J({color:2972990,roughness:.95,flatShading:!0}));r.position.y=2+n/2,r.castShadow=!0,t.add(r)}return t}function yf(e=Math.random){let t=e();return t<.45?bf(e):t<.8?xf(e):Sf(e)}function bf(e){let t=new G,n=6+e()*3,r=.4+e()*.15,i=new H(new K(r*.55,r,n,7),hf);i.position.y=n/2,i.castShadow=!0,t.add(i);let a=_f[Math.floor(e()*_f.length)],o=3+Math.floor(e()*2),s=n-.5,c=1.5+e()*.5;for(let e=0;e<o;e++){let n=1.6-e*.15,r=new H(new hs(c,n,8),a);r.position.y=s+n/2,r.castShadow=e===0,t.add(r),s+=n*.7,c*=.78}return t}function xf(e){let t=new G,n=3.5+e()*1.5,r=.55+e()*.2,i=new H(new K(r*.7,r,n,8),hf);i.position.y=n/2,i.castShadow=!0,t.add(i);let a=_f[Math.floor(e()*_f.length)],o=2.2+e()*.8,s=new H(new q(o,1),a);s.position.y=n+o*.6,s.castShadow=!0,t.add(s);let c=2+Math.floor(e()*2);for(let r=0;r<c;r++){let r=.9+e()*.7,i=e()*Math.PI*2,s=o*.6,c=new H(new q(r,1),a);c.position.set(Math.cos(i)*s,n+o*.6+(e()-.3)*.8,Math.sin(i)*s),t.add(c)}return t}function Sf(e){let t=new G,n=5+e()*2,r=.22+e()*.08,i=new H(new K(r*.7,r,n,7),gf);i.position.y=n/2,i.castShadow=!0,t.add(i);let a=_f[Math.floor(e()*_f.length)],o=2+Math.floor(e()*2);for(let r=0;r<o;r++){let i=.9+e()*.4,o=new H(new q(i,1),a);o.position.set((e()-.5)*.6,n+i*.5+r*i*.7,(e()-.5)*.6),r===0&&(o.castShadow=!0),t.add(o)}return t}var Cf=[],wf=320,Tf=.45,Ef=720,Df=1500,Of=2.2,kf=(e,t)=>`${e},${t}`,Af=new J({color:5084886,emissive:1717584,emissiveIntensity:.25,roughness:.3,metalness:.05,transparent:!0,opacity:.88,flatShading:!0,depthWrite:!1,side:2});Af.userData.shared=!0;var jf=class{constructor(){this.lakes=new Map}update(e,t,n=.016){let r=Math.floor((t.x-Ef)/wf),i=Math.floor((t.x+Ef)/wf),a=Math.floor((t.z-Ef)/wf),o=Math.floor((t.z+Ef)/wf);for(let t=r;t<=i;t++)for(let n=a;n<=o;n++){let r=kf(t,n);if(this.lakes.has(r))continue;if(t===0&&n===0){this.lakes.set(r,null);continue}let i=Iu(Fu(t*17+91,n*13+31));i()>Tf?this.lakes.set(r,null):this.lakes.set(r,Ff(e,t,n,i))}for(let[n,r]of this.lakes){if(!r)continue;let i=r.center.x-t.x,a=r.center.z-t.z;Math.hypot(i,a)>Df&&(zf(e,r),this.lakes.delete(n))}for(let[,e]of this.lakes)if(e&&e.canoes)for(let t of e.canoes)Lf(t,n)}};function Mf(e,t){let n=[];if(e()<.15){for(let e=0;e<64;e++){let r=e/64*Math.PI*2;n.push({x:Math.cos(r)*t,z:Math.sin(r)*t})}return n}let r=1+e()*.55,i=.65+e()*.3,a=e()*Math.PI*2,o=2+Math.floor(e()*2),s=.04+e()*.08,c=e()*Math.PI*2,l=3+Math.floor(e()*3),u=.02+e()*.04,d=e()*Math.PI*2,f=[];for(let t=0;t<64;t++)f.push(.98+e()*.04);for(let e=0;e<64;e++){let p=e/64*Math.PI*2,m=p-a,h=r*i/Math.sqrt((i*Math.cos(m))**2+(r*Math.sin(m))**2),g=1+s*Math.sin(p*o+c)+u*Math.sin(p*l+d),_=t*h*g*f[e];n.push({x:Math.cos(p)*_,z:Math.sin(p)*_})}return n}function Nf(e,t){let n=t;for(;n<0;)n+=Math.PI*2;for(;n>=Math.PI*2;)n-=Math.PI*2;let r=e.length,i=n/(Math.PI*2)*r,a=Math.floor(i)%r,o=(a+1)%r,s=i-Math.floor(i),c=e[a],l=e[o],u=Math.hypot(c.x,c.z);return u+(Math.hypot(l.x,l.z)-u)*s}function Pf(e,t,n,r){let i=r.length,a=r.concat([r[0]]),o=[],s=0;for(let e=0;e<i;e++){let t=a[e+1].x-a[e].x,n=a[e+1].z-a[e].z,r=Math.hypot(t,n);o.push(r),s+=r}let c=Math.max(20,Math.ceil(s/Of));for(let r=0;r<c;r++){let l=r/c*s,u=0,d=0;for(;d<i&&u+o[d]<l;)u+=o[d],d++;d>=i&&(d=i-1);let f=(l-u)/Math.max(.001,o[d]),p=a[d].x+(a[d+1].x-a[d].x)*f,m=a[d].z+(a[d+1].z-a[d].z)*f,h=a[d+1].x-a[d].x,g=a[d+1].z-a[d].z,_=Math.max(.001,Math.hypot(h,g)),v=-g/_,y=h/_,b=t+p+v*Of,x=n+m+y*Of;e.push(Y.add({kind:`lake_edge`,position:new z(b,.5,x),footprint:0,collider:{radius:Of,damage:1}}))}}function Ff(e,t,n,r,i={}){let a=t*wf,o=n*wf,s=55+r()*45,c=Mf(r,s),l=0,u=1/0;for(let e of c){let t=Math.hypot(e.x,e.z);t>l&&(l=t),t<u&&(u=t)}let d=l+30,f=a+d+r()*(wf-2*d),p=o+d+r()*(wf-2*d),m=Af,h=new J({color:8569463,roughness:.95,flatShading:!0}),g=new G;g.name=`lake(${t},${n})`;let _=new _s,v=c.length-1;_.moveTo(c[v].x,c[v].z);for(let e=v-1;e>=0;e--)_.lineTo(c[e].x,c[e].z);_.lineTo(c[v].x,c[v].z);let y=new H(new rc(_),m);if(y.rotation.x=Math.PI/2,y.position.set(f,.08,p),y.receiveShadow=!0,y.renderOrder=0,g.add(y),r()<.35){let e=4+r()*4,t=r()*Math.PI*2,n=Math.max(0,u-e-4)*r()*.7,i=f+Math.cos(t)*n,a=p+Math.sin(t)*n,o=new H(new ms(e,24),h);o.rotation.x=-Math.PI/2,o.position.set(i,.16,a),o.receiveShadow=!0,o.renderOrder=1,g.add(o);let s=r(),c=s<.18?0:s<.62?1:2;for(let t=0;t<c;t++){let t=r()*Math.PI*2,n=r()*(e-1.2),o=i+Math.cos(t)*n,s=a+Math.sin(t)*n,c=yf(r);c.position.set(o,0,s);let l=.85+r()*.3;c.scale.set(l,l,l),g.add(c)}}let b=null;if(i.forceBeach||r()<.6){let e=new J({color:14268536,roughness:1,flatShading:!0}),t=r()*Math.PI*2,n=Nf(c,t),i=s*.16,a=f+Math.cos(t)*(n+i*.2),o=p+Math.sin(t)*(n+i*.2),l=new H(new ms(i,16),e);l.rotation.x=-Math.PI/2,l.position.set(a,.15,o),l.receiveShadow=!0,l.renderOrder=2,g.add(l),b={x:a,z:o,r:i}}e.add(g);let x=[];x.push(Y.add({kind:`lake`,position:new z(f,0,p),footprint:l,outline:c})),Pf(x,f,p,c),b&&x.push(Y.add({kind:`beach`,position:new z(b.x,0,b.z),footprint:0,attractor:{radius:b.r*.9,weight:2.4}}));for(let e=0;e<4;e++){let t=e/4*Math.PI*2+r()*.3,n=Nf(c,t);x.push(Y.add({kind:`shore`,position:new z(f+Math.cos(t)*(n+5),0,p+Math.sin(t)*(n+5)),footprint:0,attractor:{radius:8,weight:1.8}}))}let S=kf(t,n),C=[];if(r()<.6){let e=4+Math.floor(r()*6),i=[],a=[];for(let o=0;o<e;o++){let e=null;for(let t=0;t<10;t++){let t=r()*Math.PI*2;if(i.every(e=>Rf(t,e)>=.45)){e=t;break}}if(e==null)continue;i.push(e);let s=Fu(t*211+17+o,n*313+o*59),l=r()<.4?`small`:`medium`,u=lf(Iu(s),l),d=0;for(let t=-.3;t<=.3;t+=.05)d=Math.max(d,Nf(c,e+t));let m=d+6+u.footprint,h=f+Math.cos(e)*m,_=p+Math.sin(e)*m;u.group.position.set(h,0,_),u.group.rotation.y=Math.atan2(p-_,f-h),g.add(u.group),C.push(u.animatables),a.push({x:h,z:_,r:u.footprint}),x.push(Y.add({kind:`campsite`,position:new z(h,0,_),footprint:u.footprint,attractor:{radius:6,weight:1.4}}))}let o=90+Math.floor(r()*50),s=0,l=0;for(;s<o&&l<o*4;){l++;let e=r()*Math.PI*2,t=0;for(let n=-.15;n<=.15;n+=.05)t=Math.max(t,Nf(c,e+n));let n=14+r()**.6*25,i=f+Math.cos(e)*(t+n),o=p+Math.sin(e)*(t+n),u=!1;for(let e of a)if(Math.hypot(e.x-i,e.z-o)<e.r+2.5){u=!0;break}if(u)continue;let d=yf(r);d.position.set(i,0,o);let m=.85+r()*.35;d.scale.set(m,m,m),g.add(d),x.push(Y.add({kind:`forest_tree`,position:new z(i,0,o),footprint:1,collider:{radius:1*m,damage:2}})),s++}C.length>0&&Cf.push({lakeKey:S,animatables:C.flat(),centerX:(t+.5)*wf,centerZ:(n+.5)*wf})}let w=[],T=r(),E=T<.3?0:T<.8?1:2;for(let e=0;e<E;e++)w.push(If(g,f,p,c,r));return{center:new z(f,0,p),radius:l,group:g,registryIds:x,canoes:w,lakeKey:S,outline:c}}function If(e,t,n,r,i){let a=new G;a.name=`canoe`,Fd(a,i);let o=i()*Math.PI*2,s=Nf(r,o)*.4;return a.position.set(t+Math.cos(o)*s,0,n+Math.sin(o)*s),a.rotation.y=i()*Math.PI*2,e.add(a),{group:a,lakeCx:t,lakeCz:n,outline:r,heading:a.rotation.y,speed:.6+i()*.5,targetX:t,targetZ:n,timer:0,bobPhase:i()*Math.PI*2}}function Lf(e,t){if(e.timer-=t,e.timer<=0){let t=Math.random()*Math.PI*2,n=Nf(e.outline,t),r=Math.random()*n*.7;e.targetX=e.lakeCx+Math.cos(t)*r,e.targetZ=e.lakeCz+Math.sin(t)*r,e.timer=6+Math.random()*8}let n=e.targetX-e.group.position.x,r=e.targetZ-e.group.position.z;if(Math.hypot(n,r)>.5){let i=Math.atan2(n,r)-e.heading;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;e.heading+=Math.sign(i)*Math.min(Math.abs(i),.7*t),e.group.position.x+=Math.sin(e.heading)*e.speed*t,e.group.position.z+=Math.cos(e.heading)*e.speed*t}let i=e.group.position.x-e.lakeCx,a=e.group.position.z-e.lakeCz,o=Math.hypot(i,a);if(o>.001){let t=Math.atan2(a,i),n=Nf(e.outline,t),r=Math.max(2,n-4);if(o>r){let t=r/o;e.group.position.x=e.lakeCx+i*t,e.group.position.z=e.lakeCz+a*t,e.targetX=e.lakeCx,e.targetZ=e.lakeCz,e.timer=4+Math.random()*3}}e.bobPhase+=t*1.3,e.group.position.y=.04+Math.sin(e.bobPhase)*.04,e.group.rotation.y=e.heading,e.group.rotation.x=Math.sin(e.bobPhase*.7)*.03,e.group.rotation.z=Math.cos(e.bobPhase*.5)*.04}function Rf(e,t){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return Math.abs(n)}function zf(e,t){t.group.traverse(e=>{if(e.isMesh){e.geometry?.userData?.shared||e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>{e?.userData?.shared||e?.dispose?.()}):t?.userData?.shared||t?.dispose?.()}}),e.remove(t.group);for(let e of t.registryIds)Y.remove(e);if(t.lakeKey)for(let e=Cf.length-1;e>=0;e--)Cf[e].lakeKey===t.lakeKey&&Cf.splice(e,1)}function Bf(e,t,n){for(let r of Y.entries.values()){if(r.kind!==`lake`||!r.footprint)continue;let i=Math.max(0,Math.abs(r.position.x-e)-n),a=Math.max(0,Math.abs(r.position.z-t)-n);if(Math.hypot(i,a)<r.footprint)return!0}return!1}function Vf(e,t){for(let n of Y.entries.values()){if(n.kind!==`lake`||!n.footprint)continue;let r=n.position.x-e,i=n.position.z-t;if(Math.hypot(r,i)<n.footprint)return!0}return!1}function Hf(e,t){for(let n of Y.entries.values()){if(n.kind!==`lake`||!n.footprint)continue;let r=e-n.position.x,i=t-n.position.z,a=Math.hypot(r,i);if(a>n.footprint)continue;if(!n.outline)return!0;let o=Math.atan2(i,r);if(a<Nf(n.outline,o))return!0}return!1}function Uf(e,t,n=2.5){for(let r of Y.entries.values()){if(r.kind!==`lake`||!r.footprint)continue;let i=e-r.position.x,a=t-r.position.z,o=Math.hypot(i,a);if(o<r.footprint){let e=o>.01?1/o:1,t=r.footprint+n;return new z(r.position.x+(o>.01?i*e:1)*t,0,r.position.z+(o>.01?a*e:0)*t)}}return null}var Wf=new J({color:8025989,roughness:1,flatShading:!0}),Gf=new J({color:6964776,roughness:.95,flatShading:!0}),Kf=new J({color:3811352,roughness:1,flatShading:!0}),qf=2.3,Jf=.42,Yf=8,Xf=2,Zf=1,Qf=[5.5,6.5,7.5],$f=1.4,ep=.22,tp=.4,np=new $s((()=>{let e=new _s;return e.moveTo(-.22,0),e.lineTo(ep,0),e.absarc(0,0,ep,0,-Math.PI,!0),e})(),{depth:$f,bevelEnabled:!1,curveSegments:5});np.translate(0,0,-1.4/2);function rp(e=Math.random,t={}){let n=t.facingAngle??0,r=new G;r.name=`leafDrumCircle`;let i=new H(new K(qf,2.4499999999999997,Jf,18),Wf);i.position.y=Jf/2,i.castShadow=!0,i.receiveShadow=!0,r.add(i);let a=14+Math.floor(e()*3);for(let t=0;t<a;t++){let n=t/a*Math.PI*2+e()*.15,i=new H(new q(.18+e()*.12,0),Wf);i.position.set(Math.cos(n)*qf,.47+e()*.05,Math.sin(n)*qf),i.rotation.y=e()*Math.PI*2,r.add(i)}let o=new G;o.name=`logCone`;for(let e=0;e<Yf;e++){let t=e/Yf*Math.PI*2,n=qf*.6*Math.cos(t),r=qf*.6*Math.sin(t),i=new H(new K(.12,.16,Math.hypot(n,2.2)+.4,6),Kf),a=n*.5,s=r*.5;i.position.set(a,3.04/2,s);let c=Math.atan2(Math.hypot(n,r),2.2),l=new z(-r,0,n).normalize();i.quaternion.setFromAxisAngle(l,c),o.add(i)}r.add(o);let s=new J({color:16756810,emissive:16734746,emissiveIntensity:2.5,roughness:.4,transparent:!0,opacity:.9,depthWrite:!1}),c=new H(new hs(Zf,Xf,10),s);c.position.y=1.42,r.add(c);let l=new J({color:16742195,emissive:16728081,emissiveIntensity:2,roughness:.7}),u=new H(new q(.5,1),l);u.position.y=.57,u.scale.set(1.4,.5,1.4),r.add(u);let d=new Rc(16755285,.4,22,2);d.position.set(0,1.8199999999999998,0),d.castShadow=!1,r.add(d),Nd(d);let f=n+Math.PI,p=0,m=0;for(let e=0;e<Qf.length;e++){let t=Qf[e],n=Math.PI*t,r=Math.max(5,Math.round(n/($f*1.1)));p+=r,m+=Math.floor((r+1)/2)}let h=new Oo(np,Gf,p),g=new Oo(new K(.07,.08,.35,5),Gf,m),_=new St,v=new Mt,y=new Ke,b=new z,x=new z(1,1,1),S=0,C=0;for(let e=0;e<Qf.length;e++){let t=Qf[e],n=Math.PI*t,r=Math.max(5,Math.round(n/($f*1.1)));for(let n=0;n<r;n++){let i=(n+.5)/r,a=f-Math.PI/2+i*Math.PI,o=Math.cos(a)*t,s=Math.sin(a)*t;b.set(o,tp,s),v.set(0,-a+Math.sin(n*7.3+e)*.06,0),y.setFromEuler(v),_.compose(b,y,x),h.setMatrixAt(S++,_),n%2==0&&(b.set(o+Math.cos(a+Math.PI/2)*.5,.18,s+Math.sin(a+Math.PI/2)*.5),y.identity(),_.compose(b,y,x),g.setMatrixAt(C++,_))}}h.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0,r.add(h),r.add(g);let w=new J({color:13026496,transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),T=new H(new K(.4,.9,18,8,4,!0),w);T.position.y=9.42,r.add(T);let E=new J({color:16765030,emissive:16752691,emissiveIntensity:3,transparent:!0,opacity:0}),D=new ac(.04,4,3),O=[];for(let t=0;t<14;t++){let t=new H(D,E.clone());t.material.opacity=0,t.position.set(0,1.22,0),r.add(t),O.push({mesh:t,age:e()*2,lifetime:1.4+e()*1.2,driftX:(e()-.5)*.12,driftZ:(e()-.5)*.12,rise:1.6+e()*.8})}return{group:r,fireMesh:c,fireMat:s,ember:u,emberMat:l,logCone:o,fireLight:d,smoke:T,smokeMat:w,sparks:O,phase:e()*Math.PI*2,firepitCollider:{radius:qf,damage:9},benchCollider:{radius:Qf[Qf.length-1]+.4,damage:4}}}function ip(e,t,n){if(!n)return;let r=.2+.8*t+.06*Math.sin(e*4+n.phase),i=.4+.6*t+.04*Math.sin(e*7+n.phase*.7);n.fireMesh.scale.set(i,r,i),n.fireMat.opacity=I.clamp(.25+t*.7,.05,.95),n.fireMat.emissiveIntensity=1.8+2*t+.3*Math.sin(e*9+n.phase);let a=.7+.3*(1-t);n.emberMat.emissiveIntensity=(1.5+1.2*t)*a*(.85+.15*Math.sin(e*5+n.phase*1.3)),n.fireLight.intensity=(.4+5.1*t)*(.9+.1*Math.sin(e*12+n.phase));let o=.78+.22*t;if(n.logCone.scale.y=o,n.smokeMat&&(n.smokeMat.opacity=.06+.22*t),n.sparks){let r=Math.max(0,(t-.3)/.5),i=n._sparkLastT??e,a=Math.max(0,Math.min(.05,e-i));n._sparkLastT=e;for(let e=0;e<n.sparks.length;e++){let t=n.sparks[e];t.age+=a,t.age>=t.lifetime?(t.age=0,t.mesh.position.x=(Math.random()-.5)*.8,t.mesh.position.z=(Math.random()-.5)*.8,t.mesh.position.y=.8,t.driftX=(Math.random()-.5)*.2,t.driftZ=(Math.random()-.5)*.2,t.rise=1.6+Math.random()*.8,t.lifetime=1.4+Math.random()*1.2):(t.mesh.position.x+=t.driftX*a,t.mesh.position.z+=t.driftZ*a,t.mesh.position.y+=t.rise*a);let i=t.age/t.lifetime,o=i<.15?i/.15:1-(i-.15)/.85;t.mesh.material.opacity=Math.max(0,o)*r}}}var ap=[15122584,13607545,12028006,9726540,7293489,4862242],op=[2037266,3022613,4861468,6963736,9132587,10584381,12886618],sp=[11819578,8931884,13072957,9058890,13060410,7223850,5189153,12092474,6965802],cp=[null,null,null,12728906,3496506,4874183,14262346],lp=1316122,up=658190;function dp(e=Math.random,t={}){let{pose:n=`stand`,scale:r=1,forceSkin:i=null,forceHair:a=null}=t,o=i??ap[Math.floor(e()*ap.length)],s=a??op[Math.floor(e()*op.length)],c=sp[Math.floor(e()*sp.length)],l=cp[Math.floor(e()*cp.length)],u=n===`firekeeper`||n===`spotter`,d=u?lp:l===null?o:l,f=u?up:c,p=new J({color:o,roughness:.92,flatShading:!0}),m=new J({color:s,roughness:.95,flatShading:!0}),h=new J({color:d,roughness:.92,flatShading:!0}),g=new J({color:f,roughness:.95,flatShading:!0}),_=new G,v=u?g:p;for(let e of[-.1,.1]){let t=new H(new K(.085,.085,.55,6),v);t.position.set(e,.3,0),_.add(t)}let y=u?.95:.65,b=u?.55:.5,x=u?.85:.32,S=new H(new K(.2,u?.26:.3+e()*.04,x,8),g);S.position.y=(y+b)/2,_.add(S);let C=new H(new ps(.22,.45,4,6),h);C.position.y=1.05,C.castShadow=!0,_.add(C);let w=[];for(let e of[-1,1]){let t=new G;t.position.set(e*.26,1.3,0);let r=new H(new ps(.065,.28,4,6),p);r.position.y=-.16,t.add(r);let i=new G;i.position.y=-.32,t.add(i);let a=new H(new ps(.055,.26,4,6),p);a.position.y=-.16,i.add(a),_.add(t),n===`dance`?(t.rotation.z=e*2.2,t.rotation.x=.15):n===`drum_seated`?(t.rotation.x=.9,i.rotation.x=.5):n===`firekeeper`?(t.rotation.x=.4,t.rotation.z=e*.4,i.rotation.x=.6):n===`spotter`&&(t.rotation.x=.35,t.rotation.z=e*.2,i.rotation.x=1.2,i.rotation.z=e*-.8),w.push({shoulder:t,elbow:i,side:e})}let T=new H(new q(.22,1),p);T.position.y=1.6,T.castShadow=!0,_.add(T);let E=new G;if(E.position.set(0,1.6,0),u){let e=new H(new q(.24,1),m);e.position.set(0,.04,.03),e.scale.set(1,.85,1.05),E.add(e)}else{let e=new H(new q(.26,1),m);e.position.set(0,.06,.12),e.scale.set(1,1.05,1.1),E.add(e);let t=new K(.14,.04,.7,7);t.translate(0,-.35,0);let n=new H(t,m);n.position.set(0,-.05,.22),n.rotation.x=-.35,E.add(n)}_.add(E);let D=new J({color:273,roughness:.8});for(let e of[-.07,.07]){let t=new H(new ac(.025,6,6),D);t.position.set(e,1.63,-.18),_.add(t)}n===`drum_seated`&&(_.scale.set(1,.75,1),_.position.y=-.1),r!==1&&_.scale.multiplyScalar(r);let O={x:_.scale.x,y:_.scale.y,z:_.scale.z};return{group:_,kind:n,phase:e()*Math.PI*2,armRefs:w,hairGroup:E,torso:C,baseScale:O,wakeThreshold:0}}function fp(e=Math.random){return dp(e,{pose:`dance`})}function pp(e=Math.random){let t=dp(e,{pose:`drum_seated`}),n=new H(new K(.22,.16,.5,12),new J({color:6961688,roughness:.95,flatShading:!0}));n.position.set(0,.6,-.32),n.castShadow=!0,t.group.add(n);let r=new H(new ms(.215,12),new J({color:14268536,roughness:.9,flatShading:!0,side:2}));return r.rotation.x=-Math.PI/2,r.position.set(0,.86,-.32),t.group.add(r),t.djembe=n,t}function mp(e=Math.random){let t=dp(e,{pose:`firekeeper`}),n=new H(new K(.045,.045,2.2,6),new J({color:2759954,roughness:.9,flatShading:!0}));return n.position.set(.05,1.3,.65),n.rotation.x=.85,t.group.add(n),t.pole=n,t}function hp(e=Math.random){return dp(e,{pose:`spotter`})}function gp(e,t,n){for(let r=0;r<n.length;r++){let i=n[r],a=_p((t-(i.wakeThreshold||0)+.05)/.05);if(a<=.02)i.group.visible=!1;else switch(i.group.visible=!0,i.baseScale&&i.group.scale.set(i.baseScale.x*a,i.baseScale.y*a,i.baseScale.z*a),i.kind){case`dance`:vp(e,i);break;case`drum_seated`:yp(e,i);break;case`firekeeper`:bp(e,i);break;case`spotter`:xp(e,i)}}}function _p(e){let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)}function vp(e,t){let n=t.phase+e*.34,r=3.5-.6*(.5+.5*Math.sin(e*.35+t.phase*2.3));t.group.position.set(Math.cos(n)*r,0,Math.sin(n)*r);let i=9+t.phase*.5%4,a=(e*.9+t.phase*1.7)%i,o=1.2,s=0;if(a<o){let e=a/o;s=e*e*(3-2*e)*Math.PI*2}t.group.rotation.y=Math.PI-n+s;let c=Math.sin(e*2.5+t.phase)*.1;t.group.rotation.z=c;for(let n=0;n<t.armRefs.length;n++){let r=t.armRefs[n],i=t.phase+(r.side>0?0:Math.PI*.7);r.shoulder.rotation.z=r.side*(2.2+Math.sin(e*1.8+i)*.55),r.shoulder.rotation.x=.15+Math.sin(e*1.3+i*1.4)*.45+Math.sin(e*3.1+i*.8)*.15,r.shoulder.rotation.y=Math.sin(e*1.1+i*.9)*.3,r.elbow.rotation.x=.35+Math.sin(e*2.2+i*1.7)*.5}t.hairGroup&&(t.hairGroup.rotation.z=-c*.8)}function yp(e,t){let n=80/60;t.group.rotation.x=Math.sin(e*n*2*Math.PI+t.phase)*.06;for(let r=0;r<t.armRefs.length;r++){let i=t.armRefs[r],a=t.phase+(r===0?0:Math.PI),o=.5+.5*Math.sin(e*n*4*Math.PI+a);i.shoulder.rotation.x=.9-o*.35}}function bp(e,t){let n=(e+t.phase)%12;if(n<1){let e=n<.5?n/.5:(1-n)/.5;t.group.rotation.x=e*.22}else t.group.rotation.x=0}function xp(e,t){t.group.rotation.z=Math.sin(e*.4+t.phase)*.04}var Sp=[],Cp=[],wp=[],Tp=5,Ep=1,Dp=.25,Op=1,kp=[`N`,`E`,`S`,`W`];function Ap(e,t){let n=Math.floor((e+2)/Tp),r=Math.floor((t+2)/Tp),i=n*Tp+2-2,a=r*Tp+2-2,o=e-i,s=t-a;if(Math.abs(o)>1||Math.abs(s)>1||Math.abs(n)<=Op&&Math.abs(r)<=Op)return null;let c=Fu(i*73+13,a*91+37),l=Iu(c);if(l()>=Ep)return null;let u=i*80,d=a*80;if(Vf(u,d))return null;let f=90+l()*20;for(let e=0;e<8;e++){let t=e/8*Math.PI*2;if(Vf(u+Math.cos(t)*f,d+Math.sin(t)*f))return null}let p=l(),m;m=p<Dp?`drum_circle`:p<.85?`campsite`:`none`;let h=Math.floor(l()*4),g=kp[h],_=m===`drum_circle`?(h+2)%4:null,v=Mp(o,s),y=Np(o,s,h),b=m!==`none`,x={centerCx:i,centerCz:a,centerX:u,centerZ:d,bodyRadius:f,role:v,isPathChunk:y,interiorContent:m,hasInterior:b,pathDir:g,pathDirIdx:h,backPathDirIdx:_,seed:c};return x.interiorCampsitePositions=b?jp(x):[],x}function jp(e){let t=Iu(e.seed*199+41),n=8+Math.floor(t()*12),r=e.interiorContent===`drum_circle`?30:0,i=e.interiorContent===`campsite`?14:0,a=[];for(let o=0;o<n;o++){let n=null;for(let o=0;o<30;o++){let o=Math.sqrt(t())*(e.bodyRadius-6),s=t()*Math.PI*2,c=e.centerX+Math.cos(s)*o,l=e.centerZ+Math.sin(s)*o,u=o;if(u<r||u<i||Xp(c,l,e))continue;let d=!1;for(let e=0;e<a.length;e++){let t=a[e].x-c,n=a[e].z-l;if(t*t+n*n<196){d=!0;break}}if(!d){n={x:c,z:l};break}}n&&a.push(n)}return a}function Mp(e,t){return e===0&&t===0?`center`:e===0&&t===-1?`N`:e===1&&t===-1?`NE`:e===1&&t===0?`E`:e===1&&t===1?`SE`:e===0&&t===1?`S`:e===-1&&t===1?`SW`:e===-1&&t===0?`W`:e===-1&&t===-1?`NW`:null}function Np(e,t,n){return n===0&&t===-1&&e===0||n===1&&e===1&&t===0||n===2&&t===1&&e===0||n===3&&e===-1&&t===0}function Pp(e,t){Yp(e,t),t.role===`center`&&(Y.add({kind:`forest`,position:new z(t.centerX,0,t.centerZ),footprint:t.bodyRadius,chunkKey:e.key}),t.hasInterior&&(Lp(e,t),zp(e,t)))}var Fp=5,Ip=new J({color:12096880,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1});function Lp(e,t){let n=t.centerX,r=t.centerZ;switch(t.pathDirIdx){case 0:r-=120;break;case 1:n+=120;break;case 2:r+=120;break;case 3:n-=120}let i=Iu(t.seed*31+7),a=bg(n,r,t.centerX,t.centerZ,Fp,i,Ip);e.group.add(a),Rp(e,t,n,r,i)}function Rp(e,t,n,r,i){let a=t.centerX,o=t.centerZ,s=a-n,c=o-r,l=Math.hypot(s,c),u=s/l,d=c/l,f=-d,p=u,m=[];for(let t=0;t<6;t++){let a=(t+.5)/6,o=t%2==0?1:-1,s=3.7+i()*.6,c=n+u*l*a,h=r+d*l*a,g=c+f*s*o,_=h+p*s*o,v=tf(i);v.group.position.set(g,0,_),e.group.add(v.group),m.push(v)}m.length>0&&Sp.push({chunkKey:e.key,animatables:m,centerX:e.cxWorld,centerZ:e.czWorld})}function zp(e,t){t.interiorContent===`campsite`?Hp(e,t):t.interiorContent===`drum_circle`&&Up(e,t),Vp(e,t)}function Bp(e,t,n,r){let i=[],a=r+Math.PI,o=[5.5,6.5,7.5],s=[4,5,6],c=[0,0,0,.18,.28,.38,.46,.52,.58,.62,.68,.72,.76,.8,.85],l=0;for(let n=0;n<o.length;n++){let r=o[n],u=s[n];for(let n=0;n<u;n++){let o=(n+.5)/u,s=a-Math.PI/2+o*Math.PI,d=pp(e);d.group.position.set(Math.cos(s)*r,0,Math.sin(s)*r),d.group.rotation.y=Math.PI/2-s,d.wakeThreshold=c[l%c.length],l++,t.group.add(d.group),i.push(d)}}let u=[.25,.38,.55,.62,.7,.78,.85];for(let n=0;n<u.length;n++){let r=fp(e);r.phase=n/u.length*Math.PI*2,r.wakeThreshold=u[n],t.group.add(r.group),i.push(r)}let d=r,f=4.2,p=mp(e);p.group.position.set(Math.cos(d)*f,0,Math.sin(d)*f),p.group.rotation.y=Math.PI/2-d,p.wakeThreshold=0,t.group.add(p.group),i.push(p);let m=hp(e),h=r+.5,g=5.4;return m.group.position.set(Math.cos(h)*g,0,Math.sin(h)*g),m.group.rotation.y=Math.PI/2-h,m.wakeThreshold=0,t.group.add(m.group),i.push(m),i}function Vp(e,t){if(t.interiorCampsitePositions&&t.interiorCampsitePositions.length!==0)for(let n=0;n<t.interiorCampsitePositions.length;n++){let r=t.interiorCampsitePositions[n],i=Iu(Pu(t.seed*211+n*71,n*379+13)),a=lf(i,i()<.75?`small`:`medium`);a.group.position.set(r.x,0,r.z),a.group.rotation.y=i()*Math.PI*2,e.group.add(a.group),Gp(e,a),Kp(e,r.x,r.z,a.footprint)}}function Hp(e,t){let n=Iu(t.seed*41+13),r=lf(n,t.bodyRadius>105?`large`:t.bodyRadius>95?`medium`:`small`);r.group.position.set(t.centerX,0,t.centerZ),r.group.rotation.y=Qp(t.pathDirIdx),e.group.add(r.group),Gp(e,r),Kp(e,t.centerX,t.centerZ,r.footprint),Wp(e,t,n,{count:2+Math.floor(n()*2),excludeAngle:Qp(t.pathDirIdx),excludeArc:Math.PI*.45})}function Up(e,t){let n=t.centerX,r=t.centerZ,i=Iu(t.seed*53+19),a=Qp(t.pathDirIdx),o=rp(i,{facingAngle:a});o.group.position.set(n,0,r),e.group.add(o.group);let s=Bp(i,o,t,a);Cp.push({chunkKey:e.key,dc:o,figures:s,fireCenter:{x:n,z:r}});let c=nd.attachStageMusic(n,1.4,r,t.seed*9173+31,`forest_drum`);c&&wp.push({handle:c,chunkKey:e.key,centerX:n,centerZ:r,bodyRadius:t.bodyRadius}),Y.add({kind:`firepit`,position:new z(n,.5,r),footprint:o.firepitCollider.radius,collider:o.firepitCollider,chunkKey:e.key}),Y.add({kind:`bench_ring`,position:new z(n,.4,r),footprint:0,collider:o.benchCollider,chunkKey:e.key});let l=Qp(t.backPathDirIdx),u=t.centerX+Math.cos(l)*(t.bodyRadius+6),d=t.centerZ+Math.sin(l)*(t.bodyRadius+6),f=Iu(t.seed*67+13),p=bg(t.centerX,t.centerZ,u,d,Fp,f,Ip);e.group.add(p),Wp(e,t,f,{count:3+Math.floor(f()*3),excludeAngle:Qp(t.pathDirIdx),excludeArc:Math.PI*.55,centerAngle:l,centerArc:Math.PI*.5}),Y.add({kind:`forest_drum_circle`,position:new z(n,0,r),footprint:0,attractor:{radius:8,weight:1.4},chunkKey:e.key})}function Wp(e,t,n,r){let{count:i=3,excludeAngle:a=null,excludeArc:o=0,centerAngle:s=null,centerArc:c=Math.PI}=r||{},l=[];for(let r=0;r<i;r++){let i=null;for(let e=0;e<12;e++){let e;if(e=s==null?n()*Math.PI*2:s+(n()-.5)*c,a!=null&&$p(e,a)<o)continue;let r=t.bodyRadius+12+n()*38,u=t.centerX+Math.cos(e)*r,d=t.centerZ+Math.sin(e)*r,f=!1;for(let e=0;e<l.length;e++){let t=l[e].x-u,n=l[e].z-d;if(t*t+n*n<196){f=!0;break}}if(!f){i={x:u,z:d,theta:e};break}}if(!i)continue;let u=Iu(Pu(t.seed*137+r*41,r*311+7)),d=lf(u,u()<.6?`small`:`medium`);d.group.position.set(i.x,0,i.z),d.group.rotation.y=i.theta+Math.PI,e.group.add(d.group),Gp(e,d),Kp(e,i.x,i.z,d.footprint),l.push(i)}}function Gp(e,t){t&&t.animatables&&t.animatables.length!==0&&Sp.push({chunkKey:e.key,animatables:t.animatables,centerX:e.cxWorld,centerZ:e.czWorld})}function Kp(e,t,n,r){Y.add({kind:`campsite`,position:new z(t,0,n),footprint:r,attractor:{radius:5,weight:.6},chunkKey:e.key})}var qp=4,Jp=.022;function Yp(e,t){let n=e.cx-t.centerCx,r=e.cz-t.centerCz,i=Iu(Pu(t.seed+n*131,r*197+11)),a=e.cxWorld-40,o=e.cxWorld+40,s=e.czWorld-40,c=e.czWorld+40,l=Math.floor(6400*Jp),u=[];for(let n=0;n<l*4&&u.length<l;n++){let n=a+i()*(o-a),r=s+i()*(c-s),l=n-t.centerX,d=r-t.centerZ,f=Math.hypot(l,d);if(f>t.bodyRadius+20)continue;let p=f<t.bodyRadius?1:Math.max(0,1-(f-t.bodyRadius)/20);if(i()>p||t.hasInterior&&Xp(n,r,t)||t.hasInterior&&f<16)continue;if(t.interiorCampsitePositions&&t.interiorCampsitePositions.length>0){let e=!1;for(let i=0;i<t.interiorCampsitePositions.length;i++){let a=t.interiorCampsitePositions[i],o=a.x-n,s=a.z-r;if(o*o+s*s<36){e=!0;break}}if(e)continue}let m=!1;for(let e=0;e<u.length;e++){let t=u[e];if(Math.hypot(t.x-n,t.z-r)<qp){m=!0;break}}if(m||Y.closestBuilding(new z(n,0,r),2.5))continue;let h=yf(i);h.position.set(n,0,r),h.rotation.y=i()*Math.PI*2,e.group.add(h),Y.add({kind:`forest_tree`,position:new z(n,0,r),footprint:1.4,collider:{radius:.9,damage:3},chunkKey:e.key}),u.push({x:n,z:r})}}function Xp(e,t,n){return!!(Zp(e,t,n,n.pathDirIdx)||n.backPathDirIdx!=null&&Zp(e,t,n,n.backPathDirIdx))}function Zp(e,t,n,r){let i=e-n.centerX,a=t-n.centerZ,o=n.bodyRadius+8;switch(r){case 0:return Math.abs(i)<5&&a<0&&a>-o;case 1:return Math.abs(a)<5&&i>0&&i<o;case 2:return Math.abs(i)<5&&a>0&&a<o;case 3:return Math.abs(a)<5&&i<0&&i>-o}return!1}function Qp(e){switch(e){case 0:return-Math.PI/2;case 1:return 0;case 2:return Math.PI/2;case 3:return Math.PI}return 0}function $p(e,t){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return Math.abs(n)}function em(e=0){let t=new G,n=e*.37%1,r=new B().setHSL(n,.75,.55).getHex(),i=new B().setHSL((n+.5)%1,.75,.6).getHex(),a=new G;a.position.y=4;let o=new H(new q(1.2,1),new J({color:r,roughness:.8,flatShading:!0}));o.scale.set(1,1.25,1),o.castShadow=!0,a.add(o);for(let e of[-.45,.45]){let t=new H(new ac(.25,12,10),new J({color:16777215,roughness:.4}));t.position.set(e,.2,-.95),a.add(t);let n=new H(new ac(.12,10,8),new J({color:0}));n.position.set(e,.2,-1.15),a.add(n)}let s=new H(new U(.6,.25,.1),new J({color:2236469}));s.position.set(0,-.45,-1.05),a.add(s);for(let t of[-1.2,1.2]){let n=new H(new K(.18,.12,2.4,8),new J({color:i,roughness:.9,flatShading:!0}));n.position.set(t,-1.2,0),n.rotation.z=t>0?-.25:.25,n.castShadow=!0,a.add(n);let r=-1.2-Math.cos(.25)*1.2,o=t+Math.sin(t>0?-.25:.25)*1.2,s=[16733559,16769126,6750088,6740479,12615935];for(let t=0;t<3;t++){let n=1.4+Math.random()*.8,i=new hs(.04,n,4,1);i.translate(0,-n/2,0);let c=new H(i,new J({color:s[(e*3+t|0)%s.length],roughness:.8,flatShading:!0}));c.position.set(o+(t-1)*.06,r,0),c.rotation.z=(Math.random()-.5)*.4,c.rotation.x=(Math.random()-.5)*.3,a.add(c)}}if(e*1.7%1<.5){let e=new J({color:i,roughness:.6,flatShading:!0}),t=new J({color:16769126,emissive:16769126,emissiveIntensity:1,roughness:.3});for(let n of[-.35,.35]){let r=new H(new K(.04,.04,.7,6),e);r.position.set(n,1.55,0),r.rotation.z=-n*.6,a.add(r);let i=new H(new q(.13,0),t);i.position.set(n*1.45,1.85,0),a.add(i)}}let c=new H(new oc(.9,.18,8,16),new J({color:i,roughness:.9,flatShading:!0}));c.rotation.x=Math.PI/2,c.position.y=-1,a.add(c),t.add(a);let l=pm(2236467,15122584);l.position.y=0,t.add(l);let u=new H(new K(.06,.06,3.5,8),new J({color:3812898,roughness:.95}));return u.position.y=2.8,t.add(u),t.userData.bobPhase=Math.random()*10,t}function tm(e,t){let n=e.children[0];if(!n)return;let r=e.userData,i=performance.now()*.002+r.bobPhase;n.position.y=4+Math.sin(i*4)*.25,n.rotation.z=Math.sin(i*2)*.08}var nm=new Map;function rm(e,t,n){let r=`${n}:${e.toString(16)}`,i=nm.get(r);return i||(i=new J({color:e,roughness:t,flatShading:!0}),i.userData.shared=!0,nm.set(r,i)),i}var im=new J({color:273,roughness:.8});im.userData.shared=!0;var am=new J({color:273,roughness:.8});am.userData.shared=!0;var om=new K(.1,.1,.65,8);om.userData.shared=!0;var sm=new U(.16,.07,.24);sm.userData.shared=!0;var cm=new ps(.26,.55,4,8);cm.userData.shared=!0;var lm=new ps(.08,.3,4,6);lm.userData.shared=!0;var um=new ps(.07,.28,4,6);um.userData.shared=!0;var dm=new q(.26,1);dm.userData.shared=!0;var fm=new ac(.028,6,6);fm.userData.shared=!0;function pm(e,t,n={}){let{armPose:r=`rest`,pantsHex:i=2243164}=n,a=new G,o=rm(e,.9,`shirt`),s=rm(t,.9,`skin`),c=rm(i,.92,`pants`);for(let e of[-.12,.12]){let t=new H(om,c);t.position.set(e,.32,0),a.add(t);let n=new H(sm,im);n.position.set(e,.03,-.06),a.add(n)}let l=new H(cm,o);l.position.y=1,l.castShadow=!0,a.add(l);for(let e of[-1,1]){let t=new G;t.position.set(e*.3,1.2,0),t.rotation.z=e*.05;let n=new H(lm,o);n.position.y=-.18,t.add(n);let i=new G;i.position.y=-.36,r===`instrument`?(t.rotation.x=.6,i.rotation.x=.5):r===`trumpet`&&(t.rotation.x=.6,t.rotation.z=e*.5,i.rotation.x=1.6),t.add(i);let c=new H(um,s);c.position.y=-.18,i.add(c),a.add(t)}let u=new H(dm,s);u.position.y=1.65,u.castShadow=!0,a.add(u);for(let e of[-.08,.08]){let t=new H(fm,am);t.position.set(e,1.68,-.22),a.add(t)}return a}var mm=[16774352,15190421,16637861,13681320,16045764],hm=[16740252,7327594,16765578,11699711,6740479,16747099],gm=new U(.15,2.5,.15);gm.userData.shared=!0;var _m=new hs(3.2,1.8,4);_m.userData.shared=!0;var vm=new U(4.5,.18,4.5);vm.userData.shared=!0;var ym=new J({color:3812898,roughness:.8,flatShading:!0});ym.userData.shared=!0;var bm=new J({color:16775403,roughness:.85,flatShading:!0});bm.userData.shared=!0;var xm=new Map;function Sm(e,t){let n=`${e}x${t}`,r=xm.get(n);return r||(r=new U(e,.1,t),r.userData.shared=!0,xm.set(n,r)),r}var Cm=new Map;function wm(e){let t=Cm.get(e);return t||(t=new J({color:e,roughness:.9,flatShading:!0}),t.userData.shared=!0,Cm.set(e,t)),t}var Tm=new Map;function Em(e){let t=Tm.get(e);return t||(t=new J({color:e,roughness:.85,flatShading:!0}),t.userData.shared=!0,Tm.set(e,t)),t}var Dm=[12991018,3830466,14719e3,7033146,5930554,2771822,10828410,3836787],Om=[15122584,12620920,9138e3,15914162],km=[`pottery`,`hats`,`jars`,`paintings`,`boxes`,`plants`],Am={length:3,depth:.8,x:0,z:-1.4,yaw:0},jm={length:2.6,depth:.8,x:-1.4,z:0,yaw:-Math.PI/2},Mm={length:2.6,depth:.8,x:1.4,z:0,yaw:Math.PI/2},Nm=[{name:`u`,weight:5,slots:[Am,jm,Mm]},{name:`l_left`,weight:2,slots:[Am,jm]},{name:`l_right`,weight:2,slots:[Am,Mm]},{name:`back`,weight:2,slots:[Am]},{name:`center`,weight:2,slots:[{length:3,depth:1.2,x:0,z:0,yaw:0}]}],Pm=Nm.reduce((e,t)=>e+t.weight,0);function Fm(e){let t=e()*Pm;for(let e of Nm){if(t<e.weight)return e;t-=e.weight}return Nm[0]}function Im(e=Math.random){let t=new G,n=mm[Math.floor(e()*mm.length)];for(let[e,n]of[[-2,-2],[2,-2],[-2,2],[2,2]]){let r=new H(gm,ym);r.position.set(e,1.25,n),t.add(r)}let r=new H(_m,bm);r.position.y=3.4,r.rotation.y=Math.PI/4+(e()-.5)*.06,r.castShadow=!0,t.add(r);let i=hm[Math.floor(e()*hm.length)],a=new H(vm,Em(i));a.position.y=2.55,t.add(a);let o=Fm(e);for(let r of o.slots)t.add(Lm(e,r,n));let s=qm(e);return Jm(s,o.name,e),t.add(s),t}function Lm(e,t,n){let r=new G;r.position.set(t.x,0,t.z),r.rotation.y=t.yaw;let i=new H(Sm(t.length,t.depth),wm(n));i.position.set(0,1,0),i.castShadow=!0,i.receiveShadow=!0,r.add(i);let a=km[Math.floor(e()*km.length)];return Rm(a,r,e,t.length,t.depth),r}function Rm(e,t,n,r,i){switch(e){case`pottery`:Bm(t,n,r,i);break;case`hats`:Vm(t,n,r,i);break;case`jars`:Hm(t,n,r,i);break;case`paintings`:Um(t,n,r,i);break;case`boxes`:Wm(t,n,r,i);break;case`plants`:Gm(t,n,r,i)}}function zm(e,t=.7,n=.55){return new J({color:new B().setHSL(e(),t,n),roughness:.7,flatShading:!0})}function Bm(e,t,n,r){let i=4+Math.floor(t()*3),a=Km(i,-n/2+.25,n/2-.25),o=r*.2;for(let n=0;n<i;n++){let r=t()<.6,i=.16+t()*.1,s=r?.55+t()*.35:.3+t()*.15,c=new H(new K(i*.85,i,s,12),zm(t,.4,.5));c.position.set(a[n],1.05+s/2,(t()-.5)*o),e.add(c)}}function Vm(e,t,n,r){let i=5+Math.floor(t()*3),a=Km(i,-n/2+.25,n/2-.25),o=r*.15;for(let n=0;n<i;n++){let r=t()<.4?2+Math.floor(t()*2):1;for(let i=0;i<r;i++){let r=new H(new K(.22,.22,.04,14),zm(t,.5,.55));r.position.set(a[n],1.06+i*.1,(t()-.5)*o),e.add(r);let s=new H(new K(.12,.12,.12,12),r.material);s.position.copy(r.position),s.position.y+=.07,e.add(s)}}}function Hm(e,t,n,r){let i=7+Math.floor(t()*4),a=Km(i,-n/2+.2,n/2-.2),o=r*.18;for(let n=0;n<i;n++){let r=new H(new K(.1,.1,.3,10),new J({color:new B().setHSL(t(),.55,.45),roughness:.3,metalness:.2,transparent:!0,opacity:.85})),i=(n%2==0?-o:o)+(t()-.5)*.06;r.position.set(a[n],1.2,i),e.add(r);let s=new H(new K(.105,.105,.04,10),new J({color:13619151,roughness:.4,metalness:.6}));s.position.copy(r.position),s.position.y+=.17,e.add(s)}}function Um(e,t,n,r){let i=3+Math.floor(t()*2),a=Km(i,-n/2+.3,n/2-.3),o=-r/2+.15;for(let n=0;n<i;n++){let r=.55+t()*.25,i=.5+t()*.35,s=new H(new U(r,i,.04),new J({color:new B().setHSL(t(),.6,.45),roughness:.7,flatShading:!0}));s.position.set(a[n],1.05+i/2,o),s.rotation.x=-.18,e.add(s);let c=new H(new U(r*.82,i*.82,.01),new J({color:new B().setHSL(t(),.7,.6),emissive:new B().setHSL(t(),.5,.4),emissiveIntensity:.25}));c.position.copy(s.position),c.position.z+=.025,c.rotation.x=s.rotation.x,e.add(c)}}function Wm(e,t,n,r){let i=5+Math.floor(t()*4),a=Km(i,-n/2+.25,n/2-.25),o=r*.22;for(let n=0;n<i;n++){let r=t()<.35;for(let i=0;i<(r?2:1);i++){let r=.22+t()*.22,s=.18+t()*.2,c=new H(new U(r,s,.22+t()*.18),new J({color:new B().setHSL(t(),.7,.55),roughness:.7,flatShading:!0}));c.position.set(a[n]+(t()-.5)*.08,1.05+s/2+i*(s+.04),(t()-.5)*o),c.rotation.y=(t()-.5)*.5,e.add(c)}}}function Gm(e,t,n,r){let i=2+Math.floor(t()*2),a=-n/2+.3,o=n/2-.3,s=r*.18;for(let n=0;n<i;n++){let r=1.05+n*.3,i=3+Math.floor(t()*2),c=Km(i,a,o);for(let a=0;a<i;a++){let i=new H(new K(.13,.1,.16,10),new J({color:9132587,roughness:.85,flatShading:!0}));i.position.set(c[a],r+.08,n===0?-s:s),e.add(i);let o=new H(new q(.16+t()*.05,0),new J({color:new B().setHSL(.28+(t()-.5)*.06,.55,.45),roughness:.85,flatShading:!0}));o.position.copy(i.position),o.position.y+=.22,e.add(o)}}}function Km(e,t,n){if(e===1)return[(t+n)*.5];let r=[];for(let i=0;i<e;i++)r.push(t+(n-t)*(i/(e-1)));return r}function qm(e){let t=Dm[Math.floor(e()*Dm.length)],n=Om[Math.floor(e()*Om.length)];return pm(t,n)}function Jm(e,t,n){if(n()<.3){e.position.set((n()-.5)*2.2,0,2.3+n()*.4),e.rotation.y=0;return}let r=0,i=-.5;t===`u`?(r=(n()-.5)*.8,i=-.4):t===`l_left`?(r=.4+(n()-.5)*.4,i=-.5):t===`l_right`?(r=-.4+(n()-.5)*.4,i=-.5):t===`back`?(r=(n()-.5)*1.2,i=-.7):(r=(n()<.5?-1.2:1.2)+(n()-.5)*.3,i=-1),e.position.set(r,0,i),e.rotation.y=Math.PI}var Ym=1.7,Xm={box:new U(6,3,3.2),cab:new U(2,2.2,3),wind:new U(.05,1,2.5),serv:new U(3.5,1,.05),canopy:new U(3.6,.1,1.2),wheel:new K(.5,.5,.3,14),sign:new U(4,.7,.15)};for(let e of Object.values(Xm))e.userData.shared=!0;var Zm={dark:new J({color:1842204,roughness:.8,flatShading:!0}),window:new J({color:9955071,emissive:9955071,emissiveIntensity:.15,roughness:.2}),canopy:new J({color:16774352,roughness:.8,flatShading:!0}),sign:new J({color:16774352,emissive:16769126,emissiveIntensity:.4,roughness:.5})};for(let e of Object.values(Zm))e.userData.shared=!0;var Qm=new Map;function $m(e){let t=Qm.get(e);return t||(t=new J({color:e,roughness:.55,flatShading:!0}),t.userData.shared=!0,Qm.set(e,t)),t}var eh=[16740252,16765578,6740479,7327594,11699711,16747099];function th(e=Math.random){let t=new G,n=eh[Math.floor(e()*eh.length)],r=$m(n),i=new H(Xm.box,r);i.position.set(.5,1.9,0),i.castShadow=!0,i.receiveShadow=!0,t.add(i);let a=new H(Xm.cab,r);a.position.set(-2.5,1.4,0),a.castShadow=!0,t.add(a);let o=new H(Xm.wind,Zm.window);o.position.set(-3.55,1.9,0),t.add(o);let s=new H(Xm.serv,Zm.window);s.position.set(.5,2.4,1.6),t.add(s);let c=new H(Xm.canopy,Zm.canopy);c.position.set(.5,3.1,2.3),c.rotation.x=-.2,t.add(c);for(let[e,n]of[[-2.5,-1.5],[-2.5,1.5],[1.5,-1.5],[1.5,1.5]]){let r=new H(Xm.wheel,Zm.dark);r.rotation.z=Math.PI/2,r.position.set(e,.5,n),t.add(r)}let l=new H(Xm.sign,Zm.sign);return l.position.set(.5,3.8,1),l.rotation.x=-.15,t.add(l),t.scale.setScalar(Ym),t}var nh=4,rh=8,ih=2.8,ah=1.4,oh=4.199999999999999,sh=4.5,ch=6.4,lh=5.3,uh=ch,dh=[];function fh(e){for(let t=0;t<dh.length;t++){let n=dh[t];if(n.holdLeft>0){if(n.holdLeft-=e,n.holdLeft<=0){let e=n.currentIdx,t=0;for(;e===n.currentIdx&&t++<6;)e=Math.floor(Math.random()*n.waypoints.length);n.targetIdx=e}continue}let r=n.waypoints[n.targetIdx],i=r.x-n.cook.position.x,a=r.z-n.cook.position.z,o=Math.hypot(i,a);if(o<.05){n.cook.position.x=r.x,n.cook.position.z=r.z,n.cook.rotation.y=r.facing,n.currentIdx=n.targetIdx,n.holdLeft=r.holdMin+Math.random()*(r.holdMax-r.holdMin);continue}let s=Math.min(n.walkSpeed*e,o),c=1/o;n.cook.position.x+=i*c*s,n.cook.position.z+=a*c*s,n.cook.rotation.y=Math.atan2(-i,-a)}}var ph=new Map;function mh(e,t){if(ph.has(e))return ph.get(e);let n=t();return ph.set(e,n),n}function hh(e){let t=new Io(e);return t.colorSpace=x,t.anisotropy=8,t}function gh(e,t,n,r=`bold`,i=1/0,a=`"Trebuchet MS", "Helvetica Neue", Helvetica, Arial, sans-serif`){let o=n;for(;o>10;){if(e.font=`${r} ${o}px ${a}`,e.measureText(t).width<=i)return o;o-=2}return 10}function _h(){return mh(`headerBanner`,()=>{let e=document.createElement(`canvas`);e.width=1024,e.height=256;let t=e.width/2048,n=e.getContext(`2d`);n.fillStyle=`#f0e2c0`,n.fillRect(0,0,e.width,e.height),n.strokeStyle=`rgba(140, 100, 50, 0.10)`,n.lineWidth=2*t;for(let r=0;r<e.height;r+=14*t)n.beginPath(),n.moveTo(0,r),n.lineTo(e.width,r),n.stroke();n.strokeStyle=`rgba(70, 50, 30, 0.5)`,n.lineWidth=6*t,n.strokeRect(12*t,12*t,e.width-24*t,e.height-24*t),n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#a63a4a`,gh(n,`FESTIVAL · FAMOUS`,84*t,`bold`,e.width-80*t),n.fillText(`FESTIVAL · FAMOUS`,e.width/2,95*t),n.fillStyle=`#5b3a1f`,n.font=`italic bold ${120*t}px "Brush Script MT", "Snell Roundhand", "Trebuchet MS", cursive`;let r=n.measureText(`the`).width;gh(n,`SUGAR SHACK`,220*t,`bold`,e.width-r-100*t);let i=n.measureText(`SUGAR SHACK`).width,a=r+50*t+i,o=(e.width-a)/2+r/2;return n.font=`italic bold ${120*t}px "Brush Script MT", "Snell Roundhand", "Trebuchet MS", cursive`,n.fillText(`the`,o-30*t,250*t),gh(n,`SUGAR SHACK`,220*t,`bold`,e.width-r-100*t),n.fillText(`SUGAR SHACK`,o+r/2+50*t+i/2,270*t),n.fillStyle=`#5b3a1f`,gh(n,`BREAKFAST  ALL  DAY  +  NIGHT`,76*t,`bold`,e.width-80*t),n.fillText(`BREAKFAST  ALL  DAY  +  NIGHT`,e.width/2,430*t),n.fillStyle=`#c63a2a`,n.beginPath(),n.arc(e.width*.18,95*t,16*t,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(e.width*.82,95*t,16*t,0,Math.PI*2),n.fill(),n.fillStyle=`#f4c430`,n.beginPath(),n.arc(e.width*.25,430*t,22*t,0,Math.PI*2),n.fill(),n.fillStyle=`#dcdce4`,n.beginPath(),n.arc(e.width*.75,430*t,22*t,0,Math.PI*2),n.fill(),n.fillStyle=`#f0e2c0`,n.beginPath(),n.arc(e.width*.75+8*t,425*t,20*t,0,Math.PI*2),n.fill(),hh(e)})}function vh(){return mh(`menuPlank`,()=>{let e=document.createElement(`canvas`);e.width=1024,e.height=192;let t=e.width/2048,n=e.getContext(`2d`);n.fillStyle=`#a8682e`,n.fillRect(0,0,e.width,e.height),n.strokeStyle=`rgba(60, 30, 10, 0.22)`,n.lineWidth=2*t;for(let r=0;r<e.height;r+=16*t){n.beginPath(),n.moveTo(0,r);for(let i=0;i<e.width;i+=64*t)n.lineTo(i,r+Math.sin(i*.013+r*.07)*3*t);n.stroke()}n.fillStyle=`rgba(60, 30, 10, 0.45)`;for(let r=0;r<6;r++){let i=(r+.5)*(e.width/6)+(r%2==0?40*t:-40*t),a=60*t+r*71*t%(e.height-120*t);n.beginPath(),n.ellipse(i,a,18*t,10*t,0,0,Math.PI*2),n.fill()}n.strokeStyle=`rgba(0,0,0,0.55)`,n.lineWidth=8*t,n.strokeRect(10*t,10*t,e.width-20*t,e.height-20*t),n.textAlign=`center`,n.textBaseline=`middle`;let r=[{lines:[`FRENCH`,`TOAST`],color:`#c63a2a`},{lines:[`VEGGIE`,`THING`],color:`#3a7b3a`},{lines:[`VERMONT`,`MAPLE`,`TREATS`],color:`#e09818`},{lines:[`HOT & COLD`,`DRINKS`],color:`#c63a2a`}],i=e.width/r.length;for(let a=0;a<r.length;a++){let o=r[a],s=(a+.5)*i,c=o.lines.length,l=(c===3?92:120)*t;n.fillStyle=o.color;let u=l*1.05,d=c*u;for(let r=0;r<c;r++){gh(n,o.lines[r],l,`bold`,i-40*t);let a=e.height/2-d/2+(r+.5)*u;n.fillText(o.lines[r],s,a)}}return hh(e)})}var yh=[{name:`COFFEE`,note:`Good + Strong!`,prices:[`Hot 2.00`,`Iced 2.50`]},{name:`ICED MOCHA`,prices:[`3.00`]},{name:`ICED Wild Berry TEA`,prices:[`3.00`]},{name:`OREGON CHAI`,prices:[`Hot 2.50`,`Iced 3.00`]},{name:`HOT CHOCOLATE`,note:`our special recipe`,prices:[`2.50`]},{name:`JUICE`,note:`Apple, Orange, Grape, Cranberry`,prices:[`2.00 / 2.50`]},{name:`WHOLE MILK`,prices:[`2.00 / 2.50`]},{name:`CHOCOLATE MILK`,prices:[`2.50 / 3.00`]},{name:`MAPLE MILK`,prices:[`2.50 / 3.00`]},{name:`SPRING WATER`,prices:[`1.00`]},{name:`TEA`,note:`selection below`,prices:[`Hot 2.00`,`Iced 2.50`]}],bh=[{name:`FRENCH TOAST`,price:`6.00`},{name:`COMBO`,price:`8.00`,sub:`french toast & eggs`},{name:`FRIED EGG SANDWICH`,price:`7.00`},{name:`VEGGIE THING`,price:`9.00`,sub:`tortilla, cheese, greens`,highlight:`#3a7b3a`},{name:`BREAKFAST THING`,price:`11.00`,sub:`3 scrambled eggs +`,highlight:`#3a7b3a`},{name:`CHEESE QUESADILLA`,price:`5.00`},{name:`SCRAMBLED EGGS`,price:`4.00`},{name:`MAPLE NUTS`,price:`4.00`},{name:`FUDGE OATY BAR`,price:`3.00`},{name:`PURE MAPLE CANDY`,price:`1.00`}];function xh(e,t,n,r=1.3,i=2){return mh(`${e}|${r.toFixed(2)}|${i.toFixed(2)}`,()=>{let e=document.createElement(`canvas`);e.width=512,e.height=Math.round(i/r*512);let a=e.getContext(`2d`);a.fillStyle=`#fbf6e8`,a.fillRect(0,0,e.width,e.height),a.strokeStyle=`rgba(50,30,10,0.55)`,a.lineWidth=8,a.strokeRect(10,10,e.width-20,e.height-20),a.strokeStyle=`rgba(50,30,10,0.30)`,a.lineWidth=3,a.strokeRect(28,28,e.width-56,e.height-56),a.fillStyle=`#c63a2a`,a.textAlign=`center`,a.textBaseline=`middle`,gh(a,t,110,`bold`,e.width-80),a.fillText(t,e.width/2,80);let o=(e.height-160-40)/n.length;a.textBaseline=`middle`;for(let t=0;t<n.length;t++){let r=n[t],i=160+(t+.5)*o;if(a.fillStyle=r.highlight||`#1c1330`,a.textAlign=`left`,gh(a,r.name,44,`bold`,e.width*.62),a.fillText(r.name,40,i-(r.sub||r.note?10:0)),(r.sub||r.note)&&(a.fillStyle=`rgba(28, 19, 48, 0.7)`,a.font=`italic 26px "Trebuchet MS", "Helvetica Neue", Helvetica, Arial, sans-serif`,a.fillText(r.sub||r.note,40,i+22)),a.fillStyle=`#1c1330`,a.textAlign=`right`,r.price)gh(a,r.price,42,`bold`,e.width*.3),a.fillText(r.price,e.width-40,i);else if(r.prices){a.font=`bold 30px "Trebuchet MS", "Helvetica Neue", Helvetica, Arial, sans-serif`;for(let t=0;t<r.prices.length;t++){let n=i-14+t*28;a.fillText(r.prices[t],e.width-40,n)}}}return hh(e)})}function Sh(){return mh(`thankYou`,()=>{let e=document.createElement(`canvas`);e.width=1024,e.height=256;let t=e.getContext(`2d`);return t.fillStyle=`#c63d8a`,t.fillRect(0,0,e.width,e.height),t.strokeStyle=`rgba(0,0,0,0.25)`,t.lineWidth=6,t.strokeRect(10,10,e.width-20,e.height-20),t.fillStyle=`#fff4d0`,t.textAlign=`center`,t.textBaseline=`middle`,gh(t,`THANK YOU`,110,`bold`,e.width-60),t.fillText(`THANK YOU`,e.width/2,100),gh(t,`for a real good time`,56,``,e.width-60),t.fillText(`for a real good time`,e.width/2,200),hh(e)})}function Ch(){return mh(`tieDye`,()=>{let e=document.createElement(`canvas`);e.width=256,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#3a6fd0`,t.fillRect(0,0,e.width,e.height);let n=(n,r,i,a)=>{let o=t.createRadialGradient(n,r,0,n,r,i);o.addColorStop(0,a),o.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=o,t.fillRect(0,0,e.width,e.height)};return n(60,80,90,`#f5a623`),n(180,50,80,`#d040a8`),n(140,180,110,`#8b3fce`),n(70,220,90,`#3fce5e`),n(210,170,80,`#e74c3c`),n(180,110,60,`#f5e030`),hh(e)})}function wh(){let e=pm(16777215,15122584,{pantsHex:4863264}),t=new J({map:Ch(),roughness:.9,flatShading:!0});e.traverse(e=>{e.isMesh&&e.material&&e.material.color&&e.material.color.r>.95&&e.material.color.g>.95&&e.material.color.b>.95&&(e.material=t)});let n=new J({color:14078664,roughness:.85,flatShading:!0}),r=new H(new q(.3,1),n);r.position.set(0,1.78,.08),r.scale.set(1.05,.8,1.05),e.add(r);let i=new H(new oc(.07,.025,6,12),new J({color:2763306,roughness:.8,flatShading:!0}));i.position.set(0,1.55,.2),i.rotation.x=Math.PI/2,e.add(i);let a=new H(new K(.05,.08,.48,8),n);a.position.set(0,1.34,.24),a.rotation.x=.12,e.add(a);let o=new J({color:8026738,roughness:.85,flatShading:!0});for(let[t,n,r]of[[-.12,1.52,-.2],[.12,1.52,-.2],[-.08,1.49,-.23],[.08,1.49,-.23],[0,1.47,-.24],[-.13,1.55,-.18],[.13,1.55,-.18],[-.05,1.51,-.23],[.05,1.51,-.23]]){let i=new H(new ac(.022,4,4),o);i.position.set(t,n,r),e.add(i)}return e}function Th(e=Math.random){let t=[12991018,3830466,14719e3,7033146],n=[15122584,12620920,9138e3,15914162],r=t[Math.floor(e()*t.length)],i=n[Math.floor(e()*n.length)],a=pm(r,i,{pantsHex:2763324}),o=new J({color:16774352,roughness:.9,flatShading:!0}),s=new H(new U(.5,.95,.05),o);s.position.set(0,.95,-.26),a.add(s);let c=new H(new U(.32,.32,.04),o);c.position.set(0,1.36,-.26),a.add(c);let l=new H(new oc(.16,.018,6,14,Math.PI),o);l.position.set(0,1.52,-.18),l.rotation.y=Math.PI/2,l.rotation.z=Math.PI,a.add(l);let u=[2760728,5912864,8084026,12096874],d=new J({color:u[Math.floor(e()*u.length)],roughness:.85,flatShading:!0}),f=new H(new ac(.27,10,8),d);return f.position.set(0,1.82,.03),f.scale.set(1.02,.55,1.02),a.add(f),a}var Eh={wood:new J({color:5912864,roughness:.78,flatShading:!0}),darkWood:new J({color:7033146,roughness:.7,flatShading:!0}),dark:new J({color:1842204,roughness:.5,metalness:.4,flatShading:!0}),chrome:new J({color:13158600,roughness:.35,metalness:.75,flatShading:!0}),bulb:new J({color:16774848,emissive:16769126,emissiveIntensity:2.6,roughness:.2}),white:new J({color:16775403,roughness:.88,flatShading:!0,side:2}),tentPole:new J({color:15065296,roughness:.7,flatShading:!0}),facadePole:new J({color:7033146,roughness:.75,flatShading:!0}),counterBoard:new J({color:13154454,roughness:.85,flatShading:!0}),counterTop:new J({color:7033146,roughness:.6,flatShading:!0}),station:new J({color:11120048,roughness:.4,metalness:.55,flatShading:!0}),grillTop:new J({color:1842204,roughness:.55,flatShading:!0}),supply:new J({color:13945e3,roughness:.8,flatShading:!0}),stringBulb:new J({color:16773312,emissive:16769126,emissiveIntensity:1.2,roughness:.4})};for(let e of Object.values(Eh))e.userData.shared=!0;var Dh=new ac(.07,8,6);Dh.userData.shared=!0;var Oh=new K(.12,.12,.32,12);Oh.userData.shared=!0;function kh(e,t){let n=new G,r=.028,i=Math.PI/4.5*t,a=Eh.wood,o=Eh.dark,s=Eh.chrome,c=Eh.bulb,l=new z(0,1,0);function u(e,t){let n=t.clone().sub(e),i=n.length(),o=new H(new K(r,r,i,8),a);return o.position.copy(e).addScaledVector(n,.5),o.quaternion.setFromUnitVectors(l,n.clone().normalize()),o}let d=new z(0,0,0),f=new z(0,-e,0),p=new z(0,-e/2,.45);n.add(u(d,p)),n.add(u(f,p));let m=new G;m.position.copy(p),m.rotation.y=i,n.add(m);let h=new H(new U(.08,.07,.1),o);h.position.set(0,0,-.02),m.add(h);let g=new H(new hs(.11,.2,16),s);g.rotation.x=Math.PI/2,g.position.set(0,0,-.16),m.add(g);let _=new H(new ac(.05,12,10),c);if(_.position.set(0,0,-.23),m.add(_),rl.contextLights){let e=new Nc(16773316,5,4.5,Math.PI/3.8,.6,.8);e.position.set(0,0,-.22),e.castShadow=!1;let t=new qt;t.position.set(0,0,-2),m.add(t),e.target=t,m.add(e),Nd(e)}return n}function Ah(e,t,n,r,i,a={}){let o=new J({color:i,roughness:.75,flatShading:!0}),s=new J({map:r,roughness:.9,emissive:a.glow?a.glowColor||16769184:0,emissiveMap:a.glow?r:null,emissiveIntensity:a.glow||0});return new H(new U(e,t,n),[o,o,o,o,s,o])}function jh(e,t){let n=t*nh/2,r=rh/2,i=new Float32Array([n,0,r,n,ih,r,n,ih,-4,n,0,-4]),a=t>0?[0,3,1,1,3,2]:[0,1,3,1,2,3],o=new Dn;o.setAttribute(`position`,new _n(i,3)),o.setIndex(a),o.computeVertexNormals();let s=new H(o,e);return s.castShadow=!0,s.receiveShadow=!0,s}var Mh=1.05,Nh=.65;function Ph(e=Math.random){let t=new G;t.userData.kind=`sugarShack`;let n=Eh.white,r=Eh.tentPole,i=Eh.facadePole,a=.16;for(let e of[-4,0,rh/2])for(let n of[-2,nh/2]){let i=new H(new U(a,ih,a),r);i.position.set(n,ih/2,e),t.add(i)}let o=new H(new U(a,oh,a),r);o.position.set(0,oh/2,-4),t.add(o),t.add(jh(n,-1)),t.add(jh(n,1));let s=Math.sqrt((nh/2)**2+ah**2),c=Math.atan2(ah,nh/2),l=new U(s+.1,.08,8.4),u=new H(l,n);u.position.set(nh/4,3.5,0),u.rotation.z=-c,u.castShadow=!0,t.add(u);let d=new H(l,n);d.position.set(-1,3.5,0),d.rotation.z=c,d.castShadow=!0,t.add(d);let f=new Float32Array([-2,ih,-4,nh/2,ih,-4,0,oh,-4]),p=new Dn;p.setAttribute(`position`,new _n(f,3)),p.setIndex([0,1,2]),p.computeVertexNormals();let m=new H(p,n);m.castShadow=!0,t.add(m);let h=.18;for(let e of[-6.4/2,ch/2]){let n=new H(new U(h,lh,h),i);n.position.set(e,lh/2,sh),t.add(n)}let g=.12,_=4.56,v=Ah(6.1000000000000005,.95,g,vh(),5912864);v.position.set(0,3.3499999999999996,_),t.add(v);let y=1.4,b=Ah(6.1000000000000005,y,g,_h(),7033146);b.position.set(0,4.5249999999999995,_),t.add(b);let x=1.3,S=1.7249999999999996,C=3.925/2,w=Ah(x,S,g,xh(`drinks`,`DRINKS`,yh,x,S),16774352);w.position.set(-2.4000000000000004,C,_),t.add(w);let T=Ah(x,S,g,xh(`food`,`FOOD`,bh,x,S),16774352);T.position.set(ch/2-x/2-.15,C,_),t.add(T);let E=new H(new U(3.6,Mh,Nh),Eh.counterBoard);E.position.set(0,Mh/2,rh/2-Nh/2),E.receiveShadow=!0,t.add(E);let D=new H(new U(3.7,.08,.75),Eh.counterTop);D.position.set(0,1.09,rh/2-Nh/2),t.add(D);let O=Sh(),k=new H(new _r(3.4,.7),new J({map:O,roughness:.95,side:2}));k.position.set(0,Mh/2,4.02),t.add(k);let A=Eh.station,j=Eh.grillTop,M=.85,N=[rh/2-Nh-1.2,rh/2-Nh-3.4];for(let e of[-1.525,nh/2-M/2-.05])for(let n of N){let r=new H(new U(M,1,1.4),A);r.position.set(e,1/2,n),t.add(r);let i=new H(new U(.75,.08,1.2999999999999998),j);i.position.set(e,1.04,n),t.add(i)}for(let e=0;e<5;e++){let n=new H(Oh,Eh.supply);n.position.set(-1+e*.25,1.29,3.5),t.add(n)}let ee=wh();ee.rotation.y=Math.PI,ee.position.set(-.45,0,rh/2-Nh-.6),t.add(ee);let te=Th(e);t.add(te);let ne=rh/2-Nh-1.2,re=rh/2-Nh-3.4,ie=rh/2-Nh-.6,ae=.75,oe=[{x:-.75,z:ne,facing:Math.PI/2,holdMin:2,holdMax:5},{x:-.75,z:re,facing:Math.PI/2,holdMin:2,holdMax:5},{x:ae,z:ne,facing:-Math.PI/2,holdMin:2,holdMax:5},{x:ae,z:re,facing:-Math.PI/2,holdMin:2,holdMax:5},{x:.55,z:ie,facing:Math.PI,holdMin:3,holdMax:6}],se=Math.floor(e()*oe.length);te.position.set(oe[se].x,0,oe[se].z),te.rotation.y=oe[se].facing;let ce={cook:te,waypoints:oe,currentIdx:se,targetIdx:se,holdLeft:1+e()*3,walkSpeed:1.1+e()*.4,chunkKey:null};dh.push(ce),t.userData.cookEntry=ce;let le=new Oo(Dh,Eh.stringBulb,20),ue=new St,de=0;for(let e=0;e<10;e++){let n=-4+rh*((e+.5)/10);for(let e of[-1.95,nh/2-.05])if(ue.makeTranslation(e,2.75,n),le.setMatrixAt(de++,ue),rl.fancyLights){let r=new Rc(16773312,.18,1.6,1.5);r.position.set(e,2.75,n),r.castShadow=!1,t.add(r),Nd(r)}}if(le.instanceMatrix.needsUpdate=!0,t.add(le),rl.contextLights){let e=new Rc(16773312,1.8,5,1);e.position.set(0,2.5,rh/2-2),e.castShadow=!1,t.add(e),Nd(e)}for(let e of[-1,1]){let n=kh(y,e);n.position.set(e*3.0700000000000003,5.225,4.62),t.add(n)}return t.rotation.y=(e()-.5)*.02,t}function Fh(e,t,n=Math.random){let r=new G;r.name=`hammock`;let i=new J({color:6965802,roughness:.95,flatShading:!0}),a=[16740252,16765578,7327594,6740479,11699711],o=a[Math.floor(n()*a.length)],s=n()*Math.PI*2,c=Math.cos(s),l=Math.sin(s);for(let n of[-1,1]){let a=new H(new K(.12,.15,2.2,8),i);a.position.set(e+n*2*c,1.1,t+n*2*l),r.add(a)}let u=[],d=[];for(let n=0;n<=16;n++){let r=(n/16-.5)*2,i=r*2,a=1.5+-Math.cos(r*Math.PI/2)*.55;for(let n of[-1,1]){let r=n*1.05/2,o=i*c-r*l,s=i*l+r*c;u.push(e+o,a,t+s)}}for(let e=0;e<16;e++){let t=e*2,n=e*2+1,r=(e+1)*2,i=(e+1)*2+1;d.push(t,r,n),d.push(n,r,i)}let f=new Dn;f.setAttribute(`position`,new V(u,3)),f.setIndex(d),f.computeVertexNormals();let p=new H(f,new J({color:o,roughness:.95,side:2,flatShading:!0}));return p.castShadow=!0,p.receiveShadow=!0,r.add(p),{group:r,seatPos:new z(e,1.15,t),yaw:s}}function Ih(e=null){let t=new G,n=new J({color:5212749,roughness:.9,flatShading:!0}),r=new H(new U(.6,8,.6),n);r.position.set(-6,4,0),r.castShadow=!0,t.add(r);let i=r.clone();i.position.x=6,t.add(i);let a=new H(new oc(6,.4,8,24,Math.PI),new J({color:16740252,roughness:.7,flatShading:!0}));if(a.position.set(0,8,0),a.castShadow=!0,t.add(a),e){let n=new H(new _r(8,2.2),new J({map:e.diffuse,emissive:16769126,emissiveMap:e.emissive,emissiveIntensity:.55,roughness:.6,side:2}));n.position.set(0,10.5,0),t.add(n)}return t}var Lh=[16740252,16765578,11699711,6740479,7327594,16747099];function Rh(e,t=Math.random){let n=new G,r=Lh[Math.floor(t()*Lh.length)],i=new J({color:r,roughness:.85,flatShading:!0}),a=new J({color:15122584,roughness:.9,flatShading:!0}),o=new J({color:1710634,roughness:.92,flatShading:!0});for(let e of[-.12,.12]){let t=new H(new K(.1,.1,.7,8),o);t.position.set(e,.35,0),n.add(t);let r=new H(new U(.16,.07,.24),new J({color:273,roughness:.8}));r.position.set(e,.035,-.06),n.add(r)}let s=new H(new ps(.28,.55,4,8),i);s.position.y=1.1,s.castShadow=!0,n.add(s);for(let e of[-1,1]){let t=new G;t.position.set(e*.3,1.3,0),t.rotation.x=.5,t.rotation.z=e*.05;let r=new H(new ps(.08,.3,4,6),i);r.position.y=-.18,t.add(r);let o=new G;o.position.y=-.36,o.rotation.x=.5,t.add(o);let s=new H(new ps(.07,.3,4,6),a);s.position.y=-.18,o.add(s),n.add(t)}let c=new H(new q(.28,1),a);c.position.y=1.8,c.castShadow=!0,n.add(c);let l=new J({color:273,roughness:.8});for(let e of[-.09,.09]){let t=new H(new ac(.03,6,6),l);t.position.set(e,1.83,-.24),n.add(t)}let u=new J({color:15249474,roughness:.4,metalness:.85,flatShading:!0,side:2}),d=new J({color:1184274,roughness:.6,flatShading:!0}),f=new J({color:6965802,roughness:.9,flatShading:!0});if(e===`guitar`){let e=new H(new U(.55,.7,.15),new J({color:[10173226,4878122,2236996,12749380][Math.floor(t()*4)],roughness:.5,flatShading:!0}));e.position.set(.15,1,-.35),e.rotation.z=-.4,n.add(e);let r=new H(new U(1,.09,.09),f);r.position.set(-.45,1.3,-.4),r.rotation.z=-.4,n.add(r);let i=new H(new U(.2,.18,.06),f);i.position.set(-.95,1.4,-.42),i.rotation.z=-.4,n.add(i)}else if(e===`bass`){let e=new H(new U(.6,.85,.18),new J({color:1717848,roughness:.5,flatShading:!0}));e.position.set(.1,.9,-.35),e.rotation.z=-.35,n.add(e);let t=new H(new U(1.2,.1,.1),f);t.position.set(-.55,1.25,-.4),t.rotation.z=-.35,n.add(t)}else if(e===`drum`){let e=new H(new K(.7,.7,.6,16),new J({color:16774352,roughness:.7,flatShading:!0}));e.rotation.x=Math.PI/2,e.position.set(0,.6,-.6),n.add(e);let t=new H(new K(.32,.32,.4,12),new J({color:13204027,roughness:.7,flatShading:!0}));t.position.set(.45,1.25,-.55),n.add(t);let r=new H(new K(.4,.4,.03,16),u);r.position.set(-.5,1.65,-.55),r.rotation.x=-.15,n.add(r)}else if(e===`sax`){let e=new H(new K(.13,.18,.95,10),u);e.position.set(.25,1.25,-.35),e.rotation.z=-.35,n.add(e);let t=new H(new hs(.28,.45,12,1,!0),u);t.position.set(.45,1.8,-.35),t.rotation.z=-.35,n.add(t)}else{let e=new H(new K(.18,.22,.05,12),d);e.position.set(0,.025,-.4),n.add(e);let t=new H(new K(.025,.025,1.5,8),d);t.position.set(0,.8,-.4),n.add(t);let r=new H(new ac(.09,8,6),d);r.position.set(0,1.55,-.4),n.add(r)}return n}function zh(e={}){let{isMain:t=!1,leafTexture:n=null,rng:r=Math.random,scale:i=1}=e,a=new G,o=(t?24:14)*i,s=(t?12:8)*i,c=1.5*i,l=new H(new U(o,c,s),new J({color:4864554,roughness:.95,flatShading:!0}));l.position.set(0,c/2,0),l.castShadow=!0,l.receiveShadow=!0,a.add(l);let u=t?7327594:[16751243,13073919,6740479,16765578][Math.floor(r()*4)],d=new H(new U(o,7*i,.4*i),new J({color:u,roughness:.9,flatShading:!0}));if(d.position.set(0,4.5*i,-s/2-.2*i),d.castShadow=!0,a.add(d),t&&n){let e=new H(new _r(Math.min(o-2*i,16*i),3.4*i),new J({map:n.diffuse,emissive:16765578,emissiveMap:n.emissive,emissiveIntensity:.55,roughness:.6,side:2}));e.position.set(0,5.3*i,-s/2+.06*i),a.add(e)}let f=new J({color:2760506,roughness:.5,metalness:.4,flatShading:!0}),p=9*i,m=.25*i;for(let[e,t]of[[-o/2+.3*i,-s/2+.3*i],[o/2-.3*i,-s/2+.3*i],[-o/2+.3*i,s/2-.3*i],[o/2-.3*i,s/2-.3*i]]){let n=new H(new U(m,p,m),f);n.position.set(e,p/2,t),a.add(n)}for(let e of[-o/2,o/2]){let t=new H(new U(m,m,s),f);t.position.set(e,p,0),a.add(t)}for(let e of[-s/2,s/2]){let t=new H(new U(o,m,m),f);t.position.set(0,p,e),a.add(t)}let h=1.6*i,g=1.4*i;for(let e of[-o/2-1*i,o/2+1*i])for(let t=0;t<3;t++){let n=new H(new U(h,g,h),new J({color:1184274,roughness:.8,flatShading:!0}));n.position.set(e,1.4*i+t*1.45*i,-s/2+1.2*i),a.add(n)}let _=[],v=[],y=[16724864,16747067,16769126,7327594,3398143,12615935];for(let e=0;e<3;e++){let n=[-o*.32,0,o*.32][e],s=t?y[Math.floor(r()*y.length)]:16765578,c=new H(new hs(.4*i,.6*i,12,1,!0),new J({color:s,emissive:s,emissiveIntensity:2.5,side:2,transparent:!0,opacity:.85})),l=p-.7*i;c.position.set(n,l,0),c.rotation.x=Math.PI,a.add(c),_.push(c);let u=new Nc(s,0,24*i,Math.PI/7,.45,1);u.position.set(n,l-.1,0);let d=new qt;d.position.set(n,0,10*i),a.add(d),u.target=d,a.add(u),Nd(u),v.push({beam:u,target:d,baseTargetX:n,baseTargetZ:10*i,phaseOffset:e*1.7})}return{group:a,deckWidth:o,deckDepth:s,deckHeight:c,scale:i,frontZ:s/2,stageLights:_,stageBeams:v}}function Bh(e,t,n){let{deckWidth:r,deckDepth:i,deckHeight:a,rng:o=Math.random}=n,s=r,c=-i*.25,l=[];for(let n=0;n<t.length;n++){let r=t[n],i=r===`lead_vocal`||r===`drum`||r===`bass`,u=s*.32,d=(n/(t.length-1||1)-.5)*u*2,f=r===`drum`?c:i&&n===0?1.5:0,p=Rh(r,o);p.position.set(d,a,f),p.rotation.y=Math.PI,e.add(p),l.push(p)}return l}var Vh=28,Hh=38,Uh=11,Wh=5.5;function Gh(e={}){let{rng:t=Math.random,leafTexture:n=null}=e,r=new G;r.name=`TentStage`;let i=Vh/2,a=Hh/2,o=new J({color:16775403,roughness:.85,side:2,flatShading:!0}),s=(e,t)=>{let n=new Float32Array(e.length*3);for(let t=0;t<e.length;t++)n[t*3+0]=e[t][0],n[t*3+1]=e[t][1],n[t*3+2]=e[t][2];let r=[];for(let t=1;t<e.length-1;t++)r.push(0,t,t+1);let i=new Dn;return i.setAttribute(`position`,new _n(n,3)),i.setIndex(r),i.computeVertexNormals(),new H(i,t)};r.add(s([[-14,0,-19],[-14,Wh,-19],[0,Uh,-19],[i,Wh,-19],[i,0,-19]],o)),r.add(s([[-14,Wh,-19],[-14,Wh,a],[0,Uh,a],[0,Uh,-19]],o)),r.add(s([[0,Uh,-19],[0,Uh,a],[i,Wh,a],[i,Wh,-19]],o));let c=new J({color:6965802,roughness:.9,flatShading:!0}),l=new H(new U(.18,.18,Hh),c);l.position.set(0,Uh,0),r.add(l);for(let[e,t]of[[-14,-19],[i,-19],[-14,a],[i,a]]){let n=new H(new K(.15,.18,Wh,8),c);n.position.set(e,Wh/2,t),r.add(n)}let u=zh({isMain:!1,leafTexture:n,rng:t,scale:.82}),d=-16+u.deckDepth/2;u.group.position.set(0,0,d),r.add(u.group),Bh(u.group,[`lead_vocal`,`guitar`,`drum`],{deckWidth:u.deckWidth,deckDepth:u.deckDepth,deckHeight:u.deckHeight,rng:t});let f=new J({color:3812898,roughness:.9,flatShading:!0}),p=new H(new U(4,.5,2.5),f);p.position.set(0,.25,16),p.castShadow=!0,p.receiveShadow=!0,r.add(p);let m=new H(new U(3,.18,1.4),new J({color:1710626,roughness:.5,metalness:.4}));m.position.set(0,1.05,15.6),m.rotation.x=-.18,r.add(m);let h=[16733559,16769126,6750088,6740479];for(let e=0;e<12;e++){let t=new H(new ac(.045,6,6),new J({color:h[e%h.length],emissive:h[e%h.length],emissiveIntensity:1.4}));t.position.set(-1.3+e*.24,1.16,15.45),r.add(t)}let g=new z(0,0,16),_=[];for(let e=0;e<18;e++){let e=(t()-.5)*24,n=-11+t()*24;_.push(new z(e,0,n))}return{group:r,stagePos:new z(0,0,d),stageWidth:u.deckWidth,stageDepth:u.deckDepth,stageHeight:u.deckHeight,stageScale:u.scale,stageLights:u.stageLights,stageBeams:u.stageBeams,mixerPos:g,crowdSpots:_,openingZ:a,width:Vh,depth:Hh,ridgeHeight:Uh}}var Kh=new Map;function qh(e,t){let n=document.createElement(`canvas`);n.width=1024,n.height=256;let r=n.getContext(`2d`);r.fillStyle=t,r.fillRect(0,0,n.width,n.height),r.strokeStyle=`rgba(0,0,0,0.18)`,r.lineWidth=8,r.strokeRect(8,8,n.width-16,n.height-16),r.fillStyle=e,r.font=`bold 140px "Trebuchet MS", "Helvetica Neue", Helvetica, Arial, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`FESTIVAL`,n.width/2,n.height/2+8);let i=new Io(n);return i.colorSpace=x,i.anisotropy=8,i}function Jh(e,t){let n=`${e}|${t}`;if(Kh.has(n))return Kh.get(n);let r=qh(e,t);return Kh.set(n,r),r}function Yh(e,t,n){return{diffuse:Jh(e,t),emissive:Jh(n,`#000000`)}}var Xh=rl.chunkLoadRadius,Zh=rl.chunkUnloadRadius,Qh=[],$h=[],eg=[],tg=[];function ng(e){for(let t=0;t<Qh.length;t++){let n=Qh[t],r=e*3+n.phase;n.group.position.y=n.baseY+Math.abs(Math.sin(r))*.08,n.group.rotation.z=Math.sin(r*.5)*.05,n.group.rotation.y=n.baseYaw+Math.sin(r*.3)*.15}}var rg=6,ig=[16724864,16756275,16769126,6750088,3398143,12615935],ag=new B,og=new B,sg=new z,cg=new Float32Array(64),lg=Array.from({length:64},(e,t)=>t),ug=64;function dg(e,t,n){for(let n=0;n<eg.length;n++){let r=eg[n],i=r.lens.material;if(t<.05){i.emissiveIntensity=2.4+Math.sin(e*1.5+n)*.2;let t=ag.setHex(r.baseColor);i.color.lerp(t,.05),i.emissive.lerp(t,.05)}else{let r=e*1.4+n*.7,a=Math.floor((e*.4+n)%ig.length),o=(a+1)%ig.length,s=(e*.4+n)%1;ag.setHex(ig[a]),og.setHex(ig[o]);let c=ag.lerp(og,s);i.color.copy(c),i.emissive.copy(c),i.emissiveIntensity=2+(.5+.5*Math.sin(r))*5*t}}let r=[{ax:6,az:3,rateX:.9,rateZ:1.3,phaseZ:0},{ax:2,az:5,rateX:1.4,rateZ:.7,phaseZ:1.5},{ax:5,az:4,rateX:.6,rateZ:1.1,phaseZ:2.4}],i=I.smoothstep(t,.15,.7),a=tg.length,o=null;if(n&&a>rg){a>ug&&(cg=new Float32Array(a),lg=Array.from({length:a},(e,t)=>t),ug=a);for(let e=0;e<a;e++){let t=tg[e];t.stageWorldPos?(sg.copy(t.stageWorldPos).sub(n),cg[e]=sg.x*sg.x+sg.z*sg.z):cg[e]=0,lg[e]=e}lg.length=a,lg.sort((e,t)=>cg[e]-cg[t]),o=new Set(lg.slice(0,rg))}for(let t=0;t<a;t++){let n=tg[t],a=r[t%r.length],s=e+n.phaseOffset;n.target.position.x=n.baseTargetX+Math.sin(s*a.rateX)*a.ax*n.scale,n.target.position.z=n.baseTargetZ+Math.sin(s*a.rateZ+a.phaseZ)*a.az*n.scale;let c=Math.floor((e*.35+t*1.3)%ig.length),l=(c+1)%ig.length,u=(e*.35+t*1.3)%1;if(ag.setHex(ig[c]),og.setHex(ig[l]),n.beam.color.copy(ag.lerp(og,u)),o===null||o.has(t)){let e=.55+.45*Math.sin(s*2.2);n.beam.intensity=i*e*9}else n.beam.intensity=0}}var fg={count:0,slowCount:0,slowest:0,lastMs:0,_totalMs:0,get avgMs(){return this.count>0?this._totalMs/this.count:0}},pg=8,mg=class{constructor(e,t){this.scene=e,this.crowd=t,this.loaded=new Map}update(e){let t=Math.round(e.x/80),n=Math.round(e.z/80),r=this.loaded.size===0?1/0:1,i=[];for(let r=-Xh;r<=Xh;r++)for(let a=-Xh;a<=Xh;a++){let o=t+r,s=n+a,c=hg(o,s);if(!this.loaded.has(c)){let t=o*80,n=s*80,r=t-e.x,a=n-e.z;i.push({cx:o,cz:s,d2:r*r+a*a})}}i.sort((e,t)=>e.d2-t.d2);for(let e of i){if(r--<=0)break;let t=performance.now();this._generate(e.cx,e.cz);let n=performance.now()-t;fg.count++,fg._totalMs+=n,fg.lastMs=n,n>fg.slowest&&(fg.slowest=n),n>pg&&(fg.slowCount++,console.warn(`[chunk slow] (${e.cx},${e.cz}) ${n.toFixed(1)}ms`))}for(let[e,r]of this.loaded){let i=Math.abs(r.cx-t),a=Math.abs(r.cz-n);(i>Zh||a>Zh)&&this._unload(e,r)}}_unload(e,t){t.group.traverse(e=>{if(e.isMesh){e.geometry?.userData?.shared||e.geometry?.dispose();let t=e.material;if(Array.isArray(t))for(let e of t)e?.userData?.shared||e?.dispose?.();else t?.userData?.shared||t?.dispose?.()}}),this.scene.remove(t.group),Y.removeChunk(e),this.crowd&&this.crowd.unloadChunk(e);for(let t=Qh.length-1;t>=0;t--)Qh[t].chunkKey===e&&Qh.splice(t,1);for(let t=$h.length-1;t>=0;t--)$h[t].chunkKey===e&&(nd.detachStageMusic($h[t].handle),$h.splice(t,1));for(let t=eg.length-1;t>=0;t--)eg[t].chunkKey===e&&eg.splice(t,1);for(let t=tg.length-1;t>=0;t--)tg[t].chunkKey===e&&tg.splice(t,1);for(let t=dh.length-1;t>=0;t--)dh[t].chunkKey===e&&dh.splice(t,1);for(let t=Sp.length-1;t>=0;t--)Sp[t].chunkKey===e&&Sp.splice(t,1);for(let t=Cp.length-1;t>=0;t--)Cp[t].chunkKey===e&&Cp.splice(t,1);for(let t=wp.length-1;t>=0;t--)wp[t].chunkKey===e&&(nd.detachStageMusic(wp[t].handle),wp.splice(t,1));this.loaded.delete(e)}_generate(e,t){let n=hg(e,t),r=Ap(e,t),i=r?`forest`:gg(e,t),a=new G;a.name=`chunk(${e},${t},${i})`;let o=e===0&&t===0?Pu(e,t):Fu(e,t),s={cx:e,cz:t,key:n,theme:i,cxWorld:e*80,czWorld:t*80,rng:Iu(o),group:a,crowd:this.crowd};if(r)Pp(s,r);else{yg(s);let e=Vf(s.cxWorld,s.czWorld);e||vg[i](s),xg(s,e?0:_g[i].treeDensity),zg(s,e?0:_g[i].ambientCrowd)}this.scene.add(a),this.loaded.set(n,{group:a,cx:e,cz:t,theme:i})}};function hg(e,t){return`${e},${t}`}function gg(e,t){if(e===0&&t===0)return`main_stage`;let n=Math.hypot(e,t),r=Iu(Fu(e,t,1))();return e===0&&t===1?r<.35?`drum_circle`:r<.6?`vendor_row`:r<.8?`grove`:`open_lawn`:n<=1.5?r<.05?`tent_stage`:r<.12?`side_stage`:r<.35?`food_plaza`:r<.65?`vendor_row`:r<.8?`drum_circle`:r<.92?`grove`:`open_lawn`:n<=3.5?r<.07?`camp_village`:r<.15?`tent_stage`:r<.25?`side_stage`:r<.42?`food_plaza`:r<.62?`vendor_row`:r<.74?`drum_circle`:r<.9?`grove`:`open_lawn`:r<.12?`camp_village`:r<.17?`tent_stage`:r<.24?`side_stage`:r<.32?`food_plaza`:r<.4?`drum_circle`:r<.52?`vendor_row`:r<.77?`grove`:`open_lawn`}var _g={main_stage:{treeDensity:.15,ambientCrowd:42},side_stage:{treeDensity:.25,ambientCrowd:24},tent_stage:{treeDensity:.1,ambientCrowd:30},food_plaza:{treeDensity:.2,ambientCrowd:22},vendor_row:{treeDensity:.3,ambientCrowd:20},drum_circle:{treeDensity:.4,ambientCrowd:18},grove:{treeDensity:1,ambientCrowd:11},open_lawn:{treeDensity:.2,ambientCrowd:14},camp_village:{treeDensity:.45,ambientCrowd:8}},vg={main_stage:Sg,side_stage:Cg,tent_stage:wg,food_plaza:Tg,vendor_row:Eg,drum_circle:Dg,grove:Og,open_lawn:kg,camp_village:Pg};function yg(e){if(Bf(e.cxWorld,e.czWorld,40))return;let t=new J({color:12096880,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),n=bg(e.cxWorld-40-1,e.czWorld,e.cxWorld+40+1,e.czWorld,5,e.rng,t);e.group.add(n);let r=bg(e.cxWorld,e.czWorld-40-1,e.cxWorld,e.czWorld+40+1,5,e.rng,t);e.group.add(r);let i=new H(new ms(5,16),t);i.rotation.x=-Math.PI/2,i.position.set(e.cxWorld,.06,e.czWorld),e.group.add(i),Y.add({kind:`path_node`,position:new z(e.cxWorld,0,e.czWorld),footprint:0,attractor:{radius:6,weight:.5},chunkKey:e.key})}function bg(e,t,n,r,i,a,o){let s=i/2,c=Math.hypot(n-e,r-t),l={x:(n-e)/c,z:(r-t)/c},u={x:-l.z,z:l.x},d=Math.min(i*1.5,c*.1),f=[{x:e,z:t}];for(let n=1;n<=3;n++){let r=n/4,i=e+l.x*c*r,o=t+l.z*c*r,s=(a()-.5)*2*d;f.push({x:i+u.x*s,z:o+u.z*s})}f.push({x:n,z:r});let p=new Go(f.map(e=>new z(e.x,0,e.z)),!1,`catmullrom`,.5),m=[],h=[];for(let e=0;e<=16;e++){let t=e/16,n=p.getPoint(t),r=p.getTangent(t),i=-r.z,a=r.x;m.push(n.x+i*s,0,n.z+a*s),m.push(n.x-i*s,0,n.z-a*s)}for(let e=0;e<16;e++){let t=e*2,n=e*2+1,r=(e+1)*2,i=(e+1)*2+1;h.push(t,r,n),h.push(n,r,i)}let g=new Dn;g.setAttribute(`position`,new V(m,3)),g.setIndex(h),g.computeVertexNormals();let _=new H(g,o);return _.position.y=.06,_.receiveShadow=!0,_}function xg(e,t){let n=Math.floor(t*18),r=0,i=0;for(;r<n&&i<n*5;){i++;let t=e.cxWorld+(e.rng()-.5)*74,n=e.czWorld+(e.rng()-.5)*74;if(Math.abs(t-e.cxWorld)<4&&Math.abs(n-e.czWorld)<40||Math.abs(n-e.czWorld)<4&&Math.abs(t-e.cxWorld)<40||Y.closestBuilding(new z(t,0,n),2.5))continue;let a=vf(e.rng);a.position.set(t,0,n),a.rotation.y=e.rng()*Math.PI*2,e.group.add(a),Y.add({kind:`tree`,position:new z(t,0,n),footprint:1.2,attractor:{radius:4,weight:.15},chunkKey:e.key}),r++}}function Sg(e){let t=e.cxWorld;Fg(e,t,e.czWorld-20,!0),Ig(e,t,e.czWorld+30);for(let n=-25;n<=25;n+=16)Rg(e,t-18,e.czWorld+n,t+18,e.czWorld+n)}function Cg(e){Fg(e,e.cxWorld+(e.rng()-.5)*10,e.czWorld+(e.rng()-.5)*10,!1)}function wg(e){let t=Yh(`#fff4d0`,`#6fcf6a`,`#ffd28a`),n=Gh({rng:e.rng,leafTexture:t}),r=e.rng()*Math.PI*2;n.group.position.set(e.cxWorld,0,e.czWorld),n.group.rotation.y=r,e.group.add(n.group);for(let t of n.stageLights)eg.push({lens:t,chunkKey:e.key,baseColor:t.material.color.getHex()});if(n.stageBeams){let t=new z(e.cxWorld,0,e.czWorld);for(let r of n.stageBeams)tg.push({...r,chunkKey:e.key,scale:n.stageScale||1,stageWorldPos:t})}let i=Math.cos(r),a=Math.sin(r),o=(t,n)=>({x:e.cxWorld+t*i+n*a,z:e.czWorld+-t*a+n*i}),s=n.stageWidth,c=n.stageDepth,l=2.5,u=Math.max(.001,s-l*2),d=Math.max(.001,c-l*2),f=Math.max(2,Math.ceil(u/3.5)+1),p=Math.max(2,Math.ceil(d/3.5)+1);for(let t=0;t<f;t++)for(let r=0;r<p;r++){let i=o(n.stagePos.x+(-u/2+t/(f-1)*u),n.stagePos.z+(-d/2+r/(p-1)*d));Y.add({kind:`stage`,position:new z(i.x,1,i.z),footprint:l,collider:{radius:l,damage:9},chunkKey:e.key})}let m=n.width/2,h=n.depth/2;for(let[t,n]of[[-m,-h],[m,-h],[-m,h],[m,h]]){let r=o(t,n);Y.add({kind:`tent`,position:new z(r.x,0,r.z),footprint:.5,collider:{radius:.5,damage:3},chunkKey:e.key})}{let t=o(n.mixerPos.x,n.mixerPos.z);Y.add({kind:`tent`,position:new z(t.x,.5,t.z),footprint:1.4,collider:{radius:1.4,damage:5},attractor:{radius:3,weight:.6},chunkKey:e.key})}{let t=o(0,n.stagePos.z+c/2+4);Y.add({kind:`stage_front`,position:new z(t.x,0,t.z),footprint:0,attractor:{radius:10,weight:2.5},chunkKey:e.key})}if(e.crowd){for(let t of n.crowdSpots){let n=o(t.x,t.z);e.crowd.spawn({pos:new z(n.x,0,n.z),chunkKey:e.key,rng:e.rng})}let t=o(n.mixerPos.x,n.mixerPos.z+.6);e.crowd.spawn({pos:new z(t.x,0,t.z),chunkKey:e.key,rng:e.rng})}{let t=n.stagePos.z+n.stageDepth/2,i=n.mixerPos.z-1.5,a=t+(i-t)/3,s=i,c=n.width-5,l=4+Math.floor(e.rng()*2);for(let t=0;t<l;t++){let t=(e.rng()-.5)*c,n=a+e.rng()*(s-a),i=3+Math.floor(e.rng()*4);for(let a=0;a<i;a++){let i=(e.rng()-.5)*2.8,a=(e.rng()-.5)*2,s=o(t+i,n+a),c=Yd(e.rng);c.group.position.set(s.x,0,s.z),c.group.rotation.y=r+Math.PI+(e.rng()-.5)*.7,e.group.add(c.group),Y.add({kind:`chair`,position:new z(s.x,0,s.z),footprint:.5,chunkKey:e.key})}}if(e.rng()<.7){let t=(e.rng()-.5)*(c-4),i=n.mixerPos.z+1.5+e.rng()*2,a=2+Math.floor(e.rng()*3);for(let n=0;n<a;n++){let n=(e.rng()-.5)*2.5,a=(e.rng()-.5)*1.5,s=o(t+n,i+a),c=Yd(e.rng);c.group.position.set(s.x,0,s.z),c.group.rotation.y=r+Math.PI+(e.rng()-.5)*.7,e.group.add(c.group),Y.add({kind:`chair`,position:new z(s.x,0,s.z),footprint:.5,chunkKey:e.key})}}}let g=Fu(e.cx*13+23,e.cz*19+17),_=o(0,n.stagePos.z),v=nd.attachStageMusic(_.x,4,_.z,g,`jam`);v&&$h.push({handle:v,chunkKey:e.key})}function Tg(e){let t=3+Math.floor(e.rng()*3),n=e.cxWorld,r=e.czWorld,i=14*Ym,a=e.rng()<.35?Math.floor(e.rng()*t):-1;for(let o=0;o<t;o++){let s=o/t*Math.PI*2+e.rng()*.4;if(o===a){let t=i+2.5,a=n+Math.cos(s)*t,o=r+Math.sin(s)*t,c=Ph(e.rng);c.position.set(a,0,o),c.rotation.y=Math.atan2(n-a,r-o),e.group.add(c),c.userData.cookEntry&&(c.userData.cookEntry.chunkKey=e.key);let l=Math.hypot(uh,9)/2;Y.add({kind:`truck`,position:new z(a,1.5,o),footprint:l+.5,collider:{radius:l-.2,damage:10},attractor:{radius:l+6,weight:1.4},chunkKey:e.key});continue}let c=n+Math.cos(s)*i,l=r+Math.sin(s)*i,u=th(e.rng);u.position.set(c,0,l),u.rotation.y=Math.atan2(n-c,r-l),e.group.add(u),Y.add({kind:`truck`,position:new z(c,1.5*Ym,l),footprint:4.4*Ym,collider:{radius:3.6*Ym,damage:12},attractor:{radius:8*Ym,weight:1.2},chunkKey:e.key})}}function Eg(e){let t=e.rng()<.5,n=5+Math.floor(e.rng()*3);for(let r=0;r<n;r++)for(let i of[-1,1]){let a=r-(n-1)/2,o=e.cxWorld+(t?a*5:i*7),s=e.czWorld+(t?i*7:a*5),c=Im(e.rng);c.position.set(o,0,s),c.rotation.y=t?i<0?0:Math.PI:i<0?Math.PI/2:-Math.PI/2,e.group.add(c),Y.add({kind:`tent`,position:new z(o,0,s),footprint:2.6,collider:{radius:2.2,damage:5},attractor:{radius:4,weight:.5},chunkKey:e.key})}}function Dg(e){let t=e.cxWorld+(e.rng()-.5)*8,n=e.czWorld+(e.rng()-.5)*8,r=new H(new q(.6,1),new J({color:16742195,emissive:16733457,emissiveIntensity:2.5,roughness:.8}));if(r.position.set(t,.6,n),e.group.add(r),rl.contextLights){let r=new Rc(16745792,1.5,12,1.2);r.position.set(t,1,n),r.castShadow=!1,e.group.add(r),Nd(r)}for(let r=0;r<8;r++){let i=r/8*Math.PI*2,a=t+Math.cos(i)*1.4,o=n+Math.sin(i)*1.4,s=new H(new q(.3+e.rng()*.15,0),new J({color:6974072,roughness:1,flatShading:!0}));s.position.set(a,.3,o),e.group.add(s)}let i=new H(new K(.7,.55,1.4,14),new J({color:9132587,roughness:.9,flatShading:!0}));i.position.set(t+3,.7,n+1),e.group.add(i),Y.add({kind:`drum_circle`,position:new z(t,0,n),footprint:1.5,collider:{radius:1.2,damage:4},attractor:{radius:12,weight:2.2},chunkKey:e.key});let a=Fu(e.cx*13+7,e.cz*17+11),o=nd.attachStageMusic(t,1,n,a,`drum`);o&&$h.push({handle:o,chunkKey:e.key})}function Og(e){let t=2+Math.floor(e.rng()*3);for(let n=0;n<t;n++){let t=e.cxWorld+(e.rng()-.5)*48,n=e.czWorld+(e.rng()-.5)*48;Math.abs(t-e.cxWorld)<6&&Math.abs(n-e.czWorld)<6||Lg(e,t,n)}Ag(e,{chance:.5,max:2,clumpChance:.2})}function kg(e){let t=3+Math.floor(e.rng()*4);for(let n=0;n<t;n++){let t=e.cxWorld+(e.rng()-.5)*56,n=e.czWorld+(e.rng()-.5)*56,r=[16740252,16765578,7327594,6740479,11699711,16747099],i=new H(new _r(2.6,2.6),new J({color:r[Math.floor(e.rng()*r.length)],roughness:.9,side:2}));i.rotation.x=-Math.PI/2,i.position.set(t,.06,n),i.rotation.z=e.rng()*Math.PI*2,e.group.add(i),Y.add({kind:`picnic`,position:new z(t,0,n),footprint:0,attractor:{radius:3,weight:.4},chunkKey:e.key})}Ag(e,{chance:.65,max:2,clumpChance:.3})}function Ag(e,{chance:t=.5,max:n=2,clumpChance:r=0}={}){e.rng()>t||(r>0&&e.rng()<r?Mg(e):jg(e,1+Math.floor(e.rng()*n)))}function jg(e,t){for(let n=0;n<t;n++){let t=null;for(let n=0;n<10;n++){let n=e.cxWorld+(e.rng()-.5)*56,r=e.czWorld+(e.rng()-.5)*56;if(!(Math.abs(n-e.cxWorld)<6||Math.abs(r-e.czWorld)<6)&&!Y.closestBuilding(new z(n,0,r),4)){t={x:n,z:r};break}}t&&Ng(e,t.x,t.z)}}function Mg(e){let t=null;for(let n=0;n<14;n++){let n=e.cxWorld+(e.rng()-.5)*44,r=e.czWorld+(e.rng()-.5)*44;if(!(Math.abs(n-e.cxWorld)<12||Math.abs(r-e.czWorld)<12)&&!Y.closestBuilding(new z(n,0,r),14)){t={x:n,z:r};break}}if(!t)return;let n=3+Math.floor(e.rng()*4),r=[];for(let i=0;i<n;i++){let n=null;for(let i=0;i<8;i++){let i=e.rng()*Math.PI*2,a=4+e.rng()*6,o=t.x+Math.cos(i)*a,s=t.z+Math.sin(i)*a,c=!1;for(let e=0;e<r.length;e++){let t=r[e].x-o,n=r[e].z-s;if(t*t+n*n<25){c=!0;break}}if(!c&&!Y.closestBuilding(new z(o,0,s),3)){n={x:o,z:s};break}}n&&(Ng(e,n.x,n.z),r.push(n))}}function Ng(e,t,n,r=`small`){let i=lf(e.rng,r);i.group.position.set(t,0,n),i.group.rotation.y=e.rng()*Math.PI*2,e.group.add(i.group),i.animatables&&i.animatables.length>0&&Sp.push({chunkKey:e.key,animatables:i.animatables}),Y.add({kind:`campsite`,position:new z(t,0,n),footprint:i.footprint,attractor:{radius:4,weight:.5},chunkKey:e.key})}function Pg(e){let t=e.rng()<.5?-1:1,n=e.rng()<.5?-1:1,r=e.cxWorld+t*40,i=e.czWorld+n*40,a=12+Math.floor(e.rng()*9),o=[],s=5.5,c=0;for(;o.length<a&&c<a*16;){c++;let t=r+(e.rng()-.5)*2*30,n=i+(e.rng()-.5)*2*30;if(Y.closestBuilding(new z(t,0,n),4))continue;let a=!1;for(let e of o){let r=e.x-t,i=e.z-n;if(r*r+i*i<s*s){a=!0;break}}if(a)continue;let l=e.rng();Ng(e,t,n,l<.5?`small`:l<.85?`medium`:`large`),o.push({x:t,z:n})}}function Fg(e,t,n,r){let i=r?1.15+e.rng()*.25:1+e.rng()*.5,a=zh({isMain:r,leafTexture:r?Yh(`#fff4d0`,`#6fcf6a`,`#ffd28a`):null,rng:e.rng,scale:i});a.group.position.set(t,0,n),e.group.add(a.group);let o=a.deckWidth,s=a.deckDepth,c=a.deckHeight;for(let t of a.stageLights)eg.push({lens:t,chunkKey:e.key,baseColor:t.material.color.getHex()});let l=new z(t,0,n);for(let t of a.stageBeams)tg.push({...t,chunkKey:e.key,scale:i,stageWorldPos:l});let u=2.5*i,d=r?14:9,f=Math.max(.001,o-u*2),p=Math.max(.001,s-u*2),m=Math.max(2,Math.ceil(f/(3.5*i))+1),h=Math.max(2,Math.ceil(p/(3.5*i))+1);for(let r=0;r<m;r++)for(let i=0;i<h;i++){let a=-f/2+r/(m-1)*f,o=-p/2+i/(h-1)*p;Y.add({kind:`stage`,position:new z(t+a,1,n+o),footprint:u,collider:{radius:u,damage:d},chunkKey:e.key})}if(Y.add({kind:`stage_front`,position:new z(t,0,n+s/2+6*i),footprint:0,attractor:{radius:14*i,weight:r?3.5:2},chunkKey:e.key}),e.crowd){let a=r?22:12,o=n+s/2+4*i,c=14*i;for(let n=0;n<a;n++){let r=1.5+(n<a*.4?0:n<a*.75?1:2)*3,i=(Math.random()-.5)*c,s=Math.random()*2.5;e.crowd.spawn({pos:new z(t+i,0,o+r+s),chunkKey:e.key,rng:e.rng})}}let g=9*i,_=s/2+g,v=s/2+g+14*i,y=11*i,b=r?4+Math.floor(e.rng()*2):2+Math.floor(e.rng()*2);for(let r=0;r<b;r++){let r=(e.rng()-.5)*y*2,i=_+e.rng()*(v-_),a=3+Math.floor(e.rng()*4);for(let o=0;o<a;o++){let a=(e.rng()-.5)*2.8,o=(e.rng()-.5)*2,s=Yd(e.rng),c=t+r+a,l=n+i+o;s.group.position.set(c,0,l),s.group.rotation.y=Math.PI+(e.rng()-.5)*.7,e.group.add(s.group),Y.add({kind:`chair`,position:new z(c,0,l),footprint:.5,chunkKey:e.key})}}let x=(r&&e.cx===0&&e.cz===0?Pu:Fu)(e.cx*7+(r?1:2),e.cz*11+(r?3:5)),S=nd.attachStageMusic(t,4,n,x,r?`jam`:`brass`);S&&$h.push({handle:S,chunkKey:e.key});let C=r?[`lead_vocal`,`guitar`,`guitar`,`bass`,`drum`,`sax`]:[`lead_vocal`,`guitar`,`drum`],w=Bh(a.group,C,{deckWidth:o,deckDepth:s,deckHeight:c,rng:e.rng});for(let t of w)Qh.push({group:t,chunkKey:e.key,baseY:c,baseYaw:Math.PI,phase:Math.random()*Math.PI*2})}function Ig(e,t,n){let r=Ih(Yh(`#fff4d0`,`#ff6f9c`,`#ffe066`));r.position.set(t,0,n),e.group.add(r),Y.add({kind:`arch`,position:new z(t-6,1,n),footprint:.8,collider:{radius:1,damage:4},chunkKey:e.key}),Y.add({kind:`arch`,position:new z(t+6,1,n),footprint:.8,collider:{radius:1,damage:4},chunkKey:e.key})}function Lg(e,t,n){let{group:r,seatPos:i,yaw:a}=Fh(t,n,e.rng);e.group.add(r),Y.add({kind:`hammock`,position:new z(t,0,n),footprint:1.6,attractor:{radius:3,weight:.6},chunkKey:e.key,hammock:{seatPos:i,yaw:a,occupied:!1}})}function Rg(e,t,n,r,i){let a=new J({color:2760506,roughness:.7,flatShading:!0});for(let[o,s]of[[t,n],[r,i]]){let t=new H(new K(.12,.15,6,8),a);t.position.set(o,3,s),e.group.add(t),Y.add({kind:`lamppost`,position:new z(o,0,s),footprint:.5,collider:{radius:.4,damage:2},chunkKey:e.key})}let o=new z(t,5.9,n),s=new z(r,5.9,i),c=o.clone().add(s).multiplyScalar(.5);c.y-=.6+o.distanceTo(s)*.02;let l=new ss(o,c,s),u=new H(new sc(l,12,.03,4,!1),new J({color:1710618}));e.group.add(u);let d=[16765578,16740252,9358054,7327594,13073919,16765286],f=new ac(.12,8,6);for(let t=0;t<6;t++){let n=(t+.5)/6,r=l.getPoint(n),i=d[t%d.length],a=new H(f,new J({color:i,emissive:i,emissiveIntensity:1.2}));a.position.copy(r),a.position.y-=.13,e.group.add(a)}}function zg(e,t){if(!e.crowd||t<=0)return;let n=[];for(let t of Y.byChunk(e.key))t.attractor&&t.attractor.weight>=.5&&n.push(t);for(let r=0;r<t;r++){let t,r,i=0,a;do{if(n.length>0&&e.rng()<.7){let i=n[Math.floor(e.rng()*n.length)],a=e.rng()*Math.PI*2,o=Math.sqrt(e.rng())*i.attractor.radius;t=i.position.x+Math.cos(a)*o,r=i.position.z+Math.sin(a)*o}else t=e.cxWorld+(e.rng()-.5)*72,r=e.czWorld+(e.rng()-.5)*72;i++,a=Y.closestBuilding(new z(t,0,r),1.5)||Hf(t,r)}while(a&&i<8);a||e.crowd.spawn({pos:new z(t,0,r),chunkKey:e.key,rng:e.rng})}}var Bg=360,Vg=new B(7321320),Hg=new B(16765096),Ug=new B(3812970),Wg=new B(16742990),Gg=new B(1185088),Kg=new B(2302280),qg=new B(16769456),Jg=new B(16742974),Yg=new B(10927327),Xg=new B(16764846),Zg=new B(12085850),Qg=new B(2302024),$g=new B(11130623),e_=new B(3818904),t_=new B(13144677),n_=new B(3942980),r_=1.35,i_=.18,a_=.75,o_=.55,s_=.15,c_=.18;function l_(e,t,n){let r=I.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function u_(e){return e>=.07&&e<=.43?0:e>.43&&e<.55?l_(.43,.55,e):e>=.55&&e<=.95?1:e>.95?1-l_(.95,1.07,e):1-l_(-.05,.07,e)}var d_=class{constructor(e,t={}){this.scene=e,this.cycleSeconds=t.cycleSeconds||Bg,this.t=t.startT==null?.15:t.startT,this._nightness=u_(this.t),this.sky=null,this.sun=null,this.hemi=null,this.ambient=null,this.fog=null}attach({sky:e,sun:t,hemi:n,ambient:r}){this.sky=e,this.sun=t,this.hemi=n,this.ambient=r,this.fog=this.scene.fog||null}get nightness(){return this._nightness}get sunAngle(){return this.t*Math.PI*2}update(e){this.t=(this.t+e/this.cycleSeconds)%1,this._nightness=u_(this.t),this._applyVisuals()}setT(e){this.t=(e%1+1)%1,this._nightness=u_(this.t),this._applyVisuals()}_applyVisuals(){let e=this._nightness,t=(()=>{let e=Math.abs(this.t-.49),t=Math.abs(this.t-.99),n=Math.min(e,t>.5?1-t:t);return I.clamp(1-n/.12,0,1)})();if(this.sky?.material?.uniforms){let n=f_,r=p_;n.copy(Vg).lerp(Ug,t),n.lerp(Gg,e*(1-t*.5)),r.copy(Hg).lerp(Wg,t),r.lerp(Kg,e*(1-t*.5)),this.sky.material.uniforms.topColor.value.copy(n),this.sky.material.uniforms.bottomColor.value.copy(r)}if(this.sun){let n=this.t>.07&&this.t<.43,r=n?(this.t-.07)*Math.PI/.36:0,i=n?Math.cos(r)*90:90,a=n?Math.max(15,Math.sin(r)*130):-40;this.sun.position.set(i,a,60);let o=f_;o.copy(qg).lerp(Jg,t),o.lerp(Yg,e),this.sun.color.copy(o),this.sun.intensity=r_*(1-e)+i_*e,this.sun.castShadow=e<.7}if(this.hemi&&(this.hemi.color.copy($g).lerp(e_,e),this.hemi.groundColor.copy(t_).lerp(n_,e),this.hemi.intensity=a_*(1-e)+o_*e),this.ambient&&(this.ambient.intensity=s_*(1-e)+c_*e),this.fog){let n=f_;n.copy(Xg).lerp(Zg,t),n.lerp(Qg,e),this.fog.color.copy(n)}}},f_=new B,p_=new B,m_=7321320,h_=16765096,g_=16769456,__=11130623,v_=13144677,y_=16764846,b_=8172410,x_=13014374,S_=1400,C_=220,w_=null,T_=null,E_=null,D_=null,O_=null,k_=null,A_=null,j_=null,M_=null,N_=null,P_=null,F_=null;function I_(){return F_}function L_(e,t){P_=e,O_=U_(e),k_=W_(e),A_=G_(e);let n=K_(e);return j_=n.sun,M_=n.hemi,N_=n.ambient,E_=q_(e),D_=Ou(e),F_=new d_(e),F_.attach({sky:O_,sun:j_,hemi:M_,ambient:N_}),T_=new jf,T_.update(e,new z(0,0,0)),w_=new mg(e,t),w_.update(new z(0,0,0)),{chunkManager:w_,lakeManager:T_}}var R_=NaN,z_=NaN,B_=40;function V_(e,t=.016){if(T_&&T_.update(P_,e,t),w_&&w_.update(e),F_&&F_.update(t),O_&&O_.position.set(e.x,0,e.z),k_){k_.position.set(e.x,0,e.z);let n=F_?F_.nightness:0;k_.material.uniforms.nightness.value=n,k_.material.uniforms.time.value+=t,k_.visible=n>.05}if(A_&&F_){let t=F_.t;if(t>.55&&t<.95){let n=(t-.55)*Math.PI/.4,r=Math.cos(n)*850*.55,i=Math.max(40,Math.sin(n)*850*.55);A_.position.set(e.x+r,i,e.z+-382.5),A_.visible=!0}else A_.visible=!1}E_&&(E_.position.set(e.x,0,e.z),(isNaN(R_)||Math.abs(e.x-R_)>B_||Math.abs(e.z-z_)>B_)&&(H_(E_,e.x,e.z),R_=e.x,z_=e.z)),D_&&D_.position.set(e.x,0,e.z),j_&&(j_.position.x+=e.x,j_.position.z+=e.z,j_.target.position.set(e.x,0,e.z),j_.target.updateMatrixWorld())}function H_(e,t,n){let r=e.geometry.attributes.position,i=Lu(t,n);for(let e=0;e<r.count;e++){let a=r.getX(e),o=r.getZ(e);r.setY(e,Lu(t+a,n+o)-i)}r.needsUpdate=!0}function U_(e){let t=new H(new ac(900,32,16),new er({side:1,uniforms:{topColor:{value:new B(m_)},bottomColor:{value:new B(h_)},offset:{value:30},exponent:{value:.85}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `}));return e.add(t),t}function W_(e){let t=1200,n=new Dn,r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t*3);for(let e=0;e<t;e++){let t=Math.random()*Math.PI*2,n=Math.acos(Math.random()*.95);r[e*3]=850*Math.sin(n)*Math.cos(t),r[e*3+1]=850*Math.cos(n),r[e*3+2]=850*Math.sin(n)*Math.sin(t),i[e]=1+Math.random()**4*4.5;let o=Math.random(),s,c,l;o<.7?(s=1,c=1,l=1):o<.85?(s=.85,c=.92,l=1):o<.95?(s=1,c=.95,l=.85):(s=1,c=.85,l=.72),a[e*3]=s,a[e*3+1]=c,a[e*3+2]=l}n.setAttribute(`position`,new _n(r,3)),n.setAttribute(`size`,new _n(i,1)),n.setAttribute(`color`,new _n(a,3));let o=new Po(n,new er({uniforms:{nightness:{value:0},time:{value:0},pixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vTwinkle;
      uniform float time;
      uniform float pixelRatio;
      void main() {
        vColor = color;
        // Per-star twinkle phase from position — deterministic, unique per star.
        float phase = position.x * 0.013 + position.z * 0.019 + position.y * 0.007;
        vTwinkle = 0.65 + 0.35 * sin(time * 1.6 + phase);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * pixelRatio;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float nightness;
      varying vec3 vColor;
      varying float vTwinkle;
      void main() {
        // Soft round splat — alpha falls off from center to edge.
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;
        float falloff = smoothstep(0.5, 0.0, d);
        float alpha = falloff * nightness * vTwinkle;
        gl_FragColor = vec4(vColor * vTwinkle, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}));return o.renderOrder=-1,e.add(o),o}function G_(e){let t=new G;t.name=`moon`;let n=new H(new q(14,2),new mn({color:16446172}));t.add(n);let r=new H(new q(11,2),new mn({color:13154458}));r.position.set(2.5,1.5,4),r.scale.set(.65,.55,.45),t.add(r);let i=new H(new q(22,1),new mn({color:12109024,transparent:!0,opacity:.22,blending:2,depthWrite:!1}));return t.add(i),t.renderOrder=0,t.visible=!1,e.add(t),t}function K_(e){e.fog=new vo(y_,120,520);let t=new Dc(__,v_,.75);e.add(t);let n=new Bc(g_,1.35);n.position.set(80,130,60),n.castShadow=rl.shadows;let r=rl.name===`high`?1024:512;n.shadow.mapSize.set(r,r),n.shadow.camera.near=1,n.shadow.camera.far=200;let i=rl.name===`high`?100:60;n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.bias=-5e-4,n.shadow.normalBias=.04,e.add(n),e.add(n.target);let a=new Vc(16777215,.15);return e.add(a),{sun:n,hemi:t,ambient:a}}function q_(e){let t=new _r(S_,S_,C_,C_);t.rotateX(-Math.PI/2);let n=t.attributes.position,r=new Float32Array(n.count*3),i=new B,a=new B(b_),o=new B(x_),s=Lu(0,0);for(let e=0;e<n.count;e++){let t=n.getX(e),c=n.getZ(e);n.setY(e,Lu(t,c)-s);let l=Math.sin(t*.04)*Math.cos(c*.045),u=I.clamp((l+1.1)*.4,0,1)*.35;i.copy(a).lerp(o,u),i.offsetHSL((Math.sin(e*12.9898)*.5+.5)*.05-.025,0,0),r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}t.setAttribute(`color`,new _n(r,3)),t.computeVertexNormals();let c=new H(t,new J({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0}));return c.receiveShadow=!0,e.add(c),c}var J_=18,Y_=28,X_=18,Z_=1.55,Q_=.78,$_=.3,ev=2.1,tv=15088443,nv=15909198,rv=2450390,iv=2760506,av=1842208,ov=10181078,sv=10939647,cv=2006015,lv=[16733559,16755251,16769126,6750088,6740479,12615935],uv=new B,dv=class{constructor(){this.root=new G,this.root.name=`Zerble`,this.position=this.root.position,this.heading=0,this.speed=0,this.steerAngle=0,this.radius=1.9,this.invulnLeft=0,this.honkCooldown=0,this.eyeGlowLevel=.5,this.nozzleWorld=new z,this.forwardWorld=new z,this._build()}_build(){let e=(e,t={})=>new J({color:e,flatShading:!0,roughness:t.roughness??.6,metalness:t.metalness??.05,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0}),t=new H(this._roundedBoxGeometry(3,.9,2.6,.18),e(tv,{roughness:.55}));t.position.set(0,.85,-.8),t.castShadow=!0,t.receiveShadow=!0,this.root.add(t);let n=new H(this._roundedBoxGeometry(3,.45,1.6,.12),e(tv,{roughness:.55}));n.position.set(0,.6,1.3),n.castShadow=!0,n.receiveShadow=!0,this.root.add(n);let r=new H(this._roundedBoxGeometry(2.6,.45,1,.14),e(tv,{roughness:.55}));r.position.set(0,1.2,-1.8),r.castShadow=!0,this.root.add(r);let i=new H(this._roundedBoxGeometry(2.2,.55,1,.1),e(rv,{roughness:.85}));i.position.set(0,1.45,-.4),this.root.add(i);let a=new H(this._roundedBoxGeometry(2.2,1,.22,.08),e(rv,{roughness:.85}));a.position.set(0,1.95,.1),this.root.add(a);let o=new H(this._roundedBoxGeometry(2.2,.55,1,.1),e(14141338,{roughness:.9}));o.position.set(0,1.45,1.1),this.root.add(o);let s=new H(this._roundedBoxGeometry(2.2,.9,.22,.08),e(14141338,{roughness:.9}));s.position.set(0,1.9,.5),this.root.add(s);let c=new K(.07,.07,2.4,8),l=e(iv,{roughness:.4,metalness:.5});for(let[e,t]of[[-1.3,-1.6],[1.3,-1.6],[-1.3,.4],[1.3,.4]]){let n=new H(c,l);n.position.set(e,2.5,t),this.root.add(n)}let u=new H(this._roundedBoxGeometry(3.4,.25,2.4,.12),e(nv,{roughness:.5}));u.position.set(0,3.75,-.6),u.castShadow=!0,this.root.add(u);let d=new H(this._roundedBoxGeometry(2.4,.08,1.6,.04),e(1315864,{roughness:.6}));d.position.set(0,.88,1.4),d.receiveShadow=!0,this.root.add(d);let f=[16733559,16755251,16769126,6750088,6740479,12615935,16737996],p=new ac(.045,6,6);this._floorLeds=[];let m=(e,t,n)=>{let r=f[n%f.length],i=new J({color:r,emissive:r,emissiveIntensity:1.8,roughness:.4}),a=new H(p,i);a.position.set(e,.94,t),a.userData={phase:n*.7,mat:i},this.root.add(a),this._floorLeds.push(a)},h=.22,g=0;for(let e=-1.15;e<=1.1509999999999998;e+=h)m(e,.6,g++);for(let e=-1.15;e<=1.1509999999999998;e+=h)m(e,2.2,g++);for(let e=.82;e<=1.981;e+=h)m(-1.15,e,g++),m(1.15,e,g++);let _=new H(new sc(new Go([new z(-.22,.85,1.95),new z(-.22,2.5,1.95),new z(-.12,2.78,1.95),new z(0,2.85,1.95),new z(.12,2.78,1.95),new z(.22,2.5,1.95),new z(.22,.85,1.95)]),48,.06,10,!1),e(iv,{roughness:.35,metalness:.75}));this.root.add(_),this.wheels=[];let v=new K(.55,.55,.45,18);v.rotateZ(Math.PI/2);let y=e(av,{roughness:.9}),b=new K(.22,.22,.48,12);b.rotateZ(Math.PI/2);let x=e(5591642,{roughness:.7,metalness:.6});for(let e of[{x:-1.4,z:-1.5,front:!0},{x:1.4,z:-1.5,front:!0},{x:-1.55,z:1.4,front:!1},{x:1.55,z:1.4,front:!1}]){let t=new G;t.position.set(e.x,.55,e.z);let n=new H(v,y);n.castShadow=!0,t.add(n);let r=new H(b,x);t.add(r);let i=new G;i.add(n),i.add(r),t.add(i),t.remove(n),t.remove(r),this.root.add(t),this.wheels.push({group:t,spin:i,front:e.front,baseY:t.position.y})}this.eyes=[],this._eyeGlowMats=[];for(let e of[-.78,.78]){let t=new G;t.position.set(e,2.15,-1.95);let n=new J({color:16777215,emissive:sv,emissiveIntensity:.5,roughness:.25,transparent:!0,opacity:.85,side:2}),r=new H(new ac(.7,24,16,Math.PI,Math.PI),n);r.castShadow=!1,t.add(r),this._eyeGlowMats.push(n);let i=new J({color:2763306,roughness:.9,side:2}),a=new H(new ac(.71,24,16,0,Math.PI),i);t.add(a);let o=new J({color:cv,emissive:cv,emissiveIntensity:.6,roughness:.3,transparent:!0,opacity:.78,side:2}),s=new H(new ac(.4,18,12,Math.PI,Math.PI),o);s.position.z=-.45,t.add(s),this._eyeGlowMats.push(o);let c=new H(new ac(.24,14,12),new J({color:0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.position.z=-.7,t.add(c),this.root.add(t),this.eyes.push({root:t,pupil:c,iris:s,basePos:t.position.clone()})}this._buildMustache(),this._headlightMat=new J({color:16773316,emissive:16769674,emissiveIntensity:1.2,roughness:.4});let S=new H(new U(1.6,.22,.05),new J({color:5591642,roughness:.4,metalness:.7}));S.position.set(0,.78,-2.13),this.root.add(S);for(let e of[-.55,-.18,.18,.55]){let t=new H(new U(.22,.16,.06),this._headlightMat);t.position.set(e,.78,-2.15),this.root.add(t)}this._headlightLights=[];for(let e of[-.4,.4]){let t=new Nc(16771780,0,28,Math.PI/6,.45,1);t.position.set(e,.95,-2);let n=new qt;n.position.set(e*1.5,0,-8),this.root.add(n),t.target=n,this.root.add(t),this._headlightLights.push(t)}let C=new H(this._roundedBoxGeometry(.9,.45,.6,.07),e(7032480,{roughness:.4}));C.position.set(0,3,1.95),C.castShadow=!0,this.root.add(C);let w=new H(new U(.5,.08,.18),e(iv,{roughness:.5,metalness:.4}));w.position.set(0,2.81,1.95),this.root.add(w),this.nozzle=new H(new hs(.22,.5,14),e(12098805,{roughness:.3,metalness:.5})),this.nozzle.position.set(0,3,2.45),this.nozzle.rotation.x=Math.PI/2,this.root.add(this.nozzle);let T=new G;T.position.set(0,2.7,1.95),T.rotation.x=3*Math.PI/4,this.root.add(T);let E=new H(new K(.2,.22,.14,16,1,!0),new J({color:1447446,roughness:.85,metalness:.3,side:2}));E.position.y=0,T.add(E);let D=new J({color:16777215,emissive:16777215,emissiveIntensity:1.4,roughness:.15,metalness:0,transparent:!0,opacity:.85}),O=new H(new q(.18,1),D);O.scale.set(1,.85,1),O.position.y=.08,T.add(O);let k=new Nc(16724864,0,14,Math.PI/4,.55,1.2);k.position.set(0,.08,0);let A=new qt;A.position.set(0,5,0),T.add(k),T.add(A),k.target=A,this._disco={group:T,dome:O,domeMat:D,light:k,phase:0,colorPhase:0,blastLevel:0};let j=new H(new ms(2.2,24),new mn({color:0,transparent:!0,opacity:.25}));j.rotation.x=-Math.PI/2,j.position.y=.02,this.root.add(j),this._buildDriver(),this.seatSlots=[{name:`front-right`,x:.55,y:1.75,z:-.35,yaw:0,occupied:!1,kind:`driver_seat`},{name:`back-left`,x:-.65,y:1.75,z:1.1,yaw:Math.PI,occupied:!1,kind:`bench`},{name:`back-center`,x:0,y:1.75,z:1.1,yaw:Math.PI,occupied:!1,kind:`bench`},{name:`back-right`,x:.65,y:1.75,z:1.1,yaw:Math.PI,occupied:!1,kind:`bench`},{name:`side-left`,x:-1.55,y:1.4,z:.4,yaw:-Math.PI/2,occupied:!1,kind:`standing`},{name:`side-right`,x:1.55,y:1.4,z:.4,yaw:Math.PI/2,occupied:!1,kind:`standing`},{name:`roof-front`,x:0,y:3.95,z:-1.2,yaw:0,occupied:!1,kind:`roof`},{name:`roof-back`,x:0,y:3.95,z:0,yaw:0,occupied:!1,kind:`roof`}]}_buildDriver(){let t=new G;t.position.set(-.55,1.75,-.35);let n=new H(new ps(.32,.55,4,8),new J({color:11029051,roughness:.95,flatShading:!0}));n.position.y=.05,n.castShadow=!0,t.add(n);let r=new H(new q(.28,1),new J({color:14262894,roughness:.9,flatShading:!0}));r.position.y=.75,t.add(r);let i=new J({color:4862496,roughness:1,flatShading:!0}),a=new H(new q(.3,1),i);a.position.set(.025,.86,.03),a.scale.set(1.05,.62,1.05),t.add(a);let o=new H(new q(.18,0),i);o.position.set(-.16,.78,.02),o.scale.set(1,.55,1),t.add(o);let s=new J({color:4863274,roughness:1,flatShading:!0}),c=new J({color:6112309,roughness:1,flatShading:!0}),l=new J({color:3022356,roughness:1,flatShading:!0});for(let e=0;e<40;e++){let n=e/40*Math.PI*1.22+Math.PI*.39,r=.2+Math.random()*.08,i=-.05-Math.random()*.4,a=.1+Math.random()*.05,o=e%5==4?l:e%2==0?s:c,u=new H(new q(a,0),o);u.position.set(Math.cos(n)*r*.75,.62+i,Math.sin(n)*r*.75-.06),u.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),t.add(u)}let u=new J({color:4863274,roughness:.95,flatShading:!0});for(let e of[-1,1]){let n=new H(new sc(new Go([new z(e*.03,.68,-.27),new z(e*.12,.67,-.28),new z(e*.22,.65,-.26),new z(e*.28,.63,-.24),new z(e*.3,.66,-.23),new z(e*.28,.7,-.23)]),20,.04,7,!1),u);t.add(n)}let d=new J({color:15790320,roughness:.5,flatShading:!0}),f=new J({color:2781112,roughness:.4,flatShading:!0});for(let e of[-.1,.1]){let n=new H(new ac(.045,8,6),d);n.position.set(e,.78,-.22),t.add(n);let r=new H(new ac(.025,7,5),f);r.position.set(e,.78,-.25),t.add(r)}let p=new G;p.position.set(0,.78,-.26),p.scale.setScalar(1.2),t.add(p);let m=document.createElement(`canvas`);m.width=256,m.height=256;let h=m.getContext(`2d`);h.fillStyle=`#ffffff`,h.fillRect(0,0,256,256),h.fillStyle=`#f5a623`,h.fillRect(140,20,90,80),h.fillRect(20,180,80,60),h.fillStyle=`#d04030`,h.fillRect(0,0,50,60),h.fillRect(180,180,76,76),h.fillStyle=`#4a90e2`,h.fillRect(60,60,60,90),h.fillStyle=`#f5e030`,h.fillRect(120,150,40,30),h.strokeStyle=`#1a1a1a`,h.lineWidth=10,h.beginPath(),h.moveTo(0,60),h.lineTo(256,60),h.moveTo(0,150),h.lineTo(256,150),h.moveTo(60,0),h.lineTo(60,256),h.moveTo(140,0),h.lineTo(140,256),h.moveTo(180,0),h.lineTo(180,256),h.stroke();let g=new Io(m);g.colorSpace=x,g.wrapS=e,g.wrapT=e;let _=new J({map:g,roughness:.45,metalness:.1,flatShading:!0}),v=new J({color:7317992,emissive:1716053,emissiveIntensity:.25,roughness:.15,transparent:!0,opacity:.55,side:2}),y=.105,b=.075,S=.014,C=.018;function w(){let e=y/2,t=b/2,n=new _s;n.moveTo(-.040499999999999994,-.0375),n.lineTo(.040499999999999994,-.0375),n.quadraticCurveTo(e,-.0375,e,-.0255),n.lineTo(e,.0255),n.quadraticCurveTo(e,t,.040499999999999994,t),n.lineTo(-.040499999999999994,t),n.quadraticCurveTo(-.0525,t,-.0525,.0255),n.lineTo(-.0525,-.0255),n.quadraticCurveTo(-.0525,-.0375,-.040499999999999994,-.0375);let r=.0385,i=.0235,a=new ds;return a.moveTo(-.0305,-.0235),a.lineTo(.0305,-.0235),a.quadraticCurveTo(r,-.0235,r,-.0155),a.lineTo(r,.0155),a.quadraticCurveTo(r,i,.0305,i),a.lineTo(-.0305,i),a.quadraticCurveTo(-.0385,i,-.0385,.0155),a.lineTo(-.0385,-.0155),a.quadraticCurveTo(-.0385,-.0235,-.0305,-.0235),n.holes.push(a),n}let T=new $s(w(),{depth:C,bevelEnabled:!1,curveSegments:4}),E=new _r(y-S*2,b-S*2);for(let e of[-.085,.085]){let t=new H(T,_);t.position.set(e,0,-.018/2),p.add(t);let n=new H(E,v);n.position.set(e,0,0),p.add(n)}let D=new H(new U(.07700000000000001,.014,C),_);D.position.set(0,.018,-.018/2),p.add(D);let O=.22,k=new U(.018,.014,O),A=.16,j=.1375+O/2*Math.sin(A)+.004;for(let e of[-1,1]){let t=new H(k,_);t.position.set(e*j,.004,.09),t.rotation.y=e*A,p.add(t)}let M=new J({color:14262894,roughness:.9});for(let e of[-.18,.18]){let n=new H(new ac(.08,8,6),M);n.position.set(e,.15,-.45),t.add(n)}let N=new H(new oc(.22,.04,6,14),new J({color:546,roughness:.4}));N.position.set(0,.15,-.5),N.rotation.x=Math.PI/2,t.add(N),this.root.add(t),this.driver=t}worldSeatPosition(e,t){let n=Math.cos(this.heading),r=Math.sin(this.heading);return t.set(this.position.x+e.x*n+e.z*r,this.position.y+e.y,this.position.z-e.x*r+e.z*n),t}_buildMustache(){let e=new J({color:ov,roughness:.95,flatShading:!0}),t=new J({color:8537288,roughness:1,flatShading:!0}),n=new J({color:11699688,roughness:1,flatShading:!0});this._mustacheLeds=[];let r=new ac(.07,8,6),i=new hs(.025,.42,5,1),a=new hs(.022,.28,5,1);i.translate(0,.21,0),a.translate(0,.14,0);for(let o of[-1,1]){let s=[];for(let e=0;e<=1.0001;e+=1/30){let t=o*(.05+e*1.85),n=-.22*Math.sin(Math.PI*e),r=.08*Math.sin(Math.PI*e);s.push(new z(t,n,r))}let c=s[s.length-1];s.push(new z(c.x+o*.08,c.y+.35,c.z)),s.push(new z(c.x+o*.02,c.y+.72,c.z)),s.push(new z(c.x-o*.35,c.y+.78,c.z)),s.push(new z(c.x-o*.65,c.y+.5,c.z)),s.push(new z(c.x-o*.7,c.y+.18,c.z));let l=new Go(s),u=new H(new sc(l,64,.22,6,!1),e);u.position.set(0,1.35,-2.3),u.castShadow=!0,this.root.add(u);let d=new z,f=new z,p=new z,m=new z,h=new z,g=new z(0,1,0);for(let e=0;e<96;e++){let r=(e+.5)/96,o=l.getPoint(r),s=l.getTangent(r).normalize();d.set(0,1,0),Math.abs(s.y)>.9&&d.set(1,0,0),f.crossVectors(s,d).normalize(),p.crossVectors(f,s).normalize();let c=e*2.39996%(Math.PI*2);m.copy(f).multiplyScalar(Math.cos(c)).addScaledVector(p,Math.sin(c)),h.copy(s).multiplyScalar(.75).addScaledVector(m,.2).addScaledVector(g,.05),h.x+=(Math.random()-.5)*.06,h.y+=(Math.random()-.5)*.06,h.z+=(Math.random()-.5)*.06,h.normalize();let _=new H(e%3==0?a:i,e%2==0?t:n);_.quaternion.setFromUnitVectors(g,h),_.position.copy(o).addScaledVector(m,.22*.55),u.add(_)}for(let e=0;e<14;e++){let t=e/13,n=l.getPoint(t),i=lv[e%lv.length],a=new J({color:i,emissive:i,emissiveIntensity:1.7}),o=new H(r,a);o.position.copy(n),o.position.y-=.18,o.userData={phase:Math.random()*Math.PI*2,baseIntensity:1.7,mat:a},u.add(o),this._mustacheLeds.push(o)}}}_roundedBoxGeometry(e,t,n){return new U(e,t,n,2,1,2)}update(e,t,n=0){let r=t.throttle,i=t.steer,a=t.boost&&r>0;this.isBoosting=a;let o=X_*(a?Z_:1);if(r!==0){let t=Math.sign(r)===Math.sign(this.speed)||this.speed===0?J_:Y_;this.speed+=r*t*e}else this.speed*=Q_**(e*4),Math.abs(this.speed)<$_&&(this.speed=0);this.speed=I.clamp(this.speed,-7,o);let s=I.clamp(Math.abs(this.speed)/6,.2,1),c=Math.sign(this.speed)||1;this.heading+=i*ev*s*c*e,this.steerAngle=I.lerp(this.steerAngle,i*.35,Math.min(1,e*10));let l=-Math.sin(this.heading),u=-Math.cos(this.heading);this.position.x+=l*this.speed*e,this.position.z+=u*this.speed*e,this.root.rotation.y=this.heading,this.position.y=0,this.forwardWorld.set(l,0,u),this.nozzleWorld.set(this.position.x+Math.sin(this.heading)*2.7,this.position.y+3,this.position.z+Math.cos(this.heading)*2.7);let d=this.speed/.55;for(let t of this.wheels)t.spin.rotation.x+=d*e,t.front&&(t.group.rotation.y=I.lerp(t.group.rotation.y,this.steerAngle,Math.min(1,e*10))),t.group.position.y=t.baseY+Math.sin(performance.now()*.01+t.group.position.x)*.02;let f=performance.now()*.001;for(let e of this.eyes)e.root.position.y=e.basePos.y+Math.sin(f*1.5+e.basePos.x)*.05,e.pupil.position.z=-.7+Math.sin(f*.7)*.02,e.pupil.position.x=Math.sin(f*.4)*.06;for(let e=0;e<this._mustacheLeds.length;e++){let t=this._mustacheLeds[e],n=t.userData.phase+f*3+e*.4;t.userData.mat.emissiveIntensity=1+.9*(.5+.5*Math.sin(n))}if(this._floorLeds)for(let e=0;e<this._floorLeds.length;e++){let t=this._floorLeds[e],n=t.userData.phase+f*4+e*.55;t.userData.mat.emissiveIntensity=1.2+1*(.5+.5*Math.sin(n))}if(this._disco){let t=+!!this._bubbleBlast;this._disco.blastLevel+=(t-this._disco.blastLevel)*Math.min(1,e*8);let r=this._disco.blastLevel;this._disco.phase+=e*(.7+r*1.8),this._disco.colorPhase+=e*(2.1+r*4),this._disco.dome.rotation.y=this._disco.phase;let i=this._disco.colorPhase*.15%1,a=.55+r*.3,o=uv.setHSL(i,.95,a);this._disco.domeMat.color.copy(o),this._disco.domeMat.emissive.copy(o);let s=1.5+Math.sin(f*5)*.6,c=4+Math.sin(f*18)*3;this._disco.domeMat.emissiveIntensity=s*(1-r)+c*r;let l=I.smoothstep(n,.2,.8);this._disco.light.color.copy(o);let u=l*6.5*(.7+.3*Math.sin(f*3+1.2)),d=(3+Math.abs(Math.sin(f*14))*14)*r;this._disco.light.intensity=u+d}let p=this.eyeGlowLevel;pu.isDown(`I`)?p=1:pu.isDown(`O`)&&(p=0);let m=2*e;this.eyeGlowLevel<p?this.eyeGlowLevel=Math.min(p,this.eyeGlowLevel+m):this.eyeGlowLevel>p&&(this.eyeGlowLevel=Math.max(p,this.eyeGlowLevel-m));let h=I.smoothstep(n,.25,.8)*8.5;if(this._headlightLights)for(let e of this._headlightLights)e.intensity=h;if(this._headlightMat&&(this._headlightMat.emissiveIntensity=1.2+n*3.8),this._eyeGlowMats){let e=.1+n*.15+this.eyeGlowLevel*(.45+n*.55);for(let t of this._eyeGlowMats)t.emissiveIntensity=e}this.invulnLeft>0&&(this.invulnLeft-=e),this.honkCooldown>0&&(this.honkCooldown-=e)}applyHit(e){this.speed=-Math.sign(this.speed||1)*2.5,this.position.x+=e.x*.6,this.position.z+=e.z*.6,this.invulnLeft=.7}canHonk(){return this.honkCooldown<=0}setBubbleBlast(e){this._bubbleBlast=!!e}honk(){this.honkCooldown=.15}},fv=rl.bubblePoolMax||200,pv=40,mv=22,hv=.25,gv=new z(0,1,0),_v=0;function vv(e){return{x:Math.sin(e*.21)*2.4+Math.cos(e*.07)*1.6+Math.sin(e*.43)*.8,z:Math.cos(e*.18)*2.4+Math.sin(e*.05)*1.6+Math.cos(e*.37)*.8}}var yv=class{constructor(){let e=new q(.11,1);this._fancyMat=new uc({color:16777215,roughness:.05,metalness:0,transmission:.95,thickness:.4,ior:1.2,transparent:!0,opacity:.85,side:2,iridescence:.6,iridescenceIOR:1.3,sheen:.4,sheenColor:new B(16751313),emissive:0,emissiveIntensity:0}),this._cheapMat=new J({color:13692671,roughness:.1,metalness:.25,transparent:!0,opacity:.55,side:2}),this.mesh=new Oo(e,this._fancyMat,fv),this.mesh.castShadow=!1,this.mesh.frustumCulled=!1,this.mesh.count=fv;let t=new St;t.makeScale(0,0,0);for(let e=0;e<fv;e++)this.mesh.setMatrixAt(e,t);this.mesh.instanceMatrix.needsUpdate=!0,this.particles=Array(fv).fill(null).map(()=>({alive:!1,pos:new z,vel:new z,size:1,age:0,life:mv,popping:!1,spin:Math.random()*Math.PI*2,kind:0,driftX:0,driftZ:0,driftMag:0,swirlPhase:0,swirlRate:0,swirlRadius:0})),this._spawnAcc=0,this._tmpMat=new St,this._tmpPos=new z,this._tmpQuat=new Ke,this._tmpScale=new z,this.blastMode=!1}setBlast(e){this.blastMode=!!e}setCheapMaterial(e){this.mesh.material=e?this._cheapMat:this._fancyMat}update(e,t,n=0){this.mesh.material===this._fancyMat&&(this._fancyMat.iridescence=I.lerp(.2,.85,n),this._fancyMat.iridescenceIOR=I.lerp(1.3,1.7,n),this._fancyMat.sheen=I.lerp(0,.6,n),this._fancyMat.sheenColor.setHex(16777215)),_v+=e;let r=Math.abs(t.speed),i=this.blastMode?2.8:1,a=pv*(.55+Math.min(1,r/8)*.45)*i;for(this._spawnAcc+=a*e;this._spawnAcc>=1;)--this._spawnAcc,this._spawnOne(t);for(let t=0;t<this.particles.length;t++){let n=this.particles[t];if(!n.alive)continue;if(n.age+=e,n.popping){let e=(n.age-n.popStart)/hv;if(e>=1){n.alive=!1,this._tmpMat.makeScale(0,0,0),this.mesh.setMatrixAt(t,this._tmpMat);continue}let r=n.size*(1-e)*(1+e*1.5);this._writeInstance(t,n.pos,r,n.spin);continue}if(n.age>=n.life){n.popping=!0,n.popStart=n.age;continue}n.vel.y+=.55*e;let r=vv(_v+t*.13);switch(n.kind){case 0:{let i=Math.sin(n.age*(1.4+t%7*.2)+t)*1.2,a=Math.cos(n.age*(1.1+t%5*.27)+t*1.3)*1.2;n.vel.x+=(r.x+i)*e,n.vel.z+=(r.z+a)*e;break}case 1:n.vel.x+=(n.driftX*n.driftMag+r.x*.1)*e,n.vel.z+=(n.driftZ*n.driftMag+r.z*.1)*e,n.vel.x+=Math.sin(n.age*3+t)*1.6*e,n.vel.z+=Math.cos(n.age*2.4+t*1.7)*1.6*e;break;case 2:{n.swirlPhase+=n.swirlRate*e;let t=-Math.sin(n.swirlPhase),i=Math.cos(n.swirlPhase),a=n.swirlRadius*Math.abs(n.swirlRate);n.vel.x+=(t*a+r.x*.3)*e,n.vel.z+=(i*a+r.z*.3)*e,n.vel.y+=.4*e;break}case 3:{let t=Math.max(0,1-n.age);n.vel.x+=(n.driftX*n.driftMag*2*t+r.x*.4)*e,n.vel.z+=(n.driftZ*n.driftMag*2*t+r.z*.4)*e;break}}let i=n.kind===0?.92:n.kind===3?.96:.95;n.vel.multiplyScalar(i**(e*60)),n.pos.addScaledVector(n.vel,e),n.spin+=e*.5,n.pos.y<.2&&(n.popping=!0,n.popStart=n.age),this._writeInstance(t,n.pos,n.size,n.spin)}this.mesh.instanceMatrix.needsUpdate=!0}_spawnOne(e){let t=-1;for(let e=0;e<this.particles.length;e++)if(!this.particles[e].alive){t=e;break}if(t===-1)return;let n=this.particles[t];n.alive=!0,n.popping=!1,n.age=0,n.life=mv*(.7+Math.random()*.6),n.size=.7+Math.random()*1.3,n.pos.copy(e.nozzleWorld),n.pos.x+=(Math.random()-.5)*.15,n.pos.z+=(Math.random()-.5)*.15;let r=Math.random();n.kind=r<.55?0:r<.78?1:r<.92?2:3;let i=Math.random()*Math.PI*2;n.driftX=Math.cos(i),n.driftZ=Math.sin(i),n.driftMag=2+Math.random()*3,n.swirlPhase=Math.random()*Math.PI*2,n.swirlRate=(Math.random()<.5?1:-1)*(3+Math.random()*3),n.swirlRadius=.3+Math.random()*.6;let a=e.forwardWorld.clone().multiplyScalar(-1);n.vel.set(a.x*2.6,.3+Math.random()*.5,a.z*2.6),n.vel.x+=(Math.random()-.5)*1.2,n.vel.z+=(Math.random()-.5)*1.2,n.vel.y+=(Math.random()-.5)*.4,n.spin=Math.random()*Math.PI*2,this._writeInstance(t,n.pos,n.size,n.spin)}_writeInstance(e,t,n,r){this._tmpPos.copy(t),this._tmpQuat.setFromAxisAngle(gv,r),this._tmpScale.setScalar(n),this._tmpMat.compose(this._tmpPos,this._tmpQuat,this._tmpScale),this.mesh.setMatrixAt(e,this._tmpMat)}forEachAlive(e){for(let t=0;t<this.particles.length;t++){let n=this.particles[t];n.alive&&!n.popping&&e(n)}}},bv=`https://esm.sh/tone@14.7.77`,xv=`https://esm.sh/@tonejs/midi@2.0.28`,Sv=.18,Cv=class{constructor(){this.Tone=null,this.Midi=null,this.synth=null,this.effects=null,this.parts=[],this.manifest=null,this.isPlaying=!1,this.currentTrack=null,this._loadingPromise=null,this._tripEnvelope=0,this._baseBpm=120}async _ensureLoaded(){return this.Tone&&this.Midi?!0:(this._loadingPromise||=(async()=>{try{let[e,t]=await Promise.all([import(bv),import(xv)]);this.Tone=e,this.Midi=t.Midi;let n=nd.getContext();n&&this.Tone.setContext(new this.Tone.Context({context:n})),await this.Tone.start(),this._buildEffectChain(),this._buildSynth();try{let e=await fetch(`assets/music/manifest.json`,{cache:`no-store`});e.ok&&(this.manifest=await e.json())}catch{this.manifest=null}return!0}catch(e){return console.warn(`[midi] failed to load Tone.js / @tonejs/midi`,e),!1}})(),this._loadingPromise)}_buildEffectChain(){let e=this.Tone,t=new e.Vibrato({frequency:5,depth:.04}),n=new e.AutoFilter({frequency:.3,depth:.5,baseFrequency:1200,octaves:2.5,wet:0}).start(),r=new e.PingPongDelay({delayTime:`8n`,feedback:.22,wet:.1}),i=new e.Reverb({decay:4.5,wet:.18}),a=nd.getMidiInputNode();t.chain(n,r,i),i.connect(a??e.Destination),this.effects={vibrato:t,filter:n,delay:r,reverb:i},this._inputNode=t}_buildSynth(){let e=this.Tone;this.synth=new e.PolySynth(e.FMSynth,{volume:-8,maxPolyphony:256,envelope:{attack:.02,decay:.12,sustain:.5,release:.4}}),this.synth.connect(this._inputNode)}async toggle(e){this.isPlaying?(this.stop(),nd.setMusicDuck(1),e&&e.toast(`Music off`,1200)):(!this.Tone&&e&&e.toast(`Loading music engine…`,1500),await this._ensureLoaded()?(nd.setMusicDuck(Sv),await this._playRandom(e)):e&&e.toast(`Music load failed`,1800))}async _playRandom(e){let t=this.manifest&&this.manifest.tracks?this.manifest.tracks:[];if(t.length===0){this._playProceduralLoop(),this.isPlaying=!0,this.currentTrack=`(test loop)`,e&&e.toast(`♪ Test loop — add MIDIs to assets/music/`,2800);return}let n=t[Math.floor(Math.random()*t.length)],r=typeof n==`string`?n:n.file,i=`assets/music/${r}`,a=typeof n==`string`?r.replace(/\.[^.]+$/,``):n.name||n.file;try{let t=await fetch(i).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.arrayBuffer()}),n=new this.Midi(t);this._schedule(n),this.isPlaying=!0,this.currentTrack=a,e&&e.toast(`♪ ${a}`,2200)}catch(t){console.warn(`[midi] failed to load`,i,t),e&&e.toast(`Could not load ${a}`,1800),nd.setMusicDuck(1)}}_schedule(e){let t=this.Tone;t.Transport.stop(),t.Transport.cancel(),t.Transport.position=0;let n=e.header.tempos.length>0?e.header.tempos[0].bpm:120;this._baseBpm=n,t.Transport.bpm.value=n,this.parts=[];for(let n of e.tracks){let r=n.notes.map(e=>({time:e.time,name:e.name,duration:e.duration,velocity:e.velocity}));if(r.length===0)continue;let i=new t.Part((e,t)=>{this.synth.triggerAttackRelease(t.name,t.duration,e,t.velocity)},r);i.loop=!0,i.loopEnd=e.duration,i.start(0),this.parts.push(i)}t.Transport.start(`+0.05`)}_playProceduralLoop(){let e=this.Tone;e.Transport.stop(),e.Transport.cancel(),this._baseBpm=120,e.Transport.bpm.value=120;let t=new e.Sequence((e,t)=>{this.synth.triggerAttackRelease(t,`8n`,e,.7)},[`C4`,`E4`,`G4`,`B4`,`C5`,`B4`,`G4`,`E4`],`8n`);t.loop=!0,t.start(0),this.parts=[t],e.Transport.start(`+0.05`)}stop(){if(this.Tone){this.Tone.Transport.stop(),this.Tone.Transport.cancel();for(let e of this.parts)try{e.dispose()}catch{}this.parts=[],this.synth&&this.synth.releaseAll(),this.isPlaying=!1,this.currentTrack=null}}setTripState(e,t){if(!this.effects)return;this._tripEnvelope=e;let n=this.effects,r=e,i=t,a=r>0?Math.exp(-(((i-1/3)/.18)**2)):0,o=.04+i*.26+a*.25;n.vibrato.depth.rampTo(r*o+(1-r)*.04,.1);let s=5-i*4+a*-.5;n.vibrato.frequency.rampTo(r*s+(1-r)*5,.1);let c=.18+r*((this._smoothstep(i,0,.5)-this._smoothstep(i,.85,1)*.4)*.45+a*.15);n.reverb.wet.rampTo(c,.2);let l=.22+r*((.4+.2*Math.sin(i*Math.PI*2*1.5+.8)+.1*Math.sin(i*Math.PI*2*3.1+1.7))*.35+a*.2);n.delay.feedback.rampTo(Math.min(.85,l),.15);let u=.1+r*(.25+a*.35);n.delay.wet.rampTo(u,.15);let d=.5+.3*Math.sin(i*Math.PI*2*1.7+2.4)+.2*Math.sin(i*Math.PI*2*2.5+3.1),f;if(f=i<.25?this._easeInOut(i*4):i>.75?this._easeInOut((1-i)*4):1,n.filter.wet.rampTo(r*f*Math.max(0,Math.min(1,d*.85)),.2),this.Tone&&this.Tone.Transport&&this._baseBpm>0){let e=r*a*.18+r*i*.05;this.Tone.Transport.bpm.rampTo(this._baseBpm*(1-e),.5)}}_smoothstep(e,t,n){if(n<=t)return+(e>=n);let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}_easeInOut(e){return e<=0?0:e>=1?1:e<.5?4*e*e*e:1-(-2*e+2)**3/2}},wv=2.4,Tv=14,Ev=.25,Dv=2.8,Ov=14,kv=class{constructor(){this.group=new G,this.group.name=`Smiles`,this.active=[],this._geo=new q(.32,1),this._mat=new J({color:16769126,emissive:16763955,emissiveIntensity:2.4,roughness:.4})}spawn(e){let t=new H(this._geo,this._mat);t.position.copy(e),t.position.y+=1.6,this.group.add(t);let n=new H(new nc(.5,.7,18),new mn({color:16769126,transparent:!0,opacity:.5,side:2,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=-.25,t.add(n),this.active.push({mesh:t,halo:n,age:0,seeking:!1})}update(e,t,n){for(let r=this.active.length-1;r>=0;r--){let i=this.active[r];i.age+=e;let a=new z().subVectors(t.position,i.mesh.position);a.y+=1.5;let o=a.length();if(i.age<Ev)i.mesh.position.y+=Dv*e;else{let t=1+Math.min(2.5,i.age*.3);a.normalize().multiplyScalar(Tv*t*e),i.mesh.position.add(a)}i.mesh.rotation.y+=e*2.5,i.mesh.position.y+=Math.sin(i.age*4+r)*.005,i.halo.scale.setScalar(1+Math.sin(i.age*5)*.2),o<wv?(this.group.remove(i.mesh),i.mesh.geometry=null,this.active.splice(r,1),n(1)):i.age>=Ov&&(this.group.remove(i.mesh),this.active.splice(r,1))}}};function Av(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dn,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=jv(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=jv(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function jv(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(s.isInterleavedBufferAttribute)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.`),null;if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.array.length}let o=new t(a),s=0;for(let t=0;t<e.length;++t)o.set(e[t].array,s),s+=e[t].array.length;let c=new _n(o,n,r);return i!==void 0&&(c.gpuType=i),c}var Mv=rl.crowdMax,Nv=(rl.chunkUnloadRadius+.5)*80,Pv=Nv*Nv,Fv=[16740252,16765578,7327594,6740479,11699711,16747099,15919311,9358054,16758531,13073919,8115081,14711391,8499866,16032353,16727423,16735802,16769357,5111717,3854293,7101439,16729309,12058459,16743228,3790532,10185727,16733559,16765503,5898144],Iv=.55,Lv=22,Rv=18,zv=80,Bv=6,Vv=.7,Hv=28,Uv=3,Wv=.8,Gv=14,Kv=10,qv=.6,Jv=1.3,Yv=.45,Xv=15,Zv=80,Qv=4,$v=4,ey=1.9,ty=.85,ny=1.5,ry=class{constructor(e){this.smiles=e,this.npcs=[],this.free=[],this.groups=new Map,this._buildInstanced()}_buildInstanced(){let e=new K(.1,.1,.65,6);e.translate(-.12,.325,0);let t=new K(.1,.1,.65,6);t.translate(.12,.325,0);let n=Av([e,t]);e.dispose(),t.dispose();let r=new U(.16,.07,.24);r.translate(-.12,.035,-.06);let i=new U(.16,.07,.24);i.translate(.12,.035,-.06);let a=Av([r,i]);r.dispose(),i.dispose();let o=new ps(.26,.55,3,6);o.translate(0,1,0);let s=new ps(.075,.5,3,6);s.translate(-.3,1.1,0);let c=new ps(.075,.5,3,6);c.translate(.3,1.1,0);let l=Av([s,c]);s.dispose(),c.dispose();let u=new q(.26,1);u.translate(0,1.65,0);let d=new ac(.028,6,6);d.translate(-.08,1.68,-.22);let f=new ac(.028,6,6);f.translate(.08,1.68,-.22);let p=Av([d,f]);d.dispose(),f.dispose();let m=new oc(.06,.012,4,8,Math.PI);m.rotateZ(Math.PI);let h=new J({color:2243164,roughness:.92,flatShading:!0}),g=new J({color:1118481,roughness:.8,flatShading:!0}),_=new J({roughness:.85,flatShading:!0}),v=new J({roughness:.85,flatShading:!0}),y=new J({color:15122584,roughness:.9,flatShading:!0}),b=new J({color:1118481,roughness:.8}),x=e=>{e.vertexShader=`
        attribute vec3 shirtAccent;
        attribute float shirtTieDye;
        varying vec3 vShirtAccent;
        varying float vShirtTieDye;
        varying vec3 vLocalPos;
      `+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
         vShirtAccent = shirtAccent;
         vShirtTieDye = shirtTieDye;
         vLocalPos = position;`),e.fragmentShader=`
        varying vec3 vShirtAccent;
        varying float vShirtTieDye;
        varying vec3 vLocalPos;
      `+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
         if (vShirtTieDye > 0.01) {
           float freq = 8.0 + vShirtTieDye * 14.0;
           float phase = vShirtTieDye * 9.42;
           float swirl =
             sin(vLocalPos.y * freq + phase) +
             sin((vLocalPos.x + vLocalPos.z) * freq * 0.85 - phase * 1.3) * 0.85 +
             sin((vLocalPos.x - vLocalPos.y) * freq * 0.6 + phase * 2.1) * 0.6;
           float blend = smoothstep(-0.3, 0.5, swirl) * (0.45 + vShirtTieDye * 0.35);
           diffuseColor.rgb = mix(diffuseColor.rgb, vShirtAccent, blend);
         }`)};_.onBeforeCompile=x,v.onBeforeCompile=x,_.customProgramCacheKey=()=>`crowd-tiedye-v1`,v.customProgramCacheKey=()=>`crowd-tiedye-v1`,this.legsMesh=new Oo(n,h,Mv),this.shoesMesh=new Oo(a,g,Mv),this.bodyMesh=new Oo(o,_,Mv),this.armsMesh=new Oo(l,v,Mv),this.headMesh=new Oo(u,y,Mv),this.eyesMesh=new Oo(p,b,Mv),this.mouthMesh=new Oo(m,b,Mv),this.bodyMesh.instanceColor=new bo(new Float32Array(Mv*3),3),this.armsMesh.instanceColor=new bo(new Float32Array(Mv*3),3);let S=new Float32Array(Mv*3),C=new Float32Array(Mv),w=new bo(S,3),T=new bo(C,1),E=new bo(S,3),D=new bo(C,1);o.setAttribute(`shirtAccent`,w),o.setAttribute(`shirtTieDye`,T),l.setAttribute(`shirtAccent`,E),l.setAttribute(`shirtTieDye`,D),this._shirtAccentData=S,this._shirtTieDyeData=C,this._shirtAccentAttrs=[w,E],this._shirtTieDyeAttrs=[T,D];let O=[this.legsMesh,this.shoesMesh,this.bodyMesh,this.armsMesh,this.headMesh,this.eyesMesh,this.mouthMesh];for(let e of O)e.castShadow=rl.shadows,e.frustumCulled=!1,e.count=Mv;this.group=new G,this.group.name=`Crowd`;for(let e of O)this.group.add(e);let k=new St().makeScale(0,0,0);for(let e=0;e<Mv;e++){for(let t of O)t.setMatrixAt(e,k);this.free.push(e)}for(let e of O)e.instanceMatrix.needsUpdate=!0;this._mat4=new St,this._tmpV=new z,this._tmpV2=new z,this._tmpV3=new z,this._tmpQuat=new Ke,this._tmpEuler=new Mt,this._tmpDanceMat=new St,this._tmpScale=new z,this._mouthMat=new St,this._supineQuatX=new Ke().setFromAxisAngle(new z(1,0,0),Math.PI/2),this._supineQuatY=new Ke,this._axisY=new z(0,1,0),this._maxIdx=-1}spawn({pos:e,chunkKey:t,rng:n=Math.random}){if(this.free.length===0)return null;let r=this.free.pop(),i=n(),a=(1-i)*n(),o=n(),s=.6+n()*.7,c=n(),l=null;if(o>.55){let t=!1;for(let[n,i]of this.groups)if(e.distanceTo(i.center)<9&&i.members.length<6){l=n,i.members.push(r),t=!0;break}t||(l=`g${r}`,this.groups.set(l,{center:e.clone(),members:[r]}))}let u=Fv[Math.floor(n()*Fv.length)],d=0,f=u;if(n()<Iv){d=.4+n()*.6;for(let e=0;e<4;e++){let e=Fv[Math.floor(n()*Fv.length)];if(e!==u){f=e;break}}}let p={idx:r,pos:e.clone(),vel:new z,target:e.clone(),yaw:n()*Math.PI*2,baseYaw:n()*Math.PI*2,bob:n()*Math.PI*2,scale:.85+n()*.4,shirt:u,state:`idle`,stateTimer:n()*2,curiosity:i,skittish:a,social:o,energy:s,dance:c,groupId:l,happiness:0,smileTimeCooldown:0,lastSmilePos:null,watchTimer:void 0,attentionSpan:void 0,shuffleTimer:void 0,shuffleTarget:null,disinterestedUntil:0,chunkKey:t};this.npcs.push(p),r>this._maxIdx&&(this._maxIdx=r);let m=new B(u);this.bodyMesh.instanceColor.setXYZ(r,m.r,m.g,m.b),this.bodyMesh.instanceColor.needsUpdate=!0,this.armsMesh.instanceColor.setXYZ(r,m.r,m.g,m.b),this.armsMesh.instanceColor.needsUpdate=!0;let h=new B(f);this._shirtAccentData[r*3+0]=h.r,this._shirtAccentData[r*3+1]=h.g,this._shirtAccentData[r*3+2]=h.b,this._shirtTieDyeData[r]=d;for(let e of this._shirtAccentAttrs)e.needsUpdate=!0;for(let e of this._shirtTieDyeAttrs)e.needsUpdate=!0;return this._writeMatrices(p),p}unloadChunk(e){}_despawnDistant(e){let t=e.position.x,n=e.position.z,r=[],i=this._zeroMat||=new St().makeScale(0,0,0),a=0;for(let e of this.npcs){if(e.state===`riding`||e.state===`boarding`){r.push(e);continue}let o=e.pos.x-t,s=e.pos.z-n;if(o*o+s*s>Pv){if(e.seatSlot&&=(e.seatSlot.occupied=!1,null),e.hammockEntry&&e.hammockEntry.hammock&&(e.hammockEntry.hammock.occupied=!1,e.hammockEntry=null),e.groupId){let t=this.groups.get(e.groupId);if(t){let n=t.members.indexOf(e.idx);n>=0&&t.members.splice(n,1),t.members.length===0&&this.groups.delete(e.groupId)}}this.legsMesh.setMatrixAt(e.idx,i),this.shoesMesh.setMatrixAt(e.idx,i),this.bodyMesh.setMatrixAt(e.idx,i),this.armsMesh.setMatrixAt(e.idx,i),this.headMesh.setMatrixAt(e.idx,i),this.eyesMesh.setMatrixAt(e.idx,i),this.mouthMesh.setMatrixAt(e.idx,i),this.free.push(e.idx),a++}else r.push(e)}a>0&&(this.npcs=r,this.legsMesh.instanceMatrix.needsUpdate=!0,this.shoesMesh.instanceMatrix.needsUpdate=!0,this.bodyMesh.instanceMatrix.needsUpdate=!0,this.armsMesh.instanceMatrix.needsUpdate=!0,this.headMesh.instanceMatrix.needsUpdate=!0,this.eyesMesh.instanceMatrix.needsUpdate=!0,this.mouthMesh.instanceMatrix.needsUpdate=!0)}update(e,t,n){this._despawnDistant(t);let r=Math.cos(zv*Math.PI/180),i=[];n&&n.forEachAlive(e=>i.push(e.pos));let a=Math.abs(t.speed)<qv,o=0;for(let e of this.npcs)(e.state===`boarding`||e.state===`riding`)&&o++;for(let n of this.npcs)this._updateNpc(e,n,t,i,r,{zerbleIdle:a,activePassengersRef:{count:o,add:()=>o++}});this.legsMesh.instanceMatrix.needsUpdate=!0,this.shoesMesh.instanceMatrix.needsUpdate=!0,this.bodyMesh.instanceMatrix.needsUpdate=!0,this.armsMesh.instanceMatrix.needsUpdate=!0,this.headMesh.instanceMatrix.needsUpdate=!0,this.eyesMesh.instanceMatrix.needsUpdate=!0,this.mouthMesh.instanceMatrix.needsUpdate=!0;let s=this._maxIdx+1;s<Mv&&(this.legsMesh.count=s,this.shoesMesh.count=s,this.bodyMesh.count=s,this.armsMesh.count=s,this.headMesh.count=s,this.eyesMesh.count=s,this.mouthMesh.count=s)}_updateNpc(e,t,n,r,i,a){if(t.smileTimeCooldown>0&&(t.smileTimeCooldown-=e),t.stateTimer-=e,t.bob+=e*(1+.4*t.dance),t.rideTimer!=null&&(t.rideTimer-=e),Y.byKind.has(`stage_front`)){let e=1/0;for(let n of Y.byKind.get(`stage_front`)){let r=Y.entries.get(n);if(!r)continue;let i=t.pos.x-r.position.x,a=t.pos.z-r.position.z,o=Math.hypot(i,a);o<e&&(e=o)}t.onDancefloor=e<9}else t.onDancefloor=!1;let o=n.position.x-t.pos.x,s=n.position.z-t.pos.z,c=Math.hypot(o,s);if(t.state===`riding`){this._tickRiding(e,t,n);return}if(t.state===`boarding`){this._tickBoarding(e,t,n,a);return}if(t.state===`hammock_riding`){this._tickHammockRiding(e,t);return}if(t.state===`walking_to_hammock`){if(c<Rv&&t.curiosity>.65)this._releaseHammock(t),t.state=`approaching`;else if(this._tickWalkingToHammock(e,t))return}t.state===`disembarking`&&this._tickDisembarking(e,t);let l=t.state===`fleeing`&&t.stateTimer>0,u=performance.now()*.001,d=t.disinterestedUntil>u;if(!l&&!d){if(t.state===`fleeing`&&(t.fleeJitter=void 0),c<Lv){if(t.state=t.skittish>.55&&c<Rv*.6?`fleeing`:t.curiosity>.65&&c<Lv&&c>4?`approaching`:`watching`,a.zerbleIdle&&t.curiosity>.45&&a.activePassengersRef.count<Kv&&c<12&&Math.random()<Yv*e){let e=this._claimFreeSeat(n);if(e){t.state=`boarding`,t.seatSlot=e,t.stateTimer=20,a.activePassengersRef.add();return}}}else t.state!==`idle`&&t.state!==`walking`&&t.state!==`disembarking`&&(t.state=`idle`,t.stateTimer=1+Math.random()*3)}let f=0,p=t.pos.x,m=t.pos.z;switch(t.state){case`idle`:if(t.skittish<.5&&t.stateTimer<5&&Math.random()<e*.4&&this._tryClaimHammock(t))break;if(t.stateTimer<=0){let e=Y.pickAttractor(Math.random);if(e&&Math.hypot(e.position.x-t.pos.x,e.position.z-t.pos.z)<60){let n=Math.random()*Math.PI*2,r=(.4+Math.random()*.6)*e.radius;t.target.set(e.position.x+Math.cos(n)*r,0,e.position.z+Math.sin(n)*r)}else t.target.set(t.pos.x+(Math.random()-.5)*18,0,t.pos.z+(Math.random()-.5)*18);t.state=`walking`,t.stateTimer=10+Math.random()*12}t.yaw+=Math.sin(t.bob*.5)*.01*t.dance;break;case`walking`:{let e=t.target.x-t.pos.x,n=t.target.z-t.pos.z,r=Math.hypot(e,n);r<ny||t.stateTimer<=0?(t.state=`idle`,t.stateTimer=2+Math.random()*6):(p=e/r,m=n/r,f=1.4*t.energy);break}case`watching`:{let n=iy(Math.atan2(-o,-s)-t.yaw);if(t.yaw+=n*Math.min(1,e*4),t.watchTimer===void 0&&(t.watchTimer=0,t.attentionSpan=4+t.curiosity*10-(1-t.energy)*2),t.watchTimer+=e,t.shuffleTimer===void 0||t.shuffleTimer<=0){let e=Math.atan2(-o,-s)+Math.PI/2+(Math.random()-.5)*1.2,n=.5+Math.random()*1;t.shuffleTarget=t.shuffleTarget||new z,t.shuffleTarget.set(t.pos.x+Math.cos(e)*n,0,t.pos.z+Math.sin(e)*n),t.shuffleTimer=2+Math.random()*2}t.shuffleTimer-=e;let r=t.shuffleTarget.x-t.pos.x,i=t.shuffleTarget.z-t.pos.z,a=Math.hypot(r,i);if(a>.05&&(p=r/a,m=i/a,f=.7*t.energy),t.watchTimer>t.attentionSpan){t.watchTimer=void 0,t.attentionSpan=void 0,t.shuffleTimer=void 0;let e=Math.atan2(-o,-s)+(Math.random()-.5)*.8,n=6+Math.random()*4;t.target.set(t.pos.x-Math.cos(e)*n,0,t.pos.z-Math.sin(e)*n),t.state=`walking`,t.stateTimer=6+Math.random()*4,t.disinterestedUntil=u+6+Math.random()*4}break}case`approaching`:{if(c>5.5){let e=1/(c||1);p=o*e,m=s*e,f=1.7*t.energy}else t.state=`watching`;let n=iy(Math.atan2(-o,-s)-t.yaw);t.yaw+=n*Math.min(1,e*6);break}case`fleeing`:{t.fleeJitter===void 0&&(t.fleeJitter=(Math.random()-.5)*(Math.PI*.4));let e=1/(c||1),n=-o*e,r=-s*e,i=Math.sin(performance.now()*.004+t.idx)*.15,a=t.fleeJitter+i,l=Math.cos(a),u=Math.sin(a);p=n*l-r*u,m=n*u+r*l;let d=.85+t.idx%7*.05;f=3.5*t.energy*d,t.yaw=Math.atan2(-p,-m),c>26&&(t.state=`idle`,t.stateTimer=2,t.fleeJitter=void 0);break}}let h=0,g=0,_=0,v=0,y=0;for(let e of this.npcs){if(e===t||e.state===`riding`)continue;let n=t.pos.x-e.pos.x,r=t.pos.z-e.pos.z,i=n*n+r*r;if(i>0&&i<ey*ey){let e=Math.sqrt(i),t=1/e,a=(ey-e)/ey;if(h+=n*t*a,g+=r*t*a,_++,e<ty){let i=(ty-e)*.5;v+=n*t*i,y+=r*t*i}}}if(t.pos.x+=v,t.pos.z+=y,f>0){let n=Math.round(t.pos.x/Zv)*Zv,r=Math.round(t.pos.z/Zv)*Zv,i=n-t.pos.x,a=r-t.pos.z,o=Math.abs(i)<Math.abs(a)?{x:i,z:0}:{x:0,z:a},s=Math.hypot(o.x,o.z);if(s>Qv){let e=I.clamp((s-Qv)/20,0,.4),t=s||1;p+=o.x/t*e,m+=o.z/t*e}let c=ay(t.pos,$v);c&&(p+=c.x*c.strength,m+=c.z*c.strength),_>0&&(p+=h*1.2,m+=g*1.2);let l=Math.hypot(p,m)||1;p/=l,m/=l,t.vel.x=I.lerp(t.vel.x,p*f,Math.min(1,e*4)),t.vel.z=I.lerp(t.vel.z,m*f,Math.min(1,e*4))}else _>0?(t.vel.x=I.lerp(t.vel.x,h*.6,Math.min(1,e*3)),t.vel.z=I.lerp(t.vel.z,g*.6,Math.min(1,e*3))):t.vel.multiplyScalar(.5**(e*6));if(t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,Math.abs(t.vel.x)+Math.abs(t.vel.z)>.4&&t.state!==`watching`){let n=iy(Math.atan2(-t.vel.x,-t.vel.z)-t.yaw);t.yaw+=n*Math.min(1,e*6)}if(t.smileTimeCooldown<=0&&(t.lastSmilePos===null||n.position.distanceTo(t.lastSmilePos)>Hv)&&c<Rv){let a=n.forwardWorld,o=t.pos.x-n.position.x,s=t.pos.z-n.position.z,l=Math.hypot(o,s)||1,u=o/l*a.x+s/l*a.z,d=0;if(u>i){let e=1-c/Rv,t=(u-i)/(1-i);d+=1.4*e*(.4+.6*t)}for(let e of r){let n=Math.hypot(e.x-t.pos.x,e.z-t.pos.z);if(n<Bv){d+=1*(1-n/Bv);break}}(t.state===`approaching`||t.state===`watching`)&&(d*=1.2),t.state===`fleeing`&&(d=0),d>0&&(t.happiness+=d*e),t.happiness>=Vv&&(t.happiness=0,t.smileTimeCooldown=Uv,t.lastSmilePos=n.position.clone(),this.smiles.spawn(t.pos))}else t.happiness=Math.max(0,t.happiness-e*.2);this._writeMatrices(t)}_writeMatrices(e){let t=this._mat4,n,r,i=0;if(e.onDancefloor){let t=e.bob;n=Math.sin(t*1.8)*.07+Math.sin(t*3.7+e.dance*6)*.025,r=Math.sin(t*1.5+e.dance*3)*.18,i=Math.sin(t*.9+e.dance*5)*.2}else n=Math.sin(e.bob)*.04,r=e.dance>.6&&(e.state===`idle`||e.state===`watching`||e.state===`riding`)?Math.sin(e.bob*2)*.05*(e.dance-.5):0;let a;e.state===`hammock_riding`?(this._supineQuatY.setFromAxisAngle(this._axisY,e.yaw+i),a=this._tmpQuat.multiplyQuaternions(this._supineQuatY,this._supineQuatX)):a=this._tmpQuat.setFromEuler(this._tmpEuler.set(0,e.yaw+i,0));let o=e.smileTimeCooldown>0?Math.abs(Math.sin(performance.now()*.012+e.bob))*.06:0,s;s=e.state===`riding`&&e.seatY!=null?e.seatY-1.05+n+o:e.state===`hammock_riding`&&e.hammockY!=null?e.hammockY+.16+n+o:n+o;let c=this._tmpV,l=this._tmpV2;if(e.state===`hammock_riding`){let t=Math.sin(e.yaw),n=Math.cos(e.yaw);c.set(e.pos.x-t*.825,s,e.pos.z-n*.825)}else c.set(e.pos.x,s,e.pos.z);l.set(e.scale,e.scale,e.scale),t.compose(c,a,l),r&&(this._tmpDanceMat.makeRotationZ(r),t.multiply(this._tmpDanceMat)),this.legsMesh.setMatrixAt(e.idx,t),this.shoesMesh.setMatrixAt(e.idx,t),this.bodyMesh.setMatrixAt(e.idx,t),this.armsMesh.setMatrixAt(e.idx,t),this.headMesh.setMatrixAt(e.idx,t),this.eyesMesh.setMatrixAt(e.idx,t);let u=e.smileTimeCooldown>0?1:.3;this._tmpV3.set(0,1.55,-.215).applyQuaternion(this._tmpQuat),this._tmpV3.x+=e.pos.x,this._tmpV3.y+=e.pos.y+n+o,this._tmpV3.z+=e.pos.z,this._tmpScale.set(u,u,u),this._mouthMat.compose(this._tmpV3,this._tmpQuat,this._tmpScale),this.mouthMesh.setMatrixAt(e.idx,this._mouthMat)}_claimFreeSeat(e){if(!e.seatSlots)return null;let t=e.seatSlots.map((e,t)=>t);for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}for(let n of t){let t=e.seatSlots[n];if(!t.occupied)return t.occupied=!0,t}return null}_releaseSeat(e){e&&(e.occupied=!1)}_tickBoarding(e,t,n,r){if(!t.seatSlot||!r.zerbleIdle){this._releaseSeat(t.seatSlot),t.seatSlot=null,t.state=`watching`,t.stateTimer=1;return}let i=this._tmpV;n.worldSeatPosition(t.seatSlot,i);let a=i.x-t.pos.x,o=i.z-t.pos.z,s=Math.hypot(a,o);if(s<Jv){t.state=`riding`,t.rideTimer=Xv+Math.random()*60,this._writeMatrices(t);return}let c=1/(s||1),l=a*c,u=o*c,d=2.4*t.energy;t.vel.x=I.lerp(t.vel.x,l*d,Math.min(1,e*6)),t.vel.z=I.lerp(t.vel.z,u*d,Math.min(1,e*6)),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e;let f=iy(Math.atan2(-t.vel.x,-t.vel.z)-t.yaw);t.yaw+=f*Math.min(1,e*6),t.stateTimer<=0&&(this._releaseSeat(t.seatSlot),t.seatSlot=null,t.state=`idle`,t.stateTimer=2),this._writeMatrices(t)}_tickRiding(e,t,n){if(!t.seatSlot){t.state=`idle`,t.stateTimer=1;return}let r=this._tmpV;if(n.worldSeatPosition(t.seatSlot,r),t.pos.x=r.x,t.pos.z=r.z,t.seatY=r.y,t.yaw=n.heading+t.seatSlot.yaw,t.bob+=e*(1.2+.6*t.dance),t.rideTimer<=0&&Math.abs(n.speed)<qv){this._releaseSeat(t.seatSlot);let e={x:r.x,z:r.z};t.seatSlot=null,t.seatY=void 0,t.state=`disembarking`;let n=Math.random()*Math.PI*2,i=3+Math.random()*3;t.target.set(e.x+Math.cos(n)*i,0,e.z+Math.sin(n)*i),t.stateTimer=5}this._writeMatrices(t)}_tickDisembarking(e,t){let n=t.target.x-t.pos.x,r=t.target.z-t.pos.z;(Math.hypot(n,r)<ny||t.stateTimer<=0)&&(t.state=`idle`,t.stateTimer=1+Math.random()*2)}_tryClaimHammock(e){let t=Y.byKind.get(`hammock`);if(!t)return!1;let n=null,r=3600;for(let i of t){let t=Y.entries.get(i);if(!t||!t.hammock||t.hammock.occupied)continue;let a=t.position.x-e.pos.x,o=t.position.z-e.pos.z,s=a*a+o*o;s<r&&(r=s,n=t)}return n?(n.hammock.occupied=!0,e.hammockEntry=n,e.target.copy(n.position),e.state=`walking_to_hammock`,e.stateTimer=18,!0):!1}_tickWalkingToHammock(e,t){if(!t.hammockEntry)return t.state=`idle`,t.stateTimer=1,!0;let n=t.hammockEntry.hammock.seatPos,r=n.x-t.pos.x,i=n.z-t.pos.z,a=Math.hypot(r,i);if(a<.7)return t.state=`hammock_riding`,t.rideTimer=12+Math.random()*18,t.hammockBob=0,!0;if(t.stateTimer<=0)return this._releaseHammock(t),t.state=`idle`,t.stateTimer=1,!0;let o=1/(a||1);t.vel.x=I.lerp(t.vel.x,r*o*1.6*t.energy,Math.min(1,e*5)),t.vel.z=I.lerp(t.vel.z,i*o*1.6*t.energy,Math.min(1,e*5)),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e;let s=iy(Math.atan2(-t.vel.x,-t.vel.z)-t.yaw);return t.yaw+=s*Math.min(1,e*6),this._writeMatrices(t),!0}_tickHammockRiding(e,t){if(!t.hammockEntry){t.state=`idle`,t.stateTimer=1;return}t.rideTimer-=e,t.hammockBob+=e*2.2;let n=t.hammockEntry.hammock,r=-Math.sin(n.yaw),i=Math.cos(n.yaw),a=Math.sin(t.hammockBob)*.18;t.pos.x=n.seatPos.x+r*a,t.pos.z=n.seatPos.z+i*a,t.hammockY=n.seatPos.y+Math.sin(t.hammockBob*2)*.04,t.yaw=Math.PI/2-n.yaw,t.vel.set(0,0,0),t.rideTimer<=0&&(this._releaseHammock(t),t.state=`idle`,t.stateTimer=1+Math.random()*2,t.pos.x+=(Math.random()-.5)*.8,t.pos.z+=(Math.random()-.5)*.8,t.hammockY=void 0),this._writeMatrices(t)}_releaseHammock(e){e.hammockEntry&&e.hammockEntry.hammock&&(e.hammockEntry.hammock.occupied=!1),e.hammockEntry=null,e.hammockY=void 0}onZerbleHit(e,t,n){e.state=`fleeing`,e.stateTimer=3,e.happiness=0,e.pos.x+=t*.6,e.pos.z+=n*.6;for(let t of this.npcs){if(t===e||t.state===`riding`||t.state===`boarding`)continue;let n=t.pos.x-e.pos.x,r=t.pos.z-e.pos.z;n*n+r*r>36||t.skittish<.15&&Math.random()<.5||(t.state=`fleeing`,t.stateTimer=2.5)}}applyHonk(e){let t=-.3,n=Math.abs(e.speed||0)<.5,r=e.forwardWorld;for(let i of this.npcs){let a=i.pos.x-e.position.x,o=i.pos.z-e.position.z;if(n&&r&&i.state!==`riding`){let e=a*a+o*o,n=a*r.x+o*r.z;(e<121&&n>t||e<36)&&(i.state===`boarding`&&i.seatSlot&&(this._releaseSeat(i.seatSlot),i.seatSlot=null),i.state=`fleeing`,i.stateTimer=e<121&&n>t?1.5:.8)}let s=Math.hypot(a,o);if(s<Gv&&i.smileTimeCooldown<=0&&i.state!==`fleeing`){let t=1-s/Gv;i.happiness+=Wv*t,i.happiness>=Vv&&(i.lastSmilePos===null||e.position.distanceTo(i.lastSmilePos)>Hv?(i.happiness=0,i.smileTimeCooldown=Uv,i.lastSmilePos=e.position.clone(),this.smiles.spawn(i.pos)):i.happiness=Vv*.95)}}}};function iy(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function ay(e,t){let n=0,r=0,i=0;for(let a of Y.footprints()){if(a.kind===`tree`||a.kind===`path_node`)continue;let o=e.x-a.position.x,s=e.z-a.position.z,c=Math.hypot(o,s),l=a.radius+t-c;if(l>0){let e=1/(c||1e-4),a=l/t;n+=o*e*a,r+=s*e*a,i+=a}}if(i<=0)return null;let a=Math.hypot(n,r)||1;return{x:n/a,z:r/a,strength:Math.min(1.2,i)}}function oy(){let e=new _s,t=-.95;e.moveTo(0,-.44999999999999996),e.bezierCurveTo(0,-.44999999999999996,-.09999999999999998,t,-.5,t),e.bezierCurveTo(-1.1,t,-1.1,-.25,-1.1,-.25),e.bezierCurveTo(-1.1,.15000000000000013,-.8,.5900000000000001,0,.95),e.bezierCurveTo(.7,.5900000000000001,1.1,.15000000000000013,1.1,-.25),e.bezierCurveTo(1.1,-.25,1.1,t,.5,t),e.bezierCurveTo(.19999999999999996,t,0,-.44999999999999996,0,-.44999999999999996);let n=new $s(e,{depth:.18,bevelEnabled:!0,bevelSegments:2,bevelSize:.05,bevelThickness:.05,curveSegments:8});return n.center(),n.rotateZ(Math.PI),n.scale(.18,.18,.18),n}var sy=oy();function cy(e,t){return Hf(e,t)?Uf(e,t,50):null}var ly=55,uy=28,dy=84,fy=11,py=16,my=18,hy=3,gy=2.4,_y=.18,vy=.55,yy=200;function by(){let e=Iu(Fu(3304165095,1518016979)),t=e()*Math.PI*2,n=yy+e()*80;return new z(Math.cos(t)*n,0,Math.sin(t)*n)}var xy=25,Sy=300,Cy=.5,wy=150,Ty=.7,Ey=Math.PI/4;function Dy(e,t){let n=[];for(let r=0;r<e;r++)n.push(t(r/Math.max(1,e-1)));return n}var Oy=class{constructor(e){this.scene=e,this.root=new G,this.root.name=`Lurleen`;let t=by(),n=cy(t.x,t.z);n&&t.set(n.x,0,n.z),this.position=t.clone(),this.heading=Math.PI,this.speed=0,this.steerAngle=0,this.radius=1.9,this.state=`wandering`,this.wanderTarget=t.clone(),this.wanderTimer=0,this.heartTimer=0,this.awareTimer=0,this.homePos=t.clone(),this.eyes=[],this._everMet=!1,this._rehomeTimer=xy,this.autoRehome=!0,this._buildBody(),this._buildWindshield(),this._buildLips(),this._buildEyes(),this._buildHair(),this._buildBasket(),this._heartGroup=new G,this._heartGroup.name=`LurleenHearts`,e.add(this._heartGroup),this._activeHearts=[],this.root.position.copy(this.position),this.root.rotation.y=this.heading,e.add(this.root),this._registryId=Y.add({kind:`lurleen`,position:this.position,footprint:2,collider:{radius:2,damage:0}})}setSpawnAt(e,t){this.position.set(e,0,t),this.homePos.set(e,0,t),this.wanderTarget.set(e,0,t),this.wanderTimer=9+Math.random()*8,this.speed=0,this.root.position.copy(this.position)}_relocateNearPlayer(e,t){let n=wy+Math.random()*70,r=Math.atan2(-Math.cos(t),-Math.sin(t)),i;i=Math.random()<Ty?r+(Math.random()*2-1)*Ey:Math.random()*Math.PI*2;let a=e.x+Math.cos(i)*n,o=e.z+Math.sin(i)*n,s=cy(a,o);s&&(a=s.x,o=s.z),this.setSpawnAt(a,o),this.heading=Math.atan2(e.x-a,e.z-o)+Math.PI,this.root.rotation.y=this.heading}_buildBody(){let e=new J({color:16757721,roughness:.6,flatShading:!0}),t=new H(new U(2,1,3,2,1,2),e);t.position.y=.7,t.castShadow=!0,this.root.add(t);let n=new J({color:16769126,roughness:.95,flatShading:!0}),r=new H(new U(2.1,.18,1.9),n);r.position.set(0,3.85,-.5),r.castShadow=!0,this.root.add(r),this._roofY=3.85,this._roofHalfW=1.05,this._roofHalfD=.95,this._roofZ=-.5;let i=new J({color:2760506,roughness:.7,flatShading:!0});for(let[e,t]of[[-.95,.3],[.95,.3],[-.95,-1.3],[.95,-1.3]]){let n=new H(new K(.05,.05,2.55,6),i);n.position.set(e,2.4749999999999996,t),this.root.add(n)}this._wheels=[];for(let[e,t]of[[-.95,1],[.95,1],[-.95,-1],[.95,-1]]){let n=new H(new K(.42,.42,.3,12),new J({color:1710618,roughness:.95,flatShading:!0}));n.rotation.z=Math.PI/2,n.position.set(e,.42,t),n.castShadow=!0,this.root.add(n),this._wheels.push({mesh:n,baseY:.42,front:t<0})}let a=new J({color:14141338,roughness:.9,flatShading:!0}),o=new H(new U(1.7,.3,.85),a);o.position.set(0,1.4,-.85),this.root.add(o);let s=new H(new U(1.7,.8,.2),a);s.position.set(0,1.85,-.4),this.root.add(s)}_buildWindshield(){let e=new H(new _r(2,2.5),new J({color:10934527,roughness:.05,metalness:.1,transparent:!0,opacity:.18,side:2}));e.position.set(0,2.45,-1.45),e.rotation.x=.08,this.root.add(e),this._windshield=e}_buildLips(){let e=new J({color:16725376,emissive:16716902,emissiveIntensity:.3,roughness:.5}),t=new G;{let n=1.4,r=.45,i=.18,a=new _s;a.moveTo(-1.4,0),a.bezierCurveTo(-.84,-.04,n*.6,-.04,n,0),a.bezierCurveTo(n*.9,r*.4,n*.6,r*.95,n*.45,r),a.bezierCurveTo(n*.25,r*.85,n*.1,i,0,i),a.bezierCurveTo(-1.4*.1,i,-.35,r*.85,-.63,r),a.bezierCurveTo(-.84,r*.95,-1.26,r*.4,-1.4,0);let o=new $s(a,{depth:.18,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2,curveSegments:16});o.translate(0,0,-.09);let s=new H(o,e);s.position.y=.05,t.add(s)}{let n=1.5,r=-.55,i=new _s;i.moveTo(-1.5,0),i.bezierCurveTo(-1.5*.55,.04,n*.55,.04,n,0),i.bezierCurveTo(n*.95,r*.35,n*.65,r,0,r),i.bezierCurveTo(-1.5*.65,r,-1.5*.95,r*.35,-1.5,0);let a=new $s(i,{depth:.22,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2,curveSegments:16});a.translate(0,0,-.11);let o=new H(a,e);o.position.y=-.05,t.add(o)}t.scale.setScalar(.82),t.position.set(0,1.1,-1.55),t.rotation.y=Math.PI,this.root.add(t)}_buildEyes(){let e=new J({color:16777215,emissive:16777215,emissiveIntensity:.1,roughness:.4,side:2}),t=new J({color:1118481,roughness:.7,side:2}),n=new J({color:526344,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new J({color:1118481,roughness:.9});for(let i of[-.46,.46]){let a=new G;a.position.set(i,2.55,-1.5),a.rotation.x=.08,a.rotation.y=Math.PI;let o=new H(new ms(.38,32),e);a.add(o);let s=new H(new nc(.36,.4,32),t);s.position.z=.005,a.add(s);let c=new G,l=new H(new ms(.16,28),n);l.position.z=.02,c.add(l);let u=new H(new ms(.04,16),new J({color:16777215,emissive:16777215,emissiveIntensity:.6,roughness:.2,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));u.position.set(-.05,.06,.025),c.add(u),a.add(c);for(let e=-1;e<=1;e++){let t=new H(new hs(.03,.24,5),r);t.position.set(e*.16,.34,.005),t.rotation.x=-.25,t.rotation.z=-e*.18,a.add(t)}this.root.add(a),this.eyes.push({root:a,pupil:c,basePos:a.position.clone(),wobbleX:.18,wobbleY:.16})}}_buildHair(){let e=new J({color:14203e3,roughness:.95,flatShading:!0}),t=new J({color:10516544,roughness:.95,flatShading:!0}),n=new J({color:15124876,roughness:.95,flatShading:!0}),r=this._roofHalfW,i=this._roofHalfD,a=this._roofZ,o=this._roofY-.09,s=[{x:-r,z:a+i,normX:-1,normZ:1},{x:r,z:a+i,normX:1,normZ:1},{x:-r,z:a-i,normX:-1,normZ:-1},{x:r,z:a-i,normX:1,normZ:-1}],c=r=>r<.4?e:r<.75?t:n,l=.55,u=[{axis:`x`,from:-r,to:r,fixedZ:a+i,cornerA:s[0],cornerB:s[1]},{axis:`x`,from:r,to:-r,fixedZ:a-i,cornerA:s[3],cornerB:s[2]},{axis:`z`,from:a+i,to:a-i,fixedX:-r,cornerA:s[0],cornerB:s[2]},{axis:`z`,from:a+i,to:a-i,fixedX:r,cornerA:s[1],cornerB:s[3]}];for(let e of u)for(let t=0;t<12;t++){let n=(t+1)/13,r,i;e.axis===`x`?(r=e.from+(e.to-e.from)*n,i=e.fixedZ):(r=e.fixedX,i=e.from+(e.to-e.from)*n);let a=Math.hypot(r-e.cornerA.x,i-e.cornerA.z)<Math.hypot(r-e.cornerB.x,i-e.cornerB.z)?e.cornerA:e.cornerB,s=new z(r,o,i),u=new z(a.x,o-l+.06,a.z),d=(r+a.x)*.5+a.normX*.05,f=(i+a.z)*.5+a.normZ*.05,p=new H(new sc(new Go([s,new z(d,o-l*.55,f),u]),10,.024+Math.random()*.008,4,!1),c(Math.random()));this.root.add(p)}for(let r of s){let i=new J({color:6740479,roughness:.5,flatShading:!0}),a=new H(new oc(.12,.05,8,16),i),s=o-l;a.position.set(r.x,s,r.z),a.rotation.x=Math.PI/2,this.root.add(a);for(let i=0;i<39;i++){let i=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*.14,o=r.x+Math.cos(i)*a,c=r.z+Math.sin(i)*a,l=1.0999999999999999*(.85+Math.random()*.3),u=new hs(.022,l,5,1);u.translate(0,-l/2,0);let d=Math.random(),f=new H(u,d<.4?e:d<.75?t:n);f.position.set(o,s,c),f.rotation.x=r.normZ*.06+(Math.random()-.5)*.1,f.rotation.z=-r.normX*.06+(Math.random()-.5)*.1,this.root.add(f)}}let d=[16731530,16750899,10053375,6737151,16772659,16740207,6750105],f=[...Dy(6,e=>({x:-r+2*r*e,z:a+i})),...Dy(5,e=>({x:r,z:a+i-2*i*e})),...Dy(6,e=>({x:r-2*r*e,z:a-i})),...Dy(5,e=>({x:-r,z:a-i+2*i*e}))];for(let e=0;e<Math.min(22,f.length);e++){let t=f[e],n=d[e%d.length],r=new H(new q(.1+Math.random()*.03,0),new J({color:n,emissive:n,emissiveIntensity:.5,roughness:.4}));r.position.set(t.x,this._roofY+.13,t.z),this.root.add(r)}}_buildBasket(){let e=new J({color:9137991,roughness:.95,flatShading:!0}),t=new H(new U(1.3,.55,.85),e);t.position.set(0,1.1,1.1),t.castShadow=!0,this.root.add(t);let n=new H(new oc(.38,.04,6,14,Math.PI),e);n.position.set(0,1.4,1.1),n.rotation.x=-Math.PI/2,this.root.add(n)}update(e,t,n=0){let r=t.x-this.position.x,i=t.z-this.position.z,a=Math.hypot(r,i);if(this.autoRehome&&!this._everMet&&(this._rehomeTimer-=e,this._rehomeTimer<=0&&(this._rehomeTimer=xy,a>Sy&&Math.random()<Cy))){this._relocateNearPlayer(t,n);return}this.state===`wandering`?(a<uy&&(this.state=`aware`,this.awareTimer=1.4,this.heartTimer=0,this._everMet=!0,this._burstHearts(7)),this._wander(e)):this.state===`aware`?(this.awareTimer-=e,this._emitHearts(e,!0),this.speed*=.5**(e*4),this._faceToward(e,r,i),this.awareTimer<=0&&(this.state=`following`)):this.state===`following`&&(this._emitHearts(e,!1),this._followZerble(e,r,i,a),a>dy&&(this.state=`wandering`,this.homePos.copy(this.position),this.wanderTimer=0)),this.position.x+=-Math.sin(this.heading)*this.speed*e,this.position.z+=-Math.cos(this.heading)*this.speed*e,this.root.position.copy(this.position),this.root.rotation.y=this.heading;for(let t of this._wheels)t.mesh.rotation.x+=this.speed*e*1.5,t.front&&(t.mesh.rotation.y=I.lerp(t.mesh.rotation.y,this.steerAngle,Math.min(1,e*10))),t.mesh.position.y=t.baseY+Math.sin(performance.now()*.01+t.mesh.position.x)*.02;let o=performance.now()*.001;for(let e of this.eyes)e.root.position.y=e.basePos.y+Math.sin(o*1.4+e.basePos.x)*.03,e.pupil.position.x=Math.sin(o*.9+e.basePos.x*3)*e.wobbleX,e.pupil.position.y=Math.cos(o*1.3+e.basePos.x*2)*e.wobbleY;this._updateHearts(e)}_wander(e){if(this.wanderTimer-=e,this.wanderTimer<=0){let e=Math.random()*Math.PI*2,t=Math.random()*ly*.7;this.wanderTarget.set(this.homePos.x+Math.cos(e)*t,0,this.homePos.z+Math.sin(e)*t),this.wanderTimer=9+Math.random()*8}this._driveToward(e,this.wanderTarget.x,this.wanderTarget.z,.6)}_followZerble(e,t,n,r){if(r<fy){this.speed*=.5**(e*3),this._faceToward(e,t,n);return}let i=1/(r||1),a=this.position.x+t*i*(r-fy),o=this.position.z+n*i*(r-fy);this._driveToward(e,a,o,1)}_faceToward(e,t,n){let r=Math.hypot(t,n)||1,i=Math.atan2(-t/r,-n/r)-this.heading;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.heading+=Math.sign(i)*Math.min(Math.abs(i),hy*e),this.steerAngle=I.clamp(i*1.5,-.5,.5)}_driveToward(e,t,n,r){let i=t-this.position.x,a=n-this.position.z,o=Math.hypot(i,a);if(o<1){this.speed*=.5**(e*3),this.steerAngle*=.9;return}let s=Math.atan2(-i/o,-a/o)-this.heading;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this.heading+=Math.sign(s)*Math.min(Math.abs(s),hy*e),this.steerAngle=I.clamp(s*1.5,-.5,.5);let c=Math.max(.25,(Math.cos(s)+1)*.5),l=py*r*c;this.speed<l?this.speed=Math.min(l,this.speed+my*e):this.speed*=.5**(e*2)}_emitHearts(e,t){this.heartTimer-=e,!(this.heartTimer>0)&&(this.heartTimer=t?_y:vy,this._burstHearts(t?3:1))}_burstHearts(e){for(let t=0;t<e;t++)this._spawnHeart()}_spawnHeart(){let e=new H(sy,new J({color:16731530,emissive:16720486,emissiveIntensity:1.6,transparent:!0,opacity:1}));e.position.set(this.position.x+(Math.random()-.5)*1.4,2.4+Math.random()*.4,this.position.z+(Math.random()-.5)*1.4),e.userData={age:0,vy:1.4+Math.random()*.7,vx:(Math.random()-.5)*.6,vz:(Math.random()-.5)*.6,spinSign:Math.random()<.5?-1:1},this._heartGroup.add(e),this._activeHearts.push(e)}_updateHearts(e){let t=window.__game?.camera;for(let n=this._activeHearts.length-1;n>=0;n--){let r=this._activeHearts[n];if(r.userData.age+=e,r.userData.age>=gy){this._heartGroup.remove(r),r.material.dispose(),this._activeHearts.splice(n,1);continue}r.position.x+=r.userData.vx*e,r.position.y+=r.userData.vy*e,r.position.z+=r.userData.vz*e,r.userData.vy*=.5**(e*.4);let i=1-r.userData.age/gy;r.material.opacity=i,r.scale.setScalar(1+r.userData.age*.4),t&&r.lookAt(t.position),r.rotation.z+=e*1.5*r.userData.spinSign}}},ky=12,Ay=6.5,jy=1.8,My=4,Ny=1.8,Py=1,Fy=.7,Iy=-.25,Ly=6,Ry=9,zy={x:0,y:2.15,z:-2.5},By=-.5,Vy=.9,Hy=80,Uy=30,Wy=220,Gy=.18,Ky=1.4,qy=5,Jy=7,Yy=class{constructor(e,t){this.camera=e,this.zerble=t,this.yawOffset=0,this.pitchOffset=.05,this.mode=`third`,this.topHeight=Hy,this._desiredPos=new z,this._desiredLook=new z,this._currentLook=new z,this._wireWheelZoom(),this.snap()}toggleMode(){let e={third:`first`,first:`top`,top:`third`};this.mode=e[this.mode]||`third`,this.mode===`first`&&(this.yawOffset=0),this.snap()}get modeLabel(){return this.mode===`first`?`First-person view`:this.mode===`top`?`Top-down view`:`Chase view`}_wireWheelZoom(){window.addEventListener(`wheel`,e=>{if(this.mode!==`top`)return;let t=e.deltaY>0?1.1:1/1.1;this.topHeight=I.clamp(this.topHeight*t,Uy,Wy),e.preventDefault()},{passive:!1})}snap(){this._computeTargets(),this.camera.position.copy(this._desiredPos),this._currentLook.copy(this._desiredLook),this.camera.lookAt(this._currentLook)}update(e,t){if(this.yawOffset+=t.camYaw*Ny*e,this.mode===`top`){let n=-t.camPitch,r=Math.exp(n*Ky*e);this.topHeight=I.clamp(this.topHeight*r,Uy,Wy)}else{let n=this.pitchOffset+t.camPitch*Py*e;if(typeof t.consumeCamDeltas==`function`){let e=t.consumeCamDeltas();this.yawOffset+=e.yaw,n+=e.pitch}let[r,i]=this.mode===`first`?[By,Vy]:[Iy,Fy];this.pitchOffset=I.clamp(n,r,i)}if(this.mode===`top`&&typeof t.consumeCamDeltas==`function`){let e=t.consumeCamDeltas();if(this.yawOffset+=e.yaw,e.pitch!==0){let t=Math.exp(-e.pitch*1.5);this.topHeight=I.clamp(this.topHeight*t,Uy,Wy)}}this._computeTargets(),this.mode===`first`?(this.camera.position.copy(this._desiredPos),this._currentLook.copy(this._desiredLook)):this.mode===`top`?(this.camera.position.lerp(this._desiredPos,Math.min(1,e*qy)),this._currentLook.lerp(this._desiredLook,Math.min(1,e*Jy))):(this.camera.position.lerp(this._desiredPos,Math.min(1,e*Ly)),this._currentLook.lerp(this._desiredLook,Math.min(1,e*Ry))),this.camera.lookAt(this._currentLook)}_computeTargets(){if(this.mode===`first`){this._computeFirstPerson();return}if(this.mode===`top`){this._computeTopDown();return}let e=this.zerble.heading+this.yawOffset,t=this.pitchOffset,n=ky*Math.cos(t),r=Ay+Math.sin(t)*ky;this._desiredPos.set(this.zerble.position.x+Math.sin(e)*n,this.zerble.position.y+r,this.zerble.position.z+Math.cos(e)*n);let i=this.zerble.heading;this._desiredLook.set(this.zerble.position.x-Math.sin(i)*My,this.zerble.position.y+jy,this.zerble.position.z-Math.cos(i)*My)}_computeTopDown(){let e=this.zerble.position,t=this.zerble.heading+this.yawOffset,n=this.topHeight*Math.sin(Gy);this._desiredPos.set(e.x-Math.sin(t)*n,e.y+this.topHeight*Math.cos(Gy),e.z-Math.cos(t)*n),this._desiredLook.set(e.x,e.y+.5,e.z)}_computeFirstPerson(){let e=this.zerble.heading,t=Math.cos(e),n=Math.sin(e),r=zy.x,i=zy.z;this._desiredPos.set(this.zerble.position.x+r*t+i*n,this.zerble.position.y+zy.y,this.zerble.position.z-r*n+i*t);let a=e+this.yawOffset,o=this.pitchOffset,s=Math.cos(o);this._desiredLook.set(this._desiredPos.x-Math.sin(a)*8*s,this._desiredPos.y+Math.sin(o)*8,this._desiredPos.z-Math.cos(a)*8*s)}};function Xy(e,t=0){let n=new G,r;r=e===`drum`?`rest`:e===`trumpet`||e===`trombone`?`trumpet`:`instrument`;let i=pm(e===`drum`?6957610:13073919,15122584,{armPose:r,pantsHex:1710634});n.add(i);let a=(t*2654435761>>>0)/4294967296;if(!(a<.34)){if(a<.67){let e=new J({color:1184274,roughness:.8}),t=new H(new K(.13,.13,.35,12),e);t.position.set(0,2.05,0),i.add(t);let n=new H(new K(.3,.3,.05,12),e);n.position.set(0,1.9,0),i.add(n)}else{let e=[2767450,6957610,2779706],n=e[(t*1234567891>>>0)%e.length],r=new J({color:n,roughness:.85}),a=new H(new K(.16,.16,.1,12),r);a.position.set(0,1.77,0),i.add(a);let o=new H(new U(.28,.03,.16),r);o.position.set(0,1.72,-.2),i.add(o)}}let o=new J({color:15249474,roughness:.4,metalness:.85,flatShading:!0,side:2});if(e===`tuba`){let e=new H(new oc(.45,.13,8,14),o);e.rotation.y=Math.PI/2,e.rotation.x=Math.PI/2,e.position.set(-.05,1.2,.1),i.add(e);let t=new H(new hs(.42,.6,14,1,!0),o);t.position.set(-.32,2.05,-.1),t.rotation.x=Math.PI,t.rotation.z=-.3,i.add(t)}else if(e===`drum`){let e=new H(new K(.7,.7,.6,16),new J({color:16774352,roughness:.7,flatShading:!0}));e.rotation.x=Math.PI/2,e.position.set(0,1.2,-.5),n.add(e);let t=new H(new K(.72,.72,.1,16),new J({color:16740252}));t.rotation.x=Math.PI/2,t.position.set(0,1.2,-.5),n.add(t);let r=new J({color:13213802,roughness:.9});for(let e of[-.18,.18]){let t=new H(new K(.025,.025,.55,6),r);t.position.set(e,1.55,-.18),t.rotation.x=-.6,t.rotation.z=e>0?-.2:.2,n.add(t)}}else if(e===`sax`){let e=new H(new K(.13,.18,.95,10),o);e.position.set(.35,1.35,-.4),e.rotation.z=-.35,n.add(e);let t=new H(new hs(.28,.45,12,1,!0),o);t.position.set(.55,1.9,-.4),t.rotation.z=-.35,n.add(t)}else if(e===`trombone`){let e=new H(new K(.05,.05,1.4,8),o);e.rotation.x=Math.PI/2,e.position.set(0,1.55,-.9),i.add(e);let t=new H(new hs(.2,.35,12,1,!0),o);t.rotation.x=Math.PI/2,t.position.set(0,1.55,-1.775),i.add(t)}else{let e=new H(new K(.07,.07,.85,8),o);e.rotation.x=Math.PI/2,e.position.set(0,1.55,-.625),i.add(e);let t=new H(new hs(.18,.35,12,1,!0),o);t.rotation.x=Math.PI/2,t.position.set(0,1.55,-1.225),i.add(t)}return n.userData.bobPhase=Math.random()*10,n}function Zy(e,t){let n=e.children[0];if(!n)return;let r=e.userData,i=performance.now()*.004+r.bobPhase;n.position.y=.85+Math.abs(Math.sin(i*2))*.08}var Qy=[[16740252,16765578,6740479,7327594,13073919,16769126],[16747099,9358054,16483584,11699711,16774352,16740207],[16758531,6750088,16733559,48121,12615935,16639820]];function $y(){let e=new G,t=pm(10690094,15122584);e.add(t);let n=new J({color:1710650,roughness:.7}),r=new H(new K(.32,.32,.55,14),n);r.position.set(0,2.18,0),t.add(r);let i=new H(new K(.42,.42,.05,14),n);i.position.set(0,1.93,0),t.add(i);let a=new H(new K(.325,.325,.08,14),new J({color:15249474,roughness:.3,metalness:.9}));a.position.set(0,1.97,0),t.add(a);let o=new J({color:6965802,roughness:.95}),s=new H(new K(.04,.04,2.6,8),o);s.position.set(.3,2,-.2),t.add(s);let c=new G;c.position.set(.3,3.3,-.2),t.add(c);let l=Qy[Math.floor(Math.random()*Qy.length)];for(let e=0;e<12;e++){let t=e/12*Math.PI*2,n=(e+1)/12*Math.PI*2,r=new Float32Array([0,.45,0,Math.cos(t)*1,0,Math.sin(t)*1,Math.cos(n)*1,0,Math.sin(n)*1]),i=[0,1,2],a=new Dn;a.setAttribute(`position`,new _n(r,3)),a.setIndex(i),a.computeVertexNormals();let o=new H(a,new J({color:l[e%l.length],roughness:.6,side:2,flatShading:!0}));c.add(o)}for(let e=0;e<10;e++){let t=e/10*Math.PI*2,n=1+Math.random()*.5,r=new hs(.04,n,5,1);r.translate(0,-n/2,0);let i=new H(r,new J({color:l[(e+3)%l.length],roughness:.8,flatShading:!0}));i.position.set(Math.cos(t)*.95,-.05,Math.sin(t)*.95),i.rotation.x=.6*Math.cos(t),i.rotation.z=-.6*Math.sin(t),c.add(i)}let u=new H(new q(.08,0),new J({color:15249474,roughness:.3,metalness:.9}));return u.position.y=.55,c.add(u),e.userData.parasol=c,e.userData.bobPhase=Math.random()*10,e}function eb(e,t){let n=e.children[0];if(!n)return;let r=e.userData,i=performance.now()*.004+r.bobPhase;n.position.y=.85+Math.abs(Math.sin(i*2))*.08,r.parasol&&(r.parasol.rotation.y+=t*2.4)}var tb=[16733559,16755251,16769126,6750088,6740479,12615935,16747099,9358054,16758531],nb=[2243164,4864618,2972990,6965802,1710634],rb=[3811866,6965802,9132587,14262894,13204027,546],ib=[15122584,13738096,11763290,9067066],ab=[16733559,3398143,12615935,7327594,16769126];function ob(e=Math.random){let t=new G,n=new G;t.add(n);let r=tb[Math.floor(e()*tb.length)],i=nb[Math.floor(e()*nb.length)],a=rb[Math.floor(e()*rb.length)],o=ib[Math.floor(e()*ib.length)],s=new J({color:r,roughness:.85,flatShading:!0}),c=new J({color:i,roughness:.9,flatShading:!0}),l=new J({color:o,roughness:.9,flatShading:!0}),u=new J({color:a,roughness:1,flatShading:!0}),d=new K(.07,.07,.45,8);for(let e of[-.08,.08]){let t=new H(d,c);t.position.set(e,.23,0),n.add(t);let r=new H(new U(.1,.05,.16),new J({color:273,roughness:.8}));r.position.set(e,.025,-.04),n.add(r)}let f=new H(new ps(.16,.3,4,8),s);f.position.y=.65,f.castShadow=!0,n.add(f);let p=new ps(.055,.32,4,6);for(let e of[-1,1]){let t=new G,r=new H(p,s);r.scale.set(1,.55,1),r.position.y=-.08,t.add(r);let i=new H(p,l);i.scale.set(.9,.55,.9),i.position.y=-.3,t.add(i),t.position.set(e*.2,.72,0),t.rotation.z=e*.08,n.add(t)}let m=new H(new q(.18,1),l);m.position.y=1,m.castShadow=!0,n.add(m);let h=new J({color:273,roughness:.8});for(let e of[-.06,.06]){let t=new H(new ac(.022,6,6),h);t.position.set(e,1.03,-.16),n.add(t)}let g=e();if(g<.3){for(let e of[-1,1]){let t=new H(new q(.07,0),u);t.position.set(e*.16,1,.05),n.add(t)}let e=new H(new q(.16,1),u);e.scale.set(1,.55,1),e.position.set(0,1.1,0),n.add(e)}else if(g<.65){let t=ab[Math.floor(e()*ab.length)],r=new J({color:t,roughness:.7,flatShading:!0}),i=new H(new K(.16,.16,.08,14),r);i.position.y=1.14,n.add(i);let a=new H(new U(.32,.025,.1),r);a.position.set(0,1.1,-.16),n.add(a)}else{let t=new H(new ac(.18,12,8,0,Math.PI*2,0,Math.PI/2),u);t.position.y=1,n.add(t);for(let t=0;t<3;t++){let t=new H(new q(.04,0),u);t.position.set((e()-.5)*.2,1.16+e()*.04,(e()-.5)*.18),n.add(t)}}let _=e();if(_<.5){let t=[16733559,16769126,6750088,6740479,12615935],r=t[Math.floor(e()*t.length)],i=new H(new K(.022,.022,.5,6),new J({color:r,emissive:r,emissiveIntensity:1.4,roughness:.4}));i.position.set(.3,.45,-.05),i.rotation.z=.2,n.add(i)}else if(_<.75){let t=tb[Math.floor(e()*tb.length)],r=new H(new K(.005,.005,.55,4),new J({color:819,roughness:.9}));r.position.set(.22,1.05,0),n.add(r);let i=new H(new q(.12,1),new J({color:t,roughness:.5,emissive:t,emissiveIntensity:.25}));i.position.set(.22,1.42,0),i.scale.set(1,1.2,1),n.add(i)}return t.userData.bouncePhase=Math.random()*1e3,t}function sb(e,t,n={}){let r=e.userData,i=!!n.excited,a=n.targetYaw;if(typeof a==`number`){r.displayedYaw===void 0&&(r.displayedYaw=a);let n=a-r.displayedYaw,i=Math.PI*2;for(;n>Math.PI;)n-=i;for(;n<-Math.PI;)n+=i;r.displayedYaw+=n*Math.min(1,t*9),e.rotation.y=r.displayedYaw}let o=i?.13:.08,s=performance.now()*.008+r.bouncePhase;e.children[0].position.y=Math.abs(Math.sin(s*2))*o}function cb(e=Math.random){let t=new G,n=new G,r=[16740252,16765578,7327594,6740479,11699711],i=Math.floor(e()*r.length),a=r[i],o=[r[(i+1)%r.length],r[(i+2)%r.length],r[(i+3)%r.length]],s=e()*Math.PI*2,c=new J({color:a,roughness:.95,flatShading:!0});c.onBeforeCompile=e=>{e.uniforms.uAccent1={value:new B(o[0])},e.uniforms.uAccent2={value:new B(o[1])},e.uniforms.uAccent3={value:new B(o[2])},e.uniforms.uPhase={value:s},e.vertexShader=`
      varying vec3 vWookLocalPos;
    `+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
       vWookLocalPos = position;`),e.fragmentShader=`
      varying vec3 vWookLocalPos;
      uniform vec3 uAccent1;
      uniform vec3 uAccent2;
      uniform vec3 uAccent3;
      uniform float uPhase;
    `+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
       // Three sum-of-sin noise fields at slightly different frequencies
       // and phases. Thresholded with smoothstep to make distinct color
       // splotches instead of a smooth swirl.
       float fq = 5.5;
       float n1 = sin(vWookLocalPos.y * fq + uPhase)
               + sin((vWookLocalPos.x + vWookLocalPos.z) * fq * 0.85 - uPhase * 1.4);
       float n2 = sin(vWookLocalPos.y * fq * 0.7 - uPhase * 0.8)
               + sin((vWookLocalPos.x - vWookLocalPos.z) * fq * 1.2 + uPhase * 1.7);
       float n3 = sin(vWookLocalPos.x * fq * 1.1 + uPhase * 0.5)
               + sin(vWookLocalPos.z * fq * 0.95 - uPhase * 1.3);
       float b1 = smoothstep(0.35, 1.15, n1);
       float b2 = smoothstep(0.35, 1.15, n2);
       float b3 = smoothstep(0.35, 1.15, n3);
       vec3 col = diffuseColor.rgb;
       col = mix(col, uAccent1, b1 * 0.65);
       col = mix(col, uAccent2, b2 * 0.65);
       col = mix(col, uAccent3, b3 * 0.65);
       diffuseColor.rgb = col;`)},c.customProgramCacheKey=()=>`wook-tiedye-v1`;let l=new H(new ps(.45,1.4,4,8),c);l.position.y=1.1,l.castShadow=!0,n.add(l);let u=new J({color:15122584,roughness:.9,flatShading:!0});for(let e of[-1,1]){let t=new G;t.position.set(e*.4,1.55,0),t.rotation.z=e*.1;let r=new H(new ps(.1,.36,4,6),c);r.position.y=-.22,t.add(r);let i=new H(new ps(.09,.32,4,6),u);i.position.y=-.6,t.add(i),n.add(t)}let d=new H(new q(.3,1),new J({color:15122584,roughness:.9,flatShading:!0}));d.position.y=2.15,d.castShadow=!0,n.add(d);let f=new H(new U(.32,.08,.04),new J({color:273,roughness:.3,metalness:.4}));f.position.set(0,2.17,-.27),n.add(f);let p=new J({color:5913114,roughness:1,flatShading:!0});for(let t=0;t<4;t++){let t=new H(new q(.045+e()*.02,0),p);t.position.set((e()-.5)*.14,2+e()*.04,-.25+e()*.04),n.add(t)}let m=new J({color:5913114,roughness:1,flatShading:!0}),h=new J({color:8017456,roughness:1,flatShading:!0});for(let t=0;t<14;t++){let r=t/13*Math.PI+(e()-.5)*.18,i=.9+Math.max(0,Math.sin(r))*.7+e()*.3,a=4+Math.floor(e()*2),o=i/a,s=.3,c=Math.cos(r)*s,l=Math.sin(r)*s,u=c*.3,d=l*.3,f=c,p=l,g=2.3;for(let t=0;t<a;t++){let r=c+u*(t+1),i=l+d*(t+1),s=.12+(e()-.5)*.04-t*.005,_=o*(.85+e()*.3),v=new H(new K(s,s*.95,_,6),t%2==0?m:h),y=(f+r)/2,b=(p+i)/2;v.position.set(y,g-_/2,b);let x=Math.atan2(r-f,_),S=Math.atan2(i-p,_);if(v.rotation.x=-S,v.rotation.z=x,n.add(v),t<a-1){let e=new H(new q(s*1.25,0),m);e.position.set(r,g-_,i),n.add(e)}g-=_,f=r,p=i}}let g=new H(new K(.4,.4,.18,14),new J({color:13073919,roughness:.8}));g.position.y=2.4,n.add(g);let _=new H(new K(.55,.55,.05,14),new J({color:13073919,roughness:.8}));return _.position.y=2.32,n.add(_),t.add(n),t.userData.swayPhase=Math.random()*100,t}function lb(e,t){let n=e.userData,r=performance.now()*.002+n.swayPhase,i=e.children[0];i&&(i.rotation.z=Math.sin(r)*.15,i.rotation.x=Math.cos(r*.7)*.08)}var ub=[16731533,16765503,7327594,6740479,13073919,16743228,3790532,16733559,12058459,16756471],db=[16729258,4521936,16765503,10185727,5898144,16743228];function fb(e=Math.random){let t=new G,n=new G;t.add(n);let r=ub[Math.floor(e()*ub.length)],i=ub[Math.floor(e()*ub.length)],a=2763322+Math.floor(e()*1052704),o=[15122584,13738096,11763290,9067066][Math.floor(e()*4)],s=new J({color:o,roughness:.9,flatShading:!0}),c=new J({color:r,roughness:.85,flatShading:!0}),l=new J({color:a,roughness:.9,flatShading:!0}),u=new J({color:i,roughness:.85,flatShading:!0}),d=new K(.09,.09,.55,8);for(let e of[-1,1]){let t=new H(d,l);t.position.set(e*.11,.28,0),t.castShadow=!0,n.add(t);let r=new H(new U(.14,.06,.22),new J({color:273,roughness:.8}));r.position.set(e*.11,.03,-.04),n.add(r)}let f=new H(new ps(.22,.45,4,8),c);f.position.y=.95,f.castShadow=!0,n.add(f);let p=5*Math.PI/6;for(let e of[-1,1]){let t=new G;t.position.set(e*.22,1.2,0),t.rotation.z=e*p;let r=new H(new ps(.075,.7,4,8),c);r.position.y=-.42,t.add(r);let i=new H(new q(.09,0),s);i.position.y=-.86,t.add(i),n.add(t)}let m=new H(new q(.24,1),s);m.position.y=1.55,m.castShadow=!0,n.add(m);let h=new J({color:273,roughness:.8});for(let e of[-.08,.08]){let t=new H(new ac(.025,6,6),h);t.position.set(e,1.58,-.2),n.add(t)}let g=[3811866,6965802,13204027,14262894,546,16733559][Math.floor(e()*6)],_=new J({color:g,roughness:1,flatShading:!0}),v=new H(new ac(.26,12,8,0,Math.PI*2,0,Math.PI/2),_);v.position.y=1.55,n.add(v);let y=new H(new oc(.26,.025,4,16),u);y.position.y=1.65,y.rotation.x=Math.PI/2,n.add(y);let b=new G;b.position.y=.85,t.add(b);let x=db[Math.floor(e()*db.length)],S=new J({color:x,emissive:x,emissiveIntensity:.05,roughness:.5,metalness:.1}),C=.58,w=new H(new oc(C,.035,6,24),S);return w.rotation.x=Math.PI/2,w.position.x=.27,b.add(w),t.userData.hoopMat=S,t.userData.hoopRadius=C,t.userData.hoopPivot=b,t.userData.bodyGroup=n,t.userData.gyrSpeed=4+Math.random()*2.5,t.userData.hoopSpinMult=1.3+Math.random()*.7,t.userData.phase=Math.random()*Math.PI*2,t}function pb(e,t,n=0){let r=e.userData;if(r.gyrSpeed===void 0)return;r.phase+=t*r.gyrSpeed;let i=r.phase;r.bodyGroup.rotation.z=Math.sin(i)*.2,r.bodyGroup.rotation.x=Math.cos(i)*.2,r.bodyGroup.position.y=Math.sin(i*2)*.03,r.hoopPivot.rotation.y=i*r.hoopSpinMult,r.hoopPivot.rotation.x=Math.sin(i)*.08,r.hoopPivot.rotation.z=Math.cos(i)*.06,r.hoopMat.emissiveIntensity=.05+n*3}var mb=[16740252,16765578,7327594,6740479,11699711,16747099,3790532,16765503,16731533],hb=[2243164,4864618,2972990,6965802,1710634],gb=[15122584,13738096,11763290,9067066],_b=[16733559,3398143,12615935,7327594,16769126,546];function vb(e=Math.random){let t=new G,n=new G;t.add(n);let r=mb[Math.floor(e()*mb.length)],i=hb[Math.floor(e()*hb.length)],a=gb[Math.floor(e()*gb.length)],o=new J({color:a,roughness:.9,flatShading:!0}),s=new J({color:r,roughness:.85,flatShading:!0}),c=new J({color:i,roughness:.9,flatShading:!0}),l=new K(.1,.1,.65,8);for(let e of[-1,1]){let t=new H(l,c);t.position.set(e*.12,.325,0),t.castShadow=!0,n.add(t);let r=new H(new U(.16,.07,.24),new J({color:273,roughness:.8}));r.position.set(e*.12,.035,-.06),n.add(r)}let u=new H(new ps(.26,.55,4,8),s);u.position.y=1,u.castShadow=!0,n.add(u);let d={left:null,right:null};for(let e of[-1,1]){let t=new G;t.position.set(e*.28,1.18,0),t.rotation.z=e*-.9,t.rotation.x=e>0?-.3:-.05;let r=new H(new ps(.08,.32,4,6),s);r.position.y=-.18,t.add(r);let i=new H(new ps(.075,.34,4,6),o);i.position.y=-.52,t.add(i);let a=new H(new q(.09,0),o);a.position.y=-.74,t.add(a),n.add(t),e>0?d.right=t:d.left=t}let f=new H(new q(.26,1),o);f.position.y=1.65,f.castShadow=!0,n.add(f);let p=new J({color:273,roughness:.8});for(let e of[-.085,.085]){let t=new H(new ac(.028,6,6),p);t.position.set(e,1.68,-.22),n.add(t)}if(e()<.5){let t=_b[Math.floor(e()*_b.length)],r=new J({color:t,roughness:.8,flatShading:!0}),i=new H(new K(.24,.24,.1,14),r);i.position.y=1.82,n.add(i);let a=new H(new U(.48,.03,.16),r);a.position.set(0,1.78,-.22),n.add(a)}else{let t=[3811866,6965802,13204027,14262894,546][Math.floor(e()*5)],r=new J({color:t,roughness:1,flatShading:!0}),i=new H(new ac(.28,12,8,0,Math.PI*2,0,Math.PI/1.7),r);i.position.y=1.65,n.add(i)}return t.userData.armPivots=d,t.userData.bodyGroup=n,t.userData.bobPhase=Math.random()*10,t}function yb(e,t){let n=e.userData;if(!n.bodyGroup)return;let r=performance.now()*.004+n.bobPhase;n.bodyGroup.position.y=Math.abs(Math.sin(r))*.04}function bb(e=Math.random){let t=new G,n=[16733559,16765503,6740479,12615935,16777215,16743228,7327594],r=n[Math.floor(e()*n.length)],i=new J({color:r,emissive:r,emissiveIntensity:.05,roughness:.55,metalness:.05,flatShading:!0}),a=new H(new K(.14,.14,.025,18),i);t.add(a),t.userData.discMat=i;let o=new H(new oc(.135,.012,4,18),new J({color:273,roughness:.6}));return o.rotation.x=Math.PI/2,t.add(o),t}function xb(e,t,n,r=0){e&&(n===`flying`?e.rotation.y+=t*14:n===`held`&&(e.rotation.y+=t*4),e.userData.discMat&&(e.userData.discMat.emissiveIntensity=.05+r*3))}function Sb(e,t,n,r){let i=e,a=t;for(let o=0;o<6;o++){let o=Math.random()*Cb,s=n+Math.random()*(r-n);if(i=e+Math.cos(o)*s,a=t+Math.sin(o)*s,!Hf(i,a))return{x:i,z:a}}return{x:i,z:a}}var Cb=Math.PI*2;function wb(e){for(let t=0;t<e.length;t++){let n=Uf(e[t].x,e[t].z,3);n&&(e[t].x=n.x,e[t].z=n.z)}}var Tb=class{constructor(){this.group=new G,this.group.name=`PuppetParade`,this.path=[new z(-70,0,-10),new z(-30,0,20),new z(20,0,10),new z(60,0,-20),new z(40,0,-60),new z(-20,0,-50),new z(-60,0,-30)],wb(this.path),this.speed=2.4,this.puppets=[];for(let e=0;e<6;e++){let t=em(e),n=e*4.5;t.userData.distance=-n,t.userData.dodgeTimer=0,t.userData.dodgeDirX=0,t.userData.dodgeDirZ=0,this.group.add(t),this.puppets.push(t)}this.colliders=this.puppets.map(e=>({position:new z,radius:1.4,damage:8,kind:`puppet`})),this._tmpA=new z,this._tmpB=new z}scatter(e){if(!e||!e.forwardWorld)return;let t=e.forwardWorld.x,n=e.forwardWorld.z;for(let r of this.puppets){let i=r.position.x-e.position.x,a=r.position.z-e.position.z;if(i*i+a*a>144||i*t+a*n<=0)continue;let o=1/Math.sqrt(i*i+a*a||1e-4);r.userData.dodgeTimer=1.4,r.userData.dodgeDirX=i*o,r.userData.dodgeDirZ=a*o}}update(e){let t=Ab(this.path);for(let n=0;n<this.puppets.length;n++){let r=this.puppets[n];r.userData.distance=(r.userData.distance+this.speed*e+t*100)%t;let{pos:i,dir:a}=jb(this.path,r.userData.distance,this._tmpA,this._tmpB);if(r.position.copy(i),r.userData.dodgeTimer>0){r.userData.dodgeTimer-=e;let t=Math.max(0,r.userData.dodgeTimer/1.4),n=Math.sin((1-t)*Math.PI),i=2.5;r.position.x+=r.userData.dodgeDirX*i*n,r.position.z+=r.userData.dodgeDirZ*i*n}let o=Math.atan2(-a.x,-a.z);r.rotation.y=o,tm(r,e),this.colliders[n].position.copy(r.position),this.colliders[n].position.y=1}}},Eb=class{constructor(){this.group=new G,this.group.name=`BrassBand`,this.path=[new z(80,0,70),new z(40,0,95),new z(-30,0,95),new z(-90,0,70),new z(-95,0,10),new z(-60,0,-10),new z(0,0,30),new z(60,0,30),new z(85,0,50)],wb(this.path),this.speed=1.8,this.members=[];for(let[e,t,n]of[[0,1.6,`parasol`],[-1.4,0,`trumpet`],[1.4,0,`trumpet`],[0,-1,`sax`],[-2.6,-2.2,`trombone`],[0,-2.4,`tuba`],[2.6,-2.2,`drum`]]){let r=n===`parasol`?$y():Xy(n);r.userData.formationOff=new z(e,0,t),r.userData.instrument=n,this.group.add(r),this.members.push(r)}this.colliders=this.members.map(()=>({position:new z,radius:1,damage:6,kind:`brass`})),this._parasolPhase=0,this.distance=0,this._tmpA=new z,this._tmpB=new z,this._dodgeTimer=0,this._dodgeDirX=0,this._dodgeDirZ=0}scatter(e){if(!e||!e.forwardWorld)return;let t=e.forwardWorld.x,n=e.forwardWorld.z;for(let r of this.members){let i=r.position.x-e.position.x,a=r.position.z-e.position.z;if(i*i+a*a>196||i*t+a*n<=0)continue;let o=1/Math.sqrt(i*i+a*a||1e-4);this._dodgeTimer=1.6,this._dodgeDirX=i*o,this._dodgeDirZ=a*o;return}this._music=nd.attachStageMusic(this.path[0].x,1,this.path[0].z,739925,`second_line`)}update(e){let t=Ab(this.path);this.distance=(this.distance+this.speed*e+t*100)%t;let{pos:n,dir:r}=jb(this.path,this.distance,this._tmpA,this._tmpB),i=Math.atan2(-r.x,-r.z),a=Math.cos(i),o=Math.sin(i),s=0,c=0;if(this._dodgeTimer>0){this._dodgeTimer-=e;let t=Math.max(0,this._dodgeTimer/1.6),n=Math.sin((1-t)*Math.PI);s=this._dodgeDirX*3*n,c=this._dodgeDirZ*3*n}for(let t=0;t<this.members.length;t++){let r=this.members[t],l=r.userData.formationOff,u=l.x*a+l.z*o,d=-l.x*o+l.z*a;r.position.set(n.x+u+s,0,n.z+d+c),r.rotation.y=i,r.userData.instrument===`parasol`?eb(r,e):Zy(r,e),this.colliders[t].position.copy(r.position),this.colliders[t].position.y=1}this._music&&this._music.setPosition&&this._music.setPosition(n.x,1,n.z)}},Db=class{constructor(){this.group=new G,this.group.name=`Kids`,this.kids=[],this.colliders=[];let e=[];for(let t=0;t<8;t++){let n=t/8*Cb+Math.random()*.3,r=25+Math.random()*50;e.push(new z(Math.cos(n)*r,0,Math.sin(n)*r))}for(let t of e){let e=5+Math.floor(Math.random()*4);for(let n=0;n<e;n++){let e=ob();e.position.copy(t),e.position.x+=(Math.random()-.5)*8,e.position.z+=(Math.random()-.5)*8,e.userData.center=t.clone(),e.userData.heading=Math.random()*Cb,e.userData.displayedYaw=e.userData.heading,e.userData.turnTimer=Math.random()*2,e.userData.speed=3+Math.random()*2,e.userData.chaseHoldTimer=0,e.userData.chaseDirX=0,e.userData.chaseDirZ=0,e.userData.scatterTimer=0,e.userData.happiness=0,e.userData.lastSmilePos=null,e.userData.smileTimeCooldown=0,this.group.add(e),this.kids.push(e),this.colliders.push({position:new z,radius:.6,damage:3,kind:`kid`})}}}scatter(e){if(e)for(let t of this.kids){let n=t.position.x-e.position.x,r=t.position.z-e.position.z;if(n*n+r*r>144)continue;t.userData.scatterTimer=1.2;let i=Math.atan2(n,-r);t.userData.heading=i+(Math.random()-.5)*(Math.PI/3),t.userData.turnTimer=.8}}update(e,t,n,r){if(n)for(let e of this.kids){let t=e.position.x-n.position.x,r=e.position.z-n.position.z;if(t*t+r*r>4e4){let t=Sb(n.position.x,n.position.z,30,80);e.position.set(t.x,0,t.z),e.userData.center.set(t.x,0,t.z),e.userData.scatterTimer=0}}for(let e of this.kids)if(Hf(e.position.x,e.position.z)){let t=Uf(e.position.x,e.position.z,3);t&&(e.position.x=t.x,e.position.z=t.z,e.userData.center.x=t.x,e.userData.center.z=t.z)}let i=[];t&&t.forEachAlive(e=>i.push(e.pos));let a=n&&Math.abs(n.speed||0)<.5;if(n){let t=a&&n.nozzleWorld?n.nozzleWorld.x:n.position.x,r=a&&n.nozzleWorld?n.nozzleWorld.z:n.position.z,i=Math.min(1,e*(a?.8:.25));for(let e of this.kids)e.userData.center.x+=(t-e.userData.center.x)*i,e.userData.center.z+=(r-e.userData.center.z)*i}let o=1.5;for(let t=0;t<this.kids.length;t++){let a=this.kids[t];a.userData.chaseHoldTimer>0&&(a.userData.chaseHoldTimer-=e);let s=0,c=0,l=1/0;for(let e of i){let t=e.x-a.position.x,n=e.z-a.position.z,r=Math.hypot(t,n);r<l&&r<9&&(l=r,s=t,c=n)}a.userData.scatterTimer>0&&(a.userData.scatterTimer-=e),a.userData.smileTimeCooldown>0&&(a.userData.smileTimeCooldown-=e);let u=a.userData.scatterTimer>0&&n;if(r&&n&&!u){let t=a.position.x-n.position.x,s=a.position.z-n.position.z,c=Math.hypot(t,s),l=a.userData.lastSmilePos===null||n.position.distanceTo(a.userData.lastSmilePos)>28;if(a.userData.smileTimeCooldown<=0&&l&&c<12){let t=0;t+=.4*(1-c/12);let s=1/0;for(let e of i){let t=Math.hypot(e.x-a.position.x,e.z-a.position.z);t<s&&(s=t)}s<o&&(t+=.6*(1-s/o)),a.userData.happiness+=t*e,a.userData.happiness>=.7&&(a.userData.happiness=0,a.userData.smileTimeCooldown=3,a.userData.lastSmilePos=n.position.clone(),r.spawn(a.position))}else a.userData.happiness=Math.max(0,a.userData.happiness-e*.2)}if(u)a.position.x+=Math.sin(a.userData.heading)*5*e,a.position.z+=-Math.cos(a.userData.heading)*5*e;else if(l<9&&l>.7){let t=1/(l||1),n=s*t,r=c*t;if(a.userData.chaseHoldTimer>0){let t=Math.min(1,e*4);a.userData.chaseDirX=a.userData.chaseDirX+(n-a.userData.chaseDirX)*t,a.userData.chaseDirZ=a.userData.chaseDirZ+(r-a.userData.chaseDirZ)*t}else a.userData.chaseDirX=n,a.userData.chaseDirZ=r,a.userData.chaseHoldTimer=.4;a.userData.heading=Math.atan2(a.userData.chaseDirX,-a.userData.chaseDirZ),a.userData.turnTimer=.4+Math.random()*.4;let i=4.2;a.position.x+=a.userData.chaseDirX*i*e,a.position.z+=a.userData.chaseDirZ*i*e}else{a.userData.turnTimer-=e,a.userData.turnTimer<=0&&(a.userData.heading+=(Math.random()-.5)*1.8,a.userData.turnTimer=.5+Math.random()*1.5);let t=Math.sin(a.userData.heading),n=-Math.cos(a.userData.heading);a.position.x+=t*a.userData.speed*e,a.position.z+=n*a.userData.speed*e;let r=a.position.x-a.userData.center.x,i=a.position.z-a.userData.center.z;Math.hypot(r,i)>12&&(a.userData.heading=Math.atan2(-r,-i)+(Math.random()-.5)*.4)}Ob(a,.4),sb(a,e,{excited:l<9,targetYaw:a.userData.heading}),this.colliders[t].position.copy(a.position),this.colliders[t].position.y=.6}}};function Ob(e,t){for(let n of Y.colliders()){let r=e.position.x-n.position.x,i=e.position.z-n.position.z,a=n.radius+t,o=r*r+i*i;if(o>=a*a)continue;let s=Math.sqrt(o)||.001,c=1/s,l=a-s;e.position.x+=r*c*l,e.position.z+=i*c*l,e.userData&&(e.userData.heading=Math.atan2(r*c,-i*c)+(Math.random()-.5)*.6,e.userData.turnTimer=.3+Math.random()*.4)}}var kb=class{constructor(){this.group=new G,this.group.name=`Wooks`,this.wooks=[],this.colliders=[];for(let e=0;e<5;e++){let e=cb(),t=Math.random()*Cb,n=60+Math.random()*100;e.userData.anchor=new z(Math.cos(t)*n,0,Math.sin(t)*n),e.userData.radius=2.5+Math.random()*3,e.userData.phase=Math.random()*Cb,e.userData.speed=.4+Math.random()*.4,e.userData.dodgeTimer=0,e.userData.dodgeDirX=0,e.userData.dodgeDirZ=0,this.group.add(e),this.wooks.push(e),this.colliders.push({position:new z,radius:.9,damage:5,kind:`wook`})}}scatter(e){if(!e||!e.forwardWorld)return;let t=e.forwardWorld.x,n=e.forwardWorld.z;for(let r of this.wooks){let i=r.position.x-e.position.x,a=r.position.z-e.position.z,o=i*i+a*a;if(o>100||i*t+a*n<=0)continue;let s=1/Math.sqrt(o||1e-4);r.userData.dodgeTimer=1.4,r.userData.dodgeDirX=i*s,r.userData.dodgeDirZ=a*s}}update(e,t,n){let r=1.8;if(t)for(let e=0;e<this.wooks.length;e++){let n=this.wooks[e],r=n.userData.anchor,i=r.x-t.x,a=r.z-t.z;if(i*i+a*a>9e4){let i=!1;for(let n=0;n<8;n++){let n=Math.random()*Cb,a=90+Math.random()*70,o=t.x+Math.cos(n)*a,s=t.z+Math.sin(n)*a;if(Hf(o,s))continue;let c=!1;for(let t=0;t<this.wooks.length;t++){if(t===e)continue;let n=this.wooks[t].userData.anchor,r=o-n.x,i=s-n.z;if(r*r+i*i<1600){c=!0;break}}if(!c){r.set(o,0,s),i=!0;break}}if(!i){let e=Sb(t.x,t.z,90,160);r.set(e.x,0,e.z)}n.userData.phase=Math.random()*Cb}}let i=-1;if(t&&n!=null&&n<.5){let e=625;for(let n=0;n<this.wooks.length;n++){let r=this.wooks[n],a=r.position.x-t.x,o=r.position.z-t.z,s=a*a+o*o;s<e&&(e=s,i=n)}}for(let n=0;n<this.wooks.length;n++){let a=this.wooks[n],o=n===i&&t;if(a.userData.dodgeTimer>0){let t=3.5;a.position.x+=a.userData.dodgeDirX*t*e,a.position.z+=a.userData.dodgeDirZ*t*e,a.rotation.y=Math.atan2(-a.userData.dodgeDirX,-a.userData.dodgeDirZ),a.userData.dodgeTimer-=e,a.userData.dodgeTimer<=0&&(a.userData.anchor.set(a.position.x,0,a.position.z),a.userData.phase=0)}else if(o){let n=t.x-a.position.x,i=t.z-a.position.z,o=Math.hypot(n,i);if(o>1.5){let t=1/(o||1);a.position.x+=n*t*r*e,a.position.z+=i*t*r*e}a.rotation.y=Math.atan2(-n,-i)}else{a.userData.phase+=a.userData.speed*e;let t=a.userData.anchor,n=t.x+Math.cos(a.userData.phase)*a.userData.radius,r=t.z+Math.sin(a.userData.phase*.7)*a.userData.radius;a.position.set(n,0,r),a.rotation.y=-a.userData.phase+Math.PI}lb(a,e),this.colliders[n].position.copy(a.position),this.colliders[n].position.y=1,this.colliders[n].passive=o,this.colliders[n].damage=o?0:5}for(let e=0;e<this.wooks.length;e++){let t=this.wooks[e];if(Hf(t.position.x,t.position.z)){let e=Uf(t.position.x,t.position.z,3);e&&(t.position.x=e.x,t.position.z=e.z,t.userData.anchor.set(e.x,0,e.z))}}}};function Ab(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.distanceTo(i)}return t}function jb(e,t,n,r){let i=t;for(let t=0;t<e.length;t++){let a=e[t],o=e[(t+1)%e.length],s=a.distanceTo(o);if(i<=s){let e=i/s;return n.lerpVectors(a,o,e),r.subVectors(o,a).normalize(),{pos:n,dir:r}}i-=s}return n.copy(e[0]),r.set(0,0,1),{pos:n,dir:r}}var Mb=new Set([`stage`,`stage_front`,`drum_circle`,`firepit`,`leaf_drum_circle`]),Nb=1.18,Pb=8,Fb=48400,Ib=class{constructor(){this.group=new G,this.group.name=`HulaHoopers`,this.hoopers=[],this.colliders=[],this._scanCooldown=0,this._tmp=new z}update(e,t,n=0){this._scanCooldown-=e,t&&this._scanCooldown<=0&&(this._scanCooldown=2.5,this._rescan(t));for(let t=0;t<this.hoopers.length;t++){let r=this.hoopers[t];if(!r.visible)continue;let i=r.userData;if(pb(r,e,n),i.driftTimer-=e,i.driftTimer<=0){i.driftTimer=4+Math.random()*5;let e=Math.random()*Cb,t=.4+Math.random()*.9;i.driftTargetX=i.anchorX+Math.cos(e)*t,i.driftTargetZ=i.anchorZ+Math.sin(e)*t}let a=i.driftTargetX-r.position.x,o=i.driftTargetZ-r.position.z,s=Math.hypot(a,o);if(s>.04){let t=Math.min(s,.25*e);if(r.position.x+=a/s*t,r.position.z+=o/s*t,i.footprintId!=null){let e=Y.entries.get(i.footprintId);e&&e.position.set(r.position.x,0,r.position.z)}}this.colliders[t].position.copy(r.position),this.colliders[t].position.y=.9}}_rescan(e){let t=[];for(let n of Y.entries.values()){if(!n.attractor||!Mb.has(n.kind))continue;let r=n.position.x-e.x,i=n.position.z-e.z,a=r*r+i*i;a>14400||t.push({entry:n,d2:a})}let n=new Map;for(let e of this.hoopers){let t=e.userData.attractorId;t!=null&&n.set(t,(n.get(t)||0)+1)}for(let t of this.hoopers){let r=t.userData,i=r.attractorId!=null&&Y.entries.has(r.attractorId),a=t.position.x-e.x,o=t.position.z-e.z,s=a*a+o*o>Fb;if(!i||s){if(r.attractorId!=null){let e=n.get(r.attractorId)||0;e>0&&n.set(r.attractorId,e-1)}r.attractorId=null,t.visible=!1}}for(let e of this.hoopers)if(e.userData.attractorId==null){Lb(t);for(let r of t){let t=r.entry,i=n.get(t.id)||0;if(i>=(t.attractor.weight>=2?3:t.attractor.weight>=1?2:1)||!(Math.random()<.18*Math.min(2.5,t.attractor.weight)))continue;let a=Math.random()*Cb,o=(.45+Math.random()*.5)*t.attractor.radius,s=t.position.x+Math.cos(a)*o,c=t.position.z+Math.sin(a)*o;if(!Y.closestBuilding(new z(s,0,c),Nb)){if(e.position.set(s,0,c),e.rotation.y=Math.atan2(t.position.x-s,t.position.z-c),e.visible=!0,e.userData.attractorId=t.id,e.userData.phase=Math.random()*Cb,e.userData.anchorX=s,e.userData.anchorZ=c,e.userData.driftTargetX=s,e.userData.driftTargetZ=c,e.userData.driftTimer=2+Math.random()*4,n.set(t.id,i+1),e.userData.footprintId!=null){let t=Y.entries.get(e.userData.footprintId);t&&t.position.set(s,0,c)}break}}}}};Ib.create=function(){let e=new Ib;for(let t=0;t<Pb;t++){let t=fb();t.visible=!1,t.userData.attractorId=null,t.userData.phase=0,t.userData.gyrSpeed=1.8,e.group.add(t),e.hoopers.push(t),e.colliders.push({position:new z,radius:.55,damage:4,kind:`hula_hoop`});let n=Y.add({kind:`hula_hoop`,position:new z(0,-1e3,0),footprint:Nb});t.userData.footprintId=n}return e};function Lb(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}var Rb=5,zb=10,Bb=35,Vb=4e4,Hb=9.5,Ub=9.8,Wb=.7,Gb=.2,Kb=2.6,qb=class{constructor(){this.group=new G,this.group.name=`Frisbees`,this.pairs=[],this.colliders=[];for(let e=0;e<Rb;e++){let e=this._buildPair();this.group.add(e.playerA),this.group.add(e.playerB),this.group.add(e.disc),this.pairs.push(e);for(let t of[e.playerA,e.playerB]){let e={position:new z,radius:.5,damage:1,kind:`person`};t.userData.collider=e,this.colliders.push(e)}e.anchor.set(9999,0,9999),e.playerA.position.copy(e.anchor),e.playerB.position.copy(e.anchor),e.disc.position.copy(e.anchor)}}_buildPair(){let e=vb(),t=vb();return{playerA:e,playerB:t,disc:bb(),anchor:new z,discState:`held`,discHolder:e,discCatcher:t,target:new z,vel:new z,pauseTimer:1+Math.random()*1.5,catcherTarget:new z}}update(e,t,n=0){if(t)for(let e of this.pairs){let n=e.anchor.x-t.x,r=e.anchor.z-t.z;n*n+r*r>Vb&&this._recycle(e,t)}performance.now()*.001;for(let t of this.pairs){yb(t.playerA,e),yb(t.playerB,e),xb(t.disc,e,t.discState,n);let r=(e,t,n)=>{e.rotation.y=Math.atan2(t-e.position.x,n-e.position.z)+Math.PI};if(t.discState===`held`){let n=t.discHolder.position.x+Math.sin(t.discHolder.rotation.y)*.3,i=t.discHolder.position.z-Math.cos(t.discHolder.rotation.y)*.3;t.disc.position.set(n,1.45,i),r(t.playerA,t.playerB.position.x,t.playerB.position.z),r(t.playerB,t.playerA.position.x,t.playerA.position.z),t.pauseTimer-=e,t.pauseTimer<=0&&this._toss(t)}else if(t.discState===`flying`){t.disc.position.x+=t.vel.x*e,t.disc.position.y+=t.vel.y*e,t.disc.position.z+=t.vel.z*e,t.vel.y-=Ub*e*.6;let n=Ub*.6,i=t.vel.y,a=t.disc.position.y,o=-.5*n,s=i,c=a-.4,l=s*s-4*o*c,u=0;if(l>=0){let e=(-s-Math.sqrt(l))/(2*o),t=(-s+Math.sqrt(l))/(2*o),n=[];e>0&&isFinite(e)&&n.push(e),t>0&&isFinite(t)&&n.push(t),n.length&&(u=Math.min(...n))}t.catcherTarget.set(t.disc.position.x+t.vel.x*u,0,t.disc.position.z+t.vel.z*u);let d=t.catcherTarget.x-t.discCatcher.position.x,f=t.catcherTarget.z-t.discCatcher.position.z,p=Math.hypot(d,f);if(p>.05){let n=1/p,r=Math.min(p,Kb*e);t.discCatcher.position.x+=d*n*r,t.discCatcher.position.z+=f*n*r}r(t.discCatcher,t.disc.position.x,t.disc.position.z),r(t.discHolder,t.disc.position.x,t.disc.position.z);let m=t.disc.position.x-t.discCatcher.position.x,h=t.disc.position.z-t.discCatcher.position.z,g=Math.hypot(m,h);t.disc.position.y<1.7&&t.disc.position.y>.6&&g<Wb?this._catch(t):t.disc.position.y<=.05&&(t.disc.position.y=.05,t.discState=`landed`,t.target.set(t.disc.position.x,0,t.disc.position.z))}else if(t.discState===`landed`){let n=t.disc.position.x-t.discCatcher.position.x,i=t.disc.position.z-t.discCatcher.position.z,a=Math.hypot(n,i);if(a<.7){let e=t.discHolder;t.discHolder=t.discCatcher,t.discCatcher=e,t.discState=`held`,t.pauseTimer=.8+Math.random()*1.2}else{let r=1/a,o=Math.min(a,Kb*e);t.discCatcher.position.x+=n*r*o,t.discCatcher.position.z+=i*r*o}r(t.discCatcher,t.disc.position.x,t.disc.position.z),r(t.discHolder,t.discCatcher.position.x,t.discCatcher.position.z)}t.playerA.userData.collider&&(t.playerA.userData.collider.position.copy(t.playerA.position),t.playerA.userData.collider.position.y=.9),t.playerB.userData.collider&&(t.playerB.userData.collider.position.copy(t.playerB.position),t.playerB.userData.collider.position.y=.9)}}_toss(e){let t=e.disc.position.x,n=e.disc.position.z,r=e.discCatcher.position.x,i=e.discCatcher.position.z,a=r-t,o=i-n,s=Math.atan2(a,o)+(Math.random()-.5)*2*Gb,c=Hb*(.85+Math.random()*.35);e.vel.set(Math.sin(s)*c,4.5+Math.random()*1.6,Math.cos(s)*c),e.disc.position.y=1.45,e.discState=`flying`}_catch(e){let t=e.discHolder;e.discHolder=e.discCatcher,e.discCatcher=t,e.discState=`held`,e.pauseTimer=.7+Math.random()*1}_recycle(e,t){let n=Math.random()*Cb,r=Bb+Math.random()*55,i=t.x+Math.cos(n)*r,a=t.z+Math.sin(n)*r;e.anchor.set(i,0,a);let o=zb+Math.random()*8,s=Math.random()*Cb;e.playerA.position.set(i+Math.cos(s)*o*.5,0,a+Math.sin(s)*o*.5),e.playerB.position.set(i-Math.cos(s)*o*.5,0,a-Math.sin(s)*o*.5),e.discHolder=e.playerA,e.discCatcher=e.playerB,e.discState=`held`,e.pauseTimer=.6+Math.random()*1.4,e.disc.position.set(e.playerA.position.x,1.45,e.playerA.position.z)}},Jb=[10,25,50,100,250,500,1e3,2500],Yb={reachedSmileMilestones:new Set,lastBestReported:0,honked:!1,sessionStartMs:performance.now()};function Xb(e,t){try{if(typeof window>`u`||typeof window.gtag!=`function`)return;window.gtag(`event`,e,t||{})}catch{}}function Zb(){return Math.round((performance.now()-Yb.sessionStartMs)/1e3)}var Qb={gameStart(){Yb.sessionStartMs=performance.now(),Xb(`game_start`)},debugMenuToggle(e){e&&Xb(`debug_menu_open`,{time_in_run_s:Zb()})},tripMenuToggle(e){e&&Xb(`trip_menu_open`,{time_in_run_s:Zb()})},smileScore(e){for(let t of Jb)e>=t&&!Yb.reachedSmileMilestones.has(t)&&(Yb.reachedSmileMilestones.add(t),Xb(`smile_milestone`,{milestone:t,time_in_run_s:Zb()}))},personalBest(e){e>Yb.lastBestReported+9&&(Yb.lastBestReported=e,Xb(`personal_best`,{value:Math.floor(e),time_in_run_s:Zb()}))},lurleenFound(){Xb(`lurleen_found`,{time_in_run_s:Zb()})},tripStart(e){Xb(`trip_start`,{source:e,time_in_run_s:Zb()})},collision(e){Xb(`collision`,{kind:e,time_in_run_s:Zb()})},firstHonk(){Yb.honked||(Yb.honked=!0,Xb(`first_honk`,{time_in_run_s:Zb()}))},viewToggle(e){Xb(`view_toggle`,{mode:e,time_in_run_s:Zb()})}},$b=22,ex=18,tx=33,nx=22,rx=80,ix=33,ax=90,ox=60,sx=10,cx=[{name:`baseline`,pixelRatioMul:1,bubbles:`fancy`},{name:`pixel-87`,pixelRatioMul:.875,bubbles:`fancy`},{name:`no-bloom`,pixelRatioMul:.875,bubbles:`fancy`,bloom:!1},{name:`pixel-75`,pixelRatioMul:.75,bubbles:`fancy`,bloom:!1},{name:`cheap-bubs`,pixelRatioMul:.75,bubbles:`cheap`,bloom:!1},{name:`no-shadows`,pixelRatioMul:.75,bubbles:`cheap`,bloom:!1,shadows:!1},{name:`pixel-50`,pixelRatioMul:.5,bubbles:`cheap`,bloom:!1,shadows:!1}],Z={enabled:!0,level:0,badRun:0,goodRun:0,frameTimes:[],hooks:null,_castersTurnedOff:null,_statsCache:{avg:0,p95:0,max:0},_statsTick:0,_lastPerfTime:0,_maxSpikesInRow:0};function lx(e){Z.hooks=e,Z.basePixelRatio=e.renderer.getPixelRatio()}function ux(e){Z.enabled=e}function dx(e){if(!Z.enabled||!Z.hooks)return;let t=performance.now(),n=Z._lastPerfTime>0?t-Z._lastPerfTime:e*1e3;if(Z._lastPerfTime=t,Z.frameTimes.push(n),Z.frameTimes.length>ax&&Z.frameTimes.shift(),Z.frameTimes.length<ax)return;let r=0;for(let e of Z.frameTimes)r+=e;let i=r/Z.frameTimes.length;if(Z._statsTick++,Z._statsTick>=sx){Z._statsTick=0;let e=Z.frameTimes.slice().sort((e,t)=>e-t);Z._statsCache={avg:i,p95:e[Math.floor(e.length*.95)]??0,max:e[e.length-1]??0}}let{p95:a,max:o}=Z._statsCache,s=i>$b||a>tx;if(s){if(Z.badRun++,Z.goodRun=0,Z.badRun>=ox&&Z.level<cx.length-1){fx(Z.level+1,i),Z.badRun=0,Z._maxSpikesInRow=0;return}}else Z.badRun=Math.max(0,Z.badRun-1);if(n>rx){if(Z._maxSpikesInRow++,Z._maxSpikesInRow>=2&&Z.level<cx.length-1){fx(Z.level+1,i),Z.badRun=0,Z._maxSpikesInRow=0;return}}else Z._maxSpikesInRow=0;i<ex&&a<nx&&o<ix?(Z.goodRun++,Z.badRun=0,Z.goodRun>=ox&&Z.level>0&&(fx(Z.level-1,i),Z.goodRun=0)):s||(Z.goodRun=Math.max(0,Z.goodRun-1))}function fx(e,t){let n=cx[e];Z.level=e;let{renderer:r,scene:i,composer:a,bloomPass:o,hud:s}=Z.hooks;o&&(o.enabled=n.bloom!==!1&&rl.bloom),px(i,r,n.shadows!==!1&&rl.shadows);let c=n.pixelRatioMul??1;r.setPixelRatio(Z.basePixelRatio*c),a.setSize(window.innerWidth,window.innerHeight);let l=t>0?(1e3/t).toFixed(0):`?`,u=e>0?`perf: ${n.name} (~${l}fps)`:`perf: full quality (~${l}fps)`;s?.toast?.(u,1800),Z.hooks.onLevelChange?.(e,n)}function px(e,t,n){if(n){if(Z._castersTurnedOff){for(let e of Z._castersTurnedOff)e&&!e.castShadow&&(e.castShadow=!0);Z._castersTurnedOff=null}t.shadowMap.enabled=!0}else{let n=[];e.traverse(e=>{e.isMesh&&e.castShadow&&(e.castShadow=!1,n.push(e))}),Z._castersTurnedOff=n,t.shadowMap.needsUpdate=!0}}function mx(){return cx[Z.level].name}function hx(){return cx.map(e=>e.name)}function gx(){return Z._statsCache}function _x(e){e>=0&&e<cx.length&&fx(e,Z._statsCache.avg||16)}function vx(e){Z.hooks&&px(Z.hooks.scene,Z.hooks.renderer,e)}function yx(){let e=Z.hooks?.bloomPass;return!e||e.enabled}function bx(){return Z._castersTurnedOff===null}function xx(e){Z.hooks?.renderer&&(Z.hooks.renderer.setPixelRatio((Z.basePixelRatio??1)*e),Z.hooks.composer?.setSize(window.innerWidth,window.innerHeight))}var Sx={low:{tris:15e4,draws:80},mid:{tris:4e5,draws:200},high:{tris:12e5,draws:400}};function Cx(e,t){if(typeof e!=`number`)return String(e);let n=e.toLocaleString();if(!t)return n;let r=e/t,i;return i=r<.75?`ok`:r<1?`! `:`!!`,`${n} / ${t.toLocaleString()} [${i}]`}var wx=`debug-panel`,Tx=`trip-panel`,Ex=`__debug_colliders`,Q={visible:!1,paused:!1,pendingSteps:0,god:!1,freezeNPCs:!1,showColliders:!1,panelEl:null,rafSamples:[],lastSample:0,hooks:null,tripVisible:!1,tripPanelEl:null,tripStateEl:null,tripSliders:{}};function Dx(e){Q.hooks=e,Px(),Ux(),Fx(),window.__debug=Mx(),Rx(0)}function Ox(e){return Lx(e),Q.visible&&Rx(e),Q.tripVisible&&Gx(),Q.showColliders&&Bx(),!Q.paused||Q.pendingSteps>0&&(Q.pendingSteps--,!0)}function kx(){return Q.god}function Ax(){return Q.freezeNPCs}function jx(e){let t=Q.hooks;if(!t||!t.zerble)return null;let n=t.zerble.position.x,r=t.zerble.position.z;function i(e){let i=null;for(let a of t.registry.entries.values()){if(!e(a))continue;let t=Math.hypot(a.position.x-n,a.position.z-r);(!i||t<i.d)&&(i={entry:a,d:t})}return i?i.entry:null}function a(e){let t=null,i=Math.round(n/80),a=Math.round(r/80);for(let o=i-60;o<=i+60;o++)for(let i=a-60;i<=a+60;i++){let a=Ap(o,i);if(!a||a.role!==`center`||e&&!e(a))continue;let s=Math.hypot(a.centerX-n,a.centerZ-r);(!t||s<t.d)&&(t={f:a,d:s})}return t?t.f:null}function o(e){let t=e.centerX,n=e.centerZ,r=0;switch(e.pathDirIdx){case 0:n-=105,r=Math.PI;break;case 1:t+=105,r=-Math.PI/2;break;case 2:n+=105,r=0;break;case 3:t-=105,r=Math.PI/2}return{x:t,z:n,heading:r}}switch(e){case`drum_circle`:{let e=a(e=>e.interiorContent===`drum_circle`);return e?{...o(e),label:`drum-circle forest at (${e.centerCx}, ${e.centerCz})`}:null}case`campsite_forest`:{let e=a(e=>e.interiorContent===`campsite`);return e?{...o(e),label:`campsite forest at (${e.centerCx}, ${e.centerCz})`}:null}case`any_forest`:{let e=a(e=>e.hasInterior);return e?{...o(e),label:`forest at (${e.centerCx}, ${e.centerCz})`}:null}case`lurleen`:{let e=t.lurleen;return!e||!e.position?null:{x:e.position.x,z:e.position.z+8,heading:Math.PI,label:`Lurleen`}}case`lake`:{let e=i(e=>e.kind===`lake`);if(!e)return null;let t=n-e.position.x,a=r-e.position.z,o=Math.hypot(t,a)||1,s=(e.footprint||0)+8;return{x:e.position.x+t/o*s,z:e.position.z+a/o*s,heading:Math.atan2(-t,-a),label:`nearest lake`}}case`campsite`:{let e=i(e=>e.kind===`campsite`);return e?{x:e.position.x+4,z:e.position.z+4,label:`nearest campsite`}:null}case`spawn`:return{x:0,z:65,heading:0,label:`spawn`}}return null}function Mx(){let e=Q.hooks;return{teleport(t=0,n=0){e.zerble.position.set(t,e.zerble.position.y,n),e.zerble.speed=0},god(e=!0){Q.god=!!e,Kx(`god: ${Q.god}`)},freezeNPCs(e=!0){Q.freezeNPCs=!!e,Kx(`freezeNPCs: ${Q.freezeNPCs}`)},showColliders(e=!0){Q.showColliders=!!e,e||Vx(),Kx(`showColliders: ${Q.showColliders}`)},pause(e=!0){Q.paused=!!e,Kx(`paused: ${Q.paused}`)},step(e=1){Q.pendingSteps+=Math.max(1,e|0)},toggle(){Q.visible=!Q.visible,Q.panelEl.style.display=Q.visible?`block`:`none`,Qb.debugMenuToggle(Q.visible)},dropSmile(t=10){for(let n=0;n<t;n++){let t=Math.random()*Math.PI*2,n=2+Math.random()*5;e.smiles.spawn(e.zerble.position.x+Math.cos(t)*n,e.zerble.position.z+Math.sin(t)*n)}},spawnNPC(t=20){let n=0;for(let r of e.crowd.npcs){if(n>=t)break;let i=r.pos.x-e.zerble.position.x,a=r.pos.z-e.zerble.position.z;i*i+a*a>3600||(r.state=`watching`,n++)}Kx(`promoted ${n} NPC(s) to watching`)}}}function Nx(e,t=!0){let n=document.createElement(`div`);n.style.cssText=`margin-top:8px;border-top:1px solid #2a4a5a;padding-top:6px`;let r=document.createElement(`div`);r.style.cssText=`display:flex;align-items:center;gap:5px;cursor:pointer;user-select:none;margin-bottom:4px;opacity:0.7`;let i=document.createElement(`span`),a=document.createElement(`span`);a.textContent=e,r.appendChild(i),r.appendChild(a),n.appendChild(r);let o=document.createElement(`div`);n.appendChild(o);let s=t,c=()=>{i.textContent=s?`▾`:`▸`,o.style.display=s?``:`none`};return c(),r.addEventListener(`click`,()=>{s=!s,c()}),{wrapper:n,content:o}}function Px(){let e=document.createElement(`div`);e.id=wx,Object.assign(e.style,{position:`fixed`,top:`8px`,right:`8px`,zIndex:`999`,font:`11px/1.35 ui-monospace, Menlo, monospace`,color:`#dff`,background:`rgba(8, 18, 28, 0.85)`,padding:`8px 10px`,borderRadius:`6px`,border:`1px solid #2a4a5a`,maxWidth:`280px`,pointerEvents:`auto`,display:`none`});let t=document.createElement(`div`);t.style.whiteSpace=`pre`,e.appendChild(t),Q.textEl=t;let{wrapper:n,content:r}=Nx(`Controls`,!1);r.style.fontSize=`11px`,r.style.lineHeight=`1.5`,r.innerHTML=`
    <div><b>W A S D</b> drive · <b>Shift</b> boost · <b>Space</b> honk (random)</div>
    <div><b>B</b> bicycle bell · <b>H</b> clown horn (specific)</div>
    <div><b>← ↑ ↓ →</b> orbit/tilt camera</div>
    <div><b>V</b> first-person / chase view</div>
    <div><b>I</b> / <b>O</b> eye glow brighter / dimmer</div>
    <div><b>\`</b> toggle this debug panel</div>
    <div><b>T</b> toggle trip/psychedelic debug panel</div>
  `,e.appendChild(n);let{wrapper:i,content:a}=Nx(`Time of day`);a.innerHTML=`
    <span id="dbg-tod-readout" style="float:right;opacity:0.6;font-size:10px"></span>
    <input id="dbg-tod-slider" type="range" min="0" max="1" step="0.001" value="0.15"
      style="width:100%;accent-color:#ffe066;cursor:pointer" />
    <div style="display:flex;gap:4px;margin-top:6px">
      <button data-t="0.10" class="dbg-tod-preset">Morning</button>
      <button data-t="0.30" class="dbg-tod-preset">Noon</button>
      <button data-t="0.50" class="dbg-tod-preset">Dusk</button>
      <button data-t="0.75" class="dbg-tod-preset">Midnight</button>
    </div>
  `,e.appendChild(i);let{wrapper:o,content:s}=Nx(`Teleport`,!1);s.innerHTML=`
    <div style="display:flex;gap:4px">
      <select id="dbg-tp-select" style="flex:1;font:inherit;background:#0e1c28;color:#dff;border:1px solid #2a4a5a;border-radius:3px;padding:2px 4px">
        <option value="drum_circle">Drum circle (forest entrance)</option>
        <option value="campsite_forest">Campsite forest (entrance)</option>
        <option value="any_forest">Any forest (entrance)</option>
        <option value="lurleen">Lurleen</option>
        <option value="lake">Lake</option>
        <option value="campsite">Campsite (any)</option>
        <option value="spawn">Spawn</option>
      </select>
      <button id="dbg-tp-go" style="font:inherit;padding:2px 10px;background:rgba(255,224,102,0.20);color:#ffe066;border:1px solid rgba(255,224,102,0.45);border-radius:3px;cursor:pointer">Go</button>
    </div>
    <div id="dbg-tp-status" style="margin-top:3px;font-size:10px;opacity:0.6;min-height:13px"></div>
  `,e.appendChild(o),document.body.appendChild(e);let c=s.querySelector(`#dbg-tp-select`),l=s.querySelector(`#dbg-tp-status`);s.querySelector(`#dbg-tp-go`).addEventListener(`click`,()=>{let e=jx(c.value);e?(Q.hooks.zerble.position.set(e.x,Q.hooks.zerble.position.y,e.z),Q.hooks.zerble.speed=0,typeof e.heading==`number`&&(Q.hooks.zerble.heading=e.heading),l.textContent=`→ ${e.label}`):l.textContent=`no nearby landmark of that type`});let u=a.querySelector(`#dbg-tod-slider`),d=a.querySelector(`#dbg-tod-readout`);Q.todSlider=u,Q.todReadout=d,u.addEventListener(`input`,()=>{let e=Q.hooks.getTimeOfDay&&Q.hooks.getTimeOfDay();e&&e.setT(parseFloat(u.value))});for(let e of a.querySelectorAll(`.dbg-tod-preset`))Object.assign(e.style,{flex:`1`,font:`inherit`,padding:`3px 4px`,cursor:`pointer`,background:`rgba(255,224,102,0.15)`,color:`inherit`,border:`1px solid rgba(255,224,102,0.4)`,borderRadius:`4px`}),e.addEventListener(`click`,()=>{let t=parseFloat(e.dataset.t),n=Q.hooks.getTimeOfDay&&Q.hooks.getTimeOfDay();n&&(n.setT(t),u.value=t)});let{wrapper:f,content:p}=Nx(`Audio`),m=nd.isReady()?nd.getMasterVolume():.55,h=nd.isReady()?nd.getMusicVolume():1.6,g=nd.isReady()?nd.getSfxVolume():1,_=nd.isReady()?nd.getMidiVolume():1;p.innerHTML=`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="width:48px;opacity:0.8">Master</span>
      <input id="dbg-vol-master" type="range" min="0" max="2" step="0.01" value="${m.toFixed(2)}"
        style="flex:1;accent-color:#ffe066;cursor:pointer" />
      <span id="dbg-vol-master-readout" style="width:32px;text-align:right">${m.toFixed(2)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="width:48px;opacity:0.8">Music</span>
      <input id="dbg-vol-music" type="range" min="0" max="2" step="0.01" value="${h.toFixed(2)}"
        style="flex:1;accent-color:#ffe066;cursor:pointer" />
      <span id="dbg-vol-music-readout" style="width:32px;text-align:right">${h.toFixed(2)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
      <span style="width:48px;opacity:0.8">MIDI</span>
      <input id="dbg-vol-midi" type="range" min="0" max="2" step="0.01" value="${_.toFixed(2)}"
        style="flex:1;accent-color:#ffe066;cursor:pointer" />
      <span id="dbg-vol-midi-readout" style="width:32px;text-align:right">${_.toFixed(2)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      <span style="width:48px;opacity:0.8">SFX</span>
      <input id="dbg-vol-sfx" type="range" min="0" max="2" step="0.01" value="${g.toFixed(2)}"
        style="flex:1;accent-color:#ffe066;cursor:pointer" />
      <span id="dbg-vol-sfx-readout" style="width:32px;text-align:right">${g.toFixed(2)}</span>
    </div>
  `,e.appendChild(f),p.querySelector(`#dbg-vol-master`).addEventListener(`input`,e=>{let t=parseFloat(e.target.value);nd.setMasterVolume(t),p.querySelector(`#dbg-vol-master-readout`).textContent=t.toFixed(2)}),p.querySelector(`#dbg-vol-music`).addEventListener(`input`,e=>{let t=parseFloat(e.target.value);nd.setMusicVolume(t),p.querySelector(`#dbg-vol-music-readout`).textContent=t.toFixed(2)}),p.querySelector(`#dbg-vol-midi`).addEventListener(`input`,e=>{let t=parseFloat(e.target.value);nd.setMidiVolume(t),p.querySelector(`#dbg-vol-midi-readout`).textContent=t.toFixed(2)}),p.querySelector(`#dbg-vol-sfx`).addEventListener(`input`,e=>{let t=parseFloat(e.target.value);nd.setSfxVolume(t),p.querySelector(`#dbg-vol-sfx-readout`).textContent=t.toFixed(2)});let{wrapper:v,content:y}=Nx(`Render`);y.innerHTML=`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
      <span style="opacity:0.8;min-width:40px">Level</span>
      <select id="dbg-aq-level" style="flex:1;font:inherit;background:#0e1c28;color:#dff;border:1px solid #2a4a5a;border-radius:3px;padding:2px 4px">
        <option value="auto">auto</option>
        ${hx().map((e,t)=>`<option value="${t}">${e}</option>`).join(``)}
      </select>
    </div>
    <label id="dbg-aq-bloom-label" style="display:flex;align-items:center;gap:6px;cursor:pointer;margin-bottom:3px">
      <input id="dbg-aq-bloom" type="checkbox" style="cursor:pointer">
      <span>Bloom</span>
    </label>
    <label id="dbg-aq-shadows-label" style="display:flex;align-items:center;gap:6px;cursor:pointer;margin-bottom:3px">
      <input id="dbg-aq-shadows" type="checkbox" style="cursor:pointer">
      <span>Shadows</span>
    </label>
    <label id="dbg-aq-bubbles-label" style="display:flex;align-items:center;gap:6px;cursor:pointer;margin-bottom:5px">
      <input id="dbg-aq-bubbles-cheap" type="checkbox" style="cursor:pointer">
      <span>Cheap bubbles</span>
    </label>
    <div style="display:flex;align-items:center;gap:6px">
      <span style="opacity:0.8;min-width:40px">Pixel ratio</span>
      <select id="dbg-aq-pr" style="flex:1;font:inherit;background:#0e1c28;color:#dff;border:1px solid #2a4a5a;border-radius:3px;padding:2px 4px">
        ${[[`auto`,`auto`],[`2`,`2×`],[`1.5`,`1.5×`],[`1`,`1×`],[`0.875`,`0.875×`],[`0.75`,`0.75×`],[`0.5`,`0.5×`]].map(([e,t])=>`<option value="${e}">${t}</option>`).join(``)}
      </select>
    </div>
    <div style="opacity:0.55;font-size:10px;margin-top:4px" id="dbg-aq-hint">
      Pick a level to lock and enable overrides.
    </div>
  `,e.appendChild(v);let b=y.querySelector(`#dbg-aq-level`),x=y.querySelector(`#dbg-aq-bloom`),S=y.querySelector(`#dbg-aq-shadows`),C=y.querySelector(`#dbg-aq-bubbles-cheap`),w=y.querySelector(`#dbg-aq-pr`),T=y.querySelector(`#dbg-aq-hint`),E=y.querySelector(`#dbg-aq-bloom-label`),D=y.querySelector(`#dbg-aq-shadows-label`),O=y.querySelector(`#dbg-aq-bubbles-label`);function k(){x.checked=yx(),S.checked=bx(),C.checked=Q.hooks.bubbles?.mesh?.material!==Q.hooks.bubbles?._fancyMat}function A(e){let t=e?`1`:`0.45`,n=e?`pointer`:`not-allowed`;for(let e of[E,D,O])e.style.opacity=t,e.style.cursor=n;x.disabled=!e,S.disabled=!e,C.disabled=!e,w.disabled=!e,w.style.opacity=t,T.textContent=e?`Adaptive quality paused. Overrides active.`:`Pick a level to lock and enable overrides.`}b.value=`auto`,k(),A(!1),b.addEventListener(`change`,()=>{let e=b.value;e===`auto`?(ux(!0),A(!1)):(ux(!1),_x(parseInt(e,10)),k(),A(!0))}),x.addEventListener(`change`,()=>{let e=Q.hooks.bloomPass??null;e&&(e.enabled=x.checked)}),S.addEventListener(`change`,()=>{vx(S.checked)}),C.addEventListener(`change`,()=>{Q.hooks.bubbles?.setCheapMaterial?.(C.checked)}),w.addEventListener(`change`,()=>{let e=w.value;e!==`auto`&&xx(parseFloat(e))});let{wrapper:j,content:M}=Nx(`Lights`,!1),N=!1,ee=!1;try{N=localStorage.getItem(`zerble.contextLights`)===`1`,ee=localStorage.getItem(`zerble.fancyLights`)===`1`}catch{}M.innerHTML=`
    <label style="display:flex;align-items:center;gap:6px;cursor:pointer;margin-bottom:3px">
      <input id="dbg-context-lights" type="checkbox" ${N?`checked`:``} style="cursor:pointer">
      <span style="flex:1">Context lights <span style="opacity:0.55">(firepits, Sugar Shack)</span></span>
    </label>
    <label style="display:flex;align-items:center;gap:6px;cursor:pointer">
      <input id="dbg-fancy-lights" type="checkbox" ${ee?`checked`:``} style="cursor:pointer">
      <span style="flex:1">Fancy lights <span style="opacity:0.55">(per-torch, per-bulb)</span></span>
    </label>
    <div style="opacity:0.55;font-size:10px;margin-top:3px">Reload to apply. Heavier on the GPU.</div>
  `,e.appendChild(j);function te(e,t,n){M.querySelector(e).addEventListener(`change`,e=>{let r=e.target.checked;try{localStorage.setItem(t,r?`1`:`0`)}catch{}confirm(`${n} ${r?`ON`:`OFF`}. Reload now to apply?`)&&location.reload()})}te(`#dbg-context-lights`,`zerble.contextLights`,`Context lights`),te(`#dbg-fancy-lights`,`zerble.fancyLights`,`Fancy lights`),Q.panelEl=e}function Fx(){window.addEventListener(`keydown`,e=>{e.code===`Backquote`&&(e.preventDefault(),window.__debug.toggle()),e.code===`KeyT`&&!e.target.matches(`input, textarea, select`)&&(e.preventDefault(),Ix()),Q.visible&&(e.code===`KeyP`&&window.__debug.pause(!Q.paused),e.code===`Period`&&Q.paused&&window.__debug.step(1),e.code===`KeyC`&&window.__debug.showColliders(!Q.showColliders),e.code===`KeyG`&&window.__debug.god(!Q.god),e.code===`KeyF`&&window.__debug.freezeNPCs(!Q.freezeNPCs))})}function Ix(){Q.tripVisible=!Q.tripVisible,Q.tripPanelEl&&(Q.tripPanelEl.style.display=Q.tripVisible?`block`:`none`),Q.tripVisible&&Gx(),Qb.tripMenuToggle(Q.tripVisible)}function Lx(e){let t=performance.now();for(Q.rafSamples.push(t);Q.rafSamples.length&&Q.rafSamples[0]<t-1e3;)Q.rafSamples.shift()}function Rx(e){let t=Q.hooks,n=t.zerble,r=Math.floor(n.position.x/80),i=Math.floor(n.position.z/80),a=Q.rafSamples.length,o=t.crowd.npcs.length,s=t.crowd.npcs.filter(e=>e.state===`riding`).length,c=t.crowd.npcs.filter(e=>e.state===`watching`).length,l=t.crowd.npcs.filter(e=>e.state===`fleeing`).length,u=t.registry.entries.size,d=[...t.registry.colliders()].length,f=t.getRunning(),p=t.getTimeOfDay&&t.getTimeOfDay(),m=p?`t=${p.t.toFixed(2)} night=${p.nightness.toFixed(2)}`:`n/a`,h=t.renderer,g=h&&h.info,_=g?g.render.calls:`-`,v=g?g.render.triangles:`-`,y=g?g.memory.geometries:`-`,b=g?g.memory.textures:`-`,x=typeof performance<`u`&&performance.memory?`  heap ${(performance.memory.usedJSHeapSize/1048576).toFixed(0)}MB`:``,S=Sx[rl.name]||null,C=S?Cx(_,S.draws):String(_),w=S?Cx(v,S.tris):typeof v==`number`?v.toLocaleString():String(v),T=`0x`+Nu().toString(16).padStart(8,`0`),E=typeof window<`u`&&window.__seedInput?`${window.__seedInput} (${T})`:T,D=gx(),O=D.avg>0?`avg=${D.avg.toFixed(1)}  p95=${D.p95.toFixed(1)}  max=${D.max.toFixed(1)}ms`:`warming up…`,k=fg,A=k.count>0?`${k.count} gen  slow=${k.slowCount}  worst=${k.slowest.toFixed(1)}  last=${k.lastMs.toFixed(1)}  avg=${k.avgMs.toFixed(1)}ms`:`none yet`;if(Q.textEl.textContent=`~ debug (P pause · . step · C colliders · G god · F freeze)\nfps          ${a}    ${Q.paused?`[PAUSED]`:``}\nframe        ${O}\nquality      ${mx()}\ndraws        ${C}\ntris         ${w}\ngpu mem      geo ${y}  tex ${b}${x}\nchunks       ${A}\nrunning      ${f}\nseed         ${E}\npos          ${n.position.x.toFixed(1)}, ${n.position.z.toFixed(1)}\nheading      ${(n.heading*180/Math.PI).toFixed(0)}°  speed ${n.speed.toFixed(2)}\nchunk        (${r}, ${i})\nnpcs         ${o}  riding ${s}  watch ${c}  flee ${l}\nregistry     ${u}  colliders ${d}\ntime of day  ${m}\nflags        god=${Q.god} freezeNPCs=${Q.freezeNPCs} colliderViz=${Q.showColliders}`,p&&Q.todSlider&&document.activeElement!==Q.todSlider&&(Q.todSlider.value=String(p.t),Q.todReadout&&(Q.todReadout.textContent=m)),Q.panelEl){let e=Q.panelEl.querySelector(`#dbg-aq-level`);if(e&&e.value===`auto`){let e=Q.panelEl.querySelector(`#dbg-aq-bloom`),n=Q.panelEl.querySelector(`#dbg-aq-shadows`),r=Q.panelEl.querySelector(`#dbg-aq-bubbles-cheap`);e&&(e.checked=yx()),n&&(n.checked=bx()),r&&(r.checked=t.bubbles?.mesh?.material!==t.bubbles?._fancyMat)}}}var zx=null;function Bx(){let e=Q.hooks;for(zx||(zx=new G,zx.name=Ex,e.scene.add(zx));zx.children.length;){let e=zx.children.pop();e.geometry?.dispose?.(),e.material?.dispose?.()}let t=[...e.registry.colliders(),...e.puppets.colliders,...e.band.colliders,...e.kids.colliders,...e.wooks.colliders];for(let e of t)Hx(zx,e.position.x,e.position.z,e.radius,16742246);for(let t of e.crowd.npcs){if(t.state===`riding`)continue;let n=t.pos.x-e.zerble.position.x,r=t.pos.z-e.zerble.position.z;n*n+r*r>900||Hx(zx,t.pos.x,t.pos.z,.45,6737032)}Hx(zx,e.zerble.position.x,e.zerble.position.z,e.zerble.radius,16769126)}function Vx(){if(zx){for(Q.hooks.scene.remove(zx);zx.children.length;){let e=zx.children.pop();e.geometry?.dispose?.(),e.material?.dispose?.()}zx=null}}function Hx(e,t,n,r,i){let a=new H(new nc(Math.max(.05,r-.04),r,24),new mn({color:i,transparent:!0,opacity:.85,side:2,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(t,.05,n),e.add(a)}function Ux(){let e=Q.hooks.Trip;if(!e)return;let t=document.createElement(`div`);t.id=Tx,Object.assign(t.style,{position:`fixed`,bottom:`8px`,left:`8px`,zIndex:`999`,font:`11px/1.4 ui-monospace, Menlo, monospace`,color:`#dff`,background:`rgba(8, 18, 28, 0.88)`,padding:`8px 10px`,borderRadius:`6px`,border:`1px solid #2a4a5a`,maxWidth:`340px`,pointerEvents:`auto`,display:`none`,userSelect:`none`});let n=document.createElement(`div`);n.textContent=`T  Trip (psychedelic)`,n.style.cssText=`opacity:0.7;margin-bottom:6px;`,t.appendChild(n);let r=document.createElement(`pre`);r.style.cssText=`margin:0 0 6px;white-space:pre;`,r.textContent=`state: idle | env: 0.00 | wook: — m`,t.appendChild(r),Q.tripStateEl=r;let i=()=>{let e=document.createElement(`div`);return e.style.cssText=`border-top:1px solid #2a4a5a;margin:6px 0;`,e};t.appendChild(i());let a=document.createElement(`div`);a.style.cssText=`display:flex;gap:4px;margin-bottom:6px;`;for(let[t,n]of[[`Microdose`,`microdose`],[`Standard`,`standard`],[`Full trip`,`full`]]){let r=document.createElement(`button`);r.textContent=t,Object.assign(r.style,{flex:`1`,font:`inherit`,padding:`3px 4px`,cursor:`pointer`,background:`rgba(255,224,102,0.15)`,color:`inherit`,border:`1px solid rgba(255,224,102,0.4)`,borderRadius:`4px`}),r.addEventListener(`click`,()=>{e.setPreset(n),f()}),a.appendChild(r)}t.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`display:flex;gap:4px;margin-bottom:6px;`;let s=document.createElement(`button`);s.textContent=`FIRE TRIP`,Object.assign(s.style,{flex:`1`,font:`inherit`,padding:`4px 6px`,cursor:`pointer`,background:`rgba(255,100,100,0.25)`,color:`#fdd`,border:`1px solid rgba(255,100,100,0.5)`,borderRadius:`4px`}),s.addEventListener(`click`,()=>e.trigger()),o.appendChild(s);let c=document.createElement(`button`);c.textContent=`DYNAMIC TRIP`,Object.assign(c.style,{flex:`1`,font:`inherit`,padding:`4px 6px`,cursor:`pointer`,background:`rgba(200,100,255,0.25)`,color:`#fdf`,border:`1px solid rgba(200,100,255,0.5)`,borderRadius:`4px`}),c.title=`Scripted per-effect timelines — this is what the wook does`,c.addEventListener(`click`,()=>e.triggerDynamic()),o.appendChild(c),t.appendChild(o);let l=document.createElement(`button`);l.textContent=`COME DOWN`,Object.assign(l.style,{width:`100%`,font:`inherit`,padding:`4px 6px`,background:`rgba(80,180,180,0.18)`,color:`#bdf`,border:`1px solid rgba(80,180,180,0.4)`,borderRadius:`4px`,marginBottom:`6px`}),l.addEventListener(`click`,()=>e.comeDown()),t.appendChild(l),Q.tripComeDownBtn=l,t.appendChild(i());let u=document.createElement(`div`);u.textContent=`Timing`,u.style.cssText=`opacity:0.7;margin-bottom:4px;`,t.appendChild(u);for(let n of[{key:`duration`,label:`Duration (s)`,min:5,max:300,step:1},{key:`fadeIn`,label:`Fade in (s)`,min:0,max:5,step:.1},{key:`fadeOut`,label:`Fade out (s)`,min:0,max:10,step:.1},{key:`proximityThreshold`,label:`Proximity (m)`,min:1,max:10,step:.1},{key:`restDuration`,label:`Rest needed (s)`,min:1,max:15,step:.5}])t.appendChild(Wx(n.label,n.key,n.min,n.max,n.step,e,`timing`));t.appendChild(i());let d=document.createElement(`div`);d.textContent=`Effects`,d.style.cssText=`opacity:0.7;margin-bottom:4px;`,t.appendChild(d);for(let n of[{key:`hueShift`,label:`Hue shift`},{key:`saturation`,label:`Saturation`},{key:`uvRipple`,label:`UV ripple`},{key:`chromaticAberration`,label:`Chromatic aber.`},{key:`lensDistortion`,label:`Lens distortion`},{key:`posterize`,label:`Posterize`},{key:`vignettePulse`,label:`Vignette pulse`},{key:`brightnessPulse`,label:`Brightness pulse`}])t.appendChild(Wx(n.label,n.key,0,1,.01,e,`effect`));document.body.appendChild(t),Q.tripPanelEl=t;function f(){for(let[t,n]of Object.entries(Q.tripSliders))t in e.config&&(n.input.value=e.config[t],n.readout.textContent=e.config[t].toFixed(2))}}function Wx(e,t,n,r,i,a,o){let s=document.createElement(`div`);s.style.cssText=`display:flex;align-items:center;gap:6px;margin-bottom:3px;`;let c=document.createElement(`span`);c.textContent=e,c.style.cssText=`flex:0 0 120px;opacity:0.85;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`,s.appendChild(c);let l=o===`effect`?a.config:a,u=l[t]===void 0?0:l[t],d=document.createElement(`input`);d.type=`range`,d.min=n,d.max=r,d.step=i,d.value=u,d.style.cssText=`flex:1;accent-color:#ffe066;cursor:pointer;`,s.appendChild(d);let f=document.createElement(`span`);return f.textContent=Number(u).toFixed(i<.1?2:1),f.style.cssText=`width:48px;text-align:right;`,s.appendChild(f),d.addEventListener(`input`,()=>{let e=parseFloat(d.value);l[t]=e,f.textContent=e.toFixed(i<.1?2:1)}),Q.tripSliders[t]={input:d,readout:f},s}function Gx(){let e=Q.hooks&&Q.hooks.Trip;if(!e||!Q.tripStateEl)return;let t=e._nearestWookDist,n=t!==void 0&&t<1/0?t.toFixed(1)+`m`:`—`,r=e.dynamic?`DYNAMIC`:`static `;Q.tripStateEl.textContent=`state: ${e.state.padEnd(11)} env: ${e._envelope.toFixed(2)}  ${r}\nwook: ${n}  prox-timer: ${e._proximityTimer.toFixed(1)}s`;let i=Q.tripComeDownBtn;if(i){let t=e.state===`fading_in`||e.state===`sustaining`;i.disabled=!t,i.style.cursor=t?`pointer`:`not-allowed`,i.style.opacity=t?`1`:`0.4`}if(e.dynamic&&e.isActive()&&e.live){for(let[t,n]of Object.entries(Q.tripSliders))if(t in e.live){let r=e.live[t];n.input.value=r,n.readout.textContent=r.toFixed(2)}}}function Kx(e){let t=document.getElementById(`toast`);t&&(t.textContent=e,t.classList.remove(`hidden`),t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),900))}var qx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Jx=`
  uniform sampler2D tDiffuse;
  uniform float time;
  uniform float intensity;

  // Per-effect intensities (0..1)
  uniform float hueShift;
  uniform float saturation;
  uniform float uvRipple;
  uniform float chromaticAberration;
  uniform float lensDistortion;
  uniform float posterize;
  uniform float vignettePulse;
  uniform float brightnessPulse;

  varying vec2 vUv;

  // ---------- HSV helpers ----------
  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = vUv;

    // ---- 1. Lens distortion (barrel, breathing) ----
    float ldStr = lensDistortion * intensity;
    if (ldStr > 0.0) {
      vec2 centered = uv - 0.5;
      float dist2 = dot(centered, centered);
      float breathe = 1.0 + sin(time * 0.5) * 0.08 * ldStr;
      uv = uv + centered * dist2 * ldStr * 0.6 * breathe;
    }

    // ---- 2. UV ripple ----
    float ripStr = uvRipple * intensity;
    if (ripStr > 0.0) {
      uv += sin(uv * 10.0 + time * 1.5) * ripStr * 0.02;
    }

    // ---- 3. Chromatic aberration ----
    float caStr = chromaticAberration * intensity;
    vec3 col;
    if (caStr > 0.001) {
      vec2 dir = normalize(uv - 0.5);
      float offset = caStr * 0.005;
      float r = texture2D(tDiffuse, clamp(uv + dir * offset,       0.0, 1.0)).r;
      float g = texture2D(tDiffuse, clamp(uv,                      0.0, 1.0)).g;
      float b = texture2D(tDiffuse, clamp(uv - dir * offset,       0.0, 1.0)).b;
      col = vec3(r, g, b);
    } else {
      col = texture2D(tDiffuse, clamp(uv, 0.0, 1.0)).rgb;
    }

    // ---- 4. Hue shift ----
    float hsStr = hueShift * intensity;
    if (hsStr > 0.0) {
      vec3 hsv = rgb2hsv(col);
      hsv.x = fract(hsv.x + hsStr * 0.5 + 0.15 * sin(time * 0.3));
      col = hsv2rgb(hsv);
    }

    // ---- 5. Saturation boost ----
    float satStr = saturation * intensity;
    if (satStr > 0.0) {
      vec3 hsv = rgb2hsv(col);
      hsv.y = clamp(hsv.y * (1.0 + satStr), 0.0, 1.0);
      col = hsv2rgb(hsv);
    }

    // ---- 6. Posterize ----
    float postStr = posterize * intensity;
    if (postStr > 0.001) {
      float levels = mix(256.0, 5.0, postStr);
      col = floor(col * levels) / levels;
    }

    // ---- 7. Brightness pulse ----
    float bpStr = brightnessPulse * intensity;
    if (bpStr > 0.0) {
      col *= 1.0 + bpStr * 0.3 * sin(time * 1.2);
    }

    // ---- 8. Vignette pulse ----
    float vpStr = vignettePulse * intensity;
    if (vpStr > 0.0) {
      vec2 vigUv = vUv - 0.5;
      float vd = dot(vigUv, vigUv);
      float pulse = 1.0 + vpStr * 0.4 * sin(time * 0.4);
      float vignette = 1.0 - smoothstep(0.3, 0.75, vd * pulse * 2.0);
      col *= mix(1.0, vignette, vpStr);
    }

    gl_FragColor = vec4(col, 1.0);
  }
`,Yx=[`hueShift`,`saturation`,`uvRipple`,`chromaticAberration`,`lensDistortion`,`posterize`,`vignettePulse`,`brightnessPulse`],Xx={pass:null,config:{hueShift:.5,saturation:.4,uvRipple:.5,chromaticAberration:.4,lensDistortion:.4,posterize:0,vignettePulse:.3,brightnessPulse:.3},duration:180,fadeIn:10,fadeOut:3,cooldown:5,proximityThreshold:2.5,restSpeed:.5,restDuration:5,dynamic:!1,onOffer:null,onAccept:null,onDecline:null,onNarrate:null,state:`idle`,_confirmTimer:0,_confirmTimeout:8,_narrateTimes:null,_narrateIdx:0,_phaseTimer:0,_proximityTimer:0,_envelope:0,_fadeOutFrom:1,_tripElapsed:0,_timeAccum:0,_nearestWookDist:1/0,live:{hueShift:0,saturation:0,uvRipple:0,chromaticAberration:0,lensDistortion:0,posterize:0,vignettePulse:0,brightnessPulse:0},init(){let e={tDiffuse:{value:null},time:{value:0},intensity:{value:0}};for(let t of Yx)e[t]={value:0};this.pass=new fl({uniforms:e,vertexShader:qx,fragmentShader:Jx}),this.pass.renderToScreen=!1,this.setPreset(`standard`)},acceptOffer(){this.state===`awaiting_confirm`&&(this.dynamic=!0,this._enterFadingIn(),Qb.tripStart(`wook_accept`),typeof this.onAccept==`function`&&this.onAccept())},declineOffer(e=`unknown`){this.state===`awaiting_confirm`&&(this.state=`cooldown`,this._phaseTimer=0,this._proximityTimer=0,this._confirmTimer=0,typeof this.onDecline==`function`&&this.onDecline(e))},trigger(){this.dynamic=!1,this._enterFadingIn(),Qb.tripStart(`manual_static`)},triggerDynamic(){this.dynamic=!0,this._enterFadingIn(),Qb.tripStart(`manual_dynamic`)},_enterFadingIn(){this._phaseTimer=0,this._proximityTimer=0,this._tripElapsed=0,this.state=`fading_in`;let e=this.fadeIn+this.duration+this.fadeOut,t=Math.max(this.fadeIn+4,12),n=e-this.fadeOut-8,r=Math.max(10,n-t),i=[];for(let e=0;e<5;e++){let n=t+e/5*r,a=t+(e+1)/5*r;i.push(n+Math.random()*(a-n))}this._narrateTimes=i,this._narrateIdx=0},comeDown(){(this.state===`fading_in`||this.state===`sustaining`)&&(this._fadeOutFrom=this._envelope,this.state=`fading_out`,this._phaseTimer=0)},isActive(){return this.state===`fading_in`||this.state===`sustaining`||this.state===`fading_out`},progress(){if(!this.isActive())return 0;let e=this.fadeIn+this.duration+this.fadeOut;return Math.max(0,Math.min(1,this._tripElapsed/e))},setPreset(e){let t={microdose:{hueShift:.4,saturation:.4,uvRipple:0,chromaticAberration:0,lensDistortion:0,posterize:0,vignettePulse:.3,brightnessPulse:.2},standard:{hueShift:.5,saturation:.4,uvRipple:.5,chromaticAberration:.4,lensDistortion:.4,posterize:0,vignettePulse:.3,brightnessPulse:.3},full:{hueShift:.6,saturation:.6,uvRipple:.6,chromaticAberration:.6,lensDistortion:.6,posterize:.4,vignettePulse:.6,brightnessPulse:.6}},n=t[e]||t.standard;Object.assign(this.config,n),this.dynamic||this._pushConfigToUniforms()},_pushConfigToUniforms(){if(!this.pass)return;let e=this.pass.uniforms;for(let t of Yx)e[t]!==void 0&&(e[t].value=this.config[t],this.live[t]=this.config[t])},_smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},_easeInOutCubic(e){return e<=0?0:e>=1?1:e<.5?4*e*e*e:1-(-2*e+2)**3/2},_clamp01(e){return e<0?0:e>1?1:e},_writeDynamicCurves(e){let t=this.live;if(t.hueShift=.5-.5*Math.cos(e*Math.PI*2*2),t.saturation=.5-.5*Math.cos(e*Math.PI*2*5),t.uvRipple=e<1/3?this._easeInOutCubic(e*3):this._easeInOutCubic((1-e)*1.5),e<.25)t.chromaticAberration=this._easeInOutCubic(e*4)*.25;else if(e>.75)t.chromaticAberration=this._easeInOutCubic((1-e)*4)*.25;else{let n=(e-.25)/.5;t.chromaticAberration=.25+.75*(.5-.5*Math.cos(n*Math.PI*2*4))}t.lensDistortion=this._clamp01(.5+.3*Math.sin(e*Math.PI*2*1.2+.3)+.2*Math.sin(e*Math.PI*2*2.9+.39)),t.vignettePulse=this._clamp01(.5+.3*Math.sin(e*Math.PI*2*1.5+1.1)+.2*Math.sin(e*Math.PI*2*3.2+1.43)),t.brightnessPulse=this._clamp01(.5+.3*Math.sin(e*Math.PI*2*1.7+2.4)+.2*Math.sin(e*Math.PI*2*2.5+3.12));let n=.1+.15*(.5+.5*Math.sin(e*Math.PI*2*3)),r=.85*Math.exp(-(((e-1/3)/.03)**2));t.posterize=Math.min(.9,n+r);let i=this.pass.uniforms;for(let e of Yx)i[e]!==void 0&&(i[e].value=t[e])},update(e,t,n,r){if(!this.pass)return;if(this._timeAccum+=e,this.pass.uniforms.time.value=this._timeAccum,this.isActive()&&(this._tripElapsed+=e,this._narrateTimes&&this._narrateIdx<this._narrateTimes.length))for(;this._narrateIdx<this._narrateTimes.length&&this._tripElapsed>=this._narrateTimes[this._narrateIdx];)typeof this.onNarrate==`function`&&this.onNarrate(),this._narrateIdx++;let i=1/0;if(r&&r.length)for(let e of r){let n=e.x-t.x,r=e.z-t.z,a=Math.sqrt(n*n+r*r);a<i&&(i=a)}switch(this._nearestWookDist=i,this.state){case`idle`:n<this.restSpeed&&i<this.proximityThreshold?(this._proximityTimer+=e,this._proximityTimer>=this.restDuration&&(this.state=`awaiting_confirm`,this._confirmTimer=0,typeof this.onOffer==`function`&&this.onOffer())):this._proximityTimer=0,this._envelope=0;break;case`awaiting_confirm`:{this._confirmTimer+=e;let t=null;n>=this.restSpeed?t=`moved`:i>this.proximityThreshold*1.6?t=`wook_gone`:this._confirmTimer>=this._confirmTimeout&&(t=`timeout`),t&&this.declineOffer(t),this._envelope=0;break}case`fading_in`:this._phaseTimer+=e,this._envelope=this._smoothstep(0,this.fadeIn,this._phaseTimer),this._envelope>=1&&(this._envelope=1,this.state=`sustaining`,this._phaseTimer=0);break;case`sustaining`:this._envelope=1,this._phaseTimer+=e,this._phaseTimer>=this.duration&&(this._fadeOutFrom=1,this.state=`fading_out`,this._phaseTimer=0);break;case`fading_out`:{this._phaseTimer+=e;let t=this._smoothstep(0,this.fadeOut,this._phaseTimer);this._envelope=this._fadeOutFrom*(1-t),this._phaseTimer>=this.fadeOut&&(this._envelope=0,this.state=`cooldown`,this._phaseTimer=0);break}case`cooldown`:this._envelope=0,this._phaseTimer+=e,this._phaseTimer>=this.cooldown&&(this.state=`idle`,this._phaseTimer=0,this._proximityTimer=0,this._tripElapsed=0,this.dynamic=!1)}if(this.pass.uniforms.intensity.value=this._envelope,this.dynamic&&this.isActive()){let e=this.fadeIn+this.duration+this.fadeOut,t=Math.max(0,Math.min(1,this._tripElapsed/e));this._writeDynamicCurves(t)}else this._pushConfigToUniforms();this.pass.enabled=this._envelope>.001}};(function(){let e=new URLSearchParams(window.location.search).get(`seed`),t;if(e!==null&&e!==``){let n=Number(e);t=Number.isFinite(n)&&/^-?\d+$/.test(e)?Mu(n):Mu(e),window.__seedInput=e}else t=Mu(Math.random()*4294967295>>>0),window.__seedInput=null;window.__seed=t})();var Zx=document.getElementById(`game`),Qx=rl.name===`high`,$x=new go({canvas:Zx,antialias:Qx,powerPreference:`high-performance`});$x.setPixelRatio(Math.min(window.devicePixelRatio,rl.pixelRatioCap)),$x.setSize(window.innerWidth,window.innerHeight),$x.shadowMap.enabled=rl.shadows,$x.shadowMap.type=rl.shadowType===`soft`?2:0,$x.toneMapping=4,$x.toneMappingExposure=1.05,$x.outputColorSpace=x;var eS=new yo,tS=new nr(62,window.innerWidth/window.innerHeight,.5,1500),nS=new hl($x);nS.addPass(new gl(eS,tS));var rS=new vl(new L(window.innerWidth*.5,window.innerHeight*.5),rl.bloomStrength,rl.bloomRadius,rl.bloomThreshold);rl.bloom||(rS.enabled=!1),nS.addPass(rS),Xx.init(),nS.addPass(Xx.pass);var iS=null;if(!Qx){iS=new fl(xl);let e=$x.getPixelRatio();iS.material.uniforms.resolution.value.set(1/(window.innerWidth*e),1/(window.innerHeight*e)),nS.addPass(iS)}nS.addPass(new bl);var aS=[`🌿 the wook smiles and extends a hand... tap to accept`,`🌿 the wook offers you something. tap to take it`,`🌿 the wook is sharing the vibe. tap to receive`,`🌿 the wook nods knowingly. tap to partake`],oS={moved:`the wook watches you drive away`,wook_gone:`the wook wanders off`,timeout:`the wook shrugs and drifts back to the circle`},sS=[`the trees seem to be breathing`,`you can taste the bass`,`everything is connected, somehow`,`is the sky usually that color?`,`you forgot what you were doing`,`a wook is watching from the trees`,`the path is humming`,`your hands feel like ideas`,`the festival is alive`,`time is doing that thing again`,`you remember a song from before you were born`,`the bubbles know your name`,`the mountains are nodding along`];Xx.onOffer=()=>{let e=aS[Math.floor(Math.random()*aS.length)];wu.toast(e,9e3,{onTap:()=>{Xx.state===`awaiting_confirm`&&Xx.acceptOffer()}})},Xx.onAccept=()=>{wu.toast(`...`,1500)},Xx.onDecline=e=>{let t=oS[e]||`the moment passes`;wu.toast(t,2e3)},Xx.onNarrate=()=>{let e=sS[Math.floor(Math.random()*sS.length)];wu.toast(e,3200)};var $=new dv;$.position.set(0,0,65),$.heading=0,eS.add($.root);var cS=new yv;eS.add(cS.mesh);var lS=new Cv,uS=new kv;eS.add(uS.group);var dS=new ry(uS);eS.add(dS.group),L_(eS,dS);var fS=new Oy(eS),pS=!1,mS=new Tb;eS.add(mS.group);var hS=new Eb;eS.add(hS.group);var gS=new Db;eS.add(gS.group);var _S=new kb;eS.add(_S.group);var vS=Ib.create();eS.add(vS.group);var yS=new qb;eS.add(yS.group);var bS=new Yy(tS,$),xS=document.getElementById(`btn-cam`);if(xS){let e=e=>{e.preventDefault(),bS.toggleMode(),wu.toast(bS.modeLabel,1500)};xS.addEventListener(`click`,e),xS.addEventListener(`touchstart`,e,{passive:!1})}var SS=new H(new nc(.5,.55,48),new mn({color:16765578,transparent:!0,opacity:0,side:2,depthWrite:!1}));SS.rotation.x=-Math.PI/2,eS.add(SS);var CS=999,wS=0;wu.loadBest();var TS=!1;Hl.install(),lx({renderer:$x,scene:eS,composer:nS,bloomPass:rS,hud:wu,onLevelChange:(e,t)=>{cS.setCheapMaterial?.(t.bubbles===`cheap`)}}),[`gesturestart`,`gesturechange`,`gestureend`].forEach(e=>{document.addEventListener(e,e=>e.preventDefault(),{passive:!1})}),document.addEventListener(`dblclick`,e=>e.preventDefault(),{passive:!1}),wu.showTitle(),wu.onStart(()=>{wu.hideTitle(),TS=!0,Qb.gameStart(),nd.init(),document.body.classList.add(`game-started`);let e=document.getElementById(`touch-controls`);e&&e.setAttribute(`aria-hidden`,`false`),wu.toast(`Drive around — make people smile, dodge the parade.`,2800),new URLSearchParams(location.search).get(`sounddebug`)===`1`&&setTimeout(()=>{let e=nd.diagnostics(),t=e.restoredFromLocalStorage.master,n=`ctx ${e.live.ctxState} m${(e.live.masterGain??0).toFixed(2)} html ${e.htmlUnlockPlayResolved?`✓`:e.htmlUnlockPlayRejected?`✗`:`?`} buf ${e.webAudioBufferUnlocked?`✓`:`✗`} rate ${e.live.ctxSampleRate}`+(t?` LS:${t.raw}→${t.applied}`:``);wu.toast(n,9e3)},250)}),document.addEventListener(`visibilitychange`,()=>{document.hidden||nd.resume()}),window.addEventListener(`pageshow`,()=>nd.resume());function ES(){TS&&nd.resume()}window.addEventListener(`pointerdown`,ES),window.addEventListener(`touchstart`,ES,{passive:!0});var DS=new Hc,OS=new z;function kS(){let e=Math.min(DS.getDelta(),.05);Ox(e)&&AS(e),jS()}function AS(e){if(TS){let t=I_(),n=t?t.nightness:0;$.update(e,pu,n),nd.setEngineSpeed($.speed,+!!$.isBoosting),nd.setNightness(n),performance.now()*.001;let r=pu.consumePressed(`SPACE`),i=pu.consumePressed(`B`),a=pu.consumePressed(`H`);(r||i||a)&&$.canHonk()&&($.honk(),CS=0,dS.applyHonk($),Math.abs($.speed||0)<.5&&(gS.scatter($),_S.scatter($),mS.scatter($),hS.scatter($)),i?nd.playBicycleBell():a?nd.playClownHorn():nd.playHonk(),Qb.firstHonk()),pu.consumePressed(`V`)&&(bS.toggleMode(),wu.toast(bS.modeLabel+` (V to cycle)`,1500),Qb.viewToggle(bS.mode)),pu.consumePressed(`Y`)&&Xx.state===`awaiting_confirm`&&Xx.acceptOffer(),pu.consumePressed(`M`)&&lS.toggle(wu),lS.setTripState(Xx._envelope||0,Xx.progress()),nd.setMusicTrip(Xx._envelope||0,Xx.progress());let o=pu.isDown(`G`);cS.setBlast(o),$.setBubbleBlast(o),cS.update(e,$,n),Ax()||dS.update(e,$,cS),uS.update(e,$,e=>{wS+=e,wu.setSmiles(wS),wu.saveBest(wS),Qb.smileScore(wS),Qb.personalBest(wS)}),mS.update(e),hS.update(e),gS.update(e,cS,$,uS),_S.update(e,$.position,Math.abs($.speed)),vS.update(e,$.position,n),yS.update(e,$.position,n);let s=_S.wooks.map(e=>e.position);Xx.update(e,$.position,Math.abs($.speed),s),fS.update(e,$.position,$.heading),!pS&&fS.state===`aware`&&(pS=!0,wu.toast(`You found Lurleen! 💗`,3500),Qb.lurleenFound());let c=performance.now()*.001;ng(c),dg(c,n,$.position),fh(e);let l=$.position.x,u=$.position.z;function d(e,t){if(e==null)return!1;let n=e-l,r=t-u;return n*n+r*r>5625}for(let e=0;e<Sp.length;e++){let t=Sp[e];d(t.centerX,t.centerZ)||uf(c,n,t.animatables)}for(let e=0;e<Cf.length;e++){let t=Cf[e];d(t.centerX,t.centerZ)||uf(c,n,t.animatables)}for(let e=0;e<Cp.length;e++){let t=Cp[e],r=t.fireCenter;r&&d(r.x,r.z)||(ip(c,n,t.dc),t.figures&&t.figures.length>0&&gp(c,n,t.figures))}for(let e=0;e<wp.length;e++){let t=wp[e];if(!t.handle?.setLowpassCutoff)continue;let n=$.position.x-t.centerX,r=$.position.z-t.centerZ,i=Math.hypot(n,r),a=t.bodyRadius||100,o=Math.max(0,Math.min(1,(i-a)/250)),s=14e3*(1-o)+2500*o;t.handle.setLowpassCutoff(s)}if(V_($.position,e),$.invulnLeft<=0){let e=[];for(let t of dS.npcs){if(t.state===`riding`||t.state===`boarding`||t.state===`disembarking`)continue;let n=t.pos.x-$.position.x,r=t.pos.z-$.position.z;if(n*n+r*r>36)continue;let i=t.state===`fleeing`;e.push({position:{x:t.pos.x,y:.85,z:t.pos.z},radius:.45,damage:+!i,kind:`person`,npc:t})}let t=FS($,[...Y.colliders(),...mS.colliders,...hS.colliders,...gS.colliders,..._S.colliders,...vS.colliders,...yS.colliders,...e]);t&&t.damaging&&!kx()?(wS=Math.max(0,wS-t.damage),wu.setSmiles(wS),wu.flashHit(),wu.toast(IS(t.kind),1400),nd.playCollision(t.kind),Qb.collision(t.kind)):t&&t.notify&&(wu.toast(IS(t.kind),1400),nd.playSoftBump())}if(CS<1.2){CS+=e;let t=CS/1.2;SS.position.set($.position.x,.1,$.position.z);let n=1+t*14;SS.scale.set(n,n,n),SS.material.opacity=(1-t)*.65}else SS.material.opacity=0}bS.update(e,pu),tS.getWorldDirection(OS),nd.updateAudioListener(tS.position.x,tS.position.y,tS.position.z,OS.x,OS.y,OS.z),Pd($.position),dx(e),nS.render()}function jS(){document.hidden?setTimeout(kS,16):requestAnimationFrame(kS)}var MS=1.2,NS=new Set([`person`,`kid`,`wook`,`brass`,`hula_hoop`]),PS=[`You broke her flow, man!`,`Hoop dreams interrupted...`,`Easy! She's in the zone!`,`You crashed her hoop trance!`,`Bonked a hooper — bad karma!`,`That hoop was somebody's chakra!`];function FS(e,t){let n=-Math.sin(e.heading),r=-Math.cos(e.heading),i=n*e.speed,a=r*e.speed,o=Math.abs(e.speed)<MS;for(let n of t){if(n.passive||o&&NS.has(n.kind))continue;let t=n.position.x-e.position.x,r=n.position.z-e.position.z,s=Math.hypot(t,r),c=n.radius+e.radius;if(s>=c)continue;let l=1/(s||1e-4),u=(i*t+a*r)*l;if(u>MS){let i=new z(-t*l,0,-r*l);e.applyHit(i),n.kind===`person`&&n.npc&&dS.onZerbleHit(n.npc,t*l,r*l);let a=n.damage>0,o=!a&&n.kind===`lurleen`;return{damaging:a,damage:n.damage,kind:n.kind,notify:o}}let d=c-s;return e.position.x-=t*l*d,e.position.z-=r*l*d,u>0&&e.speed>0&&(e.speed=Math.max(0,e.speed-u*.6)),{damaging:!1}}return null}function IS(e){switch(e){case`puppet`:return`A giant puppet bonked you!`;case`brass`:return`You blocked the brass band. Sorry, tuba.`;case`truck`:return`Don't hit the food trucks!`;case`tent`:return`You knocked over a craft tent!`;case`kid`:return`Oof — watch the kids!`;case`wook`:return`You spooked a wook.`;case`person`:return`Watch where you're going!`;case`stage`:return`That's the stage. Drive around it!`;case`arch`:return`Mind the arch.`;case`lamppost`:return`Bonked a lamppost.`;case`drum_circle`:return`You crashed the drum circle!`;case`lake_edge`:return`Splash! Carts don't float.`;case`forest_tree`:return`Ow — that's a big tree!`;case`firepit`:return`Hot stone, ouch!`;case`hula_hoop`:return PS[Math.floor(Math.random()*PS.length)];case`bench_ring`:return`Easy on the benches!`;case`island`:return`Tiny island, busy day.`;case`lurleen`:return`Easy, lover — that's Lurleen.`;default:return`Ouch.`}}function LS(){let e=window.visualViewport,t=Math.round(e&&e.width||window.innerWidth),n=Math.round(e&&e.height||window.innerHeight);if($x.setSize(t,n),nS.setSize(t,n),tS.aspect=t/n,tS.updateProjectionMatrix(),rS.setSize(t*.5,n*.5),iS){let e=$x.getPixelRatio();iS.material.uniforms.resolution.value.set(1/(t*e),1/(n*e))}}window.addEventListener(`resize`,LS),window.addEventListener(`orientationchange`,()=>{setTimeout(LS,250)}),window.visualViewport&&window.visualViewport.addEventListener(`resize`,LS),window.__game={camera:tS,zerble:$,scene:eS,renderer:$x,crowd:dS,registry:Y,chaseCam:bS,lurleen:fS,getTimeOfDay:I_,Trip:Xx,sound:nd},Dx({scene:eS,camera:tS,renderer:$x,bloomPass:rS,zerble:$,crowd:dS,bubbles:cS,smiles:uS,registry:Y,puppets:mS,band:hS,kids:gS,wooks:_S,hoopers:vS,frisbees:yS,lurleen:fS,getRunning:()=>TS,getTimeOfDay:I_,Trip:Xx}),kS();