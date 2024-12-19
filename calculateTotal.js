function calculateCol1Total () {
    const totalInput = totalCol1.querySelector( "input" );

    col1.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col1.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol1 )
        };
    } );
}

function calculateCol2Total () {
    const totalInput = totalCol2.querySelector( "input" );

    col2.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col2.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol2 )
        };
    } );
}

function calculateCol3Total () {
    const totalInput = totalCol3.querySelector( "input" );

    col3.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col3.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol3 )

        };
    } );
}

function calculateCol4Total () {
    const totalInput = totalCol4.querySelector( "input" );

    col4.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col4.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol4 )

        };
    } );
}
function calculateCol5Total () {
    const totalInput = totalCol5.querySelector( "input" );

    col5.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col5.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol5 )

        };
    } );
}
function calculateCol6Total () {
    const totalInput = totalCol6.querySelector( "input" );

    col6.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col6.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol6 )

        };
    } );
}

function calculateCol7Total () {
    const totalInput = totalCol7.querySelector( "input" );

    col7.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col7.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol7 )

        };
    } );
}

function calculateCol8Total () {
    const totalInput = totalCol8.querySelector( "input" );

    col8.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col8.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol8 )

        };
    } );
}

function calculateCol9Total () {
    const totalInput = totalCol9.querySelector( "input" );

    col9.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col9.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol9 )

        };
    } );
}

function calculateCol10Total () {
    const totalInput = totalCol10.querySelector( "input" );

    col10.forEach( ( col ) => {
        const input = col.querySelector( "input" );

        input.oninput = () => {
            let total = 0;

            col10.forEach( ( col ) => {
                const colInput = col.querySelector( "input" );
                const marks = parseFloat( colInput.value || 0 );
                total += isNaN( marks ) ? 0 : marks;
            } );

            let result = total.toFixed( 2 );

            totalInput.value = result != 0 ? result : "";
            calculatePercentage( result, percentageCol10 )

        };
    } );
}


calculateCol1Total();
calculateCol2Total();
calculateCol3Total();
calculateCol4Total();
calculateCol5Total();
calculateCol6Total();
calculateCol7Total();
calculateCol8Total();
calculateCol9Total();
calculateCol10Total();