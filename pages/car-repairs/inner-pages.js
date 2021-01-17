let showCarRepairDrodown = false;
document.getElementById( 'dropdownToggleBtn' ).addEventListener( 'click', () => {
    showCarRepairDrodown = !showCarRepairDrodown;
    if ( showCarRepairDrodown ) {
        document.getElementById( 'carRepairDropdown' ).style.maxHeight = '20em';
        document.getElementById( 'dropdownToggleBtn' ).style.transform = 'rotate(180deg)';
    } else {
        document.getElementById( 'carRepairDropdown' ).style.maxHeight = '0';
        document.getElementById( 'dropdownToggleBtn' ).style.transform = 'rotate(0deg)';
    }
} );
