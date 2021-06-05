document.addEventListener('DOMContentLoaded', function () {
	// Create anchor element.
	var a = document.createElement('a');
	// Create the text node for anchor element.
	var link = document.createTextNode('');
	// Adding Class
	a.className = 'hover-whatsapp-btn';
	// Append the text node to anchor element.
	a.appendChild(link);
	// Set the href property.
	a.href = 'https://api.whatsapp.com/send?phone=9203111681111';
	// Append the anchor element to the body.
	document.body.appendChild(a);
});

let customFilter = document.querySelectorAll('.custom-filter');
let customFilterActiveIndex = [];

if (customFilter[0] != null) {
	for (let i = 0; i < customFilter.length; i++) {
		customFilterActiveIndex[i] = 0;
		let customFilter_arrowLeft = customFilter[i].querySelector(
			'.navigation .arrow.left'
		);
		let customFilter_arrowRight = customFilter[i].querySelector(
			'.navigation .arrow.right'
		);
		let customFilter_tabContainer = customFilter[i].querySelector(
			'.navigation .tab-container'
		);
		let customFilter_tabContainer_tabs = customFilter[i].querySelectorAll(
			'.navigation .tab-container .tab'
		);
		let customFilter_content = customFilter[i].querySelectorAll(
			'.content-container .content'
		);

		setFunctionsForCustomFilter(
			i,
			customFilter_tabContainer,
			customFilter_tabContainer_tabs,
			customFilter_arrowLeft,
			customFilter_arrowRight,
			customFilter_content
		);
		defaultFilterSettings(
			i,
			customFilter_tabContainer,
			customFilter_tabContainer_tabs,
			customFilter_arrowLeft,
			customFilter_arrowRight,
			customFilter_content
		);
	}

	function defaultFilterSettings(
		filterIndex,
		filterTabContainer,
		filterTabsArray,
		arrowLeft,
		arrowRight,
		filterContentArray
	) {
		scrollToActiveFilterOption(
			filterIndex,
			filterTabContainer,
			filterTabsArray
		);
		displayActiveFilterContent(
			filterIndex,
			filterTabsArray,
			filterContentArray
		);
	}

	function setFunctionsForCustomFilter(
		filterIndex,
		filterTabContainer,
		filterTabsArray,
		arrowLeft,
		arrowRight,
		filterContentArray
	) {
		// ! Tabs
		for (let i = 0; i < filterTabsArray.length; i++) {
			filterTabsArray[i].addEventListener('click', () => {
				customFilterActiveIndex[filterIndex] = i;
				scrollToActiveFilterOption(
					filterIndex,
					filterTabContainer,
					filterTabsArray
				);
				displayActiveFilterContent(
					filterIndex,
					filterTabsArray,
					filterContentArray
				);
			});
		}

		// ! Arrow Left
		arrowLeft.addEventListener('click', () => {
			if (customFilterActiveIndex[filterIndex] <= 0) {
				return;
			}
			customFilterActiveIndex[filterIndex]--;
			scrollToActiveFilterOption(
				filterIndex,
				filterTabContainer,
				filterTabsArray
			);
			displayActiveFilterContent(
				filterIndex,
				filterTabsArray,
				filterContentArray
			);
		});
		// ! Arrow Right
		arrowRight.addEventListener('click', () => {
			if (customFilterActiveIndex[filterIndex] >= filterTabsArray.length - 1) {
				return;
			}
			customFilterActiveIndex[filterIndex]++;
			scrollToActiveFilterOption(
				filterIndex,
				filterTabContainer,
				filterTabsArray
			);
			displayActiveFilterContent(
				filterIndex,
				filterTabsArray,
				filterContentArray
			);
		});
	}

	function scrollToActiveFilterOption(
		filterIndex,
		scrollabeTabContainer,
		tabsArray
	) {
		scrollabeTabContainer.scroll({
			left: tabsArray[customFilterActiveIndex[filterIndex]].offsetLeft,
			top: 0,
			behavior: 'smooth',
		});
		for (let i = 0; i < tabsArray.length; i++) {
			if (i == customFilterActiveIndex[filterIndex]) {
				tabsArray[i].classList.add('active');
			} else {
				tabsArray[i].classList.remove('active');
			}
		}
	}

	function displayActiveFilterContent(filterIndex, tabsArray, contentArray) {
		let filterType =
			tabsArray[customFilterActiveIndex[filterIndex]].getAttribute('name');

		for (let i = 0; i < contentArray.length; i++) {
			if (contentArray[i].getAttribute('name') == filterType) {
				contentArray[i].classList.add('display');
			} else {
				contentArray[i].classList.remove('display');
			}
		}
	}
}

