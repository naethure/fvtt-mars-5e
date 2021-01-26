export async function rollDsN(dsnRolldata) {
  if (!game.dice3d) return;

  if (
    game.user.isGM &&
    game.settings.get("dice-so-nice", "hideNpcRolls") &&
    game.settings.get("core", "rollMode") != "public"
  )
    return;
  return game.dice3d.showForRoll(...dsnRolldata);
}
