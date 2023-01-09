export const SET_DISTANCE = 'SET_DISTANCE';
export const SET_STEPS_COUNT = 'SET_STEPS_COUNT';
export const SET_HEART_RATE = 'SET_HEART_RATE';
export const SET_CALORIES = 'SET_CALORIES';
export const SET_HR_VARIABILITY = 'SET_HR_VARIABILITY';
export const SET_RESTING_HR = 'SET_RESTING_HR';
export const SET_BLOOD_OXYZEN = 'SET_BLOOD_OXYZEN';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_CARBS = 'SET_CARBS';
export const SET_PROTEIN = 'SET_PROTEIN';
export const SET_FAT = 'SET_FAT';
export const SET_STAND_TIME = 'SET_STAND_TIME';
export const SET_EXERCISE_TIME = 'SET_EXERCISE_TIME';
export const SET_MOVE = 'SET_MOVE';
export const SET_REFRESH = 'SET_REFRESH';
export const SET_TOTAL_CALORIES = 'SET_TOTAL_CALORIES';
export const SET_TOTAL_EXERCISE_TIME = 'SET_TOTAL_EXERCISE_TIME';
export const SET_TOTAL_DISTANCE = 'SET_TOTAL_DISTANCE';
export const SET_TOTAL_STAND_TIME = 'SET_TOTAL_STAND_TIME';
export const SET_TOTAL_HEART_RATE = 'SET_TOTAL_HEART_RATE';
export const SET_TOTAL_STEPS_COUNT = 'SET_TOTAL_STEPS_COUNT';
export const SET_TOTAL_HR_VARIABILITY = 'SET_TOTAL_HR_VARIABILITY';
export const SET_TOTAL_BLOOD_OXYZEN = 'SET_TOTAL_BLOOD_OXYZEN';
export const SET_TOTAL_RESTING_HR = 'SET_TOTAL_RESTING_HR';
export const SET_TOTAL_HEIGHT = 'SET_TOTAL_HEIGHT';
export const SET_TOTAL_WEIGHT = 'SET_TOTAL_WEIGHT';
export const SET_TOTAL_CARBS = 'SET_TOTAL_CARBS';
export const SET_TOTAL_PROTEIN = 'SET_TOTAL_PROTEIN';
export const SET_TOTAL_FAT = 'SET_TOTAL_WEIGHT';
export const SET_TOTAL_MOVE = 'SET_TOTAL_MOVE';

export const setDistance = data  => dispatch => {
  dispatch({
    type: SET_DISTANCE,
    payload: data,
  });
};

export const setTotalDistance = data  => dispatch => {
  dispatch({
    type: SET_TOTAL_DISTANCE,
    payload: data,
  });
};

export const setStepsCount = data  => dispatch => {
  dispatch({
    type: SET_STEPS_COUNT,
    payload: data,
  });
};

export const setTotalStepsCount = data  => dispatch => {
  dispatch({
    type: SET_TOTAL_STEPS_COUNT,
    payload: data,
  });
};

export const setHeartRate = data => dispatch =>{
  dispatch({
    type: SET_HEART_RATE,
    payload:data,
  })
}

export const setTotalHeartRate = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_HEART_RATE,
    payload:data,
  })
}

export const setCalories = data => dispatch =>{
  dispatch({
    type: SET_CALORIES,
    payload:data,
  })
}

export const setTotalCalories = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_CALORIES,
    payload:data,
  })
}

export const setHrVariability = data => dispatch =>{
  dispatch({
    type: SET_HR_VARIABILITY,
    payload:data,
  })
}

export const setTotalHrVariability = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_HR_VARIABILITY,
    payload:data,
  })
}

export const setRestingHr = data => dispatch =>{
  dispatch({
    type: SET_RESTING_HR,
    payload:data,
  })
}
export const setTotalRestingHr = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_RESTING_HR,
    payload:data,
  })
}

export const setBloodOxyzen = data => dispatch =>{
  dispatch({
    type: SET_BLOOD_OXYZEN,
    payload:data,
  })
}

export const setTotalBloodOxyzen = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_BLOOD_OXYZEN,
    payload:data,
  })
}

export const setHeight = data => dispatch =>{
  dispatch({
    type: SET_HEIGHT,
    payload:data,
  })
}

export const setTotalHeight = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_HEIGHT,
    payload:data,
  })
}

export const setWeight = data => dispatch =>{
  dispatch({
    type: SET_WEIGHT,
    payload:data,
  })
}

export const setTotalWeight = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_WEIGHT,
    payload:data,
  })
}

export const setCarbs = data => dispatch =>{
  dispatch({
    type: SET_CARBS,
    payload:data,
  })
}

export const setTotalCarbs = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_CARBS,
    payload:data,
  })
}


export const setProtein = data => dispatch =>{
  dispatch({
    type: SET_PROTEIN,
    payload:data,
  })
}

export const setTotalProtein = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_PROTEIN,
    payload:data,
  })
}

export const setFat = data => dispatch =>{
  dispatch({
    type: SET_FAT,
    payload:data,
  })
}

export const setTotalFat = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_FAT,
    payload:data,
  })
}

export const setStandTime = data => dispatch =>{
  dispatch({
    type: SET_STAND_TIME,
    payload:data,
  })
}

export const setTotalStandTime = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_STAND_TIME,
    payload:data,
  })
}

export const setExerciseTime = data => dispatch =>{
  dispatch({
    type: SET_EXERCISE_TIME,
    payload:data,
  })
}

export const setTotalExerciseTime = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_EXERCISE_TIME,
    payload:data,
  })
}

export const setMove = data => dispatch =>{
  dispatch({
    type: SET_MOVE,
    payload:data,
  })
}

export const setTotalMove = data => dispatch =>{
  dispatch({
    type: SET_TOTAL_MOVE,
    payload:data,
  })
}

export const setModalView = data => dispatch =>{
  dispatch({
    type: SET_REFRESH,
    payload:data,
  })
}