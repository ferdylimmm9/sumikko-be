const { User } = require("./models");
const { nanoid } = require("nanoid");
// User 1
User.create({
  id: nanoid(),
  name: "John Doe",
  email: "john.doe@example.com",
  password: "123456",
  phoneNumber: "+6281234567890",
  address: "123 Main Street, Cityville",
});

// User 2
User.create({
  id: nanoid(),
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  password: "123456",
  phoneNumber: "+6289876543210",
  address: "456 Oak Avenue, Townsville",
});

// User 3
User.create({
  id: nanoid(),
  name: "Bob Anderson",
  email: "bob.anderson@example.com",
  password: "123456",
  phoneNumber: "+6285555555555",
  address: "789 Pine Street, Villagetown",
});

// User 4
User.create({
  id: nanoid(),
  name: "Sophia Lee",
  email: "sophia.lee@example.com",
  password: "123456",
  phoneNumber: "+6288765432109",
  address: "101 Maple Avenue, Hamletville",
});

// User 5
User.create({
  id: nanoid(),
  name: "Michael Chen",
  email: "michael.chen@example.com",
  password: "123456",
  phoneNumber: "+6281111222233",
  address: "222 Elm Street, Villagetown",
});
