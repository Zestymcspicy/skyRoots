const links = document.querySelectorAll('.js-link');
const pages = document.querySelectorAll('.js-page');
const navbarNav = document.getElementById('navbarNav');

document.querySelector( '.navbar-toggler-icon' ).addEventListener( 'click', function() {
  // console.log('hello')
  this.classList.toggle( 'active' );
});

links.forEach(link => link.addEventListener('click', ()=> {
  navbarNav.classList.remove('show')
}))

if(document.location.href.indexOf('index.html')!==-1){
  setTimeout(() =>{
    let opener = document.querySelector('.opener');
    // opener.style.height='0px';
  }, 7900 )
}

if(document.location.href.indexOf('smokescorner.html')!==-1){
  var db = firebase.firestore()

  // let featuredTitle = document.getElementById('featuredTitle');
  let feateuredText = document.getElementById('featuredText');
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
