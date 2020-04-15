export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState };
    return newState;
  }
}

export const changeState = (prop) => {
  return (value) => {
      return (state) => ({
        ...state, 
        [prop] : (state[prop] || 0) + value
      })
    }
  }
}

// export const changeState = (prop) => {
//   return (value) => {
//     return (name) => {
//       return (state) => {
//         return {
//         name, ...state, 
//         [prop] : (state[prop] || 0) + value
//         }
//       }
//     }
//   }
// }


export const lily = storeState();
export const rose = storeState();
export const blueFood = changeState("soil")(5);
export const sunnyDay = changeState("sunlight")(5);
export const cloudyDay = changeState("sunlight")(3);
export const rainyDay = changeState("sunlight")(0);
export const enoughWater = changeState("water")(5);




//Example

// export const storeState = (initialState) => {
//   let currentState = initialState;
//   return (blueFood) => {
//     const newState = blueFood({soil: 0, water: 0, light: 0});
//     currentState = {...newState };
//     return newState;
//   }
// }

// export const blueFood = (soil) => {
//   return (5) => {
//     return (name) => {
//       return ({soil: 0, water: 0, light: 0}) => ({
//         name, ...state, 
//         [prop] : (state[soil] || 0) + 5
//       })
//     }
//   }
// }

const initialValue = {soil: 0, water: 0, light: 0};
const fern = storeState(initialValue);
const sunFlower = storeState(initialValue);
const fernState = fern(blueFood);
const fernState = fern(sunnyDay);
const sunFlowerState = sunFlower(blueFood);

const feed = changeState("soil");
const theStormHurtsMe = feed(-5);
fernAffectedByTheStorm = fern(theStormHurtsMe);
// fernAffectedByTheStorm = {soil: -5, water: 0, light: 0});

const gameValues = { 
  plant: {
    soil: 0, 
    water: 0, 
    light: 0
  }, game: {
     numberOfPlatsAlive:0, 
     numberOfPlantDead; 0, 
     playerName: ""
  }, weather: {
     wind: 2, 
     sunCover: 8, 
     rain: 0, 
     storm: flase,
     overcate: false, 
     cloudCover: 2   
  }};  

const SuperGameMaster = storeState(gameValues);                    

const initialCameStateValues = { numberOfPlatsAlive:0, numberOfPlantDead; 0, playerName: "" };
const gameMaster = storeState(initialGameValue);

const newPlayer = changeState("playerName");
// const newPlant = changeState("numberOfPlants")(1);
const currentPlayer = newPlayer("Sandy");
const gameObj = gameMaster(currentPlayer);
// gameObj = { numberOfPlatsAlive:0, numberOfPlantDead; 0, playerName: "Sandy" };

const newPlant = changeState("numberOfPlantsAlive")(1);
const updateGameObj = gameMaster(newPlant);
// uptatedGameObj =  { numberOfPlatsAlive:1, numberOfPlantDead; 0, playerName: "Sandy" };

// function that stores our plant environment state
const initialEnvironmentValues = { wind: 2, sunCover: 8, rain: 0, storm: flase, overcate: false, cloudCover: 2 };
const environmentChanger = storeState(initialEnvironmentValues);

// using changState as our function factory for the plant environment data
const hereComesTheStorm = changeState("storm")(true);
const theStormIsHere = environmentChanger(hereComesTheStorm);
// theStormIsHere =  { wind: 2, sunCover: 8, rain: 0, storm: true, overcate: false, cloudCover: 2 };
