import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { a, b, op } = req.body;
  let result;
  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Error: Division by zero';
      break;
    default:
      result = 'Error: Invalid operator';
  }
  res.json({ result });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Calculator backend running on port ${PORT}`);
});
