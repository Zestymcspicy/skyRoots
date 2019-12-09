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

if(document.location.href.indexOf('smokescorner.html')!==-1){
  let featuredTitle = document.getElementById('featuredTitle');
  let feateuredText = document.getElementById('featuredText');
}


// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
