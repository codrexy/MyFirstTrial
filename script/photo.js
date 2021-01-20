document.getElementsByTagName("img")[0].addEventListener('click', function(e) {
    console.log('gmmm')
})

function first() {
    let modal = document.getElementById("modal")
    modal.classList.add('show')
    // let imgBox = document.getElementsByClassName("img")[0];
    // imgBox.addEventListener('click', function (e) {
    //     console.log(e)
    // })
}


// MODAL CLOSER
let closer = document.getElementsByClassName('close')[0];
closer.addEventListener('click', function(e){
    document.getElementById("modal").classList.remove("show");
})


// let sect = document.getElementsByClassName('ph-section')[0]
// console.log(sect.firstElementChild.outerHTML)