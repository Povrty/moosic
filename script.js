$( "#searchbutton" ).click(function() {
    let searchtext = $("#searchbar").val();

    fetch(`https://api.soundcloud.com/tracks?q=${searchtext}&client_id=5aa8e389ba4e24b6106af5159ab3e344`)
    .then(function(response) {  
      return response.json();
    })
    .then(function(data){ 
        console.log(data[0].id);
        $("body").append(`<iframe width="50%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data[0].id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`)
        console.log("Hello World!")
    });  
});

