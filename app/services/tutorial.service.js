const db = require("../models");
const Tutorial = db.tutorials;
const { Op } = db.Sequelize;

exports.createTutorial = (tutorialData) => {
  return Tutorial.create(tutorialData);
};

exports.findAllTutorials = async (condition) => {
    const data = await Tutorial.findAll({ where: condition });

    const newData = data.map(item => {
        const plainItem = item.get({ plain: true });
        const newTitle = "CONEJO " + plainItem.title; 
        return { ...plainItem, title: newTitle, hola: "valor de "};
    });

    return newData;
};



exports.findTutorialById = (id) => {
  return Tutorial.findByPk(id);
};

exports.updateTutorial = (id, tutorialData) => {
  return Tutorial.update(tutorialData, { where: { id: id } });
};

exports.deleteTutorial = (id) => {
  return Tutorial.destroy({ where: { id: id } });
};

exports.deleteAllTutorials = () => {
  return Tutorial.destroy({ where: {}, truncate: false });
};

exports.findAllPublishedTutorials = () => {
  return Tutorial.findAll({ where: { published: true } });
};
