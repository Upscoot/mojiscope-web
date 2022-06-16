const partyBtn = document.getElementById("mojigo");
let party = false;

// TODO: Try rain again. Performance is bad on my phone...

partyBtn.addEventListener("click", () => {
    const container = tsParticles.domItem(0);

    if (!party) {
        console.log("Starting")
        party = true;
        container.playEmitter(0);
        container.playEmitter(1);

        //partyBtn.innerText = partyBtn.innerText.replace("Start", "Stop");
    } else {
        console.log("Stopping")
        party = false;

        container.pauseEmitter(0);
        container.pauseEmitter(1);

        //partyBtn.innerText = partyBtn.innerText.replace("Stop", "Start");
    }
});


tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "#000000"
        }
    },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    interactivity: {
        detectsOn: "window"
    },
    emitters: [
        {
            autoPlay: false,
            position: {
                x: 1,
                y: 1
            },
            rate: {
                quantity: 5,
                delay: 0.2
            },
            direction: "bottom-right"
        },
        {
            autoPlay: false,
            position: {
                x: 99,
                y: 1
            },
            rate: {
                quantity: 5,
                delay: 0.2
            },
            direction: "bottom-left"
        }
    ],
    particles: {
        color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
        },
        move: {
            decay: 0.01,
            direction: "bottom",
            enable: true,
            gravity: {
                enable: true,
                acceleration: 9.81 * 4
            },
            outModes: {
                bottom: "out",
                default: "destroy"
            },
            size: true,
            speed: { min: 10, max: 15 }
        },
        number: {
            value: 0
        },
        opacity: {
            value: 1
        },
        //   rotate: {
        //     value: {
        //       min: 0,
        //       max: 360
        //     },
        //     direction: "random",
        //     animation: {
        //       enable: true,
        //       speed: 30
        //     }
        //   },
        //   tilt: {
        //     direction: "random",
        //     enable: true,
        //     value: {
        //       min: 0,
        //       max: 360
        //     },
        //     animation: {
        //       enable: true,
        //       speed: 30
        //     }
        //   },
        size: {
            value: 32
        },
        //   roll: {
        //     darken: {
        //       enable: true,
        //       value: 25
        //     },
        //     enable: true,
        //     speed: {
        //       min: 5,
        //       max: 15
        //     }
        //   },
        //   wobble: {
        //     distance: 30,
        //     enable: true,
        //     speed: {
        //       min: -7,
        //       max: 7
        //     }
        //   },
        shape: {
            type: [
                "character"
            ],
            options: {
                character: [
                    {
                        fill: true,
                        font: "Verdana",
                        value: emojis,
                        style: "",
                        weight: 400
                    }
                ]
            }
        }
    }
});
