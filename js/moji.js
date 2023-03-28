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

async function copy() {
    shareField.select()
    shareField.setSelectionRange(0, 99999);
    //document.execCommand("copy");
    await navigator.clipboard.writeText(shareField.value)
    await copyToast.show()
}
const url = "https://api.mojiscope.app/";

async function getScope() {
    try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        console.error(error);
        await new Promise(r => setTimeout(r, 3000));
        return {mojis: [mojiList[1],
                mojiList[2],
                mojiList[3]], scope: ""}
      }
}

partyBtn.addEventListener("click", async () => {
    const container = tsParticles.domItem(0);

    if (!party) {
        party = true;
        partyBtn.classList.toggle("d-none");
        container.playEmitter(0);
        container.playEmitter(1);

        const key = new Date().toLocaleDateString();
        const todaysData = localStorage.getItem(key)
            let emoji1, emoji2, emoji3, scope_text;
            if (todaysData != null) {
                await new Promise(r => setTimeout(r, 3000));
                const todaysEmojis = JSON.parse(todaysData)
                emoji1 = todaysEmojis[0];
                emoji2 = todaysEmojis[1];
                emoji3 = todaysEmojis[2];
                scope_text= todaysEmojis[3];
            } else {
                newScope = await getScope()
                console.log(newScope)
                emoji1 = newScope.mojis[0]
                emoji2 = newScope.mojis[1]
                emoji3 = newScope.mojis[2]
                scope_text = newScope.scope

                container.pauseEmitter(0);
                container.pauseEmitter(1);
                localStorage.setItem(key, JSON.stringify([emoji1, emoji2, emoji3, scope_text]))
            }

            tsParticles.load("tsparticles", getCompleteConfig([emoji1, emoji2, emoji3]));

            document.getElementById("moji_one").innerHTML = emoji1;
            document.getElementById("moji_two").innerHTML = emoji2;
            document.getElementById("moji_three").innerHTML = emoji3;
            document.getElementById("horo_desc").innerHTML = scope_text;
            document.getElementById("results").classList.toggle("d-none");


            shareField.innerHTML = "My Mojiscope for the day:\n" + emoji1 + " " + emoji2 + " " + emoji3 + "\n" + scope_text + "\nhttps://mojiscope.app"
        }
});

function getCompleteConfig(mojis) {
    return {
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
                autoPlay: true,
                position: {
                    x: 50,
                    y: 50
                },
                rate: {
                    quantity: 2,
                    delay: 0.4
                },
            },
        ],
        particles: {
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
                speed: {min: 5, max: 10}
            },
            number: {
                value: 0
            },
            opacity: {
                value: .3
            },
            size: {
                value: 48
            },
            shape: {
                type: [
                    "character"
                ],
                options: {
                    character: [
                        {
                            fill: true,
                            font: "Verdana",
                            value: mojis,
                            style: "",
                            weight: 400
                        }
                    ]
                }
            }
        }
    }
}

const randomConfig = {
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
        },
    ],
    particles: {
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
        size: {
            value: 24
        },
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
}


tsParticles.load("tsparticles", randomConfig);
