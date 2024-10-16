import { Day } from 'date-fns';
declare let __VLS_typeProps: {
    start: Day;
    display: Date;
};
declare const __VLS_defaults: {
    modelValue: Date;
};
type __VLS_PublicProps = {
    modelValue?: typeof __VLS_defaults['modelValue'];
} & typeof __VLS_typeProps;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: Date) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
