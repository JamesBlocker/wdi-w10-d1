var kitchen = {
    lightsOn: true,
    sink: [
        { type: "plate", clean: false },
        { type: "bowl", clean: false },
        { type: "fork", clean: false}
    ],
    dishwasher: [

    ]
}

function toggleLights(state) {
    return Object.assign({}, state, { 
        lightsOn: !state.lightsOn 
    })
}

function fillDishwasher(state) {
    return Object.assign({}, state, {
        sink: [],
        dishwasher: [ ...state.sink ]
    })
}

function runDishwasher(state) {
    return Object.assign({}, state, {
        dishwasher: state.dishwasher.map((dish) => {
            return Object.assign({}, dish, { clean: true })
        })
    })
}

console.log("Kitche 1")
console.log(kitchen)

const kitchen2 = toggleLights(kitchen)
console.log("Kitchen 2", kitchen2)

const kitchen3 = fillDishwasher(kitchen)
console.log("Kitchen 3", kitchen3)

const kitchen4 = runDishwasher(kitchen3)
console.log("Kicthen 4", kitchen4)