/**
 * Filter by type page
 */
export const getPokemonByType = async (req, res) => {
  try {
    const { type } = req.params;
    const page = parseInt(req.query.page) || 1;
    const types = await pokemonService.getPokemonTypes();
    const data = await pokemonService.getPokemonByType(type, page);

    if (!data) {
      return res.status(404).render('error', {
        message: 'Type not found',
        error: `No Pokemon type found: ${type}`
      });
    }

    res.render('index', {
      ...data,
      types,
      searchQuery: '',
      selectedType: type
    });
  } catch (error) {
    res.status(500).render('error', {
      message: 'Failed to load Pokemon by type',
      error: error.message
    });
  }
};