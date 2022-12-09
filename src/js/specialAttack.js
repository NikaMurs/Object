export default function specialAttack(character) {
  const { special } = character;
  const result = [];
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = special[i];
    result.push({
      id, name, description, icon,
    });
  }
  return result;
}
