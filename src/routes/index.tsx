import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MyComponent from "~/components/my-component";

export default component$(() => {

  const items = useStore<{label: string, content: string}[]>([
    {label: "Initial trigger", content: "Initial poppover. Should work fine."}
  ]);

  return (
    <>
      <h1>Triggers</h1>
      <div>{items.map((item, i) => (
        <MyComponent label={item.label}>{item.content}</MyComponent>
      ))}</div>

      <h2>Add Item</h2>
      <button onClick$={() => {
        items.push({label: `Trigger ${items.length}`, content: `Popover for item ${items.length}`})
      }}>Add another item</button>
    </>
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
