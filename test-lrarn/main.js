

      let locationn = document.getElementById("location");
      let delivery = document.getElementById("delivery");
      let menu = document.getElementById("menu");
      let phone = document.getElementById("phone");

      let deliveryA = document.getElementById("delivery-a");

      let phoneA = document.getElementById("phone-a");

      let menuA = document.getElementById("menu-a");

      let locationA = document.getElementById("location-a");

      function imgClicked($event, divName) {
        console.log("This is the event", $event);
        console.log("This is the img name", divName);

        let allButtons = document.querySelectorAll(".isHidden");

        allButtons.forEach((element) => {
          element.classList.remove("active");
        });

        $event.className += " active";

        if (divName === "delivery") {
          console.log("the div we reference >> ", deliveryA);
          console.log("the div we reference and TypeOf >> ", typeof deliveryA);
          console.log(
            "the div we reference with classList >> ",
            deliveryA.classList
          );

          if (deliveryA.classList.contains("active")) {
            deliveryA.classList.remove("active");
          } else {
            deliveryA.classList.add("active");
          }

          console.log("I am clicked from", divName);
          console.log("class name is >>", deliveryA.classList);
        }

        if (divName === "phone") {
          phoneA.className += " active";
          console.log("I am clicked from", divName);
        }

        if (divName === "menu") {
          menuA.className += " active";
          console.log("I am clicked from", divName);
        }

        if (divName === "location") {
          locationA.className += " active";
          console.log("I am clicked from", divName);
        }
      }
    