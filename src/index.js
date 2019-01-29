import './scss/style.scss';
import $ from 'jquery';
import showdown from 'showdown';
const converter = new showdown.Converter();

let sp = '&nbsp;', sub = sp+sp+sp, sub2 = sub+sub, sub3 = sub2+sub2;

let md = `
#Eric Posas\n
##Front End Web Developer \n
<br>
##${sub}TM Advertising\n
###${sub2}Flash Developer (2013)\n
- Created Flash banners, interactive animations, and billboard videos\n
- Authored digital content using a combination of Adobe Suite products, Photoshop, Animate, and Flash\n
- Developed interactive animations for clients American Airlines, Discover, and Statoil\n
<br>
##${sub}Dieste, Inc.\n
###${sub2}Digital Developer (2015)\n
- Transitioned from Flash to Javascript and GSAP animation platform\n
- Created a variety of HTML5 content, including microsites, display banners, and animated video\n
- Coded unique solutions for our clients Goya, Miller, Cricket, and AT&T\n
<br>
##${sub}Freelance\n
###${sub2}Freelance Developer (2017)\n
- Created animated and interactive advertising, microsites, websites\n
- Variety of new client work included Breo, Taco Bueno, Community Coffee, and Walden University\n
<br>
##${sub}Sector 5 Digital\n
###${sub2}Front End Developer (late 2017)\n
- Created an augmented 360 web application for American Airlines\n
- Developed the Sector5 website using GSAP, vanilla JS, and parallax effects\n
- Completed a database + flight simulator project that included front and back end technologies (SQL, PHP, JS/HTML/CSS)\n
- Currently working in NodeJS and Webpack, utilizing ES6 features\n
<br>
###${sub}Current Tech Interests\n
+ React\n
+ Phaser\n
+ NodeJS\n
+ Webpack\n
<br>
<br>
`;

let html = converter.makeHtml( md );
console.log( html );
$('body').append(html);
