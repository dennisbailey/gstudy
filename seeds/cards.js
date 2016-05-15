
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cards').del(),

    // Inserts seed entries
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is a Boolean?', 
                           answer: 'In computer science, a boolean is a logical data type that can have only the values true or false.'}),
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is Null?', 
                           answer: 'In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.'}),
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is Undefined?', 
                           answer: 'A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.'}),
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is a Number?', 
                           answer: 'In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.'}),
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is a String?', 
                           answer: 'In any computer programming language, a string is a sequence of characters used to represent text. \n In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.'}),
    knex('cards').insert({ deck_id: 1, 
                           question: 'What is an Object?', 
                           answer: 'Object refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.'}),
    
    knex('cards').insert({deck_id: 2, question: 'T-1000', answer: 'Maybe?'}),
    knex('cards').insert({deck_id: 2, question: 'Replicants', answer: 'Maybe?'}),
    knex('cards').insert({deck_id: 2, question: 'Herbie the Love Bug', answer: 'Maybe?'}),
    knex('cards').insert({deck_id: 2, question: 'Johnny 5', answer: 'Maybe?'}),
    knex('cards').insert({deck_id: 2, question: 'V\'Ger', answer: 'Maybe?'}),
    knex('cards').insert({deck_id: 2, question: 'Cylons', answer: 'Maybe?'}),
    
    knex('cards').insert({deck_id: 3, question: 'Pain', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Poppy', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Sesame', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Egg', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Cinnamon Raisin', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Everything', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Egg Everything', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Onion', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Salt', answer: 'Yes!'}),
    knex('cards').insert({deck_id: 3, question: 'Wheat', answer: 'No!'}),
    knex('cards').insert({deck_id: 3, question: 'French Toast', answer: 'No!'}),
    knex('cards').insert({deck_id: 3, question: 'Strawberry', answer: 'No!'}),
    
    knex('cards').insert({deck_id: 4, question: 'HMS Sutherland', answer: 'A Ship of the Line'}),
    knex('cards').insert({deck_id: 4, question: 'Witch of Endor', answer: 'Flying Colours'}),
    knex('cards').insert({deck_id: 4, question: 'HMS Indefatigable', answer: 'Mr. Midshipman Hornblower'})
  );
};