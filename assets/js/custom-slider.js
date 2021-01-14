let sliderBtns = document.getElementsByClassName( 'slider-btn' );
let sliderBoxes = document.getElementsByClassName( 'slider-box' );
let sliderWrapper = document.getElementById( 'slider-wrapper' );
let sliderIndicator = document.getElementById( 'slider-indicator' );

// Be default 
slideToBoxImg( 0 );
sliderIndicatorToActiveBtn( 0 );

// 
for ( let i = 0; i < sliderBtns.length; i++ ) {
    sliderBtns[ i ].addEventListener( 'click', () => {
        slideToBoxImg( i );
        sliderIndicatorToActiveBtn( i );
    } );
}
function slideToBoxImg ( index ) {
    if ( window.innerWidth <= 768 ) {
        sliderWrapper.style.transform = `translateX(-${ index * sliderBoxes[ index ].offsetWidth }px)`;
    } else {
        sliderWrapper.style.transform = `translateY(-${ index * sliderBoxes[ index ].offsetHeight }px)`;
    }
}
function sliderIndicatorToActiveBtn ( index ) {
    sliderIndicator.style.top = `${ sliderBtns[ index ].offsetTop }px`;
    sliderIndicator.style.height = `${ sliderBtns[ index ].offsetHeight }px`;
}



