const partyBtn = document.getElementById("mojigo");
const shareField = document.getElementById("share_field");
const toastElement = document.getElementById('copyToast');
const copyButton = document.getElementById("copyButton");
const copyToast = new bootstrap.Toast(toastElement);
let party = false;

copyButton.addEventListener('click', copy)

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const count = 50;
const mojiList = getRandom(emojis, count);

// TODO: Try rain again. Performance is bad on my phone...

async function copy() {
    shareField.select()
    shareField.setSelectionRange(0, 99999);
    //document.execCommand("copy");
    await navigator.clipboard.writeText(shareField.value)
    await copyToast.show()
}

partyBtn.addEventListener("click", () => {
    const container = tsParticles.domItem(0);

    if (!party) {
        console.log("Starting");
        party = true;
        partyBtn.classList.toggle("d-none");
        container.playEmitter(0);
        container.playEmitter(1);


        setTimeout(function () {
            console.log("Stopping")
            container.pauseEmitter(0);
            container.pauseEmitter(1);

            const key = new Date().toLocaleDateString();

            const todaysData = localStorage.getItem(key)
            let emoji1, emoji2, emoji3;
            if (todaysData != null) {
                const todaysEmojis = JSON.parse(todaysData)
                emoji1 = todaysEmojis[0];
                emoji2 = todaysEmojis[1];
                emoji3 = todaysEmojis[2];
            } else {
                emoji1 = mojiList[1];
                emoji2 = mojiList[2];
                emoji3 = mojiList[3];
                localStorage.setItem(key, JSON.stringify([emoji1, emoji2, emoji3]))
            }
            document.getElementById("moji_one").innerHTML = emoji1;
            document.getElementById("moji_two").innerHTML = emoji2;
            document.getElementById("moji_three").innerHTML = emoji3;
            document.getElementById("results").classList.toggle("d-none");


            shareField.innerHTML = "My Mojiscope for the day:\n" + emoji1 + " " + emoji2 + " " + emoji3 + "\nhttps://mojiscope.app"
        }, 3000)

        //partyBtn.innerText = partyBtn.innerText.replace("Start", "Stop");
    }/* else {
        console.log("Stopping")
        party = false;

        container.pauseEmitter(0);
        container.pauseEmitter(1);

        document.getElementById("moji_one").innerHTML = mojiList[1];
        document.getElementById("moji_two").innerHTML = mojiList[2];
        document.getElementById("moji_three").innerHTML = mojiList[3];
        document.getElementById("results").classList.toggle("d-none");

        //partyBtn.innerText = partyBtn.innerText.replace("Stop", "Start");
    }*/
});


tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "#2a2a2a"
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
                x: 50,
                y: 50
            },
            rate: {
                quantity: 5,
                delay: 0.2
            },
            //direction: ["bottom", "]
        },
        // {
        //     autoPlay: false,
        //     position: {
        //         x: 99,
        //         y: 1
        //     },
        //     rate: {
        //         quantity: 5,
        //         delay: 0.2
        //     },
        //     direction: "bottom-left"
        // }
    ],
    particles: {
        // color: {
        //     value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
        // },
        move: {
            decay: 0.0,
            //direction: "top",
            enable: true,
            gravity: {
                enable: false,
                acceleration: 9.81 * 4
            },
            outModes: {
                default: "destroy"
            },
            size: true,
            speed: {min: 10, max: 25}
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
            value: 24
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
                        value: mojiList,
                        style: "",
                        weight: 400
                    }
                ]
            }
        }
    }
});
