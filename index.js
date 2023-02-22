//Task 1
//Select and cache the <main>element in a variable named mainEl.
const mainEL=document.querySelector('main');
//Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEL.style.backgroundColor='var(--main-bg)';
//Set the content of mainElto <h1>SEI Rocks!</h1>
mainEL.innerHTML="<h1>SEI Rocks!</h1>";
//Add a class of flex-ctrto mainEl
mainEL.classList.add('flex-ctr');

//Task 2
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl=document.querySelector('#top-menu');
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl
topMenuEl.style.height='100%';
//Set the background color of topMenuElto the value stored in the --top-menu-bg

topMenuEl.style.backgroundColor='var(--top-menu-bg)';
//Add a class of flex-aroundto topMenuEl
topMenuEl.classList.add('flex-around');

//Task 3
/**Iterate over the entire menuLinksarray and for each "link" object:

Create an <a>element.
On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
Set the new element's content to the value of the textproperty of the "link" object.
Append the new element to the topMenuElelement. */
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  

  for(element of menuLinks){
  const aEl=document.createElement('a');
  aEl.setAttribute('href',element.href);
  aEl.textContent=element.text;
//aEl.setAttribute('text','menuLinks.text');
topMenuEl.appendChild(aEl);
  }


  //console.log(aEl)**/

  