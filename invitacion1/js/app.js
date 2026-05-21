const elements = document.querySelectorAll('.fade-up');

const Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.05
});

/*const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

},{
  threshold:0.15
});

elements.forEach(el => observer.observe(el));*/
