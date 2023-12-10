import { defineComponent, toRefs } from "vue";
import { buttonProps, type ButtonProps } from "./button-type";

export default defineComponent({
  name: "LinButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props);
    const blockClass = block.value ? "s-btn--block" : "";
    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`}
        >
          {slots.default ? slots.default() : "按钮"}
        </button>
      );
    };
  },
});
