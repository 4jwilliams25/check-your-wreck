// Reused Syntax
// TODO: refactor the object to return either an AF or NAF statement and then the same explanation, make the explanations neutral, can cut the code nearly in half

// General
const proximateCause = " Another major factor that goes into determining fault in these situations is called 'Proxmate Cause', which basically means the most immediate cause."

const dutiesOwedBreached = " Perhaps the biggest factor that determines fault in an auto accident is called duties owed/duties breached. Basically it refers to our legal responsibilities as drivers. Who had the greater responsibility (or duty) and who didn't. Who met their responsibility and who didn't. These duties are often tied to right of way. Who had it, and who didn't."

const rightOfWay = " The easiest way to think of right of way is to think of the flow of traffic. Whenever we're moving into a new are of traffic or across the flow of traffic we have the greater responsibility to keep a proper lookout and only move into or across that traffic only when it is safe to do so. The person entering does not have the right of way. The person already established in that flow of traffic does."

const compNegFault = " If one driver caries more liability than the other they are considered 'majority' at fault and it is an at fault accident for them. It varies from state to state whether an accident is considered at fault or not at fault for a 'minority' at fault driver."

// For rear ends
const basicRearEnd = " Rear end accidents like this almost always come down to whoever had the 'last clear chance' to avoid the impact, which almost inevitably comes down to the person that was following. At all times while we're driving we have a responsibility to keep the right lookout, speed, and distance with traffic in front of us so that if a car that's established in front of us  has to stop (for whatever reason) we can also come to a stop or at least slow enough to avoid the impact."

const multipleCarsNaf = " When it comes to multiple car pileups it comes down to who was the proximate cause of the various impacts. If a car in the pileup rear ended the car in front of them, and THEN was rear ended, they were still the 'proximate cause' for at least the initial impact to the car in front of them. However if a driver was impacted and that impact pushed them into the car in front of them then the car that pushed them, or at least started the string of impacts that pushed them, is the 'proximate cause'. Insurance companies may divy up damages further based on the order and severity of the impact but ultimately it will come down to if you weren't the 'proximate cause' of any of those rear end impacts then it will be considered a 'not at fault' accident for you."

// For lane changes

const laneChange = " Whenever we're moving into or across a new lane of traffic we have the greater responsibility to maintain proper lookout and only move into or across that lane when it was safe to do so. This means we HAVE to yield to traffic established in that lane. They do NOT have to yield to us. Courtesy doesn't determine fault in an accident. Right of way and duties owed/breached does."

// For backing

const backing = " So whenever a driver is in the act of backing they are by definition going against the flow of traffic, whether that is backing straight in a lane or backing out of a parking spot into a road or aisleway. Whenever we're backing and there's an impact that means it wasn't yet safe to back up, and we will more than likely have some, most, or all of the liability depending on the circumstances. A backing driver has the greater responsibility to yield to traffic behind them and only back when it is safe to do so."

const backingButEstablished = " That being said when the point of impact on the backing vehicle is on their side what that physically means is that, at the time of the impact, they were far enough out that they were there to be seen if the other driver had been paying proper attention. If that driver didn't see them, or if they did see them but failed to take any evasive action, they they will likely carry some liability. It could be the majority but will more likely be a minority of responsibility because ultimately they still had the right of way and the backing driver had the greater responsibility to yield."

const backingButNotFar = " When the point of impact is on the back end of the backing vehicle versus the front or front half of the vehcile in the aisle what that physically means is that the backing vehicle wasn't so far out in the aisle that the vehicle moving straight hit them in the side. Physically this just means that the point of impact doesn't support that the backing vehicle was far enough out to have 'control' of the aisleway and should have yielded to the vehicle that was already established in the aisle."

