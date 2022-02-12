const { Thought, Pizza } = require('../models');

const thoughtController = {
    // add comment to pizza
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            .thoughtController(({ _id }) => {
                console.log(_id)
            })
    }
};





// remove comment
removeThought() {

}
};

module.exports = thoughtController;