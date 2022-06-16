tsParticles.load("tsparticles", {
  particles: {
    color: {
      value: [
        "#FFFFFF",
        "#FFd700"
      ]
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out"
      },
      size: true,
      speed: {
        min: 25,
        max: 50
      }
    },
    number: {
      value: 500,
      density: {
        enable: true,
        area: 1000
      }
    },
    shape: {
      type: "character",
      options: {
        character: {
          fill: true,
          font: "Verdana",
          style: "",
          weight: 400,
          particles: {
            size: {
              value: 18
            }
          },
          value: [
            "💩",
            "🤡",
            "🍀",
            "🍙",
            "🦄",
            "⭐️"
          ]
        }
      }
    },
  }
});