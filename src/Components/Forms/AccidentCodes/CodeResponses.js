const basicRearEnd = "Rear end accidents like this almost always come down to whoever had the 'last clear chance' to avoid the impact, which almost inevitably comes down to the person that was following. At all times while we're driving we have a responsibility to keep the right lookout, speed, and distance with traffic in front of us so that if a car that's established in front of us  has to stop (for whatever reason) we can also come to a stop or at least slow enough to avoid the impact."

const proximateCause = " Another major factor that goes into determining fault in these situations is called 'Proxmate Cause', which basically means the most immediate cause."

const multipleCarsNaf = " When it comes to multiple car pileups it comes down to who was the proximate cause of the various impacts. If a car in the pileup rear ended the car in front of them, and THEN was rear ended, they were still the 'proximate cause' for at least the initial impact to the car in front of them. However if a driver was impacted and that impact pushed them into the car in front of them then the car that pushed them, or at least started the string of impacts that pushed them, is the 'proximate cause'. Insurance companies may divy up damages further based on the order and severity of the impact but ultimately it will come down to if you weren't the 'proximate cause' of any of those rear end impacts then it will be considered a 'not at fault' accident for you."

export const responses = {
    1: ["You're at fault.", 
        basicRearEnd
        ],
    2: ["You're at fault.",
        basicRearEnd +
        proximateCause +
        " When you're at the back of a multiple car pile-up one way or another you had the last clear chance to avoid the impact with the car at the back, which means you'll owe at least for their rear end damages. If that impact pushed that car into other vehicles in front of them you could also owe for their front end damages and those other car's damages as well because you pushing the car in front of you was the 'proximate cause' of that chain of impacts."
        ],
    3: ["You're at fault, but only for damage you caused to    the car or cars in front of you!", 
        basicRearEnd +
        proximateCause +
        " Essentially you were the 'proximate cause' of the damage to at least the back of the car in front of you. If that impact pushed the car in front of you into additional cars you will also owe for that additonal damage to their front and to the cars in front of them. However, the driver behind you also had the 'last clear chance' to stop before hitting you so they'll be responsible for your rear end damage. The insurance companies may get more detailed on that based on the order and severity of the impacts but ultimately if you rear ended someone, and were THEN rear ended yourself you're still at fault for your failure to maintain propser distance, speed, and lookout."
        ],
    4: ["You're not at fault.",
        basicRearEnd +
        proximateCause +
        multipleCarsNaf
        ],
    5: ["You're not at fault.", 
        basicRearEnd + 
        proximateCause +
        multipleCarsNaf
        ],
    6: ["You're not at fault.",
        basicRearEnd
        ]
}