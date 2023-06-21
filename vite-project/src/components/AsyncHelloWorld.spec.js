import { describe, it, expect, vi } from "vitest";
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

  it('calls the getJobs fn when the button is click', async () => {
    const hello = mount(AsyncHelloWorld);
    const spy = vi.spyOn(hello.vm, 'getJobs');
    const button = hello.find('button');
    await button.trigger('click');
    await flushPromises();
    expect(spy).toHaveBeenCalled();
  });
});