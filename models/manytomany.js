const association = sequelize.define("association", { ... })
const Tag = sequelize.define("tags", { ... })

association.belongsToMany(Tag, {
  through: "assiciation_tag",
  as: "tags",
  foreignKey: "association_id",
});

Tag.belongsToMany(association, {
  through: "association_tag",
  as: "association",
  foreignKey: "tag_id",
});

associationController.create({
  title: "Tut#1",
  description: "Tut#1 Description",
});
...

TagController.create({
  name: "Tag#1",
});
...

TagController.addassociation(tag1.id, tut1.id);
TagController.addassociation(tag1.id, tut2.id);
Tag.findall({
    include: [{
        model: association,
        as: "association",
        attributes: ...
    }]
    
})
Tag.findbypk(id, {
    include: [
        {
            model: association,
            as: "associations",
            attributes: ... 

    },
    ],
})
Tag.findbypk(id, {
    include: [
        {
            model: Tag,
            as: "tags",
            attributes: ... 

    },
    ],
})