// API utility for calculator backend

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/calculate';

export async function calculate(a, b, op) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a, b, op })
  });
  const data = await response.json();
  return data.result;
}
