const maxMarks = 100;
const totalSubjects = 3;
const maxTotal = maxMarks * totalSubjects;

function calculatePercentage ( total, percentageCol ) {
    let percentage = ( total / maxTotal ) * 100;
    percentage = percentage.toFixed( 2 )
    const percentageInput = percentageCol.querySelector( "input" );
    percentageInput.value = percentage == 0 ? "" : percentage;
}