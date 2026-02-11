const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

// Get all posts
router.get('/', postController.getAllPosts);

// ✅ NEW: Get single post by ID (Dynamic Route)
router.get('/:postId', postController.getPostById);

module.exports = router;
