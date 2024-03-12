const tutorialService = require("../services/tutorial.service");

exports.create = (req, res) => {
  const tutorialData = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  tutorialService.createTutorial(tutorialData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the Tutorial." });
    });
};

exports.findAll = (req, res) => {
  
  tutorialService.findAllTutorials()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving tutorials." });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  tutorialService.findTutorialById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  tutorialService.updateTutorial(id, req.body)
    .then(num => {
      if (num == 1) {
        res.send({ message: "Tutorial was updated successfully." });
      } else {
        res.send({ message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Tutorial with id=" + id });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  tutorialService.deleteTutorial(id)
    .then(num => {
      if (num == 1) {
        res.send({ message: "Tutorial was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete Tutorial with id=" + id });
    });
};

exports.deleteAll = (req, res) => {
  tutorialService.deleteAllTutorials()
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while removing all tutorials." });
    });
};

exports.findAllPublished = (req, res) => {
  tutorialService.findAllPublishedTutorials()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving tutorials." });
    });
};
