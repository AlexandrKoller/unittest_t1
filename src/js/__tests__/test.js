import colorLifeScore from '../app';

test.each([
  [95, 'healthy'],
  [45, 'wounded'],
  [10, 'critical'],
])('testing colorLifeScore function with %s health and %s status', (heal, status) => {
  const result = colorLifeScore({ name: 'Маг', health: heal });
  expect(result).toBe(status);
});
