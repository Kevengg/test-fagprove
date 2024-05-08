import app from "../src/app";
import request from "supertest";

const pingTest = async () => {
    await request(app).get("/ping").expect(200).expect({ ping: "pong" });
};

export default pingTest;
