const express = require('express');
const router = express.Router();

// Import the controller
const postController = require('../controllers/posts.controller');

// Use controller instead of inline function
router.get('/', postController.getAllPosts);

module.exports = router;
