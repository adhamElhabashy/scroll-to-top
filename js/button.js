let span = document.querySelector(".btn");
console.log(span);
window.onscroll = function () {
	if (window.scrollY >= 600) {
		console.log("adham");
		span.classList.add("active");
	} else {
		span.classList.remove("active");
	}
};
function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
span.addEventListener("click", scrollToTop);
