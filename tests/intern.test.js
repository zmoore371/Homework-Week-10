const Intern = require('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Zachary', 346, 'zmoore371@gmail.com', 'UNCW');
    
    expect(intern.name).toEqual(expect.any(String));
});

test('gets Intern school', () => {
    const intern = new Intern('Zachary', 346, 'zmoore371@gmail.com', 'UNCW');

    expect(intern.getSchool()).toEqual("UNCW");
});

test('gets role of employee', () => {
    const intern = new Intern('Zachary', 346, 'zmoore371@gmail.com', 'UNCW');

    expect(intern.getRole()).toEqual("Intern");
});