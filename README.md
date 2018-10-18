# React-security

### 1) Cross-sire Scripting (XSS)
<ul>
<li>1. XSS is a type of injection attack on a web application</li>
<li>2.This injection inserts malicious scripts into Web sites the effect of this injection is that the attacker can send malicious code to a different end user of the website the malicious code can then grab sensitive information and send it back to the attacker.</li>
<li>This information can be things like cookies hold user data</li>
</ul>

### 2) Dangers of XSS
<ul>
<li>The exposure of a user's sensitive information like authentication passwords, emails, personal data or even credit card etc.</li>
<li>Consequences are from damaging the files to loss of account</li>
</ul>

### 3) Types of XSS Attacks
<ul>
<li><b>1) Reflected XSS -</b> It takes advantage of a vulnuerable input field in the website. Using this input field the attacker can inject an entire script into the website.</li>
<li>Example - A pair of script tags that contain code to take the cookies of the user and send that information to the attacker</li>
<li><b>2) Stored XSS -</b> It inject a dangerous script into the website in a way where the website stores that information in the victim's persistent information. </li>
<li><b>Example - </b> script stored in your profile page. Therefore the malicious script not only exectues for one victim but potentially for hundreds of user who visit the profile page</li>
<li>Stored XSS also called persistent XSS</li>
</ul>

### 4) XSS Prevention
<ul>
<li>1) Excape user-contributed input - It means that strings needs to be sanitized. </li>
<li>Example - There are special symbol in HTML like '<' which is beginning of attack. so if user want to add '<' symbol . we stored this symbol as a HTML entity alternative like '&lt;'</li>
<li>Lucily react escapes input and sanitizes user input by default.</li>
</ul>

### 5) Vulnerable inputs
    run php file using below command
    php -S localhost:8000 -t ./php

### Escaping inputs with React
<p>1) React escapes any strings embedded within JSX</p>
<p>2) Everything converts into a string before it renders</p>   
Example - see components EscapeInput.js 

#### DangerouslySetInnerHTML

<p>There are some cases where we want to render user input as HTML within our component.</p>
<p>React having a property called dangerouslySetInnerHTML that has the ability to take user input and strings and directly render it as JSX within the react component.</p>
Example - see components DangerousHTML.js

#### User-Supplied attributes
<p>Apart from input element we have an anchor tag that generates links to another page</p>
<p>The anchor tag <a/> generates links</p>
<p>Example - see component UserHref.js</p>
<p>Write javascript:alert(document.cookie) in input box and click you will see the cookies got fetched.</p>

### The Dangers of Eval()
<p>Eval is an exteremly powerful medium javascript function that takes a string and evaluated as javascript code.</p>
<p>Dangerous with user-supplied strings.</p>
<p>Runs with the provilege of its caller</p>
<p>Calling eval is extremly vulnerable to cross-site scripting it evaluates javascript supplied by a user. SO an attacker does't even have to supply script tags to run dangerous code</p>

### SafeEval
<p>We can avoid dangerous eval function by using the native function that create its own isolate scope and we can avoid the access of private variables</p>
<p>Code editor like jsfiddle or codepen prevent access attacks by the solution of same origin policy</p><p>
 To prevent accessing sensitive data on the main domain for the application online tools will run the user supplied scripts and code on another domain separately located domain will usially be a server that does the job of executing the code and evaluating it</p>


 <p><b>Good solution to prevent XSS <b>is by having a seperate server and domain to run the user supplied code from where the user actually supplies it ensure that sensitive data that exists on the main domain cannot reachedby attacker </p>


 #### Same-origin Policy 
 <p>It enforces script execution occur only with the same origin.</p>
 <p>It helps prevent malicious scripts from executing within an open tab on user's web browser where they might be logged into a sensitive account.</p>
<p><b>Origin - It is composed of three elements </b></p>
<p>Hostname of the website</p>
<p>port number of the website- w80 for http 443 for https</p>
<p>URI Scheme of the page - URI scheme contains more information including the current user, their path and any other fragments of the information </p>

#### How to remove Vulerabilities
<p>Remove unused dependencies, and components</p>
<p>Track the versions of components to keep them up-to date</p>
<p>Use components that you can trust</p>

### Cross-site Request Forgery(CSRF)

<p>CSRF forces a victim to execute unwanted actions</p>
<p>Actions include changing personal info or making transfers</p>
<p>A CSRF attack occur while the victim is authenticated</p>
<p>CSRF target state changing requests(modifying password, email addresses etc.). They are not the simple theif behind the cookie data but they execute a request on behalf of an authenticate user</p>

#### Broken authentication
<p>It occurs when an attacker gains access to a victims account in a web application due to weakness in the sign up or log in system of the app</p>
<p>Permits many requests, leading to brute force guessing of username and password exists in the systems</p>
<p>Allows weak password that are easily guessable</p>
<p>Systems lacks multi-factor authentication that require additional verification on behalf of user like confirming a code sent through a text message</p>

### Broken Authentication Prevention 
<p>Enforce limits on password guess and delays on authentication requests</p>
<p>Implement weak password checks</p>
<p>Add mutli-factor authentication</p>


### JSON Web Tokens
<p>1) Access token is a piece of data that grants an authenticated or Logged in user continued access to an application </p>
<p>2) JWT is the JSON standard defined access token</p>

### JWT Flow
<p>1) User attempt to sign up or log into the aplication then the token is generated by the authentication system server as user is going through the logging in or sign up process</p>
<p>2) Once the token is generated the server sends its token back to the clicnt the client then stores locally for reuse.</p>
<p>3) Client can either use browser cookies or local storage to store that token.</p>
<p>4) When the client wants to perform a protected action like accessing certain pages or updating information well they're going to provide that token the way the aplication can verify if the user has a privilage for performing these actions on the application.</p>
<p>note** There are diefferent type of tokens like access token, id_token(to store user profile info like names and emails), 'refresh_token(to gain a new access token after the first access one is expired) and more</p>