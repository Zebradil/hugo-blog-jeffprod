 const $burgers = document.getElementsByClassName('navbar-burger');

 if ($burgers.length > 0) {
   for (const $burger of $burgers) {
     $burger.addEventListener('click', () => {
       const target = $burger.dataset.target;
       const $target = document.getElementById(target);
       $burger.classList.toggle('is-active');
       $target.classList.toggle('is-active');
     });
   };
 }
