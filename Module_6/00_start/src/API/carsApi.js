const baseUrl = 'http://localhost:3050';

export const getAllCars = async () => {
  const response = await fetch(`${baseUrl}/api/cars`);
  if (!response.ok) {
    const err = await response.text();
    throw Error(err);
  }
  return response.json();
}

export const getCarById = async (id) => {
  const response = await fetch(`${baseUrl}/api/cars/${id}`);
  if (!response.ok) {
    const err = await response.text();
    throw Error(err);
  }
  return response.json();
}

var headers = {
  "Content-Type": "application/json",                                                                                                
  "Access-Control-Allow-Origin":"*"
}

export const addCar = async (car) => {
  const response = await fetch(`${baseUrl}/api/cars`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(car)
  })
  if (!response.ok) {
    const err = await response.text();
    throw Error(err);
  }
  return response.json();
}

