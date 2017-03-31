$(document).ready(function()
{
    $('.searchBox a').on("click", function()
    {
        $(".searchBox .dropdown-menu").toggleClass('display-block');
        $(".searchBox a i").toggleClass('fa-close').toggleClass("fa-search");

        //alert('search clicked');
    });

});

$(document).ready(function()
{

    // General OwlCarousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        // autoPlay: 3000,
        items : 3, //10 items above 1000px browser width
        nav: false,
        dots: false,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:false
                }
            }
    });
    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('next.owl.carousel');
    })
    $(".prev").click(function(){
      owl.trigger('prev.owl.carousel');
    })




    // Daterange
    var start = moment().add(30, 'days');
      var end = moment().add(1, 'year');
      
      $('input[name="daterange"]').daterangepicker({
        startDate: start,
        endDate: end,
        autoUpdateInput: true
      });





      





      // Tooltip
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      // Wedding Tour 
      var tour = new Tour({
        storage: window.localStorage,
        steps: [
        {
          element: "#wedding-daterange-1",
          title: "Select a date Range",
          content: "Start by selecting your wedding tentative date range"
        },
        {
          element: "#planning-box",
          title: "Monitor your planning",
          content: "You can keep track of your tasks by quickly finding out how many tasks are yet to be executed before the Big Day!"
        }
      ]});
      tour.init();
      tour.start();
      

      // Collapse All accordion Anchors
      $('#collapse-all').on('click', function () {
              $('#accordion .panel-collapse').collapse('toggle');
        });


      // Catalog OwlCarousel
      var owl = $("#owl-catalog");
      owl.owlCarousel({
          // autoPlay: 3000,
          items : 3, //10 items above 1000px browser width
          dots: false,
          responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:false
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  1000:{
                      items:3,
                      nav:false,
                      loop:false
                  }
              }
      });
      
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('next.owl.carousel');
      })
      $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
      })


      // Reviews OwlCarousel
      var owlReviews = $("#owl-reviews");
      owlReviews.owlCarousel({
          // autoPlay: 3000,
          items : 5, //10 items above 1000px browser width
          nav: false,
          dots: true,
          margin: 10,
              responsive:{
                  0:{
                      items:1,
                  },
                  600:{
                      items:1,
                  },
                  1000:{
                      items:3,
                  }
              }
      });

      // Catalog Session OwlCarousel
      var owl = $("#owl-catalog-session");
      owl.owlCarousel({
          // autoPlay: 3000,
          items : 3, //10 items above 1000px browser width,
          pagination: false,
          nav: false,
          dots: false,
          scrollPerPage: true,
          itemsDesktop : [1000,2], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('next.owl.carousel');
      })
      $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
      })



      // Editable Inline Form Fields
      $.fn.editable.defaults.mode = 'inline';
      $('.inline-date').editable({
        showbuttons : false
      });


      // Planning Collapse functions
      $('.collapse')
        .on('shown.bs.collapse', function(){
          $(this).parent().find(".fa-plus-square").removeClass("fa-plus-square").addClass("fa-minus-square");
          // $(this).parent().find(".panel-not-expanded").removeClass("panel-not-expanded").addClass("panel-expanded");
        })
        .on('hidden.bs.collapse', function(){
          $(this).parent().find(".fa-minus-square").removeClass("fa-minus-square").addClass("fa-plus-square");
          // $(this).parent().find(".panel-expanded").removeClass("panel-expanded").addClass("panel-not-expanded");
        });


        // Popover Ajax Load
        $('*[data-poload]').focus(function() {
            var e=$(this);
            e.off('hover');
            $.get(e.data('poload'),function(d) {
                e.popover({content: d, html: true}).popover('show');
            });
        });



        // Invitations Seasting Chart
        new Morris.Donut({
            element: 'seatingChart',
            data: [
              {value: 2, label: 'Groom\'s Colleages', formatted: '2' },
              {value: 1, label: 'Groom\'s Friends', formatted: '1' },
              {value: 1, label: 'Groom\'s Family', formatted: '1' },
              {value: 3, label: 'Mutual Friends', formatted: '3' }
            ],
            colors: [ 
              "#E06651",
              "#EFD163",
              '#B3CF6E',
              '#6892EB'
              ],

            formatter: function (x, data) { return data.formatted; }
          });

});


