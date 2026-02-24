// ============================================
// VIEW CONTROLLERS (Return HTML via EJS)
// ============================================

/**
 * Home page - List all Pokemon with pagination
 */
export const getHomePage = async (req, res) => {
  try {
    // Get pagination parameters from query string
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    // Fetch data from services
    const data = await pokemonService.getAllPokemon(page, limit);
    const types = await pokemonService.getPokemonTypes();

    // Render the index template
    res.render('index', {
      ...data,
      types,
      searchQuery: '',
      selectedType: ''
    });
  } catch (error) {
    res.status(500).render('error', {
      message: 'Failed to load Pokemon',
      error: error.message
    });
  }
};