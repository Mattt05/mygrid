const footerYear = document.querySelector(".footer__year");
const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".nav__link");
const mobileItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("sticky-body");

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			document.body.classList.remove("sticky-body");
		})
	);
	handleItemAnimation();
};

const handleItemAnimation = () => {
	let delayTime = 0;

	mobileItems.forEach((item) => {
		item.classList.toggle("nav-item-animation");
		// animation-delay .3s;
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
