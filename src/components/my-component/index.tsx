import { Signal, Slot, component$, createContextId, useContextProvider, useSignal } from "@builder.io/qwik";
import MyTrigger from "./my-trigger";
import MyPoppover from "./my-poppover";

export const myContext = createContextId<ReturnType<typeof useMyContext>>('my-context');

export function useMyContext()  {
    const context = {
        isTriggered: useSignal(false),
        triggerRef: useSignal<HTMLElement>()
    };

    useContextProvider(myContext, context);

    return context;
}

export default component$((props: {
    label: string
}) => {

    useMyContext();

    return <div>
        <MyTrigger>{props.label}</MyTrigger>
        <MyPoppover>
            <Slot />
        </MyPoppover>
    </div>

});