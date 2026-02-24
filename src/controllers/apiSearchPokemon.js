/**
 * API: Search Pokemon
 */
export const apiSearchPokemon = async (req, res) => {
  try {
    const { q } = req.query;
    const data = await pokemonService.searchPokemon(q);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
