import { Slot, component$, useContext } from "@builder.io/qwik";
import { myContext } from ".";

export default component$(() => {

    const context = useContext(myContext);

    return (
        <button ref={context.triggerRef} type="button" preventdefault:click onPointerDown$={() => {
            context.isTriggered.value = !context.isTriggered.value
        }}>
            <Slot />
        </button>
    );
  
});