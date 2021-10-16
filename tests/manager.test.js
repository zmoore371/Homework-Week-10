const Manager = require('../lib/manager');

test('creates a Manager object and checks for office number', () => {
    const manager = new Manager('Zachary', 346, 'zmoore371@gmail.com', 2486 );
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Zachary', 346, 'zmoore371@gmail.com', 2486);

    expect(manager.getRole()).toEqual("Manager");
});