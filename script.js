const tl = gsap.timeline();
tl.from("header",{
	opacity:0,
	delay:1,
	duration:1.5
})
tl.from("header .logo h4, header nav h4, header .sing-up h4, header .sing-up h4 i",{
	y:-100,
	opacity:0,
	duration:1,
	stagger:0.5
})
tl.from(".page-1 .right h1",{
	x:-100,
	opacity:0,
	duration:1,
	stagger:0.5
})
tl.from(".page-1 .right .two",{
	x:-500,
	opacity:0,
	duration:1,
})
tl.from(".page-1 .right .two h4",{
	y:100,
	opacity:0,
	duration:1,
	stagger:0.5
})
tl.from(".page-1 .left",{
	scale:0,
	opacity:0,
	duration:1
})
tl.from(".scroll h3",{
	opacity:0,
	y:-150,
	duration:1,
	yoyo:true,
	repeat:-1
})
gsap.from(".page-2 .box",{
	scale:0,
	opacity:0,
	duration:1,
	stagger:0.5,
	scrollTrigger:{
		trigger:".page-2 .box",
		scroller:"body"
	}
})