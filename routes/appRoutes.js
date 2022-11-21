import {
  addNewFile,
  getFiles,
  getFileWithId,
  updateFile,
  deleteFile,
} from "../controllers/medias/fileController";

import {
  getVeille,
  updateVeille,
} from "../controllers/veille/veilleController";

import {
  addNewEvent,
  getEvents,
  getEventWithId,
  updateEvent,
  deleteEvent,
} from "../controllers/medias/eventController";

import {
  getDisplay,
  updateDisplay,
  addNewDisplay,
} from "../controllers/medias/displayController";

import {
  addNewUser,
  getUsers,
  getUserWithId,
  updateUser,
  deleteUser,
} from "../controllers/login/userController";
import {
  addNewTruck,
  getTrucks,
  getTruckWithId,
  updateTruck,
  deleteTruck,
} from "../controllers/truck/truckController";

import {
  addNewMode,
  getModes,
  getModeWithId,
  updateMode,
  deleteMode,
} from "../controllers/mode/modeController";

import {
  allAccess,
  userBoard,
  adminBoard,
  superuserBoard,
} from "../controllers/login/userController";
const controller = require("../controllers/login/authController");
import { authentication, verifySignUp } from "../middleware";

const routes = (app) => {
  app
    .route("/modes")
    //GET mode
    .get(getModes)
    
     // POST mode
     .post(addNewMode);
        
  app
    .route("/mode/:modeId")
    // Update mode
    .put(updateMode);

  app
    .route("/veille")
    //GET endpoint
    .get(getVeille);

  app
    .route("/veille/:veilleId")
    // Update veille
    .put(updateVeille);

  app
    .route("/files")
    //GET endpoint
    .get(getFiles)

    // POST endpoint
    .post(addNewFile);

  app
    .route("/file/:FileId")
    // Get a specific file
    .get(getFileWithId)

    // Update a specific file
    .put(updateFile)

    // Deleter a specific file
    .delete(deleteFile);
  app
    .route("/trucks")
    //GET endpoint
    .get(getTrucks)

    // POST endpoint
    .post(addNewTruck);

  app
    .route("/truck/:TruckId")
    // Get a specific file
    .get(getTruckWithId)

    // Update a specific file
    .put(updateTruck)

    // Deleter a specific file
    .delete(deleteTruck);
  app
    .route("/event/:EventId")
    // Get a specific file
    .get(getEventWithId)

    // Update a specific file
    .put(updateEvent)

    // Deleter a specific file
    .delete(deleteEvent);

  app
    .route("/users")
    //GET endpoint
    .get(getUsers)

    // POST endpoint
    .post(addNewUser);
  app
    .route("/user/:UserId")
    // Get a specific file
    .get(getUserWithId)

    // Update a specific file
    .put(updateUser)

    // Deleter a specific file
    .delete(deleteUser);

  app.route("/medias");

  app.route("/all").get(allAccess);
  app.route("/user").get(userBoard);
  app.route("/admin").get(adminBoard);
  app.route("/superuser").get(superuserBoard);

  app.post(
    "/auth/signup",
    [verifySignUp.checkDuplicateUsername, verifySignUp.checkRolesExisted],
    controller.signup
  );

  app.post("/auth/signin", controller.signin);
};
export default routes;
