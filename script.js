// function to make call elements smaller
function $(element) {
  return document.querySelector(element);
}

// VARIABLES
const math = $("#math");// MATH OPTIONS
const out = $(".out");// OUTPUT CALCULATIONS

const bhaskaraOptions = $(".bhaskara-options");// BHASKARA OPTIONS a-b-c
const pythagorasOptions = $(".pythagoras-options");// PYTHAGORAS OPTIONS a-b

const showBtn = $("#submit-btn");//SHOW ME THE CALCULATIONS BUTTON
const container = $(".pop-up");// POP UP CONTAINER

const redoBtn = $("#redo-btn");// REDO(RELOAD) BUTTON

// WHEN CLICK ON 'REDO' BUTTON, RELOAD THE PAGE
function reload(){
    document.location.reload(true);
}

// Change number choices depending on the choice of bhaskara or pythagoras! and change it when choose
math.oninput = () => {

  switch (math.value) {

    case "bhaskara":
      bhaskaraOptions.style = "display: flex;";
      pythagorasOptions.style = "display: none;"
    break;

    case "pythagoras":
      bhaskaraOptions.style = "display: none;";
      pythagorasOptions.style = "display: flex;"
    break;

  }

}

// OUTPUT CALCULATIONS --------------------------------------------------------------------------------

// PYTHAGORAS
function triangulo(base, height) {
  return `
    <h1>Pythagorean Theorem<br>A = ${base} | B = ${height}</h1><br>
    X<sup>2</sup> = A<sup>2</sup> + B<sup>2</sup><br>
    X<sup>2</sup> = ${base}<sup>2</sup> + ${height}<sup>2</sup><br>
    X<sup>2</sup> = ${base * base} + ${height * height}<br>
    X = &radic;${ (base * base) + (height * height ) }<br>
    
    <br>

    <div class="results">
        <div>
            X = ${ Math.sqrt( (base * base) + (height * height ) ) }
        </div>
    </div>`;
}

// BHASKARA
function equation(a, b, c) {
  return `
  <h1>Bhaskara<br>a = ${a} | b = ${b} | c = ${c}</h1><br />
  X = -b ± &radic;Δ / 2.a <br />
  X = -b ± &radic; b<sup>2</sup> - 4.a.c / 2.a<br/><br />

  X = -(${b}) ± &radic; ${b}<sup>2</sup> - 4.${a}.${c} / 2.${a}<br />
  X = ${-b} ± &radic; ${b * b} - 4.${ a * c } / ${ 2 * a}<br />
  X = ${-b} ± &radic; ${b * b} - ${ 4 * ( a * c ) } / ${ 2 * a}<br />
  X = ${-b} ± &radic; ${ ( b * b ) - (4 * ( a * c ) ) } / ${ 2 * a}<br />
  X = ${-b} ± ${ Math.sqrt( ( b * b ) - (4 * ( a * c ) ) ) } / ${ 2 * a } <br /><br /><br />

  <div class="results">
    <div>
        X<sub>1</sub> = ${ -b + Math.sqrt( ( b * b ) - (4 * ( a * c ) ) ) } / ${2*a} <br />
        X<sub>1</sub> = ${ ( -b + Math.sqrt( (( b * b ) - (4 * (a * c)) )) ) / (2 * a)  }<br />
    </div>

    <div>
        X<sub>2</sub> = ${ -b - Math.sqrt( ( b * b ) - (4 * ( a * c ) ) ) } / ${2*a} <br />
        X<sub>2</sub> = ${ ( -b - Math.sqrt( (( b * b ) - (4 * (a * c)) )) ) / (2 * a)  } <br />
    </div>
 <div>
  `;
}

// OUTPUT CALCULATIONS -------------------------------------------------------------------------------

// get ID of each input number for BHASKARA
const bhasA = $("#A");
const bhasB = $("#B");
const bhasC = $("#C");

// get ID of each input number for PYTHAGORAS
const triC = $("#C1");
const triC2 = $("#C2");

// WHEN CLICK ON THE 'SHOW' BUTTON
showBtn.addEventListener('click', function() {

    // make the container to add number invisible   
    container.style = "display: none;";// make pop up container invisible
    out.style = "display: block;";// make output calculations visible

    // Make the calculations!
    if (math.value === "bhaskara") {
        out.innerHTML = equation(bhasA.value, bhasB.value, bhasC.value) + `<br>` + out.innerHTML;
    } else {
        out.innerHTML = triangulo(triC.value, triC2.value) + `<br>` + out.innerHTML;
    }

});

