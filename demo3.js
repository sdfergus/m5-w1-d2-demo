//function and functional component that adds an event
function clickbutton() {
  alert( 'Clicked!!!' );
}

const myelement = (
  <button onClick={clickbutton}>Click the button!</button>
);


ReactDOM.render( myelement, document.getElementById( 'root' ) );