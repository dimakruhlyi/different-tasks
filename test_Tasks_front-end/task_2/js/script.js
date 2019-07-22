$(document).ready(function(){
	$('.first-person-table').click(function () {
        //$(this).toggleClass('click');
       document.getElementById('main-tabl').style.display = "none";
       document.getElementById('second-tabl').style.display = "flex";
     
        document.getElementById('first_person-2').style.backgroundColor = "#0f0";
        document.getElementById('second_person-2').style.backgroundColor = "#fff";
        document.getElementById('third_person-2').style.backgroundColor = "#fff";

        document.getElementById('black-arrow-id').style.display = "block";
        document.getElementById('black-arrow-id-2').style.display = "none";
        document.getElementById('black-arrow-id-3').style.display = "none";

        document.getElementById('first-text').style.display = "block";
            document.getElementById('second-text').style.display = "none";
            document.getElementById('third-text').style.display = "none";
       
    });
    });
    $(document).ready(function(){
        $('.second-person-table').click(function () {
           document.getElementById('main-tabl').style.display = "none";
           document.getElementById('second-tabl').style.display = "flex";
           
            document.getElementById('second_person-2').style.backgroundColor = "#0f0";
            document.getElementById('first_person-2').style.backgroundColor = "#fff";
            document.getElementById('third_person-2').style.backgroundColor = "#fff";

            document.getElementById('black-arrow-id').style.display = "none";
            document.getElementById('black-arrow-id-2').style.display = "block";
            document.getElementById('black-arrow-id-3').style.display = "none";

            
            document.getElementById('first-text').style.display = "none";
            document.getElementById('second-text').style.display = "block";
            document.getElementById('third-text').style.display = "none";
        });
        });
        $(document).ready(function(){
            $('.third-person-table').click(function () {
               document.getElementById('main-tabl').style.display = "none";
               document.getElementById('second-tabl').style.display = "flex";
               
                document.getElementById('third_person-2').style.backgroundColor = "#0f0";
                document.getElementById('first_person-2').style.backgroundColor = "#fff";
                document.getElementById('second_person-2').style.backgroundColor = "#fff";

                document.getElementById('black-arrow-id').style.display = "none";
                document.getElementById('black-arrow-id-2').style.display = "none";
                document.getElementById('black-arrow-id-3').style.display = "block";

                document.getElementById('first-text').style.display = "none";
                document.getElementById('second-text').style.display = "none";
                document.getElementById('third-text').style.display = "block";
               
            });
            });
            $(document).ready(function(){
                $('#link2').click(function () {
                    document.getElementById('second_person-2').style.backgroundColor = "#0f0";
                    document.getElementById('first_person-2').style.backgroundColor = "#fff";
                    document.getElementById('third_person-2').style.backgroundColor = "#fff";
                    document.getElementById('black-arrow-id').style.display = "none";
                    document.getElementById('black-arrow-id-2').style.display = "block";
                    document.getElementById('black-arrow-id-3').style.display = "none";
                    document.getElementById('first-text').style.display = "none";
                    document.getElementById('second-text').style.display = "block";
                    document.getElementById('third-text').style.display = "none"; 
                });
                });
            $(document).ready(function(){
                    $('#link3').click(function () {
                        document.getElementById('third_person-2').style.backgroundColor = "#0f0";
                        document.getElementById('first_person-2').style.backgroundColor = "#fff";
                        document.getElementById('second_person-2').style.backgroundColor = "#fff";
                        document.getElementById('black-arrow-id').style.display = "none";
                        document.getElementById('black-arrow-id-2').style.display = "none";
                        document.getElementById('black-arrow-id-3').style.display = "block";
                        document.getElementById('first-text').style.display = "none";
                        document.getElementById('second-text').style.display = "none";
                        document.getElementById('third-text').style.display = "block";  
                    });
                    });
            $(document).ready(function(){
                $('#link1').click(function () {
                    document.getElementById('first_person-2').style.backgroundColor = "#0f0";
                    document.getElementById('second_person-2').style.backgroundColor = "#fff";
                    document.getElementById('third_person-2').style.backgroundColor = "#fff";
                    document.getElementById('black-arrow-id').style.display = "block";
                    document.getElementById('black-arrow-id-2').style.display = "none";
                    document.getElementById('black-arrow-id-3').style.display = "none";
                    document.getElementById('first-text').style.display = "block";
                    document.getElementById('second-text').style.display = "none";
                    document.getElementById('third-text').style.display = "none"; 
                });
                });

    $(document).ready(function(){
        $('#close-second-table').click(function () {
            document.getElementById('second-tabl').style.display = "none";
            document.getElementById('main-tabl').style.display = "block";
            location.reload();
            });
         
        });
/*
        $(document).ready(function () {
            $('span#link1' ).click(function (e) {
                $(this).toggleClass('active');
                $('#black-arrow-id').toggle();
                e.stopPropagation();
            });
            $('span#link2' ).click(function (e) {
                $(this).toggleClass('active');
                $('#black-arrow-id-2').toggle();
                e.stopPropagation();
            });
            $('span#link3' ).click(function (e) {
                $(this).toggleClass('active');
                $('#black-arrow-id-3').toggle();
                e.stopPropagation();
            });


            
              $('span#link2').click(function () {
                var link = $('span#link1');
                link.click();
                if (link.hasClass('active')) {
                    link.click();
                }
            });
          
               $('span#link3').click(function () {
                var link = $('span#link1');
                if (link.hasClass('active')) {
                    link.click();
                }
            });
        });*/