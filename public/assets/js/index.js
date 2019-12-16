$(()=>{

    $('.eat-burger').on('click', function(e) {
        let id = $(e.target).data('id');
        console.log(id);
        $.ajax({
          method: "PUT",
          url: "/api/burgers/" + id
        }).then(function(data) {
          location.reload();
        });
    
      });
    $('.trash-burger').on('click', function(e){
        e.preventDefault();
        console.log(e.target);
        let id = $(e.target).data('id');
        console.log(id);
        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
          }).then(function(data) {
            location.reload();
          });
    })
});
