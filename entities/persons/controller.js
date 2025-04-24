import { removeEmptyKeys } from "../../core/utils.js";
import Person from "./model.js";

export const createPerson = async (data) => {
  try {
    const person = await Person.create(data);
    return person;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating person");
  }
};

export const getAllPersons = async () => {
  try {
    const persons = await Person.find();
    return persons;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting persons");
  }
};

export const getPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    if (!person) throw new Error("Person not found");
    return person;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting person");
  }
};

export const updatePerson = async (id, data) => {
  const person = await Person.find({ _id: id });
  if (!person) throw new Error("Person not found");
  const updatedPerson = {
    ...person,
    ...removeEmptyKeys(data),
  };
  try {
    return Person.updateOne(
      { _id: id },
      updatedPerson,
      { new: true }
    );
  }
    catch (error) {
        console.log(error);
        throw new Error("Error updating person");
    }
};

export const deletePerson = async (id) => {
  try {
    const person = await Person.findByIdAndDelete(id);
    if (!person) throw new Error("Person not found");
    return person.nombre + " eliminado.";
  } catch (error) {
    console.log(error);
    throw new Error("Error deleting person");
  }
}
