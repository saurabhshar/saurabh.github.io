"use strict";(self.webpackChunksaurabh_github_io=self.webpackChunksaurabh_github_io||[]).push([[1537],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>b});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),p=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},v=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),v=t,b=m["".concat(i,".").concat(v)]||m[v]||u[v]||o;return n?r.createElement(b,l(l({ref:a},s),{},{components:n})):r.createElement(b,l({ref:a},s))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=v;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[m]="string"==typeof e?e:t,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9782:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),t=(n(7294),n(3905));const o={},l="Setup correct Java version for Maven",c={permalink:"/blog/maven-java-version",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/maven-java-version.md",source:"@site/blog/maven-java-version.md",title:"Setup correct Java version for Maven",description:"I have multiple java version installed on my m/c. I realized during maven build I was getting below error specific to version 11.0.2.",date:"2023-02-16T22:20:15.000Z",formattedDate:"February 16, 2023",tags:[],readingTime:1.37,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},i={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(m,(0,r.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"I have multiple java version installed on my m/c. I realized during maven build I was getting below error specific to version 11.0.2."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"[ERROR]"," Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.10.1:compile (java-compile) on project server-impl: Compilation failure\n","[ERROR]"," An exception has occurred in the compiler (11.0.2). Please file a bug against the Java compiler via the Java bug reporting page (",(0,t.kt)("a",{parentName:"p",href:"http://bugreport.java.com"},"http://bugreport.java.com"),") after checking the Bug Database (",(0,t.kt)("a",{parentName:"p",href:"http://bugs.java.com"},"http://bugs.java.com"),") for duplicates. Include your program and the following diagnostic in your report. Thank you.   ")),(0,t.kt)("p",null,"[ERROR]"," java.lang.NullPointerException.",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitApply(Flow.java:1235)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.JCTree$JCMethodInvocation.accept(JCTree.java:1634)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$BaseAnalyzer.scan(Flow.java:398)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitVarDef(Flow.java:989)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.JCTree$JCVariableDecl.accept(JCTree.java:956)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)"),(0,t.kt)("p",null,"Error is specific to 11.0.2, Maven is picking wrong version of java. Even though java version on path is 11.0.18.  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% java -version"),(0,t.kt)("br",{parentName:"p"}),"\n",'openjdk version "11.0.18" 2023-01-17',(0,t.kt)("br",{parentName:"p"}),"\n","OpenJDK Runtime Environment Homebrew (build 11.0.18+0)",(0,t.kt)("br",{parentName:"p"}),"\n","OpenJDK 64-Bit Server VM Homebrew (build 11.0.18+0, mixed mode)"),(0,t.kt)("p",null,"Check what is being picked up by using below:  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% mvn -version"),(0,t.kt)("br",{parentName:"p"}),"\n",'Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584)\nMaven home: /usr/local/Cellar/maven/3.9.0/libexec\nJava version: 11.0.2, vendor: Oracle Corporation, runtime: /Users/s.sharma.5/.sdkman/candidates/java/11.0.2-open\nDefault locale: en_DE, platform encoding: UTF-8\nOS name: "mac os x", version: "10.16", arch: "x86_64", family: \u201cmac"'),(0,t.kt)("p",null,"Maven picks java version from JAVA_HOME, so set it up correctly. "),(0,t.kt)("p",null,"List all available jdk versions:  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% /usr/libexec/java_home -V"),(0,t.kt)("br",{parentName:"p"}),"\n",'Matching Java Virtual Machines (3):\n19.0.2 (x86_64) "Homebrew" - "OpenJDK 19.0.2" /usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home\n16.0.1 (x86_64) "Oracle Corporation" - "Java SE 16.0.1" /Library/Java/JavaVirtualMachines/jdk-16.0.1.jdk/Contents/Home\n11.0.18 (x86_64) "Homebrew" - "OpenJDK 11.0.18" /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home\n/usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home'),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% set export JAVA_HOME=/usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home"),".   "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% mvn -version"),".",(0,t.kt)("br",{parentName:"p"}),"\n",'Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584)\nMaven home: /usr/local/Cellar/maven/3.9.0/libexec\nJava version: 11.0.18, vendor: Homebrew, runtime: /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home\nDefault locale: en_DE, platform encoding: UTF-8\nOS name: "mac os x", version: "11.6.1", arch: "x86_64", family: \u201cmac"'))}u.isMDXComponent=!0}}]);