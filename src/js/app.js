export default function colorLifeScore(object) {
  if (object.health > 50) {
    return 'healthy';
  }
  if (object.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
