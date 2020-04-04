const express = require('express');
const router = express.Router();

// @route       GET api/favorites
// @desc        Get all user favorites
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all favorites');
});

// @route       POST api/favorites
// @desc        Add new favorite
// @access      Private
router.post('/', (req, res) => {
  res.send('Add favorite');
});

// @route       DELETE api/favorites/:id
// @desc        Delete favorite
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete favorite');
});

module.exports = router;
