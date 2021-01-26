export async function rollDsN(dsnRolldata) {
  if (!game.dice3d) return;

  if (
    game.user.isGM &&
    game.settings.get("core", "rollMode") != "roll"
  )
    return;
  return game.dice3d.showForRoll(...dsnRolldata);
}
