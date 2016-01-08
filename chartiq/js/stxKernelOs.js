/* File generated on Wed Jan 06 2016 11:29:42 GMT-0500 (EST) */
/* Version 2015-12-08.1 */
/* Expires on 2016/02/06 */
/*
Copyright 2014-2015-2016 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2016/02/06";
	if (trialExpiration != "undefined") {
		var expiration = new Date(trialExpiration);
		var now = new Date();
		if (now.getTime() > expiration.getTime()) {
			alert("This license has expired!");
			console.log("This license has expired!");
		} else {
			var diffDays = (expiration.getTime() - now.getTime());
			diffDays = Math.round(Math.abs(diffDays/(1000*60*60*24)));
			if ( diffDays < 3) {
				alert("This license expires in " + diffDays + " days!");
				console.log("This license expires in " + diffDays + " days!");
			}
		}
	}
	var version=["Version 2015-12-08.1"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=[/*<domains>*/];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var v7K={'j3':function(V3,C3){return V3==C3;}
,'u04':function(W04,z04){return W04<z04;}
,'f11':function(g11,d11){return g11<=d11;}
,'G36':(function(){var D36={}
,W36=function(z36,B36){var R36=B36&((92.0E1,149)<=(8.2E2,10.)?1.618:(6.,0x1A2)>11?(0x1C4,0xffff):(3.9E2,77.));var j36=B36-R36;return ((j36*z36|((2.80E1,73.)<34?(98.,72.10E1):88>(0x4,1.103E3)?(1.284E3,"J"):(0xD4,17)<=0x202?(0xBC,0):(9.53E2,0x73)))+(R36*z36|((0x102,119)>=61.1E1?(4.5E1,12.61E2):0x1E3>=(29.3E1,0x1B5)?(129.,0):(41,46))))|((1.216E3,142.)<=(95.7E1,141.5E1)?(0x9F,0):(125,57));}
,x36=function(V36,C36,q36){if(D36[q36]!==undefined){return D36[q36];}
var Z36=(34.>(118.5E1,2.93E2)?(0x2A,"o"):0x239<(38.5E1,96.)?25:(0x170,104.)<(0x197,115)?(0x14B,0xcc9e2d51):(0x249,37.80E1)),i36=(0x176>=(0x228,2)?(75,0x1b873593):(137.9E1,0xA1));var P36=q36;var F36=C36&~((0x4D,0x117)<=126.?(14.,54.):0xEE<=(0x17D,9.46E2)?(0x47,0x3):(65.,12.));for(var H36=((113,91.)<58.30E1?(0xB3,0):(0x8,29.5E1));H36<F36;H36+=(38.6E1>(0xAA,1.074E3)?(0xEE,50.):(149.70E1,140)<(132,5.22E2)?(124.80E1,4):(0x2,0x18A))){var p36=(V36.charCodeAt(H36)&((141,0x10C)>(0x190,133.)?(49.,0xff):(2.90E1,128.)>=149.?(45.,0x106):(36.2E1,2.83E2)))|((V36.charCodeAt(H36+1)&0xff)<<8)|((V36.charCodeAt(H36+2)&((61.30E1,125.0E1)>(0xB9,100)?(0x1E2,0xff):(109.,145.)))<<((127.30E1,75.8E1)>=(0xE6,6.8E2)?(0xE9,16):(26,1.087E3)<=(13.51E2,65.)?49:0x35>=(113,138.3E1)?(53,0xF8):(0x200,0x3)))|((V36.charCodeAt(H36+3)&0xff)<<(13.3E1<(1.419E3,0x211)?(36.,24):(86,0x189)));p36=W36(p36,Z36);p36=((p36&0x1ffff)<<15)|(p36>>>17);p36=W36(p36,i36);P36^=p36;P36=((P36&0x7ffff)<<((6.0E1,0x220)>(0x69,0x126)?(92.,13):(0x23A,125.)))|(P36>>>(66.60E1<(8.9E2,86.7E1)?(141.,19):(0x2B,9.67E2)<=(0xFB,0x1C3)?84:(0x10D,59)));P36=(P36*5+0xe6546b64)|0;}
p36=((116.60E1,5.53E2)>=(124,0x46)?(0x233,0):(33,5.98E2));switch(C36%(16>=(112.,0x55)?(0x1C8,"l"):(0x186,39.6E1)<=37.?"X":149.<=(0x234,14.25E2)?(15.,4):(0x1F1,19.))){case 3:p36=(V36.charCodeAt(F36+2)&0xff)<<16;case ((79.0E1,0x2A)>=(116,5.520E2)?'s':24>(21.0E1,17)?(0x1A3,2):(14.82E2,119.60E1)):p36|=(V36.charCodeAt(F36+1)&0xff)<<((140.,51.5E1)<=92?8.34E2:(35,3.)<(62,42)?(48,8):(83.2E1,0x205));case ((146.70E1,25)>=11.63E2?0x68:(35.,0xC2)<(0x103,0x148)?(0xBA,1):(0x200,120)>=147?(145,1.37):(44,133.)):p36|=(V36.charCodeAt(F36)&(0xA4<=(79,0x257)?(5.36E2,0xff):(13.,86)));p36=W36(p36,Z36);p36=((p36&0x1ffff)<<15)|(p36>>>17);p36=W36(p36,i36);P36^=p36;}
P36^=C36;P36^=P36>>>16;P36=W36(P36,0x85ebca6b);P36^=P36>>>((0x1AE,112.7E1)<(1.038E3,130.)?0x1F3:0x1C4>=(0x12A,0x155)?(0x69,13):(0x111,0x249));P36=W36(P36,0xc2b2ae35);P36^=P36>>>16;D36[q36]=P36;return P36;}
;return {W36:W36,x36:x36}
;}
)(),'K91':function(G91,x91){return G91==x91;}
,'Z2f':function(i2f,P2f){return i2f-P2f;}
,'p9x':function(D9x,Q9x){return D9x<Q9x;}
,'x3y':function(J3y,u3y){return J3y<u3y;}
,'Y14':function(X14,L14,l14){return X14-L14+l14;}
,'n8x':function(h8x,Y8x){return h8x==Y8x;}
,'w4X':function(a4X,c4X){return a4X===c4X;}
,'o9y':function(O9y,r9y){return O9y*r9y;}
,'H2N':function(p2N,D2N){return p2N-D2N;}
,'p21':function(D21,Q21){return D21 in Q21;}
,'V0n':function(C0n,q0n){return C0n-q0n;}
,'T8':function(f8,g8){return f8*g8;}
,'q21':function(Z21,i21){return Z21 in i21;}
,'U6X':function(K46,G46){return K46-G46;}
,'m51':function(y51,e51){return y51<e51;}
,'O61':function(r61,S61){return r61<=S61;}
,'z6':function(B6,R6){return B6==R6;}
,'p1V':function(D1V,Q1V){return D1V==Q1V;}
,'S1V':function(k1V,m1V){return k1V==m1V;}
,'d81':function(t81,n81){return t81/n81;}
,'m06':0,'x5n':function(J5n,u5n){return J5n==u5n;}
,'q94':function(Z94,i94){return Z94-i94;}
,'s84':function(N84,b84){return N84<b84;}
,'z5y':function(B5y,R5y){return B5y==R5y;}
,'w3L':function(a3L,c3L){return a3L!=c3L;}
,'Q9n':function(E9n,M9n){return E9n&M9n;}
,'m0x':function(y0x,e0x){return y0x-e0x;}
,'J71':function(u71,W71){return u71<W71;}
,'B5V':function(R5V,j5V){return R5V>=j5V;}
,'q44':function(Z44,i44){return Z44<=i44;}
,'O64':function(r64,S64){return r64==S64;}
,'f06':4,'z94':function(B94,R94){return B94==R94;}
,'L64':function(l64,U64){return l64/U64;}
,'e2':function(A2,v2){return A2<v2;}
,'k64':function(m64,y64){return m64-y64;}
,'a6F':function(c6F,o6F){return c6F<o6F;}
,'B8F':function(R8F,j8F){return R8F===j8F;}
,'T2L':function(f2L,g2L){return f2L*g2L;}
,'F0y':function(H0y,p0y){return H0y-p0y;}
,'Y7y':function(X7y,L7y){return X7y>=L7y;}
,'q8x':function(Z8x,i8x){return Z8x<i8x;}
,'S2F':function(k2F,m2F){return k2F<m2F;}
,'I11':function(s11,N11){return s11-N11;}
,'H3y':function(p3y,D3y){return p3y==D3y;}
,'G8F':function(x8F,J8F){return x8F!=J8F;}
,'Y6L':function(X6L,L6L){return X6L<L6L;}
,'U8X':function(K2X,G2X){return K2X<G2X;}
,'d4':function(t4,n4){return t4<n4;}
,'I6y':function(s6y,N6y){return s6y!=N6y;}
,'u7V':function(W7V,z7V){return W7V==z7V;}
,'q1N':function(Z1N,i1N){return Z1N/i1N;}
,'O0':function(r0,S0){return r0/S0;}
,'d2f':function(t2f,n2f){return t2f==n2f;}
,'L0f':function(l0f,U0f){return l0f>=U0f;}
,'o94':function(O94,r94){return O94<r94;}
,'F2':function(H2,p2){return H2!=p2;}
,'o2':function(O2,S2){return O2/S2;}
,'I9n':function(s9n,N9n){return s9n>=N9n;}
,'q0V':function(Z0V,i0V){return Z0V<i0V;}
,'U2F':function(K5F,G5F){return K5F<G5F;}
,'F0X':function(H0X,p0X){return H0X!=p0X;}
,'e7V':function(A7V,v7V){return A7V>=v7V;}
,'L1y':function(l1y,U1y){return l1y<U1y;}
,'f31':function(g31,d31){return g31-d31;}
,'y8':function(e8,A8,v8){return e8*A8*v8;}
,'B6N':function(R6N,j6N){return R6N===j6N;}
,'A46':function(v46,T46){return v46<T46;}
,'E3L':function(M3L,I3L){return M3L<I3L;}
,'w8y':function(a8y,c8y){return a8y==c8y;}
,'L0y':function(l0y,U0y){return l0y===U0y;}
,'e5L':function(A5L,v5L){return A5L<v5L;}
,'b8':function(w8,a8,c8){return w8/a8/c8;}
,'a0X':function(c0X,o0X){return c0X==o0X;}
,'u0n':function(W0n,z0n){return W0n<z0n;}
,'Z61':function(i61,P61){return i61==P61;}
,'r54':function(S54,k54){return S54>k54;}
,'Q46':function(E46,M46){return E46>M46;}
,'m34':function(y34,e34){return y34-e34;}
,'M2f':function(I2f,s2f){return I2f>s2f;}
,'f8N':function(g8N,d8N,t8N){return g8N-d8N+t8N;}
,'U2n':function(K5n,G5n){return K5n>G5n;}
,'j1V':function(V1V,C1V){return V1V==C1V;}
,'E8n':function(M8n,I8n){return M8n<I8n;}
,'I8V':function(s8V,N8V){return s8V-N8V;}
,'b14':function(w14,a14){return w14-a14;}
,'r7y':function(S7y,k7y){return S7y<k7y;}
,'E41':function(M41,I41){return M41-I41;}
,'u1f':function(W1f,z1f){return W1f-z1f;}
,'l3y':function(U3y,K0y){return U3y==K0y;}
,'N0f':function(b0f,w0f){return b0f<w0f;}
,'B6L':function(R6L,j6L){return R6L==j6L;}
,'R4V':function(j4V,V4V){return j4V<V4V;}
,'o8y':function(O8y,r8y){return O8y!==r8y;}
,'W1F':function(z1F,B1F){return z1F-B1F;}
,'Y8n':function(X8n,L8n){return X8n<L8n;}
,'s71':function(N71,b71){return N71-b71;}
,'E7F':function(M7F,I7F){return M7F==I7F;}
,'R34':function(j34,V34){return j34<V34;}
,'j8y':function(V8y,C8y){return V8y===C8y;}
,'f7y':function(g7y,d7y){return g7y>d7y;}
,'d6x':function(t6x,n6x){return t6x!=n6x;}
,'j5f':function(V5f,C5f){return V5f<C5f;}
,'Q4N':function(E4N,M4N){return E4N<M4N;}
,'w0':function(a0,c0,o0){return a0*c0/o0;}
,'x3f':function(J3f,u3f){return J3f==u3f;}
,'l9':function(U9,K7,G7){return U9*K7/G7;}
,'c46':function(o46,O46){return o46!==O46;}
,'I0L':function(s0L,N0L){return s0L<N0L;}
,'M9L':function(I9L,s9L){return I9L<s9L;}
,'T1x':function(f1x,g1x){return f1x-g1x;}
,'u2':function(W2,z2){return W2<z2;}
,'l6y':function(U6y,K4L){return U6y>=K4L;}
,'M0F':function(I0F,s0F){return I0F-s0F;}
,'s3':function(N3,b3){return N3==b3;}
,'X0':function(L0,l0){return L0-l0;}
,'D0X':function(Q0X,E0X){return Q0X==E0X;}
,'I5N':function(s5N,N5N){return s5N/N5N;}
,'J9f':function(u9f,W9f){return u9f<W9f;}
,'R46':function(j46,V46){return j46<=V46;}
,'T7N':function(f7N,g7N){return f7N>g7N;}
,'m24':function(y24,e24){return y24-e24;}
,'M1x':function(I1x,s1x){return I1x-s1x;}
,'m5N':function(y5N,e5N){return y5N===e5N;}
,'X5y':function(L5y,l5y){return L5y==l5y;}
,'z8X':function(B8X,R8X){return B8X>=R8X;}
,'c14':function(o14,O14){return o14!=O14;}
,'J1V':function(u1V,W1V){return u1V==W1V;}
,'s91':function(N91,b91){return N91===b91;}
,'a64':function(c64,o64){return c64-o64;}
,'w7F':function(a7F,c7F){return a7F<c7F;}
,'o24':function(O24,r24,S24,k24){return O24-r24+S24-k24;}
,'R9':function(j9,V9){return j9==V9;}
,'k1L':function(m1L,y1L){return m1L-y1L;}
,'B6n':function(R6n,j6n){return R6n==j6n;}
,'c7X':function(o7X,O7X){return o7X==O7X;}
,'p84':function(D84,Q84){return D84>Q84;}
,'f2x':function(g2x,d2x){return g2x==d2x;}
,'h8':function(Y8,X8){return Y8*X8;}
,'n9f':function(h9f,Y9f){return h9f-Y9f;}
,'Q2y':function(E2y,M2y,I2y,s2y){return E2y-M2y+I2y-s2y;}
,'L0F':function(l0F,U0F){return l0F>U0F;}
,'o6X':function(O6X,r6X){return O6X<r6X;}
,'e6F':function(A6F,v6F){return A6F<v6F;}
,'P9F':function(F9F,H9F){return F9F/H9F;}
,'b4N':function(w4N,a4N){return w4N>a4N;}
,'G1':function(J1,u1){return J1!==u1;}
,'g7F':function(d7F,t7F){return d7F-t7F;}
,'i1n':function(P1n,F1n){return P1n-F1n;}
,'a5':function(c5,o5){return c5!=o5;}
,'V5X':function(C5X,q5X){return C5X>=q5X;}
,'O3V':function(r3V,S3V){return r3V<S3V;}
,'t31':function(n31,h31){return n31-h31;}
,'K2F':function(G2F,x2F){return G2F>x2F;}
,'I9V':function(s9V,N9V){return s9V/N9V;}
,'X1N':function(L1N,l1N){return L1N<=l1N;}
,'o1N':function(O1N,r1N){return O1N/r1N;}
,'h1x':function(Y1x,X1x){return Y1x*X1x;}
,'P1V':function(F1V,H1V){return F1V==H1V;}
,'A8N':function(v8N,T8N){return v8N-T8N;}
,'T2y':function(f2y,g2y){return f2y!==g2y;}
,'o91':function(O91,r91){return O91/r91;}
,'H34':function(p34,D34){return p34>D34;}
,'Z2':function(i2,P2){return i2!=P2;}
,'Q2N':function(E2N,M2N){return E2N==M2N;}
,'G7n':function(x7n,J7n){return x7n-J7n;}
,'W24':function(z24,B24){return z24<B24;}
,'b7':function(w7,a7){return w7>a7;}
,'H1':function(p1,D1){return p1-D1;}
,'n2n':function(h2n,Y2n){return h2n<Y2n;}
,'Z5N':function(i5N,P5N,F5N){return i5N*P5N/F5N;}
,'o0N':function(O0N,r0N){return O0N-r0N;}
,'e4n':function(A4n,v4n){return A4n-v4n;}
,'m0L':function(y0L,e0L){return y0L<e0L;}
,'m3X':function(y3X,e3X){return y3X-e3X;}
,'Y54':function(X54,L54){return X54===L54;}
,'l7':function(U7,K1){return U7>K1;}
,'M7n':function(I7n,s7n){return I7n-s7n;}
,'T4n':function(f4n,g4n){return f4n>g4n;}
,'j2L':function(V2L,C2L,q2L){return V2L*C2L/q2L;}
,'I54':function(s54,N54){return s54>N54;}
,'G6F':function(x6F,J6F){return x6F>J6F;}
,'w6':function(a6,c6){return a6/c6;}
,'i51':function(P51,F51){return P51==F51;}
,'S1':function(e1,A1){return e1==A1;}
,'m4V':function(y4V,e4V){return y4V<e4V;}
,'T0X':function(f0X,g0X){return f0X===g0X;}
,'h4L':function(Y4L,X4L){return Y4L*X4L;}
,'K4F':function(G4F,x4F){return G4F===x4F;}
,'i1':function(P1,F1){return P1<F1;}
,'K94':function(G94,x94){return G94>x94;}
,'S3x':function(k3x,m3x){return k3x<=m3x;}
,'Z5':function(i5,P5){return i5<P5;}
,'N1x':function(b1x,w1x){return b1x<w1x;}
,'r6f':function(S6f,k6f){return S6f/k6f;}
,'f9n':function(g9n,d9n){return g9n*d9n;}
,'f14':function(g14,d14){return g14-d14;}
,'N5':function(b5,w5){return b5*w5;}
,'O2f':function(r2f,S2f){return r2f==S2f;}
,'e8L':function(A8L,v8L){return A8L>=v8L;}
,'E3':function(M3,I3){return M3-I3;}
,'F0F':function(H0F,p0F){return H0F==p0F;}
,'v71':function(T71,f71){return T71-f71;}
,'Q8':function(E8,M8){return E8==M8;}
,'y0N':function(e0N,A0N){return e0N===A0N;}
,'J41':function(u41,W41){return u41/W41;}
,'a7N':function(c7N,o7N){return c7N/o7N;}
,'F0f':function(H0f,p0f){return H0f!==p0f;}
,'c6L':function(o6L,O6L){return o6L>=O6L;}
,'M3N':function(I3N,s3N){return I3N!==s3N;}
,'U71':function(K11,G11){return K11<G11;}
,'z3':function(B3,R3){return B3<R3;}
,'b7f':function(w7f,a7f){return w7f-a7f;}
,'w4y':function(a4y,c4y){return a4y*c4y;}
,'E8L':function(M8L,I8L){return M8L*I8L;}
,'c4x':function(o4x,O4x){return o4x*O4x;}
,'y4X':function(e4X,A4X){return e4X>A4X;}
,'i8f':function(P8f,F8f){return P8f*F8f;}
,'o71':function(O71,r71){return O71==r71;}
,'S94':function(k94,m94){return k94!=m94;}
,'Z01':function(i01,P01){return i01==P01;}
,'f0x':function(g0x,d0x){return g0x<d0x;}
,'k4':function(m4,y4){return m4<y4;}
,'U4y':function(K3y,G3y){return K3y!==G3y;}
,'h8F':function(Y8F,X8F){return Y8F>X8F;}
,'T1X':function(f1X,g1X){return f1X==g1X;}
,'x7y':function(J7y,u7y){return J7y==u7y;}
,'J6f':function(u6f,W6f){return u6f>=W6f;}
,'t2V':function(n2V,h2V){return n2V/h2V;}
,'o3L':function(O3L,r3L){return O3L!=r3L;}
,'p8n':function(D8n,Q8n){return D8n<Q8n;}
,'L7N':function(l7N,U7N){return l7N==U7N;}
,'p41':function(D41,Q41){return D41>=Q41;}
,'C9N':function(q9N,Z9N){return q9N-Z9N;}
,'g7L':function(d7L,t7L){return d7L==t7L;}
,'T5':function(f5,g5){return f5>g5;}
,'z5f':function(B5f,R5f){return B5f-R5f;}
,'q6X':function(Z6X,i6X){return Z6X>i6X;}
,'J8L':function(u8L,W8L){return u8L>W8L;}
,'I6L':function(s6L,N6L){return s6L>N6L;}
,'h9F':function(Y9F,X9F){return Y9F==X9F;}
,'T04':function(f04,g04){return f04==g04;}
,'o41':function(O41,r41){return O41-r41;}
,'Z5V':function(i5V,P5V){return i5V/P5V;}
,'w6X':function(a6X,c6X){return a6X>c6X;}
,'z41':function(B41,R41){return B41/R41;}
,'Q5n':function(E5n,M5n){return E5n/M5n;}
,'V3x':function(C3x,q3x){return C3x>q3x;}
,'b51':function(w51,a51){return w51!=a51;}
,'n21':function(h21,Y21){return h21 in Y21;}
,'m3f':function(y3f,e3f){return y3f*e3f;}
,'Y5F':function(X5F,L5F){return X5F<L5F;}
,'E0N':function(M0N,I0N){return M0N==I0N;}
,'j8L':function(V8L,C8L){return V8L>C8L;}
,'x4f':function(J4f,u4f){return J4f<u4f;}
,'e3V':function(A3V,v3V){return A3V<v3V;}
,'U7F':function(K1F,G1F){return K1F>G1F;}
,'M5':function(I5,s5){return I5!=s5;}
,'n4f':function(h4f,Y4f){return h4f===Y4f;}
,'h61':function(Y61,X61){return Y61-X61;}
,'W2V':function(z2V,B2V){return z2V/B2V;}
,'v9f':function(T9f,f9f){return T9f/f9f;}
,'a5X':function(c5X,o5X){return c5X<o5X;}
,'b6L':function(w6L,a6L){return w6L-a6L;}
,'t7':function(n7,h7){return n7/h7;}
,'l2V':function(U2V,K5V){return U2V/K5V;}
,'N81':function(b81,w81){return b81!=w81;}
,'b6y':function(w6y,a6y){return w6y!=a6y;}
,'E1N':function(M1N,I1N){return M1N==I1N;}
,'q5y':function(Z5y,i5y){return Z5y!==i5y;}
,'x2N':function(J2N,u2N){return J2N==u2N;}
,'q2F':function(Z2F,i2F){return Z2F==i2F;}
,'y8x':function(e8x,A8x){return e8x<A8x;}
,'l2N':function(U2N,K5N){return U2N-K5N;}
,'c0x':function(o0x,O0x){return o0x>O0x;}
,'i2X':function(P2X,F2X){return P2X/F2X;}
,'k0':function(m0,e0){return m0==e0;}
,'x2y':function(J2y,u2y){return J2y-u2y;}
,'j6f':function(V6f,C6f){return V6f/C6f;}
,'N7n':function(b7n,w7n){return b7n*w7n;}
,'T2':function(f2,g2){return f2*g2;}
,'L0X':function(l0X,U0X){return l0X==U0X;}
,'g41':function(d41,t41){return d41==t41;}
,'B2n':function(R2n,j2n){return R2n>j2n;}
,'Q6y':function(E6y,M6y){return E6y==M6y;}
,'H1F':function(p1F,D1F){return p1F<D1F;}
,'s8x':function(N8x,b8x){return N8x/b8x;}
,'L81':function(l81,U81){return l81 in U81;}
,'C0x':function(q0x,Z0x){return q0x<Z0x;}
,'Y9V':function(X9V,L9V){return X9V==L9V;}
,'l6L':function(U6L,K4N){return U6L==K4N;}
,'v8V':function(T8V,f8V){return T8V<=f8V;}
,'F3V':function(H3V,p3V){return H3V*p3V;}
,'U4X':function(K3X,G3X){return K3X-G3X;}
,'Z5X':function(i5X,P5X){return i5X===P5X;}
,'W6y':function(z6y,B6y){return z6y==B6y;}
,'z4X':function(B4X,R4X){return B4X-R4X;}
,'N04':function(b04,w04){return b04-w04;}
,'K8X':function(G8X,x8X){return G8X==x8X;}
,'m9n':function(y9n,e9n){return y9n>e9n;}
,'N0X':function(b0X,w0X){return b0X==w0X;}
,'t5N':function(n5N,h5N){return n5N===h5N;}
,'l7X':function(U7X,K1X){return U7X*K1X;}
,'n71':function(h71,Y71){return h71/Y71;}
,'g0V':function(d0V,t0V){return d0V==t0V;}
,'n4X':function(h4X,Y4X){return h4X==Y4X;}
,'V4':function(C4,q4){return C4<q4;}
,'G54':function(x54,J54){return x54/J54;}
,'W5F':function(z5F,B5F){return z5F==B5F;}
,'r74':function(S74,k74){return S74<k74;}
,'W7f':function(z7f,B7f){return z7f===B7f;}
,'d6N':function(t6N,n6N){return t6N<n6N;}
,'v4F':function(T4F,f4F){return T4F!==f4F;}
,'S6V':function(k6V,m6V){return k6V===m6V;}
,'d1y':function(t1y,n1y){return t1y!=n1y;}
,'U4F':function(K3F,G3F){return K3F>=G3F;}
,'X8y':function(L8y,l8y){return L8y*l8y;}
,'m2N':function(y2N,e2N){return y2N==e2N;}
,'X8X':function(L8X,l8X){return L8X==l8X;}
,'d5':function(t5,n5){return t5>n5;}
,'g1V':function(d1V,t1V){return d1V==t1V;}
,'A6L':function(v6L,T6L){return v6L===T6L;}
,'c2V':function(o2V,O2V){return o2V/O2V;}
,'t8f':function(n8f,h8f){return n8f==h8f;}
,'t54':function(n54,h54){return n54==h54;}
,'n91':function(h91,Y91){return h91<Y91;}
,'J3':function(u3,W3){return u3-W3;}
,'D0f':function(Q0f,E0f){return Q0f!==E0f;}
,'H11':function(p11,D11){return p11==D11;}
,'T1y':function(f1y,g1y){return f1y in g1y;}
,'U4f':function(K3f,G3f){return K3f==G3f;}
,'x24':function(J24,u24){return J24<u24;}
,'L61':function(l61,U61){return l61-U61;}
,'t14':function(n14,h14){return n14-h14;}
,'c3f':function(o3f,O3f){return o3f<O3f;}
,'H8':function(p8,D8){return p8<D8;}
,'Q2x':function(E2x,M2x){return E2x<M2x;}
,'Y2X':function(X2X,L2X){return X2X>=L2X;}
,'k6N':function(m6N,y6N){return m6N===y6N;}
,'f0L':function(g0L,d0L){return g0L<d0L;}
,'k5x':function(m5x,y5x){return m5x==y5x;}
,'I9N':function(s9N,N9N){return s9N<N9N;}
,'b7y':function(w7y,a7y){return w7y>=a7y;}
,'r4V':function(S4V,k4V){return S4V<k4V;}
,'t0x':function(n0x,h0x){return n0x-h0x;}
,'Y9n':function(X9n,L9n){return X9n<L9n;}
,'Y9':function(X9,L9){return X9===L9;}
,'f7X':function(g7X,d7X){return g7X==d7X;}
,'J8x':function(u8x,W8x){return u8x<W8x;}
,'S5y':function(k5y,m5y){return k5y-m5y;}
,'l3X':function(U3X,K0X){return U3X-K0X;}
,'q84':function(Z84,i84){return Z84-i84;}
,'j91':function(V91,C91){return V91==C91;}
,'O01':function(r01,S01){return r01==S01;}
,'S71':function(k71,m71){return k71/m71;}
,'p3':function(D3,Q3){return D3==Q3;}
,'g9y':function(d9y,t9y){return d9y===t9y;}
,'C0L':function(q0L,Z0L){return q0L!=Z0L;}
,'S84':function(k84,m84){return k84===m84;}
,'F7V':function(H7V,p7V){return H7V*p7V;}
,'F5X':function(H5X,p5X){return H5X==p5X;}
,'H0L':function(p0L,D0L){return p0L!=D0L;}
,'G5N':function(x5N,J5N){return x5N==J5N;}
,'Y6f':function(X6f,L6f){return X6f<=L6f;}
,'y94':function(e94,A94){return e94==A94;}
,'N64':function(b64,w64){return b64===w64;}
,'i9n':function(P9n,F9n){return P9n&F9n;}
,'l9N':function(U9N,K7N){return U9N==K7N;}
,'c74':function(o74,O74){return o74!=O74;}
,'K44':function(G44,x44){return G44<=x44;}
,'b9N':function(w9N,a9N){return w9N>a9N;}
,'D1L':function(Q1L,E1L){return Q1L-E1L;}
,'L3N':function(l3N,U3N){return l3N===U3N;}
,'D3N':function(Q3N,E3N){return Q3N/E3N;}
,'r8N':function(S8N,k8N){return S8N==k8N;}
,'f3F':function(g3F,d3F){return g3F==d3F;}
,'h5V':function(Y5V,X5V){return Y5V/X5V;}
,'Q54':function(E54,M54){return E54-M54;}
,'M1y':function(I1y,s1y){return I1y-s1y;}
,'Q7X':function(E7X,M7X){return E7X>M7X;}
,'z6f':function(B6f,R6f){return B6f-R6f;}
,'l31':function(U31,K01){return U31>K01;}
,'i6y':function(P6y,F6y){return P6y==F6y;}
,'G0n':function(x0n,J0n){return x0n-J0n;}
,'h7V':function(Y7V,X7V){return Y7V/X7V;}
,'V61':function(C61,q61){return C61<q61;}
,'q6V':function(Z6V,i6V){return Z6V-i6V;}
,'D8F':function(Q8F,E8F){return Q8F==E8F;}
,'o4y':function(O4y,r4y){return O4y*r4y;}
,'K9x':function(G9x,x9x){return G9x<=x9x;}
,'I3n':function(s3n,N3n){return s3n/N3n;}
,'B4N':function(R4N,j4N,V4N){return R4N*j4N/V4N;}
,'s44':function(N44,b44){return N44-b44;}
,'a6n':function(c6n,o6n){return c6n-o6n;}
,'E7L':function(M7L,I7L){return M7L<I7L;}
,'q9X':function(Z9X,i9X){return Z9X<i9X;}
,'N9L':function(b9L,w9L){return b9L==w9L;}
,'M6x':function(I6x,s6x){return I6x-s6x;}
,'R4f':function(j4f,V4f){return j4f*V4f;}
,'i2y':function(P2y,F2y){return P2y==F2y;}
,'b34':function(w34,a34){return w34<a34;}
,'h5X':function(Y5X,X5X){return Y5X<=X5X;}
,'L2f':function(l2f,U2f){return l2f==U2f;}
,'D04':function(Q04,E04){return Q04===E04;}
,'R0x':function(j0x,V0x){return j0x<V0x;}
,'V3N':function(C3N,q3N){return C3N/q3N;}
,'Z4':function(i4,P4){return i4<P4;}
,'O6N':function(r6N,S6N){return r6N<S6N;}
,'c6f':function(o6f,O6f){return o6f==O6f;}
,'P2F':function(F2F,H2F){return F2F!==H2F;}
,'i0x':function(P0x,F0x){return P0x-F0x;}
,'i7x':function(P7x,F7x){return P7x<=F7x;}
,'p6':function(D6,Q6){return D6<Q6;}
,'x7':function(J7,u7){return J7/u7;}
,'y71':function(e71,A71){return e71==A71;}
,'z2L':function(B2L,R2L){return B2L<R2L;}
,'m8V':function(y8V,e8V,A8V){return y8V-e8V+A8V;}
,'Z5L':function(i5L,P5L){return i5L/P5L;}
,'I31':function(s31,N31){return s31>=N31;}
,'B81':function(R81,j81){return R81*j81;}
,'H0x':function(p0x,D0x){return p0x>D0x;}
,'D5V':function(Q5V,E5V){return Q5V/E5V;}
,'C4x':function(q4x,Z4x){return q4x<Z4x;}
,'H4x':function(p4x,D4x){return p4x*D4x;}
,'K0V':function(G0V,x0V){return G0V/x0V;}
,'P44':function(F44,H44){return F44>=H44;}
,'M7N':function(I7N,s7N){return I7N-s7N;}
,'r2X':function(S2X,k2X){return S2X/k2X;}
,'O4L':function(r4L,S4L){return r4L<S4L;}
,'M2':function(I2,s2){return I2*s2;}
,'p4f':function(D4f,Q4f){return D4f<Q4f;}
,'w0V':function(a0V,c0V){return a0V<c0V;}
,'Y8f':function(X8f,L8f){return X8f==L8f;}
,'G1f':function(x1f,J1f){return x1f-J1f;}
,'f9V':function(g9V,d9V){return g9V==d9V;}
,'t7y':function(n7y,h7y){return n7y!==h7y;}
,'R5n':function(j5n,V5n){return j5n<V5n;}
,'U3x':function(K0x,G0x){return K0x-G0x;}
,'g8x':function(d8x,t8x){return d8x<=t8x;}
,'d0F':function(t0F,n0F){return t0F-n0F;}
,'P5y':function(F5y,H5y){return F5y!=H5y;}
,'V1X':function(C1X,q1X){return C1X==q1X;}
,'E1V':function(M1V,I1V){return M1V==I1V;}
,'Y0x':function(X0x,L0x,l0x,U0x){return X0x-L0x+l0x-U0x;}
,'F3x':function(H3x,p3x){return H3x<=p3x;}
,'l3F':function(U3F,K0F){return U3F-K0F;}
,'Z1f':function(i1f,P1f){return i1f<P1f;}
,'a8L':function(c8L,o8L){return c8L<o8L;}
,'Q2V':function(E2V,M2V){return E2V*M2V;}
,'J9x':function(u9x,W9x){return u9x/W9x;}
,'n74':function(h74,Y74){return h74-Y74;}
,'I46':function(s46,N46){return s46!=N46;}
,'e0f':function(A0f,v0f){return A0f>=v0f;}
,'y8y':function(e8y,A8y){return e8y!==A8y;}
,'t4V':function(n4V,h4V){return n4V-h4V;}
,'y1N':function(e1N,A1N){return e1N*A1N;}
,'r1n':function(S1n,k1n){return S1n<=k1n;}
,'B4L':function(R4L,j4L){return R4L>j4L;}
,'U9X':function(K7X,G7X){return K7X>G7X;}
,'c8V':function(o8V,O8V){return o8V*O8V;}
,'b46':function(w46,a46){return w46<a46;}
,'K9F':function(G9F,x9F){return G9F/x9F;}
,'w3':function(a3,c3){return a3/c3;}
,'t3F':function(n3F,h3F){return n3F==h3F;}
,'a5L':function(c5L,o5L){return c5L*o5L;}
,'b31':function(w31,a31){return w31<=a31;}
,'F2L':function(H2L,p2L){return H2L/p2L;}
,'U8y':function(K2y,G2y){return K2y>G2y;}
,'e2y':function(A2y,v2y){return A2y!==v2y;}
,'f9N':function(g9N,d9N){return g9N-d9N;}
,'a04':function(c04,o04){return c04>o04;}
,'z6X':function(B6X,R6X){return B6X>R6X;}
,'e3N':function(A3N,v3N){return A3N===v3N;}
,'h81':function(Y81,X81){return Y81!=X81;}
,'L5X':function(l5X,U5X){return l5X>U5X;}
,'N4':function(b4,w4){return b4==w4;}
,'p0V':function(D0V,Q0V){return D0V>Q0V;}
,'F1y':function(H1y,p1y){return H1y==p1y;}
,'s9x':function(N9x,b9x){return N9x*b9x;}
,'F7n':function(H7n,p7n){return H7n==p7n;}
,'x2V':function(J2V,u2V){return J2V/u2V;}
,'K7F':function(G7F,x7F){return G7F==x7F;}
,'s0':function(N0,b0){return N0==b0;}
,'b4V':function(w4V,a4V){return w4V<=a4V;}
,'q3':function(Z3,i3){return Z3==i3;}
,'j5y':function(V5y,C5y){return V5y-C5y;}
,'e64':function(A64,v64){return A64==v64;}
,'s7L':function(N7L,b7L){return N7L==b7L;}
,'D7n':function(Q7n,E7n){return Q7n/E7n;}
,'C8V':function(q8V,Z8V){return q8V-Z8V;}
,'F6N':function(H6N,p6N){return H6N<p6N;}
,'X3L':function(L3L,l3L){return L3L>=l3L;}
,'S8X':function(k8X,m8X){return k8X===m8X;}
,'P0V':function(F0V,H0V){return F0V<H0V;}
,'m7f':function(y7f,e7f){return y7f==e7f;}
,'H46':function(p46,D46){return p46<=D46;}
,'Q1n':function(E1n,M1n){return E1n<M1n;}
,'a01':function(c01,o01){return c01<o01;}
,'P94':function(F94,H94){return F94<H94;}
,'L1X':function(l1X,U1X){return l1X<=U1X;}
,'Q14':function(E14,M14){return E14/M14;}
,'P4y':function(F4y,H4y){return F4y>H4y;}
,'l11':function(U11,K81){return U11==K81;}
,'s9X':function(N9X,b9X){return N9X-b9X;}
,'t7X':function(n7X,h7X){return n7X==h7X;}
,'F4':function(H4,p4){return H4<p4;}
,'G7N':function(x7N,J7N){return x7N-J7N;}
,'W5n':function(z5n,B5n){return z5n<B5n;}
,'Z0f':function(i0f,P0f){return i0f===P0f;}
,'E0':function(M0,I0){return M0===I0;}
,'j21':function(V21,C21){return V21*C21;}
,'x4V':function(J4V,u4V){return J4V<u4V;}
,'B0n':function(R0n,j0n){return R0n<j0n;}
,'u1x':function(W1x,z1x){return W1x>z1x;}
,'G6L':function(x6L,J6L){return x6L-J6L;}
,'S21':function(k21,m21){return k21>m21;}
,'e0y':function(A0y,v0y){return A0y-v0y;}
,'v8n':function(T8n,f8n,g8n,d8n){return T8n-f8n+g8n-d8n;}
,'H6y':function(p6y,D6y){return p6y*D6y;}
,'t51':function(n51,h51){return n51===h51;}
,'T5f':function(f5f,g5f){return f5f/g5f;}
,'N3N':function(b3N,w3N){return b3N!==w3N;}
,'c3n':function(o3n,O3n){return o3n==O3n;}
,'i3X':function(P3X,F3X){return P3X*F3X;}
,'N4L':function(b4L,w4L){return b4L-w4L;}
,'T6F':function(f6F,g6F){return f6F-g6F;}
,'o5y':function(O5y,r5y){return O5y>=r5y;}
,'C2X':function(q2X,Z2X){return q2X!==Z2X;}
,'b7x':function(w7x,a7x){return w7x*a7x;}
,'k5V':function(m5V,y5V){return m5V/y5V;}
,'m9':function(y9,e9){return y9==e9;}
,'X84':function(L84,l84){return L84/l84;}
,'r1F':function(S1F,k1F){return S1F<k1F;}
,'G01':function(x01,J01){return x01>J01;}
,'H54':function(p54,D54){return p54/D54;}
,'b3X':function(w3X,a3X){return w3X/a3X;}
,'L7V':function(l7V,U7V){return l7V*U7V;}
,'P0':function(F0,H0){return F0===H0;}
,'m2x':function(y2x,e2x){return y2x<e2x;}
,'C74':function(q74,Z74){return q74>Z74;}
,'S7L':function(k7L,m7L){return k7L<m7L;}
,'e8F':function(A8F,v8F){return A8F<v8F;}
,'V7n':function(C7n,q7n){return C7n<=q7n;}
,'Z0F':function(i0F,P0F){return i0F<P0F;}
,'h1X':function(Y1X,X1X){return Y1X<=X1X;}
,'G5':function(x5,J5){return x5-J5;}
,'h1f':function(Y1f,X1f,L1f){return Y1f*X1f/L1f;}
,'u01':function(W01,z01){return W01==z01;}
,'H31':function(p31,D31){return p31>=D31;}
,'Q7f':function(E7f,M7f){return E7f===M7f;}
,'D61':function(Q61,E61){return Q61==E61;}
,'E71':function(M71,I71){return M71<=I71;}
,'I2V':function(s2V,N2V){return s2V*N2V;}
,'G04':function(x04,J04){return x04-J04;}
,'F0n':function(H0n,p0n){return H0n>=p0n;}
,'f6f':function(g6f,d6f){return g6f>=d6f;}
,'z44':function(B44,R44){return B44<=R44;}
,'S91':function(k91,m91){return k91/m91;}
,'I8N':function(s8N,N8N){return s8N==N8N;}
,'r51':function(S51,k51){return S51!=k51;}
,'g0n':function(d0n,t0n){return d0n<=t0n;}
,'s4y':function(N4y,b4y){return N4y<b4y;}
,'Z2n':function(i2n,P2n){return i2n<P2n;}
,'C3X':function(q3X,Z3X){return q3X<=Z3X;}
,'c1F':function(o1F,O1F){return o1F>O1F;}
,'U6n':function(K4x,G4x){return K4x&G4x;}
,'W2N':function(z2N,B2N){return z2N-B2N;}
,'D2':function(Q2,E2){return Q2!=E2;}
,'N6N':function(b6N,w6N){return b6N==w6N;}
,'E84':function(M84,I84){return M84/I84;}
,'O1f':function(r1f,S1f){return r1f<S1f;}
,'W9':function(z9,B9){return z9-B9;}
,'L':function(U,K4){return U==K4;}
,'n1N':function(h1N,Y1N){return h1N<Y1N;}
,'L8':function(l8,U8){return l8*U8;}
,'W1L':function(z1L,B1L,R1L){return z1L-B1L+R1L;}
,'C2y':function(q2y,Z2y){return q2y==Z2y;}
,'W74':function(z74,B74){return z74==B74;}
,'W0x':function(z0x,B0x){return z0x*B0x;}
,'C8':function(q8,Z8){return q8*Z8;}
,'F5':function(H5,p5){return H5<p5;}
,'y7L':function(e7L,A7L){return e7L==A7L;}
,'V64':function(C64,q64){return C64==q64;}
,'K5f':function(G5f,x5f){return G5f<=x5f;}
,'y0V':function(e0V,A0V){return e0V<A0V;}
,'e5x':function(A5x,v5x){return A5x==v5x;}
,'s6V':function(N6V,b6V){return N6V===b6V;}
,'A3X':function(v3X,T3X){return v3X-T3X;}
,'x7f':function(J7f,u7f){return J7f===u7f;}
,'M4L':function(I4L,s4L){return I4L/s4L;}
,'O5':function(r5,S5){return r5>S5;}
,'D6N':function(Q6N,E6N){return Q6N===E6N;}
,'O8L':function(r8L,S8L){return r8L<S8L;}
,'B04':function(R04,j04){return R04>=j04;}
,'L2y':function(l2y,U2y){return l2y===U2y;}
,'N4n':function(b4n,w4n){return b4n*w4n;}
,'I0x':function(s0x,N0x){return s0x>N0x;}
,'z1N':function(B1N,R1N){return B1N/R1N;}
,'A4N':function(v4N,T4N){return v4N*T4N;}
,'J2L':function(u2L,W2L){return u2L<W2L;}
,'E21':function(M21,I21){return M21*I21;}
,'T6N':function(f6N,g6N){return f6N<g6N;}
,'N2L':function(b2L,w2L){return b2L<w2L;}
,'g4y':function(d4y,t4y){return d4y!==t4y;}
,'i2N':function(P2N,F2N){return P2N==F2N;}
,'I3X':function(s3X,N3X){return s3X<N3X;}
,'D1x':function(Q1x,E1x){return Q1x<=E1x;}
,'a0F':function(c0F,o0F){return c0F==o0F;}
,'X2n':function(L2n,l2n){return L2n==l2n;}
,'o9f':function(O9f,r9f){return O9f==r9f;}
,'U41':function(K31,G31){return K31<G31;}
,'B5':function(R5,j5){return R5===j5;}
,'V9L':function(C9L,q9L){return C9L==q9L;}
,'Y4x':function(X4x,L4x){return X4x>L4x;}
,'k5f':function(m5f,y5f){return m5f-y5f;}
,'J9X':function(u9X,W9X){return u9X==W9X;}
,'h9L':function(Y9L,X9L){return Y9L|X9L;}
,'s1V':function(N1V,b1V){return N1V==b1V;}
,'W4f':function(z4f,B4f){return z4f*B4f;}
,'A1n':function(v1n,T1n){return v1n!==T1n;}
,'P4X':function(F4X,H4X){return F4X-H4X;}
,'k1y':function(m1y,y1y){return m1y>y1y;}
,'U21':function(K51,G51){return K51==G51;}
,'g8y':function(d8y,t8y){return d8y-t8y;}
,'b6f':function(w6f,a6f){return w6f/a6f;}
,'D64':function(Q64,E64){return Q64-E64;}
,'H3F':function(p3F,D3F){return p3F==D3F;}
,'J1N':function(u1N,W1N){return u1N==W1N;}
,'O0n':function(r0n,S0n){return r0n!=S0n;}
,'e5V':function(A5V,v5V){return A5V/v5V;}
,'A0x':function(v0x,T0x){return v0x>T0x;}
,'e2f':function(A2f,v2f){return A2f<v2f;}
,'l7x':function(U7x,K1x){return U7x===K1x;}
,'d9L':function(t9L,n9L){return t9L|n9L;}
,'H9':function(p9,D9){return p9-D9;}
,'H3n':function(p3n,D3n){return p3n<=D3n;}
,'z1V':function(B1V,R1V){return B1V/R1V;}
,'S06':1,'h0y':function(Y0y,X0y){return Y0y/X0y;}
,'i2x':function(P2x,F2x){return P2x!==F2x;}
,'R3y':function(j3y,V3y){return j3y<V3y;}
,'d4L':function(t4L,n4L){return t4L>n4L;}
,'M64':function(I64,s64){return I64<s64;}
,'a7n':function(c7n,o7n){return c7n<=o7n;}
,'I7':function(s7,N7){return s7==N7;}
,'A7f':function(v7f,T7f){return v7f!=T7f;}
,'b2N':function(w2N,a2N){return w2N==a2N;}
,'A4x':function(v4x,T4x){return v4x-T4x;}
,'Q3f':function(E3f,M3f){return E3f==M3f;}
,'u1y':function(W1y,z1y){return W1y<z1y;}
,'m14':function(y14,e14){return y14-e14;}
,'u64':function(W64,z64){return W64<z64;}
,'c9V':function(o9V,O9V){return o9V==O9V;}
,'a1L':function(c1L,o1L){return c1L-o1L;}
,'g9X':function(d9X,t9X){return d9X==t9X;}
,'E8X':function(M8X,I8X){return M8X===I8X;}
,'I1':function(s1,N1){return s1<=N1;}
,'l6f':function(U6f,K4n){return U6f&K4n;}
,'t3X':function(n3X,h3X){return n3X/h3X;}
,'o21':function(O21,r21){return O21==r21;}
,'u2n':function(W2n,z2n){return W2n*z2n;}
,'r5n':function(S5n,k5n){return S5n==k5n;}
,'R0L':function(j0L,V0L){return j0L<V0L;}
,'w9y':function(a9y,c9y){return a9y*c9y;}
,'R8':function(j8,V8){return j8==V8;}
,'X21':function(L21,l21){return L21<l21;}
,'r14':function(S14,k14){return S14!=k14;}
,'P41':function(F41,H41){return F41<H41;}
,'N0n':function(b0n,w0n){return b0n-w0n;}
,'E9f':function(M9f,I9f){return M9f>I9f;}
,'K3L':function(G3L,x3L){return G3L<x3L;}
,'c5F':function(o5F,O5F){return o5F==O5F;}
,'r7X':function(S7X,k7X){return S7X<k7X;}
,'Y7x':function(X7x,L7x){return X7x-L7x;}
,'H24':function(p24,D24){return p24/D24;}
,'k7N':function(m7N,y7N){return m7N/y7N;}
,'o3':function(O3,r3){return O3-r3;}
,'x1n':function(J1n,u1n){return J1n<u1n;}
,'P3L':function(F3L,H3L){return F3L-H3L;}
,'O1y':function(r1y,S1y){return r1y>S1y;}
,'v5y':function(T5y,f5y){return T5y<=f5y;}
,'w4f':function(a4f,c4f){return a4f==c4f;}
,'H2y':function(p2y,D2y){return p2y<D2y;}
,'S9X':function(k9X,m9X){return k9X>=m9X;}
,'E0V':function(M0V,I0V){return M0V<I0V;}
,'x0x':function(J0x,u0x){return J0x*u0x;}
,'q0':function(Z0,i0){return Z0>i0;}
,'t4x':function(n4x,h4x){return n4x<h4x;}
,'D5X':function(Q5X,E5X){return Q5X<=E5X;}
,'B3V':function(R3V,j3V){return R3V<=j3V;}
,'c6y':function(o6y,O6y){return o6y!=O6y;}
,'d5f':function(t5f,n5f){return t5f-n5f;}
,'W9V':function(z9V,B9V){return z9V>B9V;}
,'V04':function(C04,q04){return C04-q04;}
,'Q6L':function(E6L,M6L){return E6L==M6L;}
,'X6X':function(L6X,l6X){return L6X==l6X;}
,'Y6y':function(X6y,L6y){return X6y-L6y;}
,'K4y':function(G4y,x4y){return G4y===x4y;}
,'b2X':function(w2X,a2X){return w2X===a2X;}
,'a6N':function(c6N,o6N){return c6N==o6N;}
,'q5f':function(Z5f,i5f){return Z5f===i5f;}
,'C11':function(q11,Z11){return q11<Z11;}
,'I6f':function(s6f,N6f){return s6f/N6f;}
,'H4N':function(p4N,D4N){return p4N>D4N;}
,'i6L':function(P6L,F6L){return P6L===F6L;}
,'P6X':function(F6X,H6X){return F6X>H6X;}
,'I2X':function(s2X,N2X){return s2X<N2X;}
,'R2N':function(j2N,V2N){return j2N==V2N;}
,'B5X':function(R5X,j5X){return R5X>=j5X;}
,'m6y':function(y6y,e6y){return y6y<e6y;}
,'e7N':function(A7N,v7N){return A7N*v7N;}
,'R1':function(j1,V1){return j1-V1;}
,'H9V':function(p9V,D9V){return p9V<D9V;}
,'s7F':function(N7F,b7F){return N7F<b7F;}
,'T1f':function(f1f,g1f){return f1f>g1f;}
,'Y2x':function(X2x,L2x){return X2x==L2x;}
,'X4F':function(L4F,l4F){return L4F-l4F;}
,'u5L':function(W5L,z5L){return W5L>z5L;}
,'i31':function(P31,F31){return P31<=F31;}
,'Z81':function(i81,P81){return i81==P81;}
,'P21':function(F21,H21){return F21*H21;}
,'E4y':function(M4y,I4y){return M4y<I4y;}
,'g9x':function(d9x,t9x){return d9x*t9x;}
,'u4':function(W4,z4){return W4==z4;}
,'p8y':function(D8y,Q8y){return D8y==Q8y;}
,'x9V':function(J9V,u9V){return J9V<u9V;}
,'y9f':function(e9f,A9f){return e9f-A9f;}
,'I8':function(s8,N8){return s8==N8;}
,'G8f':function(x8f,J8f,u8f){return x8f*J8f/u8f;}
,'C8N':function(q8N,Z8N){return q8N==Z8N;}
,'u6N':function(W6N,z6N){return W6N<z6N;}
,'O5f':function(r5f,S5f){return r5f<S5f;}
,'d8L':function(t8L,n8L){return t8L>=n8L;}
,'h04':function(Y04,X04){return Y04-X04;}
,'m9V':function(y9V,e9V){return y9V<e9V;}
,'i4N':function(P4N,F4N){return P4N===F4N;}
,'O7N':function(r7N,S7N){return r7N-S7N;}
,'A0':function(v0,T0){return v0==T0;}
,'h3V':function(Y3V,X3V){return Y3V>X3V;}
,'W4x':function(z4x,B4x){return z4x&B4x;}
,'Y3f':function(X3f,L3f){return X3f>L3f;}
,'O2y':function(r2y,S2y){return r2y/S2y;}
,'g3L':function(d3L,t3L){return d3L%t3L;}
,'f4V':function(g4V,d4V){return g4V/d4V;}
,'w91':function(a91,c91){return a91<c91;}
,'U1':function(K8,G8){return K8==G8;}
,'h5L':function(Y5L,X5L,L5L){return Y5L-X5L-L5L;}
,'W3y':function(z3y,B3y){return z3y>B3y;}
,'v1N':function(T1N,f1N){return T1N*f1N;}
,'Q8V':function(E8V,M8V){return E8V/M8V;}
,'d1X':function(t1X,n1X){return t1X>n1X;}
,'Q11':function(E11,M11){return E11>M11;}
,'j4F':function(V4F,C4F){return V4F-C4F;}
,'R7':function(j7,V7){return j7/V7;}
,'B0F':function(R0F,j0F){return R0F>j0F;}
,'f6L':function(g6L,d6L){return g6L==d6L;}
,'j71':function(V71,C71){return V71/C71;}
,'v6':function(T6,f6){return T6===f6;}
,'A5N':function(v5N,T5N){return v5N!==T5N;}
,'H7f':function(p7f,D7f){return p7f/D7f;}
,'h01':function(Y01,X01){return Y01*X01;}
,'F5V':function(H5V,p5V){return H5V<p5V;}
,'x5F':function(J5F,u5F){return J5F==u5F;}
,'I2N':function(s2N,N2N){return s2N-N2N;}
,'e7n':function(A7n,v7n,T7n,f7n){return A7n-v7n+T7n-f7n;}
,'b74':function(w74,a74){return w74>a74;}
,'I51':function(s51,N51){return s51===N51;}
,'c2x':function(o2x,O2x){return o2x<O2x;}
,'E6X':function(M6X,I6X){return M6X>I6X;}
,'G5x':function(x5x,J5x){return x5x<J5x;}
,'W4V':function(z4V,B4V){return z4V==B4V;}
,'e5X':function(A5X,v5X){return A5X-v5X;}
,'F7N':function(H7N,p7N){return H7N>=p7N;}
,'B5x':function(R5x,j5x){return R5x==j5x;}
,'s24':function(N24,b24){return N24==b24;}
,'O0y':function(r0y,S0y){return r0y-S0y;}
,'a2y':function(c2y,o2y){return c2y/o2y;}
,'S6X':function(k6X,m6X){return k6X>m6X;}
,'P9f':function(F9f,H9f){return F9f>H9f;}
,'w24':function(a24,c24){return a24/c24;}
,'V5V':function(C5V,q5V){return C5V===q5V;}
,'Z7n':function(i7n,P7n){return i7n==P7n;}
,'a81':function(c81,o81){return c81===o81;}
,'x9n':function(J9n,u9n){return J9n&u9n;}
,'C7f':function(q7f,Z7f){return q7f==Z7f;}
,'Q7':function(E7,M7){return E7==M7;}
,'O2L':function(r2L,S2L){return r2L-S2L;}
,'i14':function(P14,F14){return P14>F14;}
,'D81':function(Q81,E81){return Q81*E81;}
,'S4X':function(k4X,m4X){return k4X>m4X;}
,'g6X':function(d6X,t6X){return d6X<t6X;}
,'I74':function(s74,N74){return s74<N74;}
,'k3N':function(m3N,y3N){return m3N==y3N;}
,'W84':function(z84,B84,R84){return z84-B84-R84;}
,'V0X':function(C0X,q0X){return C0X!=q0X;}
,'z6x':function(B6x,R6x){return B6x-R6x;}
,'p9y':function(D9y,Q9y){return D9y<Q9y;}
,'B1f':function(R1f,j1f){return R1f-j1f;}
,'t4N':function(n4N,h4N){return n4N<h4N;}
,'G9L':function(x9L,J9L){return x9L==J9L;}
,'k3V':function(m3V,y3V){return m3V<y3V;}
,'u0f':function(W0f,z0f){return W0f==z0f;}
,'r3n':function(S3n,k3n){return S3n/k3n;}
,'v21':function(T21,f21){return T21 in f21;}
,'J0N':function(u0N,W0N){return u0N<W0N;}
,'C24':function(q24,Z24){return q24<Z24;}
,'d1x':function(t1x,n1x){return t1x*n1x;}
,'Z4n':function(i4n,P4n){return i4n!=P4n;}
,'u1X':function(W1X,z1X){return W1X==z1X;}
,'t8n':function(n8n,h8n){return n8n<=h8n;}
,'y1V':function(e1V,A1V){return e1V>=A1V;}
,'z3n':function(B3n,R3n){return B3n-R3n;}
,'z9F':function(B9F,R9F){return B9F-R9F;}
,'u0X':function(W0X,z0X){return W0X==z0X;}
,'A7y':function(v7y,T7y){return v7y<T7y;}
,'T5X':function(f5X,g5X){return f5X<g5X;}
,'C1':function(q1,Z1){return q1<Z1;}
,'C7X':function(q7X,Z7X){return q7X==Z7X;}
,'P4f':function(F4f,H4f){return F4f>H4f;}
,'g1N':function(d1N,t1N){return d1N-t1N;}
,'r34':function(S34,k34){return S34-k34;}
,'T6x':function(f6x,g6x){return f6x>=g6x;}
,'T5V':function(f5V,g5V){return f5V-g5V;}
,'r5N':function(S5N,k5N){return S5N===k5N;}
,'x2X':function(J2X,u2X){return J2X/u2X;}
,'i7X':function(P7X,F7X){return P7X-F7X;}
,'P1N':function(F1N,H1N){return F1N==H1N;}
,'h6F':function(Y6F,X6F){return Y6F/X6F;}
,'U6V':function(K4f,G4f){return K4f%G4f;}
,'o0V':function(O0V,r0V){return O0V*r0V;}
,'F3N':function(H3N,p3N){return H3N<=p3N;}
,'K9y':function(G9y,x9y){return G9y===x9y;}
,'T3V':function(f3V,g3V){return f3V==g3V;}
,'f2X':function(g2X,d2X){return g2X>=d2X;}
,'y4f':function(e4f,A4f){return e4f/A4f;}
,'w8X':function(a8X,c8X){return a8X===c8X;}
,'v3x':function(T3x,f3x){return T3x/f3x;}
,'a1f':function(c1f,o1f){return c1f<o1f;}
,'D5x':function(Q5x,E5x){return Q5x==E5x;}
,'x34':function(J34,u34){return J34/u34;}
,'U5y':function(K6y,G6y){return K6y==G6y;}
,'m11':function(y11,e11){return y11<=e11;}
,'D6F':function(Q6F,E6F){return Q6F<E6F;}
,'z8x':function(B8x,R8x){return B8x>R8x;}
,'h6N':function(Y6N,X6N){return Y6N-X6N;}
,'L6N':function(l6N,U6N){return l6N<U6N;}
,'J5f':function(u5f,W5f){return u5f*W5f;}
,'k9F':function(m9F,y9F){return m9F==y9F;}
,'d3V':function(t3V,n3V){return t3V*n3V;}
,'Y4N':function(X4N,L4N){return X4N/L4N;}
,'i5n':function(P5n,F5n){return P5n*F5n;}
,'e04':function(A04,v04){return A04*v04;}
,'v84':function(T84,f84){return T84<f84;}
,'r7x':function(S7x,k7x){return S7x==k7x;}
,'s4F':function(N4F,b4F){return N4F/b4F;}
,'q7L':function(Z7L,i7L){return Z7L<i7L;}
,'c1n':function(o1n,O1n){return o1n>=O1n;}
,'K21':function(G21,x21){return G21*x21;}
,'P8X':function(F8X,H8X){return F8X/H8X;}
,'R11':function(j11,V11){return j11-V11;}
,'l54':function(U54,K64){return U54===K64;}
,'W3X':function(z3X,B3X){return z3X>B3X;}
,'e0n':function(A0n,v0n,T0n,f0n){return A0n-v0n+T0n-f0n;}
,'T8F':function(f8F,g8F){return f8F>g8F;}
,'r2N':function(S2N,k2N){return S2N<k2N;}
,'T4':function(f4,g4){return f4<g4;}
,'l9n':function(U9n,K7n){return U9n<K7n;}
,'f2V':function(g2V,d2V){return g2V>d2V;}
,'D7V':function(Q7V,E7V){return Q7V==E7V;}
,'n44':function(h44,Y44){return h44===Y44;}
,'c34':function(o34,O34){return o34>O34;}
,'f3f':function(g3f,d3f){return g3f*d3f;}
,'N5X':function(b5X,w5X){return b5X===w5X;}
,'c54':function(o54,O54){return o54*O54;}
,'g8X':function(d8X,t8X){return d8X===t8X;}
,'g8V':function(d8V,t8V){return d8V===t8V;}
,'Z0X':function(i0X,P0X){return i0X!=P0X;}
,'A24':function(v24,T24){return v24-T24;}
,'U8N':function(K2N,G2N){return K2N<G2N;}
,'r7':function(S7,k7){return S7/k7;}
,'H6f':function(p6f,D6f){return p6f<=D6f;}
,'R3f':function(j3f,V3f){return j3f*V3f;}
,'k0f':function(m0f,y0f){return m0f>y0f;}
,'r3X':function(S3X,k3X){return S3X-k3X;}
,'S0V':function(k0V,m0V){return k0V/m0V;}
,'g44':function(d44,t44){return d44===t44;}
,'E9y':function(M9y,I9y){return M9y<I9y;}
,'L6x':function(l6x,U6x){return l6x>=U6x;}
,'J6X':function(u6X,W6X){return u6X<=W6X;}
,'L5f':function(l5f,U5f){return l5f-U5f;}
,'D9L':function(Q9L,E9L){return Q9L>E9L;}
,'x1L':function(J1L,u1L){return J1L!==u1L;}
,'Z5x':function(i5x,P5x){return i5x==P5x;}
,'l9V':function(U9V,K7V){return U9V/K7V;}
,'R3F':function(j3F,V3F){return j3F-V3F;}
,'g91':function(d91,t91){return d91/t91;}
,'Q9N':function(E9N,M9N){return E9N<M9N;}
,'p5f':function(D5f,Q5f){return D5f*Q5f;}
,'P91':function(F91,H91){return F91<H91;}
,'B61':function(R61,j61){return R61==j61;}
,'d9F':function(t9F,n9F){return t9F==n9F;}
,'y5y':function(e5y,A5y){return e5y-A5y;}
,'M0y':function(I0y,s0y){return I0y===s0y;}
,'N61':function(b61,w61){return b61==w61;}
,'H7y':function(p7y,D7y){return p7y>D7y;}
,'t2':function(n2,h2){return n2!==h2;}
,'Q3y':function(E3y,M3y){return E3y==M3y;}
,'G0X':function(x0X,J0X){return x0X!=J0X;}
,'V6Q':(function(){var Z6Q=0,i6Q='',P6Q=[/ /,-1,/ /,NaN,(139>=(1.164E3,143)?(104.,"D"):(11.24E2,16.5E1)>118.?(0x22B,null):(0x9E,143.)),NaN,NaN,[],NaN,null,false,[],[],'','',null,null,(0x98<=(36.,5.310E2)?(56,null):(122.,23.5E1)>0x1F2?(97,52):(107,7E0)),[],[],'','',false,false,false,[],/ /,false,false,{}
,[],'','',false,false,false,-1,-1,-1,false,NaN],F6Q=P6Q["length"];for(;Z6Q<F6Q;){i6Q+=+(typeof P6Q[Z6Q++]==='object');}
var H6Q=parseInt(i6Q,2),p6Q='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',D6Q=p6Q.constructor.constructor(unescape(/;.+/["exec"](p6Q))["split"]('')["reverse"]()["join"](''))();return {C6Q:function(Q6Q){var E6Q,Z6Q=0,M6Q=H6Q-D6Q>F6Q,I6Q;for(;Z6Q<Q6Q["length"];Z6Q++){I6Q=parseInt(Q6Q["charAt"](Z6Q),(0x1B2>=(9.,93.)?(53.40E1,16):4.770E2<=(0x237,18)?(0x1C9,49):(86.,3.56E2)))["toString"](2);var s6Q=I6Q["charAt"](I6Q["length"]-1);E6Q=Z6Q===0?s6Q:E6Q^s6Q;}
return E6Q?M6Q:!M6Q;}
}
;}
)(),'l3f':function(U3f,K0f){return U3f<K0f;}
,'v0N':function(T0N,f0N){return T0N===f0N;}
,'V0F':function(C0F,q0F){return C0F==q0F;}
,'k0X':function(m0X,y0X){return m0X!=y0X;}
,'S8y':function(k8y,m8y){return k8y!==m8y;}
,'v91':function(T91,f91){return T91<f91;}
,'M0n':function(I0n,s0n){return I0n-s0n;}
,'j4y':function(V4y,C4y){return V4y<C4y;}
,'p7L':function(D7L,Q7L){return D7L>Q7L;}
,'P6V':function(F6V,H6V){return F6V/H6V;}
,'c2X':function(o2X,O2X){return o2X>=O2X;}
,'P5f':function(F5f,H5f){return F5f/H5f;}
,'v6n':function(T6n,f6n){return T6n/f6n;}
,'M1X':function(I1X,s1X){return I1X>s1X;}
,'k4L':function(m4L,y4L){return m4L<y4L;}
,'c7x':function(o7x,O7x){return o7x*O7x;}
,'f7f':function(g7f,d7f){return g7f<d7f;}
,'u4L':function(W4L,z4L){return W4L-z4L;}
,'f9':function(g9,d9){return g9>d9;}
,'V1x':function(C1x,q1x){return C1x<=q1x;}
,'q71':function(Z71,i71){return Z71<i71;}
,'K6f':function(G6f,x6f){return G6f<x6f;}
,'a1y':function(c1y,o1y){return c1y<o1y;}
,'w9f':function(a9f,c9f){return a9f==c9f;}
,'e4':function(A4,v4){return A4>=v4;}
,'d5V':function(t5V,n5V){return t5V-n5V;}
,'q9F':function(Z9F,i9F){return Z9F!==i9F;}
,'w8n':function(a8n,c8n){return a8n-c8n;}
,'Z7N':function(i7N,P7N){return i7N>=P7N;}
,'Z6n':function(i6n,P6n){return i6n/P6n;}
,'i7f':function(P7f,F7f){return P7f/F7f;}
,'W3f':function(z3f,B3f){return z3f<B3f;}
,'E6V':function(M6V,I6V){return M6V/I6V;}
,'l2L':function(U2L,K5L){return U2L===K5L;}
,'m9N':function(y9N,e9N){return y9N-e9N;}
,'g3':function(d3,t3){return d3!=t3;}
,'t9N':function(n9N,h9N){return n9N>=h9N;}
,'t6L':function(n6L,h6L){return n6L>h6L;}
,'M6N':function(I6N,s6N){return I6N===s6N;}
,'W2X':function(z2X,B2X){return z2X<B2X;}
,'o7F':function(O7F,r7F){return O7F-r7F;}
,'F1f':function(H1f,p1f){return H1f>p1f;}
,'C46':function(q46,Z46){return q46>Z46;}
,'i3y':function(P3y,F3y){return P3y==F3y;}
,'d8':function(t8,n8){return t8!=n8;}
,'g94':function(d94,t94){return d94>t94;}
,'n0':function(h0,Y0){return h0==Y0;}
,'I3F':function(s3F,N3F){return s3F==N3F;}
,'H74':function(p74,D74){return p74>D74;}
,'W7y':function(z7y,B7y){return z7y*B7y;}
,'z2F':function(B2F,R2F){return B2F>R2F;}
,'X2F':function(L2F,l2F){return L2F*l2F;}
,'E5f':function(M5f,I5f,s5f){return M5f-I5f+s5f;}
,'B3x':function(R3x,j3x){return R3x-j3x;}
,'A8f':function(v8f,T8f){return v8f-T8f;}
,'n3':function(h3,Y3){return h3*Y3;}
,'j1L':function(V1L,C1L,q1L){return V1L-C1L+q1L;}
,'N1X':function(b1X,w1X){return b1X/w1X;}
,'o1':function(O1,r1){return O1<=r1;}
,'z0N':function(B0N,R0N){return B0N===R0N;}
,'u81':function(W81,z81){return W81!=z81;}
,'F1X':function(H1X,p1X){return H1X==p1X;}
,'z7L':function(B7L,R7L){return B7L==R7L;}
,'f1F':function(g1F,d1F){return g1F<d1F;}
,'x3F':function(J3F,u3F){return J3F==u3F;}
,'r8V':function(S8V,k8V){return S8V*k8V;}
,'O2n':function(r2n,S2n){return r2n<S2n;}
,'G6N':function(x6N,J6N){return x6N==J6N;}
,'k5':function(m5,y5){return m5>y5;}
,'n6V':function(h6V,Y6V){return h6V-Y6V;}
,'B6F':function(R6F,j6F){return R6F<j6F;}
,'A34':function(v34,T34){return v34!=T34;}
,'a61':function(c61,o61){return c61>o61;}
,'w2F':function(a2F,c2F){return a2F<c2F;}
,'H5n':function(p5n,D5n){return p5n*D5n;}
,'e1L':function(A1L,v1L){return A1L/v1L;}
,'F64':function(H64,p64){return H64-p64;}
,'n4F':function(h4F,Y4F){return h4F>=Y4F;}
,'C2x':function(q2x,Z2x){return q2x>Z2x;}
,'O0F':function(r0F,S0F){return r0F==S0F;}
,'Z2L':function(i2L,P2L){return i2L/P2L;}
,'E8x':function(M8x,I8x){return M8x>I8x;}
,'C51':function(q51,Z51){return q51==Z51;}
,'U94':function(K74,G74){return K74<G74;}
,'N2':function(b2,a2){return b2<a2;}
,'y9y':function(e9y,A9y){return e9y==A9y;}
,'t11':function(n11,h11){return n11/h11;}
,'o44':function(O44,r44){return O44===r44;}
,'l5F':function(U5F,K6F){return U5F<K6F;}
,'u4N':function(W4N,z4N){return W4N<z4N;}
,'x8V':function(J8V,u8V){return J8V==u8V;}
,'d01':function(t01,n01){return t01>n01;}
,'B4n':function(R4n,j4n){return R4n>=j4n;}
,'M04':function(I04,s04){return I04/s04;}
,'R24':function(j24,V24){return j24-V24;}
,'K5y':function(G5y,x5y){return G5y!=x5y;}
,'w7L':function(a7L,c7L){return a7L==c7L;}
,'q9x':function(Z9x,i9x){return Z9x/i9x;}
,'u6L':function(W6L,z6L){return W6L==z6L;}
,'k8F':function(m8F,y8F){return m8F!==y8F;}
,'Y3X':function(X3X,L3X){return X3X-L3X;}
,'t3f':function(n3f,h3f){return n3f>h3f;}
,'o2F':function(O2F,r2F){return O2F==r2F;}
,'i5F':function(P5F,F5F){return P5F==F5F;}
,'g9f':function(d9f,t9f){return d9f<t9f;}
,'a0n':function(c0n,o0n){return c0n!=o0n;}
,'W8N':function(z8N,B8N){return z8N!=B8N;}
,'Z0n':function(i0n,P0n){return i0n>P0n;}
,'k0F':function(m0F,y0F){return m0F==y0F;}
,'v6V':function(T6V,f6V){return T6V==f6V;}
,'g6V':function(d6V,t6V){return d6V<t6V;}
,'C7x':function(q7x,Z7x){return q7x-Z7x;}
,'Y5n':function(X5n,L5n,l5n,U5n){return X5n-L5n+l5n+U5n;}
,'p94':function(D94,Q94){return D94==Q94;}
,'x84':function(J84,u84){return J84==u84;}
,'m1F':function(y1F,e1F){return y1F-e1F;}
,'T0f':function(f0f,g0f){return f0f-g0f;}
,'O81':function(r81,S81){return r81===S81;}
,'K41':function(G41,x41){return G41<x41;}
,'Q9':function(E9,M9){return E9!=M9;}
,'q0N':function(Z0N,i0N){return Z0N===i0N;}
,'h4n':function(Y4n,X4n){return Y4n<=X4n;}
,'z0V':function(B0V,R0V){return B0V==R0V;}
,'K3':function(G3,x3){return G3==x3;}
,'G3x':function(x3x,J3x){return x3x>J3x;}
,'W14':function(z14,B14){return z14/B14;}
,'C4N':function(q4N,Z4N){return q4N*Z4N;}
,'T9F':function(f9F,g9F){return f9F==g9F;}
,'N0F':function(b0F,w0F){return b0F<=w0F;}
,'X9y':function(L9y,l9y){return L9y==l9y;}
,'l4x':function(U4x,K3x){return U4x-K3x;}
,'p1N':function(D1N,Q1N){return D1N/Q1N;}
,'Y0L':function(X0L,L0L){return X0L<=L0L;}
,'O0f':function(r0f,S0f){return r0f!=S0f;}
,'n6':function(h6,Y6){return h6-Y6;}
,'l2X':function(U2X,K5X){return U2X/K5X;}
,'S3':function(k3,m3){return k3==m3;}
,'e2L':function(A2L,v2L){return A2L===v2L;}
,'w1V':function(a1V,c1V){return a1V-c1V;}
,'w21':function(a21,c21){return a21==c21;}
,'M4n':function(I4n,s4n){return I4n*s4n;}
,'y3L':function(e3L,A3L){return e3L===A3L;}
,'L01':function(l01,U01){return l01>U01;}
,'z9X':function(B9X,R9X){return B9X==R9X;}
,'x51':function(J51,u51){return J51==u51;}
,'A9':function(v9,T9){return v9!=T9;}
,'b9V':function(w9V,a9V){return w9V==a9V;}
,'L4':function(l4,U4){return l4==U4;}
,'N7N':function(b7N,w7N){return b7N<w7N;}
,'m3n':function(y3n,e3n){return y3n!==e3n;}
,'M1f':function(I1f,s1f){return I1f===s1f;}
,'w9X':function(a9X,c9X){return a9X-c9X;}
,'k01':function(m01,y01){return m01-y01;}
,'l7f':function(U7f,K1f){return U7f==K1f;}
,'H51':function(p51,D51){return p51==D51;}
,'j7F':function(V7F,C7F){return V7F<C7F;}
,'P9X':function(F9X,H9X){return F9X-H9X;}
,'q9f':function(Z9f,i9f){return Z9f===i9f;}
,'N7V':function(b7V,w7V){return b7V>w7V;}
,'j0':function(V0,C0){return V0!=C0;}
,'G5L':function(x5L,J5L){return x5L===J5L;}
,'X91':function(L91,l91){return L91<l91;}
,'d0f':function(t0f,n0f){return t0f!==n0f;}
,'b8V':function(w8V,a8V){return w8V*a8V;}
,'t9n':function(n9n,h9n){return n9n-h9n;}
,'n8X':function(h8X,Y8X){return h8X==Y8X;}
,'R9N':function(j9N,V9N){return j9N<V9N;}
,'d1f':function(t1f,n1f){return t1f===n1f;}
,'J8y':function(u8y,W8y){return u8y<W8y;}
,'G2n':function(x2n,J2n){return x2n*J2n;}
,'T5L':function(f5L,g5L){return f5L/g5L;}
,'C31':function(q31,Z31){return q31>=Z31;}
,'C2N':function(q2N,Z2N){return q2N-Z2N;}
,'D1X':function(Q1X,E1X){return Q1X!==E1X;}
,'c7f':function(o7f,O7f){return o7f===O7f;}
,'K6n':function(G6n,x6n){return G6n-x6n;}
,'B64':function(R64,j64){return R64==j64;}
,'Z64':function(i64,P64){return i64==P64;}
,'x8N':function(J8N,u8N){return J8N!=u8N;}
,'N1Q':16,'U8x':function(K2x,G2x){return K2x<G2x;}
,'y9x':function(e9x,A9x){return e9x<=A9x;}
,'b8f':function(w8f,a8f){return w8f<a8f;}
,'n8y':function(h8y,Y8y){return h8y>Y8y;}
,'x31':function(J31,u31){return J31==u31;}
,'C2V':function(q2V,Z2V){return q2V-Z2V;}
,'B3N':function(R3N,j3N){return R3N>j3N;}
,'u8F':function(W8F,z8F){return W8F!=z8F;}
,'V4L':function(C4L,q4L){return C4L-q4L;}
,'A74':function(v74,T74,f74){return v74-T74-f74;}
,'Y3F':function(X3F,L3F){return X3F==L3F;}
,'Q8f':function(E8f,M8f){return E8f-M8f;}
,'w1N':function(a1N,c1N){return a1N==c1N;}
,'c7y':function(o7y,O7y){return o7y>=O7y;}
,'Z1y':function(i1y,P1y){return i1y<P1y;}
,'d5x':function(t5x,n5x){return t5x<n5x;}
,'v4X':function(T4X,f4X){return T4X-f4X;}
,'J0V':function(u0V,W0V){return u0V<W0V;}
,'U3L':function(K0L,G0L){return K0L==G0L;}
,'c11':function(o11,O11){return o11>=O11;}
,'R8V':function(j8V,V8V){return j8V==V8V;}
,'b5N':function(w5N,a5N){return w5N-a5N;}
,'G0F':function(x0F,J0F){return x0F-J0F;}
,'o9X':function(O9X,r9X){return O9X-r9X;}
,'Z0y':function(i0y,P0y){return i0y-P0y;}
,'Q4V':function(E4V,M4V){return E4V<M4V;}
,'K6X':function(G6X,x6X){return G6X>=x6X;}
,'A7X':function(v7X,T7X){return v7X>=T7X;}
,'c4N':function(o4N,O4N){return o4N<O4N;}
,'D2f':function(Q2f,E2f){return Q2f-E2f;}
,'E9x':function(M9x,I9x){return M9x>I9x;}
,'a3N':function(c3N,o3N){return c3N===o3N;}
,'p9F':function(D9F,Q9F){return D9F>=Q9F;}
,'v7F':function(T7F,f7F){return T7F-f7F;}
,'A3F':function(v3F,T3F){return v3F==T3F;}
,'w5y':function(a5y,c5y){return a5y-c5y;}
,'u7N':function(W7N,z7N){return W7N<z7N;}
,'m8f':function(y8f,e8f){return y8f*e8f;}
,'Y51':function(X51,L51){return X51==L51;}
,'L9L':function(l9L,U9L){return l9L|U9L;}
,'p7F':function(D7F,Q7F){return D7F===Q7F;}
,'S7F':function(k7F,m7F){return k7F-m7F;}
,'Z9L':function(i9L,P9L){return i9L==P9L;}
,'Z3x':function(i3x,P3x){return i3x<P3x;}
,'G4n':function(x4n,J4n){return x4n<=J4n;}
,'l3n':function(U3n,K0n){return U3n*K0n;}
,'c3F':function(o3F,O3F){return o3F==O3F;}
,'g5n':function(d5n,t5n,n5n,h5n){return d5n-t5n+n5n+h5n;}
,'p44':function(D44,Q44){return D44<=Q44;}
,'b5F':function(w5F,a5F){return w5F<=a5F;}
,'f5F':function(g5F,d5F){return g5F-d5F;}
,'Y9N':function(X9N,L9N){return X9N<=L9N;}
,'r5F':function(S5F,k5F){return S5F*k5F;}
,'w41':function(a41,c41){return a41==c41;}
,'H2V':function(p2V,D2V){return p2V===D2V;}
,'X9f':function(L9f,l9f){return L9f<l9f;}
,'J7L':function(u7L,W7L){return u7L!=W7L;}
,'E4f':function(M4f,I4f){return M4f-I4f;}
,'V6N':function(C6N,q6N){return C6N===q6N;}
,'M5V':function(I5V,s5V){return I5V<s5V;}
,'x2x':function(J2x,u2x){return J2x===u2x;}
,'H7X':function(p7X,D7X){return p7X*D7X;}
,'Q7x':function(E7x,M7x){return E7x>M7x;}
,'j0N':function(V0N,C0N){return V0N===C0N;}
,'r8f':function(S8f,k8f){return S8f/k8f;}
,'n4y':function(h4y,Y4y){return h4y>Y4y;}
,'N01':function(b01,w01){return b01<w01;}
,'J9y':function(u9y,W9y){return u9y<W9y;}
,'M01':function(I01,s01){return I01-s01;}
,'G61':function(x61,J61){return x61===J61;}
,'e0F':function(A0F,v0F){return A0F/v0F;}
,'P8x':function(F8x,H8x){return F8x>H8x;}
,'V7N':function(C7N,q7N){return C7N<q7N;}
,'a6x':function(c6x,o6x){return c6x!=o6x;}
,'H9N':function(p9N,D9N){return p9N<=D9N;}
,'k1X':function(m1X,y1X){return m1X-y1X;}
,'R2x':function(j2x,V2x){return j2x===V2x;}
,'i9':function(P9,F9){return P9==F9;}
,'n8V':function(h8V,Y8V){return h8V===Y8V;}
,'a4n':function(c4n,o4n){return c4n-o4n;}
,'q4X':function(Z4X,i4X){return Z4X-i4X;}
,'U0V':function(K9V,G9V){return K9V<G9V;}
,'G0y':function(x0y,J0y){return x0y==J0y;}
,'K1N':function(G1N,x1N){return G1N==x1N;}
,'w71':function(a71,c71){return a71==c71;}
,'G1X':function(x1X,J1X){return x1X==J1X;}
,'n6X':function(h6X,Y6X){return h6X!=Y6X;}
,'V6L':function(C6L,q6L,Z6L){return C6L-q6L+Z6L;}
,'b2V':function(w2V,a2V){return w2V*a2V;}
,'m4N':function(y4N,e4N){return y4N*e4N;}
,'v8X':function(T8X,f8X){return T8X<f8X;}
,'Z8F':function(i8F,P8F){return i8F/P8F;}
,'e4L':function(A4L,v4L){return A4L/v4L;}
,'e01':function(A01,v01){return A01<v01;}
,'j1N':function(V1N,C1N){return V1N/C1N;}
,'Y2V':function(X2V,L2V){return X2V==L2V;}
,'a5V':function(c5V,o5V){return c5V/o5V;}
,'y91':function(e91,A91){return e91/A91;}
,'c4V':function(o4V,O4V){return o4V==O4V;}
,'r2V':function(S2V,k2V){return S2V-k2V;}
,'p6V':function(D6V,Q6V){return D6V/Q6V;}
,'h5x':function(Y5x,X5x){return Y5x<X5x;}
,'e1y':function(A1y,v1y){return A1y==v1y;}
,'k81':function(m81,y81){return m81==y81;}
,'u7n':function(W7n,z7n){return W7n>z7n;}
,'O6F':function(r6F,S6F){return r6F==S6F;}
,'N2n':function(b2n,w2n){return b2n<w2n;}
,'R31':function(j31,V31){return j31<=V31;}
,'j41':function(V41,C41){return V41-C41;}
,'H2x':function(p2x,D2x){return p2x<D2x;}
,'o4X':function(O4X,r4X){return O4X!==r4X;}
,'x4x':function(J4x,u4x){return J4x>=u4x;}
,'Q7y':function(E7y,M7y){return E7y-M7y;}
,'A2N':function(v2N,T2N){return v2N-T2N;}
,'v3L':function(T3L,f3L){return T3L===f3L;}
,'m7y':function(y7y,e7y){return y7y>e7y;}
,'a0y':function(c0y,o0y){return c0y==o0y;}
,'o4f':function(O4f,r4f){return O4f===r4f;}
,'C14':function(q14,Z14){return q14*Z14;}
,'h1y':function(Y1y,X1y){return Y1y<X1y;}
,'D5L':function(Q5L,E5L){return Q5L==E5L;}
,'G1x':function(x1x,J1x){return x1x<J1x;}
,'a3V':function(c3V,o3V){return c3V*o3V;}
,'g3x':function(d3x,t3x){return d3x/t3x;}
,'m74':function(y74,e74){return y74!=e74;}
,'t2X':function(n2X,h2X){return n2X/h2X;}
,'n7F':function(h7F,Y7F){return h7F<Y7F;}
,'r9N':function(S9N,k9N){return S9N>k9N;}
,'S4f':function(k4f,m4f){return k4f-m4f;}
,'Y24':function(X24,L24){return X24*L24;}
,'t1n':function(n1n,h1n){return n1n/h1n;}
,'J4y':function(u4y,W4y){return u4y===W4y;}
,'U6':function(K4V,G4V){return K4V==G4V;}
,'D6n':function(Q6n,E6n){return Q6n-E6n;}
,'d0y':function(t0y,n0y){return t0y-n0y;}
,'O5L':function(r5L,S5L){return r5L>S5L;}
,'e6x':function(A6x,v6x){return A6x<=v6x;}
,'A2V':function(v2V,T2V){return v2V<T2V;}
,'j9F':function(V9F,C9F){return V9F*C9F;}
,'l8f':function(U8f,K2f){return U8f==K2f;}
,'B2':function(R2,j2){return R2<j2;}
,'H1n':function(p1n,D1n){return p1n<D1n;}
,'V01':function(C01,q01){return C01*q01;}
,'i34':function(P34,F34){return P34>F34;}
,'F04':function(H04,p04){return H04<p04;}
,'b3y':function(w3y,a3y){return w3y*a3y;}
,'t5F':function(n5F,h5F){return n5F<h5F;}
,'x9N':function(J9N,u9N){return J9N<u9N;}
,'M3V':function(I3V,s3V){return I3V/s3V;}
,'T0y':function(f0y,g0y){return f0y==g0y;}
,'q6':function(Z6,i6){return Z6==i6;}
,'A4V':function(v4V,T4V){return v4V/T4V;}
,'G81':function(x81,J81){return x81<J81;}
,'J7F':function(u7F,W7F){return u7F<W7F;}
,'e9L':function(A9L,v9L){return A9L|v9L;}
,'n1':function(h1,Y1){return h1==Y1;}
,'O1X':function(r1X,S1X){return r1X-S1X;}
,'p0':function(D0,Q0){return D0===Q0;}
,'l0L':function(U0L,K9L){return U0L==K9L;}
,'a4L':function(c4L,o4L){return c4L<o4L;}
,'b0x':function(w0x,a0x){return w0x-a0x;}
,'c51':function(o51,O51){return o51==O51;}
,'y8X':function(e8X,A8X){return e8X/A8X;}
,'B2f':function(R2f,j2f){return R2f==j2f;}
,'r3F':function(S3F,k3F){return S3F==k3F;}
,'s2F':function(N2F,b2F){return N2F<b2F;}
,'K2L':function(G2L,x2L){return G2L<x2L;}
,'Q6f':function(E6f,M6f){return E6f/M6f;}
,'v3':function(T3,f3){return T3-f3;}
,'r31':function(S31,k31){return S31!==k31;}
,'d0X':function(t0X,n0X){return t0X<n0X;}
,'E44':function(M44,I44){return M44>I44;}
,'p9f':function(D9f,Q9f){return D9f<Q9f;}
,'q41':function(Z41,i41){return Z41-i41;}
,'C54':function(q54,Z54){return q54==Z54;}
,'O4n':function(r4n,S4n){return r4n<S4n;}
,'h0f':function(Y0f,X0f){return Y0f!==X0f;}
,'I14':function(s14,N14){return s14/N14;}
,'u4n':function(W4n,z4n){return W4n&z4n;}
,'T3N':function(f3N,g3N){return f3N===g3N;}
,'X71':function(L71,l71){return L71==l71;}
,'U14':function(K84,G84){return K84*G84;}
,'H8f':function(p8f,D8f){return p8f===D8f;}
,'K1V':function(G1V,x1V){return G1V<x1V;}
,'Y31':function(X31,L31){return X31<L31;}
,'C3y':function(q3y,Z3y){return q3y==Z3y;}
,'t34':function(n34,h34){return n34-h34;}
,'u61':function(W61,z61){return W61==z61;}
,'O9L':function(r9L,S9L){return r9L==S9L;}
,'E9X':function(M9X,I9X){return M9X-I9X;}
,'h2f':function(Y2f,X2f){return Y2f>=X2f;}
,'o8X':function(O8X,r8X){return O8X/r8X;}
,'W11':function(z11,B11){return z11<B11;}
,'m6L':function(y6L,e6L){return y6L<e6L;}
,'G2f':function(x2f,J2f){return x2f>J2f;}
,'Z6F':function(i6F,P6F){return i6F>P6F;}
,'p4X':function(D4X,Q4X){return D4X<Q4X;}
,'Y1F':function(X1F,L1F){return X1F<L1F;}
,'j6x':function(V6x,C6x){return V6x===C6x;}
,'O5V':function(r5V,S5V){return r5V!=S5V;}
,'R74':function(j74,V74){return j74==V74;}
,'S41':function(k41,m41){return k41/m41;}
,'c7':function(o7,O7){return o7/O7;}
,'r3y':function(S3y,k3y){return S3y==k3y;}
,'I34':function(s34,N34){return s34*N34;}
,'K7L':function(G7L,x7L){return G7L==x7L;}
,'O6n':function(r6n,S6n,k6n,m6n){return r6n-S6n+k6n-m6n;}
,'H3f':function(p3f,D3f){return p3f>D3f;}
,'r3f':function(S3f,k3f){return S3f-k3f;}
,'t6y':function(n6y,h6y){return n6y<h6y;}
,'D1f':function(Q1f,E1f){return Q1f-E1f;}
,'h1L':function(Y1L,X1L){return Y1L/X1L;}
,'S6':function(k6,m6){return k6===m6;}
,'G3N':function(x3N,J3N){return x3N*J3N;}
,'A9n':function(v9n,T9n){return v9n*T9n;}
,'y6X':function(e6X,A6X){return e6X<A6X;}
,'X4y':function(L4y,l4y){return L4y<l4y;}
,'L5':function(l5,U5){return l5==U5;}
,'l8n':function(U8n,K2n){return U8n>K2n;}
,'W8':function(z8,B8){return z8*B8;}
,'m5F':function(y5F,e5F){return y5F*e5F;}
,'o84':function(O84,r84){return O84/r84;}
,'j6X':function(V6X,C6X){return V6X<C6X;}
,'E2F':function(M2F,I2F){return M2F!=I2F;}
,'b8N':function(w8N,a8N){return w8N-a8N;}
,'X0N':function(L0N,l0N){return L0N===l0N;}
,'s1N':function(N1N,b1N){return N1N/b1N;}
,'q4y':function(Z4y,i4y){return Z4y>i4y;}
,'I4x':function(s4x,N4x){return s4x-N4x;}
,'f7x':function(g7x,d7x){return g7x<=d7x;}
,'J6n':function(u6n,W6n,z6n){return u6n-W6n+z6n;}
,'K8L':function(G8L,x8L){return G8L-x8L;}
,'j2F':function(V2F,C2F){return V2F==C2F;}
,'H8N':function(p8N,D8N){return p8N==D8N;}
,'W51':function(z51,B51){return z51==B51;}
,'I1n':function(s1n,N1n){return s1n-N1n;}
,'b11':function(w11,a11){return w11-a11;}
,'N3x':function(b3x,w3x){return b3x/w3x;}
,'l1F':function(U1F,K8F){return U1F-K8F;}
,'y3x':function(e3x,A3x){return e3x/A3x;}
,'r0L':function(S0L,k0L){return S0L<k0L;}
,'m3F':function(y3F,e3F){return y3F==e3F;}
,'v44':function(T44,f44){return T44!=f44;}
,'s9y':function(N9y,b9y){return N9y*b9y;}
,'K2':function(G2,J2){return G2<J2;}
,'Z1x':function(i1x,P1x){return i1x!=P1x;}
,'J6x':function(u6x,W6x){return u6x*W6x;}
,'p9X':function(D9X,Q9X){return D9X-Q9X;}
,'y6V':function(e6V,A6V){return e6V==A6V;}
,'O5X':function(r5X,S5X){return r5X==S5X;}
,'U0n':function(K9n,G9n){return K9n/G9n;}
,'t3n':function(n3n,h3n){return n3n>h3n;}
,'f7':function(g7,d7){return g7*d7;}
,'e61':function(A61,v61){return A61*v61;}
,'p8x':function(D8x,Q8x){return D8x<Q8x;}
,'m6f':function(y6f,e6f){return y6f==e6f;}
,'s6':function(N6,b6){return N6-b6;}
,'l34':function(U34,K04){return U34/K04;}
,'G4N':function(x4N,J4N){return x4N<J4N;}
,'K8y':function(G8y,x8y){return G8y==x8y;}
,'F1x':function(H1x,p1x){return H1x!=p1x;}
,'L4L':function(l4L,U4L){return l4L in U4L;}
,'P7L':function(F7L,H7L){return F7L==H7L;}
,'i8V':function(P8V,F8V){return P8V!=F8V;}
,'R2V':function(j2V,V2V){return j2V<=V2V;}
,'J91':function(u91,W91){return u91==W91;}
,'i1F':function(P1F,F1F){return P1F==F1F;}
,'d7N':function(t7N,n7N){return t7N>n7N;}
,'t9V':function(n9V,h9V){return n9V==h9V;}
,'Z1L':function(i1L,P1L){return i1L==P1L;}
,'r9n':function(S9n,k9n){return S9n<k9n;}
,'S8x':function(k8x,m8x){return k8x/m8x;}
,'C7y':function(q7y,Z7y){return q7y>Z7y;}
,'N0y':function(b0y,w0y){return b0y-w0y;}
,'Q3F':function(E3F,M3F){return E3F<M3F;}
,'N2y':function(b2y,w2y){return b2y<w2y;}
,'T7V':function(f7V,g7V){return f7V==g7V;}
,'O1L':function(r1L,S1L){return r1L>S1L;}
,'a7V':function(c7V,o7V){return c7V==o7V;}
,'z91':function(B91,R91){return B91==R91;}
,'q6x':function(Z6x,i6x){return Z6x!==i6x;}
,'z8L':function(B8L,R8L){return B8L-R8L;}
,'N6F':function(b6F,w6F){return b6F/w6F;}
,'r6y':function(S6y,k6y){return S6y/k6y;}
,'a5x':function(c5x,o5x){return c5x==o5x;}
,'v94':function(T94,f94){return T94<f94;}
,'V5x':function(C5x,q5x){return C5x==q5x;}
,'X74':function(L74,l74){return L74!=l74;}
,'p71':function(D71,Q71){return D71>Q71;}
,'N5f':function(b5f,w5f){return b5f/w5f;}
,'J2F':function(u2F,W2F){return u2F<W2F;}
,'h3N':function(Y3N,X3N){return Y3N===X3N;}
,'y44':function(e44,A44){return e44>A44;}
,'f3y':function(g3y,d3y){return g3y<d3y;}
,'y41':function(e41,A41){return e41<A41;}
,'i3F':function(P3F,F3F){return P3F==F3F;}
,'z8y':function(B8y,R8y){return B8y-R8y;}
,'M2n':function(I2n,s2n){return I2n>s2n;}
,'i9N':function(P9N,F9N){return P9N>=F9N;}
,'D3x':function(Q3x,E3x){return Q3x-E3x;}
,'j7L':function(V7L,C7L){return V7L>C7L;}
,'j8x':function(V8x,C8x){return V8x/C8x;}
,'a2n':function(c2n,o2n){return c2n===o2n;}
,'b7X':function(w7X,a7X){return w7X==a7X;}
,'m31':function(y31,e31){return y31==e31;}
,'b2x':function(w2x,a2x){return w2x<a2x;}
,'K9X':function(G9X,x9X){return G9X==x9X;}
,'f24':function(g24,d24){return g24<d24;}
,'m3y':function(y3y,e3y){return y3y===e3y;}
,'Q31':function(E31,M31){return E31<=M31;}
,'c8N':function(o8N,O8N){return o8N==O8N;}
,'J9F':function(u9F,W9F){return u9F-W9F;}
,'X8x':function(L8x,l8x){return L8x==l8x;}
,'f4x':function(g4x,d4x){return g4x>d4x;}
,'u5':function(W5,z5){return W5*z5;}
,'Q3X':function(E3X,M3X){return E3X-M3X;}
,'r4N':function(S4N,k4N){return S4N/k4N;}
,'V81':function(C81,q81){return C81<q81;}
,'f1n':function(g1n,d1n){return g1n==d1n;}
,'K8x':function(G8x,x8x){return G8x<x8x;}
,'l24':function(U24,K54){return U24-K54;}
,'C34':function(q34,Z34){return q34/Z34;}
,'P7F':function(F7F,H7F){return F7F<H7F;}
,'J5y':function(u5y,W5y){return u5y<=W5y;}
,'n8N':function(h8N,Y8N){return h8N-Y8N;}
,'o6V':function(O6V,r6V){return O6V===r6V;}
,'u0F':function(W0F,z0F){return W0F/z0F;}
,'X7F':function(L7F,l7F){return L7F==l7F;}
,'u9L':function(W9L,z9L){return W9L==z9L;}
,'V2f':function(C2f,q2f){return C2f>q2f;}
,'Q0L':function(E0L,M0L){return E0L>M0L;}
,'M5X':function(I5X,s5X){return I5X<s5X;}
,'M0X':function(I0X,s0X){return I0X==s0X;}
,'d2L':function(t2L,n2L){return t2L*n2L;}
,'k04':function(m04,y04){return m04>=y04;}
,'O3N':function(r3N,S3N){return r3N*S3N;}
,'N5L':function(b5L,w5L){return b5L*w5L;}
,'s94':function(N94,b94){return N94!=b94;}
,'Q0x':function(E0x,M0x){return E0x<M0x;}
,'l7y':function(U7y,K1y){return U7y>=K1y;}
,'w44':function(a44,c44){return a44-c44;}
,'n0N':function(h0N,Y0N){return h0N<Y0N;}
,'e5f':function(A5f,v5f){return A5f-v5f;}
,'p8L':function(D8L,Q8L){return D8L>Q8L;}
,'A7x':function(v7x,T7x){return v7x===T7x;}
,'x14':function(J14,u14){return J14/u14;}
,'M5x':function(I5x,s5x){return I5x-s5x;}
,'Y46':function(X46,L46){return X46<L46;}
,'R9n':function(j9n,V9n){return j9n&V9n;}
,'U7L':function(K1L,G1L){return K1L*G1L;}
,'c0L':function(o0L,O0L){return o0L>=O0L;}
,'J4X':function(u4X,W4X){return u4X-W4X;}
,'N6x':function(b6x,w6x){return b6x!==w6x;}
,'G64':function(x64,J64){return x64==J64;}
,'n1V':function(h1V,Y1V){return h1V==Y1V;}
,'z9f':function(B9f,R9f){return B9f<R9f;}
,'C5n':function(q5n,Z5n){return q5n>Z5n;}
,'R6y':function(j6y,V6y){return j6y==V6y;}
,'s4f':function(N4f,b4f){return N4f==b4f;}
,'g71':function(d71,t71){return d71==t71;}
,'T1':function(f1,g1){return f1==g1;}
,'r11':function(S11,k11){return S11<=k11;}
,'T4L':function(f4L,g4L){return f4L in g4L;}
,'L4n':function(l4n,U4n){return l4n-U4n;}
,'V2':function(C2,q2){return C2/q2;}
,'b54':function(w54,a54){return w54<a54;}
,'B1y':function(R1y,j1y){return R1y>=j1y;}
,'L8F':function(l8F,U8F){return l8F<U8F;}
,'F61':function(H61,p61){return H61>p61;}
,'W2x':function(z2x,B2x){return z2x<B2x;}
,'j9y':function(V9y,C9y){return V9y>C9y;}
,'o4F':function(O4F,r4F){return O4F<r4F;}
,'v1V':function(T1V,f1V){return T1V<f1V;}
,'z21':function(B21,R21){return B21!==R21;}
,'P8L':function(F8L,H8L){return F8L<H8L;}
,'k2L':function(m2L,y2L){return m2L<y2L;}
,'i8':function(P8,F8){return P8<F8;}
,'D0y':function(Q0y,E0y){return Q0y<E0y;}
,'O6x':function(r6x,S6x){return r6x!=S6x;}
,'a9F':function(c9F,o9F){return c9F<o9F;}
,'C9n':function(q9n,Z9n){return q9n<=Z9n;}
,'g0N':function(d0N,t0N){return d0N>t0N;}
,'R7x':function(j7x,V7x){return j7x==V7x;}
,'X44':function(L44,l44){return L44==l44;}
,'l5N':function(U5N,K6N){return U5N===K6N;}
,'B7V':function(R7V,j7V){return R7V==j7V;}
,'Y2N':function(X2N,L2N){return X2N==L2N;}
,'U0':function(K9,G9){return K9<G9;}
,'I8f':function(s8f,N8f){return s8f-N8f;}
,'B0f':function(R0f,j0f){return R0f>=j0f;}
,'y2F':function(e2F,A2F){return e2F==A2F;}
,'L1x':function(l1x,U1x){return l1x/U1x;}
,'X8V':function(L8V,l8V){return L8V-l8V;}
,'p5y':function(D5y,Q5y){return D5y*Q5y;}
,'m7x':function(y7x,e7x){return y7x===e7x;}
,'H8V':function(p8V,D8V){return p8V-D8V;}
,'v8y':function(T8y,f8y){return T8y!==f8y;}
,'W46':function(z46,B46){return z46>=B46;}
,'I4N':function(s4N,N4N){return s4N<N4N;}
,'D1y':function(Q1y,E1y){return Q1y!==E1y;}
,'n3x':function(h3x,Y3x){return h3x<Y3x;}
,'o9x':function(O9x,r9x){return O9x==r9x;}
,'a9L':function(c9L,o9L){return c9L==o9L;}
,'a4':function(c4,o4){return c4<o4;}
,'R2y':function(j2y,V2y){return j2y/V2y;}
,'t2x':function(n2x,h2x){return n2x<=h2x;}
,'H4V':function(p4V,D4V){return p4V<D4V;}
,'r0x':function(S0x,k0x){return S0x<k0x;}
,'l4V':function(U4V,K3V){return U4V<K3V;}
,'b0L':function(w0L,a0L){return w0L<a0L;}
,'M8F':function(I8F,s8F){return I8F==s8F;}
,'C5F':function(q5F,Z5F){return q5F==Z5F;}
,'u6F':function(W6F,z6F){return W6F>z6F;}
,'n9y':function(h9y,Y9y){return h9y==Y9y;}
,'S4F':function(k4F,m4F){return k4F in m4F;}
,'f46':function(g46,d46){return g46-d46;}
,'u3V':function(W3V,z3V){return W3V<z3V;}
,'U9f':function(K7f,G7f){return K7f/G7f;}
,'n6n':function(h6n,Y6n){return h6n&Y6n;}
,'q4F':function(Z4F,i4F){return Z4F-i4F;}
,'j84':function(V84,C84){return V84/C84;}
,'T81':function(f81,g81){return f81>=g81;}
,'p8X':function(D8X,Q8X){return D8X!=Q8X;}
,'f3n':function(g3n,d3n){return g3n<d3n;}
,'M4':function(I4,s4){return I4<s4;}
,'G4':function(x4,J4){return x4==J4;}
,'W1n':function(z1n,B1n){return z1n>B1n;}
,'X7n':function(L7n,l7n){return L7n/l7n;}
,'P3':function(F3,H3){return F3==H3;}
,'l46':function(U46,K36){return U46===K36;}
,'i46':function(P46,F46){return P46>=F46;}
,'p6x':function(D6x,Q6x,E6x){return D6x-Q6x-E6x;}
,'U7n':function(K1n,G1n){return K1n/G1n;}
,'k2f':function(m2f,y2f){return m2f==y2f;}
,'J3L':function(u3L,W3L){return u3L*W3L;}
,'m5n':function(y5n,e5n,A5n){return y5n-e5n+A5n;}
,'Y3y':function(X3y,L3y){return X3y==L3y;}
,'c8f':function(o8f,O8f){return o8f>=O8f;}
,'h8L':function(Y8L,X8L){return Y8L<X8L;}
,'X9X':function(L9X,l9X){return L9X==l9X;}
,'v9y':function(T9y,f9y){return T9y===f9y;}
,'C7':function(q7,Z7){return q7/Z7;}
,'X6V':function(L6V,l6V){return L6V-l6V;}
,'D3V':function(Q3V,E3V){return Q3V-E3V;}
,'T9L':function(f9L,g9L){return f9L|g9L;}
,'B4':function(R4,j4){return R4==j4;}
,'A2X':function(v2X,T2X){return v2X/T2X;}
,'u3N':function(W3N,z3N){return W3N>z3N;}
,'o7L':function(O7L,r7L){return O7L>r7L;}
,'E4F':function(M4F,I4F){return M4F>I4F;}
,'K3n':function(G3n,x3n){return G3n-x3n;}
,'u0y':function(W0y,z0y){return W0y*z0y;}
,'n9x':function(h9x,Y9x){return h9x-Y9x;}
,'S9f':function(k9f,m9f){return k9f-m9f;}
,'D0F':function(Q0F,E0F){return Q0F>E0F;}
,'R7f':function(j7f,V7f){return j7f*V7f;}
,'v7L':function(T7L,f7L){return T7L!==f7L;}
,'G4L':function(x4L,J4L){return x4L-J4L;}
,'A6y':function(v6y,T6y){return v6y-T6y;}
,'j3L':function(V3L,C3L){return V3L!==C3L;}
,'v4y':function(T4y,f4y){return T4y!==f4y;}
,'v9x':function(T9x,f9x){return T9x>f9x;}
,'Y2':function(X2,L2){return X2!==L2;}
,'u5X':function(W5X,z5X){return W5X>=z5X;}
,'W31':function(z31,B31){return z31>=B31;}
,'x1F':function(J1F,u1F){return J1F<u1F;}
,'Q24':function(E24,M24,I24){return E24-M24+I24;}
,'D2n':function(Q2n,E2n){return Q2n>E2n;}
,'Q5N':function(E5N,M5N){return E5N<M5N;}
,'D01':function(Q01,E01){return Q01==E01;}
,'f3X':function(g3X,d3X){return g3X-d3X;}
,'P8n':function(F8n,H8n){return F8n in H8n;}
,'L1L':function(l1L,U1L){return l1L>U1L;}
,'i7y':function(P7y,F7y){return P7y<F7y;}
,'R54':function(j54,V54){return j54<=V54;}
,'E8y':function(M8y,I8y){return M8y==I8y;}
,'z0':function(B0,R0){return B0==R0;}
,'C6y':function(q6y,Z6y){return q6y==Z6y;}
,'Y1n':function(X1n,L1n){return X1n-L1n;}
,'U9x':function(K7x,G7x){return K7x==G7x;}
,'b1F':function(w1F,a1F){return w1F==a1F;}
,'D7N':function(Q7N,E7N){return Q7N<E7N;}
,'p3L':function(D3L,Q3L){return D3L==Q3L;}
,'u5N':function(W5N,z5N){return W5N-z5N;}
,'k61':function(m61,y61){return m61>y61;}
,'O7n':function(r7n,S7n){return r7n>=S7n;}
,'F4n':function(H4n,p4n){return H4n<p4n;}
,'J6':function(u6,W6){return u6===W6;}
,'X6':function(L6,l6){return L6<l6;}
,'O4':function(r4,S4){return r4==S4;}
,'q8y':function(Z8y,i8y){return Z8y<i8y;}
,'z9y':function(B9y,R9y){return B9y<R9y;}
,'Q3n':function(E3n,M3n){return E3n/M3n;}
,'t7x':function(n7x,h7x){return n7x*h7x;}
,'z71':function(B71,R71){return B71/R71;}
,'E9F':function(M9F,I9F){return M9F==I9F;}
,'P8y':function(F8y,H8y){return F8y==H8y;}
,'P71':function(F71,H71){return F71>=H71;}
,'d64':function(t64,n64){return t64==n64;}
,'U1V':function(K8V,G8V){return K8V==G8V;}
,'b3F':function(w3F,a3F){return w3F==a3F;}
,'m7':function(y7,e7){return y7/e7;}
,'V6F':function(C6F,q6F){return C6F<q6F;}
,'F01':function(H01,p01){return H01<=p01;}
,'n84':function(h84,Y84){return h84/Y84;}
,'k0n':function(m0n,y0n){return m0n-y0n;}
,'V8F':function(C8F,q8F){return C8F*q8F;}
,'v2F':function(T2F,f2F){return T2F-f2F;}
,'h5f':function(Y5f,X5f){return Y5f-X5f;}
,'g4X':function(d4X,t4X){return d4X==t4X;}
,'l51':function(U51,K61){return U51*K61;}
,'n0V':function(h0V,Y0V){return h0V-Y0V;}
,'g84':function(d84,t84){return d84<t84;}
,'A2x':function(v2x,T2x){return v2x<=T2x;}
,'l2x':function(U2x,K5x){return U2x<K5x;}
,'o06':2,'a1X':function(c1X,o1X){return c1X*o1X;}
,'X4X':function(L4X,l4X){return L4X==l4X;}
,'H7x':function(p7x,D7x){return p7x<D7x;}
,'k7V':function(m7V,y7V){return m7V==y7V;}
,'F5L':function(H5L,p5L){return H5L-p5L;}
,'p4y':function(D4y,Q4y){return D4y>Q4y;}
,'e5':function(A5,v5){return A5>v5;}
,'i4V':function(P4V,F4V){return P4V>=F4V;}
,'H14':function(p14,D14){return p14/D14;}
,'r4x':function(S4x,k4x){return S4x<k4x;}
,'I1F':function(s1F,N1F){return s1F-N1F;}
,'t3y':function(n3y,h3y){return n3y==h3y;}
,'s3L':function(N3L,b3L){return N3L==b3L;}
,'O0X':function(r0X,S0X){return r0X==S0X;}
,'Q1F':function(E1F,M1F){return E1F>M1F;}
,'s9f':function(N9f,b9f){return N9f<b9f;}
,'k5L':function(m5L,y5L){return m5L-y5L;}
,'D5':function(Q5,E5){return Q5/E5;}
,'O5x':function(r5x,S5x){return r5x==S5x;}
,'f34':function(g34,d34){return g34/d34;}
,'P6x':function(F6x,H6x){return F6x!=H6x;}
,'M2L':function(I2L,s2L){return I2L<s2L;}
,'R5F':function(j5F,V5F){return j5F===V5F;}
,'J3n':function(u3n,W3n){return u3n!=W3n;}
,'W9N':function(z9N,B9N){return z9N==B9N;}
,'T01':function(f01,g01){return f01-g01;}
,'Y4V':function(X4V,L4V){return X4V/L4V;}
,'p6X':function(D6X,Q6X){return D6X<Q6X;}
,'t9':function(n9,h9){return n9===h9;}
,'F6n':function(H6n,p6n){return H6n-p6n;}
,'y21':function(e21,A21){return e21-A21;}
,'x7x':function(J7x,u7x){return J7x===u7x;}
,'R7y':function(j7y,V7y){return j7y*V7y;}
,'D2L':function(Q2L,E2L){return Q2L-E2L;}
,'Y06':8,'L04':function(l04,U04){return l04!==U04;}
,'o1V':function(O1V,r1V){return O1V==r1V;}
,'Z04':function(i04,P04){return i04<=P04;}
,'m8N':function(y8N,e8N){return y8N==e8N;}
,'u54':function(W54,z54,B54){return W54*z54/B54;}
,'O9F':function(r9F,S9F){return r9F==S9F;}
,'b3n':function(w3n,a3n){return w3n/a3n;}
,'N6n':function(b6n,w6n){return b6n<=w6n;}
,'W7x':function(z7x,B7x){return z7x==B7x;}
,'Q5F':function(E5F,M5F){return E5F<=M5F;}
,'a06':3,'A5F':function(v5F,T5F){return v5F/T5F;}
,'z3L':function(B3L,R3L){return B3L in R3L;}
,'x3X':function(J3X,u3X){return J3X*u3X;}
,'R3X':function(j3X,V3X){return j3X<V3X;}
,'i8N':function(P8N,F8N){return P8N==F8N;}
,'H3X':function(p3X,D3X){return p3X<D3X;}
,'G3V':function(x3V,J3V){return x3V<J3V;}
,'T2n':function(f2n,g2n,d2n,t2n){return f2n-g2n+d2n-t2n;}
,'M0f':function(I0f,s0f){return I0f<s0f;}
,'j9X':function(V9X,C9X){return V9X==C9X;}
,'C9V':function(q9V,Z9V){return q9V<Z9V;}
,'J0':function(u0,W0){return u0==W0;}
,'d5L':function(t5L,n5L){return t5L-n5L;}
,'O8F':function(r8F,S8F){return r8F-S8F;}
,'k8L':function(m8L,y8L){return m8L<y8L;}
,'Y7f':function(X7f,L7f){return X7f<L7f;}
,'A7':function(v7,T7){return v7==T7;}
,'e1X':function(A1X,v1X){return A1X<v1X;}
,'j9x':function(V9x,C9x){return V9x/C9x;}
,'U1N':function(K8N,G8N){return K8N/G8N;}
,'a2L':function(c2L,o2L){return c2L==o2L;}
,'k6x':function(m6x,y6x){return m6x<y6x;}
,'Q51':function(E51,M51){return E51<M51;}
,'X41':function(L41,l41){return L41==l41;}
,'g21':function(d21,t21){return d21>t21;}
,'i7':function(P7,F7){return P7==F7;}
,'i2V':function(P2V,F2V){return P2V/F2V;}
,'x0L':function(J0L,u0L){return J0L==u0L;}
,'B0y':function(R0y,j0y){return R0y*j0y;}
,'B1x':function(R1x,j1x){return R1x<=j1x;}
,'j6':function(V6,C6){return V6==C6;}
,'A51':function(v51,T51){return v51-T51;}
,'M6F':function(I6F,s6F){return I6F===s6F;}
,'c9N':function(o9N,O9N){return o9N<O9N;}
,'A3n':function(v3n,T3n){return v3n==T3n;}
,'x46':function(J46,u46){return J46>u46;}
,'s4X':function(N4X,b4X){return N4X===b4X;}
,'N5x':function(b5x,w5x){return b5x>w5x;}
,'G0f':function(x0f,J0f){return x0f-J0f;}
,'X3x':function(L3x,l3x){return L3x>l3x;}
,'l1f':function(U1f,K8f){return U1f<=K8f;}
,'O1x':function(r1x,S1x){return r1x-S1x;}
,'s8n':function(N8n,b8n){return N8n>b8n;}
,'q8L':function(Z8L,i8L){return Z8L<i8L;}
,'W9n':function(z9n,B9n){return z9n>=B9n;}
,'i11':function(P11,F11){return P11>=F11;}
,'y6n':function(e6n,A6n){return e6n/A6n;}
,'t46':function(n46,h46){return n46>=h46;}
,'F1L':function(H1L,p1L){return H1L<p1L;}
,'W34':function(z34,B34){return z34<B34;}
,'I9':function(s9,N9){return s9*N9;}
,'o8x':function(O8x,r8x){return O8x>r8x;}
,'k4n':function(m4n,y4n){return m4n<y4n;}
,'q3n':function(Z3n,i3n,P3n,F3n){return Z3n-i3n+P3n-F3n;}
,'K6V':function(G6V,x6V){return G6V<x6V;}
,'L5x':function(l5x,U5x){return l5x-U5x;}
,'n9X':function(h9X,Y9X){return h9X==Y9X;}
,'C1F':function(q1F,Z1F){return q1F/Z1F;}
,'d61':function(t61,n61){return t61<n61;}
,'o8':function(O8,r8){return O8/r8;}
,'u3x':function(W3x,z3x){return W3x<z3x;}
,'n94':function(h94,Y94){return h94<Y94;}
,'X0n':function(L0n,l0n){return L0n/l0n;}
,'V1f':function(C1f,q1f){return C1f*q1f;}
,'E91':function(M91,I91){return M91==I91;}
,'g4f':function(d4f,t4f){return d4f===t4f;}
,'l4N':function(U4N,K3N){return U4N/K3N;}
,'g74':function(d74,t74){return d74-t74;}
,'j9f':function(V9f,C9f){return V9f<C9f;}
,'q8n':function(Z8n,i8n){return Z8n<=i8n;}
,'b3f':function(w3f,a3f){return w3f>=a3f;}
,'f5N':function(g5N,d5N){return g5N<d5N;}
,'l5L':function(U5L,K6L){return U5L-K6L;}
,'D0n':function(Q0n,E0n){return Q0n<=E0n;}
,'h2y':function(Y2y,X2y){return Y2y!==X2y;}
,'d2y':function(t2y,n2y){return t2y/n2y;}
,'w94':function(a94,c94){return a94<c94;}
,'y84':function(e84,A84){return e84>=A84;}
,'J4F':function(u4F,W4F){return u4F===W4F;}
,'x74':function(J74,u74){return J74>u74;}
,'a2f':function(c2f,o2f){return c2f!=o2f;}
,'R2X':function(j2X,V2X){return j2X===V2X;}
,'B0X':function(R0X,j0X){return R0X!=j0X;}
,'y4y':function(e4y,A4y){return e4y*A4y;}
,'J44':function(u44,W44){return u44>=W44;}
,'X8N':function(L8N,l8N){return L8N>l8N;}
,'J21':function(u21,W21){return u21 in W21;}
,'Q34':function(E34,M34){return E34*M34;}
,'N1y':function(b1y,w1y){return b1y-w1y;}
,'I3f':function(s3f,N3f){return s3f>N3f;}
,'Z4L':function(i4L,P4L){return i4L>=P4L;}
,'N1f':function(b1f,w1f){return b1f==w1f;}
,'B5L':function(R5L,j5L){return R5L-j5L;}
,'R8f':function(j8f,V8f){return j8f<V8f;}
,'C8f':function(q8f,Z8f){return q8f===Z8f;}
,'y3':function(e3,A3){return e3-A3;}
,'O7V':function(r7V,S7V){return r7V>S7V;}
,'A1F':function(v1F,T1F){return v1F<T1F;}
,'Q8N':function(E8N,M8N){return E8N-M8N;}
,'I2x':function(s2x,N2x){return s2x===N2x;}
,'I7X':function(s7X,N7X){return s7X==N7X;}
,'H5F':function(p5F,D5F){return p5F>=D5F;}
,'G7V':function(x7V,J7V){return x7V==J7V;}
,'v6X':function(T6X,f6X){return T6X==f6X;}
,'Q74':function(E74,M74){return E74<M74;}
,'J8X':function(u8X,W8X){return u8X<W8X;}
,'t1F':function(n1F,h1F){return n1F-h1F;}
,'x8':function(J8,u8){return J8==u8;}
,'a0f':function(c0f,o0f){return c0f<o0f;}
,'V5':function(C5,q5){return C5/q5;}
,'q6f':function(Z6f,i6f,P6f,F6f){return Z6f-i6f+P6f-F6f;}
,'C3F':function(q3F,Z3F){return q3F-Z3F;}
,'Z7V':function(i7V,P7V){return i7V<=P7V;}
,'g6n':function(d6n,t6n){return d6n<=t6n;}
,'S0N':function(k0N,m0N){return k0N<m0N;}
,'e6N':function(A6N,v6N){return A6N===v6N;}
,'A54':function(v54,T54){return v54/T54;}
,'Q1':function(E1,M1){return E1>=M1;}
,'g6':function(d6,t6){return d6-t6;}
,'S3L':function(k3L,m3L){return k3L*m3L;}
,'s21':function(N21,b21){return N21>b21;}
,'Z3N':function(i3N,P3N){return i3N<P3N;}
,'w4F':function(a4F,c4F){return a4F/c4F;}
,'o6':function(O6,r6){return O6/r6;}
,'d5X':function(t5X,n5X){return t5X>=n5X;}
,'X6n':function(L6n,l6n){return L6n<=l6n;}
,'j3n':function(V3n,C3n){return V3n/C3n;}
,'V6n':function(C6n,q6n){return C6n/q6n;}
,'d8F':function(t8F,n8F){return t8F<n8F;}
,'o8n':function(O8n,r8n){return O8n<=r8n;}
,'a1x':function(c1x,o1x){return c1x>o1x;}
,'S9x':function(k9x,m9x){return k9x!=m9x;}
,'C4V':function(q4V,Z4V){return q4V==Z4V;}
,'u8n':function(W8n,z8n){return W8n>=z8n;}
,'k7n':function(m7n,y7n){return m7n-y7n;}
,'y9X':function(e9X,A9X){return e9X-A9X;}
,'N8F':function(b8F,w8F){return b8F==w8F;}
,'h5':function(Y5,X5){return Y5>X5;}
,'m46':function(y46,e46){return y46!=e46;}
,'R4x':function(j4x,V4x){return j4x!=V4x;}
,'Y7':function(X7,L7){return X7/L7;}
,'A9V':function(v9V,T9V){return v9V==T9V;}
,'v0V':function(T0V,f0V){return T0V>f0V;}
,'F8F':function(H8F,p8F){return H8F-p8F;}
,'X7L':function(L7L,l7L){return L7L==l7L;}
,'e1x':function(A1x,v1x){return A1x>v1x;}
,'q3L':function(Z3L,i3L){return Z3L*i3L;}
,'j8X':function(V8X,C8X){return V8X<C8X;}
,'e1f':function(A1f,v1f){return A1f==v1f;}
,'E94':function(M94,I94){return M94!=I94;}
,'b4x':function(w4x,a4x){return w4x*a4x;}
,'B7n':function(R7n,j7n){return R7n>=j7n;}
,'A6f':function(v6f,T6f){return v6f&T6f;}
,'p2F':function(D2F,Q2F){return D2F===Q2F;}
,'D4L':function(Q4L,E4L){return Q4L-E4L;}
,'s8L':function(N8L,b8L,w8L){return N8L-b8L-w8L;}
,'i4x':function(P4x,F4x){return P4x>F4x;}
,'s9F':function(N9F,b9F,w9F){return N9F-b9F+w9F;}
,'P9x':function(F9x,H9x){return F9x!==H9x;}
,'r2x':function(S2x,k2x){return S2x<k2x;}
,'v4f':function(T4f,f4f){return T4f===f4f;}
,'M81':function(I81,s81){return I81==s81;}
,'q7F':function(Z7F,i7F){return Z7F===i7F;}
,'Y34':function(X34,L34){return X34!=L34;}
,'Q9V':function(E9V,M9V){return E9V<M9V;}
,'B7N':function(R7N,j7N){return R7N>=j7N;}
,'M5L':function(I5L,s5L){return I5L==s5L;}
,'S44':function(k44,m44){return k44===m44;}
,'b1n':function(w1n,a1n){return w1n>a1n;}
,'y6':function(e6,A6){return e6===A6;}
,'H6L':function(p6L,D6L){return p6L==D6L;}
,'F4L':function(H4L,p4L){return H4L<p4L;}
,'f51':function(g51,d51){return g51<d51;}
,'m2X':function(y2X,e2X){return y2X>=e2X;}
,'Y5N':function(X5N,L5N){return X5N<L5N;}
,'a8F':function(c8F,o8F){return c8F!=o8F;}
,'j0V':function(V0V,C0V){return V0V-C0V;}
,'K0N':function(G0N,x0N){return G0N==x0N;}
,'Y11':function(X11,L11){return X11===L11;}
,'A3y':function(v3y,T3y){return v3y===T3y;}
,'J6V':function(u6V,W6V){return u6V<W6V;}
,'W8V':function(z8V,B8V){return z8V==B8V;}
,'F9L':function(H9L,p9L){return H9L==p9L;}
,'d1L':function(t1L,n1L){return t1L>=n1L;}
,'s41':function(N41,b41){return N41<=b41;}
,'y8n':function(e8n,A8n){return e8n-A8n;}
,'i54':function(P54,F54){return P54*F54;}
,'F2n':function(H2n,p2n){return H2n!=p2n;}
,'s5y':function(N5y,b5y){return N5y!==b5y;}
,'B9L':function(R9L,j9L){return R9L==j9L;}
,'s0V':function(N0V,b0V){return N0V-b0V;}
,'r9V':function(S9V,k9V){return S9V==k9V;}
,'A3f':function(v3f,T3f){return v3f<T3f;}
,'d04':function(t04,n04){return t04<n04;}
,'n0n':function(h0n,Y0n){return h0n/Y0n;}
,'I4V':function(s4V,N4V){return s4V>N4V;}
,'s0N':function(N0N,b0N){return N0N==b0N;}
,'b5n':function(w5n,a5n){return w5n/a5n;}
,'m2V':function(y2V,e2V){return y2V/e2V;}
,'W8f':function(z8f,B8f){return z8f-B8f;}
,'N3V':function(b3V,w3V){return b3V*w3V;}
,'R1n':function(j1n,V1n){return j1n*V1n;}
,'V3V':function(C3V,q3V){return C3V<=q3V;}
,'j44':function(V44,C44){return V44>=C44;}
,'T8L':function(f8L,g8L){return f8L===g8L;}
,'C1n':function(q1n,Z1n){return q1n*Z1n;}
,'B5N':function(R5N,j5N,V5N,C5N,q5N){return R5N/j5N/V5N/C5N/q5N;}
,'H2X':function(p2X,D2X){return p2X/D2X;}
,'a5f':function(c5f,o5f){return c5f<o5f;}
,'I3y':function(s3y,N3y){return s3y==N3y;}
,'x11':function(J11,u11){return J11>u11;}
,'H7':function(p7,D7){return p7==D7;}
,'I5F':function(s5F,N5F){return s5F>=N5F;}
,'S9y':function(k9y,m9y){return k9y*m9y;}
,'w84':function(a84,c84){return a84-c84;}
,'Z6N':function(i6N,P6N){return i6N===P6N;}
,'h0X':function(Y0X,X0X){return Y0X==X0X;}
,'p4F':function(D4F,Q4F){return D4F>Q4F;}
,'V0y':function(C0y,q0y){return C0y<q0y;}
,'z6V':function(B6V,R6V){return B6V==R6V;}
,'R51':function(j51,V51){return j51==V51;}
,'h0F':function(Y0F,X0F){return Y0F==X0F;}
,'P6':function(F6,H6){return F6/H6;}
,'L8L':function(l8L,U8L){return l8L==U8L;}
,'X3':function(L3,l3){return L3==l3;}
,'V0f':function(C0f,q0f){return C0f<q0f;}
,'U3':function(K0,G0){return K0<G0;}
,'F2f':function(H2f,p2f){return H2f>p2f;}
,'i9V':function(P9V,F9V){return P9V<=F9V;}
,'E5y':function(M5y,I5y){return M5y-I5y;}
,'C3f':function(q3f,Z3f){return q3f/Z3f;}
,'T64':function(f64,g64){return f64-g64;}
,'M61':function(I61,s61){return I61>s61;}
,'Q2X':function(E2X,M2X){return E2X<M2X;}
,'j94':function(V94,C94){return V94-C94;}
,'t0L':function(n0L,h0L){return n0L<h0L;}
,'W7X':function(z7X,B7X){return z7X<B7X;}
,'z4y':function(B4y,R4y){return B4y<R4y;}
,'r7f':function(S7f,k7f){return S7f===k7f;}
,'I7y':function(s7y,N7y){return s7y!==N7y;}
,'g7n':function(d7n,t7n){return d7n<=t7n;}
,'N2f':function(b2f,w2f){return b2f===w2f;}
,'h4':function(Y4,X4){return Y4==X4;}
,'P84':function(F84,H84){return F84/H84;}
,'B1X':function(R1X,j1X){return R1X==j1X;}
,'R14':function(j14,V14){return j14>V14;}
,'V7V':function(C7V,q7V){return C7V!=q7V;}
,'i24':function(P24,F24){return P24>=F24;}
,'n2F':function(h2F,Y2F){return h2F*Y2F;}
,'c2N':function(o2N,O2N){return o2N==O2N;}
,'C4f':function(q4f,Z4f,i4f){return q4f-Z4f-i4f;}
,'T0F':function(f0F,g0F){return f0F*g0F;}
,'j4X':function(V4X,C4X){return V4X/C4X;}
,'c9':function(o9,O9){return o9<O9;}
,'K6x':function(G6x,x6x){return G6x/x6x;}
,'k1x':function(m1x,y1x){return m1x<=y1x;}
,'S8n':function(k8n,m8n){return k8n<=m8n;}
,'G5X':function(x5X,J5X){return x5X>=J5X;}
,'l1n':function(U1n,K8n){return U1n*K8n;}
,'m4x':function(y4x,e4x){return y4x<e4x;}
,'M1L':function(I1L,s1L){return I1L-s1L;}
,'u5x':function(W5x,z5x){return W5x<z5x;}
,'d3N':function(t3N,n3N){return t3N===n3N;}
,'k9L':function(m9L,y9L){return m9L|y9L;}
,'V5L':function(C5L,q5L){return C5L<q5L;}
,'X4f':function(L4f,l4f){return L4f===l4f;}
,'a3x':function(c3x,o3x,O3x,r3x){return c3x-o3x+O3x-r3x;}
,'q9y':function(Z9y,i9y){return Z9y>i9y;}
,'g4F':function(d4F,t4F){return d4F-t4F;}
,'w8x':function(a8x,c8x){return a8x<c8x;}
,'t6f':function(n6f,h6f){return n6f&h6f;}
,'H5N':function(p5N,D5N){return p5N/D5N;}
,'s8y':function(N8y,b8y){return N8y!==b8y;}
,'w6V':function(a6V,c6V){return a6V===c6V;}
,'f54':function(g54,d54){return g54<d54;}
,'h7N':function(Y7N,X7N){return Y7N-X7N;}
,'S1N':function(k1N,m1N){return k1N/m1N;}
,'A14':function(v14,T14){return v14-T14;}
,'e9F':function(A9F,v9F){return A9F==v9F;}
,'q91':function(Z91,i91){return Z91==i91;}
,'z9x':function(B9x,R9x){return B9x/R9x;}
,'n7L':function(h7L,Y7L){return h7L!=Y7L;}
,'V1y':function(C1y,q1y){return C1y<=q1y;}
,'P4F':function(F4F,H4F){return F4F<H4F;}
,'L6F':function(l6F,U6F){return l6F<U6F;}
,'F5x':function(H5x,p5x){return H5x==p5x;}
,'K9f':function(G9f,x9f){return G9f-x9f;}
,'E4X':function(M4X,I4X){return M4X==I4X;}
,'M3x':function(I3x,s3x){return I3x/s3x;}
,'d4n':function(t4n,n4n){return t4n>=n4n;}
,'F6F':function(H6F,p6F){return H6F>p6F;}
,'R1F':function(j1F,V1F){return j1F==V1F;}
,'n7n':function(h7n,Y7n){return h7n/Y7n;}
,'e81':function(A81,v81){return A81==v81;}
,'M7V':function(I7V,s7V){return I7V==s7V;}
,'r46':function(S46,k46){return S46!=k46;}
,'e2n':function(A2n,v2n){return A2n-v2n;}
,'S8':function(k8,m8){return k8<m8;}
,'F81':function(H81,p81){return H81==p81;}
,'y7F':function(e7F,A7F){return e7F>A7F;}
,'A11':function(v11,T11){return v11==T11;}
,'y4F':function(e4F,A4F){return e4F in A4F;}
,'X94':function(L94,l94){return L94!==l94;}
,'w9x':function(a9x,c9x){return a9x<=c9x;}
,'v5n':function(T5n,f5n){return T5n-f5n;}
,'f6y':function(g6y,d6y){return g6y>d6y;}
,'p91':function(D91,Q91){return D91==Q91;}
,'B01':function(R01,j01){return R01*j01;}
,'e0X':function(A0X,v0X){return A0X<v0X;}
,'f2N':function(g2N,d2N){return g2N==d2N;}
,'V4n':function(C4n,q4n){return C4n&q4n;}
,'i74':function(P74,F74){return P74-F74;}
,'W0L':function(z0L,B0L){return z0L<=B0L;}
,'I5n':function(s5n,N5n){return s5n/N5n;}
,'U44':function(K34,G34){return K34==G34;}
,'V2n':function(C2n,q2n){return C2n<q2n;}
,'t2N':function(n2N,h2N){return n2N-h2N;}
,'K6':function(G6,x6){return G6==x6;}
,'U84':function(K24,G24){return K24-G24;}
,'X0V':function(L0V,l0V){return L0V-l0V;}
,'k6F':function(m6F,y6F){return m6F<y6F;}
,'W7':function(z7,B7){return z7==B7;}
,'I7f':function(s7f,N7f){return s7f===N7f;}
,'X9x':function(L9x,l9x){return L9x-l9x;}
,'x7X':function(J7X,u7X){return J7X-u7X;}
,'t7f':function(n7f,h7f){return n7f===h7f;}
,'x9':function(J9,u9){return J9-u9;}
,'Y7X':function(X7X,L7X){return X7X==L7X;}
,'u2f':function(W2f,z2f){return W2f===z2f;}
,'Y3n':function(X3n,L3n){return X3n*L3n;}
,'P0N':function(F0N,H0N){return F0N*H0N;}
,'u5V':function(W5V,z5V){return W5V<z5V;}
,'Z3V':function(i3V,P3V){return i3V<=P3V;}
,'f0':function(g0,d0){return g0==d0;}
,'m1n':function(y1n,e1n){return y1n==e1n;}
,'X1':function(L1,l1){return L1==l1;}
,'T2f':function(f2f,g2f){return f2f*g2f;}
,'U9y':function(K7y,G7y){return K7y==G7y;}
,'q8X':function(Z8X,i8X){return Z8X===i8X;}
,'c3X':function(o3X,O3X){return o3X-O3X;}
,'j6V':function(V6V,C6V){return V6V===C6V;}
,'c5n':function(o5n,O5n){return o5n>=O5n;}
,'A31':function(v31,T31){return v31!==T31;}
,'U0N':function(K9N,G9N){return K9N===G9N;}
,'H9n':function(p9n,D9n){return p9n<=D9n;}
,'g2F':function(d2F,t2F){return d2F-t2F;}
,'Z1X':function(i1X,P1X){return i1X==P1X;}
,'D4n':function(Q4n,E4n){return Q4n>E4n;}
,'c3y':function(o3y,O3y){return o3y*O3y;}
,'A0L':function(v0L,T0L){return v0L>=T0L;}
,'W1':function(z1,B1){return z1===B1;}
,'g5y':function(d5y,t5y){return d5y-t5y;}
,'x6y':function(J6y,u6y){return J6y<u6y;}
,'U91':function(K71,G71,x71){return K71/G71*x71;}
,'r9':function(S9,k9){return S9==k9;}
,'E6':function(M6,I6){return M6<I6;}
,'c9n':function(o9n,O9n){return o9n!=O9n;}
,'U74':function(K14,G14){return K14===G14;}
,'h2L':function(Y2L,X2L,L2L){return Y2L-X2L+L2L;}
,'G8n':function(x8n,J8n){return x8n<=J8n;}
,'K4X':function(G4X,x4X){return G4X-x4X;}
,'w0N':function(a0N,c0N){return a0N==c0N;}
,'b9':function(w9,a9){return w9==a9;}
,'O04':function(r04,S04){return r04<S04;}
,'f4N':function(g4N,d4N){return g4N-d4N;}
,'R9V':function(j9V,V9V){return j9V==V9V;}
,'d7V':function(t7V,n7V){return t7V==n7V;}
,'s6X':function(N6X,b6X){return N6X<b6X;}
,'z4F':function(B4F,R4F){return B4F-R4F;}
,'B8n':function(R8n,j8n,V8n,C8n){return R8n-j8n+V8n-C8n;}
,'m7X':function(y7X,e7X){return y7X>e7X;}
,'b1':function(w1,a1){return w1*a1;}
,'U8V':function(K2V,G2V){return K2V!=G2V;}
,'L5V':function(l5V,U5V){return l5V!==U5V;}
,'i3f':function(P3f,F3f){return P3f-F3f;}
,'c31':function(o31,O31){return o31<O31;}
,'R7X':function(j7X,V7X){return j7X<V7X;}
,'n41':function(h41,Y41){return h41==Y41;}
,'I7x':function(s7x,N7x){return s7x!==N7x;}
,'W2y':function(z2y,B2y){return z2y-B2y;}
,'k1f':function(m1f,y1f){return m1f<y1f;}
,'c5N':function(o5N,O5N){return o5N===O5N;}
,'L3V':function(l3V,U3V){return l3V*U3V;}
,'A9N':function(v9N,T9N){return v9N!=T9N;}
,'N1L':function(b1L,w1L){return b1L-w1L;}
,'b9n':function(w9n,a9n){return w9n&a9n;}
,'k0y':function(m0y,y0y){return m0y==y0y;}
,'i0L':function(P0L,F0L){return P0L<F0L;}
,'k2y':function(m2y,y2y){return m2y/y2y;}
,'N5V':function(b5V,w5V){return b5V<w5V;}
,'t24':function(n24,h24){return n24-h24;}
,'G1y':function(x1y,J1y){return x1y>=J1y;}
,'M6n':function(I6n,s6n){return I6n/s6n;}
,'X1V':function(L1V,l1V){return L1V==l1V;}
,'v9X':function(T9X,f9X){return T9X<f9X;}
,'v8x':function(T8x,f8x){return T8x>f8x;}
,'T61':function(f61,g61){return f61/g61;}
,'S4y':function(k4y,m4y){return k4y*m4y;}
,'J94':function(u94,W94){return u94==W94;}
,'l2':function(U2,K5){return U2-K5;}
,'z7F':function(B7F,R7F){return B7F===R7F;}
,'m54':function(y54,e54){return y54<e54;}
,'W3F':function(z3F,B3F){return z3F!==B3F;}
,'p0N':function(D0N,Q0N){return D0N<Q0N;}
,'C9':function(q9,Z9){return q9/Z9;}
,'D4':function(Q4,E4){return Q4<E4;}
,'s8X':function(N8X,b8X){return N8X/b8X;}
,'h6x':function(Y6x,X6x){return Y6x!=X6x;}
,'Q4x':function(E4x,M4x){return E4x*M4x;}
,'n3L':function(h3L,Y3L){return h3L===Y3L;}
,'P9y':function(F9y,H9y){return F9y>H9y;}
,'L9F':function(l9F,U9F){return l9F==U9F;}
,'q1V':function(Z1V,i1V){return Z1V==i1V;}
,'k5X':function(m5X,y5X){return m5X<y5X;}
,'G5V':function(x5V,J5V){return x5V/J5V;}
,'T1L':function(f1L,g1L){return f1L-g1L;}
,'r6L':function(S6L,k6L){return S6L-k6L;}
,'v41':function(T41,f41){return T41>f41;}
,'T5x':function(f5x,g5x){return f5x==g5x;}
,'k2n':function(m2n,y2n){return m2n<=y2n;}
,'n5y':function(h5y,Y5y){return h5y==Y5y;}
,'f8f':function(g8f,d8f){return g8f<d8f;}
,'h64':function(Y64,X64){return Y64-X64;}
,'d6F':function(t6F,n6F){return t6F-n6F;}
,'R8N':function(j8N,V8N){return j8N!=V8N;}
}
;(function(){var C16=v7K.V6Q.C6Q("88d")?"function":"noChange",q0Q=v7K.V6Q.C6Q("c61b")?"closest":"def",V66=v7K.V6Q.C6Q("ceba")?"ed":"maintainPeriodicity",C0Q=v7K.V6Q.C6Q("fd")?"editingAnnotation":"n",d9Q=v7K.V6Q.C6Q("3fe")?"setAggregationType":"i",E86=v7K.V6Q.C6Q("fe2")?"un":"getStartDate";function _stxKernel_js(_stxThirdParty,_exports){var T1Q=v7K.V6Q.C6Q("47")?"createDataSegment":"volumeUnderlay",u0Q=v7K.V6Q.C6Q("ffc")?"tmpWidth":"dataSet",O06="dataSegment",W3Q="line",l56=0.2,X56=v7K.V6Q.C6Q("585")?"segment":(0xF>(49.40E1,0x176)?0xE5:(89,60.)>0x54?22:(0x106,0x20A)<(14.07E2,6.640E2)?(0x1D5,0.3):(7.16E2,4.39E2)),o7Q=33,b56="vertical",g2Q=v7K.V6Q.C6Q("56dc")?"High":"horizontal",T76="center",n06="top",S1Q=20,g56=v7K.V6Q.C6Q("a28")?"onOff":"stx_watermark",h2Q="mouse",o8Q=v7K.V6Q.C6Q("cb")?"tx":"undo",X7Q="stx-show",z1Q=30,p66="ve",Y16="touchmove",u3Q="touchstart",B56="mousedown",r06="ght",C26=v7K.V6Q.C6Q("44f7")?"currentDate":"chart",B2Q=v7K.V6Q.C6Q("5a1")?"localTouches":"rt",E4Q=((25.,93.)<6.?0x22C:(0xEC,19.)<(36,57)?(0x24,"X"):(40.,0x5)),q06="Q",Z76="N",L1Q=v7K.V6Q.C6Q("61")?"#FFFFFF":"panelName",n66="#000000",h26='nd',m56="_",R1Q=v7K.V6Q.C6Q("1c6")?32:0.1,G0Q="ick",n5Q="w",q86="uo",j86="calculate",G06="overlay",x06="und",K26="stx_bar_down",C56="ow",o56="ou",Y5Q=250,n8Q="mouseup",U86="drawing",u26="stx_crosshair_drawing",a86="stx_crosshair",l96="segment",q2Q="ne",b2Q="it",G86="L",p7Q=")",O86=" (",M9Q="%",m2Q=10000,j96=0.01,U56=0.1,M56="su",t56="measureUnlit",T26="inline-block",u2Q=((11.59E2,141.)>75.?(0x14F,50):(0x133,0x8F)),y56="mousemove",j6Q="v",j8Q="px",l2Q="none",h16="block",C66="stx-crosshair-on",i8Q=((90.60E1,47.)>=(0x174,4.5E1)?(0x12A,"C"):105<(4.4E2,33)?129.:(0x65,143.70E1)<(14.21E2,0x139)?4.5E1:(0x94,37)),X1Q="iz",A4Q="",W5Q=(0x1A9>(0x150,0x115)?(0x1D6,100):(0x129,119)),P1Q="second",a5Q=":",z0Q=((143,58.6E1)<=(126.,0x67)?0.20:(137.0E1,0x185)>=(67.9E1,44.)?(0x1E6,"0"):(31.,54.5E1)<(5.9E1,15)?7.59E2:(0x5D,0x15)),F4Q="om",U9Q="bo",u9Q="stx_candle_shadow",M96="stx_candle_down",p06="stx_candle_up",s4Q="Low",K76="High",K56="lt",d66="Close",H0Q="1",q5Q="z",H5Q="io",E56="stx-drag-chart",G8Q=10,h56=0.5,i1Q="left",o16="stx_grid_border",R6Q="border",A86="fill",f4Q="text",i56="stx_grid",D16="stroke",r1Q="grid",u76="stx_yaxis",Z66="drawYAxis",E26="der",x26="en",V26="ot",v26="ata",H86="D",e0Q="m",Y96="M",m4Q=".",Q56="et",Y3Q="q",M0Q="ea",h76=(17<(2.69E2,1.0210E3)?(149.5E1,"P"):(0x1FC,102.80E1)),F1Q=". ",r26="or",B3Q="te",Q16="ur",A3Q="p",Q9Q="re",F7Q="g",O9Q="h",m8Q=": ",x56="er",E16="ine",t66="dle",I5Q=(37.1E1>=(145.,0xF7)?(36,"y"):(0x171,0x82)>=(50.1E1,138)?(24.5E1,0x16B):(13.030E2,120)),f96="ar",B26="b",f3Q="li",P3Q="r",i9Q="k",f16="ic",W2Q="is",k5Q="x",a26="st",C96="month",H66="week",S16="day",f8Q=60,t06=9,w9Q=(61.>=(0x29,66.7E1)?(64.,0x136):(0x1CD,35.)<(0x1F4,39.)?(0x1C6,60000):(83,0xBB)),x9Q=(0x1FB<(80,0x1C2)?'w':(0xD0,0x255)>(0xBA,14.48E2)?(21.,52):(105.,0x12D)<=0x1FF?(0xE5,1500):(51.,0x1F8)),w16="tick",S9Q="minute",Z1Q="millisecond",d2Q=1000,o26=((0x68,32.80E1)<0x12F?9.71E2:110>=(126,85)?(0xE2,"d"):(129.70E1,42.6E1)),x4Q="on",f26="e",a3Q="s",r2Q="nd",g26="c",p76="se",c16="vector",Y4Q="t",E0Q=((125.,41.)<136.6E1?(0x205,"o"):(73,0x205)),H26="a",a0Q=((106,16.)<=0x182?(50.2E1,"l"):(1.73E2,133)),F96="layout",l5Q="in",l4Q="u",G7Q="f",v2Q="de",J56=" ",P4Q="transparent",E76="div",M3Q=(0x1E8<=(0x1EA,0xD)?(115,38):102.10E1>(38.80E1,0x1C8)?(27,"-"):0x13B>=(30.,10.040E2)?(0x1EE,37):(0x1DA,14.15E2)),H9Q=true,D2Q=(0x19D>(1.085E3,56)?(0x7,false):(0x183,8.56E2)<=58.40E1?"t":(0x84,9.8E1)),M4Q="#zoomOut",F9Q="#zoomIn",h0Q="#",K96="undefined",s2Q='lin',x6Q='ase',q26='di',d76='wn',t76='cu',Y56='itle',d4Q='anel',y66='ont',U76='ane',b16='> ',Q06='is',j4Q='dl',k0Q='pl',k66='ate',p26='lay',U8Q='od',b26='mp_',p9Q='x_ju',g16='ome',L8Q='mI',O4Q='u',I96='oom',u56='Ou',m86='oo',j26=((1.444E3,81.0E1)>(11.32E2,82.)?(119.2E1,'z'):(4.38E2,129)),v5Q='ze',S5Q='ha',d1Q=';"><',w06='2',N4Q='to',g86='on',F8Q='ispla',i7Q='ntrol',n4Q='rt',F5Q='crossh',i4Q='tx_',K16='air',Q4Q='ross',J2Q='_c',X5Q=';"></',V0Q='one',s9Q='ispl',T56='yl',a16='ir_x',T8Q='_',G96='ir',e7Q='ssh',o1Q='>)</',P86='ana',c5Q='ick',g7Q='geT',O66='M',h1Q='ouse',m96='lete',h5Q='ck',Z8Q='li',c96='">',z16='Text',U0Q='elet',y26='D',K6Q='ous',E3Q='><',c56='>(</',x0Q='ns',R4Q='Instruct',D3Q='Del',H06='ou',F06='an',E66='></',z7Q=';</',P66='bsp',s66='">&',k1Q='ash',u5Q='co',r0Q='ass',y4Q='"><',B86='ay',k3Q='isp',n3Q='ty',n86='la',A1Q='Can',X06='rlayTr',l66='v',m7Q='=""><',r66='las',X2Q='tClick',U5Q='h',Z96='Ri',k56='icky',E2Q='St',r9Q='> <',J0Q='"></',h96='io',E9Q='ter',i2Q='yI',Y2Q='k',b06='tic',p3Q='S',L06='"> <',s76='ky',B96='Stic',M86='iv',a66='p',v4Q='ance',l3Q='px',f76=((50.,129.)<=(0x1E7,6.2E2)?(1.32E2,'0'):(0xE5,122)>105.0E1?(95.4E1,1.292E3):86>=(61,104.)?(134.,'i'):(0x114,2.69E2)),H76=((9.6E2,60.0E1)>71?(8.4E1,'1'):0x183<(13.8E1,121)?(0x1D9,'q'):(54,3.89E2)),N16=':',u1Q=(132.<(53.80E1,78)?(1.1340E3,"E"):135>=(43,0xA6)?(85.30E1,30):(14.57E2,0x1FE)>(47,124)?(128.,'f'):(4.89E2,0x63)),y5Q='g',L56='r',j2Q='m',s1Q='; ',g9Q='splay',A7Q='le',H16='canc',a9Q='on_',I76='at',v86='anno',n7Q='x_',W76='as',P0Q='pan',G56='>',J6Q='</',T0Q='ave',D0Q=';">',P26='ne',n9Q=': ',t26='y',W7Q='pla',p5Q='i',x8Q='d',k7Q='e',H8Q='tyl',d96='" ',c4Q='ion_save',w8Q='tat',A2Q='o',w2Q='_a',k26='x',I4Q='t',f56='tn',O8Q='b',j76='-',y3Q='tx',b7Q='="',Z06='ss',P8Q='a',j5Q='l',y1Q='c',U7Q=' ',a2Q=((1.2630E3,13.9E1)>(44,0xA)?(0xFE,'n'):(9.76E2,113.2E1)),Y66='pa',i66=((0x13,0x12C)<(50.0E1,88.7E1)?(98,'s'):(52.0E1,116)),z86='<',C9Q=null,A=function(T){STX.Comparison.mouseHasMoved=T;}
,S=function(k){STXChart.CANDLEEVEN=k;}
,N=function(O){STXChart.CANDLEDOWN=O;}
,E=function(M){STXChart.CANDLEUP=M;}
,D=function(Q){STXChart.CLOSEEVEN=Q;}
,F=function(H){STXChart.CLOSEDOWN=H;}
,Z=function(P){STXChart.CLOSEUP=P;}
,V=function(C){STXChart.NONE=C;}
,B=function(R){STX.camelCaseRegExp=R;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var u=function(W){STX.gesturePointerId=W;}
,G=function(J){STX.gesture.target=J.body;}
;STX.gesture=new MSGesture();G(document);u(C9Q);}
STXChart.htmlControls={"annotationSave":(z86+i66+Y66+a2Q+U7Q+y1Q+j5Q+P8Q+Z06+b7Q+i66+y3Q+j76+O8Q+f56+U7Q+i66+I4Q+k26+w2Q+a2Q+a2Q+A2Q+w8Q+c4Q+d96+i66+H8Q+k7Q+b7Q+x8Q+p5Q+i66+W7Q+t26+n9Q+a2Q+A2Q+P26+D0Q+i66+T0Q+J6Q+i66+Y66+a2Q+G56),"annotationCancel":(z86+i66+P0Q+U7Q+y1Q+j5Q+W76+i66+b7Q+i66+y3Q+j76+O8Q+f56+U7Q+i66+I4Q+n7Q+v86+I4Q+I76+p5Q+a9Q+H16+k7Q+j5Q+d96+i66+I4Q+t26+A7Q+b7Q+x8Q+p5Q+g9Q+n9Q+a2Q+A2Q+a2Q+k7Q+s1Q+j2Q+P8Q+L56+y5Q+p5Q+a2Q+j76+j5Q+k7Q+u1Q+I4Q+N16+H76+f76+l3Q+D0Q+y1Q+v4Q+j5Q+J6Q+i66+a66+P8Q+a2Q+G56),"mSticky":(z86+x8Q+M86+U7Q+p5Q+x8Q+b7Q+j2Q+B96+s76+L06+i66+P0Q+U7Q+p5Q+x8Q+b7Q+j2Q+p3Q+b06+Y2Q+i2Q+a2Q+E9Q+h96+L56+J0Q+i66+P0Q+r9Q+i66+a66+P8Q+a2Q+U7Q+p5Q+x8Q+b7Q+j2Q+E2Q+k56+Z96+y5Q+U5Q+X2Q+d96+y1Q+r66+i66+m7Q+i66+P0Q+U7Q+p5Q+x8Q+b7Q+A2Q+l66+k7Q+X06+W76+U5Q+A1Q+d96+y1Q+n86+i66+i66+b7Q+i66+y3Q+j76+O8Q+I4Q+a2Q+d96+i66+n3Q+j5Q+k7Q+b7Q+x8Q+k3Q+j5Q+B86+N16+a2Q+A2Q+a2Q+k7Q+y4Q+i66+a66+P8Q+a2Q+U7Q+y1Q+j5Q+r0Q+b7Q+i66+y3Q+j76+p5Q+u5Q+j76+I4Q+L56+k1Q+s66+a2Q+P66+z7Q+i66+a66+P8Q+a2Q+E66+i66+a66+F06+r9Q+i66+P0Q+U7Q+p5Q+x8Q+b7Q+j2Q+H06+i66+k7Q+D3Q+k7Q+I4Q+k7Q+R4Q+h96+x0Q+y4Q+i66+a66+F06+c56+i66+a66+P8Q+a2Q+E3Q+i66+a66+F06+U7Q+p5Q+x8Q+b7Q+j2Q+K6Q+k7Q+y26+U0Q+k7Q+z16+c96+L56+p5Q+y5Q+U5Q+I4Q+j76+y1Q+Z8Q+h5Q+U7Q+I4Q+A2Q+U7Q+x8Q+k7Q+m96+J6Q+i66+a66+F06+E3Q+i66+a66+P8Q+a2Q+U7Q+p5Q+x8Q+b7Q+j2Q+h1Q+O66+F06+P8Q+g7Q+k7Q+k26+I4Q+c96+L56+p5Q+y5Q+U5Q+I4Q+j76+y1Q+j5Q+c5Q+U7Q+I4Q+A2Q+U7Q+j2Q+P86+y5Q+k7Q+J6Q+i66+a66+P8Q+a2Q+E3Q+i66+P0Q+o1Q+i66+a66+F06+E66+i66+P0Q+E66+i66+Y66+a2Q+E66+x8Q+M86+G56),"crossX":(z86+x8Q+M86+U7Q+y1Q+j5Q+P8Q+i66+i66+b7Q+i66+I4Q+n7Q+y1Q+L56+A2Q+e7Q+P8Q+G96+U7Q+i66+y3Q+T8Q+y1Q+L56+A2Q+i66+i66+U5Q+P8Q+a16+d96+i66+I4Q+T56+k7Q+b7Q+x8Q+s9Q+P8Q+t26+n9Q+a2Q+V0Q+X5Q+x8Q+p5Q+l66+G56),"crossY":(z86+x8Q+p5Q+l66+U7Q+y1Q+j5Q+P8Q+Z06+b7Q+i66+y3Q+J2Q+Q4Q+U5Q+K16+U7Q+i66+i4Q+F5Q+K16+T8Q+t26+d96+i66+I4Q+t26+j5Q+k7Q+b7Q+x8Q+s9Q+B86+n9Q+a2Q+V0Q+X5Q+x8Q+M86+G56),"chartControls":(z86+x8Q+M86+U7Q+y1Q+j5Q+W76+i66+b7Q+i66+y3Q+J2Q+U5Q+P8Q+n4Q+T8Q+u5Q+i7Q+i66+d96+i66+n3Q+A7Q+b7Q+x8Q+F8Q+t26+n9Q+a2Q+g86+k7Q+s1Q+O8Q+A2Q+I4Q+N4Q+j2Q+n9Q+w06+w06+a66+k26+d1Q+x8Q+M86+U7Q+p5Q+x8Q+b7Q+y1Q+S5Q+n4Q+p3Q+p5Q+v5Q+y4Q+i66+P0Q+U7Q+p5Q+x8Q+b7Q+j26+m86+j2Q+u56+I4Q+d96+y1Q+r66+i66+b7Q+i66+y3Q+j76+j26+I96+j76+A2Q+O4Q+I4Q+J0Q+i66+a66+F06+E3Q+i66+a66+F06+U7Q+p5Q+x8Q+b7Q+j26+A2Q+A2Q+L8Q+a2Q+d96+y1Q+j5Q+W76+i66+b7Q+i66+y3Q+j76+j26+A2Q+A2Q+j2Q+j76+p5Q+a2Q+J0Q+i66+a66+F06+E66+x8Q+p5Q+l66+E66+x8Q+M86+G56),"home":(z86+x8Q+M86+U7Q+p5Q+x8Q+b7Q+U5Q+g16+d96+y1Q+j5Q+r0Q+b7Q+i66+I4Q+p9Q+b26+I4Q+U8Q+P8Q+t26+U7Q+U5Q+g16+d96+i66+I4Q+T56+k7Q+b7Q+x8Q+k3Q+p26+N16+a2Q+A2Q+P26+y4Q+i66+Y66+a2Q+E66+i66+a66+F06+E66+x8Q+p5Q+l66+G56),"floatDate":(z86+x8Q+M86+U7Q+y1Q+j5Q+P8Q+i66+i66+b7Q+i66+y3Q+j76+u1Q+j5Q+A2Q+P8Q+I4Q+j76+x8Q+k66+d96+i66+n3Q+A7Q+b7Q+x8Q+p5Q+i66+k0Q+B86+n9Q+a2Q+A2Q+a2Q+k7Q+X5Q+x8Q+M86+G56),"handleTemplate":(z86+x8Q+M86+U7Q+y1Q+n86+Z06+b7Q+i66+y3Q+j76+p5Q+y1Q+A2Q+j76+U5Q+F06+j4Q+k7Q+d96+i66+I4Q+T56+k7Q+b7Q+x8Q+Q06+W7Q+t26+n9Q+a2Q+A2Q+P26+d1Q+i66+a66+P8Q+a2Q+E66+i66+P0Q+E66+x8Q+M86+b16),"iconsTemplate":(z86+x8Q+M86+U7Q+y1Q+j5Q+P8Q+Z06+b7Q+i66+y3Q+j76+a66+U76+j5Q+j76+y1Q+y66+L56+A2Q+j5Q+y4Q+x8Q+M86+U7Q+y1Q+n86+i66+i66+b7Q+i66+y3Q+j76+a66+d4Q+j76+I4Q+Y56+J0Q+x8Q+M86+E3Q+x8Q+p5Q+l66+U7Q+y1Q+j5Q+r0Q+b7Q+i66+I4Q+k26+j76+O8Q+I4Q+a2Q+j76+a66+d4Q+y4Q+i66+a66+P8Q+a2Q+U7Q+y1Q+j5Q+W76+i66+b7Q+i66+y3Q+j76+p5Q+u5Q+j76+O4Q+a66+J0Q+i66+Y66+a2Q+E66+x8Q+p5Q+l66+E3Q+x8Q+p5Q+l66+U7Q+y1Q+j5Q+P8Q+Z06+b7Q+i66+y3Q+j76+O8Q+I4Q+a2Q+j76+a66+U76+j5Q+y4Q+i66+a66+F06+U7Q+y1Q+j5Q+r0Q+b7Q+i66+y3Q+j76+p5Q+u5Q+j76+u1Q+A2Q+t76+i66+J0Q+i66+a66+F06+E66+x8Q+p5Q+l66+E3Q+x8Q+M86+U7Q+y1Q+n86+i66+i66+b7Q+i66+I4Q+k26+j76+O8Q+I4Q+a2Q+j76+a66+P8Q+a2Q+k7Q+j5Q+y4Q+i66+a66+F06+U7Q+y1Q+n86+Z06+b7Q+i66+y3Q+j76+p5Q+y1Q+A2Q+j76+x8Q+A2Q+d76+J0Q+i66+Y66+a2Q+E66+x8Q+p5Q+l66+E3Q+x8Q+p5Q+l66+U7Q+y1Q+r66+i66+b7Q+i66+y3Q+j76+O8Q+f56+j76+a66+U76+j5Q+y4Q+i66+a66+P8Q+a2Q+U7Q+y1Q+n86+i66+i66+b7Q+i66+I4Q+k26+j76+p5Q+y1Q+A2Q+j76+k7Q+q26+I4Q+J0Q+i66+a66+P8Q+a2Q+E66+x8Q+p5Q+l66+E3Q+x8Q+p5Q+l66+U7Q+y1Q+n86+Z06+b7Q+i66+I4Q+k26+j76+O8Q+I4Q+a2Q+j76+a66+P8Q+P26+j5Q+y4Q+i66+Y66+a2Q+U7Q+y1Q+j5Q+P8Q+Z06+b7Q+i66+y3Q+j76+p5Q+u5Q+j76+y1Q+j5Q+A2Q+i66+k7Q+J0Q+i66+a66+F06+E66+x8Q+p5Q+l66+E66+x8Q+p5Q+l66+G56),"baselineHandle":(z86+x8Q+M86+U7Q+y1Q+j5Q+r0Q+b7Q+i66+I4Q+k26+j76+O8Q+x6Q+s2Q+k7Q+j76+U5Q+F06+x8Q+j5Q+k7Q+U7Q+u1Q+P8Q+d96+i66+n3Q+A7Q+b7Q+x8Q+Q06+a66+j5Q+B86+n9Q+a2Q+V0Q+X5Q+x8Q+p5Q+l66+G56),}
;STXChart.prototype.registerHTMLElements=function(){var v8Q="DIV",i5Q="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==K96&&typeof this.controls[control]==K96){if(!this.allowZoom&&v7K.L(control,i5Q))continue;var el=$$$(h0Q+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(v8Q);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$(F9Q,this.controls.chartControls),zoomOut=$$$(M4Q,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){self.zoomOut();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;B(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[v7K.S06].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var v1Q="backgroundAttachment",rc={}
,nativeCamelSupport=D2Q;function capitalize(g){return g[v7K.S06].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(v7K.G4(i,v1Q))nativeCamelSupport=H9Q;if(nativeCamelSupport){if(v&&v7K.u4(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(M3Q);var ii=v7K.m06;jj=v.length;var vcc=v[v7K.m06];while(++ii<jj){vcc+=v[ii].charAt(v7K.m06).toUpperCase()+v[ii].slice(v7K.S06);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(E76);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=C9Q;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var Q2Q="rgb(",s3Q="rgba(";if(str.indexOf(h0Q)!=-v7K.S06)return str;if(str.indexOf(s3Q)!=-v7K.S06)return str;if(str.indexOf(Q2Q)!=-v7K.S06)return str;if(v7K.B4(str,P4Q))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var P16="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+J56+style.fontWeight+J56+style.fontSize+J56+style.fontFamily;if(result.indexOf((E86+v2Q+G7Q+d9Q+C0Q+V66))==-v7K.S06){ctx.font=result;}
else{this.styles[className]=C9Q;console.log(P16+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=K96)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var A76="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=A76;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return D2Q;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;v7K.V4(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;v7K.Z4(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)==(l4Q+C0Q+q0Q+l5Q+V66)){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(F96);}
;STXChart.prototype.setAggregationType=function(aggregationType){var I56="ut",Z5Q="yo";this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred((a0Q+H26+Z5Q+I56));}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){var G16="lay";this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred((G16+E0Q+l4Q+Y4Q));}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;v7K.F4(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;v7K.D4(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;v7K.M4(i,arr.length);i++){var rep=arr[i];if(v7K.N4(rep.name,"fibonacci"))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){if(cantUndo){this.undoStamps=[];}
else{this.undoStamp();}
this.abortDrawings();this.changeOccurred(c16);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;v7K.a4(i,this.drawingObjects.length);i++){if(v7K.O4(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(v7K.k4(tick,l)&&v7K.e4(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(v7K.T4(tick,0)){dt=chart.dataSet[0].DT;for(i=0;v7K.d4(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(v7K.h4(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(v7K.L4(interval,"week"))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(v7K.K3(interval,"month"))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[v7K.J3(l,1)].DT;for(i=0;v7K.z3(i,3000);i++){if(v7K.j3(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(v7K.q3(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(v7K.P3(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(v7K.p3(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[v7K.E3(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(v7K.s3(this.layout.timeUnit,(p76+g26+E0Q+r2Q))){ticks=v7K.w3((mym-m),1000);return (v7K.o3(chart.dataSet.length,1))+ticks;}
else if(v7K.S3(this.layout.timeUnit,"millisecond")){ticks=v7K.y3(mym,m);return (v7K.v3(chart.dataSet.length,1))+ticks;}
if(v7K.g3(interval,"minute"))computedPeriodicity=v7K.n3(periodicity,interval);if(v7K.X3(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;v7K.U3(i,1500);i++){if(!this.isDailyInterval(interval)){if(v7K.J0(dt.getHours(),chart.beginHour)&&v7K.z0(dt.getMinutes(),chart.beginMinute)&&v7K.j0(interval,"tick")){if(v7K.q0((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(v7K.P0(chart.beginHour,0)&&v7K.p0(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(v7K.E0(chart.beginHour,0)&&v7K.s0(dt.getDay(),1)){ticks+=Math.round(v7K.w0(9,60,computedPeriodicity));}
else{ticks+=Math.round(v7K.O0(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(v7K.k0(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(v7K.A0(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(v7K.f0(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(v7K.n0(m,mym)){return (v7K.X0(chart.dataSet.length,1))+ticks;}
if(v7K.U0(mym,m)){return (v7K.x9(chart.dataSet.length,1))+ticks-1;}
}
return (v7K.W9(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var V3Q=210,mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[v7K.m06].DT,m=dt.getTime(),ticks=v7K.m06,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(v7K.R9(this.layout.timeUnit,(a3Q+f26+g26+x4Q+o26))){return v7K.C9((mym-m),d2Q);}
else if(v7K.i9(this.layout.timeUnit,Z1Q)){return v7K.H9(mym,m);}
if(v7K.Q9(interval,S9Q))computedPeriodicity=v7K.I9(periodicity,interval);if(v7K.b9(interval,w16))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=v7K.m06;v7K.c9(i,x9Q);i++){if(!this.isDailyInterval(interval)){if(v7K.r9(dt.getHours(),chart.beginHour)&&v7K.m9(dt.getMinutes(),chart.beginMinute)&&v7K.A9(interval,w16)){var dt2=STX.LegacyMarket.prevDay(dt,v7K.S06,this);if(v7K.f9((dt2.getTime()-mym)/w9Q,chart.minutesInSession)){dt=dt2;if(v7K.t9(chart.beginHour,v7K.m06)){if(v7K.Y9(dt.getDay(),v7K.m06)){ticks+=Math.round(v7K.l9(t06,f8Q,computedPeriodicity));}
else{ticks+=Math.round(v7K.x7(chart.minutesInSession,computedPeriodicity));}
}
else if(v7K.W7(chart.beginHour,t06)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(v7K.R7(V3Q,computedPeriodicity));}
else{ticks+=Math.round(v7K.C7(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,C9Q,this.dataZone);ticks+=v7K.S06;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,C9Q,this.dataZone);ticks+=v7K.S06;}
}
else{ticks+=v7K.S06;}
if(v7K.i7(interval,S16))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(v7K.H7(interval,H66))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(v7K.Q7(interval,C96))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(v7K.I7(m,mym)){return -ticks;}
if(v7K.b7(mym,m)){return -(ticks+v7K.S06);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=v7K.c7((yAxis.initialMarginTop-yAxis.initialMarginBottom),v7K.o06);}
;STXChart.prototype.home=function(params){var v16="ya",o0Q="x_";this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(v7K.r7(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(v7K.m7(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(v7K.A7(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize((a26+o0Q+v16+k5Q+W2Q))+v7K.f7(margin,2),leftMargin=v7K.t7(height,2);wsInTicks=Math.round(v7K.Y7(leftMargin,this.layout.candleWidth));if(v7K.l7(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(v7K.G1(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(v7K.W1(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);DT.setSeconds(0);DT.setMilliseconds(0);}
}
var mym=DT.getTime(),m=chart.dataSet[v7K.R1(chart.dataSet.length,1)].DT.getTime();if(v7K.C1(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(v7K.i1(mym,first))return this.pastTick(dt,chart);for(var i=v7K.H1(chart.dataSet.length,1);v7K.Q1(i,0);i--){m=chart.dataSet[i].DT.getTime();if(v7K.I1(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var ms=dt.getTime();ms+=v7K.b1(this.timeZoneOffset,w9Q);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var K0Q="ound",q76="me",S0Q="nu";if(v7K.o1(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval,timeUnit=this.layout.timeUnit;if(v7K.S1(interval,(Y4Q+f16+i9Q))||v7K.T1(chart.xAxis.axisType,"ntb")||this.hasNTBAxis[this.layout.aggregationType]||v7K.n1(timeUnit,"second")||v7K.X1(timeUnit,"millisecond")){return this.createTickXAxisWithDates(chart);}
if(v7K.U1(chart.xAxis.axisType,(S0Q+q76+P3Q+f16))){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(v7K.x8(interval,"week")){isWeekly=true;p=v7K.W8(5,p);}
if(v7K.R8(interval,"month")){isMonthly=true;p=v7K.C8(20,p);}
if(v7K.i8(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;v7K.H8(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(v7K.Q8(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(v7K.I8(interval,"minute"))interval=1;ticksPerDay=Math.ceil(v7K.b8(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(v7K.o8(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(v7K.S8(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=v7K.y8(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[v7K.T8(periodicity,interval)];if(!mod)mod=1;if(v7K.d8(minuteBoundary,mod)){minuteBoundary=v7K.h8(Math.floor((minuteBoundary+mod)/mod),mod);}
}
axisRepresentation=[];var standardBeginDay=v7K.L8(chart.beginHour,60)+chart.beginMinute,prices;candleWidth=this.layout.candleWidth;for(i;v7K.K2(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&v7K.u2(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(v7K.B2(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;if(i&&prices.leftOffset)candleWidth=v7K.V2((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=v7K.Z2(dt.getDate(),currentDate);if(is24)isNextDate=v7K.F2(dtShifted.getDate(),currentDate);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(v7K.D2(y,prevYear)){prevYear=y;text=y;hz=chart.left+v7K.M2(i,candleWidth)-1;if(v7K.N2(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
hz=chart.left+v7K.o2(((2*i+1)*candleWidth),2)-1;if(v7K.e2(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var minutes=v7K.T2(dt.getHours(),60)+dt.getMinutes();if(v7K.t2(this.chart.beginHour,0)||v7K.Y2(dt.getDay(),0))minutes=v7K.l2(minutes,standardBeginDay);else minutes=v7K.G5(minutes,(15*60));if(is24)minutes=v7K.u5(dtShifted.getHours(),60)+dtShifted.getMinutes();if(v7K.B5(minutes%minuteBoundary,0)){hz=chart.left+v7K.V5(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,(f3Q+C0Q+f26));}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(v7K.Z5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
else{if(v7K.F5(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(i&&prices.leftOffset)candleWidth=v7K.D5((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(v7K.M5(y1,prevYear)){prevYear=y1;hz=chart.left+(v7K.N5(i,candleWidth))-1;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,(B26+K0Q+f96+I5Q),text));}
if(v7K.a5(m,prevMonth)){var doIt="monthly";if(isWeekly&&v7K.O5(chart.maxTicks*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&v7K.k5(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&v7K.e5(chart.maxTicks*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&v7K.T5(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&v7K.d5(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&v7K.h5(chart.maxTicks*periodicity,(365*2)))doIt="none";if(v7K.L5(doIt,"monthly")||(v7K.K6(doIt,"quarterly")&&(v7K.J6(m,0)||v7K.z6(m,3)||v7K.j6(m,6)||v7K.q6(m,9)))){prevMonth=m;hz=chart.left+v7K.P6(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(v7K.p6(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var S4Q="_d",k16="_x",X8Q="ry",f5Q="bou",g06="mi",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline=(g06+o26+t66);var obj;for(var j=0;v7K.E6(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=v7K.s6(obj.hz,(w2/2));obj.right=obj.hz+(v7K.w6(w2,2));obj.unpaddedRight=obj.hz+(v7K.o6(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||v7K.S6(chart.xAxis.displayBorder,null);if(v7K.y6(this.axisBorders,true))drawBorders=true;if(v7K.v6(this.axisBorders,false))drawBorders=false;var b=drawBorders?v7K.g6(yAxis.bottom,0.5):yAxis.bottom,middle=v7K.n6(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;v7K.X6(nb,axisRepresentation.length);nb++){if(v7K.U6(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;v7K.x4V(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(v7K.W4V(i,nb)){for(nb++;v7K.R4V(nb,axisRepresentation.length);nb++){if(v7K.C4V(axisRepresentation[nb].grid,(f5Q+C0Q+o26+H26+X8Q))){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(v7K.i4V(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(v7K.H4V(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(v7K.Q4V(obj.left,prevRight))continue;}
if(v7K.I4V(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((v7K.b4V(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(v7K.c4V(obj.grid,"boundary")?(a3Q+Y4Q+k5Q+k16+H26+k5Q+W2Q+S4Q+H26+P3Q+i9Q):"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;v7K.r4V(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;v7K.m4V(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=v7K.A4V((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(v7K.f4V((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=v7K.t4V(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=v7K.Y4V(range,Math.pow(10,exponent));if(round){if(v7K.l4V(fraction,1.5))niceFraction=1;else if(v7K.G3V(fraction,3))niceFraction=2;else if(v7K.u3V(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(v7K.B3V(fraction,1))niceFraction=1;else if(v7K.V3V(fraction,2))niceFraction=2;else if(v7K.Z3V(fraction,5))niceFraction=5;else niceFraction=10;}
return v7K.F3V(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(v7K.D3V(maxPoint,minPoint),false),tickSpacing=niceNum(v7K.M3V(range,(idealTicks-1)),true),niceMin=v7K.N3V(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=v7K.a3V(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(v7K.O3V(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;v7K.k3V(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(v7K.e3V(prices.index,nextLabel))continue;if(v7K.T3V(prices.index,nextLabel)){hz=chart.left+v7K.d3V(i,this.layout.candleWidth)+this.micropixels;}
else if(v7K.h3V(prices.index,nextLabel)){hz=chart.left+v7K.L3V(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,(a0Q+E16),nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var A66="[",P96="men",T2Q="aSeg",F76="at",Y86="ing",P06="sc",e2Q="rr",U06="As",V5Q="inu",O0Q="art",O16="Ho",p2Q="har",S7Q="ndMinu",y0Q=" & ",t86="H",D1Q="cifie",t4Q="he",V06="an",p4Q="ime",g8Q="A",O96="ror",y2Q="tio",D9Q="Ass";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=v7K.K0V(this.chart.width,idealTickSizePixels);for(var x=0;v7K.J0V(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(v7K.z0V(x,chart.dataSegment.length))return [];var i,timeRange=v7K.j0V(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());if(v7K.q0V(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;v7K.P0V(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(v7K.p0V(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(v7K.E0V(nextCloseEpoch,epoch)){console.log((D9Q+x56+y2Q+C0Q+J56+f26+P3Q+O96+m8Q+g8Q+J56+B26+H26+P3Q+J56+O9Q+H26+a3Q+J56+H26+J56+Y4Q+p4Q+J56+F7Q+Q9Q+H26+Y4Q+f26+P3Q+J56+Y4Q+O9Q+V06+J56+Y4Q+t4Q+J56+a3Q+A3Q+f26+D1Q+o26+J56+f26+C0Q+o26+t86+E0Q+Q16+y0Q+f26+S7Q+B3Q+J56+G7Q+r26+J56)+this.chart.symbol+(F1Q+h76+a0Q+M0Q+p76+J56+g26+t4Q+g26+i9Q+J56+I5Q+E0Q+l4Q+P3Q+J56+Y3Q+l4Q+E0Q+Y4Q+f26+G7Q+f26+V66+J56+E0Q+P3Q+J56+a3Q+Q56+J56+g26+p2Q+Y4Q+m4Q+f26+C0Q+o26+O16+Q16+y0Q+g26+O9Q+O0Q+m4Q+f26+r2Q+Y96+V5Q+Y4Q+f26+J56+Y4Q+E0Q+J56+e0Q+H26+Y4Q+g26+O9Q+J56+I5Q+E0Q+l4Q+P3Q+J56+e0Q+H26+a26+x56+H86+v26));nextCloseEpoch=epoch;}
}
else{timeRange+=v7K.s0V(epoch,prevEpoch);if(v7K.w0V(epoch-prevEpoch,0)){console.log((U06+a3Q+x56+Y4Q+d9Q+E0Q+C0Q+J56+f26+e2Q+E0Q+P3Q+m8Q+H86+H26+Y4Q+f26+a3Q+J56+C0Q+V26+J56+d9Q+C0Q+J56+H26+P06+x26+o26+Y86+J56+E0Q+P3Q+E26+F1Q+g26+O9Q+f96+Y4Q+m4Q+o26+F76+T2Q+P96+Y4Q+A66)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
timeRange=v7K.o0V((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=v7K.S0V(timeRange,idealTicks);for(i=0;v7K.y0V(i,this.timePossibilities.length);i++){if(v7K.v0V(this.timePossibilities[i],msPerTick))break;}
if(v7K.g0V(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[v7K.n0V(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[v7K.X0V(prevMap.arr.length,1)];if(v7K.U0V(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;v7K.x9V(i,timeInterval.arr.length);i++){if(v7K.W9V(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(v7K.R9V(i,timeInterval.arr.length)){i--;}
else{if(v7K.C9V(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;v7K.i9V(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth;for(i;v7K.H9V(i,chart.maxTicks);i++){if(v7K.Q9V(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=v7K.I9V((prices.leftOffset-prices.candleWidth/2),i);}
else{var periodicity=this.layout.periodicity,interval=this.layout.interval;if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
if(v7K.b9V(interval,(o26+H26+I5Q))){dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
else if(v7K.c9V(interval,"week")){dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);}
else if(v7K.r9V(interval,"month")){dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);}
if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(v7K.m9V(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(v7K.A9V(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(v7K.f9V(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(v7K.t9V(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(v7K.Y9V(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+v7K.l9V(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(v7K.G7V(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(v7K.u7V(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(v7K.B7V(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(v7K.V7V(previousTimeUnitLarge,currentTimeUnitLarge)){if(v7K.Z7V(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(v7K.F7V(i,candleWidth))-1;text=null;if(v7K.D7V(timeUnit,STX.HOUR)||(v7K.M7V(timeUnit,STX.MINUTE)&&v7K.N7V(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(v7K.a7V(timeUnit,STX.DAY)){if(v7K.O7V(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(v7K.k7V(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(v7K.e7V(currentTimeUnit,nextTimeUnit)){if(v7K.T7V(nextTimeUnit,timeInterval.minTimeUnit)){if(v7K.d7V(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+v7K.h7V(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=v7K.L7V(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(v7K.K1V(boundaryTimeUnit,currentTimeUnit)){if(v7K.J1V(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=v7K.z1V(candleWidth,4);}
if(v7K.j1V(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(v7K.q1V(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(v7K.P1V(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(v7K.p1V(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(v7K.E1V(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(v7K.s1V(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(v7K.w1V(boundaryTimeUnit,1));}
else if(v7K.o1V(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(v7K.S1V(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(v7K.y1V(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&v7K.v1V(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(v7K.g1V(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(v7K.n1V(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(v7K.X1V(timeUnit,STX.YEAR)||v7K.U1V(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=v7K.m06,notcached=v7K.m06;STXChart.prototype.createYAxis=function(panel,parameters){if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(v7K.x8V(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&v7K.W8V(yAxis.high,panel.cacheHigh)&&v7K.R8V(yAxis.low,panel.cacheLow)){var leftTick=v7K.C8V(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(v7K.i8V(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=v7K.H8V(yAxis.bottom,yAxis.top),pricePerPix=v7K.Q8V((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=(v7K.I8V(yAxis.high,yAxis.low))+v7K.b8V(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+v7K.c8V((yAxis.zoom/2),pricePerPix)+v7K.r8V(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=v7K.m8V(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&v7K.v8V(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||v7K.g8V(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||v7K.n8V(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=v7K.X8V(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||v7K.U8V(this.activeDrawing.name,"projection"))){yAxis.logHigh=v7K.x2V(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=v7K.W2V(Math.log(semilow),Math.LN10);if(v7K.R2V(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=v7K.C2V(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=v7K.i2V(idealX,1.618);if(v7K.H2V(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=v7K.Q2V(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=v7K.I2V(fontHeight,5);}
else{yAxis.idealTickSizePixels=v7K.b2V(fontHeight,2);}
}
}
var idealTicks=Math.round(v7K.c2V(height,yAxis.idealTickSizePixels)),shadow=parameters.range?v7K.r2V(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(v7K.m2V(shadow,idealTicks));var n=1;for(var zz=0;v7K.A2V(zz,10);zz++){if(v7K.f2V(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=v7K.t2V(Math.floor(shadow/idealTicks*n),n);}
if(v7K.Y2V(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=v7K.l2V(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(v7K.G5V(shadow,yAxis.priceTick));if(parameters.range&&v7K.u5V(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(v7K.B5V(verticalTicks,1)){if(v7K.V5V(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=v7K.Z5V(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;v7K.F5V(i,100);i++){var numberOfTicks=v7K.D5V(shadow,yAxisPriceTick);if(v7K.M5V(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(v7K.N5V(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=v7K.a5V(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||v7K.O5V(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=v7K.k5V(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=v7K.e5V(Math.log(semilow2),Math.LN10);yAxis.logShadow=v7K.T5V(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=v7K.d5V(yAxis.high,yAxis.low);}
yAxis.multiplier=v7K.h5V(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&v7K.L5V(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;v7K.K6V(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(v7K.J6V(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(Z66,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(v7K.z6V(panel.name,chart.name)&&v7K.j6V(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=v7K.q6V(parameters.range[v7K.S06],parameters.range[v7K.m06]);}
var verticalTicks=v7K.P6V(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=v7K.p6V(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=v7K.E6V((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:u76;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(r1Q,D16,this.canvasStyle(i56));yAxis.yAxisPlotter.newSeries(f4Q,A86,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(R6Q,D16,this.canvasStyle(o16));var priceOffset=v7K.m06,high=parameters.range?parameters.range[v7K.S06]:yAxis.high,low=parameters.range?parameters.range[v7K.m06]:yAxis.low,drawBorders=(v7K.s6V(yAxis.displayBorder,C9Q)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(v7K.w6V(this.axisBorders,D2Q))drawBorders=D2Q;if(v7K.o6V(this.axisBorders,H9Q))drawBorders=H9Q;var edgeOfAxis,position=(v7K.S6V(yAxis.position,C9Q)?chart.panel.yAxis.position:yAxis.position);if(v7K.y6V(position,i1Q)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+h56,tickWidth=drawBorders?v7K.a06:v7K.m06;if(v7K.v6V(position,i1Q))tickWidth=drawBorders?-v7K.a06:v7K.m06;if(isAChart)if(v7K.g6V(yAxis.shadow,v7K.S06)){priceOffset=v7K.n6V(((parseInt(low/yAxis.priceTick)+v7K.S06)*yAxis.priceTick),low);}
else{priceOffset=v7K.X6V(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=v7K.U6V(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(u76);for(var i=v7K.m06;v7K.x4f(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(v7K.W4f(i,logPriceTick));price=Math.pow(G8Q,logPrice);}
else{if(isAChart)price=low+v7K.R4f(i,yAxis.priceTick)+priceOffset;else price=v7K.C4f(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+h56;if(v7K.P4f((y2+fontHeight/v7K.o06),panel.bottom))continue;if(v7K.p4f((y2-fontHeight/v7K.o06),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",v7K.E4f(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,C9Q,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:C9Q,textXPosition=edgeOfAxis+tickWidth+v7K.a06;if(v7K.s4f(position,i1Q)){textXPosition=yAxis.left+v7K.a06;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(f4Q,price,textXPosition,y2,backgroundColor,C9Q,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+h56;yAxis.yAxisPlotter.moveTo((B26+r26+E26),borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,R6Q);}
}
this.plotYAxisGrid(panel);}
this.runAppend(Z66,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var q9Q="00",B8Q="hed",K5Q="eac",N5Q="ro",U26="etty",b5Q="sP",C4Q="wYA",P7Q="ra",Y0Q="gri",N3Q="rawYAxis",x7Q=((0x10E,0xD6)<=116.7E1?(10.61E2,3094370):(0x231,8.71E2)),g3Q=((0x1A0,0x138)>=32?(31,6586662):(26.,91.9E1)),s96=540847781,w96=346239811;var k36=-w96,m36=-s96,S36=v7K.o06;for(var r36=v7K.S06;v7K.G36.x36(r36.toString(),r36.toString().length,g3Q)!==k36;r36++){STX.appendClassName(this.container,E56);this.transformDataSetPost(this,chart.dataSet,min,max);this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);S36+=v7K.o06;}
if(v7K.G36.x36(S36.toString(),S36.toString().length,x7Q)!==m36){return W2f===z2f;}
if(this.runPrepend((o26+N3Q),arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(v7K.w4f(panel.name,chart.name)&&v7K.o4f(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=v7K.S4f(parameters.range[1],parameters.range[0]);}
var verticalTicks=v7K.y4f(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid","stroke",this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(v7K.v4f(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(v7K.g4f(this.axisBorders,false))drawBorders=false;if(v7K.n4f(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(v7K.X4f(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(v7K.U4f(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(v7K.x3f(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;v7K.W3f(z,100);z++){inc=v7K.R3f(increments[p],Math.pow(10,pow));n=Math.floor(v7K.C3f(shadow,inc));var newDiff=Math.abs(v7K.i3f(verticalTicks,n));if(v7K.H3f(newDiff,diff)){break;}
else{diff=newDiff;}
if(v7K.Q3f(n,verticalTicks)){closest=inc;break;}
else if(v7K.I3f(n,verticalTicks)){p++;if(v7K.b3f(p,l)){p=0;pow++;}
}
else{p--;if(v7K.c3f(p,0)){p=v7K.r3f(l,1);pow--;}
}
closest=inc;}
var lowLabel=v7K.m3f(Math.ceil(low/closest),closest),i=0;for(var zz=0;v7K.A3f(zz,100);zz++){var price=lowLabel+v7K.f3f(i,closest);if(v7K.t3f(price,high))break;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(v7K.Y3f((y2+fontHeight/2),panel.bottom))continue;if(v7K.l3f((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo((Y0Q+o26),panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",v7K.G0f(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(v7K.u0f(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(v7K.B0f(zz,100)){console.log((o26+P7Q+C4Q+k5Q+d9Q+b5Q+P3Q+U26+m8Q+H26+a3Q+a3Q+f26+P3Q+Y4Q+H5Q+C0Q+J56+f26+P3Q+N5Q+P3Q+F1Q+q5Q+q5Q+J56+P3Q+K5Q+B8Q+J56+H0Q+q9Q));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var O7Q="plotYAxisGrid";if(this.runPrepend(O7Q,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,r1Q);this.runAppend(O7Q,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var n0Q="x_yaxis";if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v7K.V0f(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize((a26+n0Q));yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(v7K.Z0f(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&v7K.F0f(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&v7K.D0f(decimalPlaces,0)){if(v7K.M0f(yax.priceTick,0.01))decimalPlaces=4;else if(v7K.N0f(yax.priceTick,0.1))decimalPlaces=2;else if(v7K.a0f(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(v7K.O0f(panel.name,panel.chart.name)){if(v7K.k0f(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(v7K.e0f(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=v7K.T0f(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&v7K.d0f(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&v7K.h0f(decimalPlaces,0)){return price;}
if(this.internationalizer){if(v7K.L0f(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=v7K.K9f(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var X76="createCrosshairs";if(this.runPrepend(X76,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return D2Q;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return D2Q;}
;this.runAppend(X76,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false;for(var i=0;v7K.J9f(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;v7K.z9f(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;v7K.j9f(v,f.length);v++){var val=f[v];if(val||v7K.q9f(val,0)){if(sum){acc+=val;if(v7K.P9f(acc,highValue))highValue=acc;if(v7K.p9f(acc,lowValue))lowValue=acc;}
else{if(v7K.E9f(val,highValue))highValue=val;if(v7K.s9f(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(v7K.w9f(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(v7K.o9f(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=v7K.S9f(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=v7K.y9f(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(v7K.v9f(cheight,5)));if(v7K.g9f(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(v7K.n9f(cheight,verticalPad))*(v7K.X9f(yAxis.scroll,0)?-1:1);}
var pricePerPix=v7K.U9f((high-low),yAxis.height);if(low||v7K.x7f(low,0)){if(v7K.W7f(high-low,0)){newHigh=v7K.R7f(high,2);newLow=0;}
else{if((this.layout.semiLog||v7K.C7f(this.layout.chartScale,"log"))&&newHigh){var logLow=v7K.i7f(Math.log(low),Math.LN10),logHigh=v7K.H7f(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||v7K.Q7f(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||v7K.I7f(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=v7K.b7f(yAxis.high,yAxis.low);if(v7K.c7f(panel.chart.name,panel.name)&&v7K.r7f(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||v7K.m7f(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(v7K.A7f(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;v7K.f7f(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(v7K.t7f(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;v7K.Y7f(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){var q4Q="initializeDisplay",t96="e_d",R2Q="spl",U96="Di",L3Q="niti";if(this.runPrepend((d9Q+L3Q+H26+a0Q+d9Q+q5Q+f26+U96+R2Q+H26+I5Q),arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax;if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push(d66);minMax=this.determineMinMax(chart.dataSegment,fields);if(v7K.l7f(this.layout.chartType,(B26+H26+a3Q+f26+f3Q+C0Q+t96+f26+K56+H26))){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(v7K.G1f(base,minMax[v7K.m06]),v7K.u1f(minMax[v7K.S06],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[v7K.m06]=v7K.B1f(base,diff);minMax[v7K.S06]=base+diff;}
}
}
else{fields.push(d66,K76,s4Q);minMax=this.determineMinMax(chart.dataSegment,fields);}
chart.lowValue=minMax[v7K.m06];chart.highValue=minMax[v7K.S06];this.runAppend(q4Q,arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==K96)offset=v7K.m06;var position=v7K.V1f(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(v7K.Z1f(open,close))return p06;if(v7K.F1f(open,close))return M96;return u9Q;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return v7K.D1f(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(v7K.M1f(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var v3Q="red",J66="cen";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(v7K.N1f(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;v7K.a1f(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;v7K.O1f(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;v7K.k1f(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(v7K.e1f(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(v7K.T1f(total,histMax))histMax=total;}
if(v7K.d1f(histMax,0)){this.watermark(panelName,(J66+Y4Q+x56),(U9Q+Y4Q+Y4Q+F4Q),this.translateIf(params.name+" Not Available"));return ;}
}
multiplier=v7K.h1f((b-t),params.heightPercentage,histMax);}
var offset=0.5;if(v7K.l1f(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,v7K.G8f((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(v7K.W8f(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;v7K.R8f(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(v7K.C8f(i,0))prevTop=bottom;var quote=quotes[i];if(!quote){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=v7K.i8f(quote[field],multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(v7K.H8f(i,0))farLeft=prevRight=Math.floor(v7K.Q8f(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(v7K.I8f(bottom,y))+0.5,bottom);if(isUp){if(v7K.b8f(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(v7K.c8f(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=v7K.r8f(myCandleWidth,self.layout.candleWidth),start=prevRight+v7K.m8f((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=v7K.A8f(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(v7K.f8f(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(v7K.t8f(x0%1,roundPixel))x0+=0.5;if(v7K.Y8f(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(v7K.l8f(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(v7K.G2f(tops[i],top)||v7K.u2f(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&v7K.B2f(type,"clustered")){if(v7K.V2f(i,0)&&tops[v7K.Z2f(i,1)]&&v7K.F2f(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[v7K.D2f(i,1)]));}
else if(isBorder&&!shaveOff){if(v7K.M2f(prevTop,top)||v7K.N2f(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(v7K.a2f(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=v7K.O2f(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=v7K.k2f(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;v7K.e2f(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=v7K.T2f(this.layout.candleWidth,params.widthFactor);var shift=0;if(v7K.d2f(type,(g26+a0Q+l4Q+a3Q+B3Q+v3Q))){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(v7K.h2f(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(v7K.L2f(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(v7K.K5f(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=v7K.J5f(self.layout.candleWidth,widthFactor),xc=Math.floor(v7K.z5f(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;v7K.j5f(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(v7K.q5f(x,0)){xc+=self.layout.candleWidth;}
else{xc+=v7K.P5f((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=v7K.p5f(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=v7K.E5f(xc,myCandleWidth/2,myoffset);x1=xc+v7K.N5f(myCandleWidth,2)-myoffset;if(v7K.a5f(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;v7K.O5f(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(v7K.k5f(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=v7K.e5f(v1,v);halfHeight=v7K.T5f(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=v7K.d5f(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,v7K.h5f(v,halfHeight),v7K.L5f(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;v7K.K6f(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&v7K.J6f(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=v7K.z6f(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=v7K.j6f(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=v7K.q6f(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v7K.H6f(x,quotes.length);x++){xbase+=v7K.Q6f(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v7K.I6f(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v7K.b6f((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(v7K.c6f(this.layout.chartType,"volume_candle"))whitespace=v7K.r6f(candleWidth,2);}
if(v7K.m6f(quote.Open,quote.Close))continue;if(v7K.A6f(condition,STXChart.CANDLEUP)&&v7K.f6f(quote.Open,quote.Close))continue;if(v7K.t6f(condition,STXChart.CANDLEDOWN)&&v7K.Y6f(quote.Open,quote.Close))continue;if(v7K.l6f(condition,STXChart.CLOSEUP)&&v7K.G4n(quote.Close,quote.iqPrevClose))continue;if(v7K.u4n(condition,STXChart.CLOSEDOWN)&&v7K.B4n(quote.Close,quote.iqPrevClose))continue;if(v7K.V4n(condition,STXChart.CLOSEEVEN)&&v7K.Z4n(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.F4n(tick,panel.cacheLeft)||v7K.D4n(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.M4n((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.N4n((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(v7K.a4n(bottom,top));if(v7K.O4n(top,t)){if(v7K.k4n(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=v7K.e4n(t,top);top=t;}
if(v7K.T4n(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(v7K.d4n(cache.open,b))continue;if(v7K.h4n(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(v7K.L4n(flr_xbase,whitespace))+borderOffset,xend=v7K.K3n(Math.round(flr_xbase+whitespace),borderOffset);if(v7K.J3n(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var m76="oli",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=v7K.z3n(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=v7K.j3n(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=v7K.q3n(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v7K.H3n(x,quotes.length);x++){xbase+=v7K.Q3n(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v7K.I3n(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v7K.b3n((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(v7K.c3n(this.layout.chartType,"volume_candle"))whitespace=v7K.r3n(candleWidth,2);}
if(!quote.Open&&v7K.m3n(quote.Open,0))continue;if(v7K.A3n(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":(a3Q+m76+o26));if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.f3n(tick,panel.cacheLeft)||v7K.t3n(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.Y3n((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.l3n((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(v7K.G0n(bottom,top));if(v7K.u0n(top,t)){if(v7K.B0n(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=v7K.V0n(t,top);top=t;}
if(v7K.Z0n(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(v7K.F0n(cache.open,b))continue;if(v7K.D0n(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(v7K.M0n(flr_xbase,whitespace))+borderOffset,xend=v7K.N0n(Math.round(flr_xbase+whitespace),borderOffset);if(v7K.a0n(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(v7K.O0n(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=v7K.k0n(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=v7K.e0n(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v7K.g0n(x,quotes.length);x++){xbase+=v7K.n0n(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v7K.X0n(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v7K.U0n((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(v7K.x9n(condition,STXChart.CANDLEUP)&&v7K.W9n(quote.Open,quote.Close))continue;else if(v7K.R9n(condition,STXChart.CANDLEDOWN)&&v7K.C9n(quote.Open,quote.Close))continue;else if(v7K.i9n(condition,STXChart.CLOSEUP)&&v7K.H9n(quote.Close,quote.iqPrevClose))continue;else if(v7K.Q9n(condition,STXChart.CLOSEDOWN)&&v7K.I9n(quote.Close,quote.iqPrevClose))continue;else if(v7K.b9n(condition,STXChart.CLOSEEVEN)&&v7K.c9n(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.r9n(tick,panel.cacheLeft)||v7K.m9n(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v7K.A9n((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v7K.f9n((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=v7K.t9n(bottom,top);if(v7K.Y9n(top,t)){if(v7K.l9n(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v7K.G7n(t,top);top=t;}
if(v7K.u7n(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(v7K.B7n(cache.top,b))continue;if(v7K.V7n(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(v7K.Z7n(quote.Open,quote.Close)){var offset=this.offset;if(v7K.F7n(this.layout.chartType,"volume_candle")){offset=v7K.D7n(candleWidth,2);}
var x0=v7K.M7n(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.N7n((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(v7K.a7n(o,b)&&v7K.O7n(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=v7K.k7n(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=v7K.e7n(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v7K.g7n(x,quotes.length);x++){xbase+=v7K.n7n(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v7K.X7n(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v7K.U7n((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.x1n(tick,panel.cacheLeft)||v7K.W1n(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v7K.R1n((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v7K.C1n((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=v7K.i1n(bottom,top);if(v7K.H1n(top,t)){if(v7K.Q1n(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v7K.I1n(t,top);top=t;}
if(v7K.b1n(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(v7K.c1n(cache.top,b))continue;if(v7K.r1n(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(v7K.m1n(quote.Open,quote.Close)||(!quote.Open&&v7K.A1n(quote.Open,0))){var offset=this.offset;if(v7K.f1n(this.layout.chartType,"volume_candle")){offset=v7K.t1n(candleWidth,2);}
var x0=v7K.Y1n(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.l1n((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(v7K.G8n(o,b)&&v7K.u8n(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=v7K.B8n(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;v7K.q8n(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(v7K.P8n("Scatter",quote))scatter=quote.Scatter;for(var i=0;v7K.p8n(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(v7K.E8n(top,t))continue;if(v7K.s8n(top,b))continue;context.moveTo(v7K.w8n(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&v7K.o8n(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&v7K.S8n(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=v7K.y8n(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=v7K.v8n(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;v7K.t8n(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.Y8n(tick,panel.cacheLeft)||v7K.l8n(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.G2n((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.u2n((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(v7K.B2n(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&v7K.V2n(cache.close,previousOpen)&&v7K.Z2n(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(v7K.F2n(trend,1)&&v7K.D2n(cache.close,previousOpen)&&v7K.M2n(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(v7K.N2n(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(v7K.a2n(trend,null)&&v7K.O2n(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&v7K.k2n(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=v7K.e2n(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=v7K.T2n(panel.left,candleWidth,this.micropixels,1);for(var x=0;v7K.n2n(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(v7K.X2n(condition,"X")&&v7K.U2n(quote.Open,quote.Close))continue;else if(v7K.x5n(condition,"O")&&v7K.W5n(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(v7K.R5n(tick,panel.cacheLeft)||v7K.C5n(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.i5n((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.H5n((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(v7K.Q5n((quote.Close-quote.Open),box)));height=Math.abs(v7K.I5n((cache.open-cache.close),boxes));var voffset=v7K.b5n(height,2);start=cache.open;for(;v7K.c5n(boxes,0);boxes--){if(v7K.r5n(condition,"X")){context.moveTo(xxl+paddingLeft,v7K.m5n(start,paddingBottom,voffset));context.lineTo(v7K.v5n(xxr,paddingRight),v7K.g5n(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,v7K.Y5n(start,height,paddingTop,voffset));context.lineTo(v7K.K6n(xxr,paddingRight),v7K.J6n(start,paddingBottom,voffset));start-=height;}
else if(v7K.B6n(condition,"O")){context.moveTo(v7K.V6n((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,v7K.Z6n((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(v7K.F6n(xxl,paddingLeft),start+height-paddingBottom-voffset,v7K.D6n(xxl,paddingLeft),start+paddingTop-voffset,v7K.M6n((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&v7K.N6n(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=v7K.a6n(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=v7K.O6n(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=v7K.y6n(chart.tmpWidth,2),voffset=v7K.v6n(context.lineWidth,2);for(var x=0;v7K.g6n(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(v7K.n6n(condition,STXChart.CLOSEUP)&&v7K.X6n(quote.Close,quote.iqPrevClose))continue;else if(v7K.U6n(condition,STXChart.CLOSEDOWN)&&v7K.x4x(quote.Close,quote.iqPrevClose))continue;else if(v7K.W4x(condition,STXChart.CLOSEEVEN)&&v7K.R4x(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.C4x(tick,panel.cacheLeft)||v7K.i4x(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v7K.H4x((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v7K.Q4x((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=v7K.I4x(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.b4x((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.c4x((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(v7K.r4x(top,t)){if(v7K.m4x(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v7K.A4x(t,top);top=t;}
if(v7K.f4x(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(v7K.t4x(cache.top,b)&&v7K.Y4x(cache.bottom,t)){context.moveTo(xx,v7K.l4x(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(v7K.G3x(cache.open,t)&&v7K.u3x(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(v7K.B3x(xx,hlen),cache.open);}
if(v7K.V3x(cache.close,t)&&v7K.Z3x(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&v7K.F3x(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=v7K.D3x(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=v7K.M3x(chart.tmpWidth,2),voffset=v7K.N3x(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=v7K.a3x(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v7K.S3x(x,quotes.length);x++){xbase+=v7K.y3x(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v7K.v3x(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=v7K.g3x((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v7K.n3x(tick,panel.cacheLeft)||v7K.X3x(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=v7K.U3x(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v7K.x0x((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v7K.W0x((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(v7K.R0x(top,t)){if(v7K.C0x(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v7K.i0x(t,top);top=t;}
if(v7K.H0x(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(v7K.Q0x(cache.top,b)&&v7K.I0x(cache.bottom,t)){context.moveTo(xx,v7K.b0x(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(v7K.c0x(cache.open,t)&&v7K.r0x(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(v7K.m0x(xx,hlen),cache.open);}
if(v7K.A0x(cache.close,t)&&v7K.f0x(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var g4Q="noo",M26="jec",D06="ob",skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=v7K.t0x(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=v7K.Y0x(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;v7K.K9x(i,quotes.length);i++){xbase+=v7K.J9x(candleWidth,2);if(parameters.noSlopes)xbase+=v7K.z9x(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=v7K.j9x(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=v7K.q9x((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&v7K.P9x(quote[field],0))continue;if(v7K.p9x(tick,panel.cacheLeft)||v7K.E9x(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(v7K.s9x((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(v7K.w9x(x,panel.right))lastQuote=quote;if(v7K.o9x(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color==(D06+M26+Y4Q)){pattern=color.pattern;color=color.color;}
if(v7K.S9x(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||v7K.y9x(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(v7K.v9x(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(v7K.g9x((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=v7K.n9x(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[v7K.X9x(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(v7K.U9x(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(v7K.x7x(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=v7K.W7x(yaxisLabelStyle,(g4Q+A3Q))?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],v7K.R7x(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=v7K.C7x(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;v7K.i7x(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(v7K.H7x(tick,panel.cacheLeft)||v7K.Q7x(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&v7K.I7x(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(v7K.b7x((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+v7K.c7x((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(v7K.r7x(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(v7K.m7x(firstX,null))firstX=x;var y=cache[field];if(v7K.A7x(firstY,null))firstY=y;if(first){first=false;if(v7K.f7x(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(v7K.t7x((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=v7K.Y7x(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(v7K.l7x(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(v7K.G1x(firstY,t))firstY=t;}
else{if(v7K.u1x(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&v7K.B1x(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var context=this.chart.context,c=this.canvasStyle("stx_mountain_chart");if(c.width&&v7K.V1x(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&v7K.Z1x(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);var strokeStyle=c.borderTopColor;if(strokeStyle&&v7K.F1x(strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;v7K.D1x(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=v7K.M1x(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(v7K.N1x(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(v7K.a1x(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=v7K.O1x(chart.dataSet.length,chart.scroll);if(v7K.k1x(leftTick,0)){context.moveTo(x,y);}
else if(v7K.e1x(leftTick,0)){var baseline=chart.dataSet[v7K.T1x(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(v7K.d1x((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+v7K.h1x((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=v7K.L1x(this.layout.candleWidth,4);if(v7K.K8x(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(v7K.J8x(y,t))y=t;if(v7K.z8x(y,b))y=b;context.lineTo(x,y);x+=v7K.j8x(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(v7K.q8x(y,t))y=t;if(v7K.P8x(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(v7K.p8x(y,t))y=t;if(v7K.E8x(y,b))y=b;context.lineTo(x,y);x+=v7K.s8x(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(v7K.w8x(y,t))y=t;if(v7K.o8x(y,b))y=b;context.lineTo(x,y);}
x+=v7K.S8x(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(v7K.y8x(y,t))y=t;if(v7K.v8x(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&v7K.g8x(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(v7K.n8x(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(v7K.X8x(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;v7K.U8x(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||v7K.x2x(panel.min,0))&&v7K.W2x(price,panel.min))continue;if((panel.max||v7K.R2x(panel.max,0))&&v7K.C2x(price,panel.max))continue;var labelDecimalPlaces=null;if(v7K.i2x(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(v7K.H2x(yAxis.shadow,1000))labelDecimalPlaces=2;if(v7K.Q2x(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||v7K.I2x(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var X86="headsUpHR";if(this.runPrepend(X86,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=J56+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+v7K.S06;if(v7K.b2x(m,G8Q))m=z0Q+m;var d=prices.DT.getDate();if(v7K.c2x(d,G8Q))d=z0Q+d;var h=prices.DT.getHours();if(v7K.r2x(h,G8Q))h=z0Q+h;var mn=prices.DT.getMinutes();if(v7K.m2x(mn,G8Q))mn=z0Q+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+M3Q+d+M3Q+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+M3Q+d+J56+h+a5Q+mn;var isSecond=(chart.xAxis.activeTimeUnit&&v7K.A2x(chart.xAxis.activeTimeUnit,STX.SECOND))||v7K.f2x(this.layout.timeUnit,P1Q),isMS=(chart.xAxis.activeTimeUnit&&v7K.t2x(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||v7K.Y2x(this.layout.timeUnit,Z1Q);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(v7K.l2x(sec,G8Q))sec=z0Q+sec;this.controls.floatDate.innerHTML+=(a5Q+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(v7K.G5x(mil,G8Q))mil=z0Q+mil;if(v7K.u5x(mil,W5Q))mil=z0Q+mil;this.controls.floatDate.innerHTML+=(a5Q+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=A4Q;}
}
this.runAppend(X86,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){this.magnetizedPrice=null;if(this.runPrepend((e0Q+H26+F7Q+C0Q+Q56+X1Q+f26),arguments))return ;if((v7K.B5x(this.currentVectorParameters.vectorType,"annotation")||v7K.V5x(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(v7K.Z5x(this.currentVectorParameters.vectorType,"projection"))return ;if(v7K.F5x(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(v7K.D5x(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(v7K.M5x(STXChart.crosshairX,this.left),chart);if(v7K.N5x(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(v7K.a5x(this.layout.chartType,"bar")||v7K.O5x(this.layout.chartType,"candle")||v7K.k5x(this.layout.chartType,"colored_bar")||v7K.e5x(this.layout.chartType,"hollow_candle")||v7K.T5x(this.layout.chartType,"volume_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;v7K.d5x(i,fields.length);i++){var fp=prices[fields[i]];if(v7K.h5x(Math.abs(price-fp),closest)){closest=Math.abs(v7K.L5x(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=v7K.K6x(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,v7K.J6x(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(v7K.z6x(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var V76="doDisplayCrosshairs",B5Q="ir",L5Q="ispl",a96="doD";if(this.runPrepend((a96+L5Q+H26+I5Q+i8Q+P3Q+E0Q+a3Q+a3Q+O9Q+H26+B5Q+a3Q),arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(v7K.j6x(this.currentVectorParameters.vectorType,A4Q)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(v7K.q6x(this.controls.crossX.style.display,A4Q)){this.controls.crossX.style.display=A4Q;this.controls.crossY.style.display=A4Q;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,C66);}
else{STX.appendClassName(this.container,C66);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=h16;}
}
}
this.runAppend(V76,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var N76="undisplayCrosshairs";if(this.runPrepend(N76,arguments))return ;if(this.controls.crossX){if(v7K.P6x(this.controls.crossX.style.display,l2Q)){this.controls.crossX.style.display=l2Q;this.controls.crossY.style.display=l2Q;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=l2Q;}
STX.unappendClassName(this.container,C66);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(N76,arguments);}
;STXChart.prototype.modalBegin=function(){var u66="modal";this.openDialog=u66;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=H9Q;this.openDialog=A4Q;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var k76="updateChartAccessories";if(this.runPrepend(k76,arguments))return ;this.accessoryTimer=C9Q;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(v7K.p6x(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/v7K.o06),h56))+j8Q;floatDate.style.bottom=(v7K.M6x(this.chart.canvasHeight,chart.panel.bottom))+j8Q;}
}
this.headsUpHR();this.runAppend(k76,arguments);}
;STXChart.prototype.mousemove=function(e$){var d86="mo",e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend((d86+l4Q+a3Q+f26+e0Q+E0Q+j6Q+f26),arguments))return ;if(!this.displayInitialized)return ;if(v7K.N6x(this.openDialog,A4Q))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(y56,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(v7K.a6x(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||v7K.O6x(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){var Q7Q="ined",K9Q="ndef";if(typeof x===(l4Q+K9Q+Q7Q))x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v7K.k6x(i,arr.length);i++){var yAxis=arr[i];if(v7K.e6x(yAxis.left,x)&&v7K.T6x(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(v7K.d6x(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||v7K.h6x(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(v7K.L6x(STXChart.crosshairX,this.left)&&v7K.K44(STXChart.crosshairX,this.right)&&v7K.J44(STXChart.crosshairY,this.top)&&v7K.z44(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=v7K.j44(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&v7K.q44(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(v7K.P44(this.cx,this.currentPanel.right)||v7K.p44(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(v7K.E44(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=v7K.s44(STXChart.crosshairX,this.grabStartX),dy=v7K.w44(STXChart.crosshairY,this.grabStartY);if(v7K.o44(dx,0)&&v7K.S44(dy,0))return ;if(v7K.y44(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&v7K.v44(this.grabMode,"pan")&&(v7K.g44(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(v7K.n44(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(v7K.X44(this.grabMode,"zoom-x"))dy=0;else if(v7K.U44(this.grabMode,"zoom-y"))dx=0;push=v7K.x34(dx,25);var centerMe=true;if(v7K.W34(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(v7K.R34(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=v7K.C34((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(v7K.i34(Math.abs(pct),0.2))this.grossDragging=new Date();else this.grossDragging=0;if(v7K.H34(pct,0.1)){newCandleWidth=v7K.Q34(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=v7K.I34(this.layout.candleWidth,1.1);}
if(STX.ipad){if(v7K.b34(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&v7K.c34(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((v7K.r34(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(v7K.m34((this.chart.width/newCandleWidth),0.499));if(v7K.A34(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(v7K.f34((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(v7K.t34((this.chart.width/newCandleWidth),0.499));if(v7K.Y34(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(v7K.l34(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=v7K.G04(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(v7K.u04(this.grabStartZoom,yAxis.height)){if(v7K.B04(yAxis.zoom,yAxis.height))yAxis.zoom=v7K.V04(yAxis.height,1);}
else{if(v7K.Z04(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(v7K.F04(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(v7K.D04(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(v7K.M04(dx,this.layout.candleWidth));this.microscroll=v7K.N04(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;if(v7K.a04(Math.abs(chart.scroll-this.grabStartScrollX-push),20))this.grossDragging=new Date();else this.grossDragging=0;chart.scroll=this.grabStartScrollX+push;if(v7K.O04(chart.scroll,1))chart.scroll=1;if(v7K.k04(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=v7K.e04((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(v7K.T04(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){if(window.requestAnimationFrame){window.requestAnimationFrame(clsrFunc(this));}
else if(this.grossDragging){setTimeout(function(stx){return function retest(){if(v7K.d04(new Date()-stx.grossDragging,500))setTimeout(retest,100);else{stx.grossDragging=0;stx.draw();}
}
;}
(this),100);}
else{this.draw();}
}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(v7K.h04(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(v7K.L04(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(v7K.K94(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&v7K.J94(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&v7K.z94(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var v76="ud",radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(v7K.j94(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(v7K.q94(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;v7K.P94(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(v7K.p94(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(v7K.E94(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(v7K.s94(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;v7K.w94(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(v7K.o94(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(v7K.S94(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(v7K.y94(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(v7K.v94(cy-radius,y)&&v7K.g94(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;v7K.n94(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&v7K.X94(y,0))continue;if(v7K.U94(cy-radius,y)&&v7K.x74(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((v7K.W74(renderer.params.subtype,"step")||v7K.R74(series.type,"step"))&&v7K.C74(bar,0)){var py=renderer.caches[series.field][v7K.i74(bar,1)];if((v7K.H74(cy,y)&&v7K.Q74(cy,py))||(v7K.I74(cy,y)&&v7K.b74(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,(a3Q+Y4Q+v76+I5Q)];drawingToMeasure=null;}
if(v7K.c74(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;v7K.r74(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(v7K.m74(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(v7K.A74(this.cy,m.offsetHeight,f8Q),v7K.m06),right=Math.min(v7K.g74(this.chart.canvasWidth,(this.cx-u2Q)),v7K.n74(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+j8Q;m.style.right=right+j8Q;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var L26="bloc",z5Q="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[v7K.m06];if(!mi)return ;var overlayTrashCan=m.children[v7K.S06].children[v7K.m06],mouseDeleteInstructions=m.children[v7K.S06].children[v7K.S06];if(!forceShow&&!message){mi.innerHTML=A4Q;m.style.display=l2Q;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=l2Q;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=l2Q;}
}
else{if(!message)message=A4Q;if(forceShow&&!message){mi.style.backgroundColor=A4Q;mi.style.color=A4Q;mi.style.display=l2Q;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=T26;}
else{mi.style.backgroundColor=A4Q;mi.style.color=A4Q;mi.style.display=T26;}
mi.innerHTML=message;if(type)m.children[v7K.S06].className=z5Q+type;m.style.display=T26;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=l2Q;mouseDeleteInstructions.style.display=l2Q;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=T26;mouseDeleteInstructions.style.display=l2Q;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=(L26+i9Q);}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var J4Q="setMeasure",u7Q="no",d3Q="measureLit",O2Q="rs",a8Q="B",j9Q="nlit",z4Q="reU",A8Q="mMeasure",g76="as",k96="Me";if(this.runPrepend((a3Q+f26+Y4Q+k96+g76+Q16+f26),arguments))return ;var m=$$(A8Q),message=A4Q;if(!price1){if(m&&v7K.X74(m.className,t56))m.className=(e0Q+M0Q+M56+z4Q+j9Q);if(!this.anyHighlighted&&v7K.U74(this.currentVectorParameters.vectorType,A4Q))this.clearMeasure();}
else{var distance=v7K.x14(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=v7K.W14((price2-price1),price1);if(v7K.R14(Math.abs(pct),U56)){pct=Math.round(v7K.C14(pct,W5Q));}
else if(v7K.i14(Math.abs(pct),j96)){pct=v7K.H14(Math.round(pct*d2Q),G8Q);}
else{pct=v7K.Q14(Math.round(pct*m2Q),W5Q);}
if(this.internationalizer){pct=this.internationalizer.percent.format(v7K.I14(pct,W5Q));}
else{pct=pct+M9Q;}
message+=O86+pct+p7Q;var ticks=Math.abs(v7K.b14(tick2,tick1));ticks=Math.round(ticks)+v7K.S06;var barsStr=(a8Q+H26+O2Q);if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=J56+ticks+J56+barsStr;if(m){if(v7K.c14(m.className,d3Q))m.className=(e0Q+f26+g76+Q16+f26+G86+b2Q);m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=T26;m.children[v7K.m06].style.display=T26;if(price1){m.children[v7K.m06].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=(u7Q+q2Q);m.children[v7K.m06].innerHTML=A4Q;}
}
this.runAppend(J4Q,arguments);}
;STXChart.prototype.clearMeasure=function(){var m0Q="mM",m=$$((m0Q+f26+H26+M56+Q9Q));if(m){if(v7K.r14(m.className,t56))m.className=t56;m.innerHTML=A4Q;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var M8Q="stx_panel_drag",borderEdge=Math.round(v7K.m14(STXChart.resizingPanel.right,v7K.a06))+h56;STX.clearCanvas(this.chart.tempCanvas,this);var y=v7K.A14(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(M8Q),l96,this.chart.tempCanvas.context,D2Q,{}
);STXChart.resizingPanel.handle.style.top=(v7K.f14(y,STXChart.resizingPanel.handle.offsetHeight/v7K.o06))+j8Q;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=T26;m.children[v7K.m06].style.display=l2Q;m.children[v7K.S06].style.display=T26;if(m.children[v7K.o06])m.children[v7K.o06].style.display=l2Q;m.style.top=(v7K.t14(this.backOutY(STXChart.crosshairY),f8Q))+(j8Q);m.style.right=v7K.Y14(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-u2Q),j8Q);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=v7K.m06;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=v7K.U14((bar+h56),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-v7K.S06;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(v7K.x84(this.layout.chartType,"volume_candle")){var pixel=v7K.W84(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(v7K.j84(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[v7K.q84(this.chart.dataSegment.length,1)].leftOffset+v7K.P84(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(v7K.p84(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(v7K.E84((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;v7K.s84(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=v7K.w84(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+v7K.o84(this.chart.dataSegment[bar].candleWidth,2);if(v7K.S84(bar,0)||(v7K.y84(pixel,left)&&v7K.v84(pixel,right)))break;else if(v7K.g84(pixel,left))bar-=Math.max(1,Math.round(v7K.n84(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(v7K.X84(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(v7K.U84(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;v7K.x24(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(v7K.W24(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,v7K.R24(i,1));else if(v7K.C24(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(v7K.i24(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(v7K.H24((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=v7K.Q24(chart.dataSet.length,chart.scroll,1);if(v7K.s24(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(v7K.w24((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=v7K.o24(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[v7K.m24(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[v7K.A24(this.chart.dataSegment.length,1)].leftOffset){if(v7K.f24(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=v7K.t24(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(v7K.Y24((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=v7K.l24(yax.bottom,y);var price=yax.low+(v7K.G54(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(v7K.u54(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(v7K.R54(y,v7K.m06)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&v7K.C54(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=v7K.i54((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=v7K.H54(Math.log(p),Math.LN10),height=yax.height;y=v7K.Q54(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(v7K.I54(a,0)&&v7K.b54(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(v7K.c54(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(v7K.r54(a,0)&&v7K.m54(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return v7K.A54(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;v7K.f54(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var x3Q="undo";if(this.runPrepend(x3Q,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=C9Q;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,a86,u26);STX.swapClassName(this.controls.crossY,a86,u26);STXChart.drawingLine=D2Q;}
this.runAppend(x3Q,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(v7K.t54(parameters.pattern,"none"))return ;if(v7K.Y54(confineToPanel,true))confineToPanel=this.chart.panel;if(v7K.l54(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(v7K.G64(type,"ray")){bigX=10000000;if(v7K.u64(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(v7K.B64(type,"line")||v7K.V64(type,"horizontal")||v7K.Z64(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=v7K.F64(x1,x0),ydelta=v7K.D64(y1,y0),p,q,r;for(var edge=0;v7K.M64(edge,4);edge++){if(v7K.N64(edge,0)){p=-xdelta;q=-(v7K.a64(edgeLeft,x0));}
if(v7K.O64(edge,1)){p=xdelta;q=(v7K.k64(edgeRight,x0));}
if(v7K.e64(edge,2)){p=-ydelta;q=-(v7K.T64(edgeTop,y0));}
if(v7K.d64(edge,3)){p=ydelta;q=(v7K.h64(edgeBottom,y0));}
r=v7K.L64(q,p);if((y1||v7K.K4y(y1,0))&&v7K.J4y(p,0)&&v7K.z4y(q,0)){return false;}
if(v7K.j4y(p,0)){if(v7K.q4y(r,t1))return false;else if(v7K.P4y(r,t0))t0=r;}
else if(v7K.p4y(p,0)){if(v7K.E4y(r,t0))return false;else if(v7K.s4y(r,t1))t1=r;}
}
var x0clip=x0+v7K.w4y(t0,xdelta),y0clip=y0+v7K.o4y(t0,ydelta),x1clip=x0+v7K.S4y(t1,xdelta),y1clip=y0+v7K.y4y(t1,ydelta);if(!y1&&v7K.v4y(y1,0)&&!y0&&v7K.g4y(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(v7K.n4y(v.x0,edgeRight))return false;if(v7K.X4y(v.x0,edgeLeft))return false;}
else if(!y1&&v7K.U4y(y1,0)){if(v7K.x3y(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(v7K.W3y(v.x0,edgeRight))return false;if(v7K.R3y(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v7K.C3y(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(v7K.i3y(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v7K.H3y(pattern,"solid")){pattern=null;}
else if(v7K.Q3y(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v7K.I3y(pattern,"dashed")){pattern=[v7K.b3y(context.lineWidth,5),v7K.c3y(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var Q76=6855970,P9Q=6854388,Z56=1709340048,e3Q=87173115;if(!parameters)parameters={}
;if(v7K.r3y(parameters.pattern,"none"))return ;if(v7K.m3y(confineToPanel,true))confineToPanel=this.chart.panel;if(v7K.A3y(context,null)||typeof (context)=="undefined")context=this.chart.context;if(v7K.f3y(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;var A36=-e3Q,v36=-Z56,e36=v7K.o06;for(var y36=v7K.S06;v7K.G36.x36(y36.toString(),y36.toString().length,P9Q)!==A36;y36++){context.lineTo(x+arrowHeight,y);this.calculateYAxisRange(panel,yAxis,low,high);this.transformDataSetPre(this,tmpHist);e36+=v7K.o06;}
if(v7K.G36.x36(e36.toString(),e36.toString().length,Q76)!==v36){context.moveTo(xxl+paddingLeft,v7K.m5n(start,paddingBottom,voffset));plotSpline(points,tension,context);dataCallback.quotes.shift();stx.panelDown(panel);return x3N*J3N;}
if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v7K.t3y(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v7K.Y3y(pattern,"solid")){pattern=null;}
else if(v7K.l3y(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v7K.G0y(pattern,"dashed")){pattern=[v7K.u0y(context.lineWidth,5),v7K.B0y(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;v7K.V0y(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=v7K.Z0y(x1,x0),ydelta=v7K.F0y(y1,y0),p,q,r;for(var edge=0;v7K.D0y(edge,4);edge++){if(v7K.M0y(edge,0)){p=-xdelta;q=-(v7K.N0y(edgeLeft,x0));}
if(v7K.a0y(edge,1)){p=xdelta;q=(v7K.O0y(edgeRight,x0));}
if(v7K.k0y(edge,2)){p=-ydelta;q=-(v7K.e0y(edgeTop,y0));}
if(v7K.T0y(edge,3)){p=ydelta;q=(v7K.d0y(edgeBottom,y0));}
r=v7K.h0y(q,p);if((y1||v7K.L0y(y1,0))&&v7K.K9y(p,0)&&v7K.J9y(q,0)){return false;}
if(v7K.z9y(p,0)){if(v7K.j9y(r,t1))return false;else if(v7K.q9y(r,t0))t0=r;}
else if(v7K.P9y(p,0)){if(v7K.p9y(r,t0))return false;else if(v7K.E9y(r,t1))t1=r;}
}
var x0clip=x0+v7K.s9y(t0,xdelta),y0clip=y0+v7K.w9y(t0,ydelta),x1clip=x0+v7K.o9y(t1,xdelta),y1clip=y0+v7K.S9y(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(v7K.y9y(parameters.pattern,"none"))return ;if(v7K.v9y(confineToPanel,true))confineToPanel=this.chart.panel;if(v7K.g9y(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v7K.n9y(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v7K.X9y(pattern,"solid")){pattern=null;}
else if(v7K.U9y(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v7K.x7y(pattern,"dashed")){pattern=[v7K.W7y(context.lineWidth,5),v7K.R7y(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=C9Q;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=C9Q;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=D2Q;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=C9Q;this.adjustDrawings();this.draw();this.changeOccurred(c16);STX.swapClassName(this.controls.crossX,a86,u26);STX.swapClassName(this.controls.crossY,a86,u26);}
}
else{this.changeOccurred(U86);STXChart.drawingLine=H9Q;STX.swapClassName(this.controls.crossX,u26,a86);STX.swapClassName(this.controls.crossY,u26,a86);}
return H9Q;}
return D2Q;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(v7K.C7y(y,panel.top)&&v7K.i7y(y,panel.bottom))return panel;}
return C9Q;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(n8Q,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(v7K.H7y(Date.now()-this.mouseTimer,Y5Q))){this.changeOccurred(c16);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=C9Q;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=D2Q;}
}
if(this.repositioningBaseline){this.repositioningBaseline=C9Q;this.chart.panel.yAxis.scroll=v7K.Q7y(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/v7K.o06);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=D2Q;if(!this.displayInitialized)return ;this.grabbingScreen=D2Q;if(v7K.I7y(this.openDialog,A4Q)){if(STXChart.insideChart)STX.unappendClassName(this.container,E56);return ;}
if(this.grabOverrideClick){STX.unappendClassName(this.container,E56);this.grabOverrideClick=D2Q;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,E56);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=C9Q;return ;}
if(!e)e=event;if((e.which&&v7K.b7y(e.which,v7K.o06))||(e.button&&v7K.c7y(e.button,v7K.o06))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();e.stopPropagation();return D2Q;}
else{return H9Q;}
}
if(v7K.r7y(e.clientX,this.left)||v7K.m7y(e.clientX,this.right))return ;if(v7K.A7y(e.clientY,this.top)||v7K.f7y(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(n8Q,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,E56);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(v7K.t7y(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&v7K.Y7y(e.which,2))||(e.button&&v7K.l7y(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;if(v7K.G1y(e.clientX,this.left)&&v7K.u1y(e.clientX,this.right)&&v7K.B1y(e.clientY,this.top)&&v7K.V1y(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;v7K.Z1y(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(v7K.F1y(this.layout.chartType,"baseline_delta")&&v7K.D1y(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(v7K.M1y(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=v7K.N1y(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(v7K.a1y(chart.baseline.actualLevel,y0)&&v7K.O1y(chart.baseline.actualLevel,y1)&&v7K.k1y(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend((e0Q+o56+a3Q+V66+C56+C0Q),arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var J3Q="rightClickOverlay";if(this.runPrepend(J3Q,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(J3Q,arguments);}
;STXChart.prototype.removeOverlay=function(name){var W4Q="removeOverlay";if(this.runPrepend(W4Q,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-v7K.S06){this.removeOverlay(sd.name);}
else if(v7K.e1y(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(F96);this.runAppend(W4Q,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){var l16="ain";if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(v7K.T1y("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&v7K.d1y(obj.parameters.chartType,(e0Q+o56+C0Q+Y4Q+l16)))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var Y1Q=9161479,C1Q=5049404,L66=194607283,v56=1778491426,mIterator=0,cIterator=0;var g36=-v56,d36=L66,f36=v7K.o06;for(var T36=v7K.S06;v7K.G36.x36(T36.toString(),T36.toString().length,C1Q)!==g36;T36++){this.drawBarChartHighPerformance(panel,K26,STXChart.CLOSEDOWN);this.headsUpHR();f36+=v7K.o06;}
if(v7K.G36.x36(f36.toString(),f36.toString().length,Y1Q)!==d36){points.unshift([x,bottom]);plugin.listener(this,event);return P9N>=F9N;}
while(parameters.data&&v7K.h1y(mIterator,stx.masterData.length)&&v7K.L1y(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(v7K.K8y(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(v7K.J8y(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[v7K.z8y(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb();this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){var S56="es",k06="R";if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(v7K.j8y(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;v7K.q8y(i,compareArray.length);i++){if(v7K.P8y(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs[(k06+S56+l4Q+K56+J56)+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var O3Q="rendererAction",R26="Ac",Y8Q="rer",U1Q="ren";if(this.runPrepend((U1Q+o26+f26+Y8Q+R26+Y4Q+H5Q+C0Q),arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&v7K.p8y(phase,(x06+f26+P3Q+a0Q+H26+I5Q)))continue;if(!renderer.params.overChart&&v7K.E8y(phase,G06))continue;if(!this.panels[renderer.params.panel])continue;if(v7K.s8y(this.panels[renderer.params.panel].chart,chart))continue;if(v7K.w8y(phase,j86)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(O3Q,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var H3Q="nta",H96="ap";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&v7K.o8y(parameters.minimum,0))||(!parameters.maximum&&v7K.S8y(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&v7K.y8y(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&v7K.v8y(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=v7K.g8y(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=v7K.n8y(t,1)?(top+t):(top+(v7K.X8y(height,t)));if(b)bottom=v7K.U8y(b,1)?(v7K.x2y(bottom,b)):(v7K.W2y(bottom,(height*b)));var multiplier=v7K.R2y((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(v7K.C2y(parameters.type,"step")||v7K.i2y(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||v7K.H2y(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries((F7Q+H96),"stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=v7K.Q2y(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;v7K.N2y(i,quotes.length);i++){xbase+=v7K.a2y(cw,2);if(isStep)xbase+=v7K.O2y(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=v7K.k2y(cw,2);if(v7K.e2y(x,null)&&v7K.T2y(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=v7K.d2y((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&v7K.h2y(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(v7K.L2y(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&v7K.K5y(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(v7K.J5y(x,panel.right))lastQuote=quote;if(this.extendLastTick&&v7K.z5y(i,quotes.length-1)){x+=this.offset;}
if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo((a0Q+E16),x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=v7K.j5y(bottom,((val-min)*multiplier));}
if(v7K.q5y(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;v7K.P5y(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+v7K.p5y(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[v7K.E5y(i,1)]&&v7K.s5y(yValueCache[i-1],0)){for(var bf=v7K.w5y(i,1);v7K.o5y(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[v7K.S5y(points.length,1)][1];}
}
if(!started){started=true;var leftTick=v7K.y5y(chart.dataSet.length,chart.scroll);if(v7K.v5y(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=v7K.g5y(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo("gap",x,y0);else seriesPlotter.moveTo("gap",x,y0);}
else seriesPlotter.lineTo("line",x,y0);}
if(!gap||parameters.gaps){if(isStep)points.unshift([x,y0]);points.unshift([x0,y0]);}
if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.unshift([x,bottom]);points.unshift([x0,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo((f3Q+q2Q),x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&v7K.n5y(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&v7K.X5y(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(v7K.U5y(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;v7K.x6y(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]((e0Q+E0Q+l4Q+H3Q+l5Q),points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,"line");this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:"series","args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(v7K.W6y(interval,(o26+H26+I5Q)))return H9Q;if(v7K.R6y(interval,H66))return H9Q;if(v7K.C6y(interval,C96))return H9Q;return D2Q;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var K2Q="iv",w56="ac",D7Q="llb",B4Q="ei",x16="us",w0Q="iod",X96="ge",Q5Q="han",X66="ca";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(interval){if(v7K.i6y(interval,"year")){interval="month";if(!period)period=1;period=v7K.H6y(period,12);}
var getDifferentData=false;if(this.chart.symbol){var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(v7K.Q6y(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";if(v7K.I6y(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(v7K.b6y(this.layout.interval,interval))getDifferentData=true;}
if(v7K.c6y(timeUnit,this.layout.timeUnit))getDifferentData=true;}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.layout.timeUnit=timeUnit;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((X66+C0Q+C0Q+E0Q+Y4Q+J56+g26+Q5Q+X96+J56+A3Q+f26+P3Q+w0Q+f16+b2Q+I5Q+J56+B26+f26+X66+x16+f26+J56+C0Q+B4Q+Y4Q+O9Q+x56+J56+o26+v26+i8Q+H26+D7Q+w56+i9Q+J56+E0Q+P3Q+J56+Y3Q+q86+Y4Q+f26+H86+P3Q+K2Q+f26+P3Q+J56+H26+P3Q+f26+J56+a3Q+Q56));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(v7K.r6y(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(v7K.m6y(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=v7K.A6y(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&v7K.f6y(chart.dataSegment.length,0)){if(v7K.t6y(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=v7K.Y6y(chart.dataSegment.length,1);}
if(v7K.l6y(pos,chart.dataSegment.length)){dt=chart.dataSegment[v7K.G4L(chart.dataSegment.length,1)].DT;pos=v7K.u4L(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&v7K.B4L(chart.dataSegment.length,0)){for(var i=v7K.V4L(chart.dataSet.length,1);v7K.Z4L(i,0);i--){var nd=chart.dataSet[i].DT;if(v7K.F4L(nd.getTime(),dt.getTime())){chart.scroll=(v7K.D4L(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(v7K.M4L(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=v7K.N4L(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;v7K.a4L(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;v7K.O4L(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){if(v7K.k4L(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=v7K.e4L(quotes[p].Adj_Close,quotes[p].Close);}
if(v7K.T4L("High",quotes[p]))if(v7K.d4L(quotes[p].High*ratio,quote.High))quote.High=v7K.h4L(quotes[p].High,ratio);if(v7K.L4L("Low",quotes[p]))if(v7K.K3L(quotes[p].Low*ratio,quote.Low))quote.Low=v7K.J3L(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(v7K.z3L("Close",quotes[p])&&v7K.j3L(quotes[p].Close,null))quote.Close=v7K.q3L(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var b4Q="ek",d1=quotes[v7K.P3L(p,1)].DT,d2=quotes[p].DT;if(v7K.p3L(interval,(n5Q+f26+b4Q))){if(v7K.E3L(d2.getDay(),d1.getDay()))return true;}
else if(v7K.s3L(interval,"month")){if(v7K.w3L(d2.getMonth(),d1.getMonth()))return true;}
else{if(v7K.o3L(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var nextBar=v7K.S3L(interval,periodicity),d1=new Date(quotes[position].DT);if(v7K.y3L(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(v7K.v3L(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(v7K.g3L(quotes[position].DT.getMinutes(),nextBar)){if(v7K.n3L(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(v7K.X3L(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((v7K.U3L(interval,"week")||v7K.x0L(interval,"month"))&&!dontRoll){for(i=1;v7K.W0L(i,periodicity);i++){while(v7K.R0L(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(v7K.C0L(i,periodicity)){p++;if(v7K.i0L(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&v7K.H0L(interval,(Y4Q+G0Q))&&v7K.Q0L(periodicity,1)){for(i=1;v7K.I0L(i,periodicity);i++){p=position+i;if(v7K.b0L(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(v7K.c0L(p,0)&&v7K.r0L(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;v7K.m0L(i,periodicity);i++){p=position+i;if(v7K.A0L(p,0)&&v7K.f0L(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;V(v7K.m06);Z(v7K.S06);F(v7K.o06);D(v7K.f06);E(v7K.Y06);N(v7K.N1Q);S(R1Q);STXChart.prototype.displayChart=function(chart){var t8Q="do",e56="adow",l26="e_s",A9Q="x_candl",q7Q="pa",J5Q="ans",x86="up",n16="can",R76="low",L16="_ho",h86="agi",i86="x_k",noBorders=(v7K.t0L(this.layout.candleWidth-chart.tmpWidth,2)&&v7K.Y0L(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(v7K.l0L(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up",(a26+i86+h86+m56+o26+C56+C0Q));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(v7K.G9L(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(v7K.u9L(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(v7K.B9L(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(v7K.V9L(chartType,"wave")){this.drawWaveChart(panel);}
else if(v7K.Z9L(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(v7K.F9L(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(v7K.D9L(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(v7K.M9L(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(v7K.N9L(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(v7K.a9L(chartType,"hollow_candle")||v7K.O9L(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,(a3Q+Y4Q+k5Q+L16+a0Q+R76+m56+n16+t66+m56+x86),STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,(Y4Q+P3Q+J5Q+q7Q+P3Q+x26+Y4Q),v7K.k9L(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",v7K.e9L(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",v7K.T9L(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,v7K.d9L(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,v7K.h9L(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,v7K.L9L(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(v7K.K7L(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor((a3Q+Y4Q+A9Q+l26+O9Q+e56+m56+t8Q+n5Q+C0Q)),coloredShadow=(v7K.J7L(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){var T16="olor",M66="eft";if(v7K.z7L(mode,"shadow")){if(coloredShadow){if(v7K.j7L(quote.Close,quote.Open))return coloredShadowUp;else if(v7K.q7L(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(v7K.P7L(mode,"solid")){if(v7K.p7L(quote.Close,quote.Open))return stxCandleUpColor;else if(v7K.E7L(quote.Close,quote.Open))return stxCandleDownColor;else if(v7K.s7L(quote.Close,quote.Open))return stxCandleShadow;}
else if(v7K.w7L(mode,"outline")){var styleArray1;if(v7K.o7L(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(v7K.S7L(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1[(U9Q+P3Q+v2Q+P3Q+M3Q+a0Q+M66+M3Q+g26+T16)];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(v7K.y7L(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(v7K.v7L(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(v7K.g7L(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&v7K.n7L(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(v7K.X7L(s,"over")?0:v7K.U7L(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(v7K.x1L(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=v7K.W1L(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=v7K.j1L(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(v7K.Z1L(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;v7K.F1L(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[v7K.D1L(i,1)],trueRange=Math.max(Math.max(v7K.M1L(prices.High,prices.Low),v7K.N1L(prices.High,pd.Close)),v7K.a1L(pd.Close,prices.Low));total+=trueRange;if(v7K.O1L(i,period))total-=chart.dataSet[v7K.k1L(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=v7K.e1L(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=v7K.T1L(this.chart.dataSet.length,1);v7K.d1L(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(v7K.h1L(chart.maxTicks,3));if(v7K.L1L(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=v7K.K8L(chart.maxTicks,leftPad);if(v7K.J8L(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=v7K.z8L(chart.maxTicks,chart.dataSet.length);}
if(v7K.j8L(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(v7K.q8L(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(v7K.P8L(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(v7K.p8L(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
this.preferences.whitespace=v7K.E8L((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=v7K.s8L(chart.dataSet.length,chart.scroll,1);for(var i=-1;v7K.a8L(i,chart.scroll)&&v7K.O8L(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(v7K.k8L(position,chart.dataSet.length)&&v7K.e8L(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(v7K.T8L(chart.baseline.actualLevel,null)&&v7K.d8L(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(v7K.h8L(position,0)){chart.dataSegment.push(null);}
}
if(v7K.L8L(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;v7K.K2L(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;v7K.J2L(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(v7K.z2L(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=v7K.j2L(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+v7K.Z2L(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+v7K.F2L(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return v7K.D2L(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;v7K.M2L(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;v7K.N2L(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(v7K.a2L(bar.DT.getTime(),dt.getTime())){this.chart.scroll=v7K.O2L(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;v7K.k2L(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var m26='ed',I7Q='fi',D76="gh",i0Q="ri";if(v7K.e2L(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+v7K.T2L(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+v7K.d2L(margin,2);}
catch(e){width=yax.width;}
var x=v7K.h2L(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(v7K.l2L(yax.position,null)?panel.chart.yAxis.position:yax.position);if(v7K.G5L(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign=(i0Q+D76+Y4Q);}
if(v7K.u5L(y+(height/2),yax.bottom))y=v7K.B5L(yax.bottom,(height/2));if(v7K.V5L(y-(height/2),yax.top))y=yax.top+(v7K.Z5L(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])==(O4Q+h26+k7Q+I7Q+a2Q+m26)){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,v7K.F5L(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(v7K.D5L(context.fillStyle,backgroundColor)){if(v7K.M5L(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+v7K.N5L(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+v7K.a5L(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(v7K.O5L(x+(width/2),panel.right))x=v7K.k5L(panel.right,(width/2));if(v7K.e5L(x-(width/2),panel.left))x=panel.left+(v7K.T5L(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,v7K.d5L(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=v7K.h5L(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(v7K.l5L(x,arrowHeight),y);context.lineTo(x,v7K.G6L(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(v7K.u6L(context.fillStyle,backgroundColor)){if(v7K.B6L(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,v7K.V6L(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var I3Q="rentHR",U66="rawC";if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(v7K.i6L(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&v7K.H6L(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(v7K.Q6L(whichSet,"dataSegment")){while(v7K.I6L(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][v7K.b6L(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(v7K.c6L(chart.dataSet.length,2)){var quote2=chart[whichSet][v7K.r6L(l,2)];prevClose=quote2.Close;}
if(v7K.m6L(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||v7K.A6L(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend((o26+U66+l4Q+P3Q+I3Q),arguments);}
;STXChart.prototype.getDefaultColor=function(){var V16=0.65;this.defaultColor=n66;var bgColor=C9Q,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=P4Q;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(v7K.f6L(bgColor,P4Q))bgColor=L1Q;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[v7K.o06];if(v7K.t6L(v,V16))this.defaultColor=n66;else this.defaultColor=L1Q;}
else{this.defaultColor=n66;}
}
else{this.containerColor=L1Q;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(H9Q);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;v7K.Y6L(i,this.asyncCallbacks.length);i++){if(v7K.l6L(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;v7K.G4N(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){var S86="ay",R3Q="rl";this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;if(!this.useAnimation&&v7K.u4N(new Date()-this.grossDragging,500))return ;this.offset=v7K.B4N(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(v7K.C4N(this.layout.candleWidth,this.candleWidthPercent));if(v7K.i4N(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(v7K.H4N(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(v7K.Q4N(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,(x06+f26+R3Q+S86));STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;v7K.I4N(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(v7K.b4N(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(v7K.c4N(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;var ratio=v7K.r4N(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=v7K.m4N(oldWidth,ratio);canvas.height=v7K.A4N(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=v7K.f4N(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(v7K.t4N(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(v7K.Y4N(chart.width,candleWidth));var wsInTicks=Math.round(v7K.l4N(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=v7K.G3N(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(v7K.u3N(idealNumberOfTicks,1)){if(v7K.B3N(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(v7K.V3N(this.chart.width,idealNumberOfTicks));if(v7K.Z3N(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(v7K.F3N(newCandleWidth,v7K.m06))newCandleWidth=v7K.Y06;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(v7K.D3N(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){if(v7K.M3N(maintainScroll,D2Q))maintainScroll=H9Q;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(v7K.N3N(this.chart.canvasHeight,v7K.m06)&&v7K.a3N(previousHeight,v7K.m06)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var r8Q=((35.,0x232)<78.?(0x204,0xA9):0xAA>(0x2A,116)?(86,59):(12.39E2,57.7E1)>=(0x30,1.496E3)?69:(0x5F,11.47E2)),minutes=v7K.O3N((chart.endHour-chart.beginHour),f8Q);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(v7K.k3N(chart.endMinute,r8Q))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var I26="onfigu",D8Q="eed",N86=((51,2.30E1)<=(0x40,114.)?(2.72E2,"F"):(14.74E2,118.30E1)),j16="ast",s0Q="ng",U3Q="ni",a4Q="Wa",G5Q='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=C9Q;chart.symbolObject={symbol:C9Q}
;}
else if(typeof symbol==G5Q){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if((v7K.e3N(chart.endHour,C9Q)&&v7K.T3N(chart.beginHour,C9Q)&&v7K.d3N(chart.endMinute,C9Q)&&v7K.h3N(chart.beginMinute,C9Q))||(v7K.L3N(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,v7K.m06))||this.automaticMarketHours){var hours=STX.LegacyMarket.getHours(chart.symbolObject.symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;this.automaticMarketHours=H9Q;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
;if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:H9Q,multiplier:params.span.multiplier,span:params.span.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:H9Q}
,function(){self.adjustPanelPositions();callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((a4Q+P3Q+U3Q+s0Q+m8Q+Z76+E0Q+J56+e0Q+j16+x56+H86+v26+J56+a3Q+A3Q+f26+g26+d9Q+G7Q+d9Q+f26+o26+J56+H26+r2Q+J56+C0Q+E0Q+J56+q06+l4Q+V26+f26+N86+D8Q+J56+g26+I26+Q9Q+o26));}
if(!chart.symbol)chart.symbol=A4Q;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:H9Q,multiplier:params.span.multiplier,span:params.span.base}
);}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var J26=' = ',Y7Q='ue',e4Q='V',h66='tr',Y26='ides',g1Q='() ',s7Q='eFlo',g96='ar',l7Q='se',U4Q=((65.9E1,107.)<=(1.25E2,0x225)?(1.1E3,'U'):(115.,0x189)),y96='. ',T7Q='mber',h06='ot',f9Q='ng',q1Q='ssi',w26='lose',c26='C',s26='Dat',z06='er',K7Q='mb',a76='ct',o66='bj',D86='ta',l0Q='Da',j3Q='T',C76='in',m16=' : ',S66='erDa',B06='st',Z7Q='Ma',V96='et';if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(v7K.K0N(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&v7K.J0N(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((i66+V96+Z7Q+B06+S66+I4Q+P8Q+m16+O66+p5Q+Z06+C76+y5Q+U7Q+y26+j3Q+U7Q+P8Q+h26+U7Q+y26+k66+U7Q+A2Q+a2Q+U7Q+j2Q+P8Q+B06+k7Q+L56+l0Q+D86+U7Q+A2Q+o66+k7Q+a76));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close&&typeof quotes.Close==(a2Q+O4Q+K7Q+z06)){}
else{console.log((i66+V96+Z7Q+i66+E9Q+s26+P8Q+m16+c26+w26+U7Q+p5Q+i66+U7Q+j2Q+p5Q+q1Q+f9Q+U7Q+A2Q+L56+U7Q+a2Q+h06+U7Q+P8Q+U7Q+a2Q+O4Q+T7Q+y96+U4Q+l7Q+U7Q+a66+g96+i66+s7Q+I76+g1Q+p5Q+u1Q+U7Q+t26+H06+L56+U7Q+x8Q+I76+P8Q+U7Q+i66+z06+l66+k7Q+L56+U7Q+a66+L56+A2Q+l66+Y26+U7Q+i66+h66+C76+y5Q+i66+y96+e4Q+P8Q+j5Q+Y7Q+J26)+quotes.Close);}
if(v7K.z0N(quotes.High,null))delete  quotes.High;if(v7K.j0N(quotes.Low,null))delete  quotes.Low;if(v7K.q0N(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=v7K.P0N(dt.getSeconds(),d2Q)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;v7K.p0N(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
if(v7K.E0N(this.layout.timeUnit,"second")){now.setMilliseconds(0);}
else if(v7K.s0N(this.layout.timeUnit,"minute")){now.setMilliseconds(0);now.setSeconds(0);}
var quote;if(!md||!md.length||v7K.w0N(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[v7K.o0N(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(v7K.S0N(now,next)){if(symbol){if(price||v7K.y0N(price,0)){quote[symbol]=price;}
}
else{if(price||v7K.v0N(price,0)){quote.Close=price;if(v7K.g0N(price,quote.High))quote.High=price;if(v7K.n0N(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||v7K.X0N(bid,0))quote.Bid=bid;if(ask||v7K.U0N(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);this.appendMasterData([quote],chart,newParams);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(v7K.x9N(next2,now)){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var R16="efine",V9Q="undefi";if(!params)params={}
;if(!chart)chart=this.chart;if(v7K.W9N(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;v7K.R9N(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=v7K.C9N(masterData.length,1);while(v7K.i9N(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(v7K.H9N(dt2.getTime(),dt.getTime())){var plusOne=0;if(v7K.Q9N(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;v7K.I9N(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!=(V9Q+q2Q+o26)){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(v7K.b9N(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&v7K.c9N(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!=(x06+R16+o26))appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(v7K.r9N(chart.scroll,chart.maxTicks+1)&&plusOne){chart.scroll++;this.grabStartScrollX++;}
}
break;}
i--;}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.appendMasterData)plugin.appendMasterData(this,appendQuotes,chart);}
}
}
if(!this.masterData||!this.masterData.length)this.masterData=masterData;if(!params.noCreateDataSet){var sp=this.streamParameters;if(++sp.count>sp.maxTicks||params.bypassGovernor){clearTimeout(sp.timeout);this.createDataSet();this.draw();this.updateChartAccessories();sp.count=0;sp.timeout=-1;}
else{var self=this;if(sp.timeout==-1){sp.timeout=setTimeout(function(){self.createDataSet();self.draw();self.updateChartAccessories();self.streamParameters.count=0;self.streamParameters.timeout=-1;}
,sp.maxWait);}
}
}
this.runAppend("appendMasterData",arguments);}
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[v7K.m9N(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&v7K.A9N(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var Z3Q="onth";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var chart=params.chart,ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var b=v7K.f9N(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;v7K.t9N(b,0);b--){prices=chart.dataSet[b];if(v7K.Y9N(prices.DT.getTime(),rtMS)){break;}
}
if(v7K.l9N(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[v7K.G7N(chart.dataSet.length,1)].DT;for(var i=0;v7K.u7N(i,20000);i++){if(v7K.B7N(dt.getTime(),rtMS))break;b++;dt=self.getNextInterval(dt,self.layout.periodicity,self.dataZone);}
}
}
if(v7K.V7N(b,0))return ;for(var a=b;v7K.Z7N(a,0);a--){if(v7K.F7N(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(v7K.D7N(prices.DT.getTime(),ltMS)){break;}
}
var ticks=v7K.M7N(b,a);if(v7K.N7N(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(v7K.a7N((self.chart.width-params.padding),ticks),chart);chart.scroll=(v7K.O7N(chart.dataSet.length,b))+Math.floor(v7K.k7N((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=v7K.e7N((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var O76="ogic",Q96="icity",u8Q="heck",t5Q="opp",R56=") ",W9Q="ds",e96="oa",W16="ny",W8Q="(): ",D26="ange",L0Q="etR",S96=(135.<(0xDC,2.5E2)?(0x12C,"T"):(5.68E2,0x17A)<=(137,68.)?(66,26.):(61,86.10E1)<=(137.,1.660E2)?(0xBF,121.):(9.700E2,144.)),p96="S";loadMoreCount++;if(v7K.T7N(loadMoreCount,10)){console.log((p96+S96+E4Q+i8Q+O9Q+H26+B2Q+m4Q+a3Q+L0Q+D26+W8Q+S96+E0Q+E0Q+J56+e0Q+H26+W16+J56+a0Q+e96+W9Q+O86+H0Q+z0Q+R56+G7Q+P3Q+F4Q+J56+a3Q+x56+j6Q+f26+P3Q+F1Q+p96+Y4Q+t5Q+d9Q+C0Q+F7Q+F1Q+i8Q+u8Q+J56+A3Q+f26+P3Q+d9Q+E0Q+o26+Q96+J56+a0Q+O76+m4Q));showTheRange();return ;}
if(chart.moreAvailable&&v7K.d7N(chart.masterData[0].DT.getTime(),ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=v7K.h7N(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if((v7K.L7N(interval,"month")||v7K.K1N(interval,"week"))&&dontRoll){var int=(v7K.J1N(interval,"week"))?7:30;ticks=v7K.z1N((ms/(STX.DAY*int)),period);}
else{ticks=v7K.j1N((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=v7K.q1N((ms/(STX.MINUTE*interval)),period);else{if(v7K.P1N(interval,"millisecond"))ticks=v7K.p1N(ms,period);else if(v7K.E1N(interval,"second"))ticks=v7K.s1N((ms/STX.SECOND),period);else if(v7K.w1N(interval,"hour"))ticks=v7K.o1N((ms/STX.HOUR),period);else ticks=v7K.S1N((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:v7K.y1N(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:v7K.v1N(STX.DECADE,10),periodicity:1,interval:(e0Q+Z3Q)}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:"month"}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=v7K.g1N(rtMS,ltMS),entryToUse=null;for(var i=0;v7K.n1N(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(v7K.X1N(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rtMS,ltMS,intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=v7K.U1N(this.chart.width,this.chart.maxTicks);if(!this.chart.masterData||v7K.x8N(this.layout.interval,intervalToUse)||v7K.W8N(this.layout.periodicity,periodToUse)||v7K.R8N(this.layout.timeUnit,timeUnitToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(v7K.C8N(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var y9Q="to",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!params.padding)params.padding=0;if(!chart)chart=this.chart;var leftDT=new Date(),marketOpen;if(STX.LegacyMarket.isForexFuturesSymbol(chart.symbol))marketOpen=STX.LegacyMarket.isForexOpen(leftDT,chart.symbol);else marketOpen=STX.LegacyMarket.isMarketOpen(chart.symbol,this);if(!marketOpen){leftDT=STX.LegacyMarket.getPreviousClose(leftDT,chart.symbol,this.dataZone,this);}
if(v7K.i8N(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(v7K.H8N(interval.toLowerCase(),"year")){leftDT.setFullYear(v7K.Q8N(leftDT.getFullYear(),period));}
else if(v7K.I8N(interval.toLowerCase(),"month")){leftDT.setMonth(v7K.b8N(leftDT.getMonth(),period));}
else if(v7K.c8N(interval.toLowerCase(),"day")||v7K.r8N(interval.toLowerCase(),(y9Q+S16))){if(v7K.m8N(interval.toLowerCase(),"day")&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,v7K.A8N(period,1),this);else leftDT.setDate(v7K.f8N(leftDT.getDate(),period,1));leftDT.setHours(0,0,0,0);}
else{if(useMarketTZ&&chart.dataSet[v7K.n8N(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(v7K.X8N(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;v7K.U8N(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(v7K.x2N(interval.toLowerCase(),"week")){leftDT.setDate(v7K.W2N(leftDT.getDate(),(7*period)));}
else if(v7K.R2N(interval.toLowerCase(),"hour")){leftDT.setHours(v7K.C2N(leftDT.getHours(),period));}
else if(v7K.i2N(interval.toLowerCase(),"minute")){leftDT.setMinutes(v7K.H2N(leftDT.getMinutes(),period));}
else if(v7K.Q2N(interval.toLowerCase(),"second")){leftDT.setSeconds(v7K.I2N(leftDT.getSeconds(),period));}
else if(v7K.b2N(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(v7K.c2N(interval.toLowerCase(),(Y4Q+E0Q+S16))){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var b76="ye",arr=span.split(",");if(v7K.r2N(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(v7K.m2N(arr[1],(b76+f96))){prev.setFullYear(v7K.A2N(prev.getFullYear(),num));}
else if(v7K.f2N(arr[1],"month")){prev.setMonth(v7K.t2N(prev.getMonth(),num));}
else if(v7K.Y2N(arr[1],"day")){prev.setDate(v7K.l2N(prev.getDate(),num));}
else if(v7K.G5N(arr[1],"week")){prev.setDate(v7K.u5N(prev.getDate(),(7*num)));}
var diff=v7K.B5N((now.getTime()-prev.getTime()),1000,60,60,24);diff=v7K.Z5N(diff,5,7);var candleWidth=v7K.H5N(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(v7K.Q5N(ticks,v7K.o06))ticks=v7K.o06;var padding=params.padding;if(!padding)padding=v7K.m06;this.layout.candleWidth=v7K.I5N((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=v7K.Y06;this.chart.maxTicks=Math.round(v7K.b5N((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||v7K.c5N(params.padding,v7K.m06))this.chart.scroll=ticks+v7K.S06;}
;STXChart.prototype.construct=function(){var o9Q="ha";this.stackPanel((g26+o9Q+B2Q),C26,v7K.S06);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=v7K.m06;this.cy=v7K.m06;this.micropixels=v7K.m06;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(v7K.r5N(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(v7K.m5N(renderer.params.yAxis,yAxis)){if(v7K.A5N(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;v7K.f5N(i,panel.yaxisLHS.length);i++){if(v7K.t5N(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;v7K.Y5N(i,panel.yaxisRHS.length);i++){if(v7K.l5N(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(v7K.G6N(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v7K.u6N(i,arr.length);i++){if(v7K.B6N(arr[i],yAxis))return ;}
if(v7K.V6N(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var L76="undefine",panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(v7K.Z6N(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;v7K.F6N(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=v7K.D6N(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(v7K.M6N(panel.name,panel.chart.name)||panel.yAxis.position){if(v7K.N6N(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||v7K.a6N(position,(P3Q+d9Q+r06)))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;v7K.O6N(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(v7K.k6N(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(v7K.e6N(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;v7K.T6N(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;v7K.d6N(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=v7K.h6N(this.width,panel.yaxisTotalWidthRight);for(i=0;v7K.L6N(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!=(L76+o26))panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||v7K.K4F(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||v7K.J4F(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=v7K.z4F(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=v7K.j4F(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=v7K.q4F(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(v7K.P4F(this.layout.candleWidth,this.minimumCandleWidth)||v7K.p4F(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&v7K.E4F(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(v7K.s4F(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(v7K.w4F(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);if(vectorTrashCan)vectorTrashCan.onmspointerup=vectorTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);}
if(this.manageTouchAndMouse){this.registerTouchAndMouseEvents();}
this.chart.container.onmouseout=(function(self){return function(e){self.handleMouseOut(e);}
;}
)(this);if(this.controls.chartControls){this.controls.chartControls.style.display="block";}
this.abortDrawings();this.undoStamps=[];for(var panelName in this.panels){var panel=this.panels[panelName];if(panel.markerHolder){this.chart.container.removeChild(panel.markerHolder);panel.markerHolder=null;}
}
for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.initializeChart)plugin.initializeChart(this);}
}
if(!this.resizeListenerInitialized){this.resizeListenerInitialized=true;var closure=function(self){return function(e){self.resizeChart();}
;}
;if(window.attachEvent){window.attachEvent("onresize",closure(this));}
else{var c=closure(this);window.addEventListener("resize",c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;v7K.o4F(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var H7Q="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(H7Q,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=D2Q;this.touches=[];this.touching=D2Q;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=D2Q;this.drawingLine=D2Q;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=D2Q;this.displaySticky();this.runAppend(H7Q,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var q96="DOMMouseScroll",J7Q="mousewheel",h3Q="onwheel",v0Q="wheel",q56="useO",A16="Mo",k9Q="onMouseOut",M1Q="MouseOv",b0Q="uchen",A0Q="pointerup",v9Q="pointermove",M7Q="MSGestureChange",C3Q="pointerdown",n76="MSPointerUp",B9Q="MSPointerMove",y86="MSGestureEnd",L9Q="ang",J96="reC",s16="estu",T5Q="SG",o5Q="MSGestureStart",N7Q="MSPointerDown",r86="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=H9Q;var el=this.chart.container,homeEl=$$$(r86,this.controls.chartControls),zoomInEl=$$$(F9Q,this.controls.chartControls),zoomOutEl=$$$(M4Q,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(y56,(function(self){return function(e){self.mousemove(e);}
;}
)(this),D2Q);el.addEventListener(B56,(function(self){return function(e){self.mousedown(e);}
;}
)(this),D2Q);el.addEventListener((e0Q+E0Q+l4Q+a3Q+f26+l4Q+A3Q),(function(self){return function(e){self.mouseup(e);}
;}
)(this),D2Q);}
else{if(STX.isSurface){el.addEventListener(y56,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),D2Q);el.addEventListener(B56,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),D2Q);el.addEventListener(n8Q,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),D2Q);if(window.navigator.msPointerEnabled){el.addEventListener(N7Q,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),D2Q);el.addEventListener(o5Q,(function(self){return function(e){self.gestureInEffect=H9Q;}
;}
)(this),D2Q);el.addEventListener((Y96+T5Q+s16+J96+O9Q+L9Q+f26),(function(self){return function(e){return self.touchmove(e);}
;}
)(this),D2Q);el.addEventListener(y86,(function(self){return function(e){self.gestureInEffect=D2Q;return self.touchend(e);}
;}
)(this),D2Q);el.addEventListener(B9Q,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),D2Q);el.addEventListener(n76,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),D2Q);}
else{el.addEventListener(C3Q,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),D2Q);el.addEventListener(o5Q,(function(self){return function(e){self.gestureInEffect=H9Q;}
;}
)(this),D2Q);el.addEventListener(M7Q,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),D2Q);el.addEventListener(y86,(function(self){return function(e){self.gestureInEffect=D2Q;return self.touchend(e);}
;}
)(this),D2Q);el.addEventListener(v9Q,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),D2Q);el.addEventListener(A0Q,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),D2Q);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(y56,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),D2Q);el.addEventListener(B56,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),D2Q);el.addEventListener(n8Q,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),D2Q);}
el.addEventListener(u3Q,(function(self){return function(e){self.touchstart(e);}
;}
)(this),D2Q);el.addEventListener(Y16,(function(self){return function(e){self.touchmove(e);}
;}
)(this),D2Q);el.addEventListener((Y4Q+E0Q+b0Q+o26),(function(self){return function(e){self.touchend(e);}
;}
)(this),D2Q);if(zoomInEl){zoomInEl.removeAttribute((E0Q+C0Q+M1Q+f26+P3Q));zoomInEl.removeAttribute(k9Q);}
if(zoomOutEl){zoomOutEl.removeAttribute((x4Q+A16+q56+p66+P3Q));zoomOutEl.removeAttribute(k9Q);}
}
}
var wheelEvent=(v7K.S4F(v0Q,document.createElement(E76))||v7K.y4F(h3Q,document))?v0Q:v7K.v4F(document.onmousewheel,undefined)?J7Q:q96;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),D2Q);}
;STXChart.prototype.rightClickHighlighted=function(){var d0Q="rightClickHighlighted",E8Q="lighted",z2Q="Hig",Z9Q="Cli";if(this.runPrepend((P3Q+d9Q+r06+Z9Q+g26+i9Q+z2Q+O9Q+E8Q),arguments))return ;this.deleteHighlighted(H9Q);this.runAppend(d0Q,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=v7K.g4F(this.drawingObjects.length,1);v7K.n4F(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=v7K.X4F(renderer.seriesParams.length,1);v7K.U4F(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(v7K.x3F(panel.name,name))return H9Q;}
return D2Q;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=D2Q;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=H9Q;}
;STXChart.prototype.grabHandle=function(e,panel){var u6Q="grabHandle",Q3Q="andl",N66="bH",l1Q="gr";if(this.runPrepend((l1Q+H26+N66+Q3Q+f26),arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(u6Q,arguments);}
;STXChart.prototype.releaseHandle=function(e){var H4Q="releaseHandle";if(this.runPrepend(H4Q,arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=C9Q;this.runAppend(H4Q,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(v7K.W3F(saveLayout,D2Q))this.changeOccurred(F96);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return v7K.R3F(y,this.top);}
;STXChart.prototype.backOutX=function(x){return v7K.C3F(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var M2Q=((112,0xC6)<(1.2510E3,0x87)?(6.61E2,"i"):(0x219,8.97E2)>(115,0xF3)?(51.,"}"):(59.,0x58)),x5Q="{";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(x5Q+sd.id+M2Q)>-v7K.S06)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(v7K.i3F(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(v7K.H3F(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;v7K.Q3F(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var B7Q="panelClose";if(!panel)return ;if(this.runPrepend(B7Q,arguments))return ;this.cancelTouchSingleClick=H9Q;STXChart.drawingLine=D2Q;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(v7K.I3F(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(B7Q,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=H9Q;STXChart.drawingLine=D2Q;this.showCrosshairs();var newPanels={}
,pos=v7K.m06,p;for(p in this.panels){if(v7K.b3F(p,panel.name))break;pos++;}
if(!pos)return ;var i=v7K.m06;for(p in this.panels){if(v7K.c3F(i,pos-v7K.S06))newPanels[panel.name]=panel;if(v7K.r3F(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(v7K.m3F(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(v7K.A3F(pos,length-1))return ;var i=0;for(p in this.panels){if(v7K.f3F(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(v7K.t3F(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var j0Q="stx_solo_lit";this.cancelTouchSingleClick=H9Q;STXChart.drawingLine=D2Q;this.showCrosshairs();var hideOrNot=H9Q;if(panel.soloing){hideOrNot=D2Q;panel.soloing=D2Q;STX.unappendClassName(panel.solo,j0Q);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=H9Q;STX.appendClassName(panel.solo,j0Q);if(v7K.Y3F(panel.name,C26)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=v7K.l3F(v7K.S06,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=D2Q;panel.hidden=D2Q;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=v7K.G0F(panel.bottom,panel.top);panel.percent=v7K.u0F(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=H9Q,p,newY,priorPanel;if(v7K.B0F(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=D2Q;if(up){priorPanel=C9Q;for(p in this.panels){if(v7K.V0F(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(v7K.Z0F(newY,priorPanel.top+z1Q)){newY=priorPanel.top+z1Q;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=C9Q;for(p in this.panels){if(v7K.F0F(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(v7K.D0F(newY,STXChart.resizingPanel.bottom-z1Q)){newY=v7K.M0F(STXChart.resizingPanel.bottom,z1Q);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){var T66="one",W0Q="ti",Q26="os",o96="anel",G4Q="ust",M5Q="dj";if(!this.chart.symbol)return ;if(this.runPrepend((H26+M5Q+G4Q+h76+o96+h76+Q26+d9Q+W0Q+E0Q+C0Q+a3Q),arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||v7K.N0F(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(v7K.a0F(n,1)||v7K.O0F(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(v7K.k0F(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display=(C0Q+T66);panel.percent=v7K.e0F(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(v7K.T0F(h,panel.percent));panel.height=v7K.d0F(panel.bottom,panel.top);if(v7K.h0F(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&v7K.L0F(yAxis.height,0)){zoomRatio=v7K.K9F(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=v7K.J9F(panel.bottom,yAxis.bottomOffset);yAxis.height=v7K.z9F(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=v7K.j9F(zoomRatio,yAxis.height);}
lastBottom=panel.bottom;if(!yAxis.high&&v7K.q9F(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=v7K.P9F(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(v7K.p9F(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(v7K.E9F(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(v7K.s9F(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var e06="am",X26="las",w66="mber",q16="av",x1Q="ts",u96="bjec",G76="ke",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:v7K.m06,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((Y96+f96+G76+P3Q+J56+E0Q+u96+x1Q+J56+e0Q+l4Q+a3Q+Y4Q+J56+O9Q+q16+f26+J56+H26+J56+e0Q+f26+w66+J56+g26+X26+a3Q+Z76+e06+f26));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;v7K.a9F(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(v7K.O9F(type,"panelName")){if(v7K.k9F(marker.panelName,comparison))arr.push(marker);}
else if(v7K.e9F(type,"label")){if(v7K.T9F(label,comparison))arr.push(marker);}
else if(v7K.d9F(type,(H26+a0Q+a0Q))){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(v7K.h9F(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(v7K.L9F(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(v7K.K7F(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;v7K.J7F(i,labels.length);i++){if(v7K.z7F(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;v7K.j7F(i,chartMap.markers.length);i++){if(v7K.q7F(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;v7K.P7F(i,panelArray.length);i++){if(v7K.p7F(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(v7K.E7F(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;v7K.s7F(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(v7K.w7F(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[v7K.o7F(chart.xaxis.length,1)].DT;xaxisDT=new Date(v7K.S7F(xaxisDT.getTime(),this.timeZoneOffset*60000));if(v7K.y7F(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=v7K.v7F(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[v7K.g7F(chart.dataSet.length,1)].DT),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;v7K.n7F(j,ticksToSearch);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();if(v7K.X7F(qms,dms)){marker.tick=j;return ;}
else if(v7K.U7F(qms,dms)&&v7K.x1F(pms,dms)){marker.tick=Math.max(v7K.W1F(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(v7K.R1F(marker.params.xPositioner,"master")){marker.tick=Math.floor(v7K.C1F(marker.params.x,this.layout.periodicity));return ;}
else if(v7K.i1F(marker.params.xPositioner,"date")){var pms,qms,dms=marker.params.x.getTime();for(var i=0;v7K.H1F(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(v7K.Q1F(i,0))pms=chart.dataSet[v7K.I1F(i,1)].DT.getTime();if(v7K.b1F(qms,dms)){marker.tick=i;return ;}
else if(v7K.c1F(qms,dms)&&v7K.r1F(pms,dms)){marker.tick=Math.max(v7K.m1F(i,1),0);return ;}
else if(v7K.A1F(dms,qms)){marker.tick=null;return ;}
}
if(v7K.f1F(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[v7K.t1F(i,1)].DT);if(v7K.Y1F(dt.getTime(),dms))marker.params.future=true;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=v7K.l1F(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else if(v7K.G8F(arr[0].params.xPositioner,(C0Q+E0Q+q2Q))&&v7K.u8F(arr[0].params.yPositioner,"none")){self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||v7K.B8F(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){var J76="Panel",I86="cr";if(this.runPrepend((I86+f26+H26+B3Q+J76),arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=v7K.V8F(h,0.20);}
var percent=v7K.Z8F(height,h),reduce=v7K.F8F(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var q8Q="stx-chart-panel",Q66="ch",z3Q="non",V56=".stx-ico-edit",N2Q=".stx-ico-down",U2Q=".stx-ico-focus",B76=".stx-ico-up",Z16=".stx-panel-title",E96=".stx-ico-close",n1Q=".stx-panel-control",isChart=(v7K.D8F(panel.name,panel.chart.name));panel.icons=$$$(n1Q,panel.holder);panel.close=panel.icons.children[v7K.f06];panel.close=$$$(E96,panel.icons).parentNode;STX.appendClassName(panel.icons,X7Q);panel.title=$$$(Z16,panel.icons);panel.up=$$$(B76,panel.icons).parentNode;panel.solo=$$$(U2Q,panel.icons).parentNode;panel.down=$$$(N2Q,panel.icons).parentNode;panel.edit=$$$(V56,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=l2Q;if(!this.displayIconsUpDown)panel.down.style.display=l2Q;if(!this.displayIconsSolo)panel.solo.style.display=(z3Q+f26);if(!this.displayIconsClose){panel.close.style.display=l2Q;}
if(!this.displayPanelResize)panel.handle.style.display=l2Q;panel.title.innerHTML=A4Q;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,(Q66+H26+P3Q+Y4Q+M3Q+Y4Q+b2Q+a0Q+f26));STX.appendClassName(panel.icons,q8Q);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){stx.releaseHandle(e);}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle(e);}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(v7K.M8F(panel.name,C26))panel.close.style.display=l2Q;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var T86="stx-panel-study",D66="stx-panel-chart",E06="stx-subholder",w3Q="stackPanel";if(this.runPrepend(w3Q,arguments))return ;if(!chartName)chartName=C26;var chart=this.charts[chartName],isChart=(v7K.N8F(name,chartName)),yAxis=C9Q;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,E76,(a3Q+o8Q+M3Q+O9Q+E0Q+a0Q+o26+f26+P3Q));panel.subholder=STX.newChild(panel.holder,E76,E06);panel.subholder.style.zIndex=v7K.S06;var appendClass=isChart?D66:T86;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(H9Q));panel.handle=this.controls.handleTemplate.cloneNode(H9Q);this.container.appendChild(panel.handle);panel.handle.id=C9Q;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(w3Q,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var b8Q="stx_panel_border",r16="drawPanels";if(this.runPrepend(r16,arguments))return ;var first=D2Q;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=D2Q;if(v7K.a8F(panel.title.innerHTML,panel.display)){panel.title.innerHTML=A4Q;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,X7Q);if(panel.hidden){STX.unappendClassName(panel.icons,X7Q);panel.handle.style.display=l2Q;panel.holder.style.display=l2Q;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=l2Q;if(!this.displayIconsUpDown)panel.down.style.display=l2Q;if(!this.displayIconsSolo)panel.solo.style.display=l2Q;panel.holder.style.display=h16;}
if(!first){panel.handle.style.display=l2Q;first=H9Q;continue;}
var y=panel.top;y=Math.round(y)+h56;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(b8Q),l96,this.chart.context,D2Q,{}
);if(!this.displayPanelResize){panel.handle.style.display=l2Q;}
else{panel.handle.style.display=A4Q;}
panel.handle.style.top=(v7K.O8F(y,panel.handle.offsetHeight/v7K.o06))+j8Q;}
this.runAppend(r16,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(v7K.k8F(this.openDialog,""))return ;if(v7K.e8F(x,this.left)||v7K.T8F(x,this.right)||v7K.d8F(y,this.top)||v7K.h8F(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var g66="touchDoubleClick",c76="bleC",Z26="touchDou";if(v7K.L8F(x,this.left)||v7K.K2F(x,this.right)||v7K.J2F(y,this.panels.chart.top)||v7K.z2F(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend((Z26+c76+a0Q+G0Q),arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(v7K.j2F(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/v7K.o06)&&v7K.q2F(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-v7K.S06,e1MS:-v7K.S06,s2MS:-v7K.S06,e2MS:-v7K.S06}
;this.runAppend(g66,arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(v7K.P2F(this.openDialog,""))return ;if(v7K.p2F(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&v7K.E2F(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(v7K.s2F(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(v7K.w2F(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(v7K.o2F(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;v7K.S2F(i,this.touches.length);i++){if(v7K.y2F(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(v7K.v2F(this.touches[i].pageX,e.clientX)),yd=Math.abs(v7K.g2F(this.touches[i].pageY,e.clientY)),c=Math.sqrt(v7K.n2F(xd,xd)+v7K.X2F(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(v7K.U2F(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(v7K.x5F(this.touches[i].pageX,e.clientX)&&v7K.W5F(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(v7K.R5F(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&v7K.C5F(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if((this.activeDrawing&&this.activeDrawing.dragToDraw)||this.repositioningDrawing){crosshairXOffset=0;crosshairYOffset=0;}
if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(v7K.i5F(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=v7K.H5F(y,this.top+this.chart.panel.yAxis.bottom)&&v7K.Q5F(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(v7K.I5F(x,whichPanel.right)||v7K.b5F(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(v7K.c5F(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(v7K.r5F((x2-x1),(x2-x1))+v7K.m5F((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+v7K.A5F((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(v7K.f5F(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(v7K.t5F(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((v7K.Y5F(x1,this.pt.x1)&&v7K.l5F(x2,this.pt.x2))||(v7K.G6F(x1,this.pt.x1)&&v7K.u6F(x2,this.pt.x2))||(v7K.B6F(y1,this.pt.y1)&&v7K.V6F(y2,this.pt.y2))||(v7K.Z6F(y1,this.pt.y1)&&v7K.F6F(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(v7K.D6F(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(v7K.M6F(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(v7K.N6F((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(v7K.a6F(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(v7K.O6F(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(v7K.k6F(angle,1)||(!this.goneVertical&&v7K.e6F(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var tickDistance=v7K.T6F(this.grabStartValues.x2,this.grabStartValues.x1),pixelDistance=v7K.d6F(this.pt.x2,this.pt.x1),newCandleWidth=v7K.h6F(pixelDistance,tickDistance);if(v7K.L6F(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(v7K.K41(chart.maxTicks,5))this.setMaxTicks(5);var centerTick=this.grabStartValues.x1+Math.round(v7K.J41(tickDistance,2)),centerX=this.pt.x1+Math.round(v7K.z41(pixelDistance,2)),currentTick=this.tickFromPixel(centerX,chart);chart.scroll+=Math.floor(v7K.j41(currentTick,centerTick));this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(v7K.q41(this.gestureStartDistance,distance));if(v7K.P41(this.grabStartZoom,yAxis.height)){if(v7K.p41(yAxis.zoom,yAxis.height))yAxis.zoom=v7K.E41(yAxis.height,1);}
else{if(v7K.s41(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(v7K.w41(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=v7K.o41(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(v7K.S41(distance,10));if(v7K.y41(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(v7K.v41(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(v7K.g41(this.touches.length,1)||v7K.n41(this.touches.length,2)){if(v7K.X41(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(v7K.U41(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(v7K.x31(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(v7K.W31(x1,this.left)&&v7K.R31(x1,this.right)&&v7K.C31(y1,this.top)&&v7K.i31(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=v7K.H31(y1,this.top+this.chart.panel.yAxis.bottom)&&v7K.Q31(y1,this.top+this.chart.panel.bottom);this.overYAxis=v7K.I31(x1,this.currentPanel.right)||v7K.b31(x1,this.currentPanel.left);for(var i=0;v7K.c31(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&v7K.r31(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if(v7K.m31(this.layout.chartType,"baseline_delta")&&v7K.A31(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(v7K.f31(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=v7K.t31(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(v7K.Y31(this.chart.baseline.actualLevel,yt)&&v7K.l31(this.chart.baseline.actualLevel,yb)&&v7K.G01(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(v7K.u01(this.touches.length,2)){if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(v7K.B01((x2-x1),(x2-x1))+v7K.V01((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.tickFromPixel(this.pt.x1,chart),x2:this.tickFromPixel(this.pt.x2,chart),y1:this.valueFromPixel(this.pt.y1,this.currentPanel),y2:this.valueFromPixel(this.pt.y2,this.currentPanel)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(v7K.Z01(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(v7K.F01(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(v7K.D01(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=v7K.M01(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(v7K.N01(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY),cx=this.backOutX(this.changedTouches[0].pageX);this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(v7K.a01(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&v7K.O01(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=v7K.k01(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(v7K.e01(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=v7K.T01(this.moveB,this.moveA);if(v7K.d01(this.momentumDistance,this.momentumTime*5))this.momentumDistance=v7K.h01(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(v7K.L01(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(v7K.K91(e.pointerType,4)||v7K.J91(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&v7K.z91(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(v7K.j91(e.pointerType,v7K.f06)||v7K.q91(e.pointerType,h2Q)){this.mouseMode=H9Q;}
else{this.mouseMode=D2Q;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;v7K.P91(i,this.touches.length);i++){if(v7K.p91(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(v7K.E91(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=D2Q;return ;}
this.mouseMode=H9Q;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||v7K.s91(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(v7K.w91(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=v7K.o91(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=v7K.S91(Math.abs(this.momentumDistance),this.momentumTime),newDist=v7K.y91((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(v7K.v91(this.momentumDistance,0)?-1:1);newTime=v7K.g91(speed,deceleration);if(v7K.n91(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(v7K.X91(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,v7K.U91(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||v7K.J71(Math.abs(inc),(this.layout.candleWidth/v7K.o06))){this.scrollEvent=C9Q;return ;}
this.scrollEvent=C9Q;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(v7K.z71(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=v7K.j71(this.chart.width,2);if((v7K.q71(x,v7K.m06)&&v7K.P71(x-inc,v7K.m06))||(v7K.p71(x,v7K.m06)&&v7K.E71(x-inc,v7K.m06))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),v7K.N1Q);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){var k86="ers",G3Q="onM",g5Q="posit",r7Q=6267909,C86=5062035,C2Q=((0x176,147.)>=9.02E2?(1.1500E3,25):(8.66E2,81.0E1)>=(66.8E1,57)?(4.7E2,65736098):(1.213E3,23)),W6Q=999931166;this.canvasFont(g56,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;var h36=W6Q,Y36=C2Q,n36=v7K.o06;for(var t36=v7K.S06;v7K.G36.x36(t36.toString(),t36.toString().length,C86)!==h36;t36++){gaps.push(quote);STX.clearCanvas(this.chart.tempCanvas);this.chart.container.removeChild(this.floatCanvas);n36+=v7K.o06;}
if(v7K.G36.x36(n36.toString(),n36.toString().length,r7Q)!==Y36){stx.panelUp(panel);self.runAppend((g5Q+d9Q+G3Q+H26+P3Q+i9Q+k86),arguments);return z9n>=B9n;}
this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var j56="rig",m3Q="alp",p1Q="dl",Q8Q="bottom",z9Q="ect",C8Q="bj";if(config&&typeof config!=(E0Q+C8Q+z9Q)){config={h:arguments[v7K.S06],v:arguments[v7K.o06],text:arguments[v7K.a06]}
;}
config={h:config.h||i1Q,v:config.v||Q8Q,text:config.text||A4Q,hOffset:config.hOffset||G8Q,vOffset:config.vOffset||S1Q}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=v7K.s71(c.bottom,config.vOffset);if(v7K.w71(config.v,n06))y=c.top+config.vOffset;else if(v7K.o71(config.v,(e0Q+d9Q+o26+p1Q+f26)))y=v7K.S71((c.top+c.bottom),v7K.o06);this.chart.context.save();this.canvasFont(g56);this.canvasColor(g56);this.chart.context.textBaseline=(m3Q+O9Q+H26+B26+f26+Y4Q+d9Q+g26);var x=c.left+config.hOffset;if(v7K.y71(config.h,(j56+O9Q+Y4Q)))x=v7K.v71(c.right,config.hOffset);else if(v7K.g71(config.h,T76)){x=v7K.n71((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var l76="ctio",s86="fun",r56="inashi",Q86="eik",y06="osi",e16="gati",D56="turne",z8Q="uote",e26="dQ",N56="lida",i06="error",Y9Q="mill",I8Q="tic",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(v7K.X71(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;v7K.U71(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(v7K.x11(nd.length,1)){var dt=nd[0][0];for(var i=1;v7K.W11(i,nd.length);i++){var dt0=nd[v7K.R11(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;v7K.C11(l,1000);l++){if(v7K.i11(d.getTime(),m1))break;if(v7K.H11(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(v7K.Q11(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=v7K.I11(tmpHist.length,1);l+=1;}
else{for(tick=v7K.b11(tmpHist.length,1);v7K.c11(tick,0);tick--){if(v7K.r11(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;v7K.m11(t,l);t++){if(!first){first=true;}
else{if(v7K.A11(self.layout.interval,"minute")){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(v7K.f11(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=v7K.t11(Math.round(y*10000),10000);if(v7K.Y11(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(v7K.l11(self.layout.interval,"minute"))if(v7K.G81(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&v7K.u81(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(v7K.B81(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;v7K.V81(i,this.drawingObjects.length);i++){if(v7K.Z81(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&v7K.F81(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=v7K.D81(this.layout.periodicity,this.layout.interval),alignToHour=(v7K.M81(chart.minutesInSession,1440)&&v7K.N81(this.layout.interval,(I8Q+i9Q)))&&(v7K.a81(60%barLength,0)||v7K.O81(barLength%60,0));if(v7K.k81(this.layout.timeUnit,(Y9Q+W2Q+f26+g26+E0Q+r2Q))||v7K.e81(this.layout.timeUnit,"second"))alignToHour=false;var res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(v7K.T81(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=v7K.d81(q.Adj_Close,q.Close);}
if(v7K.h81(q.ratio,1)){if(v7K.L81("Open",q))q.Open=v7K.K21(q.Open,q.ratio);if(v7K.J21("Close",q)&&v7K.z21(q.Close,null))q.Close=v7K.j21(q.Close,q.ratio);if(v7K.q21("High",q))q.High=v7K.P21(q.High,q.ratio);if(v7K.p21((G86+E0Q+n5Q),q))q.Low=v7K.E21(q.Low,q.ratio);}
if(!reallyDontRoll&&(v7K.s21(this.layout.periodicity,1)||v7K.w21(this.layout.interval,"week")||v7K.o21(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((i06+a5Q+g26+x4Q+a3Q+E0Q+N56+B3Q+e26+z8Q+J56+P3Q+f26+D56+o26+J56+C0Q+f26+e16+p66+J56+A3Q+y06+Y4Q+d9Q+x4Q));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(v7K.S21(i,0))q.iqPrevClose=chart.dataSet[v7K.y21(i,1)].Close;else q.iqPrevClose=q.Close;if(v7K.v21("High",q)&&v7K.g21(q.High,max))max=q.High;if(v7K.n21("Low",q)&&v7K.X21(q.Low,min))min=q.Low;i++;}
if(v7K.U21(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(v7K.x51(this.layout.aggregationType,"heikenashi")||v7K.W51(this.layout.aggregationType,(O9Q+Q86+r56))){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(v7K.R51(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(v7K.C51(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(v7K.i51(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(v7K.H51(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;v7K.Q51(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||v7K.I51(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd==(s86+l76+C0Q))continue;if(whichChart){var panel=this.panels[sd.panel];if(v7K.b51(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(v7K.c51(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&v7K.r51(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;v7K.m51(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(v7K.A51(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;v7K.f51(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){if(!period)period=v7K.S06;if(v7K.t51(this.layout.timeUnit,P1Q)||v7K.Y51(this.layout.timeUnit,Z1Q)){return this.iterate(DT,period,this.layout.timeUnit,dataZone);}
if(!this.isDailyInterval(this.layout.interval)){return this.iterate(DT,v7K.l51(period,this.layout.interval),S9Q,dataZone);}
else{return this.iterate(DT,period,this.layout.interval,dataZone);}
return DT;}
;STXChart.prototype.iterate=function(DT,units,timeUnit,dataZone,symbol){var DT2;if(v7K.G61(timeUnit,P1Q)){DT2=new Date(DT);DT2.setSeconds(DT2.getSeconds()+units);return DT2;}
else if(v7K.u61(timeUnit,Z1Q)){DT2=new Date(DT);DT2.setMilliseconds(DT2.getMilliseconds()+units);return DT2;}
else if(v7K.B61(timeUnit,S9Q)){if(v7K.V61(units,v7K.m06)){return STX.LegacyMarket.prevPeriod(DT,v7K.S06,Math.abs(units),this,symbol,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,v7K.S06,units,this,symbol,dataZone);}
}
if(v7K.Z61(timeUnit,S16)){if(v7K.F61(units,v7K.m06)){return STX.LegacyMarket.nextDay(DT,units,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(units),this);}
}
else if(v7K.D61(timeUnit,H66)){if(v7K.M61(units,v7K.m06)){return STX.LegacyMarket.nextWeek(DT,units,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(units),this);}
}
else if(v7K.N61(timeUnit,C96)){if(v7K.a61(units,v7K.m06)){return STX.LegacyMarket.nextMonth(DT,units,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(units),this);}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){var N0Q="oomOut",I66="ag";if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,(a3Q+o8Q+M3Q+o26+P3Q+I66+M3Q+g26+O9Q+f96+Y4Q));if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(v7K.O61(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&v7K.k61(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(v7K.e61(chart.maxTicks,pct)),newCandleWidth=v7K.T61(this.chart.width,newTicks);if(v7K.d61(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=v7K.h61(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(v7K.L61((this.chart.width/newCandleWidth),0.499));var newCenter=(v7K.K4X(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(v7K.J4X(center,newCenter));}
else{newMaxTicks=Math.round(v7K.z4X((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(v7K.j4X(this.preferences.whitespace,newCandleWidth));newScroll=v7K.q4X(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend((q5Q+N0Q),arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var X4Q="MozMousePixelScroll",c3Q="onmousewheel",V7Q="mouseWheel",y7Q=40,u4Q="ta",H1Q="hor";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,threshold=u2Q,diff=v7K.P4X(Date.now(),this.lastMouseWheelEvent);if(v7K.p4X(Date.now()-this.lastMouseWheelEvent,threshold)){if(v7K.E4X(this.lastMove,g2Q))deltaY=v7K.m06;else deltaX=v7K.m06;}
this.lastMouseWheelEvent=Date.now();if(v7K.s4X(Math.abs(deltaX),v7K.m06)&&v7K.w4X(Math.abs(deltaY),v7K.m06))return ;if(this.allowSideswipe&&v7K.o4X(deltaX,v7K.m06)&&v7K.S4X(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=(H1Q+X1Q+E0Q+C0Q+u4Q+a0Q);delta=deltaX*-v7K.S06;if(v7K.y4X(delta,u2Q))delta=u2Q;if(delta<-u2Q)delta=-u2Q;this.grabbingScreen=H9Q;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(v7K.v4X(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=D2Q;return ;}
this.lastMove=b56;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.wheelInMotion)return ;this.wheelInMotion=H9Q;setTimeout(function(self){return function(){self.wheelInMotion=D2Q;}
;}
(this),y7Q);if(this.runPrepend(V7Q,arguments))return ;if(!deltaY){if(v7K.g4X(wheelEvent,c3Q)){deltaY=-v7K.S06/y7Q*e.wheelDelta;if(e.wheelDeltaX)deltaX=-v7K.S06/y7Q*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==K96)e.deltaMode=(v7K.n4X(e.type,X4Q)?v7K.m06:v7K.S06);var distance=deltaY;if(v7K.X4X(e.deltaMode,v7K.S06)){distance*=o7Q;}
var pctIn=C9Q,pctOut=C9Q;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),X56),v7K.S06);pctIn=v7K.U4X(v7K.S06,U56*multiplier);pctOut=v7K.S06+v7K.x3X(l56,multiplier);}
if(v7K.W3X(distance,v7K.m06)){if(this.reverseMouseWheel)this.zoomOut(C9Q,pctOut);else this.zoomIn(C9Q,pctIn);}
else if(v7K.R3X(distance,v7K.m06)){if(this.reverseMouseWheel)this.zoomIn(C9Q,pctIn);else this.zoomOut(C9Q,pctOut);}
if(this.runAppend(V7Q,arguments))return ;return D2Q;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(v7K.C3X(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(v7K.i3X(chart.maxTicks,pct));if(v7K.H3X(chart.maxTicks-newTicks,2))newTicks=v7K.Q3X(chart.maxTicks,2);if(v7K.I3X(newTicks,9))newTicks=9;var newCandleWidth=v7K.b3X(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=v7K.c3X(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(v7K.r3X((this.chart.width/newCandleWidth),0.499));var newCenter=(v7K.m3X(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(v7K.A3X(center,newCenter));}
else{newMaxTicks=Math.round(v7K.f3X((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(v7K.t3X(this.preferences.whitespace,newCandleWidth));newScroll=v7K.Y3X(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==K96){this.timeZoneOffset=v7K.m06;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=v7K.l3X((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var R5Q="percent",w7Q="short",d7Q="2-digit",R86="numeric";if(typeof Intl==K96)return ;if(v7K.G0X(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:R86,minute:R86,hour12:D2Q}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:R86,minute:R86,second:R86,hour12:D2Q}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:d7Q,month:d7Q,day:d7Q,hour:d7Q,minute:d7Q}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:R86,day:R86}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:R86,month:R86,day:(C0Q+l4Q+e0Q+f26+P3Q+f16)}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:w7Q}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[v7K.m06]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v7K.m06,minimumFractionDigits:v7K.m06}
);this.internationalizer.priceFormatters[v7K.S06]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v7K.S06,minimumFractionDigits:v7K.S06}
);this.internationalizer.priceFormatters[v7K.o06]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v7K.o06,minimumFractionDigits:v7K.o06}
);this.internationalizer.priceFormatters[v7K.a06]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v7K.a06,minimumFractionDigits:v7K.a06}
);this.internationalizer.priceFormatters[v7K.f06]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v7K.f06,minimumFractionDigits:v7K.f06}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.o06,maximumFractionDigits:v7K.o06}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.m06,maximumFractionDigits:v7K.m06}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.S06,maximumFractionDigits:v7K.S06}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.o06,maximumFractionDigits:v7K.o06}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.a06,maximumFractionDigits:v7K.a06}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:R5Q,minimumFractionDigits:v7K.f06,maximumFractionDigits:v7K.f06}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=H9Q;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(v7K.Y06,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(C26,C26,v7K.S06,C26);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":H9Q,"subholder":H9Q,"display":H9Q}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(v7K.u0X(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==K96)this.layout.chartType=W3Q;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=v7K.S06;if(!interval)interval=S16;if(v7K.B0X(interval,this.layout.interval)||v7K.V0X(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=D2Q;this.updateListeners(F96);}
;STXChart.prototype.exportLayout=function(){var c8Q="panels",l9Q="studies",obj={}
;for(var field in this.layout){if(v7K.Z0X(field,l9Q)&&v7K.F0X(field,c8Q)){obj[field]=STX.clone(this.layout[field]);}
else if(v7K.D0X(field,l9Q)){obj.studies={}
;}
else if(v7K.M0X(field,c8Q)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){if(!this.cleanupGaps)return quotes;if(v7K.N0X(interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((v7K.a0X(interval,"month")||v7K.O0X(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&v7K.k0X(interval,"day"))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;v7K.e0X(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(v7K.T0X(dt,null)){dt=bcdt;}
else{for(var zz=0;v7K.d0X(zz,1440);zz++){if(!stick){if(v7K.h0X(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(v7K.L0X(interval,"day")){if(v7K.K9X(bcdt.getDate(),dt.getDate())&&v7K.J9X(bcdt.getMonth(),dt.getMonth())&&v7K.z9X(bcdt.getFullYear(),dt.getFullYear())){stick=false;break;}
}
else if(v7K.j9X(bcdt.getTime(),dt.getTime())){stick=false;break;}
if(v7K.q9X(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[v7K.P9X(j,1)].Close,High:newQuotes[v7K.p9X(j,1)].Close,Low:newQuotes[v7K.E9X(j,1)].Close,Close:newQuotes[v7K.s9X(j,1)].Close,Volume:0,Adj_Close:newQuotes[v7K.w9X(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=D2Q;this.intervalTimer=C9Q;this.updatingChart=D2Q;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:v7K.m06}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=C9Q;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=v7K.o9X(stx.masterData.length,1);v7K.S9X(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[v7K.y9X(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;v7K.v9X(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(v7K.g9X(symbol,params.chart.symbol)&&v7K.n9X(interval,self.stx.layout.interval)&&v7K.X9X(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&v7K.U9X(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[v7K.x7X(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&v7K.W7X(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&v7K.R7X(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(v7K.C7X(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);self.stx.createDataSet();self.stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[v7K.i7X(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
closure(this)();if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),v7K.H7X(this.behavior.refreshInterval,d2Q));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=v7K.m06;function closure(){return function(response){var S8Q="Feed",O56="ectl",V2Q="orr",p0Q="mplem",C5Q="ilab",V4Q="va",R96="eA",t0Q=", ";if(response)cb(response);else if(!chart.moreAvailable){cb(C9Q);}
else if(v7K.Q7X(count++,S1Q)){cb((f26+P3Q+P3Q+E0Q+P3Q+t0Q+e0Q+r26+R96+V4Q+C5Q+a0Q+f26+J56+C0Q+V26+J56+d9Q+p0Q+x26+B3Q+o26+J56+g26+V2Q+O56+I5Q+J56+d9Q+C0Q+J56+q06+q86+B3Q+S8Q));}
else{self.checkLoadMore(chart,H9Q,H9Q,closure());}
}
;}
this.checkLoadMore(chart,H9Q,H9Q,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){return function(dataCallback){if(v7K.I7X(params.symbol,params.chart.symbol)&&v7K.b7X(interval,self.stx.layout.interval)&&v7K.c7X(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||v7K.r7X(chart.dataSet.length,this.stx.maxDataSetSize)){if((v7K.m7X(chart.dataSet.length,0)&&v7K.A7X(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((v7K.f7X(interval,"month")||v7K.t7X(interval,"week"))&&!this.stx.dontRoll){p*=(v7K.Y7X(interval,(n5Q+f26+f26+i9Q)))?7:30;}
var bars=v7K.l7X(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var h8Q="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((v7K.G1X(interval,C96)||v7K.u1X(interval,H66))&&!this.stx.dontRoll){interval=S16;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:v7K.S06,feed:h8Q,ticks:ticks}
,H9Q);if(v7K.B1X(symbol,this.stx.chart.symbolObject.symbol))params.symbolObject=this.stx.chart.symbolObject;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=S9Q;}
if(params.pts)params.ticks=Math.max(params.ticks,d2Q);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){if(v7K.V1X(symbol,qparams.chart.symbol)&&v7K.Z1X(interval,stx.layout.interval)&&v7K.F1X(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&v7K.D1X(dataCallback.error,0)&&dataCallback.quotes&&v7K.M1X(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
);}
else{self.quoteFeed.announceError(qparams,dataCallback);}
}
else{if(cb)cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
else{self.loadDependents(qparams);}
self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);this.quoteFeed.fetch(qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){var m1Q=4903861,s8Q=3365565,o2Q=(0x13E>=(1.40E1,48)?(109,1962220587):(142.,0x1F0)<=0x1C6?(11.0E2,"e"):(5.30E1,0x111)<65?(11.0E1,"e"):(127.,64)),s56=1982085423;var l36=s56,U36=-o2Q,L36=v7K.o06;for(var X36=v7K.S06;v7K.G36.x36(X36.toString(),X36.toString().length,s8Q)!==l36;X36++){this.touches.splice(i,v7K.S06);L36+=v7K.o06;}
if(v7K.G36.x36(L36.toString(),L36.toString().length,m1Q)!==U36){return M8X===I8X;}
if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var P56="ab",k2Q="gni",I16="tho",w86="teF",c86="Qu",e66="Al",K06="Ta",k8Q="tac",s06="Attempt";if(!feed.label){console.log((s06+J56+Y4Q+E0Q+J56+H26+Y4Q+k8Q+O9Q+K06+F7Q+e66+x4Q+F7Q+c86+E0Q+w86+f26+V66+J56+n5Q+d9Q+I16+l4Q+Y4Q+J56+H26+a3Q+a3Q+d9Q+k2Q+C0Q+F7Q+J56+H26+J56+a0Q+P56+f26+a0Q));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;A(D2Q);STX.Comparison.priceToPercent=function(stx,chart,price){return v7K.N1X(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*W5Q)*m2Q),m2Q);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return v7K.a1X(STX.Comparison.baseline,(v7K.S06+(percent/W5Q)));}
;STX.Comparison.stopSort=function(lhs,rhs){return v7K.O1X(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=v7K.k1X(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;v7K.e1X(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(v7K.T1X(drawing.name,"comparison_stop"))if(v7K.d1X(drawing.tick,firstTick)&&v7K.h1X(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;v7K.L1X(i,transformsToProcess);i++){if(v7K.K8X(i,transformsToProcess))i=-1;position=firstTick+i;if(v7K.J8X(position,chart.dataSet.length)&&v7K.z8X(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;v7K.j8X(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||v7K.q8X(quote[field],0))quote.transform[field]=v7K.P8X(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(v7K.p8X(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||v7K.E8X(quote[field],0))quote.transform[field]=v7K.s8X(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||v7K.w8X(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=v7K.o8X(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||v7K.S8X(quote[field],0))quote.transform[field]=v7K.y8X(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&v7K.v8X(stopPointer,stops.length)){if(v7K.g8X(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&v7K.n8X(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||v7K.X8X(position,mouseStop)){for(j=0;v7K.U8X(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=v7K.x2X(current,(1+(quote.transform.Close/100)));}
}
for(j=0;v7K.W2X(j,fields.length);j++){field=fields[j];current=quote[field];if(current||v7K.R2X(current,0)){var baseline=firstQuote[field];if(!baseline&&v7K.C2X(baseline,0)){firstQuote[field]=baseline=v7K.i2X(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=v7K.H2X(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(v7K.Q2X(position,0)){chart.dataSegment.push(null);}
if(v7K.I2X(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var N8Q=0.001;if(v7K.b2X(price,C9Q)||typeof price==K96)return A4Q;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(v7K.c2X(priceTick,v7K.S06))price=stx.internationalizer.percent0.format(v7K.r2X(price,W5Q));else if(v7K.m2X(priceTick,U56))price=stx.internationalizer.percent1.format(v7K.A2X(price,W5Q));else if(v7K.f2X(priceTick,j96))price=stx.internationalizer.percent2.format(v7K.t2X(price,W5Q));else if(v7K.Y2X(priceTick,N8Q))price=stx.internationalizer.percent3.format(v7K.l2X(price,W5Q));else price=stx.internationalizer.percent4.format(price);}
else{if(v7K.G5X(priceTick,v7K.S06))price=price.toFixed(v7K.m06)+M9Q;else if(v7K.u5X(priceTick,U56))price=price.toFixed(v7K.S06)+M9Q;else if(v7K.B5X(priceTick,j96))price=price.toFixed(v7K.o06)+M9Q;else if(v7K.V5X(priceTick,N8Q))price=price.toFixed(v7K.a06)+M9Q;else price=price.toFixed(v7K.f06)+M9Q;}
if(v7K.Z5X(parseFloat(price),v7K.m06)&&v7K.F5X(price.charAt(v7K.m06),M3Q)){price=price.substring(v7K.S06);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var z6Q="Re";if(!STX.Comparison.requestCorrelation||v7K.D5X(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;v7K.M5X(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(v7K.N5X(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;v7K.a5X(ii,compareArray.length);ii++){if(v7K.O5X(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs[(z6Q+a3Q+l4Q+a0Q+Y4Q+J56)+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var k4Q=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(k4Q);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var J9Q="string";if(!chart)chart=this.chart;if(typeof chart==J9Q)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=O06;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=C9Q;chart.panel.yAxis.whichSet=u0Q;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(T1Q,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;v7K.k5X(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=v7K.e5X(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;v7K.T5X(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(v7K.d5X(word.charCodeAt(0),33)&&v7K.h5X(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(v7K.L5X(word.length,1)){if(v7K.K6X(word.charCodeAt(1),33)&&v7K.J6X(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(v7K.z6X(a.id,b.id))return 1;else if(v7K.j6X(a.id,b.id))return -1;return v7K.q6X(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(v7K.P6X(a.weight,b.weight))return 1;else if(v7K.p6X(a.weight,b.weight))return -1;return v7K.E6X(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;v7K.s6X(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(v7K.w6X(a.weight,b.weight))return 1;else if(v7K.o6X(a.weight,b.weight))return -1;return v7K.S6X(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;v7K.y6X(r,res.length);r++){if(v7K.v6X(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;v7K.g6X(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&v7K.n6X(entry.category,category))continue;var name=entry.name.toUpperCase();if(v7K.X6X(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=v7K.U6X(name.length,keyword.length);if(!contains&&v7K.x46(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(v7K.W46(myKey.charCodeAt(0),33)&&v7K.R46(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(v7K.C46(myKey.length,1)){if(v7K.i46(myKey.charCodeAt(1),33)&&v7K.H46(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(v7K.Q46(kk.length,1))continue;if(v7K.I46(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&v7K.b46(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(v7K.c46(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&v7K.r46(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(v7K.m46(k2," "))break;}
}
for(var extraKeys=1;v7K.A46(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=v7K.f46(descResults.length,1);v7K.t46(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;v7K.Y46(wd,words.length);wd++){if(v7K.l46(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===C16&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var Y=function(X){_stxThirdParty=X.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=(E86+q0Q+d9Q+C0Q+V66))Y(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();