/**
 * API: Get all types
 */
export const apiGetTypes = async (req, res) => {
  try {
    const types = await pokemonService.getPokemonTypes();
    res.json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};