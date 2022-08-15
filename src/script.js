$(document).ready(() => {
  /*MENU MOBILE*/

  $(".navbar__menu-btn").on("click", function () {
    $(".navbar__links").toggleClass("active");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
  });

  /*CAROUSEL MENU*/

  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 3100,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>',
  };
  $(".slider").slick(slickOptions);

  /*CAROUSEL TESTIMONIALS*/

  /*  const slickTestimonials = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
  };
  
  $(".slider_testimonial").slick(slickTestimonials); */

  /*CONTADOR AUTOMATICO */

  setInterval(() => {
    const numberColletion = document.querySelectorAll(".counter__number");
    numberColletion.forEach((number) => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1500);

  const counterOptions = {
    delay: 10,
    time: 1000,
  };

  $(".counter__number").counterUp(counterOptions);

  /*EMAIL NEWSLETTER */

  $(".btn--submit").on("Click", () => {
    const email = $("#email").val();

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "cbeckhauser@gmail.com",
      Password: "F631841805445527231B69442979FEB76F09",
      To: "kurotsuchi.ukyru@gmail.com",
      From: email,
      Subject: "Por favor, me adicione na Newsletter",
      Body: `Olá, eu gostaria de ser adicionado na Newsletter do site.
          Meu Email é ${email}.
          
          Obrigado!
          `,
    }).then((message) => alert(message));
  });
});
