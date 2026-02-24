/**
 * Search results page
 */
export const searchPokemon = async (req, res) => {
  try {
    const { q } = req.query;
    const types = await pokemonService.getPokemonTypes();
    const data = await pokemonService.searchPokemon(q);

    res.render('index', {
      ...data,
      types,
      currentPage: 1,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
      searchQuery: q || '',
      selectedType: ''
    });
  } catch (error) {
    res.status(500).render('error', {
      message: 'Search failed',
      error: error.message
    });
  }
};