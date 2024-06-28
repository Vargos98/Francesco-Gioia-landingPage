var all = gsap.timeline()


all.from('#nav h3',{
  y: -50,
  opacity:0,
  delay:0.3,
  duration:0.4,
  stagger:0.2,
})

all.from('#main h1',{
  x: -500,
  opacity:0,
  delay:0.5,
  duration:0.8,
  stagger:0.4,
})

all.from('img',{
  x:100,
  rotate:45,
  opacity:0,
  duration:0.5,
  stagger:0.4,
})

all.from('h5',{
  y:120,
  opacity:0,
  duration:0.4,
  delay:0.5,
})