//
//
//

let footerCards = document.querySelectorAll(
	'#footerAccordian .card .card-body'
);
window.addEventListener('load', handleFooterAccordian);
window.addEventListener('resize', handleFooterAccordian);

function handleFooterAccordian() {
	if (window.innerWidth > 1024) {
		for (let i = 0; i < footerCards.length; i++) {
			footerCards[i].classList.add('show');
		}
	} else {
		for (let i = 1; i < footerCards.length; i++) {
			footerCards[i].classList.remove('show');
		}
	}
}

//
//
//

let sliderNav = document.querySelector('.custom-slider .navigation');
let sliderBtns = document.querySelectorAll('.custom-slider .slider-btn');
let sliderDots = document.querySelectorAll('.custom-slider .dot');
let sliderContents = document.querySelectorAll('.custom-slider .content');
let sliderWrapper = document.querySelector('.custom-slider .movable-wrapper');
let sliderIndicator = document.querySelector(
	'.custom-slider .slider-indicator'
);
if (sliderWrapper != null) {
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024) {
			let a = sliderContents[0].offsetHeight;
			let b = sliderContents[1].offsetHeight;
			let c = sliderContents[2].offsetHeight;
			let wrapperHeight;
			if (a > b) {
				if (a > c) {
					wrapperHeight = a + 'px';
				} else {
					wrapperHeight = c + 'px';
				}
			} else {
				if (b > c) {
					wrapperHeight = b + 'px';
				} else {
					wrapperHeight = c + 'px';
				}
			}
			sliderWrapper.style.height = wrapperHeight;
		}
	});
	window.addEventListener('load', () => {
		if (window.innerWidth > 1024) {
			let a = sliderContents[0].offsetHeight;
			let b = sliderContents[1].offsetHeight;
			let c = sliderContents[2].offsetHeight;
			let wrapperHeight;
			if (a > b) {
				if (a > c) {
					wrapperHeight = a + 'px';
				} else {
					wrapperHeight = c + 'px';
				}
			} else {
				if (b > c) {
					wrapperHeight = b + 'px';
				} else {
					wrapperHeight = c + 'px';
				}
			}
			sliderWrapper.style.height = wrapperHeight;
		}
	});
	// Be default
	slideToContent(0);
	sliderIndicatorToActiveBtn(0);
	sliderToActiveBtnViaDots(0);

	//
	for (let i = 0; i < sliderBtns.length; i++) {
		sliderBtns[i].addEventListener('click', () => {
			slideToContent(i);
			sliderIndicatorToActiveBtn(i);
		});
	}
	for (let i = 0; i < sliderDots.length; i++) {
		sliderDots[i].addEventListener('click', () => {
			slideToContent(i);
			sliderToActiveBtnViaDots(i);
		});
	}
	function slideToContent(index) {
		if (window.innerWidth <= 1024) {
			sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
		} else {
			sliderWrapper.style.transform = `translateY(-${index * 100}%)`;
		}
	}
	function sliderIndicatorToActiveBtn(index) {
		sliderIndicator.style.top = `${sliderBtns[index].offsetTop}px`;
		sliderIndicator.style.height = `${sliderBtns[index].offsetHeight}px`;
	}
	function sliderToActiveBtnViaDots(index) {
		for (let i = 0; i < sliderDots.length; i++) {
			if (i == index) {
				sliderDots[i].style.backgroundColor = 'var(--accentColor)';
			} else {
				sliderDots[i].style.backgroundColor = 'lightgray';
			}
		}

		sliderNav.style.transform = `translateX(-${index * 100}%)`;
	}
}