// Response Object
export const responses = {

    // Rear End Responses
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
        " Essentially you were the 'proximate cause' of the damage to at least the back of the car in front of you. If that impact pushed the car in front of you into additional cars you will also owe for that additonal damage to their front and to the cars in front of them. However, the driver behind you also had the 'last clear chance' to stop before hitting you so they'll be responsible for your rear end damage. The insurance companies may get more detailed on that based on the order and severity of the impacts but ultimately if you rear ended someone, and were THEN rear ended yourself it's still considered an at fault accident for you, but you'll only be responsible for damage you caused."
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
        ],

    // Lane Change Accidents
    7: ["You may have a little fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " In a case like this the driver that was changing lanes may well be considered the wholly at fault driver. However, the point of impact being on their back end indicates that they had enought time and clearance to get at least partially established in the lane and the driver coming up in that lane at the end of the day hit them. The lane changing driver's insurance may argue that if their driver had time to get that far into the lane then the following driver should also have had time, had they been paying proper attention, to see that other car coming in and take appropriate evasive action to let them in and avoid an impact. It's a stretch, but the argument isn't completely without merit so they may ultimately be able to get that decision uphelp. In most states though it will still be considered an at fault accident for their driver and a not at fault accident for the driver that was already in the lane. But the not at fault driver may still end up with a smaller portion of liability."
        ],
    8: ["You're at fault, or at least mostly at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " In a case like this the driver that was changing lanes may well be considered the wholly at fault driver. However, the point of impact being on their back end indicates that they had enought time and clearance to get at least partially established in the lane and the driver coming up in that lane at the end of the day hit them. The lane changing driver's insurance may argue that if their driver had time to get that far into the lane then the following driver should also have had time, had they been paying proper attention, to see that other car coming in and take appropriate evasive action to let them in and avoid an impact. It's a stretch, but the argument isn't completely without merit so they may ultimately be able to get that decision uphelp. In most states though it will still be considered an at fault accident for their driver and a not at fault accident for the driver that was already in the lane. But the not at fault driver may still end up with a smaller portion of liability."
        ],
    9: ["You're at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " In a case where the vehicle changing lanes imacts the side or back panel of the vehicle that was moving straight in the lane those points of impact prove that, one way or another, that car was there to be seen, established in the lane, and in fact was beside or most of the way past the driver that was changing lanes. It's a hard indicator of improper lookout and that the driver changing lanes was not careful enough in making sure it was safe to move into the new lane."
        ],
    10: ["You're not at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " In a case where the vehicle changing lanes imacts the side or back panel of the vehicle that was moving straight in the lane those points of impact prove that, one way or another, that car was there to be seen, established in the lane, and in fact was beside or most of the way past the driver that was changing lanes. It's a hard indicator of improper lookout and that the driver changing lanes was not careful enough in making sure it was safe to move into the new lane."
        ],
    11: ["You're probably at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange
        ],
    12: ["You're probably both partially at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " Civil liability is not an all or nothing system. And it shouldn't be. Realistically more than one person can contribute to an accident happening. In a case where both drivers were changing lanes at the time of the impact both drivers will likely carry a portion of the liability that will probably mirror how far into the lane they each were. In other words the driver that was furthest established into the lane will likely have the lesser liability. That being said these types of lane changes are often either disputed because one person or another is lying or legitimately doesn't remember the accident the same way as the other. It also isn't uncommon for liability to be split 50/50 for this type of accident." +
        compNegFault
        ],
    13: ["You may have a little fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange +
        " That being said civil liability is not an all or nothing system. And it shouldn't be. Realistically more than one person can contribute to an accident happening. In a case where a driver see's another vehicle prior to an impact that driver also has a responsibility to try to take evasive action to avoid the accident (swerve, hit the brakes, honk, etc.), regardless of if they had the right of way or not. Failure to do so can result in that driver having some liability for the accident, usually less than half or a minority. It can be a stretch, depending on how much time and opportunity the driver had to take evasive action. However the argument isn't completely without merit so the insurance company of the other driver may dispute some liability for the accident and it may be upheld. Or they may not, depending on the evidence."
        + compNegFault
        ],
    14: ["You're not at fault.",
        dutiesOwedBreached +
        rightOfWay +
        laneChange
        ],

    // Backing Accidents
    15: ["You are probably at fault or majority at fault.",
        dutiesOwedBreached +
        rightOfWay +
        backing +
        " In a case where one driver was backing and the other vehicle was stopped odds are good that the reason they were stopped is because they were either far enough into the aisleway to be stopped and in drive or moving into drive, or because they saw the other driver and had hit the brakes to avoid the impact meaning that the driver that was still moving had the last clear chance to avoid the accident. In either case the driver that didn't see the other car and was still moving at the moment the cars impacted will likely be wholly or majority at fault for the accident."
        ],
    16: ["You may be partially at fault.",
        dutiesOwedBreached +
        rightOfWay +
        backing +
        backingButEstablished +
        compNegFault
        ],
    17: ["You have some fault and are probably majority at fault.",
        dutiesOwedBreached +
        rightOfWay +
        backing +
        backingButEstablished +
        compNegFault
        ],
    18: ["You're at fault.",
        dutiesOwedBreached +
        rightOfWay +
        backing +
        backingButEstablished +
        backingButNotFar
        ],
    19: ["You're not at fault.",
        dutiesOwedBreached +
        rightOfWay +
        backing +
        backingButEstablished +
        backingButNotFar
        ]
}