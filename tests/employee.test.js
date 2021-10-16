const Employee = require("../lib/employee");

test("Create and employee object", () => {
    const employee = new Employee("Zach", 346, "zmoore371@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));    
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employee name', () => {
    const employee = new Employee("Zach", 346, "zmoore371@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee = new Employee("Zach", 346, "zmoore371@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee("Zach", 346, "zmoore371@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee("Zach", 346, "zmoore371@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
}); 