//
//
//

const btnPrev = document.querySelector('.multi-content-carousel .prev');
const btnNext = document.querySelector('.multi-content-carousel .next');
const track = document.querySelector(
	'.multi-content-carousel .movable-wrapper'
);
const cardContainer = document.querySelectorAll(
	'.multi-content-carousel .movable-wrapper .content'
)[0];
let numberOfCardsPerSlide;
let spaceOccupiedByAllCardsPerSlide;
let spaceLeft;
let divideLeftoverSpaceBtwAllBoxes;
let currentSlideNum = 0;
let carouselContainerWidth;
let cardContainerWidth;
if (btnPrev != null) {
	cardContainerWidth = cardContainer.offsetWidth;
	carouselContainerWidth = document.querySelector(
		'.multi-content-carousel'
	).offsetWidth;
	setCarContainerWidth();
	window.addEventListener('resize', () => {
		carouselContainerWidth = document.querySelector(
			'.multi-content-carousel'
		).offsetWidth;
		cardContainerWidth = cardContainer.offsetWidth;
		setCarContainerWidth();
	});
	btnNext.addEventListener('click', () => {
		btnPrev.classList.remove('disable');
		btnPrev.disabled = false;
		currentSlideNum++;
		track.style.transform = `translateX(-${
			currentSlideNum * (cardContainerWidth + divideLeftoverSpaceBtwAllBoxes)
		}px)`;
		if (
			track.offsetWidth -
				currentSlideNum *
					(cardContainerWidth + divideLeftoverSpaceBtwAllBoxes) <
			carouselContainerWidth + cardContainerWidth
		) {
			btnNext.classList.add('disable');
			btnNext.disabled = true;
		}
	});
	btnPrev.addEventListener('click', () => {
		btnNext.classList.remove('disable');
		btnNext.disabled = false;
		currentSlideNum--;
		if (currentSlideNum <= 0) {
			btnPrev.classList.add('disable');
			btnPrev.disabled = true;
		}
		track.style.transform = `translateX(-${
			currentSlideNum * (cardContainerWidth + divideLeftoverSpaceBtwAllBoxes)
		}px)`;
	});

	function setCarContainerWidth() {
		numberOfCardsPerSlide = Math.floor(
			carouselContainerWidth / cardContainerWidth
		);
		spaceOccupiedByAllCardsPerSlide =
			numberOfCardsPerSlide * cardContainerWidth;
		spaceLeft = carouselContainerWidth - spaceOccupiedByAllCardsPerSlide;
		divideLeftoverSpaceBtwAllBoxes = spaceLeft / numberOfCardsPerSlide;

		if (divideLeftoverSpaceBtwAllBoxes < 10) {
			numberOfCardsPerSlide = numberOfCardsPerSlide - 1;
			spaceOccupiedByAllCardsPerSlide =
				numberOfCardsPerSlide * cardContainerWidth;
			spaceLeft = carouselContainerWidth - spaceOccupiedByAllCardsPerSlide;
			divideLeftoverSpaceBtwAllBoxes = spaceLeft / numberOfCardsPerSlide;
		}
		let allCards = document.querySelectorAll(
			'.multi-content-carousel .movable-wrapper .content'
		);
		for (var i = 0; i < allCards.length; i++) {
			allCards[i].style.marginRight = divideLeftoverSpaceBtwAllBoxes / 2 + 'px';
			allCards[i].style.marginLeft = divideLeftoverSpaceBtwAllBoxes / 2 + 'px';
		}
	}
}

//
//
//
let allCarousels = document.querySelectorAll('.custom-carousel');
let customCarouselActiveIndex = [];

