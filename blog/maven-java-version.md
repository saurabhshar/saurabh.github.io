# Setup correct Java version for Maven

I have multiple java version installed on my m/c. I realized during maven build I was getting below error specific to version 11.0.2.


>[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.10.1:compile (java-compile) on project server-impl: Compilation failure
[ERROR] An exception has occurred in the compiler (11.0.2). Please file a bug against the Java compiler via the Java bug reporting page (http://bugreport.java.com) after checking the Bug Database (http://bugs.java.com) for duplicates. Include your program and the following diagnostic in your report. Thank you.   

[ERROR] java.lang.NullPointerException.  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitApply(Flow.java:1235)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.tree.JCTree$JCMethodInvocation.accept(JCTree.java:1634)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.comp.Flow$BaseAnalyzer.scan(Flow.java:398)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitVarDef(Flow.java:989)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.tree.JCTree$JCVariableDecl.accept(JCTree.java:956)  
[ERROR] 	at jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)


Error is specific to 11.0.2, Maven is picking wrong version of java. Even though java version on path is 11.0.18.  

**% java -version**  
openjdk version "11.0.18" 2023-01-17  
OpenJDK Runtime Environment Homebrew (build 11.0.18+0)  
OpenJDK 64-Bit Server VM Homebrew (build 11.0.18+0, mixed mode)


Check what is being picked up by using below:  

**% mvn -version**   
Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584)
Maven home: /usr/local/Cellar/maven/3.9.0/libexec
Java version: 11.0.2, vendor: Oracle Corporation, runtime: /Users/s.sharma.5/.sdkman/candidates/java/11.0.2-open
Default locale: en_DE, platform encoding: UTF-8
OS name: "mac os x", version: "10.16", arch: "x86_64", family: “mac"


Maven picks java version from JAVA_HOME, so set it up correctly. 

List all available jdk versions:  

**% /usr/libexec/java_home -V**  
Matching Java Virtual Machines (3):
    19.0.2 (x86_64) "Homebrew" - "OpenJDK 19.0.2" /usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home
    16.0.1 (x86_64) "Oracle Corporation" - "Java SE 16.0.1" /Library/Java/JavaVirtualMachines/jdk-16.0.1.jdk/Contents/Home
    11.0.18 (x86_64) "Homebrew" - "OpenJDK 11.0.18" /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home
/usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home



**% set export JAVA_HOME=/usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home**.   

**% mvn -version**.  
Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584)
Maven home: /usr/local/Cellar/maven/3.9.0/libexec
Java version: 11.0.18, vendor: Homebrew, runtime: /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home
Default locale: en_DE, platform encoding: UTF-8
OS name: "mac os x", version: "11.6.1", arch: "x86_64", family: “mac"
