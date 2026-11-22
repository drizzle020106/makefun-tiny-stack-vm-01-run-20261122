import{mkdirSync as A,readdirSync as B,readFileSync as C,writeFileSync as D}from'fs';
import{join as J}from'path';
const T="#4d')-.2ssssssss,,,,,,,(,,,(,,,s,,,sssssssssssssCGGC#sssssssssss(+ssssssssssssss''$'";
function R(p,q){
let s=0,c=0,l=0,i=0,x=0,n=0,D=new Int32Array(256),C=[],M=[],o=new Uint8Array(65536);
try{for(;;){
if(n==1e6)throw 10;
if(x<0|x>=p.length)throw 9;
let t=T.charCodeAt(p[x])-35;
if(!(t<80))throw 5;
let m=t>>4,u=t>>2&3,v=t&3;
if(x+m>=p.length)throw 9;
n++;
let y=x+1+m,k=p[x];
if(s<u)throw 2;
if(s-u+v>256)throw 3;
x=y;
let a,b;
switch(k){
case 0:throw 0;
case 1:D[s++]=p[y-1]<<24>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1],s++;break;
case 5:b=D[s-1],D[s-1]=D[s-2],D[s-2]=b;break;
case 6:D[s]=D[s-2],s++;break;
case 7:a=D[s-3],D[s-3]=D[s-2],D[s-2]=D[s-1],D[s-1]=a;break;
case 48:case 49:case 50:
a=k>48?D[--s]:0;
if(k==48|(k-49)==(a!=0))x=y+((p[y-2]|p[y-1]<<8)<<16>>16);
break;
case 51:if(c==64)throw 7;C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(!c)throw 8;x=C[--c];break;
case 64:if((a=D[s-1])<0|a>255)throw 6;D[s-1]=M[a];break;
case 65:b=D[s-2];if((a=D[s-1])<0|a>255)throw 6;s-=2;M[a]=b;break;
case 80:a=''+D[s-1];if(l+a.length>65536)throw 11;s--;o.set(Buffer.from(a),l);l+=a.length;break;
case 81:if(l>65535)throw 11;o[l++]=D[--s]&255;break;
case 82:D[s++]=q[i++]??-1;break;
case 83:throw D[--s]&255;
default:
b=D[s-1];a=D[s-2];
if(k>18&&k<23&&!b)throw 4;
s-=k==23|k==27?0:1;
D[s-1]=k==23?-D[s-1]:k==27?~D[s-1]:k==16?a+b:k==17?a-b:k==18?Math.imul(a,b):k==19?a/b:k==20?b==-1?0:a%b:k==21?(a>>>0)/(b>>>0):k==22?(a>>>0)%(b>>>0):k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<(b&31):k==29?a>>(b&31):k==30?a>>>(b&31):k==32?+(a==b):k==33?+(a<b):+(a>>>0<b>>>0);
}
}}catch(e){return{o:o.slice(0,l),c:e}}
}
const e=process.env,I=e.MAKEFUN_INPUT_DIR??'/input',O=e.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of B(I).sort()){const{o,c}=R(C(J(I,d,'program.bin')),C(J(I,d,'input.bin')));A(J(O,d),{recursive:true});D(J(O,d,'stdout.bin'),o);D(J(O,d,'exit.txt'),c+'\n');}
