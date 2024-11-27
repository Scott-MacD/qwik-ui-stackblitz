
import { isServer } from "@builder.io/qwik/build";
import { usePopover, Popover } from "@qwik-ui/headless";
import { component$, useSignal, $, useId, useTask$, Slot, useContext } from "@builder.io/qwik";
import { myContext } from ".";

export default component$(() => {
  
      const context = useContext(myContext);
      const id = useId();
      const { showPopover, hidePopover } = usePopover(id);
  
      useTask$(async ({ track }) => {
          track(() => context.isTriggered.value);
  
          console.log(context.isTriggered.value);
      
          if (isServer) return;
      
          if (context.isTriggered.value) {
              showPopover();
              console.log('show');
          } else {
              hidePopover();
              console.log('hide');
          }
      });
  
      return (
          <Popover.Root id={id} manual bind:anchor={context.triggerRef}>
              <Popover.Panel>
                  
                  <Slot />
  
              </Popover.Panel>
          </Popover.Root>
      );
  
  });