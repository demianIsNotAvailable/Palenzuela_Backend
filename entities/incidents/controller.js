import { removeEmptyKeys } from "../../core/utils.js";
import Incident from "./model.js";


export const createIncident = async (data) => {
  try {
    const incident = await Incident.create(data);
    return incident;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating incident");
  }
};

export const getAllIncidents = async () => {
  try {
    const incidents = await Incident.find();
    return incidents;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting incidents");
  }
}

export const getIncidentById = async (id) => {
    try {
        const incident = await Incident.findById({id});
        if (!incident) throw new Error("Incident not found");
        return incident;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error getting incident");
    }
}

export const updateIncident = async (id, data) => {
    const incident = await Incident.find({ _id: id });
    if (!incident) throw new Error("Incident not found");
    const updatedIncident = {
        ...incident,
        ...removeEmptyKeys(data),
    };
    try {
        return Incident.updateOne(
            { _id: id },
            updatedIncident,
            { new: true }
        );
    }
    catch (error) {
        console.log(error);
        throw new Error("Error updating incident");
    }
}

export const deleteIncident = async (id) => {
    try {
        const incident = await Incident.findByIdAndDelete(id);
        if (!incident) throw new Error("Incident not found");
        return incident.incidente + " eliminado.";
    } catch (error) {
        console.log(error);
        throw new Error("Error deleting incident");
    }
}
