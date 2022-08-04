$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>',
  };
  $(".slider").slick(slickOptions);

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

  $(".btn--submit").on("Click", () => {
    const email = $("#email").val();
    const message = "Enviado com sucesso";

    Email.send({
      Host: "smtp.gmail.com",
      Username: "cbeckhauser@gmail.com",
      Password: "King&Marduk03",
      To: "cbeckhauser@gmail.com",
      From: email,
      Subject: "Por favor, me adicione na Newsletter",
      Body: `Olá, eu gostaria de ser adicionado na Newsletter do site.
      Meu Email é ${email}.
      
      Obrigado!
      `,
    }).then((message) => alert(message));
  });
});
