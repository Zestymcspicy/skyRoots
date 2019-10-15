const links = document.querySelectorAll('.js-link');
const pages = document.querySelectorAll('.js-page');
const navbarNav = document.getElementById('navbarNav');

document.querySelector( '.navbar-toggler-icon' ).addEventListener( 'click', function() {
  // console.log('hello')
  this.classList.toggle( 'active' );
});

links.forEach(link => link.addEventListener('click', ()=> {
  navbarNav.classList.remove('show');
  // navbarNav.classList.add('collapsing');
  // setTimeout(()=>{
  //   navbarNav.classList.remove('collapsing');
  // }, 1000)
}))


// function toggleMenu
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

links.forEach(link => {
  link.addEventListener('click', function(e) {
  console.log(e);
  pages.forEach(page => {
    page.style.display='none'
  });
  let target = e.target.innerHTML;
  if(target === 'Buy Now') {
    target='Purchase';
  }
  document.querySelector(`#${target}`).style.display= 'block';
  })
});
