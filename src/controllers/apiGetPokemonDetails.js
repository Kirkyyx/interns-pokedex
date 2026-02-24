/**
 * API: Get Pokemon by name or ID
 */
export const apiGetPokemonDetails = async (req, res) => {
  try {
    const { nameOrId } = req.params;
    const pokemon = await pokemonService.getPokemonDetails(nameOrId);

    if (!pokemon) {
      return res.status(404).json({
        success: false,
        error: `Pokemon not found: ${nameOrId}`
      });
    }

    res.json({ success: true, data: pokemon });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};