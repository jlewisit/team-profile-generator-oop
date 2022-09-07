const Employee = require("../lib/Employee");

test("Creates a new employee object", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
});

test("Tests employee name", () => {
    const name = "Wayne";
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe(name);
});

test("Tests ID", () => {
    const id = 22;
    const newEmployee = new Employee("Wayne", id);
    expect(newEmployee.id).toBe(id);
});

test("Tests email", () => {
    const email = "email@gmail.com";
    const newEmployee = new Employee("Wayne", 22, email);
    expect(newEmployee.email).toBe(email);
})

test("Gets name through getName()", () => {
    const testName = "Wayne";
    const newEmployee = new Employee(testName);
    expect(newEmployee.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 22;
    const newEmployee = new Employee("Wayne", teID);
    expect(newEmployee.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "email@gmail.com";
    const newEmployee = new Employee("Wayne", 22, testEmail);
    expect(newEmployee.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const newEmployee = new Employee("Wayne", 22, "email@gmail.com");
    expect(newEmployee.getRole()).toBe(returnValue);
})
