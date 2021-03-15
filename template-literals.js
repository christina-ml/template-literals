// Practicing template literals on my own in JavaScript 3-14-2021
const human = {
    name: 'Christina',
    scientificName: 'Christinayx Programmertus'
};

function createFriendlyGreeting(friend) {
    const friendGreeting = `Template literals are so cool, ${friend.name}...
    I don't think I've tried using them before.
    Your scientific name ${friend.scientificName} is very strange.
    I think I'll continue to call you ${friend.name}.`;

    return friendGreeting;
}

console.log(createFriendlyGreeting(human));

/*
Output:
Template literals are so cool, Christina...
    I don't think I've tried using them before.
    Your scientific name Christinayx Programmertus is very strange.
    I think I'll continue to call you Christina.
*/