// JQUERY BEGINS HERE
$("document").ready(function() {

    // INSERT IMG SRC TO MODAL
    $('.img').click(function(){
        let imgSrc = $(this).attr('src')
        $('.modal-img').attr('src',imgSrc)
    })

    // MODAL CLOSER
    $('.close').click(function(){
        $('#modal').removeClass('show')
        $('.nxt-cont').show();
    })

    // MODAL OPENER
    $('.img').click(function() {
        $('#modal').addClass('show')
    })

    // NEXT BUTTON AND PREVIOUS BUTTON
    $('.presser').click(function() {
        
        let gottenurl = $(this).offsetParent().siblings('img').attr('src');
        let splitedArray = gottenurl.split('/');
        let arrayPos = splitedArray[splitedArray.length - 1];
        let indexOf;
        if($(this).hasClass('nxt-btn')){
            indexOf = imgs.indexOf(arrayPos) + 1;            
        }else{
            indexOf = imgs.indexOf(arrayPos) - 1;
        }
        // if(indexOf == imgs.length -1){
        //     $('.nxt-cont').hide();
        // }else if(indexOf-1 == 1){
        //     $('.prev-cont').hide();
        // } 
        let newImage = imgs[indexOf];
        splitedArray.pop()
        let newImgUrl = splitedArray.join('/')
        console.log(imgs.length);
        console.log(indexOf)
        if(imgs.length != indexOf){
            if(indexOf+1 != 0){
                $('.modal-img').attr('src',newImgUrl + `/${newImage}`)
            }
        }
    })
})