export const ModalWindow = () => {

    // Get the modal
    const modal = document.getElementById("myModal");

// Get the button that opens the modal
    const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    if(btn !== null) {
        btn.onclick = function() {
            if(modal !== null) {
                modal.style.display = "block";
            }
        }
    }


// When the user clicks on <span> (x), close the modal
    if(span !== null) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }


// // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

    return (
        <div>
            <button id="myBtn">Open Modal</button>

            //-- The Modal -
            <div id="myModal" className="modal">

                -- Modal content --
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
        </div>
    )
}