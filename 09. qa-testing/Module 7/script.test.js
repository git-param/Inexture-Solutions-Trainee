/**
 * @jest-environment jsdom
 */

global.alert = jest.fn();  

const { addTodo } = require("./Project/script.js");

describe("Add Todo Module", () => {

  beforeEach(() => {
    document.body.innerHTML = "";

    const main = document.createElement("div");
    main.className = "maindisplay";
    document.body.appendChild(main);

    localStorage.clear();
  });

  // Test 1
  test("Add button should create input form", () => {
    const main = document.querySelector(".maindisplay");
    const bottom = document.createElement("div");
    main.appendChild(bottom);

    addTodo(main, bottom);

    const form = document.querySelector(".add-todo");
    expect(form).not.toBeNull();
  });

  // Test 2
  test("Cancel button should remove form", () => {
    const main = document.querySelector(".maindisplay");
    const bottom = document.createElement("div");
    main.appendChild(bottom);

    addTodo(main, bottom);

    const buttons = document.querySelectorAll(".add-todo button");
    const cancelBtn = [...buttons].find(btn => btn.textContent === "Cancel");

    expect(cancelBtn).toBeDefined();   
    cancelBtn.click();

    const form = document.querySelector(".add-todo");
    expect(form).toBeNull();
  });

  // Test 3
  test("Save should store todo in localStorage", () => {
    const main = document.querySelector(".maindisplay");
    const bottom = document.createElement("div");
    main.appendChild(bottom);

    addTodo(main, bottom);

    const inputs = document.querySelectorAll(".add-todo input");
    inputs[0].value = "1";
    inputs[1].value = "Test Title";

    const buttons = document.querySelectorAll(".add-todo button");
    const saveBtn = [...buttons].find(btn => btn.textContent === "Save");

    saveBtn.click();

    expect(localStorage.length).toBe(1);
  });

  // Test 4
  test("Should not save if inputs are empty", () => {
    const main = document.querySelector(".maindisplay");
    const bottom = document.createElement("div");
    main.appendChild(bottom);

    addTodo(main, bottom);

    const buttons = document.querySelectorAll(".add-todo button");
    const saveBtn = [...buttons].find(btn => btn.textContent === "Save");

    saveBtn.click();

    expect(localStorage.length).toBe(0);
  });

});
