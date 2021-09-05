const tweetar = document.querySelector('.principal_form button')
const textarea = document.querySelector('.principal_form textarea')
const tweet = document.querySelector('.principal_posts li')
const feed = document.querySelector('.principal_posts ul')
const page = document.querySelector('.cabecalho_nav a')

function altCor(event) {
	page.style.color = 'rgba(29, 161, 242, 1)'
}

function atribTweet(event) {
	tweetar.style.backgroundColor = 'rgba(29, 161, 242, 0.4)'
	setTimeout(function () {
		tweetar.style.backgroundColor = 'rgba(29, 161, 242, 1)'
	}, 200)
	event.preventDefault()
	const cont = textarea.value
	newTweet(cont)
}

function newTweet(cont) {
	function novaHora() {
		function pad(s) {
			return (s < 10) ? '0' + s : s;
		}
    var date = new Date();
    return [date.getHours(), date.getMinutes()].map(pad).join(':');
}
	const tweetF = {
		nome: 'Daniel',
		foto: './assets/img/ProfilePic.png',
		usuario: '@danielkenzie',
		texto: cont,
		tempo: novaHora()
	}
	listTweet(tweetF)
}

function listTweet(tweetF) {
	const {nome,foto,usuario,texto,tempo} = tweetF
	let li = document.createElement('li')
	let img = document.createElement('img')
	img.src = foto
	img.alt = 'Daniel'
	let div = document.createElement('div')
	let h2 = document.createElement('h2')
	h2.innerText = nome
	let span = document.createElement('span')
	span.innerText = ' ' + usuario + ' ' + tempo
	let p = document.createElement('p')
	p.innerText = texto
	li.appendChild(img)
	li.appendChild(div)
	div.appendChild(h2)
	div.appendChild(span)
	div.appendChild(p)
	feed.appendChild(li)
	console.log(li)
	textarea.value = ''
}
tweetar.addEventListener('click', atribTweet)
page.addEventListener('click', altCor)