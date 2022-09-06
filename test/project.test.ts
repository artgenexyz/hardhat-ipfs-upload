// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
// import path from "path";
// import { TaskDefinition } from "hardhat/types";

// import { ExampleHardhatRuntimeEnvironmentField } from "../src/ExampleHardhatRuntimeEnvironmentField";}

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the upload task", function () {
      assert.exists(this.hre.tasks.upload);
    });

    it("Should have action setup", function () {
      assert.exists(this.hre.tasks.upload.action);
    });
  });

  describe("HardhatConfig extension", function () {
    useEnvironment("hardhat-project");

    // xit("Should add the newPath to the config", function () {
    //   assert.equal(
    //     this.hre.config.paths.newPath,
    //     path.join(process.cwd(), "asd")
    //   );
    // });
  });
});

describe("Unit tests examples", function () {
  describe("ExampleHardhatRuntimeEnvironmentField", function () {
    useEnvironment("hardhat-project");

    describe("Task", function () {
      it("Should say hello", function () {
        const task = this.hre.tasks.upload;

        assert.equal(task.name, "upload");
        assert.equal(
          task.description,
          "Uploads a compiled contract to IPFS and returns deploy link"
        );

        assert.exists(task.paramDefinitions.args);
        assert.exists(task.paramDefinitions.ascii);

        assert.equal(task.positionalParamDefinitions[0].name, "contract");
      });
    });
  });
});
