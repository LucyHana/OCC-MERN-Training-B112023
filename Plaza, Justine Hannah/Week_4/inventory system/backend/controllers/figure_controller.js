const figure = require("../models/figures_model");
const mongoose = require("mongoose");

let addFigure = async (req, res) => {
  const new_figure = new figure(req.body);

  try {
    const figure_to_db = await new_figure.save();
    res.status(200).json({ message: "Adding of figure is successful!" });
  } catch (error) {
    res.status(400).json(error);
  }
};

let getAllFigures = async (req, res) => {
  try {
    const allFigures = await figure.find();
    res.status(200).json(allFigures);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let getSomeFigures = async (req, res) => {
  try {
    const franchiseFilter = req.query.franchise;
    let query = {};

    if (franchiseFilter) {
      query = { franchise: franchiseFilter };
    }

    const figures = await figure.find(query);

    res.status(200).json(figures);
  } catch (err) {
    res.status(500).json(error);
  }
};

let getFigureById = async (req, res) => {
  const figureId = req.params.id;

  try {
    const foundFigure = await figure.findById(figureId);

    if (!foundFigure) {
      return res.status(404).json({ message: "Figure not found" });
    }

    res.status(200).json(foundFigure);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

let updateFigure = async (req, res) => {
  try {
    const updatedFigure = await figure.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).json({ message: "The product has been updated" });
  } catch (err) {
    res.status(400).json(error);
  }
};

let deleteFigure = async (req, res) => {
  try {
    await figure.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The figure has been removed" });
  } catch (err) {
    res.status(500).json(error);
  }
};

module.exports = {
  addFigure,
  getAllFigures,
  getFigureById,
  updateFigure,
  deleteFigure,
  getSomeFigures,
};
