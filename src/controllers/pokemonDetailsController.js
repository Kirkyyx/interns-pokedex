/**
 * Pokemon detail page
 */
export const getPokemonDetails = async (req, res) => {
  try {
    const { nameOrId } = req.params;
    const pokemon = await pokemonService.getPokemonDetails(nameOrId);

    if (!pokemon) {
      return res.status(404).render('error', {
        message: 'Pokemon not found',
        error: `No Pokemon found with name or ID: ${nameOrId}`
      });
    }

    res.render('pokemon', { pokemon });
  } catch (error) {
    res.status(500).render('error', {
      message: 'Failed to load Pokemon details',
      error: error.message
    });
  }
};