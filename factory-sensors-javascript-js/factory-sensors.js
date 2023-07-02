
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
} 

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("Implement the checkHumidity function");
  }
}


export function reportOverheating(temperature) {
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
  if (temperature == null) {
    throw new ArgumentError();
  }
}

export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    switch (error.constructor) {
      case ArgumentError:
        actions.alertDeadSensor();
        return;
      case OverheatingError: {
        if (error.temperature > 600) {
          actions.shutdown();
          return;
        }
        if (error.temperature > 500) {
          actions.alertOverheating();
          return;
        }
      }
      default:
        throw error;
    }
  }
}
