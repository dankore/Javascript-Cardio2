    // ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear()
      
    //   if (currentYear - person.year >= 19) {
    //     return true
    //   }
    // })
    
    //Refactor above code 2
    // const isAdult = people.some(person => {
    //   const currentYear = (new Date()).getFullYear();
      
    //   return currentYear - person.year >=
    // });
    
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19)

    
  
    // Array.prototype.every() // is everyone 19 or older?
    const allAdults = people.every(person =>((new Date()).getFullYear() - person.year >= 19))
    
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    
    //1st solution
    // const findId = comments.find(function(comment){
    //   if (comment.id === 823423) {
    //     return true
    //   }
    // })
    
    // Refactored above code
    const findId = comments.find(comment => comment.id === 823423)
    
    
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    
    //Solution
    const deleteIndex = comments.findIndex(index => index.id === 823423)
      
      // console.log({deleteIndex})
    
      // comments.splice(deleteIndex, 1);
      
      const newArray = [
        ...comments.slice(0, deleteIndex),
        ...comments.slice(deleteIndex + 1)
        ]
        