/* File generated on Tue Jun 28 2016 16:23:08 GMT-0400 (EDT) */
/* Version 2016-06-21 */
/* Expires on 2016/07/28 */
/*
Copyright 2014-2015-2016 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2016/07/28";
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
	var version=["Version 2016-06-21"];
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
var H4z={'r0':function(e0,i0){return e0==i0;}
,'b1D':function(P1D,o1D){return P1D>o1D;}
,'u0u':function(X0u,H0u){return X0u<H0u;}
,'K5':function(s5,n5,a5,J5){return s5*n5*a5*J5;}
,'w0u':function(j0u,I0u){return j0u<I0u;}
,'v6Z':function(b6Z,P6Z){return b6Z>P6Z;}
,'B8F':function(S8F,T8F){return S8F!==T8F;}
,'I6H':function(v6H,b6H){return v6H<b6H;}
,'F1F':function(w1F,j1F){return w1F==j1F;}
,'w8D':function(j8D,I8D){return j8D>I8D;}
,'u3H':function(X3H,H3H){return X3H==H3H;}
,'m2Z':function(U2Z,t2Z){return U2Z==t2Z;}
,'H2Y':function(Q2Y,q2Y){return Q2Y<q2Y;}
,'h1h':function(x1h,M1h){return x1h/M1h;}
,'h1u':function(x1u,M1u){return x1u===M1u;}
,'L3u':function(Y3u,C3u){return Y3u==C3u;}
,'c0u':function(z4u,h4u){return z4u>h4u;}
,'H2u':function(Q2u,q2u){return Q2u!==q2u;}
,'x7h':function(M7h,r7h){return M7h<r7h;}
,'Y6':function(C6,u6){return C6<u6;}
,'f0W':function(D0W,A0W){return D0W-A0W;}
,'e1n':function(i1n,k1n){return i1n>k1n;}
,'Q4W':function(q4W,E4W){return q4W===E4W;}
,'U2H':function(t2H,N2H){return t2H<N2H;}
,'e0n':function(i0n,k0n){return i0n<k0n;}
,'w9':function(j9,I9){return j9>I9;}
,'P7n':function(o7n,V7n){return o7n-V7n;}
,'m7u':function(U7u,t7u){return U7u<t7u;}
,'c6u':function(z2u,h2u){return z2u<h2u;}
,'e4u':function(i4u,k4u){return i4u!=k4u;}
,'E8Z':function(p8Z,B8Z){return p8Z!=B8Z;}
,'n0s':function(a0s,J0s){return a0s-J0s;}
,'G4D':function(F4D,w4D){return F4D==w4D;}
,'G9n':function(F9n,w9n){return F9n<w9n;}
,'J1H':function(f1H,D1H){return f1H-D1H;}
,'G6s':function(F6s,w6s){return F6s-w6s;}
,'u6D':function(X6D,H6D){return X6D<H6D;}
,'h9s':function(x9s,M9s){return x9s-M9s;}
,'I4':function(v4,b4){return v4/b4;}
,'A8Q':function(Z8Q,L8Q){return Z8Q>=L8Q;}
,'b6F':function(P6F,o6F){return P6F<=o6F;}
,'x9Y':function(M9Y,r9Y){return M9Y<r9Y;}
,'H7n':function(Q7n,q7n){return Q7n==q7n;}
,'L1Z':function(Y1Z,C1Z){return Y1Z-C1Z;}
,'C4F':function(u4F,X4F){return u4F==X4F;}
,'i3u':function(k3u,W3u){return k3u==W3u;}
,'X4D':function(H4D,Q4D){return H4D==Q4D;}
,'i6Q':function(k6Q,W6Q){return k6Q<W6Q;}
,'A7':function(Z7,L7){return Z7<=L7;}
,'x0D':function(M0D,r0D){return M0D-r0D;}
,'E4F':function(p4F,B4F){return p4F==B4F;}
,'A9u':function(Z9u,L9u){return Z9u-L9u;}
,'c3n':function(z0Z,h0Z){return z0Z==h0Z;}
,'G4h':function(F4h,w4h){return F4h-w4h;}
,'J6':function(f6,D6){return f6>=D6;}
,'K5h':function(s5h,n5h){return s5h<n5h;}
,'A3Y':function(Z3Y,L3Y){return Z3Y>=L3Y;}
,'D3Q':function(A3Q,Z3Q){return A3Q>Z3Q;}
,'x4u':function(M4u,r4u){return M4u-r4u;}
,'A2':function(Z2,L2){return Z2===L2;}
,'e4':function(i4,k4){return i4/k4;}
,'C8Z':function(u8Z,X8Z){return u8Z==X8Z;}
,'Z7F':function(L7F,Y7F){return L7F<=Y7F;}
,'z1Z':function(h1Z,x1Z){return h1Z!=x1Z;}
,'p3H':function(B3H,S3H){return B3H-S3H;}
,'R3h':function(G3h,F3h){return G3h!=F3h;}
,'a7H':function(J7H,f7H){return J7H-f7H;}
,'m7n':function(U7n,t7n){return U7n*t7n;}
,'T5F':function(y5F,l5F){return y5F===l5F;}
,'B2':function(S2,T2){return S2-T2;}
,'N7Q':function(K7Q,s7Q){return K7Q>s7Q;}
,'I5H':function(v5H,b5H){return v5H/b5H;}
,'P4F':function(o4F,V4F){return o4F==V4F;}
,'F2':function(j2,I2){return j2==I2;}
,'g0Z':function(c0Z,z4Z){return c0Z<z4Z;}
,'O0':function(m0,U0){return m0<U0;}
,'H0':function(Q0,q0){return Q0<q0;}
,'a8H':function(J8H,f8H){return J8H&f8H;}
,'z3h':function(h3h,x3h){return h3h/x3h;}
,'l5H':function(R5H,G5H){return R5H-G5H;}
,'R2H':function(G2H,F2H){return G2H/F2H;}
,'N2u':function(K2u,s2u){return K2u/s2u;}
,'W0Q':function(d0Q,O0Q){return d0Q===O0Q;}
,'B1Q':function(S1Q,T1Q){return S1Q*T1Q;}
,'S8Y':function(T8Y,y8Y){return T8Y<y8Y;}
,'i3h':function(k3h,W3h){return k3h===W3h;}
,'V8h':function(g8h,c8h){return g8h/c8h;}
,'M2F':function(r2F,e2F){return r2F/e2F;}
,'r6F':function(e6F,i6F){return e6F==i6F;}
,'L0Y':function(Y0Y,C0Y){return Y0Y>C0Y;}
,'O7':function(m7,U7){return m7<U7;}
,'f0Z':function(D0Z,A0Z){return D0Z>A0Z;}
,'v0s':function(b0s,P0s){return b0s<P0s;}
,'F0D':function(w0D,j0D){return w0D*j0D;}
,'G8u':function(F8u,w8u){return F8u<w8u;}
,'R0F':function(G0F,F0F){return G0F*F0F;}
,'M5Q':function(r5Q,e5Q){return r5Q>=e5Q;}
,'A8s':function(Z8s,L8s){return Z8s==L8s;}
,'b2Z':function(P2Z,o2Z){return P2Z!==o2Z;}
,'R7H':function(G7H,F7H){return G7H<F7H;}
,'L6D':function(Y6D,C6D){return Y6D/C6D;}
,'a5n':function(J5n,f5n){return J5n*f5n;}
,'J8h':function(f8h,D8h){return f8h-D8h;}
,'x8Z':function(M8Z,r8Z){return M8Z/r8Z;}
,'W0Z':function(d0Z,O0Z){return d0Z!==O0Z;}
,'D6Z':function(A6Z,Z6Z){return A6Z==Z6Z;}
,'v8H':function(b8H,P8H){return b8H*P8H;}
,'M9':function(r9,e9){return r9==e9;}
,'t9s':function(N9s,K9s){return N9s==K9s;}
,'i1H':function(k1H,W1H){return k1H-W1H;}
,'e6Y':function(i6Y,k6Y){return i6Y-k6Y;}
,'m7W':function(U7W,t7W){return U7W>t7W;}
,'F4':function(w4,j4){return w4*j4;}
,'V9F':function(g9F,c9F){return g9F==c9F;}
,'g5':function(c5,z7){return c5>z7;}
,'d6u':function(O6u,m6u){return O6u/m6u;}
,'B1h':function(S1h,T1h){return S1h-T1h;}
,'g8Y':function(c8Y,z5Y){return c8Y/z5Y;}
,'i9':function(k9,W9){return k9==W9;}
,'v3Q':function(b3Q,P3Q){return b3Q-P3Q;}
,'M2s':function(r2s,e2s){return r2s<e2s;}
,'f0s':function(D0s,A0s){return D0s-A0s;}
,'M8H':function(r8H,e8H){return r8H/e8H;}
,'E9Z':function(p9Z,B9Z){return p9Z<B9Z;}
,'P2D':function(o2D,V2D){return o2D>=V2D;}
,'E7h':function(p7h,B7h){return p7h<B7h;}
,'p3n':function(B3n,S3n){return B3n==S3n;}
,'W6Y':function(d6Y,O6Y){return d6Y-O6Y;}
,'O3Z':function(m3Z,U3Z){return m3Z==U3Z;}
,'Q3h':function(q3h,E3h){return q3h===E3h;}
,'m1n':function(U1n,t1n){return U1n*t1n;}
,'E7Q':function(p7Q,B7Q){return p7Q!=B7Q;}
,'N0n':function(K0n,s0n){return K0n<s0n;}
,'P5H':function(o5H,V5H,g5H,c5H){return o5H-V5H+g5H-c5H;}
,'x0Z':function(M0Z,r0Z){return M0Z>r0Z;}
,'F':function(P,V){return P==V;}
,'o6Q':function(V6Q,g6Q){return V6Q<g6Q;}
,'L6h':function(Y6h,C6h){return Y6h<C6h;}
,'h0H':function(x0H,M0H){return x0H-M0H;}
,'F1Y':function(w1Y,j1Y){return w1Y===j1Y;}
,'m8Z':function(U8Z,t8Z){return U8Z==t8Z;}
,'Y8n':function(C8n,u8n){return C8n==u8n;}
,'d8u':function(O8u,m8u,U8u,t8u,N8u){return O8u/m8u/U8u/t8u/N8u;}
,'P7h':function(o7h,V7h){return o7h!==V7h;}
,'y5Z':function(l5Z,R5Z){return l5Z<R5Z;}
,'M6H':function(r6H,e6H){return r6H-e6H;}
,'m0D':function(U0D,t0D){return U0D==t0D;}
,'R5u':function(G5u,F5u){return G5u==F5u;}
,'S1s':function(T1s,y1s){return T1s<y1s;}
,'L5s':function(Y5s,C5s){return Y5s>C5s;}
,'C3':function(u3,X3){return u3==X3;}
,'g9Y':function(c9Y,z3Y){return c9Y/z3Y;}
,'e1s':function(i1s,k1s){return i1s>k1s;}
,'k7':function(W7,d7){return W7<d7;}
,'N8W':function(K8W,s8W){return K8W<=s8W;}
,'j8s':function(I8s,v8s){return I8s*v8s;}
,'E6H':function(p6H,B6H){return p6H<B6H;}
,'s1Q':function(n1Q,a1Q){return n1Q==a1Q;}
,'x4':function(M4,r4){return M4<r4;}
,'v5Q':function(b5Q,P5Q){return b5Q<=P5Q;}
,'G8':function(F8,w8){return F8<w8;}
,'C2n':function(u2n,X2n){return u2n-X2n;}
,'x0W':function(M0W,r0W){return M0W>r0W;}
,'K8D':function(s8D,n8D){return s8D>n8D;}
,'N7F':function(K7F,s7F){return K7F*s7F;}
,'k1Y':function(W1Y,d1Y,O1Y){return W1Y*d1Y/O1Y;}
,'D5Q':function(A5Q,Z5Q){return A5Q===Z5Q;}
,'y4H':function(l4H,R4H){return l4H<R4H;}
,'O6':function(m6,U6){return m6==U6;}
,'k9h':function(W9h,d9h){return W9h<d9h;}
,'Q2H':function(q2H,E2H){return q2H>E2H;}
,'L6n':function(Y6n,C6n){return Y6n<C6n;}
,'W5Y':function(d5Y,O5Y){return d5Y-O5Y;}
,'P0h':function(o0h,V0h){return o0h<=V0h;}
,'F4s':function(w4s,j4s){return w4s<j4s;}
,'l1Y':function(R1Y,G1Y){return R1Y*G1Y;}
,'z1':function(h1,M1){return h1<M1;}
,'R0Y':function(G0Y,F0Y){return G0Y==F0Y;}
,'I8Z':function(v8Z,b8Z){return v8Z-b8Z;}
,'i8u':function(k8u,W8u){return k8u-W8u;}
,'X1D':function(H1D,Q1D){return H1D<Q1D;}
,'t9F':function(N9F,K9F){return N9F!=K9F;}
,'w2H':function(j2H,I2H){return j2H/I2H;}
,'H1n':function(Q1n,q1n){return Q1n===q1n;}
,'J5Z':function(f5Z,D5Z){return f5Z>=D5Z;}
,'f4Y':function(D4Y,A4Y,Z4Y){return D4Y-A4Y+Z4Y;}
,'c7Z':function(z9Z,h9Z){return z9Z===h9Z;}
,'o3h':function(V3h,g3h){return V3h<g3h;}
,'t5W':function(N5W,K5W){return N5W<=K5W;}
,'P6H':function(o6H,V6H){return o6H===V6H;}
,'S8W':function(T8W,y8W){return T8W<y8W;}
,'f2n':function(D2n,A2n){return D2n-A2n;}
,'i3s':function(k3s,W3s){return k3s==W3s;}
,'g2h':function(c2h,z1h){return c2h-z1h;}
,'l9Z':function(R9Z,G9Z){return R9Z<G9Z;}
,'O9u':function(m9u,U9u){return m9u-U9u;}
,'u2F':function(X2F,H2F){return X2F==H2F;}
,'Y4Z':function(C4Z,u4Z){return C4Z==u4Z;}
,'t9Q':function(N9Q,K9Q){return N9Q<K9Q;}
,'V8Q':function(g8Q,c8Q){return g8Q>=c8Q;}
,'k9F':function(W9F,d9F){return W9F-d9F;}
,'D9W':function(A9W,Z9W){return A9W&Z9W;}
,'O1Q':function(m1Q,U1Q){return m1Q==U1Q;}
,'v0F':function(b0F,P0F){return b0F>P0F;}
,'I0D':function(v0D,b0D){return v0D==b0D;}
,'s4Q':function(n4Q,a4Q){return n4Q>a4Q;}
,'R8D':function(G8D,F8D){return G8D-F8D;}
,'l1n':function(R1n,G1n){return R1n<G1n;}
,'r8n':function(e8n,i8n){return e8n<i8n;}
,'o3H':function(V3H,g3H){return V3H*g3H;}
,'W2Z':function(d2Z,O2Z){return d2Z/O2Z;}
,'c6Q':function(z2Q,h2Q){return z2Q<h2Q;}
,'G2W':function(F2W,w2W,j2W){return F2W-w2W+j2W;}
,'t8':function(N8,K8){return N8<=K8;}
,'a5Q':function(J5Q,f5Q){return J5Q===f5Q;}
,'f5D':function(D5D,A5D){return D5D!=A5D;}
,'E8W':function(p8W,B8W){return p8W!=B8W;}
,'g0Q':function(c0Q,z4Q){return c0Q<=z4Q;}
,'T5u':function(y5u,l5u){return y5u===l5u;}
,'W4n':function(d4n,O4n){return d4n-O4n;}
,'b9n':function(P9n,o9n){return P9n>o9n;}
,'j9s':function(I9s,v9s){return I9s<=v9s;}
,'x4Y':function(M4Y,r4Y){return M4Y!==r4Y;}
,'w5s':function(j5s,I5s){return j5s==I5s;}
,'y3Y':function(l3Y,R3Y){return l3Y==R3Y;}
,'N0s':function(K0s,s0s){return K0s/s0s;}
,'G9Q':function(F9Q,w9Q){return F9Q-w9Q;}
,'P8Z':function(o8Z,V8Z){return o8Z>V8Z;}
,'k3Z':function(W3Z,d3Z){return W3Z==d3Z;}
,'H4F':function(Q4F,q4F){return Q4F==q4F;}
,'K6u':function(s6u,n6u){return s6u/n6u;}
,'n9Z':function(a9Z,J9Z){return a9Z!=J9Z;}
,'z5n':function(h5n,x5n){return h5n>x5n;}
,'D5s':function(A5s,Z5s){return A5s<Z5s;}
,'m0Q':function(U0Q,t0Q){return U0Q>=t0Q;}
,'E7n':function(p7n,B7n){return p7n==B7n;}
,'f0n':function(D0n,A0n,Z0n){return D0n-A0n-Z0n;}
,'i6D':function(k6D,W6D){return k6D!=W6D;}
,'U9':function(t9,N9){return t9==N9;}
,'p3h':function(B3h,S3h){return B3h===S3h;}
,'s9h':function(n9h,a9h){return n9h===a9h;}
,'T0n':function(y0n,l0n){return y0n/l0n;}
,'F4F':function(w4F,j4F){return w4F==j4F;}
,'A4Q':function(Z4Q,L4Q){return Z4Q*L4Q;}
,'C7s':function(u7s,X7s){return u7s/X7s;}
,'O2Y':function(m2Y,U2Y){return m2Y>U2Y;}
,'U5':function(t5,N5){return t5===N5;}
,'b6s':function(P6s,o6s){return P6s>o6s;}
,'j0h':function(I0h,v0h,b0h){return I0h-v0h+b0h;}
,'h8F':function(x8F,M8F){return x8F==M8F;}
,'H2h':function(Q2h,q2h){return Q2h-q2h;}
,'G1Q':function(F1Q,w1Q){return F1Q===w1Q;}
,'w2n':function(j2n,I2n){return j2n<=I2n;}
,'N0':function(K0,s0){return K0<s0;}
,'V4u':function(g4u,c4u){return g4u/c4u;}
,'O4W':function(m4W,U4W){return m4W===U4W;}
,'N2Q':function(K2Q,s2Q){return K2Q<s2Q;}
,'Z1F':function(L1F,Y1F){return L1F>Y1F;}
,'Z2n':function(L2n,Y2n){return L2n<Y2n;}
,'M3F':function(r3F,e3F){return r3F<e3F;}
,'T5s':function(y5s,l5s){return y5s/l5s;}
,'C5H':function(u5H,X5H){return u5H-X5H;}
,'o3n':function(V3n,g3n){return V3n<g3n;}
,'X5Z':function(H5Z,Q5Z){return H5Z/Q5Z;}
,'x1H':function(M1H,r1H,e1H){return M1H-r1H+e1H;}
,'h4Q':function(x4Q,M4Q){return x4Q-M4Q;}
,'F1H':function(w1H,j1H){return w1H/j1H;}
,'j1h':function(I1h,v1h){return I1h*v1h;}
,'J8s':function(f8s,D8s){return f8s===D8s;}
,'o5Y':function(V5Y,g5Y){return V5Y===g5Y;}
,'Z7Q':function(L7Q,Y7Q){return L7Q!=Y7Q;}
,'Z0Z':function(L0Z,Y0Z){return L0Z<Y0Z;}
,'j8':function(I8,v8){return I8==v8;}
,'m3W':function(U3W,t3W){return U3W-t3W;}
,'I2h':function(v2h,b2h){return v2h==b2h;}
,'w5Q':function(j5Q,I5Q){return j5Q/I5Q;}
,'g4F':function(c4F,z6F){return c4F==z6F;}
,'w3F':function(j3F,I3F){return j3F-I3F;}
,'u3Q':function(X3Q,H3Q){return X3Q!==H3Q;}
,'m0W':function(U0W,t0W){return U0W==t0W;}
,'S0Q':function(T0Q,y0Q){return T0Q<=y0Q;}
,'j8u':function(I8u,v8u){return I8u<v8u;}
,'e7Q':function(i7Q,k7Q){return i7Q*k7Q;}
,'m7h':function(U7h,t7h){return U7h>=t7h;}
,'E7u':function(p7u,B7u){return p7u>B7u;}
,'o3Q':function(V3Q,g3Q){return V3Q===g3Q;}
,'J6s':function(f6s,D6s){return f6s<D6s;}
,'v2n':function(b2n,P2n){return b2n==P2n;}
,'u2s':function(X2s,H2s){return X2s-H2s;}
,'M6h':function(r6h,e6h){return r6h==e6h;}
,'N4H':function(K4H,s4H){return K4H-s4H;}
,'i1Z':function(k1Z,W1Z){return k1Z==W1Z;}
,'n2Q':function(a2Q,J2Q){return a2Q<=J2Q;}
,'a0H':function(J0H,f0H){return J0H/f0H;}
,'l2':function(R2,G2){return R2<G2;}
,'v5Y':function(b5Y,P5Y){return b5Y<P5Y;}
,'V5Z':function(g5Z,c5Z){return g5Z>c5Z;}
,'W3':function(d3,O3){return d3*O3;}
,'e0Z':function(i0Z,k0Z){return i0Z-k0Z;}
,'H0Q':function(Q0Q,q0Q){return Q0Q<q0Q;}
,'i6H':function(k6H,W6H,d6H,O6H){return k6H-W6H+d6H-O6H;}
,'J4D':function(f4D,D4D){return f4D-D4D;}
,'p6n':function(B6n,S6n){return B6n-S6n;}
,'C7W':function(u7W,X7W){return u7W<X7W;}
,'R8H':function(G8H,F8H){return G8H*F8H;}
,'b4h':function(P4h,o4h){return P4h<o4h;}
,'O8F':function(m8F,U8F){return m8F<U8F;}
,'S5D':function(T5D,y5D){return T5D<y5D;}
,'t9u':function(N9u,K9u){return N9u>=K9u;}
,'Z9Z':function(L9Z,Y9Z){return L9Z!=Y9Z;}
,'K3Q':function(s3Q,n3Q){return s3Q==n3Q;}
,'y2Z':function(l2Z,R2Z){return l2Z!==R2Z;}
,'I7W':function(v7W,b7W){return v7W-b7W;}
,'P4':function(o4,V4){return o4<V4;}
,'T7Z':function(y7Z,l7Z){return y7Z!=l7Z;}
,'K9W':function(s9W,n9W){return s9W/n9W;}
,'d7H':function(O7H,m7H){return O7H/m7H;}
,'B9H':function(S9H,T9H){return S9H!==T9H;}
,'S9Y':function(T9Y,y9Y){return T9Y!==y9Y;}
,'w6u':function(j6u,I6u){return j6u/I6u;}
,'n7n':function(a7n,J7n){return a7n===J7n;}
,'Q5Q':function(q5Q,E5Q){return q5Q===E5Q;}
,'o5F':function(V5F,g5F){return V5F>g5F;}
,'t4Z':function(N4Z,K4Z){return N4Z-K4Z;}
,'e7W':function(i7W,k7W){return i7W==k7W;}
,'V8':function(g8,c8){return g8>c8;}
,'Z0Q':function(L0Q,Y0Q){return L0Q-Y0Q;}
,'k9n':function(W9n,d9n){return W9n-d9n;}
,'N8Z':function(K8Z,s8Z){return K8Z==s8Z;}
,'D0F':function(A0F,Z0F){return A0F*Z0F;}
,'F5':function(w5,j5){return w5>j5;}
,'e7F':function(i7F,k7F){return i7F==k7F;}
,'m2u':function(U2u,t2u){return U2u-t2u;}
,'Z8Z':function(L8Z,Y8Z){return L8Z*Y8Z;}
,'g6H':function(c6H,z2H){return c6H<z2H;}
,'p0n':function(B0n,S0n){return B0n===S0n;}
,'X7':function(H7,Q7){return H7<Q7;}
,'Z7u':function(L7u,Y7u){return L7u-Y7u;}
,'r8h':function(e8h,i8h){return e8h<i8h;}
,'b8s':function(P8s,o8s){return P8s*o8s;}
,'E7s':function(p7s,B7s){return p7s*B7s;}
,'S6Y':function(T6Y,y6Y){return T6Y<y6Y;}
,'N6Y':function(K6Y,s6Y){return K6Y>s6Y;}
,'i6Z':function(k6Z,W6Z){return k6Z==W6Z;}
,'Z4F':function(L4F,Y4F){return L4F==Y4F;}
,'E4':function(p4,B4){return p4==B4;}
,'O5Z':function(m5Z,U5Z){return m5Z-U5Z;}
,'r8':function(e8,i8){return e8<i8;}
,'A0h':function(Z0h,L0h){return Z0h-L0h;}
,'B4Q':function(S4Q,T4Q){return S4Q<T4Q;}
,'F9Y':function(w9Y,j9Y){return w9Y!=j9Y;}
,'r1Y':function(e1Y,i1Y){return e1Y<i1Y;}
,'k2W':function(W2W,d2W){return W2W*d2W;}
,'o0u':function(V0u,g0u){return V0u<g0u;}
,'X8Q':function(H8Q,Q8Q){return H8Q!=Q8Q;}
,'K3h':function(s3h,n3h){return s3h/n3h;}
,'R3u':function(G3u,F3u){return G3u<=F3u;}
,'h2Y':function(x2Y,M2Y){return x2Y-M2Y;}
,'i5F':function(k5F,W5F){return k5F<W5F;}
,'y8n':function(l8n,R8n){return l8n===R8n;}
,'C7F':function(u7F,X7F){return u7F*X7F;}
,'S1H':function(T1H,y1H){return T1H-y1H;}
,'L5Y':function(Y5Y,C5Y){return Y5Y===C5Y;}
,'a0Y':function(J0Y,f0Y){return J0Y!=f0Y;}
,'P2Q':function(o2Q,V2Q){return o2Q==V2Q;}
,'v3F':function(b3F,P3F){return b3F<P3F;}
,'s2W':function(n2W,a2W){return n2W==a2W;}
,'G6':function(F6,w6,j6){return F6-w6+j6;}
,'S7h':function(T7h,y7h){return T7h!=y7h;}
,'U3u':function(t3u,N3u){return t3u-N3u;}
,'M3h':function(r3h,e3h){return r3h===e3h;}
,'c6D':function(z2D,h2D){return z2D!==h2D;}
,'e0D':function(i0D,k0D){return i0D*k0D;}
,'N4':function(K4,s4){return K4>=s4;}
,'p5n':function(B5n,S5n){return B5n!==S5n;}
,'H5':function(Q5,q5){return Q5*q5;}
,'z6H':function(h6H,x6H){return h6H<=x6H;}
,'e0F':function(i0F,k0F){return i0F-k0F;}
,'W0W':function(d0W,O0W){return d0W-O0W;}
,'c0F':function(z4F,h4F){return z4F==h4F;}
,'k1Q':function(W1Q,d1Q){return W1Q==d1Q;}
,'Q6D':function(q6D,E6D){return q6D===E6D;}
,'B0h':function(S0h,T0h){return S0h*T0h;}
,'r0h':function(e0h,i0h){return e0h==i0h;}
,'y6':function(l6,R6){return l6<R6;}
,'S7s':function(T7s,y7s){return T7s-y7s;}
,'J3Z':function(f3Z,D3Z){return f3Z>D3Z;}
,'N4n':function(K4n,s4n){return K4n!=s4n;}
,'Q3F':function(q3F,E3F){return q3F==E3F;}
,'u5n':function(X5n,H5n){return X5n>H5n;}
,'n9Y':function(a9Y,J9Y){return a9Y>J9Y;}
,'c2n':function(z1n,h1n){return z1n/h1n;}
,'U3n':function(t3n,N3n){return t3n*N3n;}
,'n2Z':function(a2Z,J2Z){return a2Z<J2Z;}
,'o4Y':function(V4Y,g4Y){return V4Y==g4Y;}
,'N7u':function(K7u,s7u){return K7u===s7u;}
,'m1Y':function(U1Y,t1Y){return U1Y/t1Y;}
,'Y2W':function(C2W,u2W){return C2W-u2W;}
,'N3W':function(K3W,s3W){return K3W<s3W;}
,'d5s':function(O5s,m5s){return O5s<m5s;}
,'D8H':function(A8H,Z8H){return A8H>=Z8H;}
,'r2W':function(e2W,i2W){return e2W<i2W;}
,'Q9W':function(q9W,E9W){return q9W<=E9W;}
,'d0Y':function(O0Y,m0Y){return O0Y|m0Y;}
,'x6Y':function(M6Y,r6Y){return M6Y-r6Y;}
,'d2s':function(O2s,m2s){return O2s-m2s;}
,'K6Q':function(s6Q,n6Q){return s6Q<n6Q;}
,'Z0s':function(L0s,Y0s){return L0s*Y0s;}
,'v5s':function(b5s,P5s){return b5s<P5s;}
,'J9Q':function(f9Q,D9Q){return f9Q*D9Q;}
,'w5F':function(j5F,I5F){return j5F!==I5F;}
,'P3W':function(o3W,V3W){return o3W<=V3W;}
,'X2Z':function(H2Z,Q2Z){return H2Z/Q2Z;}
,'F7h':function(w7h,j7h){return w7h>=j7h;}
,'r6s':function(e6s,i6s){return e6s-i6s;}
,'x2D':function(M2D,r2D){return M2D/r2D;}
,'A4Z':function(Z4Z,L4Z){return Z4Z>L4Z;}
,'r4Q':function(e4Q,i4Q){return e4Q<i4Q;}
,'j9h':function(I9h,v9h){return I9h<v9h;}
,'a9':function(J9,f9){return J9==f9;}
,'T6u':function(y6u,l6u){return y6u<l6u;}
,'V4Q':function(g4Q,c4Q){return g4Q<c4Q;}
,'l1F':function(R1F,G1F){return R1F<G1F;}
,'Q0Y':function(q0Y,E0Y){return q0Y==E0Y;}
,'g8Z':function(c8Z,z5Z){return c8Z<z5Z;}
,'u5s':function(X5s,H5s){return X5s>H5s;}
,'T6h':function(y6h,l6h){return y6h/l6h;}
,'q8s':function(E8s,p8s){return E8s<=p8s;}
,'N9Y':function(K9Y,s9Y){return K9Y>s9Y;}
,'f2u':function(D2u,A2u){return D2u!=A2u;}
,'Z2Q':function(L2Q,Y2Q){return L2Q<=Y2Q;}
,'d3F':function(O3F,m3F){return O3F-m3F;}
,'Q5s':function(q5s,E5s){return q5s<E5s;}
,'I3':function(v3,b3){return v3==b3;}
,'w0':function(j0,I0){return j0<I0;}
,'n5D':function(a5D,J5D){return a5D!==J5D;}
,'j6s':function(I6s,v6s){return I6s==v6s;}
,'j9F':function(I9F,v9F){return I9F==v9F;}
,'a6u':function(J6u,f6u){return J6u==f6u;}
,'U0u':function(t0u,N0u){return t0u===N0u;}
,'I1s':function(v1s,b1s){return v1s<b1s;}
,'Z0':function(L0,Y0){return L0<Y0;}
,'S9Z':function(T9Z,y9Z){return T9Z>=y9Z;}
,'c5u':function(z7u,h7u){return z7u===h7u;}
,'Q4u':function(q4u,E4u){return q4u/E4u;}
,'V4h':function(g4h,c4h){return g4h>c4h;}
,'B4D':function(S4D,T4D){return S4D<=T4D;}
,'Z7s':function(L7s,Y7s){return L7s-Y7s;}
,'J2':function(f2,D2){return f2-D2;}
,'w3H':function(j3H,I3H){return j3H>I3H;}
,'d3n':function(O3n,m3n){return O3n*m3n;}
,'P6W':function(o6W,V6W){return o6W!=V6W;}
,'I2u':function(v2u,b2u){return v2u==b2u;}
,'o0':function(V0,g0){return V0>=g0;}
,'h8':function(x8,M8){return x8<M8;}
,'V8F':function(g8F,c8F){return g8F>c8F;}
,'S1n':function(T1n,y1n){return T1n==y1n;}
,'d6n':function(O6n,m6n){return O6n-m6n;}
,'q9u':function(E9u,p9u){return E9u==p9u;}
,'e2D':function(i2D,k2D){return i2D/k2D;}
,'f1F':function(D1F,A1F){return D1F==A1F;}
,'x3W':function(M3W,r3W){return M3W>r3W;}
,'F8W':function(w8W,j8W){return w8W*j8W;}
,'M1Z':function(r1Z,e1Z){return r1Z<=e1Z;}
,'h1Y':function(x1Y,M1Y){return x1Y<M1Y;}
,'s1W':function(n1W,a1W){return n1W-a1W;}
,'t2W':function(N2W,K2W){return N2W>=K2W;}
,'x4n':function(M4n,r4n){return M4n/r4n;}
,'L0n':function(Y0n,C0n){return Y0n-C0n;}
,'s4Z':function(n4Z,a4Z){return n4Z<a4Z;}
,'x9H':function(M9H,r9H){return M9H-r9H;}
,'C6W':function(u6W,X6W){return u6W==X6W;}
,'h1Q':function(x1Q,M1Q){return x1Q-M1Q;}
,'o5Q':function(V5Q,g5Q){return V5Q<g5Q;}
,'c5s':function(z7s,h7s){return z7s-h7s;}
,'H7h':function(Q7h,q7h){return Q7h<q7h;}
,'t6':function(N6,K6){return N6===K6;}
,'v5u':function(b5u,P5u){return b5u<P5u;}
,'r2H':function(e2H,i2H){return e2H-i2H;}
,'P2Y':function(o2Y,V2Y){return o2Y==V2Y;}
,'w9W':function(j9W,I9W){return j9W>=I9W;}
,'l8W':function(R8W,G8W){return R8W>G8W;}
,'V3Y':function(g3Y,c3Y){return g3Y===c3Y;}
,'B6s':function(S6s,T6s){return S6s<T6s;}
,'U5n':function(t5n,N5n){return t5n*N5n;}
,'x7F':function(M7F,r7F){return M7F==r7F;}
,'l0Z':function(R0Z,G0Z){return R0Z>=G0Z;}
,'r0H':function(e0H,i0H,k0H,W0H){return e0H-i0H+k0H-W0H;}
,'x2n':function(M2n,r2n,e2n){return M2n-r2n+e2n;}
,'s0h':function(n0h,a0h){return n0h==a0h;}
,'B8s':function(S8s,T8s){return S8s>=T8s;}
,'S4':function(T4,y4){return T4!==y4;}
,'m7F':function(U7F,t7F){return U7F-t7F;}
,'S7W':function(T7W,y7W){return T7W>=y7W;}
,'f3':function(D3,A3){return D3==A3;}
,'r9F':function(e9F,i9F){return e9F/i9F;}
,'m9Y':function(U9Y,t9Y){return U9Y*t9Y;}
,'Q7H':function(q7H,E7H){return q7H<E7H;}
,'o0s':function(V0s,g0s){return V0s==g0s;}
,'u3n':function(X3n,H3n){return X3n==H3n;}
,'Z1Y':function(L1Y,Y1Y){return L1Y<Y1Y;}
,'c2H':function(z1H,h1H){return z1H==h1H;}
,'l9Y':function(R9Y,G9Y){return R9Y===G9Y;}
,'j4n':function(I4n,v4n){return I4n/v4n;}
,'s9u':function(n9u,a9u){return n9u==a9u;}
,'N0W':function(K0W,s0W){return K0W-s0W;}
,'Q6n':function(q6n,E6n){return q6n/E6n;}
,'p7H':function(B7H,S7H){return B7H-S7H;}
,'A1D':function(Z1D,L1D){return Z1D<L1D;}
,'R4W':function(G4W,F4W){return G4W-F4W;}
,'c9W':function(z3W,h3W){return z3W<h3W;}
,'B9s':function(S9s,T9s){return S9s>=T9s;}
,'b9Q':function(P9Q,o9Q){return P9Q<o9Q;}
,'e8Y':function(i8Y,k8Y){return i8Y===k8Y;}
,'C0D':function(u0D,X0D){return u0D>X0D;}
,'U2F':function(t2F,N2F){return t2F<N2F;}
,'o7Y':function(V7Y,g7Y){return V7Y-g7Y;}
,'s5Z':function(n5Z,a5Z){return n5Z-a5Z;}
,'X4Z':function(H4Z,Q4Z){return H4Z in Q4Z;}
,'D2s':function(A2s,Z2s){return A2s*Z2s;}
,'N1':function(K1,s1){return K1<s1;}
,'M7Z':function(r7Z,e7Z){return r7Z in e7Z;}
,'B8h':function(S8h,T8h){return S8h===T8h;}
,'B9u':function(S9u,T9u){return S9u<T9u;}
,'x1n':function(M1n,r1n){return M1n-r1n;}
,'T1W':function(y1W,l1W){return y1W<=l1W;}
,'W4Y':function(d4Y,O4Y){return d4Y!=O4Y;}
,'H9Y':function(Q9Y,q9Y){return Q9Y/q9Y;}
,'D2H':function(A2H,Z2H){return A2H==Z2H;}
,'A8n':function(Z8n,L8n){return Z8n-L8n;}
,'f0Q':function(D0Q,A0Q){return D0Q*A0Q;}
,'s9F':function(n9F,a9F){return n9F!==a9F;}
,'U0Y':function(t0Y,N0Y){return t0Y|N0Y;}
,'y8':function(l8,R8){return l8<R8;}
,'m4u':function(U4u,t4u){return U4u===t4u;}
,'H7F':function(Q7F,q7F){return Q7F<q7F;}
,'C0Z':function(u0Z,X0Z){return u0Z>X0Z;}
,'C1s':function(u1s,X1s){return u1s!==X1s;}
,'L3H':function(Y3H,C3H){return Y3H===C3H;}
,'m6H':function(U6H,t6H){return U6H<=t6H;}
,'e2Q':function(i2Q,k2Q){return i2Q<k2Q;}
,'Q0n':function(q0n,E0n){return q0n!=E0n;}
,'r5W':function(e5W,i5W){return e5W-i5W;}
,'U2n':function(t2n,N2n,K2n,s2n){return t2n-N2n+K2n-s2n;}
,'c8D':function(z5D,h5D){return z5D>h5D;}
,'e0W':function(i0W,k0W){return i0W>k0W;}
,'k6s':function(W6s,d6s){return W6s-d6s;}
,'j9Q':function(I9Q,v9Q){return I9Q-v9Q;}
,'g7s':function(c7s,z9s){return c7s==z9s;}
,'B4Y':function(S4Y,T4Y){return S4Y==T4Y;}
,'L5u':function(Y5u,C5u){return Y5u===C5u;}
,'F1n':function(w1n,j1n){return w1n==j1n;}
,'r4W':function(e4W,i4W){return e4W<i4W;}
,'p6u':function(B6u,S6u){return B6u-S6u;}
,'G4Z':function(F4Z,w4Z){return F4Z==w4Z;}
,'X8u':function(H8u,Q8u){return H8u-Q8u;}
,'W2u':function(d2u,O2u){return d2u-O2u;}
,'Y2':function(C2,u2){return C2===u2;}
,'I2Q':function(v2Q,b2Q){return v2Q==b2Q;}
,'w8H':function(j8H,I8H){return j8H-I8H;}
,'R3H':function(G3H,F3H){return G3H<F3H;}
,'R5W':function(G5W,F5W){return G5W/F5W;}
,'p3u':function(B3u,S3u){return B3u>S3u;}
,'G8Q':function(F8Q,w8Q){return F8Q<=w8Q;}
,'x7Q':function(M7Q,r7Q){return M7Q>r7Q;}
,'c9':function(z3,h3){return z3==h3;}
,'K5u':function(s5u,n5u){return s5u==n5u;}
,'m9Z':function(U9Z,t9Z){return U9Z<=t9Z;}
,'Q5n':function(q5n,E5n){return q5n<E5n;}
,'T1Z':function(y1Z,l1Z){return y1Z-l1Z;}
,'o8H':function(V8H,g8H){return V8H*g8H;}
,'c8H':function(z5H,h5H){return z5H<h5H;}
,'M5n':function(r5n,e5n){return r5n<e5n;}
,'q5Z':function(E5Z,p5Z){return E5Z-p5Z;}
,'b4Q':function(P4Q,o4Q){return P4Q>o4Q;}
,'G3Z':function(F3Z,w3Z){return F3Z==w3Z;}
,'f1Y':function(D1Y,A1Y){return D1Y<A1Y;}
,'o2H':function(V2H,g2H){return V2H>=g2H;}
,'k1W':function(W1W,d1W){return W1W/d1W;}
,'Y3Y':function(C3Y,u3Y){return C3Y<u3Y;}
,'Y9h':function(C9h,u9h){return C9h>u9h;}
,'S0W':function(T0W,y0W){return T0W===y0W;}
,'s6F':function(n6F,a6F){return n6F==a6F;}
,'v3s':function(b3s,P3s){return b3s-P3s;}
,'U3H':function(t3H,N3H){return t3H*N3H;}
,'J2W':function(f2W,D2W){return f2W<=D2W;}
,'b7':function(P7,o7){return P7<o7;}
,'L7H':function(Y7H,C7H){return Y7H*C7H;}
,'d6D':function(O6D,m6D){return O6D===m6D;}
,'Y9s':function(C9s,u9s){return C9s==u9s;}
,'z7H':function(h7H,x7H){return h7H<=x7H;}
,'i5s':function(k5s,W5s){return k5s<W5s;}
,'d6Q':function(O6Q,m6Q){return O6Q>m6Q;}
,'y4h':function(l4h,R4h){return l4h/R4h;}
,'z8Q':function(h8Q,x8Q){return h8Q-x8Q;}
,'r9h':function(e9h,i9h){return e9h-i9h;}
,'V9u':function(g9u,c9u){return g9u==c9u;}
,'h8s':function(x8s,M8s){return x8s-M8s;}
,'k1D':function(W1D,d1D){return W1D<=d1D;}
,'w0Y':function(j0Y,I0Y){return j0Y==I0Y;}
,'Y4D':function(C4D,u4D){return C4D<u4D;}
,'W7Y':function(d7Y,O7Y){return d7Y<O7Y;}
,'J9s':function(f9s,D9s){return f9s==D9s;}
,'C8Y':function(u8Y,X8Y){return u8Y==X8Y;}
,'X8s':function(H8s,Q8s){return H8s>=Q8s;}
,'e7s':function(i7s,k7s){return i7s/k7s;}
,'X4Y':function(H4Y,Q4Y){return H4Y==Q4Y;}
,'Y1W':function(C1W,u1W){return C1W-u1W;}
,'b5Z':function(P5Z,o5Z){return P5Z in o5Z;}
,'z0':function(h0,M0){return h0==M0;}
,'T0H':function(y0H,l0H){return y0H<l0H;}
,'s8F':function(n8F,a8F){return n8F!=a8F;}
,'U3h':function(t3h,N3h){return t3h==N3h;}
,'z8u':function(h8u,x8u){return h8u-x8u;}
,'x0n':function(M0n,r0n){return M0n<r0n;}
,'Y1D':function(C1D,u1D){return C1D-u1D;}
,'W3W':function(d3W,O3W){return d3W*O3W;}
,'g4s':function(c4s,z6s){return c4s-z6s;}
,'H9D':5,'L5F':function(Y5F,C5F){return Y5F/C5F;}
,'q9Q':function(E9Q,p9Q){return E9Q>p9Q;}
,'h2W':function(x2W,M2W){return x2W==M2W;}
,'w7H':function(j7H,I7H){return j7H>I7H;}
,'H4':function(Q4,q4){return Q4==q4;}
,'O8n':function(m8n,U8n){return m8n-U8n;}
,'a5F':function(J5F,f5F){return J5F-f5F;}
,'Z4':function(L4,Y4){return L4==Y4;}
,'b3Z':function(P3Z,o3Z){return P3Z==o3Z;}
,'A1h':function(Z1h,L1h){return Z1h==L1h;}
,'O1W':function(m1W,U1W){return m1W-U1W;}
,'W4':function(d4,O4){return d4/O4;}
,'b4Z':function(P4Z,o4Z){return P4Z>=o4Z;}
,'m6W':function(U6W,t6W){return U6W==t6W;}
,'T5W':function(y5W,l5W){return y5W<=l5W;}
,'n7Y':function(a7Y,J7Y,f7Y){return a7Y*J7Y/f7Y;}
,'Y6s':function(C6s,u6s){return C6s==u6s;}
,'Z8Y':function(L8Y,Y8Y){return L8Y==Y8Y;}
,'u3F':function(X3F,H3F){return X3F==H3F;}
,'j3Y':function(I3Y,v3Y){return I3Y<v3Y;}
,'u5h':function(X5h,H5h){return X5h>H5h;}
,'K8H':function(s8H,n8H){return s8H<=n8H;}
,'g2Q':function(c2Q,z1Q){return c2Q==z1Q;}
,'j4Q':function(I4Q,v4Q){return I4Q<v4Q;}
,'B3Z':function(S3Z,T3Z){return S3Z>T3Z;}
,'T3s':function(y3s,l3s){return y3s*l3s;}
,'Z2h':function(L2h,Y2h){return L2h!==Y2h;}
,'r9W':function(e9W,i9W,k9W,W9W){return e9W-i9W+k9W-W9W;}
,'q1u':function(E1u,p1u){return E1u==p1u;}
,'s8n':function(n8n,a8n){return n8n-a8n;}
,'H5D':function(Q5D,q5D){return Q5D-q5D;}
,'v0u':function(b0u,P0u){return b0u>P0u;}
,'q6s':function(E6s,p6s){return E6s==p6s;}
,'o5h':function(V5h,g5h){return V5h>g5h;}
,'r9Q':function(e9Q,i9Q){return e9Q===i9Q;}
,'u5F':function(X5F,H5F){return X5F-H5F;}
,'j4h':function(I4h,v4h){return I4h/v4h;}
,'e7n':function(i7n,k7n){return i7n==k7n;}
,'N7W':function(K7W,s7W){return K7W*s7W;}
,'f7s':function(D7s,A7s){return D7s/A7s;}
,'H3':function(Q3,q3){return Q3==q3;}
,'d5n':function(O5n,m5n){return O5n*m5n;}
,'N2Z':function(K2Z,s2Z){return K2Z==s2Z;}
,'P1F':function(o1F,V1F){return o1F==V1F;}
,'P2W':function(o2W,V2W){return o2W<V2W;}
,'t9h':function(N9h,K9h){return N9h<K9h;}
,'Z4n':function(L4n,Y4n){return L4n-Y4n;}
,'D3s':function(A3s,Z3s){return A3s<Z3s;}
,'T0Y':function(y0Y,l0Y){return y0Y<l0Y;}
,'r1D':function(e1D,i1D){return e1D==i1D;}
,'i7H':function(k7H,W7H){return k7H/W7H;}
,'F2Y':function(w2Y,j2Y){return w2Y>=j2Y;}
,'A8F':function(Z8F,L8F){return Z8F!=L8F;}
,'b1':function(P1,o1){return P1-o1;}
,'A2W':function(Z2W,L2W){return Z2W*L2W;}
,'v5n':function(b5n,P5n){return b5n==P5n;}
,'X6':function(H6,Q6){return H6==Q6;}
,'l1s':function(R1s,G1s){return R1s<G1s;}
,'S0Z':function(T0Z,y0Z){return T0Z>=y0Z;}
,'L4W':function(Y4W,C4W){return Y4W-C4W;}
,'j8F':function(I8F,v8F){return I8F==v8F;}
,'r3Z':function(e3Z,i3Z){return e3Z==i3Z;}
,'u2H':function(X2H,H2H){return X2H<H2H;}
,'q6F':function(E6F,p6F){return E6F<p6F;}
,'n6H':function(a6H,J6H){return a6H>J6H;}
,'q1W':function(E1W,p1W,B1W,S1W){return E1W-p1W+B1W-S1W;}
,'c3F':function(z0D,h0D){return z0D==h0D;}
,'P9Y':function(o9Y,V9Y){return o9Y>=V9Y;}
,'q9h':function(E9h,p9h){return E9h==p9h;}
,'A5Z':function(Z5Z,L5Z){return Z5Z<L5Z;}
,'p2F':function(B2F,S2F){return B2F/S2F;}
,'Q6Z':function(q6Z,E6Z){return q6Z!==E6Z;}
,'E9Y':function(p9Y,B9Y){return p9Y!==B9Y;}
,'c3s':function(z0F,h0F){return z0F==h0F;}
,'V9n':function(g9n,c9n){return g9n>c9n;}
,'c3H':function(z0Q,h0Q){return z0Q*h0Q;}
,'e8Z':function(i8Z,k8Z){return i8Z==k8Z;}
,'x4H':function(M4H,r4H){return M4H==r4H;}
,'f1n':function(D1n,A1n){return D1n/A1n;}
,'z6h':function(h6h,x6h){return h6h/x6h;}
,'X9s':function(H9s,Q9s){return H9s>=Q9s;}
,'c0H':function(z4H,h4H){return z4H<=h4H;}
,'n1s':function(a1s,J1s){return a1s>J1s;}
,'C0Q':function(u0Q,X0Q){return u0Q===X0Q;}
,'z0Y':function(h0Y,x0Y){return h0Y|x0Y;}
,'a5s':function(J5s,f5s){return J5s<f5s;}
,'I7n':function(v7n,b7n){return v7n<b7n;}
,'f4W':function(D4W,A4W,Z4W){return D4W*A4W/Z4W;}
,'W0D':function(d0D,O0D){return d0D>O0D;}
,'c6Z':function(z2Z,h2Z){return z2Z>h2Z;}
,'R9W':function(G9W,F9W){return G9W&F9W;}
,'P0W':function(o0W,V0W){return o0W<V0W;}
,'a2F':function(J2F,f2F){return J2F*f2F;}
,'C1n':function(u1n,X1n){return u1n==X1n;}
,'r5Y':function(e5Y,i5Y,k5Y){return e5Y-i5Y-k5Y;}
,'b1u':function(P1u,o1u){return P1u-o1u;}
,'U5F':function(t5F,N5F){return t5F-N5F;}
,'X2W':function(H2W,Q2W){return H2W<Q2W;}
,'E7F':function(p7F,B7F){return p7F-B7F;}
,'K5F':function(s5F,n5F){return s5F-n5F;}
,'I2W':function(v2W,b2W){return v2W/b2W;}
,'Z5H':function(L5H,Y5H){return L5H<Y5H;}
,'U0H':function(t0H,N0H){return t0H/N0H;}
,'T6Q':function(y6Q,l6Q){return y6Q<l6Q;}
,'M0Y':function(r0Y,e0Y){return r0Y|e0Y;}
,'a6n':function(J6n,f6n){return J6n>=f6n;}
,'j9H':function(I9H,v9H){return I9H*v9H;}
,'g2W':function(c2W,z1W){return c2W<z1W;}
,'v8D':function(b8D,P8D){return b8D>=P8D;}
,'Z5':function(L5,Y5){return L5-Y5;}
,'E2n':function(p2n,B2n){return p2n-B2n;}
,'p2H':function(B2H,S2H){return B2H*S2H;}
,'v6h':function(b6h,P6h){return b6h/P6h;}
,'L6Q':function(Y6Q,C6Q){return Y6Q==C6Q;}
,'W8Z':function(d8Z,O8Z){return d8Z<O8Z;}
,'X9h':function(H9h,Q9h){return H9h<Q9h;}
,'y8s':function(l8s,R8s){return l8s<=R8s;}
,'j9u':function(I9u,v9u){return I9u==v9u;}
,'j4D':function(I4D,v4D){return I4D<v4D;}
,'J9h':function(f9h,D9h){return f9h>D9h;}
,'M6u':function(r6u,e6u){return r6u/e6u;}
,'R5F':function(G5F,F5F){return G5F===F5F;}
,'P7s':function(o7s,V7s){return o7s<=V7s;}
,'v9':function(b9,P9){return b9==P9;}
,'H0W':function(Q0W,q0W){return Q0W>q0W;}
,'H6W':function(Q6W,q6W){return Q6W>q6W;}
,'Y8':function(C8,u8){return C8/u8;}
,'r1':function(e1,i1){return e1==i1;}
,'f7Q':function(D7Q,A7Q){return D7Q-A7Q;}
,'f7n':function(D7n,A7n){return D7n===A7n;}
,'T0u':function(y0u,l0u){return y0u<=l0u;}
,'T5Y':function(y5Y,l5Y){return y5Y-l5Y;}
,'K3H':function(s3H,n3H){return s3H-n3H;}
,'b4n':function(P4n,o4n){return P4n-o4n;}
,'F1s':function(w1s,j1s){return w1s==j1s;}
,'h7':function(x7,M7){return x7-M7;}
,'o5u':function(V5u,g5u){return V5u===g5u;}
,'f2D':function(D2D,A2D){return D2D/A2D;}
,'j5Z':function(I5Z,v5Z){return I5Z/v5Z;}
,'Y1u':function(C1u,u1u){return C1u===u1u;}
,'g2D':function(c2D,z1D){return c2D>=z1D;}
,'V1h':function(g1h,c1h,z8h){return g1h-c1h-z8h;}
,'n4Y':function(a4Y,J4Y){return a4Y!==J4Y;}
,'x8Y':function(M8Y,r8Y){return M8Y===r8Y;}
,'E1n':function(p1n,B1n){return p1n===B1n;}
,'c0':function(z4,h4){return z4-h4;}
,'m5D':function(U5D,t5D){return U5D!=t5D;}
,'S5H':function(T5H,y5H){return T5H<=y5H;}
,'G0h':function(F0h,w0h){return F0h*w0h;}
,'T6D':function(y6D,l6D){return y6D==l6D;}
,'p4u':function(B4u,S4u,T4u){return B4u-S4u+T4u;}
,'c3Q':function(z0n,h0n){return z0n>h0n;}
,'j1Q':function(I1Q,v1Q){return I1Q!==v1Q;}
,'E6Y':function(p6Y,B6Y){return p6Y/B6Y;}
,'U1Z':function(t1Z,N1Z){return t1Z-N1Z;}
,'L2H':function(Y2H,C2H){return Y2H<C2H;}
,'Y9Q':function(C9Q,u9Q){return C9Q-u9Q;}
,'J5W':function(f5W,D5W){return f5W-D5W;}
,'k8n':function(W8n,d8n){return W8n===d8n;}
,'t4Q':function(N4Q,K4Q){return N4Q<=K4Q;}
,'h9n':function(x9n,M9n){return x9n<M9n;}
,'i8H':function(k8H,W8H){return k8H/W8H;}
,'S2n':function(T2n,y2n){return T2n/y2n;}
,'m4s':function(U4s,t4s){return U4s==t4s;}
,'I7u':function(v7u,b7u){return v7u<b7u;}
,'j4u':function(I4u,v4u){return I4u-v4u;}
,'S6H':function(T6H,y6H){return T6H!=y6H;}
,'S7F':function(T7F,y7F){return T7F<y7F;}
,'D8D':function(A8D,Z8D){return A8D>Z8D;}
,'V8n':function(g8n,c8n){return g8n>c8n;}
,'E5H':function(p5H,B5H){return p5H<B5H;}
,'z3s':function(h3s,x3s){return h3s<x3s;}
,'N1n':function(K1n,s1n){return K1n>s1n;}
,'c1W':function(z8W,h8W){return z8W/h8W;}
,'H2Q':function(Q2Q,q2Q){return Q2Q<q2Q;}
,'W4F':function(d4F,O4F){return d4F-O4F;}
,'V9s':function(g9s,c9s){return g9s<=c9s;}
,'J4h':function(f4h,D4h){return f4h-D4h;}
,'u5Q':function(X5Q,H5Q){return X5Q!=H5Q;}
,'F2u':function(w2u,j2u){return w2u!=j2u;}
,'Z1n':function(L1n,Y1n){return L1n<Y1n;}
,'n1F':function(a1F,J1F){return a1F==J1F;}
,'l0W':function(R0W,G0W){return R0W==G0W;}
,'t8h':function(N8h,K8h){return N8h==K8h;}
,'C2u':function(u2u,X2u){return u2u==X2u;}
,'U3F':function(t3F,N3F){return t3F>=N3F;}
,'t3Z':function(N3Z,K3Z){return N3Z==K3Z;}
,'l0Q':function(R0Q,G0Q){return R0Q<=G0Q;}
,'Y9F':function(C9F,u9F){return C9F<u9F;}
,'X6F':function(H6F,Q6F){return H6F-Q6F;}
,'S1F':function(T1F,y1F){return T1F in y1F;}
,'h4W':function(x4W,M4W){return x4W>M4W;}
,'P6Y':function(o6Y,V6Y){return o6Y-V6Y;}
,'l1H':function(R1H,G1H){return R1H-G1H;}
,'z5':function(h5,x5){return h5*x5;}
,'R3Q':function(G3Q,F3Q){return G3Q==F3Q;}
,'S2u':function(T2u,y2u){return T2u==y2u;}
,'u0F':function(X0F,H0F){return X0F<H0F;}
,'n0W':function(a0W,J0W){return a0W-J0W;}
,'h5W':function(x5W,M5W){return x5W<M5W;}
,'H0Z':function(Q0Z,q0Z){return Q0Z!==q0Z;}
,'i8D':function(k8D,W8D){return k8D<W8D;}
,'q4D':function(E4D,p4D){return E4D>p4D;}
,'d0H':function(O0H,m0H){return O0H<=m0H;}
,'T2F':function(y2F,l2F){return y2F!=l2F;}
,'o0F':function(V0F,g0F){return V0F/g0F;}
,'d3s':function(O3s,m3s){return O3s==m3s;}
,'U3Q':function(t3Q,N3Q){return t3Q!=N3Q;}
,'E4s':function(p4s,B4s){return p4s<B4s;}
,'x1F':function(M1F,r1F){return M1F in r1F;}
,'p5s':function(B5s,S5s){return B5s===S5s;}
,'y4u':function(l4u,R4u){return l4u>R4u;}
,'m8Y':function(U8Y,t8Y){return U8Y-t8Y;}
,'n6W':function(a6W,J6W){return a6W==J6W;}
,'V8u':function(g8u,c8u){return g8u===c8u;}
,'v0n':function(b0n,P0n){return b0n*P0n;}
,'P1H':function(o1H,V1H){return o1H-V1H;}
,'Q3H':function(q3H,E3H){return q3H==E3H;}
,'D3u':function(A3u,Z3u){return A3u>Z3u;}
,'T3Q':function(y3Q,l3Q){return y3Q==l3Q;}
,'X8':function(H8,Q8){return H8*Q8;}
,'U8H':function(t8H,N8H){return t8H&N8H;}
,'P1n':function(o1n,V1n){return o1n==V1n;}
,'n0Z':function(a0Z,J0Z){return a0Z<J0Z;}
,'n7h':function(a7h,J7h){return a7h===J7h;}
,'S1Y':function(T1Y,y1Y){return T1Y===y1Y;}
,'u7Y':function(X7Y,H7Y){return X7Y>H7Y;}
,'N7n':function(K7n,s7n){return K7n==s7n;}
,'T5h':function(y5h,l5h){return y5h<l5h;}
,'U6n':function(t6n,N6n){return t6n/N6n;}
,'Q0u':function(q0u,E0u){return q0u-E0u;}
,'J8u':function(f8u,D8u){return f8u/D8u;}
,'h9Q':function(x9Q,M9Q){return x9Q<M9Q;}
,'w6D':function(j6D,I6D){return j6D/I6D;}
,'f6Y':function(D6Y,A6Y){return D6Y/A6Y;}
,'X8n':function(H8n,Q8n){return H8n-Q8n;}
,'H1s':function(Q1s,q1s){return Q1s===q1s;}
,'Q1Z':function(q1Z,E1Z){return q1Z-E1Z;}
,'N0F':function(K0F,s0F,n0F){return K0F*s0F/n0F;}
,'A6s':function(Z6s,L6s){return Z6s-L6s;}
,'f7u':function(D7u,A7u){return D7u-A7u;}
,'p0F':function(B0F,S0F){return B0F>S0F;}
,'I5':function(v5,b5){return v5===b5;}
,'G1D':function(F1D,w1D){return F1D>=w1D;}
,'a3F':function(J3F,f3F){return J3F<f3F;}
,'h5Y':function(x5Y,M5Y){return x5Y-M5Y;}
,'F2Q':function(w2Q,j2Q){return w2Q==j2Q;}
,'B8':function(S8,T8){return S8<T8;}
,'U7H':function(t7H,N7H){return t7H<N7H;}
,'y8u':function(l8u,R8u){return l8u===R8u;}
,'p4W':function(B4W,S4W){return B4W*S4W;}
,'A8u':function(Z8u,L8u){return Z8u<L8u;}
,'y1D':function(l1D,R1D){return l1D>R1D;}
,'l7h':function(R7h,G7h){return R7h>G7h;}
,'p6D':function(B6D,S6D){return B6D==S6D;}
,'I7h':function(v7h,b7h){return v7h-b7h;}
,'V2Z':function(g2Z,c2Z){return g2Z===c2Z;}
,'U9W':function(t9W,N9W){return t9W/N9W;}
,'m6Y':function(U6Y,t6Y){return U6Y-t6Y;}
,'f4s':function(D4s,A4s){return D4s<A4s;}
,'y3Z':function(l3Z,R3Z){return l3Z<R3Z;}
,'F7W':function(w7W,j7W){return w7W-j7W;}
,'u0n':function(X0n,H0n){return X0n-H0n;}
,'S6W':function(T6W,y6W){return T6W>y6W;}
,'d8H':function(O8H,m8H){return O8H<=m8H;}
,'G9h':function(F9h,w9h){return F9h/w9h;}
,'z5h':function(h5h,x5h){return h5h-x5h;}
,'W7n':function(d7n,O7n){return d7n*O7n;}
,'P2h':function(o2h,V2h){return o2h===V2h;}
,'t9n':function(N9n,K9n){return N9n-K9n;}
,'I7Q':function(v7Q,b7Q){return v7Q>=b7Q;}
,'t1Q':function(N1Q,K1Q){return N1Q==K1Q;}
,'k9u':function(W9u,d9u){return W9u>=d9u;}
,'P7u':function(o7u,V7u){return o7u in V7u;}
,'H1':function(Q1,q1){return Q1==q1;}
,'M5u':function(r5u,e5u){return r5u<e5u;}
,'d1H':function(O1H,m1H,U1H,t1H){return O1H-m1H+U1H+t1H;}
,'i0u':function(k0u,W0u){return k0u<W0u;}
,'O8':function(m8,U8){return m8<=U8;}
,'T4n':function(y4n,l4n){return y4n==l4n;}
,'U8D':function(t8D,N8D){return t8D<N8D;}
,'I4K':16,'O4D':function(m4D,U4D){return m4D>U4D;}
,'X9n':function(H9n,Q9n){return H9n/Q9n;}
,'i2F':function(k2F,W2F){return k2F===W2F;}
,'l4':function(R4,G4){return R4*G4;}
,'n3W':function(a3W,J3W){return a3W<J3W;}
,'b8':function(P8,o8){return P8*o8;}
,'v4W':function(b4W,P4W){return b4W<P4W;}
,'i0Y':function(k0Y,W0Y){return k0Y|W0Y;}
,'w1W':function(j1W,I1W){return j1W/I1W;}
,'u3s':function(X3s,H3s){return X3s>H3s;}
,'P8W':function(o8W,V8W){return o8W-V8W;}
,'d9':function(O9,m9){return O9/m9;}
,'y1h':function(l1h,R1h){return l1h%R1h;}
,'H5H':function(Q5H,q5H){return Q5H>q5H;}
,'C4n':function(u4n,X4n){return u4n-X4n;}
,'Q3n':function(q3n,E3n){return q3n==E3n;}
,'T6Z':function(y6Z,l6Z){return y6Z!==l6Z;}
,'m4n':function(U4n,t4n){return U4n!=t4n;}
,'g7n':function(c7n,z9n){return c7n-z9n;}
,'R0':function(G0,F0){return G0==F0;}
,'L3h':function(Y3h,C3h){return Y3h===C3h;}
,'V9h':function(g9h,c9h){return g9h<c9h;}
,'g4':function(c4,z6){return c4*z6;}
,'E2u':function(p2u,B2u){return p2u!=B2u;}
,'T4W':function(y4W,l4W){return y4W===l4W;}
,'b1h':function(P1h,o1h){return P1h*o1h;}
,'b4u':function(P4u,o4u){return P4u==o4u;}
,'W7W':function(d7W,O7W){return d7W<O7W;}
,'K0u':function(s0u,n0u){return s0u===n0u;}
,'I1F':function(v1F,b1F){return v1F==b1F;}
,'m9H':function(U9H,t9H){return U9H-t9H;}
,'X9u':function(H9u,Q9u){return H9u==Q9u;}
,'S1':function(T1,l1){return T1<l1;}
,'M3s':function(r3s,e3s){return r3s!==e3s;}
,'f5':function(D5,A5){return D5-A5;}
,'j8n':function(I8n,v8n){return I8n<v8n;}
,'S7n':function(T7n,y7n){return T7n==y7n;}
,'x0F':function(M0F,r0F){return M0F==r0F;}
,'l2D':function(R2D,G2D){return R2D/G2D;}
,'c0Y':function(z4Y,h4Y){return z4Y==h4Y;}
,'K5Q':function(s5Q,n5Q){return s5Q-n5Q;}
,'M8u':function(r8u,e8u){return r8u==e8u;}
,'S3':function(T3,y3){return T3==y3;}
,'w5Y':function(j5Y,I5Y){return j5Y-I5Y;}
,'a2s':function(J2s,f2s){return J2s===f2s;}
,'U3s':function(t3s,N3s){return t3s!==N3s;}
,'d0u':function(O0u,m0u){return O0u===m0u;}
,'J1D':function(f1D,D1D){return f1D==D1D;}
,'Y5W':function(C5W,u5W){return C5W-u5W;}
,'q2Z':function(E2Z,p2Z){return E2Z/p2Z;}
,'R6D':function(G6D,F6D){return G6D<F6D;}
,'L2F':function(Y2F,C2F){return Y2F==C2F;}
,'M5s':function(r5s,e5s){return r5s<e5s;}
,'g2Y':function(c2Y,z1Y){return c2Y<z1Y;}
,'v6Q':function(b6Q,P6Q){return b6Q!==P6Q;}
,'q9F':function(E9F,p9F){return E9F!=p9F;}
,'E8Y':function(p8Y,B8Y){return p8Y*B8Y;}
,'w0H':function(j0H,I0H){return j0H-I0H;}
,'v7Y':function(b7Y,P7Y){return b7Y*P7Y;}
,'z5F':function(h5F,x5F){return h5F*x5F;}
,'T7Y':function(y7Y,l7Y){return y7Y<l7Y;}
,'O9Q':function(m9Q,U9Q){return m9Q-U9Q;}
,'p9W':function(B9W,S9W){return B9W&S9W;}
,'W2Q':function(d2Q,O2Q){return d2Q<O2Q;}
,'n5H':function(a5H,J5H){return a5H-J5H;}
,'p5u':function(B5u,S5u){return B5u===S5u;}
,'G9F':function(F9F,w9F){return F9F==w9F;}
,'y4Q':function(l4Q,R4Q){return l4Q>R4Q;}
,'y4Z':function(l4Z,R4Z){return l4Z<R4Z;}
,'f4u':function(D4u,A4u){return D4u-A4u;}
,'K3F':function(s3F,n3F){return s3F-n3F;}
,'C6H':function(u6H,X6H){return u6H>X6H;}
,'n6Y':function(a6Y,J6Y){return a6Y-J6Y;}
,'c2s':function(z1s,h1s){return z1s>h1s;}
,'C4':function(u4,X4){return u4==X4;}
,'o2F':function(V2F,g2F){return V2F!==g2F;}
,'o1Z':function(V1Z,g1Z){return V1Z==g1Z;}
,'X8h':function(H8h,Q8h){return H8h===Q8h;}
,'Y1h':function(C1h,u1h){return C1h==u1h;}
,'R5n':function(G5n,F5n){return G5n>F5n;}
,'M7H':function(r7H,e7H){return r7H/e7H;}
,'G5Z':function(F5Z,w5Z){return F5Z<w5Z;}
,'F0Q':function(w0Q,j0Q){return w0Q*j0Q;}
,'h4D':function(x4D,M4D){return x4D==M4D;}
,'f7F':function(D7F,A7F){return D7F<A7F;}
,'N5H':function(K5H,s5H){return K5H>s5H;}
,'K6h':function(s6h,n6h){return s6h>=n6h;}
,'a7Z':function(J7Z,f7Z){return J7Z*f7Z;}
,'m0n':function(U0n,t0n){return U0n!=t0n;}
,'t2Y':function(N2Y,K2Y){return N2Y<=K2Y;}
,'c6n':function(z2n,h2n){return z2n/h2n;}
,'t4D':function(N4D,K4D){return N4D/K4D;}
,'w5h':function(j5h,I5h){return j5h<I5h;}
,'x7Y':function(M7Y,r7Y){return M7Y==r7Y;}
,'F2D':function(w2D,j2D){return w2D>=j2D;}
,'d3Q':function(O3Q,m3Q){return O3Q<m3Q;}
,'k3Y':function(W3Y,d3Y){return W3Y===d3Y;}
,'W7s':function(d7s,O7s){return d7s/O7s;}
,'r1W':function(e1W,i1W){return e1W-i1W;}
,'q4h':function(E4h,p4h){return E4h*p4h;}
,'E0':function(p0,B0){return p0==B0;}
,'T3h':function(y3h,l3h){return y3h==l3h;}
,'A8h':function(Z8h,L8h){return Z8h/L8h;}
,'I6Y':function(v6Y,b6Y){return v6Y/b6Y;}
,'F6H':function(w6H,j6H){return w6H>j6H;}
,'M5h':function(r5h,e5h){return r5h>e5h;}
,'Y4h':function(C4h,u4h){return C4h===u4h;}
,'a3n':function(J3n,f3n){return J3n==f3n;}
,'b9u':function(P9u,o9u){return P9u==o9u;}
,'s6':function(n6,a6){return n6-a6;}
,'G4u':function(F4u,w4u){return F4u>w4u;}
,'k9Q':function(W9Q,d9Q){return W9Q/d9Q;}
,'S7u':function(T7u,y7u){return T7u>y7u;}
,'I8Y':function(v8Y,b8Y){return v8Y-b8Y;}
,'n4W':function(a4W,J4W){return a4W<=J4W;}
,'a0F':function(J0F,f0F){return J0F*f0F;}
,'B8n':function(S8n,T8n){return S8n===T8n;}
,'k0h':function(W0h,d0h){return W0h==d0h;}
,'C7n':function(u7n,X7n){return u7n==X7n;}
,'r1u':function(e1u,i1u){return e1u===i1u;}
,'E1s':function(p1s,B1s){return p1s!=B1s;}
,'E0s':function(p0s,B0s){return p0s/B0s;}
,'N4s':function(K4s,s4s){return K4s==s4s;}
,'j6F':function(I6F,v6F){return I6F>=v6F;}
,'i5':function(k5,W5){return k5<W5;}
,'p6Q':function(B6Q,S6Q){return B6Q===S6Q;}
,'g7F':function(c7F,z9F){return c7F-z9F;}
,'O1D':function(m1D,U1D){return m1D<U1D;}
,'Z0D':function(L0D,Y0D){return L0D<Y0D;}
,'X8F':function(H8F,Q8F){return H8F-Q8F;}
,'t1h':function(N1h,K1h){return N1h===K1h;}
,'l7n':function(R7n,G7n){return R7n*G7n;}
,'X0h':function(H0h,Q0h){return H0h-Q0h;}
,'Y9n':function(C9n,u9n){return C9n-u9n;}
,'p8D':function(B8D,S8D){return B8D!=S8D;}
,'E0D':function(p0D,B0D){return p0D==B0D;}
,'H1F':function(Q1F,q1F){return Q1F in q1F;}
,'X9H':function(H9H,Q9H){return H9H/Q9H;}
,'X9Q':function(H9Q,Q9Q){return H9Q!==Q9Q;}
,'H7W':function(Q7W,q7W){return Q7W-q7W;}
,'A9h':function(Z9h,L9h){return Z9h<L9h;}
,'w2s':function(j2s,I2s){return j2s-I2s;}
,'A9s':function(Z9s,L9s){return Z9s<L9s;}
,'d2F':function(O2F,m2F){return O2F==m2F;}
,'P0Q':function(o0Q,V0Q){return o0Q/V0Q;}
,'b8Q':function(P8Q,o8Q){return P8Q<=o8Q;}
,'Q6Q':function(q6Q,E6Q){return q6Q<E6Q;}
,'m0Z':function(U0Z,t0Z){return U0Z>=t0Z;}
,'l6H':function(R6H,G6H){return R6H>G6H;}
,'k4h':function(W4h,d4h){return W4h!=d4h;}
,'q8u':function(E8u,p8u){return E8u===p8u;}
,'m4F':function(U4F,t4F){return U4F<t4F;}
,'f7W':function(D7W,A7W){return D7W-A7W;}
,'s5W':function(n5W,a5W){return n5W-a5W;}
,'o6n':function(V6n,g6n){return V6n>=g6n;}
,'T8H':function(y8H,l8H){return y8H*l8H;}
,'t0h':function(N0h,K0h){return N0h==K0h;}
,'X1W':function(H1W,Q1W){return H1W/Q1W;}
,'T9W':function(y9W,l9W){return y9W<=l9W;}
,'e1F':function(i1F,k1F){return i1F*k1F;}
,'h6s':function(x6s,M6s){return x6s>M6s;}
,'e9Z':function(i9Z,k9Z){return i9Z==k9Z;}
,'v2H':function(b2H,P2H){return b2H/P2H;}
,'o4W':function(V4W,g4W){return V4W>=g4W;}
,'G8h':function(F8h,w8h){return F8h==w8h;}
,'T6n':function(y6n,l6n){return y6n<l6n;}
,'y9H':function(l9H,R9H){return l9H<R9H;}
,'l2Y':function(R2Y,G2Y){return R2Y===G2Y;}
,'h8n':function(x8n,M8n){return x8n-M8n;}
,'o7H':function(V7H,g7H){return V7H>g7H;}
,'Z4u':function(L4u,Y4u,C4u){return L4u-Y4u+C4u;}
,'g0W':function(c0W,z4W){return c0W==z4W;}
,'f9Z':function(D9Z,A9Z){return D9Z<A9Z;}
,'f5Y':function(D5Y,A5Y,Z5Y){return D5Y-A5Y+Z5Y;}
,'q4Y':function(E4Y,p4Y){return E4Y!==p4Y;}
,'l2h':function(R2h,G2h){return R2h<G2h;}
,'D5n':function(A5n,Z5n){return A5n!==Z5n;}
,'S7Q':function(T7Q,y7Q){return T7Q/y7Q;}
,'H4n':function(Q4n,q4n,E4n){return Q4n-q4n+E4n;}
,'E2Y':function(p2Y,B2Y){return p2Y<B2Y;}
,'v2':function(b2,P2){return b2<P2;}
,'I4s':function(v4s,b4s){return v4s<b4s;}
,'k6':function(W6,d6){return W6<=d6;}
,'M0u':function(r0u,e0u){return r0u===e0u;}
,'s3Y':function(n3Y,a3Y){return n3Y===a3Y;}
,'k4W':function(W4W,d4W){return W4W===d4W;}
,'D3h':function(A3h,Z3h){return A3h===Z3h;}
,'K7H':function(s7H,n7H){return s7H>n7H;}
,'U6Z':function(t6Z,N6Z){return t6Z>=N6Z;}
,'d2n':function(O2n,m2n){return O2n/m2n;}
,'w3s':function(j3s,I3s){return j3s-I3s;}
,'k8Q':function(W8Q,d8Q){return W8Q!==d8Q;}
,'g7Q':function(c7Q,z9Q){return c7Q<=z9Q;}
,'U5u':function(t5u,N5u){return t5u===N5u;}
,'M5F':function(r5F,e5F){return r5F/e5F;}
,'y4D':function(l4D,R4D){return l4D<=R4D;}
,'s4h':function(n4h,a4h){return n4h<=a4h;}
,'c3u':function(z0s,h0s){return z0s/h0s;}
,'n4n':function(a4n,J4n){return a4n-J4n;}
,'i2':function(W2,O2){return W2/O2;}
,'a3u':function(J3u,f3u){return J3u/f3u;}
,'N4u':function(K4u,s4u){return K4u>=s4u;}
,'w6Z':function(j6Z,I6Z){return j6Z-I6Z;}
,'m4H':function(U4H,t4H){return U4H/t4H;}
,'P1s':function(o1s,V1s){return o1s==V1s;}
,'e2h':function(i2h,k2h){return i2h==k2h;}
,'h8h':function(x8h,M8h){return x8h>M8h;}
,'G2Z':function(F2Z,w2Z){return F2Z!==w2Z;}
,'n4':function(a4,J4){return a4/J4;}
,'J7':function(f7,D7){return f7<D7;}
,'c0s':function(z4s,h4s){return z4s==h4s;}
,'u5Y':function(X5Y,H5Y){return X5Y==H5Y;}
,'J9u':function(f9u,D9u){return f9u!==D9u;}
,'C9Z':function(u9Z,X9Z){return u9Z>X9Z;}
,'B9Q':function(S9Q,T9Q){return S9Q==T9Q;}
,'M3H':function(r3H,e3H){return r3H!=e3H;}
,'n1Y':function(a1Y,J1Y){return a1Y-J1Y;}
,'x8W':function(M8W,r8W){return M8W==r8W;}
,'W7Q':function(d7Q,O7Q){return d7Q*O7Q;}
,'c3h':function(z0W,h0W){return z0W/h0W;}
,'y9s':function(l9s,R9s){return l9s<=R9s;}
,'E7W':function(p7W,B7W){return p7W>B7W;}
,'B2W':function(S2W,T2W){return S2W/T2W;}
,'A1Q':function(Z1Q,L1Q){return Z1Q<L1Q;}
,'R5h':function(G5h,F5h){return G5h===F5h;}
,'a5h':function(J5h,f5h){return J5h-f5h;}
,'i6u':function(k6u,W6u){return k6u/W6u;}
,'a3h':function(J3h,f3h){return J3h/f3h;}
,'p7Y':function(B7Y,S7Y){return B7Y<S7Y;}
,'L9':function(Y9,C9){return Y9<=C9;}
,'A9F':function(Z9F,L9F){return Z9F==L9F;}
,'h3Z':function(x3Z,M3Z){return x3Z<=M3Z;}
,'N1Y':function(K1Y,s1Y){return K1Y/s1Y;}
,'w1':function(j1,I1){return j1/I1;}
,'s4D':function(n4D,a4D){return n4D*a4D;}
,'J1W':function(f1W,D1W){return f1W<D1W;}
,'u0Y':function(X0Y,H0Y){return X0Y<H0Y;}
,'L5Q':function(Y5Q,C5Q){return Y5Q>C5Q;}
,'A3Z':function(Z3Z,L3Z){return Z3Z<L3Z;}
,'D7H':function(A7H,Z7H){return A7H*Z7H;}
,'i2s':function(k2s,W2s){return k2s<W2s;}
,'W1n':function(d1n,O1n){return d1n<O1n;}
,'t8n':function(N8n,K8n){return N8n==K8n;}
,'V8s':function(g8s,c8s){return g8s/c8s;}
,'q1h':function(E1h,p1h){return E1h-p1h;}
,'b1Q':function(P1Q,o1Q){return P1Q!=o1Q;}
,'B5Z':function(S5Z,T5Z){return S5Z<T5Z;}
,'o6h':function(V6h,g6h){return V6h-g6h;}
,'C7Q':function(u7Q,X7Q){return u7Q/X7Q;}
,'L7Y':function(Y7Y,C7Y){return Y7Y===C7Y;}
,'k8h':function(W8h,d8h){return W8h-d8h;}
,'t4W':function(N4W,K4W,s4W){return N4W*K4W/s4W;}
,'m7Q':function(U7Q,t7Q){return U7Q<t7Q;}
,'u6Q':function(X6Q,H6Q){return X6Q==H6Q;}
,'E3':function(p3,B3){return p3==B3;}
,'Q5F':function(q5F,E5F){return q5F-E5F;}
,'X5W':function(H5W,Q5W){return H5W/Q5W;}
,'r4D':function(e4D,i4D){return e4D==i4D;}
,'C2Q':function(u2Q,X2Q){return u2Q==X2Q;}
,'p8H':function(B8H,S8H){return B8H>S8H;}
,'n0Q':function(a0Q,J0Q){return a0Q<=J0Q;}
,'i3H':function(k3H,W3H){return k3H<=W3H;}
,'k4Z':function(W4Z,d4Z){return W4Z!==d4Z;}
,'W1':function(O1,U1){return O1>=U1;}
,'q4Z':function(E4Z,p4Z){return E4Z!=p4Z;}
,'M6D':function(r6D,e6D){return r6D/e6D;}
,'f2Z':function(D2Z,A2Z,Z2Z,L2Z){return D2Z-A2Z+Z2Z-L2Z;}
,'S4F':function(T4F,y4F){return T4F<y4F;}
,'S2D':function(T2D,y2D){return T2D>=y2D;}
,'W4u':function(d4u,O4u){return d4u==O4u;}
,'l0s':function(R0s,G0s){return R0s==G0s;}
,'e6W':function(i6W,k6W){return i6W-k6W;}
,'M3n':function(r3n,e3n){return r3n<e3n;}
,'n0D':function(a0D,J0D){return a0D==J0D;}
,'w6h':function(j6h,I6h){return j6h/I6h;}
,'s8h':function(n8h,a8h){return n8h===a8h;}
,'B1D':function(S1D,T1D){return S1D<=T1D;}
,'p6Z':function(B6Z,S6Z){return B6Z!==S6Z;}
,'I0W':function(v0W,b0W){return v0W<b0W;}
,'J0h':function(f0h,D0h){return f0h==D0h;}
,'x7u':function(M7u,r7u){return M7u<r7u;}
,'n8Z':function(a8Z,J8Z){return a8Z==J8Z;}
,'G4Q':function(F4Q,w4Q){return F4Q/w4Q;}
,'A2Y':function(Z2Y,L2Y,Y2Y){return Z2Y-L2Y-Y2Y;}
,'a8D':function(J8D,f8D){return J8D<f8D;}
,'x2u':function(M2u,r2u){return M2u/r2u;}
,'O9n':function(m9n,U9n){return m9n==U9n;}
,'A9D':2,'U6Q':function(t6Q,N6Q){return t6Q/N6Q;}
,'i5n':function(k5n,W5n){return k5n<W5n;}
,'e5H':function(i5H,k5H){return i5H-k5H;}
,'J9H':function(f9H,D9H){return f9H<=D9H;}
,'x9Z':function(M9Z,r9Z){return M9Z>=r9Z;}
,'Y8Q':function(C8Q,u8Q){return C8Q!=u8Q;}
,'Y6F':function(C6F,u6F){return C6F<u6F;}
,'H2D':function(Q2D,q2D){return Q2D>=q2D;}
,'v6D':function(b6D,P6D){return b6D<P6D;}
,'L0u':function(Y0u,C0u){return Y0u==C0u;}
,'k1h':function(W1h,d1h){return W1h/d1h;}
,'D6n':function(A6n,Z6n){return A6n<Z6n;}
,'o3u':function(V3u,g3u){return V3u==g3u;}
,'M8Q':function(r8Q,e8Q,i8Q){return r8Q-e8Q-i8Q;}
,'H8Y':function(Q8Y,q8Y){return Q8Y*q8Y;}
,'r1h':function(e1h,i1h){return e1h/i1h;}
,'r8s':function(e8s,i8s){return e8s*i8s;}
,'Q5Y':function(q5Y,E5Y){return q5Y==E5Y;}
,'m0F':function(U0F,t0F){return U0F*t0F;}
,'f4H':function(D4H,A4H){return D4H<=A4H;}
,'x5H':function(M5H,r5H){return M5H<r5H;}
,'V9H':function(g9H,c9H){return g9H==c9H;}
,'t8Q':function(N8Q,K8Q){return N8Q!=K8Q;}
,'y9u':function(l9u,R9u){return l9u==R9u;}
,'R6n':function(G6n,F6n){return G6n<F6n;}
,'x2Z':function(M2Z,r2Z){return M2Z-r2Z;}
,'h9F':function(x9F,M9F){return x9F-M9F;}
,'N6H':function(K6H,s6H){return K6H<s6H;}
,'N4F':function(K4F,s4F){return K4F<s4F;}
,'T8D':function(y8D,l8D){return y8D==l8D;}
,'L8H':function(Y8H,C8H){return Y8H&C8H;}
,'k1u':function(W1u,d1u){return W1u-d1u;}
,'z0u':function(h0u,x0u){return h0u>x0u;}
,'f4F':function(D4F,A4F){return D4F==A4F;}
,'l7W':function(R7W,G7W){return R7W<=G7W;}
,'R5Y':function(G5Y,F5Y){return G5Y>=F5Y;}
,'j3Z':function(I3Z,v3Z){return I3Z==v3Z;}
,'A9Q':function(Z9Q,L9Q){return Z9Q==L9Q;}
,'C6Y':function(u6Y,X6Y){return u6Y/X6Y;}
,'c2F':function(z1F,h1F){return z1F*h1F;}
,'V7':function(g7,c7){return g7==c7;}
,'j1D':function(I1D,v1D){return I1D<=v1D;}
,'u6Z':function(X6Z,H6Z){return X6Z==H6Z;}
,'m0s':function(U0s,t0s){return U0s>t0s;}
,'p1Z':function(B1Z,S1Z){return B1Z>=S1Z;}
,'F7n':function(w7n,j7n){return w7n*j7n;}
,'c5W':function(z7W,h7W){return z7W/h7W;}
,'Q5u':function(q5u,E5u){return q5u<E5u;}
,'a2H':function(J2H,f2H){return J2H>f2H;}
,'I4F':function(v4F,b4F){return v4F-b4F;}
,'W9H':function(d9H,O9H){return d9H<O9H;}
,'q8h':function(E8h,p8h){return E8h===p8h;}
,'F0W':function(w0W,j0W){return w0W<j0W;}
,'e0Q':function(i0Q,k0Q){return i0Q/k0Q;}
,'t3Y':function(N3Y,K3Y){return N3Y===K3Y;}
,'m2Q':function(U2Q,t2Q){return U2Q<t2Q;}
,'b3Y':function(P3Y,o3Y){return P3Y===o3Y;}
,'f4n':function(D4n,A4n){return D4n-A4n;}
,'v0':function(b0,P0){return b0>P0;}
,'C7u':function(u7u,X7u){return u7u-X7u;}
,'t6s':function(N6s,K6s){return N6s==K6s;}
,'o6u':function(V6u,g6u){return V6u*g6u;}
,'s9n':function(n9n,a9n){return n9n==a9n;}
,'y9n':function(l9n,R9n){return l9n<R9n;}
,'T3u':function(y3u,l3u){return y3u-l3u;}
,'M3Q':function(r3Q,e3Q){return r3Q!=e3Q;}
,'m1s':function(U1s,t1s){return U1s>t1s;}
,'Q3u':function(q3u,E3u){return q3u==E3u;}
,'d3h':function(O3h,m3h){return O3h*m3h;}
,'A5W':function(Z5W,L5W){return Z5W!=L5W;}
,'K6n':function(s6n,n6n){return s6n===n6n;}
,'K3u':function(s3u,n3u){return s3u-n3u;}
,'P6':function(o6,V6){return o6==V6;}
,'R2F':function(G2F,F2F){return G2F in F2F;}
,'o6D':function(V6D,g6D){return V6D===g6D;}
,'k8':function(W8,d8){return W8<d8;}
,'O9s':function(m9s,U9s){return m9s>U9s;}
,'u4W':function(X4W,H4W){return X4W<H4W;}
,'c4W':function(z6W,h6W){return z6W/h6W;}
,'q9n':function(E9n,p9n){return E9n===p9n;}
,'H6Y':function(Q6Y,q6Y){return Q6Y<q6Y;}
,'O4h':function(m4h,U4h){return m4h/U4h;}
,'l7Q':function(R7Q,G7Q){return R7Q-G7Q;}
,'o3F':function(V3F,g3F){return V3F<g3F;}
,'W9Z':function(d9Z,O9Z){return d9Z==O9Z;}
,'K5n':function(s5n,n5n){return s5n*n5n;}
,'Q8H':function(q8H,E8H){return q8H<E8H;}
,'S0':function(T0,l0){return T0<l0;}
,'d5h':function(O5h,m5h){return O5h>m5h;}
,'x2Q':function(M2Q,r2Q){return M2Q===r2Q;}
,'i5h':function(k5h,W5h){return k5h==W5h;}
,'y6F':function(l6F,R6F){return l6F-R6F;}
,'w0F':function(j0F,I0F){return j0F-I0F;}
,'v5F':function(b5F,P5F){return b5F>P5F;}
,'I8W':function(v8W,b8W){return v8W*b8W;}
,'Z7W':function(L7W,Y7W){return L7W<Y7W;}
,'z3Q':function(h3Q,x3Q){return h3Q!=x3Q;}
,'n0':function(a0,J0){return a0==J0;}
,'D5h':function(A5h,Z5h){return A5h*Z5h;}
,'w3Q':function(j3Q,I3Q){return j3Q>I3Q;}
,'m2D':function(U2D,t2D){return U2D<t2D;}
,'n2D':function(a2D,J2D){return a2D>=J2D;}
,'H0D':function(Q0D,q0D){return Q0D>=q0D;}
,'R1Z':function(G1Z,F1Z){return G1Z-F1Z;}
,'Z6W':function(L6W,Y6W){return L6W===Y6W;}
,'Y2Z':function(C2Z,u2Z){return C2Z<u2Z;}
,'V3Z':function(g3Z,c3Z){return g3Z|c3Z;}
,'Q0H':function(q0H,E0H){return q0H*E0H;}
,'n0n':function(a0n,J0n){return a0n!=J0n;}
,'v9W':function(b9W,P9W){return b9W&P9W;}
,'r5Z':function(e5Z,i5Z){return e5Z>=i5Z;}
,'m7s':function(U7s,t7s){return U7s<t7s;}
,'i3F':function(k3F,W3F){return k3F<W3F;}
,'P1Y':function(o1Y,V1Y){return o1Y*V1Y;}
,'N9H':function(K9H,s9H,n9H,a9H){return K9H-s9H+n9H-a9H;}
,'c6h':function(z2h,h2h){return z2h-h2h;}
,'i5Q':function(k5Q,W5Q){return k5Q<=W5Q;}
,'F7F':function(w7F,j7F){return w7F-j7F;}
,'C5':function(u5,X5){return u5===X5;}
,'Z1s':function(L1s,Y1s){return L1s==Y1s;}
,'C2Y':function(u2Y,X2Y){return u2Y<X2Y;}
,'n4s':function(a4s,J4s){return a4s==J4s;}
,'Z7h':function(L7h,Y7h){return L7h!==Y7h;}
,'z6D':function(h6D,x6D){return h6D===x6D;}
,'A1W':function(Z1W,L1W){return Z1W>=L1W;}
,'h5Z':function(x5Z,M5Z){return x5Z-M5Z;}
,'Q7Z':function(q7Z,E7Z){return q7Z==E7Z;}
,'B6':function(S6,T6){return S6-T6;}
,'G9s':function(F9s,w9s){return F9s>=w9s;}
,'j9n':function(I9n,v9n){return I9n>v9n;}
,'S8Z':function(T8Z,y8Z){return T8Z!=y8Z;}
,'f3W':function(D3W,A3W){return D3W-A3W;}
,'O0h':function(m0h,U0h){return m0h==U0h;}
,'q3Y':function(E3Y,p3Y){return E3Y<p3Y;}
,'K6D':function(s6D,n6D){return s6D===n6D;}
,'G8s':function(F8s,w8s){return F8s==w8s;}
,'m5Y':function(U5Y,t5Y){return U5Y-t5Y;}
,'S4s':function(T4s,y4s){return T4s===y4s;}
,'D0Y':function(A0Y,Z0Y){return A0Y==Z0Y;}
,'u4u':function(X4u,H4u){return X4u<H4u;}
,'N0Q':function(K0Q,s0Q){return K0Q===s0Q;}
,'x7W':function(M7W,r7W){return M7W!==r7W;}
,'C8W':function(u8W,X8W){return u8W>=X8W;}
,'q2':function(E2,p2){return E2-p2;}
,'d9W':function(O9W,m9W){return O9W<=m9W;}
,'l3W':function(R3W,G3W){return R3W/G3W;}
,'g0D':function(c0D,z4D){return c0D==z4D;}
,'O8s':function(m8s,U8s){return m8s<U8s;}
,'R5Q':function(G5Q,F5Q){return G5Q==F5Q;}
,'O6F':function(m6F,U6F){return m6F==U6F;}
,'u6n':function(X6n,H6n){return X6n/H6n;}
,'Y8u':function(C8u,u8u){return C8u/u8u;}
,'F5D':(function(){var k7D={}
,v5D=function(b5D,P5D){var o5D=P5D&((0xDA,48.0E1)>(0xFD,1.17E3)?12.58E2:0x17C>(53.1E1,72.)?(4.68E2,0xffff):(141,0x14B)>9.34E2?(4.64E2,30):(99.,0xE7));var V5D=P5D-o5D;return ((V5D*b5D|((133,101)<=4.17E2?(23.40E1,0):(0xA5,1.06E2)))+(o5D*b5D|((69.60E1,0x247)<(0x24E,0x3B)?(93.,9.58E2):0xF4<=(0x180,141.)?0x10:(0xB2,65.60E1)>117.?(0x1C4,0):(6.37E2,45.))))|((0x31,0x17D)<9.08E2?(6,0):(3.21E2,92.80E1));}
,w5D=function(g5D,c5D,z7D){if(k7D[z7D]!==undefined){return k7D[z7D];}
var h7D=(14.<(1.82E2,46)?(0xD7,0xcc9e2d51):(4.79E2,141)>=(66.2E1,0x1CA)?16:(54.1E1,50)>(0x1C5,0x12E)?16:(9.97E2,70.60E1)),x7D=(103.7E1>=(0xF6,0x1BC)?(33,0x1b873593):(0x7C,0x8D));var M7D=z7D;var r7D=c5D&~((0x20C,67.8E1)>=92.?(51,0x3):(9.48E2,86.));for(var e7D=((104.,0x257)<0xD6?90.:138.20E1>(0x100,77.2E1)?(42.6E1,0):(0x8,79.7E1)<=(5,58.40E1)?"V":(0x146,0x212));e7D<r7D;e7D+=(0x13B>(0x131,60.80E1)?0xDF:0x8A>(1.93E2,44)?(0x1A4,4):(6.98E2,13.08E2))){var i7D=(g5D.charCodeAt(e7D)&(10.89E2>=(0x214,128.0E1)?148.20E1:(90.4E1,145)>21?(32.,0xff):(0x10,3.66E2)<=(10.1E2,0x10)?0x1D4:(138.6E1,79.7E1)))|((g5D.charCodeAt(e7D+1)&0xff)<<(6.<(0x112,0x1E3)?(0x118,8):(4.4E1,0x11A)>98.7E1?(4.62E2,'D'):(0x1A5,96)))|((g5D.charCodeAt(e7D+2)&0xff)<<16)|((g5D.charCodeAt(e7D+3)&0xff)<<24);i7D=v5D(i7D,h7D);i7D=((i7D&((129,40)>(81.,132)?0x210:(118.,9.44E2)>=(0x160,0x15)?(9.60E1,0x1ffff):(0x164,12)))<<(8.99E2>(1.98E2,83)?(72.60E1,15):(0x20D,68.)))|(i7D>>>17);i7D=v5D(i7D,x7D);M7D^=i7D;M7D=((M7D&0x7ffff)<<(0x2C<=(0x152,128.0E1)?(135,13):(0x11D,79)))|(M7D>>>((68,8.)<=12.73E2?(48.,19):(62.,0x135)));M7D=(M7D*5+0xe6546b64)|0;}
i7D=0;switch(c5D%4){case 3:i7D=(g5D.charCodeAt(r7D+2)&0xff)<<16;case 2:i7D|=(g5D.charCodeAt(r7D+1)&((135.3E1,114.)<1.045E3?(1.029E3,0xff):(0x19B,142.70E1)))<<8;case 1:i7D|=(g5D.charCodeAt(r7D)&0xff);i7D=v5D(i7D,h7D);i7D=((i7D&((0x1A7,0x1C3)<(1.247E3,0x20B)?(0xFD,0x1ffff):(0x1A4,0x6F)))<<15)|(i7D>>>((0x126,0x257)>0x51?(0x19D,17):(0x189,0xB1)));i7D=v5D(i7D,x7D);M7D^=i7D;}
M7D^=c5D;M7D^=M7D>>>16;M7D=v5D(M7D,0x85ebca6b);M7D^=M7D>>>(41.0E1>=(4.3E2,3.760E2)?(9.3E1,13):(0x46,0x7));M7D=v5D(M7D,(0x6A<(7.,120.)?(1.478E3,0xc2b2ae35):(0x4E,5.2E2)));M7D^=M7D>>>16;k7D[z7D]=M7D;return M7D;}
;return {v5D:v5D,w5D:w5D}
;}
)(),'R0u':function(G0u,F0u){return G0u<F0u;}
,'e9H':function(i9H,k9H){return i9H>k9H;}
,'m2h':function(U2h,t2h){return U2h<t2h;}
,'Z3W':function(L3W,Y3W){return L3W>Y3W;}
,'d3H':function(O3H,m3H){return O3H>m3H;}
,'n8Y':function(a8Y,J8Y){return a8Y/J8Y;}
,'f2h':function(D2h,A2h){return D2h===A2h;}
,'X4Q':function(H4Q,Q4Q){return H4Q/Q4Q;}
,'B9h':function(S9h,T9h){return S9h==T9h;}
,'g7u':function(c7u,z9u){return c7u in z9u;}
,'S9D':8,'u7H':function(X7H,H7H){return X7H<H7H;}
,'D3F':function(A3F,Z3F){return A3F!==Z3F;}
,'Q9D':4,'p5F':function(B5F,S5F){return B5F>S5F;}
,'g9Z':function(c9Z,z3Z){return c9Z<z3Z;}
,'W8Y':function(d8Y,O8Y){return d8Y>O8Y;}
,'a5u':function(J5u,f5u){return J5u<f5u;}
,'W1s':function(d1s,O1s){return d1s<O1s;}
,'u6h':function(X6h,H6h){return X6h/H6h;}
,'y1Q':function(l1Q,R1Q){return l1Q-R1Q;}
,'W8W':function(d8W,O8W){return d8W>=O8W;}
,'I1Y':function(v1Y,b1Y){return v1Y===b1Y;}
,'f1s':function(D1s,A1s){return D1s==A1s;}
,'v6n':function(b6n,P6n){return b6n<P6n;}
,'Z7n':function(L7n,Y7n){return L7n<Y7n;}
,'h6F':function(x6F,M6F){return x6F/M6F;}
,'t1D':function(N1D,K1D){return N1D===K1D;}
,'B8u':function(S8u,T8u){return S8u<T8u;}
,'d3u':function(O3u,m3u){return O3u==m3u;}
,'h6':function(x6,M6){return x6/M6;}
,'F6W':function(w6W,j6W){return w6W>j6W;}
,'j2Z':function(I2Z,v2Z){return I2Z/v2Z;}
,'q4H':function(E4H,p4H){return E4H<=p4H;}
,'V4n':function(g4n,c4n){return g4n/c4n;}
,'U6h':function(t6h,N6h){return t6h<N6h;}
,'m4Y':function(U4Y,t4Y){return U4Y==t4Y;}
,'H7s':function(Q7s,q7s){return Q7s-q7s;}
,'P7Q':function(o7Q,V7Q){return o7Q-V7Q;}
,'K0Y':function(s0Y,n0Y){return s0Y==n0Y;}
,'h0h':function(x0h,M0h){return x0h==M0h;}
,'j4Z':function(I4Z,v4Z){return I4Z<v4Z;}
,'L4Y':function(Y4Y,C4Y,u4Y){return Y4Y-C4Y+u4Y;}
,'L5h':function(Y5h,C5h){return Y5h-C5h;}
,'z5s':function(h5s,x5s){return h5s-x5s;}
,'g7W':function(c7W,z9W){return c7W!=z9W;}
,'J9F':function(f9F,D9F){return f9F<D9F;}
,'X3Y':function(H3Y,Q3Y){return H3Y*Q3Y;}
,'L0F':function(Y0F,C0F){return Y0F>C0F;}
,'U6u':function(t6u,N6u){return t6u==N6u;}
,'d1Z':function(O1Z,m1Z){return O1Z/m1Z;}
,'L5n':function(Y5n,C5n){return Y5n!==C5n;}
,'g7h':function(c7h,z9h){return c7h!==z9h;}
,'z2F':function(h2F,x2F){return h2F<=x2F;}
,'D0u':function(A0u,Z0u){return A0u<Z0u;}
,'U5s':function(t5s,N5s){return t5s>N5s;}
,'u1Z':function(X1Z,H1Z){return X1Z!==H1Z;}
,'J1h':function(f1h,D1h){return f1h===D1h;}
,'L7Z':function(Y7Z,C7Z){return Y7Z==C7Z;}
,'J2Y':function(f2Y,D2Y){return f2Y>D2Y;}
,'H1Y':function(Q1Y,q1Y){return Q1Y-q1Y;}
,'w5u':function(j5u,I5u){return j5u==I5u;}
,'W6W':function(d6W,O6W){return d6W<O6W;}
,'i2n':function(k2n,W2n){return k2n==W2n;}
,'R3F':function(G3F,F3F){return G3F>F3F;}
,'Z5D':function(L5D,Y5D){return L5D!=Y5D;}
,'l0D':function(R0D,G0D){return R0D==G0D;}
,'W2h':function(d2h,O2h){return d2h!==O2h;}
,'D6D':function(A6D,Z6D){return A6D===Z6D;}
,'C1H':function(u1H,X1H){return u1H==X1H;}
,'u7Z':function(X7Z,H7Z){return X7Z<H7Z;}
,'O1u':function(m1u,U1u){return m1u===U1u;}
,'s1h':function(n1h,a1h){return n1h===a1h;}
,'r8F':function(e8F,i8F){return e8F==i8F;}
,'J8n':function(f8n,D8n){return f8n==D8n;}
,'N8Y':function(K8Y,s8Y){return K8Y<s8Y;}
,'N5D':function(K5D,s5D){return K5D<s5D;}
,'X3Z':function(H3Z,Q3Z){return H3Z==Q3Z;}
,'v5h':function(b5h,P5h){return b5h*P5h;}
,'f8W':function(D8W,A8W){return D8W<=A8W;}
,'u3h':function(X3h,H3h){return X3h-H3h;}
,'o6Z':function(V6Z,g6Z){return V6Z*g6Z;}
,'O4Z':function(m4Z,U4Z){return m4Z-U4Z;}
,'Z0W':function(L0W,Y0W){return L0W*Y0W;}
,'U5h':function(t5h,N5h){return t5h>=N5h;}
,'i6h':function(k6h,W6h){return k6h/W6h;}
,'q9s':function(E9s,p9s){return E9s<=p9s;}
,'d6Z':function(O6Z,m6Z){return O6Z-m6Z;}
,'e3W':function(i3W,k3W){return i3W*k3W;}
,'h4Z':function(x4Z,M4Z){return x4Z==M4Z;}
,'e9Y':function(i9Y,k9Y){return i9Y/k9Y;}
,'g1F':function(c1F,z8F){return c1F==z8F;}
,'A9n':function(Z9n,L9n){return Z9n==L9n;}
,'l4F':function(R4F,G4F){return R4F==G4F;}
,'E3W':function(p3W,B3W){return p3W==B3W;}
,'Q3Q':function(q3Q,E3Q){return q3Q<E3Q;}
,'G4H':function(F4H,w4H){return F4H<w4H;}
,'Y4Q':function(C4Q,u4Q){return C4Q*u4Q;}
,'T2s':function(y2s,l2s){return y2s==l2s;}
,'c5Q':function(z7Q,h7Q){return z7Q/h7Q;}
,'v5W':function(b5W,P5W){return b5W/P5W;}
,'f7h':function(D7h,A7h){return D7h!==A7h;}
,'w3u':function(j3u,I3u){return j3u==I3u;}
,'E1F':function(p1F,B1F){return p1F>B1F;}
,'v1W':function(b1W,P1W){return b1W/P1W;}
,'G7':function(F7,w7){return F7<w7;}
,'N1H':function(K1H,s1H,n1H,a1H){return K1H-s1H+n1H+a1H;}
,'l2u':function(R2u,G2u){return R2u!=G2u;}
,'F5H':function(w5H,j5H){return w5H/j5H;}
,'S0D':function(T0D,y0D){return T0D==y0D;}
,'a6D':function(J6D,f6D){return J6D/f6D;}
,'F9Z':function(w9Z,j9Z){return w9Z<j9Z;}
,'i3n':function(k3n,W3n){return k3n*W3n;}
,'O2W':function(m2W,U2W){return m2W==U2W;}
,'h9h':function(x9h,M9h){return x9h>=M9h;}
,'C2h':function(u2h,X2h){return u2h==X2h;}
,'I0Q':function(v0Q,b0Q){return v0Q/b0Q;}
,'y8Q':function(l8Q,R8Q){return l8Q>=R8Q;}
,'F8Z':function(w8Z,j8Z){return w8Z<=j8Z;}
,'d7Z':function(O7Z,m7Z){return O7Z*m7Z;}
,'p3F':function(B3F,S3F){return B3F==S3F;}
,'y4Y':function(l4Y,R4Y){return l4Y!==R4Y;}
,'I9Y':function(v9Y,b9Y){return v9Y-b9Y;}
,'p9':function(B9,S9){return B9==S9;}
,'f6H':function(D6H,A6H){return D6H*A6H;}
,'g1Y':function(c1Y,z8Y,h8Y){return c1Y-z8Y+h8Y;}
,'B1u':function(S1u,T1u){return S1u<T1u;}
,'v0H':function(b0H,P0H){return b0H>P0H;}
,'q8':function(E8,p8){return E8*p8;}
,'Y8s':function(C8s,u8s){return C8s==u8s;}
,'B2Z':function(S2Z,T2Z){return S2Z/T2Z;}
,'A6':function(Z6,L6){return Z6<=L6;}
,'Z4H':function(L4H,Y4H){return L4H>=Y4H;}
,'f5H':function(D5H,A5H){return D5H>A5H;}
,'D3H':function(A3H,Z3H){return A3H==Z3H;}
,'C9D':0,'X6s':function(H6s,Q6s){return H6s/Q6s;}
,'n8W':function(a8W,J8W){return a8W&J8W;}
,'Y3Z':function(C3Z,u3Z){return C3Z==u3Z;}
,'n7F':function(a7F,J7F){return a7F>J7F;}
,'x7s':function(M7s,r7s){return M7s-r7s;}
,'X9F':function(H9F,Q9F){return H9F!=Q9F;}
,'W0F':function(d0F,O0F){return d0F<O0F;}
,'p0Y':function(B0Y,S0Y){return B0Y>S0Y;}
,'r9u':function(e9u,i9u){return e9u-i9u;}
,'t8F':function(N8F,K8F){return N8F===K8F;}
,'b9F':function(P9F,o9F){return P9F==o9F;}
,'u9':function(X9,H9){return X9*H9;}
,'K7Z':function(s7Z,n7Z){return s7Z!==n7Z;}
,'d8D':function(O8D,m8D){return O8D>m8D;}
,'b9s':function(P9s,o9s){return P9s>=o9s;}
,'I7s':function(v7s,b7s){return v7s-b7s;}
,'C1Y':function(u1Y,X1Y){return u1Y==X1Y;}
,'t5Z':function(N5Z,K5Z){return N5Z>K5Z;}
,'c5Y':function(z7Y,h7Y){return z7Y===h7Y;}
,'J4Q':function(f4Q,D4Q){return f4Q-D4Q;}
,'n4u':function(a4u,J4u){return a4u<=J4u;}
,'d5F':function(O5F,m5F){return O5F-m5F;}
,'z6n':function(h6n,x6n){return h6n>x6n;}
,'b8F':function(P8F,o8F){return P8F<=o8F;}
,'g6Y':function(c6Y,z2Y){return c6Y>=z2Y;}
,'k6F':function(W6F,d6F){return W6F-d6F;}
,'E6W':function(p6W,B6W){return p6W-B6W;}
,'n1':function(a1,J1){return a1<J1;}
,'j1u':function(I1u,v1u){return I1u==v1u;}
,'Z4s':function(L4s,Y4s){return L4s===Y4s;}
,'o2n':function(V2n,g2n){return V2n*g2n;}
,'I2D':function(v2D,b2D){return v2D>=b2D;}
,'f2Q':function(D2Q,A2Q){return D2Q==A2Q;}
,'z5Q':function(h5Q,x5Q){return h5Q<=x5Q;}
,'v7H':function(b7H,P7H){return b7H-P7H;}
,'o2s':function(V2s,g2s){return V2s<g2s;}
,'P0D':function(o0D,V0D){return o0D==V0D;}
,'R1W':function(G1W,F1W){return G1W/F1W;}
,'l5D':function(R5D,G5D){return R5D===G5D;}
,'R3n':function(G3n,F3n){return G3n*F3n;}
,'I6W':function(v6W,b6W){return v6W===b6W;}
,'Q0F':function(q0F,E0F){return q0F>E0F;}
,'o0n':function(V0n,g0n){return V0n>g0n;}
,'w5W':function(j5W,I5W){return j5W/I5W;}
,'Q6u':function(q6u,E6u){return q6u/E6u;}
,'I6':function(v6,b6){return v6<=b6;}
,'v3H':function(b3H,P3H){return b3H!==P3H;}
,'E0Z':function(p0Z,B0Z){return p0Z>=B0Z;}
,'p2s':function(B2s,S2s){return B2s==S2s;}
,'G1u':function(F1u,w1u){return F1u-w1u;}
,'t8s':function(N8s,K8s){return N8s==K8s;}
,'k4Q':function(W4Q,d4Q){return W4Q>d4Q;}
,'q0h':function(E0h,p0h){return E0h/p0h;}
,'m5H':function(U5H,t5H){return U5H<t5H;}
,'D5u':function(A5u,Z5u){return A5u===Z5u;}
,'Z9Y':function(L9Y,Y9Y){return L9Y<Y9Y;}
,'E5D':function(p5D,B5D){return p5D>=B5D;}
,'H7u':function(Q7u,q7u){return Q7u<q7u;}
,'b8h':function(P8h,o8h){return P8h*o8h;}
,'B6F':function(S6F,T6F){return S6F>T6F;}
,'z7Z':function(h7Z,x7Z){return h7Z*x7Z;}
,'t4h':function(N4h,K4h){return N4h/K4h;}
,'q3Z':function(E3Z,p3Z){return E3Z==p3Z;}
,'F6Y':function(w6Y,j6Y){return w6Y<j6Y;}
,'r1Q':function(e1Q,i1Q){return e1Q>i1Q;}
,'u3u':function(X3u,H3u){return X3u<H3u;}
,'m1F':function(U1F,t1F){return U1F*t1F;}
,'N1F':function(K1F,s1F){return K1F>s1F;}
,'C5D':function(u5D,X5D){return u5D<X5D;}
,'Y9H':function(C9H,u9H){return C9H/u9H;}
,'z6Z':function(h6Z,x6Z){return h6Z-x6Z;}
,'X1u':function(H1u,Q1u){return H1u===Q1u;}
,'s8Q':function(n8Q,a8Q){return n8Q<a8Q;}
,'T9':function(y9,l9){return y9>l9;}
,'l8Y':function(R8Y,G8Y){return R8Y>G8Y;}
,'j8Q':function(I8Q,v8Q){return I8Q>=v8Q;}
,'k4D':function(W4D,d4D){return W4D!==d4D;}
,'T3H':function(y3H,l3H){return y3H<=l3H;}
,'p0H':function(B0H,S0H){return B0H-S0H;}
,'L3F':function(Y3F,C3F){return Y3F!==C3F;}
,'F2h':function(w2h,j2h){return w2h>=j2h;}
,'v3u':function(b3u,P3u){return b3u==P3u;}
,'z5u':function(h5u,x5u){return h5u!==x5u;}
,'S5':function(T5,y5){return T5/y5;}
,'H8Z':function(Q8Z,q8Z){return Q8Z!=q8Z;}
,'R6Q':function(G6Q,F6Q){return G6Q===F6Q;}
,'q8F':function(E8F,p8F){return E8F<p8F;}
,'a3Q':function(J3Q,f3Q){return J3Q<f3Q;}
,'v7Z':function(b7Z,P7Z){return b7Z===P7Z;}
,'N7Y':function(K7Y,s7Y){return K7Y<s7Y;}
,'q4Q':function(E4Q,p4Q){return E4Q<p4Q;}
,'R3s':function(G3s,F3s){return G3s-F3s;}
,'B7':function(S7,T7){return S7-T7;}
,'Y7':function(C7,u7){return C7>u7;}
,'F0Z':function(w0Z,j0Z){return w0Z<j0Z;}
,'J1u':function(f1u,D1u){return f1u-D1u;}
,'M5':function(r5,e5){return r5/e5;}
,'T0F':function(y0F,l0F){return y0F*l0F;}
,'C7h':function(u7h,X7h){return u7h<X7h;}
,'r7':function(e7,i7){return e7-i7;}
,'v0Y':function(b0Y,P0Y){return b0Y>P0Y;}
,'r6':function(e6,i6){return e6>i6;}
,'b9H':function(P9H,o9H){return P9H<=o9H;}
,'h1D':function(x1D,M1D){return x1D===M1D;}
,'Z2D':function(L2D,Y2D){return L2D>=Y2D;}
,'L6Z':function(Y6Z,C6Z){return Y6Z!==C6Z;}
,'l6W':function(R6W,G6W){return R6W-G6W;}
,'X4h':function(H4h,Q4h){return H4h*Q4h;}
,'F8Y':function(w8Y,j8Y){return w8Y>j8Y;}
,'B9F':function(S9F,T9F){return S9F!=T9F;}
,'I7F':function(v7F,b7F){return v7F-b7F;}
,'T5n':function(y5n,l5n){return y5n<l5n;}
,'p5Y':function(B5Y,S5Y){return B5Y>S5Y;}
,'Y8F':function(C8F,u8F){return C8F<u8F;}
,'c5n':function(z7n,h7n){return z7n==h7n;}
,'R6u':function(G6u,F6u){return G6u<=F6u;}
,'J8Q':function(f8Q,D8Q){return f8Q<=D8Q;}
,'x0s':function(M0s,r0s){return M0s*r0s;}
,'r4h':function(e4h,i4h){return e4h-i4h;}
,'B4h':function(S4h,T4h){return S4h*T4h;}
,'G3Y':function(F3Y,w3Y){return F3Y-w3Y;}
,'c5h':function(z7h,h7h){return z7h>h7h;}
,'Z3':function(L3,Y3){return L3==Y3;}
,'I3W':function(v3W,b3W){return v3W*b3W;}
,'W7F':function(d7F,O7F){return d7F==O7F;}
,'P8Y':function(o8Y,V8Y){return o8Y<V8Y;}
,'J4Z':function(f4Z,D4Z){return f4Z>D4Z;}
,'p4n':function(B4n,S4n){return B4n*S4n;}
,'p3Q':function(B3Q,S3Q){return B3Q>S3Q;}
,'c4Y':function(z6Y,h6Y){return z6Y<h6Y;}
,'N0Z':function(K0Z,s0Z){return K0Z>=s0Z;}
,'e4Y':function(i4Y,k4Y){return i4Y==k4Y;}
,'P5':function(o5,V5){return o5==V5;}
,'w3n':function(j3n,I3n){return j3n*I3n;}
,'g8W':function(c8W,z5W){return c8W<z5W;}
,'B9n':function(S9n,T9n){return S9n===T9n;}
,'c7H':function(z9H,h9H){return z9H<h9H;}
,'O8h':function(m8h,U8h){return m8h==U8h;}
,'j8h':function(I8h,v8h){return I8h<v8h;}
,'V1Q':function(g1Q,c1Q){return g1Q===c1Q;}
,'z9':function(h9,x9){return h9==x9;}
,'Y9u':function(C9u,u9u){return C9u-u9u;}
,'u0H':function(X0H,H0H){return X0H*H0H;}
,'h2':function(M2,e2){return M2-e2;}
,'M6Z':function(r6Z,e6Z){return r6Z!==e6Z;}
,'D3n':function(A3n,Z3n){return A3n===Z3n;}
,'t7':function(N7,K7){return N7>K7;}
,'C2D':function(u2D,X2D){return u2D/X2D;}
,'G6F':function(F6F,w6F){return F6F-w6F;}
,'Y8h':function(C8h,u8h){return C8h===u8h;}
,'q9H':function(E9H,p9H){return E9H/p9H;}
,'w1Z':function(j1Z,I1Z){return j1Z<=I1Z;}
,'J8':function(f8,D8){return f8*D8;}
,'F3':function(w3,j3){return w3==j3;}
,'o2':function(V2,g2){return V2==g2;}
,'z2s':function(h2s,x2s){return h2s-x2s;}
,'l8Z':function(R8Z,G8Z){return R8Z/G8Z;}
,'q7':function(E7,p7){return E7>p7;}
,'V4H':function(g4H,c4H){return g4H<=c4H;}
,'u5u':function(X5u,H5u){return X5u===H5u;}
,'W7u':function(d7u,O7u){return d7u-O7u;}
,'N7s':function(K7s,s7s){return K7s<s7s;}
,'g2u':function(c2u,z1u){return c2u===z1u;}
,'x5D':function(M5D,r5D){return M5D>=r5D;}
,'x2h':function(M2h,r2h){return M2h/r2h;}
,'E1H':function(p1H,B1H){return p1H/B1H;}
,'e5D':function(i5D,k5D){return i5D<=k5D;}
,'H7Q':function(Q7Q,q7Q){return Q7Q-q7Q;}
,'u6u':function(X6u,H6u){return X6u/H6u;}
,'L6u':function(Y6u,C6u){return Y6u==C6u;}
,'g6':function(c6,z2){return c6<z2;}
,'Z2u':function(L2u,Y2u){return L2u==Y2u;}
,'A1H':function(Z1H,L1H,Y1H){return Z1H-L1H+Y1H;}
,'L3n':function(Y3n,C3n){return Y3n===C3n;}
,'R6Z':function(G6Z,F6Z){return G6Z!==F6Z;}
,'R6h':function(G6h,F6h){return G6h!=F6h;}
,'e7h':function(i7h,k7h){return i7h-k7h;}
,'E2D':function(p2D,B2D){return p2D/B2D;}
,'m8W':function(U8W,t8W){return U8W&t8W;}
,'i7Z':function(k7Z,W7Z){return k7Z<W7Z;}
,'b9h':function(P9h,o9h){return P9h-o9h;}
,'k8F':function(W8F,d8F){return W8F==d8F;}
,'U5Q':function(t5Q,N5Q){return t5Q-N5Q;}
,'H1H':function(Q1H,q1H){return Q1H/q1H;}
,'A9H':function(Z9H,L9H){return Z9H/L9H;}
,'G4Y':function(F4Y,w4Y,j4Y){return F4Y-w4Y+j4Y;}
,'K9':function(s9,n9){return s9==n9;}
,'h9u':function(x9u,M9u){return x9u!==M9u;}
,'r9s':function(e9s,i9s){return e9s/i9s;}
,'W2D':function(d2D,O2D){return d2D<O2D;}
,'K2H':function(s2H,n2H){return s2H==n2H;}
,'s2Y':function(n2Y,a2Y){return n2Y<a2Y;}
,'b8u':function(P8u,o8u){return P8u===o8u;}
,'j4H':function(I4H,v4H){return I4H>v4H;}
,'J9n':function(f9n,D9n){return f9n-D9n;}
,'y9F':function(l9F,R9F){return l9F!=R9F;}
,'Q2s':function(q2s,E2s){return q2s==E2s;}
,'M8D':function(r8D,e8D){return r8D>e8D;}
,'B4Z':function(S4Z,T4Z){return S4Z<T4Z;}
,'i3Q':function(k3Q,W3Q){return k3Q<W3Q;}
,'N7h':function(K7h,s7h){return K7h<s7h;}
,'W0s':function(d0s,O0s){return d0s==O0s;}
,'x4F':function(M4F,r4F){return M4F<=r4F;}
,'K2F':function(s2F,n2F){return s2F!=n2F;}
,'L3s':function(Y3s,C3s){return Y3s>C3s;}
,'R2s':function(G2s,F2s){return G2s!=F2s;}
,'n7s':function(a7s,J7s){return a7s-J7s;}
,'i6n':function(k6n,W6n){return k6n<W6n;}
,'M6Q':function(r6Q,e6Q){return r6Q/e6Q;}
,'F7s':function(w7s,j7s){return w7s>=j7s;}
,'h4h':function(x4h,M4h){return x4h===M4h;}
,'a9W':function(J9W,f9W){return J9W/f9W;}
,'c0n':function(z4n,h4n){return z4n/h4n;}
,'s8s':function(n8s,a8s){return n8s==a8s;}
,'e2Z':function(i2Z,k2Z){return i2Z-k2Z;}
,'a3s':function(J3s,f3s){return J3s-f3s;}
,'n2u':function(a2u,J2u){return a2u/J2u;}
,'K6Z':function(s6Z,n6Z){return s6Z===n6Z;}
,'I4Y':function(v4Y,b4Y,P4Y){return v4Y-b4Y+P4Y;}
,'a6Z':function(J6Z,f6Z){return J6Z==f6Z;}
,'O9F':function(m9F,U9F){return m9F-U9F;}
,'H4s':function(Q4s,q4s){return Q4s===q4s;}
,'d6h':function(O6h,m6h){return O6h/m6h;}
,'x0Q':function(M0Q,r0Q){return M0Q==r0Q;}
,'M3u':function(r3u,e3u){return r3u==e3u;}
,'A1u':function(Z1u,L1u){return Z1u-L1u;}
,'f9D':3,'K3n':function(s3n,n3n){return s3n*n3n;}
,'G1h':function(F1h,w1h){return F1h<w1h;}
,'f0D':function(D0D,A0D){return D0D!==A0D;}
,'v3n':function(b3n,P3n){return b3n>P3n;}
,'V1':function(g1,z8){return g1/z8;}
,'N1s':function(K1s,s1s){return K1s<s1s;}
,'q2W':function(E2W,p2W){return E2W===p2W;}
,'C1':function(u1,X1){return u1===X1;}
,'h2H':function(x2H,M2H){return x2H<=M2H;}
,'z3u':function(h3u,x3u){return h3u==x3u;}
,'u8H':function(X8H,H8H){return X8H!=H8H;}
,'C9Y':function(u9Y,X9Y){return u9Y<X9Y;}
,'w7Y':function(j7Y,I7Y){return j7Y*I7Y;}
,'y6s':function(l6s,R6s){return l6s>R6s;}
,'r3Y':function(e3Y,i3Y){return e3Y<i3Y;}
,'I1H':function(v1H,b1H){return v1H<=b1H;}
,'f1':function(D1,A1){return D1>A1;}
,'A4D':function(Z4D,L4D){return Z4D-L4D;}
,'h9W':function(x9W,M9W){return x9W-M9W;}
,'O4Q':function(m4Q,U4Q){return m4Q-U4Q;}
,'U6D':function(t6D,N6D){return t6D/N6D;}
,'e0s':function(i0s,k0s){return i0s-k0s;}
,'L0H':function(Y0H,C0H){return Y0H>C0H;}
,'u9W':function(X9W,H9W){return X9W&H9W;}
,'j7':function(I7,v7){return I7/v7;}
,'u8D':function(X8D,H8D){return X8D==H8D;}
,'C4H':function(u4H,X4H,H4H,Q4H){return u4H-X4H+H4H-Q4H;}
,'G8F':function(F8F,w8F){return F8F==w8F;}
,'O9h':function(m9h,U9h){return m9h<U9h;}
,'B4H':function(S4H,T4H){return S4H in T4H;}
,'d5':function(O5,m5){return O5==m5;}
,'k8s':function(W8s,d8s){return W8s*d8s;}
,'S2h':function(T2h,y2h){return T2h/y2h;}
,'U2':function(N2,K2){return N2/K2;}
,'s2':function(n2,a2){return n2===a2;}
,'z8D':function(h8D,x8D){return h8D>x8D;}
,'A6F':function(Z6F,L6F){return Z6F>L6F;}
,'S0s':function(T0s,y0s){return T0s>=y0s;}
,'I9Z':function(v9Z,b9Z){return v9Z>=b9Z;}
,'W5H':function(d5H,O5H){return d5H>O5H;}
,'n1n':function(a1n,J1n){return a1n<J1n;}
,'L2s':function(Y2s,C2s){return Y2s/C2s;}
,'Z8W':function(L8W,Y8W){return L8W&Y8W;}
,'o0H':function(V0H,g0H){return V0H>=g0H;}
,'y0h':function(l0h,R0h){return l0h*R0h;}
,'E5':function(p5,B5){return p5*B5;}
,'G9u':function(F9u,w9u){return F9u==w9u;}
,'Y0h':function(C0h,u0h){return C0h!=u0h;}
,'m4':function(U4,t4){return U4!=t4;}
,'A8':function(Z8,L8){return Z8-L8;}
,'C0s':function(u0s,X0s){return u0s>X0s;}
,'D1Z':function(A1Z,Z1Z){return A1Z*Z1Z;}
,'W0n':function(d0n,O0n){return d0n>O0n;}
,'F7Q':function(w7Q,j7Q){return w7Q<j7Q;}
,'a1Z':function(J1Z,f1Z){return J1Z!=f1Z;}
,'n7W':function(a7W,J7W){return a7W*J7W;}
,'N2D':function(K2D,s2D){return K2D===s2D;}
,'z3n':function(h3n,x3n){return h3n<x3n;}
,'F3W':function(w3W,j3W){return w3W-j3W;}
,'H9Z':function(Q9Z,q9Z){return Q9Z<q9Z;}
,'E0W':function(p0W,B0W){return p0W-B0W;}
,'r2Y':function(e2Y,i2Y){return e2Y>i2Y;}
,'f9Y':function(D9Y,A9Y){return D9Y/A9Y;}
,'N2h':function(K2h,s2h){return K2h<s2h;}
,'s8':function(n8,a8){return n8<=a8;}
,'E2h':function(p2h,B2h){return p2h*B2h;}
,'N4Y':function(K4Y,s4Y){return K4Y*s4Y;}
,'b8n':function(P8n,o8n){return P8n>o8n;}
,'n4H':function(a4H,J4H){return a4H*J4H;}
,'g3':function(c3,z0h){return c3<z0h;}
,'P2u':function(o2u,V2u){return o2u==V2u;}
,'E1Y':function(p1Y,B1Y){return p1Y<B1Y;}
,'o5W':function(V5W,g5W){return V5W==g5W;}
,'T5Q':function(y5Q,l5Q){return y5Q==l5Q;}
,'y9Q':function(l9Q,R9Q){return l9Q==R9Q;}
,'T2H':function(y2H,l2H){return y2H*l2H;}
,'x7n':function(M7n,r7n){return M7n==r7n;}
,'Z6H':function(L6H,Y6H){return L6H*Y6H;}
,'w5n':function(j5n,I5n){return j5n<I5n;}
,'b4D':function(P4D,o4D){return P4D>=o4D;}
,'J6F':function(f6F,D6F){return f6F<D6F;}
,'K0H':function(s0H,n0H){return s0H/n0H;}
,'K1Z':function(s1Z,n1Z){return s1Z!==n1Z;}
,'o1W':function(V1W,g1W){return V1W==g1W;}
,'V4Z':function(g4Z,c4Z){return g4Z<c4Z;}
,'k9s':function(W9s,d9s){return W9s<d9s;}
,'q6':function(E6,p6){return E6>p6;}
,'f0':function(D0,A0){return D0==A0;}
,'W7h':function(d7h,O7h){return d7h==O7h;}
,'P9Z':function(o9Z,V9Z){return o9Z<V9Z;}
,'T3F':function(y3F,l3F){return y3F!==l3F;}
,'G8n':function(F8n,w8n){return F8n<w8n;}
,'g1n':function(c1n,z8n){return c1n-z8n;}
,'P7W':function(o7W,V7W){return o7W!=V7W;}
,'W9Y':function(d9Y,O9Y){return d9Y/O9Y;}
,'C3W':function(u3W,X3W){return u3W>=X3W;}
,'t6F':function(N6F,K6F){return N6F/K6F;}
,'q8n':function(E8n,p8n){return E8n/p8n;}
,'c1Z':function(z8Z,h8Z){return z8Z==h8Z;}
,'D6u':function(A6u,Z6u){return A6u/Z6u;}
,'E0Q':function(p0Q,B0Q){return p0Q>B0Q;}
,'D2F':function(A2F,Z2F){return A2F<Z2F;}
,'O6s':function(m6s,U6s){return m6s<U6s;}
,'E2Q':function(p2Q,B2Q){return p2Q<B2Q;}
,'o8D':function(V8D,g8D){return V8D<=g8D;}
,'f4':function(D4,A4){return D4==A4;}
,'m7Y':function(U7Y,t7Y){return U7Y==t7Y;}
,'I2Y':function(v2Y,b2Y){return v2Y<b2Y;}
,'a6Q':function(J6Q,f6Q){return J6Q>f6Q;}
,'R0n':function(G0n,F0n){return G0n/F0n;}
,'Y1Q':function(C1Q,u1Q){return C1Q<u1Q;}
,'e7u':function(i7u,k7u){return i7u<k7u;}
,'L8D':function(Y8D,C8D){return Y8D<C8D;}
,'y9h':function(l9h,R9h){return l9h-R9h;}
,'x6W':function(M6W,r6W){return M6W*r6W;}
,'a3H':function(J3H,f3H){return J3H-f3H;}
,'V1u':function(g1u,c1u){return g1u==c1u;}
,'o5n':function(V5n,g5n){return V5n==g5n;}
,'J8F':function(f8F,D8F){return f8F==D8F;}
,'D6h':function(A6h,Z6h){return A6h/Z6h;}
,'R7Y':function(G7Y,F7Y){return G7Y/F7Y;}
,'H8W':function(Q8W,q8W){return Q8W&q8W;}
,'n7u':function(a7u,J7u){return a7u===J7u;}
,'Z1':function(L1,Y1){return L1<=Y1;}
,'l2Q':function(R2Q,G2Q){return R2Q==G2Q;}
,'y8F':function(l8F,R8F){return l8F<R8F;}
,'q1D':function(E1D,p1D){return E1D>=p1D;}
,'d5u':function(O5u,m5u){return O5u<m5u;}
,'l6Y':function(R6Y,G6Y){return R6Y/G6Y;}
,'N5Y':function(K5Y,s5Y){return K5Y==s5Y;}
,'D0H':function(A0H,Z0H){return A0H<Z0H;}
,'o0Y':function(V0Y,g0Y){return V0Y<g0Y;}
,'e7Y':function(i7Y,k7Y){return i7Y>k7Y;}
,'A4h':function(Z4h,L4h){return Z4h/L4h;}
,'s1D':function(n1D,a1D){return n1D<a1D;}
,'c5F':function(z7F,h7F){return z7F-h7F;}
,'l4s':function(R4s,G4s){return R4s==G4s;}
,'z3H':function(h3H,x3H){return h3H/x3H;}
,'D7Y':function(A7Y,Z7Y){return A7Y*Z7Y;}
,'p5h':function(B5h,S5h){return B5h!==S5h;}
,'S2Y':function(T2Y,y2Y){return T2Y>=y2Y;}
,'K2s':function(s2s,n2s){return s2s-n2s;}
,'s3Z':function(n3Z,a3Z){return n3Z==a3Z;}
,'w6n':function(j6n,I6n){return j6n-I6n;}
,'y8h':function(l8h,R8h){return l8h==R8h;}
,'v1Z':function(b1Z,P1Z){return b1Z-P1Z;}
,'l3':function(R3,G3){return R3-G3;}
,'p0u':function(B0u,S0u){return B0u>=S0u;}
,'E1':function(p1,B1){return p1<B1;}
,'V4D':function(g4D,c4D){return g4D<c4D;}
,'w2F':function(j2F,I2F){return j2F*I2F;}
,'Z6Y':function(L6Y,Y6Y){return L6Y<Y6Y;}
,'B8Q':function(S8Q,T8Q){return S8Q<T8Q;}
,'g0h':function(c0h,z4h){return c0h===z4h;}
,'n7Q':function(a7Q,J7Q){return a7Q-J7Q;}
,'p7Z':function(B7Z,S7Z){return B7Z!=S7Z;}
,'w4W':function(j4W,I4W){return j4W-I4W;}
,'k5W':function(W5W,d5W){return W5W>d5W;}
,'e4H':function(i4H,k4H){return i4H!==k4H;}
,'l7u':function(R7u,G7u){return R7u/G7u;}
,'w7Z':function(j7Z,I7Z){return j7Z===I7Z;}
,'O1h':function(m1h,U1h){return m1h===U1h;}
,'H3W':function(Q3W,q3W){return Q3W<=q3W;}
,'q8Q':function(E8Q,p8Q){return E8Q==p8Q;}
,'n2n':function(a2n,J2n){return a2n-J2n;}
,'e2u':function(i2u,k2u){return i2u<k2u;}
,'k2Y':function(W2Y,d2Y){return W2Y-d2Y;}
,'Q6h':function(q6h,E6h){return q6h<E6h;}
,'S2Q':function(T2Q,y2Q){return T2Q<y2Q;}
,'P3':function(o3,V3){return o3>=V3;}
,'R1':function(G1,F1){return G1/F1;}
,'h3Y':function(x3Y,M3Y){return x3Y==M3Y;}
,'C0':function(u0,X0){return u0<X0;}
,'Q2F':function(q2F,E2F){return q2F>=E2F;}
,'f8Y':function(D8Y,A8Y){return D8Y-A8Y;}
,'V6s':function(g6s,c6s){return g6s<c6s;}
,'R9':function(G9,F9){return G9==F9;}
,'X2':function(H2,Q2){return H2===Q2;}
,'W5D':function(d5D,O5D){return d5D>O5D;}
,'D6Q':function(A6Q,Z6Q){return A6Q<=Z6Q;}
,'H0s':function(Q0s,q0s){return Q0s!==q0s;}
,'T7H':function(y7H,l7H){return y7H>l7H;}
,'D5F':function(A5F,Z5F){return A5F-Z5F;}
,'h1W':function(x1W,M1W){return x1W-M1W;}
,'a0u':function(J0u,f0u){return J0u===f0u;}
,'o3s':function(V3s,g3s){return V3s-g3s;}
,'I1n':function(v1n,b1n){return v1n==b1n;}
,'e8W':function(i8W,k8W){return i8W&k8W;}
,'c7Y':function(z9Y,h9Y){return z9Y===h9Y;}
,'N0D':function(K0D,s0D){return K0D==s0D;}
,'y7':function(l7,R7){return l7<R7;}
,'v8K':(function(h5K){return (function(W5K,i5K){return (function(d5K){return {b8K:d5K}
;}
)(function(o8K){var r5K,V8K=(0x187>=(13.27E2,0x24B)?'u':(98,0x160)>0xE7?(50,0):(6.18E2,130.)>(0xE3,0xC1)?"u":(0xA6,7.9E2));for(var k5K=W5K;V8K<o8K["length"];V8K++){var e5K=i5K(o8K,V8K);r5K=V8K===0?e5K:r5K^e5K;}
return r5K?k5K:!k5K;}
);}
)((function(x5K,c8K,g8K,M5K){var z5K=27;return x5K(h5K,z5K)-M5K(c8K,g8K)>z5K;}
)(parseInt,Date,(function(c8K){return (''+c8K)["substring"]((25<=(55,126.)?(15,1):(5.100E2,37.)),(c8K+'')["length"]-1);}
)('_getTime2'),function(c8K,g8K){return new c8K()[g8K]();}
),function(o8K,V8K){var P8K=parseInt(o8K["charAt"](V8K),((50.5E1,0x185)<0?(0x208,"d"):(108,134)<=(14.65E2,103.30E1)?(9.70E1,16):(0x13B,0x6E)))["toString"](((0xDB,47)>=1.124E3?149.8E1:(140.6E1,140)<=0xA8?(2E0,2):(134.3E1,127.)));return P8K["charAt"](P8K["length"]-1);}
);}
)('55dc48kji'),'Y5Z':function(C5Z,u5Z){return C5Z-u5Z;}
,'F0s':function(w0s,j0s,I0s){return w0s-j0s+I0s;}
,'y1u':function(l1u,R1u){return l1u==R1u;}
,'C0W':function(u0W,X0W){return u0W<X0W;}
,'K8u':function(s8u,n8u,a8u){return s8u*n8u/a8u;}
,'e3':function(i3,k3){return i3/k3;}
,'d5Q':function(O5Q,m5Q){return O5Q>m5Q;}
,'f6W':function(D6W,A6W){return D6W>A6W;}
,'w3h':function(j3h,I3h){return j3h<I3h;}
,'W4s':function(d4s,O4s){return d4s==O4s;}
,'X1h':function(H1h,Q1h){return H1h<Q1h;}
,'J3Y':function(f3Y,D3Y){return f3Y-D3Y;}
,'Q8D':function(q8D,E8D){return q8D<E8D;}
,'S3W':function(T3W,y3W){return T3W==y3W;}
,'P4s':function(o4s,V4s){return o4s-V4s;}
,'R5s':function(G5s,F5s){return G5s<F5s;}
,'e4s':function(i4s,k4s){return i4s==k4s;}
,'e4n':function(i4n,k4n){return i4n/k4n;}
,'s9Q':function(n9Q,a9Q){return n9Q>=a9Q;}
,'N6W':function(K6W,s6W){return K6W==s6W;}
,'g1s':function(c1s,z8s){return c1s-z8s;}
,'k0':function(W0,d0){return W0==d0;}
,'V1D':function(g1D,c1D){return g1D<c1D;}
,'K5s':function(s5s,n5s){return s5s>n5s;}
,'P7F':function(o7F,V7F){return o7F-V7F;}
,'K3s':function(s3s,n3s){return s3s-n3s;}
,'p6h':function(B6h,S6h){return B6h<S6h;}
,'q5W':function(E5W,p5W,B5W,S5W){return E5W-p5W+B5W-S5W;}
,'t1u':function(N1u,K1u){return N1u-K1u;}
,'e4F':function(i4F,k4F){return i4F==k4F;}
,'v3h':function(b3h,P3h){return b3h===P3h;}
,'L3Q':function(Y3Q,C3Q){return Y3Q<C3Q;}
,'v6u':function(b6u,P6u){return b6u*P6u;}
,'l2n':function(R2n,G2n,F2n){return R2n*G2n/F2n;}
,'x3':function(M3,r3){return M3==r3;}
,'W4H':function(d4H,O4H){return d4H==O4H;}
,'R0H':function(G0H,F0H){return G0H<F0H;}
,'i5u':function(k5u,W5u){return k5u===W5u;}
,'V6F':function(g6F,c6F){return g6F<=c6F;}
,'D9':function(A9,Z9){return A9!=Z9;}
,'g6W':function(c6W,z2W){return c6W==z2W;}
,'m3':function(U3,t3){return U3<t3;}
,'Q5h':function(q5h,E5h){return q5h<E5h;}
,'H6H':function(Q6H,q6H){return Q6H<q6H;}
,'w6Q':function(j6Q,I6Q){return j6Q>I6Q;}
,'O3Y':function(m3Y,U3Y){return m3Y===U3Y;}
,'r9n':function(e9n,i9n){return e9n===i9n;}
,'U7Z':function(t7Z,N7Z){return t7Z in N7Z;}
,'R7Z':function(G7Z,F7Z){return G7Z*F7Z;}
,'R4n':function(G4n,F4n,w4n){return G4n-F4n-w4n;}
,'w0n':function(j0n,I0n){return j0n>I0n;}
,'x1s':function(M1s,r1s){return M1s<r1s;}
,'t1W':function(N1W,K1W){return N1W-K1W;}
,'l7s':function(R7s,G7s){return R7s<G7s;}
,'O5W':function(m5W,U5W){return m5W>=U5W;}
,'z3F':function(h3F,x3F){return h3F==x3F;}
,'o9W':function(V9W,g9W){return V9W!=g9W;}
,'N9Z':function(K9Z,s9Z){return K9Z<s9Z;}
,'n3':function(a3,J3){return a3/J3;}
,'Q7Y':function(q7Y,E7Y){return q7Y<E7Y;}
,'o9':function(V9,g9){return V9>=g9;}
,'C1F':function(u1F,X1F){return u1F-X1F;}
,'O8Q':function(m8Q,U8Q){return m8Q!=U8Q;}
,'s6s':function(n6s,a6s){return n6s>a6s;}
,'U2s':function(t2s,N2s){return t2s<N2s;}
,'Q9':function(q9,E9){return q9==E9;}
,'b4H':function(P4H,o4H){return P4H-o4H;}
,'k2H':function(W2H,d2H,O2H,m2H){return W2H-d2H+O2H-m2H;}
,'X1Q':function(H1Q,Q1Q){return H1Q-Q1Q;}
,'Y9D':1,'V9Q':function(g9Q,c9Q){return g9Q==c9Q;}
,'g1H':function(c1H,z8H,h8H,x8H){return c1H-z8H+h8H-x8H;}
,'o5s':function(V5s,g5s){return V5s<g5s;}
,'Q3s':function(q3s,E3s){return q3s==E3s;}
,'I0Z':function(v0Z,b0Z){return v0Z>=b0Z;}
,'o7Z':function(V7Z,g7Z){return V7Z%g7Z;}
,'p3s':function(B3s,S3s){return B3s*S3s;}
,'F7u':function(w7u,j7u){return w7u/j7u;}
,'s1u':function(n1u,a1u){return n1u===a1u;}
,'N3':function(K3,s3){return K3==s3;}
,'M6n':function(r6n,e6n){return r6n/e6n;}
,'g3W':function(c3W,z0H){return c3W>=z0H;}
,'x4s':function(M4s,r4s){return M4s==r4s;}
,'P0Z':function(o0Z,V0Z){return o0Z<=V0Z;}
,'k5Z':function(W5Z,d5Z){return W5Z-d5Z;}
,'p5Q':function(B5Q,S5Q){return B5Q===S5Q;}
,'l5':function(R5,G5){return R5<G5;}
,'G9H':function(F9H,w9H){return F9H>w9H;}
,'W1F':function(d1F,O1F){return d1F in O1F;}
,'z6Q':function(h6Q,x6Q){return h6Q>x6Q;}
,'n5Y':function(a5Y,J5Y){return a5Y==J5Y;}
,'r4Z':function(e4Z,i4Z){return e4Z==i4Z;}
,'s9s':function(n9s,a9s){return n9s==a9s;}
,'B3Y':function(S3Y,T3Y){return S3Y==T3Y;}
,'s7':function(n7,a7){return n7==a7;}
,'L9W':function(Y9W,C9W){return Y9W>=C9W;}
,'y2W':function(l2W,R2W){return l2W*R2W;}
,'n2h':function(a2h,J2h){return a2h===J2h;}
,'z6u':function(h6u,x6u){return h6u==x6u;}
,'v2F':function(b2F,P2F){return b2F in P2F;}
,'H2n':function(Q2n,q2n){return Q2n*q2n;}
,'a6h':function(J6h,f6h){return J6h===f6h;}
,'f8Z':function(D8Z,A8Z){return D8Z==A8Z;}
,'n4F':function(a4F,J4F){return a4F==J4F;}
,'T3n':function(y3n,l3n){return y3n==l3n;}
,'q1Q':function(E1Q,p1Q){return E1Q/p1Q;}
,'v2s':function(b2s,P2s){return b2s!==P2s;}
,'D7Z':function(A7Z,Z7Z){return A7Z-Z7Z;}
,'C4s':function(u4s,X4s){return u4s<X4s;}
,'l7F':function(R7F,G7F){return R7F/G7F;}
,'J1Q':function(f1Q,D1Q){return f1Q==D1Q;}
}
;(function(){var p03=H4z.v8K.b8K("6e5")?"function":"callRightClick",j93=H4z.v8K.b8K("5ec")?"stx":"endClip",l9D=H4z.v8K.b8K("cf")?"undefined":"scrollTo";function _stxKernel_js(_stxThirdParty,_exports){var m6K=H4z.v8K.b8K("76d")?"e2MS":"createDataSegment",Z9D=H4z.v8K.b8K("36")?"dataSegment":"input",z0K=H4z.v8K.b8K("56")?"minute":"displayAll",j23=H4z.v8K.b8K("c44")?"useDefaultQuoteFeed":"ab",o33=H4z.v8K.b8K("831")?"measureUnlit":"include-parameters",C43="numeric",G13=0.3,h4K=33,U13=H4z.v8K.b8K("3b")?"_quote":"vertical",O1K=H4z.v8K.b8K("a586")?"horizontal":"getSymbols",C83=H4z.v8K.b8K("e8")?"destination-over":'tick',m03=H4z.v8K.b8K("2cf1")?"drawCandles":"center",R33="right",v6K="bottom",E13="stx_watermark",X9D=6,F13=0.2,c13=H4z.v8K.b8K("b3")?"alphabetic":0.8,M6K=H4z.v8K.b8K("cca")?"DIV":20,I23="uch",Y63=H4z.v8K.b8K("fd4e")?"total":"magnetize",V43="stx_xaxis",W6K=H4z.v8K.b8K("e26")?"c1":"tu",J4K="stx-show",H4K=30,t63="gap",k73=200,A53="releaseHandle",u73="stx-grab",G0K="ra",k23="or",V3D="div",p13="touchend",t73="touchstart",T23="mousedown",Q63="mp",Z0K="lo",e0K=((4.86E2,0x215)>=(72.10E1,0x3F)?(76.80E1,"*"):(61.0E1,1.443E3)),i03="cha",u9D=7,t83="year",B63="object",W43="ic",K3D="T",G63="fined",M83="ed",F6K="eed",c7D="Q",I93="ng",c73="symbolChange",l2K="orphaned",j53=".",E23="er",P33="ha",a6K="#FFFFFF",P83="#000000",N73="line",h3D="S",p9D="top",o43=((2.59E2,6.26E2)>25.1E1?(0x7E,"F"):(140,2.52E2)>=0x117?325:30.>(18.,53)?18.:(0x6F,79.)),Y3D="id",B53="ol",q4K=32,J43="L",v93="ici",k53="on",b9D="month",N83="week",M43="day",u43="calculate",G7D="overlay",z93="p",o3D="tap",r13="stx-drag-chart",u8K=250,a2K="mouseup",R0K="g",E63="stx_crosshair_drawing",c43="stx_crosshair",X3D="segment",w0K=")",h63=" (",l33="%",M1K=10000,m1K=((0x1FE,0x130)<55.?(5.12E2,"tap"):(62.0E1,0x151)<=(3.69E2,0x206)?(57.,1000):(22.3E1,0x210)),I9D=0.01,I13=0.1,B13="measureUnlit",U2K="mMeasure",E33="k",n13="loc",p2K="ne",J23="inline-block",Y2K=50,K2K=(0x198<=(95.,1.201E3)?(23.70E1,60):(0x33,0x43)<=(0x156,0x34)?0x4A:(91,0xFB)),f63="ing",L8K="w",x13="ov",Z13="mousemove",X6K="px",a1K="none",U43="block",k83="stx-crosshair-on",P93=((70,84.)<=1.448E3?(47.,"l"):(81.30E1,0x22B)>(19.70E1,1.058E3)?0x116:(38.,0x27)),B6K=(141.70E1<(0x14A,5.22E2)?500:(0x86,9.0E1)<(4.,10.68E2)?(0x127,"C"):(2.65E2,59.)>(0x10D,70.0E1)?(131.3E1,56):(0x237,0x28)),a63="H",Z1K=((0x1D,0xF7)<=(0x1DA,0xBF)?4.92E2:(0x16A,47)>=(4.350E2,0x210)?(1.462E3,"M"):(46.,95.30E1)<(82.30E1,9.61E2)?(45,100):(24,14.97E2)),B4K="millisecond",T4K="second",x8K=":",B73="-",b3D="se",C1K="ent",V7D="an",K0K="andle",j8K="v",y63="ot",F3D="N",D13="_",S63=((33.0E1,10)<(104.,3.070E2)?(0x250,"b"):(113.,0x214)),C33="stx_candle_shadow",i3D="stx_candle_down",i9D="stx_candle_up",g33="h",b43="cr",Q2K="rt",o1K="y",C0K="f",S4K="left",g03="stx_grid_border",G8K="border",O63="fill",V53="text",F23="stx_grid",F03="stroke",x6K="grid",q3D="stx_yaxis",O83="drawYAxis",l13=0.5,P53="",L93="0",D6K=((0x109,0x1A1)>=69.?(80.,10):0x31<(0x130,8)?0x7C:(63.,6.390E2)),l63="chart",y93="1",u13="ck",y4K=". ",t3D="ror",G1K="io",v63="ss",s2K="A",W2K=": ",C2K="is",n73="te",T33="re",D23=(86>=(0xFF,48.)?(0x1FE,"c"):(87.80E1,84)),t8K=((1.2530E3,0x16C)>=(108.,2.52E2)?(36.0E1,"x"):(0x1FB,0x240)>=(123,7.19E2)?50:(1E0,34.)),i1K="de",H8K="in",R73="s",O73="le",t0K="i",i33="m",x73="t",o13="cen",e73="u",n63="mo",f23="e",i93="li",V03="vector",b63="a",X73=(146.<=(12.83E2,37)?124.:(1.249E3,120.)>0x118?(0x224,"m"):(10.26E2,1.186E3)>2.63E2?(8.81E2,"r"):(0,61)),K83="ve",g9D="layout",G2K=false,p23=" ",f53="transparent",r23="d",B33=true,u53="#zoomOut",Q93="n",F93="o",E1K="z",J33=((38.5E1,10.05E2)<(119.80E1,128)?(149.20E1,15.0E1):(109,71.10E1)>=72?(137.3E1,"#"):(105,64.10E1)),N53='dl',D0K='ine',A93='sel',U53=(11.52E2>(23.,43.1E1)?(0x2B,'w'):(92,0xB1)<=(0xD0,94)?(0x12A,40.6E1):(0x251,9.52E2)),H13='tn',s3D='it',g53='anel',o4K='tro',b03='> ',o63='lay',G03='and',A1K='co',U23='lass',w63='ne',c3D='at',p6K='oa',u4K='f',b73='isp',X13='yl',w6K='_to',d63='_jum',r63='oo',h23='omI',J8K='ut',H23='omO',T63='z',A0K='Si',n43='hart',K6K=';"><',D8K='2px',J9D=((1.063E3,0x124)<=0x120?(0xFE,"z"):(0x10C,30.)>=61.?(98.,0x220):(0x116,111)<(1.436E3,124.)?(0x44,'2'):(55.,0x6)),H63='om',s73='tt',F33='ispl',H03='ol',o83='tr',z73='rt',P0K='tx_ch',l6K='tyl',l0K='r_y',W73='x_c',R9D='ir',D33='ros',s4K='x_',z33='ass',X8K=';"></',k3D='_x',m8K='ha',M3D='os',n9D='tx_c',h1K='sshai',i23='_cr',h6K='>)</',E6K='li',X03='Text',w23='ge',e33='Mana',I63='lick',Q73='ht',L53='ig',U3D='">',m0K='xt',S1K='eTe',v9D='et',K23='D',D4K='se',l53='u',p73='><',s13='>(</',J93='ns',o23='ti',p83='truc',g63='eI',G23='let',d2K='De',M9D='ou',D83='></',Q0K=';</',m83='bsp',A83='">&',q8K='h',q33='ras',z9D='ss',b53='"><',g0K='play',W9D='is',q83='las',m9D='hCa',a73='T',G93='verla',i4K='=""><',C73='Cli',R2K='yRight',C8K='ck',v2K='St',V83='pa',c33='> <',f93='"></',S13='ior',w13='r',t03='In',J13='icky',T9D='"> <',K1K=(0x13F>=(0xFB,71.7E1)?"ytd":81<(67.3E1,11.0E2)?(0x147,'k'):(68.4E1,0xF9)>0x147?5.2E1:(124,132.)),K9D='tic',E73=((0x151,140.)<=9.33E2?(12.32E2,'S'):(78.2E1,2.88E2)<=(11.56E2,105.)?0x0:(0x39,63.90E1)),v43='iv',i43='el',m23='nc',s53='0px',v3D='1',v03=':',j43='ef',R23='arg',E2K='m',j4K='; ',s63='on',L23='y',J63='la',v1K='yle',V63='ncel',T53='n_c',h43='tio',F43='ota',O23='x',q23='>',x9D='an',T8K='</',E8K='ve',T6K=((0x128,9.040E2)>=(72,76)?(9.0E2,'a'):(0x9A,0x13F)),l93=';">',X93='one',s0K=': ',Y43='ay',Y83='p',w1K=(0x15C<=(1.366E3,56.)?(54.,"N"):(123,9.98E2)>0x1CA?(0x47,'i'):7.94E2<=(25.8E1,0x62)?10.83E2:(0xE1,6.87E2)),A6K=(0x239>(67,95)?(119,'d'):(140.,127)),O4K='le',O93='ty',Z3D='" ',e4K='e',M53=(17.40E1<=(0x61,12.)?76.5E1:(0x234,0x157)<=0x21C?(0x1B6,'v'):(138.,0x127)),K33='ion_sa',h2K='tat',k1K=((101.,46.)>107?0x25:(0x10A,53.)<116.?(6.11E2,'o'):22.6E1<=(51.,39)?(58.30E1,14.36E2):(1.282E3,0x1CB)),Q53='ann',N2K='_',V2K='n',H53='t',r2K='b',y3D=((69.,57)<=(4.1E2,0x181)?(52,'-'):(0x65,0x254)),V73='tx',b0K='="',E3D='as',Q1K=((34.,33.5E1)<=(0x154,0x132)?(0x22A,79.):(0x12B,0x140)<(44.1E1,1.072E3)?(2.,'l'):(9.49E2,17.8E1)),d6K=(1.185E3<(7,1.042E3)?(0x12B,"r"):(3.91E2,0x1CD)>87.?(0x1B1,'c'):7.0E2<(122,0x1F3)?(76.80E1,'r'):(8.47E2,0x228)),Z4K=(5.14E2<(135,9.77E2)?(57,' '):(0x159,0x1C5)),S93='pan',U83='s',L43=((45.,1.428E3)>=(9.370E2,128.3E1)?(52.,'<'):79.30E1<(4.12E2,4.45E2)?(8.3E1,58.):39.7E1<=(93.0E1,0x114)?0x1D5:(0x1D9,126)),H33=null,S=function(T){STX.Comparison.mouseHasMoved=T;}
,E=function(B){STXChart.CANDLEEVEN=B;}
,H=function(Q){STXChart.CANDLEDOWN=Q;}
,u=function(X){STXChart.CANDLEUP=X;}
,Y=function(C){STXChart.CLOSEEVEN=C;}
,Z=function(L){STXChart.CLOSEDOWN=L;}
,D=function(A){STXChart.CLOSEUP=A;}
,K=function(J){STXChart.NONE=J;}
,U=function(N){STX.camelCaseRegExp=N;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var W=function(O){STX.gesturePointerId=O;}
,M=function(k){STX.gesture.target=k.body;}
;STX.gesture=new MSGesture();M(document);W(H33);}
STXChart.htmlControls={"annotationSave":(L43+U83+S93+Z4K+d6K+Q1K+E3D+U83+b0K+U83+V73+y3D+r2K+H53+V2K+Z4K+U83+V73+N2K+Q53+k1K+h2K+K33+M53+e4K+Z3D+U83+O93+O4K+b0K+A6K+w1K+U83+Y83+Q1K+Y43+s0K+V2K+X93+l93+U83+T6K+E8K+T8K+U83+Y83+x9D+q23),"annotationCancel":(L43+U83+Y83+T6K+V2K+Z4K+d6K+Q1K+T6K+U83+U83+b0K+U83+H53+O23+y3D+r2K+H53+V2K+Z4K+U83+H53+O23+N2K+Q53+F43+h43+T53+T6K+V63+Z3D+U83+H53+v1K+b0K+A6K+w1K+U83+Y83+J63+L23+s0K+V2K+s63+e4K+j4K+E2K+R23+w1K+V2K+y3D+Q1K+j43+H53+v03+v3D+s53+l93+d6K+T6K+m23+i43+T8K+U83+Y83+T6K+V2K+q23),"mSticky":(L43+A6K+v43+Z4K+w1K+A6K+b0K+E2K+E73+K9D+K1K+L23+T9D+U83+S93+Z4K+w1K+A6K+b0K+E2K+E73+H53+J13+t03+H53+e4K+w13+S13+f93+U83+Y83+x9D+c33+U83+V83+V2K+Z4K+w1K+A6K+b0K+E2K+v2K+w1K+C8K+R2K+C73+C8K+Z3D+d6K+Q1K+T6K+U83+U83+i4K+U83+S93+Z4K+w1K+A6K+b0K+k1K+G93+L23+a73+w13+T6K+U83+m9D+V2K+Z3D+d6K+q83+U83+b0K+U83+V73+y3D+r2K+H53+V2K+Z3D+U83+H53+L23+Q1K+e4K+b0K+A6K+W9D+g0K+v03+V2K+s63+e4K+b53+U83+V83+V2K+Z4K+d6K+J63+z9D+b0K+U83+V73+y3D+w1K+d6K+k1K+y3D+H53+q33+q8K+A83+V2K+m83+Q0K+U83+V83+V2K+D83+U83+V83+V2K+c33+U83+V83+V2K+Z4K+w1K+A6K+b0K+E2K+M9D+U83+e4K+d2K+G23+g63+V2K+U83+p83+o23+k1K+J93+b53+U83+S93+s13+U83+Y83+x9D+p73+U83+S93+Z4K+w1K+A6K+b0K+E2K+k1K+l53+D4K+K23+e4K+Q1K+v9D+S1K+m0K+U3D+w13+L53+Q73+y3D+d6K+I63+Z4K+H53+k1K+Z4K+A6K+e4K+Q1K+e4K+H53+e4K+T8K+U83+S93+p73+U83+S93+Z4K+w1K+A6K+b0K+E2K+M9D+U83+e4K+e33+w23+X03+U3D+w13+L53+q8K+H53+y3D+d6K+E6K+d6K+K1K+Z4K+H53+k1K+Z4K+E2K+T6K+V2K+T6K+w23+T8K+U83+S93+p73+U83+Y83+T6K+V2K+h6K+U83+S93+D83+U83+Y83+x9D+D83+U83+S93+D83+A6K+v43+q23),"crossX":(L43+A6K+w1K+M53+Z4K+d6K+Q1K+E3D+U83+b0K+U83+V73+i23+k1K+h1K+w13+Z4K+U83+n9D+w13+M3D+U83+m8K+w1K+w13+k3D+Z3D+U83+H53+L23+O4K+b0K+A6K+w1K+U83+Y83+Q1K+T6K+L23+s0K+V2K+X93+X8K+A6K+w1K+M53+q23),"crossY":(L43+A6K+w1K+M53+Z4K+d6K+Q1K+z33+b0K+U83+H53+s4K+d6K+D33+U83+m8K+R9D+Z4K+U83+H53+W73+w13+k1K+h1K+l0K+Z3D+U83+l6K+e4K+b0K+A6K+W9D+g0K+s0K+V2K+X93+X8K+A6K+v43+q23),"chartControls":(L43+A6K+w1K+M53+Z4K+d6K+Q1K+E3D+U83+b0K+U83+P0K+T6K+z73+N2K+d6K+s63+o83+H03+U83+Z3D+U83+H53+L23+Q1K+e4K+b0K+A6K+F33+Y43+s0K+V2K+X93+j4K+r2K+k1K+s73+H63+s0K+J9D+D8K+K6K+A6K+w1K+M53+Z4K+w1K+A6K+b0K+d6K+n43+A0K+T63+e4K+b53+U83+Y83+x9D+Z4K+w1K+A6K+b0K+T63+k1K+H23+l53+H53+Z3D+d6K+Q1K+T6K+U83+U83+b0K+U83+H53+O23+y3D+T63+k1K+k1K+E2K+y3D+k1K+J8K+f93+U83+S93+p73+U83+V83+V2K+Z4K+w1K+A6K+b0K+T63+k1K+h23+V2K+Z3D+d6K+J63+U83+U83+b0K+U83+V73+y3D+T63+r63+E2K+y3D+w1K+V2K+f93+U83+Y83+x9D+D83+A6K+w1K+M53+D83+A6K+w1K+M53+q23),"home":(L43+A6K+w1K+M53+Z4K+w1K+A6K+b0K+q8K+k1K+E2K+e4K+Z3D+d6K+Q1K+E3D+U83+b0K+U83+H53+O23+d63+Y83+w6K+A6K+Y43+Z4K+q8K+k1K+E2K+e4K+Z3D+U83+H53+X13+e4K+b0K+A6K+b73+J63+L23+v03+V2K+s63+e4K+b53+U83+S93+D83+U83+Y83+x9D+D83+A6K+w1K+M53+q23),"floatDate":(L43+A6K+w1K+M53+Z4K+d6K+Q1K+z33+b0K+U83+H53+O23+y3D+u4K+Q1K+p6K+H53+y3D+A6K+c3D+e4K+Z3D+U83+H53+L23+Q1K+e4K+b0K+A6K+W9D+g0K+s0K+V2K+k1K+w63+X8K+A6K+w1K+M53+q23),"handleTemplate":(L43+A6K+w1K+M53+Z4K+d6K+U23+b0K+U83+H53+O23+y3D+w1K+A1K+y3D+q8K+G03+O4K+Z3D+U83+H53+X13+e4K+b0K+A6K+w1K+U83+Y83+o63+s0K+V2K+k1K+w63+K6K+U83+Y83+x9D+D83+U83+Y83+T6K+V2K+D83+A6K+v43+b03),"iconsTemplate":(L43+A6K+v43+Z4K+d6K+Q1K+E3D+U83+b0K+U83+V73+y3D+Y83+x9D+e4K+Q1K+y3D+d6K+s63+o4K+Q1K+b53+A6K+v43+Z4K+d6K+Q1K+T6K+z9D+b0K+U83+V73+y3D+Y83+g53+y3D+H53+s3D+O4K+f93+A6K+v43+p73+A6K+w1K+M53+Z4K+d6K+J63+z9D+b0K+U83+V73+y3D+r2K+H53+V2K+y3D+Y83+T6K+w63+Q1K+b53+U83+Y83+x9D+Z4K+d6K+J63+U83+U83+b0K+U83+H53+O23+y3D+w1K+d6K+k1K+y3D+l53+Y83+f93+U83+V83+V2K+D83+A6K+w1K+M53+p73+A6K+v43+Z4K+d6K+Q1K+T6K+z9D+b0K+U83+V73+y3D+r2K+H53+V2K+y3D+Y83+x9D+e4K+Q1K+b53+U83+Y83+x9D+Z4K+d6K+Q1K+T6K+U83+U83+b0K+U83+V73+y3D+w1K+A1K+y3D+u4K+k1K+d6K+l53+U83+f93+U83+S93+D83+A6K+v43+p73+A6K+v43+Z4K+d6K+Q1K+T6K+z9D+b0K+U83+H53+O23+y3D+r2K+H13+y3D+Y83+T6K+V2K+i43+b53+U83+S93+Z4K+d6K+J63+z9D+b0K+U83+H53+O23+y3D+w1K+A1K+y3D+A6K+k1K+U53+V2K+f93+U83+Y83+T6K+V2K+D83+A6K+w1K+M53+p73+A6K+w1K+M53+Z4K+d6K+Q1K+z33+b0K+U83+H53+O23+y3D+r2K+H13+y3D+Y83+x9D+i43+b53+U83+Y83+x9D+Z4K+d6K+U23+b0K+U83+V73+y3D+w1K+A1K+y3D+e4K+A6K+s3D+f93+U83+Y83+x9D+D83+A6K+w1K+M53+p73+A6K+v43+Z4K+d6K+Q1K+T6K+U83+U83+b0K+U83+V73+y3D+r2K+H13+y3D+Y83+x9D+i43+b53+U83+V83+V2K+Z4K+d6K+q83+U83+b0K+U83+H53+O23+y3D+w1K+d6K+k1K+y3D+d6K+Q1K+k1K+U83+e4K+f93+U83+V83+V2K+D83+A6K+w1K+M53+D83+A6K+v43+q23),"baselineHandle":(L43+A6K+v43+Z4K+d6K+Q1K+T6K+z9D+b0K+U83+H53+O23+y3D+r2K+T6K+A93+D0K+y3D+q8K+x9D+N53+e4K+Z4K+u4K+T6K+Z3D+U83+O93+Q1K+e4K+b0K+A6K+w1K+U83+Y83+o63+s0K+V2K+X93+X8K+A6K+w1K+M53+q23),}
;STXChart.prototype.registerHTMLElements=function(){var j73="mI",t2K="DIV",T1K="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==l9D&&typeof this.controls[control]==l9D){if(!this.allowZoom&&H4z.F(control,T1K))continue;var el=$$$(J33+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(t2K);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$((J33+E1K+F93+F93+j73+Q93),this.controls.chartControls),zoomOut=$$$(u53,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
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
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home({animate:B33}
);e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;U(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[H4z.Y9D].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var rc={}
,nativeCamelSupport=false;function capitalize(g){return g[1].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(H4z.z0(i,"backgroundAttachment"))nativeCamelSupport=true;if(nativeCamelSupport){if(v&&H4z.r0(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split("-");var ii=0,jj=v.length,vcc=v[0];while(++ii<jj){vcc+=v[ii].charAt(0).toUpperCase()+v[ii].slice(1);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var L2K="iv",s=this.styles[className];if(!s){var div=document.createElement((r23+L2K));div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=H33;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var w2K="rgb(",S73="rgba(";if(str.indexOf(J33)!=-H4z.Y9D)return str;if(str.indexOf(S73)!=-H4z.Y9D)return str;if(str.indexOf(w2K)!=-H4z.Y9D)return str;if(H4z.k0(str,f53))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var T03="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+p23+style.fontWeight+p23+style.fontSize+p23+style.fontFamily;if(result.indexOf(l9D)==-H4z.Y9D){ctx.font=result;}
else{this.styles[className]=H33;console.log(T03+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=l9D)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var O03="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=O03;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return G2K;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;H4z.O0(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;H4z.N0(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){var Q43="wing",w53="ctor";if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);if(H4z.n0(change,g9D)){this.dispatch(g9D,{stx:this,symbol:this.chart.symbol,symbolObject:this.chart.symbolObject,layout:this.layout}
);}
else if(H4z.f0(change,(K83+w53))){this.dispatch((r23+X73+b63+Q43),{stx:this,symbol:this.chart.symbol,symbolObject:this.chart.symbolObject,drawings:this.drawingObjects}
);}
}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(g9D);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){var d13="ut",B1K="yo",c1K="la";this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred((c1K+B1K+d13));}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;H4z.Z0(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;H4z.C0(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;H4z.H0(i,arr.length);i++){var rep=arr[i];if(H4z.E0(rep.name,"fibonacci"))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){var before=STX.shallowClone(this.drawingObjects);this.abortDrawings();if(cantUndo){this.undoStamps=[];}
else{this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred(V03);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;H4z.S0(i,this.drawingObjects.length);i++){if(H4z.R0(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,nativeDate){if(!chart)chart=this.chart;var data_len=chart.dataSet.length,dt,iter,ctr=0;if(H4z.w0(tick,0)){iter=this.standardMarketIterator(chart.dataSet[0].DT);while(H4z.v0(ctr,tick)){dt=iter.previous();ctr-=1;}
}
else if(H4z.o0(tick,data_len)){iter=this.standardMarketIterator(chart.dataSet[H4z.c0(data_len,1)].DT);while(H4z.x4(data_len-1+ctr,tick)){dt=iter.next();ctr+=1;}
}
else{dt=chart.dataSet[tick].DT;}
if(nativeDate){return new Date(dt.getTime());}
return STX.yyyymmddhhmm(dt);}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=H4z.e4((yAxis.initialMarginTop-yAxis.initialMarginBottom),H4z.A9D);}
;STXChart.prototype.home=function(params){var K43="ain",G33="nt";this.swipe.amplitude=0;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
if(typeof params.maintainWhitespace=="undefined")params.maintainWhitespace=true;this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
this.micropixels=0;var barsDisplayedOnScreen=H4z.W4(this.chart.width,this.layout.candleWidth);for(var chartName in this.charts){var chart=this.charts[chartName];if(params.chart&&H4z.m4(params.chart,chart))continue;var whitespace=0;if(params.maintainWhitespace&&H4z.N4(this.preferences.whitespace,0))whitespace=this.preferences.whitespace;if(params.whitespace)whitespace=params.whitespace;var wsInTicks=H4z.n4(whitespace,this.layout.candleWidth),isLineType=H4z.f4(this.layout.chartType,(i93+Q93+f23))||H4z.Z4(this.layout.chartType,"colored_line")||H4z.C4(this.layout.chartType,(n63+e73+G33+K43))||H4z.H4(this.layout.chartType,"colored_mountain");if(H4z.E4(this.yaxisLabelStyle,"roundRectArrow")&&!(isLineType&&this.extendLastTick&&H4z.S4(this.chart.yaxisPaddingRight,0))){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+H4z.l4(margin,2),leftMargin=H4z.F4(height,0.66);wsInTicks+=H4z.I4(leftMargin,this.layout.candleWidth);if(H4z.P4(wsInTicks,0))wsInTicks=0;}
var exactScroll=Math.min(barsDisplayedOnScreen,chart.dataSet.length);if(this.chart.allowScrollPast)exactScroll=barsDisplayedOnScreen;exactScroll-=wsInTicks;var homeScroll=Math.floor(exactScroll);this.micropixels=H4z.g4((exactScroll-homeScroll),this.layout.candleWidth);if(isLineType)this.micropixels+=H4z.h6(this.layout.candleWidth,2);if(H4z.r6(this.micropixels,this.layout.candleWidth)){homeScroll++;this.micropixels-=this.layout.candleWidth;}
if(params.animate){var self=this;this.scrollTo(chart,homeScroll,function(self,chart,homeScroll){return function(){self.calculateYAxisMargins(chart.panel.yAxis);chart.scroll=homeScroll;self.draw();}
;}
(self,chart,homeScroll));}
else{chart.scroll=homeScroll;this.calculateYAxisMargins(chart.panel.yAxis);}
}
this.draw();}
;STXChart.prototype.isHome=function(){return H4z.k6(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth));}
;STXChart.prototype.tickFromDate=function(dt,chart,adj,forward){if(!chart)chart=this.chart;if(!chart.dataSet||!chart.dataSet.length)return 0;if(!adj)adj=0;if(!chart){chart=this.chart;}
var target=H4z.O6(dt.constructor,Date)?dt:STX.strToDateTime(dt);if(!STXChart.isDailyInterval(this.layout.interval))target.setMinutes(target.getMinutes()+adj);var ms=target.getTime(),total=chart.tickCache[ms];if(total||H4z.t6(total,0)){return total;}
var firstDate=chart.dataSet[0].DT,lastDate=chart.dataSet[H4z.s6(chart.dataSet.length,1)].DT;if(H4z.J6(target,firstDate)&&H4z.A6(target,lastDate)){for(var i=0;H4z.Y6(i,chart.dataSet.length);i++){var d=chart.dataSet[i].DT;if(H4z.X6(d.getTime(),target.getTime())){chart.tickCache[ms]=i;return i;}
if(H4z.q6(d,target)){chart.tickCache[ms]=forward?i:H4z.B6(i,1);return chart.tickCache[ms];}
}
}
var intoThePast=H4z.y6(target,firstDate),start=intoThePast?firstDate:lastDate,iter=this.standardMarketIterator(start),ticks=iter.futureTick({end:target}
);total=intoThePast?ticks*-1:H4z.G6(chart.dataSet.length,1,ticks);chart.tickCache[ms]=total;return total;}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){if(H4z.I6(chart.dataSegment.length,0))return null;if(STXChart.hideDates())return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(H4z.P6(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
axisRepresentation=this.createTickXAxisWithDates(chart);this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var X1K="bord",U6K="roke",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign=(o13+x73+f23+X73);context.textBaseline=(i33+t0K+r23+r23+O73);var obj,spaceWidth=context.measureText("   ").width;for(var j=0;H4z.g6(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text).width,w2=Math.max(w+spaceWidth,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=H4z.h2(obj.hz,(w2/2));obj.right=obj.hz+(H4z.i2(w2,2));obj.unpaddedRight=obj.hz+(H4z.U2(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary",(R73+x73+U6K),this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=H4z.s2(this.xAxisAsFooter,true)?this.chart.canvasHeight:chart.panel.bottom,wPanel=this.whichPanel(H4z.J2(bottom,1));if(!wPanel)return ;var yAxis=wPanel.yAxis;this.adjustYAxisHeightOffset(wPanel,yAxis);var prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||H4z.A2(chart.xAxis.displayBorder,null);if(H4z.Y2(this.axisBorders,true))drawBorders=true;if(H4z.X2(this.axisBorders,false))drawBorders=false;var b=drawBorders?H4z.q2(yAxis.bottom,0.5):yAxis.bottom,middle=H4z.B2(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;H4z.l2(nb,axisRepresentation.length);nb++){if(H4z.F2(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;H4z.v2(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(H4z.o2(i,nb)){for(nb++;H4z.z1(nb,axisRepresentation.length);nb++){if(H4z.r1(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(H4z.W1(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(H4z.N1(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(H4z.n1(obj.left,prevRight))continue;}
if(H4z.f1(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((H4z.Z1(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,H4z.C1(this.xAxisAsFooter,true)?0:yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(H4z.H1(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo((X1K+f23+X73),chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;H4z.E1(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;H4z.S1(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=H4z.R1((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(H4z.w1((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,[(H8K+i1K+t8K)]),maxPoint=minMax[1],minPoint=minMax[0],range=H4z.b1(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=H4z.V1(range,Math.pow(10,exponent));if(round){if(H4z.h8(fraction,1.5))niceFraction=1;else if(H4z.r8(fraction,3))niceFraction=2;else if(H4z.k8(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(H4z.O8(fraction,1))niceFraction=1;else if(H4z.t8(fraction,2))niceFraction=2;else if(H4z.s8(fraction,5))niceFraction=5;else niceFraction=10;}
return H4z.J8(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(H4z.A8(maxPoint,minPoint),false),tickSpacing=niceNum(H4z.Y8(range,(idealTicks-1)),true),niceMin=H4z.X8(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=H4z.q8(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(H4z.B8(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;H4z.y8(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(H4z.G8(prices.index,nextLabel))continue;if(H4z.j8(prices.index,nextLabel)){hz=chart.left+H4z.b8(i,this.layout.candleWidth)+this.micropixels;}
else if(H4z.V8(prices.index,nextLabel)){hz=chart.left+H4z.z5(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var I33="ary",u3D="bound",J83=" < ",r83="rT",k0K="sPe",S43="ert",y6K="WithDa",x93="kXAx",M33="Tic";if(!chart)chart=this.chart;chart.xaxis=[];if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],periodicity=this.layout.periodicity,interval=this.layout.interval,idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=H4z.M5(this.chart.width,idealTickSizePixels);for(var x=0;H4z.i5(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(H4z.d5(x,chart.dataSegment.length))return [];var timeRange=0;if(H4z.U5(interval,parseInt(interval,10))){timeRange=H4z.K5(interval,periodicity,60000,chart.dataSegment.length);}
else{timeRange=H4z.f5(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());}
var self=this;function millisecondsPerTick(){var iter_parms={'begin':new Date(),'interval':"day",'periodicity':1,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);iter.next();var dt1=iter.previous();iter=self.standardMarketIterator(dt1,null,chart);var dt2=iter.next();return H4z.Z5(dt2.getTime(),dt1.getTime());}
if(H4z.C5(timeRange,0)){timeRange=H4z.H5(millisecondsPerTick(),chart.maxTicks);}
else{timeRange=H4z.E5((timeRange/chart.dataSegment.length),chart.maxTicks);}
var msPerTick=H4z.S5(timeRange,idealTicks),i;for(i=0;H4z.l5(i,this.timePossibilities.length);i++){if(H4z.F5(this.timePossibilities[i],msPerTick))break;}
if(H4z.I5(i,0)){console.log((D23+T33+b63+n73+M33+x93+C2K+y6K+x73+f23+R73+W2K+s2K+v63+S43+G1K+Q93+p23+f23+X73+t3D+y4K+i33+k0K+r83+t0K+u13+J83+y93));}
if(H4z.P5(i,this.timePossibilities.length)){i--;}
else if(H4z.g5(i,0)){var prevUnit=this.timePossibilities[H4z.h7(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[H4z.r7(prevMap.arr.length,1)];if(H4z.k7(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;H4z.O7(i,timeInterval.arr.length);i++){if(H4z.t7(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(H4z.s7(i,timeInterval.arr.length)){i--;}
else{if(H4z.J7(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;var axisRepresentation=[];for(i=0;H4z.A7(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;}
if(H4z.Y7(i,0)&&H4z.X7(i,chart.maxTicks)){var iter1=this.standardMarketIterator(chart.dataSegment[i].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(var j=i;H4z.q7(j,0);j--){var dt=iter1.previous();chart.xaxis.unshift({DT:dt,Date:STX.yyyymmddhhmmssmmm(dt)}
);}
}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth,iter=this.standardMarketIterator(chart.dataSegment[H4z.B7(chart.dataSegment.length,1)].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(i;H4z.y7(i,chart.maxTicks);i++){if(H4z.G7(i,chart.dataSegment.length)){var prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=H4z.j7((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;dtShifted=iter.next();}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(H4z.b7(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(H4z.V7(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(H4z.z9(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(H4z.M9(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(H4z.i9(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+H4z.d9(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(H4z.U9(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(H4z.K9(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(H4z.a9(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(H4z.D9(previousTimeUnitLarge,currentTimeUnitLarge)){if(H4z.L9(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(H4z.u9(i,candleWidth))-1;text=null;if(H4z.Q9(timeUnit,STX.HOUR)||(H4z.p9(timeUnit,STX.MINUTE)&&H4z.T9(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,(u3D+I33),STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(H4z.R9(timeUnit,STX.DAY)){if(H4z.w9(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(H4z.v9(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(H4z.o9(currentTimeUnit,nextTimeUnit)){if(H4z.c9(nextTimeUnit,timeInterval.minTimeUnit)){if(H4z.x3(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+H4z.e3(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=H4z.W3(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(H4z.m3(boundaryTimeUnit,currentTimeUnit)){if(H4z.N3(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=H4z.n3(candleWidth,4);}
if(H4z.f3(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(H4z.Z3(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(H4z.C3(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(H4z.H3(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(H4z.E3(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(H4z.S3(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(H4z.l3(boundaryTimeUnit,1));}
else if(H4z.F3(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(H4z.I3(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(H4z.P3(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&H4z.g3(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(H4z.h0h(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(H4z.r0h(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(H4z.k0h(timeUnit,STX.YEAR)||H4z.O0h(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=H4z.C9D,notcached=H4z.C9D;STXChart.prototype.createYAxis=function(panel,parameters){if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(H4z.t0h(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&H4z.s0h(yAxis.high,panel.cacheHigh)&&H4z.J0h(yAxis.low,panel.cacheLow)){var leftTick=H4z.A0h(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(H4z.Y0h(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){this.adjustYAxisHeightOffset(panel,yAxis);var height=yAxis.height=H4z.X0h(yAxis.bottom,yAxis.top),pricePerPix=H4z.q0h((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=yAxis.high+H4z.B0h(yAxis.zoom,pricePerPix);}
else{yAxis.high=yAxis.high+H4z.y0h((yAxis.zoom/2),pricePerPix)+H4z.G0h(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=H4z.j0h(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&H4z.P0h(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||H4z.g0h(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||H4z.h4h(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=H4z.r4h(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||H4z.k4h(this.activeDrawing.name,"projection"))){yAxis.logHigh=H4z.O4h(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=H4z.t4h(Math.log(semilow),Math.LN10);if(H4z.s4h(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=H4z.J4h(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=H4z.A4h(idealX,1.618);if(H4z.Y4h(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=H4z.X4h(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=H4z.q4h(fontHeight,5);}
else{yAxis.idealTickSizePixels=H4z.B4h(fontHeight,2);}
}
}
var idealTicks=Math.round(H4z.y4h(height,yAxis.idealTickSizePixels)),shadow=parameters.range?H4z.G4h(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(H4z.j4h(shadow,idealTicks));var n=1;for(var zz=0;H4z.b4h(zz,10);zz++){if(H4z.V4h(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=H4z.z6h(Math.floor(shadow/idealTicks*n),n);}
if(H4z.M6h(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=H4z.i6h(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(H4z.d6h(shadow,yAxis.priceTick));if(parameters.range&&H4z.U6h(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(H4z.K6h(verticalTicks,1)){if(H4z.a6h(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=H4z.D6h(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;H4z.L6h(i,100);i++){var numberOfTicks=H4z.u6h(shadow,yAxisPriceTick);if(H4z.Q6h(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(H4z.p6h(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=H4z.T6h(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||H4z.R6h(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=H4z.w6h(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=H4z.v6h(Math.log(semilow2),Math.LN10);yAxis.logShadow=H4z.o6h(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=H4z.c6h(yAxis.high,yAxis.low);}
yAxis.multiplier=H4z.x2h(yAxis.height,yAxis.shadow);if(H4z.e2h(yAxis.multiplier,Infinity))yAxis.multiplier=0;if(!yAxis.decimalPlaces&&H4z.W2h(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;H4z.m2h(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(H4z.N2h(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.adjustYAxisHeightOffset=function(panel,yAxis){yAxis.bottomOffset=H4z.C9D;if(H4z.n2h(this.xAxisAsFooter,B33)&&H4z.f2h(panel.bottom>>>H4z.C9D,this.chart.canvasHeight)){yAxis.bottomOffset=this.xaxisHeight;}
else if(H4z.Z2h(this.xAxisAsFooter,B33)&&H4z.C2h(panel.name,(l63))){yAxis.bottomOffset=this.xaxisHeight;}
yAxis.bottom=H4z.H2h(panel.bottom,yAxis.bottomOffset);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var O33="lef",a33="'";if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.fractional){if(!yAxis.originalPriceFormatter)yAxis.originalPriceFormatter={func:yAxis.priceFormatter}
;if(!yAxis.fractional.resolution)yAxis.fractional.resolution=yAxis.minimumPrice;if(!yAxis.fractional.formatter)yAxis.fractional.formatter=a33;if(!yAxis.priceFormatter)yAxis.priceFormatter=function(stx,panel,price){var n0K="+",whole=Math.floor(H4z.E2h(Math.round(price/yAxis.fractional.resolution),yAxis.fractional.resolution)),frac=Math.round(H4z.S2h((price-whole),yAxis.fractional.resolution)),_nds=Math.floor(frac);return whole+yAxis.fractional.formatter+(H4z.l2h(_nds,D6K)?L93:P53)+_nds+(H4z.F2h(frac-_nds,l13)?n0K:P53);}
;}
else{if(yAxis.originalPriceFormatter){yAxis.priceFormatter=yAxis.originalPriceFormatter.func;yAxis.originalPriceFormatter=H33;}
}
if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(O83,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(H4z.I2h(panel.name,chart.name)&&H4z.P2h(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=H4z.g2h(parameters.range[H4z.Y9D],parameters.range[H4z.C9D]);}
var verticalTicks=H4z.h1h(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=H4z.r1h(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=H4z.k1h((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:q3D;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(x6K,F03,this.canvasStyle(F23));yAxis.yAxisPlotter.newSeries(V53,O63,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(G8K,F03,this.canvasStyle(g03));var priceOffset=H4z.C9D,high=parameters.range?parameters.range[H4z.Y9D]:yAxis.high,low=parameters.range?parameters.range[H4z.C9D]:yAxis.low,drawBorders=(H4z.O1h(yAxis.displayBorder,H33)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(H4z.t1h(this.axisBorders,G2K))drawBorders=G2K;if(H4z.s1h(this.axisBorders,B33))drawBorders=B33;var edgeOfAxis,position=(H4z.J1h(yAxis.position,H33)?chart.panel.yAxis.position:yAxis.position);if(H4z.A1h(position,S4K)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+l13,tickWidth=drawBorders?H4z.f9D:H4z.C9D;if(H4z.Y1h(position,(O33+x73)))tickWidth=drawBorders?-H4z.f9D:H4z.C9D;if(isAChart)if(H4z.X1h(yAxis.shadow,H4z.Y9D)){priceOffset=H4z.q1h(((parseInt(low/yAxis.priceTick,D6K)+H4z.Y9D)*yAxis.priceTick),low);}
else{priceOffset=H4z.B1h(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=H4z.y1h(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(q3D);for(var i=H4z.C9D;H4z.G1h(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(H4z.j1h(i,logPriceTick));price=Math.pow(D6K,logPrice);}
else{if(isAChart)price=low+H4z.b1h(i,yAxis.priceTick)+priceOffset;else price=H4z.V1h(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+l13;if(H4z.h8h((y2+fontHeight/H4z.A9D),panel.bottom))continue;if(H4z.r8h((y2-fontHeight/H4z.A9D),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",H4z.k8h(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,H33,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:H33,textXPosition=edgeOfAxis+tickWidth+H4z.f9D;if(H4z.O8h(position,S4K)){textXPosition=yAxis.left+H4z.f9D;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(V53,price,textXPosition,y2,backgroundColor,H33,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+l13;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,G8K);}
}
this.plotYAxisGrid(panel);}
this.runAppend(O83,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var Q33="00",Y6K="hed",O13="ion",M13="et",s03="P",X43="aw",x33="ll",G83="strok",F8K="Axi",a83="Y",I03="raw";if(this.runPrepend((r23+I03+a83+F8K+R73),arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(H4z.t8h(panel.name,chart.name)&&H4z.s8h(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=H4z.J8h(parameters.range[1],parameters.range[0]);}
var verticalTicks=H4z.A8h(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid",(G83+f23),this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text",(C0K+t0K+x33),this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(H4z.Y8h(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(H4z.X8h(this.axisBorders,false))drawBorders=false;if(H4z.q8h(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(H4z.B8h(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(H4z.y8h(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(H4z.G8h(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;H4z.j8h(z,100);z++){inc=H4z.b8h(increments[p],Math.pow(10,pow));n=Math.floor(H4z.V8h(shadow,inc));var newDiff=Math.abs(H4z.z5h(verticalTicks,n));if(H4z.M5h(newDiff,diff)){break;}
else{diff=newDiff;}
if(H4z.i5h(n,verticalTicks)){closest=inc;break;}
else if(H4z.d5h(n,verticalTicks)){p++;if(H4z.U5h(p,l)){p=0;pow++;}
}
else{p--;if(H4z.K5h(p,0)){p=H4z.a5h(l,1);pow--;}
}
closest=inc;}
var lowLabel=H4z.D5h(Math.ceil(low/closest),closest),lowPixelSize=H4z.L5h(yAxis.bottom,this.pixelFromPrice(lowLabel,panel,yAxis)),closestInc=0;if(H4z.u5h(lowPixelSize,yAxis.idealTickSizePixels)&&yAxis.semiLog&&yAxis.prettySemiLog){var divisor;for(divisor=Math.ceil(low);H4z.Q5h(divisor,lowLabel)&&H4z.p5h(lowLabel%divisor,0);++divisor);if(H4z.T5h(divisor,lowLabel)){if(H4z.R5h(lowLabel,closest)){closest=divisor;closestInc=divisor;}
lowLabel=divisor;}
}
var i=0;for(var zz=0;H4z.w5h(zz,100);zz++){var price=lowLabel+H4z.v5h(i,closest);if(H4z.o5h(price,high))break;closest+=closestInc;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(H4z.c5h((y2+fontHeight/2),panel.bottom))continue;if(H4z.x7h((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",H4z.e7h(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(H4z.W7h(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(H4z.m7h(zz,100)){console.log((r23+X73+X43+a83+F8K+R73+s03+X73+M13+x73+o1K+W2K+b63+R73+R73+f23+Q2K+O13+p23+f23+X73+t3D+y4K+E1K+E1K+p23+X73+f23+b63+D23+Y6K+p23+y93+Q33));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var x4K="plotYAxisGrid";if(this.runPrepend(x4K,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,x6K);this.runAppend(x4K,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var Z93="ti",d33="hab",y0K="lp";if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;H4z.N7h(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline=(b63+y0K+d33+f23+Z93+D23);context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(H4z.n7h(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&H4z.f7h(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&H4z.Z7h(decimalPlaces,0)){if(H4z.C7h(yax.priceTick,0.01))decimalPlaces=4;else if(H4z.H7h(yax.priceTick,0.1))decimalPlaces=2;else if(H4z.E7h(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(H4z.S7h(panel.name,panel.chart.name)){if(H4z.l7h(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(H4z.F7h(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=H4z.I7h(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&H4z.P7h(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&H4z.g7h(decimalPlaces,0)){return price;}
if(this.internationalizer){if(H4z.h9h(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=H4z.r9h(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var J03="createCrosshairs",q2K="irs",Z63="Cro",I3D="at";if(this.runPrepend((b43+f23+I3D+f23+Z63+v63+g33+b63+q2K),arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return G2K;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return G2K;}
;this.runAppend(J03,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;H4z.k9h(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;H4z.O9h(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;H4z.t9h(v,f.length);v++){var val=f[v];if(val||H4z.s9h(val,0)){if(sum){acc+=val;if(H4z.J9h(acc,highValue))highValue=acc;if(H4z.A9h(acc,lowValue))lowValue=acc;}
else{if(H4z.Y9h(val,highValue))highValue=val;if(H4z.X9h(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(H4z.q9h(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(H4z.B9h(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;this.adjustYAxisHeightOffset(panel,yAxis);yAxis.top=panel.top;yAxis.height=H4z.y9h(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(H4z.G9h(cheight,5)));if(H4z.j9h(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(H4z.b9h(cheight,verticalPad))*(H4z.V9h(yAxis.scroll,0)?-1:1);}
var pricePerPix=H4z.z3h((high-low),yAxis.height);if(low||H4z.M3h(low,0)){if(H4z.i3h(high-low,0)){newHigh=H4z.d3h(high,2);newLow=0;}
else{if((this.layout.semiLog||H4z.U3h(this.layout.chartScale,"log"))&&newHigh){var logLow=H4z.K3h(Math.log(low),Math.LN10),logHigh=H4z.a3h(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||H4z.D3h(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||H4z.L3h(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=H4z.u3h(yAxis.high,yAxis.low);if(H4z.Q3h(panel.chart.name,panel.name)&&H4z.p3h(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||H4z.T3h(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(H4z.R3h(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){var l73="YAx",J6K="ren";if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;H4z.w3h(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(H4z.v3h(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;H4z.o3h(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend((J6K+i1K+X73+l73+C2K),arguments);}
;STXChart.prototype.initializeDisplay=function(chart){if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(H4z.c3h((chart.width-this.micropixels),this.layout.candleWidth));if(H4z.x0W(chart.scroll,chart.maxTicks)&&H4z.e0W(chart.maxTicks,ticksOnScreen+1))length=H4z.W0W(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(H4z.m0W(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(H4z.N0W(base,minMax[0]),H4z.n0W(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=H4z.f0W(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==l9D)offset=H4z.C9D;var position=H4z.Z0W(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(H4z.C0W(open,close))return i9D;if(H4z.H0W(open,close))return i3D;return C33;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return H4z.E0W(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var e3D=7072906,Q23="pacit",P1K="ace",r4K="tr",g93="x_",X23=5657118,d43=1422564843,C23=((0x77,121)>=(0x3F,121.10E1)?(24.1E1,0x1AA):(9.08E2,63.1E1)<=(64.,110.7E1)?(0x8B,1132897623):(61.7E1,0x10));var A7D=C23,Z7D=-d43,D7D=H4z.A9D;for(var f7D=H4z.Y9D;H4z.F5D.w5D(f7D.toString(),f7D.toString().length,X23)!==A7D;f7D++){this.setStyle((R73+x73+g93+S63+b63+R73+f23+i93+Q93+f23+D13+r4K+P1K),(F93+Q23+o1K),H4z.C9D);this.stx.draw();context.moveTo(firstX,y0);descResults.push(STX.clone(container.records[entry.index]));D7D+=H4z.A9D;}
if(H4z.F5D.w5D(D7D.toString(),D7D.toString().length,e3D)!==Z7D){return ;}
var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.setMarket=function(marketDefinition,chart){if(!chart)chart=this.chart;chart.market=new STX.Market(marketDefinition);for(var session in this.layout.marketSessions){chart.market.disableSession(session,this.layout.marketSessions[session]);}
}
;STXChart.prototype.setMarketFactory=function(factory){this.marketFactory=factory;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(H4z.S0W(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var b4K="labl";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(H4z.l0W(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;H4z.F0W(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;var histMax=0,histMin=0;for(var i=0;H4z.I0W(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;H4z.P0W(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(H4z.g0W(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=prices[seriesParams[sp].field];if(H4z.h4W(total,histMax))histMax=total;if(H4z.r4W(total,histMin))histMin=total;}
}
}
if(!params.bindToYAxis){if(H4z.k4W(histMax,0)&&H4z.O4W(histMin,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+(p23+F3D+y63+p23+s2K+j8K+b63+t0K+b4K+f23)));return ;}
multiplier=H4z.t4W((b-t),params.heightPercentage,(histMax-histMin));}
var offset=0.5;if(H4z.n4W(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,H4z.f4W((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(H4z.L4W(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;H4z.u4W(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(H4z.Q4W(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=H4z.p4W((quote[field]-histMin),multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(H4z.T4W(i,0))farLeft=prevRight=Math.floor(H4z.R4W(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(H4z.w4W(bottom,y))+0.5,bottom);if(isUp){if(H4z.v4W(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(H4z.o4W(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=H4z.c4W(myCandleWidth,self.layout.candleWidth),start=prevRight+H4z.x6W((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=H4z.e6W(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(H4z.W6W(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(H4z.m6W(x0%1,roundPixel))x0+=0.5;if(H4z.N6W(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(H4z.n6W(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(H4z.f6W(tops[i],top)||H4z.Z6W(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&H4z.C6W(type,"clustered")){if(H4z.H6W(i,0)&&tops[H4z.E6W(i,1)]&&H4z.S6W(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[H4z.l6W(i,1)]));}
else if(isBorder&&!shaveOff){if(H4z.F6W(prevTop,top)||H4z.I6W(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(H4z.P6W(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=H4z.g6W(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=H4z.h2W(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;H4z.r2W(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=H4z.k2W(this.layout.candleWidth,params.widthFactor);var shift=0;if(H4z.O2W(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(H4z.t2W(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(H4z.s2W(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(H4z.J2W(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){var H2K="ber",h33="nu";context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=H4z.A2W(self.layout.candleWidth,widthFactor),xc=Math.floor(H4z.Y2W(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;H4z.X2W(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(H4z.q2W(x,0)){xc+=self.layout.candleWidth;}
else{xc+=H4z.B2W((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=H4z.y2W(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=H4z.G2W(xc,myCandleWidth/2,myoffset);x1=xc+H4z.I2W(myCandleWidth,2)-myoffset;if(H4z.P2W(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues==(h33+i33+H2K))cellValues=[cellValues];for(var i=0;H4z.g2W(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(H4z.h1W(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=H4z.r1W(v1,v);halfHeight=H4z.k1W(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=H4z.O1W(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,H4z.t1W(v,halfHeight),H4z.s1W(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;H4z.J1W(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&H4z.A1W(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var d4K="volum",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=H4z.Y1W(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=H4z.X1W(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=H4z.q1W(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;H4z.T1W(x,quotes.length);x++){xbase+=H4z.R1W(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=H4z.w1W(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=H4z.v1W((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(H4z.o1W(this.layout.chartType,(d4K+f23+D13+D23+K0K)))whitespace=H4z.c1W(candleWidth,2);}
if(H4z.x8W(quote.Open,quote.Close))continue;if(H4z.e8W(condition,STXChart.CANDLEUP)&&H4z.W8W(quote.Open,quote.Close))continue;if(H4z.m8W(condition,STXChart.CANDLEDOWN)&&H4z.N8W(quote.Open,quote.Close))continue;if(H4z.n8W(condition,STXChart.CLOSEUP)&&H4z.f8W(quote.Close,quote.iqPrevClose))continue;if(H4z.Z8W(condition,STXChart.CLOSEDOWN)&&H4z.C8W(quote.Close,quote.iqPrevClose))continue;if(H4z.H8W(condition,STXChart.CLOSEEVEN)&&H4z.E8W(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.S8W(tick,panel.cacheLeft)||H4z.l8W(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.F8W((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.I8W((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(H4z.P8W(bottom,top));if(H4z.g8W(top,t)){if(H4z.h5W(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=H4z.r5W(t,top);top=t;}
if(H4z.k5W(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(H4z.O5W(cache.open,b))continue;if(H4z.t5W(cache.close,t))continue;var flr_xbase=Math.floor(xbase)+0.5,xstart=Math.floor(H4z.s5W(flr_xbase,whitespace))+borderOffset,xend=H4z.J5W(Math.round(flr_xbase+whitespace),borderOffset);if(H4z.A5W(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var v4K="spa",e83="tra",z53="ume",a9D="vol",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=H4z.Y5W(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=H4z.X5W(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=H4z.q5W(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;H4z.T5W(x,quotes.length);x++){xbase+=H4z.R5W(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=H4z.w5W(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=H4z.v5W((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(H4z.o5W(this.layout.chartType,(a9D+z53+D13+D23+V7D+r23+O73)))whitespace=H4z.c5W(candleWidth,2);}
if(!quote.Open&&H4z.x7W(quote.Open,0))continue;if(H4z.e7W(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.W7W(tick,panel.cacheLeft)||H4z.m7W(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.N7W((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.n7W((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(H4z.f7W(bottom,top));if(H4z.Z7W(top,t)){if(H4z.C7W(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=H4z.H7W(t,top);top=t;}
if(H4z.E7W(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(H4z.S7W(cache.open,b))continue;if(H4z.l7W(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(H4z.F7W(flr_xbase,whitespace))+borderOffset,xend=H4z.I7W(Math.round(flr_xbase+whitespace),borderOffset);if(H4z.P7W(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(H4z.g7W(fillColor,(e83+Q93+v4K+X73+C1K)))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=H4z.h9W(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=H4z.r9W(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;H4z.d9W(x,quotes.length);x++){xbase+=H4z.U9W(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=H4z.K9W(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=H4z.a9W((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(H4z.D9W(condition,STXChart.CANDLEUP)&&H4z.L9W(quote.Open,quote.Close))continue;else if(H4z.u9W(condition,STXChart.CANDLEDOWN)&&H4z.Q9W(quote.Open,quote.Close))continue;else if(H4z.p9W(condition,STXChart.CLOSEUP)&&H4z.T9W(quote.Close,quote.iqPrevClose))continue;else if(H4z.R9W(condition,STXChart.CLOSEDOWN)&&H4z.w9W(quote.Close,quote.iqPrevClose))continue;else if(H4z.v9W(condition,STXChart.CLOSEEVEN)&&H4z.o9W(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.c9W(tick,panel.cacheLeft)||H4z.x3W(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(H4z.e3W((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(H4z.W3W((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=H4z.m3W(bottom,top);if(H4z.N3W(top,t)){if(H4z.n3W(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=H4z.f3W(t,top);top=t;}
if(H4z.Z3W(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(H4z.C3W(cache.top,b))continue;if(H4z.H3W(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(H4z.E3W(quote.Open,quote.Close)){var offset=this.offset;if(H4z.S3W(this.layout.chartType,"volume_candle")){offset=H4z.l3W(candleWidth,2);}
var x0=H4z.F3W(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.I3W((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(H4z.P3W(o,b)&&H4z.g3W(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=H4z.h0H(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=H4z.r0H(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;H4z.d0H(x,quotes.length);x++){xbase+=H4z.U0H(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=H4z.K0H(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=H4z.a0H((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.D0H(tick,panel.cacheLeft)||H4z.L0H(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(H4z.u0H((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(H4z.Q0H((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=H4z.p0H(bottom,top);if(H4z.T0H(top,t)){if(H4z.R0H(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=H4z.w0H(t,top);top=t;}
if(H4z.v0H(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(H4z.o0H(cache.top,b))continue;if(H4z.c0H(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(H4z.x4H(quote.Open,quote.Close)||(!quote.Open&&H4z.e4H(quote.Open,0))){var offset=this.offset;if(H4z.W4H(this.layout.chartType,"volume_candle")){offset=H4z.m4H(candleWidth,2);}
var x0=H4z.N4H(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.n4H((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(H4z.f4H(o,b)&&H4z.Z4H(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=H4z.C4H(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;H4z.q4H(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(H4z.B4H("Scatter",quote))scatter=quote.Scatter;for(var i=0;H4z.y4H(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(H4z.G4H(top,t))continue;if(H4z.j4H(top,b))continue;context.moveTo(H4z.b4H(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&H4z.V4H(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&H4z.z6H(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=H4z.M6H(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=H4z.i6H(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;H4z.m6H(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.N6H(tick,panel.cacheLeft)||H4z.n6H(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.f6H((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.Z6H((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(H4z.C6H(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&H4z.H6H(cache.close,previousOpen)&&H4z.E6H(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(H4z.S6H(trend,1)&&H4z.l6H(cache.close,previousOpen)&&H4z.F6H(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(H4z.I6H(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(H4z.P6H(trend,null)&&H4z.g6H(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&H4z.h2H(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=H4z.r2H(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=H4z.k2H(panel.left,candleWidth,this.micropixels,1);for(var x=0;H4z.U2H(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(H4z.K2H(condition,"X")&&H4z.a2H(quote.Open,quote.Close))continue;else if(H4z.D2H(condition,"O")&&H4z.L2H(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(H4z.u2H(tick,panel.cacheLeft)||H4z.Q2H(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.p2H((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.T2H((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(H4z.R2H((quote.Close-quote.Open),box)));height=Math.abs(H4z.w2H((cache.open-cache.close),boxes));var voffset=H4z.v2H(height,2);start=cache.open;for(;H4z.o2H(boxes,0);boxes--){if(H4z.c2H(condition,"X")){context.moveTo(xxl+paddingLeft,H4z.x1H(start,paddingBottom,voffset));context.lineTo(H4z.i1H(xxr,paddingRight),H4z.d1H(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,H4z.N1H(start,height,paddingTop,voffset));context.lineTo(H4z.J1H(xxr,paddingRight),H4z.A1H(start,paddingBottom,voffset));start-=height;}
else if(H4z.C1H(condition,"O")){context.moveTo(H4z.H1H((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,H4z.E1H((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(H4z.S1H(xxl,paddingLeft),start+height-paddingBottom-voffset,H4z.l1H(xxl,paddingLeft),start+paddingTop-voffset,H4z.F1H((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&H4z.I1H(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=H4z.P1H(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=H4z.g1H(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=H4z.M8H(chart.tmpWidth,2),voffset=H4z.i8H(context.lineWidth,2);for(var x=0;H4z.d8H(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(H4z.U8H(condition,STXChart.CLOSEUP)&&H4z.K8H(quote.Close,quote.iqPrevClose))continue;else if(H4z.a8H(condition,STXChart.CLOSEDOWN)&&H4z.D8H(quote.Close,quote.iqPrevClose))continue;else if(H4z.L8H(condition,STXChart.CLOSEEVEN)&&H4z.u8H(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.Q8H(tick,panel.cacheLeft)||H4z.p8H(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(H4z.T8H((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(H4z.R8H((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=H4z.w8H(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.v8H((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.o8H((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(H4z.c8H(top,t)){if(H4z.x5H(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=H4z.e5H(t,top);top=t;}
if(H4z.W5H(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(H4z.m5H(cache.top,b)&&H4z.N5H(cache.bottom,t)){context.moveTo(xx,H4z.n5H(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(H4z.f5H(cache.open,t)&&H4z.Z5H(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(H4z.C5H(xx,hlen),cache.open);}
if(H4z.H5H(cache.close,t)&&H4z.E5H(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&H4z.S5H(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=H4z.l5H(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=H4z.F5H(chart.tmpWidth,2),voffset=H4z.I5H(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=H4z.P5H(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;H4z.z7H(x,quotes.length);x++){xbase+=H4z.M7H(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=H4z.i7H(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=H4z.d7H((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(H4z.U7H(tick,panel.cacheLeft)||H4z.K7H(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=H4z.a7H(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(H4z.D7H((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(H4z.L7H((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(H4z.u7H(top,t)){if(H4z.Q7H(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=H4z.p7H(t,top);top=t;}
if(H4z.T7H(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(H4z.R7H(cache.top,b)&&H4z.w7H(cache.bottom,t)){context.moveTo(xx,H4z.v7H(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(H4z.o7H(cache.open,t)&&H4z.c7H(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(H4z.x9H(xx,hlen),cache.open);}
if(H4z.e9H(cache.close,t)&&H4z.W9H(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=H4z.m9H(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=H4z.N9H(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;H4z.J9H(i,quotes.length);i++){xbase+=H4z.A9H(candleWidth,2);if(parameters.noSlopes)xbase+=H4z.Y9H(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=H4z.X9H(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=H4z.q9H((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&H4z.B9H(quote[field],0))continue;if(H4z.y9H(tick,panel.cacheLeft)||H4z.G9H(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(H4z.j9H((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(H4z.b9H(x,panel.right))lastQuote=quote;if(H4z.V9H(i,quotes.length-1)){if(this.extendLastTick)x+=H4z.z3H(candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(H4z.M3H(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||H4z.i3H(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(H4z.d3H(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(H4z.U3H((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=H4z.K3H(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[H4z.a3H(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(H4z.D3H(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(H4z.L3H(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=H4z.u3H(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],H4z.Q3H(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=H4z.p3H(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;H4z.T3H(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(H4z.R3H(tick,panel.cacheLeft)||H4z.w3H(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&H4z.v3H(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(H4z.o3H((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+H4z.c3H((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(H4z.x0Q(i,quotes.length-1)){if(this.extendLastTick)x+=H4z.e0Q(this.layout.candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(H4z.W0Q(firstX,null))firstX=H4z.m0Q(leftTick,0)?0:x;var y=cache[field];if(H4z.N0Q(firstY,null))firstY=y;if(first){first=false;if(H4z.n0Q(leftTick,0)){context.moveTo(firstX,y);if(tension){points.push(firstX,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(H4z.f0Q((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=H4z.Z0Q(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(H4z.C0Q(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(H4z.H0Q(firstY,t))firstY=t;}
else{if(H4z.E0Q(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&H4z.S0Q(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel,style,colorFunction){var T83="Cl",context=this.chart.context;if(!style)style="stx_mountain_chart";var c=this.canvasStyle(style);if(c.width&&H4z.l0Q(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&!STX.isTransparent(color)){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var padding=parseInt(c.padding,10),strokeStyle=c.borderTopColor,rc=null;if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){if(!this.scratchContext){var scratchCanvas=context.canvas.cloneNode(true);this.scratchContext=scratchCanvas.getContext("2d");this.scratchContext.canvas=scratchCanvas;}
this.scratchContext.canvas.height=context.canvas.height;this.scratchContext.canvas.width=context.canvas.width;this.scratchContext.drawImage(context.canvas,0,0);context.clearRect(0,0,context.canvas.width,context.canvas.height);}
}
this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){context.save();context.lineWidth+=H4z.F0Q(2,padding);context.globalCompositeOperation="destination-out";this.plotLineChart(panel,panel.chart.dataSegment,(T83+F93+b3D),params);context.globalCompositeOperation="destination-over";context.scale(H4z.I0Q(1,this.adjustedDisplayPixelRatio),H4z.P0Q(1,this.adjustedDisplayPixelRatio));context.drawImage(this.scratchContext.canvas,0,0);context.restore();}
context.strokeStyle=strokeStyle;rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);}
context.lineWidth=1;return rc;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;H4z.g0Q(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=H4z.h4Q(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(H4z.r4Q(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(H4z.k4Q(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=H4z.O4Q(chart.dataSet.length,chart.scroll);if(H4z.t4Q(leftTick,0)){context.moveTo(x,y);}
else if(H4z.s4Q(leftTick,0)){var baseline=chart.dataSet[H4z.J4Q(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(H4z.A4Q((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+H4z.Y4Q((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=H4z.X4Q(this.layout.candleWidth,4);if(H4z.q4Q(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(H4z.B4Q(y,t))y=t;if(H4z.y4Q(y,b))y=b;context.lineTo(x,y);x+=H4z.G4Q(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(H4z.j4Q(y,t))y=t;if(H4z.b4Q(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(H4z.V4Q(y,t))y=t;if(H4z.z6Q(y,b))y=b;context.lineTo(x,y);x+=H4z.M6Q(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(H4z.i6Q(y,t))y=t;if(H4z.d6Q(y,b))y=b;context.lineTo(x,y);}
x+=H4z.U6Q(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(H4z.K6Q(y,t))y=t;if(H4z.a6Q(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&H4z.D6Q(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS),cy=this.crossYActualPos?this.crossYActualPos:this.cy;if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(H4z.L6Q(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(H4z.u6Q(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;H4z.Q6Q(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||H4z.p6Q(panel.min,0))&&H4z.T6Q(price,panel.min))continue;if((panel.max||H4z.R6Q(panel.max,0))&&H4z.w6Q(price,panel.max))continue;var labelDecimalPlaces=null;if(H4z.v6Q(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(H4z.o6Q(yAxis.shadow,1000))labelDecimalPlaces=2;if(H4z.c6Q(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||H4z.x2Q(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var D63="headsUpHR";if(this.runPrepend(D63,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=p23+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+H4z.Y9D;if(H4z.e2Q(m,D6K))m=L93+m;var d=prices.DT.getDate();if(H4z.W2Q(d,D6K))d=L93+d;var h=prices.DT.getHours();if(H4z.m2Q(h,D6K))h=L93+h;var mn=prices.DT.getMinutes();if(H4z.N2Q(mn,D6K))mn=L93+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+B73+d+B73+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+B73+d+p23+h+x8K+mn;var isSecond=(chart.xAxis.activeTimeUnit&&H4z.n2Q(chart.xAxis.activeTimeUnit,STX.SECOND))||H4z.f2Q(this.layout.timeUnit,T4K),isMS=(chart.xAxis.activeTimeUnit&&H4z.Z2Q(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||H4z.C2Q(this.layout.timeUnit,B4K);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(H4z.H2Q(sec,D6K))sec=L93+sec;this.controls.floatDate.innerHTML+=(x8K+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(H4z.E2Q(mil,D6K))mil=L93+mil;if(H4z.S2Q(mil,Z1K))mil=L93+mil;this.controls.floatDate.innerHTML+=(x8K+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=P53;}
}
this.runAppend(D63,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var Z73="igh";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((H4z.l2Q(this.currentVectorParameters.vectorType,"annotation")||H4z.F2Q(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(H4z.I2Q(this.currentVectorParameters.vectorType,"projection"))return ;if(H4z.P2Q(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(H4z.g2Q(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(H4z.h1Q(STXChart.crosshairX,this.left),chart);if(H4z.r1Q(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(H4z.k1Q(this.layout.chartType,"bar")||H4z.O1Q(this.layout.chartType,"candle")||H4z.t1Q(this.layout.chartType,"colored_bar")||H4z.s1Q(this.layout.chartType,"hollow_candle")||H4z.J1Q(this.layout.chartType,"volume_candle")){var fields=["Open",(a63+Z73),"Low",(B6K+P93+F93+R73+f23)],closest=1000000000;for(var i=0;H4z.A1Q(i,fields.length);i++){var fp=prices[fields[i]];if(H4z.Y1Q(Math.abs(price-fp),closest)){closest=Math.abs(H4z.X1Q(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=H4z.q1Q(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,H4z.B1Q(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(H4z.y1Q(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var l3D="doDisplayCrosshairs";if(this.runPrepend(l3D,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(H4z.G1Q(this.currentVectorParameters.vectorType,P53)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(H4z.j1Q(this.controls.crossX.style.display,P53)){this.controls.crossX.style.display=P53;this.controls.crossY.style.display=P53;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,k83);}
else{STX.appendClassName(this.container,k83);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=U43;}
}
}
this.runAppend(l3D,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var z03="undisplayCrosshairs";if(this.runPrepend(z03,arguments))return ;if(this.controls.crossX){if(H4z.b1Q(this.controls.crossX.style.display,a1K)){this.controls.crossX.style.display=a1K;this.controls.crossY.style.display=a1K;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=a1K;}
STX.unappendClassName(this.container,k83);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(z03,arguments);}
;STXChart.prototype.modalBegin=function(){var V13="modal";this.openDialog=V13;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=B33;this.openDialog=P53;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var k03="updateChartAccessories";if(this.runPrepend(k03,arguments))return ;this.accessoryTimer=H33;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart),bottom=H4z.V1Q(this.xAxisAsFooter,B33)?H4z.C9D:H4z.z8Q(this.chart.canvasHeight,panel.chart.bottom);floatDate.style.left=(H4z.M8Q(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/H4z.A9D),l13))+X6K;floatDate.style.bottom=bottom+X6K;}
}
this.headsUpHR();this.runAppend(k03,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(Z13,arguments))return ;if(!this.displayInitialized)return ;if(H4z.k8Q(this.openDialog,P53))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(Z13,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(H4z.O8Q(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||H4z.t8Q(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;if(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;H4z.s8Q(i,arr.length);i++){var yAxis=arr[i];if(H4z.J8Q(yAxis.left,x)&&H4z.A8Q(yAxis.left+yAxis.width,x))return yAxis;}
}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(H4z.Y8Q(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||H4z.X8Q(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
var value;if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cancelLongHold=true;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.crossYActualPos=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);value=this.valueFromPixel(cy,this.currentPanel);var chField=H4z.q8Q(this.currentPanel.name,"chart")?this.preferences.horizontalCrosshairField:this.currentPanel.horizontalCrosshairField;if(chField&&H4z.B8Q(this.crosshairTick,chart.dataSet.length)&&this.crosshairTick>-1){value=chart.dataSet[this.crosshairTick][chField];this.crossYActualPos=this.pixelFromPriceTransform(value,this.currentPanel);}
this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,value);}
if(H4z.y8Q(STXChart.crosshairX,this.left)&&H4z.G8Q(STXChart.crosshairX,this.right)&&H4z.j8Q(STXChart.crosshairY,this.top)&&H4z.b8Q(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=H4z.V8Q(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&H4z.z5Q(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(H4z.M5Q(this.cx,this.currentPanel.right)||H4z.i5Q(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(H4z.d5Q(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=H4z.U5Q(STXChart.crosshairX,this.grabStartX),dy=H4z.K5Q(STXChart.crosshairY,this.grabStartY);if(H4z.a5Q(dx,0)&&H4z.D5Q(dy,0))return ;if(H4z.L5Q(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&H4z.u5Q(this.grabMode,"pan")&&(H4z.Q5Q(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(H4z.p5Q(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(H4z.T5Q(this.grabMode,"zoom-x"))dy=0;else if(H4z.R5Q(this.grabMode,"zoom-y"))dx=0;push=H4z.w5Q(dx,25);var centerMe=true;if(H4z.v5Q(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(H4z.o5Q(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=H4z.c5Q((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(H4z.x7Q(pct,0.1)){newCandleWidth=H4z.e7Q(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=H4z.W7Q(this.layout.candleWidth,1.1);}
if(STX.ipad){if(H4z.m7Q(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&H4z.N7Q(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((H4z.n7Q(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(H4z.f7Q((this.chart.width/newCandleWidth),0.499));if(H4z.Z7Q(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(H4z.C7Q((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(H4z.H7Q((this.chart.width/newCandleWidth),0.499));if(H4z.E7Q(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(H4z.S7Q(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=H4z.l7Q(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(H4z.F7Q(this.grabStartZoom,yAxis.height)){if(H4z.I7Q(yAxis.zoom,yAxis.height))yAxis.zoom=H4z.P7Q(yAxis.height,1);}
else{if(H4z.g7Q(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(H4z.h9Q(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(H4z.r9Q(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(H4z.k9Q(dx,this.layout.candleWidth));this.microscroll=H4z.O9Q(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(H4z.t9Q(chart.scroll,1))chart.scroll=1;if(H4z.s9Q(chart.scroll,chart.maxTicks)){this.preferences.whitespace=this.initialWhitespace;}
else{this.preferences.whitespace=H4z.J9Q((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(H4z.A9Q(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
this.dispatch("move",{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){window.requestAnimationFrame(clsrFunc(this));}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;this.controls.crossX.style.left=(H4z.Y9Q(this.pixelFromTick(this.crosshairTick,chart),0.5))+"px";this.controls.crossY.style.top=this.crossYActualPos+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(H4z.X9Q(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(H4z.q9Q(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&H4z.B9Q(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&H4z.y9Q(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){this.dispatch((i33+x13+f23),{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var e2K="dra",radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&!this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,(e2K+L8K+f63)],box={x0:this.tickFromPixel(H4z.G9Q(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(H4z.j9Q(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;H4z.b9Q(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(H4z.V9Q(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(H4z.z3Q(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(H4z.M3Q(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;H4z.i3Q(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(H4z.d3Q(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(H4z.U3Q(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(H4z.K3Q(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(H4z.a3Q(cy-radius,y)&&H4z.D3Q(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
if(o.highlight)break;}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;H4z.L3Q(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field]&&renderer.caches[series.field][bar];if(!y&&H4z.u3Q(y,0))continue;if(H4z.Q3Q(cy-radius,y)&&H4z.p3Q(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((H4z.T3Q(renderer.params.subtype,"step")||H4z.R3Q(series.type,"step"))&&H4z.w3Q(bar,0)){var py=renderer.caches[series.field]&&renderer.caches[series.field][H4z.v3Q(bar,1)];if((py||H4z.o3Q(py,0))&&(H4z.c3Q(cy,y)&&H4z.x0n(cy,py))||(H4z.e0n(cy,y)&&H4z.W0n(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(H4z.m0n(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;H4z.N0n(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(H4z.n0n(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(H4z.f0n(this.cy,m.offsetHeight,K2K),H4z.C9D),right=Math.min(H4z.L0n(this.chart.canvasWidth,(this.cx-Y2K)),H4z.u0n(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+X6K;m.style.right=right+X6K;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var X0K="no",L1K="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[H4z.C9D];if(!mi)return ;var overlayTrashCan=m.children[H4z.Y9D].children[H4z.C9D],mouseDeleteInstructions=m.children[H4z.Y9D].children[H4z.Y9D];if(!forceShow&&!message){mi.innerHTML=P53;m.style.display=a1K;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=a1K;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=(a1K);}
}
else{if(!message)message=P53;if(forceShow&&!message){mi.style.backgroundColor=P53;mi.style.color=P53;mi.style.display=a1K;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=J23;}
else{mi.style.backgroundColor=P53;mi.style.color=P53;mi.style.display=J23;}
mi.innerHTML=message;if(type)m.children[H4z.Y9D].className=L1K+type;m.style.display=J23;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=(X0K+p2K);mouseDeleteInstructions.style.display=a1K;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=J23;mouseDeleteInstructions.style.display=a1K;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=(S63+n13+E33);}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var W13="su",W63="Mea",W93="measureLit",W83="Bar",W53="setMeasure";if(this.runPrepend(W53,arguments))return ;var m=$$(U2K),message=P53;if(!price1){if(m&&H4z.Q0n(m.className,B13))m.className=B13;if(!this.anyHighlighted&&H4z.p0n(this.currentVectorParameters.vectorType,P53))this.clearMeasure();}
else{var distance=H4z.T0n(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=H4z.R0n((price2-price1),price1);if(H4z.w0n(Math.abs(pct),I13)){pct=Math.round(H4z.v0n(pct,Z1K));}
else if(H4z.o0n(Math.abs(pct),I9D)){pct=H4z.c0n(Math.round(pct*m1K),D6K);}
else{pct=H4z.x4n(Math.round(pct*M1K),Z1K);}
if(this.internationalizer){pct=this.internationalizer.percent.format(H4z.e4n(pct,Z1K));}
else{pct=pct+l33;}
message+=h63+pct+w0K;var ticks=Math.abs(H4z.W4n(tick2,tick1));ticks=Math.round(ticks)+H4z.Y9D;var barsStr=this.translateIf((W83+R73));message+=p23+ticks+p23+barsStr;if(m){if(H4z.m4n(m.className,W93))m.className=W93;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=J23;m.children[H4z.C9D].style.display=J23;if(price1){m.children[H4z.C9D].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=a1K;m.children[H4z.C9D].innerHTML=P53;}
}
this.runAppend((R73+f23+x73+W63+W13+T33),arguments);}
;STXChart.prototype.clearMeasure=function(){var t53="U",g43="ure",u6K="mea",m=$$(U2K);if(m){if(H4z.N4n(m.className,B13))m.className=(u6K+R73+g43+t53+Q93+P93+t0K+x73);m.innerHTML=P53;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var P6K="stx_panel_drag",borderEdge=Math.round(H4z.n4n(STXChart.resizingPanel.right,H4z.f9D))+l13;STX.clearCanvas(this.chart.tempCanvas,this);var y=H4z.f4n(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(P6K),X3D,this.chart.tempCanvas.context,G2K,{}
);STXChart.resizingPanel.handle.style.top=(H4z.Z4n(y,STXChart.resizingPanel.handle.offsetHeight/H4z.A9D))+(X6K);}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=J23;m.children[H4z.C9D].style.display=a1K;m.children[H4z.Y9D].style.display=J23;if(m.children[H4z.A9D])m.children[H4z.A9D].style.display=a1K;m.style.top=(H4z.C4n(this.backOutY(STXChart.crosshairY),K2K))+X6K;m.style.right=H4z.H4n(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-Y2K),X6K);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=H4z.C9D;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=H4z.p4n((bar+l13),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-H4z.Y9D;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(H4z.T4n(this.layout.chartType,"volume_candle")){var pixel=H4z.R4n(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(H4z.j4n(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[H4z.b4n(this.chart.dataSegment.length,1)].leftOffset+H4z.V4n(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(H4z.z6n(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(H4z.M6n((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;H4z.i6n(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=H4z.d6n(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+H4z.U6n(this.chart.dataSegment[bar].candleWidth,2);if(H4z.K6n(bar,0)||(H4z.a6n(pixel,left)&&H4z.D6n(pixel,right)))break;else if(H4z.L6n(pixel,left))bar-=Math.max(1,Math.round(H4z.u6n(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(H4z.Q6n(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(H4z.p6n(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;H4z.T6n(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(H4z.R6n(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,H4z.w6n(i,1));else if(H4z.v6n(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(H4z.o6n(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(H4z.c6n((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=H4z.x2n(chart.dataSet.length,chart.scroll,1);if(H4z.i2n(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(H4z.d2n((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=H4z.U2n(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[H4z.n2n(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[H4z.f2n(this.chart.dataSegment.length,1)].leftOffset){if(H4z.Z2n(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=H4z.C2n(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(H4z.H2n((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=H4z.E2n(yax.bottom,y);var price=yax.low+(H4z.S2n(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(H4z.l2n(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(H4z.w2n(y,H4z.C9D)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&H4z.v2n(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=H4z.o2n((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=H4z.c2n(Math.log(p),Math.LN10),height=yax.height;y=H4z.x1n(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(H4z.e1n(a,0)&&H4z.W1n(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(H4z.m1n(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(H4z.N1n(a,0)&&H4z.n1n(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return H4z.f1n(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;H4z.Z1n(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var m73="undo";if(this.runPrepend(m73,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=H33;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,c43,E63);STX.swapClassName(this.controls.crossY,c43,E63);STXChart.drawingLine=G2K;}
this.runAppend(m73,arguments);}
;STXChart.prototype.undoStamp=function(before,after){var U93="undoStamp";this.undoStamps.push(before);this.dispatch(U93,{before:before,after:after}
);}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){var drawings=STX.shallowClone(this.drawingObjects);this.drawingObjects.push(drawing);this.undoStamp(drawings,STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var c93="je",k9D="ob";if(!parameters)parameters={}
;if(H4z.C1n(parameters.pattern,"none"))return ;if(H4z.H1n(confineToPanel,true))confineToPanel=this.chart.panel;if(H4z.E1n(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(H4z.S1n(type,"ray")){bigX=10000000;if(H4z.l1n(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(H4z.F1n(type,"line")||H4z.I1n(type,"horizontal")||H4z.P1n(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=H4z.g1n(x1,x0),ydelta=H4z.h8n(y1,y0),p,q,r;for(var edge=0;H4z.r8n(edge,4);edge++){if(H4z.k8n(edge,0)){p=-xdelta;q=-(H4z.O8n(edgeLeft,x0));}
if(H4z.t8n(edge,1)){p=xdelta;q=(H4z.s8n(edgeRight,x0));}
if(H4z.J8n(edge,2)){p=-ydelta;q=-(H4z.A8n(edgeTop,y0));}
if(H4z.Y8n(edge,3)){p=ydelta;q=(H4z.X8n(edgeBottom,y0));}
r=H4z.q8n(q,p);if((y1||H4z.B8n(y1,0))&&H4z.y8n(p,0)&&H4z.G8n(q,0)){return false;}
if(H4z.j8n(p,0)){if(H4z.b8n(r,t1))return false;else if(H4z.V8n(r,t0))t0=r;}
else if(H4z.z5n(p,0)){if(H4z.M5n(r,t0))return false;else if(H4z.i5n(r,t1))t1=r;}
}
var x0clip=x0+H4z.d5n(t0,xdelta),y0clip=y0+H4z.U5n(t0,ydelta),x1clip=x0+H4z.K5n(t1,xdelta),y1clip=y0+H4z.a5n(t1,ydelta);if(!y1&&H4z.D5n(y1,0)&&!y0&&H4z.L5n(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(H4z.u5n(v.x0,edgeRight))return false;if(H4z.Q5n(v.x0,edgeLeft))return false;}
else if(!y1&&H4z.p5n(y1,0)){if(H4z.T5n(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(H4z.R5n(v.x0,edgeRight))return false;if(H4z.w5n(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)==(k9D+c93+D23+x73)){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||H4z.v5n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(H4z.o5n(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(H4z.c5n(pattern,"solid")){pattern=null;}
else if(H4z.x7n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(H4z.e7n(pattern,"dashed")){pattern=[H4z.W7n(context.lineWidth,5),H4z.m7n(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(H4z.N7n(parameters.pattern,"none"))return ;if(H4z.n7n(confineToPanel,true))confineToPanel=this.chart.panel;if(H4z.f7n(context,null)||typeof (context)=="undefined")context=this.chart.context;if(H4z.Z7n(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||H4z.C7n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(H4z.H7n(pattern,"solid")){pattern=null;}
else if(H4z.E7n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(H4z.S7n(pattern,"dashed")){pattern=[H4z.l7n(context.lineWidth,5),H4z.F7n(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;H4z.I7n(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=H4z.P7n(x1,x0),ydelta=H4z.g7n(y1,y0),p,q,r;for(var edge=0;H4z.h9n(edge,4);edge++){if(H4z.r9n(edge,0)){p=-xdelta;q=-(H4z.k9n(edgeLeft,x0));}
if(H4z.O9n(edge,1)){p=xdelta;q=(H4z.t9n(edgeRight,x0));}
if(H4z.s9n(edge,2)){p=-ydelta;q=-(H4z.J9n(edgeTop,y0));}
if(H4z.A9n(edge,3)){p=ydelta;q=(H4z.Y9n(edgeBottom,y0));}
r=H4z.X9n(q,p);if((y1||H4z.q9n(y1,0))&&H4z.B9n(p,0)&&H4z.y9n(q,0)){return false;}
if(H4z.G9n(p,0)){if(H4z.j9n(r,t1))return false;else if(H4z.b9n(r,t0))t0=r;}
else if(H4z.V9n(p,0)){if(H4z.z3n(r,t0))return false;else if(H4z.M3n(r,t1))t1=r;}
}
var x0clip=x0+H4z.i3n(t0,xdelta),y0clip=y0+H4z.d3n(t0,ydelta),x1clip=x0+H4z.U3n(t1,xdelta),y1clip=y0+H4z.K3n(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(H4z.a3n(parameters.pattern,"none"))return ;if(H4z.D3n(confineToPanel,true))confineToPanel=this.chart.panel;if(H4z.L3n(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||H4z.u3n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(H4z.Q3n(pattern,"solid")){pattern=null;}
else if(H4z.p3n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(H4z.T3n(pattern,"dashed")){pattern=[H4z.R3n(context.lineWidth,5),H4z.w3n(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var C63="drawing",F73="win",q93="hair_dr",o9D="ros",q53="_c";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=H33;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=H33;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=G2K;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=H33;this.adjustDrawings();this.draw();this.changeOccurred(V03);STX.swapClassName(this.controls.crossX,c43,E63);STX.swapClassName(this.controls.crossY,c43,(j93+q53+o9D+R73+q93+b63+F73+R0K));}
}
else{this.changeOccurred(C63);STXChart.drawingLine=B33;STX.swapClassName(this.controls.crossX,E63,c43);STX.swapClassName(this.controls.crossY,E63,c43);}
return B33;}
return G2K;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(H4z.v3n(y,panel.top)&&H4z.o3n(y,panel.bottom))return panel;}
return H33;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(a2K,arguments))return ;this.swipe.end=B33;var longHoldTookEffect=(H4z.c3n(this.cancelLongHold,G2K));this.cancelLongHold=B33;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(H4z.x0Z(Date.now()-this.mouseTimer,u8K))){this.changeOccurred(V03);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=H33;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=G2K;}
}
if(this.repositioningBaseline){this.repositioningBaseline=H33;this.chart.panel.yAxis.scroll=H4z.e0Z(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/H4z.A9D);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=G2K;if(!this.displayInitialized)return ;this.grabbingScreen=G2K;if(H4z.W0Z(this.openDialog,P53)){if(STXChart.insideChart)STX.unappendClassName(this.container,r13);return ;}
if(this.grabOverrideClick){this.swipeRelease();STX.unappendClassName(this.container,r13);this.grabOverrideClick=G2K;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,r13);if(STXChart.resizingPanel){this.releaseHandle({}
);return ;}
if(!e)e=event;if((e.which&&H4z.m0Z(e.which,H4z.A9D))||(e.button&&H4z.N0Z(e.button,H4z.A9D))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault&&this.captureTouchEvents)e.preventDefault();e.stopPropagation();return G2K;}
else{return B33;}
}
if(H4z.n0Z(e.clientX,this.left)||H4z.f0Z(e.clientX,this.right))return ;if(H4z.Z0Z(e.clientY,this.top)||H4z.C0Z(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing&&!longHoldTookEffect){this.dispatch(o3D,{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
this.runAppend((i33+F93+e73+b3D+e73+z93),arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,r13);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(H4z.H0Z(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.mouseTimer=Date.now();this.cancelLongHold=false;this.userPointerDown=true;if(!e)e=event;if((e.which&&H4z.E0Z(e.which,2))||(e.button&&H4z.S0Z(e.button,2))){return ;}
var chart=this.currentPanel.chart;if(H4z.l0Z(e.clientX,this.left)&&H4z.F0Z(e.clientX,this.right)&&H4z.I0Z(e.clientY,this.top)&&H4z.P0Z(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;H4z.g0Z(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if((H4z.h4Z(this.layout.chartType,"baseline_delta")||H4z.r4Z(this.layout.chartType,"baseline_delta_mountain"))&&H4z.k4Z(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(H4z.O4Z(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=H4z.t4Z(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(H4z.s4Z(chart.baseline.actualLevel,y0)&&H4z.J4Z(chart.baseline.actualLevel,y1)&&H4z.A4Z(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.swipeStart(chart);if(this.longHoldTime)this.startLongHoldTimer();this.runAppend("mousedown",arguments);}
;STXChart.prototype.startLongHoldTimer=function(){var stx=this;setTimeout(function(){var l1K="longhold";if(stx.cancelLongHold)return ;stx.dispatch(l1K,{stx:stx,panel:stx.currentPanel,x:stx.cx,y:stx.cy}
);}
,this.longHoldTime);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var U73="rightClickOverlay";if(this.runPrepend(U73,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(U73,arguments);}
;STXChart.prototype.removeOverlay=function(name){var a93="yout",O53="removeOverlay";if(this.runPrepend(O53,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-H4z.Y9D){this.removeOverlay(sd.name);}
else if(H4z.Y4Z(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred((P93+b63+a93));this.runAppend(O53,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(H4z.X4Z("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&H4z.q4Z(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0,c,m;while(parameters.data&&H4z.B4Z(mIterator,stx.masterData.length)&&H4z.y4Z(cIterator,parameters.data.length)){c=parameters.data[cIterator];m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(H4z.G4Z(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(H4z.j4Z(c.DT,m.DT)){if(parameters.forceData){stx.masterData.splice(mIterator,0,{DT:c.DT}
);continue;}
cIterator++;}
else mIterator++;}
if(parameters.forceData&&H4z.b4Z(mIterator,stx.masterData.length)){while(parameters.data&&H4z.V4Z(cIterator,parameters.data.length)){var c=parameters.data[cIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);m={DT:c.DT}
;if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
stx.masterData.push(m);cIterator++;}
}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,parameters.symbolObject,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[H4z.z6Z(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;function handleResponse(dataCallback){if(!dataCallback.error&&H4z.M6Z(dataCallback.error,0)){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(!self.currentlyImporting)self.dispatch("symbolChange",{stx:self,symbol:fetchParams.symbol,symbolObject:fetchParams.symbolObject}
);if(cb)cb(dataCallback.error,obj);self.runAppend("addSeries",arguments);}
;if(fetchParams.stx.isEquationChart(fetchParams.symbol)){STX.fetchEquationChart(fetchParams,handleResponse);}
else{driver.quoteFeed.fetch(fetchParams,handleResponse);}
}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb(null,obj);this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.isEquationChart=function(symbol){var e6K="=";if(!this.allowEquations||!STX.computeEquationChart)return G2K;if(symbol&&H4z.i6Z(symbol[H4z.C9D],e6K))return B33;return G2K;}
;STXChart.prototype.deleteSeries=function(field,chart){var R63="deleteSeries";if(this.runPrepend(R63,arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];if(this.quoteDriver)this.quoteDriver.updateSubscriptions();this.runAppend(R63,arguments);}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=H4z.d6Z(renderer.seriesParams.length,1);H4z.U6Z(sp,0);sp--){var series=renderer.seriesParams[sp];if(!series.permanent&&H4z.K6Z(series.field,field)){renderer.removeSeries(field);}
}
}
this.deleteSeries(field,chart);var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.createDataSet();this.draw();this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var I43="underlay",w73="rendererAction";if(this.runPrepend(w73,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&H4z.a6Z(phase,I43))continue;if(!renderer.params.overChart&&H4z.D6Z(phase,G7D))continue;if(!this.panels[renderer.params.panel])continue;if(H4z.L6Z(this.panels[renderer.params.panel].chart,chart))continue;if(H4z.u6Z(phase,u43)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(w73,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var J3D="ie",i13="lin",w03="ine",z3D="ap";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&H4z.Q6Z(parameters.minimum,0))||(!parameters.maximum&&H4z.p6Z(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&H4z.T6Z(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&H4z.R6Z(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=H4z.w6Z(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=H4z.v6Z(t,1)?(top+t):(top+(H4z.o6Z(height,t)));if(b)bottom=H4z.c6Z(b,1)?(H4z.x2Z(bottom,b)):(H4z.e2Z(bottom,(height*b)));var multiplier=H4z.W2Z((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(H4z.m2Z(parameters.type,"step")||H4z.N2Z(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||H4z.n2Z(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=H4z.f2Z(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;H4z.Y2Z(i,quotes.length);i++){xbase+=H4z.X2Z(cw,2);if(isStep)xbase+=H4z.q2Z(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=H4z.B2Z(cw,2);if(H4z.y2Z(x,null)&&H4z.G2Z(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=H4z.j2Z((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&H4z.b2Z(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(H4z.V2Z(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo((R0K+z3D),x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&H4z.z1Z(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(H4z.M1Z(x,panel.right))lastQuote=quote;if(this.extendLastTick&&H4z.i1Z(i,quotes.length-1))x+=H4z.d1Z(cw,2);if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(P93+w03)),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=H4z.U1Z(bottom,((val-min)*multiplier));}
if(H4z.K1Z(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;H4z.a1Z(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+H4z.D1Z(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[H4z.L1Z(i,1)]&&H4z.u1Z(yValueCache[i-1],0)){for(var bf=H4z.Q1Z(i,1);H4z.p1Z(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[H4z.T1Z(points.length,1)][1];}
}
if(!started){started=true;var leftTick=H4z.R1Z(chart.dataSet.length,chart.scroll);if(H4z.w1Z(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=H4z.v1Z(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":(i13+f23)),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo("gap",x,y0);else seriesPlotter.moveTo("gap",x,y0);}
else seriesPlotter.lineTo("line",x,y0);}
if(!gap||parameters.gaps){if(isStep)points.unshift([x,y0]);points.unshift([x0,y0]);}
if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.unshift([x,bottom]);points.unshift([x0,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(i93+p2K)),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo((R0K+z3D),x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&H4z.o1Z(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&H4z.c1Z(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=H4z.x8Z(cw,2);if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(H4z.e8Z(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;H4z.W8Z(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,(P93+w03));this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:(b3D+X73+J3D+R73),"args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(H4z.m8Z(interval,M43))return B33;if(H4z.N8Z(interval,N83))return B33;if(H4z.n8Z(interval,b9D))return B33;return G2K;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var K63="Dr",t93=((0x181,1.72E2)<=0x150?(0xD7,"q"):(5.770E2,120)),f73="lb",d53="ta",x0K="either",l4K="ause",b93="iod",r9D="nno",B93="th";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(!interval)return ;if(!period)return ;delete  this.layout.setSpan;if(H4z.f8Z(interval,"year")){interval=(i33+k53+B93);if(!period)period=1;period=H4z.Z8Z(period,12);}
var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(H4z.C8Z(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";var getDifferentData=false;if(this.chart.symbol){if(H4z.H8Z(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(H4z.E8Z(this.layout.interval,interval))getDifferentData=true;}
if(H4z.S8Z(timeUnit,this.layout.timeUnit))getDifferentData=true;}
this.layout.periodicity=period;this.layout.interval=interval;this.layout.timeUnit=timeUnit;if(getDifferentData){this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol){if(this.displayInitialized)this.quoteDriver.newChart({symbol:this.charts[c].symbol,symbolObject:this.charts[c].symbolObject,chart:this.charts[c]}
,cb);else this.newChart(this.charts[c].symbol,null,this.charts[c],cb);}
}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((D23+b63+r9D+x73+p23+D23+g33+V7D+R0K+f23+p23+z93+f23+X73+b93+v93+x73+o1K+p23+S63+f23+D23+l4K+p23+Q93+x0K+p23+r23+b63+d53+B6K+b63+P93+f73+b63+D23+E33+p23+F93+X73+p23+t93+e73+F93+n73+K63+t0K+j8K+f23+X73+p23+b63+T33+p23+R73+f23+x73));return ;}
}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(H4z.l8Z(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(H4z.F8Z(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=H4z.I8Z(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&H4z.P8Z(chart.dataSegment.length,0)){if(H4z.g8Z(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=H4z.h5Z(chart.dataSegment.length,1);}
if(H4z.r5Z(pos,chart.dataSegment.length)){dt=chart.dataSegment[H4z.k5Z(chart.dataSegment.length,1)].DT;pos=H4z.O5Z(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.createDataSet();if(centerMe){if(chart.dataSegment&&H4z.t5Z(chart.dataSegment.length,0)){for(var i=H4z.s5Z(chart.dataSet.length,1);H4z.J5Z(i,0);i--){var nd=chart.dataSet[i].DT;if(H4z.A5Z(nd.getTime(),dt.getTime())){chart.scroll=(H4z.Y5Z(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(H4z.X5Z(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=H4z.q5Z(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;H4z.B5Z(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;H4z.y5Z(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){if(H4z.G5Z(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=H4z.j5Z(quotes[p].Adj_Close,quotes[p].Close);}
if(H4z.b5Z("High",quotes[p]))if(H4z.V5Z(quotes[p].High*ratio,quote.High))quote.High=H4z.z7Z(quotes[p].High,ratio);if(H4z.M7Z((J43+F93+L8K),quotes[p]))if(H4z.i7Z(quotes[p].Low*ratio,quote.Low))quote.Low=H4z.d7Z(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(H4z.U7Z("Close",quotes[p])&&H4z.K7Z(quotes[p].Close,null))quote.Close=H4z.a7Z(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[H4z.D7Z(p,1)].DT,d2=quotes[p].DT;if(H4z.L7Z(interval,"week")){if(H4z.u7Z(d2.getDay(),d1.getDay()))return true;}
else if(H4z.Q7Z(interval,"month")){if(H4z.p7Z(d2.getMonth(),d1.getMonth()))return true;}
else{if(H4z.T7Z(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var g83="ond",N93="ec",S83="lis",nextBar=H4z.R7Z(interval,periodicity),d1=new Date(quotes[position].DT);if(H4z.w7Z(timeUnit,(i33+t0K+P93+S83+N93+g83)))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(H4z.v7Z(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(H4z.o7Z(quotes[position].DT.getMinutes(),nextBar)){if(H4z.c7Z(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(H4z.x9Z(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((H4z.e9Z(interval,"week")||H4z.W9Z(interval,"month"))&&!dontRoll){for(i=1;H4z.m9Z(i,periodicity);i++){while(H4z.N9Z(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(H4z.n9Z(i,periodicity)){p++;if(H4z.f9Z(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&H4z.Z9Z(interval,"tick")&&H4z.C9Z(periodicity,1)){for(i=1;H4z.H9Z(i,periodicity);i++){p=position+i;if(H4z.E9Z(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(H4z.S9Z(p,0)&&H4z.l9Z(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;H4z.F9Z(i,periodicity);i++){p=position+i;if(H4z.I9Z(p,0)&&H4z.P9Z(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;K(H4z.C9D);D(H4z.Y9D);Z(H4z.A9D);Y(H4z.Q9D);u(H4z.S9D);H(H4z.I4K);E(q4K);STXChart.prototype.displayChart=function(chart){var l43="so",c03="dow",h13="ne_",w8K="aseli",H0K="tx_b",o03="Clos",p0K="acit",h53="op",l03="_u",L13="adow",U8K="_candl",n83="_even",N63="ndle",c83="ca",A13="low_",Q13="ho",P23="tx_",W8K="andf_",noBorders=(H4z.g9Z(this.layout.candleWidth-chart.tmpWidth,2)&&H4z.h3Z(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(H4z.r3Z(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(H4z.k3Z(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor((R73+x73+t8K+D13+z93+W8K+e73+z93)));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(H4z.O3Z(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(H4z.t3Z(chartType,"mountain")){this.startClip(panel.name);this.chart.baseLegendColors=null;this.drawMountainChart(panel);this.endClip();}
else if(H4z.s3Z(chartType,"colored_mountain")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(H4z.J3Z(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(H4z.A3Z(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawMountainChart(panel,"stx_colored_mountain_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(H4z.Y3Z(chartType,"wave")){this.drawWaveChart(panel);}
else if(H4z.X3Z(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(H4z.q3Z(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(H4z.B3Z(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(H4z.y3Z(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(H4z.G3Z(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(H4z.j3Z(chartType,"hollow_candle")||H4z.b3Z(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,(R73+P23+Q13+P93+A13+c83+N63+n83),STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",H4z.V3Z(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",H4z.z0Y(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",H4z.M0Y(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,H4z.i0Y(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,H4z.d0Y(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,H4z.U0Y(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(H4z.K0Y(chartType,(D23+K0K))){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor((j93+U8K+f23+D13+R73+g33+L13+l03+z93)),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(H4z.a0Y(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(H4z.D0Y(mode,"shadow")){if(coloredShadow){if(H4z.L0Y(quote.Close,quote.Open))return coloredShadowUp;else if(H4z.u0Y(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(H4z.Q0Y(mode,(R73+B53+Y3D))){if(H4z.p0Y(quote.Close,quote.Open))return stxCandleUpColor;else if(H4z.T0Y(quote.Close,quote.Open))return stxCandleDownColor;else if(H4z.R0Y(quote.Close,quote.Open))return stxCandleShadow;}
else if(H4z.w0Y(mode,"outline")){var styleArray1;if(H4z.v0Y(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(H4z.o0Y(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(H4z.c0Y(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace",(h53+p0K+o1K),0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(H4z.x4Y(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:(o03+f23),threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(H4z.e4Y(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&H4z.W4Y(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(H4z.m4Y(s,"over")?0:H4z.N4Y(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,(i93+p2K),chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(H4z.n4Y(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=H4z.f4Y(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=H4z.L4Y(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(H4z.X4Y(chartType,"baseline_delta_mountain")){var baseline=chart.baseline.actualLevel;if(H4z.q4Y(baseline,null)){this.startClip(panel.name);this.drawMountainChart(panel,"stx_baseline_delta_mountain");this.endClip();this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":(R73+H0K+w8K+h13+c03+Q93)}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(H4z.B4Y(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
;this.chart.baseLegendColors.push(parameters.color);parameters.color="transparent";STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:(l43+i93+r23),lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(H4z.y4Y(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=H4z.G4Y(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=H4z.I4Y(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
this.endClip();}
}
else if(H4z.o4Y(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else if(chartType){console.log('Invalid chart layout.chartType: "'+chartType+'". Defaulting to Line Chart.');this.layout.chartType="line";this.drawLineChart(panel,"stx_line_chart");}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;H4z.c4Y(i,chart.dataSet.length);i++){var q=chart.dataSet[i],previousClose=chart.dataSet[H4z.x6Y(i,1)].Close,trueRange=Math.max(H4z.e6Y(q.High,q.Low),Math.abs(H4z.W6Y(q.High,previousClose)),Math.abs(H4z.m6Y(q.Low,previousClose)));total+=trueRange;if(H4z.N6Y(i,period))total-=chart.dataSet[H4z.n6Y(i,period)].trueRange;q.trueRange=trueRange;q.atr=H4z.f6Y(total,period);}
}
;STXChart.prototype.calculateMedianPrice=function(chart){var d;for(var i=0;H4z.Z6Y(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hl/2"]=H4z.C6Y((d.High+d.Low),2);}
}
;STXChart.prototype.calculateTypicalPrice=function(chart){var d;for(var i=0;H4z.H6Y(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlc/3"]=H4z.E6Y((d.High+d.Low+d.Close),3);}
}
;STXChart.prototype.calculateWeightedClose=function(chart){var d;for(var i=0;H4z.S6Y(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlcc/4"]=H4z.l6Y((d.High+d.Low+2*d.Close),4);}
}
;STXChart.prototype.calculateOHLC4=function(chart){var d;for(var i=0;H4z.F6Y(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["ohlc/4"]=H4z.I6Y((d.Open+d.High+d.Low+d.Close),4);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=H4z.P6Y(this.chart.dataSet.length,1);H4z.g6Y(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=this.minimumLeftBars+1;if(chart.allowScrollPast){var rightPad=H4z.h2Y(chart.maxTicks,leftPad);if(H4z.r2Y(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=H4z.k2Y(chart.maxTicks,chart.dataSet.length);}
if(H4z.O2Y(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(H4z.t2Y(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=0;}
}
else{if(H4z.s2Y(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(H4z.J2Y(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var j6K="egm",P73="aS",i53="Dat",v53="create";if(this.runPrepend((v53+i53+P73+j6K+f23+Q93+x73),arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=H4z.A2Y(chart.dataSet.length,chart.scroll,1);for(var i=-1;H4z.C2Y(i,chart.scroll)&&H4z.H2Y(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(H4z.E2Y(position,chart.dataSet.length)&&H4z.S2Y(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(H4z.l2Y(chart.baseline.actualLevel,null)&&H4z.F2Y(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(H4z.I2Y(position,0)){chart.dataSegment.push(null);}
}
if(H4z.P2Y(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;H4z.g2Y(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;H4z.h1Y(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(H4z.r1Y(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=H4z.k1Y(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+H4z.m1Y(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+H4z.N1Y(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return H4z.n1Y(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;H4z.f1Y(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;H4z.Z1Y(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(H4z.C1Y(bar.DT.getTime(),dt.getTime())){this.chart.scroll=H4z.H1Y(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;H4z.E1Y(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var j63="FFF";if(H4z.S1Y(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+H4z.l1Y(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder;if(H4z.F1Y(this.axisBorders,false))drawBorders=false;if(H4z.I1Y(this.axisBorders,true))drawBorders=true;var tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+H4z.P1Y(margin,2);}
catch(e){width=yax.width;}
var x=H4z.g1Y(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(H4z.x8Y(yax.position,null)?panel.chart.yAxis.position:yax.position);if(H4z.e8Y(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(H4z.W8Y(y+(height/2),yax.bottom))y=H4z.m8Y(yax.bottom,(height/2));if(H4z.N8Y(y-(height/2),yax.top))y=yax.top+(H4z.n8Y(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,H4z.f8Y(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(H4z.Z8Y(context.fillStyle,backgroundColor)){if(H4z.C8Y(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle=(J33+o43+o43+o43+j63);}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+H4z.H8Y(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+H4z.E8Y(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(H4z.S8Y(x+(width/2),panel.left)||H4z.l8Y(x-(width/2),panel.right))return ;if(!pointed){if(H4z.F8Y(x+(width/2),panel.right))x=H4z.I8Y(panel.right,(width/2));if(H4z.P8Y(x-(width/2),panel.left))x=panel.left+(H4z.g8Y(width,2));}
context.fillStyle=backgroundColor;STX.roundRect(context,H4z.h5Y(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=H4z.r5Y(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(H4z.W5Y(x,arrowHeight),y);context.lineTo(x,H4z.m5Y(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline=(p9D);context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(H4z.N5Y(context.fillStyle,backgroundColor)){if(H4z.n5Y(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,H4z.f5Y(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var a23="ata";if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(H4z.L5Y(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&H4z.u5Y(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet=(r23+a23+h3D+f23+x73);var l=chart[whichSet].length;if(H4z.Q5Y(whichSet,"dataSegment")){while(H4z.p5Y(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][H4z.T5Y(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(H4z.R5Y(chart.dataSet.length,2)){var quote2=chart[whichSet][H4z.w5Y(l,2)];prevClose=quote2.Close;}
if(H4z.v5Y(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||H4z.o5Y(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);if(H4z.c5Y(this.preferences.currentPriceLine,true)&&this.isHome()){panel.chart.context.globalCompositeOperation="destination-over";this.plotLine(panel.left,panel.right,y,y,backgroundColor,(N73),panel.chart.context,panel,{pattern:"dashed",lineWidth:1,opacity:0.8}
);panel.chart.context.globalCompositeOperation="source-over";}
}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var q03=0.65;this.defaultColor=P83;var bgColor=H33,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=f53;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(H4z.x7Y(bgColor,f53))bgColor=a6K;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[H4z.A9D];if(H4z.e7Y(v,q03))this.defaultColor=P83;else this.defaultColor=a6K;}
else{this.defaultColor=P83;}
}
else{this.containerColor=a6K;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(B33);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;H4z.W7Y(i,this.asyncCallbacks.length);i++){if(H4z.m7Y(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;H4z.N7Y(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){var y13="derla";this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=H4z.n7Y(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(H4z.D7Y(this.layout.candleWidth,this.candleWidthPercent));if(H4z.L7Y(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(H4z.u7Y(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(H4z.Q7Y(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,(e73+Q93+y13+o1K));STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){if(!this.panels[panel].hidden)this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;H4z.p7Y(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){this.controls.home.style.display=this.isHome()?"none":"block";}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(H4z.T7Y(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;var backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1,ratio=H4z.R7Y(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=H4z.w7Y(oldWidth,ratio);canvas.height=H4z.v7Y(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);this.adjustedDisplayPixelRatio=ratio;}
}
;STXChart.prototype.resizeCanvas=function(){var S33="SS",F2K="har",y33="dt",D03="ero",I8K="ning",A3D="ar";if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=H4z.o7Y(this.right,this.left);if(H4z.c7Y(this.width,0)){console.log((L8K+A3D+I8K+W2K+E1K+D03+p23+L8K+t0K+y33+g33+p23+D23+F2K+x73+y4K+B6K+g33+f23+D23+E33+p23+B6K+S33+p23+C0K+F93+X73+p23+D23+P33+Q2K+p23+D23+F93+Q93+x73+b63+t0K+Q93+E23+j53));}
this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(H4z.x9Y(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(H4z.e9Y(chart.width,candleWidth));var wsInTicks=Math.round(H4z.W9Y(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=H4z.m9Y(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(H4z.N9Y(idealNumberOfTicks,1)){if(H4z.n9Y(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(H4z.f9Y(this.chart.width,idealNumberOfTicks));if(H4z.Z9Y(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(H4z.C9Y(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.round(H4z.H9Y(this.chart.width,newCandleWidth))+1;}
;STXChart.prototype.resizeChart=function(maintainScroll){var L83="resizeChart";if(this.runPrepend(L83,arguments))return ;if(H4z.E9Y(maintainScroll,G2K))maintainScroll=B33;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();if(this.displayInitialized){this.adjustPanelPositions();this.draw();}
else if(H4z.S9Y(this.chart.canvasHeight,H4z.C9D)&&H4z.l9Y(previousHeight,H4z.C9D)){this.adjustPanelPositions();this.draw();}
this.runAppend(L83,arguments);}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var r93="red",X2K="nfi",q43="uo",U03="if",u83="pec",x3D="erDa",Q03="ast",n93="ni",V33="War",f1K='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;if(params.periodicity.periodicity)this.layout.periodicity=params.periodicity.periodicity;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject),prevMarket=chart.market;if(!symbol){chart.symbol=H33;chart.symbolObject={symbol:H33}
;}
else if(typeof symbol==f1K){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(this.marketFactory){var marketDef=this.marketFactory(chart.symbolObject);this.setMarket(marketDef,chart);}
var self=this;if(!masterData&&this.quoteDriver){var callback=function(err){if(err&&H4z.F9Y(err,l2K)){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;chart.market=prevMarket;}
if(!self.currentlyImporting)self.dispatch(c73,{stx:self,symbol:self.chart.symbol,symbolObject:self.chart.symbolObject}
);if(cb)cb(err);}
,setSpan=params.span;if(!setSpan&&this.layout)setSpan=this.layout.setSpan;if(setSpan&&setSpan.base){var multiplier=setSpan.multiplier||H4z.Y9D;this.chart.masterData=H33;this.displayInitialized=G2K;this.setSpan({maintainPeriodicity:params.periodicity?B33:G2K,multiplier:multiplier,base:setSpan.base,symbol:chart.symbol}
,callback);}
else{this.quoteDriver.newChart({symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart,initializeChart:B33}
,function(err){if(!err){self.adjustPanelPositions();self.quoteDriver.updateSubscriptions();if(params.stretchToFillScreen){self.fillScreen();}
}
callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((V33+n93+I93+W2K+F3D+F93+p23+i33+Q03+x3D+x73+b63+p23+R73+u83+U03+t0K+f23+r23+p23+b63+Q93+r23+p23+Q93+F93+p23+c7D+q43+x73+f23+o43+F6K+p23+D23+F93+X2K+R0K+e73+r93));}
if(!chart.symbol)chart.symbol=P53;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:B33,multiplier:params.span.multiplier,base:params.span.base}
);}
else if(params.stretchToFillScreen){this.fillScreen();}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.fillScreen=function(){var candleWidth=this.layout.candleWidth,chartWidth=H4z.I9Y(this.chart.width,this.preferences.whitespace),count=this.chart.dataSet.length;if(H4z.P9Y(count*candleWidth,chartWidth)){this.draw();return ;}
var newCandleWidth=H4z.g9Y(chartWidth,count);this.setCandleWidth(newCandleWidth,this.chart);this.home({maintainWhitespace:true}
);}
;STXChart.prototype.setMasterData=function(masterData,chart){var s33='= ',M8K='ex',p53='I',U0K='ng',p8K='tri',s9D='es',D73='vi',q73='rv',n8K='our',N6K='() ',L73='arseFl',i73='U',a3D='. ',I7D='er',N03='umb',B9D='ot',c53='ing',M23='C',m53='Data',v7D='st',H6K='ect',H83='bj',w43='ta',Z33='Da',s8K='g',R3D='in',Q83='M',r43=' : ',Z8K='rD',x23='te',f0K='etM';if(!chart)chart=this.chart;if(this.marketFactory){var marketDef=this.marketFactory(chart.symbolObject);this.setMarket(marketDef,chart);}
chart.masterData=masterData;if(H4z.h3Y(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&H4z.r3Y(i,masterData.length);i++){if(this.transformMasterDataQuote)masterData[i]=this.transformMasterDataQuote(masterData[i]);var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((U83+f0K+T6K+U83+x23+Z8K+T6K+H53+T6K+r43+Q83+w1K+z9D+R3D+s8K+Z4K+K23+a73+Z4K+T6K+V2K+A6K+Z4K+K23+c3D+e4K+Z4K+k1K+V2K+Z4K+E2K+E3D+x23+w13+Z33+w43+Z4K+k1K+H83+H6K));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(typeof quotes.Close=='number'){}
else{console.log((U83+v9D+Q83+T6K+v7D+e4K+w13+m53+r43+M23+Q1K+k1K+D4K+Z4K+w1K+U83+Z4K+E2K+w1K+U83+U83+c53+Z4K+k1K+w13+Z4K+V2K+B9D+Z4K+T6K+Z4K+V2K+N03+I7D+a3D+i73+U83+e4K+Z4K+Y83+L73+k1K+T6K+H53+N6K+w1K+u4K+Z4K+L23+n8K+Z4K+A6K+T6K+H53+T6K+Z4K+U83+e4K+q73+I7D+Z4K+Y83+w13+k1K+D73+A6K+s9D+Z4K+U83+p8K+U0K+U83+a3D+Q83+T6K+v7D+e4K+w13+m53+Z4K+p53+V2K+A6K+M8K+s33)+i+' Value = '+quotes.Close);}
if(H4z.k3Y(quotes.High,null))delete  quotes.High;if(H4z.O3Y(quotes.Low,null))delete  quotes.Low;if(H4z.t3Y(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.getSymbols=function(){var a=[],obj;for(var chartName in this.charts){var chart=this.charts[chartName];a.push({symbol:chart.symbol,symbolObject:chart.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit,setSpan:this.layout.setSpan}
);for(var field in chart.series){var series=chart.series[field];if(!series.parameters.data||!series.parameters.data.useDefaultQuoteFeed)continue;obj={symbol:field,symbolObject:series.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit,setSpan:this.layout.setSpan,}
;if(H4z.s3Y(arguments[0],"include-parameters"))obj.parameters=series.parameters;if(!obj.symbolObject)obj.symbolObject={symbol:field}
;a.push(obj);}
}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){obj={symbol:sq,symbolObject:{symbol:sq}
,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit,setSpan:this.layout.setSpan}
;a.push(obj);}
}
}
for(var s=H4z.J3Y(a.length,1);H4z.A3Y(s,0);s--){var symbol=a[s].symbol;if(this.isEquationChart(symbol)){var res=STX.formatEquation(symbol);if(res){for(var sym=0;H4z.Y3Y(sym,res.symbols.length);sym++){obj={symbol:res.symbols[sym],symbolObject:a[s].symbolObject,periodicity:a[s].periodicity,interval:a[s].interval,timeUnit:a[s].timeUnit,setSpan:a[s].setSpan}
;a.push(obj);}
a.splice(s,1);}
}
}
return a;}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=H4z.X3Y(dt.getSeconds(),m1K)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;H4z.q3Y(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;if(typeof now!="undefined")now=new Date(now);}
else{price=arguments[0];volume=arguments[1];if(typeof now!="undefined")now=new Date(arguments[2]);symbol=arguments[3];}
var md=chart.masterData;if(!now||H4z.B3Y(now,'Invalid Date')){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var quote;if(!md||!md.length||H4z.y3Y(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[H4z.G3Y(md.length,1)]);var market24=new STX.Market({}
),iter_parms={'begin':quote.DT,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=market24.newIterator(iter_parms),next=iter.next();if(H4z.j3Y(now,next)){if(symbol){if(price||H4z.b3Y(price,0)){quote[symbol]=price;}
}
else{if(price||H4z.V3Y(price,0)){quote.Close=price;if(H4z.z0u(price,quote.High)||H4z.M0u(quote.High,null))quote.High=price;if(H4z.i0u(price,quote.Low)||H4z.d0u(quote.Low,null))quote.Low=price;if(H4z.U0u(quote.Open,null))quote.Open=price;}
if(volume)quote.Volume+=volume;if(bid||H4z.K0u(bid,0))quote.Bid=bid;if(ask||H4z.a0u(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);if(typeof quote.Adj_Close!="undefined"){quote.Adj_Close=quote.Close;}
this.appendMasterData([quote],chart,newParams);}
else{var gaps=[],iter2_parms={'begin':now,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter2=market24.newIterator(iter2_parms);iter2.next();now=iter2.previous();while(H4z.D0u(next,now)&&this.streamParameters.fillGaps){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=iter.next();}
if(symbol){var c=this.currentQuote();quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:c.Close,Volume:0,Bid:c.Bid,Ask:c.Ask}
;quote[symbol]=price;}
else{quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;}
gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var z1K="nd";if(!params)params={}
;if(!chart)chart=this.chart;if(H4z.L0u(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;H4z.u0u(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=H4z.Q0u(masterData.length,1);while(H4z.p0u(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(H4z.T0u(dt2.getTime(),dt.getTime())){var plusOne=0;if(H4z.R0u(dt2.getTime(),dt.getTime()))plusOne=1;var advancing=plusOne;for(var j=0;H4z.w0u(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(H4z.v0u(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&H4z.o0u(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
else{advancing++;}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!=(e73+z1K+f23+C0K+H8K+M83))appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]==(e73+Q93+r23+f23+G63)&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);var dontAdvanceScroll=H4z.c0u(chart.scroll,chart.maxTicks+1)||chart.lockScroll||chart.spanLock;if(dontAdvanceScroll&&advancing){chart.scroll+=advancing;this.grabStartScrollX+=advancing;}
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
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;var p=STX.clone(params);p.dtLeft=chart.masterData[0].DT;p.dtRight=chart.masterData[H4z.x4u(chart.masterData.length,1)].DT;self.setRange(p);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&H4z.e4u(this.layout.interval,"month")){this.setPeriodicityV2(1,(i33+F93+Q93+x73+g33),loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var i83="cond",r33="ise",A03="mil";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(params.periodicity){if(H4z.W4u(params.periodicity.interval,'tick'))params.periodicity=null;if(!params.periodicity.period)params.periodicity.period=1;}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var dontChangePeriodicity=false,chart=params.chart,lt=params.dtLeft,rt=new Date();if(params.dtRight)rt=params.dtRight;if(!lt){var iter=this.standardMarketIterator(rt,null,chart);lt=iter.previous(chart.maxTicks);if(!params.periodicity)dontChangePeriodicity=true;}
var self=this;function showTheRange(){if(!chart.dataSet||H4z.m4u(chart.dataSet.length,0)){if(cb)cb();return ;}
var l=0,r=0;if(H4z.N4u(lt.getTime(),chart.dataSet[0].DT.getTime())||params.goIntoPast){l=self.tickFromDate(lt,chart,null,true);}
else{l=0;}
if(H4z.n4u(rt.getTime(),chart.dataSet[chart.dataSet.length-1].DT.getTime())||params.goIntoFuture){r=self.tickFromDate(rt,chart);}
else{r=H4z.f4u(chart.dataSet.length,1);}
var ticks=H4z.Z4u(r,l,1);if(H4z.u4u(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(H4z.Q4u((self.chart.width-params.padding),ticks),chart);chart.scroll=(H4z.p4u(chart.dataSet.length,l,1));self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(err){var T3D="og",x03="od",k6K="eck",z8K="ro",y23=") ",Y03="ny",L6K="(): ",A33="etR",z43="STXC";if(err){if(cb)cb(err);return ;}
loadMoreCount++;if(H4z.y4u(loadMoreCount,10)){console.log((z43+P33+X73+x73+j53+R73+A33+b63+I93+f23+L6K+K3D+F93+F93+p23+i33+b63+Y03+p23+P93+F93+b63+r23+R73+h63+y93+L93+y23+C0K+z8K+i33+p23+R73+E23+j8K+E23+y4K+h3D+p9D+z93+H8K+R0K+y4K+B6K+g33+k6K+p23+z93+E23+t0K+x03+v93+x73+o1K+p23+P93+T3D+W43+j53));showTheRange();return ;}
if(chart.moreAvailable&&H4z.G4u(chart.masterData[0].DT,lt)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=H4z.j4u(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if(H4z.b4u(interval,"month")){ticks=H4z.V4u((ms/STX.MONTH),period);}
else if(H4z.z6u(interval,"week")){ticks=H4z.M6u((ms/STX.WEEK),period);}
else{ticks=H4z.i6u((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=H4z.d6u((ms/(STX.MINUTE*interval)),period);else{if(H4z.U6u(interval,"millisecond"))ticks=H4z.K6u(ms,period);else if(H4z.a6u(interval,(R73+f23+D23+k53+r23)))ticks=H4z.D6u((ms/STX.SECOND),period);else if(H4z.L6u(interval,"hour"))ticks=H4z.u6u((ms/STX.HOUR),period);else ticks=H4z.Q6u((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(dontChangePeriodicity){intervalToUse=this.layout.interval;timeUnitToUse=this.layout.timeUnit;periodToUse=this.layout.period;}
else if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{var rangeInMS=H4z.p6u(rt.getTime(),lt.getTime());if(params.rangePeriodicityMap){var periodicityMap=params.rangePeriodicityMap,entryToUse=null;for(var i=0;H4z.T6u(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(H4z.R6u(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
else{var pixelsPerBar=2;switch(this.layout.chartType){case "line":case "colored_line":case "mountain":case "colored_mountain":case "baseline_delta":case "baseline_delta_mountain":case "wave":pixelsPerBar=2;break;case "candle":case "bar":case "colored_bar":case "hollow_candle":case "volume_candle":case "scatterplot":pixelsPerBar=5;break;}
if(params.pixelsPerBar)pixelsPerBar=params.pixelsPerBar;var numBars=H4z.w6u(chart.width,pixelsPerBar),possibleIntervals=[{interval:5,ms:H4z.v6u(STX.MINUTE,5)}
,{interval:30,ms:H4z.o6u(STX.MINUTE,30)}
,{interval:"day",ms:STX.DAY}
,{interval:"month",ms:STX.MONTH}
,{interval:"year",ms:Number.MAX_VALUE}
];intervalToUse=possibleIntervals[0].interval;periodToUse=1;var numBarsLastInterval;for(var j=0;H4z.c6u(j,possibleIntervals.length);j++){var numBarsThisInterval=H4z.x2u(rangeInMS,possibleIntervals[j].ms);if(H4z.e2u(numBarsThisInterval,numBars)){if(possibleIntervals[H4z.W2u(j,1)]){intervalToUse=possibleIntervals[H4z.m2u(j,1)].interval;periodToUse=Math.ceil(H4z.N2u(numBarsLastInterval,numBars));}
else{intervalToUse=possibleIntervals[j].interval;periodToUse=1;}
break;}
numBarsLastInterval=numBarsThisInterval;}
}
}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rt.getTime(),lt.getTime(),intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=H4z.n2u(this.chart.width,this.chart.maxTicks);var needDifferentData=H4z.f2u(this.layout.timeUnit,timeUnitToUse)&&(H4z.Z2u(timeUnitToUse,"seconds")||H4z.C2u(timeUnitToUse,(A03+P93+r33+i83+R73)));if(!needDifferentData&&(H4z.H2u(STXChart.isDailyInterval(this.layout.interval),STXChart.isDailyInterval(intervalToUse))))needDifferentData=true;else if(!STXChart.isDailyInterval(this.layout.interval)&&H4z.E2u(this.layout.interval,intervalToUse))needDifferentData=true;if(!this.chart.masterData||needDifferentData){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(H4z.S2u(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart,nodraw:true}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{if(H4z.l2u(this.layout.interval,intervalToUse)||H4z.F2u(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.createDataSet();}
loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var i2K=59,n4K=23,D53='today',y83='ytd',B8K="today",s1K="all",period=arguments[H4z.C9D],interval=arguments[H4z.Y9D],padding=arguments[H4z.A9D],chart=arguments[H4z.f9D],useMarketTZ=arguments[H4z.Q9D];if(typeof params==B63){period=params.period?params.period:(params.multiplier?params.multiplier:H4z.Y9D);interval=params.interval?params.interval:(params.base?params.base:(params.span?params.span:params.period));padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[H4z.H9D];}
if(!params.padding)params.padding=H4z.C9D;if(!chart)chart=this.chart;interval=interval.toLowerCase();if(H4z.I2u(interval,s1K)){this.displayAll(params,cb);return ;}
var iterInterval=interval;if(H4z.P2u(interval,B8K)){iterInterval=M43;}
var parms_copy=STX.shallowClone(params);parms_copy.goIntoFuture=G2K;var iter_parms={'begin':new Date(),'interval':iterInterval,'period':H4z.Y9D,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms),leftDT=new Date();function zeroDT(dt){dt.setHours(H4z.C9D);dt.setMinutes(H4z.C9D);dt.setSeconds(H4z.C9D);dt.setMilliseconds(H4z.C9D);return dt;}
if(H4z.g2u(interval,y83)){leftDT=zeroDT(leftDT);leftDT.setMonth(H4z.C9D);leftDT.setDate(H4z.Y9D);}
else if(H4z.h1u(interval,B8K)){iter.next();leftDT=iter.previous();}
else if(H4z.r1u(interval,b9D)){leftDT=zeroDT(new Date());leftDT.setMonth(H4z.k1u(leftDT.getMonth(),period));}
else if(H4z.O1u(interval,t83)){leftDT=zeroDT(new Date());leftDT.setFullYear(H4z.t1u(leftDT.getFullYear(),period));}
else if(H4z.s1u(interval,N83)){leftDT=zeroDT(new Date());leftDT.setDate(H4z.J1u(leftDT.getDate(),(period*u9D)));}
else{leftDT=iter.previous(H4z.A1u(period,H4z.Y9D));}
parms_copy.dtLeft=leftDT;if(H4z.Y1u(interval,D53)){parms_copy.goIntoFuture=B33;parms_copy.dtRight=new Date(leftDT);var closeHour=iter.market.zclose_hour,closeMinute=iter.market.zclose_minute;parms_copy.dtRight.setHours(closeHour?closeHour:n4K);parms_copy.dtRight.setMinutes(closeHour?closeMinute:i2K);parms_copy.dtRight.setSeconds(H4z.C9D);parms_copy.dtLeft.setHours(iter.market.zopen_hour);parms_copy.dtLeft.setMinutes(iter.market.zopen_minute);parms_copy.dtLeft.setSeconds(H4z.C9D);}
if(parms_copy.maintainPeriodicity){parms_copy.periodicity={}
;parms_copy.periodicity.interval=this.layout.interval;parms_copy.periodicity.period=this.layout.periodicity;}
chart.spanLock=G2K;var self=this;this.setRange(parms_copy,function(err){var D2K="ytd";if(!params.maintainPeriodicity){self.layout.setSpan={base:params.base,multiplier:params.multiplier}
;self.changeOccurred(g9D);}
if(H4z.X1u(interval,D2K)||H4z.q1u(interval,B8K)){chart.spanLock=B33;}
if(cb)cb(err);}
);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(H4z.B1u(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(H4z.y1u(arr[1],"year")){prev.setFullYear(H4z.G1u(prev.getFullYear(),num));}
else if(H4z.j1u(arr[1],"month")){prev.setMonth(H4z.b1u(prev.getMonth(),num));}
else if(H4z.V1u(arr[1],"day")){prev.setDate(H4z.z8u(prev.getDate(),num));}
else if(H4z.M8u(arr[1],"week")){prev.setDate(H4z.i8u(prev.getDate(),(7*num)));}
var diff=H4z.d8u((now.getTime()-prev.getTime()),1000,60,60,24);diff=H4z.K8u(diff,5,7);var candleWidth=H4z.J8u(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(H4z.A8u(ticks,H4z.A9D))ticks=H4z.A9D;var padding=params.padding;if(!padding)padding=H4z.C9D;this.layout.candleWidth=H4z.Y8u((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=H4z.S9D;this.chart.maxTicks=Math.round(H4z.X8u((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||H4z.q8u(params.padding,H4z.C9D))this.chart.scroll=ticks+H4z.Y9D;}
;STXChart.prototype.construct=function(){this.stackPanel((D23+P33+X73+x73),(i03+X73+x73),H4z.Y9D);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=H4z.C9D;this.cy=H4z.C9D;this.micropixels=H4z.C9D;this.chart.panel.subholder.appendChild(this.controls.home);this.callbackListeners={}
;this.longHoldTime=m1K;}
;STXChart.prototype.addEventListener=function(type,cb){if(!type)type=e0K;var arr=this.callbackListeners[type];if(!arr)this.callbackListeners[type]=arr=[];arr.push(cb);return {type:type,cb:cb}
;}
;STXChart.prototype.removeEventListener=function(obj,cb){if(typeof obj!="object"){obj={type:type,cb:cb}
;}
if(!obj.type)obj.type="*";var arr=this.callbackListeners[obj.type];if(!arr)return ;for(var i=0;H4z.B8u(i,arr.length);i++){if(H4z.y8u(arr[i],obj.cb)){arr.splice(i);if(!arr.length)obj[obj.type]=null;return ;}
}
}
;STXChart.prototype.dispatch=function(type,data){if(this.callbacks[type])this.callbacks[type].call(this,data);var arr=this.callbackListeners[type];if(arr){for(var i=0;H4z.G8u(i,arr.length);i++)arr[i].call(this,data);}
arr=this.callbackListeners["*"];if(arr){for(var j=0;H4z.j8u(j,arr.length);j++)arr[j].call(this,data);}
}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(H4z.b8u(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(H4z.V8u(renderer.params.yAxis,yAxis)){if(H4z.z5u(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;H4z.M5u(i,panel.yaxisLHS.length);i++){if(H4z.i5u(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;H4z.d5u(i,panel.yaxisRHS.length);i++){if(H4z.U5u(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(H4z.K5u(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;H4z.a5u(i,arr.length);i++){if(H4z.D5u(arr[i],yAxis))return ;}
if(H4z.L5u(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(H4z.u5u(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;H4z.Q5u(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=H4z.p5u(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(H4z.T5u(panel.name,panel.chart.name)||panel.yAxis.position){if(H4z.R5u(panel.yAxis.position,(P93+f23+C0K+x73)))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||H4z.w5u(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;H4z.v5u(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(H4z.o5u(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(H4z.c5u(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;H4z.x7u(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;H4z.e7u(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=H4z.W7u(this.width,panel.yaxisTotalWidthRight);for(i=0;H4z.m7u(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.chart.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.chart.yaxisPaddingRight||H4z.N7u(panel.chart.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.chart.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.chart.yaxisPaddingLeft||H4z.n7u(panel.chart.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.chart.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=H4z.f7u(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=H4z.Z7u(panel.right,panel.left);panel.handle.style.left=panel.left+"px";panel.handle.style.width=panel.width+"px";if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=H4z.C7u(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var V23="size",P43="vas",o93="e8can";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(H4z.H7u(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;if(H4z.E7u(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display=(S63+Z0K+u13);}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll((J33+t0K+o93+P43+K3D+f23+Q63))[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display=(S63+n13+E33);}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);this.initialWhitespace=this.preferences.whitespace;if(this.chart.dataSet&&H4z.S7u(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(H4z.l7u(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(H4z.F7u(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
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
else{var c=closure(this);window.addEventListener((X73+f23+V23),c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;H4z.I7u(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var F0K="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(F0K,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=G2K;this.touches=[];this.touching=G2K;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=G2K;this.drawingLine=G2K;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=G2K;this.displaySticky();this.runAppend(F0K,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var P9D="DOMMouseScroll",u0K="mousewheel",b6K="hee",W33="wheel",h0K="onMouseOut",I53="onMouseOver",t43="touchmove",s23="mousemo",k33="pointerup",i0K="pointermove",e63="MSGestureEnd",J73="pointerdown",K03="MSPointerUp",u33="MSPointerMove",T43="tureEnd",M2K="MSGes",I0K="MSGestureChange",k8K="MSGestureStart",v0K="MSPointerDown",p33="#zoomIn",x63="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=B33;var el=this.chart.container,homeEl=$$$(x63,this.controls.chartControls),zoomInEl=$$$(p33,this.controls.chartControls),zoomOutEl=$$$(u53,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(Z13,(function(self){return function(e){self.mousemove(e);}
;}
)(this),G2K);el.addEventListener(T23,(function(self){return function(e){self.mousedown(e);}
;}
)(this),G2K);el.addEventListener(a2K,(function(self){return function(e){self.mouseup(e);}
;}
)(this),G2K);}
else{if(STX.isSurface){el.addEventListener(Z13,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),G2K);el.addEventListener(T23,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),G2K);el.addEventListener(a2K,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),G2K);if(window.navigator.msPointerEnabled){el.addEventListener(v0K,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),G2K);el.addEventListener(k8K,(function(self){return function(e){self.gestureInEffect=B33;}
;}
)(this),G2K);el.addEventListener(I0K,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),G2K);el.addEventListener((M2K+T43),(function(self){return function(e){self.gestureInEffect=G2K;return self.touchend(e);}
;}
)(this),G2K);el.addEventListener(u33,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),G2K);el.addEventListener(K03,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),G2K);}
else{el.addEventListener(J73,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),G2K);el.addEventListener(k8K,(function(self){return function(e){self.gestureInEffect=B33;}
;}
)(this),G2K);el.addEventListener(I0K,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),G2K);el.addEventListener(e63,(function(self){return function(e){self.gestureInEffect=G2K;return self.touchend(e);}
;}
)(this),G2K);el.addEventListener(i0K,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),G2K);el.addEventListener(k33,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),G2K);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener((s23+K83),(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),G2K);el.addEventListener(T23,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),G2K);el.addEventListener(a2K,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),G2K);}
el.addEventListener(t73,(function(self){return function(e){self.touchstart(e);}
;}
)(this),G2K);el.addEventListener(t43,(function(self){return function(e){self.touchmove(e);}
;}
)(this),G2K);el.addEventListener(p13,(function(self){return function(e){self.touchend(e);}
;}
)(this),G2K);if(zoomInEl){zoomInEl.removeAttribute(I53);zoomInEl.removeAttribute(h0K);}
if(zoomOutEl){zoomOutEl.removeAttribute(I53);zoomOutEl.removeAttribute(h0K);}
}
}
var wheelEvent=(H4z.P7u(W33,document.createElement(V3D))||H4z.g7u((F93+Q93+L8K+b6K+P93),document))?W33:H4z.h9u(document.onmousewheel,undefined)?u0K:P9D;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),G2K);}
;STXChart.prototype.rightClickHighlighted=function(){var N33="rightClickHighlighted";if(this.runPrepend(N33,arguments))return ;this.deleteHighlighted(B33);this.runAppend(N33,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){var X63="ct";if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=H4z.r9u(this.drawingObjects.length,1);H4z.k9u(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){var before=STX.shallowClone(this.drawingObjects);this.drawingObjects.splice(i,1);this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred((j8K+f23+X63+k23));}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
var chart=this.currentPanel.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=H4z.O9u(renderer.seriesParams.length,1);H4z.t9u(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(H4z.s9u(panel.name,name))return B33;}
return G2K;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=G2K;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=B33;}
;STXChart.prototype.grabHandle=function(panel){var y8K="grabHandle",t23=1811382,r8K=(7.42E2>=(1.147E3,33.5E1)?(1.,3870717):0x1E6<(89.,1.79E2)?5.59E2:(14,110.)),H93=1490525364,l8K=289121767,u1K="bHand";if(this.runPrepend((R0K+G0K+u1K+O73),arguments))return ;if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();STX.appendClassName(panel.handle,u73);var C7D=-l8K,u7D=H93,Y7D=H4z.A9D;for(var L7D=H4z.Y9D;H4z.F5D.w5D(L7D.toString(),L7D.toString().length,r8K)!==C7D;L7D++){this.transformDataSetPre(this,tmpHist);Y7D+=H4z.A9D;}
if(H4z.F5D.w5D(Y7D.toString(),Y7D.toString().length,t23)!==u7D){return D6H*A6H;}
this.runAppend(y8K,arguments);}
;STXChart.prototype.releaseHandle=function(){if(this.runPrepend(A53,arguments))return ;STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();if(STXChart.resizingPanel)STX.unappendClassName(STXChart.resizingPanel.handle,u73);STXChart.resizingPanel=H33;this.runAppend(A53,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(H4z.J9u(saveLayout,G2K))this.changeOccurred(g9D);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return H4z.A9u(y,this.top);}
;STXChart.prototype.backOutX=function(x){return H4z.Y9u(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var I2K="}",D1K="{",r1K=9304065,N23=4758244,W3D=738023606,i8K=1404352814;if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
var Q7D=-i8K,q7D=-W3D,H7D=H4z.A9D;for(var X7D=H4z.Y9D;H4z.F5D.w5D(X7D.toString(),X7D.toString().length,N23)!==Q7D;X7D++){this.runAppend(A53,arguments);setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),k73);seriesPlotter.lineTo(t63,x,y);this.setDisplayDate(this.masterData[i+j+plusOne]);H7D+=H4z.A9D;}
if(H4z.F5D.w5D(H7D.toString(),H7D.toString().length,r1K)!==q7D){context.lineTo(x+candleWidth,y);context.moveTo(xxl+paddingLeft,H4z.N1H(start,height,paddingTop,voffset));}
for(var p in this.plugins){if(p.indexOf(D1K+sd.id+I2K)>-H4z.Y9D)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(H4z.X9u(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(H4z.q9u(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;H4z.B9u(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var q0K="panelClose";if(!panel)return ;if(this.runPrepend(q0K,arguments))return ;this.cancelTouchSingleClick=B33;STXChart.drawingLine=G2K;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(H4z.y9u(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(q0K,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=B33;STXChart.drawingLine=G2K;this.showCrosshairs();var newPanels={}
,pos=H4z.C9D,p;for(p in this.panels){if(H4z.G9u(p,panel.name))break;pos++;}
if(!pos)return ;var i=H4z.C9D;for(p in this.panels){if(H4z.j9u(i,pos-H4z.Y9D))newPanels[panel.name]=panel;if(H4z.b9u(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(H4z.V9u(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(H4z.z3u(pos,length-1))return ;var i=0;for(p in this.panels){if(H4z.M3u(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(H4z.i3u(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var u93="stx_solo_lit";this.cancelTouchSingleClick=B33;STXChart.drawingLine=G2K;this.showCrosshairs();var hideOrNot=B33;if(panel.soloing){hideOrNot=G2K;panel.soloing=G2K;STX.unappendClassName(panel.solo,u93);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=B33;STX.appendClassName(panel.solo,u93);if(H4z.d3u(panel.name,l63)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=H4z.U3u(H4z.Y9D,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=G2K;panel.hidden=G2K;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=H4z.K3u(panel.bottom,panel.top);panel.percent=H4z.a3u(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=B33,p,newY,priorPanel;if(H4z.D3u(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=G2K;if(up){priorPanel=H33;for(p in this.panels){if(H4z.L3u(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(H4z.u3u(newY,priorPanel.top+H4K)){newY=priorPanel.top+H4K;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=H33;for(p in this.panels){if(H4z.Q3u(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(H4z.p3u(newY,STXChart.resizingPanel.bottom-H4K)){newY=H4z.T3u(STXChart.resizingPanel.bottom,H4K);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){var h93="0p",F83="one";if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||H4z.R3u(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display=(Q93+F83);}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(H4z.w3u(n,1)||H4z.v3u(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(H4z.o3u(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=H4z.c3u(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(H4z.x0s(h,panel.percent));panel.height=H4z.e0s(panel.bottom,panel.top);if(H4z.W0s(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&H4z.m0s(yAxis.height,0)){zoomRatio=H4z.N0s(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=H4z.n0s(panel.bottom,yAxis.bottomOffset);yAxis.height=H4z.f0s(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=H4z.Z0s(zoomRatio,yAxis.height);if(H4z.C0s(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&H4z.H0s(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=H4z.E0s(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right=(h93+t8K);panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+(z93+t8K);panel.subholder.style.left=panel.left+(X6K);panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(H4z.S0s(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(H4z.l0s(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(H4z.F0s(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var q1K="Nam",E83="mb",e13="ave",j3D="jects",Z2K="rker",Z53="Ma",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:H4z.C9D,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((Z53+Z2K+p23+F93+S63+j3D+p23+i33+e73+R73+x73+p23+g33+e13+p23+b63+p23+i33+f23+E83+E23+p23+D23+P93+b63+R73+R73+q1K+f23));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var E53="al",e8K="Name",arr=[];for(var label in this.markers){for(var i=0;H4z.v0s(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(H4z.o0s(type,(z93+b63+Q93+f23+P93+e8K))){if(H4z.c0s(marker.panelName,comparison))arr.push(marker);}
else if(H4z.x4s(type,"label")){if(H4z.e4s(label,comparison))arr.push(marker);}
else if(H4z.W4s(type,(E53+P93))){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(H4z.m4s(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(H4z.N4s(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(H4z.n4s(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;H4z.f4s(i,labels.length);i++){if(H4z.Z4s(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;H4z.C4s(i,chartMap.markers.length);i++){if(H4z.H4s(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;H4z.E4s(i,panelArray.length);i++){if(H4z.S4s(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(H4z.l4s(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;H4z.F4s(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(H4z.I4s(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[H4z.P4s(chart.xaxis.length,1)].DT;xaxisDT=new Date(H4z.g4s(xaxisDT.getTime(),this.timeZoneOffset*60000));if(H4z.h6s(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=H4z.r6s(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[H4z.k6s(chart.dataSet.length,1)].DT),iter=this.standardMarketIterator(dt,null,chart),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;H4z.O6s(j,ticksToSearch);j++){pms=dt.getTime();dt=iter.next();qms=dt.getTime();if(H4z.t6s(qms,dms)){marker.tick=j;return ;}
else if(H4z.s6s(qms,dms)&&H4z.J6s(pms,dms)){marker.tick=Math.max(H4z.A6s(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(H4z.Y6s(marker.params.xPositioner,"master")&&marker.params.x){marker.tick=Math.floor(H4z.X6s(marker.params.x,this.layout.periodicity));return ;}
else if(H4z.q6s(marker.params.xPositioner,"date")&&marker.params.x){var pms,qms,dms=marker.params.x.getTime();for(var i=0;H4z.B6s(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(H4z.y6s(i,0))pms=chart.dataSet[H4z.G6s(i,1)].DT.getTime();if(H4z.j6s(qms,dms)){marker.tick=i;return ;}
else if(H4z.b6s(qms,dms)&&H4z.V6s(pms,dms)){marker.tick=Math.max(H4z.z2s(i,1),0);return ;}
else if(H4z.M2s(dms,qms)){marker.tick=null;return ;}
}
if(H4z.i2s(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[H4z.d2s(i,1)].DT);if(H4z.U2s(dt.getTime(),dms))marker.params.future=true;marker.tick=null;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=H4z.K2s(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;var fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||H4z.a2s(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=H4z.D2s(h,0.20);}
var percent=H4z.L2s(height,h),reduce=H4z.u2s(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var q6K="stx-chart-panel",W0K="tle",l23=".stx-ico-edit",o2K=".stx-ico-down",J1K=".stx-ico-focus",B3D=".stx-ico-up",B03=".stx-panel-title",r3D=".stx-ico-close",n6K=".stx-panel-control",isChart=(H4z.Q2s(panel.name,panel.chart.name));panel.icons=$$$(n6K,panel.holder);panel.close=panel.icons.children[H4z.Q9D];panel.close=$$$(r3D,panel.icons).parentNode;STX.appendClassName(panel.icons,J4K);panel.title=$$$(B03,panel.icons);panel.up=$$$(B3D,panel.icons).parentNode;panel.solo=$$$(J1K,panel.icons).parentNode;panel.down=$$$(o2K,panel.icons).parentNode;panel.edit=$$$(l23,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=a1K;if(!this.displayIconsUpDown)panel.down.style.display=a1K;if(!this.displayIconsSolo)panel.solo.style.display=a1K;if(!this.displayIconsClose){panel.close.style.display=(Q93+k53+f23);}
if(!this.displayPanelResize)panel.handle.style.display=(a1K);panel.title.innerHTML=P53;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,(i03+X73+x73+B73+x73+t0K+W0K));STX.appendClassName(panel.icons,q6K);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;e.preventDefault();stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){e.preventDefault();stx.releaseHandle();}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle();}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(H4z.p2s(panel.name,l63))panel.close.style.display=a1K;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var s83="stx-panel-chart",O9D="stx-subholder",C03="stx-holder",y73="stackPanel";if(this.runPrepend(y73,arguments))return ;if(!chartName)chartName=l63;var chart=this.charts[chartName],isChart=(H4z.T2s(name,chartName)),yAxis=H33;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,V3D,C03);panel.subholder=STX.newChild(panel.holder,V3D,O9D);panel.subholder.style.zIndex=H4z.Y9D;var appendClass=isChart?s83:(R73+x73+t8K+B73+z93+b63+Q93+f23+P93+B73+R73+W6K+r23+o1K);STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(B33));panel.handle=this.controls.handleTemplate.cloneNode(B33);this.container.appendChild(panel.handle);panel.handle.id=H33;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(y73,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){var j2K=5794689,c6K=5094082,f13=181701865,V6K=1082624131;panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);var B7D=-V6K,S7D=-f13,p7D=H4z.A9D;for(var E7D=H4z.Y9D;H4z.F5D.w5D(E7D.toString(),E7D.toString().length,c6K)!==B7D;E7D++){this.stackPanel(l63,l63,H4z.Y9D);this.canvasFont(V43);this.runAppend(Y63,arguments);p7D+=H4z.A9D;}
if(H4z.F5D.w5D(p7D.toString(),p7D.toString().length,j2K)!==S7D){context.moveTo(H4z.b4H(xbase,H4z.A9D),top);Y(H4z.Q9D);this.displaySticky();this.mouseup(e);}
this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var z2K="stx_panel_border",K73="non",x43="drawPanels";if(this.runPrepend(x43,arguments))return ;var first=G2K;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=G2K;if(H4z.R2s(panel.title.innerHTML,panel.display)){panel.title.innerHTML=P53;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,J4K);if(panel.hidden){STX.unappendClassName(panel.icons,J4K);panel.handle.style.display=a1K;panel.holder.style.display=a1K;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=(a1K);if(!this.displayIconsUpDown)panel.down.style.display=a1K;if(!this.displayIconsSolo)panel.solo.style.display=(K73+f23);panel.holder.style.display=U43;}
if(!first){panel.handle.style.display=a1K;first=B33;continue;}
var y=panel.top;y=Math.round(y)+l13;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(z2K),X3D,this.chart.context,G2K,{}
);if(!this.displayPanelResize){panel.handle.style.display=a1K;}
else{panel.handle.style.display=P53;}
panel.handle.style.top=(H4z.w2s(y,panel.handle.offsetHeight/H4z.A9D))+X6K;}
this.runAppend(x43,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(H4z.v2s(this.openDialog,""))return ;if(H4z.o2s(x,this.left)||H4z.c2s(x,this.right)||H4z.x1s(y,this.top)||H4z.e1s(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){this.dispatch("tap",{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var I83="touchDoubleClick";if(H4z.W1s(x,this.left)||H4z.m1s(x,this.right)||H4z.N1s(y,this.panels.chart.top)||H4z.n1s(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(I83,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(H4z.f1s(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/H4z.A9D)&&H4z.Z1s(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-H4z.Y9D,e1MS:-H4z.Y9D,s2MS:-H4z.Y9D,e2MS:-H4z.Y9D}
;this.runAppend(I83,arguments);}
;STXChart.prototype.touchmove=function(e){var Q8K="uc",r0K="to";if(!this.displayInitialized)return ;if(H4z.C1s(this.openDialog,""))return ;if(H4z.H1s(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&H4z.E1s(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(H4z.S1s(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(H4z.l1s(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(H4z.F1s(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;H4z.I1s(i,this.touches.length);i++){if(H4z.P1s(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(H4z.g1s(this.touches[i].pageX,e.clientX)),yd=Math.abs(H4z.h8s(this.touches[i].pageY,e.clientY)),c=Math.sqrt(H4z.r8s(xd,xd)+H4z.k8s(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(H4z.O8s(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(H4z.t8s(this.touches[i].pageX,e.clientX)&&H4z.s8s(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(H4z.J8s(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&H4z.A8s(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend((r0K+Q8K+g33+i33+x13+f23),arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(H4z.Y8s(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=H4z.X8s(y,this.top+this.chart.panel.yAxis.bottom)&&H4z.q8s(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(H4z.B8s(x,whichPanel.right)||H4z.y8s(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(H4z.G8s(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(H4z.j8s((x2-x1),(x2-x1))+H4z.b8s((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+H4z.V8s((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(H4z.z5s(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(H4z.M5s(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((H4z.i5s(x1,this.pt.x1)&&H4z.d5s(x2,this.pt.x2))||(H4z.U5s(x1,this.pt.x1)&&H4z.K5s(x2,this.pt.x2))||(H4z.a5s(y1,this.pt.y1)&&H4z.D5s(y2,this.pt.y2))||(H4z.L5s(y1,this.pt.y1)&&H4z.u5s(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(H4z.Q5s(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(H4z.p5s(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(H4z.T5s((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(H4z.R5s(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(H4z.w5s(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(H4z.v5s(angle,1)||(!this.goneVertical&&H4z.o5s(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;distance=H4z.c5s(this.pt.x2,this.pt.x1);var tickDistance=H4z.x7s(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+H4z.e7s(tickDistance,2),newCandleWidth=H4z.W7s(distance,tickDistance);if(H4z.m7s(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var oldCandleWidth=this.layout.candleWidth;this.setCandleWidth(newCandleWidth,chart);if(H4z.N7s(chart.maxTicks,5)){this.setCandleWidth(oldCandleWidth,chart);return ;}
this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(H4z.n7s(this.pt.x1,this.left))+Math.round(H4z.f7s(distance,2)),pxdiff=H4z.Z7s(px,centerOfPinch),scrollDiff=H4z.C7s(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=H4z.H7s(rounded,scrollDiff);this.micropixels=H4z.E7s(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(H4z.S7s(this.gestureStartDistance,distance));if(H4z.l7s(this.grabStartZoom,yAxis.height)){if(H4z.F7s(yAxis.zoom,yAxis.height))yAxis.zoom=H4z.I7s(yAxis.height,1);}
else{if(H4z.P7s(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(H4z.g7s(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=H4z.h9s(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(H4z.r9s(distance,10));if(H4z.k9s(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(H4z.O9s(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend((r0K+I23+n63+K83),arguments);}
;STXChart.prototype.touchstart=function(e){var W4K="sta";if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(H4z.t9s(this.touches.length,1)||H4z.s9s(this.touches.length,2)){if(H4z.J9s(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(H4z.A9s(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(H4z.Y9s(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(H4z.X9s(x1,this.left)&&H4z.q9s(x1,this.right)&&H4z.B9s(y1,this.top)&&H4z.y9s(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=H4z.G9s(y1,this.top+this.chart.panel.yAxis.bottom)&&H4z.j9s(y1,this.top+this.chart.panel.bottom);this.overYAxis=H4z.b9s(x1,this.currentPanel.right)||H4z.V9s(x1,this.currentPanel.left);for(var i=0;H4z.z3s(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&H4z.M3s(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if((H4z.i3s(this.layout.chartType,"baseline_delta")||H4z.d3s(this.layout.chartType,"baseline_delta_mountain"))&&H4z.U3s(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(H4z.K3s(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=H4z.a3s(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(H4z.D3s(this.chart.baseline.actualLevel,yt)&&H4z.L3s(this.chart.baseline.actualLevel,yb)&&H4z.u3s(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.swipeStart(this.currentPanel.chart);setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(H4z.Q3s(this.touches.length,2)){this.swipe.end=true;if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(H4z.p3s((x2-x1),(x2-x1))+H4z.T3s((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(H4z.R3s(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(H4z.w3s(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(H4z.v3s(this.pt.x1,this.left),chart),t2:this.tickFromPixel(H4z.o3s(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(H4z.c3s(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
if(H4z.x0F(this.touches.length,1)){this.mouseTimer=Date.now();this.cancelLongHold=false;if(this.longHoldTime)this.startLongHoldTimer();}
this.runAppend((x73+F93+I23+W4K+Q2K),arguments);}
;STXChart.prototype.swipeStart=function(chart){var m3D=325;if(this.swipe&&this.swipe.interval)clearInterval(this.swipe.interval);this.swipe.velocity=H4z.C9D;this.swipe.amplitude=H4z.C9D;this.swipe.frame=chart.scroll;this.swipe.micropixels=this.micropixels;this.swipe.timestamp=Date.now();this.swipe.chart=this.currentPanel.chart;this.swipe.end=G2K;this.swipe.timeConstant=m3D;this.swipe.cb=H33;var self=this;requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeSample=function(){var R13=0.4,swipe=this.swipe;if(swipe.end){return ;}
var self=this,now,elapsed,delta,v,sampleMS=M6K;now=Date.now();elapsed=H4z.e0F(now,swipe.timestamp);if(H4z.W0F(elapsed,sampleMS)){requestAnimationFrame(function(){self.swipeSample();}
);return ;}
var constant=STX.touchDevice?R13:c13;swipe.timestamp=now;delta=H4z.m0F((swipe.chart.scroll-swipe.frame),this.layout.candleWidth)+this.micropixels-swipe.micropixels;swipe.frame=swipe.chart.scroll;swipe.micropixels=this.micropixels;v=H4z.N0F(m1K,delta,(H4z.Y9D+elapsed));var velocity=H4z.a0F(constant,v)+H4z.D0F(F13,this.swipe.velocity);if(H4z.L0F(Math.abs(velocity),Math.abs(swipe.velocity))){swipe.velocity=velocity;}
if(H4z.u0F(Math.abs(delta),X9D)){swipe.velocity=H4z.C9D;}
requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeRelease=function(){var j03=3000,swipe=this.swipe;if(H4z.Q0F(swipe.velocity,j03))swipe.velocity=j03;if(swipe.velocity<-j03)swipe.velocity=-j03;if(H4z.p0F(swipe.velocity,D6K)||swipe.velocity<-D6K){swipe.amplitude=H4z.T0F(c13,swipe.velocity);swipe.scroll=swipe.chart.scroll;swipe.target=swipe.amplitude;swipe.timestamp=Date.now();var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
}
;STXChart.prototype.scrollTo=function(chart,position,cb){var swipe=this.swipe;swipe.end=B33;swipe.amplitude=swipe.target=H4z.R0F((position-chart.scroll),this.layout.candleWidth);swipe.timeConstant=Z1K;swipe.timestamp=Date.now();swipe.scroll=chart.scroll;swipe.chart=chart;swipe.cb=cb;var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
;STXChart.prototype.autoscroll=function(){var self=this,swipe=this.swipe,elapsed,delta;if(swipe.amplitude){swipe.elapsed=H4z.w0F(Date.now(),swipe.timestamp);delta=-swipe.amplitude*Math.exp(-swipe.elapsed/swipe.timeConstant);if(H4z.v0F(delta,l13)||delta<-l13){var diff=H4z.o0F((swipe.target+delta),this.layout.candleWidth);swipe.chart.scroll=swipe.scroll+Math.round(diff);this.draw();requestAnimationFrame(function(){self.autoscroll();}
);}
else{if(swipe.cb)swipe.cb();}
}
}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;this.swipe.end=true;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;var longHoldTookEffect=(H4z.c0F(this.cancelLongHold,false));this.cancelLongHold=true;if(H4z.x4F(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){this.releaseHandle();return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(H4z.e4F(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=H4z.W4F(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(H4z.m4F(this.clicks.e1MS-this.clicks.s1MS,250)&&!longHoldTookEffect){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(H4z.N4F(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&H4z.n4F(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.swipeRelease();}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(H4z.f4F(e.pointerType,4)||H4z.Z4F(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&H4z.C4F(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){var G73="mous";if(H4z.H4F(e.pointerType,H4z.Q9D)||H4z.E4F(e.pointerType,(G73+f23))){this.mouseMode=B33;}
else{this.mouseMode=G2K;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;H4z.S4F(i,this.touches.length);i++){if(H4z.l4F(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(H4z.F4F(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=G2K;return ;}
this.mouseMode=B33;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(E13,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var r53="middl",f83="eft";if(config&&typeof config!=B63){config={h:arguments[H4z.Y9D],v:arguments[H4z.A9D],text:arguments[H4z.f9D]}
;}
config={h:config.h||(P93+f83),v:config.v||v6K,text:config.text||P53,hOffset:config.hOffset||D6K,vOffset:config.vOffset||M6K}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=H4z.I4F(c.bottom,config.vOffset);if(H4z.P4F(config.v,p9D))y=c.top+config.vOffset;else if(H4z.g4F(config.v,(r53+f23)))y=H4z.h6F((c.top+c.bottom),H4z.A9D);this.chart.context.save();this.canvasFont(E13);this.chart.context.fillStyle=this.defaultColor;this.canvasColor(E13);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(H4z.r6F(config.h,R33))x=H4z.k6F(c.right,config.hOffset);else if(H4z.O6F(config.h,m03)){x=H4z.t6F((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var x53="ebar",u2K="Hig",k43="si",o7D="ga",J0K="dQuote",k13="ate",G43="ons",R53="erro",a43="oje",Y8K="pr",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var O0K=5178485,R1K="taSeg",n1K="eD",w93="ea",P13=((36.,87.)<=(0xD5,43)?(97.9E1,"a"):(46.2E1,2)<(33.,94.10E1)?(0x21D,9544164):(6.33E2,0x198)<(34,96)?1.23E3:(114.,20.)),E93=628137402,S3D=1627691241,meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep.charAt(0);var l7D=S3D,R7D=-E93,y7D=H4z.A9D;for(var T7D=H4z.Y9D;H4z.F5D.w5D(T7D.toString(),T7D.toString().length,P13)!==l7D;T7D++){drawing.adjust();this.runAppend((b43+w93+x73+n1K+b63+R1K+i33+C1K),arguments);delete  chart.untransformFunc;this.calculateWeightedClose(chart);y7D+=H4z.A9D;}
if(H4z.F5D.w5D(y7D.toString(),y7D.toString().length,O0K)!==R7D){this.canvasColor(downStyleName);return l4h/R4h;}
brab+="p";brag+=meep.charAt(3);if(H4z.s6F(window[brab],window[brag]))return true;if(d.length){var href=STX.getHostName(document.referrer),foundOne=false;for(var i=0;H4z.J6F(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(H4z.A6F(nd.length,1)){var dt=nd[0][0];for(var i=1;H4z.Y6F(i,nd.length);i++){var dt0=nd[H4z.X6F(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime(),iter=self.standardMarketIterator(d),l=0;while(H4z.q6F(d.getTime(),m1)){d=iter.next();l+=1;}
var m=STX.strToDateTime(dt0).getTime(),tick;if(H4z.B6F(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=H4z.y6F(tmpHist.length,1);l+=1;}
else{for(tick=H4z.G6F(tmpHist.length,1);H4z.j6F(tick,0);tick--){if(H4z.b6F(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);iter=self.standardMarketIterator(dt);var first=false;for(var t=0;H4z.V6F(t,l);t++){if(!first){first=true;}
else{dt=iter.next();}
if(H4z.z2F(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=H4z.M2F(Math.round(y*10000),10000);if(H4z.i2F(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(H4z.d2F(self.layout.interval,"minute"))if(H4z.U2F(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&H4z.K2F(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];chart.tickCache={}
;var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(H4z.a2F(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;H4z.D2F(i,this.drawingObjects.length);i++){if(H4z.L2F(this.drawingObjects[i].name,(Y8K+a43+D23+x73+G1K+Q93)))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&H4z.u2F(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,alignToHour=chart.market.isHourAligned(),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(H4z.Q2F(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=H4z.p2F(q.Adj_Close,q.Close);}
if(H4z.T2F(q.ratio,1)){if(H4z.R2F("Open",q))q.Open=H4z.w2F(q.Open,q.ratio);if(H4z.v2F("Close",q)&&H4z.o2F(q.Close,null))q.Close=H4z.c2F(q.Close,q.ratio);if(H4z.x1F("High",q))q.High=H4z.e1F(q.High,q.ratio);if(H4z.W1F("Low",q))q.Low=H4z.m1F(q.Low,q.ratio);}
if(!reallyDontRoll&&(H4z.N1F(this.layout.periodicity,1)||H4z.n1F(this.layout.interval,"week")||H4z.f1F(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((R53+X73+x8K+D23+G43+F93+P93+Y3D+k13+J0K+p23+X73+f23+W6K+X73+Q93+M83+p23+Q93+f23+o7D+x73+t0K+j8K+f23+p23+z93+F93+k43+x73+G1K+Q93));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(H4z.Z1F(i,0))q.iqPrevClose=chart.dataSet[H4z.C1F(i,1)].Close;else q.iqPrevClose=q.Close;if(H4z.H1F((u2K+g33),q)&&H4z.E1F(q.High,max))max=q.High;if(H4z.S1F("Low",q)&&H4z.l1F(q.Low,min))min=q.Low;i++;}
if(H4z.F1F(this.layout.aggregationType,(G0K+I93+x53+R73))){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(H4z.I1F(this.layout.aggregationType,"heikenashi")||H4z.P1F(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(H4z.g1F(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(H4z.h8F(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(H4z.r8F(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(H4z.k8F(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);this.calculateMedianPrice(chart);this.calculateTypicalPrice(chart);this.calculateWeightedClose(chart);this.calculateOHLC4(chart);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;H4z.O8F(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||H4z.t8F(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(H4z.s8F(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(H4z.J8F(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&H4z.A8F(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;H4z.Y8F(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(H4z.X8F(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;H4z.q8F(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,useDataZone){if(!period)period=H4z.Y9D;if(H4z.B8F(useDataZone,G2K))useDataZone=B33;var iter=this.standardMarketIterator(DT,useDataZone?this.dataZone:this.displayZone);if(H4z.y8F(period,H4z.Y9D)){return iter.previous(period*-H4z.Y9D);}
return iter.next(period);}
;STXChart.prototype.standardMarketIterator=function(begin,outZone,chart){var otz=outZone?outZone:this.dataZone,cht=chart?chart:this.chart,iter_parms={'begin':begin,'interval':H4z.G8F(this.layout.interval,(H53+w1K+d6K+K1K))?H4z.Y9D:this.layout.interval,'periodicity':H4z.j8F(this.layout.interval,C83)?this.chart.xAxis.futureTicksInterval:this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':otz}
;return cht.market.newIterator(iter_parms);}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(H4z.b8F(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&H4z.V8F(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(H4z.z5F(chart.maxTicks,pct)),newCandleWidth=H4z.M5F(this.chart.width,newTicks);if(H4z.i5F(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=H4z.d5F(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(H4z.U5F((this.chart.width/newCandleWidth),0.499));var newCenter=(H4z.K5F(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(H4z.a5F(center,newCenter));}
else{newMaxTicks=Math.round(H4z.D5F((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(H4z.L5F(this.preferences.whitespace,newCandleWidth));newScroll=H4z.u5F(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var M73="MozMousePixelScroll",k4K=40,r6K="eel",f03="ousew",F9D="onm",S0K="mouseWheel";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=H4z.Q5F(Date.now(),this.lastMouseWheelEvent);if(H4z.p5F(Math.abs(deltaY),Math.abs(deltaX)))deltaX=H4z.C9D;else deltaY=H4z.C9D;this.lastMouseWheelEvent=Date.now();if(H4z.T5F(Math.abs(deltaX),H4z.C9D)&&H4z.R5F(Math.abs(deltaY),H4z.C9D))return ;if(this.allowSideswipe&&H4z.w5F(deltaX,H4z.C9D)&&H4z.v5F(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=O1K;delta=deltaX*-H4z.Y9D;if(H4z.o5F(delta,Y2K))delta=Y2K;if(delta<-Y2K)delta=-Y2K;this.grabbingScreen=B33;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(H4z.c5F(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=G2K;return ;}
this.lastMove=U13;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(S0K,arguments))return ;if(!deltaY){if(H4z.x7F(wheelEvent,(F9D+f03+g33+r6K))){deltaY=-H4z.Y9D/k4K*e.wheelDelta;if(e.wheelDeltaX)deltaX=-H4z.Y9D/k4K*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==l9D)e.deltaMode=(H4z.e7F(e.type,M73)?H4z.C9D:H4z.Y9D);var distance=deltaY;if(H4z.W7F(e.deltaMode,H4z.Y9D)){distance*=h4K;}
var pctIn=H33,pctOut=H33;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),G13),H4z.Y9D);pctIn=H4z.m7F(H4z.Y9D,I13*multiplier);pctOut=H4z.Y9D+H4z.N7F(F13,multiplier);}
if(H4z.n7F(distance,H4z.C9D)){if(this.reverseMouseWheel)this.zoomOut(H33,pctOut);else this.zoomIn(H33,pctIn);}
else if(H4z.f7F(distance,H4z.C9D)){if(this.reverseMouseWheel)this.zoomIn(H33,pctIn);else this.zoomOut(H33,pctOut);}
if(this.runAppend(S0K,arguments))return ;return G2K;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(H4z.Z7F(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(H4z.C7F(chart.maxTicks,pct));if(H4z.H7F(chart.maxTicks-newTicks,2))newTicks=H4z.E7F(chart.maxTicks,2);if(H4z.S7F(newTicks,9))newTicks=9;var newCandleWidth=H4z.l7F(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=H4z.F7F(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(H4z.I7F((this.chart.width/newCandleWidth),0.499));var newCenter=(H4z.P7F(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(H4z.g7F(center,newCenter));}
else{newMaxTicks=Math.round(H4z.h9F((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(H4z.r9F(this.preferences.whitespace,newCandleWidth));newScroll=H4z.k9F(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==l9D){this.timeZoneOffset=H4z.C9D;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=H4z.O9F((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var m93="per",H1K="percent",o0K="short",P2K="it",t4K="2-digit",k93="igi",g73="2",m63="um",I1K="nde";if(typeof Intl==(e73+I1K+C0K+t0K+Q93+f23+r23))return ;if(H4z.t9F(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:C43,minute:C43,hour12:G2K}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:(Q93+m63+E23+W43),minute:C43,second:C43,hour12:G2K}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:(g73+B73+r23+k93+x73),month:t4K,day:(g73+B73+r23+t0K+R0K+P2K),hour:t4K,minute:t4K}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:C43,day:C43}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:C43,month:C43,day:C43}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:o0K}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[H4z.C9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.C9D,minimumFractionDigits:H4z.C9D}
);this.internationalizer.priceFormatters[H4z.Y9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.Y9D,minimumFractionDigits:H4z.Y9D}
);this.internationalizer.priceFormatters[H4z.A9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.A9D,minimumFractionDigits:H4z.A9D}
);this.internationalizer.priceFormatters[H4z.f9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.f9D,minimumFractionDigits:H4z.f9D}
);this.internationalizer.priceFormatters[H4z.Q9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.Q9D,minimumFractionDigits:H4z.Q9D}
);this.internationalizer.priceFormatters[H4z.H9D]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:H4z.H9D,minimumFractionDigits:H4z.H9D}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:H1K,minimumFractionDigits:H4z.A9D,maximumFractionDigits:H4z.A9D}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:H1K,minimumFractionDigits:H4z.C9D,maximumFractionDigits:H4z.C9D}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:(m93+o13+x73),minimumFractionDigits:H4z.Y9D,maximumFractionDigits:H4z.Y9D}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:H1K,minimumFractionDigits:H4z.A9D,maximumFractionDigits:H4z.A9D}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:H1K,minimumFractionDigits:H4z.f9D,maximumFractionDigits:H4z.f9D}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:H1K,minimumFractionDigits:H4z.Q9D,maximumFractionDigits:H4z.Q9D}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,params){var a13="es",T2K="pda",e9D="reak",M63="ay",q13="ee",G6K="hou",v23="' ",Y1K="you",F1K="po",B43=" '",C3D="ugh",B83="hr",C13="ad",i63="G",d9D="NI",I6K="WAR";if(typeof params!==B63){params={managePeriodicity:arguments[H4z.Y9D],preserveTicksAndCandleWidth:arguments[H4z.A9D]}
;}
if(!params.preserveTicksAndCandleWidth&&H4z.s9F(params.preserveTicksAndCandleWidth,G2K))params.preserveTicksAndCandleWidth=B33;var originalLayout=STX.shallowClone(this.layout),serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=B33;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;var v=STX.clone(view);delete  v.periodicity;delete  v.interval;delete  v.timeUnit;delete  v.setSpan;STX.dataBindSafeAssignment(this.layout,v);this.layout.periodicity=originalLayout.periodicity;this.layout.interval=originalLayout.interval;this.layout.timeUnit=originalLayout.timeUnit;this.layout.setSpan=originalLayout.setSpan;if(params.preserveTicksAndCandleWidth||params.managePeriodicity){this.layout.candleWidth=originalLayout.candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(H4z.S9D,this.chart);}
if(H4z.J9F(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(l63,l63,H4z.Y9D,l63);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":B33,"subholder":B33,"display":B33}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(H4z.A9F(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==l9D)this.layout.chartType=N73;this.adjustPanelPositions();var self=this;if(config.symbols){if(!this.quoteDriver||!this.quoteDriver.quoteFeed){console.log((I6K+d9D+F3D+i63+W2K+P93+F93+C13+f63+p23+b63+p23+R73+o1K+i33+S63+B53+p23+x73+B83+F93+C3D+B43+t0K+i33+F1K+X73+x73+J43+b63+Y1K+x73+v23+L8K+t0K+x73+G6K+x73+p23+b63+p23+c7D+e73+y63+f23+o43+q13+r23+p23+i33+M63+p23+S63+e9D+p23+r23+b63+x73+b63+p23+e73+T2K+x73+a13));}
var params2={}
;if(params.managePeriodicity){if(config.symbols[H4z.C9D].setSpan){params2.span=config.symbols[H4z.C9D].setSpan;}
if(config.symbols[H4z.C9D].interval){params2.periodicity={interval:config.symbols[H4z.C9D].interval,periodicity:config.symbols[H4z.C9D].periodicity,timeUnit:config.symbols[H4z.C9D].timeUnit}
;}
}
var symbolObject=config.symbols[H4z.C9D].symbolObject||config.symbols[H4z.C9D].symbol;this.newChart(symbolObject,null,this.chart,function(err){if(!err){for(var smbl,i=1;H4z.Y9F(i,config.symbols.length);++i){smbl=config.symbols[i];self.addSeries(smbl.symbol,smbl.parameters);}
}
self.reconstructDrawings(serializedDrawings);self.draw();self.currentlyImporting=false;self.updateListeners("layout");if(params.cb)params.cb.apply(null,arguments);}
,params2);return ;}
else{if(view&&params.managePeriodicity){if(view.setSpan&&this.chart.symbol){this.setSpan(view.setSpan,function(){self.reconstructDrawings(serializedDrawings);self.draw();self.currentlyImporting=G2K;self.updateListeners(g9D);if(params.cb)params.cb();}
);return ;}
else{interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=H4z.Y9D;if(!interval)interval=M43;if(H4z.X9F(interval,this.layout.interval)||H4z.q9F(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval,timeUnit,function(){self.reconstructDrawings(serializedDrawings);self.draw();self.currentlyImporting=G2K;self.updateListeners(g9D);if(params.cb)params.cb();}
);return ;}
else{this.createDataSet();}
}
}
else{this.createDataSet();}
}
this.reconstructDrawings(serializedDrawings);this.draw();if(!params.preserveTicksAndCandleWidth)this.home();this.currentlyImporting=G2K;this.updateListeners(g9D);if(params.cb)params.cb();}
;STXChart.prototype.exportLayout=function(withSymbols){var x2K="panels",L0K="studies",obj={}
;for(var field in this.layout){if(H4z.B9F(field,L0K)&&H4z.y9F(field,x2K)){obj[field]=STX.clone(this.layout[field]);}
else if(H4z.G9F(field,L0K)){obj.studies={}
;}
else if(H4z.j9F(field,x2K)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
if(withSymbols){obj.symbols=this.getSymbols(o33);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes,chart){if(!this.cleanupGaps)return quotes;if(H4z.b9F(this.layout.interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;if(!chart)chart=this.chart;var interval=this.layout.interval;if(H4z.V9F(interval,"month")||H4z.z3F(interval,"week")){if(this.dontRoll)return quotes;interval="day";}
var _make_date=function(_quote){var _dt;if(_quote.DT){_dt=_quote.DT;}
else{_dt=STX.strToDateTime(_quote.Date);}
return _dt;}
,new_quotes=[],currentQuote=quotes[0];new_quotes.push(quotes[0]);var iter_parms={'begin':_make_date(currentQuote),'interval':interval,'periodicity':1,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);for(var i=1;H4z.M3F(i,quotes.length);i++){var nextQuote=quotes[i],mdt=iter.next(),qdt=_make_date(nextQuote);while(H4z.i3F(mdt,qdt)){new_quotes.push({DT:mdt,Open:currentQuote.Close,High:currentQuote.Close,Low:currentQuote.Close,Close:currentQuote.Close,Volume:0,Adj_Close:currentQuote.Adj_Close}
);mdt=iter.next();}
new_quotes.push(nextQuote);currentQuote=nextQuote;}
return new_quotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=G2K;this.intervalTimer=H33;this.updatingChart=G2K;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.updateSubscriptions=function(){if(this.quoteFeed.checkSubscriptions)this.quoteFeed.checkSubscriptions(this.stx);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:H4z.C9D}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=H33;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=H4z.d3F(stx.masterData.length,1);H4z.U3F(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[H4z.K3F(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();if(!params.nodraw)stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;H4z.a3F(i,results.length);i++){var result=results[i];if(!result.dataCallback.error&&H4z.D3F(result.dataCallback.error,0)){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error&&H4z.L3F(dataCallback.error,0)){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){if(self.behavior.prefetchAction)self.behavior.prefetchAction("updateChart");return function(dataCallback){howManyReturned++;if(H4z.u3F(symbol,params.chart.symbol)&&H4z.Q3F(interval,self.stx.layout.interval)&&H4z.p3F(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error&&H4z.T3F(dataCallback.error,0)){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData&&params.chart.masterData.length&&dataCallback.quotes&&H4z.R3F(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[H4z.w3F(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&H4z.v3F(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&H4z.o3F(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);params.chart.attribution=dataCallback.attribution;}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
}
else{return ;}
if(H4z.c3F(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);if(chart.masterData&&chart.masterData.length)params.startDate=chart.masterData[H4z.x0D(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;var closureCB=closure(this,params,chart.symbol);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
}
}
;STXChart.Driver.prototype.updateChartLoop=function(){if(this.behavior.noUpdate)return ;function closure(self){return function(){if(self.behavior.noUpdate)return ;self.updateChart();}
;}
if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),H4z.e0D(this.behavior.refreshInterval,m1K));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=H4z.C9D;function closure(){return function(response){var e1K="eF",Z23="ly",w83="rect",p1K="ented",c63="em",c9D="il",N13="oreA",n33=", ",h9D="error";if(response)cb(response);else if(!chart.moreAvailable){cb(H33);}
else if(H4z.W0D(count++,M6K)){cb((h9D+n33+i33+N13+j8K+b63+c9D+j23+P93+f23+p23+Q93+y63+p23+t0K+Q63+P93+c63+p1K+p23+D23+k23+w83+Z23+p23+t0K+Q93+p23+c7D+e73+y63+e1K+F6K));}
else{self.checkLoadMore(chart,B33,B33,closure());}
}
;}
this.checkLoadMore(chart,B33,B33,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb,nodraw){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){if(self.behavior.prefetchAction)self.behavior.prefetchAction("checkLoadMore");return function(dataCallback){if(H4z.m0D(params.symbol,params.chart.symbol)&&H4z.N0D(interval,self.stx.layout.interval)&&H4z.n0D(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error&&H4z.f0D(dataCallback.error,0)){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=params.loadMoreReplace?dataCallback.quotes:dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();if(!nodraw)self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
params.chart.loadingMore=false;if(cb)cb(null);}
else{return ;}
}
;}
var fetching=chart.loadingMore;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||H4z.Z0D(chart.dataSet.length,this.stx.maxDataSetSize)){if((H4z.C0D(chart.dataSet.length,0)&&H4z.H0D(chart.scroll,chart.dataSet.length))||forceLoadMore){if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);params.nodraw=nodraw;if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
var closureCB=closure(this,params);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){var W1K="we";if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((H4z.E0D(interval,"month")||H4z.S0D(interval,"week"))&&!this.stx.dontRoll){p*=(H4z.l0D(interval,(W1K+f23+E33)))?7:30;}
var bars=H4z.F0D(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,symbolObject,chart){var J2K="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((H4z.I0D(interval,b9D)||H4z.P0D(interval,N83))&&!this.stx.dontRoll){interval=M43;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,symbolObject:symbolObject,chart:chart,interval:interval,extended:this.stx.layout.extended,period:H4z.Y9D,feed:J2K,ticks:ticks}
,B33);if(!params.symbolObject)params.symbolObject={symbol:symbol}
;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=z0K;}
if(params.pts)params.ticks=Math.max(params.ticks,m1K);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,params.symbolObject,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){if(self.behavior.prefetchAction)self.behavior.prefetchAction("newChart");return function(dataCallback){if(H4z.g0D(symbol,qparams.chart.symbol)&&H4z.h4D(interval,stx.layout.interval)&&H4z.r4D(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&H4z.k4D(dataCallback.error,0)&&dataCallback.quotes&&H4z.O4D(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes,params.chart);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;stx.createDataSet();if(params.initializeChart)stx.initializeChart();if(!qparams.nodraw)stx.home();}
else{self.quoteFeed.announceError(qparams.originalState,dataCallback);}
}
else{if(cb)cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
self.loadDependents(qparams);self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);var closureCB=closure(this,qparams);if(this.stx.isEquationChart(qparams.symbol)){STX.fetchEquationChart(qparams,closureCB);}
else{this.quoteFeed.fetch(qparams,closureCB);}
}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var Y53="el",K13="nin",R43="sig",N8K="ithou",d23="eFeed",P63="gQ",A2K="agA",z4K="hT",m13="ac",F4K="tt",f8K="Atte";if(!feed.label){console.log((f8K+i33+z93+x73+p23+x73+F93+p23+b63+F4K+m13+z4K+A2K+Z0K+Q93+P63+e73+F93+x73+d23+p23+L8K+N8K+x73+p23+b63+R73+R43+K13+R0K+p23+b63+p23+P93+j23+Y53));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;S(G2K);STX.Comparison.priceToPercent=function(stx,chart,price){return H4z.t4D(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*Z1K)*M1K),M1K);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return H4z.s4D(STX.Comparison.baseline,(H4z.Y9D+(percent/Z1K)));}
;STX.Comparison.stopSort=function(lhs,rhs){return H4z.J4D(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open",(a63+t0K+R0K+g33),"Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=H4z.A4D(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;H4z.Y4D(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(H4z.X4D(drawing.name,"comparison_stop"))if(H4z.q4D(drawing.tick,firstTick)&&H4z.B4D(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;H4z.y4D(i,transformsToProcess);i++){if(H4z.G4D(i,transformsToProcess))i=-1;position=firstTick+i;if(H4z.j4D(position,chart.dataSet.length)&&H4z.b4D(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;H4z.V4D(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||H4z.z6D(quote[field],0))quote.transform[field]=H4z.M6D(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(H4z.i6D(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||H4z.d6D(quote[field],0))quote.transform[field]=H4z.U6D(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||H4z.K6D(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=H4z.a6D(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||H4z.D6D(quote[field],0))quote.transform[field]=H4z.L6D(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&H4z.u6D(stopPointer,stops.length)){if(H4z.Q6D(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&H4z.p6D(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||H4z.T6D(position,mouseStop)){for(j=0;H4z.R6D(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=H4z.w6D(current,(1+(quote.transform.Close/100)));}
}
for(j=0;H4z.v6D(j,fields.length);j++){field=fields[j];current=quote[field];if(current||H4z.o6D(current,0)){var baseline=firstQuote[field];if(!baseline&&H4z.c6D(baseline,0)){firstQuote[field]=baseline=H4z.x2D(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=H4z.e2D(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(H4z.W2D(position,0)){chart.dataSegment.push(null);}
if(H4z.m2D(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var g6K=0.001,F7D="und";if(H4z.N2D(price,H33)||typeof price==(F7D+f23+G63))return P53;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(H4z.n2D(priceTick,H4z.Y9D))price=stx.internationalizer.percent0.format(H4z.f2D(price,Z1K));else if(H4z.Z2D(priceTick,I13))price=stx.internationalizer.percent1.format(H4z.C2D(price,Z1K));else if(H4z.H2D(priceTick,I9D))price=stx.internationalizer.percent2.format(H4z.E2D(price,Z1K));else if(H4z.S2D(priceTick,g6K))price=stx.internationalizer.percent3.format(H4z.l2D(price,Z1K));else price=stx.internationalizer.percent4.format(price);}
else{if(H4z.F2D(priceTick,H4z.Y9D))price=price.toFixed(H4z.C9D)+l33;else if(H4z.I2D(priceTick,I13))price=price.toFixed(H4z.Y9D)+l33;else if(H4z.P2D(priceTick,I9D))price=price.toFixed(H4z.A9D)+l33;else if(H4z.g2D(priceTick,g6K))price=price.toFixed(H4z.f9D)+l33;else price=price.toFixed(H4z.Q9D)+l33;}
if(H4z.h1D(parseFloat(price),H4z.C9D)&&H4z.r1D(price.charAt(H4z.C9D),B73)){price=price.substring(H4z.Y9D);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var A63="ul",L9D=((117,0xE2)>=126.?(0x1F8,"R"):(131.,23.40E1));if(!STX.Comparison.requestCorrelation||H4z.k1D(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;H4z.O1D(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs[(L9D+f23+R73+A63+x73+p23)+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(H4z.t1D(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;H4z.s1D(ii,compareArray.length);ii++){if(H4z.J1D(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var F53=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(F53);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var D93="dataSet",Y33="string";if(!chart)chart=this.chart;if(typeof chart==Y33)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=Z9D;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=H33;chart.panel.yAxis.whichSet=D93;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(m6K,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;H4z.A1D(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=H4z.Y1D(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;H4z.X1D(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(H4z.q1D(word.charCodeAt(0),33)&&H4z.B1D(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(H4z.y1D(word.length,1)){if(H4z.G1D(word.charCodeAt(1),33)&&H4z.j1D(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(H4z.b1D(a.id,b.id))return 1;else if(H4z.V1D(a.id,b.id))return -1;return H4z.z8D(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(H4z.M8D(a.weight,b.weight))return 1;else if(H4z.i8D(a.weight,b.weight))return -1;return H4z.d8D(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;H4z.U8D(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(H4z.K8D(a.weight,b.weight))return 1;else if(H4z.a8D(a.weight,b.weight))return -1;return H4z.D8D(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;H4z.L8D(r,res.length);r++){if(H4z.u8D(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;H4z.Q8D(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&H4z.p8D(entry.category,category))continue;var name=entry.name.toUpperCase();if(H4z.T8D(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=H4z.R8D(name.length,keyword.length);if(!contains&&H4z.w8D(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(H4z.v8D(myKey.charCodeAt(0),33)&&H4z.o8D(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(H4z.c8D(myKey.length,1)){if(H4z.x5D(myKey.charCodeAt(1),33)&&H4z.e5D(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(H4z.W5D(kk.length,1))continue;if(H4z.m5D(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&H4z.N5D(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(H4z.n5D(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&H4z.f5D(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(H4z.Z5D(k2," "))break;}
}
for(var extraKeys=1;H4z.C5D(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=H4z.H5D(descResults.length,1);H4z.E5D(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;H4z.S5D(wd,words.length);wd++){if(H4z.l5D(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===p03&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var R=function(G){_stxThirdParty=G.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=l9D)R(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();