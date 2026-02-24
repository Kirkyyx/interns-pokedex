/**
 * API: Get Pokemon by type
 */
export const apiGetPokemonByType = async (req, res) => {
  try {
    const { type } = req.params;
    const page = parseInt(req.query.page) || 1;
    const data = await pokemonService.getPokemonByType(type, page);

    if (!data) {
      return res.status(404).json({
        success: false,
        error: `Type not found: ${type}`
      });
    }

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};