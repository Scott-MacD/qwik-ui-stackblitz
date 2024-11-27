import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MyComponent from "~/components/my-component";

export default component$(() => {

  return (
    <div>
      <MyComponent label="Test">Poppover Content</MyComponent>
    </div>
  );

});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
