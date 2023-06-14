import { describe, it, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import AsyncHelloWorld from "./AsyncHelloWorld.vue";

describe("AsyncHelloWorld", () => {
  it("Updates the job count ref when the number input is changed", () => {
    const hello = mount(AsyncHelloWorld);
    const jobCountInput = hello.find("input[name=\"jobs\"]");
    jobCountInput.setValue('4');
    jobCountInput.trigger('change');
    expect(hello.vm.jobCount).toBe(4);
  });

  it('renders a card for each job', async () => {
    const hello = mount(AsyncHelloWorld);
    await flushPromises();
    const jobCards = hello.findAll('.job');
    expect(jobCards.length).toBe(3);
  });
});