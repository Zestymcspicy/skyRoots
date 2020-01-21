const links = document.querySelectorAll('.js-link');
const pages = document.querySelectorAll('.js-page');
const navbarNav = document.getElementById('navbarNav');


if(document.location.href.indexOf('fadein')===-1){
  document.querySelector( '.navbar-toggler-icon' ).addEventListener( 'click', function() {
    // console.log('hello')
    this.classList.toggle( 'active' );
  });
}

links.forEach(link => link.addEventListener('click', ()=> {
  navbarNav.classList.remove('show')
}))

const closeOpener = () => {
  let opener = document.querySelector('.opener');
  opener.style.display='none';
  document.body.style='overflow-y:scroll';
}

if(document.querySelector('.opener')){
  runOpen();
  loadBlogPost();
}
// if(document.querySelector('.opener')){
//   if(localStorage.seenIntro==='true') {
//     if(localStorage.whenSeen+300000<=Date.now()){
//       localStorage.whenSeen=Date.now();
//       runOpen()
//     }else{
//       closeOpener()
//     }
//   } else {
//     localStorage.whenSeen=Date.now();
//     localStorage.seenIntro=true;
//     runOpen();
//   }
// }
function loadBlogPost(){
  var db = firebase.firestore()

  // let featuredTitle = document.getElementById('featuredTitle');
  db.collection('quillPosts').get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
        let data = (doc.data());
        let textData = data.entry;
        let frontPageBlogArea = document.createRange().createContextualFragment(`<div>
          <h2 class="pt-3 text-center">A word from the creator.....</h2>
          <div class="row marketing">
            <div class="col-md-11 px-0 ml-md-5 mr-md-2">
            <p class="px-md-4 pl-md-4" id="featuredText"></p>
            </div>
          </div>
          </div>`)
        if(data.frontPage && data.published){
          let featuredText = frontPageBlogArea.getElementById('featuredText');
          document.getElementById('featuredPostHook').appendChild(frontPageBlogArea)
        // let entry = JSON.parse(data)
          const entry = JSON.parse(textData);
          console.log(entry);
          const quillText = new Quill(document.createElement('div'));
          quillText.setContents(entry);
          featuredText.insertAdjacentHTML('afterBegin',`${quillText.root.innerHTML}`);
      }
    });
  });
}


function runOpen(){
    document.getElementById('skipButton').addEventListener('click', closeOpener);
    let textArray=['A board game about Balance', 'From a Native American point of view',
    'Coming soon, under development now', '... And you can be a part!']
    let i;
    let elAttach = document.getElementById('openerParagraph');
    setTimeout(() => {
    for(i=0; i<textArray.length; i++){
      const text = `<span class="short-fade">${textArray[i]}</span><br>`
      setTimeout(()=> {
        elAttach.insertAdjacentHTML('beforeend', text)
      }, (i*1700))
      }
    }, 600)

    setTimeout(() => {
      document.querySelector('#opener-logo').classList.remove('opener-text-hidden');
      document.querySelector('#opener-logo').classList.add('short-fade');
      // document.querySelector('#gamePlay').src='images/converted.mp4';
    }, 6200)


    setTimeout(() =>{
      closeOpener();
      // opener.style.height='0px';
    }, 10980)
}

if(document.getElementById('contactFormSend')){
  let formSend = document.getElementById('contactFormSend')
  formSend.addEventListener('click', () => {
    let goHome = document.getElementById('goHome');
    setTimeout(() => goHome.disabled=false, 500)
  })
}

if(document.getElementById('gamePlay')){
  let video = document.getElementById('gamePlay');
  video.addEventListener('canplay', () => {
    // video.autoplay='autoplay'
    console.log('loaded')
  })
}

if(document.location.href.indexOf('smokescorner.html')!==-1){
  var db = firebase.firestore()

  // let featuredTitle = document.getElementById('featuredTitle');
  let featuredText = document.getElementById('featuredText');
  db.collection('quillPosts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let data = (doc.data());
        data = data.entry;
        // let entry = JSON.parse(data)
        const entry = JSON.parse(data);
        console.log(entry);
        const quillText = new Quill(document.createElement('div'));
        quillText.setContents(entry);
        featuredText.insertAdjacentHTML('afterBegin',`${quillText.root.innerHTML}`);
    });
});
  console.log('welcome to smokescorner');
}

if(location.href.indexOf('contact')!==-1){
  let emailForm = document.myemailform
  myemailform.addEventListener('submit', e => {
    // e.preventDefault();
    const bodyObj = {
      name: e.target[0],
      email: e.target[1],
      message: e.target[2]
    }
    console.log(bodyObj);
  })
}



// const evtSource = new EventSource('https://script.google.com/macros/s/AKfycby5owE1CX0H2DCem8XN4R11vFUAMPdoQTMwnG10UA/exec')
// evtSource.addEventListener('onmessage', e=>console.log(e))
// method="POST"
// action="https://script.google.com/macros/s/AKfycby5owE1CX0H2DCem8XN4R11vFUAMPdoQTMwnG10UA/exec"
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
