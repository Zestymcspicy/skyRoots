const links = document.querySelectorAll('.js-link');
const pages = document.querySelectorAll('.js-page');
const navbarNav = document.getElementById('navbarNav');


if(document.location.href.indexOf('fadein')===-1){
  document.querySelector( '.navbar-toggler-icon' ).addEventListener( 'click', function() {
    // console.log('hello')
    this.classList.toggle( 'active' );
  });
}

const closeOpener = () => {
  let opener = document.querySelector('.opener');
  opener.style.display='none';
  document.body.style='overflow-y:scroll';
}
  links.forEach(link => link.addEventListener('click', ()=> {
    navbarNav.classList.remove('show')
  }))

if(document.querySelector('.opener')){
  if(localStorage.seenIntro==='true') {
    if(localStorage.whenSeen+300000<=Date.now()){
      localStorage.whenSeen=Date.now();
      runOpen()
    }else{
      closeOpener()
    }
  } else {
    localStorage.whenSeen=Date.now();
    localStorage.seenIntro=true;
    runOpen();
  }
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
  // var tiles = new Image();
  // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d');
  // tiles.src ='images/FullSizeRender.jpg';
  // let cWidth, cHeight;
  // tiles.onload = () => {
  //   cWidth = tiles.width;
  //   cHeight = tiles.height;
  // }
  // setTimeout(()=> {
    // document.querySelector('.opener-text-title').style.display='none';
    // document.querySelector('#openerTextFirst').classList.remove('opener-text-hidden');
    // document.querySelector('#openerTextFirst').classList.add('short-fade');
    // document.querySelector('#openerTextFirst').classList.add('opener-text-active');
    // document.querySelector('#FullSizeRender').classList.add('opener-text-hidden');
  // }, 3999)
  // setTimeout(() => {
    // document.querySelector('#openerTextSecond').classList.remove('opener-text-hidden');
    // document.querySelector('#openerTextSecond').classList.add('short-fade');
    // document.querySelector('#openerTextSecond').classList.add('opener-text-active');
  // }, 4799)
  // setTimeout(() => {
    // runWaxing()
    // document.querySelector('#openerTextSecond').classList.add('opener-text-hidden');
    // document.querySelector('#openerTextFirst').classList.add('opener-text-hidden');
    // document.querySelector('#canvas').classList.remove('opener-text-hidden');
  // },6399)
  // setTimeout(() => {
    // document.querySelector('#openerTextSecond').classList.add('opener-text-hidden');
    // document.querySelector('#openerTextFirst').classList.add('opener-text-hidden');
  // }, 8799)

  function runWaxing() {
    let wh
    if(window.innerHeight>window.innerWidth){
      wh=(.9*window.innerWidth)
    } else {
      wh=(.9*window.innerHeight)
    }
    canvas.height=wh;
    canvas.width=wh;
    canvas.classList.remove('opener-text-hidden')

    // tiles.addEventListener('load', function() {
    ctx.drawImage(tiles, 0, 0, wh, wh)
    ctx.fillRect(0, (.5*wh), wh, (.5*wh))
    ctx.fillRect((.5*wh), 0, (.5*wh), (.5*wh))
    ctx.beginPath();
    ctx.moveTo(((1/6)*wh),0);
    ctx.lineTo((.5*wh),(.5*wh));
    ctx.lineTo((.5*wh), 0);
    ctx.lineTo(((1/3)*wh),0);
    ctx.fill();
    // }, false);
    // console.log(tiles);
  }
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
    // video.addEventListener('click', function(){
    //   video.play();
    // })
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
