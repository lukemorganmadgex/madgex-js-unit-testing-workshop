import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("Hello World", () => {
  it("Displays the title in a H1 tag", () => {
    const hello = mount(HelloWorld, {
      props: {
        msg: "Unit test",
      },
    });

    const title = hello.find("h1");
    expect(title.text()).toBe("Unit test");
  });
});