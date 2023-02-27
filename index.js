//Task 1
//Select and cache the <main>element in a variable named mainEl.
const mainEL = document.querySelector('main');
//Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEL.style.backgroundColor = 'var(--main-bg)';
//Set the content of mainElto <h1>SEI Rocks!</h1>
mainEL.innerHTML = "<h1>SEI Rocks!</h1>";
//Add a class of flex-ctrto mainEl
mainEL.classList.add('flex-ctr');

//Task 2
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector('#top-menu');
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl
topMenuEl.style.height = '100%';
//Set the background color of topMenuElto the value stored in the --top-menu-bg

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Add a class of flex-aroundto topMenuEl
topMenuEl.classList.add('flex-around');

//Task 3
/**Iterate over the entire menuLinksarray and for each "link" object:

Create an <a>element.
On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
Set the new element's content to the value of the textproperty of the "link" object.
Append the new element to the topMenuElelement. */
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];



/**for(element of menuLinks){
const aEl=document.createElement('a');
aEl.setAttribute('href',element.href);
aEl.textContent=element.text;
//aEl.setAttribute('text','menuLinks.text');
topMenuEl.appendChild(aEl);
}*/

menuLinks.forEach(obj => {
  const a = document.createElement('a');
  a.setAttribute('href', obj.href);
  a.textContent = obj.text;
  //a.setAttribute('href',obj.href);
  topMenuEl.appendChild(a);
  //console.log(a.text);
})

//console.log(menuLinks[2].subLinks);

/**const link=menuLinks.map(obj=>{
  const a=document.createElement('a');
  a.setAttribute('href',obj.href);
  a.textContent=obj.text;
  //topMenuEl.appendChild(a);
  return a;

});*/

//Task 4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
//console.log(subMenuEl);

//Task 5.1 Select and cache  all of the <a>elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);
//Declare a global showingSubMenuvariable and initialize it to false
let showingSubMenu = false;

//Task 5.2Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener('click', function (event) {
  //The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault();
  //The second line of code function should immediately return if the element clicked was not an <a>element.
  if (event.target.tagName !== 'A') {
    return;
  }

  /**if (showingSubMenu) {
    buildSubMenu(clickObj.subLinks);
    subMenuEl.style.top = '100%';
  }

  else {
    subMenuEl.style.top = '0';

  }
  function buildSubMenu(subLinks){
    subMenuEl.textContent = "";
    let subMenu=subLinks.forEach((link) => {
    document.createElement('a');
    link.setAttribute('href', link.href);
    link.textContent = link.text;
  })
    subMenuEl.append(link);
    
  }**/


  //console.logthe content of the <a>to verify the handler is working. 
  console.log(event.target.innerHTML);//shows all the event tht occurs when clicked



  //Task 5.3 Next in the event listener, if the clicked <a>link has a class of active:
  //console.dir(event.target);
  if (event.target.classList.contains('active')) {
    //Remove the activeclass from the clicked <a>element.
    console.log(event.target);
    event.target.classList.remove("active");
    //Set the showingSubMenuto false.
    showingSubMenu = false;
    //Set the CSS topproperty of subMenuElto 0.
    //console.dir(event.target);
    subMenuEl.style.top = '0';
    //return to exit the handler.
    return;
  }
  //console.log(event.target.classList);
  //task 5.4
  event.target.classList.remove('active');
  //task 5.5
  event.target.classList.add('active');



  //task5.6 Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinks has a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false
  let clickObj = menuLinks.find((lin) => lin.text === event.target.textContent);

  //console.dir(event.target);
  console.log(clickObj.subLinks)
  if (clickObj.subLinks) {

    showingSubMenu = true;
    buildSubMenu(clickObj.subLinks);
    subMenuEl.style.top = '100%';
  }
  else {
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  }

  //Task 5.7 If showingSubMenu is true: 
  //1.Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
  //2.Set the CSS topproperty of subMenuElto 100%.
  //Otherwise (showingSubMenuis false):1.Set the CSS topproperty of subMenuElto 0.

  /**if (showingSubMenu) {
    showingSubMenu= 'true';
    buildSubMenu(clickObj.subLinks);
    subMenuEl.style.top = '100%';
  }

  else {
    subMenuEl.style.top = '0';

  }*/

  function buildSubMenu(subLinks){
   subMenuEl.textContent = "";
   
    let subMenu=subLinks.map((li) => {
    let a=document.createElement('a');
    a.setAttribute('href', li.href);
    a.textContent = li.text;
    return a;
  });
    subMenuEl.append(...subMenu);
   // return subMenuEl;
    
  }
  /**function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";
    const subMenuLinks = subLinks.map((link) => {
      const subMenuLink = document.createElement("a");
      subMenuLink.setAttribute("href", link.href);
      subMenuLink.textContent = link.text;
      return subMenuLink;
    });
    subMenuEl.append(...subMenuLinks);
  }*/
  //task6.0
  subMenuEl.addEventListener('click',function(event){
    event.preventDefault();
    console.log(event.target.textContent);

    if(event.target!=='<a>'){
      return;
    }
     console.log(event.target.textContent);
     
})

//Task 6.2
//event.target.classList.remove('active');
//Task 6.3
subMenuEl.addEventListener('click',function(event) {
 // h1.classList.add('.head');

  const hone=document.querySelector('h1');
  hone.textContent=event.target.textContent;
  //console.log();

})

topMenuEl.addEventListener('click',function(event){
  const hOn=document.querySelector('h1');
  console.log(event.target);
  //if(event.target==='/about'){
hOn.textContent=event.target.textContent;
  
  //}
})



})











