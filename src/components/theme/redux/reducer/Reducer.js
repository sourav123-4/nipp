import moment from 'moment';
import {
  SET_CALORIES,
  SET_TOTAL_CALORIES,
  SET_EXERCISE_TIME,
  SET_TOTAL_EXERCISE_TIME,
  SET_MOVE,
  SET_TOTAL_MOVE,
  SET_REFRESH,
  SET_DISTANCE,
  SET_TOTAL_DISTANCE,
  SET_STAND_TIME,
  SET_TOTAL_STAND_TIME,
  SET_FAT,
  SET_TOTAL_FAT,
  SET_PROTEIN,
  SET_TOTAL_PROTEIN,
  SET_CARBS,
  SET_TOTAL_CARBS,
  SET_HEART_RATE,
  SET_TOTAL_HEART_RATE,
  SET_STEPS_COUNT,
  SET_TOTAL_STEPS_COUNT,
  SET_HR_VARIABILITY,
  SET_TOTAL_HR_VARIABILITY,
  SET_BLOOD_OXYZEN,
  SET_TOTAL_BLOOD_OXYZEN,
  SET_RESTING_HR,
  SET_TOTAL_RESTING_HR,
  SET_HEIGHT,
  SET_TOTAL_HEIGHT,
  SET_WEIGHT,
  SET_TOTAL_WEIGHT
} from '../action/Action';

const initialState = {
  distance: 0,
  TotalDistanceData: [],
  stepsCount: 0,
  TotalStepsCountData: [],
  heartRate: 0,
  TotalHeartRateData: [],
  calories: 0,
  TotalCaloriesData: [],
  height: 0,
  TotalHeightData: [],
  weight: 0,
  TotalWeightData: [],
  HrVariability: 0,
  TotalHrVariabilityData: [],
  BloodOxyzen: 0,
  TotalBloodOxyzenData: [],
  restingHr: 0,
  TotalRestingHrData: [],
  carbs: 0,
  TotalCarbsData: [],
  fat: 0,
  TotalFatData: [],
  protein: 0,
  TotalProteinData: [],
  standTime: 0,
  TotalStandTimeData: [],
  exerciseTime: 0,
  TotalExerciseTimeData: [],
  Move: 0,
  TotalMoveData: [],
  modalView: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DISTANCE: {
      return { ...state, distance: action.payload };
    }
    case SET_TOTAL_DISTANCE: {
      return { ...state, TotalDistanceData: action.payload };
    }
    case SET_STEPS_COUNT: {
      return { ...state, stepsCount: action.payload };
    }
    case SET_TOTAL_STEPS_COUNT: {
      return { ...state, TotalStepsCountData: action.payload };
    }
    case SET_HEART_RATE: {
      return { ...state, heartRate: action.payload };
    }
    case SET_TOTAL_HEART_RATE: {
      return { ...state, TotalHeartRateData: action.payload };
    }
    case SET_CALORIES: {
      return { ...state, calories: action.payload };
    }
    case SET_TOTAL_CALORIES: {
      return { ...state, TotalCaloriesData: action.payload };
    }
    case SET_HR_VARIABILITY: {
      return { ...state, HrVariability: action.payload };
    }
    case SET_TOTAL_HR_VARIABILITY: {
      return { ...state, TotalHrVariabilityData: action.payload };
    }
    case SET_BLOOD_OXYZEN: {
      return { ...state, BloodOxyzen: action.payload };
    }
    case SET_TOTAL_BLOOD_OXYZEN: {
      return { ...state, TotalBloodOxyzenData: action.payload };
    }
    case SET_RESTING_HR: {
      return { ...state, restingHr: action.payload };
    }
    case SET_TOTAL_RESTING_HR: {
      return { ...state, TotalRestingHrData: action.payload };
    }
    case SET_HEIGHT: {
      return { ...state, height: action.payload };
    }
    case SET_TOTAL_HEIGHT: {
      return { ...state, TotalHeightData: action.payload };
    }
    case SET_WEIGHT: {
      return { ...state, weight: action.payload };
    }
    case SET_TOTAL_WEIGHT: {
      return { ...state, TotalWeightData: action.payload };
    }
    case SET_CARBS: {
      return { ...state, carbs: action.payload };
    }
    case SET_TOTAL_CARBS: {
      return { ...state, TotalCarbsData: action.payload };
    }
    case SET_PROTEIN: {
      return { ...state, protein: action.payload };
    }
    case SET_TOTAL_PROTEIN: {
      return { ...state, TotalProteinData: action.payload };
    }
    case SET_FAT: {
      return { ...state, fat: action.payload };
    }
    case SET_TOTAL_FAT: {
      return { ...state, TotalFatData: action.payload };
    }
    case SET_STAND_TIME: {
      return { ...state, standTime: action.payload };
    }
    case SET_TOTAL_STAND_TIME: {
      return { ...state, TotalStandTimeData: action.payload };
    }
    case SET_EXERCISE_TIME: {
      return { ...state, exerciseTime: action.payload };
    }
    case SET_TOTAL_EXERCISE_TIME: {
      return { ...state, TotalExerciseTimeData: action.payload };
    }
    case SET_MOVE: {
      return { ...state, Move: action.payload };
    }
    case SET_TOTAL_MOVE: {
      return { ...state, TotalMoveData: action.payload };
    }
    case SET_REFRESH: {
      return { ...state, modalView: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;