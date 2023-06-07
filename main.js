import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 3,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.container-div',
      markers: true,
      start: 'top bottom',
      end: 'center top',
      scrub: 1,
    },
  })
  .fromTo(
    '#car',
    {
      y: 300,
    },
    {
      y: -250,
    },
  )
  .to(
    '#road',
    {
      y: 100,
    },
    0,
  )
  .to(
    '#trees',
    {
      y: 400,
    },
    0,
  );
