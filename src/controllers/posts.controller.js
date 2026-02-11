const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All posts fetched successfully"
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    success: true,
    data: { postId: postId }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
