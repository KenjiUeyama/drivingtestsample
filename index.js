var dropdown = document.querySelectorAll('.dropdown');
for (let i of dropdown) {
	i.addEventListener('click', function(event) {
		event.stopPropagation();
		i.classList.toggle('is-active');
	});
}
