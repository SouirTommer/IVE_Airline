let input = document.getElementById("from-flight-input-autocomplete");
let input2 = document.getElementById("to-flight-input-autocomplete");

$(document).ready(function () {
    //initiate the radio button
    document.getElementById("return").checked = true;

    // Eliminate the selected airport, preventing duplcation aiport on the input of depart the arrival
    let airport = ["Hong Kong Intl (HKG)", "Shanghai Pu Dong (PVG)", "Osaka Kansai International (KIX)",
        "Taipei Taiwan Taoyuan (TPE)"
    ];

    $("#to-flight-input-autocomplete").keypress(function () {
        var input = document.getElementById("from-flight-input-autocomplete").value;
        var index = 0;
        var airportlist = ["Hong Kong Intl (HKG)", "Shanghai Pu Dong (PVG)",
            "Osaka Kansai International (KIX)", "Taipei Taiwan Taoyuan (TPE)"
        ];
        for (i of airport) {
            if (input == i) {
                var index = airportlist.indexOf(i);
                airportlist.splice(index, 1);
            }
        }
        $("#to-flight-input-autocomplete").autocomplete({
            source: airportlist
        }, {
            autoFocus: true,
            delay: 0
        });
    });

    $("#from-flight-input-autocomplete").keypress(function () {
        var input = document.getElementById("to-flight-input-autocomplete").value;
        var index = 0;
        var airportlist = ["Hong Kong Intl (HKG)", "Shanghai Pu Dong (PVG)",
            "Osaka Kansai International (KIX)", "Taipei Taiwan Taoyuan (TPE)"
        ];
        for (i of airport) {
            if (input == i) {
                index = airportlist.indexOf(i);
                airportlist.splice(index, 1);
            }
        }
        $("#from-flight-input-autocomplete").autocomplete({
            source: airportlist
        }, {
            autoFocus: true,
            delay: 0
        });
    });
    // end


    //One way radio button : disable return date picker
    $("#radio-flight input").click(function () {
        if (document.getElementById("oneway").checked) {
            $("#returnDate").val("")
            $("#returnDate").prop('disabled', true);
        } else if (document.getElementById("return").checked) {
            $("#returnDate").val("");
            $("#returnDate").prop('disabled', false);
        }
    });
    //end
    
    //disable past date on datepicker
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("Ddatepicker")[0]
        .setAttribute('min', today);
    var temp = new Date();
    var tmr = new Date(temp);
    tmr.setDate(temp.getDate() + 1);
    var tomorrow = tmr.toISOString().split('T')[0];
    document.getElementsByName("Rdatepicker")[0]
        .setAttribute('min', tomorrow);
    // end

    $("#departDate").click(function () {
        var futureblockdate = document.getElementById("returnDate").value;
        var fbd = new Date(futureblockdate);
        fbd.setDate(fbd.getDate() - 1);
        fbd = fbd.toISOString().split('T')[0];
        document.getElementsByName("Ddatepicker")[0]
            .setAttribute('max', fbd);
    })

});
// input.addEventListener("keydown", (e) => {
//     if (e.key == 'Enter') {
//         return;
//     }
//     // loop through airport array
//     removeElement();
//     for (let i of airport) {
//         //    console.log(i) :test uses ;
//         if (i == input2.value) {
//             continue;
//         }
//         if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
//             //creat autocomplete list
//             let listitem = document.createElement("li");
//             listitem.classList.add("list-items");
//             listitem.style.cursor = "pointer";
//             listitem.setAttribute("onclick", "displayDepartureAirport('" + i + "')");

//             // display matched word in bold
//             let word = "<b>" + i.substring(0, input.value.length) + "</b>"
//             word += i.substring(input.value.length);

//             //console.log(word) : testing only
//             listitem.innerHTML = word;
//             document.querySelector("#fromlist").appendChild(listitem);


//         }
//     }

// });


// input2.addEventListener("keyup", (e) => {
//     if (e.key == 'Enter') {
//         return;
//     }
//     // loop through airport array

//     removeElement();
//     for (let i of airport) {
//         //    console.log(i) :test uses ;
//         if (i == input.value) {
//             continue;
//         }
//         if (i.toLowerCase().startsWith(input2.value.toLowerCase()) && input2.value != "") {
//             //creat autocomplete list

//             let listitem = document.createElement("li");
//             listitem.classList.add("list-items");
//             listitem.style.cursor = "pointer";
//             listitem.setAttribute("onclick", "displayArrivalAirport('" + i + "')");

//             // display matched word in bold
//             let word = "<b>" + i.substring(0, input2.value.length) + "</b>"
//             word += i.substring(input2.value.length);


//             //console.log(word) : testing only
//             listitem.innerHTML = word;
//             document.querySelector("#tolist").appendChild(listitem);

//         }
//     }

// });

// function input1enter() {
//     input.value = document.querySelector("li").innerText;
//     removeElement();
//     return;
// }

// function input2enter() {
//     input2.value = document.querySelector("li").innerText;
//     removeElement();
//     return;
// }

// function displayDepartureAirport(value) {
//     input.value = value;
//     removeElement();

// }

// function displayArrivalAirport(value) {
//     input2.value = value;
//     removeElement();

// }

// function removeElement() {
//     let items = document.querySelectorAll(".list-items");
//     items.forEach((item) => {
//         item.remove();
//     });
// };