if (allCarousels[0] != null) {
	for (let i = 0; i < allCarousels.length; i++) {
		customCarouselActiveIndex[i] = 0;

		let carousel_tabContainer = allCarousels[i].querySelector(
			'.navigation .tabs-container'
		);
		let carousel_arrow_left = allCarousels[i].querySelector(
			'.navigation .arrow.left'
		);
		let carousel_arrow_right = allCarousels[i].querySelector(
			'.navigation .arrow.right'
		);
		let carousel_tabContainer_tabs = allCarousels[i].querySelectorAll(
			'.navigation .tabs-container .tab'
		);
		let carousel_movableContentWrapper = allCarousels[i].querySelector(
			'.content-container .movable-wrapper'
		);
		let carousel_movableContentWrapper_content = allCarousels[
			i
		].querySelectorAll('.content-container .movable-wrapper .content');

		setFunctionForCarousel(
			i,
			carousel_tabContainer_tabs,
			carousel_arrow_left,
			carousel_arrow_right,
			carousel_tabContainer,
			carousel_movableContentWrapper,
			carousel_movableContentWrapper_content
		);

		defaultCarouselSettings(
			i,
			carousel_tabContainer_tabs,
			carousel_arrow_left,
			carousel_arrow_right,
			carousel_tabContainer,
			carousel_movableContentWrapper,
			carousel_movableContentWrapper_content
		);
	}

	function defaultCarouselSettings(
		carouselIndex,
		carousel_tabContainer_tabs,
		carousel_arrow_left,
		carousel_arrow_right,
		carousel_tabContainer,
		carousel_movableContentWrapper,
		carousel_movableContentWrapper_content
	) {
		scrollCarouselTabContainerToActiveTab(
			carouselIndex,
			carousel_tabContainer,
			carousel_tabContainer_tabs
		);
		sliderToActiveCarouselSlide(
			carouselIndex,
			carousel_movableContentWrapper,
			carousel_movableContentWrapper_content
		);
	}

	function setFunctionForCarousel(
		carouselIndex,
		carousel_tabContainer_tabs,
		carousel_arrow_left,
		carousel_arrow_right,
		carousel_tabContainer,
		carousel_movableContentWrapper,
		carousel_movableContentWrapper_content
	) {
		// Tabs
		for (let i = 0; i < carousel_tabContainer_tabs.length; i++) {
			carousel_tabContainer_tabs[i].addEventListener('click', () => {
				customCarouselActiveIndex[carouselIndex] = i;
				scrollCarouselTabContainerToActiveTab(
					carouselIndex,
					carousel_tabContainer,
					carousel_tabContainer_tabs
				);
				sliderToActiveCarouselSlide(
					carouselIndex,
					carousel_movableContentWrapper,
					carousel_movableContentWrapper_content
				);
			});
		}

		// Arrows
		carousel_arrow_left.addEventListener('click', () => {
			if (customCarouselActiveIndex[carouselIndex] <= 0) {
				return;
			}
			customCarouselActiveIndex[carouselIndex]--;
			scrollCarouselTabContainerToActiveTab(
				carouselIndex,
				carousel_tabContainer,
				carousel_tabContainer_tabs
			);
			sliderToActiveCarouselSlide(
				carouselIndex,
				carousel_movableContentWrapper,
				carousel_movableContentWrapper_content
			);
		});

		carousel_arrow_right.addEventListener('click', () => {
			if (
				customCarouselActiveIndex[carouselIndex] >=
				carousel_tabContainer_tabs.length - 1
			) {
				return;
			}
			customCarouselActiveIndex[carouselIndex]++;
			scrollCarouselTabContainerToActiveTab(
				carouselIndex,
				carousel_tabContainer,
				carousel_tabContainer_tabs
			);
			sliderToActiveCarouselSlide(
				carouselIndex,
				carousel_movableContentWrapper,
				carousel_movableContentWrapper_content
			);
		});
	}

	function scrollCarouselTabContainerToActiveTab(
		carouselIndex,
		carousel_tabContainer,
		carousel_tabContainer_tabs
	) {
		carousel_tabContainer.scroll({
			left: carousel_tabContainer_tabs[customCarouselActiveIndex[carouselIndex]]
				.offsetLeft,
			top: 0,
			behavior: 'smooth',
		});
		for (let i = 0; i < carousel_tabContainer_tabs.length; i++) {
			if (i == customCarouselActiveIndex[carouselIndex]) {
				carousel_tabContainer_tabs[i].classList.add('active');
			} else {
				carousel_tabContainer_tabs[i].classList.remove('active');
			}
		}
	}

	function sliderToActiveCarouselSlide(
		carouselIndex,
		carousel_movableContentWrapper,
		carousel_movableContentWrapper_content
	) {
		carousel_movableContentWrapper.style.transform = `translateX(-${
			customCarouselActiveIndex[carouselIndex] * 100
		}%)`;
		for (let i = 0; i < carousel_movableContentWrapper_content.length; i++) {
			if (i == customCarouselActiveIndex[carouselIndex]) {
				carousel_movableContentWrapper_content[i].style.position = 'relative';
			} else {
				carousel_movableContentWrapper_content[i].style.position = 'absolute';
			}
			carousel_movableContentWrapper_content[i].style.left = i * 100 + '%';
		}
		carousel_movableContentWrapper.style.height =
			carousel_movableContentWrapper_content[
				customCarouselActiveIndex[carouselIndex]
			].innerHeight + 'px';
	}
}

