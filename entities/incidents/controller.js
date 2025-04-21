import Incident from "./model.js";


export const createIncident = async (data) => {
  try {
    const incident = await Incident.create(data);
    console.log("incident created:", incident);
    return incident;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating incident");
  }
};

export const getAllIncidents = async () => {
  try {
    const incidents = await Incident.find().populate("implicados");
    console.log("incidents found:", incidents);
    return incidents;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting incidents");
  }
}

export const getIncidentById = async (id) => {
    try {
        const incident = await Incident.findById({id}).populate("implicados");
        if (!incident) throw new Error("Incident not found");
        return incident;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error getting incident");
    }
}