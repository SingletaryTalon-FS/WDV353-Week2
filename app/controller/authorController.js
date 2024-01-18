const Authors = require("../models/Authors");

const getAllAuthors = async (req, res) => {
    const authors = await Authors.find({});
    res.status(200).json({
        data: authors,
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

const getAuthorById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        id, 
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

const createAuthor = (req, res) => {
    const { newAuthor } = req.body;
    console.log("data >>>", newAuthor);
    res.status(200).json({
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const author = await Authors.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
        data: author,
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

const deleteAuthor = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        id, 
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
};
