// very simple calories estimate: calories per step depends on weight
export function estimateCalories(steps, weightKg=70){
  // average 0.04 kcal per step for 70kg -> scale linearly with weight
  const base = 0.04;
  return +(steps * base * (weightKg/70)).toFixed(2);
}