//
//
//

let dropdowns = document.querySelectorAll('.dropdown-box');
let dropdownsBtns = document.querySelectorAll('.dropdown-box .btn');
let dropdownsMenus = document.querySelectorAll('.dropdown-box .menu');
let dropdownsNavMenus = document.querySelectorAll(
	'.dropdown-box .menu.nav-menu'
);
if (dropdownsBtns[0] != null) {
	for (let i = 0; i < dropdownsBtns.length; i++) {
		dropdownsBtns[i].addEventListener('click', () => {
			toggleDropdownMenu(i);
		});
		dropdowns[i].addEventListener('mouseleave', () => {
			closeDropdownMenu(i);
		});
		let transitionTime = dropdownsMenus[i].scrollHeight / 400;
		dropdownsMenus[
			i
		].style.transition = `max-height ${transitionTime}s ease-out`;
	}
	function toggleDropdownMenu(index, noAnimation) {
		for (let i = 0; i < dropdownsBtns.length; i++) {
			if (i != index) {
				dropdownsMenus[i].style.maxHeight = null;
			}
		}
		if (dropdownsMenus[index].style.maxHeight) {
			dropdownsMenus[index].style.maxHeight = null;
			if (dropdownsBtns[index].querySelector('img') != null) {
				dropdownsBtns[index].querySelector('img').style.transform =
					'rotate(0deg)';
			}
			if (document.getElementById('svgButtonInRoadsideAssistance') != null) {
				document.getElementById(
					'svgButtonInRoadsideAssistance'
				).style.transform = 'rotate(0deg)';
			}
		} else {
			if (noAnimation != null || noAnimation == true) {
				dropdownsMenus[index].style.maxHeight = 'fit-content';
			} else {
				if (dropdowns[index].parentElement.className == 'package-box-lists') {
					dropdownsMenus[index].style.maxHeight = 'fit-content';
				} else {
					dropdownsMenus[index].style.maxHeight =
						dropdownsMenus[index].scrollHeight + 'px';
				}
			}
			if (dropdownsBtns[index].querySelector('img') != null) {
				dropdownsBtns[index].querySelector('img').style.transform =
					'rotate(180deg)';
			}

			if (document.getElementById('svgButtonInRoadsideAssistance') != null) {
				document.getElementById(
					'svgButtonInRoadsideAssistance'
				).style.transform = 'rotate(180deg)';
			}
		}
	}
	function closeDropdownMenu(index) {
		dropdownsMenus[index].style.maxHeight = null;
	}
}

