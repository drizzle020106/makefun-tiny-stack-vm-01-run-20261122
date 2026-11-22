// T: opcode byte -> charCode-35 = imm*16+pops*4+pushes (80 = invalid). Faithful port of the kit's reference VM.
import{mkdirSync as A,readdirSync as B,readFileSync as C,writeFileSync as D}from'node:fs';
import{join as J}from'node:path';
const T="#4d')-.2ssssssss,,,,,,,(,,,(,,,s,,,sssssssssssssCGGC#sssssssssss(+ssssssssssssss''$'";
function R(p,q){
let D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),o=new Uint8Array(65536),l=0,i=0,x=0,n=0;
const E=e=>({o:o.slice(0,l),c:e});
for(;;){
if(n==1e6)return E(10);
if(x<0||x>=p.length)return E(9);
let t=T.charCodeAt(p[x])-35;
if(!(t<80))return E(5);
let m=t>>4,u=(t>>2)&3,v=t&3;
if(x+m>=p.length)return E(9);
n++;
let y=x+1+m,k=p[x];
if(s<u)return E(2);
if(s-u+v>256)return E(3);
x=y;
let a,b;
switch(k){
case 0:return E(0);
case 1:D[s++]=(p[y-1]<<24)>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:b=D[s-1];D[s-1]=D[s-2];D[s-2]=b;break;
case 6:D[s]=D[s-2];s++;break;
case 7:a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:
b=D[s-1];a=D[s-2];
if(k>18&&k<23&&!b)return E(4);
s--;
D[s-1]=k==16?a+b:k==17?a-b:k==18?Math.imul(a,b):k==19?a/b:k==20?b==-1?0:a%b:k==21?((a>>>0)/(b>>>0))|0:k==22?(a>>>0)%(b>>>0):k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<(b&31):k==29?a>>(b&31):k==30?a>>>(b&31):k==32?a==b?1:0:k==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
break;
case 48:case 49:case 50:
a=k>48?D[--s]:0;
if(k==48||(k==49)==(a==0))x=y+(((p[y-2]|p[y-1]<<8)<<16)>>16);
break;
case 51:if(c==64)return E(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(!c)return E(8);x=C[--c];break;
case 64:a=D[s-1];if(a<0||a>255)return E(6);D[s-1]=M[a];break;
case 65:a=D[s-1];b=D[s-2];if(a<0||a>255)return E(6);s-=2;M[a]=b;break;
case 80:{a=''+D[s-1];if(l+a.length>65536)return E(11);s--;o.set(Buffer.from(a),l);l+=a.length;break;}
case 81:if(l>65535)return E(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return E(D[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of B(I).sort()){const r=R(C(J(I,d,'program.bin')),C(J(I,d,'input.bin')));A(J(O,d),{recursive:true});D(J(O,d,'stdout.bin'),r.o);D(J(O,d,'exit.txt'),r.c+'\n');}
