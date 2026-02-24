// ============================================
// VIEW ROUTES (Return HTML)
// ============================================

// Home page - list all Pokemon
router.get('/', pokemonController.getHomePage);

// Search Pokemon
router.get('/search', pokemonController.searchPokemon);

// Filter by type
router.get('/type/:type', pokemonController.getPokemonByType);

// Pokemon detail page
router.get('/pokemon/:nameOrId', pokemonController.getPokemonDetails);