//
//
//

let navMenu = document.getElementById('nav-menu');
navMenu.addEventListener('click', (e) => {
	if (e.currentTarget != e.target) return;
	closeNav();
});
function openNav() {
	navMenu.style.transform = 'translateX(0%)';
}
function closeNav() {
	navMenu.style.transform = 'translateX(-100%)';
}
for (let i = 0; i < dropdownsNavMenus.length; i++) {
	let transitionTime = dropdownsNavMenus[i].scrollHeight / 600;
	dropdownsNavMenus[
		i
	].style.transition = `max-height ${transitionTime}s ease-out`;
}

let navbarCollapsePoint = 1100;

if (document.getElementById('nav-logo') != null) {
	let scrollNavLogo = false;
	let getLastItem = (thePath) =>
		thePath.substring(thePath.lastIndexOf('/') + 1);
	window.addEventListener('resize', handleTypeOfLogoShown);

	handleTypeOfLogoShown();

	function handleNavLogoImgOnScroll() {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		var navBottom = 5 * 16;
		if (window.innerWidth <= navbarCollapsePoint) {
			if (st <= navBottom) {
				showOnlyNavLogo();
			} else {
				showOnlyNavTitle();
			}
		}
		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}

	function handleTypeOfLogoShown() {
		if (window.innerWidth <= navbarCollapsePoint) {
			showOnlyNavTitle();
		} else {
			showOnlyNavLogo();
		}
	}
	function showOnlyNavTitle() {
		document.getElementById('nav-logo').style.display = 'none';
		document.getElementById('nav-title').style.display = 'block';
	}
	function showOnlyNavLogo() {
		document.getElementById('nav-logo').style.display = 'block';
		document.getElementById('nav-title').style.display = 'none';
	}
}

//
//
//
if (document.getElementById('quoteModal') != null) {
	document.getElementById('quoteModal').addEventListener('click', (e) => {
		if (e.target != e.currentTarget) return;
		closeModal('quoteModal');
	});
}
if (document.getElementById('bookNowModal') != null) {
	document.getElementById('bookNowModal').addEventListener('click', (e) => {
		if (e.target != e.currentTarget) return;
		closeModal('bookNowModal');
	});
}
if (document.getElementById('phoneModel') != null) {
	document.getElementById('phoneModel').addEventListener('click', (e) => {
		if (e.target != e.currentTarget) return;
		closeModal('phoneModel');
	});
}
if (document.getElementById('contactModal') != null) {
	document.getElementById('contactModal').addEventListener('click', (e) => {
		if (e.target != e.currentTarget) return;
		closeModal('contactModal');
	});
}

function openModal(id) {
	document.getElementById(id).style.display = 'flex';
	document.getElementById(id).classList.remove('close');
	document.getElementById(id).classList.add('open');
}
function closeModal(id) {
	document.getElementById(id).classList.remove('open');
	document.getElementById(id).classList.add('close');
	setTimeout(() => {
		document.getElementById(id).style.display = 'none';
	}, 1000);
}
function setOption(id, data) {
	document.getElementById(id).innerHTML = data;
}

function disableScrolling() {
	x = window.scrollX;
	y = window.scrollY;
	window.onscroll = function () {
		window.scrollTo(x, y);
	};
	document.querySelector('body').setAttribute('scroll', 'no');
	if (document.getElementById('phoneModel') != null) {
		document
			.getElementById('phoneModel')
			.addEventListener('touchmove', preventDefault, { passive: false });
	}
}
function enableScrolling() {
	window.onscroll = function () {};
	document.querySelector('body').setAttribute('scroll', 'yes');
	if (document.getElementById('phoneModel') != null) {
		document
			.getElementById('phoneModel')
			.removeEventListener('touchmove', preventDefault, {
				passive: false,
			});
	}
}

function preventDefault(e) {
	e.preventDefault();
}
