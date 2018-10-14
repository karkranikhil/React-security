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

#### DangerouslySetInnerHTML

<p>There are some cases where we want to render user input as HTML within our component.</p>
<p>React having a property called dangerouslySetInnerHTML that has the ability to take user input and strings and directly render it as JSX within the react component.</p>