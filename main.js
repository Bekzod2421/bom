document.querySelector('.spinner').classList.remove('d-none');
// BOM
console.log(window);
// window.alert('ok')
console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(window.outerWidth)
console.log(window.origin)
console.log(window.location.host)
console.log(window.scrollY)

console.log(window.clientInformation.appVersion)

document.querySelector('.close').addEventListener('click', ()=>{
	window.close()
})
document.querySelector('.open').addEventListener('click', ()=>{
	window.open('https://it-park.uz')
});

// const oyna = window.open('', '', "width=400, height=200")
// document.querySelector('.go').addEventListener('click', ()=>{
// 	oyna.moveTo(100, 0)
// })

// document.querySelector('.resize').addEventListener('click', ()=>{
// 	oyna.resizeTo(100, 800)
// })

document.querySelector('.next').addEventListener('click', ()=>{
	window.history.forward()
})
console.log(window.navigator.cookieEnabled)

window.addEventListener('load', ()=>{
	document.querySelector('.spinner').classList.add('d-none')
})

